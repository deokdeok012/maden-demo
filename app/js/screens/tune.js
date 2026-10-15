addStrings({
  en: {
    "gm.tabTune": "Edit",
    "tn.difficulty": "Difficulty",
    "tn.feel": "Feel",
    "tn.tab.stage": "Levels",
    "tn.tab.wave": "Waves",
    "tn.tab.endless": "Zones",
    "tn.tab.grow": "Expansions",
    "tn.tab.versus": "Tiers",
    "unit.stage": "Level",
    "unit.wave": "Wave",
    "unit.endless": "Zone",
    "unit.grow": "Expansion",
    "unit.versus": "Tier",
    "units.stage": "levels",
    "units.wave": "waves",
    "units.endless": "zones",
    "units.grow": "expansions",
    "units.versus": "tiers",
    "tn.now": "Now",
    "tn.unitNo": "{unit} {n}",
    "tn.more": "+{n}",
    "tn.fresh": "New element",
    "tn.every": "Every {n}",
    "tn.off": "Off",
    "tn.avg": "Avg. est. clear rate",
    "tn.hardest": "Hardest",
    "tn.hardCount": "Hard {units}",
    "tn.ramp": "Ramp",
    "tn.ramp.gentle": "Gentle",
    "tn.ramp.standard": "Standard",
    "tn.ramp.steep": "Steep",
    "tn.start": "Start",
    "tn.lift.easy": "Easy",
    "tn.lift.normal": "Normal",
    "tn.lift.hard": "Hard",
    "tn.hard": "Hard {units}",
    "tn.relief": "Easy after hard",
    "tn.preset": "Preset",
    "tn.soft": "Soft",
    "tn.standard": "Standard",
    "tn.punchy": "Punchy",
    "tn.haptic": "Haptics",
    "tn.shake": "Screen shake",
    "tn.burst": "Hit effects",
    "tn.sound": "Sound effects",
    "tn.tap": "Touch feedback",
    "tn.finish": "Win effect",
    "tn.speed": "Animation speed",
    "tn.light": "Normal",
    "tn.strong": "Strong",
    "tn.slow": "Slow",
    "tn.normal": "Normal",
    "tn.fast": "Fast",
    "tn.apply": "Apply",
    "tn.reset": "Reset",
    "tn.changes": "{n} changes",
    "tn.oneChange": "1 change",
    "tn.applied": "Changes applied.",
    "tn.failed": "Could not apply. Nothing was changed.",
    "tn.addTitle": "Add {n} {units}?",
    "tn.redoTitle": "Redesign {units} like {game}?",
    "tn.working": "Level · making {n} {units}",
    "tn.reworking": "Level · redesigning {units}",
    "tn.applying": "Applying",
    "tn.summary": "{n} {units} · {rate} est. clear rate",
    "tn.follows": "Follows {game}",
    "tn.custom": "Custom"
  },
  ko: {
    "gm.tabTune": "수정",
    "tn.difficulty": "난이도",
    "tn.feel": "손맛",
    "tn.tab.stage": "레벨",
    "tn.tab.wave": "웨이브",
    "tn.tab.endless": "구역",
    "tn.tab.grow": "확장",
    "tn.tab.versus": "구간",
    "unit.stage": "레벨",
    "unit.wave": "웨이브",
    "unit.endless": "구역",
    "unit.grow": "확장",
    "unit.versus": "구간",
    "units.stage": "레벨",
    "units.wave": "웨이브",
    "units.endless": "구역",
    "units.grow": "확장 단계",
    "units.versus": "실력 구간",
    "tn.now": "현재",
    "tn.unitNo": "{unit} {n}",
    "tn.more": "+{n}",
    "tn.fresh": "새 요소",
    "tn.every": "{n}마다",
    "tn.off": "끔",
    "tn.avg": "평균 예상 클리어율",
    "tn.hardest": "가장 어려운 곳",
    "tn.hardCount": "어려운 {units}",
    "tn.ramp": "상승",
    "tn.ramp.gentle": "완만",
    "tn.ramp.standard": "보통",
    "tn.ramp.steep": "가파름",
    "tn.start": "시작 난이도",
    "tn.lift.easy": "쉽게",
    "tn.lift.normal": "보통",
    "tn.lift.hard": "어렵게",
    "tn.hard": "어려운 {units}",
    "tn.relief": "어려운 뒤 쉬어 가기",
    "tn.preset": "프리셋",
    "tn.soft": "부드럽게",
    "tn.standard": "보통",
    "tn.punchy": "강하게",
    "tn.haptic": "햅틱",
    "tn.shake": "화면 흔들림",
    "tn.burst": "타격 이펙트",
    "tn.sound": "효과음",
    "tn.tap": "터치 반응",
    "tn.finish": "승리 연출",
    "tn.speed": "애니메이션 속도",
    "tn.light": "보통",
    "tn.strong": "강하게",
    "tn.slow": "느리게",
    "tn.normal": "보통",
    "tn.fast": "빠르게",
    "tn.apply": "적용",
    "tn.reset": "되돌리기",
    "tn.changes": "변경 {n}개",
    "tn.oneChange": "변경 1개",
    "tn.applied": "변경을 적용했습니다.",
    "tn.failed": "적용하지 못했습니다. 바뀐 것은 없습니다.",
    "tn.addTitle": "{units} {n}개를 추가할까요?",
    "tn.redoTitle": "{units}을(를) {game}처럼 다시 만들까요?",
    "tn.working": "Level · {units} {n}개 만드는 중",
    "tn.reworking": "Level · {units} 다시 만드는 중",
    "tn.applying": "적용 중",
    "tn.summary": "{units} {n}개 · 예상 클리어율 {rate}",
    "tn.follows": "{game} 기준",
    "tn.custom": "직접 설정"
  }
});
const TUNE = (() => {
  const RAMP = { gentle: 1.6, standard: 1, steep: 0.6 };
  const LIFT = { easy: 0, normal: 0.08, hard: 0.2 };
  const SPEED = [0.8, 1, 1.35];
  const FEEL_ROWS = ["haptic", "shake", "burst", "sound", "tap", "finish", "speed"];
  const PRESETS = {
    soft: { haptic: 1, shake: 0, burst: 1, sound: 1, tap: 1, finish: 1, speed: 0.8 },
    standard: { ...FEEL_STANDARD },
    punchy: { haptic: 2, shake: 2, burst: 2, sound: 2, tap: 2, finish: 2, speed: 1.35 }
  };
  const PRESET_FOR = { puzzle: "standard", board: "soft", simulation: "soft", casual: "standard", action: "punchy", arcade: "punchy", strategy: "standard" };
  const LEVEL = AGENTS.find((a) => a.key === "level");
  const edits = {};
  const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
  const clone = (x) => JSON.parse(JSON.stringify(x));
  const genreOf = (g) => g.order ? g.order.game.genre : (GENRES.find((x) => x.local.includes(g.base)) || {}).key || GAME[g.base].kind;
  const planFor = (g) => planOf(genreOf(g), g.order ? g.order.game.mode : null, GAME[g.base].group);
  function applied(g) {
    if (g.tune) return g.tune;
    const p = planFor(g);
    const L = g.made && g.made.levels || {};
    const count = L.count || (g.order ? g.order.progression.count : g.stage === "live" ? p.best : g.stage === "test" ? p.values[0] : p.first);
    g.tune = {
      count,
      like: g.order && GAME[g.order.progression.like.key] ? g.order.progression.like.key : g.base,
      fresh: L.newElementEvery ?? (count > 10 ? 5 : 2),
      ramp: RAMP[L.ramp] ? L.ramp : "standard",
      lift: Object.keys(LIFT).find((k) => LIFT[k] === L.lift) || "easy",
      hardEvery: L.hardEvery ?? 5,
      relief: L.easyAfterHard ?? 1,
      feel: { ...FEEL_STANDARD, ...g.made && g.made.feel || {} }
    };
    return g.tune;
  }
  const SHAPE_KEYS = ["ramp", "hardEvery", "relief", "lift", "fresh"];
  function shapeOf(key) {
    let h = 0;
    for (const ch of key) h = (h * 31 + ch.charCodeAt(0)) % 9973;
    return { ramp: ["standard", "gentle", "steep"][h % 3], hardEvery: [5, 3, 10, 5][h % 4], relief: 1 + h % 2, lift: ["easy", "normal"][h % 2], fresh: [5, 3, 10][h % 3] };
  }
  function edit(g) {
    edits[g.id] ||= { tab: "levels", next: clone(applied(g)), sel: 1, busy: null };
    return edits[g.id];
  }
  const changed = (g) => {
    const a = applied(g);
    const n = edit(g).next;
    return [...["count", "like"].filter((k) => a[k] !== n[k]), ...FEEL_ROWS.filter((k) => a.feel[k] !== n.feel[k])];
  };
  function levelAt(tn, n) {
    const along = tn.count > 1 ? (n - 1) / (tn.count - 1) : 0;
    const t2 = LIFT[tn.lift] + (1 - LIFT[tn.lift]) * along ** RAMP[tn.ramp];
    const hard = !!tn.hardEvery && n % tn.hardEvery === 0;
    const since = tn.hardEvery ? n % tn.hardEvery : 0;
    const relief = !!tn.hardEvery && n > tn.hardEvery && since > 0 && since <= tn.relief;
    const peak = Math.min(0.86, 0.34 + 0.2 * Math.log10(tn.count));
    const d = Math.max(0.04, Math.min(1, 0.1 + (peak - 0.1) * t2 + (hard ? 0.12 : 0) - (relief ? 0.08 : 0)));
    return { n, d, hard, relief, fresh: !!tn.fresh && n > 1 && (n - 1) % tn.fresh === 0, clear: Math.round(97 - 62 * d) };
  }
  function summary(tn) {
    const all = Array.from({ length: tn.count }, (_, i) => levelAt(tn, i + 1));
    const worst = all.reduce((a, b) => b.clear < a.clear ? b : a);
    return { avg: Math.round(all.reduce((n, x) => n + x.clear, 0) / all.length), worst, hard: all.filter((x) => x.hard).length };
  }
  function work(g, to = edit(g).next) {
    const a = applied(g);
    const p = planFor(g);
    const added = Math.max(0, to.count - a.count);
    const redo = to.like !== a.like;
    if (!added && !redo) return null;
    const minutes = PLAN_STUDY + (redo ? to.count : added) * p.make / 60;
    return { added, redo, minutes, cost: Math.max(1, Math.round(minutes * LEVEL.cost / 10)) };
  }
  function chart(g) {
    const e = edit(g);
    const tn = e.next;
    const bars = Math.min(tn.count, 40);
    const small = matchMedia("(max-width: 860px)").matches;
    const W = small ? 340 : 420, H = 200, top = bars <= 12 ? 44 : 14, base = H - 26;
    const marks = tn.count / bars < (tn.hardEvery || 0);
    const ceil = Math.max(0.5, Math.min(1, Math.max(...Array.from({ length: tn.count }, (_, i) => levelAt(tn, i + 1).d)) + 0.06));
    const step = W / bars;
    const bw = Math.max(3, Math.min(34, step * 0.68));
    const body = Array.from({ length: bars }, (_, i) => {
      const from = Math.floor(i * tn.count / bars) + 1;
      const to = Math.floor((i + 1) * tn.count / bars);
      const items = Array.from({ length: Math.max(1, to - from + 1) }, (_2, k) => levelAt(tn, from + k));
      const d = Math.max(...items.map((x2) => x2.d));
      const one = items.length === 1 ? items[0] : null;
      const hard = marks && items.some((x2) => x2.hard);
      const h = Math.max(4, d / ceil * (base - top));
      const x = i * step + (step - bw) / 2;
      const r = Math.min(5, bw / 2);
      const label = one ? t("tn.unitNo", { unit: t(`unit.${planFor(g).kind}`), n: one.n }) : `${num(from)}–${num(to)}`;
      const clear = Math.round(items.reduce((n, x2) => n + x2.clear, 0) / items.length);
      return `<g class="bar ${hard ? "hard" : ""} ${one && one.relief ? "easy" : ""} ${one && one.n === e.sel ? "sel" : ""}" data-level="${from}" data-tip="${label} · ${clear}%">
        <rect class="hit" x="${i * step}" y="0" width="${step}" height="${H}"/>
        <path d="M${x} ${base} v${-(h - r)} q0 ${-r} ${r} ${-r} h${bw - 2 * r} q${r} 0 ${r} ${r} v${h - r} z"/>
        ${bars <= 12 ? `<text class="val" x="${x + bw / 2}" y="${base - h - 8}" text-anchor="middle">${clear}%</text>` : ""}
        ${one && one.fresh ? `<circle class="fresh" cx="${x + bw / 2}" cy="${base - h - (bars <= 12 ? 26 : 9)}" r="3.5"/>` : ""}
      </g>`;
    }).join("");
    const tick = (n, anchor, x) => `<text class="axis" x="${x}" y="${H - 6}" text-anchor="${anchor}">${num(n)}</text>`;
    return `<svg class="tn-chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${t("tn.difficulty")}">
      <line class="grid" x1="0" x2="${W}" y1="${base}" y2="${base}"/>${body}
      ${tick(1, "start", 0)}${tn.count > 2 ? tick(Math.round((tn.count + 1) / 2), "middle", W / 2) : ""}${tn.count > 1 ? tick(tn.count, "end", W) : ""}</svg>`;
  }
  function mini(tn, ramp) {
    const pts = Array.from({ length: 24 }, (_, i) => {
      const along = i / 23;
      const y = LIFT[tn.lift] + (1 - LIFT[tn.lift]) * along ** RAMP[ramp];
      return `${4 + along * 72},${40 - y * 34}`;
    }).join(" ");
    return `<svg class="tn-mini" viewBox="0 0 80 44" aria-hidden="true"><polyline points="${pts}"/></svg>`;
  }
  const seg = (name, options, value) => `<span class="seg" role="group">${options.map(([v, label]) => `<button data-set="${name}" data-value="${v}" aria-pressed="${String(v) === String(value)}">${label}</button>`).join("")}</span>`;
  const row = (label, control, extra = "") => `<li><span class="n">${label}</span>${extra}<span class="sp"></span>${control}</li>`;
  const every = (list, now) => [.../* @__PURE__ */ new Set([...list, now])].sort((a, b) => a - b).map((n) => [n, n ? t("tn.every", { n }) : t("tn.off")]);
  function likeCard(g) {
    const tn = edit(g).next;
    const a = applied(g);
    const p = planFor(g);
    const games = [.../* @__PURE__ */ new Set([
      GAME[g.base],
      GAME[a.like],
      ...MAKE.gamesOf(MAKE.listed.some((x) => x.key === genreOf(g)) ? genreOf(g) : MAKE.listed[0].key),
      ...MAKE.listed.filter((x) => x.family === p.family).flatMap((x) => MAKE.gamesOf(x.key).slice(0, 2))
    ])].filter(Boolean).slice(0, 6);
    if (!games.includes(GAME[tn.like])) games[games.length - 1] = GAME[tn.like];
    return box(t(`q5.${p.kind}`), `<div class="tn-like">${games.map((x) => `
        <button class="game" data-set="like" data-value="${x.key}" aria-pressed="${x.key === tn.like}">
          ${MAKE.media(x, `${x.key === g.base ? `<span class="badge">${t("suggested")}</span>` : ""}<span class="check">${ICON.check}</span>`)}
          <span class="n">${esc(x.name)}</span>
        </button>`).join("")}</div>`, { cls: "tn-card" });
  }
  function amountCard(g) {
    const tn = edit(g).next;
    const a = applied(g);
    const p = planFor(g);
    const amounts = [a.count, ...p.values.filter((v) => v > a.count)];
    return box(t(`amount.${p.kind}`), `<div class="tn-amounts">${amounts.map((v) => {
      const w = work(g, { ...tn, count: v, like: a.like });
      return `<button class="tn-amount" data-set="count" data-value="${v}" aria-pressed="${v === tn.count}">
          <span class="mk-name">${num(v)}</span>
          <span class="g">${w ? MAKE.span(w.minutes) : t("tn.now")}</span>${v === p.best && v !== a.count ? `<span class="tag accent">${t("suggested")}</span>` : ""}
        </button>`;
    }).join("")}</div>`, { cls: "tn-card", extra: `<span class="count">${num(tn.count)}</span>` });
  }
  function curveCard(g) {
    const tn = edit(g).next;
    return box(t("tn.difficulty"), `<div class="tn-plot">${chart(g)}<div class="en-tip" hidden></div></div>`, { cls: "tn-card", extra: `<span class="muted">${t("tn.follows", { game: esc(GAME[tn.like].name) })}</span>` });
  }
  function feelCard(g) {
    const feel = edit(g).next.feel;
    const best = PRESET_FOR[planFor(g).family] || "standard";
    const levels = (k) => k === "speed" ? SPEED.map((v, i) => [v, t(["tn.slow", "tn.normal", "tn.fast"][i])]) : [[0, t("tn.off")], [1, t("tn.light")], [2, t("tn.strong")]];
    return box(t("tn.feel"), `
        <div class="seg tn-presets">${Object.keys(PRESETS).map((k) => `<button class="${k === best ? "rec" : ""}" data-preset="${k}" aria-pressed="${same(PRESETS[k], feel)}" title="${k === best ? t("suggested") : ""}">${t(`tn.${k}`)}</button>`).join("")}</div>
        <ul class="tn-rows">${FEEL_ROWS.map((k) => row(t(`tn.${k}`), seg(`feel.${k}`, levels(k), feel[k]))).join("")}</ul>`, { cls: "tn-card" });
  }
  function foot(g) {
    const e = edit(g);
    const tn = e.next;
    const p = planFor(g);
    const n = changed(g).length;
    const w = work(g);
    const units = t(`units.${p.kind}`);
    if (e.busy) {
      return `<span class="cell"><img class="avatar" src="${LEVEL.img}" alt=""><span><span class="n">${e.busy}</span>
        <span class="tn-bar"><i style="animation-duration:${e.busyFor}ms"></i></span></span></span><span class="sp"></span><i class="state now"></i>`;
    }
    const info = `<span class="cell"><img class="avatar" src="${LEVEL.img}" alt=""><span><span class="n">${n ? t(n === 1 ? "tn.oneChange" : "tn.changes", { n }) : esc(g.name)}</span>
      <span class="g">${t("tn.summary", { units, n: num(tn.count), rate: `${summary(tn).avg}%` })}${w ? ` · ${MAKE.span(w.minutes)}` : ""}</span></span></span>`;
    return n ? `${info}<span class="sp"></span><button class="btn" data-reset>${t("tn.reset")}</button>
        <button class="btn primary big" data-apply>${t("tn.apply")}</button>` : info;
  }
  const left = (g) => `${likeCard(g)}${amountCard(g)}`;
  const right = (g) => `${curveCard(g)}${feelCard(g)}`;
  function render(g) {
    const m = MODULE[g.screens.find((id) => MODULE[id].group === "gameplay") || g.screens[0]];
    return `
      <div class="tn">
        <div class="tn-side" data-side="left">${left(g)}</div>
        <div class="tn-center"><div class="device" data-hero>${g.play ? `<span class="shot play"><iframe src="${g.play}" sandbox="allow-scripts" title="${t("play")}"></iframe></span>` : shot(m.img, { video: m.video })}</div></div>
        <div class="tn-side" data-side="right">${right(g)}</div>
      </div>
      <div class="mk-foot tn-foot" data-foot>${foot(g)}</div>`;
  }
  function mount(root, g) {
    const e = edit(g);
    const box2 = root.querySelector(".tn");
    if (!box2) return;
    const device = box2.querySelector(".device");
    const frame = device.querySelector("iframe");
    const juice = frame ? null : makeFeel(device, () => edit(g).next.feel, device.querySelector(".shot"));
    const say = (msg) => frame && frame.contentWindow.postMessage({ maden: msg }, "*");
    const live = () => {
      const tn = edit(g).next;
      say({ feel: tn.feel, levels: { ramp: tn.ramp, lift: LIFT[tn.lift], hardEvery: tn.hardEvery, easyAfterHard: tn.relief, newElementEvery: tn.fresh } });
    };
    const demo = (key) => frame ? say({ demo: key }) : juice.demo(key);
    if (juice) device.addEventListener("pointerdown", (ev) => {
      juice.tap(ev.clientX, ev.clientY, false);
      juice.hit(12, ev.clientX, ev.clientY);
    });
    frame?.addEventListener("load", live);
    const paint = () => {
      if (!box2.isConnected) return;
      const y = window.scrollY;
      box2.querySelector("[data-side=left]").innerHTML = left(g);
      box2.querySelector("[data-side=right]").innerHTML = right(g);
      root.querySelector("[data-foot]").innerHTML = foot(g);
      bind();
      hoverVideo(root);
      window.scrollTo(0, y);
    };
    const done = (before) => {
      const st = edit(g);
      g.tune = clone(st.next);
      st.busy = null;
      g.updated = AS_OF;
      paint();
      toast(t("tn.applied"), before ? () => {
        st.next = clone(before.tune);
        refund(before.used);
        send(0, before.tune, null);
      } : null);
    };
    function send(cost, tn, before) {
      g.ver = (g.ver || 1) + 1;
      const st = edit(g);
      const w = work(g, tn);
      const p = planFor(g);
      st.busy = w ? t(w.redo ? "tn.reworking" : "tn.working", { n: num(w.added), units: t(`units.${p.kind}`) }) : t("tn.applying");
      st.busyFor = g.play && WORKER.token ? w ? 4e4 : 4e3 : w ? 3200 : 500;
      paint();
      const used = cost > 0 ? spend(`Level · ${g.name}`, cost, st.busyFor) : null;
      if (before) before.used = used;
      const finish = () => done(before);
      if (!(g.play && WORKER.token)) return setTimeout(finish, st.busyFor);
      const body = { id: g.id.slice(2), levels: { count: tn.count, like: { key: tn.like, name: GAME[tn.like].name }, ramp: tn.ramp, lift: LIFT[tn.lift], hardEvery: tn.hardEvery, easyAfterHard: tn.relief, newElementEvery: tn.fresh }, feel: tn.feel };
      const fail = () => {
        refund(used);
        st.busy = null;
        paint();
        toast(t("tn.failed"));
      };
      return WORKER.tune(body).then((job) => {
        const timer = setInterval(async () => {
          const now = await WORKER.status(job.id).catch(() => null);
          if (!now || now.state === "queued" || now.state === "working") return;
          clearInterval(timer);
          if (now.state !== "done") return fail();
          if (frame && frame.isConnected) frame.src = `${g.play}?v=${Date.now()}`;
          finish();
        }, 700);
      }).catch(fail);
    }
    function apply() {
      const st = edit(g);
      const w = work(g);
      const before = { tune: clone(applied(g)), cost: w ? w.cost : 0 };
      if (!w) return send(0, st.next, before);
      const p = planFor(g);
      const enough = store.credits >= w.cost;
      return dialog({
        title: w.redo && !w.added ? t("tn.redoTitle", { units: t(`units.${p.kind}`), game: esc(GAME[st.next.like].name) }) : t("tn.addTitle", { n: num(w.added), units: t(`units.${p.kind}`) }),
        body: `<p>${enough ? t("confirmBody", { cost: num(w.cost), have: num(store.credits) }) : t("notEnough", { have: num(store.credits) })}</p>`,
        actions: enough ? [{ label: t("cancel") }, { label: t("tn.apply"), primary: true, onClick: () => send(w.cost, st.next, before) }] : [{ label: t("cancel") }, { label: t("plans"), primary: true, onClick: () => go("#/plans") }]
      });
    }
    function bind() {
      const st = edit(g);
      const tip = box2.querySelector(".en-tip");
      box2.querySelectorAll("[data-set]").forEach((b) => b.addEventListener("click", () => {
        const [name, key] = b.dataset.set.split(".");
        const raw = b.dataset.value;
        const value = ["like", "ramp", "lift"].includes(name) ? raw : Number(raw);
        if (key) st.next.feel[key] = value;
        else st.next[name] = value;
        if (name === "like") Object.assign(st.next, value === applied(g).like ? Object.fromEntries(SHAPE_KEYS.map((k) => [k, applied(g)[k]])) : shapeOf(value));
        if (name === "count") st.sel = Math.min(st.sel, value);
        paint();
        live();
        if (key) demo(key);
      }));
      box2.querySelectorAll("[data-preset]").forEach((b) => b.addEventListener("click", () => {
        st.next.feel = { ...PRESETS[b.dataset.preset] };
        paint();
        live();
        demo("all");
      }));
      box2.querySelectorAll("[data-level]").forEach((b) => b.addEventListener("click", () => {
        st.sel = Number(b.dataset.level);
        if (st.sel <= applied(g).count) say({ play: st.sel });
        paint();
        TOOLS.levelEditor(g, st.sel, levelAt(st.next, st.sel).d);
      }));
      box2.querySelectorAll(".tn-chart .bar").forEach((bar) => {
        bar.addEventListener("mouseenter", () => {
          const plot = bar.closest(".tn-plot").getBoundingClientRect();
          const at = bar.querySelector("path").getBoundingClientRect();
          tip.textContent = bar.dataset.tip;
          tip.hidden = false;
          tip.style.left = `${at.left + at.width / 2 - plot.left}px`;
          tip.style.top = `${at.top - plot.top - 10}px`;
        });
        bar.addEventListener("mouseleave", () => {
          tip.hidden = true;
        });
      });
      root.querySelector("[data-reset]")?.addEventListener("click", () => {
        st.next = clone(applied(g));
        paint();
        live();
      });
      root.querySelector("[data-apply]")?.addEventListener("click", apply);
    }
    bind();
  }
  return {
    render,
    mount,
    open(g, tab) {
      if (["levels", "feel"].includes(tab)) edit(g).tab = tab;
    },
    // 출시 단계(Stage 2 · Scale-Up)에서 레벨을 늘릴 때 쓴다.
    plan: planFor,
    count: (g) => applied(g).count,
    work: (g, count) => work(g, { ...applied(g), count }),
    grow(g, count) {
      applied(g).count = count;
      delete edits[g.id];
    },
    // 게임 화면의 «다듬기» 줄이 쓰는 것: 지금 값 한 줄씩.
    info(g) {
      const a = applied(g);
      const p = planFor(g);
      const preset = Object.keys(PRESETS).find((k) => same(PRESETS[k], a.feel));
      const sum = summary(a);
      const n = Math.min(a.count, 30);
      const bars = Array.from({ length: n }, (_, i) => levelAt(a, Math.floor(i * a.count / n) + 1));
      const top = Math.max(...bars.map((x) => x.d));
      return {
        tab: t(`tn.tab.${p.kind}`),
        levels: `${t("tn.summary", { units: t(`units.${p.kind}`), n: num(a.count), rate: `${sum.avg}%` })} · ${t("tn.follows", { game: esc(GAME[a.like].name) })}`,
        feel: preset ? t(`tn.${preset}`) : t("tn.custom"),
        count: `${t(`unit.${p.kind}`)} ${num(a.count)}`,
        rate: `${sum.avg}%`,
        like: esc(GAME[a.like].name),
        bars: `<span class="tn-strip" aria-hidden="true">${bars.map((x) => `<i class="${x.hard ? "hard" : ""}" style="height:${Math.round(x.d / top * 100)}%"></i>`).join("")}</span>`,
        rows: FEEL_ROWS.slice(0, 4).map((k) => [t(`tn.${k}`), k === "speed" ? SPEED.indexOf(a.feel[k]) : a.feel[k]])
      };
    }
  };
})();
