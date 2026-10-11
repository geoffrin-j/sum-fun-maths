// Sounds (generated, no audio files needed) and confetti.
(function (SF) {
  "use strict";
  let ctx = null;

  function audio() {
    if (!ctx) {
      const C = window.AudioContext || window.webkitAudioContext;
      if (!C) return null;
      ctx = new C();
    }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }

  function tone(freq, start, dur, type, gain) {
    const a = audio();
    if (!a) return;
    const o = a.createOscillator(), g = a.createGain(), t = a.currentTime + start;
    o.type = type || "sine";
    o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain || 0.15, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(a.destination);
    o.start(t);
    o.stop(t + dur + 0.05);
  }

  SF.sound = {
    enabled: function () { return SF.store.progress.settings.sound !== false; },
    correct: function () { if (!this.enabled()) return; tone(660, 0, 0.12, "triangle"); tone(990, 0.1, 0.2, "triangle"); },
    wrong: function () { if (!this.enabled()) return; tone(196, 0, 0.28, "sawtooth", 0.05); },
    fanfare: function () {
      if (!this.enabled()) return;
      [523, 659, 784, 1047].forEach(function (f, i) { tone(f, i * 0.12, 0.32, "triangle"); });
    }
  };

  SF.confetti = function () {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const c = document.getElementById("confetti");
    if (!c) return;
    const g = c.getContext("2d"), dpr = window.devicePixelRatio || 1;
    const W = c.width = window.innerWidth * dpr, H = c.height = window.innerHeight * dpr;
    const colors = ["#3A6FF8", "#FFC531", "#17A673", "#EE4B57", "#7B5CE0"];
    const parts = [];
    for (let i = 0; i < 160; i++) {
      parts.push({
        x: W / 2 + (Math.random() - 0.5) * W * 0.3,
        y: H * 0.35,
        vx: (Math.random() - 0.5) * 18 * dpr,
        vy: (-Math.random() * 16 - 6) * dpr,
        s: (6 + Math.random() * 8) * dpr,
        r: Math.random() * 6,
        vr: (Math.random() - 0.5) * 0.3,
        c: colors[i % colors.length]
      });
    }
    const t0 = performance.now();
    function frame(t) {
      g.clearRect(0, 0, W, H);
      parts.forEach(function (p) {
        p.vy += 0.45 * dpr; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.r += p.vr;
        g.save(); g.translate(p.x, p.y); g.rotate(p.r);
        g.fillStyle = p.c; g.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2);
        g.restore();
      });
      if (t - t0 < 3500) requestAnimationFrame(frame);
      else g.clearRect(0, 0, W, H);
    }
    requestAnimationFrame(frame);
  };
})(window.SF);
