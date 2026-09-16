/**
 * shared/anime-notes.js
 * 視聴履歴（前回視聴日・話数）とおすすめ情報（情報元・更新日）をlocalStorageで管理する。
 * favorites.js（お気に入り状態）とは別の関心事のため独立したモジュールにする。
 *
 * 使い方:
 *   AnimeNotes.get(id)                       → { watchDate, watchEpisode,
 *                                                 recommend, recommendDate, recommend2, recommend2Date }
 *   AnimeNotes.setWatch(id, ep)               → 視聴履歴（話数）を保存。日付は記入時点の日付を自動記録する
 *   AnimeNotes.setRecommend(id, text, slot)   → おすすめ情報を保存し、更新日を自動記録する
 *                                                 slot省略で1件目、slot=2で2件目のおすすめ欄に保存する
 */
(function () {
  "use strict";

  const STORAGE_KEY = "anime-notes";

  function _readAll() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch (e) {
      return {};
    }
  }

  function _writeAll(obj) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
  }

  function get(id) {
    const all = _readAll();
    return all[String(id)] || {};
  }

  function setWatch(id, episode) {
    const all = _readAll();
    const key = String(id);
    const cur = all[key] || {};
    const hasEp = episode !== "" && episode != null;
    cur.watchEpisode = hasEp ? Number(episode) : null;
    cur.watchDate = hasEp ? new Date().toISOString().slice(0, 10) : null;
    all[key] = cur;
    _writeAll(all);
    return cur;
  }

  function setRecommend(id, text, slot) {
    const all = _readAll();
    const key = String(id);
    const cur = all[key] || {};
    const suffix = slot === 2 ? "2" : "";
    cur["recommend" + suffix] = text || "";
    cur["recommend" + suffix + "Date"] = text ? new Date().toISOString().slice(0, 10) : null;
    all[key] = cur;
    _writeAll(all);
    return cur;
  }

  window.AnimeNotes = {
    get: get,
    setWatch: setWatch,
    setRecommend: setRecommend,
  };
})();
