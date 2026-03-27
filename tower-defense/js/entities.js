// ============================================================
// entities.js — Tower, Enemy, Projectile, Particle classes
// ============================================================

import { TOWER_TYPES, ENEMY_TYPES, CELL_SIZE } from './config.js';

// --- Tower ---
export class Tower {
    constructor(gridX, gridY, typeKey) {
        const typeDef = TOWER_TYPES[typeKey];
        const stats = typeDef.levels[0];

        this.gridX = gridX;
        this.gridY = gridY;
        this.x = gridX * CELL_SIZE + CELL_SIZE / 2;
        this.y = gridY * CELL_SIZE + CELL_SIZE / 2;
        this.typeKey = typeKey;
        this.level = 0; // 0-indexed (0 = level 1)
        this.damage = stats.damage;
        this.range = stats.range;
        this.cooldown = stats.cooldown;
        this.splash = stats.splash || 0;
        this.slowFactor = stats.slowFactor || 0;
        this.slowDuration = stats.slowDuration || 0;
        this.lastFired = 0;
        this.invested = typeDef.cost;
        this.target = null;
        this.angle = 0; // turret rotation
    }

    get typeDef() {
        return TOWER_TYPES[this.typeKey];
    }

    get color() {
        return this.typeDef.colors[this.level];
    }

    get maxLevel() {
        return this.typeDef.levels.length - 1;
    }

    get canUpgrade() {
        return this.level < this.maxLevel;
    }

    get upgradeCost() {
        if (!this.canUpgrade) return Infinity;
        return this.typeDef.levels[this.level + 1].upgradeCost;
    }

    get sellValue() {
        return Math.floor(this.invested * 0.7);
    }

    upgrade() {
        if (!this.canUpgrade) return false;
        this.level++;
        const stats = this.typeDef.levels[this.level];
        this.damage = stats.damage;
        this.range = stats.range;
        this.cooldown = stats.cooldown;
        this.splash = stats.splash || 0;
        this.slowFactor = stats.slowFactor || 0;
        this.slowDuration = stats.slowDuration || 0;
        this.invested += stats.upgradeCost;
        return true;
    }
}

// --- Enemy ---
export class Enemy {
    constructor(typeKey, path, hpScale, speedScale) {
        const typeDef = ENEMY_TYPES[typeKey];

        this.typeKey = typeKey;
        this.hp = Math.floor(typeDef.hp * hpScale);
        this.maxHp = this.hp;
        this.baseSpeed = typeDef.speed * speedScale;
        this.speed = this.baseSpeed;
        this.reward = typeDef.reward;
        this.color = typeDef.color;
        this.outlineColor = typeDef.outlineColor;
        this.size = typeDef.size;
        this.shape = typeDef.shape;
        this.name = typeDef.name;

        // Position
        this.x = path[0].x;
        this.y = path[0].y;
        this.pathIndex = 0;
        this.path = path;

        // Slow effect
        this.slowTimer = 0;
        this.slowAmount = 1;

        // Visual
        this.hitFlash = 0;
        this.alive = true;
    }

    update(deltaTime) {
        if (!this.alive) return;

        // Slow decay
        if (this.slowTimer > 0) {
            this.slowTimer -= deltaTime;
            this.speed = this.baseSpeed * this.slowAmount;
            if (this.slowTimer <= 0) {
                this.speed = this.baseSpeed;
                this.slowAmount = 1;
            }
        }

        // Hit flash decay
        if (this.hitFlash > 0) this.hitFlash -= deltaTime;

        // Move along path
        const target = this.path[this.pathIndex + 1];
        if (!target) {
            this.alive = false;
            this.reachedEnd = true;
            return;
        }

        const dx = target.x - this.x;
        const dy = target.y - this.y;
        const dist = Math.hypot(dx, dy);

        if (dist <= this.speed) {
            this.x = target.x;
            this.y = target.y;
            this.pathIndex++;
        } else {
            this.x += (dx / dist) * this.speed;
            this.y += (dy / dist) * this.speed;
        }
    }

    takeDamage(amount) {
        this.hp -= amount;
        this.hitFlash = 100;
        if (this.hp <= 0) {
            this.hp = 0;
            this.alive = false;
        }
    }

    applySlow(factor, duration) {
        // Only apply if this slow is stronger
        if (factor < this.slowAmount || this.slowTimer <= 0) {
            this.slowAmount = factor;
            this.slowTimer = duration;
            this.speed = this.baseSpeed * factor;
        }
    }
}

// --- Projectile ---
export class Projectile {
    constructor(tower, target) {
        this.x = tower.x;
        this.y = tower.y;
        this.target = target;
        this.damage = tower.damage;
        this.speed = tower.typeDef.projectileSpeed;
        this.color = tower.typeDef.projectileColor;
        this.splash = tower.splash;
        this.slowFactor = tower.slowFactor;
        this.slowDuration = tower.slowDuration;
        this.alive = true;
        this.towerType = tower.typeKey;
    }

    update() {
        if (!this.alive || !this.target.alive) {
            this.alive = false;
            return;
        }

        const dx = this.target.x - this.x;
        const dy = this.target.y - this.y;
        const dist = Math.hypot(dx, dy);

        if (dist <= this.speed + 5) {
            this.alive = false;
            this.hit = true;
            this.hitX = this.target.x;
            this.hitY = this.target.y;
        } else {
            this.x += (dx / dist) * this.speed;
            this.y += (dy / dist) * this.speed;
        }
    }
}

// --- Particle ---
export class Particle {
    constructor(x, y, color, type = 'spark') {
        this.x = x;
        this.y = y;
        this.color = color;
        this.type = type;
        this.alive = true;

        if (type === 'spark') {
            this.vx = (Math.random() - 0.5) * 3;
            this.vy = (Math.random() - 0.5) * 3;
            this.life = 300 + Math.random() * 200;
            this.maxLife = this.life;
            this.size = 2 + Math.random() * 2;
        } else if (type === 'text') {
            this.vx = 0;
            this.vy = -0.8;
            this.life = 800;
            this.maxLife = this.life;
            this.text = '';
            this.size = 14;
        } else if (type === 'ring') {
            this.vx = 0;
            this.vy = 0;
            this.life = 400;
            this.maxLife = this.life;
            this.size = 5;
            this.maxSize = 40;
        }
    }

    update(deltaTime) {
        this.life -= deltaTime;
        if (this.life <= 0) {
            this.alive = false;
            return;
        }

        this.x += this.vx;
        this.y += this.vy;

        if (this.type === 'ring') {
            const progress = 1 - this.life / this.maxLife;
            this.size = this.maxSize * progress;
        }
    }
}

// --- FloatingText (convenience factory) ---
export function createDamageText(x, y, text, color = '#fff') {
    const p = new Particle(x, y - 10, color, 'text');
    p.text = text;
    return p;
}

export function createDeathEffect(x, y, color) {
    const particles = [];
    for (let i = 0; i < 8; i++) {
        particles.push(new Particle(x, y, color, 'spark'));
    }
    const ring = new Particle(x, y, color, 'ring');
    particles.push(ring);
    return particles;
}
