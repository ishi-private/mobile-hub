/**
 * shared/nav.js (mobile-hub public build)
 * アニメ関連ページ共通ナビゲーション（公開サイト用・相対リンク版）
 *
 * 元ファイル F:\anime\shared\nav.js との違い:
 *   - リンク先を file:// 絶対パス（ROOT + path）ではなく相対パスに変更
 *     （anime-launcher/ と site-monitor/ は同じ深さの兄弟フォルダなので
 *       "../anime-launcher/xxx.html" 形式で相互に参照できる）
 *   - planner へのリンクは公開済みの https://ishi-private.github.io/planner/ に変更
 *
 * F:\運用\mobile-hub\build.ps1 が元のnav.jsの代わりにこのファイルをコピーする。
 */
(function () {
  "use strict";

  const PAGES = [
    {
      id:    "planner",
      label: "Planner",
      href:  "https://ishi-private.github.io/planner/",
      category: null,
    },
    {
      id:    "launcher",
      label: "all",
      href:  "../anime-launcher/anime-launcher.html",
      category: "video",
    },
    {
      id:    "now",
      label: "now",
      href:  "../anime-launcher/anime-launcher-now.html",
      category: "video",
    },
    {
      id:    "sites",
      label: "サイト状況",
      href:  "../site-monitor/sites.html",
      category: "sites",
    },
    {
      id:    "favorites",
      label: "お気に入り",
      href:  "../anime-launcher/favorites.html",
      category: "works",
    },
    {
      id:    "guide",
      label: "アニメガイド",
      href:  "../anime-launcher/anime-guide.html",
      category: "works",
    },
  ];

  function detectCurrent() {
    if (window.NAV_CURRENT) return window.NAV_CURRENT;
    const href = window.location.href;
    if (href.includes("/anime-guide.html"))         return "guide";
    if (href.includes("/favorites.html"))           return "favorites";
    if (href.includes("/anime-launcher-now.html"))  return "now";
    if (href.includes("/anime-launcher.html"))      return "launcher";
    if (href.includes("/sites.html"))               return "sites";
    return "";
  }

  if (!document.getElementById("site-nav-style")) {
    const style = document.createElement("style");
    style.id = "site-nav-style";
    style.textContent = `
      #site-nav {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.72rem;
        flex-wrap: wrap;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      #site-nav a {
        color: #556;
        text-decoration: none;
      }
      #site-nav a:hover { color: #999; }
      #site-nav .nav-sep { color: #2a2a35; }
      #site-nav .nav-sep-cat { color: #3a3a4a; margin: 0 2px; }
      #site-nav .nav-current { color: #bbb; font-weight: 600; }
    `;
    document.head.appendChild(style);
  }

  function buildNav(container, currentId) {
    container.innerHTML = "";
    PAGES.forEach(function (page, i) {
      if (i > 0) {
        const prevCategory = PAGES[i - 1].category;
        const isCategoryBoundary = page.category !== prevCategory;
        const sep = document.createElement("span");
        sep.className = isCategoryBoundary ? "nav-sep-cat" : "nav-sep";
        sep.textContent = isCategoryBoundary ? "‖" : "|";
        container.appendChild(sep);
      }

      if (page.id === currentId) {
        const span = document.createElement("span");
        span.className = "nav-current";
        span.textContent = page.label;
        container.appendChild(span);
      } else {
        const a = document.createElement("a");
        a.href = page.href;
        a.textContent = page.label;
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
