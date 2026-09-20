// やりたいこと（計画中・未着手の将来やりたいこと／興味のあること）
// 手編集用。項目を足すときは下の配列に1オブジェクト追加する。
//
// フィールド:
//   title    : タイトル（必須）
//   category : カテゴリ（任意。フィルタボタンに自動で並ぶ。例: "開発" "学習" "趣味" "旅行"）
//   note     : メモ・詳細（任意）
//   url      : リンク（任意）。imageがある項目は、ポスタータイル自体がこのURL（公式サイト等）へのリンクになる
//   urlLabel : テキストカード（imageなし）でのリンクの表示名（任意。未指定は「参考リンク」）
//   image    : ポスター画像のURL（任意）。あると F:\anime のお気に入り「ポスター」表示と同じ正方形タイル
//              （画像＋タイトルのみ、詳細ページなし）で表示される。公式サイトの実際の画像URLを直接参照する。
//              推測でURLを組み立てない
//   imageCredit : 画像の出典（任意。imageを使うときは書く。ページ下部に出典として表示される）
//   priority : "high" | "mid" | "low"（任意。未指定は mid）
//   added    : 追加日 "YYYY-MM-DD"（任意）
//
// 例:
//   { title: "自作ゲームのMODを公開する", category: "開発", note: "STS2 MODをSteam Workshopへ", priority: "mid", added: "2026-09-19" },
window.WANTED_DATA = [
  {
    title: "モンスターハンターワイルズ Nintendo Switch 2 版",
    category: "ゲーム",
    url: "https://www.monsterhunter.com/wilds/ja-jp/switch2/",
    image: "https://www.monsterhunter.com/wilds/assets/img/switch2/main_art.webp",
    imageCredit: "monsterhunter.com（モンスターハンターワイルズ公式）",
    added: "2026-09-20"
  }
];
