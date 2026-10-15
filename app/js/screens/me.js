addStrings({
  en: {
    "me.stepOf": "Step {a} of {b}",
    "me.title": "In progress",
    "me.making": "In progress",
    "me.cpi": "In CPI test",
    "me.live": "Live",
    "me.team": "Supercent · 6 members",
    "me.games": "Games",
    "me.next": "Next up",
    "me.editing": "Editing",
    "me.metrics": "Metrics",
    "me.none": "No games here yet.",
    "me.installs": "Installs",
    "me.cpiAvg": "Avg. cost per install",
    "me.d1Avg": "Avg. D1",
    "me.status": "Status",
    "me.tests": "Tests",
    "me.revenue": "Earnings this month",
    "me.vsLast": "vs last month",
    "me.ready": "Ready for CPI test",
    "me.total": "Total",
    "me.byGame": "By game",
    "me.trend": "Earnings",
    "me.share": "{n}% of total"
  },
  ko: {
    "me.stepOf": "{b}단계 중 {a}단계",
    "me.title": "진행 중",
    "me.making": "제작 중",
    "me.cpi": "CPI 테스트 중",
    "me.live": "출시됨",
    "me.team": "Supercent · 멤버 6명",
    "me.games": "게임",
    "me.next": "다음 할 일",
    "me.editing": "수정 중",
    "me.metrics": "지표 확인",
    "me.none": "아직 이 단계의 게임이 없습니다.",
    "me.installs": "설치",
    "me.cpiAvg": "평균 설치당 비용",
    "me.d1Avg": "평균 D1",
    "me.status": "상태",
    "me.tests": "테스트",
    "me.revenue": "이번 달 수익",
    "me.vsLast": "지난달 대비",
    "me.ready": "CPI 테스트 준비됨",
    "me.total": "합계",
    "me.byGame": "게임별",
    "me.trend": "수익",
    "me.share": "전체의 {n}%"
  }
});
const ME = /* @__PURE__ */ (() => {
  const TAB_KEYS = ["making", "cpi", "live"];
  const tabOf = (g) => {
    const at = LAUNCH.step(g);
    return at === 0 ? "making" : at <= 2 ? "cpi" : "live";
  };
  const monthUsd = (g) => LEDGER[g.id]?.["2026-10"] || 0;
  const nextStep = (g) => {
    const p = g.prep || {};
    if (!p.played || !p.tuned) return t("gm.step.tune");
    if (g.sdk?.state !== "done") return t("gm.step.sdk");
    if (LAUNCH.ready(g) < LAUNCH.VIDEOS.min) return t("gm.step.creative");
    if (!ASO.done(g)) return t("gm.step.aso");
    return t("stage.cpi");
  };
  const thumb = (g) => g.cover || MODULE[g.screens.find((id) => MODULE[id].group === "gameplay") || g.screens[0]].img;
  const busy = (g) => g.building ? `<span class="me-busy ${g.building.ready ? "ready" : ""}"><i class="state ${g.building.ready ? "" : "now"}"></i>${g.building.ready ? t("ready") : t("building")}</span>` : "";
  const cover = (g, link) => link ? `<a class="gm-cover one" href="#/games/${g.id}">${shot(thumb(g))}${busy(g)}</a>` : `<span class="gm-cover one">${shot(thumb(g))}${busy(g)}</span>`;
  const num1 = (s) => parseFloat(String(s).replace(/[^0-9.]/g, "")) || 0;
  function overview(tab, list) {
    if (!list.length) return "";
    if (tab === "making") {
      return bento([
        box(t("me.games"), `<b class="box-num">${list.length}</b>`),
        box(t("me.ready"), `<b class="box-num">${list.filter((g) => nextStep(g) === t("stage.cpi")).length}</b>`),
        box(t("me.editing"), `<b class="box-num">${list.filter((g) => nextStep(g) === t("gm.step.tune")).length}</b>`)
      ], "me-bento");
    }
    if (tab === "cpi") {
      const rows = list.map((g) => ({ g, s: LAUNCH.summary(g) })).filter((r) => r.s);
      const cell = (r, i) => r.s.cells[i]?.[1] ?? "—";
      const installs = rows.reduce((n, r) => n + num1(cell(r, 0)) * (/K/.test(cell(r, 0)) ? 1e3 : 1), 0);
      const cpis = rows.map((r) => num1(cell(r, 1))).filter(Boolean);
      const d1s = rows.filter((r) => /%/.test(cell(r, 2))).map((r) => num1(cell(r, 2)));
      const avg = (a) => a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0;
      return bento([
        box(t("me.installs"), `<b class="box-num">${compact(Math.round(installs))}</b>`),
        box(t("me.cpiAvg"), `<b class="box-num">${cpis.length ? `$${avg(cpis).toFixed(2)}` : "—"}</b>`),
        box(t("me.d1Avg"), `<b class="box-num">${d1s.length ? `${Math.round(avg(d1s))}%` : "—"}</b>`),
        box(t("me.status"), `<table class="table me-table"><thead><tr><th>${tr(L("Game", "게임"))}</th><th>${t("me.status")}</th>${rows[0] ? rows[0].s.cells.map(([label]) => `<th class="num">${label}</th>`).join("") : ""}</tr></thead>
          <tbody>${rows.map((r) => `<tr><td><a href="#/games/${r.g.id}">${gameIcon(GAME[r.g.base], "ico")}${esc(r.g.name)}</a></td><td><span class="tag ${r.s.status === t("lc.review") ? "warn" : "ok"}">${t(`stage.${r.s.stage}`)} · ${r.s.status}</span></td>${r.s.cells.map(([, v]) => `<td class="num">${v}</td>`).join("")}</tr>`).join("")}</tbody></table>`, { cls: "span-3" })
      ], "me-bento");
    }
    const total = list.reduce((n, g) => n + monthUsd(g), 0);
    const months = Object.keys(LEDGER[list[0].id] || {}).slice(-10);
    const series = months.map((m) => list.reduce((n, g) => n + (LEDGER[g.id]?.[m] || 0), 0));
    const top = Math.max(1, ...series);
    const prev = series.at(-2) || 0;
    const change = prev ? Math.round((series.at(-1) - prev) / prev * 100) : 0;
    return bento([
      box(t("me.revenue"), `<b class="box-num">${usd(total)}</b>`),
      box(t("me.vsLast"), `<b class="box-num ${change >= 0 ? "up" : "down"}">${change >= 0 ? "+" : ""}${change}%</b>`),
      box(t("me.games"), `<b class="box-num">${list.length}</b>`),
      box(t("me.trend"), `<div class="me-bars">${series.map((v, i) => `<span style="--h:${Math.round(v / top * 100)}%" class="${i === series.length - 1 ? "now" : ""}" title="${months[i]} · ${usd(v)}"><i></i><b>${months[i].slice(5)}</b></span>`).join("")}</div>`, { cls: "span-2" }),
      box(t("me.byGame"), `<ul class="rows me-next">${[...list].sort((a, b) => monthUsd(b) - monthUsd(a)).map((g) => `<li><a href="#/games/${g.id}">${gameIcon(GAME[g.base], "ico")}<span class="n">${esc(g.name)}</span><span class="sp"></span><span class="g">${t("me.share", { n: total ? Math.round(monthUsd(g) / total * 100) : 0 })}</span><b>${usd(monthUsd(g))}</b></a></li>`).join("")}</ul>`, {})
    ], "me-bento");
  }
  const NEXT = [["gm.step.dev", "gm.tabTune", "tune"], ["gm.step.sdk", "gm.step.sdk", ""], ["gm.step.qa", "qa.run", ""], ["gm.step.creative", "gm.step.creative", ""], ["gm.step.aso", "gm.step.aso", "aso"], ["gm.step.submit", "sub.run", ""], ["stage.cpi", "stage.cpi", "publish"]];
  function nextOf(g) {
    g.prep ||= { played: false, tuned: false };
    const done = [g.prep.played && g.prep.tuned, g.sdk?.state === "done", g.qa?.state === "done", LAUNCH.ready(g) >= LAUNCH.VIDEOS.min, ASO.done(g), TOOLS.submitOf(g).state === "done", false];
    const i = done.indexOf(false);
    return { i, step: i + 2, of: 8, row: NEXT[i] };
  }
  function card(g, tab) {
    const s = LAUNCH.summary(g);
    const nx = tab === "making" && !g.building ? nextOf(g) : null;
    const line = g.building ? g.building.ready ? t("ready") : t("building") : nx ? `${t("me.stepOf", { a: nx.step, b: nx.of })} · ${t(nx.row[0])}` : tab === "live" ? `${t("me.revenue")} · ${usd(monthUsd(g))}` : s ? `${s.cells[0][0]} ${s.cells[0][1]} · ${s.cells[1][0]} ${s.cells[1][1]}` : "";
    const making = tab === "making";
    const btns = making ? `<a class="btn small primary" href="#/games/${g.id}${nx?.row[2] ? `?tab=${nx.row[2]}` : ""}">${nx ? t(nx.row[1]) : t("gm.tabTune")}</a>` : `<a class="btn small" href="#/games/${g.id}?tab=tune">${t("gm.tabTune")}</a><a class="btn small primary" href="#/games/${g.id}?tab=stats">${t("me.metrics")}</a>`;
    return `<article class="card gm-card me-card ${making ? "" : "still"}">${cover(g, making)}
      <div class="gm-info"><span class="me-ci">${making ? `<a class="n" href="#/games/${g.id}">${esc(g.name)}</a>` : `<span class="n">${esc(g.name)}</span>`}${line ? `<span class="g">${line}</span>` : ""}${nx ? `<span class="tn-bar me-step"><i style="width:${(nx.step - 1) / nx.of * 100}%;animation:none"></i></span>` : ""}</span>
        <span class="me-btns">${btns}</span><button class="icon-btn flat" data-more="${g.id}" aria-label="${t("rename")}">${ICON.more}</button></div></article>`;
  }
  function render(query) {
    const tab = TAB_KEYS.includes(query.get("tab")) ? query.get("tab") : "making";
    const games = query.get("empty") ? [] : store.games;
    const by = Object.fromEntries(TAB_KEYS.map((k) => [k, games.filter((g) => tabOf(g) === k).sort((a, b) => !!b.building - !!a.building || b.updated.localeCompare(a.updated))]));
    const list = by[tab];
    return `
      <div class="me-head"><span class="me-face">DG</span><div><h1>${t("me.title")}</h1><span class="g">${esc(tr(L("Deokgu", "덕구")))} · ${t("me.team")}</span></div><span class="sp"></span>
        <a class="credits" href="#/credits"><img class="coin" src="${COIN}" alt="">${num(store.credits)}</a><a class="btn primary" href="#/make">${ICON.plus}${t("newGame")}</a></div>
      <nav class="subtabs me-tabs">${TAB_KEYS.map((k) => `<a href="#/me?tab=${k}" ${k === tab ? 'aria-current="page"' : ""}>${t(`me.${k}`)}<span class="count">${by[k].length}</span></a>`).join("")}</nav>
      ${!games.length ? `<div class="empty-art"><img src="${gen("empty-games.jpg")}" alt="">${empty(t("gm.none"), "", `<a class="btn primary" href="#/make">${t("newGame")}</a>`)}</div>` : !list.length ? empty(t("me.none")) : `${overview(tab, list)}<h2 class="me-h">${t("me.games")}<span class="count">${list.length}</span></h2><div class="gm-grid">${list.map((g) => card(g, tab)).join("")}</div>`}`;
  }
  return { render, tabOf, nextOf };
})();
