/**
 * shared/favorites.js
 * お気に入り状態（0:なし / 1:お気に入り / 2:永久保存版）、それとは独立な2種類のピン留め、
 * さらに独立なおすすめフラグ（❤）をlocalStorageで管理する。
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
 *   AnimeFavorites.isPinned(id)        → favorites.html内の「今すぐ見たい」ピンのON/OFF。
 *                                          お気に入り一覧内で上に表示する並び替え専用。☆とは独立
 *   AnimeFavorites.togglePin(id)       → 上記ピンをON/OFF反転
 *   AnimeFavorites.isInterestPinned(id)   → 「興味あり」ページのピンのON/OFF。これがONの作品だけが
 *                                             favorites.html（今期見たい）に表示される（表示ゲート）。
 *                                             favorites.html内の isPinned とは別物のフラグ
 *   AnimeFavorites.toggleInterestPinned(id) → 上記ピンをON/OFF反転
 *   AnimeFavorites.isRecommendedFlag(id)   → ❤（おすすめ登録）のON/OFF。notes.recommendの
 *                                              テキスト記入とは別。表示上の「おすすめ」判定は両者のOR
 *   AnimeFavorites.toggleRecommendedFlag(id) → 上記フラグをON/OFF反転
 *   AnimeFavorites.onChange(cb)   → 他タブでの変更を検知（同一タブでの変更では発火しない仕様）
 *
 * IDは常に文字列として扱う（watch-config.jsonのanime_db_id、anime-guide側のidは
 * どちらも同じID空間＝animatetimesタグID由来のため、数値/文字列表記のゆれだけ吸収する）。
 *
 * 2026-09-15: 従来「2=今すぐ見たい（赤星）」だったが、赤星は「永久保存版」（特に好きな作品への
 * 印。登録・運用の仕様は変更なし）に用途変更。「今すぐ見たい」はこの☆状態から切り離し、
 * 白いピンマークによる独立したON/OFFフラグ（PIN_STORAGE_KEY）に付け替えた。
 * 旧state 2だったIDは初回ロード時に一度だけピン留めへ自動移行する（_migratePinFromOldPriority、
 * MIGRATION_KEYで再実行防止。★の状態自体は変更しない）。
 *
 * 2026-09-23: 興味あり(anime-launcher.html)→お気に入り(favorites.html)の登録ゲートを
 * 「❤（お気に入り登録）」から「興味ありページ専用のピン」に変更し、❤は「おすすめ」専用の
 * マークに用途変更した（もともとの「お気に入り登録」機能自体は廃止）。favorites.htmlの表示条件は
 * 「興味ありピンあり」のみ。favorites.html内の isPinned（今すぐ見たい）とは別物で、
 * 「興味あり」側のピンと「お気に入り」側のピンは同じ「ピン」という名前でも完全に独立したフラグ。
 * 旧❤（お気に入り登録）が付いていたIDは初回ロード時に一度だけ興味ありピンへ自動移行する
 * （_migrateInterestPinFromOldHeart、INTEREST_PIN_MIGRATION_KEYで再実行防止）。
 */
(function () {
  "use strict";

  const STORAGE_KEY = "anime-favorites";
  const PIN_STORAGE_KEY = "anime-favorites-pinned";                 // favorites.html内「今すぐ見たい」
  const INTEREST_PIN_STORAGE_KEY = "anime-favorites-interest-pinned"; // 興味ありページのピン（表示ゲート）
  const OLD_HEART_STORAGE_KEY = "anime-favorites-hearted";           // 廃止済み旧「お気に入り登録」。移行専用で読むだけ
  const RECOMMEND_STORAGE_KEY = "anime-favorites-recommended";

  // shared/common.cssの --color-favorite / --color-favorite-priority と同じ値にすること
  const STATE_COLOR = { 0: null, 1: "#eab308", 2: "#ef4444" };
  const STATE_LABEL = { 0: "お気に入りなし", 1: "お気に入り", 2: "永久保存版" };
  const STATE_STAR  = { 0: "☆", 1: "★", 2: "★" };

  // 2026-09-24: mobile-hub（GitHub Pages、file://とは別オリジン）ではlocalStorageが
  // 空から始まるため、ローカルで登録した状態が反映されない。localStorageキーが
  // まだ一度も書き込まれていない（＝null）場合に限り、ビルド時に焼き込んだ
  // FAVORITES_LOCAL_SYNCを初期値として使う（favorites-local-sync.js、
  // step23_sync_local_favorites.pyが生成）。ローカル(file://)側は既に実データが
  // localStorageに入っているため、この分岐は通常通らず動作に影響しない。
  function _readOverrides() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) {
      const sync = (window.FAVORITES_LOCAL_SYNC || {}).star;
      if (sync) return sync;
    }
    try {
      return JSON.parse(raw || "{}");
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
    const raw = localStorage.getItem(PIN_STORAGE_KEY);
    if (raw === null) {
      const sync = (window.FAVORITES_LOCAL_SYNC || {}).pinned;
      if (sync) return sync;
    }
    try {
      return JSON.parse(raw || "{}");
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

  function _readInterestPins() {
    const raw = localStorage.getItem(INTEREST_PIN_STORAGE_KEY);
    if (raw === null) {
      const sync = (window.FAVORITES_LOCAL_SYNC || {}).interestPinned;
      if (sync) return sync;
    }
    try {
      return JSON.parse(raw || "{}");
    } catch (e) {
      return {};
    }
  }

  function _writeInterestPins(obj) {
    localStorage.setItem(INTEREST_PIN_STORAGE_KEY, JSON.stringify(obj));
  }

  function isInterestPinned(id) {
    return !!_readInterestPins()[String(id)];
  }

  function toggleInterestPinned(id) {
    const key = String(id);
    const pins = _readInterestPins();
    if (pins[key]) delete pins[key];
    else pins[key] = true;
    _writeInterestPins(pins);
    return !!pins[key];
  }

  function _readRecommends() {
    const raw = localStorage.getItem(RECOMMEND_STORAGE_KEY);
    if (raw === null) {
      const sync = (window.FAVORITES_LOCAL_SYNC || {}).recommended;
      if (sync) return sync;
    }
    try {
      return JSON.parse(raw || "{}");
    } catch (e) {
      return {};
    }
  }

  function _writeRecommends(obj) {
    localStorage.setItem(RECOMMEND_STORAGE_KEY, JSON.stringify(obj));
  }

  // notes.recommend欄への記入とは別の、ワンクリックで付けられる簡易おすすめフラグ。
  // favorites.htmlの「おすすめ」判定はこのフラグとnotes.recommendテキストのOR。
  function isRecommendedFlag(id) {
    return !!_readRecommends()[String(id)];
  }

  function toggleRecommendedFlag(id) {
    const key = String(id);
    const rec = _readRecommends();
    if (rec[key]) delete rec[key];
    else rec[key] = true;
    _writeRecommends(rec);
    return !!rec[key];
  }

  function onChange(callback) {
    window.addEventListener("storage", function (e) {
      if (e.key === STORAGE_KEY || e.key === PIN_STORAGE_KEY || e.key === INTEREST_PIN_STORAGE_KEY || e.key === RECOMMEND_STORAGE_KEY) callback();
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

  // 2026-09-23の用途変更に伴う一度きりの移行処理:
  // favorites.htmlの表示ゲートが旧❤（お気に入り登録）から「興味ありページ専用のピン」に
  // 変わったため、何もしないと旧❤が付いていた作品が一見お気に入りから消えたように見えてしまう。
  // そこで初回ロード時のみ、旧❤ストレージ（読むだけ・書き込みはしない）の全IDを
  // 興味ありピンへ引き継ぐ。
  const INTEREST_PIN_MIGRATION_KEY = "anime-interest-pin-migrated-from-heart-v1";
  function _migrateInterestPinFromOldHeart() {
    try {
      if (localStorage.getItem(INTEREST_PIN_MIGRATION_KEY)) return;
    } catch (e) {
      return;
    }
    let oldHearts = {};
    try {
      oldHearts = JSON.parse(localStorage.getItem(OLD_HEART_STORAGE_KEY) || "{}");
    } catch (e) {
      oldHearts = {};
    }
    const pins = _readInterestPins();
    let changed = false;
    Object.keys(oldHearts).forEach(function (id) {
      if (oldHearts[id] && !pins[id]) {
        pins[id] = true;
        changed = true;
      }
    });
    if (changed) _writeInterestPins(pins);
    try {
      localStorage.setItem(INTEREST_PIN_MIGRATION_KEY, "1");
    } catch (e) {
      // 書き込めなくても実害はない（次回ロード時に再実行されるだけ）
    }
  }
  _migrateInterestPinFromOldHeart();

  window.AnimeFavorites = {
    get: get,
    set: set,
    cycle: cycle,
    isPinned: isPinned,
    togglePin: togglePin,
    isInterestPinned: isInterestPinned,
    toggleInterestPinned: toggleInterestPinned,
    isRecommendedFlag: isRecommendedFlag,
    toggleRecommendedFlag: toggleRecommendedFlag,
    onChange: onChange,
    STATE_COLOR: STATE_COLOR,
    STATE_LABEL: STATE_LABEL,
    STATE_STAR: STATE_STAR,
  };
})();
