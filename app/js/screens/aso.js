addStrings({
  en: {
    "as.icon": "App icon",
    "as.name": "Name",
    "as.short": "Short description",
    "as.long": "Full description",
    "as.shots": "Screenshots",
    "as.feature": "Promo image",
    "as.shot": "Screenshot",
    "as.none": "No store listing yet.",
    "as.ai": "AI generate",
    "as.upload": "Upload",
    "as.redo": "Regenerate",
    "as.other": "Choose image",
    "as.type": "Enter",
    "as.editText": "Edit",
    "as.use": "Use",
    "as.making": "Generating",
    "as.setup": "Set up",
    "as.preview": "Preview",
    "as.save": "Save",
    "as.saved": "Store listing saved.",
    "as.chars": "{n}/{max}",
    "as.left": "{n} to make",
    "as.ready": "Ready",
    "as.made": "{name} generated.",
    "as.noOther": "No other images yet."
  },
  ko: {
    "as.icon": "앱 아이콘",
    "as.name": "이름",
    "as.short": "짧은 설명",
    "as.long": "자세한 설명",
    "as.shots": "스크린샷",
    "as.feature": "프로모션 이미지",
    "as.shot": "스크린샷",
    "as.none": "스토어 등록 정보가 아직 없습니다.",
    "as.ai": "AI 생성",
    "as.upload": "업로드",
    "as.redo": "다시 생성",
    "as.other": "이미지 선택",
    "as.type": "직접 입력",
    "as.editText": "수정",
    "as.use": "선택",
    "as.making": "생성 중",
    "as.setup": "설정",
    "as.preview": "미리보기",
    "as.save": "저장",
    "as.saved": "스토어 등록 정보를 저장했습니다.",
    "as.chars": "{n}/{max}",
    "as.left": "만들 것 {n}",
    "as.ready": "준비 완료",
    "as.made": "{name}을(를) 생성했습니다.",
    "as.noOther": "아직 다른 이미지가 없습니다."
  }
});
const ASO = (() => {
  const AGENT = Object.fromEntries(AGENTS.map((a) => [a.key, a]));
  const SPEC = { icon: "512 × 512", feature: "1024 × 500", shots: "9:16 · 16:9 · 2–8" };
  const MAX = { name: 30, short: 80, long: 4e3 };
  const SHOTS = { min: 2, max: 8 };
  const later = (fn, ms) => setTimeout(fn, params.has("freeze") ? 0 : ms);
  const ART = {
    bay: { feature: gen("promo-bay.jpg"), icon: gen("icon-bay.jpg") },
    "meow-smash": { feature: gen("promo-meow.jpg"), icon: gen("icon-meow.jpg") }
  };
  const WIDE = { bay: [gen("wide-bay-1.jpg"), gen("wide-bay-2.jpg")], "meow-smash": [gen("wide-meow-1.jpg"), gen("wide-meow-2.jpg")] };
  const en = (x) => (x && typeof x === "object" ? x.en : x) || "";
  const cut = (text, max) => text.length <= max ? text : text.slice(0, text.lastIndexOf(" ", max)).replace(/[,.;:]$/, "");
  const uniq = (list) => [...new Set(list.filter(Boolean))];
  const screensOf = (x) => [...x.screens].sort((a, b) => (MODULE[b].group === "gameplay") - (MODULE[a].group === "gameplay")).map((id) => MODULE[id].img);
  function poolOf(x, k) {
    const base = GAME[x.base] || {};
    const art = GAME[x.art] || {};
    const title = x.screens.filter((id) => MODULE[id].kind === "titlescreen").map((id) => MODULE[id].img);
    if (k === "icon") return uniq([ART[x.art]?.icon, base.icon, art.icon]);
    if (k === "feature") return uniq([ART[x.art]?.feature, ...title, ...screensOf(x), base.cover, ...Object.values(base.shots || {})]);
    if (k === "wide") return uniq([...WIDE[x.art] || [], ART[x.art]?.feature, ...screensOf(x)]);
    return uniq([...screensOf(x), ...MODULES.filter((m) => m.game === x.base || m.game === x.art).map((m) => m.img), ...Object.values(base.shots || {}), ...Object.values(art.shots || {})]);
  }
  function longOf(g) {
    const feats = [...new Set(g.screens.map((id) => en(MODULE[id].name)))].slice(0, 6);
    return `What you get
${feats.map((f) => `• ${f}`).join("\n")}

The first 5 levels are easy to pick up, then the challenge builds.
Play offline, anytime.`;
  }
  function init(g) {
    if (!g.aso || !g.aso.items.shots.list) {
      const tested = LAUNCH.step(g) > 0;
      const pic = (k) => ({ state: tested ? "done" : "idle", src: tested ? poolOf(g, k)[0] : null });
      g.aso = {
        gv: g.ver || 1,
        name: g.name,
        short: cut(en(GAME[g.base].desc), MAX.short),
        long: longOf(g),
        old: { icon: [], feature: [], shots: [] },
        items: { icon: pic("icon"), feature: pic("feature"), shots: { list: tested ? poolOf(g, "shots").slice(0, 5).map((src) => ({ state: "done", src })) : [] } }
      };
    }
    return g.aso;
  }
  const item = (g, k) => init(g).items[k];
  const shotsOf = (g) => item(g, "shots").list.filter((s) => s.state === "done").map((s) => s.src);
  const shown = (g, k) => k === "shots" ? shotsOf(g).length > 0 : item(g, k).state === "done";
  const made = (g) => ["icon", "feature", "shots"].some((k) => shown(g, k));
  const done = (g) => shown(g, "icon") && shown(g, "feature") && shotsOf(g).length >= SHOTS.min;
  const left = (g) => [!shown(g, "icon"), !shown(g, "feature"), shotsOf(g).length < SHOTS.min].filter(Boolean).length;
  const stale = (g) => made(g) && (init(g).gv || 1) < (g.ver || 1);
  const heroOf = (g) => item(g, "feature").src;
  const icon = (g) => {
    const src = item(g, "icon").src || poolOf(g, "icon")[0];
    return src ? `<img class="as-icon" src="${src}" alt="">` : gameIcon(GAME[g.base], "as-icon");
  };
  function mini(g) {
    const a = init(g);
    const ic = item(g, "icon");
    const ft = item(g, "feature");
    const list = item(g, "shots").list;
    const cell = (key, inner, cls, empty, making, label) => `<button class="gm-aso-cell ${cls} ${empty ? "empty" : ""} ${making ? "making" : ""}" data-spot="${key}" aria-label="${esc(label)}">${inner}${empty ? `<span class="gm-aso-need">${ICON.plus}<b>${label}</b></span>` : ""}${making ? '<i class="state now"></i>' : ""}${!empty && !making && inner ? `<i class="spot-edit">${ICON.edit}</i>` : ""}</button>`;
    const pic = (src) => src ? `<img src="${src}" alt="">` : "";
    const noName = !a.name || UNTITLED.has(a.name);
    return `<div class="gm-aso" data-aso-card>
      <div class="gm-aso-app">${cell("icon", pic(ic.src), "icon", ic.state === "idle", ic.state === "making", t("as.icon"))}
        <span class="gm-aso-name"><b>${noName ? `<span class="g">${t("as.name")}</span>` : esc(a.name)}</b><span class="g">Supercent, Inc.</span></span></div>
      <div class="gm-aso-row">${cell("feature", pic(ft.src), "wide", ft.state === "idle", ft.state === "making", t("as.feature"))}
        ${Array.from({ length: 4 }, (_, i) => {
      const x = list[i];
      return cell(`shot:${i}`, pic(x?.src), x?.wide ? "shot w" : "shot", !x, x?.state === "making", t("as.shot"));
    }).join("")}</div>
    </div>`;
  }
  const PLAY_LOGO = '<svg viewBox="0 0 40 40" aria-hidden="true"><path fill="#00D7FE" d="M5.2 3.3 21.5 20 5.2 36.7c-.5-.4-.8-1.1-.8-1.9V5.2c0-.8.3-1.5.8-1.9Z"/><path fill="#FFCE00" d="m27 14.4 6 3.4c1.7 1 1.7 3.4 0 4.4l-6 3.4L21.5 20 27 14.4Z"/><path fill="#00F076" d="M5.2 3.3c.7-.6 1.8-.7 2.8-.2L27 14.4 21.5 20 5.2 3.3Z"/><path fill="#FF3A44" d="M21.5 20 27 25.6 8 36.9c-1 .5-2.1.4-2.8-.2L21.5 20Z"/></svg>';
  const IC = {
    search: '<svg viewBox="0 0 24 24"><path d="M15.5 14h-.8l-.3-.3A6.5 6.5 0 1 0 9.5 16a6.5 6.5 0 0 0 4.2-1.6l.3.3v.8l5 5 1.5-1.5-5-5Zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z"/></svg>',
    help: '<svg viewBox="0 0 24 24"><path d="M11 18h2v-2h-2v2Zm1-16a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm0-14a4 4 0 0 0-4 4h2a2 2 0 1 1 4 0c0 2-3 1.8-3 5h2c0-2.3 3-2.5 3-5a4 4 0 0 0-4-4Z"/></svg>',
    share: '<svg viewBox="0 0 24 24"><path d="M18 16.1c-.8 0-1.4.3-2 .8l-7.1-4.2c.1-.2.1-.5.1-.7s0-.5-.1-.7L16 7.2c.5.5 1.2.8 2 .8a3 3 0 1 0-3-3c0 .2 0 .5.1.7L8 9.8C7.5 9.3 6.8 9 6 9a3 3 0 1 0 0 6c.8 0 1.5-.3 2-.8l7.1 4.2c-.1.2-.1.4-.1.6a2.9 2.9 0 1 0 2.9-2.9Z"/></svg>',
    wish: '<svg viewBox="0 0 24 24"><path d="M7 3h10a2 2 0 0 1 2 2v16l-7-3-7 3V5a2 2 0 0 1 2-2Zm0 2v13l5-2.2 5 2.2V5H7Zm4 2h2v2h2v2h-2v2h-2v-2H9V9h2V7Z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24"><path d="m12 4-1.4 1.4 5.6 5.6H4v2h12.2l-5.6 5.6L12 20l8-8-8-8Z"/></svg>',
    next: '<svg viewBox="0 0 24 24"><path d="M8.6 16.6 13.2 12 8.6 7.4 10 6l6 6-6 6-1.4-1.4Z"/></svg>',
    down: '<svg viewBox="0 0 24 24"><path d="M7.4 8.6 12 13.2l4.6-4.6L18 10l-6 6-6-6 1.4-1.4Z"/></svg>',
    info: '<svg viewBox="0 0 24 24"><path d="M11 7h2v2h-2V7Zm0 4h2v6h-2v-6Zm1-9a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"/></svg>',
    star: '<svg viewBox="0 0 24 24"><path d="M12 17.3 18.2 21l-1.6-7L22 9.2l-7.2-.6L12 2 9.2 8.6 2 9.2 7.5 14l-1.7 7 6.2-3.7Z"/></svg>',
    sharedata: '<svg viewBox="0 0 24 24"><path d="M18 16.1c-.8 0-1.4.3-2 .8l-7.1-4.2c.1-.2.1-.5.1-.7s0-.5-.1-.7L16 7.2c.5.5 1.2.8 2 .8a3 3 0 1 0-3-3c0 .2 0 .5.1.7L8 9.8C7.5 9.3 6.8 9 6 9a3 3 0 1 0 0 6c.8 0 1.5-.3 2-.8l7.1 4.2c-.1.2-.1.4-.1.6a2.9 2.9 0 1 0 2.9-2.9ZM18 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM6 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/></svg>',
    cloud: '<svg viewBox="0 0 24 24"><path d="M19.4 10A7.5 7.5 0 0 0 5.4 8 6 6 0 0 0 6 20h13a5 5 0 0 0 .4-10ZM19 18H6a4 4 0 0 1-.4-8h.7l.3-.7a5.5 5.5 0 0 1 10.6 1.2v1h1.5a3 3 0 1 1 .3 6.5ZM8 13h2.6v3h2.8v-3H16l-4-4-4 4Z"/></svg>',
    lock: '<svg viewBox="0 0 24 24"><path d="M18 8h-1V6A5 5 0 0 0 7 6v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2ZM9 6a3 3 0 0 1 6 0v2H9V6Zm9 14H6V10h12v10Zm-6-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></svg>',
    trash: '<svg viewBox="0 0 24 24"><path d="M15 4V3H9v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5Zm2 15H7V6h10v13ZM9 8h2v9H9V8Zm4 0h2v9h-2V8Z"/></svg>'
  };
  const ESRB = '<span class="gpx-esrb" aria-hidden="true"><b>E</b><i>ESRB</i></span>';
  const need = (label, spec) => `<span class="gpx-need">${ICON.plus}<b>${label}</b>${spec ? `<i>${spec}</i>` : ""}</span>`;
  const busy = `<span class="gpx-busy"><i class="state now"></i>${t("as.making")}</span>`;
  const spot = (key, inner, { empty = false, making = false, cls = "", label = "" } = {}) => `<div class="gpx-spot ${cls} ${empty ? "empty" : ""} ${making ? "making" : ""}" data-spot="${key}" role="button" tabindex="0" aria-label="${esc(label)}">${inner}${making ? busy : ""}${!empty && !making && /<img/.test(inner) ? `<i class="spot-edit">${ICON.edit}</i>` : ""}</div>`;
  function render(g) {
    const a = init(g);
    const base = GAME[g.base] || {};
    const ic = item(g, "icon");
    const ft = item(g, "feature");
    const list = item(g, "shots").list;
    const noName = !a.name || UNTITLED.has(a.name);
    const iconSpot = spot("icon", ic.state === "done" ? `<img src="${ic.src}" alt="">` : ic.state === "idle" ? need("") : "", { cls: "gpx-icon", empty: ic.state === "idle", making: ic.state === "making", label: t("as.icon") });
    const featureSpot = spot("feature", ft.state === "done" ? `<img src="${ft.src}" alt="">` : ft.state === "idle" ? need(t("as.feature"), SPEC.feature) : "", { cls: "gpx-fg", empty: ft.state === "idle", making: ft.state === "making", label: t("as.feature") });
    const need2 = list.length < SHOTS.min;
    const shots = [
      ...list.map((s, i) => spot(`shot:${i}`, s.src ? `<img src="${s.src}" alt="">` : "", { cls: `gpx-shot ${s.wide ? "wide" : ""}`, making: s.state === "making", label: `${t("as.shot")} ${i + 1}` })),
      ...Array.from({ length: SHOTS.max - list.length }, (_, k) => spot(`shot:${list.length + k}`, need2 && k === 0 ? need(t("as.shots"), SPEC.shots) : need(""), { cls: `gpx-shot ${need2 ? "" : "add"}`, empty: need2, label: t("as.shots") }))
    ].join("");
    const genre = GENRES.find((x) => x.key === base.genre);
    const tags = uniq([genre && en(genre.name), base.kind && GENRE[base.kind] && en(GENRE[base.kind].name), "Casual", "Single player", "Stylized", "Offline"]);
    const mine = store.games.filter((x) => x !== g && x.stage !== "draft" && GAME[x.base]).slice(0, 4).map((x) => ({ name: x.aso?.name || x.name, dev: "Supercent, Inc.", icon: x.aso?.items?.icon?.src || GAME[x.base].icon || GAME[x.base].cover, rating: GAME[x.base].rating || 4.4 }));
    const more = [...mine, ...STORE.filter((x) => x.publisher === "Supercent").map((x) => ({ name: x.name, dev: "Supercent, Inc.", icon: x.icon, rating: x.rating }))].slice(0, 6);
    const similar = STORE.filter((x) => x.publisher !== "Supercent" && (x.genre === (base.genre || base.group) || x.group === base.group)).slice(0, 6).map((x) => ({ name: x.name, dev: x.publisher, icon: x.icon, rating: x.rating }));
    const side = (title, rows) => rows.length ? `<section class="gpx-side-sec"><h2>${title}<span class="gpx-arrow">${IC.arrow}</span></h2><ul class="gpx-apps">${rows.map((r) => `<li><img src="${r.icon}" alt=""><span><b>${esc(r.name)}</b><span>${esc(r.dev)}</span><span>${r.rating.toFixed(1)} ${IC.star}</span></span></li>`).join("")}</ul></section>` : "";
    return `<div class="gpx" data-aso-page>
      <header class="gpx-bar"><span class="gpx-logo">${PLAY_LOGO}<span>Google Play</span></span>
        <nav class="gpx-nav"><span class="on">Games</span><span>Apps</span><span>Movies &amp; TV</span><span>Books</span><span>Kids</span></nav>
        <span class="gpx-tools"><i>${IC.search}</i><i>${IC.help}</i><i class="gpx-me"></i></span></header>
      <section class="gpx-hero ${ft.state === "done" ? "has-fg" : ""}">
        ${featureSpot}
        <div class="gpx-hero-in">
          ${iconSpot}
          <div class="gpx-id">${spot("name", noName ? `<h1>&nbsp;</h1>${need(t("as.name"))}` : `<h1>${esc(a.name)}</h1>`, { cls: "gpx-title", empty: noName, label: t("as.name") })}
            <a class="gpx-dev">Supercent, Inc.</a><span class="gpx-iap">Contains ads · In-app purchases</span></div>
          <div class="gpx-stats"><span class="gpx-stat">${ESRB}<i>Everyone ${IC.info}</i></span></div>
          <div class="gpx-acts"><span class="gpx-install">Install</span><span class="gpx-link">${IC.share}Share</span><span class="gpx-link off">${IC.wish}Add to wishlist</span></div>
          <p class="gpx-devices">This app is available for all of your devices</p>
        </div>
      </section>
      <div class="gpx-main">
        <div class="gpx-col">
          <div class="gpx-shots">${shots}${list.length >= 6 ? `<span class="gpx-more">${IC.next}</span>` : ""}</div>
          <section class="gpx-sec"><h2>About this game<span class="gpx-arrow">${IC.arrow}</span></h2>
            ${spot("short", `<p>${esc(a.short) || "&nbsp;"}</p>`, { cls: "gpx-short", empty: !a.short, label: t("as.short") })}
            ${spot("long", `<p>${esc(a.long).replace(/\n/g, "<br>") || "&nbsp;"}</p>`, { cls: "gpx-long", empty: !a.long, label: t("as.long") })}
            <div class="gpx-meta"><div><b>Updated on</b><span>${new Date(AS_OF).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span></div><div><b>Available on</b><span>Android</span></div></div>
            <div class="gpx-tags">${tags.map((x) => `<span>${esc(x)}</span>`).join("")}</div></section>
          <section class="gpx-sec"><h2>Data safety<span class="gpx-arrow">${IC.arrow}</span></h2>
            <p class="gpx-text">Safety starts with understanding how developers collect and share your data. Data privacy and security practices may vary based on your use, region, and age. The developer provided this information and may update it over time.</p>
            <ul class="gpx-safety"><li>${IC.sharedata}<span><b>This app may share these data types with third parties</b><span>App info and performance, and Device or other IDs</span></span></li>
              <li>${IC.cloud}<span><b>No data collected</b><span>Learn more about how developers declare collection</span></span></li>
              <li>${IC.lock}<span><b>Data is encrypted in transit</b></span></li><li>${IC.trash}<span><b>You can request that data be deleted</b></span></li>
              <li class="gpx-see">See details</li></ul></section>
        </div>
        <aside class="gpx-side">
          <section class="gpx-rating">${ESRB}<span><b>Everyone</b><span>In-Game Purchases</span><a>Learn more</a></span></section>
          <section class="gpx-side-sec"><h2>App support<span class="gpx-arrow down">${IC.down}</span></h2></section>
          ${side("More by Supercent, Inc.", more)}${side("Similar games", similar)}
        </aside>
      </div>
    </div>`;
  }
  function pickOther(g, k, now, onPick) {
    const kind = k.startsWith("shot") ? "shots" : k;
    const a = init(g);
    const groups = [g, ...store.games.filter((x) => x !== g && GAME[x.base] && x.screens)].map((x) => {
      const own = x === g ? a.old[kind] : [];
      const imgs = uniq([...own, ...poolOf(x, kind)]).filter((src) => src !== now);
      return imgs.length ? { g: x, imgs } : null;
    }).filter(Boolean);
    let at = groups[0]?.g.id;
    let sel = null;
    const node = el(`<div class="overlay"><div class="dialog as-pick ${kind}" role="dialog" aria-modal="true"></div></div>`);
    const box = node.firstElementChild;
    const close = () => {
      removeEventListener("keydown", onKey);
      dismiss(node);
    };
    function onKey(e) {
      if (e.key === "Escape") close();
    }
    addEventListener("keydown", onKey);
    node.addEventListener("click", (e) => {
      if (e.target === node) close();
    });
    const paint = () => {
      const imgs = groups.find((x) => x.g.id === at)?.imgs || [];
      box.innerHTML = `<h2>${t("as.other")}</h2>
        ${groups.length ? `<div class="chips cv-games">${groups.map((x) => `<button class="chip" data-at="${x.g.id}" aria-pressed="${x.g.id === at}">${gameIcon(GAME[x.g.base], "cv-gi")}${esc(x.g.aso?.name || x.g.name)}<span class="count">${x.imgs.length}</span></button>`).join("")}</div>
          <div class="as-pick-grid">${imgs.map((src) => `<button class="as-pick-i" data-src="${src}" aria-pressed="${src === sel}"><img src="${src}" alt="" loading="lazy"><i class="check">${ICON.check}</i></button>`).join("")}</div>` : `<p class="g">${t("as.noOther")}</p>`}
        <div class="row"><button class="btn" data-x>${t("cancel")}</button><span class="sp"></span><button class="btn primary" data-use ${sel ? "" : "disabled"}>${t("as.use")}</button></div>`;
      box.querySelector("[data-x]").addEventListener("click", close);
      box.querySelector("[data-use]").addEventListener("click", () => {
        close();
        onPick(sel);
      });
      box.querySelectorAll("[data-at]").forEach((b) => b.addEventListener("click", () => {
        at = b.dataset.at;
        paint();
      }));
      box.querySelectorAll("[data-src]").forEach((b) => b.addEventListener("click", () => {
        sel = b.dataset.src;
        paint();
      }));
    };
    document.body.append(node);
    paint();
  }
  function control(g, keep) {
    const a = init(g);
    const charge = (what, cost, ms, who = tr(MEDIA.name)) => spend(`${who} · ${what} · ${g.name}`, cost, ms);
    const nextOf = (pool, now) => {
      const i = pool.indexOf(now);
      return pool.length ? pool[(i + 1 + pool.length) % pool.length] : now;
    };
    const make = (k, i = null, opt = {}) => {
      if (k === "shots") {
        const list = item(g, "shots").list;
        const wide = opt.orient === "wide";
        const pool = poolOf(g, wide ? "wide" : "shots");
        const used = new Set(list.map((x) => x.src));
        if (i != null && list[i]) {
          a.old.shots.push(list[i].src);
          const now = list[i].src;
          Object.assign(list[i], { state: "making", wide, src: pool.find((src) => !used.has(src)) || nextOf(pool, now) });
          charge(t("as.shot"), AGENT.art.cost, 1600);
          later(() => {
            list[i].state = "done";
            keep();
          }, 1600);
        } else {
          const add = Math.min(1, SHOTS.max - list.length);
          const fresh = pool.filter((src) => !used.has(src));
          for (let n = 0; n < add; n += 1) list.push({ state: "making", wide, src: fresh[n] || pool[(list.length + n) % pool.length] });
          charge(t("as.shot"), AGENT.art.cost * add, 2e3);
          list.forEach((x) => {
            if (x.state === "making") later(() => {
              x.state = "done";
              keep();
              if (list.every((y) => y.state === "done")) toast(t("as.made", { name: t("as.shot") }));
            }, 1600);
          });
        }
        return keep();
      }
      const it = item(g, k);
      if (it.src) a.old[k].push(it.src);
      Object.assign(it, { state: "making", src: it.src ? nextOf(poolOf(g, k), it.src) : poolOf(g, k)[0] });
      charge(t(`as.${k}`), AGENT.art.cost, 1600);
      later(() => {
        it.state = "done";
        keep();
        toast(t("as.made", { name: t(`as.${k}`) }));
      }, 1600);
      return keep();
    };
    const ask = (k, i, redo2) => GEN.open({
      kind: k === "shots" ? "shot" : k,
      group: GEN.groupOf(g),
      cost: AGENT.art.cost,
      orient: k === "shots" && redo2 ? item(g, "shots").list[i].wide ? "wide" : "tall" : "tall",
      makeLabel: redo2 ? t("as.redo") : null,
      onMake: (opt) => make(k, redo2 ? i : null, opt)
    });
    const upload = (k, i, many) => {
      const input = el(`<input type="file" accept="image/*" ${many ? "multiple" : ""} hidden>`);
      document.body.append(input);
      addEventListener("focus", () => setTimeout(() => input.remove(), 1e3), { once: true });
      input.addEventListener("change", () => {
        const files = [...input.files];
        if (!files.length) return;
        Promise.all(files.map((f) => new Promise((ok) => {
          const r = new FileReader();
          r.onload = () => ok({ src: r.result, f });
          r.readAsDataURL(f);
        }))).then((ups) => Promise.all(ups.map((u) => new Promise((ok) => {
          const im = new Image();
          im.onload = () => ok({ ...u, wide: im.naturalWidth > im.naturalHeight });
          im.onerror = () => ok(u);
          im.src = u.src;
        })))).then((ups) => {
          if (k === "shots") {
            const list = item(g, "shots").list;
            ups.slice(0, SHOTS.max - Math.min(i, list.length)).forEach((u, n) => {
              const at = i + n;
              const one = { state: "done", src: u.src, wide: !!u.wide };
              if (list[at]) {
                a.old.shots.push(list[at].src);
                list[at] = one;
              } else list.push(one);
            });
          } else {
            const it = item(g, k);
            if (it.src) a.old[k].push(it.src);
            Object.assign(it, { state: "done", src: ups[0].src });
          }
          keep();
        });
      });
      input.click();
    };
    const writeText = (k) => {
      charge(t(`as.${k}`), AGENT.narrative.cost, 900, crewOf("marketer").who);
      const desc = en(GAME[g.base].desc);
      const v = a.tv = (a.tv || 0) + 1;
      const base = GAME[g.base];
      const root = UNTITLED.has(g.name) ? base && base.source !== "store" ? base.name : "Pocket" : g.name;
      const hook = desc.split(/[ ,.]+/).filter((w) => w.length > 3).slice(0, 2).map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
      const names = [`${root}: ${hook}`, `${root} Rush`, `${root} Remix`];
      a[k] = k === "name" ? cut(names[v % names.length], MAX.name) : k === "long" ? longOf(g) : cut([desc, `Relax and solve. ${desc}`, `${desc} Free to play.`][v % 3], MAX.short);
      keep();
    };
    const editInline = (node, k) => {
      const textEl = node.querySelector("h1, p");
      const was = a[k];
      textEl.contentEditable = "plaintext-only";
      node.classList.add("editing");
      textEl.focus();
      getSelection().selectAllChildren(textEl);
      const finish = (save) => {
        textEl.contentEditable = "false";
        node.classList.remove("editing");
        a[k] = save ? textEl.textContent.replace(/\s+/g, " ").trim().slice(0, MAX[k]) : was;
        keep();
      };
      textEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          textEl.blur();
        }
        if (e.key === "Escape") {
          e.stopPropagation();
          finish(false);
        }
      });
      textEl.addEventListener("input", () => {
        if (textEl.textContent.length > MAX[k]) textEl.textContent = textEl.textContent.slice(0, MAX[k]);
      });
      textEl.addEventListener("blur", () => finish(true), { once: true });
    };
    const editLong = () => {
      const node = dialog({
        title: t("as.long"),
        body: `<label class="as-long"><textarea class="input" rows="12" maxlength="${MAX.long}" data-long>${esc(a.long)}</textarea><span class="g" data-count>${t("as.chars", { n: a.long.length, max: MAX.long })}</span></label>`,
        actions: [{ label: t("cancel") }, { label: t("as.save"), primary: true, onClick: (n) => {
          a.long = n.querySelector("[data-long]").value;
          keep();
        } }]
      });
      const ta = node.querySelector("[data-long]");
      ta.addEventListener("input", () => {
        node.querySelector("[data-count]").textContent = t("as.chars", { n: ta.value.length, max: MAX.long });
      });
      ta.focus();
    };
    const open = (node, at = null) => {
      const key = node.dataset.spot;
      if (node.classList.contains("making") || node.classList.contains("editing")) return;
      const [k0, idx] = key.split(":");
      const k = k0 === "shot" ? "shots" : k0;
      const i = idx != null ? Number(idx) : null;
      if (["name", "short", "long"].includes(k)) {
        const empty = !a[k] || k === "name" && UNTITLED.has(a[k]);
        return popMenu(node, t(`as.${k}`), [
          { label: t(empty ? "as.type" : "as.editText"), onClick: () => k === "long" ? editLong() : node.querySelector("h1, p") ? editInline(node, k) : go(`#/games/${g.id}?tab=aso`) },
          { label: t(empty ? "as.ai" : "as.redo"), primary: empty, onClick: () => writeText(k) }
        ], at);
      }
      const filled = k === "shots" ? !!item(g, "shots").list[i] : item(g, k).state === "done";
      const title = k === "shots" ? filled ? `${t("as.shot")} ${i + 1}` : t("as.shots") : t(`as.${k}`);
      if (!filled) {
        return popMenu(node, `${title}<span>${SPEC[k]}</span>`, [
          { label: t("as.upload"), onClick: () => upload(k, k === "shots" ? item(g, "shots").list.length : 0, k === "shots") },
          { label: t("as.ai"), primary: true, onClick: () => ask(k, i, false) }
        ], at);
      }
      const now = k === "shots" ? item(g, "shots").list[i].src : item(g, k).src;
      return popMenu(node, title, [
        { label: t("as.redo"), onClick: () => ask(k, i, true) },
        { label: t("as.other"), onClick: () => pickOther(g, key, now, (src) => {
          if (k === "shots") {
            const list = item(g, "shots").list;
            a.old.shots.push(list[i].src);
            list[i] = { state: "done", src, wide: list[i].wide };
          } else {
            const it = item(g, k);
            a.old[k].push(it.src);
            Object.assign(it, { state: "done", src });
          }
          keep();
        }) },
        { label: t("as.upload"), onClick: () => upload(k, k === "shots" ? i : 0, false) }
      ], at);
    };
    const bind = (scope) => scope.querySelectorAll("[data-spot]").forEach((node) => {
      node.addEventListener("click", (e) => {
        e.preventDefault();
        open(node, { x: e.clientX, y: e.clientY });
      });
      node.addEventListener("keydown", (e) => {
        if ((e.key === "Enter" || e.key === " ") && !node.classList.contains("editing")) {
          e.preventDefault();
          open(node);
        }
      });
    });
    return { bind, make, writeText };
  }
  function auto(g) {
    const c = control(g, () => {
      const y = window.scrollY;
      rerender();
      window.scrollTo(0, y);
    });
    const a = init(g);
    if (item(g, "icon").state !== "done") c.make("icon");
    if (item(g, "feature").state !== "done") c.make("feature");
    for (let n = shotsOf(g).length; n < SHOTS.min; n += 1) c.make("shots", null, {});
    if (UNTITLED.has(a.name) || !a.name) c.writeText("name");
    if (!a.short) c.writeText("short");
    if (!a.long) c.writeText("long");
  }
  const redo = (g, k, i = null) => control(g, () => {
    const y = window.scrollY;
    rerender();
    window.scrollTo(0, y);
  }).make(k, i);
  function mount(root, g) {
    const keep = () => {
      const y = window.scrollY;
      rerender();
      window.scrollTo(0, y);
    };
    const page = root.querySelector("[data-aso-page]");
    const card = root.querySelector(".gm-aso[data-aso-card]");
    if (!page && !card) return;
    const a = init(g);
    if (page && !document.querySelector("link[data-roboto]")) document.head.append(el('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" data-roboto>'));
    control(g, keep).bind(page || card);
    root.querySelectorAll("[data-aso-save]").forEach((b) => b.addEventListener("click", () => {
      a.saved = AS_OF;
      a.gv = g.ver || 1;
      toast(t("as.saved"));
      go(`#/games/${g.id}`);
    }));
  }
  const bar = (g) => `<span class="as-left ${done(g) ? "ok" : ""}">${done(g) ? `${ICON.check}${t("as.ready")}` : t("as.left", { n: left(g) })}</span><button class="btn primary" data-aso-save>${t("as.save")}</button>`;
  return { render, mount, init, done, made, stale, mini, icon, shotsOf, bar, auto, redo, item, making: (g) => ["icon", "feature"].some((k) => item(g, k).state === "making") || item(g, "shots").list.some((x) => x.state === "making") };
})();
