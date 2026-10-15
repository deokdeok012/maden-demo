const ALL = ["puzzle", "action", "simulation", "casual"];
const opt = (name, what, why, { from = null, fit = [], use = 0 } = {}) => ({ name, what, why, from, fit, use });
const FEATURE_SPECS = {
  titlescreen: {
    use: 97,
    rise: 0,
    what: L("The first thing shown when the game opens, before the lobby.", "게임을 켜면 로비 전에 처음 나오는 화면."),
    settings: [
      { key: "intro", name: L("Intro", "인트로 방식"), options: [
        opt(L("Message", "문구"), L("The logo with one short line under it.", "로고 아래에 짧은 문구 한 줄이 나옵니다."), L("The wait feels shorter and the game gets a voice.", "기다림이 짧게 느껴지고 게임에 말투가 생깁니다."), { from: "Meowdoku", fit: ["puzzle", "simulation", "casual"], use: 46 }),
        opt(L("Video", "영상"), L("A short clip of the game plays while it loads.", "로딩하는 동안 짧은 게임 영상이 나옵니다."), L("Shows the game before the first tap. Fits games with strong characters.", "첫 터치 전에 게임을 보여 줍니다. 캐릭터가 강한 게임에 맞습니다."), { fit: ["action"], use: 21 }),
        opt(L("Logo only", "로고만"), L("The logo and a progress bar.", "로고와 진행 막대만 나옵니다."), L("Fastest way to the lobby.", "로비까지 가장 빠릅니다."), { fit: [], use: 33 })
      ] },
      { key: "loading", name: L("Message", "문구"), options: [
        opt(L("One line per session", "세션당 한 줄"), L("One message is picked at launch and stays for at least 2.5 seconds.", "앱을 켤 때 문구 하나를 뽑아 최소 2.5초 보여 줍니다."), L("The wait feels shorter and the game gets a voice.", "기다림이 짧게 느껴지고 게임에 말투가 생깁니다."), { from: "Meowdoku", fit: ["puzzle", "simulation"], use: 61 }),
        opt(L("By time of day", "시간대별"), L("Morning, afternoon and evening each have their own set of messages.", "아침·오후·저녁마다 다른 문구 묶음을 씁니다."), L("Feels like the game knows the player’s day.", "게임이 내 하루를 아는 것처럼 느껴집니다."), { from: "Amaze GO!", fit: ["casual", "action"], use: 39 }),
        opt(L("Quotes and mascot lines", "명언과 캐릭터 문구"), L("Two sets of lines: calm quotes, and lines in the mascot’s voice.", "차분한 명언 묶음과 캐릭터 말투의 문구 묶음, 두 가지를 씁니다."), L("A healing tone for players who open the game to rest.", "쉬려고 게임을 켜는 사람에게 맞는 힐링 톤입니다."), { from: "Meowdoku", fit: [], use: 28 })
      ] },
      { key: "hold", name: L("Minimum time", "최소 노출 시간"), options: [
        opt(L("2.5 seconds", "2.5초"), L("Stays for at least 2.5 seconds even when loading is faster.", "로딩이 빨리 끝나도 최소 2.5초 보여 줍니다."), L("Long enough to read one line.", "문구 한 줄을 읽을 수 있는 시간입니다."), { from: "Meowdoku", fit: ["puzzle", "simulation", "casual"], use: 52 }),
        opt(L("Until loaded", "로딩이 끝날 때까지"), L("Moves on as soon as loading ends.", "로딩이 끝나면 바로 넘어갑니다."), L("No extra wait.", "기다림이 늘지 않습니다."), { fit: ["action"], use: 48 })
      ] }
    ]
  },
  lobby: {
    use: 92,
    rise: 1,
    what: L("The first screen after loading. Players start a level from here.", "로딩 뒤 처음 나오는 화면. 여기서 레벨을 시작합니다."),
    settings: [
      { key: "lives", name: L("Lives", "하트"), options: [
        opt(L("No hearts", "하트 없음"), L("Players can start a level any time.", "언제든 레벨을 시작할 수 있습니다."), L("Longer sessions. Fits games that earn from ads.", "세션이 길어집니다. 광고로 버는 게임에 맞습니다."), { fit: ["action", "casual", "simulation"], use: 58 }),
        opt(L("5 hearts, 1 back every 20 min", "하트 5개, 20분마다 1개 충전"), L("A failed level costs a heart. At zero, the player waits or watches an ad.", "레벨에 실패하면 하트가 줄고, 0개면 기다리거나 광고를 봅니다."), L("Sessions end on their own and players return later. Sells refills.", "세션이 자연스럽게 끝나고 나중에 다시 옵니다. 충전을 팔 수 있습니다."), { fit: ["puzzle"], use: 42 })
      ] },
      { key: "layout", name: L("Layout", "구성"), options: [
        opt(L("Big play button", "큰 시작 버튼"), L("One large button starts the next level. Tabs along the bottom lead to the other screens.", "큰 버튼 하나로 다음 레벨을 시작합니다. 아래 탭으로 다른 화면에 갑니다."), L("Nothing to learn. Players are back in a level in one tap.", "배울 것이 없습니다. 한 번 눌러 바로 레벨로 돌아갑니다."), { from: "Royal Match", fit: ["puzzle", "casual"], use: 54 }),
        opt(L("The level map is the lobby", "레벨 지도가 곧 로비"), L("The game opens on the path of levels. Tap the next one to play.", "레벨이 이어진 길에서 게임이 열립니다. 다음 레벨을 눌러 시작합니다."), L("Progress is always in view.", "얼마나 왔는지가 항상 보입니다."), { from: "Candy Crush Saga", fit: [], use: 23 }),
        opt(L("A place that grows", "꾸며 가는 공간"), L("The lobby is a room, garden or town that changes as the player progresses.", "로비가 방·정원·마을이고, 진행할수록 모습이 바뀝니다."), L("Gives a reason to keep playing beyond the levels.", "레벨 말고도 계속할 이유가 생깁니다."), { from: "Gardenscapes", fit: ["simulation", "action"], use: 23 })
      ] }
    ]
  },
  levelmap: {
    use: 61,
    rise: 4,
    what: L("A path of levels. Shows how far the player has come.", "레벨이 이어진 길. 어디까지 왔는지 보여 줍니다."),
    settings: [
      { key: "path", name: L("Progress", "진행 방식"), options: [
        opt(L("One path", "한 줄 진행"), L("Clear a level to open the next one.", "레벨을 깨면 다음 레벨이 열립니다."), L("Nothing to decide. Players always know what to do next.", "고민할 게 없습니다. 다음에 할 일이 항상 분명합니다."), { fit: ALL, use: 72 }),
        opt(L("Chapters with star gates", "별이 필요한 챕터"), L("Each chapter opens when the player has enough stars.", "별을 일정 수 모으면 다음 챕터가 열립니다."), L("Players replay old levels for stars. More play from the same levels.", "별을 모으려고 지난 레벨을 다시 합니다. 같은 레벨로 플레이가 늘어납니다."), { fit: [], use: 28 })
      ] },
      { key: "entry", name: L("Before a level", "레벨 시작 전"), options: [
        opt(L("Clear rate from level 11", "레벨 11부터 통과율 표시"), L('Shows a line like "72% cleared this on the first try". The number stays the same for that level.', '"72%가 첫 판에 통과" 같은 문구를 보여 줍니다. 같은 레벨에서는 숫자가 바뀌지 않습니다.'), L("Sets the mood for hard levels and makes a retry feel normal.", "어려운 레벨의 긴장감을 만들고, 재도전을 당연하게 느끼게 합니다."), { from: "Meowdoku", fit: ["puzzle", "casual"], use: 54 }),
        opt(L("Nothing", "표시 없음"), L("The level starts right away.", "레벨이 바로 시작됩니다."), L("Fastest start. Fits very short levels.", "가장 빨리 시작합니다. 아주 짧은 레벨에 맞습니다."), { fit: ["action", "simulation"], use: 46 })
      ] }
    ]
  },
  leaderboard: {
    use: 37,
    rise: 9,
    what: L("Shows the player’s place among other players.", "다른 플레이어 사이에서 내 순위를 보여 줍니다."),
    settings: [
      { key: "rivals", name: L("Rivals", "경쟁 상대"), options: [
        opt(L("Simulated players", "가상 플레이어"), L("49 simulated players. Their scores rise along a 24-hour curve. No server.", "가상 플레이어 49명의 점수가 24시간 곡선을 따라 오릅니다. 서버가 필요 없습니다."), L("The board is full on day one, even when the game has few players.", "플레이어가 적은 출시 첫날에도 순위표가 꽉 찹니다."), { from: "Meowdoku", fit: ALL, use: 64 }),
        opt(L("Real players", "실제 플레이어"), L("Ranks real players by score. Needs a server and enough daily players.", "실제 플레이어를 점수로 줄 세웁니다. 서버와 충분한 일일 플레이어가 필요합니다."), L("Real competition. Works once the game has an audience.", "진짜 경쟁입니다. 플레이어가 모인 뒤에 효과가 납니다."), { fit: [], use: 36 })
      ] },
      { key: "pace", name: L("Reaching first place", "1등까지"), options: [
        opt(L("About 5 plays", "약 5판"), L("When the player passes the baseline, rivals stop climbing. Only the top 10 follow, always 2 points behind.", "플레이어가 기준 점수를 넘으면 경쟁자들이 멈춥니다. 상위 10명만 따라오고 항상 2점 뒤에 있습니다."), L("New players taste first place early and come back the next day.", "새 플레이어가 일찍 1등을 경험하고 다음 날 다시 옵니다."), { from: "Meowdoku", fit: ["puzzle", "casual", "simulation"], use: 57 }),
        opt(L("All round long", "끝까지 경쟁"), L("Rivals keep climbing until the round ends. First place can be lost.", "경쟁자들이 라운드가 끝날 때까지 오릅니다. 1등을 뺏길 수 있습니다."), L("Rewards long play. Fits games where players stay for hours.", "오래 하는 플레이어에게 보상합니다. 오래 붙잡는 게임에 맞습니다."), { fit: ["action"], use: 43 })
      ] },
      { key: "round", name: L("Round", "라운드"), options: [
        opt(L("24 hours per player", "플레이어마다 24시간"), L("The round starts when the player first plays, not at midnight.", "자정이 아니라 플레이어가 처음 플레이한 순간부터 24시간입니다."), L("Nobody joins late. Everyone gets a full round.", "늦게 들어와 손해 보는 사람이 없습니다."), { from: "Meowdoku", fit: ALL, use: 46 }),
        opt(L("Weekly league", "주간 리그"), L("30 players per league, Monday to Sunday. The top 5 move up.", "리그당 30명, 월요일부터 일요일까지. 상위 5명이 승급합니다."), L("A longer goal that builds a weekly habit.", "더 긴 목표로 주 단위 습관을 만듭니다."), { fit: [], use: 31 })
      ] },
      { key: "unlock", name: L("Opens", "열리는 때"), options: [
        opt(L("After level 10", "레벨 10 통과 후"), L("Ranking appears right after the player clears level 10.", "레벨 10을 통과한 직후에 랭킹이 나타납니다."), L("Players learn the game first, then get a reason to keep going.", "게임을 먼저 익히고, 그다음 계속할 이유가 생깁니다."), { from: "Meowdoku", fit: ALL, use: 68 }),
        opt(L("From the first play", "첫 판부터"), L("Ranking is on from the start.", "처음부터 랭킹이 켜져 있습니다."), L("Fits games where score is the whole point.", "점수 경쟁이 전부인 게임에 맞습니다."), { fit: [], use: 32 })
      ] }
    ]
  },
  daily: {
    use: 74,
    rise: 3,
    what: L("A reward for coming back every day.", "매일 돌아오면 주는 보상입니다."),
    settings: [
      { key: "earn", name: L("How to earn", "받는 조건"), options: [
        opt(L("Clear 1 level a day", "하루 1판 통과"), L("The streak goes up on the first clear of the day. Opening the app is not enough.", "그날 첫 통과에서 연속 일수가 오릅니다. 접속만으로는 오르지 않습니다."), L("Rewards playing, not logging in.", "접속이 아니라 플레이에 보상합니다."), { from: "Meowdoku", fit: ALL, use: 55 }),
        opt(L("Open the app", "접속만"), L("The reward is given when the app opens.", "앱을 열면 보상을 줍니다."), L("Easiest to understand. Players may collect and leave.", "가장 이해하기 쉽습니다. 받고 바로 나갈 수 있습니다."), { fit: [], use: 45 })
      ] },
      { key: "miss", name: L("Missed day", "하루 놓치면"), options: [
        opt(L("Streak resets", "연속 초기화"), L("Skip a full day and the streak goes back to 1.", "하루를 통째로 건너뛰면 연속 일수가 1로 돌아갑니다."), L("Strongest daily habit.", "매일 오는 습관이 가장 강하게 생깁니다."), { from: "Meowdoku", fit: ["puzzle", "casual"], use: 52 }),
        opt(L("Restore with an ad", "광고로 복구"), L("One missed day can be restored by watching an ad.", "놓친 하루는 광고를 보고 되살릴 수 있습니다."), L("Players who slip once do not quit. Adds ad views.", "한 번 놓친 플레이어가 그만두지 않습니다. 광고 시청이 늘어납니다."), { fit: ["action", "simulation"], use: 48 })
      ] },
      { key: "cycle", name: L("Reward", "보상"), options: [
        opt(L("Every 7 days", "7일마다"), L("Two items of two kinds on day 7, 14, 21 and so on. The amount does not grow.", "7·14·21일 차마다 아이템 2종을 2개씩 줍니다. 양은 늘지 않습니다."), L("Easy to balance. The economy does not inflate.", "밸런스를 잡기 쉽고 재화가 불어나지 않습니다."), { from: "Meowdoku", fit: ["puzzle"], use: 41 }),
        opt(L("Every day, bigger on day 7", "매일, 7일 차에 크게"), L("A small reward each day and a big one on day 7.", "매일 작은 보상, 7일 차에 큰 보상을 줍니다."), L("Something to collect every day.", "매일 받을 것이 있습니다."), { fit: ["action", "simulation", "casual"], use: 59 })
      ] }
    ]
  },
  shop: {
    use: 68,
    rise: 2,
    what: L("Where players buy items and offers.", "아이템과 상품을 사는 곳입니다."),
    settings: [
      { key: "currency", name: L("Currency", "재화"), options: [
        opt(L("Coins only", "코인만"), L("Everything is bought with coins earned in play.", "플레이로 번 코인으로만 삽니다."), L("No pressure to pay. Fits games that earn from ads.", "결제 압박이 없습니다. 광고로 버는 게임에 맞습니다."), { fit: ["casual", "action"], use: 38 }),
        opt(L("Coins and gems", "코인과 젬"), L("Coins come from play. Gems are bought with money.", "코인은 플레이로, 젬은 결제로 얻습니다."), L("Adds in-app purchases as a second income.", "인앱 결제가 두 번째 수익이 됩니다."), { fit: ["puzzle", "simulation"], use: 62 })
      ] },
      { key: "offer", name: L("First offer", "첫 상품"), options: [
        opt(L("Starter pack", "스타터 팩"), L("A one-time discounted pack shown on the first visit.", "첫 방문에 한 번만 보이는 할인 묶음입니다."), L("The easiest first purchase to say yes to.", "첫 결제를 가장 쉽게 만듭니다."), { fit: ["puzzle", "simulation", "action"], use: 71 }),
        opt(L("No special offer", "특별 상품 없음"), L("The shop shows the regular list only.", "일반 목록만 보여 줍니다."), L("Simplest shop. Nothing to time or balance.", "가장 단순합니다. 맞출 것이 없습니다."), { fit: ["casual"], use: 29 })
      ] }
    ]
  },
  seasonpass: {
    use: 41,
    rise: 12,
    what: L("A track of rewards that fills up over a season.", "시즌 동안 채워 가는 보상 줄입니다."),
    settings: [
      { key: "length", name: L("Season length", "시즌 길이"), options: [
        opt(L("28 days", "28일"), L("One season a month, 30 tiers.", "한 달에 한 시즌, 30단계."), L("Enough time for casual players to finish.", "가볍게 하는 플레이어도 끝낼 수 있습니다."), { fit: ["puzzle", "simulation"], use: 57 }),
        opt(L("14 days", "14일"), L("Two seasons a month, 20 tiers.", "한 달에 두 시즌, 20단계."), L("New rewards arrive faster. Fits short, intense games.", "새 보상이 더 빨리 옵니다. 짧고 강한 게임에 맞습니다."), { fit: ["action", "casual"], use: 43 })
      ] },
      { key: "tracks", name: L("Tracks", "보상 줄"), options: [
        opt(L("Free and paid", "무료와 유료"), L("Everyone gets the free track. The paid track adds more on each tier.", "모두 무료 줄을 받고, 유료 줄은 단계마다 보상이 더 붙습니다."), L("Free players stay engaged. The paid track sells itself as it fills.", "무료 플레이어도 계속 하고, 채워질수록 유료 줄이 사고 싶어집니다."), { fit: ALL, use: 78 }),
        opt(L("Free only", "무료만"), L("One track for everyone.", "모두에게 한 줄만 있습니다."), L("A pure retention tool, with no purchase.", "결제 없이 복귀만을 위한 장치입니다."), { fit: [], use: 22 })
      ] }
    ]
  },
  quest: {
    use: 55,
    rise: 5,
    what: L("Small tasks with rewards.", "보상이 있는 작은 할 일입니다."),
    settings: [
      { key: "refresh", name: L("How many", "개수"), options: [
        opt(L("3 a day", "하루 3개"), L("Three tasks every day, new at midnight.", "매일 3개, 자정에 새로 나옵니다."), L("Gives a short session a clear goal.", "짧은 세션에 분명한 목표를 줍니다."), { fit: ALL, use: 63 }),
        opt(L("7 a week", "주 7개"), L("A set of seven tasks, new every Monday.", "7개 묶음, 매주 월요일에 새로 나옵니다."), L("Players can catch up on a busy week.", "바쁜 주에도 몰아서 할 수 있습니다."), { fit: [], use: 37 })
      ] },
      { key: "swap", name: L("Changing a task", "할 일 바꾸기"), options: [
        opt(L("Swap one with an ad", "광고로 1개 교체"), L("One task a day can be swapped by watching an ad.", "하루 한 번 광고를 보고 할 일 하나를 바꿉니다."), L("Players are not stuck on a task they dislike. Adds ad views.", "싫은 할 일에 막히지 않습니다. 광고 시청이 늘어납니다."), { fit: ["casual", "action", "simulation"], use: 49 }),
        opt(L("No swap", "교체 없음"), L("Tasks stay until done or replaced.", "끝내거나 새로 나올 때까지 그대로입니다."), L("Simplest. Nothing to explain.", "가장 단순합니다. 설명할 것이 없습니다."), { fit: ["puzzle"], use: 51 })
      ] }
    ]
  },
  event: {
    use: 48,
    rise: 7,
    what: L("A limited-time challenge with its own rewards.", "기간 한정 도전과 전용 보상입니다."),
    settings: [
      { key: "timing", name: L("When", "기간"), options: [
        opt(L("Weekends", "주말"), L("Friday to Sunday, every week.", "매주 금요일부터 일요일까지."), L("Runs when players have the most time.", "플레이어가 가장 여유 있을 때 열립니다."), { fit: ["puzzle", "casual"], use: 44 }),
        opt(L("72 hours", "72시간"), L("Starts any day and runs for three days.", "아무 날에나 시작해 3일간 열립니다."), L("Short enough to feel urgent.", "짧아서 놓치기 싫게 만듭니다."), { fit: ["action", "simulation"], use: 56 })
      ] },
      { key: "goal", name: L("Goal", "목표"), options: [
        opt(L("Collect in levels", "레벨에서 모으기"), L("Event items drop in normal levels. Milestones give rewards.", "일반 레벨에서 이벤트 아이템이 나오고, 구간마다 보상을 줍니다."), L("No new gameplay to learn. Players just play more.", "새로 배울 게 없습니다. 그냥 더 하게 됩니다."), { fit: ALL, use: 66 }),
        opt(L("Race", "경주"), L("Five players race to clear the most levels.", "5명이 누가 레벨을 더 많이 깨는지 겨룹니다."), L("Adds competition without a full ranking.", "랭킹 없이도 경쟁이 생깁니다."), { fit: [], use: 34 })
      ] }
    ]
  },
  story: {
    use: 23,
    rise: 6,
    what: L("Dialogue scenes that tie levels together.", "레벨 사이를 잇는 대화 장면입니다."),
    settings: [
      { key: "when", name: L("Appears", "나오는 때"), options: [
        opt(L("Every 5 levels", "5레벨마다"), L("A short scene after every fifth level.", "다섯 레벨마다 짧은 장면이 나옵니다."), L("A steady reason to play the next few levels.", "다음 몇 판을 할 이유가 꾸준히 생깁니다."), { fit: ["puzzle", "simulation"], use: 58 }),
        opt(L("End of each chapter", "챕터 끝마다"), L("A longer scene when a chapter is cleared.", "챕터를 끝내면 긴 장면이 나옵니다."), L("Fewer interruptions during play.", "플레이 중 끊김이 적습니다."), { fit: ["action", "casual"], use: 42 })
      ] },
      { key: "skip", name: L("Skipping", "건너뛰기"), options: [
        opt(L("Can be skipped", "건너뛸 수 있음"), L("A Skip button is always shown.", "건너뛰기 버튼이 항상 보입니다."), L("Players who only want the game are not held back.", "게임만 하고 싶은 플레이어를 붙잡지 않습니다."), { fit: ALL, use: 81 }),
        opt(L("Shown once in full", "처음 한 번은 끝까지"), L("The first viewing cannot be skipped.", "처음 볼 때는 건너뛸 수 없습니다."), L("Everyone sees the story the game depends on.", "게임에 꼭 필요한 이야기를 모두가 봅니다."), { fit: [], use: 19 })
      ] }
    ]
  },
  charselect: {
    use: 29,
    rise: -2,
    what: L("Players pick who they play as.", "플레이할 캐릭터를 고릅니다."),
    settings: [
      { key: "unlock", name: L("Unlock", "해금"), options: [
        opt(L("With coins", "코인으로"), L("Characters are bought with coins earned in play.", "플레이로 번 코인으로 캐릭터를 삽니다."), L("Gives coins a purpose.", "코인을 쓸 곳이 생깁니다."), { fit: ["casual", "puzzle"], use: 46 }),
        opt(L("By level", "레벨로"), L("A new character opens every 10 levels.", "10레벨마다 새 캐릭터가 열립니다."), L("A reward for progress, with nothing to pay.", "결제 없이 진행에 대한 보상이 됩니다."), { fit: ["simulation"], use: 24 }),
        opt(L("With ads", "광고로"), L("Watch 3 ads to open a character.", "광고 3번을 보면 캐릭터가 열립니다."), L("Earns from players who never pay.", "결제하지 않는 플레이어에게서도 수익이 납니다."), { fit: ["action"], use: 30 })
      ] },
      { key: "effect", name: L("Difference", "차이"), options: [
        opt(L("Looks only", "모습만"), L("Characters play the same.", "어떤 캐릭터든 플레이는 같습니다."), L("Nothing to balance.", "밸런스를 맞출 것이 없습니다."), { fit: ["casual", "puzzle", "simulation"], use: 61 }),
        opt(L("One skill each", "캐릭터마다 스킬 1개"), L("Each character has one skill that changes play.", "캐릭터마다 플레이를 바꾸는 스킬이 하나 있습니다."), L("A reason to collect and switch.", "모으고 바꿔 쓸 이유가 생깁니다."), { fit: ["action"], use: 39 })
      ] }
    ]
  },
  adreward: {
    use: 81,
    rise: 1,
    what: L("Players choose to watch an ad for a reward.", "플레이어가 원해서 광고를 보고 보상을 받습니다."),
    settings: [
      { key: "when", name: L("When to offer", "권하는 때"), options: [
        opt(L("When stuck", "막혔을 때"), L("Offered after 15 seconds without a move, or after 3 restarts.", "15초 동안 움직임이 없거나 3번 다시 시작하면 권합니다."), L("Help arrives at the moment players want it.", "도움이 필요한 순간에 나타납니다."), { from: "Amaze GO!", fit: ["puzzle"], use: 47 }),
        opt(L("After each level", "레벨이 끝날 때마다"), L("Offered on the result screen.", "결과 화면에서 권합니다."), L("The most views. Players are already pausing there.", "시청 수가 가장 많습니다. 어차피 쉬는 순간입니다."), { fit: ["action", "casual", "simulation"], use: 53 })
      ] },
      { key: "reward", name: L("Reward", "보상"), options: [
        opt(L("Double the level reward", "레벨 보상 2배"), L("The coins from the level are doubled.", "그 레벨에서 번 코인을 2배로 줍니다."), L("Always worth it, so players say yes often.", "항상 이득이라 자주 봅니다."), { fit: ["simulation", "casual", "action"], use: 52 }),
        opt(L("A free hint", "무료 힌트"), L("One hint for the current level.", "지금 레벨에서 쓸 힌트 하나를 줍니다."), L("Keeps stuck players from leaving.", "막힌 플레이어가 떠나지 않게 합니다."), { fit: ["puzzle"], use: 27 }),
        opt(L("Continue once", "한 번 이어하기"), L("Carry on from where the run ended.", "끝난 자리에서 이어서 합니다."), L("Strongest pull when a good run is at stake.", "잘 풀리던 판이 걸려 있을 때 가장 보고 싶어집니다."), { fit: [], use: 21 })
      ] },
      { key: "limit", name: L("Limit", "횟수 제한"), options: [
        opt(L("5 a day", "하루 5회"), L("The offer stops after five views.", "5번 보면 더 권하지 않습니다."), L("The reward stays valuable.", "보상의 가치가 유지됩니다."), { fit: ["puzzle", "simulation"], use: 44 }),
        opt(L("No limit", "제한 없음"), L("Offered every time.", "매번 권합니다."), L("Most ad income per player.", "플레이어당 광고 수익이 가장 큽니다."), { fit: ["action", "casual"], use: 56 })
      ] }
    ]
  },
  invite: {
    use: 18,
    rise: -4,
    what: L("Players bring friends and both get a reward.", "친구를 데려오면 둘 다 보상을 받습니다."),
    settings: [
      { key: "when", name: L("Reward is given", "보상 시점"), options: [
        opt(L("When the friend reaches level 5", "친구가 레벨 5에 도달하면"), L("Both get the reward after the friend clears level 5.", "친구가 레벨 5를 통과하면 둘 다 보상을 받습니다."), L("Only friends who really play count.", "실제로 플레이한 친구만 인정됩니다."), { fit: ALL, use: 58 }),
        opt(L("On install", "설치하면"), L("Both get the reward when the friend installs.", "친구가 설치하면 둘 다 보상을 받습니다."), L("Fastest reward. Easier to abuse.", "보상이 가장 빠릅니다. 악용하기도 쉽습니다."), { fit: [], use: 42 })
      ] },
      { key: "limit", name: L("Limit", "인원 제한"), options: [
        opt(L("Up to 10 friends", "친구 10명까지"), L("Rewards stop after ten invites.", "10명 이후로는 보상이 없습니다."), L("Keeps the economy in check.", "재화가 과하게 풀리지 않습니다."), { fit: ALL, use: 67 }),
        opt(L("No limit", "제한 없음"), L("Every invite gives a reward.", "초대할 때마다 보상을 줍니다."), L("Rewards the few players who bring many.", "많이 데려오는 소수에게 보상합니다."), { fit: [], use: 33 })
      ] }
    ]
  }
};
const HAPTIC = { key: "haptic", name: L("Haptics", "햅틱"), options: [
  opt(L("Strong on rewards only", "보상 때만 강하게"), L("The phone vibrates once, strongly, when a reward is given.", "보상을 받을 때만 한 번 강하게 진동합니다."), L("The reward stands out because nothing else vibrates.", "다른 때는 울리지 않아 보상이 더 두드러집니다."), { fit: ["puzzle", "simulation"], use: 44 }),
  opt(L("Light tap on every button", "버튼마다 가볍게"), L("A short, light vibration on each button press.", "버튼을 누를 때마다 짧고 약하게 진동합니다."), L("Buttons feel real. Fits fast games.", "버튼이 실제로 눌리는 느낌이 납니다. 빠른 게임에 맞습니다."), { fit: ["action", "casual"], use: 38 }),
  opt(L("Off", "끔"), L("No vibration.", "진동이 없습니다."), L("Fits calm games. Uses less battery.", "차분한 게임에 맞습니다. 배터리를 덜 씁니다."), { use: 18 })
] };
for (const spec of Object.values(FEATURE_SPECS)) spec.rules = [...spec.settings, HAPTIC];
const ALWAYS = ["titlescreen", "lobby"];
const MODES = {
  stage: { name: L("Stage mode", "스테이지 모드"), features: ["levelmap", "daily", "adreward", "shop"] },
  endless: { name: L("Endless mode", "무한 모드"), features: ["leaderboard", "daily", "adreward"] },
  timeAttack: { name: L("Time attack", "타임 어택"), features: ["leaderboard", "adreward", "event"] },
  daily: { name: L("Daily challenge", "일일 도전"), features: ["daily", "leaderboard", "quest"] },
  boss: { name: L("Boss stages", "보스 스테이지"), features: ["levelmap", "shop", "charselect", "event"] },
  pvp: { name: L("Real-time match", "실시간 대전"), features: ["leaderboard", "seasonpass", "charselect", "invite"] },
  duel: { name: L("1v1 duel", "1대1 대결"), features: ["leaderboard", "charselect", "invite"] },
  league: { name: L("League", "리그 경쟁"), features: ["leaderboard", "seasonpass", "event"] },
  tournament: { name: L("Tournament", "토너먼트"), features: ["leaderboard", "event", "seasonpass", "invite"] },
  waves: { name: L("Wave survival", "웨이브 생존"), features: ["lobby", "charselect", "shop", "adreward"] },
  run: { name: L("Roguelike run", "로그라이크 런"), features: ["lobby", "charselect", "seasonpass", "shop"] },
  campaign: { name: L("Campaign", "캠페인"), features: ["levelmap", "story", "shop", "quest"] },
  story: { name: L("Story chapters", "스토리 챕터"), features: ["story", "levelmap", "daily"] },
  idle: { name: L("Idle progress", "방치 진행"), features: ["lobby", "quest", "shop", "adreward"] },
  expand: { name: L("Expand and upgrade", "확장 진행"), features: ["lobby", "quest", "shop", "adreward"] },
  orders: { name: L("Orders", "주문 처리"), features: ["lobby", "quest", "daily", "shop"] },
  collect: { name: L("Collection", "수집 진행"), features: ["lobby", "quest", "charselect", "event"] },
  career: { name: L("Career", "커리어"), features: ["levelmap", "charselect", "shop", "quest"] },
  sandbox: { name: L("Free play", "자유 모드"), features: ["lobby", "shop", "adreward"] },
  coop: { name: L("Co-op", "협동"), features: ["invite", "quest", "leaderboard", "lobby"] }
};
const FAMILIES = {
  puzzle: { name: L("Puzzle", "퍼즐"), modes: ["stage", "endless", "timeAttack", "daily", "league", "story"] },
  action: { name: L("Action", "액션"), modes: ["waves", "run", "stage", "pvp", "boss", "endless"] },
  simulation: { name: L("Simulation", "시뮬레이션"), modes: ["expand", "idle", "orders", "story", "collect", "sandbox"] },
  arcade: { name: L("Arcade", "아케이드"), modes: ["endless", "stage", "timeAttack", "duel", "tournament", "daily"] },
  strategy: { name: L("Strategy", "전략"), modes: ["campaign", "pvp", "league", "idle", "collect", "coop"] },
  board: { name: L("Board and card", "보드·카드"), modes: ["stage", "daily", "duel", "tournament", "endless", "league"] }
};
const genre = (key, family, en, ko, local = [], modes = null) => ({ key, family, name: L(en, ko), n: 0, share: 0, rise: 0, gross: 0, ...MARKET.genres[key] || {}, local, modes: modes || FAMILIES[family].modes });
const GENRES = [
  genre("match3", "puzzle", "Match 3", "매치 3", ["guitar"], ["stage", "story", "daily", "league", "timeAttack", "endless"]),
  genre("blockPuzzle", "puzzle", "Block puzzle", "블록 퍼즐", ["golden-blast"], ["endless", "daily", "timeAttack", "stage", "league", "story"]),
  genre("merge", "puzzle", "Merge", "머지", ["seaside"], ["story", "stage", "endless", "daily", "league", "timeAttack"]),
  genre("sort", "puzzle", "Sort", "정렬"),
  genre("pixel", "puzzle", "Pixel puzzle", "픽셀 퍼즐"),
  genre("screw", "puzzle", "Screw puzzle", "나사 퍼즐"),
  genre("jam", "puzzle", "Jam escape", "탈출 퍼즐"),
  genre("tileMatch", "puzzle", "Tile match", "타일 매치"),
  genre("physics", "puzzle", "Physics puzzle", "물리 퍼즐", ["bay", "meow-smash"]),
  genre("tapAway", "puzzle", "Tap away", "탭 어웨이", ["arrow"]),
  genre("jigsaw", "puzzle", "Jigsaw", "직소", ["bubble-pop"]),
  genre("bubble", "puzzle", "Bubble shooter", "버블 슈터"),
  genre("word", "puzzle", "Word", "단어"),
  genre("number", "puzzle", "Number puzzle", "숫자 퍼즐", [], ["stage", "daily", "endless", "timeAttack", "league", "story"]),
  genre("hidden", "puzzle", "Hidden object", "숨은 그림"),
  genre("brain", "puzzle", "Brain teaser", "두뇌 퀴즈"),
  genre("draw", "puzzle", "Draw puzzle", "그리기 퍼즐"),
  genre("connect", "puzzle", "Connect", "선 잇기"),
  genre("coloring", "puzzle", "Coloring", "색칠", [], ["stage", "daily", "story", "endless", "league", "timeAttack"]),
  genre("survivor", "action", "Survivor", "서바이버", ["lucky-lucky", "last-rescue"], ["waves", "run", "boss", "stage", "endless", "pvp"]),
  genre("io", "action", ".io arena", ".io 아레나", ["snake", "mosquito"], ["pvp", "endless", "run", "boss", "stage", "waves"]),
  genre("runner", "action", "Runner", "러너", ["paper"], ["endless", "stage", "run", "pvp", "boss", "waves"]),
  genre("shooter", "action", "Shooter", "슈터"),
  genre("growth", "action", "Eat and grow", "흡수 성장", ["slime", "shark"], ["stage", "endless", "pvp", "boss", "run", "waves"]),
  genre("actionRpg", "action", "Action RPG", "액션 RPG", ["xp-hero", "bolt-bots"], ["run", "stage", "boss", "waves", "pvp", "endless"]),
  genre("collectionRpg", "action", "Collection RPG", "수집 RPG", ["dino"]),
  genre("defense", "action", "Tower defense", "타워 디펜스", [], ["waves", "pvp", "stage", "boss", "endless", "run"]),
  genre("party", "action", "Party battle", "파티 대전", [], ["pvp", "stage", "run", "boss", "endless", "waves"]),
  genre("stickman", "action", "Stickman battle", "스틱맨 전투"),
  genre("stealth", "action", "Stealth", "잠입"),
  genre("arcadeIdle", "simulation", "Arcade idle", "아케이드 아이들", ["pizza", "cafe"]),
  genre("idleTycoon", "simulation", "Idle tycoon", "방치형 타이쿤", ["prison", "lumber"], ["idle", "expand", "collect", "story", "orders", "sandbox"]),
  genre("management", "simulation", "Management", "경영", ["themepark"]),
  genre("mining", "simulation", "Mining", "채굴", ["bulldozer"], ["idle", "expand", "collect", "story", "orders", "sandbox"]),
  genre("farming", "simulation", "Farm", "농장"),
  genre("cooking", "simulation", "Cooking", "요리", [], ["orders", "expand", "story", "idle", "collect", "sandbox"]),
  genre("asmr", "simulation", "ASMR", "ASMR", ["jelly"], ["sandbox", "orders", "collect", "expand", "story", "idle"]),
  genre("makeover", "simulation", "Makeover", "메이크오버", [], ["story", "orders", "collect", "expand", "sandbox", "idle"]),
  genre("dressUp", "simulation", "Dress up", "꾸미기", ["unnie"], ["collect", "story", "orders", "sandbox", "expand", "idle"]),
  genre("diy", "simulation", "DIY craft", "DIY", [], ["orders", "sandbox", "collect", "expand", "story", "idle"]),
  genre("cleaning", "simulation", "Cleaning", "청소", [], ["orders", "expand", "sandbox", "collect", "story", "idle"]),
  genre("decor", "simulation", "Home design", "인테리어", [], ["story", "orders", "collect", "expand", "sandbox", "idle"]),
  genre("pet", "simulation", "Pet care", "펫 케어", [], ["sandbox", "collect", "story", "orders", "expand", "idle"]),
  genre("life", "simulation", "Life sim", "라이프 시뮬", [], ["sandbox", "story", "collect", "expand", "orders", "idle"]),
  genre("job", "simulation", "Job sim", "직업 체험", [], ["orders", "story", "expand", "collect", "sandbox", "idle"]),
  genre("racing", "arcade", "Racing", "레이싱", ["downhill"], ["career", "duel", "timeAttack", "tournament", "endless", "daily"]),
  genre("stack", "arcade", "Stack", "쌓기"),
  genre("ball", "arcade", "Ball rolling", "볼 굴리기"),
  genre("sports", "arcade", "Sports", "스포츠", [], ["duel", "tournament", "career", "stage", "timeAttack", "daily"]),
  genre("rhythm", "arcade", "Rhythm", "리듬"),
  genre("jump", "arcade", "Jump", "점프"),
  genre("timing", "arcade", "Timing", "타이밍"),
  genre("fishing", "arcade", "Fishing", "낚시", ["animal-harbor"], ["stage", "endless", "tournament", "duel", "daily", "timeAttack"]),
  genre("clicker", "arcade", "Clicker", "클리커", [], ["endless", "stage", "daily", "tournament", "timeAttack", "duel"]),
  genre("mergeBattle", "strategy", "Merge battle", "머지 배틀"),
  genre("army", "strategy", "Army clash", "군단 전투"),
  genre("conquer", "strategy", "Conquer", "영토 점령"),
  genre("cardBattle", "strategy", "Card battle", "카드 배틀", [], ["pvp", "league", "campaign", "collect", "coop", "idle"]),
  genre("idleRpg", "strategy", "Idle RPG", "방치형 RPG", [], ["idle", "campaign", "collect", "pvp", "league", "coop"]),
  genre("build", "strategy", "Builder", "건설", [], ["campaign", "idle", "collect", "coop", "pvp", "league"]),
  genre("solitaire", "board", "Solitaire", "솔리테어"),
  genre("mahjong", "board", "Mahjong", "마작"),
  genre("board", "board", "Board", "보드", [], ["duel", "tournament", "stage", "daily", "league", "endless"]),
  genre("trivia", "board", "Trivia", "퀴즈", [], ["duel", "daily", "tournament", "stage", "league", "endless"])
];
