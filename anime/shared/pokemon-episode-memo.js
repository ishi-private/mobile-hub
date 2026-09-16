// shared/pokemon-episode-memo.js
// ポケットモンスター専用ページ（pokemon-detail.html / pokemon-episode.html）向けの
// 「自分用メモ」（テキスト＋スクリーンショット4枚）をlocalStorageに保存する薄いラッパー。
//
// あくまでこのブラウザ・この端末だけのローカルなメモ機能（他の閲覧者やClaude側には共有されない）。
// 1枚目の画像はサムネイル用途を兼ね、pokemon-detail.htmlの早見表「サムネ」行に
// ミニサイズで表示される。
//
// 保存形式: localStorage["pokemonEpisodeMemo:<話数>"] = JSON.stringify({
//   notes: string,
//   images: [dataURL|null, dataURL|null, dataURL|null, dataURL|null], // 常に4要素
// })
window.PokemonEpisodeMemo = (function () {
  "use strict";

  var PREFIX = "pokemonEpisodeMemo:";
  var MAX_IMAGES = 4;
  var MAX_DIMENSION = 640; // 保存前にこの辺の長辺に収まるよう縮小し、localStorage圧迫を抑える
  var JPEG_QUALITY = 0.72;

  function keyFor(ep) { return PREFIX + ep; }

  function get(ep) {
    try {
      var raw = localStorage.getItem(keyFor(ep));
      if (!raw) return { notes: "", images: [null, null, null, null] };
      var data = JSON.parse(raw);
      var images = (data.images || []).slice(0, MAX_IMAGES);
      while (images.length < MAX_IMAGES) images.push(null);
      return { notes: data.notes || "", images: images };
    } catch (e) {
      // プライベートウィンドウ等でlocalStorageが使えない/壊れている場合は空データを返す
      return { notes: "", images: [null, null, null, null] };
    }
  }

  function save(ep, data) {
    try {
      localStorage.setItem(keyFor(ep), JSON.stringify({
        notes: data.notes || "",
        images: (data.images || []).slice(0, MAX_IMAGES),
      }));
      return true;
    } catch (e) {
      // 容量超過(QuotaExceededError)等。呼び出し側でエラー表示に使えるようfalseを返す
      return false;
    }
  }

  function setNotes(ep, notes) {
    var data = get(ep);
    data.notes = notes;
    return save(ep, data);
  }

  function setImage(ep, slotIndex, dataUrl) {
    var data = get(ep);
    data.images[slotIndex] = dataUrl;
    return save(ep, data);
  }

  function clearImage(ep, slotIndex) {
    return setImage(ep, slotIndex, null);
  }

  // 1枚目の画像（サムネイル用途）だけを軽量に取得する。
  // pokemon-detail.htmlの早見表が全150話分ループする際に使う。
  function getThumbnail(ep) {
    try {
      var raw = localStorage.getItem(keyFor(ep));
      if (!raw) return null;
      var data = JSON.parse(raw);
      return (data.images && data.images[0]) || null;
    } catch (e) {
      return null;
    }
  }

  // Fileオブジェクトを読み込み、長辺MAX_DIMENSIONに収まるよう縮小してJPEGのdata URLにする
  function fileToDataUrl(file) {
    return new Promise(function (resolve, reject) {
      if (!file || file.type.indexOf("image/") !== 0) {
        reject(new Error("画像ファイルを選択してください"));
        return;
      }
      var reader = new FileReader();
      reader.onerror = function () { reject(new Error("ファイルの読み込みに失敗しました")); };
      reader.onload = function () {
        var img = new Image();
        img.onerror = function () { reject(new Error("画像の読み込みに失敗しました")); };
        img.onload = function () {
          var w = img.naturalWidth, h = img.naturalHeight;
          var scale = Math.min(1, MAX_DIMENSION / Math.max(w, h));
          var cw = Math.max(1, Math.round(w * scale));
          var ch = Math.max(1, Math.round(h * scale));
          var canvas = document.createElement("canvas");
          canvas.width = cw;
          canvas.height = ch;
          var ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, cw, ch);
          resolve(canvas.toDataURL("image/jpeg", JPEG_QUALITY));
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  return {
    get: get,
    save: save,
    setNotes: setNotes,
    setImage: setImage,
    clearImage: clearImage,
    getThumbnail: getThumbnail,
    fileToDataUrl: fileToDataUrl,
    MAX_IMAGES: MAX_IMAGES,
  };
})();
