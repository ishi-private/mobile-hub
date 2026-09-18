// 友達との話題（画像・URL付きでまとめておく話題）
// 手編集用。項目を足すときは下の配列に1オブジェクト追加する。
//
// フィールド:
//   title  : 話題のタイトル（必須）
//   friend : 誰との話題か（任意。フィルタボタンに自動で並ぶ）
//   note   : メモ・話したい内容（任意）
//   image  : 画像URL または このフォルダからの相対パス 例 "images/xxx.jpg"（任意）
//   urls   : [{ label: "表示名", href: "https://..." }, ...]（任意）
//   added  : 追加日 "YYYY-MM-DD"（任意）
//
// 例:
//   { title: "新作ゲームの話", friend: "Aくん", note: "発売日までに一度遊びたい",
//     image: "https://example.com/thumb.jpg",
//     urls: [{ label: "公式サイト", href: "https://example.com" }], added: "2026-09-19" },
window.FRIENDS_DATA = [
];
