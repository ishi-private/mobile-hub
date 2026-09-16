// POKÉTOON まとめデータ
// 出典: 公式YouTube再生リスト「POKÉTOON」(ポケモン公式YouTubeチャンネル作成)
//   https://www.youtube.com/playlist?list=PLBE2D9BnJJUoFiRz8ZjF2KToAirHYn1Ru
// 公開日は各動画ページの itemprop="datePublished" から取得しJSTに変換したもの。
// 登場ポケモンは各動画の説明文(shortDescription)から特定。
// 2026-09-15時点で確認できた全22話（主題歌PV1本を除く）。詳細は reports/2026-09-15_matome-pages.md 参照。
window.POKETOON_DATA = {
  officialPlaylistUrl: "https://www.youtube.com/playlist?list=PLBE2D9BnJJUoFiRz8ZjF2KToAirHYn1Ru",
  officialPlaylistLabel: "POKÉTOON（ポケモン公式YouTubeチャンネル作成の公式再生リスト）",
  episodes: [
    { no: 1,  date: "2020-06-05", title: "ズルッグとミミッキュ", videoId: "u909_O6CqYc", pokemon: "ズルッグ・ミミッキュ" },
    { no: 2,  date: "2021-06-02", title: "ヒーローになりたいヤンチャム", videoId: "J-3lxsr5CYc", pokemon: "ヤンチャム" },
    { no: 3,  date: "2021-06-04", title: "ユメノツボミ", videoId: "rKSDGz9iAgU", pokemon: "要確認（キャスト表記が人間キャラのみ）" },
    { no: 4,  date: "2021-07-02", title: "まっててね！コイキング", videoId: "H81MSo_3DqA", pokemon: "コイキング" },
    { no: 5,  date: "2021-08-05", title: "ぽかぽかマグマッグハウス", videoId: "kvXocHmMKQc", pokemon: "マグマッグ" },
    { no: 6,  date: "2021-09-10", title: "ゲンガーになっちゃった！？", videoId: "4vXdJ8-LZdY", pokemon: "ゲンガー" },
    { no: 7,  date: "2021-10-08", title: "ふぶきのなつやすみ", videoId: "5MCz_wSzing", pokemon: "ユキワラシ" },
    { no: 8,  date: "2021-12-28", title: "プリンのうた", videoId: "Bp3adZrf8DI", pokemon: "プリン" },
    { no: 9,  date: "2024-09-18", title: "パモパモットパーモット！", videoId: "ihXrE0ScO3o", pokemon: "パモ・パモット・パーモット" },
    { no: 10, date: "2024-09-25", title: "怒りのオコリザル観察日記", videoId: "LvlwKAv15XU", pokemon: "オコリザル" },
    { no: 11, date: "2024-10-02", title: "ドオー大量発生ちゅう？", videoId: "GVrt8M1N_LU", pokemon: "ウパー（パルデアのすがた）・ドオー" },
    { no: 12, date: "2024-10-09", title: "ゴーゴートに乗って", videoId: "RyBqruMX3YU", pokemon: "ゴーゴート" },
    { no: 13, date: "2024-10-16", title: "コアルヒーだいすき！", videoId: "8aDaj1rbvuw", pokemon: "コアルヒー" },
    { no: 14, date: "2024-10-23", title: "ラッキーなサファリでおにごっこ！？", videoId: "bz4jIS_9hGQ", pokemon: "ラッキー" },
    { no: 15, date: "2024-10-30", title: "Romanticスパイス カプサイジ伝説", videoId: "9lauvhz6BZY", pokemon: "カプサイジ" },
    { no: 16, date: "2024-11-20", title: "幼なじみのカルボウ", videoId: "D53XrHaS80g", pokemon: "カルボウ（2匹）" },
    { no: 17, date: "2025-02-14", title: "ヤミカラスと真夜中のぼうけん", videoId: "z7xYi_0Rxmg", pokemon: "ヤミカラス・ヒノアラシ・エイパム" },
    { no: 18, date: "2025-10-03", title: "めがはなせないね ガルーラ", videoId: "jfNr2Gju2Mk", pokemon: "ガルーラ" },
    { no: 19, date: "2025-10-24", title: "明日もサーナイトと", videoId: "1JtuxmEiYl4", pokemon: "サーナイト" },
    { no: 20, date: "2026-02-13", title: "うたう！おどる！チルタリス！", videoId: "yhfecM7xb2E", pokemon: "チルット・チルタリス・メガチルタリス" },
    { no: 21, date: "2026-08-12", title: "カメールと、夏のつづき", videoId: "F5NMAZYSWUQ", pokemon: "カメール" },
    { no: 22, date: "2026-08-19", title: "いたずらエルフーンとさせるかマフィティフ", videoId: "IQxeKyq7GfE", pokemon: "エルフーン・マフィティフ" }
  ],
  // 話数一覧には含めない関連動画（本編ではないもの）
  related: [
    { title: "「ヤミカラスと真夜中のぼうけん」主題歌｜Eve「Midnight Runway」", videoId: "A2f9vYgp1eA", note: "17話の主題歌PV" }
  ]
};
