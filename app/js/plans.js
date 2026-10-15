addStrings({
  en: {
    "amount.stage": "Levels",
    "amount.wave": "Waves",
    "amount.endless": "Zones",
    "amount.grow": "Expansions",
    "amount.versus": "Skill tiers",
    "q5.stage": "Whose levels should it follow?",
    "q5.wave": "Whose waves should it follow?",
    "q5.endless": "Whose difficulty should it follow?",
    "q5.grow": "Whose growth should it follow?",
    "q5.versus": "Whose matches should it follow?",
    "job.level.stage": "First {n} levels · like {game}",
    "job.level.wave": "First {n} waves · like {game}",
    "job.level.endless": "First zone · like {game}",
    "job.level.grow": "First {n} expansions · like {game}",
    "job.level.versus": "First skill tier · like {game}",
    "job.qa.stage": "Plays the first {n} levels",
    "job.qa.wave": "Plays the first {n} waves",
    "job.qa.endless": "Plays the first zone",
    "job.qa.grow": "Plays through {n} expansions",
    "job.qa.versus": "Plays bots in the first tier",
    "ready.stage": "First {n} levels ready",
    "ready.wave": "First {n} waves ready",
    "ready.endless": "First zone ready",
    "ready.grow": "First {n} expansions ready",
    "ready.versus": "First skill tier ready",
    "pace.stage": "{t} per level",
    "pace.wave": "{t} per wave",
    "pace.endless": "{t} per zone",
    "pace.grow": "{t} per expansion",
    "pace.versus": "{t} per tier"
  },
  ko: {
    "amount.stage": "레벨 수",
    "amount.wave": "웨이브 수",
    "amount.endless": "구역 수",
    "amount.grow": "확장 단계",
    "amount.versus": "실력 구간",
    "q5.stage": "어떤 게임처럼 레벨을 만들까요?",
    "q5.wave": "어떤 게임처럼 웨이브를 만들까요?",
    "q5.endless": "어떤 게임처럼 난이도를 올릴까요?",
    "q5.grow": "어떤 게임처럼 성장시킬까요?",
    "q5.versus": "어떤 게임처럼 대전을 만들까요?",
    "job.level.stage": "첫 레벨 {n}개 · {game}처럼",
    "job.level.wave": "첫 웨이브 {n}개 · {game}처럼",
    "job.level.endless": "첫 구역 · {game}처럼",
    "job.level.grow": "첫 확장 {n}단계 · {game}처럼",
    "job.level.versus": "첫 실력 구간 · {game}처럼",
    "job.qa.stage": "첫 레벨 {n}개 플레이",
    "job.qa.wave": "첫 웨이브 {n}개 플레이",
    "job.qa.endless": "첫 구역 플레이",
    "job.qa.grow": "확장 {n}단계까지 플레이",
    "job.qa.versus": "첫 구간에서 봇과 대전",
    "ready.stage": "첫 레벨 {n}개 완성",
    "ready.wave": "첫 웨이브 {n}개 완성",
    "ready.endless": "첫 구역 완성",
    "ready.grow": "첫 확장 {n}단계 완성",
    "ready.versus": "첫 실력 구간 완성",
    "pace.stage": "레벨 1개에 {t}",
    "pace.wave": "웨이브 1개에 {t}",
    "pace.endless": "구역 1개에 {t}",
    "pace.grow": "확장 1단계에 {t}",
    "pace.versus": "실력 구간 1개에 {t}"
  }
});
const PLAN_KINDS = {
  stage: { values: [30, 100, 300, 1e3], best: 100, first: 5 },
  wave: { values: [10, 20, 30, 50], best: 20, make: 120, play: 90, first: 3 },
  endless: { values: [3, 5, 8, 12], best: 3, make: 600, play: 360, first: 1 },
  grow: { values: [5, 10, 20, 40], best: 10, make: 180, play: 120, first: 2 },
  versus: { values: [5, 10, 20, 30], best: 10, make: 60, play: 120, first: 1 }
};
const PLAN_FEW = { values: [10, 30, 50, 100], best: 30, first: 3 };
const PLAN_STUDY = 15;
const PLAN_STUDY_FIRST = 3;
const PLAN_OF = {
  stage: "stage",
  story: "stage",
  campaign: "stage",
  boss: "stage",
  daily: "stage",
  career: "stage",
  waves: "wave",
  run: "wave",
  endless: "endless",
  timeAttack: "endless",
  idle: "grow",
  expand: "grow",
  orders: "grow",
  collect: "grow",
  sandbox: "grow",
  pvp: "versus",
  duel: "versus",
  league: "versus",
  tournament: "versus",
  coop: "versus"
};
const PACE = { slow: { make: 60, play: 60 }, mid: { make: 30, play: 40 }, fast: { make: 10, play: 20 } };
const PACE_OF = { match3: "slow", merge: "slow", physics: "slow", hidden: "slow", brain: "slow", sort: "fast", blockPuzzle: "fast", number: "fast", coloring: "fast", word: "fast", solitaire: "fast", mahjong: "fast" };
const PACE_FAMILY = { puzzle: "mid", action: "mid", simulation: "slow", arcade: "fast", strategy: "slow", board: "fast", casual: "fast" };
function planOf(genreKey, modeKey, fallback = "puzzle") {
  const family = (GENRES.find((g) => g.key === genreKey) || {}).family || fallback || "puzzle";
  const kind = PLAN_OF[modeKey] || "stage";
  const few = kind === "stage" && !["puzzle", "board"].includes(family);
  return { kind, family, ...PLAN_KINDS[kind], ...few ? PLAN_FEW : {}, ...kind === "stage" ? PACE[PACE_OF[genreKey] || PACE_FAMILY[family]] : {} };
}
const LAUNCH_STAGES = ["cpi", "stage2", "scale"];
const STAGE_KINDS = {
  stage2: ["levelmap", "daily", "leaderboard", "quest", "adreward", "charselect", "basebuild", "garage", "hangar", "inventory", "loadout", "collection", "achievement"],
  scale: ["shop", "seasonpass", "event", "summon", "story", "dialogue", "decor", "posse", "invite", "profile", "mail", "guild"]
};
const stageOfKind = (kind) => STAGE_KINDS.stage2.includes(kind) ? "stage2" : STAGE_KINDS.scale.includes(kind) ? "scale" : "core";
addStrings({
  en: {
    "art.char": "Characters",
    "art.bg": "Backgrounds",
    "art.prop": "Objects",
    "art.screen": "Screens",
    toMake: "To make",
    "method.2d": "2D · Generated images",
    "method.3d": "3D · Models and animation"
  },
  ko: {
    "art.char": "캐릭터",
    "art.bg": "배경",
    "art.prop": "오브젝트",
    "art.screen": "화면",
    toMake: "만들 것",
    "method.2d": "2D · 그림 생성",
    "method.3d": "3D · 모델·동작 제작"
  }
});
const ART_3D = /* @__PURE__ */ new Set([
  "physics",
  "tapAway",
  "survivor",
  "io",
  "runner",
  "shooter",
  "growth",
  "actionRpg",
  "collectionRpg",
  "defense",
  "party",
  "stealth",
  "arcadeIdle",
  "idleTycoon",
  "management",
  "mining",
  "asmr",
  "cleaning",
  "job",
  "life",
  "racing",
  "stack",
  "ball",
  "sports",
  "jump",
  "fishing",
  "mergeBattle",
  "army",
  "conquer",
  "build"
]);
const ART_NEED = {
  puzzle: { char: 1, bg: 3, prop: 12 },
  action: { char: 6, bg: 2, prop: 15 },
  simulation: { char: 4, bg: 1, prop: 30 },
  arcade: { char: 2, bg: 3, prop: 12 },
  strategy: { char: 8, bg: 2, prop: 20 },
  board: { char: 1, bg: 2, prop: 16 }
};
const ART_TIME = { "2d": { char: 10, bg: 5, prop: 3, screen: 8 }, "3d": { char: 40, bg: 60, prop: 10, screen: 8 } };
addStrings({
  en: {
    "vs.basic": "Basic",
    "vs.added": "With agent",
    baseMake: "Base",
    "base.director": "Screens joined in the order you picked",
    "with.director": "First 5 minutes, tutorial and screen flow tuned to the game",
    "base.art": "Colors and icons matched to one style",
    "with.art": "{n} assets made new · {dim}",
    "base.level.stage": "{n} basic levels",
    "base.level.wave": "{n} basic waves",
    "base.level.endless": "{n} basic zone",
    "base.level.grow": "{n} basic expansions",
    "base.level.versus": "{n} basic skill tier",
    "base.qa": "Checked that it starts",
    "base.economy": "Default prices and rewards",
    "with.economy": "Prices and rewards tuned · {list}",
    "base.narrative": "No story text",
    "with.narrative": "{n} chapters written"
  },
  ko: {
    "vs.basic": "기본",
    "vs.added": "넣으면",
    baseMake: "기본 제작",
    "base.director": "고른 순서대로 화면을 이어 붙임",
    "with.director": "첫 5분·튜토리얼·화면 흐름을 게임에 맞게 다듬음",
    "base.art": "색과 아이콘만 한 스타일로 맞춤",
    "with.art": "에셋 {n}개 새로 제작 · {dim}",
    "base.level.stage": "기본 레벨 {n}개",
    "base.level.wave": "기본 웨이브 {n}개",
    "base.level.endless": "기본 구역 {n}개",
    "base.level.grow": "기본 확장 {n}단계",
    "base.level.versus": "기본 실력 구간 {n}개",
    "base.qa": "실행되는지만 확인",
    "base.economy": "가격·보상은 기본값",
    "with.economy": "가격·보상 조정 · {list}",
    "base.narrative": "스토리 글 없음",
    "with.narrative": "챕터 {n}개 작성"
  }
});
addStrings({
  en: { "slot.hero": "Hero", "slot.place": "Setting", "slot.foe": "Enemies", "slot.piece": "Pieces", "slot.guest": "Customers", "slot.block": "Obstacles", "slot.token": "Pieces", "slot.side": "Your side" },
  ko: { "slot.hero": "주인공", "slot.place": "무대", "slot.foe": "적", "slot.piece": "조각", "slot.guest": "손님", "slot.block": "장애물", "slot.token": "말·카드", "slot.side": "우리 편" }
});
const THEME_SLOTS = {
  puzzle: { first: "hero", second: "piece", ask: "the pieces the player matches, sorts or clears" },
  action: { first: "hero", second: "foe", ask: "the enemies the hero fights" },
  simulation: { first: "hero", second: "guest", ask: "the customers or things the hero serves or makes" },
  arcade: { first: "hero", second: "block", ask: "the obstacles or targets in the hero’s way" },
  strategy: { first: "side", second: "foe", ask: "the enemy side" },
  board: { first: "hero", second: "token", ask: "the pieces, cards or tiles on the table" }
};
const THEME_IDEAS = {
  puzzle: [
    [L("Cat cafe", "고양이 카페"), L("A cat barista", "바리스타 고양이"), L("Cups, cakes, macarons", "찻잔 · 케이크 · 마카롱"), L("A cozy cafe counter", "아늑한 카페 카운터")],
    [L("Deep sea treasure", "깊은 바다 보물"), L("A small diver", "꼬마 잠수부"), L("Shells, pearls, starfish", "조개 · 진주 · 불가사리"), L("A sunken ship", "가라앉은 배")],
    [L("Space station", "우주 정거장"), L("A tiny astronaut", "작은 우주인"), L("Planets, satellites, comets", "행성 · 위성 · 혜성"), L("An orbiting station", "궤도 위 정거장")],
    [L("Witch garden", "마녀의 정원"), L("A young witch", "꼬마 마녀"), L("Potions, mushrooms, herbs", "물약 · 버섯 · 약초"), L("A moonlit garden", "달빛 정원")],
    [L("Morning bakery", "아침 빵집"), L("A sleepy baker", "졸린 제빵사"), L("Bread, jam jars, croissants", "식빵 · 잼 병 · 크루아상"), L("A bakery before opening", "문 열기 전 빵집")],
    [L("Toy workshop", "장난감 공방"), L("An old toymaker", "할아버지 장인"), L("Blocks, wind-up robots, paints", "블록 · 태엽 로봇 · 물감"), L("A wooden workshop", "나무 공방")],
    [L("Winter cabin", "겨울 오두막"), L("A snowed-in family", "눈에 갇힌 가족"), L("Mittens, cocoa mugs, snow globes", "장갑 · 코코아 잔 · 스노볼"), L("A cabin by the fireplace", "벽난로 앞 오두막")]
  ],
  action: [
    [L("Frog pond guard", "개구리 연못 수비대"), L("A frog with a long tongue", "혀를 쏘는 개구리"), L("Flies, beetles, wasps", "파리 · 딱정벌레 · 말벌"), L("A moonlit pond", "달빛 연못")],
    [L("Kitchen brawl", "주방 대소동"), L("A chef with a frying pan", "프라이팬 든 요리사"), L("Runaway carrots, onions, chilies", "달아난 당근 · 양파 · 고추"), L("A restaurant kitchen", "식당 주방")],
    [L("Robot scrapyard", "로봇 고물상"), L("A small repair bot", "작은 수리 로봇"), L("Rogue drills, cranes, drones", "폭주한 드릴 · 크레인 · 드론"), L("A scrapyard at night", "한밤의 고물상")],
    [L("Ninja cats", "닌자 고양이"), L("A cat in a black mask", "검은 복면 고양이"), L("Rats, crows, guard dogs", "쥐 · 까마귀 · 경비견"), L("Tiled rooftops", "기와지붕 위")],
    [L("Deep sea diver", "심해 잠수부"), L("A diver with a harpoon", "작살 든 잠수부"), L("Jellyfish, angler fish, eels", "해파리 · 아귀 · 곰치"), L("A dark trench", "어두운 해구")],
    [L("Dino nest", "공룡 둥지"), L("A baby dinosaur", "아기 공룡"), L("Egg thieves, raptors, pterosaurs", "알 도둑 · 랩터 · 익룡"), L("A volcano valley", "화산 계곡")],
    [L("Haunted library", "유령 도서관"), L("A librarian with a broom", "빗자루 든 사서"), L("Book ghosts, ink blobs, moths", "책 유령 · 잉크 방울 · 나방"), L("A library after closing", "문 닫은 도서관")]
  ],
  simulation: [
    [L("Ramen stand", "라멘 가게"), L("A young cook", "젊은 요리사"), L("Office workers, students, tourists", "직장인 · 학생 · 관광객"), L("A stall in an alley", "골목의 작은 가게")],
    [L("Flower market", "꽃 시장"), L("A florist on a bike", "자전거 탄 꽃집 주인"), L("Couples, shop owners, brides", "연인 · 가게 주인 · 신부"), L("A market street", "시장 거리")],
    [L("Space diner", "우주 식당"), L("A robot waiter", "로봇 종업원"), L("Aliens of every shape", "온갖 모양의 외계인"), L("A diner on an asteroid", "소행성 위 식당")],
    [L("Honey farm", "꿀 농장"), L("A beekeeper", "양봉가"), L("Bears, bakers, tea shops", "곰 · 제빵사 · 찻집"), L("A hillside of hives", "벌통이 놓인 언덕")],
    [L("Car wash", "세차장"), L("A wash crew", "세차 팀"), L("Muddy trucks, taxis, sports cars", "진흙 트럭 · 택시 · 스포츠카"), L("A roadside car wash", "길가 세차장")],
    [L("Pet hotel", "펫 호텔"), L("A hotel host", "호텔 주인"), L("Dogs, cats, parrots", "강아지 · 고양이 · 앵무새"), L("A hotel with tiny rooms", "작은 객실이 늘어선 호텔")],
    [L("Ice cream truck", "아이스크림 트럭"), L("A truck driver", "트럭 운전사"), L("Kids, joggers, beachgoers", "아이들 · 달리는 사람 · 피서객"), L("A summer town", "여름 동네")]
  ],
  arcade: [
    [L("Paper plane", "종이비행기"), L("A folded paper plane", "접은 종이비행기"), L("Fans, windows, sprinklers", "선풍기 · 창문 · 스프링클러"), L("A school yard", "학교 운동장")],
    [L("Candy rail", "사탕 레일"), L("A candy cart", "사탕 수레"), L("Gumdrops, broken rails, syrup", "젤리 · 끊긴 선로 · 시럽"), L("A lollipop mountain", "막대사탕 산")],
    [L("Moon hop", "달 위 점프"), L("A white rabbit", "흰 토끼"), L("Craters, meteors, moon dust", "분화구 · 유성 · 달 먼지"), L("The moon’s surface", "달 표면")],
    [L("Jungle run", "정글 달리기"), L("An explorer", "탐험가"), L("Vines, logs, crocodiles", "덩굴 · 통나무 · 악어"), L("A jungle river", "정글의 강")],
    [L("Neon skate", "네온 스케이트"), L("A skater", "스케이터"), L("Cones, taxis, stair rails", "고깔 · 택시 · 계단 난간"), L("A city at night", "밤의 도시")],
    [L("Snow sled", "눈썰매"), L("A penguin on a sled", "썰매 탄 펭귄"), L("Pine trees, snowmen, ice holes", "소나무 · 눈사람 · 얼음 구멍"), L("A snowy hill", "눈 언덕")],
    [L("Pancake tower", "팬케이크 탑"), L("A cook with a spatula", "뒤집개 든 요리사"), L("Wobbly plates, butter, syrup", "흔들리는 접시 · 버터 · 시럽"), L("A diner counter", "식당 카운터")]
  ],
  strategy: [
    [L("Ant kingdom", "개미 왕국"), L("Red ants and their queen", "붉은 개미와 여왕"), L("Black ants, spiders, beetles", "검은 개미 · 거미 · 딱정벌레"), L("Hills under a garden", "정원 밑 개미 언덕")],
    [L("Sky islands", "하늘 섬"), L("An airship fleet", "비행선 함대"), L("Sky pirates", "하늘 해적단"), L("Floating islands", "떠 있는 섬들")],
    [L("Toy soldiers", "장난감 병정"), L("Tin soldiers", "양철 병정"), L("Plastic dinosaurs, robots", "플라스틱 공룡 · 로봇"), L("A bedroom floor", "방바닥")],
    [L("Mushroom tribes", "버섯 부족"), L("Red-cap mushrooms", "빨간 갓 버섯 부족"), L("Slugs, mold, woodlice", "민달팽이 · 곰팡이 · 쥐며느리"), L("A damp forest", "축축한 숲")],
    [L("Pirate coves", "해적 만"), L("A pirate crew", "해적단"), L("Navy ships, rival crews", "해군 함선 · 다른 해적단"), L("Islands and reefs", "섬과 암초")],
    [L("Robot colony", "로봇 식민지"), L("Builder drones", "건설 드론"), L("Sandstorms, rogue machines", "모래 폭풍 · 폭주 기계"), L("A red planet", "붉은 행성")],
    [L("Garden gnomes", "정원 노움"), L("Garden gnomes", "정원 노움들"), L("Moles, crows, snails", "두더지 · 까마귀 · 달팽이"), L("A vegetable patch", "텃밭")]
  ],
  board: [
    [L("Tea house", "찻집"), L("A tea master", "찻집 주인"), L("Porcelain tiles", "도자기 패"), L("A quiet tea house", "조용한 찻집")],
    [L("Night market", "야시장"), L("A stall keeper", "노점 주인"), L("Lantern cards", "등불 카드"), L("A lantern-lit market", "등불 켜진 야시장")],
    [L("Seaside table", "바닷가 테이블"), L("An old sailor", "늙은 선원"), L("Shell tokens", "조개 말"), L("A wooden pier", "나무 부두")],
    [L("Royal garden", "왕실 정원"), L("A young queen", "어린 여왕"), L("Marble pieces", "대리석 말"), L("A hedge maze", "미로 정원")],
    [L("Retro arcade", "레트로 오락실"), L("A regular", "오락실 단골"), L("Pixel cards", "픽셀 카드"), L("A neon table", "네온 테이블")],
    [L("Mountain lodge", "산장"), L("A hiker", "등산객"), L("Wooden tiles", "나무 패"), L("By the fireplace", "벽난로 앞")],
    [L("Star observatory", "별 관측소"), L("A stargazer", "별지기"), L("Constellation cards", "별자리 카드"), L("A dome at night", "밤의 관측 돔")]
  ]
};
