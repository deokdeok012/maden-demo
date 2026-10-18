addStrings({
  en: {
    "mx.title": "Mix by role",
    "mx.fromMix": "Mix by role",
    "mx.world": "Stage",
    "mx.worldQ": "Where you play",
    "mx.hero": "Hero & controls",
    "mx.heroQ": "What you play with",
    "mx.rule": "Rules",
    "mx.ruleQ": "When you win or lose",
    "mx.take": "Takes",
    "mx.change": "Change",
    "mx.write": "Write",
    "mx.writeHint": "Describe it, e.g. a slingshot instead of a cannon",
    "mx.pick": "Pick a game",
    "mx.fromWorld": "Same as stage",
    "mx.portal": "Portal",
    "mx.portalW": "Every 5 levels, jump into another game’s stage",
    "mx.result": "This becomes",
    "mx.mix": "Mix",
    "mx.mixNote": "about {n} min · the AI team builds a playable prototype",
    "mx.preview": "Preview",
    "mx.noPreview": "A preview is made when you mix.",
    "mx.table": "Who handles what",
    "mx.row.world": "Stage and objects",
    "mx.row.control": "Controls",
    "mx.row.goal": "Win and lose",
    "mx.row.feel": "Game feel",
    "mx.row.meta": "Growth",
    "mx.fix": "AI suggestions",
    "mx.apply": "Apply",
    "mx.lib": "Games",
    "mx.asWorld": "Stage",
    "mx.asHero": "Hero",
    "mx.asRule": "Rules",
    "mx.presets": "Try a mix",
    "mx.dl": "{n} plays",
    "mx.started": "Mixing started.",
    "mx.drop": "Drop a game here"
  },
  ko: {
    "mx.title": "역할로 섞기",
    "mx.fromMix": "역할로 섞기",
    "mx.world": "무대",
    "mx.worldQ": "어디서 노나",
    "mx.hero": "주인공 · 조작",
    "mx.heroQ": "무엇으로 노나",
    "mx.rule": "규칙",
    "mx.ruleQ": "언제 이기고 지나",
    "mx.take": "가져오는 것",
    "mx.change": "바꾸기",
    "mx.write": "직접 적기",
    "mx.writeHint": "예) 대포 대신 새총, 3스테이지마다 보스",
    "mx.pick": "게임 고르기",
    "mx.fromWorld": "무대 게임 따라가기",
    "mx.portal": "포탈",
    "mx.portalW": "5레벨마다 다른 게임의 무대로 넘어가기",
    "mx.result": "이런 게임이 됩니다",
    "mx.mix": "섞기",
    "mx.mixNote": "약 {n}분 · AI 팀이 플레이되는 시제품을 만듭니다",
    "mx.preview": "미리보기",
    "mx.noPreview": "미리보기는 섞을 때 만들어요.",
    "mx.table": "누가 무엇을 맡나",
    "mx.row.world": "무대 · 오브젝트",
    "mx.row.control": "조작",
    "mx.row.goal": "이기고 지는 조건",
    "mx.row.feel": "손맛",
    "mx.row.meta": "성장",
    "mx.fix": "AI 맞추기 제안",
    "mx.apply": "적용",
    "mx.lib": "게임",
    "mx.asWorld": "무대로",
    "mx.asHero": "주인공으로",
    "mx.asRule": "규칙으로",
    "mx.presets": "이렇게 섞어 보기",
    "mx.dl": "플레이 {n}",
    "mx.started": "섞기를 시작했습니다.",
    "mx.drop": "여기로 끌어 놓기"
  }
});
const MIX = (() => {
  const R = (world, control, goal, feel, meta, act, obj) => ({ world, control, goal, feel, meta, act, obj });
  const ROLE = {
    bay: R(L("Block towers on a beach", "해변 위 블록 탑"), L("Aim and fire a cannon, limited balls", "대포 조준 · 발사(공 개수 제한)"), L("Smash every block before the balls run out", "공이 떨어지기 전에 블록 다 부수기"), L("Chunky breaks and debris", "블록이 와르르 무너지는 타격"), L("Decorate the resort", "리조트 꾸미기"), "shoot", "blocks"),
    "meow-smash": R(L("Store shelves stacked with cans", "캔이 쌓인 마트 진열대"), L("Paw cannon, drag to aim", "발바닥 대포 · 끌어서 조준"), L("Find and catch the hiding mice", "숨은 쥐 찾아 잡기"), L("3D physics collapse", "3D 물리로 쏟아지는 진열대"), L("Unlock new stores", "새 매장 열기"), "shoot", "blocks"),
    bulldozer: R(L("A mine you dig down into", "아래로 파고드는 광산"), L("Drive heavy machines, push and crush", "중장비 운전 · 밀고 부수기"), L("Dig ore, sell it, upgrade", "광석 캐서 팔고 업그레이드"), L("Ground cracking under the blade", "땅이 갈라지는 굴착감"), L("Bigger machines, deeper levels", "더 큰 장비 · 더 깊은 층"), "drive", "ore"),
    pizza: R(L("A pizza shop: kitchen, counter, tables", "피자 매장(주방 · 카운터 · 테이블)"), L("Walk and carry stacks", "걸어 다니며 쌓아 나르기"), L("Clear the queue, earn, expand", "손님 줄 비우고 돈 모아 확장"), L("Stacks growing in your hands", "손에 쌓이는 피자 더미"), L("New stations and staff", "새 설비 · 직원"), "carry", "service"),
    snake: R(L("A round arena", "원형 아레나"), L("Steer a snake that grows as it eats", "뱀 조종 · 먹을수록 길어짐"), L("Swallow smaller rivals, avoid bigger ones", "작은 상대 삼키고 큰 상대 피하기"), L("Gulping and growing", "꿀꺽 삼키며 커지는 맛"), L("Skins and starting length", "스킨 · 시작 길이"), "grow", "rivals"),
    "lucky-lucky": R(L("Plains swarmed by shape monsters", "도형 몬스터가 몰려오는 평원"), L("Roll a dice hero for powers", "주사위 영웅 · 굴리면 능력"), L("Survive waves, pick level-up cards", "웨이브 버티고 레벨업 카드 고르기"), L("Dice rolls and screen-clearing blasts", "주사위 판정 · 화면 쓸어버리기"), L("Hero upgrades between runs", "판마다 영웅 강화"), "auto", "enemies"),
    "last-rescue": R(L("An alien planet base", "외계 행성 기지"), L("Move; the gun fires on its own", "이동만 · 총은 자동 사격"), L("Rescue survivors and escape", "생존자 구하고 탈출"), L("Swarms melting under fire", "몰려오는 적이 녹아내림"), L("Weapons and squad", "무기 · 동료"), "auto", "enemies"),
    shark: R(L("An open ocean", "넓은 바다"), L("Swim and bite", "헤엄치며 물기"), L("Eat your way up the food chain", "먹이사슬 위로 올라가기"), L("Big bites, quick growth", "크게 물고 빠르게 크기"), L("New sharks", "새 상어"), "grow", "food"),
    slime: R(L("A city full of objects", "물건이 가득한 도시"), L("Roll a black-hole slime", "블랙홀 슬라임 굴리기"), L("Be the biggest when time runs out", "시간 끝날 때 가장 크기"), L("Everything getting sucked in", "모든 게 빨려 들어가는 맛"), L("Size and speed upgrades", "크기 · 속도 강화"), "grow", "food"),
    mosquito: R(L("An io arena", "io 아레나"), L("Fly and bite", "날아다니며 물기"), L("Outgrow everyone", "누구보다 커지기"), L("Quick bites", "톡톡 무는 맛"), L("Skins", "스킨"), "grow", "rivals"),
    "golden-blast": R(L("An 8×8 board", "8×8 판"), L("Drag blocks onto the board", "블록 끌어 놓기"), L("Clear lines, merge balls to gold", "줄 지우고 구슬 합쳐 금으로"), L("Line clears and merges", "줄이 터지고 합쳐지는 맛"), L("Higher tiers", "높은 등급"), "place", "blocks"),
    prison: R(L("A prison to run", "운영하는 감옥"), L("Walk around and manage", "걸어 다니며 관리"), L("Take in prisoners, earn, expand", "죄수 받고 돈 모아 확장"), L("Money stacks piling up", "쌓이는 돈 더미"), L("New wings and guards", "새 동 · 간수"), "carry", "service"),
    lumber: R(L("A forest and a sawmill", "숲과 제재소"), L("Chop and carry logs", "나무 베고 나르기"), L("Fill orders, expand the mill", "주문 채우고 공장 확장"), L("Trees toppling", "나무가 쓰러지는 맛"), L("Saws and workers", "톱 · 일꾼"), "carry", "ore"),
    downhill: R(L("A downhill course", "내리막 코스"), L("Steer left and right", "좌우로 조종"), L("Reach the finish, dodge obstacles", "장애물 피해 결승선"), L("Speed rush", "속도감"), L("Boards and riders", "보드 · 캐릭터"), "steer", "obstacles"),
    dino: R(L("A dinosaur island", "공룡 섬"), L("Lead a dinosaur pack", "공룡 무리 이끌기"), L("Explore and win battles", "탐험하고 전투 이기기"), L("Big stomps", "쿵쿵 밟는 맛"), L("Collect dinosaurs", "공룡 수집"), "auto", "enemies"),
    "animal-harbor": R(L("Seasonal islands and sea", "사계절 섬과 바다"), L("Sail and fish", "항해 · 낚시"), L("Catch fish, build up islands", "물고기 잡고 섬 꾸미기"), L("A tug on the line", "낚싯줄 손맛"), L("Boats and islands", "배 · 섬"), "steer", "food")
  };
  const games = () => GAMES.filter((g) => ROLE[g.key] && g.video);
  const FIX = {
    "shoot:ore": [L("Cannon shots break ore walls; broken ore drops coins", "대포로 광석 벽을 부수면 → 코인이 떨어지는 채굴로"), L("Each level digs one layer deeper", "레벨마다 한 층씩 더 깊이")],
    "shoot:service": [L("Shoot orders to customers instead of walking them over", "걸어 나르는 대신 손님에게 주문을 쏴서 배달"), L("Missed shots cost a tip", "빗나가면 팁이 줄어듦")],
    "shoot:enemies": [L("The cannon sits on a tower; enemies walk in waves", "대포를 탑 위에 · 적은 웨이브로 걸어옴"), L("Level-up cards upgrade the cannon", "레벨업 카드로 대포 강화")],
    "shoot:rivals": [L("Shoot to shrink rivals, then swallow them", "쏴서 상대를 줄인 뒤 삼키기"), L("Ammo grows with your size", "클수록 탄이 늘어남")],
    "shoot:food": [L("Shoot food to collect it from afar", "멀리 있는 먹이를 쏴서 모으기"), L("Bigger targets need more shots", "큰 먹이는 여러 발")],
    "grow:service": [L("The hero picks up orders as it moves; its body is the tray", "주인공이 돌아다니며 주문을 받아 배달 · 몸이 쟁반"), L("The bigger it grows, the more it carries", "클수록 한 번에 많이")],
    "grow:blocks": [L("Swallow blocks to grow, then smash towers", "블록을 삼켜 커진 뒤 탑을 부수기"), L("Time limit per level", "레벨마다 제한 시간")],
    "grow:ore": [L("Swallow ore while digging down", "파고들며 광석을 삼키기"), L("Size decides how hard a rock you can eat", "크기에 따라 먹을 수 있는 돌이 다름")],
    "grow:enemies": [L("Eat smaller monsters, flee bigger ones", "작은 몬스터는 먹고 큰 몬스터는 피하기"), L("Waves get bigger each level", "레벨마다 웨이브가 커짐")],
    "drive:blocks": [L("Bulldoze block towers instead of shooting", "쏘는 대신 블록 탑을 밀어 무너뜨리기"), L("Fuel limit instead of ball limit", "공 개수 대신 연료 제한")],
    "drive:service": [L("Drive deliveries between stations", "설비 사이를 운전해 배달"), L("Bigger vehicle carries more", "큰 장비일수록 많이")],
    "drive:enemies": [L("Push monsters off the map", "몬스터를 밀어서 떨어뜨리기"), L("Upgrade the blade between waves", "웨이브 사이에 삽날 강화")],
    "carry:ore": [L("Carry ore to the sell point by hand", "광석을 손으로 날라 판매대에"), L("Hire carriers when it gets busy", "바빠지면 운반 직원 고용")],
    "carry:blocks": [L("Carry blocks to build, then the cannon tests it", "블록을 날라 쌓고 → 대포로 시험"), L("Stacks wobble with height", "높을수록 흔들림")],
    "auto:blocks": [L("The hero fires on its own; you only steer", "영웅이 자동으로 쏘고 · 나는 이동만"), L("Blocks drop power-ups", "블록에서 강화 아이템")],
    "auto:service": [L("Auto-serve customers while you move", "움직이면 자동으로 손님 응대"), L("Upgrade cards between rushes", "손님 몰림 사이에 카드 강화")],
    "place:enemies": [L("Place blocks as walls against waves", "블록을 벽처럼 놓아 웨이브 막기"), L("Full lines fire at enemies", "줄을 채우면 적에게 발사")]
  };
  const fixesOf = (hero, world) => FIX[`${ROLE[hero].act}:${ROLE[world].obj}`] || [L("Keep the stage’s goal; the hero’s action scores it", "무대의 목표는 그대로 · 주인공 행동으로 점수"), L("Tune difficulty to the hero’s strength", "주인공 세기에 맞춰 난이도 조정")];
  const PRESETS = [
    { world: "bulldozer", hero: "meow-smash", rule: "bulldozer", img: "mix-cannon-mine.jpg", name: L("Mine Blaster", "마인 블래스터"), pitch: L("Blast your way down a mine with a cannon.", "대포로 광산을 부수며 아래로 파고드는 채굴 슈팅") },
    { world: "pizza", hero: "snake", rule: "pizza", img: "mix-snake-pizza.jpg", name: L("Pizza Snake", "피자 스네이크"), pitch: L("A snake delivers pizzas; the longer it gets, the more it carries.", "뱀이 매장을 돌며 배달 · 길어질수록 한 번에 많이") },
    { world: "lucky-lucky", hero: "bay", rule: "lucky-lucky", img: "mix-cannon-defense.jpg", name: L("Dice Cannon Defense", "주사위 대포 디펜스"), pitch: L("Hold off monster waves with a dice-loaded cannon.", "주사위 탄을 쏘는 대포로 몬스터 웨이브를 막기") }
  ];
  const st = { world: "bulldozer", hero: "meow-smash", rule: null, text: {}, writing: null, fixes: /* @__PURE__ */ new Set([0]), portal: false, family: "all" };
  const G = (k) => GAME[k];
  const preset = () => PRESETS.find((p) => p.world === st.world && p.hero === st.hero && (st.rule || st.world) === p.rule);
  function slot(key, q) {
    const k = key === "rule" ? st.rule || st.world : st[key];
    const g = G(k);
    const take = { world: ROLE[k].world, hero: ROLE[k].control, rule: ROLE[k].goal }[key];
    const writing = st.writing === key;
    return `<div class="mx-slot" data-slot="${key}">
      <header><span class="mx-n">${{ world: 1, hero: 2, rule: 3 }[key]}</span><div><b>${t(`mx.${key}`)}</b><span class="g">${t(q)}</span></div></header>
      <div class="mx-card" data-drop="${key}">${shot(g.cover, { cls: "mx-v", play: { video: g.video } })}<span class="mx-game">${gameIcon(g, "mx-ic")}<b>${esc(g.name)}</b>${key === "rule" && !st.rule ? `<span class="tag">${t("mx.fromWorld")}</span>` : ""}</span></div>
      <div class="mx-take"><span class="g">${t("mx.take")}</span><b>${tr(take)}</b></div>
      ${writing ? `<textarea class="input mx-text" rows="2" maxlength="200" placeholder="${t("mx.writeHint")}" data-text="${key}">${esc(st.text[key] || "")}</textarea>` : st.text[key] ? `<p class="mx-note">“${esc(st.text[key])}”</p>` : ""}
      <div class="mx-btns"><button class="btn small" data-pickfor="${key}">${t("mx.change")}</button><button class="btn small" data-write="${key}" aria-pressed="${writing}">${t("mx.write")}</button></div>
    </div>`;
  }
  function table() {
    const w = st.world, h = st.hero, r = st.rule || st.world;
    const rows = [["world", w, "world"], ["control", h, "control"], ["goal", r, "goal"], ["feel", h, "feel"], ["meta", w, "meta"]];
    return `<table class="mx-table"><tbody>${rows.map(([row, k, field]) => `<tr><th>${t(`mx.row.${row}`)}</th><td><span class="mx-who">${gameIcon(G(k), "mx-ic")}${esc(G(k).name)}</span></td><td>${tr(ROLE[k][field])}</td></tr>`).join("")}</tbody></table>`;
  }
  function render() {
    const p = preset();
    const fx = fixesOf(st.hero, st.world);
    const list = games().filter((g) => st.family === "all" || g.group === st.family);
    const fams = ["all", ...new Set(games().map((g) => g.group))];
    return `${backbar("#/make", t("mx.title"))}
      <div class="mx">
        <section class="mx-top">
          <div class="mx-slots">${slot("world", "mx.worldQ")}<i class="mx-x">×</i>${slot("hero", "mx.heroQ")}<i class="mx-x">+</i>${slot("rule", "mx.ruleQ")}</div>
          <aside class="mx-result">
            <h3>${t("mx.result")}</h3>
            ${p ? `<span class="mx-prev"><img src="${gen(p.img)}" alt=""><em>${t("mx.preview")}</em></span><b class="mx-name">${tr(p.name)}</b><p class="g">${tr(p.pitch)}</p>` : `<span class="mx-prev none">${[st.world, st.hero].map((k) => gameIcon(G(k), "mx-big")).join("<i>×</i>")}</span><b class="mx-name">${esc(G(st.world).name.split(/[:!]/)[0])} × ${esc(G(st.hero).name.split(/[:!]/)[0])}</b><p class="g">${t("mx.noPreview")}</p>`}
            <label class="mx-portal"><span><b>${t("mx.portal")}</b><span class="g">${t("mx.portalW")}</span></span><button class="switch" role="switch" aria-checked="${st.portal}" data-portal><i></i></button></label>
            <button class="btn primary big mx-go" data-mix>${ICON.spark}${t("mx.mix")}</button><span class="g mx-eta">${t("mx.mixNote", { n: 22 })}</span>
          </aside>
        </section>
        <section class="mx-mid">
          <div class="mx-box"><h3>${t("mx.table")}</h3>${table()}</div>
          <div class="mx-box"><h3>${t("mx.fix")}</h3><ul class="mx-fixes">${fx.map((f, i) => `<li><span>${ICON.spark}${tr(f)}</span><button class="switch" role="switch" aria-checked="${st.fixes.has(i)}" data-fix="${i}"><i></i></button></li>`).join("")}</ul>
            <h4>${t("mx.presets")}</h4><div class="mx-presets">${PRESETS.map((x, i) => `<button class="mx-preset ${x === p ? "on" : ""}" data-preset="${i}"><img src="${gen(x.img)}" alt=""><span><b>${tr(x.name)}</b><span class="g">${esc(G(x.world).name.split(/[:!]/)[0])} × ${esc(G(x.hero).name.split(/[:!]/)[0])}</span></span></button>`).join("")}</div></div>
        </section>
        <section class="mx-lib">
          <div class="mx-lib-head"><h3>${t("mx.lib")}</h3><span class="chips">${fams.map((f) => `<button class="chip" data-fam="${f}" aria-pressed="${st.family === f}">${f === "all" ? t("all") : tr(FAMILIES[f]?.name || (f === "casual" ? L("Casual", "캐주얼") : L(f, f)))}</button>`).join("")}</span></div>
          <div class="mx-grid">${list.map((g) => `<div class="mx-g ${[st.world, st.hero, st.rule].includes(g.key) ? "in" : ""}" draggable="true" data-drag="${g.key}">
              ${shot(g.cover, { cls: "mx-v", play: { video: g.video } })}
              <span class="mx-game">${gameIcon(g, "mx-ic")}<b>${esc(g.name)}</b></span>
              <span class="mx-as">${["world", "hero", "rule"].map((k) => `<button data-as="${k}:${g.key}" aria-pressed="${(k === "rule" ? st.rule : st[k]) === g.key}">${t(`mx.as${k[0].toUpperCase()}${k.slice(1)}`)}</button>`).join("")}</span>
            </div>`).join("")}</div>
        </section>
      </div>`;
  }
  function set(key, k) {
    if (key === "rule") st.rule = k === st.world ? null : k;
    else st[key] = k;
    st.fixes = /* @__PURE__ */ new Set([0]);
    rerender();
  }
  function mount(root) {
    const on = (sel, fn) => root.querySelectorAll(sel).forEach((b) => b.addEventListener("click", (e) => fn(b, e)));
    on("[data-as]", (b) => {
      const [key, k] = b.dataset.as.split(":");
      set(key, k);
    });
    on("[data-pickfor]", (b) => {
      root.querySelector(".mx-lib").scrollIntoView({ behavior: "smooth", block: "start" });
      root.querySelector(".mx-lib").dataset.for = b.dataset.pickfor;
    });
    on("[data-write]", (b) => {
      st.writing = st.writing === b.dataset.write ? null : b.dataset.write;
      rerender();
      setTimeout(() => root.querySelector("[data-text]")?.focus(), 0);
    });
    root.querySelectorAll("[data-text]").forEach((ta) => {
      ta.addEventListener("input", () => {
        st.text[ta.dataset.text] = ta.value;
      });
      ta.addEventListener("blur", () => {
        st.writing = null;
        rerender();
      });
    });
    on("[data-fix]", (b) => {
      const i = Number(b.dataset.fix);
      if (!st.fixes.delete(i)) st.fixes.add(i);
      b.setAttribute("aria-checked", String(st.fixes.has(i)));
    });
    on("[data-portal]", (b) => {
      st.portal = !st.portal;
      b.setAttribute("aria-checked", String(st.portal));
    });
    on("[data-fam]", (b) => {
      st.family = b.dataset.fam;
      rerender();
    });
    on("[data-preset]", (b) => {
      const p = PRESETS[Number(b.dataset.preset)];
      Object.assign(st, { world: p.world, hero: p.hero, rule: p.rule === p.world ? null : p.rule, fixes: /* @__PURE__ */ new Set([0]) });
      rerender();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    on("[data-mix]", () => {
      const p = preset();
      dialog({
        title: t("mx.mix"),
        body: `<div class="mx-confirm">${table()}<p class="g">${t("mx.mixNote", { n: 22 })}</p></div>`,
        actions: [{ label: t("cancel") }, { label: t("mx.mix"), primary: true, onClick: () => {
          toast(t("mx.started"));
          go(`#/make/board?game=${st.world}&fresh=1&demo=build${p ? "" : ""}`);
        } }]
      });
    });
    root.querySelectorAll("[data-drag]").forEach((c) => {
      c.querySelectorAll("img, video").forEach((m) => {
        m.draggable = false;
      });
      c.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", c.dataset.drag);
        e.dataTransfer.effectAllowed = "copy";
      });
    });
    root.querySelectorAll("[data-drop]").forEach((d) => {
      d.addEventListener("dragover", (e) => {
        e.preventDefault();
        d.classList.add("over");
      });
      d.addEventListener("dragleave", () => d.classList.remove("over"));
      d.addEventListener("drop", (e) => {
        e.preventDefault();
        const k = e.dataTransfer.getData("text/plain");
        if (ROLE[k]) set(d.dataset.drop, k);
      });
    });
    hoverVideo(root);
  }
  route("/make/mix", { section: "make", name: "mix", render, mount });
  return { ROLE, PRESETS };
})();
