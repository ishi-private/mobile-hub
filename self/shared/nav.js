/**
 * shared/nav.js
 * 自己管理サイト共通ナビゲーション（F:\anime\shared\nav.js の構成を踏襲）
 *
 * 使い方:
 *   <nav id="site-nav"></nav>
 *   <script src="shared/nav.js"></script>
 *
 * 現在ページはファイル名から自動判定。手動設定する場合:
 *   <script>window.NAV_CURRENT = "done";</script>
 *   <script src="shared/nav.js"></script>
 */
(function () {
  "use strict";

  const PAGES = [
    { id: "done",    label: "やったこと",     path: "done.html" },
    { id: "wanted",  label: "やりたいこと",   path: "wanted.html" },
    { id: "friends", label: "友達との話題",   path: "friends.html" },
    { id: "matome",  label: "まとめ一覧",     path: "matome.html" },
  ];

  // まとめ一覧の配下ページ（game-music.html 等）では「まとめ一覧」を親として強調しつつリンクは残す
  function detectParent() {
    if (window.NAV_PARENT) return window.NAV_PARENT;
    const href = window.location.href;
    if (href.includes("/game-music.html") || href.includes("/design-templates.html") || href.includes("/free-music.html") || href.includes("/anime-op-ed.html") || href.includes("/anime-medley.html")) return "matome";
    return "";
  }

  function detectCurrent() {
    if (window.NAV_CURRENT) return window.NAV_CURRENT;
    const href = window.location.href;
    if (href.includes("/matome.html"))  return "matome";
    if (href.includes("/tools.html"))   return "tools";
    if (href.includes("/wanted.html"))  return "wanted";
    if (href.includes("/friends.html")) return "friends";
    if (href.includes("/done.html"))    return "done";
    return "";
  }

  if (!document.getElementById("site-nav-style")) {
    const style = document.createElement("style");
    style.id = "site-nav-style";
    style.textContent = `
      #site-nav {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 0.85rem;
        flex-wrap: wrap;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      #site-nav .nav-title {
        color: #556; font-size: 0.78rem; margin-right: 6px;
      }
      #site-nav a {
        color: #778; text-decoration: none; padding: 3px 2px;
      }
      #site-nav a:hover { color: #bbc; }
      #site-nav .nav-sep { color: #2a2a35; }
      #site-nav .nav-current {
        color: #e2e2e2; font-weight: 600; padding: 3px 2px;
        border-bottom: 2px solid #3c8be0;
      }
      #site-nav a.nav-parent {
        color: #c8c8d8; font-weight: 600;
        border-bottom: 2px solid #2a4a70;
      }
    `;
    document.head.appendChild(style);
  }

  function buildNav(container, currentId) {
    const parentId = detectParent();
    container.innerHTML = "";
    const title = document.createElement("span");
    title.className = "nav-title";
    title.textContent = "自己管理";
    container.appendChild(title);

    PAGES.forEach(function (page, i) {
      if (i > 0) {
        const sep = document.createElement("span");
        sep.className = "nav-sep";
        sep.textContent = "|";
        container.appendChild(sep);
      }
      if (page.id === currentId) {
        const span = document.createElement("span");
        span.className = "nav-current";
        span.textContent = page.label;
        container.appendChild(span);
      } else {
        const a = document.createElement("a");
        a.href = page.path;
        a.textContent = page.label;
        if (page.id === parentId) a.className = "nav-parent";
        container.appendChild(a);
      }
    });
  }

  function mount() {
    const container = document.getElementById("site-nav");
    if (!container) return;
    buildNav(container, detectCurrent());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }

  window.SiteNav = { rebuild: mount };
})();
