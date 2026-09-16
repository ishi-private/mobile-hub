// アニメ『ポケットモンスター』OP/ED まとめデータ（TVシリーズのみ、劇場版は対象外）
// 時系列（放送日）順に、OP/EDを列として並べた形式。period=放送日、epLabel=話数または編名（副次情報）。
// 出典（5件をクロスチェック。詳細・不整合の報告は reports/2026-09-16_op-ed-cross-check.md 参照）:
//  1. 日本語版Wikipedia 各シリーズ記事「オープニングテーマ」「エンディングテーマ」「各話リスト」節（一次データソース、放送日・話数・歌手を採用）
//  2. Bulbapedia "List of Japanese opening themes" / "List of Japanese ending themes"（話数境界のクロスチェック）
//  3. TICKET JAM「TVアニメ・劇場版『ポケットモンスター』歴代OP・ED主題歌 全121曲を一挙紹介」（歌手表記のクロスチェック）
//  4. ピクシブ百科事典「アニポケ関連曲一覧」（話数・尺のクロスチェック）
//  5. Oricon/歌ネット/うたてん等の音楽データベース複数（金沢明子表記の確認等、個別ファクトチェック）
window.OP_ED_DATA = {
  groups: [
    {
      series: "第1シリーズ", work: "ポケットモンスター",
      rows: [
        { period: "1997-04-01", epLabel: "第1話〜", opTitle: "めざせポケモンマスター", opVocal: "松本梨香", edTitle: "ひゃくごじゅういち", edVocal: "石塚運昇とポケモンキッズ" },
        { period: "1997-10-14", epLabel: "第29話〜", opTitle: "めざせポケモンマスター", opVocal: "松本梨香", edTitle: "ニャースのうた", edVocal: "犬山イヌコ" },
        { period: "1997-12-16", epLabel: "第38話〜", opTitle: "めざせポケモンマスター", opVocal: "松本梨香", edTitle: "ポケットにファンタジー", edVocal: "さち&じゅり" },
        { period: "1998-07-16", epLabel: "第54話〜", opTitle: "めざせポケモンマスター", opVocal: "松本梨香", edTitle: "ポケモン音頭", edVocal: "ガルーラ小林" },
        { period: "1998-10-05", epLabel: "第65話〜", opTitle: "めざせポケモンマスター", opVocal: "松本梨香", edTitle: "ニャースのうた（アンコール）", edVocal: "犬山イヌコ" },
        { period: "1998-11-05", epLabel: "第71話〜", opTitle: "めざせポケモンマスター", opVocal: "松本梨香", edTitle: "タイプ：ワイルド", edVocal: "松本梨香" },
        { period: "1999-01-28", epLabel: "第83話〜", opTitle: "ライバル!", opVocal: "松本梨香", edTitle: "タイプ：ワイルド", edVocal: "松本梨香" },
        { period: "1999-07-15", epLabel: "第106話〜", opTitle: "ライバル!", opVocal: "松本梨香", edTitle: "ポケモン音頭（アンコール）", edVocal: "ガルーラ小林" },
        { period: "1999-07-22", epLabel: "第107話〜", opTitle: "ライバル!", opVocal: "松本梨香", edTitle: "ラプラスにのって", edVocal: "飯塚雅弓・愛河里花子" },
        { period: "1999-10-14", epLabel: "第119話〜", opTitle: "OK!", opVocal: "松本梨香", edTitle: "ニャースのパーティ", edVocal: "犬山イヌコ・林原めぐみ・三木眞一郎" },
        { period: "2000-04-06", epLabel: "第144話〜", opTitle: "OK!", opVocal: "松本梨香", edTitle: "ポケモンはらはらリレー", edVocal: "愛河里花子" },
        { period: "2000-06-15", epLabel: "第154話〜", opTitle: "OK!", opVocal: "松本梨香", edTitle: "ポケモンはらはら2リレー（むずかし版）", edVocal: "愛河里花子" },
        { period: "2000-07-27", epLabel: "第159話〜", opTitle: "OK!", opVocal: "松本梨香", edTitle: "タケシのパラダイス", edVocal: "上田祐司" },
        { period: "2000-09-07", epLabel: "第165話〜", opTitle: "OK!", opVocal: "松本梨香", edTitle: "ポケモンはらはらリレー（アンコール）", edVocal: "愛河里花子" },
        { period: "2000-11-16", epLabel: "第175話〜", opTitle: "OK!", opVocal: "松本梨香", edTitle: "ぼくのベストフレンドへ", edVocal: "岩崎宏美" },
        { period: "2001-04-05", epLabel: "第194話〜", opTitle: "めざせポケモンマスター（Whiteberry版）", opVocal: "Whiteberry", edTitle: "前向きロケット団!", edVocal: "犬山イヌコ・林原めぐみ・三木眞一郎・上田祐司" },
        { period: "2002-03-07", epLabel: "第241話〜", opTitle: "Ready Go!", opVocal: "田村直美", edTitle: "ポケッターリ モンスターリ", edVocal: "可名" },
      ],
      notes: []
    },
    {
      series: "第2シリーズ", work: "ポケットモンスター アドバンスジェネレーション",
      rows: [
        { period: "2002-11-21", epLabel: "第1話〜", opTitle: "アドバンス・アドベンチャー", opVocal: "GARDEN", edTitle: "そこに空があるから", edVocal: "江崎とし子" },
        { period: "2003-04-03", epLabel: "第19話〜", opTitle: "アドバンス・アドベンチャー", opVocal: "GARDEN", edTitle: "ポルカ・オ・ドルカ", edVocal: "犬山イヌコ&ノルソル合唱団" },
        { period: "2003-10-02", epLabel: "第45話〜", opTitle: "アドバンス・アドベンチャー", opVocal: "GARDEN", edTitle: "そこに空があるから（アンコール）", edVocal: "江崎とし子" },
        { period: "2003-11-20", epLabel: "第52話〜", opTitle: "アドバンス・アドベンチャー", opVocal: "GARDEN", edTitle: "スマイル", edVocal: "江崎とし子" },
        { period: "2004-04-01", epLabel: "第70話〜", opTitle: "チャレンジャー!!", opVocal: "松本梨香", edTitle: "スマイル", edVocal: "江崎とし子" },
        { period: "2004-07-01", epLabel: "第83話〜", opTitle: "チャレンジャー!!", opVocal: "松本梨香", edTitle: "いっぱいサマー!!", edVocal: "田村直美&ヒマワリ合唱団" },
        { period: "2004-09-02", epLabel: "第92話〜", opTitle: "チャレンジャー!!", opVocal: "松本梨香", edTitle: "スマイル（アンコール）", edVocal: "江崎とし子" },
        { period: "2004-10-21", epLabel: "第99話〜", opTitle: "チャレンジャー!!", opVocal: "松本梨香", edTitle: "GLORY DAY ～輝くその日～", edVocal: "GARDEN" },
        { period: "2004-12-02", epLabel: "第105話〜", opTitle: "ポケモンシンフォニックメドレー", opVocal: "ポケモン交響楽団", edTitle: "GLORY DAY ～輝くその日～", edVocal: "GARDEN" },
        { period: "2005-07-21", epLabel: "第135話〜", opTitle: "バトルフロンティア", opVocal: "高屋亜希那", edTitle: "ポケモンかぞえうた", edVocal: "金沢明子" },
        { period: "2005-11-03", epLabel: "第150話〜", opTitle: "バトルフロンティア", opVocal: "高屋亜希那", edTitle: "GLORY DAY ～輝くその日～（アンコール）", edVocal: "GARDEN" },
        { period: "2006-03-02", epLabel: "第166話〜", opTitle: "スパート!", opVocal: "松本梨香", edTitle: "GLORY DAY ～輝くその日～（アンコール）", edVocal: "GARDEN" },
        { period: "2006-04-20", epLabel: "第173話〜", opTitle: "スパート!", opVocal: "松本梨香", edTitle: "私、負けない! ～ハルカのテーマ～", edVocal: "KAORI" },
      ],
      notes: []
    },
    {
      series: "第3シリーズ", work: "ポケットモンスター ダイヤモンド&パール",
      rows: [
        { period: "2006-09-28", epLabel: "第1話〜", opTitle: "（第1話はOP未使用、スタッフクレジット表示）", opVocal: "―", edTitle: "君のそばで ～ヒカリのテーマ～", edVocal: "グリン" },
        { period: "2006-10-05", epLabel: "第2話〜", opTitle: "Together", opVocal: "あきよしふみえ", edTitle: "君のそばで ～ヒカリのテーマ～", edVocal: "グリン" },
        { period: "2007-03-29", epLabel: "第24話〜", opTitle: "Together", opVocal: "あきよしふみえ", edTitle: "君のそばで ～ヒカリのテーマ～（Pop-up Ver.）", edVocal: "グリン" },
        { period: "2007-10-18", epLabel: "第51話〜", opTitle: "Together", opVocal: "あきよしふみえ", edTitle: "君のそばで ～ヒカリのテーマ～（Winter Ver.）", edVocal: "グリン" },
        { period: "2008-01-10", epLabel: "第62話〜", opTitle: "Together", opVocal: "あきよしふみえ", edTitle: "風のメッセージ", edVocal: "水橋舞" },
        { period: "2008-04-03", epLabel: "第73話〜", opTitle: "Together", opVocal: "あきよしふみえ", edTitle: "風のメッセージ（PokaPoka-VERSION）", edVocal: "水橋舞" },
        { period: "2008-05-15", epLabel: "第79話〜", opTitle: "Together2008", opVocal: "あきよしふみえ", edTitle: "風のメッセージ（PokaPoka-VERSION）", edVocal: "水橋舞" },
        { period: "2008-07-03", epLabel: "第84話〜", opTitle: "Together2008", opVocal: "あきよしふみえ", edTitle: "風のメッセージ（アンコール）", edVocal: "水橋舞" },
        { period: "2008-10-02", epLabel: "第96話〜", opTitle: "ハイタッチ!", opVocal: "松本梨香&豊口めぐみ", edTitle: "あしたはきっと", edVocal: "歌奈子" },
        { period: "2009-04-02", epLabel: "第121話〜", opTitle: "ハイタッチ!", opVocal: "松本梨香&豊口めぐみ", edTitle: "もえよ ギザみみピチュー!", edVocal: "中川翔子（ギザみみピチュー starring しょこたん）" },
        { period: "2009-07-02", epLabel: "第134話〜", opTitle: "ハイタッチ!2009", opVocal: "松本梨香&豊口めぐみ", edTitle: "もえよ ギザみみピチュー!", edVocal: "中川翔子（ギザみみピチュー starring しょこたん）" },
        { period: "2009-10-01", epLabel: "第145話〜", opTitle: "ハイタッチ!2009", opVocal: "松本梨香&豊口めぐみ", edTitle: "ドッチ〜ニョ?", edVocal: "モーモーミルクとアラキさん" },
        { period: "2010-01-07", epLabel: "第158話〜", opTitle: "サイコー・エブリデイ!", opVocal: "あきよしふみえ", edTitle: "ドッチ〜ニョ?", edVocal: "モーモーミルクとアラキさん" },
        { period: "2010-07-01", epLabel: "第183話〜", opTitle: "サイコー・エブリデイ!（BAND VERSION）", opVocal: "あきよしふみえ with THE GREATEST-BAND", edTitle: "君の胸にLaLaLa", edVocal: "MADOKA." },
      ],
      notes: []
    },
    {
      series: "第4シリーズ", work: "ポケットモンスター ベストウイッシュ",
      rows: [
        { period: "2010-09-23", epLabel: "第1話〜", opTitle: "ベストウィッシュ!", opVocal: "松本梨香", edTitle: "心のファンファーレ", edVocal: "奥井亜紀" },
        { period: "2011-04-07", epLabel: "第26話〜", opTitle: "ベストウィッシュ!", opVocal: "松本梨香", edTitle: "ポケモン言えるかな?BW", edVocal: "つるの剛士" },
        { period: "2012-01-05", epLabel: "第61話〜", opTitle: "ベストウィッシュ!", opVocal: "松本梨香", edTitle: "七色アーチ", edVocal: "奥井亜紀・江崎とし子・あきよしふみえ" },
        { period: "2012-05-17", epLabel: "第79話〜", opTitle: "ベストウィッシュ!", opVocal: "松本梨香", edTitle: "みてみて☆こっちっち", edVocal: "ももいろクローバーZ" },
        { period: "2012-06-21", epLabel: "第85話〜", opTitle: "やじるしになって!", opVocal: "松本梨香", edTitle: "みてみて☆こっちっち", edVocal: "ももいろクローバーZ" },
        { period: "2013-01-17", epLabel: "第109話〜", opTitle: "やじるしになって! 2013", opVocal: "松本梨香", edTitle: "サクラ・ゴーラウンド", edVocal: "私立恵比寿中学" },
        { period: "2013-04-25", epLabel: "第123話〜", opTitle: "夏めく坂道", opVocal: "ダイスケ", edTitle: "手をつなごう", edVocal: "私立恵比寿中学" },
      ],
      notes: []
    },
    {
      series: "第5シリーズ", work: "ポケットモンスター XY / XY&Z",
      rows: [
        { period: "2013-10-17", epLabel: "第1話〜", opTitle: "V", opVocal: "遊助", edTitle: "X海峡Y景色", edVocal: "J-Dee-Z" },
        { period: "2014-05-29", epLabel: "第28話〜", opTitle: "メガV", opVocal: "遊助", edTitle: "ピースマイル!", edVocal: "J-Dee-Z with ピカチュウ（大谷育江）" },
        { period: "2014-10-16", epLabel: "第46話〜", opTitle: "メガV", opVocal: "遊助", edTitle: "ドリドリ", edVocal: "中川翔子" },
        { period: "2015-01-08", epLabel: "第55話〜", opTitle: "ゲッタバンバン", opVocal: "佐香智久", edTitle: "ドリドリ", edVocal: "中川翔子" },
        { period: "2015-04-16", epLabel: "第68話〜", opTitle: "ゲッタバンバン", opVocal: "佐香智久", edTitle: "ガオガオ・オールスター", edVocal: "Little Glee Monster" },
        { period: "2015-10-29", epLabel: "第94話〜", opTitle: "XY&Z", opVocal: "松本梨香", edTitle: "プニちゃんのうた", edVocal: "伊瀬茉莉也" },
        { period: "2016-02-11", epLabel: "第107話〜", opTitle: "XY&Z", opVocal: "松本梨香", edTitle: "ロケット団 団歌", edVocal: "林原めぐみ・三木眞一郎・犬山イヌコ" },
        { period: "2016-02-18", epLabel: "第108話〜", opTitle: "XY&Z", opVocal: "松本梨香", edTitle: "プニちゃんのうた（続）", edVocal: "伊瀬茉莉也" },
        { period: "2016-03-24", epLabel: "第113話〜", opTitle: "XY&Z", opVocal: "松本梨香", edTitle: "ドリドリ（セレナ版）", edVocal: "牧口真幸" },
        { period: "2016-04-07", epLabel: "第114話〜", opTitle: "XY&Z", opVocal: "松本梨香", edTitle: "プニちゃんのうた（続）", edVocal: "伊瀬茉莉也" },
        { period: "2016-06-16", epLabel: "第124話〜", opTitle: "XY&Z", opVocal: "松本梨香", edTitle: "キラキラ", edVocal: "梶裕貴" },
        { period: "2016-06-30", epLabel: "第125話〜", opTitle: "XY&Z", opVocal: "松本梨香", edTitle: "プニちゃんのうた（続）", edVocal: "伊瀬茉莉也" },
        { period: "2016-08-04", epLabel: "第129話〜", opTitle: "XY&Z", opVocal: "松本梨香", edTitle: "ピカチュウのうた", edVocal: "大谷育江" },
        { period: "2016-08-25", epLabel: "第132話〜", opTitle: "XY&Z", opVocal: "松本梨香", edTitle: "プニちゃんのうた（続）", edVocal: "伊瀬茉莉也" },
        { period: "2016-09-15", epLabel: "第135話〜", opTitle: "XY&Z", opVocal: "松本梨香", edTitle: "ニャースのバラード", edVocal: "犬山イヌコ" },
        { period: "2016-10-06", epLabel: "第137話〜", opTitle: "XY&Z", opVocal: "松本梨香", edTitle: "キラキラ（アンコール）", edVocal: "梶裕貴" },
        { period: "2016-10-13", epLabel: "第138話〜", opTitle: "XY&Z", opVocal: "松本梨香", edTitle: "ドリドリ（セレナ版・アンコール）", edVocal: "牧口真幸" },
        { period: "2016-10-20", epLabel: "第139話〜", opTitle: "XY&Z", opVocal: "松本梨香", edTitle: "ニャースのバラード（アンコール）", edVocal: "犬山イヌコ" },
        { period: "2016-10-27", epLabel: "第140話〜", opTitle: "XY&Z", opVocal: "松本梨香", edTitle: "プニちゃんのうた（続）", edVocal: "伊瀬茉莉也" },
        { period: "2016-11-03", epLabel: "第141話〜", opTitle: "XY&Z", opVocal: "松本梨香", edTitle: "プニちゃんのうた（アンコール）", edVocal: "伊瀬茉莉也" },
        { period: "2016-11-10", epLabel: "第142話〜", opTitle: "XY&Z", opVocal: "松本梨香", edTitle: "キラキラ（アンコール2）", edVocal: "梶裕貴" },
      ],
      notes: []
    },
    {
      series: "第6シリーズ", work: "ポケットモンスター サン&ムーン",
      rows: [
        { period: "2016-11-17", epLabel: "第1話〜", opTitle: "アローラ!!", opVocal: "松本梨香&大谷育江", edTitle: "ポーズ", edVocal: "岡崎体育" },
        { period: "2017-06-15", epLabel: "第30話〜", opTitle: "めざせポケモンマスター -20th Anniversary-", opVocal: "松本梨香", edTitle: "ポーズ", edVocal: "岡崎体育" },
        { period: "2017-10-05", epLabel: "第44話〜", opTitle: "アローラ!!（アンコール）", opVocal: "松本梨香&大谷育江", edTitle: "ポーズ", edVocal: "岡崎体育" },
        { period: "2018-02-08", epLabel: "第61話〜", opTitle: "未来コネクション", opVocal: "ЯeaL", edTitle: "ジャリボーイ・ジャリガール", edVocal: "岡崎体育" },
        { period: "2018-07-26", epLabel: "第82話〜", opTitle: "未来コネクション", opVocal: "ЯeaL", edTitle: "ブレス", edVocal: "ポルノグラフィティ" },
        { period: "2018-08-23", epLabel: "第87話〜", opTitle: "未来コネクション", opVocal: "ЯeaL", edTitle: "ジャリボーイ・ジャリガール（続）", edVocal: "岡崎体育" },
        { period: "2018-10-07", epLabel: "第91話〜", opTitle: "キミの冒険", opVocal: "岡崎体育", edTitle: "ジャリボーイ・ジャリガール（続）", edVocal: "岡崎体育" },
        { period: "2019-01-13", epLabel: "第104話〜", opTitle: "キミの冒険", opVocal: "岡崎体育", edTitle: "心のノート", edVocal: "日野市立七生緑小学校合唱団" },
        { period: "2019-07-07", epLabel: "第129話〜", opTitle: "キミの冒険", opVocal: "岡崎体育", edTitle: "タイプ：ワイルド", edVocal: "中川翔子" },
      ],
      notes: []
    },
    {
      series: "第7シリーズ", work: "ポケットモンスター（2019年〜、新無印）",
      rows: [
        { period: "2019-11-17", epLabel: "第1話〜", opTitle: "1・2・3", opVocal: "After the Rain（そらる×まふまふ）", edTitle: "（第1話はOPが暫定的にEDとして使用）", edVocal: "―" },
        { period: "2019-11-24", epLabel: "第2話〜", opTitle: "1・2・3", opVocal: "After the Rain（そらる×まふまふ）", edTitle: "ポケモンしりとり", edVocal: "ポケモン音楽クラブ（増田順一/パソコン音楽クラブ/ポケモンキッズ2019）" },
        { period: "2020-08-09", epLabel: "第32話〜", opTitle: "1・2・3", opVocal: "西川くんとキリショー", edTitle: "ポケモンしりとり", edVocal: "ポケモン音楽クラブ（増田順一/パソコン音楽クラブ/ポケモンキッズ2019）" },
        { period: "2021-01-08", epLabel: "第50話〜", opTitle: "1・2・3", opVocal: "からあげ姉妹（生田絵梨花×松村沙友理 from乃木坂46）", edTitle: "ポケモンしりとり", edVocal: "ポケモン音楽クラブ（増田順一/パソコン音楽クラブ/ポケモンキッズ2019）" },
        { period: "2021-06-18", epLabel: "第71話〜", opTitle: "1・2・3", opVocal: "からあげ姉妹（生田絵梨花×松村沙友理 from乃木坂46）", edTitle: "バツグンタイプ", edVocal: "ポケモン音楽クラブ（増田順一/パソコン音楽クラブ/ポケモンキッズ2021）" },
        { period: "2022-03-04", epLabel: "第100話〜", opTitle: "1・2・3", opVocal: "サトシ＆ゴウ（松本梨香＆山下大輝）", edTitle: "バツグンタイプ", edVocal: "ポケモン音楽クラブ（増田順一/パソコン音楽クラブ/ポケモンキッズ2021）" },
        { period: "2023-01-13", epLabel: "第137話〜", opTitle: "めざせポケモンマスター -with my friends-", opVocal: "サトシ（松本梨香）", edTitle: "歴代ED再放送（ひゃくごじゅういち等5曲、最終回特別編成）", edVocal: "石塚運昇 他" },
      ],
      notes: ["第48-54話のED「ふしぎなふしぎな生きもの」（岡崎体育）はテレビ東京系列の本放送のみで使用された挿話的な特別ED（レギュラーEDのポケモンしりとりと並行）のため、本表には反映せず注記のみとする。"]
    },
    {
      series: "第8シリーズ", work: "ポケットモンスター（2023年〜、リコとロイ編）",
      rows: [
        { period: "2023-04-14", epLabel: "リコとロイの旅立ち編", opTitle: "ドキメキダイアリー", opVocal: "asmi feat. Chinozo", edTitle: "RVR～ライジングボルテッカーズラップ～", edVocal: "リコ（鈴木みのり）・ロイ（寺崎裕香）" },
        { period: "2023-10-27", epLabel: "テラパゴスのかがやき編", opTitle: "ハロ", opVocal: "yama x ぼっちぼろまる", edTitle: "RVR～ライジングボルテッカーズラップ～", edVocal: "リコ（鈴木みのり）・ロイ（寺崎裕香）" },
        { period: "2024-04-12", epLabel: "テラスタルデビュー編", opTitle: "Will", opVocal: "IVE", edTitle: "Let me battle", edVocal: "9Lana" },
        { period: "2024-10-11", epLabel: "レックウザ ライジング編", opTitle: "Only One Story", opVocal: "ZEROBASEONE", edTitle: "ピッカーン!", edVocal: "Giga & TeddyLoid meets 松田里奈・森田ひかる（櫻坂46）" },
        { period: "2025-04-11", epLabel: "メガボルテージ編", opTitle: "GET BACK", opVocal: "ゆず", edTitle: "Ready Go", edVocal: "ME:I" },
        { period: "2025-10-31", epLabel: "ライジングアゲイン編", opTitle: "アイオライト", opVocal: "Eve", edTitle: "ねてもさめても", edVocal: "ポルカドットスティングレイ" },
        { period: "2026-05-22", epLabel: "ワンダーボヤージュ編", opTitle: "セカイツナガレ", opVocal: "リコ（鈴木みのり）・ロイ（寺崎裕香）", edTitle: "キュートなキューたい", edVocal: "CUTIE STREET" },
      ],
      notes: ["「エピソード：メガシンカ編（112話特別編）」（主題歌「尤」歌: ゆず）は「メガボルテージ編」中の112話のみの特別編（2025-10-10）で使用された挿入曲のため、本表には反映せず注記のみとする。"]
    }
  ]
};
