/* mobile-hub 共通ヘッダー（「← mobile-hub」）— 2026-11-10
   ページには公開ビルドが </body> の直前にこの1行だけを入れる（元ファイルには書かない）:
     <script src="/mobile-hub/hub-header.js"></script>   … GitHub Pages（build.ps1）
     <script src="/hub-header.js"></script>              … Cloudflare 個人用サイト（29_build_personal.py）

   ■ 既存のヘッダーがあるページは、その行に統合する（ヘッダーを2段にしない＝二重管理しない）
     探す順:  [data-hub-slot] → #site-nav（各サイトのナビ行）→ a.back-link（ポケモンの「ポータルへ戻る」行）
     見つからなければ、ページ最上部に単独のバーを出す。
   ■ ダーク／ライトの2仕様。置き場所の実際の背景色（明るさ）から自動で選ぶ。
     手動指定: <html data-hub-theme="dark|light"> または script タグに data-theme="dark|light"
   ■ 戻り先: data-home（script タグ）があればそれ、無ければ mobile-hub トップ。
   ナビを JS で描き直すページ（nav.js 等）でも消えないよう、置き場所を監視して付け直す。 */
(function () {
  var script = document.currentScript;
  var HOME = (script && script.getAttribute("data-home")) || "https://ishi-private.github.io/mobile-hub/";
  var ID = "mobile-hub-header";

  var css = document.createElement("style");
  css.id = ID + "-style";
  // ページ側のナビ CSS（例: #site-nav a { color:#556 }）に負けないよう、ID付きセレクタ＋!important で書く
  var H = "#" + ID, I = " !important";
  var FONT = "-apple-system,BlinkMacSystemFont,'Segoe UI','Hiragino Sans','Yu Gothic UI',sans-serif";
  css.textContent = [
    /* 統合（既存ヘッダーの行の先頭に入る小さなリンク） */
    H + ".mhh-inline{display:inline-flex" + I + ";align-items:center;gap:6px;margin:0 8px 0 0" + I + ";padding:0" + I + ";white-space:nowrap;vertical-align:middle;background:none" + I + ";border:0" + I + "}",
    // 既存のナビ行の高さを変えないよう小さめ（行は 11〜12px の文字が多い）
    H + ".mhh-inline a.mhh-link{display:inline-block" + I + ";padding:0 8px" + I + ";margin:0" + I + ";border-radius:999px" + I + ";font:600 11px/1.45 " + FONT + I + ";text-decoration:none" + I + ";letter-spacing:0" + I + "}",
    H + ".mhh-inline .mhh-sep{font-size:11px" + I + ";line-height:1" + I + ";margin:0" + I + "}",
    H + ".mhh-dark.mhh-inline a.mhh-link{color:#b4c2ff" + I + ";background:rgba(255,255,255,.06)" + I + ";border:1px solid #34344a" + I + "}",
    H + ".mhh-dark.mhh-inline a.mhh-link:hover{color:#fff" + I + ";border-color:#55557a" + I + "}",
    H + ".mhh-dark.mhh-inline .mhh-sep{color:#3a3a4a" + I + "}",
    H + ".mhh-light.mhh-inline a.mhh-link{color:#23479e" + I + ";background:#eef2ff" + I + ";border:1px solid #c7d2f0" + I + "}",
    H + ".mhh-light.mhh-inline a.mhh-link:hover{color:#0f2f7a" + I + ";border-color:#94a7dd" + I + "}",
    H + ".mhh-light.mhh-inline .mhh-sep{color:#c4c8d4" + I + "}",
    /* 単独のバー（既存ヘッダーが無いページ） */
    H + ".mhh-bar{display:block" + I + ";box-sizing:border-box;width:100%;margin:0 0 6px;padding:7px 14px;position:relative;z-index:2147483000;text-align:left;font:600 13px/1.4 " + FONT + I + ";letter-spacing:0}",
    H + ".mhh-bar a.mhh-link{text-decoration:none" + I + ";font:inherit" + I + "}",
    H + ".mhh-dark.mhh-bar{background:#0b0b12" + I + ";border-bottom:1px solid #26263a" + I + "}",
    H + ".mhh-dark.mhh-bar a.mhh-link{color:#b4c2ff" + I + "}",
    H + ".mhh-light.mhh-bar{background:#f5f7fb" + I + ";border-bottom:1px solid #dfe3ec" + I + "}",
    H + ".mhh-light.mhh-bar a.mhh-link{color:#23479e" + I + "}"
  ].join("\n");

  function rgbOf(el) {
    // 置き場所から親へたどり、最初に不透明に近い背景色を返す（無ければ白）
    for (; el && el.nodeType === 1; el = el.parentElement) {
      var m = getComputedStyle(el).backgroundColor.match(/rgba?\(([^)]+)\)/);
      if (!m) continue;
      var p = m[1].split(/[ ,\/]+/).filter(Boolean).map(parseFloat);
      if (p.length < 4 || p[3] > 0.5) return p;
    }
    return [255, 255, 255];
  }
  function themeFor(el) {
    var forced = document.documentElement.getAttribute("data-hub-theme") || (script && script.getAttribute("data-theme"));
    if (forced === "dark" || forced === "light") return forced;
    var c = rgbOf(el);
    return (0.299 * c[0] + 0.587 * c[1] + 0.114 * c[2]) / 255 < 0.5 ? "dark" : "light";
  }
  function findSlot() {
    var s = document.querySelector("[data-hub-slot]") || document.getElementById("site-nav");
    if (s) return { el: s, mode: "prepend" };
    var back = document.querySelector("a.back-link");
    if (back) return { el: back, mode: "before" };
    return null;
  }

  function build(kind) {
    var w = document.createElement(kind === "bar" ? "div" : "span");
    w.id = ID;
    w.className = kind === "bar" ? "mhh-bar" : "mhh-inline";
    w.innerHTML = '<a class="mhh-link" href="' + HOME + '">← mobile-hub</a>' + (kind === "bar" ? "" : '<span class="mhh-sep">|</span>');
    return w;
  }

  function place() {
    var old = document.getElementById(ID);
    var slot = findSlot();
    var el;
    if (slot) {
      el = old && old.className.indexOf("mhh-inline") >= 0 ? old : build("inline");
      if (slot.mode === "prepend") {
        if (slot.el.firstChild !== el) slot.el.insertBefore(el, slot.el.firstChild);
      } else if (slot.el.previousSibling !== el) {
        slot.el.parentNode.insertBefore(el, slot.el);
      }
      if (old && old !== el) old.remove();
    } else {
      el = old || build("bar");
      if (document.body.firstChild !== el) document.body.insertBefore(el, document.body.firstChild);
    }
    var t = themeFor(slot ? slot.el : document.body);
    el.classList.remove("mhh-dark", "mhh-light");
    el.classList.add("mhh-" + t);
    el.setAttribute("data-theme", t);
    el.setAttribute("data-mode", slot ? "inline" : "bar");
    return slot;
  }

  function start() {
    if (!document.getElementById(css.id)) document.head.appendChild(css);
    var slot = place();
    // ナビを描き直すページ対策: 置き場所の子要素が変わったら付け直す
    var target = slot ? (slot.mode === "prepend" ? slot.el : slot.el.parentNode) : document.body;
    var busy = false;
    new MutationObserver(function () {
      if (busy) return;
      if (!document.getElementById(ID) || (slot && slot.mode === "prepend" && slot.el.firstChild !== document.getElementById(ID))) {
        busy = true; slot = place(); busy = false;
      }
    }).observe(target, { childList: true });
    // OSのダーク/ライト切替で背景が変わるページ（music.html 等）に追従
    if (window.matchMedia) {
      var mq = window.matchMedia("(prefers-color-scheme: dark)");
      var re = function () { setTimeout(place, 50); };
      if (mq.addEventListener) mq.addEventListener("change", re); else if (mq.addListener) mq.addListener(re);
    }
  }

  if (document.readyState === "complete") start();
  else window.addEventListener("load", start);
})();
