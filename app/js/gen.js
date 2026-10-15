addStrings({
  en: {
    "gen.ask": "What style should it be?",
    "gen.prompt": "Describe the style",
    "gen.ref": "Reference",
    "gen.refN": "{n}/{max}",
    "gen.same": "Similar genre",
    "gen.all": "All",
    "gen.dl": "{n} downloads",
    "gen.tall": "Portrait",
    "gen.wide": "Landscape",
    "gen.make": "Generate",
    "gen.src": "Sample data · top free games · last month",
    "gen.st.fail": "Fail",
    "gen.st.hand": "Hand play",
    "gen.st.progress": "Level progress",
    "gen.st.beforeAfter": "Before & after",
    "gen.st.satisfy": "Satisfying",
    "gen.st.choice": "Choose one",
    "gen.st.ugc": "UGC",
    "gen.st.endcard": "End card",
    "gen.st.face": "Character face",
    "gen.st.object": "Object",
    "gen.st.logo": "Logo & letters",
    "gen.st.scene": "Scene",
    "gen.st.3d": "3D render",
    "gen.st.flat": "2D illustration",
    "gen.st.gameplay": "Gameplay",
    "gen.st.feature": "Feature",
    "gen.st.caption": "Big caption",
    "gen.st.character": "Character",
    "gen.st.keyart": "Key art",
    "gen.st.keepArt": "Same art style",
    "gen.st.gloss": "Glossy",
    "gen.st.wood": "Wood",
    "gen.st.simple": "Simple",
    "gen.st.bold": "Bold outline"
  },
  ko: {
    "gen.ask": "어떤 스타일로 만들까요?",
    "gen.prompt": "원하는 스타일을 적어 주세요",
    "gen.ref": "레퍼런스",
    "gen.refN": "{n}/{max}",
    "gen.same": "유사 장르",
    "gen.all": "전체",
    "gen.dl": "다운로드 {n}",
    "gen.tall": "세로",
    "gen.wide": "가로",
    "gen.make": "생성",
    "gen.src": "예시 데이터 · 인기 무료 게임 · 지난달",
    "gen.st.fail": "실패 장면",
    "gen.st.hand": "손 플레이",
    "gen.st.progress": "레벨 진행",
    "gen.st.beforeAfter": "전후 비교",
    "gen.st.satisfy": "손맛 강조",
    "gen.st.choice": "선택지",
    "gen.st.ugc": "UGC",
    "gen.st.endcard": "엔딩 카드",
    "gen.st.face": "캐릭터 얼굴",
    "gen.st.object": "오브젝트",
    "gen.st.logo": "로고 · 글자",
    "gen.st.scene": "장면",
    "gen.st.3d": "3D 렌더",
    "gen.st.flat": "2D 일러스트",
    "gen.st.gameplay": "게임플레이",
    "gen.st.feature": "기능 소개",
    "gen.st.caption": "문구 강조",
    "gen.st.character": "캐릭터",
    "gen.st.keyart": "키 아트",
    "gen.st.keepArt": "지금 아트 그대로",
    "gen.st.gloss": "광택",
    "gen.st.wood": "나무 질감",
    "gen.st.simple": "심플",
    "gen.st.bold": "굵은 외곽선"
  }
});
const GEN = /* @__PURE__ */ (() => {
  const pic = (file) => window.INLINE && window.INLINE[`앱매직/${file}`] || `../design/자산/앱매직-레퍼런스/${file}`;
  const STYLES = {
    video: ["fail", "hand", "progress", "beforeAfter", "satisfy", "choice", "ugc", "endcard"],
    icon: ["face", "object", "logo", "scene", "3d", "flat"],
    shot: ["gameplay", "feature", "caption", "beforeAfter", "progress", "character"],
    feature: ["keyart", "gameplay", "character", "logo"],
    ui: ["keepArt", "gloss", "flat", "3d", "wood", "simple", "bold"]
  };
  const MAX = 3;
  const short = (n) => lang === "ko" ? n >= 1e8 ? `${(n / 1e8).toFixed(1).replace(/\.0$/, "")}억` : `${Math.round(n / 1e4).toLocaleString()}만` : n >= 1e6 ? `${(n / 1e6).toFixed(1).replace(/\.0$/, "")}M` : `${Math.round(n / 1e3)}K`;
  function items(kind, orient) {
    const refs = typeof AM_REFS === "undefined" ? [] : AM_REFS;
    if (kind === "video") return refs.filter((r) => r.video).map((r) => ({ key: r.name, r, img: pic(r.poster), video: pic(r.video), wide: !!r.wide }));
    if (kind === "icon") return refs.filter((r) => r.icon).map((r) => ({ key: r.name, r, img: pic(r.icon) }));
    const wantWide = kind === "feature" || orient === "wide";
    return refs.map((r) => {
      const s = r.shots.find(([, w]) => !!w === wantWide);
      return s ? { key: r.name, r, img: pic(s[0]), wide: wantWide } : null;
    }).filter(Boolean);
  }
  const tile = (it, on, kind) => `<button class="gen-ref ${it.wide ? "wide" : ""}" data-gen-ref="${esc(it.key)}" aria-pressed="${on}">
      <span class="gen-media">${it.video ? shot(it.img, { play: { video: it.video } }) : `<img src="${it.img}" alt="" loading="lazy">`}<i class="check">${ICON.check}</i></span>
      <span class="gen-cap"><b>${esc(it.r.name)}</b><span>${t("gen.dl", { n: short(it.r.downloads) })}</span>${kind === "video" && it.r.ctr ? `<span class="gen-perf">CTR ${it.r.ctr}% · IPM ${it.r.ipm}</span>` : ""}</span></button>`;
  function render(box, opts) {
    const { kind, group, cost = 0, back, close, onMake } = opts;
    const st = { styles: new Set(opts.styles || []), prompt: opts.prompt || "", picks: /* @__PURE__ */ new Set(), orient: opts.orient || "tall", filter: null };
    box.classList.add("gen-dlg");
    const paint = () => {
      const list = items(kind, st.orient);
      const same = list.filter((it) => it.r.group === group);
      if (!st.filter) st.filter = same.length >= 4 ? "same" : "all";
      const shown = st.filter === "same" ? same : list;
      box.innerHTML = `<h2>${opts.title || t("gen.ask")}</h2>
        <div class="gen-form">
          ${kind === "shot" ? `<span class="seg gen-orient" role="group">${["tall", "wide"].map((o) => `<button data-gen-orient="${o}" aria-pressed="${st.orient === o}"><i class="gen-o ${o}"></i>${t(`gen.${o}`)}</button>`).join("")}</span>` : ""}
          <div class="chips gen-styles">${STYLES[kind].map((k) => `<button class="chip" data-gen-style="${k}" aria-pressed="${st.styles.has(k)}">${t(`gen.st.${k}`)}</button>`).join("")}</div>
          <textarea class="input gen-prompt" rows="3" maxlength="400" placeholder="${t("gen.prompt")}" data-gen-prompt>${esc(st.prompt)}</textarea>
          <div class="gen-sub"><h3>${t("gen.ref")}<span class="count">${t("gen.refN", { n: st.picks.size, max: MAX })}</span></h3>
            <span class="seg gen-filter" role="group"><button data-gen-filter="same" aria-pressed="${st.filter === "same"}">${t("gen.same")} ${same.length}</button><button data-gen-filter="all" aria-pressed="${st.filter === "all"}">${t("gen.all")} ${list.length}</button></span></div>
          <div class="gen-grid k-${kind}">${shown.map((it) => tile(it, st.picks.has(it.key), kind)).join("")}</div>
          <p class="gen-src g">${t("gen.src")}</p>
        </div>
        <div class="row">${back ? `<button class="btn" data-gen-back>${t("back")}</button>` : `<button class="btn" data-gen-close>${t("cancel")}</button>`}<span class="sp"></span>
          <button class="btn primary" data-gen-go>${opts.makeLabel || t("gen.make")}${cost ? `<span class="btn-cost"><img class="coin" src="${COIN}" alt="">${num(cost)}</span>` : ""}</button></div>`;
      bind();
      hoverVideo(box);
    };
    function bind() {
      box.querySelector("[data-gen-back]")?.addEventListener("click", back);
      box.querySelector("[data-gen-close]")?.addEventListener("click", close);
      box.querySelectorAll("[data-gen-style]").forEach((b) => b.addEventListener("click", () => {
        const k = b.dataset.genStyle;
        if (!st.styles.delete(k)) st.styles.add(k);
        b.setAttribute("aria-pressed", st.styles.has(k));
      }));
      box.querySelector("[data-gen-prompt]").addEventListener("input", (e) => {
        st.prompt = e.target.value;
      });
      box.querySelectorAll("[data-gen-orient]").forEach((b) => b.addEventListener("click", () => {
        st.orient = b.dataset.genOrient;
        st.picks.clear();
        paint();
      }));
      box.querySelectorAll("[data-gen-filter]").forEach((b) => b.addEventListener("click", () => {
        st.filter = b.dataset.genFilter;
        paint();
      }));
      box.querySelectorAll("[data-gen-ref]").forEach((b) => b.addEventListener("click", () => {
        const k = b.dataset.genRef;
        if (!st.picks.delete(k)) {
          if (st.picks.size >= MAX) st.picks.delete(st.picks.values().next().value);
          st.picks.add(k);
        }
        const y = box.querySelector(".gen-form").scrollTop;
        paint();
        box.querySelector(".gen-form").scrollTop = y;
      }));
      box.querySelector("[data-gen-go]").addEventListener("click", () => {
        close();
        onMake({ prompt: st.prompt.trim(), styles: [...st.styles], refs: [...st.picks], orient: st.orient });
      });
    }
    paint();
  }
  function open(opts) {
    const node = el('<div class="overlay"><div class="dialog" role="dialog" aria-modal="true"></div></div>');
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
    document.body.append(node);
    render(node.firstElementChild, { ...opts, close });
    return node;
  }
  const groupOf = (g) => {
    const b = GAME[g.base] || {};
    return ["puzzle", "action", "simulation"].includes(b.group) ? b.group : ["puzzle", "action", "simulation"].includes(b.genre) ? b.genre : "casual";
  };
  return { render, open, groupOf, short };
})();
