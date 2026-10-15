const FEEL_STANDARD = { haptic: 1, shake: 1, burst: 1, sound: 1, tap: 1, finish: 1, speed: 1 };
function makeFeel(stage, read, host = stage) {
  let audio = null;
  let point = null;
  const now = () => ({ ...FEEL_STANDARD, ...read() || {} });
  const colors = () => {
    const css = getComputedStyle(host);
    const list = ["--accent", "--primary", "--good"].map((k) => css.getPropertyValue(k).trim()).filter(Boolean);
    return list.length ? [...list, "#FFFFFF"] : ["#2F5BFF", "#FF9254", "#12A66A", "#FFFFFF"];
  };
  const layer = () => {
    let el = host.querySelector(":scope > .feel-layer");
    if (!el) {
      el = Object.assign(document.createElement("div"), { className: "feel-layer" });
      el.style.cssText = "position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:50";
      host.append(el);
    }
    return el;
  };
  const at = (x, y) => {
    const box = host.getBoundingClientRect();
    const p = x == null ? point : { x, y };
    return p && p.x >= box.left && p.x <= box.right && p.y >= box.top && p.y <= box.bottom ? { x: p.x - box.left, y: p.y - box.top } : { x: box.width / 2, y: box.height / 2 };
  };
  const fly = (el, frames, ms, easing) => {
    layer().append(el);
    el.animate(frames, { duration: ms / now().speed, easing, fill: "forwards" }).onfinish = () => el.remove();
  };
  const dot = (p, size, color, round) => {
    const el = document.createElement("i");
    el.style.cssText = `position:absolute;left:${p.x}px;top:${p.y}px;width:${size}px;height:${size}px;margin:${-size / 2}px;border-radius:${round ? "50%" : "2px"};background:${color}`;
    return el;
  };
  function tone(freq, ms, type = "sine", gain = 0.05, delay = 0) {
    const f = now();
    if (!f.sound) return;
    try {
      audio = audio || new (window.AudioContext || window.webkitAudioContext)();
      const start = audio.currentTime + delay / 1e3;
      const osc = audio.createOscillator();
      const vol = audio.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      vol.gain.setValueAtTime(gain * f.sound, start);
      vol.gain.exponentialRampToValueAtTime(1e-4, start + ms / 1e3);
      osc.connect(vol).connect(audio.destination);
      osc.start(start);
      osc.stop(start + ms / 1e3);
    } catch (e) {
    }
  }
  function vibrate(pattern) {
    const f = now();
    if (!f.haptic) return;
    try {
      if (navigator.vibrate) navigator.vibrate([].concat(pattern).map((ms) => Math.round(ms * f.haptic)));
    } catch (e) {
    }
  }
  function shake(power) {
    const f = now();
    if (!f.shake) return;
    const d = Math.min(12, power * f.shake * 1.8);
    stage.animate([
      { transform: "translate(0,0)" },
      { transform: `translate(${d}px,${-d * 0.6}px)` },
      { transform: `translate(${-d * 0.8}px,${d * 0.5}px)` },
      { transform: `translate(${d * 0.5}px,${d * 0.3}px)` },
      { transform: "translate(0,0)" }
    ], { duration: (150 + 40 * power) / f.speed, easing: "ease-out" });
  }
  function burst(p, power) {
    const f = now();
    if (!f.burst) return;
    const palette = colors();
    const count = Math.min(28, Math.round((3 + 3 * power) * f.burst));
    for (let i = 0; i < count; i += 1) {
      const a = i / count * Math.PI * 2 + Math.random() * 0.8;
      const r = (22 + Math.random() * 30) * (0.6 + 0.4 * f.burst) * Math.sqrt(power);
      const size = 5 + Math.random() * 5 * f.burst;
      fly(
        dot(p, size, palette[i % palette.length], i % 3 !== 0),
        [{ transform: "translate(0,0) scale(1)", opacity: 1 }, { transform: `translate(${Math.cos(a) * r}px,${Math.sin(a) * r + 10}px) scale(.2)`, opacity: 0 }],
        420 + Math.random() * 180,
        "cubic-bezier(.2,.8,.3,1)"
      );
    }
  }
  function ring(p) {
    const f = now();
    if (!f.tap) return;
    const size = 26 + 18 * f.tap;
    const el = dot(p, size, "transparent", true);
    el.style.boxShadow = `0 0 0 ${1 + f.tap}px rgba(255,255,255,.9), 0 0 0 ${2 + f.tap}px rgba(15,18,24,.18)`;
    fly(el, [{ transform: "scale(.3)", opacity: 0.9 }, { transform: "scale(1)", opacity: 0 }], 320, "ease-out");
  }
  function confetti() {
    const f = now();
    if (!f.finish) return;
    const box = host.getBoundingClientRect();
    const palette = colors();
    for (let i = 0; i < 26 * f.finish; i += 1) {
      const x = Math.random() * box.width;
      const el = dot({ x, y: -12 }, 7 + Math.random() * 6, palette[i % palette.length], i % 2 === 0);
      const drift = (Math.random() - 0.5) * 120;
      fly(
        el,
        [{ transform: "translate(0,0) rotate(0deg)", opacity: 1 }, { transform: `translate(${drift}px,${box.height * (0.55 + Math.random() * 0.45)}px) rotate(${360 + Math.random() * 540}deg)`, opacity: 0 }],
        1100 + Math.random() * 900,
        "cubic-bezier(.3,.6,.5,1)"
      );
    }
  }
  return {
    // 누른 곳을 기억해 두었다가 타격 이펙트를 그 자리에 낸다.
    tap(x, y, button) {
      point = { x, y };
      ring(at(x, y));
      if (button) tone(520, 45, "sine", 0.03);
    },
    // 맞았다·맞췄다·합쳐졌다 같은 타격 한 번. ms 는 게임이 요청한 진동 길이로, 길수록 세게 돌려준다.
    hit(ms = 10, x, y) {
      const power = Math.max(1, Math.min(3, ms / 10));
      vibrate(ms);
      shake(power);
      burst(at(x, y), power);
      tone(170 + power * 45, 80, "triangle", 0.06);
    },
    buzz: vibrate,
    win() {
      confetti();
      vibrate([20, 40, 30]);
      [523, 659, 784, 1047].forEach((freq, i) => tone(freq, 180, "triangle", 0.05, i * 90));
    },
    lose() {
      shake(2);
      vibrate(60);
      tone(150, 320, "sawtooth", 0.04);
    },
    // 설정 한 줄을 골랐을 때 그것이 무엇인지 한 번 보여 준다.
    demo(key) {
      const box = host.getBoundingClientRect();
      const mid = { x: box.width / 2, y: box.height / 2 };
      if (key === "haptic") vibrate(30);
      else if (key === "shake") shake(2);
      else if (key === "burst") burst(mid, 2);
      else if (key === "sound") {
        tone(520, 60, "sine", 0.04);
        tone(260, 90, "triangle", 0.06, 110);
      } else if (key === "tap") ring(mid);
      else if (key === "finish") this.win();
      else if (key === "speed") {
        ring(mid);
        burst(mid, 1);
      } else {
        shake(2);
        burst(mid, 2);
        ring(mid);
        vibrate(20);
        tone(215, 80, "triangle", 0.06);
      }
    },
    // 게임 화면의 CSS 애니메이션·트랜지션을 설정한 배속으로 돌린다.
    pace(doc) {
      ["animationstart", "transitionrun"].forEach((type) => doc.addEventListener(type, (e) => {
        const speed = now().speed;
        if (speed !== 1 && e.target.getAnimations) e.target.getAnimations().forEach((a) => {
          a.playbackRate = speed;
        });
      }, true));
    }
  };
}
