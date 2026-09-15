class BeatClock {
  constructor() {
    this.context = new (window.AudioContext || window.webkitAudioContext)();
    this.period = 2.9;
    this.source = null;
  }
  async prepare() {
    await this.context.resume();
    const bytes = Uint8Array.from(atob(window.BEASTIE_BEAT_WAV), c => c.charCodeAt(0));
    this.buffer = await this.context.decodeAudioData(bytes.buffer);
    if (Math.abs(this.buffer.duration - 2.9) > 0.001) throw new Error('Wrong beat duration.');
    this.period = this.buffer.duration;
  }
  start() {
    this.gain = this.context.createGain();
    this.gain.gain.value = 0.35;
    this.gain.connect(this.context.destination);
    this.source = this.context.createBufferSource();
    this.source.buffer = this.buffer;
    this.source.loop = true;
    this.source.loopEnd = this.period;
    this.source.connect(this.gain);
    this.origin = this.context.currentTime + 0.12;
    this.source.start(this.origin);
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
  cue(time) {
    const oscillator = this.context.createOscillator();
    const gain = this.context.createGain();
    oscillator.frequency.value = 880;
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
