// ============================================================
// game.js — Core game logic: state machine, spawning, combat
// ============================================================

import { CELL_SIZE, BALANCE, TOWER_TYPES, LEVELS, generateWave } from './config.js';
import { Tower, Enemy, Projectile, Particle, createDeathEffect } from './entities.js';
import { distance } from './utils.js';

export class Game {
    constructor() {
        this.reset();
        this.unlockedLevels = this._loadProgress();
    }

    reset() {
        this.money = BALANCE.startingMoney;
        this.lives = BALANCE.startingLives;
        this.wave = 0;
        this.status = 'idle'; // idle, playing, gameover, levelcomplete
        this.towers = [];
        this.enemies = [];
        this.projectiles = [];
        this.particles = [];
        this.events = []; // audio/effect event queue, drained each frame by main.js
        this.selectedTower = null;
        this.buildMode = null;
        this.levelIndex = 0;
        this.level = null;
        this.pixelPath = [];
        this.spawnQueue = [];
        this.spawnTimer = 0;
        this.spawnInterval = 1000;
        this.totalEnemiesThisWave = 0;
    }

    loadLevel(levelIndex) {
        this.reset();
        this.levelIndex = levelIndex;
        this.level = LEVELS[levelIndex];
        this.pixelPath = this.level.gridPath.map(p => ({
            x: p.x * CELL_SIZE + CELL_SIZE / 2,
            y: p.y * CELL_SIZE + CELL_SIZE / 2,
        }));
    }

    // --- Wave Management ---
    startWave() {
        if (this.status !== 'idle') return false;

        this.wave++;
        if (this.wave > BALANCE.wavesPerLevel) {
            this.status = 'levelcomplete';
            this._unlockNext();
            return false;
        }

        this.status = 'playing';
        this.events.push({ type: 'wave_start' });
        const waveData = generateWave(this.levelIndex, this.wave);

        // Build spawn queue
        this.spawnQueue = [];
        waveData.enemies.forEach(group => {
            for (let i = 0; i < group.count; i++) {
                this.spawnQueue.push({
                    type: group.type,
                    hpScale: waveData.hpScale,
                    speedScale: waveData.speedScale,
                });
            }
        });

        // Shuffle for variety
        for (let i = this.spawnQueue.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.spawnQueue[i], this.spawnQueue[j]] = [this.spawnQueue[j], this.spawnQueue[i]];
        }

        this.spawnInterval = waveData.spawnInterval;
        this.spawnTimer = this.spawnInterval; // Spawn first enemy immediately
        this.totalEnemiesThisWave = this.spawnQueue.length;

        return true;
    }

    // --- Building ---
    tryBuild(gridX, gridY) {
        if (!this.buildMode) return false;
        const typeDef = TOWER_TYPES[this.buildMode];
        if (this.money < typeDef.cost) return false;

        const onPath = this.level.gridPath.some(p => p.x === gridX && p.y === gridY);
        if (onPath) return false;

        const occupied = this.towers.some(t => t.gridX === gridX && t.gridY === gridY);
        if (occupied) return false;

        if (gridX < 0 || gridX >= 16 || gridY < 0 || gridY >= 12) return false;

        this.money -= typeDef.cost;
        this.towers.push(new Tower(gridX, gridY, this.buildMode));
        this.buildMode = null;
        this.events.push({ type: 'build' });
        return true;
    }

    selectTower(tower) {
        this.selectedTower = tower;
    }

    upgradeSelected() {
        const t = this.selectedTower;
        if (!t || !t.canUpgrade) return false;
        if (this.money < t.upgradeCost) return false;

        this.money -= t.upgradeCost;
        t.upgrade();
        this.events.push({ type: 'upgrade' });
        return true;
    }

    sellSelected() {
        const t = this.selectedTower;
        if (!t) return false;

        this.money += t.sellValue;
        this.towers = this.towers.filter(tw => tw !== t);
        this.selectedTower = null;
        this.events.push({ type: 'sell' });
        return true;
    }

    // --- Main Update ---
    update(deltaTime) {
        if (this.status === 'gameover' || this.status === 'levelcomplete') return;

        // Spawn enemies
        if (this.status === 'playing' && this.spawnQueue.length > 0) {
            this.spawnTimer += deltaTime;
            if (this.spawnTimer >= this.spawnInterval) {
                const data = this.spawnQueue.shift();
                this.enemies.push(new Enemy(data.type, this.pixelPath, data.hpScale, data.speedScale));
                this.spawnTimer = 0;
            }
        }

        // Check wave end
        if (this.status === 'playing' && this.spawnQueue.length === 0 && this.enemies.length === 0) {
            this.status = 'idle';

            // Wave clear bonus
            this.money += BALANCE.waveClearBonus;

            // Interest
            const interest = Math.min(
                Math.floor(this.money * BALANCE.interestRate),
                BALANCE.interestCap
            );
            this.money += interest;

            // Floating text for bonus
            this.particles.push(
                ...this._makeTextParticles(400, 300, `+$${BALANCE.waveClearBonus} bonus`, '#4caf50')
            );
            if (interest > 0) {
                this.particles.push(
                    ...this._makeTextParticles(400, 330, `+$${interest} interest`, '#ffd54f')
                );
            }

            // Check if all waves done
            if (this.wave >= BALANCE.wavesPerLevel) {
                this.status = 'levelcomplete';
                this._unlockNext();
                this.events.push({ type: 'level_complete' });
            } else {
                this.events.push({ type: 'wave_complete' });
            }
        }

        // Update enemies
        for (let i = this.enemies.length - 1; i >= 0; i--) {
            const e = this.enemies[i];
            e.update(deltaTime);

            if (!e.alive) {
                if (e.reachedEnd) {
                    this.lives--;
                    this.events.push({ type: 'enemy_end' });
                    if (this.lives <= 0) {
                        this.lives = 0;
                        this.status = 'gameover';
                        this.events.push({ type: 'game_over' });
                    }
                }
                this.enemies.splice(i, 1);
            }
        }

        // Tower AI
        this.towers.forEach(tower => {
            tower.lastFired += deltaTime;

            // Find target (furthest along path)
            let bestTarget = null;
            let bestPathIndex = -1;

            for (const e of this.enemies) {
                if (!e.alive) continue;
                const d = distance(tower.x, tower.y, e.x, e.y);
                if (d <= tower.range && e.pathIndex > bestPathIndex) {
                    bestPathIndex = e.pathIndex;
                    bestTarget = e;
                }
            }

            tower.target = bestTarget;

            // Rotate turret
            if (bestTarget) {
                tower.angle = Math.atan2(bestTarget.y - tower.y, bestTarget.x - tower.x) + Math.PI / 2;
            }

            // Fire
            if (bestTarget && tower.lastFired >= tower.cooldown) {
                tower.lastFired = 0;
                this.projectiles.push(new Projectile(tower, bestTarget));
                this.events.push({ type: 'fire_' + tower.typeKey });
            }
        });

        // Update projectiles
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const p = this.projectiles[i];
            p.update();

            if (!p.alive) {
                if (p.hit) {
                    this._handleProjectileHit(p);
                }
                this.projectiles.splice(i, 1);
            }
        }

        // Update particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            this.particles[i].update(deltaTime);
            if (!this.particles[i].alive) {
                this.particles.splice(i, 1);
            }
        }
    }

    _handleProjectileHit(projectile) {
        const { hitX, hitY, damage, splash, slowFactor, slowDuration } = projectile;

        if (splash > 0) {
            // Splash damage
            for (const e of this.enemies) {
                if (!e.alive) continue;
                const d = distance(hitX, hitY, e.x, e.y);
                if (d <= splash) {
                    const falloff = 1 - (d / splash) * 0.5;
                    const dmg = Math.floor(damage * falloff);
                    e.takeDamage(dmg);
                    this.particles.push(...this._makeTextParticles(e.x, e.y - 15, `-${dmg}`, '#ff8a65'));
                    if (slowFactor) e.applySlow(slowFactor, slowDuration);
                    this._checkKill(e);
                }
            }
            // Splash ring effect
            this.particles.push(new Particle(hitX, hitY, '#ff7043', 'ring'));
            this.events.push({ type: 'hit_splash' });
        } else {
            // Single target
            const target = projectile.target;
            if (target.alive) {
                target.takeDamage(damage);
                this.particles.push(...this._makeTextParticles(target.x, target.y - 15, `-${damage}`, '#fff'));
                if (slowFactor) target.applySlow(slowFactor, slowDuration);
                this.events.push({ type: 'hit_normal' });
                this._checkKill(target);
            }
        }
    }

    _checkKill(enemy) {
        if (!enemy.alive && !enemy.rewarded) {
            enemy.rewarded = true;
            this.money += enemy.reward;
            this.particles.push(...createDeathEffect(enemy.x, enemy.y, enemy.color));
            this.particles.push(...this._makeTextParticles(enemy.x, enemy.y - 25, `+$${enemy.reward}`, '#fdd835'));
            this.events.push({ type: 'enemy_death', enemyType: enemy.typeKey });
        }
    }

    _makeTextParticles(x, y, text, color) {
        const p = new Particle(x, y, color, 'text');
        p.text = text;
        return [p];
    }

    _unlockNext() {
        const next = this.levelIndex + 1;
        if (next < LEVELS.length && !this.unlockedLevels.includes(next)) {
            this.unlockedLevels.push(next);
        }
        this._saveProgress();
    }

    _loadProgress() {
        try {
            const data = localStorage.getItem('td_progress');
            return data ? JSON.parse(data) : [0];
        } catch {
            return [0];
        }
    }

    _saveProgress() {
        try {
            localStorage.setItem('td_progress', JSON.stringify(this.unlockedLevels));
        } catch { /* ignore */ }
    }

    // --- Queries ---
    get enemiesRemaining() {
        return this.spawnQueue.length + this.enemies.length;
    }

    getTowerAt(gridX, gridY) {
        return this.towers.find(t => t.gridX === gridX && t.gridY === gridY) || null;
    }
}
