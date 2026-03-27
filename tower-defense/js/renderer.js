// ============================================================
// renderer.js — All canvas drawing
// ============================================================

import { CELL_SIZE, COLS, ROWS, CANVAS_WIDTH, CANVAS_HEIGHT, TOWER_TYPES } from './config.js';

export class Renderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }

    clear(bgColor) {
        this.ctx.fillStyle = bgColor;
        this.ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }

    drawGrid(bgColor) {
        const ctx = this.ctx;
        // Subtle grid lines
        ctx.strokeStyle = 'rgba(0,0,0,0.1)';
        ctx.lineWidth = 1;
        for (let i = 0; i <= COLS; i++) {
            ctx.beginPath();
            ctx.moveTo(i * CELL_SIZE, 0);
            ctx.lineTo(i * CELL_SIZE, CANVAS_HEIGHT);
            ctx.stroke();
        }
        for (let j = 0; j <= ROWS; j++) {
            ctx.beginPath();
            ctx.moveTo(0, j * CELL_SIZE);
            ctx.lineTo(CANVAS_WIDTH, j * CELL_SIZE);
            ctx.stroke();
        }
    }

    drawPath(gridPath, pathColor) {
        const ctx = this.ctx;
        // Draw path tiles with subtle texture
        gridPath.forEach((p, i) => {
            const x = p.x * CELL_SIZE;
            const y = p.y * CELL_SIZE;

            // Base path color
            ctx.fillStyle = pathColor;
            ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);

            // Subtle edge darkening
            ctx.fillStyle = 'rgba(0,0,0,0.08)';
            ctx.fillRect(x, y, CELL_SIZE, 2);
            ctx.fillRect(x, y, 2, CELL_SIZE);

            // Path direction dots
            ctx.fillStyle = 'rgba(0,0,0,0.06)';
            ctx.beginPath();
            ctx.arc(x + CELL_SIZE / 2, y + CELL_SIZE / 2, 3, 0, Math.PI * 2);
            ctx.fill();
        });

        // Entry arrow
        if (gridPath.length > 0) {
            const start = gridPath[0];
            ctx.fillStyle = '#4caf50';
            ctx.font = 'bold 18px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('\u25B6', start.x * CELL_SIZE + CELL_SIZE / 2, start.y * CELL_SIZE + CELL_SIZE / 2);
        }

        // Exit marker
        if (gridPath.length > 1) {
            const end = gridPath[gridPath.length - 1];
            ctx.fillStyle = '#f44336';
            ctx.font = 'bold 18px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('\u2716', end.x * CELL_SIZE + CELL_SIZE / 2, end.y * CELL_SIZE + CELL_SIZE / 2);
        }
    }

    drawDecorations(decorations) {
        const ctx = this.ctx;
        decorations.forEach(d => {
            const cx = d.x * CELL_SIZE + CELL_SIZE / 2;
            const cy = d.y * CELL_SIZE + CELL_SIZE / 2;
            this._drawDecoration(ctx, d.type, cx, cy);
        });
    }

    _drawDecoration(ctx, type, cx, cy) {
        switch (type) {
            case 'tree':
                // Trunk
                ctx.fillStyle = '#5d4037';
                ctx.fillRect(cx - 3, cy, 6, 14);
                // Canopy
                ctx.fillStyle = '#388e3c';
                ctx.beginPath();
                ctx.arc(cx, cy - 2, 14, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#2e7d32';
                ctx.beginPath();
                ctx.arc(cx + 4, cy + 2, 10, 0, Math.PI * 2);
                ctx.fill();
                break;

            case 'pine':
                ctx.fillStyle = '#5d4037';
                ctx.fillRect(cx - 2, cy + 6, 4, 12);
                // Triangle canopy
                ctx.fillStyle = '#1b5e20';
                ctx.beginPath();
                ctx.moveTo(cx, cy - 16);
                ctx.lineTo(cx - 12, cy + 8);
                ctx.lineTo(cx + 12, cy + 8);
                ctx.closePath();
                ctx.fill();
                ctx.fillStyle = '#2e7d32';
                ctx.beginPath();
                ctx.moveTo(cx, cy - 10);
                ctx.lineTo(cx - 10, cy + 4);
                ctx.lineTo(cx + 10, cy + 4);
                ctx.closePath();
                ctx.fill();
                break;

            case 'dark_tree':
                ctx.fillStyle = '#3e2723';
                ctx.fillRect(cx - 3, cy, 6, 14);
                ctx.fillStyle = '#1a3a1a';
                ctx.beginPath();
                ctx.arc(cx, cy - 4, 15, 0, Math.PI * 2);
                ctx.fill();
                break;

            case 'bush':
                ctx.fillStyle = '#43a047';
                ctx.beginPath();
                ctx.arc(cx, cy + 4, 10, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#66bb6a';
                ctx.beginPath();
                ctx.arc(cx - 4, cy + 2, 7, 0, Math.PI * 2);
                ctx.fill();
                break;

            case 'rock':
                ctx.fillStyle = '#757575';
                ctx.beginPath();
                ctx.moveTo(cx - 10, cy + 8);
                ctx.lineTo(cx - 6, cy - 6);
                ctx.lineTo(cx + 4, cy - 8);
                ctx.lineTo(cx + 10, cy + 2);
                ctx.lineTo(cx + 6, cy + 8);
                ctx.closePath();
                ctx.fill();
                ctx.fillStyle = '#9e9e9e';
                ctx.beginPath();
                ctx.moveTo(cx - 6, cy - 6);
                ctx.lineTo(cx + 4, cy - 8);
                ctx.lineTo(cx + 10, cy + 2);
                ctx.lineTo(cx, cy);
                ctx.closePath();
                ctx.fill();
                break;

            case 'ice_rock':
                ctx.fillStyle = '#90caf9';
                ctx.beginPath();
                ctx.moveTo(cx - 10, cy + 8);
                ctx.lineTo(cx - 4, cy - 8);
                ctx.lineTo(cx + 8, cy - 4);
                ctx.lineTo(cx + 10, cy + 6);
                ctx.closePath();
                ctx.fill();
                ctx.fillStyle = '#bbdefb';
                ctx.beginPath();
                ctx.moveTo(cx - 4, cy - 8);
                ctx.lineTo(cx + 8, cy - 4);
                ctx.lineTo(cx + 2, cy);
                ctx.closePath();
                ctx.fill();
                break;

            case 'flower':
                ctx.fillStyle = '#81c784';
                ctx.fillRect(cx - 1, cy + 2, 2, 8);
                const flowerColors = ['#e91e63', '#ff9800', '#ffeb3b', '#9c27b0'];
                const fc = flowerColors[(cx + cy) % flowerColors.length];
                ctx.fillStyle = fc;
                for (let i = 0; i < 5; i++) {
                    const angle = (i / 5) * Math.PI * 2;
                    ctx.beginPath();
                    ctx.arc(cx + Math.cos(angle) * 4, cy + Math.sin(angle) * 4, 3, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.fillStyle = '#fdd835';
                ctx.beginPath();
                ctx.arc(cx, cy, 3, 0, Math.PI * 2);
                ctx.fill();
                break;

            case 'cactus':
                ctx.fillStyle = '#2e7d32';
                ctx.fillRect(cx - 4, cy - 10, 8, 24);
                ctx.fillRect(cx - 12, cy - 4, 10, 6);
                ctx.fillRect(cx + 4, cy - 8, 10, 6);
                // Spines
                ctx.fillStyle = '#c8e6c9';
                for (let i = 0; i < 4; i++) {
                    ctx.fillRect(cx + 4, cy - 10 + i * 6, 1, 2);
                    ctx.fillRect(cx - 5, cy - 8 + i * 6, 1, 2);
                }
                break;

            case 'skull':
                ctx.fillStyle = '#e0e0e0';
                ctx.beginPath();
                ctx.arc(cx, cy, 7, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#424242';
                ctx.beginPath();
                ctx.arc(cx - 3, cy - 1, 2, 0, Math.PI * 2);
                ctx.arc(cx + 3, cy - 1, 2, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillRect(cx - 3, cy + 4, 6, 2);
                break;

            case 'tumbleweed':
                ctx.strokeStyle = '#8d6e63';
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.arc(cx, cy, 8, 0, Math.PI * 2);
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(cx, cy, 5, 0, Math.PI * 2);
                ctx.stroke();
                break;

            case 'snowman':
                ctx.fillStyle = '#eceff1';
                ctx.beginPath();
                ctx.arc(cx, cy + 8, 10, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(cx, cy - 2, 7, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(cx, cy - 10, 5, 0, Math.PI * 2);
                ctx.fill();
                // Eyes
                ctx.fillStyle = '#212121';
                ctx.beginPath();
                ctx.arc(cx - 2, cy - 11, 1, 0, Math.PI * 2);
                ctx.arc(cx + 2, cy - 11, 1, 0, Math.PI * 2);
                ctx.fill();
                // Nose
                ctx.fillStyle = '#ff9800';
                ctx.beginPath();
                ctx.moveTo(cx, cy - 9);
                ctx.lineTo(cx + 5, cy - 8);
                ctx.lineTo(cx, cy - 7);
                ctx.closePath();
                ctx.fill();
                break;

            case 'mushroom':
                ctx.fillStyle = '#efebe9';
                ctx.fillRect(cx - 2, cy + 2, 4, 10);
                ctx.fillStyle = '#c62828';
                ctx.beginPath();
                ctx.arc(cx, cy, 9, Math.PI, 0);
                ctx.fill();
                // Spots
                ctx.fillStyle = '#ffcdd2';
                ctx.beginPath();
                ctx.arc(cx - 3, cy - 3, 2, 0, Math.PI * 2);
                ctx.arc(cx + 4, cy - 2, 1.5, 0, Math.PI * 2);
                ctx.fill();
                break;

            case 'gravestone':
                ctx.fillStyle = '#616161';
                ctx.beginPath();
                ctx.moveTo(cx - 7, cy + 10);
                ctx.lineTo(cx - 7, cy - 4);
                ctx.quadraticCurveTo(cx - 7, cy - 12, cx, cy - 12);
                ctx.quadraticCurveTo(cx + 7, cy - 12, cx + 7, cy - 4);
                ctx.lineTo(cx + 7, cy + 10);
                ctx.closePath();
                ctx.fill();
                ctx.fillStyle = '#9e9e9e';
                ctx.font = '10px Arial';
                ctx.textAlign = 'center';
                ctx.fillText('RIP', cx, cy);
                break;

            case 'lava_crack':
                ctx.strokeStyle = '#ff5722';
                ctx.lineWidth = 2;
                ctx.shadowColor = '#ff9800';
                ctx.shadowBlur = 6;
                ctx.beginPath();
                ctx.moveTo(cx - 10, cy - 5);
                ctx.lineTo(cx - 2, cy + 3);
                ctx.lineTo(cx + 5, cy - 2);
                ctx.lineTo(cx + 12, cy + 6);
                ctx.stroke();
                ctx.shadowBlur = 0;
                break;

            case 'dark_crystal':
                ctx.fillStyle = '#7c4dff';
                ctx.shadowColor = '#b388ff';
                ctx.shadowBlur = 8;
                ctx.beginPath();
                ctx.moveTo(cx, cy - 14);
                ctx.lineTo(cx + 6, cy);
                ctx.lineTo(cx + 3, cy + 10);
                ctx.lineTo(cx - 3, cy + 10);
                ctx.lineTo(cx - 6, cy);
                ctx.closePath();
                ctx.fill();
                ctx.fillStyle = '#b388ff';
                ctx.beginPath();
                ctx.moveTo(cx, cy - 14);
                ctx.lineTo(cx + 6, cy);
                ctx.lineTo(cx, cy - 2);
                ctx.closePath();
                ctx.fill();
                ctx.shadowBlur = 0;
                break;

            case 'skull_pile':
                for (let i = 0; i < 3; i++) {
                    const sx = cx - 6 + i * 6;
                    const sy = cy + 4 - (i === 1 ? 6 : 0);
                    ctx.fillStyle = '#bdbdbd';
                    ctx.beginPath();
                    ctx.arc(sx, sy, 5, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.fillStyle = '#424242';
                    ctx.beginPath();
                    ctx.arc(sx - 1.5, sy - 1, 1, 0, Math.PI * 2);
                    ctx.arc(sx + 1.5, sy - 1, 1, 0, Math.PI * 2);
                    ctx.fill();
                }
                break;

            case 'torch':
                ctx.fillStyle = '#5d4037';
                ctx.fillRect(cx - 2, cy - 2, 4, 18);
                // Flame
                ctx.fillStyle = '#ff9800';
                ctx.shadowColor = '#ff9800';
                ctx.shadowBlur = 10;
                ctx.beginPath();
                ctx.moveTo(cx, cy - 12);
                ctx.quadraticCurveTo(cx + 6, cy - 6, cx, cy - 2);
                ctx.quadraticCurveTo(cx - 6, cy - 6, cx, cy - 12);
                ctx.fill();
                ctx.fillStyle = '#ffeb3b';
                ctx.beginPath();
                ctx.moveTo(cx, cy - 10);
                ctx.quadraticCurveTo(cx + 3, cy - 6, cx, cy - 3);
                ctx.quadraticCurveTo(cx - 3, cy - 6, cx, cy - 10);
                ctx.fill();
                ctx.shadowBlur = 0;
                break;
        }
    }

    drawTowers(towers, selectedTower) {
        const ctx = this.ctx;

        towers.forEach(tower => {
            const { x, y, typeKey, level, color, angle } = tower;
            const r = CELL_SIZE * (0.35 + level * 0.03);

            // Tower base platform
            ctx.fillStyle = 'rgba(0,0,0,0.2)';
            ctx.beginPath();
            ctx.ellipse(x, y + r * 0.6, r * 1.1, r * 0.4, 0, 0, Math.PI * 2);
            ctx.fill();

            // Tower body by shape
            this._drawTowerShape(ctx, typeKey, x, y, r, color, level, angle);

            // Level pips
            ctx.fillStyle = '#fff';
            for (let i = 0; i <= level; i++) {
                ctx.beginPath();
                ctx.arc(x - (level * 3) + i * 6, y + r + 4, 2, 0, Math.PI * 2);
                ctx.fill();
            }

            // Selection highlight
            if (selectedTower === tower) {
                ctx.strokeStyle = 'rgba(255,255,255,0.5)';
                ctx.lineWidth = 1;
                ctx.setLineDash([5, 5]);
                ctx.beginPath();
                ctx.arc(x, y, tower.range, 0, Math.PI * 2);
                ctx.stroke();
                ctx.setLineDash([]);

                // Selection box
                ctx.strokeStyle = '#fff';
                ctx.lineWidth = 2;
                ctx.strokeRect(
                    tower.gridX * CELL_SIZE + 2,
                    tower.gridY * CELL_SIZE + 2,
                    CELL_SIZE - 4,
                    CELL_SIZE - 4
                );
            }
        });
    }

    _drawTowerShape(ctx, typeKey, x, y, r, color, level, angle) {
        ctx.save();
        ctx.translate(x, y);

        switch (typeKey) {
            case 'arrow':
                // Circular base
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(0, 0, r, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = 'rgba(0,0,0,0.3)';
                ctx.lineWidth = 2;
                ctx.stroke();
                // Turret (rotates toward target)
                ctx.rotate(angle);
                ctx.fillStyle = '#37474f';
                ctx.fillRect(-2, -r - 4, 4, r + 2);
                // Arrow tip
                ctx.beginPath();
                ctx.moveTo(0, -r - 10);
                ctx.lineTo(-4, -r - 2);
                ctx.lineTo(4, -r - 2);
                ctx.closePath();
                ctx.fill();
                break;

            case 'cannon':
                // Square base with rounded corners
                const cr = r * 0.85;
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.roundRect(-cr, -cr, cr * 2, cr * 2, 6);
                ctx.fill();
                ctx.strokeStyle = 'rgba(0,0,0,0.3)';
                ctx.lineWidth = 2;
                ctx.stroke();
                // Barrel
                ctx.rotate(angle);
                ctx.fillStyle = '#424242';
                ctx.fillRect(-4, -r - 8, 8, r + 4);
                ctx.fillStyle = '#616161';
                ctx.beginPath();
                ctx.arc(0, -r - 8, 5, 0, Math.PI * 2);
                ctx.fill();
                break;

            case 'frost':
                // Diamond/crystal shape
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.moveTo(0, -r);
                ctx.lineTo(r * 0.7, 0);
                ctx.lineTo(0, r);
                ctx.lineTo(-r * 0.7, 0);
                ctx.closePath();
                ctx.fill();
                // Inner glow
                ctx.fillStyle = 'rgba(255,255,255,0.3)';
                ctx.beginPath();
                ctx.moveTo(0, -r * 0.5);
                ctx.lineTo(r * 0.35, 0);
                ctx.lineTo(0, r * 0.5);
                ctx.lineTo(-r * 0.35, 0);
                ctx.closePath();
                ctx.fill();
                ctx.strokeStyle = 'rgba(0,0,0,0.2)';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(0, -r);
                ctx.lineTo(r * 0.7, 0);
                ctx.lineTo(0, r);
                ctx.lineTo(-r * 0.7, 0);
                ctx.closePath();
                ctx.stroke();
                // Frost aura
                if (level > 0) {
                    ctx.strokeStyle = 'rgba(128,222,234,0.3)';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.arc(0, 0, r + 4, 0, Math.PI * 2);
                    ctx.stroke();
                }
                break;

            case 'sniper':
                // Tall thin tower
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(0, 0, r * 0.7, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = 'rgba(0,0,0,0.3)';
                ctx.lineWidth = 2;
                ctx.stroke();
                // Long barrel
                ctx.rotate(angle);
                ctx.fillStyle = '#37474f';
                ctx.fillRect(-1.5, -r - 16, 3, r + 12);
                // Scope
                ctx.fillStyle = '#c62828';
                ctx.beginPath();
                ctx.arc(3, -r - 8, 3, 0, Math.PI * 2);
                ctx.fill();
                // Crosshair at tip
                ctx.strokeStyle = '#c62828';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.arc(0, -r - 16, 3, 0, Math.PI * 2);
                ctx.stroke();
                break;
        }

        ctx.restore();
    }

    drawBuildPreview(mousePos, buildMode, gridPath, towers) {
        if (!buildMode) return;
        const ctx = this.ctx;
        const gridX = Math.floor(mousePos.x / CELL_SIZE);
        const gridY = Math.floor(mousePos.y / CELL_SIZE);

        if (gridX < 0 || gridX >= COLS || gridY < 0 || gridY >= ROWS) return;

        const typeDef = TOWER_TYPES[buildMode];
        const cx = gridX * CELL_SIZE + CELL_SIZE / 2;
        const cy = gridY * CELL_SIZE + CELL_SIZE / 2;

        const onPath = gridPath.some(p => p.x === gridX && p.y === gridY);
        const occupied = towers.some(t => t.gridX === gridX && t.gridY === gridY);
        const blocked = onPath || occupied;

        // Cell highlight
        ctx.fillStyle = blocked ? 'rgba(244,67,54,0.3)' : 'rgba(76,175,80,0.3)';
        ctx.fillRect(gridX * CELL_SIZE, gridY * CELL_SIZE, CELL_SIZE, CELL_SIZE);

        // Tower preview
        ctx.globalAlpha = 0.6;
        ctx.fillStyle = typeDef.colors[0];
        ctx.beginPath();
        ctx.arc(cx, cy, CELL_SIZE * 0.35, 0, Math.PI * 2);
        ctx.fill();

        // Range preview
        ctx.strokeStyle = blocked ? 'rgba(244,67,54,0.4)' : 'rgba(255,255,255,0.4)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.arc(cx, cy, typeDef.levels[0].range, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.globalAlpha = 1.0;
    }

    drawEnemies(enemies) {
        const ctx = this.ctx;

        enemies.forEach(e => {
            if (!e.alive) return;
            const { x, y, size, color, outlineColor, shape, hp, maxHp, hitFlash, slowTimer } = e;
            const r = CELL_SIZE * size;

            ctx.save();
            ctx.translate(x, y);

            // Hit flash
            const drawColor = hitFlash > 0 ? '#fff' : color;

            // Slow indicator (blue tint)
            if (slowTimer > 0) {
                ctx.fillStyle = 'rgba(100,200,255,0.3)';
                ctx.beginPath();
                ctx.arc(0, 0, r + 4, 0, Math.PI * 2);
                ctx.fill();
            }

            // Enemy body
            ctx.fillStyle = drawColor;
            ctx.strokeStyle = outlineColor;
            ctx.lineWidth = 2;

            switch (shape) {
                case 'triangle':
                    ctx.beginPath();
                    ctx.moveTo(0, -r);
                    ctx.lineTo(r * 0.87, r * 0.5);
                    ctx.lineTo(-r * 0.87, r * 0.5);
                    ctx.closePath();
                    ctx.fill();
                    ctx.stroke();
                    break;
                case 'square':
                    ctx.beginPath();
                    ctx.roundRect(-r * 0.7, -r * 0.7, r * 1.4, r * 1.4, 3);
                    ctx.fill();
                    ctx.stroke();
                    break;
                case 'hexagon':
                    ctx.beginPath();
                    for (let i = 0; i < 6; i++) {
                        const a = (i / 6) * Math.PI * 2 - Math.PI / 2;
                        const px = Math.cos(a) * r;
                        const py = Math.sin(a) * r;
                        if (i === 0) ctx.moveTo(px, py);
                        else ctx.lineTo(px, py);
                    }
                    ctx.closePath();
                    ctx.fill();
                    ctx.stroke();
                    break;
                case 'diamond':
                    ctx.beginPath();
                    ctx.moveTo(0, -r);
                    ctx.lineTo(r * 0.6, 0);
                    ctx.lineTo(0, r);
                    ctx.lineTo(-r * 0.6, 0);
                    ctx.closePath();
                    ctx.fill();
                    ctx.stroke();
                    break;
                case 'star':
                    ctx.beginPath();
                    for (let i = 0; i < 10; i++) {
                        const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
                        const sr = i % 2 === 0 ? r : r * 0.5;
                        const px = Math.cos(a) * sr;
                        const py = Math.sin(a) * sr;
                        if (i === 0) ctx.moveTo(px, py);
                        else ctx.lineTo(px, py);
                    }
                    ctx.closePath();
                    ctx.fill();
                    ctx.stroke();
                    // Crown glow for boss
                    ctx.shadowColor = '#e040fb';
                    ctx.shadowBlur = 10;
                    ctx.stroke();
                    ctx.shadowBlur = 0;
                    break;
                default:
                    ctx.beginPath();
                    ctx.arc(0, 0, r, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();
            }

            ctx.restore();

            // Health bar (above enemy)
            const barW = CELL_SIZE * size * 2 + 4;
            const barH = 4;
            const barY = y - r - 8;
            const hpRatio = hp / maxHp;

            ctx.fillStyle = 'rgba(0,0,0,0.5)';
            ctx.fillRect(x - barW / 2, barY, barW, barH);

            const hpColor = hpRatio > 0.6 ? '#4caf50' : hpRatio > 0.3 ? '#ff9800' : '#f44336';
            ctx.fillStyle = hpColor;
            ctx.fillRect(x - barW / 2, barY, barW * hpRatio, barH);
        });
    }

    drawProjectiles(projectiles) {
        const ctx = this.ctx;
        projectiles.forEach(p => {
            if (!p.alive) return;
            ctx.fillStyle = p.color;
            ctx.shadowColor = p.color;
            ctx.shadowBlur = 4;

            if (p.towerType === 'cannon') {
                // Cannonball
                ctx.beginPath();
                ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
                ctx.fill();
            } else if (p.towerType === 'frost') {
                // Frost shard
                ctx.beginPath();
                ctx.moveTo(p.x, p.y - 4);
                ctx.lineTo(p.x + 3, p.y);
                ctx.lineTo(p.x, p.y + 4);
                ctx.lineTo(p.x - 3, p.y);
                ctx.closePath();
                ctx.fill();
            } else if (p.towerType === 'sniper') {
                // Fast streak
                const dx = p.target.x - p.x;
                const dy = p.target.y - p.y;
                const dist = Math.hypot(dx, dy);
                const nx = dx / (dist || 1);
                const ny = dy / (dist || 1);
                ctx.strokeStyle = p.color;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(p.x - nx * 8, p.y - ny * 8);
                ctx.lineTo(p.x + nx * 2, p.y + ny * 2);
                ctx.stroke();
            } else {
                // Arrow
                ctx.beginPath();
                ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.shadowBlur = 0;
        });
    }

    drawParticles(particles) {
        const ctx = this.ctx;
        particles.forEach(p => {
            if (!p.alive) return;
            const alpha = p.life / p.maxLife;

            if (p.type === 'spark') {
                ctx.fillStyle = p.color;
                ctx.globalAlpha = alpha;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * alpha, 0, Math.PI * 2);
                ctx.fill();
            } else if (p.type === 'text') {
                ctx.globalAlpha = alpha;
                ctx.fillStyle = p.color;
                ctx.font = `bold ${p.size}px Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(p.text, p.x, p.y);
            } else if (p.type === 'ring') {
                ctx.globalAlpha = alpha * 0.5;
                ctx.strokeStyle = p.color;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.stroke();
            }

            ctx.globalAlpha = 1.0;
        });
    }

    drawWaveInfo(waveNum, totalWaves, enemiesRemaining) {
        const ctx = this.ctx;
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.fillRect(CANVAS_WIDTH - 160, 4, 156, 24);
        ctx.fillStyle = '#fff';
        ctx.font = '12px Arial';
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        ctx.fillText(`Wave ${waveNum}/${totalWaves} | Left: ${enemiesRemaining}`, CANVAS_WIDTH - 8, 16);
    }

    drawGameOver() {
        const ctx = this.ctx;
        ctx.fillStyle = 'rgba(0,0,0,0.75)';
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        ctx.fillStyle = '#f44336';
        ctx.font = 'bold 48px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('GAME OVER', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 20);

        ctx.fillStyle = '#ccc';
        ctx.font = '18px Arial';
        ctx.fillText('Click "Retry" to try again', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 25);
    }

    drawLevelComplete(levelName) {
        const ctx = this.ctx;
        ctx.fillStyle = 'rgba(0,0,0,0.75)';
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        ctx.fillStyle = '#4caf50';
        ctx.font = 'bold 42px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('LEVEL COMPLETE!', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 30);

        ctx.fillStyle = '#fff';
        ctx.font = '22px Arial';
        ctx.fillText(levelName, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 15);

        ctx.fillStyle = '#ccc';
        ctx.font = '16px Arial';
        ctx.fillText('Click "Next Level" to continue', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 50);
    }
}
