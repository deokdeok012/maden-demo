addStrings({
  en: {
    "st.csv": "Export CSV",
    "st.ab": "A/B test",
    "st.abNone": "Test one value on half of your players, without a new build.",
    "st.abNew": "New test",
    "st.abStart": "Start test",
    "st.abApply": "Apply B",
    "st.abApplied": "B applied to everyone.",
    "st.abRun": "Day {n} of 7",
    "st.abDone": "Finished after {n} days",
    "st.abA": "A",
    "st.abB": "B",
    "st.abSplit": "50% of new players get B. Runs for 7 days.",
    "st.abp.moves": "Moves per level",
    "st.abp.ads": "Interstitial frequency",
    "st.abp.hint": "Free hints",
    "st.abv0.moves": "Now",
    "st.abv.moves": "+3 moves",
    "st.abv0.ads": "Every 2 levels",
    "st.abv.ads": "Every 3 levels",
    "st.abv0.hint": "1 per day",
    "st.abv.hint": "3 per day",
    "st.exits": "Drop-off points",
    "st.ex.left": "{n}% of players leave here",
    "st.ex.quit": "{p} of players quit at this level",
    "st.ask.tutorial": "Players leave between {a} and {b}. Make this part shorter and clearer.",
    "st.ask.level": "Many players quit at level {n}. Lower its difficulty.",
    "st.dau": "DAU",
    "st.sessions": "Sessions per day",
    "st.funnel": "Funnel",
    "st.retention": "Retention",
    "st.dropoff": "Drop-off by level",
    "st.sessionsCard": "Sessions",
    "st.trend": "Play time per day",
    "st.cohort": "Weekly cohorts",
    "st.thisGame": "This game",
    "st.genreAvg": "Genre average",
    "st.biggest": "Biggest drop",
    "st.tutorial": "Tutorial done",
    "st.level": "Level {n} cleared",
    "st.firstAd": "First ad watched",
    "st.firstBuy": "First purchase",
    "st.install": "Install",
    "st.week": "Week of {date}",
    "st.none": "No analytics yet. They appear after the CPI test.",
    "st.tuneLevels": "Edit levels",
    "st.avgLen": "Avg. session",
    "st.perUser": "Sessions per user per day",
    "st.d7": "7 days",
    "st.d30": "30 days",
    "st.d90": "90 days",
    "st.users": "Players",
    "st.quit": "Quit at level {n}",
    "st.weekCol": "Install week"
  },
  ko: {
    "st.csv": "CSV 내보내기",
    "st.ab": "A/B 테스트",
    "st.abNone": "새 빌드 없이 값 하나를 플레이어 절반에게만 바꿔 비교합니다.",
    "st.abNew": "새 테스트",
    "st.abStart": "테스트 시작",
    "st.abApply": "B 적용",
    "st.abApplied": "B를 모두에게 적용했습니다.",
    "st.abRun": "7일 중 {n}일째",
    "st.abDone": "{n}일 만에 끝남",
    "st.abA": "A",
    "st.abB": "B",
    "st.abSplit": "새 플레이어 50%가 B를 받습니다. 7일 동안 진행합니다.",
    "st.abp.moves": "레벨당 이동 횟수",
    "st.abp.ads": "전면 광고 빈도",
    "st.abp.hint": "무료 힌트",
    "st.abv0.moves": "지금",
    "st.abv.moves": "이동 +3",
    "st.abv0.ads": "2레벨마다",
    "st.abv.ads": "3레벨마다",
    "st.abv0.hint": "하루 1개",
    "st.abv.hint": "하루 3개",
    "st.exits": "이탈 구간",
    "st.ex.left": "플레이어 {n}%가 여기서 떠남",
    "st.ex.quit": "플레이어 {p}가 이 레벨에서 그만둠",
    "st.ask.tutorial": "{a}에서 {b}로 넘어갈 때 많이 떠나. 이 구간을 짧고 쉽게 고쳐 줘.",
    "st.ask.level": "레벨 {n}에서 많이 그만둬. 난이도를 낮춰 줘.",
    "st.dau": "DAU",
    "st.sessions": "하루 세션 수",
    "st.funnel": "퍼널",
    "st.retention": "리텐션",
    "st.dropoff": "레벨별 이탈",
    "st.sessionsCard": "세션",
    "st.trend": "하루 플레이 시간",
    "st.cohort": "주간 코호트",
    "st.thisGame": "이 게임",
    "st.genreAvg": "같은 장르 평균",
    "st.biggest": "가장 큰 이탈",
    "st.tutorial": "튜토리얼 완료",
    "st.level": "레벨 {n} 클리어",
    "st.firstAd": "첫 광고 시청",
    "st.firstBuy": "첫 결제",
    "st.install": "설치",
    "st.week": "{date} 주",
    "st.none": "아직 지표가 없습니다. CPI 테스트를 하면 여기에 표시됩니다.",
    "st.tuneLevels": "레벨 수정",
    "st.avgLen": "평균 세션 길이",
    "st.perUser": "사용자 1명의 하루 세션 수",
    "st.d7": "7일",
    "st.d30": "30일",
    "st.d90": "90일",
    "st.users": "플레이어",
    "st.quit": "레벨 {n}에서 그만둠",
    "st.weekCol": "설치 주"
  }
});
const STATS = /* @__PURE__ */ (() => {
  let days = 30;
  const seed = (key) => {
    let h = 2166136261;
    for (const c of key) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
    return () => (h = Math.imul(h ^ h >>> 15, 2246822507) >>> 0) % 1e4 / 1e4;
  };
  const pct = (v, d = 0) => `${v.toFixed(d)}%`;
  const delta = (v) => `<span class="${v >= 0 ? "up" : "down"}">${v >= 0 ? "+" : "−"}${Math.abs(v).toFixed(1)}%</span>`;
  const cell = (cells, label) => (cells.find(([l]) => l === label) || [])[1];
  function data(g) {
    const r = seed(g.id);
    const sum = LAUNCH.summary(g);
    const cells = sum ? sum.cells : [];
    const d1 = parseFloat(cell(cells, t("gm.d1"))) || 33 + r() * 8;
    const d7 = parseFloat(cell(cells, t("gm.d7"))) || d1 * (0.28 + r() * 0.06);
    const curve = [100, d1, d1 * 0.74, d1 * 0.6, d7, d7 * 0.72, d7 * 0.52, d7 * 0.36];
    const genre = [100, 35, 26, 21, 13, 9.2, 6.6, 4.4];
    const installs = cell(cells, t("lc.installs")) || "—";
    const inst = (() => {
      const m = String(installs).match(/([\d.,]+)\s*([KM]?)/);
      return m ? parseFloat(m[1].replace(/,/g, "")) * ({ K: 1e3, M: 1e6 }[m[2]] || 1) : 0;
    })();
    const dauBase = inst ? inst * (0.15 + r() * 0.1) : 2400 + r() * 6e3;
    const n = Math.round(14 + r() * 6);
    const quit = Array.from({ length: n }, (_, i) => i === 3 ? 14 + r() * 3 : Math.max(1.2, 7.5 - i * 0.32 + (r() - 0.5) * 2.4));
    const walk = (base, spread, tilt) => Array.from({ length: days }, (_, i) => base * (1 + tilt * (i / days - 0.5)) + (r() - 0.5) * spread);
    return {
      installs,
      d1,
      d7,
      curve,
      genre,
      quit,
      d1s: walk(d1, 2.6, 0.06),
      d7s: walk(d7, 1.2, -0.04),
      dau: walk(dauBase, dauBase * 0.08, 0.3),
      sessions: 2.4 + r() * 1.2,
      len: 4.2 + r() * 2,
      play: walk(11 + r() * 4, 2.2, 0.12),
      funnel: [100, 84 + r() * 6, 76 + r() * 5, 51 + r() * 6, 33 + r() * 5, 38 + r() * 6, 1.6 + r() * 1.2],
      buckets: [24 + r() * 6, 31 + r() * 4, 22 + r() * 4, 12 + r() * 3, 8 + r() * 3],
      deltas: Array.from({ length: 6 }, () => (r() - 0.35) * 18)
    };
  }
  function spark(vals) {
    const lo = Math.min(...vals), hi = Math.max(...vals);
    const pts = vals.map((v, i) => `${i / (vals.length - 1) * 100},${28 - (v - lo) / (hi - lo || 1) * 24}`).join(" ");
    return `<svg class="ga-spark" viewBox="0 0 100 30" preserveAspectRatio="none" aria-hidden="true"><polyline points="${pts}"/></svg>`;
  }
  function retention(D) {
    const at = [0, 1, 3, 5, 7, 14, 21, 30];
    const W = 420, H = 220, L = 34, B = 196, T = 14;
    const x = (d) => L + d / 30 * (W - L - 10);
    const y = (v) => B - v / 100 * (B - T);
    const line = (vals) => vals.map((v, i) => `${i ? "L" : "M"}${x(at[i]).toFixed(1)} ${y(v).toFixed(1)}`).join(" ");
    const grid = [0, 25, 50, 75, 100].map((v) => `<line class="grid" x1="${L}" x2="${W - 10}" y1="${y(v)}" y2="${y(v)}"/><text class="axis" x="${L - 8}" y="${y(v) + 4}" text-anchor="end">${v}%</text>`).join("");
    const ticks = [1, 7, 14, 30].map((d) => `<text class="axis" x="${x(d)}" y="${H - 4}" text-anchor="middle">D${d}</text>`).join("");
    const dots = [1, 4].map((i) => `<circle cx="${x(at[i])}" cy="${y(D.curve[i])}" r="4"/><text class="val" x="${x(at[i]) + 8}" y="${y(D.curve[i]) - 8}">${pct(D.curve[i])}</text>`).join("");
    return `<svg class="ga-chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${t("st.retention")}">${grid}${ticks}
      <path class="genre" d="${line(D.genre)}"/><path class="mine" d="${line(D.curve)}"/>${dots}</svg>
      <div class="ga-legend"><i class="mine"></i>${t("st.thisGame")}<i class="genre"></i>${t("st.genreAvg")}</div>`;
  }
  function trend(vals) {
    const W = 420, H = 150, B = 128, T = 12;
    const hi = Math.max(...vals) * 1.15;
    const pts = vals.map((v, i) => `${i / (vals.length - 1) * W},${B - v / hi * (B - T)}`);
    return `<svg class="ga-chart ga-area" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true">
      <path class="fill" d="M0 ${B} L${pts.join(" L")} L${W} ${B} Z"/><polyline points="${pts.join(" ")}"/><line class="grid" x1="0" x2="${W}" y1="${B}" y2="${B}"/></svg>`;
  }
  function render(g) {
    const sum = LAUNCH.summary(g);
    const SOURCES = [["Firebase", "https://console.firebase.google.com/"], ["GameAnalytics", "https://tool.gameanalytics.com/"], ["Facebook", "https://business.facebook.com/"]];
    const bar = `<div class="ga-bar"><span class="seg">${[[7, "st.d7"], [30, "st.d30"], [90, "st.d90"]].map(([n, k]) => `<button data-days="${n}" aria-pressed="${days === n}">${t(k)}</button>`).join("")}</span><span class="sp"></span>
      <span class="ga-src">${SOURCES.map(([name, url]) => `<a class="chip" href="${url}" target="_blank" rel="noopener">${name}</a>`).join("")}</span><button class="btn small" data-csv>${t("st.csv")}</button></div>`;
    if (!sum) return `<div class="ga">${empty(t("st.none"), "", `<a class="btn primary" href="#/games/${g.id}?tab=publish">${t("stage.cpi")}</a>`)}</div>`;
    const D = data(g);
    const kpis = [
      [t("lc.installs"), D.installs, D.dau.map((v) => v * 0.4)],
      [t("st.dau"), compact(Math.round(D.dau.at(-1))), D.dau],
      [t("gm.d1"), pct(D.d1), D.d1s],
      [t("gm.d7"), pct(D.d7), D.d7s],
      [t("st.sessions"), D.sessions.toFixed(1), D.play.map((v) => v / 4)],
      [t("gm.playtime"), t("lc.minutes", { n: D.play.at(-1).toFixed(1) }), D.play]
    ];
    const kpi = box("", `<div class="ga-kpis">${kpis.map(([label, value, line], i) => `<div class="ga-kpi"><span class="g">${label}</span><b>${value}</b>${delta(D.deltas[i])}${spark(line)}</div>`).join("")}</div>`, { cls: "span-3 ga-kpibox" });
    const steps = [t("st.install"), t("st.tutorial"), t("st.level", { n: 1 }), t("st.level", { n: 5 }), t("st.level", { n: 10 }), t("st.firstAd"), t("st.firstBuy")];
    const drops = D.funnel.slice(1, 5).map((v, i) => D.funnel[i] - v);
    const worst = drops.indexOf(Math.max(...drops)) + 1;
    const funnel = box(t("st.funnel"), `<ol class="ga-funnel">${steps.map((name, i) => `<li class="${i === worst ? "worst" : ""}">
        <span class="n">${name}</span><span class="ga-track"><i style="width:${D.funnel[i]}%"></i></span><b>${pct(D.funnel[i], D.funnel[i] < 10 ? 1 : 0)}</b>
        ${i === worst ? `<span class="tag warn">${t("st.biggest")} −${drops[i - 1].toFixed(0)}%p</span>` : "<span></span>"}</li>`).join("")}</ol>`, { cls: "span-2" });
    const ret = box(t("st.retention"), retention(D));
    const peak = D.quit.indexOf(Math.max(...D.quit));
    const legs = D.funnel.slice(0, 5).map((v, i) => [i, v - D.funnel[i + 1]]).filter(([, d]) => d > 0).sort((x, y) => y[1] - x[1]).slice(0, 2);
    const exits = [
      ...legs.map(([i, d]) => ({ name: `${steps[i]} → ${steps[i + 1]}`, what: t("st.ex.left", { n: d.toFixed(0) }), size: d, ask: t("st.ask.tutorial", { a: steps[i], b: steps[i + 1] }) })),
      { name: t("lv.title", { n: peak + 1 }), what: t("st.ex.quit", { p: pct(D.quit[peak], 1) }), size: D.quit[peak], ask: t("st.ask.level", { n: peak + 1 }) }
    ].sort((x, y) => y.size - x.size);
    const exitBox = box(t("st.exits"), `<ol class="ga-exits">${exits.map((x, i) => `<li><span class="ga-ex-no">${i + 1}</span><span><b>${esc(x.name)}</b><span class="g">${x.what}</span></span><span class="sp"></span><a class="btn small" href="#/games/${g.id}?tab=tune" data-ask="${esc(x.ask)}">${t("qa.fix")}</a></li>`).join("")}</ol>`, { cls: "span-3 ga-exitbox" });
    const hiQ = Math.max(...D.quit);
    const drop = box(
      t("st.dropoff"),
      `<div class="ga-bars">${D.quit.map((v, i) => `<span class="${i === peak ? "peak" : ""}" title="${t("st.quit", { n: i + 1 })} · ${pct(v, 1)}"><i style="height:${v / hiQ * 100}%"></i><em>${i + 1}</em></span>`).join("")}</div>
        <p class="ga-note"><b>${t("st.quit", { n: peak + 1 })}</b> ${pct(D.quit[peak], 1)}</p>`,
      { cls: "span-2", foot: `<a class="btn" href="#/games/${g.id}?tab=tune&view=levels">${t("st.tuneLevels")}</a>` }
    );
    const hiB = Math.max(...D.buckets);
    const sessions = box(t("st.sessionsCard"), `<div class="ga-hist">${D.buckets.map((v, i) => `<span><i style="height:${v / hiB * 100}%"></i><em>${i < 4 ? i + 1 : "5+"}</em></span>`).join("")}</div>
        <ul class="rows"><li><span>${t("st.perUser")}</span><span class="sp"></span><b>${D.sessions.toFixed(1)}</b></li><li><span>${t("st.avgLen")}</span><span class="sp"></span><b>${t("lc.minutes", { n: D.len.toFixed(1) })}</b></li></ul>`);
    const play = box(t("st.trend"), `<b class="box-num">${t("lc.minutes", { n: D.play.at(-1).toFixed(1) })}</b>${trend(D.play)}`);
    const weeks = ["2026-09-15", "2026-09-22", "2026-09-29", "2026-10-06"];
    const cols = [[1, 1], [3, 2], [7, 4], [14, 5], [30, 7]];
    const cohort = box(t("st.cohort"), `<table class="table ga-cohort"><thead><tr><th>${t("st.weekCol")}</th><th class="num">${t("st.users")}</th>${cols.map(([d]) => `<th class="num">D${d}</th>`).join("")}</tr></thead><tbody>
        ${weeks.map((w, wi) => `<tr><td>${t("st.week", { date: w })}</td><td class="num">${num(Math.round(D.dau[wi * 5] * 0.42))}</td>${cols.map(([d, ci]) => {
      const age = (weeks.length - 1 - wi) * 7 + 7;
      if (d > age) return '<td class="num"></td>';
      const v = D.curve[ci] * (0.94 + wi * 0.03);
      return `<td class="num"><span class="ga-heat" style="--a:${Math.min(1, v / 45).toFixed(2)}">${pct(v)}</span></td>`;
    }).join("")}</tr>`).join("")}</tbody></table>`, { cls: "span-2" });
    const ab = LAUNCH.step(g) >= 2 ? (() => {
      const T = abOf(g);
      const row = (k, name, v) => `<tr><td>${name}</td><td class="num">${v.d1}%</td><td class="num">$${v.arp.toFixed(3)}</td><td class="num">${num(v.n)}</td></tr>`;
      return box(
        t("st.ab"),
        T.state === "none" ? `<p class="gm-none">${t("st.abNone")}</p>` : `<p class="ga-ab-what"><b>${t(`st.abp.${T.param}`)}</b> · ${t(T.state === "done" ? "st.abDone" : "st.abRun", { n: T.day })}</p>
        <table class="table"><thead><tr><th></th><th class="num">D1</th><th class="num">ARPDAU</th><th class="num">${t("st.users")}</th></tr></thead><tbody>${row("a", t("st.abA"), T.a)}${row("b", `${t("st.abB")} · ${t(`st.abv.${T.param}`)}`, T.b)}</tbody></table>`,
        { cls: "span-3", extra: T.state === "none" ? `<button class="btn small primary" data-ab-new>${t("st.abNew")}</button>` : T.state === "done" && !T.applied ? `<button class="btn small primary" data-ab-apply>${t("st.abApply")}</button>` : T.applied ? `<span class="tag ok">${t("st.abApplied")}</span>` : "" }
      );
    })() : "";
    return `<div class="ga">${bar}${bento([kpi, exitBox, ab, funnel, ret, drop, sessions, cohort, play].filter(Boolean))}</div>`;
  }
  function abOf(g) {
    g.ab ||= g.id === "candy" ? { state: "done", param: "moves", day: 7, a: { d1: 36, arp: 0.041, n: 2140 }, b: { d1: 39, arp: 0.044, n: 2118 } } : { state: "none" };
    return g.ab;
  }
  function csv(g) {
    const D = data(g);
    const lines = [["day", "dau", "d1", "d7", "playtime_min"], ...D.dau.map((v, i) => [i + 1, Math.round(v), D.d1s[i].toFixed(1), D.d7s[i].toFixed(1), D.play[i].toFixed(1)])];
    const url = URL.createObjectURL(new Blob([lines.map((l) => l.join(",")).join("\n")], { type: "text/csv" }));
    Object.assign(document.createElement("a"), { href: url, download: `${g.name.replace(/\s+/g, "-")}-metrics.csv` }).click();
    setTimeout(() => URL.revokeObjectURL(url), 1e3);
  }
  function mount(root, g) {
    root.querySelector("[data-csv]")?.addEventListener("click", () => csv(g));
    root.querySelector("[data-ab-new]")?.addEventListener("click", () => {
      dialog({
        title: t("st.abNew"),
        body: `<div class="ga-ab-pick">${["moves", "ads", "hint"].map((k, i) => `<label class="ga-ab-opt"><input type="radio" name="abp" value="${k}" ${i ? "" : "checked"}><span><b>${t(`st.abp.${k}`)}</b><span class="g">${t("st.abA")} · ${t(`st.abv0.${k}`)} / ${t("st.abB")} · ${t(`st.abv.${k}`)}</span></span></label>`).join("")}</div><p class="muted">${t("st.abSplit")}</p>`,
        actions: [{ label: t("cancel") }, { label: t("st.abStart"), primary: true, onClick: (n) => {
          Object.assign(abOf(g), { state: "run", param: n.querySelector("input[name=abp]:checked").value, day: 1, a: { d1: 35, arp: 0.039, n: 310 }, b: { d1: 36, arp: 0.04, n: 298 } });
          rerender();
        } }]
      });
    });
    root.querySelector("[data-ab-apply]")?.addEventListener("click", () => {
      abOf(g).applied = true;
      logVersion(g, `A/B · ${t(`st.abv.${abOf(g).param}`)}`);
      rerender();
      toast(t("st.abApplied"));
    });
    root.querySelectorAll("[data-ask]").forEach((a) => a.addEventListener("click", () => {
      if (g) g.ask = a.dataset.ask;
    }));
    root.querySelectorAll("[data-days]").forEach((b) => b.addEventListener("click", () => {
      days = Number(b.dataset.days);
      rerender();
    }));
  }
  return { render, mount };
})();
