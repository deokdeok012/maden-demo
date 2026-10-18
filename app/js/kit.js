const STR = {
  en: {
    home: "Home",
    make: "Make",
    games: "My games",
    earn: "Earn",
    navPlay: "Play",
    navMe: "In progress",
    forYou: "For you",
    shorts: "Shorts",
    charts: "Charts",
    following: "Following",
    contest: "Contest",
    newGame: "New game",
    trends: "Trends",
    team: "Team",
    assets: "Assets",
    overview: "Overview",
    market: "Market",
    creators: "Teams",
    ranking: "Ranking",
    payouts: "Payouts",
    credits: "Credits",
    teamCredits: "Team credits",
    plans: "Plans",
    members: "Members",
    modules: "Modules",
    language: "Language",
    signOut: "Sign out",
    notifications: "Notifications",
    search: "Search",
    seeAll: "See all",
    all: "All",
    puzzle: "Puzzle",
    action: "Action",
    simulation: "Simulation",
    casual: "Casual",
    management: "Management",
    arena: "Arena",
    blockPuzzle: "Block puzzle",
    cooking: "Cooking",
    actionRpg: "Action RPG",
    mergeStory: "Merge",
    merge: "Merge",
    racing: "Racing",
    match3: "Match 3",
    survival: "Survival",
    asmr: "ASMR",
    mining: "Mining",
    growth: "Growth",
    dressUp: "Dress up",
    collectionRpg: "Collection RPG",
    idleTycoon: "Idle tycoon",
    runner: "Runner",
    io: ".io",
    shooter: "Shooter",
    adventure: "Adventure",
    strategy: "Strategy",
    story: "Story",
    more: "More",
    play: "Play",
    publish: "Publish",
    back: "Back",
    next: "Next",
    cancel: "Cancel",
    undo: "Undo",
    save: "Save",
    close: "Close",
    send: "Send",
    follow: "Follow",
    share: "Share",
    edit: "Edit",
    delete: "Delete",
    rename: "Rename",
    add: "Add",
    remove: "Remove",
    open: "Open",
    plays: "{n} plays",
    followers: "{n} followers",
    free: "Free",
    none: "None",
    suggested: "Suggested",
    makeGame: "Make game",
    untitled: "Untitled game",
    noNotifications: "No notifications."
  },
  ko: {
    home: "홈",
    make: "만들기",
    games: "내 게임",
    earn: "수익",
    navPlay: "플레이",
    navMe: "진행 중",
    forYou: "추천",
    shorts: "쇼츠",
    charts: "차트",
    following: "팔로잉",
    contest: "콘테스트",
    newGame: "새 게임",
    trends: "트렌드",
    team: "팀",
    assets: "에셋",
    overview: "개요",
    market: "마켓",
    creators: "팀",
    ranking: "랭킹",
    payouts: "지급",
    credits: "크레딧",
    teamCredits: "팀 크레딧",
    plans: "요금제",
    members: "멤버",
    modules: "모듈",
    language: "언어",
    signOut: "로그아웃",
    notifications: "알림",
    search: "검색",
    seeAll: "모두 보기",
    all: "전체",
    puzzle: "퍼즐",
    action: "액션",
    simulation: "시뮬레이션",
    casual: "캐주얼",
    management: "경영",
    arena: "아레나",
    blockPuzzle: "블록 퍼즐",
    cooking: "요리 경영",
    actionRpg: "액션 RPG",
    mergeStory: "머지",
    merge: "머지",
    racing: "레이싱",
    match3: "매치 3",
    survival: "생존 액션",
    asmr: "ASMR",
    mining: "채굴",
    growth: "성장",
    dressUp: "꾸미기",
    collectionRpg: "수집 RPG",
    idleTycoon: "방치형 타이쿤",
    runner: "러너",
    io: "io 대전",
    shooter: "슈팅",
    adventure: "어드벤처",
    strategy: "전략",
    story: "스토리",
    more: "더 보기",
    play: "플레이",
    publish: "출시",
    back: "뒤로",
    next: "다음",
    cancel: "취소",
    undo: "되돌리기",
    save: "저장",
    close: "닫기",
    send: "보내기",
    follow: "팔로우",
    share: "공유",
    edit: "편집",
    delete: "삭제",
    rename: "이름 변경",
    add: "추가",
    remove: "제거",
    open: "열기",
    plays: "{n}회 플레이",
    followers: "팔로워 {n}",
    free: "무료",
    none: "없음",
    suggested: "추천",
    makeGame: "게임 만들기",
    untitled: "제목 없는 게임",
    noNotifications: "알림이 없습니다."
  }
};
const ICON = {
  back: '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',
  next: '<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>',
  up: '<svg viewBox="0 0 24 24"><path d="M12 19V6M6 11.5l6-6 6 6"/></svg>',
  down: '<svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
  x: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg>',
  bell: '<svg viewBox="0 0 24 24"><path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15zM10 20.5h4"/></svg>',
  play: '<svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z" fill="currentColor" stroke-linejoin="round"/></svg>',
  heart: '<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.600-7 10-7 10z"/></svg>',
  star: '<svg viewBox="0 0 24 24"><path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.9l-5.200 2.800 1-5.900L3.500 9.700l5.900-.800z"/></svg>',
  share: '<svg viewBox="0 0 24 24"><path d="M12 15V4M8 7.500L12 3.500l4 4M5 12v7.500h14V12"/></svg>',
  comment: '<svg viewBox="0 0 24 24"><path d="M4.500 5.500h15v11h-8l-4.500 3.500v-3.500h-2.500z"/></svg>',
  more: '<svg viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.3" fill="currentColor"/><circle cx="12" cy="12" r="1.3" fill="currentColor"/><circle cx="19" cy="12" r="1.3" fill="currentColor"/></svg>',
  home: '<svg viewBox="0 0 24 24"><path d="M4 11l8-6.500 8 6.500v8.500h-5.500v-5.500h-5v5.500H4z"/></svg>',
  make: '<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4.500"/><path d="M12 8.500v7M8.500 12h7"/></svg>',
  games: '<svg viewBox="0 0 24 24"><rect x="3.500" y="5" width="7" height="14" rx="2"/><rect x="13.500" y="5" width="7" height="14" rx="2"/></svg>',
  me: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 7.5V12l3 2"/></svg>',
  earn: '<svg viewBox="0 0 24 24"><path d="M4 19.500h16M6.500 16v-4M12 16V6.500M17.500 16v-7"/></svg>',
  store: '<svg viewBox="0 0 24 24"><path d="M4 9l1.5-5h13L20 9M4 9h16M4 9v1.5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 6 0 2.5 2.5 0 0 0 5 0V9M5.5 12.5V20h13v-7.5M10 20v-4.5h4V20"/></svg>',
  edit: '<svg viewBox="0 0 24 24"><path d="M4 20h4L18.5 9.5a2.1 2.1 0 0 0-4-4L4 16v4ZM13.5 6.5l4 4"/></svg>',
  spark: '<svg class="spark" viewBox="0 0 24 24"><path d="M10 2.500l1.900 5.600 5.600 1.900-5.600 1.900L10 17.500l-1.900-5.600L2.500 10l5.600-1.900zM18.500 14l.950 2.550L22 17.500l-2.550.950L18.500 21l-.950-2.550L15 17.500l2.550-.950z"/></svg>'
};
const params = new URLSearchParams(location.search);
const stored = (key) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};
let lang = params.get("lang") || stored("maden.lang") || (navigator.language.startsWith("ko") ? "ko" : "en");
document.head.append(Object.assign(document.createElement("link"), { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Unbounded:wght@700&display=swap" }));
const LOGO_MARK = `<svg class="logo-mark" viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2F7BFF"/><stop offset=".55" stop-color="#7B4DFF"/><stop offset="1" stop-color="#FF5FA2"/></linearGradient></defs><rect width="64" height="64" rx="16" fill="url(#lg)"/><path d="M15 45V20.5c0-1.2 1.4-1.8 2.3-1L32 33l14.7-13.5c.9-.8 2.3-.2 2.3 1V45" fill="none" stroke="#fff" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="32" cy="47" r="4" fill="#fff"/></svg>`;
const logo = (tag = "a") => `<${tag} class="logo" ${tag === "a" ? 'href="#/"' : ""}>${LOGO_MARK}<span class="logo-word">MADEN</span></${tag}>`;
if (!/Mac|iPhone|iPad/.test(navigator.platform || "")) {
  document.head.append(Object.assign(document.createElement("link"), { rel: "stylesheet", href: "vendor/pretendard/pretendard.css" }));
}
const store = {
  credits: 1e3,
  games: MY_GAMES.map((g) => SEED_VERSIONS[g.id] ? { ...g, history: SEED_VERSIONS[g.id], ver: SEED_VERSIONS[g.id].length } : { ...g }),
  following: /* @__PURE__ */ new Set(["mina", "emma"]),
  favorites: /* @__PURE__ */ new Set(["bay"]),
  team: /* @__PURE__ */ new Set(["director", "level", "qa"]),
  notifications: [
    { id: 1, text: L("Dice Survivor finished its CPI test.", "Dice Survivor CPI 테스트가 끝났습니다."), to: "#/games/dice", at: "2026-10-13" },
    { id: 2, text: L("Beach Smash earned $1,480 this month.", "Beach Smash가 이번 달 $1,480를 벌었습니다."), to: "#/earn", at: "2026-10-12" },
    { id: 3, text: L("MinaMakes published a new game.", "MinaMakes가 새 게임을 출시했습니다."), to: "#/creator/mina", at: "2026-10-11" }
  ],
  // 작업마다 실제로 쓴 토큰 · API 비용(🔴 지난 기록은 예시).
  usage: [
    { at: "2026-10-13 16:40", label: L("Level designer · Dice Survivor", "레벨 디자이너 · Dice Survivor"), tokens: 21400, usd: 0.13, credits: 13.4, estimate: 12, who: "mina" },
    { at: "2026-10-12 11:05", label: L("Marketer · Golden Blocks", "마케터 · Golden Blocks"), tokens: 6100, usd: 0.04, credits: 3.8, estimate: 4, who: "aiko" },
    { at: "2026-10-11 09:20", label: L("Designer · Beach Smash", "디자이너 · Beach Smash"), tokens: 58200, usd: 0.36, credits: 36.4, estimate: 40, who: "me" }
  ],
  // 밖으로 보내는 알림(비판자 점검 추가 기능 8). 🔴 연결은 연출이다 — 실제로 보내지 않는다.
  notify: { slack: false, email: true, events: { cpi: true, build: true, qa: true, credits: true } },
  // 월 예산과 잔액 알림(비판자 점검 추가 기능 2). 넘으면 알리고 장부에 표시한다.
  budget: { month: 400, alert: 100 }
};
const CREDIT_USD = 0.01;
const TOKENS_PER_CREDIT = 1600;
const round1 = (n) => Math.round(n * 10) / 10;
const est = (n) => `<img class="coin" src="${COIN}" alt="">≈${num(round1(n))}`;
function paintWallet() {
  document.querySelectorAll(".credits").forEach((el2) => {
    el2.lastChild.textContent = num(round1(store.credits));
    el2.classList.toggle("live", store.usage.some((u) => u.live));
  });
}
function spend(label, estimate, ms = 2e3, actual = null, tokens = null) {
  const total = round1(actual ?? estimate * (0.88 + (label.length * 37 + Math.round(estimate * 7)) % 25 / 100));
  const entry = { at: `${AS_OF} ${(/* @__PURE__ */ new Date()).toTimeString().slice(0, 5)}`, label, tokens: 0, usd: 0, credits: 0, estimate, live: true, who: "me" };
  store.usage.unshift(entry);
  const steps = Math.max(1, Math.round(ms / 100));
  let i = 0;
  const tick = () => {
    if (entry.cancelled) return;
    i += 1;
    const before = entry.credits;
    entry.credits = i >= steps ? total : round1(total * i / steps);
    store.credits = round1(store.credits - (entry.credits - before));
    entry.tokens = Math.round(tokens != null ? tokens * entry.credits / (total || 1) : entry.credits * TOKENS_PER_CREDIT);
    entry.usd = Math.round(entry.credits * CREDIT_USD * 100) / 100;
    if (i >= steps) {
      entry.live = false;
      checkBudget(entry);
    }
    paintWallet();
    if (i < steps) setTimeout(tick, params.has("freeze") ? 0 : 100);
  };
  tick();
  return entry;
}
function refund(entry) {
  if (!entry || entry.refunded) return;
  entry.cancelled = true;
  entry.live = false;
  entry.refunded = { at: `${AS_OF} ${(/* @__PURE__ */ new Date()).toTimeString().slice(0, 5)}`, credits: entry.credits };
  store.credits = round1(store.credits + entry.credits);
  paintWallet();
}
const monthUsed = () => round1(store.usage.filter((u) => u.at.startsWith(AS_OF.slice(0, 7))).reduce((n, u) => n + u.credits - (u.refunded?.credits || 0), 0));
function checkBudget(entry) {
  const b = store.budget;
  if (b.month && monthUsed() > b.month && !b.overSaid) {
    b.overSaid = true;
    entry.over = true;
    toast(t("budgetOver", { n: num(b.month) }));
  }
  if (b.alert && store.credits < b.alert && !b.lowSaid) {
    b.lowSaid = true;
    toast(t("balanceLow", { n: num(b.alert) }));
  }
}
function logVersion(g, what) {
  g.history ||= [{ v: 1, at: g.updated, what: t("gm.verDraft") }];
  g.history = [...g.history];
  g.ver = (g.ver || 1) + 1;
  g.history.push({ v: g.ver, at: AS_OF, what });
}
function unlogVersion(g) {
  if (g.history && g.history.length > 1) g.history.pop();
  g.ver = Math.max(1, (g.ver || 1) - 1);
}
let teamOpen = false;
const setTeam = (on) => {
  teamOpen = on;
  document.querySelectorAll(".tm-dock").forEach((d) => d.classList.toggle("open", on));
  document.querySelectorAll("[data-tm-fab]").forEach((b) => b.setAttribute("aria-expanded", on));
};
function closeHud(except) {
  if (except !== "team" && teamOpen) setTeam(false);
  if (except !== "crew" && typeof CREW !== "undefined") CREW.close();
  if (except !== "menu" && menu) {
    menu = null;
    syncMenu();
  }
}
document.addEventListener("click", (e) => {
  const fab = e.target.closest("[data-tm-fab]");
  if (!fab) return;
  closeHud("team");
  setTeam(!teamOpen);
});
function notifyDialog() {
  const n = store.notify;
  const sw = (on, attr) => `<button class="switch" role="switch" aria-checked="${on}" ${attr}><i></i></button>`;
  const node = dialog({
    title: t("nt.settings"),
    body: `<ul class="rows nt-list">
        <li><span><b>Slack</b><span class="g">${n.slack ? "#maden-alerts" : t("nt.slackOff")}</span></span><span class="sp"></span><button class="btn small ${n.slack ? "" : "primary"}" data-nt-slack>${t(n.slack ? "nt.disconnect" : "nt.connect")}</button></li>
        <li><span><b>${t("nt.email")}</b><span class="g">dg@example.com</span></span><span class="sp"></span>${sw(n.email, "data-nt-email")}</li>
      </ul>
      <h3 class="nt-h">${t("nt.when")}</h3>
      <ul class="rows nt-list">${Object.keys(n.events).map((k) => `<li><span>${t(`nt.e.${k}`)}</span><span class="sp"></span>${sw(n.events[k], `data-nt-ev="${k}"`)}</li>`).join("")}</ul>`,
    actions: [{ label: t("close"), primary: true }]
  });
  const flip = (b, get, set) => b.addEventListener("click", (e) => {
    e.stopPropagation();
    set(!get());
    b.setAttribute("aria-checked", get());
  });
  flip(node.querySelector("[data-nt-email]"), () => n.email, (v) => {
    n.email = v;
  });
  node.querySelectorAll("[data-nt-ev]").forEach((b) => flip(b, () => n.events[b.dataset.ntEv], (v) => {
    n.events[b.dataset.ntEv] = v;
  }));
  node.querySelector("[data-nt-slack]").addEventListener("click", (e) => {
    e.stopPropagation();
    dismiss(node);
    n.slack = !n.slack;
    toast(t(n.slack ? "nt.connected" : "nt.disconnected"));
    notifyDialog();
  });
}
document.addEventListener("click", (e) => {
  if (e.target.closest("[data-notify-set]")) {
    menu = null;
    syncMenu();
    notifyDialog();
  }
});
function addStrings(extra) {
  for (const code of ["en", "ko"]) Object.assign(STR[code], extra[code]);
}
addStrings({ en: { "tm.teamBtn": "Team", "nt.settings": "Notification settings", "nt.email": "Email", "nt.connect": "Connect", "nt.disconnect": "Disconnect", "nt.slackOff": "Not connected", "nt.connected": "Slack connected.", "nt.disconnected": "Slack disconnected.", "nt.when": "Send when", "nt.e.cpi": "A CPI test result is in", "nt.e.build": "A build finishes or fails", "nt.e.qa": "QA finds an issue", "nt.e.credits": "Credits run low", perToken: "per token", budgetOver: "Over this month’s budget of {n} credits.", balanceLow: "Balance is under {n} credits." }, ko: { "tm.teamBtn": "팀", "nt.settings": "알림 설정", "nt.email": "이메일", "nt.connect": "연결", "nt.disconnect": "연결 해제", "nt.slackOff": "연결 안 됨", "nt.connected": "Slack을 연결했습니다.", "nt.disconnected": "Slack 연결을 해제했습니다.", "nt.when": "보낼 때", "nt.e.cpi": "CPI 테스트 결과가 나왔을 때", "nt.e.build": "빌드가 끝나거나 실패했을 때", "nt.e.qa": "QA가 문제를 찾았을 때", "nt.e.credits": "크레딧이 부족할 때", perToken: "토큰당", budgetOver: "이번 달 예산 {n} 크레딧을 넘었습니다.", balanceLow: "잔액이 {n} 크레딧 아래입니다." } });
const TIERS = { opus: { perToken: 0.2 }, sonnet: { perToken: 0.1 } };
const crewFactor = (keys) => keys.reduce((n, k) => n + (store.team.has(k) ? TIERS.opus.perToken : TIERS.sonnet.perToken), 0) / keys.length / 0.15;
const crewOf = (key) => {
  const j = JOB[key];
  const pro = store.team.has(key);
  const c = pro ? j.pro : j.basic;
  return { key, name: tr(j.name), who: tr(c.name), img: c.img, idle: c.idle, pro };
};
const JOSA = { "을(를)": ["을", "를"], "를(을)": ["을", "를"], "이(가)": ["이", "가"], "은(는)": ["은", "는"], "과(와)": ["과", "와"], "(으)로": ["으로", "로"], "아(야)": ["아", "야"] };
function hasBatchim(ch) {
  const c = ch.charCodeAt(0);
  if (c >= 44032 && c <= 55203) return { has: (c - 44032) % 28 !== 0, rieul: (c - 44032) % 28 === 8 };
  if (/[0-9]/.test(ch)) return { has: "013678".includes(ch), rieul: "178".includes(ch) };
  if (/[a-z]/i.test(ch)) return { has: "lmnbkpt".includes(ch.toLowerCase()), rieul: ch.toLowerCase() === "l" };
  return { has: false, rieul: false };
}
function josa(text) {
  return text.replace(/([^\s(])((?:을\(를\)|를\(을\)|이\(가\)|은\(는\)|과\(와\)|\(으\)로|아\(야\)))/g, (_, ch, j) => {
    const b = hasBatchim(ch);
    const [withB, without] = JOSA[j];
    return ch + (j === "(으)로" ? b.has && !b.rieul ? withB : without : b.has ? withB : without);
  });
}
function t(key, vars = {}) {
  const s = STR[lang][key] ?? STR.en[key] ?? key;
  const out = s.replace(/\{(\w+)\}/g, (_, k) => vars[k]);
  return lang === "ko" ? josa(out) : out;
}
const tr = (pair) => pair ? pair[lang] ?? pair.en : "";
const num = (n) => n.toLocaleString("en-US");
const compact = (n) => new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(n);
const usd = (n) => `$${num(Math.round(n))}`;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
function el(html) {
  const tpl = document.createElement("template");
  tpl.innerHTML = html.trim();
  return tpl.content.firstElementChild;
}
function shot(src, { video, extra = "", cls = "", play = null } = {}) {
  const shape = SHAPE.get(src) || "";
  const media = video ? `<video src="${video}" poster="${src}" autoplay muted loop playsinline></video>` : `<img src="${src}" alt="" loading="lazy">`;
  const auto = play ? `data-video="${play.video || ""}" data-yt="${play.yt || ""}"` : "";
  return `<span class="shot ${shape} ${cls}" ${auto}>${shape === "tall" ? `<img class="fill" src="${src}" alt="">` : ""}${media}${extra}</span>`;
}
function gameIcon(g, cls = "ico") {
  return g.icon ? `<img class="${cls}" src="${g.icon}" alt="">` : `<span class="${cls} crop"><img src="${g.cover}" alt=""></span>`;
}
function avatar(c, cls = "") {
  return c.avatar ? `<img class="avatar ${cls}" src="${c.avatar}" alt="">` : `<span class="avatar ${cls}">${esc(c.name.slice(0, 2).toUpperCase())}</span>`;
}
function chips(items, active, attr = "data-filter") {
  return `<div class="chips">${items.map((key) => `<button class="chip" ${attr}="${key}" aria-pressed="${active === key}">${t(key)}</button>`).join("")}</div>`;
}
function gameCard(g) {
  return `<a class="game ${g.wide ? "wide" : ""}" href="#/game/${g.key}" data-video="${g.video || ""}">
    ${shot(g.cover)}
    <span class="meta">${gameIcon(g)}<span><span class="n">${esc(g.name)}</span><span class="g">${t(g.genre)}</span></span></span>
  </a>`;
}
function subtabs(items, current2) {
  return `<nav class="subtabs">${items.map(([key, href]) => `<a href="${href}" ${href === current2 ? 'aria-current="page"' : ""}>${t(key)}</a>`).join("")}</nav>`;
}
const TABS = {
  home: [["forYou", "#/"], ["charts", "#/charts"], ["following", "#/following"], ["contest", "#/contest"]],
  make: [["newGame", "#/make"], ["trends", "#/trends"], ["assets", "#/assets"]],
  earn: [["overview", "#/earn"], ["ranking", "#/earn/creators"], ["payouts", "#/earn/payouts"]]
};
function empty(title, text = "", action = "") {
  return `<div class="empty-state"><h2>${title}</h2>${text ? `<p>${text}</p>` : ""}${action}</div>`;
}
function bento(items, cls = "") {
  return `<div class="bento ${cls}">${items.map((x) => Array.isArray(x) ? `<div class="stack">${x.join("")}</div>` : x).join("")}</div>`;
}
function box(title, body, { extra = "", foot = "", cls = "" } = {}) {
  return `<section class="card box ${cls}">${title || extra ? `<header>${title ? `<h2>${title}</h2>` : ""}<span class="sp"></span>${extra}</header>` : ""}<div class="box-body">${body}</div>${foot ? `<footer>${foot}</footer>` : ""}</section>`;
}
const backbar = (href, title, extra = "") => `<div class="head backbar"><a class="icon-btn" href="${href}" aria-label="${t("back")}" data-back>${ICON.back}</a><h1>${title}</h1>${extra}</div>`;
const pager = (n) => n > 1 ? `<span class="pager" data-pager><button class="icon-btn flat" data-step="-1" aria-label="${t("back")}">${ICON.back}</button><b>1</b> / ${n}<button class="icon-btn flat" data-step="1" aria-label="${t("next")}">${ICON.next}</button></span>` : "";
function pagers(root) {
  root.querySelectorAll("[data-pager]").forEach((p) => {
    const pages = [...p.closest(".box").querySelectorAll("[data-page]")];
    let at = 0;
    const show = () => {
      pages.forEach((x, i) => {
        x.hidden = i !== at;
      });
      p.querySelector("b").textContent = at + 1;
    };
    p.querySelectorAll("[data-step]").forEach((b) => b.addEventListener("click", () => {
      at = (at + Number(b.dataset.step) + pages.length) % pages.length;
      show();
    }));
    show();
  });
}
let toastTimer;
function toast(text, onUndo, label = t("undo")) {
  document.querySelector(".toast")?.remove();
  const node = el(`<div class="toast" role="status"><span>${text}</span>${onUndo ? `<button>${label}</button>` : ""}</div>`);
  node.querySelector("button")?.addEventListener("click", () => {
    node.remove();
    onUndo();
  });
  document.body.append(node);
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => dismiss(node), 6e3);
}
function dismiss(node) {
  if (document.documentElement.classList.contains("still")) return node.remove();
  node.classList.add("out");
  setTimeout(() => node.remove(), 170);
}
let popNode = null;
const closePopMenu = () => {
  popNode?.remove();
  popNode = null;
};
function popMenu(target, title, actions, at = null) {
  closePopMenu();
  popNode = el(`<div class="pop-menu" role="menu"><b>${title}</b>${actions.map((x2, i) => `<button class="btn ${x2.primary ? "primary" : ""}" data-i="${i}">${x2.label}</button>`).join("")}</div>`);
  document.body.append(popNode);
  popNode.y0 = scrollY;
  const r = target.getBoundingClientRect();
  const w = popNode.offsetWidth;
  const h = popNode.offsetHeight;
  const big = r.height > 200 && at;
  const x = Math.min(innerWidth - w - 12, Math.max(12, (big ? at.x : r.left + r.width / 2) - w / 2));
  const below = r.bottom + 8 + h < innerHeight;
  const y = big ? Math.min(innerHeight - h - 12, Math.max(124, at.y + 12)) : below ? r.bottom + 8 : Math.max(124, r.top - h - 8);
  Object.assign(popNode.style, { left: `${x}px`, top: `${y}px` });
  popNode.addEventListener("click", (e) => {
    const b = e.target.closest("[data-i]");
    if (!b) return;
    const fn = actions[b.dataset.i].onClick;
    closePopMenu();
    fn();
  });
}
addEventListener("pointerdown", (e) => {
  if (popNode && !popNode.contains(e.target) && !e.target.closest("[data-spot], [data-cv-edit]")) closePopMenu();
}, true);
addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (popNode) {
    closePopMenu();
    return;
  }
  const top = [...document.querySelectorAll(".overlay:not(.out)")].pop();
  if (top) {
    e.stopImmediatePropagation();
    dismiss(top);
  }
}, true);
addEventListener("scroll", () => {
  if (popNode && Math.abs(scrollY - popNode.y0) > 40) closePopMenu();
}, { passive: true });
addEventListener("hashchange", closePopMenu);
function dialog({ title, body = "", actions }) {
  const node = el(`<div class="overlay"><div class="dialog" role="dialog" aria-modal="true">
    <h2>${title}</h2>${body}
    <div class="row">${actions.map((a, i) => {
    const b = `<button class="btn ${a.primary ? "primary" : ""} ${a.danger ? "danger" : ""}" data-i="${i}">${a.label}</button>`;
    return b;
  }).join("")}</div>
  </div></div>`);
  node.addEventListener("click", (e) => {
    const b = e.target.closest("[data-i]");
    if (!b && e.target !== node) return;
    dismiss(node);
    if (b) actions[b.dataset.i].onClick?.(node);
  });
  document.body.append(node);
  return node;
}
const YT_MAX = 12;
const canEmbed = location.protocol !== "file:";
function startMedia(target) {
  const box2 = target.matches(".shot") ? target : target.querySelector(".shot");
  if (box2.querySelector(".auto")) return;
  const poster = box2.querySelector("img:not(.fill)").getAttribute("src");
  const { video, yt } = target.dataset;
  if (video) {
    const node = el(`<video class="auto" src="${video}" poster="${poster}" autoplay muted loop playsinline></video>`);
    node.addEventListener("error", () => node.remove());
    box2.append(node);
  } else if (yt && canEmbed) {
    const playing = [...document.querySelectorAll("iframe.auto")];
    if (playing.length >= YT_MAX) playing[0].remove();
    const node = el(`<iframe class="auto" style="--k:${box2.clientWidth / 360}" src="https://www.youtube-nocookie.com/embed/${yt}?autoplay=1&mute=1&loop=1&playlist=${yt}&controls=0&playsinline=1&rel=0&disablekb=1&iv_load_policy=3&enablejsapi=1"
      referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; encrypted-media" tabindex="-1" title=""></iframe>`);
    node.addEventListener("load", () => node.contentWindow.postMessage('{"event":"listening","id":1,"channel":"widget"}', "*"));
    box2.append(node);
  }
}
window.addEventListener("message", (e) => {
  if (!/youtube(-nocookie)?\.com$/.test(new URL(e.origin || "http://x").hostname) || typeof e.data !== "string") return;
  let data;
  try {
    data = JSON.parse(e.data);
  } catch {
    return;
  }
  if (data.info?.playerState !== 1) return;
  [...document.querySelectorAll("iframe.auto")].find((f) => f.contentWindow === e.source)?.classList.add("on");
});
function hoverVideo(root) {
  if (document.documentElement.classList.contains("still")) return;
  root.querySelectorAll("[data-video], [data-yt]").forEach((node) => {
    if (!node.dataset.video && !node.dataset.yt) return;
    node.addEventListener("mouseenter", () => startMedia(node));
    node.addEventListener("mouseleave", () => node.querySelector(".auto")?.remove());
  });
}
let lastTab = null;
function slideTabs(root) {
  const nav = root.querySelector(".subtabs");
  const now = nav?.querySelector("[aria-current=page]");
  if (!now) {
    lastTab = null;
    return;
  }
  const key = nav.querySelector("a").getAttribute("href").split("?")[0] + nav.children.length;
  const ink = el('<i class="ink"></i>');
  nav.append(ink);
  const place = (x, w) => {
    ink.style.transform = `translateX(${x}px)`;
    ink.style.width = `${w}px`;
  };
  if (lastTab && lastTab.key === key && lastTab.x !== now.offsetLeft) {
    ink.style.transition = "none";
    place(lastTab.x, lastTab.w);
    ink.getBoundingClientRect();
    ink.style.transition = "";
  }
  place(now.offsetLeft, now.offsetWidth);
  lastTab = { key, x: now.offsetLeft, w: now.offsetWidth };
}
const counted = /* @__PURE__ */ new Set();
function countUp(root, path) {
  const nodes = root.querySelectorAll("[data-count]");
  if (!nodes.length || counted.has(path)) return;
  counted.add(path);
  nodes.forEach((node) => {
    const end = Number(node.dataset.count);
    const text = node.textContent;
    const start = performance.now();
    const tick = (now) => {
      const k = Math.min(1, (now - start) / 800);
      node.textContent = k < 1 ? text.replace(/[\d,]+/, Math.round(end * (1 - (1 - k) ** 3)).toLocaleString("en-US")) : text;
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}
const ROUTES = [];
let lastPath = null;
let lastHash = null;
let lastShot = null;
let toTop = false;
const FLOW = ["/make", "/make/mode", "/make/game", "/make/theme", "/make/features", "/make/details", "/make/level", "/make/art", "/make/team"];
const DETAIL = /^\/(game|games|creator)\/[^/]+$|^\/make\/board$|^\/make\/quick\/[^/]+$/;
function turn(from, to) {
  if (from == null) return "fade";
  const order = (list) => [list.indexOf(from), list.indexOf(to)];
  for (const list of [FLOW, ...Object.values(TABS).map((tabs) => tabs.map(([, href]) => href.slice(1)))]) {
    const [a, b] = order(list);
    if (a >= 0 && b >= 0) return b > a ? "next" : "prev";
  }
  if (DETAIL.test(to) && !DETAIL.test(from)) return "in";
  if (DETAIL.test(from) && !DETAIL.test(to)) return "out";
  return "fade";
}
function route(pattern, def) {
  const names = [];
  const re = new RegExp("^" + pattern.replace(/:(\w+)/g, (_, n) => {
    names.push(n);
    return "([^/]+)";
  }) + "$");
  ROUTES.push({ re, names, ...def });
}
function current() {
  const [path, qs = ""] = (location.hash.slice(1) || "/").split("?");
  for (const r of ROUTES) {
    const m = path.match(r.re);
    if (m) return { r, args: { ...Object.fromEntries(r.names.map((n, i) => [n, decodeURIComponent(m[i + 1])])), query: new URLSearchParams(qs) }, path };
  }
  return null;
}
function go(hash) {
  if (location.hash === hash) rerender();
  else location.hash = hash;
}
const NAV = [["home", "#/", "navPlay"], ["make", "#/make", "make"], ["me", "#/me", "navMe"], ["earn", "#/earn", "earn"]];
let menu = null;
const navLink = (section) => ([key, href, label], withIcon) => `<a href="${href}" ${key === section ? 'aria-current="page"' : ""}>${withIcon ? ICON[key] : ""}<span>${t(label)}</span></a>`;
const POPS = {
  bell: () => {
    const unread = store.notifications.length;
    return `<h2>${t("notifications")}</h2>
      ${unread ? store.notifications.map((n) => `<a class="note" href="${n.to}"><span>${tr(n.text)}</span><time>${n.at}</time></a>`).join("") : `<p class="muted">${t("noNotifications")}</p>`}
      <button class="item pop-foot" data-notify-set>${t("nt.settings")}</button>`;
  },
  account: () => `<a class="item" href="#/credits"><span>${t("teamCredits")}</span><b><img class="coin" src="${COIN}" alt="">${num(store.credits)}</b></a>
      <a class="item" href="#/plans">${t("plans")}</a>
      <div class="item"><span>${t("language")}</span><span class="seg" role="group">
        <button aria-pressed="${lang === "en"}" data-lang="en">EN</button><button aria-pressed="${lang === "ko"}" data-lang="ko">한국어</button></span></div>
      <hr>
      <a class="item" href="#/members">${t("members")}</a>
      <a class="item" href="#/modules">${t("modules")}</a>
      <hr>
      <a class="item" href="#/login">${t("signOut")}</a>`
};
function syncMenu() {
  document.querySelectorAll(".nav [data-pop]").forEach((pop) => {
    const on = pop.dataset.pop === menu;
    if (on && pop.hidden) pop.innerHTML = POPS[pop.dataset.pop]();
    if (!on) pop.innerHTML = "";
    pop.hidden = !on;
  });
  document.querySelectorAll(".nav [data-menu]").forEach((b) => b.setAttribute("aria-expanded", b.dataset.menu === menu));
}
function hud(section) {
  const link = navLink(section);
  const unread = store.notifications.length;
  return `
    <header class="nav">
      ${logo()}
      <nav class="links">${NAV.map((n) => link(n)).join("")}</nav>
      <span class="sp"></span>
      <a class="crew-btn hud-market" href="#/market" ${section === "market" ? 'aria-current="page"' : ""}>${ICON.store}<span>${t("market")}</span></a>
      ${typeof CREW === "undefined" ? "" : CREW.button()}
      ${typeof TEAM === "undefined" ? "" : `<div class="tm-dock ${teamOpen ? "open" : ""}"><button class="tm-fab" data-tm-fab aria-expanded="${teamOpen}" aria-label="${t("tm.teamBtn")}"><span class="tm-heads">${TEAM.heads()}</span><span class="tm-fab-label">${t("tm.teamBtn")}</span></button>${TEAM.bar()}</div>`}
      <button class="me" data-menu="account" aria-expanded="${menu === "account"}" aria-label="Account">DG</button>
      <button class="icon-btn flat" data-menu="bell" aria-expanded="${menu === "bell"}" aria-label="${t("notifications")}">${ICON.bell}${unread ? '<i class="dot"></i>' : ""}</button>
      <div class="pop" data-pop="bell" ${menu === "bell" ? "" : "hidden"}>${menu === "bell" ? POPS.bell() : ""}</div>
      <div class="pop" data-pop="account" ${menu === "account" ? "" : "hidden"}>${menu === "account" ? POPS.account() : ""}</div>
    </header>
    <div class="hud-sub"></div>`;
}
function shell(section, body) {
  return `${hud(section)}
    <main class="page">${body}</main>
    <nav class="tabbar">${NAV.map((n) => navLink(section)(n, true)).join("")}</nav>`;
}
const UNTITLED = /* @__PURE__ */ new Set([STR.en.untitled, STR.ko.untitled]);
function rerender() {
  for (const g of store.games) if (UNTITLED.has(g.name)) g.name = t("untitled");
  const hit = current();
  if (!hit) {
    location.hash = "#/";
    return;
  }
  const { r, args } = hit;
  const root = document.getElementById("app");
  const html = r.render(args);
  const entering = hit.path !== lastPath;
  const page = document.documentElement;
  const from = lastHash ? lastHash.split("?")[0] : null;
  const clicked = lastShot;
  if (entering) page.dataset.turn = turn(lastPath, hit.path);
  lastPath = hit.path;
  lastHash = location.hash || "#/";
  lastShot = null;
  const swap = () => {
    root.className = `${r.bare ? "bare" : "app"}${entering ? " enter" : ""}`;
    root.innerHTML = r.bare ? html : shell(r.section, html);
    document.body.dataset.route = r.name || "";
    if (toTop) window.scrollTo(0, 0);
    toTop = false;
    if (restoreY !== null) {
      const y = restoreY;
      restoreY = null;
      window.scrollTo(0, y);
      requestAnimationFrame(() => window.scrollTo(0, y));
    }
    hoverVideo(root);
    r.mount?.(root, args);
    pagers(root);
    if (typeof TEAM !== "undefined") TEAM.bind();
    if (entering) reveal(root);
    slideTabs(root);
    if (entering && calm) countUp(root, hit.path);
  };
  const calm = !page.classList.contains("still") && !matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!entering || !document.startViewTransition || !calm) return swap();
  const back = from && html.includes(`href="${from}"`);
  const before = html.includes("data-hero") && clicked?.isConnected ? clicked : back ? root.querySelector("[data-hero]") : null;
  let after = null;
  if (before) before.style.viewTransitionName = "hero";
  const moving = document.startViewTransition(() => {
    swap();
    after = before && (root.querySelector("[data-hero]") || root.querySelector(`a[href="${from}"] .shot`));
    if (after && after.getBoundingClientRect().top < innerHeight) after.style.viewTransitionName = "hero";
  });
  moving.ready.catch(() => {
  });
  moving.finished.finally(() => {
    if (after) after.style.viewTransitionName = "";
  });
}
const REVEAL = ".card, .mz, .game, .gm-card, .mk-genre, .mk-mode, .tn-block, .mk-agent, section > .head";
const revealer = new IntersectionObserver((entries) => {
  entries.filter((e) => e.isIntersecting).forEach((e, i) => {
    e.target.style.setProperty("--delay", `${Math.min(i, 8) * 70}ms`);
    e.target.classList.add("in");
    revealer.unobserve(e.target);
  });
}, { rootMargin: "0px 0px -8% 0px" });
function reveal(root) {
  revealer.disconnect();
  if (!document.documentElement.classList.contains("motion")) return;
  root.querySelectorAll(REVEAL).forEach((node) => {
    if (node.getBoundingClientRect().top < innerHeight || node.closest(".reveal")) return;
    node.classList.add("reveal");
    revealer.observe(node);
  });
}
function setLang(next) {
  lang = next;
  try {
    localStorage.setItem("maden.lang", next);
  } catch {
  }
  document.documentElement.lang = next;
  rerender();
}
const trail = [location.hash || "#/"];
document.addEventListener("click", (e) => {
  const back = e.target.closest(`a.pl-back, a.icon-btn[aria-label="${t("back")}"], [data-back]`);
  if (back && trail.length > 1 && !e.metaKey && !e.ctrlKey) {
    e.preventDefault();
    history.back();
    return;
  }
  const langBtn = e.target.closest("[data-lang]");
  if (langBtn) return setLang(langBtn.dataset.lang);
  lastShot = e.target.closest('a[href^="#/"]')?.querySelector(".shot") || null;
  const trigger = e.target.closest("[data-menu]");
  if (trigger) {
    const next = menu === trigger.dataset.menu ? null : trigger.dataset.menu;
    closeHud("menu");
    menu = next;
    return syncMenu();
  }
  if (menu && (!e.target.closest("[data-pop]") || e.target.closest("a"))) {
    menu = null;
    syncMenu();
  }
});
const scrolls = /* @__PURE__ */ new Map();
let restoreY = null;
window.addEventListener("hashchange", () => {
  const now = location.hash || "#/";
  scrolls.set(lastHash, window.scrollY);
  const goingBack = trail.length > 1 && trail[trail.length - 2] === now;
  if (goingBack) trail.pop();
  else if (trail[trail.length - 1] !== now) trail.push(now);
  restoreY = goingBack && scrolls.has(now) ? scrolls.get(now) : null;
  menu = null;
  document.querySelectorAll(".overlay, .full").forEach((node) => node.remove());
  toTop = restoreY === null;
  rerender();
});
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.lang = lang;
  if (params.has("still")) document.documentElement.classList.add("still");
  else if (!matchMedia("(prefers-reduced-motion: reduce)").matches) document.documentElement.classList.add("motion");
  rerender();
});
