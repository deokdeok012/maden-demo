addStrings({
  en: {
    "tm.online": "Online",
    "tm.offline": "Offline",
    "tm.went": "You are on {name}’s page.",
    "tm.away": "{name} is offline.",
    "tm.team": "Members",
    "tm.share": "Share",
    "tm.shareHint": "Share your cursor and page with the team",
    "tm.slash": "Press / to chat",
    "tm.say": "Say something",
    "tm.call": "Call",
    "tm.calledOne": "{name} called.",
    "tm.callIn": "{name} called you!",
    "tm.move": "Go",
    "tm.coming": "On my way.",
    "tm.owner": "Owner",
    "tm.copy": "Copy link",
    "tm.copied": "Link copied.",
    "tm.close": "Close",
    "tm.comments": "Comments",
    "tm.addComment": "Add a comment",
    "tm.reply": "Reply",
    "tm.replies": "{n} replies",
    "tm.reply1": "1 reply",
    "tm.search": "Search",
    "tm.noComments": "No comments yet. Click anywhere to add one.",
    "tm.noMatch": "No comments match.",
    "tm.now": "Just now",
    "tm.min": "{n}m ago",
    "tm.hour": "{n}h ago",
    "tm.day": "{n}d ago",
    "tm.month": "{n}mo ago",
    "tm.emoji": "Emoji",
    "tm.mention": "Mention",
    "tm.image": "Image",
    "tm.post": "Post",
    "tm.answer": "Reply",
    "tm.askAI": "Ask Claude",
    "tm.more": "More",
    "tm.resolve": "Resolve",
    "tm.resolved": "Marked as resolved.",
    "tm.reopen": "Reopen",
    "tm.delete": "Delete",
    "tm.deleted": "Comment deleted.",
    "tm.task.req": "Requested",
    "tm.task.run": "In progress",
    "tm.task.done": "Done",
    "tm.claude": "Claude",
    "tm.p.home": "Play",
    "tm.p.make": "Make",
    "tm.p.board": "Board",
    "tm.p.game": "Game page",
    "tm.p.games": "My games",
    "tm.p.earn": "Earnings",
    "tm.p.other": "Site"
  },
  ko: {
    "tm.online": "온라인",
    "tm.offline": "오프라인",
    "tm.went": "{name}님이 있는 페이지입니다.",
    "tm.away": "{name}님은 오프라인입니다.",
    "tm.team": "멤버",
    "tm.share": "공유",
    "tm.shareHint": "내 커서와 위치를 팀에 공유",
    "tm.slash": "/ 를 눌러 채팅",
    "tm.say": "대화를 시작하세요",
    "tm.call": "호출",
    "tm.calledOne": "{name}님을 호출했습니다.",
    "tm.callIn": "{name}님이 호출했습니다.",
    "tm.move": "이동",
    "tm.coming": "지금 가요.",
    "tm.owner": "소유자",
    "tm.copy": "링크 복사",
    "tm.copied": "링크를 복사했습니다.",
    "tm.close": "닫기",
    "tm.comments": "댓글",
    "tm.addComment": "댓글 추가",
    "tm.reply": "답글",
    "tm.replies": "{n}개의 답글",
    "tm.reply1": "1개의 답글",
    "tm.search": "검색",
    "tm.noComments": "아직 댓글이 없습니다. 화면을 눌러 남기세요.",
    "tm.noMatch": "맞는 댓글이 없습니다.",
    "tm.now": "방금",
    "tm.min": "{n}분 전",
    "tm.hour": "{n}시간 전",
    "tm.day": "{n}일 전",
    "tm.month": "{n}개월 전",
    "tm.emoji": "이모지",
    "tm.mention": "멘션",
    "tm.image": "이미지",
    "tm.post": "올리기",
    "tm.answer": "답변",
    "tm.askAI": "클로드에게 맡기기",
    "tm.more": "더 보기",
    "tm.resolve": "해결",
    "tm.resolved": "해결됨으로 표시했습니다.",
    "tm.reopen": "다시 열기",
    "tm.delete": "삭제",
    "tm.deleted": "댓글을 삭제했습니다.",
    "tm.task.req": "요청",
    "tm.task.run": "진행 중",
    "tm.task.done": "완료",
    "tm.claude": "Claude",
    "tm.p.home": "플레이",
    "tm.p.make": "만들기",
    "tm.p.board": "보드",
    "tm.p.game": "게임 페이지",
    "tm.p.games": "내 게임",
    "tm.p.earn": "수익",
    "tm.p.other": "사이트"
  }
});
const TEAM = (() => {
  const COLORS = { me: "#8B5CF6", mina: "#AF52DE", aiko: "#FF9500", emma: "#34C759", lucas: "#FF2D55", lena: "#5AC8FA" };
  const ME = { key: "me", name: L("Deokgu", "덕구"), avatar: null };
  const PEOPLE = [
    { key: "mina", online: true, follow: true, hash: "#/" },
    { key: "aiko", online: true, route: ["#/make/board?game=bay", "#/games/bay", "#/make/board?game=bay"], hash: "#/make/board?game=bay" },
    { key: "emma", online: true, route: ["#/earn", "#/market", "#/games"], hash: "#/earn" },
    { key: "lucas", online: false, hash: "#/games" },
    { key: "lena", online: false, hash: "#/make" }
  ].map((p) => ({ ...p, x: 30 + Math.random() * 40, y: 30 + Math.random() * 40 }));
  const LINES = {
    board: [L("Swapping the lobby for the Bubble Pop one.", "로비를 Bubble Pop 걸로 바꿔 볼게요."), L("Level map looks good here.", "레벨 지도 여기 괜찮네요."), L("Can we drop the shop for the first test?", "첫 테스트에선 상점 빼도 될까요?")],
    game: [L("The first ad comes too early.", "첫 광고가 너무 빨리 나와요."), L("Level 4 is still hard.", "레벨 4가 아직 어려워요."), L("Creatives look ready.", "크리에이티브는 준비된 것 같아요.")],
    earn: [L("Beach Smash is up 16% this month.", "Beach Smash가 이번 달 16% 올랐어요."), L("Payout goes out on the 21st.", "지급은 21일에 나가요.")],
    home: [L("This banner game is fun.", "이 배너 게임 재밌네요."), L("Try Royal Match, the level pacing is great.", "Royal Match 해 보세요. 레벨 흐름이 좋아요.")],
    other: [L("I am here.", "여기 있어요.")]
  };
  const DAY = 864e5;
  const now = Date.now();
  const SEED = [
    { id: 83, page: "#/", x: 0.62, y: 300, who: "aiko", at: now - 16 * DAY, unread: true, text: L("@MinaMakes The third banner crops the key art on phones. I will regenerate it with more room at the top.", "@MinaMakes 님, 세 번째 배너가 휴대폰에서 키 아트가 잘려요. 위쪽 여백을 넉넉히 두고 다시 뽑을게요.") },
    { id: 79, page: "#/make/board", x: 0.48, y: 260, who: "emma", at: now - 22 * DAY, text: L("Use the Bubble Pop lobby. It removes one tap before the first level.", "로비는 Bubble Pop 걸로 해요. 첫 레벨까지 한 번 덜 눌러요.") },
    { id: 78, page: "#/games/bay", x: 0.36, y: 420, who: "mina", at: now - 22 * DAY, unread: true, text: L("- No ad before level 3\n- Rewarded ads only in the first session\n- Interstitials after day 1", "- 레벨 3 전에는 광고 없음\n- 첫 세션은 보상형 광고만\n- 전면 광고는 1일차 이후"), replies: [{ who: "aiko", at: now - 21 * DAY, text: L("Agreed. I will move it in the CPI build.", "좋아요. CPI 빌드에 옮길게요.") }] },
    { id: 52, page: "#/earn", x: 0.3, y: 380, who: "lucas", at: now - 9 * DAY, text: L("@EmmaCrafts September total here and in Payouts are $40 apart. Refund timing?", "@EmmaCrafts 님, 9월 합계가 여기랑 지급 내역에서 $40 달라요. 환불 반영 시점 때문일까요?") },
    { id: 36, page: "#/make", x: 0.55, y: 520, who: "lena", at: now - 31 * DAY, text: L("Put Puzzle and Idle first in the genre list. Most new teams start there.", "장르 목록에서 퍼즐 · 방치형을 앞으로 둬요. 새로 온 팀이 대부분 거기서 시작해요.") }
  ];
  const saved = (() => {
    try {
      return JSON.parse(localStorage.getItem("maden.comments") || "[]");
    } catch {
      return [];
    }
  })();
  const comments = [...SEED.map((c) => ({ replies: [], ...c })), ...saved];
  const keep = () => {
    try {
      localStorage.setItem("maden.comments", JSON.stringify(comments.filter((c) => c.who === "me")));
    } catch {
    }
  };
  const pageOf = (hash) => (hash || "#/").split("?")[0];
  const kindOf = (hash) => {
    const p = pageOf(hash);
    return p === "#/" ? "home" : p.startsWith("#/make/board") ? "board" : /^#\/(game|games)\/[^/]+$/.test(p) ? "game" : p.startsWith("#/earn") ? "earn" : p === "#/games" ? "games" : p.startsWith("#/make") ? "make" : "other";
  };
  const here = () => pageOf(location.hash);
  const sameAsMe = (p) => p.online && pageOf(p.hash) === here();
  const AI = { key: "claude", name: "Claude", avatar: null };
  const who = (k) => k === "me" ? ME : k === "claude" ? AI : CREATOR[k];
  const plain = (k) => {
    const n = who(k).name;
    return typeof n === "string" ? n : tr(n);
  };
  const nameOf = (k) => esc(plain(k));
  const SPARK = '<svg viewBox="0 0 24 24"><path d="M12 3c.6 4.6 3.4 7.4 8 8-4.6.6-7.4 3.4-8 8-.6-4.6-3.4-7.4-8-8 4.6-.6 7.4-3.4 8-8z"/></svg>';
  const face = (k, cls = "") => k === "me" ? `<span class="avatar ${cls} tm-me">DG</span>` : k === "claude" ? `<span class="avatar ${cls} tm-ai">${SPARK}</span>` : avatar(CREATOR[k], cls);
  const color = (k) => COLORS[k] || "#0071E3";
  const ago = (at) => {
    const m = Math.max(0, Math.round((Date.now() - at) / 6e4));
    return m < 1 ? t("tm.now") : m < 60 ? t("tm.min", { n: m }) : m < 1440 ? t("tm.hour", { n: Math.round(m / 60) }) : m < 43200 ? t("tm.day", { n: Math.round(m / 1440) }) : t("tm.month", { n: Math.round(m / 43200) });
  };
  const textOf = (c) => typeof c.text === "string" ? c.text : tr(c.text);
  const rich = (s) => esc(s).replace(/(^|\s)(@[\w가-힣]+)/g, '$1<b class="tm-at">$2</b>').replace(/\n/g, "<br>");
  let cursors = (() => {
    try {
      return localStorage.getItem("maden.share") !== "0";
    } catch {
      return true;
    }
  })();
  let mode = null;
  let menuOpen = false;
  let query = "";
  let openId = null;
  const mouse = { x: innerWidth / 2, y: innerHeight / 2 };
  const ICONS = {
    chev: '<svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5"/></svg>',
    pin: '<svg viewBox="0 0 24 24"><path d="M5 19.5V12a7.5 7.5 0 1 1 7.5 7.5z"/></svg>',
    smile: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M8.5 14a4.5 4.5 0 0 0 7 0M9.5 9.5h.01M14.5 9.5h.01"/></svg>',
    at: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.5"/><path d="M15.5 8.5v5a2.5 2.5 0 0 0 5 0V12a8.5 8.5 0 1 0-3.5 6.9"/></svg>',
    image: '<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="15" cy="9" r="1.5"/><path d="M4 16l5-5 7 7"/></svg>',
    send: '<svg viewBox="0 0 24 24"><path d="M12 19V6M6.5 11.5L12 6l5.5 5.5"/></svg>',
    search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4 4"/></svg>',
    dots: '<svg viewBox="0 0 24 24"><circle cx="5.5" cy="12" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="18.5" cy="12" r="1.4"/></svg>',
    check: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M8.3 12.3l2.5 2.5 5-5.3"/></svg>',
    spark: SPARK,
    run: '<svg viewBox="0 0 24 24"><path d="M12 3.5a8.5 8.5 0 1 0 8.5 8.5"/></svg>',
    done: '<svg viewBox="0 0 24 24"><path d="M6.5 12.5l3.6 3.6 7.4-8"/></svg>'
  };
  const unread = () => comments.some((c) => c.unread);
  function bar() {
    const list = [...PEOPLE].sort((a, b) => b.online - a.online);
    return `<span class="tm-bar">
      <span class="tm-people">${list.map((p) => `<button class="tm-face ${p.online ? "on" : "off"} ${sameAsMe(p) ? "here" : ""}" data-tm-go="${p.key}" style="--c:${color(p.key)}" title="${nameOf(p.key)} · ${p.online ? `${t("tm.online")} · ${t(`tm.p.${kindOf(p.hash)}`)}` : t("tm.offline")}">${face(p.key)}<i></i></button>`).join("")}
        <button class="tm-chev" data-tm-menu aria-expanded="${menuOpen}" aria-label="${t("tm.team")}">${ICONS.chev}</button></span>
      <button class="tm-cmt" data-tm-comment aria-pressed="${mode === "comment"}" aria-label="${t("tm.comments")}" title="${t("tm.comments")} (C)">${ICONS.pin}${unread() ? "<i></i>" : ""}</button>
      <span class="tm-share" title="${t("tm.shareHint")}"><span>${t("tm.share")}</span><button class="switch" role="switch" aria-checked="${cursors}" data-tm-share aria-label="${t("tm.share")}"><i></i></button></span>
      <button class="btn tm-callbtn" data-tm-call>${t("tm.call")}</button>
    </span>`;
  }
  const layer = el('<div class="tm-layer" aria-hidden="true"></div>');
  const pins = el('<div class="tm-pins"></div>');
  const catcher = el('<div class="tm-catch" hidden></div>');
  const side = el('<aside class="tm-side" hidden></aside>');
  const menu = el('<div class="tm-menu" hidden></div>');
  const mine = el('<div class="tm-say mine" hidden></div>');
  function topOf() {
    return Math.round(document.querySelector("header.nav")?.getBoundingClientRect().bottom || 64);
  }
  function cursorHtml(p) {
    return `<span class="tm-cursor" data-k="${p.key}" style="--c:${color(p.key)};transform:translate(${p.x}vw, ${p.y}vh)"><svg viewBox="0 0 24 24"><path d="M4 3l7 18 2.5-7.5L21 11z"/></svg><b>${nameOf(p.key)}</b></span>`;
  }
  function drawCursors() {
    layer.innerHTML = cursors ? PEOPLE.filter(sameAsMe).map(cursorHtml).join("") : "";
  }
  function moveCursors() {
    PEOPLE.filter(sameAsMe).forEach((p) => {
      p.x = Math.max(4, Math.min(80, p.x + (Math.random() - 0.5) * 26));
      p.y = Math.max(10, Math.min(80, p.y + (Math.random() - 0.5) * 22));
      const node = layer.querySelector(`[data-k="${p.key}"]`);
      if (node) node.style.transform = `translate(${p.x}vw, ${p.y}vh)`;
    });
  }
  const bubble = (k, body) => `<span class="tm-bubble" style="--c:${color(k)}"><span class="tm-bh">${face(k)}<b>${nameOf(k)}</b></span>${body}</span>`;
  function say(k, text) {
    const node = layer.querySelector(`[data-k="${k}"]`);
    if (!node) return;
    node.querySelector(".tm-bubble")?.remove();
    node.insertAdjacentHTML("beforeend", bubble(k, `<span class="tm-bt">${esc(typeof text === "string" ? text : tr(text))}</span>`));
    const b = node.querySelector(".tm-bubble");
    setTimeout(() => {
      b.classList.add("out");
      setTimeout(() => b.remove(), 300);
    }, 5e3);
  }
  let mineTimer = null;
  function placeMine() {
    mine.style.transform = `translate(${Math.min(mouse.x + 14, innerWidth - 300)}px, ${Math.min(mouse.y + 16, innerHeight - 90)}px)`;
  }
  function openChat() {
    if (mode === "comment") setMode(null);
    mode = "chat";
    clearTimeout(mineTimer);
    mine.className = "tm-say mine";
    mine.innerHTML = bubble("me", `<input class="tm-bt" maxlength="120" placeholder="${t("tm.say")}" aria-label="${t("tm.say")}">`);
    mine.hidden = false;
    placeMine();
    const input = mine.querySelector("input");
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        fadeChat();
      }
    });
    input.addEventListener("blur", () => {
      if (mode === "chat") fadeChat();
    });
    input.focus();
  }
  function closeChat() {
    mode = null;
    mine.hidden = true;
  }
  function fadeChat() {
    mode = null;
    mine.classList.add("out");
    mineTimer = setTimeout(() => {
      mine.hidden = true;
    }, 300);
  }
  const onPage = () => comments.filter((c) => c.page === here());
  const TASK = { req: "spark", run: "run", done: "done" };
  const taskChip = (c) => c.task ? `<span class="tm-chip ${c.task}">${t(`tm.task.${c.task}`)}</span>` : "";
  function pinMarkup(c, pos, open) {
    const head = c.task ? `<span class="tm-task ${c.task}">${ICONS[TASK[c.task]]}</span>` : face(c.who);
    return `<div class="tm-pin ${open ? "open" : ""} ${c.task ? `task ${c.task}` : ""} ${c.resolved ? "resolved" : ""}" data-tm-pin="${c.id}" style="${pos}">
      <button class="tm-pin-b" aria-label="#${c.id}">${head}</button>
      <span class="tm-peek" aria-hidden="true">${face(c.who)}<span><span class="tm-ph"><b>${nameOf(c.who)}</b><time>${ago(c.at)}</time>${taskChip(c)}</span><span class="tm-pt">${rich(textOf(c))}</span></span></span></div>`;
  }
  function rowMarkup(r) {
    return `<div class="tm-row">${face(r.who)}<div><p><b>${nameOf(r.who)}</b><time>${ago(r.at)}</time></p><div class="tm-rt">${r.html || rich(textOf(r))}</div>${r.img ? `<img class="tm-img" src="${r.img}" alt="">` : ""}</div></div>`;
  }
  function threadMarkup(c, pos, { ai = true } = {}) {
    return `<div class="tm-thread" style="${pos}" data-tm-thread="${c.id}">
      <header><b>${t("tm.comments")}</b>${taskChip(c)}<span class="sp"></span>
        ${ai && !c.task ? `<button class="tm-hb" data-tm-ai title="${t("tm.askAI")}" aria-label="${t("tm.askAI")}">${ICONS.spark}</button>` : ""}
        <button class="tm-hb" data-tm-more title="${t("tm.more")}" aria-label="${t("tm.more")}">${ICONS.dots}</button>
        <button class="tm-hb ${c.resolved ? "on" : ""}" data-tm-resolve title="${c.resolved ? t("tm.reopen") : t("tm.resolve")}" aria-label="${t("tm.resolve")}">${ICONS.check}</button>
        <button class="tm-hb" data-tm-shut title="${t("close")}" aria-label="${t("close")}">${ICON.x}</button>
        <span class="tm-menu2" hidden><button data-tm-copy>${t("tm.copy")}</button>${c.who === "me" ? `<button class="danger" data-tm-del>${t("tm.delete")}</button>` : ""}</span></header>
      <div class="tm-rows">${rowMarkup(c)}${(c.replies || []).map(rowMarkup).join("")}</div>
      <form class="tm-reply">${face("me")}<span class="tm-rin"><input placeholder="${t("tm.answer")}" aria-label="${t("tm.answer")}"><button class="tm-send" type="submit" aria-label="${t("tm.post")}" disabled>${ICONS.send}</button></span></form></div>`;
  }
  function bindThread(node, on) {
    const q = (sel) => node.querySelector(sel);
    q("[data-tm-shut]")?.addEventListener("click", on.shut);
    q("[data-tm-resolve]")?.addEventListener("click", on.resolve);
    q("[data-tm-ai]")?.addEventListener("click", on.ai);
    q("[data-tm-more]")?.addEventListener("click", (e) => {
      e.stopPropagation();
      q(".tm-menu2").hidden = !q(".tm-menu2").hidden;
    });
    q("[data-tm-copy]")?.addEventListener("click", () => {
      q(".tm-menu2").hidden = true;
      toast(t("tm.copied"));
    });
    q("[data-tm-del]")?.addEventListener("click", on.del);
    const form = q(".tm-reply");
    const input = form.querySelector("input");
    input.addEventListener("input", () => {
      form.querySelector(".tm-send").disabled = !input.value.trim();
    });
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (input.value.trim()) on.reply(input.value.trim());
    });
    setTimeout(() => input.focus({ preventScroll: true }), 0);
  }
  const pinHtml = (c) => pinMarkup(c, `left:${c.x * 100}%;top:${c.y}px`, c.id === openId);
  const threadHtml = (c) => threadMarkup(c, `left:min(calc(${c.x * 100}% + 44px), calc(100% - 360px));top:${c.y - 40}px`, { ai: false });
  function composer(ph, kind) {
    return `<form class="tm-compose" data-kind="${kind}"><textarea rows="${kind === "new" ? 3 : 2}" placeholder="${ph}" aria-label="${ph}"></textarea><div class="tm-cbar">
      <button type="button" data-tm-emoji aria-label="${t("tm.emoji")}">${ICONS.smile}</button><button type="button" data-tm-at aria-label="${t("tm.mention")}">${ICONS.at}</button><label aria-label="${t("tm.image")}">${ICONS.image}<input type="file" accept="image/*" hidden></label>
      <span class="tm-file"></span><span class="sp"></span><button class="tm-send" type="submit" aria-label="${t("tm.post")}" disabled>${ICONS.send}</button></div></form>`;
  }
  function bindComposer(form, done) {
    const area = form.querySelector("textarea");
    let img = null;
    const sync = () => {
      form.querySelector(".tm-send").disabled = !area.value.trim() && !img;
    };
    area.addEventListener("input", sync);
    area.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey && !e.isComposing) {
        e.preventDefault();
        form.requestSubmit();
      }
    });
    form.querySelector("[data-tm-emoji]").addEventListener("click", () => {
      area.value += "👍";
      area.focus();
      sync();
    });
    form.querySelector("[data-tm-at]").addEventListener("click", () => {
      area.value += area.value && !area.value.endsWith(" ") ? " @" : "@";
      area.focus();
    });
    form.querySelector("input[type=file]").addEventListener("change", (e) => {
      const f = e.target.files[0];
      if (!f) return;
      img = URL.createObjectURL(f);
      form.querySelector(".tm-file").innerHTML = `<img src="${img}" alt="">`;
      sync();
    });
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (area.value.trim() || img) done(area.value.trim(), img);
    });
    setTimeout(() => area.focus(), 0);
  }
  function squeeze() {
    side.classList.toggle("min", innerWidth <= 700 && (!!openId || !!pins.querySelector(".tm-new")));
  }
  function drawPins() {
    pins.innerHTML = mode === "comment" ? onPage().filter((c) => !c.resolved).map(pinHtml).join("") + (openId ? threadHtml(comments.find((c) => c.id === openId)) : "") : "";
    pins.style.height = `${document.documentElement.scrollHeight}px`;
    pins.querySelectorAll("[data-tm-pin] .tm-pin-b").forEach((b) => b.addEventListener("click", (e) => {
      e.stopPropagation();
      openThread(Number(b.parentElement.dataset.tmPin));
    }));
    const th = pins.querySelector(".tm-thread");
    if (th) {
      const c = comments.find((x) => x.id === openId);
      const after = () => {
        keep();
        drawPins();
        drawSide();
        refreshBars();
      };
      bindThread(th, {
        shut: () => {
          openId = null;
          after();
        },
        reply: (text) => {
          (c.replies ||= []).push({ who: "me", at: Date.now(), text });
          c.mine = true;
          after();
        },
        resolve: () => {
          c.resolved = !c.resolved;
          c.mine = true;
          openId = null;
          after();
          if (c.resolved) toast(t("tm.resolved"), () => {
            c.resolved = false;
            after();
          });
        },
        del: () => {
          comments.splice(comments.indexOf(c), 1);
          openId = null;
          after();
          toast(t("tm.deleted"));
        }
      });
    }
    squeeze();
  }
  function openThread(id) {
    const c = comments.find((x) => x.id === id);
    if (!c) return;
    c.unread = false;
    openId = id;
    pins.querySelector(".tm-new")?.remove();
    drawPins();
    drawSide();
    refreshBars();
  }
  function newComment(e) {
    pins.querySelector(".tm-new")?.remove();
    if (openId) {
      openId = null;
      drawPins();
    }
    const x = e.clientX / innerWidth;
    const y = e.clientY + scrollY;
    const node = el(`<div class="tm-new" style="left:${x * 100}%;top:${y}px"><span class="tm-pin-b">${face("me")}</span>${composer(t("tm.addComment"), "new")}</div>`);
    pins.append(node);
    const box = node.querySelector(".tm-compose");
    const room = innerWidth - (side.hidden || innerWidth <= 700 ? 0 : side.offsetWidth) - 12;
    const w = box.offsetWidth;
    let left = e.clientX + 46;
    if (left + w > room) left = e.clientX - w - 10;
    if (left < 12) {
      left = Math.max(12, Math.min(e.clientX, room - w));
      box.style.top = "10px";
    }
    box.style.left = `${left - e.clientX}px`;
    squeeze();
    bindComposer(box, (text, img) => {
      const id = Math.max(...comments.map((c) => c.id)) + 1;
      comments.push({ id, page: here(), x, y, who: "me", at: Date.now(), text, img, replies: [], mine: true });
      keep();
      node.remove();
      drawPins();
      drawSide();
    });
  }
  function drawSide() {
    if (mode !== "comment") return;
    const q = query.trim().toLowerCase();
    const list = [...comments].sort((a, b) => b.at - a.at).filter((c) => !q || `${textOf(c)} ${plain(c.who)}`.toLowerCase().includes(q));
    const n = (c) => (c.replies || []).length;
    side.style.top = `${topOf()}px`;
    side.innerHTML = `<header><h2>${t("tm.comments")}</h2><span class="g">${comments.length}</span></header>
      <label class="tm-find">${ICONS.search}<input class="input" placeholder="${t("tm.search")}" value="${esc(query)}" data-tm-find></label>
      <div class="tm-list">${list.length ? list.map((c) => `<button class="tm-item ${c.id === openId ? "on" : ""} ${c.resolved ? "resolved" : ""}" data-tm-item="${c.id}">
        <span class="tm-ih">${face(c.who)}${c.resolved ? `<span class="tm-done">${ICONS.check}</span>` : c.unread ? '<i class="tm-dot"></i>' : ""}</span>
        <span class="g">#${c.id} · ${t(`tm.p.${kindOf(c.page)}`)}</span>
        <span class="tm-who"><b>${nameOf(c.who)}</b> <time>${ago(c.at)}</time></span>
        <span class="tm-txt">${rich(textOf(c))}</span>
        ${n(c) ? `<span class="tm-more">${n(c) === 1 ? t("tm.reply1") : t("tm.replies", { n: n(c) })}</span>` : ""}</button>`).join("") : `<p class="g tm-empty">${q ? t("tm.noMatch") : t("tm.noComments")}</p>`}</div>`;
    const find = side.querySelector("[data-tm-find]");
    find.addEventListener("input", () => {
      query = find.value;
      const pos = find.selectionStart;
      drawSide();
      const f = side.querySelector("[data-tm-find]");
      f.focus();
      f.setSelectionRange(pos, pos);
    });
    side.querySelectorAll("[data-tm-item]").forEach((b) => b.addEventListener("click", () => {
      const c = comments.find((x) => x.id === Number(b.dataset.tmItem));
      const show = () => {
        c.resolved = false;
        openThread(c.id);
        scrollTo({ top: Math.max(0, c.y - innerHeight / 3), behavior: "smooth" });
      };
      if (c.page === here()) show();
      else {
        go(c.page);
        setTimeout(show, 350);
      }
    }));
  }
  function setMode(next) {
    if (mode === "chat") closeChat();
    mode = next;
    const on = mode === "comment";
    catcher.hidden = !on;
    side.hidden = !on;
    document.documentElement.classList.toggle("tm-commenting", on);
    if (on) {
      catcher.style.top = `${topOf()}px`;
      drawSide();
    } else {
      openId = null;
      pins.querySelector(".tm-new")?.remove();
    }
    drawPins();
    refreshBars();
  }
  function drawMenu() {
    const list = [...PEOPLE].sort((a, b) => b.online - a.online);
    const r = [...document.querySelectorAll(".tm-people")].find((x) => x.offsetParent)?.getBoundingClientRect();
    const below = r && r.top > innerHeight / 2;
    menu.style.top = below ? "auto" : `${(r?.bottom || 56) + 8}px`;
    menu.style.bottom = below ? `${innerHeight - r.top + 8}px` : "auto";
    menu.style.right = `${Math.max(12, Math.min(innerWidth - (r?.right || innerWidth) - 40, innerWidth - 292))}px`;
    menu.innerHTML = `<h3>${t("tm.team")}</h3>${list.map((p) => `<button class="tm-mrow ${p.online ? "" : "off"}" data-tm-go="${p.key}">${face(p.key)}<span><b>${nameOf(p.key)}</b><span class="g">${p.online ? `${t("tm.online")} · ${t(`tm.p.${kindOf(p.hash)}`)}` : t("tm.offline")}</span></span><i style="background:${p.online ? "#34C759" : "#C7C7CC"}"></i></button>`).join("")}
      <p class="g tm-hint">${t("tm.slash")}</p>`;
    bindGo(menu);
  }
  function setShare() {
    cursors = !cursors;
    try {
      localStorage.setItem("maden.share", cursors ? "1" : "0");
    } catch {
    }
    if (cursors) {
      PEOPLE.filter((p) => p.online && p.follow).forEach((p) => {
        p.hash = location.hash || "#/";
      });
      refreshBars();
    }
    drawCursors();
    document.querySelectorAll("[data-tm-share]").forEach((b) => b.setAttribute("aria-checked", cursors));
  }
  function toggleMenu(on = !menuOpen) {
    menuOpen = on;
    menu.hidden = !on;
    if (on) drawMenu();
    document.querySelectorAll("[data-tm-menu]").forEach((b) => b.setAttribute("aria-expanded", on));
  }
  function callOne(p) {
    toast(t("tm.calledOne", { name: nameOf(p.key) }));
    setTimeout(() => {
      p.hash = location.hash || "#/";
      p.x = 40 + Math.random() * 30;
      p.y = 30 + Math.random() * 30;
      refreshBars();
      drawCursors();
      say(p.key, t("tm.coming"));
    }, 1500);
  }
  function callDialog() {
    const list = [...PEOPLE].sort((a, b) => b.online - a.online);
    const node = dialog({
      title: t("tm.call"),
      body: `<ul class="gm-people tm-callees"><li>${face("me")}<span><span class="n">${nameOf("me")}</span><span class="g">${t("tm.owner")}</span></span></li>
        ${list.map((p) => `<li class="${p.online ? "" : "off"}">${face(p.key)}<span><span class="n">${nameOf(p.key)}</span><span class="g">${p.online ? `${t("tm.online")} · ${t(`tm.p.${kindOf(p.hash)}`)}` : t("tm.offline")}</span></span><span class="sp"></span>
          <button class="btn small" data-tm-ring="${p.key}" ${p.online && !sameAsMe(p) ? "" : "disabled"}>${t("tm.call")}</button></li>`).join("")}</ul>`,
      actions: [{ label: t("tm.copy"), onClick: () => toast(t("tm.copied")) }, { label: t("tm.close"), primary: true }]
    });
    node.querySelectorAll("[data-tm-ring]").forEach((b) => b.addEventListener("click", () => {
      node.remove();
      callOne(PEOPLE.find((x) => x.key === b.dataset.tmRing));
    }));
  }
  function called(p) {
    if (!cursors) return;
    if (document.querySelector(".toast:not(.tm-ring) button")) {
      setTimeout(() => called(p), 6500);
      return;
    }
    document.querySelector(".toast")?.remove();
    const node = el(`<div class="toast tm-ring" role="status">${face(p.key)}<span>${t("tm.callIn", { name: nameOf(p.key) })}</span><button data-tm-move>${t("tm.move")}</button></div>`);
    node.querySelector("[data-tm-move]").addEventListener("click", () => {
      node.remove();
      go(p.hash);
    });
    document.body.append(node);
    setTimeout(() => node.isConnected && dismiss(node), 1e4);
  }
  function refreshBars() {
    document.querySelectorAll(".tm-bar").forEach((b) => {
      b.outerHTML = bar();
    });
    bindBars();
  }
  function bindGo(root) {
    root.querySelectorAll("[data-tm-go]").forEach((b) => b.addEventListener("click", (e) => {
      if (b.classList.contains("tm-face") && matchMedia("(max-width: 480px)").matches) {
        e.stopPropagation();
        return toggleMenu();
      }
      const p = PEOPLE.find((x) => x.key === b.dataset.tmGo);
      toggleMenu(false);
      if (!p.online) return toast(t("tm.away", { name: nameOf(p.key) }));
      go(p.hash);
      return toast(t("tm.went", { name: nameOf(p.key) }));
    }));
  }
  function bindBars() {
    document.querySelectorAll(".tm-bar").forEach((root) => {
      bindGo(root);
      root.querySelector("[data-tm-menu]").addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMenu();
      });
      root.querySelector("[data-tm-comment]").addEventListener("click", () => setMode(mode === "comment" ? null : "comment"));
      root.querySelector("[data-tm-call]").addEventListener("click", callDialog);
      root.querySelector("[data-tm-share]").addEventListener("click", (e) => {
        e.stopPropagation();
        setShare();
      });
    });
  }
  let rang = false;
  function tick() {
    let moved = false;
    PEOPLE.forEach((p) => {
      if (!p.online) return;
      if (p.follow && pageOf(p.hash) !== here() && Math.random() < 0.5) {
        p.hash = location.hash || "#/";
        moved = true;
      }
      if (p.route && Math.random() < 0.08) {
        p.hash = p.route[(p.route.indexOf(p.hash) + 1) % p.route.length];
        moved = true;
      }
    });
    if (moved) {
      refreshBars();
      drawCursors();
    }
    moveCursors();
    const talk = PEOPLE.filter(sameAsMe);
    if (cursors && talk.length && Math.random() < 0.1) {
      const lines = LINES[kindOf(location.hash)] || LINES.other;
      say(talk[Math.floor(Math.random() * talk.length)].key, lines[Math.floor(Math.random() * lines.length)]);
    }
    if (!rang && performance.now() > 4e4) {
      const away = PEOPLE.find((p) => p.online && p.route && !sameAsMe(p));
      if (away) {
        rang = true;
        called(away);
      }
    }
  }
  document.addEventListener("DOMContentLoaded", () => {
    document.body.append(pins, layer, catcher, side, menu, mine);
    catcher.addEventListener("click", newComment);
    const under = (e) => {
      catcher.style.pointerEvents = "none";
      const hit = document.elementFromPoint(e.clientX, e.clientY);
      catcher.style.pointerEvents = "";
      return hit;
    };
    catcher.addEventListener("pointerdown", (e) => {
      if (e.button !== 1) return;
      e.preventDefault();
      const target = under(e);
      if (target?.closest(".sb")) {
        catcher.style.pointerEvents = "none";
        target.dispatchEvent(new PointerEvent("pointerdown", e));
        addEventListener("pointerup", () => {
          catcher.style.pointerEvents = "";
        }, { once: true });
        return;
      }
      let y = e.clientY;
      const move = (ev) => {
        scrollBy(0, y - ev.clientY);
        y = ev.clientY;
      };
      addEventListener("pointermove", move);
      addEventListener("pointerup", () => removeEventListener("pointermove", move), { once: true });
    });
    catcher.addEventListener("auxclick", (e) => e.preventDefault());
    catcher.addEventListener("wheel", (e) => {
      const target = under(e);
      if (target?.closest(".sb")) {
        e.preventDefault();
        target.dispatchEvent(new WheelEvent("wheel", e));
      }
    }, { passive: false });
    addEventListener("pointermove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (mode === "chat") placeMine();
    }, { passive: true });
    addEventListener("click", (e) => {
      if (menuOpen && !menu.contains(e.target)) toggleMenu(false);
    });
    addEventListener("keydown", (e) => {
      const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) || e.target.isContentEditable;
      if (e.key === "Escape") {
        if (menuOpen) toggleMenu(false);
        else if (mode === "chat") closeChat();
        else if (mode === "comment") {
          if (pins.querySelector(".tm-new")) {
            pins.querySelector(".tm-new").remove();
            squeeze();
          } else if (openId) {
            openId = null;
            drawPins();
            drawSide();
          } else setMode(null);
        } else return;
        e.stopImmediatePropagation();
        e.preventDefault();
        return;
      }
      if (typing || e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === "/") {
        e.preventDefault();
        openChat();
      } else if (e.key === "c" || e.key === "C") {
        e.preventDefault();
        setMode(mode === "comment" ? null : "comment");
      }
    }, true);
    addEventListener("hashchange", () => {
      setTimeout(() => {
        drawCursors();
        toggleMenu(false);
        if (mode === "comment") {
          openId = null;
          catcher.style.top = `${topOf()}px`;
          drawPins();
          drawSide();
        }
      }, 0);
    });
    addEventListener("resize", () => {
      if (mode === "comment") drawPins();
    });
    drawCursors();
    if (params.get("demo") === "call") setTimeout(() => called(PEOPLE.find((p) => p.key === "aiko")), 300);
    if (params.get("demo") === "comments") setTimeout(() => setMode("comment"), 300);
    if (!params.has("freeze") && !document.documentElement.classList.contains("still")) setInterval(tick, 1600);
  });
  const heads = () => [...PEOPLE].sort((a, b) => b.online - a.online).slice(0, 3).map((p) => `<span class="tm-head ${p.online ? "" : "off"}">${face(p.key)}</span>`).join("");
  return { ui: { face, ago, rich, nameOf, ICONS, pin: pinMarkup, thread: threadMarkup, bindThread }, bar, heads, bind: () => {
    bindBars();
    drawCursors();
    if (mode === "comment") {
      drawPins();
      drawSide();
    }
  }, chat: openChat, comment: () => setMode("comment"), called: (k) => called(PEOPLE.find((p) => p.key === k)) };
})();
