// ============================================================
// config.js — All game data definitions and balance constants
// ============================================================

export const CELL_SIZE = 50;
export const CANVAS_WIDTH = 800;
export const CANVAS_HEIGHT = 600;
export const COLS = CANVAS_WIDTH / CELL_SIZE;   // 16
export const ROWS = CANVAS_HEIGHT / CELL_SIZE;  // 12

// --- Balance Constants ---
export const BALANCE = {
    startingMoney: 150,
    startingLives: 20,
    waveClearBonus: 40,
    interestRate: 0.05,
    interestCap: 50,
    sellRefundRate: 0.7,
    bossWaveInterval: 5,
    wavesPerLevel: 10,
};

// --- Tower Definitions ---
// Each tower has base cost and per-level stats
export const TOWER_TYPES = {
    arrow: {
        name: 'Arrow Tower',
        description: 'Fast attacks, single target',
        cost: 50,
        levels: [
            { damage: 8,  range: 120, cooldown: 500,  splash: 0 },
            { damage: 14, range: 135, cooldown: 420,  splash: 0,  upgradeCost: 40 },
            { damage: 22, range: 150, cooldown: 350,  splash: 0,  upgradeCost: 75 },
        ],
        colors: ['#4fc3f7', '#29b6f6', '#0288d1'],
        shape: 'arrow',
        projectileColor: '#b3e5fc',
        projectileSpeed: 6,
    },
    cannon: {
        name: 'Cannon Tower',
        description: 'Splash damage, slow fire',
        cost: 100,
        levels: [
            { damage: 20, range: 100, cooldown: 1200, splash: 50 },
            { damage: 32, range: 110, cooldown: 1050, splash: 60, upgradeCost: 75 },
            { damage: 48, range: 120, cooldown: 900,  splash: 70, upgradeCost: 130 },
        ],
        colors: ['#ff7043', '#f4511e', '#d84315'],
        shape: 'cannon',
        projectileColor: '#ffab91',
        projectileSpeed: 4,
    },
    frost: {
        name: 'Frost Tower',
        description: 'Slows enemies in range',
        cost: 75,
        levels: [
            { damage: 4,  range: 110, cooldown: 800,  splash: 0, slowFactor: 0.5, slowDuration: 1500 },
            { damage: 7,  range: 125, cooldown: 700,  splash: 0, slowFactor: 0.4, slowDuration: 2000, upgradeCost: 50 },
            { damage: 12, range: 140, cooldown: 600,  splash: 0, slowFactor: 0.3, slowDuration: 2500, upgradeCost: 100 },
        ],
        colors: ['#80deea', '#4dd0e1', '#00acc1'],
        shape: 'frost',
        projectileColor: '#b2ebf2',
        projectileSpeed: 5,
    },
    sniper: {
        name: 'Sniper Tower',
        description: 'Huge damage, very long range',
        cost: 125,
        levels: [
            { damage: 45, range: 250, cooldown: 2000, splash: 0 },
            { damage: 70, range: 280, cooldown: 1700, splash: 0, upgradeCost: 100 },
            { damage: 110,range: 310, cooldown: 1400, splash: 0, upgradeCost: 175 },
        ],
        colors: ['#ce93d8', '#ab47bc', '#7b1fa2'],
        shape: 'sniper',
        projectileColor: '#e1bee7',
        projectileSpeed: 10,
    },
};

// --- Enemy Definitions ---
// Base stats — scaled by wave/level in generateWave()
export const ENEMY_TYPES = {
    scout: {
        name: 'Scout',
        hp: 30,
        speed: 2.2,
        reward: 8,
        color: '#66bb6a',
        outlineColor: '#2e7d32',
        size: 0.22,
        shape: 'triangle',
    },
    soldier: {
        name: 'Soldier',
        hp: 70,
        speed: 1.2,
        reward: 14,
        color: '#ef5350',
        outlineColor: '#b71c1c',
        size: 0.28,
        shape: 'square',
    },
    tank: {
        name: 'Tank',
        hp: 200,
        speed: 0.7,
        reward: 30,
        color: '#42a5f5',
        outlineColor: '#1565c0',
        size: 0.35,
        shape: 'hexagon',
    },
    runner: {
        name: 'Runner',
        hp: 50,
        speed: 3.0,
        reward: 12,
        color: '#fdd835',
        outlineColor: '#f9a825',
        size: 0.2,
        shape: 'diamond',
    },
    boss: {
        name: 'Boss',
        hp: 800,
        speed: 0.5,
        reward: 100,
        color: '#ab47bc',
        outlineColor: '#6a1b9a',
        size: 0.42,
        shape: 'star',
    },
};

// --- Level Definitions ---
export const LEVELS = [
    {
        id: 1,
        name: 'Green Meadow',
        description: 'A peaceful meadow. Learn the basics.',
        bgColor: '#4a7c3f',
        pathColor: '#d2b48c',
        gridPath: [
            {x:0,y:2},{x:1,y:2},{x:2,y:2},{x:3,y:2},{x:4,y:2},
            {x:4,y:3},{x:4,y:4},{x:4,y:5},{x:4,y:6},{x:4,y:7},
            {x:5,y:7},{x:6,y:7},{x:7,y:7},{x:8,y:7},{x:9,y:7},
            {x:9,y:6},{x:9,y:5},{x:9,y:4},{x:9,y:3},{x:9,y:2},
            {x:10,y:2},{x:11,y:2},{x:12,y:2},{x:13,y:2},
            {x:13,y:3},{x:13,y:4},{x:13,y:5},{x:13,y:6},{x:13,y:7},
            {x:13,y:8},{x:13,y:9},{x:14,y:9},{x:15,y:9},
        ],
        decorations: [
            {type:'tree', x:1, y:5}, {type:'tree', x:2, y:8}, {type:'tree', x:6, y:3},
            {type:'tree', x:7, y:1}, {type:'tree', x:11, y:5}, {type:'tree', x:14, y:4},
            {type:'bush', x:0, y:7}, {type:'bush', x:3, y:10}, {type:'bush', x:8, y:1},
            {type:'bush', x:12, y:9}, {type:'flower', x:6, y:0}, {type:'flower', x:10, y:8},
            {type:'flower', x:2, y:4}, {type:'rock', x:7, y:10}, {type:'rock', x:14, y:1},
        ],
        difficulty: 1.0,
    },
    {
        id: 2,
        name: 'Desert Canyon',
        description: 'Scorching heat. Enemies are tougher.',
        bgColor: '#c2a64e',
        pathColor: '#8b7355',
        gridPath: [
            {x:0,y:1},{x:1,y:1},{x:2,y:1},{x:3,y:1},{x:4,y:1},{x:5,y:1},{x:6,y:1},
            {x:6,y:2},{x:6,y:3},{x:6,y:4},{x:6,y:5},{x:6,y:6},
            {x:5,y:6},{x:4,y:6},{x:3,y:6},{x:2,y:6},{x:1,y:6},
            {x:1,y:7},{x:1,y:8},{x:1,y:9},{x:1,y:10},
            {x:2,y:10},{x:3,y:10},{x:4,y:10},{x:5,y:10},{x:6,y:10},{x:7,y:10},
            {x:8,y:10},{x:9,y:10},{x:10,y:10},{x:11,y:10},
            {x:11,y:9},{x:11,y:8},{x:11,y:7},{x:11,y:6},{x:11,y:5},
            {x:11,y:4},{x:11,y:3},{x:11,y:2},{x:11,y:1},
            {x:12,y:1},{x:13,y:1},{x:14,y:1},{x:15,y:1},
        ],
        decorations: [
            {type:'cactus', x:3, y:3}, {type:'cactus', x:8, y:2}, {type:'cactus', x:13, y:5},
            {type:'cactus', x:4, y:8}, {type:'rock', x:0, y:4}, {type:'rock', x:9, y:7},
            {type:'rock', x:14, y:8}, {type:'rock', x:7, y:0}, {type:'skull', x:3, y:4},
            {type:'skull', x:9, y:3}, {type:'tumbleweed', x:8, y:8}, {type:'tumbleweed', x:13, y:10},
        ],
        difficulty: 1.3,
    },
    {
        id: 3,
        name: 'Frozen River',
        description: 'Ice cold. Fast enemies incoming.',
        bgColor: '#5c8a9e',
        pathColor: '#b0c4de',
        gridPath: [
            {x:0,y:5},{x:1,y:5},{x:2,y:5},{x:3,y:5},
            {x:3,y:4},{x:3,y:3},{x:3,y:2},{x:3,y:1},
            {x:4,y:1},{x:5,y:1},{x:6,y:1},{x:7,y:1},
            {x:7,y:2},{x:7,y:3},{x:7,y:4},{x:7,y:5},{x:7,y:6},{x:7,y:7},{x:7,y:8},{x:7,y:9},
            {x:8,y:9},{x:9,y:9},{x:10,y:9},{x:11,y:9},
            {x:11,y:8},{x:11,y:7},{x:11,y:6},{x:11,y:5},{x:11,y:4},{x:11,y:3},
            {x:12,y:3},{x:13,y:3},{x:14,y:3},{x:15,y:3},
        ],
        decorations: [
            {type:'pine', x:1, y:1}, {type:'pine', x:5, y:4}, {type:'pine', x:9, y:1},
            {type:'pine', x:13, y:7}, {type:'pine', x:0, y:9}, {type:'pine', x:14, y:0},
            {type:'snowman', x:5, y:8}, {type:'snowman', x:13, y:1},
            {type:'ice_rock', x:9, y:6}, {type:'ice_rock', x:2, y:10}, {type:'ice_rock', x:14, y:9},
        ],
        difficulty: 1.6,
    },
    {
        id: 4,
        name: 'Dark Forest',
        description: 'Thick canopy. Limited visibility.',
        bgColor: '#2d4a2e',
        pathColor: '#6b4226',
        gridPath: [
            {x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0},{x:4,y:0},{x:5,y:0},
            {x:5,y:1},{x:5,y:2},{x:5,y:3},
            {x:4,y:3},{x:3,y:3},{x:2,y:3},{x:1,y:3},
            {x:1,y:4},{x:1,y:5},{x:1,y:6},
            {x:2,y:6},{x:3,y:6},{x:4,y:6},{x:5,y:6},{x:6,y:6},{x:7,y:6},{x:8,y:6},
            {x:8,y:7},{x:8,y:8},{x:8,y:9},{x:8,y:10},{x:8,y:11},
            {x:9,y:11},{x:10,y:11},{x:11,y:11},
            {x:11,y:10},{x:11,y:9},{x:11,y:8},{x:11,y:7},{x:11,y:6},
            {x:12,y:6},{x:13,y:6},{x:14,y:6},{x:15,y:6},
        ],
        decorations: [
            {type:'dark_tree', x:3, y:1}, {type:'dark_tree', x:7, y:2}, {type:'dark_tree', x:0, y:5},
            {type:'dark_tree', x:6, y:9}, {type:'dark_tree', x:13, y:3}, {type:'dark_tree', x:10, y:1},
            {type:'dark_tree', x:14, y:10}, {type:'dark_tree', x:3, y:9},
            {type:'mushroom', x:6, y:4}, {type:'mushroom', x:10, y:8},
            {type:'gravestone', x:13, y:9}, {type:'gravestone', x:2, y:8},
        ],
        difficulty: 2.0,
    },
    {
        id: 5,
        name: 'Final Stand',
        description: 'The last battle. Everything or nothing.',
        bgColor: '#1a1a2e',
        pathColor: '#4a4a6a',
        gridPath: [
            {x:0,y:6},{x:1,y:6},{x:2,y:6},{x:3,y:6},
            {x:3,y:5},{x:3,y:4},{x:3,y:3},{x:3,y:2},{x:3,y:1},
            {x:4,y:1},{x:5,y:1},{x:6,y:1},{x:7,y:1},{x:8,y:1},
            {x:8,y:2},{x:8,y:3},{x:8,y:4},{x:8,y:5},{x:8,y:6},{x:8,y:7},{x:8,y:8},{x:8,y:9},{x:8,y:10},
            {x:9,y:10},{x:10,y:10},{x:11,y:10},{x:12,y:10},
            {x:12,y:9},{x:12,y:8},{x:12,y:7},{x:12,y:6},{x:12,y:5},
            {x:12,y:4},{x:12,y:3},{x:12,y:2},{x:12,y:1},
            {x:13,y:1},{x:14,y:1},{x:15,y:1},
        ],
        decorations: [
            {type:'lava_crack', x:1, y:3}, {type:'lava_crack', x:6, y:7}, {type:'lava_crack', x:10, y:4},
            {type:'lava_crack', x:14, y:8}, {type:'dark_crystal', x:5, y:5}, {type:'dark_crystal', x:10, y:7},
            {type:'dark_crystal', x:14, y:3}, {type:'skull_pile', x:1, y:9},
            {type:'skull_pile', x:6, y:3}, {type:'skull_pile', x:11, y:0},
            {type:'torch', x:0, y:1}, {type:'torch', x:5, y:9}, {type:'torch', x:15, y:5},
        ],
        difficulty: 2.5,
    },
];

// --- Wave Generation ---
// Generates enemy composition for a given level and wave number
export function generateWave(levelIndex, waveNum) {
    const level = LEVELS[levelIndex];
    const diff = level.difficulty;
    const isBoss = waveNum % BALANCE.bossWaveInterval === 0;

    const enemies = [];

    if (isBoss) {
        enemies.push({ type: 'boss', count: 1 + Math.floor(waveNum / 10) });
        enemies.push({ type: 'soldier', count: Math.floor(waveNum * 0.5) });
    } else if (waveNum <= 2) {
        enemies.push({ type: 'scout', count: 4 + waveNum * 2 });
    } else if (waveNum <= 4) {
        enemies.push({ type: 'scout', count: 3 + waveNum });
        enemies.push({ type: 'soldier', count: waveNum });
    } else if (waveNum <= 6) {
        enemies.push({ type: 'soldier', count: 2 + waveNum });
        enemies.push({ type: 'runner', count: Math.floor(waveNum * 0.5) });
        if (waveNum >= 6) enemies.push({ type: 'tank', count: 1 });
    } else {
        enemies.push({ type: 'soldier', count: waveNum });
        enemies.push({ type: 'runner', count: Math.floor(waveNum * 0.7) });
        enemies.push({ type: 'tank', count: Math.floor(waveNum * 0.3) });
    }

    // Scale HP and speed by difficulty
    const hpScale = diff * (1 + (waveNum - 1) * 0.15);
    const speedScale = 1 + (waveNum - 1) * 0.02;
    const spawnInterval = Math.max(300, 900 - waveNum * 40);

    return { enemies, hpScale, speedScale, spawnInterval };
}
