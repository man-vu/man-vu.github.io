// ============================================================
// audio.js — Procedural Web Audio API sound effects
// ============================================================

export class AudioManager {
    constructor() {
        this.ctx = null;
        this.master = null;
        this.enabled = true;
        this._cooldowns = {};
        this._initialized = false;
    }

    // Must be called on first user interaction
    init() {
        if (this._initialized) return;
        this._initialized = true;
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.master = this.ctx.createGain();
        this.master.gain.value = 0.4;
        this.master.connect(this.ctx.destination);
    }

    // Resume if browser suspended the context
    _resume() {
        if (this.ctx?.state === 'suspended') this.ctx.resume();
    }

    // Throttle a sound type so it can't spam
    _throttle(key, ms) {
        const now = Date.now();
        if (this._cooldowns[key] && now - this._cooldowns[key] < ms) return false;
        this._cooldowns[key] = now;
        return true;
    }

    // Central dispatch — called from main.js with game events
    play(eventType, data = {}) {
        if (!this.ctx || !this.enabled) return;
        this._resume();

        switch (eventType) {
            // Tower firing
            case 'fire_arrow':   return this._throttle('fire_arrow', 80)   && this._fireArrow();
            case 'fire_cannon':  return this._throttle('fire_cannon', 200)  && this._fireCannon();
            case 'fire_frost':   return this._throttle('fire_frost', 150)   && this._fireFrost();
            case 'fire_sniper':  return this._throttle('fire_sniper', 50)   && this._fireSniper();

            // Hits
            case 'hit_normal':   return this._throttle('hit_normal', 30)   && this._hitNormal();
            case 'hit_splash':   return this._throttle('hit_splash', 200)   && this._hitSplash();

            // Enemies
            case 'enemy_death':  return this._throttle('enemy_death', 40)  && this._enemyDeath(data.type);
            case 'enemy_end':    return this._enemyEnd();

            // Building
            case 'build':        return this._build();
            case 'upgrade':      return this._upgrade();
            case 'sell':         return this._sell();

            // Waves
            case 'wave_start':   return this._waveStart();
            case 'wave_complete':return this._waveComplete();
            case 'level_complete': return this._levelComplete();
            case 'game_over':    return this._gameOver();
        }
    }

    // ----------------------------------------------------------------
    // Helpers
    // ----------------------------------------------------------------

    _osc(type, freq, when, duration, peakGain = 0.5, dest = null) {
        const ctx = this.ctx;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, when);
        gain.gain.setValueAtTime(0, when);
        gain.gain.linearRampToValueAtTime(peakGain, when + 0.005);
        gain.gain.exponentialRampToValueAtTime(0.0001, when + duration);
        osc.connect(gain);
        gain.connect(dest || this.master);
        osc.start(when);
        osc.stop(when + duration + 0.01);
        return { osc, gain };
    }

    _noise(duration, filterFreq, filterType = 'bandpass', peakGain = 0.4, when = null) {
        const ctx = this.ctx;
        const now = when ?? ctx.currentTime;
        const bufferSize = Math.ceil(ctx.sampleRate * duration);
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

        const src = ctx.createBufferSource();
        src.buffer = buffer;

        const filter = ctx.createBiquadFilter();
        filter.type = filterType;
        filter.frequency.value = filterFreq;
        filter.Q.value = 1;

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(peakGain, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

        src.connect(filter);
        filter.connect(gain);
        gain.connect(this.master);
        src.start(now);
        return { src, gain };
    }

    _melody(notes, duration, type = 'sine', peakGain = 0.3) {
        const ctx = this.ctx;
        const now = ctx.currentTime;
        notes.forEach(([freq, offset]) => {
            this._osc(type, freq, now + offset, duration, peakGain);
        });
    }

    // ----------------------------------------------------------------
    // Tower Fire Sounds
    // ----------------------------------------------------------------

    _fireArrow() {
        const ctx = this.ctx;
        const now = ctx.currentTime;
        // High-pitched "twing" - sawtooth quickly descending
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(900, now);
        osc.frequency.exponentialRampToValueAtTime(300, now + 0.08);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);
        osc.connect(gain);
        gain.connect(this.master);
        osc.start(now);
        osc.stop(now + 0.12);
    }

    _fireCannon() {
        const ctx = this.ctx;
        const now = ctx.currentTime;

        // Low boom: sine wave
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(70, now);
        osc.frequency.exponentialRampToValueAtTime(25, now + 0.35);
        gain.gain.setValueAtTime(0.7, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
        osc.connect(gain);
        gain.connect(this.master);
        osc.start(now);
        osc.stop(now + 0.4);

        // Noise burst for texture
        this._noise(0.15, 200, 'lowpass', 0.5, now);
    }

    _fireFrost() {
        const ctx = this.ctx;
        const now = ctx.currentTime;

        // Icy shimmer: high filtered noise + light sine
        this._noise(0.2, 1800, 'bandpass', 0.25, now);

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1400, now);
        osc.frequency.linearRampToValueAtTime(1800, now + 0.1);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);
        osc.connect(gain);
        gain.connect(this.master);
        osc.start(now);
        osc.stop(now + 0.22);
    }

    _fireSniper() {
        const ctx = this.ctx;
        const now = ctx.currentTime;

        // Sharp crack: very short burst + ring
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(3000, now);
        osc.frequency.exponentialRampToValueAtTime(100, now + 0.06);
        gain.gain.setValueAtTime(0.4, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);
        osc.connect(gain);
        gain.connect(this.master);
        osc.start(now);
        osc.stop(now + 0.08);

        // Tail echo
        this._noise(0.12, 400, 'highpass', 0.2, now + 0.01);
    }

    // ----------------------------------------------------------------
    // Hit Sounds
    // ----------------------------------------------------------------

    _hitNormal() {
        const ctx = this.ctx;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(250, now);
        osc.frequency.exponentialRampToValueAtTime(80, now + 0.06);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);
        osc.connect(gain);
        gain.connect(this.master);
        osc.start(now);
        osc.stop(now + 0.08);
    }

    _hitSplash() {
        const ctx = this.ctx;
        const now = ctx.currentTime;
        // Rumble + low thud
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(90, now);
        osc.frequency.exponentialRampToValueAtTime(30, now + 0.25);
        gain.gain.setValueAtTime(0.5, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);
        osc.connect(gain);
        gain.connect(this.master);
        osc.start(now);
        osc.stop(now + 0.3);
        this._noise(0.2, 300, 'lowpass', 0.35, now);
    }

    // ----------------------------------------------------------------
    // Enemy Sounds
    // ----------------------------------------------------------------

    _enemyDeath(type) {
        const ctx = this.ctx;
        const now = ctx.currentTime;

        if (type === 'boss') {
            // Dramatic multi-layer explosion
            this._noise(0.6, 150, 'lowpass', 0.8, now);
            this._osc('sine', 60, now, 0.5, 0.7);
            this._osc('sine', 120, now + 0.05, 0.4, 0.4);
            // Descending dramatic notes
            this._melody([
                [440, 0.1], [330, 0.2], [220, 0.35], [110, 0.5]
            ], 0.15, 'square', 0.2);
        } else if (type === 'tank') {
            // Heavy thud
            this._noise(0.25, 100, 'lowpass', 0.6, now);
            this._osc('sine', 80, now, 0.3, 0.5);
        } else {
            // Light pop/blip
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(500, now);
            osc.frequency.exponentialRampToValueAtTime(100, now + 0.12);
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);
            osc.connect(gain);
            gain.connect(this.master);
            osc.start(now);
            osc.stop(now + 0.17);
        }
    }

    _enemyEnd() {
        const ctx = this.ctx;
        const now = ctx.currentTime;
        // Ominous descending alarm
        [0, 0.15, 0.3].forEach(offset => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(300, now + offset);
            osc.frequency.linearRampToValueAtTime(150, now + offset + 0.12);
            gain.gain.setValueAtTime(0.35, now + offset);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + offset + 0.13);
            osc.connect(gain);
            gain.connect(this.master);
            osc.start(now + offset);
            osc.stop(now + offset + 0.15);
        });
    }

    // ----------------------------------------------------------------
    // Building Sounds
    // ----------------------------------------------------------------

    _build() {
        const ctx = this.ctx;
        const now = ctx.currentTime;
        // Satisfying construction "clunk"
        this._noise(0.08, 500, 'bandpass', 0.5, now);
        this._osc('square', 200, now, 0.1, 0.2);
        this._osc('sine', 400, now + 0.05, 0.08, 0.15);
    }

    _upgrade() {
        const ctx = this.ctx;
        const now = ctx.currentTime;
        // Bright ascending arpeggio: C4, E4, G4, C5
        const notes = [261.6, 329.6, 392.0, 523.3];
        notes.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now + i * 0.07);
            gain.gain.setValueAtTime(0, now + i * 0.07);
            gain.gain.linearRampToValueAtTime(0.25, now + i * 0.07 + 0.01);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.07 + 0.14);
            osc.connect(gain);
            gain.connect(this.master);
            osc.start(now + i * 0.07);
            osc.stop(now + i * 0.07 + 0.16);
        });
    }

    _sell() {
        const ctx = this.ctx;
        const now = ctx.currentTime;
        // Cash register "ching" — high metallic ping
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1800, now);
        osc.frequency.setValueAtTime(2200, now + 0.04);
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.3, now + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);
        osc.connect(gain);
        gain.connect(this.master);
        osc.start(now);
        osc.stop(now + 0.45);
    }

    // ----------------------------------------------------------------
    // Wave / Level Sounds
    // ----------------------------------------------------------------

    _waveStart() {
        const ctx = this.ctx;
        const now = ctx.currentTime;
        // War drum - two low beats
        [0, 0.22].forEach(t => {
            this._noise(0.15, 80, 'lowpass', 0.7, now + t);
            this._osc('sine', 55, now + t, 0.18, 0.5);
        });
        // Horn blast
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now + 0.5);
        osc.frequency.setValueAtTime(330, now + 0.6);
        gain.gain.setValueAtTime(0, now + 0.5);
        gain.gain.linearRampToValueAtTime(0.3, now + 0.52);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);
        osc.connect(gain);
        gain.connect(this.master);
        osc.start(now + 0.5);
        osc.stop(now + 1.0);
    }

    _waveComplete() {
        const ctx = this.ctx;
        const now = ctx.currentTime;
        // Happy major chord + ascending run
        const run = [261.6, 329.6, 392.0, 523.3, 659.3];
        run.forEach((freq, i) => {
            this._osc('sine', freq, now + i * 0.06, 0.2, 0.22);
        });
        // Sustain chord underneath
        [261.6, 329.6, 392.0].forEach(freq => {
            this._osc('triangle', freq, now + 0.3, 0.5, 0.12);
        });
    }

    _levelComplete() {
        const ctx = this.ctx;
        const now = ctx.currentTime;
        // Full triumphant fanfare
        const fanfare = [
            [261.6, 0],    // C4
            [261.6, 0.12], // C4
            [261.6, 0.24], // C4
            [349.2, 0.4],  // F4
            [440.0, 0.6],  // A4
            [523.3, 0.8],  // C5
            [659.3, 1.0],  // E5
            [784.0, 1.2],  // G5
        ];
        fanfare.forEach(([freq, t]) => {
            this._osc('square', freq, now + t, 0.18, 0.25);
            this._osc('sine', freq * 0.5, now + t, 0.18, 0.15);
        });
        // Final chord
        [523.3, 659.3, 784.0].forEach(freq => {
            this._osc('triangle', freq, now + 1.5, 0.8, 0.2);
        });
        this._noise(0.3, 300, 'highpass', 0.15, now + 1.5);
    }

    _gameOver() {
        const ctx = this.ctx;
        const now = ctx.currentTime;
        // Sad descending melody
        const sad = [
            [392.0, 0],    // G4
            [349.2, 0.3],  // F4
            [329.6, 0.6],  // E4
            [293.7, 0.9],  // D4
            [261.6, 1.2],  // C4
            [196.0, 1.7],  // G3 — long final note
        ];
        sad.forEach(([freq, t], i) => {
            const dur = i === sad.length - 1 ? 1.2 : 0.25;
            this._osc('sine', freq, now + t, dur, 0.3);
            this._osc('triangle', freq * 0.5, now + t, dur, 0.1);
        });
        // Low drone
        this._osc('sine', 60, now, 2.5, 0.15);
    }
}
