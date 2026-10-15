addStrings({
  en: {
    "en.thisMonth": "This month",
    "en.vsLast": "vs last month",
    "en.nextPayout": "Next payout",
    "en.soFar": "So far",
    "en.p1": "This month",
    "en.p3": "3 months",
    "en.p10": "This year",
    "en.total": "Total",
    "en.suggest": "Suggestions",
    "en.report": "Report",
    "en.vsMonth": "vs last month",
    "en.open": "Open",
    "en.r1": "Players stay longer since Story was added on 2026-09-28.",
    "en.r2": "Fewer new players since its last update on 2026-10-04.",
    "en.r3": "Reached the Puzzle chart on 2026-10-02.",
    "en.a1": "Add Daily reward to Golden Blocks",
    "en.a1w": "New players dropped after 2026-10-04. Players who see a daily reward come back 1.4x more.",
    "en.a2": "Start Stage 2 for Dice Survivor",
    "en.a2w": "The CPI test passed. More levels and ads come next.",
    "en.a3": "List Beach Smash screens in Market",
    "en.a3w": "Decor and Story screens sell well to other teams.",
    "en.byGame": "By game",
    "en.bySource": "By source",
    "en.game": "Game",
    "en.trend": "Trend",
    "en.change": "Change",
    "en.marketSales": "Market sales",
    "en.none": "No earnings yet.",
    "en.noneText": "Earnings start when a published game gets players.",
    "en.step1": "Make a game",
    "en.step2": "Publish it",
    "en.step3": "Get first earnings",
    "en.steps": "{n} of 3",
    "en.earnings": "Earnings",
    "en.bank": "Bank transfer",
    "en.seePayouts": "View payouts",
    "en.latest": "Latest release",
    "en.rank": "Earnings rank",
    "en.viewGame": "View game",
    "en.inProgress": "In progress",
    "en.topItem": "Top item",
    "en.itemsSold": "Items sold",
    "en.seeGames": "My games",
    "en.pnl": "Net profit",
    "en.revenue": "Revenue",
    "en.uaSpend": "UA spend",
    "en.net": "Net",
    "en.roas": "ROAS",
    "en.since": "Since Scale-Up",
    "en.vsPrev": "vs previous period",
    "en.a1b": "Add daily reward",
    "en.a2b": "Start Stage 2",
    "en.a3b": "List in Market"
  },
  ko: {
    "en.thisMonth": "이번 달",
    "en.vsLast": "지난달 대비",
    "en.nextPayout": "다음 지급",
    "en.soFar": "현재까지",
    "en.p1": "이번 달",
    "en.p3": "3개월",
    "en.p10": "올해",
    "en.total": "합계",
    "en.suggest": "추천",
    "en.report": "리포트",
    "en.vsMonth": "지난달 대비",
    "en.open": "열기",
    "en.r1": "2026-09-28에 스토리를 추가한 뒤 플레이 시간이 늘었습니다.",
    "en.r2": "2026-10-04 마지막 업데이트 이후 신규 플레이어가 줄었습니다.",
    "en.r3": "2026-10-02에 퍼즐 차트에 올랐습니다.",
    "en.a1": "Golden Blocks에 일일 보상 추가",
    "en.a1w": "2026-10-04 이후 신규 플레이어가 줄었습니다. 일일 보상을 본 플레이어는 1.4배 더 돌아옵니다.",
    "en.a2": "Dice Survivor Stage 2 시작",
    "en.a2w": "CPI 테스트를 통과했습니다. 다음은 레벨 추가와 광고입니다.",
    "en.a3": "Beach Smash 화면을 마켓에 등록",
    "en.a3w": "꾸미기 · 스토리 화면은 다른 팀에게 잘 팔리는 종류입니다.",
    "en.byGame": "게임별",
    "en.bySource": "수익원별",
    "en.game": "게임",
    "en.trend": "추이",
    "en.change": "변화",
    "en.marketSales": "마켓 판매",
    "en.none": "아직 수익이 없습니다.",
    "en.noneText": "출시한 게임에 플레이어가 생기면 수익이 시작됩니다.",
    "en.step1": "게임 만들기",
    "en.step2": "출시하기",
    "en.step3": "첫 수익 받기",
    "en.steps": "3단계 중 {n}단계",
    "en.earnings": "수익",
    "en.bank": "계좌 이체",
    "en.seePayouts": "지급 보기",
    "en.latest": "최근 출시",
    "en.rank": "수익 순위",
    "en.viewGame": "게임 보기",
    "en.inProgress": "진행 중",
    "en.topItem": "가장 많이 팔린 상품",
    "en.itemsSold": "판매 수",
    "en.seeGames": "내 게임",
    "en.pnl": "순수익",
    "en.revenue": "매출",
    "en.uaSpend": "UA 지출",
    "en.net": "순수익",
    "en.roas": "ROAS",
    "en.since": "Scale-Up 이후",
    "en.vsPrev": "직전 기간 대비",
    "en.a1b": "일일 보상 추가",
    "en.a2b": "Stage 2 시작",
    "en.a3b": "마켓에 등록"
  }
});
(() => {
  let period = 10;
  const NOW = AS_OF.slice(0, 7);
  const KEYS = Object.keys(LEDGER);
  const of = (key, month) => LEDGER[key][month] || 0;
  const total = (month) => KEYS.reduce((n, k) => n + of(k, month), 0);
  const pct = (now, prev) => prev ? Math.round((now / prev - 1) * 100) : null;
  const delta = (v) => v === null ? "" : `<span class="${v >= 0 ? "up" : "down"}">${v >= 0 ? "+" : "−"}${Math.abs(v)}%</span>`;
  const monthName = (m) => (/* @__PURE__ */ new Date(`${m}-01T00:00:00`)).toLocaleString(lang === "ko" ? "ko-KR" : "en-US", { month: "short" });
  function bars(months) {
    const small = matchMedia("(max-width: 860px)").matches;
    const W = small ? 340 : 720, H = small ? 220 : 280, base = H - 36, top = 24, gutter = 48;
    const max = Math.max(...months.map(total));
    const ceil = Math.ceil(max / 500) * 500;
    const step = (W - gutter) / months.length;
    const bw = Math.min(44, step * 0.56);
    const y = (v) => base - v / ceil * (base - top);
    const grid = [0, ceil / 2, ceil].map((v) => `
      <line x1="0" x2="${W - gutter + 8}" y1="${y(v)}" y2="${y(v)}" class="grid"/>
      <text x="${W}" y="${y(v) + 4}" text-anchor="end" class="axis">${usd(v)}</text>`).join("");
    const marks = months.map((m, i) => {
      const v = total(m);
      const x = i * step + (step - bw) / 2;
      const h = Math.max(2, base - y(v));
      const now = m === NOW;
      const label = now || i === months.length - 1 || months.length <= 3;
      return `<g class="bar ${now ? "now" : ""}" data-tip="${monthName(m)} ${m.slice(0, 4)} · ${usd(v)}">
        <rect x="${i * step}" y="${top - 12}" width="${step}" height="${base - top + 36}" class="hit"/>
        <path d="M${x} ${base} v${-(h - 4)} q0 -4 4 -4 h${bw - 8} q4 0 4 4 v${h - 4} z"/>
        ${label ? `<text x="${x + bw / 2}" y="${y(v) - 8}" text-anchor="middle" class="val">${usd(v)}</text>` : ""}
        <text x="${x + bw / 2}" y="${base + 20}" text-anchor="middle" class="axis">${monthName(m)}</text>
      </g>`;
    }).join("");
    return `<svg class="en-chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${t("en.total")}">${grid}${marks}</svg>`;
  }
  function spark(key) {
    const vals = MONTHS.map((m) => of(key, m));
    const max = Math.max(...vals);
    const pts = vals.map((v, i) => `${i / (vals.length - 1) * 96 + 2},${26 - v / max * 22}`).join(" ");
    return `<svg class="en-spark" viewBox="0 0 100 30" aria-hidden="true"><polyline points="${pts}"/><circle cx="98" cy="${26 - vals.at(-1) / max * 22}" r="3"/></svg>`;
  }
  function emptyView() {
    const steps = ["en.step1", "en.step2", "en.step3"];
    return `<div class="card en-empty">
      <img class="en-empty-art" src="${gen("empty-earn.jpg")}" alt="">
      <h2>${t("en.none")}</h2><p class="muted">${t("en.noneText")}</p>
      <ol>${steps.map((s, i) => `<li><i>${i + 1}</i><span>${t(s)}</span></li>`).join("")}</ol>
      <span class="g">${t("en.steps", { n: 0 })}</span>
      <a class="btn primary big" href="#/make">${t("newGame")}</a>
    </div>`;
  }
  const SUGGEST = [["a1", "developer", "#/games/candy?tab=tune&ask=daily"], ["a2", "level", "#/games/dice?tab=publish"], ["a3", "marketer", "#/earn/market?list=1"]];
  const REPORT = [["bubble", "r3"], ["bay", "r1"], ["candy", "r2"]];
  route("/earn", {
    section: "earn",
    name: "earn",
    render({ query }) {
      if (query.get("empty")) return `${subtabs(TABS.earn, "#/earn")}${emptyView()}`;
      if (query.get("period")) period = Number(query.get("period"));
      const months = MONTHS.slice(-period);
      const prev = MONTHS[MONTHS.indexOf(NOW) - 1];
      const sum = months.reduce((n, m) => n + total(m), 0);
      const games = store.games.filter((g) => LEDGER[g.id]);
      const maxSource = Math.max(...SOURCES.map((s) => s.usd));
      const row = (key, name, icon2, href, p = null) => `
        <tr><td><a class="cell" href="${href}">${icon2}<span class="n">${name}</span></a></td>
          <td class="hide-s">${spark(key)}</td>
          <td class="num"><b>${usd(of(key, NOW))}</b></td>
          <td class="num">${delta(pct(of(key, NOW), of(key, prev)))}</td>
          <td class="num hide-s">${p ? `−${usd(p.spend)}` : "—"}</td>
          <td class="num hide-s">${p ? usd(p.revenue - p.spend) : "—"}</td>
          <td class="num hide-s">${p ? `${p.roas}%` : "—"}</td></tr>`;
      const ranked = [...games].sort((a, b) => of(b.id, NOW) - of(a.id, NOW));
      const live = games.filter((g) => LAUNCH.step(g) === 4).sort((a, b) => b.updated.localeCompare(a.updated))[0];
      const going = store.games.filter((g) => {
        const at = LAUNCH.step(g);
        return at > 0 && at < 4;
      });
      const icon = (g) => gameIcon(GAME[g.base]);
      const sold = SHOP.sales();
      const top = sold.reduce((a, b) => b.usd > a.usd ? b : a);
      const before = MONTHS.slice(Math.max(0, MONTHS.length - period * 2), MONTHS.length - period);
      const prevSum = before.length === period ? before.reduce((n, m) => n + total(m), 0) : 0;
      const earnings = box(
        t("en.earnings"),
        `
          <div class="en-headline">
            <div><span class="g">${t({ 1: "en.p1", 3: "en.p3", 10: "en.p10" }[period])}</span>
              <b class="en-big" data-count="${sum}">${usd(sum)}</b>
              ${prevSum ? `<span class="en-delta">${delta(pct(sum, prevSum))} <span class="g">${t(period === 1 ? "en.vsLast" : "en.vsPrev")}</span></span>` : ""}</div>
          </div>
          <div class="en-plot">${bars(period === 1 ? MONTHS.slice(-2) : months)}<div class="en-tip" hidden></div></div>`,
        { cls: "span-2 en-main", extra: `<span class="seg">${[[1, "en.p1"], [3, "en.p3"], [10, "en.p10"]].map(([n, k]) => `<button data-period="${n}" aria-pressed="${period === n}">${t(k)}</button>`).join("")}</span>` }
      );
      const payout = box(
        t("en.nextPayout"),
        `<b class="box-num">${usd(total(prev))}</b><span class="g en-when">${NEXT_PAYOUT} · ${t("en.bank")}</span>`,
        { foot: `<a class="btn" href="#/earn/payouts">${t("en.seePayouts")}</a>` }
      );
      const suggest = box(t("en.suggest"), SUGGEST.map(([k, agent, href]) => {
        const a = crewOf(agent);
        return `<div class="en-tip-one" data-page><span class="en-agent"><img class="avatar" src="${a.idle}" alt="">${esc(a.who)} · ${esc(a.name)}</span>
          <b>${t(`en.${k}`)}</b><p class="g">${t(`en.${k}w`)}</p><a class="btn" href="${href}">${t(`en.${k}b`)}</a></div>`;
      }).join(""), { extra: pager(SUGGEST.length), cls: "en-suggest" });
      const latest = live ? (() => {
        const m = MODULE[live.screens.find((id) => MODULE[id].group === "gameplay") || live.screens[0]];
        const cells = LAUNCH.summary(live)?.cells || [];
        return box(t("en.latest"), `
          <a class="en-cover" href="#/games/${live.id}"><img src="${m.img}" alt=""><span class="n">${esc(live.name)}</span></a>
          <ul class="rows">
            <li><span>${t("en.rank")}</span><span class="sp"></span><b>${ranked.indexOf(live) + 1}/${ranked.length}</b></li>
            <li><span>${t("en.thisMonth")}</span><span class="sp"></span><b>${usd(of(live.id, NOW))}</b>${delta(pct(of(live.id, NOW), of(live.id, prev)))}</li>
            ${cells.slice(0, 3).map(([label, value]) => `<li><span>${label}</span><span class="sp"></span><b>${value}</b></li>`).join("")}
          </ul>`, { foot: `<a class="btn" href="#/games/${live.id}">${t("en.viewGame")}</a>` });
      })() : "";
      const report = box(t("en.report"), `<ul class="en-report">${REPORT.map(([id, k]) => {
        const g = store.games.find((x) => x.id === id);
        return `<li><a href="#/games/${id}">${icon(g)}<span><b>${esc(g.name)}</b><span class="g">${t(`en.${k}`)}</span></span>${delta(pct(of(id, NOW), of(id, prev)))}</a></li>`;
      }).join("")}</ul>`, { extra: `<span class="g">${t("en.vsMonth")}</span>` });
      const sources = box(t("en.bySource"), `<ul class="en-sources">${SOURCES.map((x) => `
          <li><span class="n">${tr(x.name)}</span><b>${usd(x.usd)}</b><i><em style="width:${x.usd / maxSource * 100}%"></em></i></li>`).join("")}</ul>`);
      const market = box(t("en.marketSales"), `
          <b class="box-num">${usd(of("market", NOW))}</b>${delta(pct(of("market", NOW), of("market", prev)))}
          <ul class="rows en-gap">
            <li><span>${t("en.itemsSold")}</span><span class="sp"></span><b>${num(sold.reduce((n, x) => n + x.sales, 0))}</b></li>
            <li><span>${t("en.topItem")}</span><span class="sp"></span><b>${esc(top.name)}</b></li>
          </ul>`, { foot: `<a class="btn" href="#/earn/market?view=mine">${t("market")}</a>` });
      const pnlOf = (g) => LAUNCH.step(g) === 4 ? LAUNCH.numbersOf(g, "scale") : null;
      const scaled = games.map((g) => [g, pnlOf(g)]).filter(([, p]) => p);
      const rev = scaled.reduce((n, [, p]) => n + p.revenue, 0);
      const ua = scaled.reduce((n, [, p]) => n + p.spend, 0);
      const pnl = box(t("en.pnl"), `<b class="box-num ${rev - ua >= 0 ? "" : "down"}">${usd(rev - ua)}</b><span class="g en-when">${t("en.since")}</span>
          <ul class="rows en-gap">
            <li><span>${t("en.revenue")}</span><span class="sp"></span><b>${usd(rev)}</b></li>
            <li><span>${t("en.uaSpend")}</span><span class="sp"></span><b>−${usd(ua)}</b></li>
            <li><span>${t("en.roas")}</span><span class="sp"></span><b>${ua ? Math.round(rev / ua * 100) : 0}%</b></li>
          </ul>`);
      const byGame = box(t("en.byGame"), `<table class="table"><thead><tr><th>${t("en.game")}</th><th class="hide-s">${t("en.trend")}</th><th class="num">${t("en.thisMonth")}</th><th class="num">${t("en.change")}</th><th class="num hide-s">${t("en.uaSpend")}</th><th class="num hide-s">${t("en.net")}</th><th class="num hide-s">${t("en.roas")}</th></tr></thead>
          <tbody>
            ${games.map((g) => row(g.id, esc(g.name), icon(g), `#/games/${g.id}`, LAUNCH.step(g) === 4 ? LAUNCH.numbersOf(g, "scale") : null)).join("")}
            ${row("market", t("en.marketSales"), `<span class="ico en-coin"><img class="coin" src="${COIN}" alt=""></span>`, "#/earn/market")}
          </tbody></table>`, { cls: "span-2" });
      const progress = box(
        t("en.inProgress"),
        `<ul class="rows">${going.map((g) => `<li><a class="cell" href="#/games/${g.id}?tab=publish">${icon(g)}<span class="n">${esc(g.name)}</span></a><span class="sp"></span>${LAUNCH.tag(g)}</li>`).join("")}</ul>`,
        { foot: `<a class="btn" href="#/me">${t("en.seeGames")}</a>` }
      );
      const notes = box(t("notifications"), `<ul class="rows en-notes">${store.notifications.map((n) => `<li><a href="${n.to}"><span>${tr(n.text)}</span><time class="g">${n.at}</time></a></li>`).join("")}</ul>`);
      return `
        ${subtabs(TABS.earn, "#/earn")}
        ${bento([earnings, [payout, pnl], suggest, latest, [report, progress], [sources, market], byGame, notes], "en-bento")}`;
    },
    mount(root) {
      root.querySelectorAll("[data-period]").forEach((b) => b.addEventListener("click", () => {
        period = Number(b.dataset.period);
        rerender();
      }));
      const tip = root.querySelector(".en-tip");
      root.querySelectorAll(".bar").forEach((bar) => {
        bar.addEventListener("mouseenter", () => {
          const plot = bar.closest(".en-plot").getBoundingClientRect();
          const box2 = bar.querySelector("path").getBoundingClientRect();
          tip.textContent = bar.dataset.tip;
          tip.hidden = false;
          tip.style.left = `${box2.left + box2.width / 2 - plot.left}px`;
          tip.style.top = `${box2.top - plot.top - 10}px`;
        });
        bar.addEventListener("mouseleave", () => {
          tip.hidden = true;
        });
      });
    }
  });
})();
