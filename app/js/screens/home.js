addStrings({
  en: {
    continuePlaying: "Continue playing",
    makeYours: "Remix",
    noMatch: "No games found.",
    contestTitle: "October Challenge",
    contestDates: "Oct 1 – Oct 31",
    join: "Join",
    "hm.top": "Top picks for you",
    "hm.popular": "Popular games",
    "hm.new": "New games",
    "hm.more": "More",
    "hm.prev": "Previous",
    "hm.todo": "To do",
    "hm.myGames": "In progress",
    "hm.cpiPassed": "CPI test passed",
    "hm.startS2": "Start Stage 2",
    "hm.b.contest": "Contest",
    "hm.b.top": "#1 this week",
    "hm.b.new": "New",
    "hm.b.rising": "Rising",
    "hm.b.pick": "Editor’s pick",
    "hm.b.contestSub": "Submit a game you made in Maden by Oct 31.",
    "hm.b.diceSub": "Roll, dodge and level up in a roguelike arena.",
    "hm.b.meowSub": "Aim the paw cannon and knock down every can.",
    "hm.b.bubbleSub": "Pop bubbles and rescue the animals inside.",
    "hm.b.sailSub": "Sail between islands with a crew of cats."
  },
  ko: {
    continuePlaying: "이어서 플레이",
    makeYours: "리믹스",
    noMatch: "게임이 없습니다.",
    contestTitle: "10월 챌린지",
    contestDates: "10월 1일 – 10월 31일",
    join: "참가",
    "hm.top": "추천 게임",
    "hm.popular": "인기 게임",
    "hm.new": "새 게임",
    "hm.more": "더 보기",
    "hm.prev": "이전",
    "hm.todo": "할 일",
    "hm.myGames": "진행 중",
    "hm.cpiPassed": "CPI 테스트 통과",
    "hm.startS2": "Stage 2 시작",
    "hm.b.contest": "콘테스트",
    "hm.b.top": "이번 주 1위",
    "hm.b.new": "신작",
    "hm.b.rising": "급상승",
    "hm.b.pick": "추천",
    "hm.b.contestSub": "메이든에서 만든 게임을 10월 31일까지 제출하세요.",
    "hm.b.diceSub": "굴리고 피하고 레벨 업하는 로그라이크 아레나.",
    "hm.b.meowSub": "발바닥 대포로 캔을 전부 쓰러뜨리세요.",
    "hm.b.bubbleSub": "거품을 터뜨려 안에 갇힌 동물을 구하세요.",
    "hm.b.sailSub": "고양이 선원들과 섬 사이를 항해하세요."
  }
});
(() => {
  const LIKE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 21V10l4-7c1.2 0 2 1 2 2.2V9h5.5c1.2 0 2 1.1 1.8 2.2l-1.5 8A2 2 0 0 1 16.8 21H7zM3 10h2.5v11H3z" fill="currentColor"/></svg>';
  const BANNERS = [
    { tag: "hm.b.contest", title: "contestTitle", sub: "hm.b.contestSub", img: "banner-contest.jpg", href: "#/contest", cta: "join" },
    { tag: "hm.b.top", game: "lucky-lucky", sub: "hm.b.diceSub", img: "banner-dice.jpg" },
    { tag: "hm.b.rising", game: "meow-smash", sub: "hm.b.meowSub", img: "promo-meow.jpg" },
    { tag: "hm.b.new", game: "bubble-pop", sub: "hm.b.bubbleSub", img: "banner-bubble.jpg" },
    { tag: "hm.b.pick", game: "animal-harbor", sub: "hm.b.sailSub", img: "banner-sail.jpg" }
  ].filter((b) => !b.game || GAME[b.game]);
  const IMG = { "banner-contest.jpg": gen("banner-contest.jpg"), "promo-meow.jpg": gen("promo-meow.jpg"), "banner-dice.jpg": gen("banner-dice.jpg"), "banner-bubble.jpg": gen("banner-bubble.jpg"), "banner-sail.jpg": gen("banner-sail.jpg") };
  let slide = 0;
  function banner() {
    return `<section class="hm-banner" data-banner>
      ${BANNERS.map((b, i) => {
      const g = b.game ? GAME[b.game] : GAME[b.icon];
      return `<a class="hm-slide ${i === slide ? "on" : ""}" href="${b.href || `#/game/${b.game}`}" data-slide="${i}">
          <img src="${IMG[b.img]}" alt="">
          <span class="hm-slide-text">${g ? gameIcon(g, "hm-slide-icon") : ""}<span class="tag">${t(b.tag)}</span><b>${b.game ? esc(g.name) : t(b.title)}</b><span class="hm-slide-sub">${t(b.sub)}</span>
            <span class="btn primary">${b.cta ? t(b.cta) : t("play")}</span></span>
        </a>`;
    }).join("")}
      <div class="hm-tabs">${BANNERS.map((b, i) => `<button data-go="${i}" aria-pressed="${i === slide}"><span class="g">${t(b.tag)}</span><span class="n">${b.game ? esc(GAME[b.game].name) : t(b.title)}</span><i></i></button>`).join("")}</div>
    </section>`;
  }
  const released = (i) => Date.parse(AS_OF) - (i * 5 + 34) % 37 * 864e5;
  const moving = (g) => g.video && g.tallVideo !== false;
  function tile(g, { big = false } = {}) {
    const pics = g.video ? [] : [...new Set(Object.values(g.shots || {}))].filter((x) => x !== g.cover);
    return `<a class="hm-tile ${big ? "big" : ""}" href="#/game/${g.key}" ${g.video && !moving(g) ? `data-peek="${g.video}"` : ""} ${pics.length ? `data-shots="${pics.join("|")}"` : ""} aria-label="${esc(g.name)}">
      ${shot(g.cover, { extra: moving(g) ? `<video class="hm-v" src="${g.video}${g.clipAt ? `#t=${g.clipAt}` : ""}" data-from="${g.clipAt || 0}" muted loop playsinline preload="none"></video>` : "" })}
      <span class="hm-info"><span class="n">${esc(g.name)}</span>
        <span class="hm-meta"><span class="tag">${t(g.genre)}</span><span>${ICON.play}${compact(g.plays)}</span><span>${LIKE}${compact(Math.round(g.plays / 22))}</span></span></span>
    </a>`;
  }
  const row = (key, title, list) => list.length ? `<section class="hm-sec">
      <div class="head"><h2>${title}</h2><span class="sp"></span>
        <button class="icon-btn flat" data-row-step="${key}:-1" aria-label="${t("hm.prev")}">${ICON.back}</button><button class="icon-btn flat" data-row-step="${key}:1" aria-label="${t("hm.more")}">${ICON.next}</button></div>
      <div class="hm-row" data-row="${key}">${list.map((g) => tile(g)).join("")}</div>
    </section>` : "";
  route("/", {
    section: "home",
    name: "home",
    render() {
      const byPlays = [...PORTAL].sort((a, b) => b.plays - a.plays);
      const fresh = PORTAL.map((g, i) => [g, released(i)]).sort((a, b) => b[1] - a[1]).map(([g]) => g);
      const top = byPlays.slice(0, 13);
      const recent = ["bay", "snake", "golden-blast"].map((k) => GAME[k]);
      const recentRow = `<section class="hm-sec">
          <div class="head"><h2>${t("continuePlaying")}</h2></div>
          <div class="continue">${recent.map((x, i) => `
            <a class="card resume" href="#/game/${x.key}">
              ${shot(x.cover)}
              <span class="info">${gameIcon(x)}<span><span class="n">${esc(x.name)}</span><span class="g">${t(x.genre)}</span></span></span>
              <span class="bar"><i style="width:${[72, 40, 18][i]}%"></i></span>
            </a>`).join("")}
            <a class="card contest" href="#/contest">
              <span class="tag accent">${t("contest")}</span>
              <h2>${t("contestTitle")}</h2>
              <p class="muted">${t("contestDates")}</p>
              <span class="btn small primary">${t("join")}</span>
            </a>
          </div>
        </section>`;
      const making = store.games.filter((g) => !g.building && LAUNCH.step(g) === 0).slice(0, 2).map((g) => {
        const nx = ME.nextOf(g);
        return `<a class="hm-do" href="#/games/${g.id}">${gameIcon(GAME[g.base])}<span><span class="n">${esc(g.name)}</span><span class="g">${t(nx.row[0])}</span></span><span class="btn small">${t(nx.row[1])}</span></a>`;
      });
      const passed = store.games.filter((g) => LAUNCH.step(g) === 2 && LAUNCH.init(g).stage2.state === "idle").slice(0, 1).map((g) => `<a class="hm-do" href="#/games/${g.id}?tab=publish">${gameIcon(GAME[g.base])}<span><span class="n">${esc(g.name)}</span><span class="g">${t("hm.cpiPassed")}</span></span><span class="btn small primary">${t("hm.startS2")}</span></a>`);
      const todo = [...passed, ...making];
      const todoRow = todo.length ? `<section class="hm-sec hm-todo"><div class="head"><h2>${t("hm.todo")}</h2><span class="count">${todo.length}</span><span class="sp"></span><a class="btn small" href="#/me">${t("hm.myGames")}</a></div><div class="hm-dos">${todo.join("")}</div></section>` : "";
      return `
        ${subtabs(TABS.home, "#/")}
        ${banner()}
        ${todoRow}
        ${recentRow}
        <section class="hm-sec">
          <div class="head"><h2>${t("hm.top")}</h2></div>
          <div class="hm-top">${top.map((g, i) => tile(g, { big: i === 0 })).join("")}</div>
        </section>
        ${row("popular", t("hm.popular"), byPlays.slice(13).concat(byPlays.slice(0, 4)))}
        ${row("new", t("hm.new"), fresh)}
        ${GROUPS.map((k) => row(k, t(k), byPlays.filter((g) => g.group === k))).join("")}`;
    },
    mount(root) {
      const box = root.querySelector("[data-banner]");
      if (box) {
        const show = (i) => {
          slide = (i + BANNERS.length) % BANNERS.length;
          box.querySelectorAll(".hm-slide").forEach((x, k) => x.classList.toggle("on", k === slide));
          box.querySelectorAll("[data-go]").forEach((x, k) => {
            x.setAttribute("aria-pressed", String(k === slide));
            x.querySelector("i").style.animation = "none";
            void x.offsetWidth;
            x.querySelector("i").style.animation = "";
          });
        };
        box.querySelectorAll("[data-go]").forEach((x) => {
          x.addEventListener("click", () => show(Number(x.dataset.go)));
          x.addEventListener("mouseenter", () => show(Number(x.dataset.go)));
        });
        if (!params.has("freeze") && !document.documentElement.classList.contains("still")) {
          const timer = setInterval(() => {
            if (!box.isConnected) return clearInterval(timer);
            if (!box.matches(":hover")) show(slide + 1);
            return null;
          }, 6e3);
        }
      }
      root.querySelectorAll("[data-row-step]").forEach((b) => b.addEventListener("click", () => {
        const [key, dir] = b.dataset.rowStep.split(":");
        const r = root.querySelector(`[data-row="${key}"]`);
        r.scrollBy({ left: Number(dir) * r.clientWidth * 0.8, behavior: "smooth" });
      }));
      if (document.documentElement.classList.contains("still")) return;
      root.querySelectorAll("video.hm-v").forEach((v) => {
        const from = Number(v.dataset.from) || 0;
        if (from) v.addEventListener("timeupdate", () => {
          if (v.currentTime < from - 0.5) v.currentTime = from;
        });
        const tile2 = v.closest(".hm-tile");
        tile2.addEventListener("mouseenter", () => {
          v.preload = "auto";
          v.play().then(() => v.classList.add("on")).catch(() => {
          });
        });
        tile2.addEventListener("mouseleave", () => {
          v.pause();
          v.classList.remove("on");
          v.currentTime = from;
        });
      });
      root.querySelectorAll("[data-shots]").forEach((node) => {
        let timer = null;
        node.addEventListener("mouseenter", () => {
          const box2 = node.querySelector(".shot");
          const list = [box2.querySelector("img:not(.fill)").getAttribute("src"), ...node.dataset.shots.split("|")];
          let i = 0;
          const layer = el('<span class="hm-shots"></span>');
          box2.append(layer);
          const next = () => {
            i = (i + 1) % list.length;
            const im = el(`<img src="${list[i]}" alt="">`);
            layer.append(im);
            requestAnimationFrame(() => im.classList.add("on"));
            if (layer.children.length > 2) layer.firstElementChild.remove();
          };
          next();
          timer = setInterval(next, 1400);
        });
        node.addEventListener("mouseleave", () => {
          clearInterval(timer);
          node.querySelector(".hm-shots")?.remove();
        });
      });
      root.querySelectorAll("[data-peek]").forEach((node) => {
        node.addEventListener("mouseenter", () => {
          node.dataset.video = node.dataset.peek;
          startMedia(node);
        });
        node.addEventListener("mouseleave", () => node.querySelector(".auto")?.remove());
      });
    }
  });
})();
