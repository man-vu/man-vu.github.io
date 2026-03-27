// ============================================================
// ui.js — DOM management, screen transitions, tower panel
// ============================================================

import { TOWER_TYPES, LEVELS, BALANCE } from './config.js';

export class UI {
    constructor() {
        // Screens
        this.levelSelect = document.getElementById('level-select');
        this.gameScreen = document.getElementById('game-screen');

        // Stats
        this.moneyEl = document.getElementById('money');
        this.livesEl = document.getElementById('lives');
        this.waveEl = document.getElementById('wave');
        this.levelNameEl = document.getElementById('level-name');

        // Build buttons container
        this.buildButtons = document.getElementById('build-buttons');

        // Selection panel
        this.selectionInfo = document.getElementById('selection-info');
        this.upgradeBtn = document.getElementById('upgrade-tower');
        this.upgradeCostEl = document.getElementById('upgrade-cost');
        this.sellBtn = document.getElementById('sell-tower');
        this.sellValueEl = document.getElementById('sell-value');

        // Action buttons
        this.startBtn = document.getElementById('start-wave');
        this.nextLevelBtn = document.getElementById('next-level');
        this.retryBtn = document.getElementById('retry-level');
        this.backBtn = document.getElementById('back-to-menu');

        // Level cards container
        this.levelGrid = document.getElementById('level-grid');
    }

    // --- Screen Management ---
    showLevelSelect(unlockedLevels) {
        this.levelSelect.classList.remove('hidden');
        this.gameScreen.classList.add('hidden');
        this._buildLevelCards(unlockedLevels);
    }

    showGame() {
        this.levelSelect.classList.add('hidden');
        this.gameScreen.classList.remove('hidden');
    }

    _buildLevelCards(unlockedLevels) {
        this.levelGrid.innerHTML = '';
        LEVELS.forEach((level, i) => {
            const card = document.createElement('div');
            card.className = 'level-card';
            const unlocked = unlockedLevels.includes(i);

            if (!unlocked) card.classList.add('locked');

            card.innerHTML = `
                <div class="level-card-header" style="background-color: ${level.bgColor}">
                    <span class="level-number">${level.id}</span>
                </div>
                <div class="level-card-body">
                    <h3>${level.name}</h3>
                    <p>${unlocked ? level.description : 'Complete previous level to unlock'}</p>
                </div>
            `;

            if (unlocked) {
                card.dataset.level = i;
                card.addEventListener('click', () => {
                    this._onLevelSelect?.(i);
                });
            }

            this.levelGrid.appendChild(card);
        });
    }

    onLevelSelect(callback) {
        this._onLevelSelect = callback;
    }

    // --- Build Buttons ---
    initBuildButtons(onBuildSelect) {
        this.buildButtons.innerHTML = '';
        this._buildBtnMap = {};

        Object.entries(TOWER_TYPES).forEach(([key, type]) => {
            const btn = document.createElement('button');
            btn.className = 'btn build-btn';
            btn.innerHTML = `
                <span class="tower-icon" style="background-color: ${type.colors[0]}"></span>
                <span class="tower-label">
                    <strong>${type.name}</strong>
                    <small>$${type.cost} - ${type.description}</small>
                </span>
            `;
            btn.addEventListener('click', () => onBuildSelect(key));
            this.buildButtons.appendChild(btn);
            this._buildBtnMap[key] = btn;
        });
    }

    // --- Update Methods ---
    updateStats(game) {
        this.moneyEl.textContent = game.money;
        this.livesEl.textContent = game.lives;
        this.waveEl.textContent = `${game.wave} / ${BALANCE.wavesPerLevel}`;
        if (game.level) this.levelNameEl.textContent = game.level.name;

        // Enable/disable build buttons by cost
        if (this._buildBtnMap) {
            Object.entries(TOWER_TYPES).forEach(([key, type]) => {
                if (this._buildBtnMap[key]) {
                    this._buildBtnMap[key].disabled = game.money < type.cost;
                }
            });
        }

        // Start wave button state
        this.startBtn.classList.toggle('hidden', game.status !== 'idle');
        this.nextLevelBtn.classList.toggle('hidden', game.status !== 'levelcomplete');
        this.retryBtn.classList.toggle('hidden', game.status !== 'gameover');
    }

    updateBuildModeHighlight(buildMode) {
        Object.entries(this._buildBtnMap || {}).forEach(([key, btn]) => {
            btn.classList.toggle('active', key === buildMode);
        });
    }

    updateSelection(tower, money) {
        if (tower) {
            const typeDef = TOWER_TYPES[tower.typeKey];
            const levelLabel = tower.level + 1;
            const maxLabel = tower.maxLevel + 1;

            let statsHtml = `
                <div class="sel-header">
                    <span class="sel-icon" style="background-color: ${tower.color}"></span>
                    <strong>${typeDef.name}</strong> Lv ${levelLabel}/${maxLabel}
                </div>
                <div class="sel-stats">
                    <span>Dmg: ${tower.damage}</span>
                    <span>Range: ${tower.range}</span>
                    <span>Rate: ${(1000 / tower.cooldown).toFixed(1)}/s</span>
                </div>
            `;

            if (tower.splash > 0) {
                statsHtml += `<div class="sel-stats"><span>Splash: ${tower.splash}px</span></div>`;
            }
            if (tower.slowFactor > 0) {
                statsHtml += `<div class="sel-stats"><span>Slow: ${Math.round((1 - tower.slowFactor) * 100)}%</span></div>`;
            }

            this.selectionInfo.innerHTML = statsHtml;

            // Upgrade button
            if (tower.canUpgrade) {
                this.upgradeBtn.classList.remove('hidden');
                this.upgradeCostEl.textContent = tower.upgradeCost;
                this.upgradeBtn.disabled = money < tower.upgradeCost;
            } else {
                this.upgradeBtn.classList.remove('hidden');
                this.upgradeBtn.disabled = true;
                this.upgradeCostEl.textContent = 'MAX';
            }

            // Sell button
            this.sellBtn.classList.remove('hidden');
            this.sellValueEl.textContent = tower.sellValue;
        } else {
            this.selectionInfo.innerHTML = '<p class="sel-empty">Click a tower to select it</p>';
            this.upgradeBtn.classList.add('hidden');
            this.sellBtn.classList.add('hidden');
        }
    }
}
