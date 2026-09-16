/**
 * shared/favorites.js
 * お気に入り状態（0:なし / 1:お気に入り / 2:永久保存版）と、それとは独立な
 * ピン留め状態（今すぐ見たい）をlocalStorageで管理する。
 *
 * Chromeはfile://ページ間でlocalStorageのoriginを共有するため、別々のHTMLファイル
 * （anime-guide.html / favorites.html等）をfile://で開いていても、この機構だけで
 * お気に入り状態を同期できる（サーバー不要の静的サイトのまま実現できる）。
 * ただし同期範囲は「同一ブラウザの同一プロファイル」内に限られる（別ブラウザ・別PCには伝播しない）。
 *
 * 使い方:
 *   <script src="../shared/favorites-data.js"></script>  ← FAVORITES_SEEDを定義（先に読み込む）
 *   <script src="../shared/favorites.js"></script>
 *   AnimeFavorites.get(id)        → 0/1/2（☆の状態。2026-09-15〜: 2=永久保存版）
 *   AnimeFavorites.cycle(id)      → 0→1→2→0 と進めてlocalStorageに書き込み、新しい状態を返す
 *   AnimeFavorites.isPinned(id)   → 今すぐ見たい（ピン留め）のON/OFF。☆とは独立なフラグ
 *   AnimeFavorites.togglePin(id)  → ピン留めをON/OFF反転してlocalStorageに書き込み、新しい状態を返す
 *   AnimeFavorites.onChange(cb)   → 他タブでの☆/ピン留め変更を検知（同一タブでの変更では発火しない仕様）
 *
 * IDは常に文字列として扱う（watch-config.jsonのanime_db_id、anime-guide側のidは
 * どちらも同じID空間＝animatetimesタグID由来のため、数値/文字列表記のゆれだけ吸収する）。
 *
 * 2026-09-15: 従来「2=今すぐ見たい（赤星）」だったが、赤星は「永久保存版」（特に好きな作品への
 * 印。登録・運用の仕様は変更なし）に用途変更。「今すぐ見たい」はこの☆状態から切り離し、
 * 白いピンマークによる独立したON/OFFフラグ（PIN_STORAGE_KEY）に付け替えた。
 * 旧state 2だったIDは初回ロード時に一度だけピン留めへ自動移行する（_migratePinFromOldPriority、
 * MIGRATION_KEYで再実行防止。★の状態自体は変更しない）。
 */
(function () {
  "use strict";

  const STORAGE_KEY = "anime-favorites";
  const PIN_STORAGE_KEY = "anime-favorites-pinned";

  // shared/common.cssの --color-favorite / --color-favorite-priority と同じ値にすること
  const STATE_COLOR = { 0: null, 1: "#eab308", 2: "#ef4444" };
  const STATE_LABEL = { 0: "お気に入りなし", 1: "お気に入り", 2: "永久保存版" };
  const STATE_STAR  = { 0: "☆", 1: "★", 2: "★" };

  function _readOverrides() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch (e) {
      return {};
    }
  }

  function _writeOverrides(obj) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
  }

  function get(id) {
    const key = String(id);
    const overrides = _readOverrides();
    if (Object.prototype.hasOwnProperty.call(overrides, key)) return overrides[key];
    const seed = window.FAVORITES_SEED || {};
    return seed[key] || 0;
  }

  function set(id, state) {
    const key = String(id);
    const overrides = _readOverrides();
    overrides[key] = state;
    _writeOverrides(overrides);
    return state;
  }

  function cycle(id) {
    const next = (get(id) + 1) % 3;
    return set(id, next);
  }

  function _readPins() {
    try {
      return JSON.parse(localStorage.getItem(PIN_STORAGE_KEY) || "{}");
    } catch (e) {
      return {};
    }
  }

  function _writePins(obj) {
    localStorage.setItem(PIN_STORAGE_KEY, JSON.stringify(obj));
  }

  function isPinned(id) {
    return !!_readPins()[String(id)];
  }

  function togglePin(id) {
    const key = String(id);
    const pins = _readPins();
    if (pins[key]) delete pins[key];
    else pins[key] = true;
    _writePins(pins);
    return !!pins[key];
  }

  function onChange(callback) {
    window.addEventListener("storage", function (e) {
      if (e.key === STORAGE_KEY || e.key === PIN_STORAGE_KEY) callback();
    });
  }

  // 2026-09-15の用途変更に伴う一度きりの移行処理:
  // 旧仕様では state 2（赤星）＝「今すぐ見たい」だった。新仕様では state 2 は「永久保存版」に
  // 用途変更し、「今すぐ見たい」は独立したピン留めフラグに切り離したため、何もしないと
  // 「今すぐ見たいだった作品」が新機能上はピン留めOFF＝一見データが消えたように見えてしまう。
  // そこで初回ロード時のみ、現在state 2の全IDをピン留め済みに引き継ぐ（★の状態自体は変更しない）。
  // MIGRATION_KEYで一度だけ実行し、以後ユーザーが手動でピンを外した操作を上書きしないようにする。
  const MIGRATION_KEY = "anime-favorites-pin-migrated-v1";
  function _migratePinFromOldPriority() {
    try {
      if (localStorage.getItem(MIGRATION_KEY)) return;
    } catch (e) {
      return;
    }
    const seed = window.FAVORITES_SEED || {};
    const overrides = _readOverrides();
    const ids = new Set(Object.keys(seed).concat(Object.keys(overrides)));
    const pins = _readPins();
    let changed = false;
    ids.forEach(function (id) {
      if (get(id) === 2 && !pins[id]) {
        pins[id] = true;
        changed = true;
      }
    });
    if (changed) _writePins(pins);
    try {
      localStorage.setItem(MIGRATION_KEY, "1");
    } catch (e) {
      // 書き込めなくても実害はない（次回ロード時に再実行されるだけ）
    }
  }
  _migratePinFromOldPriority();

  window.AnimeFavorites = {
    get: get,
    set: set,
    cycle: cycle,
    isPinned: isPinned,
    togglePin: togglePin,
    onChange: onChange,
    STATE_COLOR: STATE_COLOR,
    STATE_LABEL: STATE_LABEL,
    STATE_STAR: STATE_STAR,
  };
})();
