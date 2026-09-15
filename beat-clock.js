class BeatClock {
  constructor(speed = 1, turnSeconds = 2.85, trackOffset = 0.29) {
    this.speed = [1, 0.75, 0.5].includes(speed) ? speed : 1;
    this.context = new (window.AudioContext || window.webkitAudioContext)();
    this.turnSeconds = Number.isFinite(turnSeconds) && turnSeconds >= 2.1 && turnSeconds <= 10 ? turnSeconds : 2.85;
    this.trackOffset = Number.isFinite(trackOffset) && trackOffset >= 0 && trackOffset <= 10 ? trackOffset : 0.29;
    this.period = this.turnSeconds / this.speed;
    this.source = null;
  }
  async prepare() {
    await this.context.resume();
    const bytes = Uint8Array.from(atob(window.BEASTIE_SONG_PARTS.join("")), c => c.charCodeAt(0));
    this.buffer = await this.context.decodeAudioData(bytes.buffer);
    this.trackEnd = this.trackOffset + Math.floor((this.buffer.duration - this.trackOffset) / this.turnSeconds) * this.turnSeconds;
    if (this.trackEnd <= this.trackOffset) throw new Error("Audio track is too short.");
  }
  start() {
    this.gain = this.context.createGain();
    this.gain.gain.value = 0.35;
    this.gain.connect(this.context.destination);
    this.source = this.context.createBufferSource();
    this.source.buffer = this.buffer;
    this.source.loop = true;
    this.source.loopStart = this.trackOffset;
    this.source.loopEnd = this.trackEnd;
    this.source.playbackRate.value = this.speed;
    this.source.connect(this.gain);
    this.origin = this.context.currentTime + 0.12;
    this.source.start(this.origin, this.trackOffset);
  }
  nextBoundary() {
    return this.origin + Math.max(0, Math.ceil((this.context.currentTime + 0.12 - this.origin) / this.period)) * this.period;
  }
  async waitUntil(time, active, display = false) {
    while (active()) {
      const left = time - this.context.currentTime;
      if (left <= 0) return true;
      if (display) countdownElement.textContent = left.toFixed(1);
      await new Promise(resolve => setTimeout(resolve, Math.min(20, left * 1000)));
    }
    return false;
  }
  cue(time, frequency = 660) {
    const oscillator = this.context.createOscillator();
    const gain = this.context.createGain();
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.10, time + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.075);
    oscillator.connect(gain);
    gain.connect(this.context.destination);
    oscillator.start(time);
    oscillator.stop(time + 0.08);
  }
  stop() {
    if (this.source) { this.source.stop(); this.source = null; }
    this.context.close().catch(() => {});
  }
}
