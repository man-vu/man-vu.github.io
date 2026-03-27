// ============================================================
// main.js — Entry point, event wiring, game loop
// ============================================================

import { CELL_SIZE, LEVELS, BALANCE } from './config.js';
import { Game } from './game.js';
import { Renderer } from './renderer.js';
import { UI } from './ui.js';
import { AudioManager } from './audio.js';

// --- Init ---
const canvas = document.getElementById('gameCanvas');
const game = new Game();
const renderer = new Renderer(canvas);
const ui = new UI();
const audio = new AudioManager();

// Init audio on first user interaction
document.addEventListener('pointerdown', () => audio.init(), { once: true });

let mousePos = { x: 0, y: 0 };
let lastTime = 0;

// --- Screen Flow ---
function showMenu() {
    game.buildMode = null;
    ui.showLevelSelect(game.unlockedLevels);
}

function startLevel(levelIndex) {
    game.loadLevel(levelIndex);
    ui.showGame();
    ui.initBuildButtons(onBuildSelect);
    ui.updateStats(game);
    ui.updateSelection(null, 0);
    ui.updateBuildModeHighlight(null);
}

showMenu();

// --- Level Select ---
ui.onLevelSelect((levelIndex) => {
    startLevel(levelIndex);
});

// --- Build Mode ---
function onBuildSelect(typeKey) {
    if (game.buildMode === typeKey) {
        game.buildMode = null;
    } else {
        game.buildMode = typeKey;
        game.selectTower(null);
        ui.updateSelection(null, 0);
    }
    ui.updateBuildModeHighlight(game.buildMode);
}

// --- Canvas Events ---
canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mousePos.x = e.clientX - rect.left;
    mousePos.y = e.clientY - rect.top;
});

canvas.addEventListener('mouseleave', () => {
    mousePos.x = -100;
    mousePos.y = -100;
});

canvas.addEventListener('mousedown', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const gridX = Math.floor(x / CELL_SIZE);
    const gridY = Math.floor(y / CELL_SIZE);

    if (game.buildMode) {
        if (game.tryBuild(gridX, gridY)) {
            ui.updateStats(game);
            ui.updateBuildModeHighlight(null);
        }
    } else {
        const tower = game.getTowerAt(gridX, gridY);
        game.selectTower(tower);
        ui.updateSelection(tower, game.money);
    }
});

// --- UI Button Events ---
ui.startBtn.addEventListener('click', () => {
    game.startWave();
    ui.updateStats(game);
});

ui.upgradeBtn.addEventListener('click', () => {
    if (game.upgradeSelected()) {
        ui.updateStats(game);
        ui.updateSelection(game.selectedTower, game.money);
    }
});

ui.sellBtn.addEventListener('click', () => {
    if (game.sellSelected()) {
        ui.updateStats(game);
        ui.updateSelection(null, 0);
    }
});

ui.nextLevelBtn.addEventListener('click', () => {
    const next = game.levelIndex + 1;
    if (next < LEVELS.length) {
        startLevel(next);
    } else {
        showMenu();
    }
});

ui.retryBtn.addEventListener('click', () => {
    startLevel(game.levelIndex);
});

ui.backBtn.addEventListener('click', () => {
    showMenu();
});

// --- Keyboard shortcuts ---
document.addEventListener('keydown', (e) => {
    if (game.status === 'gameover' || game.status === 'levelcomplete') return;

    const keys = { '1': 'arrow', '2': 'cannon', '3': 'frost', '4': 'sniper' };
    if (keys[e.key]) {
        onBuildSelect(keys[e.key]);
    }
    if (e.key === 'Escape') {
        game.buildMode = null;
        game.selectTower(null);
        ui.updateBuildModeHighlight(null);
        ui.updateSelection(null, 0);
    }
    if (e.key === ' ' || e.key === 'Enter') {
        if (game.status === 'idle') {
            game.startWave();
            ui.updateStats(game);
        }
    }
});

// --- Game Loop ---
function gameLoop(timestamp) {
    if (!lastTime) lastTime = timestamp;
    const deltaTime = Math.min(timestamp - lastTime, 50); // Cap delta to prevent spiral
    lastTime = timestamp;

    // Update
    game.update(deltaTime);

    // Drain audio event queue
    for (const ev of game.events) {
        audio.play(ev.type, ev);
    }
    game.events.length = 0;

    // Render
    if (game.level) {
        renderer.clear(game.level.bgColor);
        renderer.drawGrid(game.level.bgColor);
        renderer.drawPath(game.level.gridPath, game.level.pathColor);
        renderer.drawDecorations(game.level.decorations);
        renderer.drawTowers(game.towers, game.selectedTower);
        renderer.drawBuildPreview(mousePos, game.buildMode, game.level.gridPath, game.towers);
        renderer.drawEnemies(game.enemies);
        renderer.drawProjectiles(game.projectiles);
        renderer.drawParticles(game.particles);

        if (game.status === 'playing' || (game.status === 'idle' && game.wave > 0)) {
            renderer.drawWaveInfo(game.wave, BALANCE.wavesPerLevel, game.enemiesRemaining);
        }

        if (game.status === 'gameover') {
            renderer.drawGameOver();
        } else if (game.status === 'levelcomplete') {
            renderer.drawLevelComplete(game.level.name);
        }
    }

    // Update UI (only when a level is active)
    if (game.level) {
        ui.updateStats(game);
    }
    if (game.selectedTower) {
        ui.updateSelection(game.selectedTower, game.money);
    }

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
