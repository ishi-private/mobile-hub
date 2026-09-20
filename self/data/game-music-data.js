// ゲーム音楽まとめのデータ（手編集用）。game-music.html がこの配列から表を描画する。
//
// 記載ルール:
//   - 作曲者・年・機種・場面は出典（日本語版/英語版Wikipedia等）で確認できたものだけを書く。
//     出典に場面の記載がない曲は scene を "" にする（表では「—」表示）。記憶だけで書かない。
//   - 画像は各ゲームの公式サイトのOGP画像を直接参照（ホットリンク）。推測でURLを組み立てない。
//   - 視聴リンクは動画URLを推測せず、q（検索語）からYouTube検索リンクを生成する。
//
// フィールド（ゲーム）:
//   id, title, year, platform, note(任意), image, imageCredit(出典サイト名), tracks[]
// フィールド（曲）:
//   name(曲名), composer(作曲者), scene(場面・備考), q(YouTube検索語)
window.GAME_MUSIC_DATA = [
  {
    id: "smb", title: "スーパーマリオブラザーズ", year: 1985, platform: "ファミコン",
    image: "https://www.nintendo.com/jp/character/mario/common/img/common/og_mario.png?unoptimized=true",
    imageCredit: "nintendo.com（マリオ公式・シリーズ画像）",
    tracks: [
      { name: "地上BGM", composer: "近藤浩治", scene: "地上ステージ", q: "スーパーマリオブラザーズ 地上BGM" },
      { name: "地下BGM", composer: "近藤浩治", scene: "地下ステージ", q: "スーパーマリオブラザーズ 地下BGM" },
      { name: "水中BGM", composer: "近藤浩治", scene: "水中ステージ", q: "スーパーマリオブラザーズ 水中BGM" }
    ]
  },
  {
    id: "dq", title: "ドラゴンクエスト", year: 1986, platform: "ファミコン",
    image: "https://cache-www.dragonquest.jp/img/common/ogp2019.png",
    imageCredit: "dragonquest.jp（公式）",
    tracks: [
      { name: "序曲（ロトのテーマ）", composer: "すぎやまこういち", scene: "シリーズを象徴する序曲。東京オリンピック開会式（2021年）で各国入場行進曲として使用された", q: "ドラゴンクエスト 序曲 すぎやまこういち" }
    ]
  },
  {
    id: "zelda", title: "ゼルダの伝説", year: 1986, platform: "ファミコン ディスクシステム",
    image: "https://www.nintendo.com/jp/zelda/totk/sns.png",
    imageCredit: "nintendo.com（ゼルダ公式・最新作の画像）",
    tracks: [
      { name: "メインテーマ", composer: "近藤浩治", scene: "フィールド（オーバーワールド）", q: "ゼルダの伝説 メインテーマ 1986 近藤浩治" }
    ]
  },
  {
    id: "ct", title: "クロノ・トリガー", year: 1995, platform: "スーパーファミコン",
    note: "音楽: 光田康典・植松伸夫・松枝賀子",
    image: "https://www.jp.square-enix.com/chronotrigger/twitter_card.jpg",
    imageCredit: "square-enix.com（公式）",
    tracks: [
      { name: "クロノ・トリガー（メインテーマ）", composer: "光田康典", scene: "", q: "クロノ・トリガー メインテーマ 光田康典" },
      { name: "カエルのテーマ", composer: "光田康典", scene: "", q: "クロノ・トリガー カエルのテーマ" },
      { name: "時の回廊", composer: "光田康典", scene: "", q: "クロノ・トリガー 時の回廊" },
      { name: "風の憧憬", composer: "光田康典", scene: "", q: "クロノ・トリガー 風の憧憬" }
    ]
  },
  {
    id: "ff7", title: "ファイナルファンタジーVII", year: 1997, platform: "PlayStation",
    image: "https://www.jp.square-enix.com/ffvii_remake/_assets/img/common/sns.png",
    imageCredit: "square-enix.com（FF7リメイク公式・リメイク版の画像）",
    tracks: [
      { name: "片翼の天使", composer: "植松伸夫", scene: "ラスボス（セフィロス）戦", q: "FF7 片翼の天使 植松伸夫" },
      { name: "エアリスのテーマ", composer: "植松伸夫", scene: "エアリスのテーマ曲", q: "FF7 エアリスのテーマ" }
    ]
  },
  {
    id: "xc1", title: "ゼノブレイド", year: 2010, platform: "Wii（曲目はディフィニティブ・エディションのサントラ）",
    note: "曲目は『ゼノブレイド ディフィニティブ・エディション オリジナル・サウンドトラック』（DE版の音源。曲名の「Definitive Edition ver.」表記は省略）。作曲者「ACE+」は公式表記どおり",
    image: "https://www.nintendo.com/jp/games/switch2/aubqb/sns.png",
    imageCredit: "nintendo.com（ゼノブレイド ディフィニティブ・エディション Switch 2 Edition 公式）",
    tracks: [
      { name: "メインテーマ", composer: "下村陽子", scene: "", q: "ゼノブレイド メインテーマ" },
      { name: "戦闘!", composer: "下村陽子", scene: "編曲: 成田勤（DE版）／戦闘曲（曲名より）", q: "ゼノブレイド 戦闘!" },
      { name: "敵の猛追", composer: "ACE+", scene: "編曲: 平松建治（DE版）", q: "ゼノブレイド 敵の猛追" },
      { name: "敵との対峙", composer: "ACE+", scene: "編曲: 平松建治（DE版）／公式の作曲者紹介で「ドラマチックな曲」に挙げられている", q: "ゼノブレイド 敵との対峙" },
      { name: "未来視発動", composer: "ACE+", scene: "編曲: 平松建治（DE版）", q: "ゼノブレイド 未来視発動" },
      { name: "名を冠する者たち", composer: "ACE+", scene: "編曲: 平松建治（DE版）／公式の作曲者紹介で「熱いバトル曲」に挙げられている", q: "ゼノブレイド 名を冠する者たち" },
      { name: "機の律動", composer: "ACE+", scene: "編曲: 平松建治（DE版）／公式の作曲者紹介で「熱いバトル曲」に挙げられている", q: "ゼノブレイド 機の律動" },
      { name: "機神界フィールド", composer: "ACE+", scene: "編曲: 平松建治（DE版）／公式の作曲者紹介で「フィールド曲」に挙げられている", q: "ゼノブレイド 機神界フィールド" },
      { name: "帝都アグニラータ", composer: "ACE+", scene: "編曲: 平松建治（DE版）／公式の作曲者紹介で「フィールド曲」に挙げられている", q: "ゼノブレイド 帝都アグニラータ" }
    ]
  },
  {
    id: "minecraft", title: "Minecraft", year: 2011, platform: "PC ほか",
    note: "音楽は『Minecraft – Volume Alpha』（2011年3月4日）収録",
    image: "https://www.minecraft.net/content/dam/minecraftnet/franchise/logos/minecraft-creeper-face.jpg",
    imageCredit: "minecraft.net（公式）",
    tracks: [
      { name: "Sweden", composer: "C418（Daniel Rosenfeld）", scene: "サウンドトラックで最も人気の曲", q: "Minecraft Sweden C418" },
      { name: "Wet Hands", composer: "C418（Daniel Rosenfeld）", scene: "", q: "Minecraft Wet Hands C418" }
    ]
  },
  {
    id: "xcx", title: "ゼノブレイドクロス", year: 2015, platform: "Wii U",
    note: "曲目は『XenobladeX Original Soundtrack』（作曲: 澤野弘之。日本語版Wikipedia）。曲名は原題表記で、曲目表はXeno Series Wikiによる",
    image: "https://www.nintendo.com/jp/games/switch2/bas6a/sns.png?2602",
    imageCredit: "nintendo.com（ゼノブレイドクロス ディフィニティブエディション Switch 2 Edition 公式）",
    tracks: [
      { name: "Black tar", composer: "澤野弘之", scene: "Disc 2 の1曲目。公式ブックレットに歌詞が掲載", q: "ゼノブレイドクロス Black tar" },
      { name: "Uncontrollable", composer: "澤野弘之", scene: "Disc 2 の4曲目。公式ブックレットに歌詞が掲載", q: "ゼノブレイドクロス Uncontrollable" },
      { name: "Your Voice", composer: "澤野弘之", scene: "Disc 1 の12曲目。公式ブックレットに歌詞が掲載", q: "ゼノブレイドクロス Your Voice" }
    ]
  },
  {
    id: "undertale", title: "UNDERTALE", year: 2015, platform: "PC（Windows/macOS）",
    image: "https://UNDERTALE.com/assets/images/social-logo.png",
    imageCredit: "undertale.com（公式）",
    tracks: [
      { name: "MEGALOVANIA", composer: "Toby Fox", scene: "sans戦。MOTHER 2のROMハックやHomestuckで使われた曲のアレンジ", q: "UNDERTALE MEGALOVANIA" },
      { name: "Hopes and Dreams", composer: "Toby Fox", scene: "アズリエル戦", q: "UNDERTALE Hopes and Dreams" }
    ]
  },
  {
    id: "p5", title: "ペルソナ5", year: 2016, platform: "PS3 / PS4",
    image: "https://p5r.jp/resources/img/ogp_20190424.jpg",
    imageCredit: "p5r.jp（ペルソナ5 ザ・ロイヤル公式）",
    tracks: [
      { name: "Last Surprise", composer: "目黒将司", scene: "戦闘BGM", q: "ペルソナ5 Last Surprise" }
    ]
  },
  {
    id: "nier", title: "NieR:Automata", year: 2017, platform: "PS4",
    image: "https://www.jp.square-enix.com/nierautomata/ogimage.png",
    imageCredit: "square-enix.com（公式）",
    tracks: [
      { name: "Weight of the World", composer: "岡部啓一（MONACA）", scene: "メインテーマ。エンディングごとに版が異なる（英語版・日本語版「壊レタ世界ノ歌」など）", q: "NieR Automata Weight of the World" }
    ]
  },
  {
    id: "xc2", title: "ゼノブレイド2", year: 2017, platform: "Nintendo Switch",
    note: "音楽: 光田康典・ACE（工藤ともり、CHiCO）・平松建治・清田愛未（公式サントラ曲目ページ）",
    image: "https://www.nintendo.com/jp/switch/adena/sns.png?20171107",
    imageCredit: "nintendo.com（ゼノブレイド2 公式）",
    tracks: [
      { name: "Xenoblade II - Where It All Began -", composer: "光田康典", scene: "", q: "ゼノブレイド2 Xenoblade II - Where It All Began -" },
      { name: "Elysium, in the Blue Sky", composer: "光田康典", scene: "", q: "ゼノブレイド2 Elysium, in the Blue Sky" },
      { name: "アヴァリティア商会", composer: "ACE（工藤ともり、CHiCO）", scene: "", q: "ゼノブレイド2 アヴァリティア商会" },
      { name: "バーンのテーマ", composer: "平松建治", scene: "", q: "ゼノブレイド2 バーンのテーマ" },
      { name: "Incoming!", composer: "ACE（工藤ともり、CHiCO）", scene: "", q: "ゼノブレイド2 Incoming!" },
      { name: "グーラ領", composer: "ACE（工藤ともり、CHiCO）", scene: "", q: "ゼノブレイド2 グーラ領" },
      { name: "戦闘!!", composer: "平松建治", scene: "戦闘曲（曲名より）", q: "ゼノブレイド2 戦闘!!" },
      { name: "トリゴの街", composer: "ACE（工藤ともり、CHiCO）", scene: "", q: "ゼノブレイド2 トリゴの街" },
      { name: "人相書きとニア", composer: "ACE（工藤ともり、CHiCO）", scene: "", q: "ゼノブレイド2 人相書きとニア" },
      { name: "巨神獣戦艦", composer: "ACE（工藤ともり、CHiCO）", scene: "", q: "ゼノブレイド2 巨神獣戦艦" },
      { name: "Monster Surprised You", composer: "平松建治", scene: "", q: "ゼノブレイド2 Monster Surprised You" },
      { name: "死闘イーラ", composer: "ACE（工藤ともり、CHiCO）", scene: "", q: "ゼノブレイド2 死闘イーラ" },
      { name: "インヴィディア烈王国", composer: "平松建治", scene: "公式の作曲者紹介で「フィールド曲」に挙げられている", q: "ゼノブレイド2 インヴィディア烈王国" },
      { name: "行く手を阻む者たち", composer: "ACE（工藤ともり、CHiCO）", scene: "", q: "ゼノブレイド2 行く手を阻む者たち" },
      { name: "Drifting Soul", composer: "ACE（工藤ともり、CHiCO）", scene: "歌入り（作詞: 高橋哲哉／ボーカル: Jen Bird）", q: "ゼノブレイド2 Drifting Soul" },
      { name: "Counterattack", composer: "平松建治", scene: "公式の作曲者紹介で「ドラマチックな曲」に挙げられている", q: "ゼノブレイド2 Counterattack" },
      { name: "さらに名を冠する者たち", composer: "平松建治", scene: "", q: "ゼノブレイド2 さらに名を冠する者たち" },
      { name: "ドライバー VS", composer: "ACE（工藤ともり、CHiCO）", scene: "", q: "ゼノブレイド2 ドライバー VS" },
      { name: "スペルビア帝国 ～赤土を駆け抜けて～", composer: "平松建治", scene: "公式の作曲者紹介で「フィールド曲」に挙げられている", q: "ゼノブレイド2 スペルビア帝国 ～赤土を駆け抜けて～" },
      { name: "雷轟！アルティメット", composer: "ACE（工藤ともり、CHiCO）", scene: "", q: "ゼノブレイド2 雷轟！アルティメット" },
      { name: "Our Eternal Land", composer: "光田康典", scene: "歌入り（作詞: 高橋哲哉／ボーカル: ANÚNA）", q: "ゼノブレイド2 Our Eternal Land" },
      { name: "We Are the Chosen Ones", composer: "光田康典", scene: "編曲: マリアム・アボンナサー／歌入り（作詞: 高橋哲哉／ボーカル: ANÚNA）", q: "ゼノブレイド2 We Are the Chosen Ones" },
      { name: "迫りくる危機", composer: "ACE（工藤ともり、CHiCO）", scene: "", q: "ゼノブレイド2 迫りくる危機" },
      { name: "ルクスリア王国", composer: "ACE（工藤ともり、CHiCO）", scene: "", q: "ゼノブレイド2 ルクスリア王国" },
      { name: "それでも、前へ進め！", composer: "平松建治", scene: "公式の作曲者紹介で「熱いバトル曲」に挙げられている", q: "ゼノブレイド2 それでも、前へ進め！" },
      { name: "モルスの地", composer: "ACE（工藤ともり、CHiCO）", scene: "", q: "ゼノブレイド2 モルスの地" },
      { name: "ユグドラシル", composer: "光田康典", scene: "編曲: マリアム・アボンナサー", q: "ゼノブレイド2 ユグドラシル" },
      { name: "Battle in the Skies Above", composer: "ACE（工藤ともり、CHiCO）", scene: "戦闘曲（曲名より）", q: "ゼノブレイド2 Battle in the Skies Above" },
      { name: "White All Around Us", composer: "光田康典", scene: "編曲: マリアム・アボンナサー", q: "ゼノブレイド2 White All Around Us" },
      { name: "One Last You", composer: "光田康典", scene: "歌入り（作詞: 高橋哲哉／ボーカル: Jen Bird）", q: "ゼノブレイド2 One Last You" }
    ]
  },
  {
    id: "xc2ira", title: "ゼノブレイド2 黄金の国イーラ", year: 2018, platform: "Nintendo Switch（拡張パス）",
    note: "『ゼノブレイド2 黄金の国イーラ オリジナル・サウンドトラック』の曲目",
    image: "https://www.nintendo.com/jp/games/switch2/adeng/sns.png",
    imageCredit: "nintendo.com（ゼノブレイド2 Switch 2 Edition 公式）",
    tracks: [
      { name: "二人の時間の始まり", composer: "光田康典", scene: "編曲: マリアム・アボンナサー", q: "ゼノブレイド2 黄金の国イーラ 二人の時間の始まり" },
      { name: "戦闘!!/イーラ", composer: "平松建治", scene: "公式の作曲者紹介で「熱いバトル曲」（戦闘!!イーラ）に挙げられている", q: "ゼノブレイド2 黄金の国イーラ 戦闘!!/イーラ" },
      { name: "A Moment of Eternity", composer: "光田康典", scene: "歌入り（作詞: 高橋哲哉／ボーカル: Jen Bird）", q: "ゼノブレイド2 黄金の国イーラ A Moment of Eternity" }
    ]
  },
  {
    id: "xc3", title: "ゼノブレイド3", year: 2022, platform: "Nintendo Switch",
    note: "『ゼノブレイド3 オリジナル・サウンドトラック』の曲目",
    image: "https://www.nintendo.com/jp/switch/az3ha/sns.png",
    imageCredit: "nintendo.com（ゼノブレイド3 公式）",
    tracks: [
      { name: "おくりびと", composer: "光田康典", scene: "", q: "ゼノブレイド3 おくりびと" },
      { name: "戦場 ～命の奪い合い", composer: "光田康典", scene: "編曲: マリアム・アボンナサー", q: "ゼノブレイド3 戦場 ～命の奪い合い" },
      { name: "Keves Battle", composer: "平松建治", scene: "戦闘曲（曲名より）", q: "ゼノブレイド3 Keves Battle" },
      { name: "Chain Attack", composer: "平松建治", scene: "公式の作曲者紹介で「熱いバトル曲」に挙げられている", q: "ゼノブレイド3 Chain Attack" }
    ]
  }
];
