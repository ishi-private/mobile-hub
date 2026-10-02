// touch-contextmenu.js — タッチ端末で「長押し」を右クリック（contextmenu イベント）として扱う共通スクリプト。
// iOS Safari は長押ししても contextmenu イベントを出さないため、各ページの独自右クリックメニューが開けない。
// 使い方: <script src=".../touch-contextmenu.js"></script> の後に
//   TouchContextMenu.init("<長押し対象のCSSセレクタ>");
// 対象要素を約0.55秒長押し（指をほぼ動かさない）すると、その要素に contextmenu イベントを送る。
// ページ側の既存 contextmenu ハンドラがそのまま動く（e.clientX/clientY も指の位置）。
// - 対象要素では iOS のリンクプレビュー・文字選択・画像のドラッグを抑止する（-webkit-touch-callout:none 等。
//   iOS は画像を長押しするとドラッグが始まって touchcancel になり、長押し判定が取り消されるため）
// - Android Chrome のように長押しで本物の contextmenu が出る環境では二重に出さない
// - メニューが開いたら指を離したときのクリック（リンク遷移など）を打ち消す
// 正本は F:\anime\shared\touch-contextmenu.js。F:\Pokemon\shared\・F:\自己管理\shared\ に同じ内容のコピーがある（直すときは全部）。
(function () {
  "use strict";
  if (window.TouchContextMenu) return;

  var HOLD_MS = 550;
  var MOVE_TOLERANCE = 10;
  var selectors = [];
  var timer = null;
  var start = null;      // { x, y, target }
  var opened = false;    // この長押しでメニューを開いた（本物/合成どちらでも）
  var suppressClickUntil = 0;

  function matchTarget(el) {
    if (!el || !el.closest || !selectors.length) return null;
    return el.closest(selectors.join(","));
  }
  function clear() {
    if (timer) { clearTimeout(timer); timer = null; }
  }

  document.addEventListener("touchstart", function (e) {
    clear();
    opened = false;
    start = null;
    if (e.touches.length !== 1) return;
    var t = e.touches[0];
    var target = matchTarget(e.target);
    if (!target) return;
    start = { x: t.clientX, y: t.clientY, target: e.target };
    timer = setTimeout(function () {
      timer = null;
      if (!start || opened) return;
      var ev = new MouseEvent("contextmenu", {
        bubbles: true, cancelable: true, view: window,
        clientX: start.x, clientY: start.y, screenX: start.x, screenY: start.y, button: 2
      });
      ev.__touchContextMenu = true;
      start.target.dispatchEvent(ev);
      if (ev.defaultPrevented) {
        opened = true;
        if (navigator.vibrate) { try { navigator.vibrate(15); } catch (_) {} }
      }
    }, HOLD_MS);
  }, { passive: true });

  document.addEventListener("touchmove", function (e) {
    if (!start || !timer) return;
    var t = e.touches[0];
    if (!t) return;
    if (Math.abs(t.clientX - start.x) > MOVE_TOLERANCE || Math.abs(t.clientY - start.y) > MOVE_TOLERANCE) clear();
  }, { passive: true });

  document.addEventListener("touchend", function (e) {
    clear();
    if (opened) {
      // 指を離したときの click（リンク遷移・メニューを閉じる処理）を発生させない
      if (e.cancelable) e.preventDefault();
      else suppressClickUntil = Date.now() + 700;
    }
    start = null;
  }, { passive: false });

  document.addEventListener("touchcancel", function () { clear(); start = null; }, { passive: true });

  // 本物の contextmenu（Android の長押し等）が先に来たら合成しない
  document.addEventListener("contextmenu", function (e) {
    if (e.__touchContextMenu) return;
    if (start) { clear(); opened = true; }
  }, true);

  // preventDefault が効かない環境向けの保険：長押し直後の click を1回だけ捨てる
  document.addEventListener("click", function (e) {
    if (Date.now() < suppressClickUntil) {
      suppressClickUntil = 0;
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);

  window.TouchContextMenu = {
    init: function (selector) {
      if (!selector) return;
      selectors.push(selector);
      var style = document.createElement("style");
      style.textContent = selector.split(",").map(function (s) { return s.trim(); }).filter(Boolean)
        .map(function (s) { return s + "," + s + " *"; }).join(",") +
        "{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;-webkit-user-drag:none;}";
      document.head.appendChild(style);
    }
  };
})();
