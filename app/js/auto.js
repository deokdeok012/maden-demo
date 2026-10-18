addStrings({
  en: {
    "au.run": "AI auto-run",
    "au.lead": "SDK, QA, creatives, ASO and store submit run back to back. You review what the AI makes.",
    "au.pause": "Pause",
    "au.resume": "Resume",
    "au.stop": "Stop",
    "au.running": "AI auto-run · {p}%",
    "au.paused": "Paused · {p}%",
    "au.now": "Now",
    "au.review": "Review {n}",
    "au.reviewBtn": "Review",
    "au.waitReview": "Waiting for your review",
    "au.done": "Ready for the CPI test",
    "au.doneSub": "Store submit is done. The CPI test spends ad budget, so you start it.",
    "au.cpi": "Start CPI test",
    "au.s.sdk": "SDK",
    "au.s.qa": "QA",
    "au.s.creative": "Creatives",
    "au.s.aso": "ASO",
    "au.s.review": "Review",
    "au.s.submit": "Store submit",
    "au.notify": "Notifications",
    "au.messenger": "Messengers",
    "au.off": "Off",
    "au.started": "AI auto-run started.",
    "au.stopped": "AI auto-run stopped. Finished work stays.",
    "au.rvTitle": "Review what the AI made",
    "au.rvLead": "Approve each one or remake it. Store submit starts after everything is approved.",
    "au.videos": "Creative videos",
    "au.icon": "App icon",
    "au.feature": "Promo image",
    "au.shots": "Screenshots",
    "au.approve": "Approve",
    "au.remake": "Remake",
    "au.approved": "Approved",
    "au.remaking": "Remaking",
    "au.approveAll": "Approve all",
    "au.allOk": "All approved. Store submit starts after QA.",
    "au.qaFixed": "QA fixed {n} issues.",
    "au.eta": "about {n} min left",
    "au.sent": "Previews sent to {to}. You can approve there too."
  },
  ko: {
    "au.run": "AI 자동 진행",
    "au.lead": "SDK · QA · 크리에이티브 · ASO · 스토어 제출을 이어서 진행합니다. AI가 만든 것은 확인 후에 넘어갑니다.",
    "au.pause": "일시정지",
    "au.resume": "다시 진행",
    "au.stop": "중지",
    "au.running": "AI 자동 진행 중 · {p}%",
    "au.paused": "일시정지 · {p}%",
    "au.now": "지금",
    "au.review": "확인 {n}",
    "au.reviewBtn": "확인하기",
    "au.waitReview": "확인을 기다리는 중",
    "au.done": "CPI 테스트 준비 끝",
    "au.doneSub": "스토어 제출까지 끝났습니다. CPI 테스트는 광고비가 들어 직접 시작합니다.",
    "au.cpi": "CPI 테스트 시작",
    "au.s.sdk": "SDK",
    "au.s.qa": "QA",
    "au.s.creative": "크리에이티브",
    "au.s.aso": "ASO",
    "au.s.review": "확인",
    "au.s.submit": "스토어 제출",
    "au.notify": "알림",
    "au.messenger": "메신저 연동",
    "au.off": "끔",
    "au.started": "AI 자동 진행을 시작했습니다.",
    "au.stopped": "AI 자동 진행을 멈췄습니다. 끝난 일은 그대로 남습니다.",
    "au.rvTitle": "AI가 만든 것 확인",
    "au.rvLead": "하나씩 승인하거나 다시 만듭니다. 모두 승인해야 스토어 제출이 시작됩니다.",
    "au.videos": "크리에이티브 영상",
    "au.icon": "앱 아이콘",
    "au.feature": "프로모션 이미지",
    "au.shots": "스크린샷",
    "au.approve": "승인",
    "au.remake": "다시 만들기",
    "au.approved": "승인됨",
    "au.remaking": "다시 만드는 중",
    "au.approveAll": "모두 승인",
    "au.allOk": "모두 승인했습니다. QA가 끝나면 스토어 제출을 시작합니다.",
    "au.qaFixed": "QA가 찾은 문제 {n}개를 고쳤습니다.",
    "au.eta": "약 {n}분 남음",
    "au.sent": "{to}로 결과물 미리보기를 보냈습니다. 거기서 바로 승인해도 돼요."
  }
});
const AUTO = /* @__PURE__ */ (() => {
  const STEPS = ["sdk", "qa", "creative", "aso", "review", "submit"];
  const of = (g) => g.auto ||= { on: false, paused: false, ok: { icon: false, feature: false, shots: false }, fixed: false };
  const lv = (g) => TUNE.count(g);
  function states(g) {
    const a = of(g);
    const sdk = TOOLS.sdkOf(g).state;
    const qa = g.qa?.state || "idle";
    const cr = g.creatives || [];
    const crDone = cr.filter((c) => c.ready).length;
    const crPend = cr.filter((c) => c.ready && c.auto && !c.ok).length;
    const asoMaking = ASO.making(g);
    const asoMade = ASO.done(g);
    const asoPend = asoMade ? ["icon", "feature", "shots"].filter((k) => !a.ok[k]).length : 0;
    const sub = TOOLS.submitOf(g).state;
    const S = {
      sdk: sdk === "done" ? "done" : sdk === "running" ? "run" : "idle",
      qa: qa === "done" ? "done" : qa === "running" ? "run" : "idle",
      creative: crDone >= LAUNCH.VIDEOS.min && !cr.some((c) => !c.ready) ? "done" : cr.some((c) => !c.ready) ? "run" : "idle",
      aso: asoMade && !asoMaking ? "done" : asoMaking ? "run" : "idle",
      submit: sub === "done" ? "done" : sub === "running" ? "run" : "idle"
    };
    const pending = crPend + asoPend;
    S.review = pending ? "ask" : S.creative === "done" && S.aso === "done" ? "done" : "idle";
    return { S, pending, crPend, asoPend };
  }
  const percent = (S) => Math.round(STEPS.reduce((n, k) => n + (S[k] === "done" ? 1 : S[k] === "run" || S[k] === "ask" ? 0.5 : 0), 0) / STEPS.length * 100);
  function tick(g) {
    const a = of(g);
    if (!a.on || a.paused) return;
    const { S, pending } = states(g);
    if (S.sdk === "idle") TOOLS.sdkRun(g);
    if (S.sdk === "done" && S.qa === "idle") TOOLS.qaRun(g, lv(g));
    if (S.qa === "done" && !a.fixed) {
      a.fixed = true;
      const n = TOOLS.qaFixAll(g, lv(g));
      if (n) toast(t("au.qaFixed", { n }));
    }
    const cr = g.creatives || [];
    for (let n = cr.length; n < LAUNCH.VIDEOS.min; n += 1) LAUNCH.makeVideo(g, { auto: true });
    if (S.aso === "idle") ASO.auto(g);
    if (pending && S.creative === "done" && S.aso === "done" && !a.sent && typeof FLOWS !== "undefined") {
      a.sent = true;
      const to = FLOWS.linkedOf(g);
      if (to.length) toast(t("au.sent", { to: to.join(" · ") }));
    }
    if (S.sdk === "done" && S.qa === "done" && S.creative === "done" && S.aso === "done" && !pending && S.submit === "idle") TOOLS.submitRun(g);
    if (S.submit === "done") {
      a.on = false;
      a.finished = true;
      rerender();
      return;
    }
    a.timer = setTimeout(() => tick(g), 700);
  }
  function start(g) {
    const a = of(g);
    Object.assign(a, { on: true, paused: false, finished: false, sent: false, startedAt: Date.now() });
    toast(t("au.started"));
    rerender();
    tick(g);
  }
  function toggle(g) {
    const a = of(g);
    a.paused = !a.paused;
    rerender();
    if (!a.paused) tick(g);
  }
  function stop(g) {
    const a = of(g);
    clearTimeout(a.timer);
    a.on = false;
    a.paused = false;
    rerender();
    toast(t("au.stopped"));
  }
  function review(g) {
    const a = of(g);
    const node = el('<div class="overlay"><div class="dialog au-rv" role="dialog" aria-modal="true"></div></div>');
    const box = node.firstElementChild;
    const close = () => {
      dismiss(node);
      rerender();
    };
    const btns = (key, ok, making) => making ? `<span class="au-st run"><i class="au-spin"></i>${t("au.remaking")}</span>` : ok ? `<span class="au-st ok">${ICON.check}${t("au.approved")}</span>` : `<button class="btn small" data-redo="${key}">${t("au.remake")}</button><button class="btn small primary" data-ok="${key}">${t("au.approve")}</button>`;
    const paint = () => {
      const { pending } = states(g);
      const cr = (g.creatives || []).map((c, i) => ({ c, i })).filter(({ c }) => c.auto);
      const it = (k) => ASO.item(g, k);
      const shots = ASO.item(g, "shots").list;
      box.innerHTML = `<h2>${t("au.rvTitle")}</h2><p class="g">${t("au.rvLead")}</p>
        <section class="au-sec"><h3>${t("au.videos")}</h3><div class="au-grid vids">${cr.map(({ c, i }) => `<div class="au-it ${c.ok ? "ok" : c.ready ? "new" : ""}"><span class="au-media">${c.ready ? LAUNCH.creativeShot(g, i) : '<span class="au-making"><i class="au-spin"></i></span>'}</span><div class="au-act">${btns(`v${i}`, c.ok, !c.ready)}</div></div>`).join("")}</div></section>
        <section class="au-sec au-two"><div><h3>${t("au.icon")}</h3><div class="au-it ${a.ok.icon ? "ok" : "new"}"><span class="au-media icon">${it("icon").state === "making" ? '<span class="au-making"><i class="au-spin"></i></span>' : `<img src="${it("icon").src}" alt="">`}</span><div class="au-act">${btns("icon", a.ok.icon, it("icon").state === "making")}</div></div></div>
          <div><h3>${t("au.feature")}</h3><div class="au-it ${a.ok.feature ? "ok" : "new"}"><span class="au-media wide">${it("feature").state === "making" ? '<span class="au-making"><i class="au-spin"></i></span>' : `<img src="${it("feature").src}" alt="">`}</span><div class="au-act">${btns("feature", a.ok.feature, it("feature").state === "making")}</div></div></div></section>
        <section class="au-sec"><h3>${t("au.shots")}</h3><div class="au-it ${a.ok.shots ? "ok" : "new"}"><div class="au-grid shots">${shots.map((x) => `<span class="au-media">${x.state === "making" ? '<span class="au-making"><i class="au-spin"></i></span>' : `<img src="${x.src}" alt="">`}</span>`).join("")}</div><div class="au-act end">${btns("shots", a.ok.shots, shots.some((x) => x.state === "making"))}</div></div></section>
        <div class="row"><button class="btn" data-x>${t("close")}</button><span class="sp"></span><button class="btn primary" data-all ${pending ? "" : "disabled"}>${t("au.approveAll")}</button></div>`;
      box.querySelector("[data-x]").addEventListener("click", close);
      box.querySelectorAll("[data-ok]").forEach((b) => b.addEventListener("click", () => {
        approve(g, b.dataset.ok);
        paint();
      }));
      box.querySelectorAll("[data-redo]").forEach((b) => b.addEventListener("click", () => {
        remake(g, b.dataset.redo);
        paint();
        setTimeout(paint, 1700);
        setTimeout(paint, 2100);
      }));
      box.querySelector("[data-all]").addEventListener("click", () => {
        (g.creatives || []).forEach((c, i) => {
          if (c.auto && c.ready) approve(g, `v${i}`);
        });
        ["icon", "feature", "shots"].forEach((k) => approve(g, k));
        close();
      });
      hoverVideo(box);
    };
    document.body.append(node);
    node.addEventListener("click", (e) => {
      if (e.target === node) close();
    });
    paint();
  }
  function approve(g, key) {
    const a = of(g);
    if (key.startsWith("v")) {
      const c = g.creatives[Number(key.slice(1))];
      if (c) c.ok = true;
    } else a.ok[key] = true;
    if (!states(g).pending) toast(t("au.allOk"));
  }
  function remake(g, key) {
    const a = of(g);
    if (key.startsWith("v")) {
      const i = Number(key.slice(1));
      g.creatives[i].ok = false;
      LAUNCH.remakeVideo(g, i);
      return;
    }
    a.ok[key] = false;
    if (key === "shots") ASO.item(g, "shots").list.forEach((_, i) => ASO.redo(g, "shots", i));
    else ASO.redo(g, key);
  }
  function bar(g) {
    const a = of(g);
    const { S, pending } = states(g);
    const p = percent(S);
    const linked = typeof FLOWS !== "undefined" ? FLOWS.linkedOf(g) : [];
    const bell = `<button class="au-bell" data-au-notify title="${linked.length ? linked.join(" · ") : t("au.off")}"><svg viewBox="0 0 24 24"><path d="M6 10a6 6 0 1 1 12 0c0 4 1.5 6 2 7H4c.5-1 2-3 2-7zM10 20a2 2 0 0 0 4 0"/></svg><span>${t("au.messenger")}</span>${linked.length ? `<i class="au-dot"></i>` : ""}</button>`;
    if (S.submit === "done" && (a.finished || a.startedAt)) {
      return `<section class="au-bar done"><span class="au-ic">${ICON.check}</span><div class="au-txt"><b>${t("au.done")}</b><span>${t("au.doneSub")}</span></div><span class="sp"></span>${bell}<a class="btn primary" href="#/games/${g.id}?tab=publish">${t("au.cpi")}</a></section>`;
    }
    if (!a.on) {
      return `<section class="au-bar idle"><span class="au-ic spark">${ICON.spark}</span><div class="au-txt"><b>${t("au.run")}</b><span>${t("au.lead")}</span></div><span class="sp"></span>${bell}<button class="btn primary au-go" data-au-start>${ICON.spark}${t("au.run")}</button></section>`;
    }
    const left = Math.max(1, Math.round((100 - p) / 100 * 9));
    const chips = STEPS.map((k) => `<span class="au-step ${S[k]}"><i>${S[k] === "done" ? ICON.check : S[k] === "run" ? '<i class="au-spin"></i>' : S[k] === "ask" ? "!" : ""}</i>${t(`au.s.${k}`)}</span>`).join('<span class="au-line"></span>');
    return `<section class="au-bar run ${a.paused ? "paused" : ""}">
      <div class="au-top"><span class="au-ic spark">${a.paused ? '<svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14"/></svg>' : ICON.spark}</span><div class="au-txt"><b>${t(a.paused ? "au.paused" : "au.running", { p })}</b><span>${pending ? t("au.waitReview") : t("au.eta", { n: left })}</span></div><span class="sp"></span>
        ${pending ? `<button class="btn au-rvbtn" data-au-review><span class="au-count">${pending}</span>${t("au.reviewBtn")}</button>` : ""}${bell}
        <button class="btn" data-au-pause>${t(a.paused ? "au.resume" : "au.pause")}</button><button class="btn" data-au-stop>${t("au.stop")}</button></div>
      <div class="au-prog"><i style="width:${p}%"></i></div>
      <div class="au-steps">${chips}</div>
    </section>`;
  }
  function mount(root, g) {
    root.querySelector("[data-au-start]")?.addEventListener("click", () => start(g));
    root.querySelector("[data-au-pause]")?.addEventListener("click", () => toggle(g));
    root.querySelector("[data-au-stop]")?.addEventListener("click", () => stop(g));
    root.querySelector("[data-au-review]")?.addEventListener("click", () => review(g));
    root.querySelector("[data-au-notify]")?.addEventListener("click", () => FLOWS.notifyDialog(g));
  }
  return { bar, mount, start, review, states };
})();
