addStrings({
  en: { "cr.title": "AI team", "cr.tokens": "{n} tokens", "cr.more": "Details", "cr.less": "Hide" },
  ko: { "cr.title": "AI팀", "cr.tokens": "{n} 토큰", "cr.more": "상세보기", "cr.less": "접기" }
});
const CREW = (() => {
  let side = null;
  let mediaOpen = false;
  let fresh = false;
  const price = (tier) => `${t("perToken")} <img class="coin" src="${COIN}" alt="">${tier.perToken}`;
  const button = () => `<button class="crew-btn" data-crew aria-expanded="${!!side && !side.hidden}" aria-label="${t("cr.title")}">
      <span class="crew-heads">${JOBS.slice(0, 3).map((j) => `<img src="${crewOf(j.key).idle}" alt="">`).join("")}</span><span class="crew-label">${t("cr.title")}</span></button>`;
  const option = (j, pro) => {
    const c = pro ? j.pro : j.basic;
    const on = store.team.has(j.key) === pro;
    return `<button class="crew-opt" data-crew-pick="${j.key}:${pro ? 1 : 0}" aria-pressed="${on}">
        <span class="crew-pic ${pro ? "" : "basic"}"><img src="${c.idle}" alt=""></span>
        <span class="crew-opt-t"><b>${tr(c.name)}</b><small class="crew-price">${price(pro ? TIERS.opus : TIERS.sonnet)}</small></span>
        <i class="crew-check">${ICON.check}</i></button>`;
  };
  const body = () => `
      <header><h2>${t("cr.title")}</h2><span class="sp"></span><button class="icon-btn flat" data-crew-close aria-label="${t("close")}">${ICON.x}</button></header>
      <div class="crew-list">${JOBS.map((j) => `
        <div class="crew-job">
          <div class="crew-job-h"><h3>${tr(j.name)}</h3><span class="g">${tr(j.desc)}</span></div>
          <div class="crew-opts">${option(j, false)}${option(j, true)}</div>
        </div>`).join("")}
        <div class="crew-job crew-media">
          <div class="crew-job-h"><h3>${tr(MEDIA.role)}</h3><span class="g">${tr(MEDIA.desc)}</span></div>
          <div class="crew-opt on"><span class="crew-pic"><img src="${MEDIA.img}" alt=""></span>
            <span class="crew-opt-t"><b>${tr(MEDIA.name)}</b><small class="crew-price">${tr(MEDIA.main.what)} = ${t("cr.tokens", { n: num(MEDIA.main.tokens) })}</small></span>
            <button class="btn small crew-more" data-media-more aria-expanded="${mediaOpen}">${t(mediaOpen ? "cr.less" : "cr.more")}</button></div>
          ${mediaOpen ? `<ul class="rows crew-rates">${MEDIA.rates.map(([what, per, n]) => `<li><span>${tr(what)}</span><span class="sp"></span><span class="g">${tr(per)}</span><b>${t("cr.tokens", { n: num(n) })}</b></li>`).join("")}</ul>` : ""}
        </div></div>`;
  function paint() {
    side.innerHTML = body();
    side.querySelector("[data-crew-close]").addEventListener("click", close);
    side.querySelector("[data-media-more]").addEventListener("click", () => {
      const y = side.querySelector(".crew-list").scrollTop;
      mediaOpen = !mediaOpen;
      paint();
      side.querySelector(".crew-list").scrollTop = y;
    });
    side.querySelectorAll("[data-crew-pick]").forEach((b) => b.addEventListener("click", () => {
      const [key, pro] = b.dataset.crewPick.split(":");
      if (pro === "1") store.team.add(key);
      else store.team.delete(key);
      const scroll = side.querySelector(".crew-list").scrollTop;
      paint();
      side.querySelector(".crew-list").scrollTop = scroll;
      rerender();
      document.dispatchEvent(new Event("crewchange"));
    }));
  }
  function open() {
    closeHud("crew");
    if (!side) {
      side = document.createElement("aside");
      side.className = "crew-side";
      side.setAttribute("aria-label", t("cr.title"));
      document.body.append(side);
    }
    fresh = true;
    setTimeout(() => {
      fresh = false;
    });
    paint();
    const b = [...document.querySelectorAll(".nav [data-crew]")].find((x) => x.offsetParent);
    const r = b ? b.getBoundingClientRect() : null;
    side.style.top = `${r ? r.bottom + 8 : 56}px`;
    side.style.right = `${r ? Math.max(12, innerWidth - r.right) : 12}px`;
    side.hidden = false;
    document.querySelectorAll("[data-crew]").forEach((b2) => b2.setAttribute("aria-expanded", "true"));
  }
  function close() {
    if (!side || side.hidden) return;
    side.hidden = true;
    document.querySelectorAll("[data-crew]").forEach((b) => b.setAttribute("aria-expanded", "false"));
  }
  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-crew]")) (side && !side.hidden ? close : open)();
    else if (side && !side.hidden && !fresh && !e.composedPath().includes(side)) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
  window.addEventListener("hashchange", close);
  return { button, open, close };
})();
