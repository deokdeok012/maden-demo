const ASSET = "../design/자산/maden";
const asset = (path) => window.INLINE && window.INLINE[path] || `${ASSET}/${path}`;
const L = (en, ko) => ({ en, ko });
const gen = (file) => window.INLINE && window.INLINE[`aigc/${file}`] || `../design/자산/aigc/${file}`;
const TALL = /* @__PURE__ */ new Set(["playground/reskin/arrow.webp", "playground/reskin/cafe.webp", "playground/reskin/downhill.webp", "playground/reskin/lumber.webp", "playground/reskin/mosquito.webp", "playground/reskin/paper.webp", "playground/reskin/prison.webp", "playground/reskin/seaside.webp", "playground/reskin/slime.webp", "playground/reskin/themepark.webp", "kairu/stills/decor-fountain-2.webp", "kairu/stills/decor-fountain-3.webp", "kairu/stills/decor-fountain.webp", "kairu/stills/decor-sign-2.webp", "kairu/stills/decor-sign-3.webp", "kairu/stills/decor-sign.webp", "kairu/stills/ingame-105.webp", "kairu/stills/ingame-169.webp", "kairu/stills/ingame-253.webp", "kairu/stills/ingame-436.webp", "kairu/stills/ingame-470.webp", "kairu/stills/ingame-85.webp", "kairu/stills/lobby-day2.webp", "kairu/stills/lobby-main.webp", "kairu/stills/overview.webp", "kairu/stills/profile.webp", "kairu/stills/splash-title.webp", "kairu/stills/story-breakup.webp", "kairu/stills/story-ep4.webp", "kairu/stills/story-prologue.webp"]);
const WIDE = /* @__PURE__ */ new Set(["playground/play/live/bulldozer-1.webp", "playground/play/live/bulldozer-2.webp", "playground/play/live/bulldozer-3.webp", "create/bg/dino-poster.webp", "create/bg/pizza-poster.webp", "create/bg/prison-poster.webp", "create/bg/shark-poster.webp", "create/bg/snake-poster.webp", "create/bg/xp-hero-poster.webp"]);
const SHAPE = /* @__PURE__ */ new Map();
const realPic = (shot) => {
  const path = `실제게임/${shot.file}`;
  const url = window.INLINE && window.INLINE[path] || `../design/자산/실제게임-웹/${shot.file}`;
  if (shot.shape) SHAPE.set(url, shot.shape);
  return url;
};
const pic = (path) => {
  const url = asset(path);
  if (TALL.has(path)) SHAPE.set(url, "tall");
  if (WIDE.has(path)) SHAPE.set(url, "wide");
  return url;
};
const GROUPS = ["puzzle", "action", "simulation", "casual"];
const CREATORS = [
  { key: "emma", name: "EmmaCrafts", country: "US", followers: 56100, avatar: "emma.webp" },
  { key: "mina", name: "MinaMakes", country: "KR", followers: 48200, avatar: "mina.webp" },
  { key: "lucas", name: "LucasBuilds", country: "BR", followers: 31700, avatar: null },
  { key: "aiko", name: "aiko.pixel", country: "JP", followers: 27400, avatar: "aiko.svg" },
  { key: "lena", name: "LenaLoops", country: "DE", followers: 22900, avatar: "lena.webp" },
  { key: "dev", name: "DevByNight", country: "IN", followers: 19800, avatar: "dev.svg" },
  { key: "tuan", name: "TuanTycoon", country: "VN", followers: 15600, avatar: "tuan.webp" },
  { key: "omar", name: "OmarArcade", country: "SA", followers: 12300, avatar: "omar.webp" }
].map((c) => ({ ...c, avatar: c.avatar && asset(`playground/play/avatars/${c.avatar}`) }));
const CREATOR = Object.fromEntries(CREATORS.map((c) => [c.key, c]));
const live = (key, name, group, creator, desc, shots) => ({
  key,
  name,
  group,
  genre: group,
  creator,
  desc,
  source: "live",
  icon: asset(`playground/play/icons/${key}.webp`),
  video: asset(`playground/play/live/${key}-play.mp4`),
  shots: Object.fromEntries(Object.entries(shots).map(([kind, n]) => [kind, pic(`playground/play/live/${key}-${n}.webp`)]))
});
const template = (key, name, group, genre, creator, desc, dir, video = true) => {
  const base = dir === "kairu" ? `kairu/cards/${key}` : `playground/reskin/${key}`;
  return {
    key,
    name,
    group,
    genre,
    creator,
    desc,
    source: "template",
    icon: asset(`playground/play/icons/${key}.webp`),
    video: video ? asset(`${base}.mp4`) : null,
    shots: { gameplay: pic(`${base}${dir === "kairu" ? "-poster" : ""}.webp`) }
  };
};
const still = (name) => pic(`kairu/stills/${name}.webp`);
const GAMES = [
  live("lucky-lucky", "Roll Roll Dice!", "action", "emma", L("A luck-driven roguelike survivor. Roll your dice hero through hordes of shape monsters.", "주사위 영웅이 굴러다니며 도형 몬스터를 쓸어버리는 운빨 로그라이크"), { lobby: 3, gameplay: 1, levelup: 2 }),
  live("bubble-pop", "Bubble Pop", "puzzle", "mina", L("Drag and merge picture pieces floating in underwater bubbles to complete jigsaw scenes.", "바닷속 버블에 담긴 그림 조각을 끌어 맞춰 한 장의 그림을 완성하는 직소 퍼즐"), { lobby: 1, gameplay: 2, result: 3 }),
  {
    ...template("bay", "Smash Bay", "puzzle", "blockPuzzle", "mina", L("Aim, shoot and smash blocks", "조준해서 블록을 부수는 퍼즐"), "kairu"),
    shots: { titlescreen: still("splash-title"), lobby: still("lobby-main"), levelmap: still("lobby-levels-ui"), gameplay: still("ingame-105"), story: still("story-ep4"), decor: still("decor-fountain"), profile: still("profile") }
  },
  live("meow-smash", "Meow Smash", "puzzle", "aiko", L("Knock down store shelves with a cannon to catch the hiding mice.", "대포로 마트 진열대를 무너뜨려 숨은 쥐를 잡는 3D 물리 퍼즐"), { gameplay: 1 }),
  template("pizza", "Pizza Ready!", "simulation", "management", "lucas", L("Run and expand your pizza shop", "피자 매장을 운영하고 확장"), "kairu"),
  live("animal-harbor", "Sailing Paws", "simulation", "tuan", L("Sail between four seasonal islands with animal friends and catch fish.", "동물 친구들과 사계절 섬을 항해하며 물고기를 잡는 힐링 어업 게임"), { lobby: 1, gameplay: 2 }),
  live("golden-blast", "Golden Blast", "puzzle", "lena", L("Fill rows with blocks and merge bronze, silver and gold balls to tier up.", "블록으로 줄을 지우고 동·은·금 구슬을 합쳐 등급을 올리는 퍼즐"), { gameplay: 1 }),
  template("snake", "Snake Clash!", "action", "arena", "emma", L("Eat, grow and swallow your rivals", "먹고 커져서 상대를 삼키기"), "kairu"),
  live("last-rescue", "Last Rescue", "action", "dev", L("Blast through alien swarms, rescue survivors and escape the planet.", "외계 행성의 적을 쓸어버리고 생존자를 구해 탈출하는 슈팅 서바이벌"), { gameplay: 1 }),
  template("xp-hero", "XP Hero", "action", "actionRpg", "emma", L("Fight monsters and grow your hero", "몬스터와 싸우며 영웅 성장"), "kairu"),
  live("bolt-bots", "Robot Universe", "action", "dev", L("Scavenge scrap, build and upgrade your robot, and battle enemy bots in a 3D wasteland.", "고철을 주워 로봇을 조립·강화하고 황무지의 적 로봇을 물리치는 3D 액션"), { gameplay: 2 }),
  template("cafe", "Cafe Life: Restaurant Game", "simulation", "cooking", "mina", L("Run your café and expand it worldwide", "직원을 두고 카페를 넓혀 가는 경영"), "reskin"),
  template("themepark", "Theme Park Manager", "simulation", "management", "tuan", L("Build rides and run your theme park", "놀이기구를 짓고 테마파크 운영"), "reskin"),
  template("downhill", "Downhill Racer", "casual", "racing", "omar", L("Dodge obstacles and race downhill", "장애물을 피하는 다운힐 레이싱"), "reskin"),
  template("seaside", "Seaside Secrets: Merge & Story", "puzzle", "mergeStory", "lena", L("Merge items and uncover a seaside story", "물건을 합치며 이야기를 푸는 머지"), "reskin", false),
  template("shark", "Shark Universe: Survival World", "action", "survival", "aiko", L("Eat, grow and rule the ocean as a shark", "바다를 누비며 먹고 커지는 상어"), "kairu"),
  template("guitar", "Guitar Girl Match 3", "puzzle", "match3", "aiko", L("Relaxing match-3 with a guitar girl", "기타 소녀와 함께하는 매치3 퍼즐"), "reskin", false),
  template("bulldozer", "Bulldozer Master: Crush & Mine", "simulation", "mining", "tuan", L("Mine resources and expand your empire", "중장비로 캐고 광산을 확장"), "kairu"),
  template("jelly", "ASMR Rainbow Jelly", "casual", "asmr", "lena", L("Enjoy colorful jelly ASMR", "알록달록 젤리를 즐기는 ASMR"), "reskin", false),
  template("slime", "Super Big Slime: Black Hole 3D", "action", "growth", "omar", L("Swallow everything and grow into a super slime", "닥치는 대로 삼키며 커지는 슬라임"), "reskin"),
  template("arrow", "Arrow Fever: Tap Out Puzzle", "puzzle", "puzzle", "lena", L("Clear tangled arrows in order", "화살표를 순서대로 빼는 퍼즐"), "reskin"),
  template("dino", "Dinosaur Universe", "action", "collectionRpg", "lucas", L("Collect dinosaurs, explore and battle", "공룡을 모아 탐험하고 전투"), "kairu"),
  template("unnie", "Unnie doll", "casual", "dressUp", "mina", L("Style your own doll with outfits and hair", "옷과 헤어로 나만의 캐릭터"), "reskin", false),
  template("prison", "Prison Life: Idle Game", "simulation", "idleTycoon", "tuan", L("Take in prisoners and grow your prison", "죄수를 받고 감옥을 키우는 방치형"), "reskin"),
  template("paper", "Paper Delivery Boy", "casual", "runner", "omar", L("Ride your bike and deliver papers", "자전거로 달리며 신문 배달"), "reskin", false),
  template("mosquito", "Mosquito.io", "action", "io", "dev", L("Bite other mosquitos and grow in the arena", "다른 모기를 물며 커지는 io 게임"), "reskin"),
  template("lumber", "Idle Lumber Chopper Empire Inc", "simulation", "idleTycoon", "lucas", L("Chop trees and build a lumber empire", "나무를 베어 목재 회사를 키우는 방치형"), "reskin")
].map((g, i) => ({
  ...g,
  cover: g.shots.gameplay || Object.values(g.shots).at(-1),
  wide: SHAPE.get(g.shots.gameplay) === "wide",
  plays: Math.round(24e5 / (i * 0.55 + 1.4) / 1e3) * 1e3,
  madeIn: 9 + i * 13 % 38
}));
const SAME = { "snake-clash": "snake", "pizza-ready": "pizza" };
const REFS = [];
for (const shot of REAL_SHOTS) {
  if (shot.shape === "wide") continue;
  const mine = GAMES.find((g) => g.key === SAME[shot.slug]);
  if (mine) {
    mine.shots[shot.kind] = realPic(shot);
    continue;
  }
  let ref = REFS.find((g) => g.key === shot.slug);
  if (!ref) {
    ref = { key: shot.slug, name: shot.game, group: "casual", genre: shot.publisher, creator: null, desc: null, source: "concept", own: shot.own, icon: null, video: null, shots: {}, plays: 0, madeIn: 0, wide: false };
    REFS.push(ref);
  }
  ref.shots[shot.kind] = realPic(shot);
  ref.cover = ref.cover || ref.shots[shot.kind];
}
const clip = (file) => file.startsWith("@am/") ? `../design/자산/앱매직-레퍼런스/${file.slice(4)}` : window.INLINE && window.INLINE[`영상/${file}`] || `../design/자산/실제게임-영상/${file}`;
const VIDEO_GAMES = YT_GAMES.map((v) => {
  const c = CLIPS[v.game];
  const cover = c ? clip(c.poster) : `https://i.ytimg.com/vi/${v.id}/frame0.jpg`;
  if (c ? c.tall : v.tall) SHAPE.set(cover, "tall");
  return { key: `yt-${v.id}`, name: v.game, group: "", genre: v.publisher, kind: v.genre, creator: null, desc: null, source: "video", yt: c ? null : v.id, icon: null, video: c ? clip(c.file) : null, cover, shots: { gameplay: cover }, plays: 0, madeIn: 0, wide: false };
});
const plain = (name) => String(name).toLowerCase().replace(/[^a-z0-9]+/g, "");
const storePic = (file) => window.INLINE && window.INLINE[`스토어/${file}`] || `../design/자산/실제게임-스토어/${file}`;
const FAMILY_GROUP = { puzzle: "puzzle", board: "puzzle", action: "action", strategy: "action", simulation: "simulation", arcade: "casual" };
const STORE = (typeof STORE_GAMES === "undefined" ? [] : STORE_GAMES).filter((x) => !window.INLINE || !Object.keys(window.INLINE).length || window.INLINE[`스토어/${x.icon}`]).map((x, i) => {
  let h = 7;
  for (const ch of x.name) h = (h * 31 + ch.charCodeAt(0)) % 100003;
  const am = typeof AM_REFS === "undefined" ? null : AM_REFS.find((r) => r.video && plain(r.name) === plain(x.name));
  const c = (typeof CLIPS === "undefined" ? null : CLIPS[x.name]) || (am ? { file: `@am/${am.video}`, tall: !am.wide } : null);
  const frame = c && c.tall && typeof CLEAN_FRAMES !== "undefined" && CLEAN_FRAMES[c.file];
  const cover = frame ? clip(frame[0]) : storePic(x.clean || x.shots[0]);
  if (x.wide && !frame) SHAPE.set(cover, "wide");
  return {
    key: x.key,
    name: x.name,
    group: FAMILY_GROUP[x.family] || "casual",
    genre: FAMILY_GROUP[x.family] || "casual",
    kind: x.genre,
    creator: null,
    publisher: x.publisher,
    desc: null,
    source: "store",
    icon: storePic(x.icon),
    video: c ? clip(c.file) : null,
    tallVideo: !!(c && c.tall),
    clipAt: frame ? frame[1] : 0,
    promo: !!x.promo && !frame,
    cover,
    shots: Object.fromEntries(x.shots.filter((f, k) => !k || !window.INLINE || window.INLINE[`스토어/${f}`]).map((f, k) => [k ? `shot${k}` : "gameplay", storePic(f)])),
    plays: Math.round(Math.min(5e6, 2e4 + (x.ratings || 1e3) * 3.1)),
    madeIn: 6 + h % 40,
    wide: !!x.wide,
    rating: x.rating
  };
});
const GAME = Object.fromEntries([...GAMES, ...REFS, ...VIDEO_GAMES, ...STORE].map((g) => [g.key, g]));
const PLAYABLE = GAMES;
const TEAM_NAMES = { emma: "Brightside Games", mina: "Studio Haru", lucas: "Tidal Works", aiko: "Pixel Koi", lena: "Loop Forge", dev: "Night Owl Studio", tuan: "Tycoon Lab", omar: "Dune Arcade" };
const STUDIOS = CREATORS.map((c) => ({ ...c, name: TEAM_NAMES[c.key], avatar: (GAMES.find((g) => g.creator === c.key && g.icon) || {}).icon || c.avatar, lead: c.name }));
const STUDIO = Object.fromEntries(STUDIOS.map((x) => [x.key, x]));
const PORTAL = [...GAMES, ...STORE.filter((g) => !g.promo)];
const KIND = {
  titlescreen: { group: "home", price: 0, name: L("Lobby intro", "로비 인트로") },
  tutorial: { group: "home", price: 50, name: L("Tutorial", "튜토리얼") },
  lobby: { group: "home", price: 0, name: L("Lobby", "로비") },
  levelmap: { group: "home", price: 0, name: L("Level map", "레벨 지도") },
  basebuild: { group: "home", price: 100, name: L("Base building", "기지 건설") },
  garage: { group: "home", price: 100, name: L("Garage", "차고") },
  hangar: { group: "home", price: 100, name: L("Hangar", "격납고") },
  gameplay: { group: "gameplay", price: 200, name: L("Gameplay", "게임플레이") },
  mix: { group: "gameplay", price: 200, name: L("Game mix", "게임 믹스") },
  puzzle: { group: "gameplay", price: 200, name: L("Match 3", "매치 3") },
  runner: { group: "gameplay", price: 200, name: L("Runner", "러너") },
  merge: { group: "gameplay", price: 200, name: L("Merge board", "머지 보드") },
  bossbattle: { group: "gameplay", price: 200, name: L("Boss battle", "보스전") },
  settings: { group: "ingame", price: 50, name: L("Settings", "설정") },
  stats: { group: "ingame", price: 100, name: L("Stats", "능력치") },
  levelup: { group: "progress", price: 100, name: L("Level up", "레벨 업") },
  result: { group: "progress", price: 0, name: L("Result", "결과") },
  lose: { group: "progress", price: 50, name: L("Fail", "실패") },
  daily: { group: "progress", price: 100, name: L("Daily reward", "일일 보상") },
  event: { group: "progress", price: 100, name: L("Event", "이벤트") },
  seasonpass: { group: "progress", price: 100, name: L("Season pass", "시즌 패스") },
  quest: { group: "progress", price: 100, name: L("Quests", "퀘스트") },
  achievement: { group: "progress", price: 100, name: L("Achievements", "업적") },
  leaderboard: { group: "progress", price: 100, name: L("Ranking", "랭킹") },
  summon: { group: "progress", price: 100, name: L("Summon", "소환") },
  shop: { group: "shop", price: 100, name: L("Shop", "상점") },
  adreward: { group: "shop", price: 100, name: L("Rewarded ad", "광고 보상") },
  inventory: { group: "shop", price: 100, name: L("Inventory", "인벤토리") },
  loadout: { group: "shop", price: 100, name: L("Loadout", "장비 구성") },
  charselect: { group: "shop", price: 100, name: L("Character select", "캐릭터 선택") },
  collection: { group: "shop", price: 100, name: L("Collection", "도감") },
  story: { group: "story", price: 100, name: L("Story", "스토리") },
  dialogue: { group: "story", price: 100, name: L("Dialogue", "대화") },
  decor: { group: "story", price: 100, name: L("Decor", "꾸미기") },
  posse: { group: "story", price: 100, name: L("Crew", "크루") },
  invite: { group: "story", price: 100, name: L("Invite friends", "친구 초대") },
  guild: { group: "story", price: 100, name: L("Guild", "길드") },
  mail: { group: "story", price: 50, name: L("Mail", "우편함") },
  profile: { group: "story", price: 0, name: L("Profile", "프로필") }
};
const MODULE_GROUPS = ["home", "gameplay", "progress", "shop", "story"];
const KIND_ORDER = Object.keys(KIND);
const CLIP = { "bay:lobby": asset("clips/bay-lobby.mp4"), "bay:story": null };
const MODULES = [...GAMES, ...REFS].flatMap((g) => Object.entries(g.shots).map(([kind, img]) => ({
  id: `${g.key}:${kind}`,
  kind,
  game: g.key,
  img,
  video: kind === "gameplay" ? g.video : CLIP[`${g.key}:${kind}`] || null,
  ...KIND[kind]
})));
const MODULE = Object.fromEntries(MODULES.map((m) => [m.id, m]));
for (const g of VIDEO_GAMES) MODULE[`${g.key}:gameplay`] = { id: `${g.key}:gameplay`, kind: "gameplay", game: g.key, img: g.cover, video: g.video, ...KIND.gameplay };
const uiPic = (p) => window.INLINE && window.INLINE[p] || `../design/자산/${p}`;
const PICKS = (typeof REF_GAMES === "undefined" ? [] : REF_GAMES).filter((r) => !["431946152", "6739554056"].includes(r.appId)).map((r) => ({
  key: r.key,
  name: r.name,
  group: r.group,
  genre: r.genre,
  hub: r.hub,
  appId: r.appId,
  features: r.features.filter((k) => KIND[k]),
  creator: null,
  desc: null,
  source: "pick",
  icon: null,
  video: r.video ? uiPic(r.video) : null,
  cover: uiPic(r.poster || r.shots.gameplay || Object.values(r.shots)[0]),
  shots: Object.fromEntries(Object.entries(r.shots).map(([k, p]) => [k, uiPic(p)])),
  plays: 0,
  madeIn: 0,
  wide: false
}));
for (const g of PICKS) {
  GAME[g.key] = g;
  for (const [kind, img] of Object.entries({ ...g.shots, gameplay: g.shots.gameplay || g.cover })) if (KIND[kind]) MODULE[`${g.key}:${kind}`] = { id: `${g.key}:${kind}`, kind, game: g.key, img, video: kind === "gameplay" ? g.video : null, ...KIND[kind] };
}
for (const [key, file, kind, en, ko] of [["prologue", "story-prologue", "story", "Prologue", "프롤로그"], ["resort", "lobby-resort-ui", "basebuild", "Resort", "리조트"], ["character", "lobby-character-ui", "charselect", "Characters", "캐릭터"]]) {
  MODULE[`bay:${key}`] = { id: `bay:${key}`, kind, game: "bay", img: still(file), group: "home", price: 0, name: L(en, ko) };
}
const ARTS = GAMES.filter((g) => Object.keys(g.shots).length > 1);
const LOBBY_FOR = { action: "lucky-lucky:lobby", puzzle: "bubble-pop:lobby", simulation: "animal-harbor:lobby", casual: "animal-harbor:lobby", arcade: "crossy-road:lobby", strategy: "clash-royale:lobby", board: "knighthood:lobby" };
function sortScreens(ids) {
  return [...new Set(ids)].sort((a, b) => KIND_ORDER.indexOf(MODULE[a].kind) - KIND_ORDER.indexOf(MODULE[b].kind));
}
function startFrom(key) {
  const g = GAME[key];
  const ids = MODULES.filter((m) => m.game === key).map((m) => m.id);
  if (!ids.length && MODULE[`${key}:gameplay`]) ids.push(`${key}:gameplay`);
  const has = (group) => ids.some((id) => MODULE[id].group === group);
  if (!has("home")) ids.push(LOBBY_FOR[g.group] || LOBBY_FOR.action);
  if (!ids.some((id) => MODULE[id].kind === "result")) ids.push("bubble-pop:result");
  return { name: "", base: key, art: key, screens: sortScreens(ids) };
}
function priceOf(game) {
  return game.screens.reduce((n, id) => n + MODULE[id].price, 0);
}
function redraws(game) {
  return game.screens.filter((id) => MODULE[id].game !== game.art);
}
const MY_GAMES = [
  { id: "bay", name: "Beach Smash", stage: "scale", at: "scale:live", updated: "2026-10-11", ...pick("bay", ["bay:titlescreen", "bay:lobby", "bay:levelmap", "bay:gameplay", "bay:story", "bay:decor"]) },
  { id: "bubble", name: "Bubble Reef", stage: "scale", at: "scale:live", updated: "2026-10-09", ...pick("bubble-pop", ["bubble-pop:lobby", "bubble-pop:gameplay", "bubble-pop:result"]) },
  { id: "candy", name: "Golden Blocks", stage: "stage2", at: "stage2:running:4", updated: "2026-10-04", ...pick("golden-blast", ["bubble-pop:lobby", "golden-blast:gameplay", "bubble-pop:result"]) },
  { id: "dice", name: "Dice Survivor", stage: "cpi", at: "cpi:passed", updated: "2026-10-12", ...pick("lucky-lucky", ["lucky-lucky:lobby", "lucky-lucky:gameplay", "lucky-lucky:levelup"]) },
  { id: "draft", name: "Untitled game", stage: "draft", updated: "2026-10-13", ...pick("meow-smash", ["animal-harbor:lobby", "meow-smash:gameplay"]) }
];
function pick(art, screens) {
  return { base: screens.find((id) => MODULE[id].group === "gameplay").split(":")[0], art, screens };
}
const AS_OF = "2026-10-13";
const V = (v, at, en, ko, test) => ({ v, at, what: L(en, ko), ...test ? { test } : {} });
const SEED_VERSIONS = {
  bay: [V(1, "2026-08-02", "First build", "첫 빌드", "cpi"), V(2, "2026-08-20", "30 more levels", "레벨 30개 추가", "stage2"), V(3, "2026-09-05", "Design polish", "디자인 고도화"), V(4, "2026-09-18", "Purchases · localization", "결제 · 현지화", "scale")],
  bubble: [V(1, "2026-06-10", "First build", "첫 빌드", "cpi"), V(2, "2026-07-01", "20 more levels", "레벨 20개 추가", "stage2"), V(3, "2026-07-22", "Purchases", "결제", "scale")],
  candy: [V(1, "2026-09-12", "First build", "첫 빌드", "cpi"), V(2, "2026-10-02", "Daily reward · rewarded ads", "일일 보상 · 광고 보상", "stage2")],
  dice: [V(1, "2026-10-05", "First build", "첫 빌드", "cpi")]
};
const MONTHS = Array.from({ length: 10 }, (_, i) => `2026-${String(i + 1).padStart(2, "0")}`);
const LEDGER = {
  bay: { "2026-01": 60, "2026-02": 120, "2026-03": 220, "2026-04": 340, "2026-05": 480, "2026-06": 620, "2026-07": 820, "2026-08": 1050, "2026-09": 1280, "2026-10": 1480 },
  bubble: { "2026-05": 60, "2026-06": 130, "2026-07": 210, "2026-08": 320, "2026-09": 450, "2026-10": 590 },
  candy: { "2026-08": 40, "2026-09": 160, "2026-10": 150 },
  market: { "2026-08": 30, "2026-09": 80, "2026-10": 120 }
};
const SOURCES = [
  { key: "play", name: L("Play rewards", "플레이 보상"), usd: 1e3 },
  { key: "ads", name: L("Ads", "광고"), usd: 640 },
  { key: "iap", name: L("In-app purchases", "인앱 결제"), usd: 410 },
  { key: "publishing", name: L("Publishing share", "퍼블리싱 분배"), usd: 170 },
  { key: "market", name: L("Module and asset sales", "모듈·에셋 판매"), usd: 120 }
];
const NEXT_PAYOUT = "2026-10-21";
const agentIdle = (key) => window.INLINE && window.INLINE[`에이전트/${key}-idle.webp`] || `../design/자산/에이전트-웹/${key}-idle.webp`;
const AGENTS = [
  { key: "director", name: "Director", cost: 10, desc: L("Turns an idea into a plan and hands parts to the team", "아이디어를 계획으로 짜고 팀에 나눠 맡김") },
  { key: "art", name: "Art", cost: 4, desc: L("Characters, backgrounds, blocks in your theme", "테마에 맞는 캐릭터·배경·블록") },
  { key: "level", name: "Level", cost: 4, desc: L("Difficulty curve and stage layout", "난이도 곡선과 스테이지 배치") },
  { key: "narrative", name: "Narrative", cost: 1, desc: L("Chapters, dialogue, relationships", "챕터·대사·인물 관계") },
  { key: "economy", name: "Economy", cost: 4, desc: L("Currencies, prices, sinks and sources", "재화·가격·소비와 획득 균형") },
  { key: "qa", name: "QA", cost: 1, desc: L("Auto-plays every level, flags breaks", "모든 레벨 자동 플레이, 문제 표시") },
  { key: "ua", name: "UA Creative", cost: 4, desc: L("Playable ads and video variants", "플레이어블 광고·영상 변형") },
  { key: "liveops", name: "LiveOps", cost: 4, desc: L("Events, pass and daily rewards", "이벤트·패스·출석 보상") }
].map((a) => ({ ...a, img: asset(`playground/agents/${a.key}.webp`), card: asset(`playground/agents/${a.key}-card.webp`), idle: agentIdle(a.key) }));
const CREW_NAMES = {
  director: [L("Jun", "준"), L("Rosa", "로사")],
  level: [L("Ben", "벤"), L("Gale", "게일")],
  developer: [L("Theo", "테오"), L("Orin", "오린")],
  designer: [L("Mia", "미아"), L("Yuki", "유키")],
  qa: [L("Sam", "샘"), L("Kage", "카게")],
  marketer: [L("Leo", "레오"), L("Aria", "아리아")]
};
const JOBS = [
  { key: "director", agent: "director", name: L("Director", "디렉터"), desc: L("Plans the core loop and levels, hands out the work", "핵심 루프와 레벨을 계획하고 일을 나눔") },
  { key: "level", agent: "level", name: L("Level designer", "레벨 디자이너"), desc: L("Difficulty curve and stage layout", "난이도 곡선과 스테이지 배치") },
  { key: "developer", agent: "liveops", name: L("Developer", "개발자"), desc: L("Builds the game, SDKs and the APK", "게임 · SDK · APK 빌드") },
  { key: "designer", agent: "art", name: L("Art director", "아트 디렉터"), desc: L("Sets one art direction and edits screens", "아트 방향 · 화면 수정") },
  { key: "qa", agent: "qa", name: L("QA", "QA"), desc: L("Plays every level and checks events", "모든 레벨 플레이 · 이벤트 확인") },
  { key: "marketer", agent: "ua", name: L("Marketer", "마케터"), desc: L("Creatives and store listing", "크리에이티브 · 스토어 등록 정보") }
].map((j) => ({ ...j, pro: { img: asset(`playground/agents/${j.agent}.webp`), idle: agentIdle(j.agent), name: CREW_NAMES[j.key][1] }, basic: { img: gen(`team/${j.key}-basic.webp`), idle: gen(`team/${j.key}-basic.webp`), name: CREW_NAMES[j.key][0] } }));
const JOB = Object.fromEntries(JOBS.map((j) => [j.key, j]));
const MEDIA = {
  name: L("Lumi", "루미"),
  role: L("Video & image maker", "영상 · 이미지 제작자"),
  desc: L("Draws images and makes videos with generation APIs", "생성 API로 이미지 · 영상 제작"),
  img: gen("team/media.webp"),
  main: { what: L("1 image", "이미지 1장"), tokens: 1500 },
  rates: [
    [L("Image · standard (1024)", "이미지 · 표준(1024)"), L("1 image", "1장"), 1e3],
    [L("Image · high (1536)", "이미지 · 고화질(1536)"), L("1 image", "1장"), 1500],
    [L("Image · 4K", "이미지 · 4K"), L("1 image", "1장"), 4500],
    [L("Video · 720p", "영상 · 720p"), L("1 second", "1초"), 6e3],
    [L("Video · 1080p", "영상 · 1080p"), L("1 second", "1초"), 12e3],
    [L("Video · 4K", "영상 · 4K"), L("1 second", "1초"), 3e4]
  ]
};
const COIN = asset("brand/cent/Coin_01.png");
