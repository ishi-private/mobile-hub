// shared/pokemon-chronicle-tags.js
// 年代記ページ（anime-launcher/pokemon-chronicle.html）の「年代記タグ」機能。
//
// データは2層構造（v3、2026-09-15に「シード（下書き）タグ」の仕組みを追加）:
//   1. SEED_* … このファイルに直接書かれた共有データ（gitで全員に配布される）。
//      Claudeが外部サイトを調査して「大まかに」追加した舞台・キャラ登場タグ等が入る。
//      各シードタグは`note`に出典・根拠を持ち、既定では「未検証」（verified:false）として
//      扱われる＝ユーザー自身の目で確認した情報ではないことを示すため、UI側でタグの枠を
//      灰色にする。ユーザーが右クリック→「承認」すると検証済み扱いになる（下記参照）。
//   2. localStorage（このブラウザだけの個人データ、自分用メモと同じ設計） … ユーザー自身が
//      ページ上で作成したカテゴリ・タグ・付与、およびシードタグに対する
//      承認済み/削除済み/編集内容/話数ごとの付与解除、を保持する「上書きレイヤー」。
//      SEEDデータ自体はこのファイルを更新しない限り変わらない（＝gitで管理された共有データ）。
//
// 公開API（window.PokemonChronicleTags）が返すタグ・カテゴリは、常にSEEDとlocalStorageの
// 上書きをマージした最終形（表示用）。呼び出し側はシードかユーザー作成かを意識せず
// `verified`（検証済みかどうか）と`origin`（"seed" | "user"）だけを見ればよい。
//
// カテゴリの`type`（2026-09-16追加）: 通常のカテゴリは`type`未指定で、タグは常に色付きの
// チップとして描画される。`type:"divider"`のカテゴリ（例: cat-ab-divider＝A/Bパート）に
// 属するタグだけは特別扱いで、呼び出し側（pokemon-chronicle.htmlのrenderAnnotTags）が
// チップの代わりに水平線として描画する。タグ自体（getTags()が返す各要素）にも
// `type`フィールドをそのまま伝播させているので、呼び出し側はカテゴリを逆引きしなくてよい。
// また`type:"divider"`のカテゴリはフィルターボタン一覧（renderTagFilterGroup）からも除外する。
window.PokemonChronicleTags = (function () {
  "use strict";

  var STORAGE_KEY = "pokemon-chronicle-tags-v3"; // v2（カテゴリのみ）からシード機構追加のためキー更新

  // カテゴリ作成時に順番に割り当てる配色。同じカテゴリのタグは全て同じ色になる。
  var PALETTE = ["#3c5be0", "#2ca6a4", "#d2a640", "#7a5cd6", "#d6555c",
                 "#4caf7d", "#e0803c", "#c2569a", "#5a8bd6", "#8a8a3c"];

  // ── シードデータ（Claudeによる調査結果。2026-09-15、3サイトを調査して大まかに作成） ──
  // 出典: 日本語Wikipedia「ポケットモンスター (2023年のアニメ)」、ポケモンWiki（wiki.pokemonwiki.com）、
  // アニポケ リコロイWiki（anipoke-ricoroi-wiki.jp）。各タグのnoteに個別の根拠を記載。
  // いずれも「その場面が実際に描かれているか」を自分の目で確認したものではないため、
  // 全て verified:false（未検証、UI上は灰色枠）から開始する。
  var SEED_CATEGORIES = [
    { id: "cat-stage", label: "舞台", color: PALETTE[0] },
    { id: "cat-debut", label: "キャラ登場", color: PALETTE[1] },
    // 2026-09-16追加（ユーザー指示）: Aパート/Bパートの内容タグ。「カテゴリ名：値」の
    // 表示形式で「Aパート：ロイ（冒険）」のように使う想定の、ごく普通のカテゴリ（特殊な
    // レンダリングはしない）。値はユーザー自身が今後の視聴で気づいた話数にその都度追加していく
    // 運用のため、あらかじめタグ（値）は用意しない。
    { id: "cat-a-part", label: "Aパート", color: PALETTE[2] },
    { id: "cat-b-part", label: "Bパート", color: PALETTE[3] },
    // 2026-09-16追加（ユーザー指示）: 「中間広告の前後でAパート/Bパートを呼び分ける」という
    // アニメの構造をタグでも表現するための専用カテゴリ。type:"divider"のカテゴリに属するタグは
    // 通常の色付きチップではなく、年代記タグ欄に水平線として描画される（pokemon-chronicle.htmlの
    // renderAnnotTags参照）。フィルターボタン一覧（renderTagFilterGroup）からも除外する
    // （「区切りの有無」で絞り込む使い方は想定していないため）。
    { id: "cat-ab-divider", label: "A/Bパート", color: PALETTE[4], type: "divider" },
  ];

  var SEED_TAGS = [
    { id: "seed-stage-kanto", categoryId: "cat-stage", value: "カントー",
      note: "第1話の公式あらすじに「カントー地方にある全寮制の学校・セキエイ学園」と明記（本サイトが既に収録している公式スクレイピングデータが一次根拠）。アニポケ リコロイWikiも第1章の主な舞台を「セキエイ学園、カントー各地、ブレイブアサギ号」としており一致。" },
    { id: "seed-stage-paldea", categoryId: "cat-stage", value: "パルデア",
      note: "日本語Wikipediaに、第3章「テラスタルデビュー」（第46話〜）はパルデア地方テーブルシティのオレンジアカデミーが主な舞台と明記。本サイトのSEASONSデータの章区分（第46〜67話）とも一致。" },
    { id: "seed-stage-galar", categoryId: "cat-stage", value: "ガラル",
      note: "アニポケ リコロイWikiに「第22〜23話ではガラル地方でのバトル修行が描かれる」との記載。日本語Wikipediaでは第24話ダイアナ登場後に「ガラル地方の捜索を続ける」という記述はあるが具体的な話数の明記がなく、単独ソースでの確認にとどまるため要検証度が高い。" },
    { id: "seed-stage-unova", categoryId: "cat-stage", value: "イッシュ（ブルーベリー学園）",
      note: "日本語Wikipediaに「第115話からリコらが訪問し…」とブルーベリー学園（イッシュ地方）への留学が明記。WebSearchでも「第111話でブルーベリー学園への留学が決定」という記述が見つかり、決定と実際の訪問開始で話数がズレている可能性がある（決定=111話、訪問開始=115話、と解釈）。" },
    { id: "seed-debut-roy", categoryId: "cat-debut", value: "ロイ登場",
      note: "日本語Wikipediaに「第3話で初登場し、第4話でリコと初対面」と明記。一方アニポケ リコロイWikiは「初登場は第4話」としており、初登場話数の解釈に幅がある（第3話＝画面に映る、第4話＝リコと出会う、という区別と思われる）。ここではリコとの出会いという物語上の節目である第4話を採用した。" },
    { id: "seed-debut-diana", categoryId: "cat-debut", value: "ダイアナ登場",
      note: "日本語Wikipediaに「第24話から登場、リコらと対面した」と明記。" },
    { id: "seed-debut-uruto", categoryId: "cat-debut", value: "ウルト登場",
      note: "日本語Wikipediaに「第90話の終盤で…リコの元に現れ再会した」と明記。第5章「メガボルテージ」の開始話（本サイトのSEASONSデータで第90〜111話）とも一致。" },
    { id: "seed-debut-nemo-botan", categoryId: "cat-debut", value: "ネモ・ボタン仲間入り",
      note: "日本語Wikipediaのネモ・ボタン双方の項目に「第126話ではストロングスフィアの危険を理解し、阻止するためにリコたちの仲間に加わる」と明記（2キャラ分とも同一話数で確認）。" },
    // 2026-09-16追加（ユーザー指示）: A/Bパートの区切り線タグ。外部調査に基づく「未検証」の
    // 研究的主張ではなくユーザー自身が設計した構造的な機能のため、他のシードタグと異なり
    // preVerified:true とし、既定から検証済み扱い（枠が灰色にならない）にする。
    { id: "seed-ab-divider", categoryId: "cat-ab-divider", value: "A/Bパート",
      preVerified: true,
      note: "中間広告の前後でAパート/Bパートを呼び分ける構成の話数に、区切り位置を示すために付与する。話数の年代記タグ欄で、このタグより前に付けたタグがAパート、後に付けたタグがBパートとして水平線の上下に分かれて表示される（付与した順序がそのまま表示順になる仕様のため）。" },
  ];

  // 話数 -> シードタグid配列。上記SEED_TAGSのidと対応する。
  var SEED_EPISODE_TAGS = {
    1: ["seed-stage-kanto"],
    22: ["seed-stage-galar"],
    24: ["seed-debut-diana"],
    4: ["seed-debut-roy"],
    46: ["seed-stage-paldea"],
    90: ["seed-debut-uruto"],
    115: ["seed-stage-unova"],
    126: ["seed-debut-nemo-botan"],
  };

  function load() {
    var user;
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      user = raw ? JSON.parse(raw) : {};
    } catch (e) {
      user = {};
    }
    if (!Array.isArray(user.categories)) user.categories = [];
    if (!Array.isArray(user.tags)) user.tags = [];
    if (!user.episodeTags || typeof user.episodeTags !== "object") user.episodeTags = {};
    if (!Array.isArray(user.approvedSeedTagIds)) user.approvedSeedTagIds = [];
    if (!Array.isArray(user.deletedSeedTagIds)) user.deletedSeedTagIds = [];
    if (!user.editedSeedTags || typeof user.editedSeedTags !== "object") user.editedSeedTags = {};
    if (!user.unassignedSeedPairs || typeof user.unassignedSeedPairs !== "object") user.unassignedSeedPairs = {};
    // 初回利用時は既定カテゴリ「舞台」を用意しておく（SEED_CATEGORIESに既にあるので通常は不要だが、
    // ユーザーがシードのカテゴリを将来削除できるようにした場合の保険として残す）
    return user;
  }

  function save(user) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      return true;
    } catch (e) {
      return false;
    }
  }

  function makeId(prefix) {
    return prefix + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  }

  function pairKey(ep, tagId) {
    return ep + ":" + tagId;
  }

  function isSeedTagId(tagId) {
    return SEED_TAGS.some(function (t) { return t.id === tagId; });
  }

  // ── カテゴリ（シード＋ユーザー作成をマージして返す） ──
  function getCategories() {
    var user = load();
    return SEED_CATEGORIES.concat(user.categories);
  }

  function addCategory(label) {
    label = (label == null ? "" : String(label)).trim().slice(0, 20);
    if (!label) return null;
    var user = load();
    var existing = getCategories().filter(function (c) { return c.label === label; })[0];
    if (existing) return existing;
    var category = {
      id: makeId("cat"),
      label: label,
      color: PALETTE[(SEED_CATEGORIES.length + user.categories.length) % PALETTE.length],
    };
    user.categories.push(category);
    if (!save(user)) return null;
    return category;
  }

  // ── タグ（シード＋ユーザー作成をマージ。シードは削除/編集/承認の上書きを反映する） ──
  function resolveTagDisplay(categories, rawTag) {
    var category = categories.filter(function (c) { return c.id === rawTag.categoryId; })[0];
    var color = category ? category.color : "#1f7fd1";
    var label = (category ? category.label : "？") + "：" + rawTag.value;
    return {
      id: rawTag.id,
      categoryId: rawTag.categoryId,
      // カテゴリの type（例: "divider"）をタグ側にも持たせ、呼び出し側がカテゴリを
      // 逆引きしなくても表示分岐できるようにする（通常のカテゴリはundefined）。
      type: category ? category.type : undefined,
      value: rawTag.value,
      label: label,
      color: color,
      origin: rawTag.origin,
      verified: rawTag.verified,
      note: rawTag.note || "",
    };
  }

  function getTags() {
    var user = load();
    var categories = getCategories();
    var deletedSet = {};
    user.deletedSeedTagIds.forEach(function (id) { deletedSet[id] = true; });

    var seedTags = SEED_TAGS.filter(function (t) { return !deletedSet[t.id]; }).map(function (t) {
      var override = user.editedSeedTags[t.id];
      return {
        id: t.id,
        categoryId: override && override.categoryId ? override.categoryId : t.categoryId,
        value: override && override.value ? override.value : t.value,
        note: t.note,
        origin: "seed",
        // preVerified:true の（外部調査に基づく未検証の主張ではなく、構造的な機能として
        // 追加した）シードタグは、ユーザーが右クリック承認するまでもなく既定で検証済み扱いにする。
        verified: !!t.preVerified || user.approvedSeedTagIds.indexOf(t.id) !== -1,
      };
    });
    var userTags = user.tags.map(function (t) {
      return {
        id: t.id, categoryId: t.categoryId, value: t.value, note: "",
        origin: "user", verified: true, // ユーザー自身が入力したものは検証待ちにしない
      };
    });

    return seedTags.concat(userTags).map(function (t) { return resolveTagDisplay(categories, t); });
  }

  function getTagById(tagId) {
    return getTags().filter(function (t) { return t.id === tagId; })[0] || null;
  }

  // 新規タグ作成（カテゴリ+値の組み合わせ。同じ組み合わせの既存タグがあれば再利用する）
  function addTag(categoryId, value) {
    value = (value == null ? "" : String(value)).trim().slice(0, 20);
    if (!value) return null;
    var existing = getTags().filter(function (t) { return t.categoryId === categoryId && t.value === value; })[0];
    if (existing) return existing;
    var user = load();
    var tag = { id: makeId("t"), categoryId: categoryId, value: value };
    user.tags.push(tag);
    if (!save(user)) return null;
    return getTagById(tag.id);
  }

  // タグ定義自体を削除する（右クリックメニュー「削除」）。
  // シードタグの場合は共有データ自体は書き換えられないため、このブラウザでは
  // 「削除済み」として以後表示しないという上書きを記録する。
  function removeTag(tagId) {
    var user = load();
    if (isSeedTagId(tagId)) {
      if (user.deletedSeedTagIds.indexOf(tagId) === -1) user.deletedSeedTagIds.push(tagId);
    } else {
      user.tags = user.tags.filter(function (t) { return t.id !== tagId; });
      Object.keys(user.episodeTags).forEach(function (ep) {
        user.episodeTags[ep] = user.episodeTags[ep].filter(function (id) { return id !== tagId; });
      });
    }
    return save(user);
  }

  // タグの内容（値）を編集する（右クリックメニュー「編集」）。
  // シードタグの場合はこのブラウザ内だけの上書きとして記録する（元のSEED_TAGSは変わらない）。
  function updateTagValue(tagId, newValue) {
    newValue = (newValue == null ? "" : String(newValue)).trim().slice(0, 20);
    if (!newValue) return false;
    var user = load();
    if (isSeedTagId(tagId)) {
      var seed = SEED_TAGS.filter(function (t) { return t.id === tagId; })[0];
      user.editedSeedTags[tagId] = { categoryId: seed.categoryId, value: newValue };
    } else {
      var tag = user.tags.filter(function (t) { return t.id === tagId; })[0];
      if (!tag) return false;
      tag.value = newValue;
    }
    return save(user);
  }

  // シードタグを「自分の目で確認した」として検証済みにする（右クリックメニュー「承認」）。
  // ユーザー作成タグは元々verified:trueなので呼んでも意味は無い（安全に無視する）。
  function approveTag(tagId) {
    if (!isSeedTagId(tagId)) return true;
    var user = load();
    if (user.approvedSeedTagIds.indexOf(tagId) === -1) user.approvedSeedTagIds.push(tagId);
    return save(user);
  }

  // ── 話数へのタグ付与（シードの既定付与＋ユーザー独自の付与をマージ） ──
  function getEpisodeTagIds(ep) {
    var user = load();
    var deletedSet = {};
    user.deletedSeedTagIds.forEach(function (id) { deletedSet[id] = true; });
    var seedIds = (SEED_EPISODE_TAGS[ep] || []).filter(function (id) {
      return !deletedSet[id] && !user.unassignedSeedPairs[pairKey(ep, id)];
    });
    var userIds = user.episodeTags[ep] || [];
    var seen = {};
    var merged = [];
    seedIds.concat(userIds).forEach(function (id) {
      if (!seen[id]) { seen[id] = true; merged.push(id); }
    });
    return merged;
  }

  // 話数epに付与されたタグを「付与した順序」で返す（getEpisodeTagIds(ep)の順序をそのまま使う。
  // 全タグ一覧(getTags())側の並びでfilterすると、タグ定義自体の作成順＝カタログ順になってしまい
  // 話数ごとの付与順が失われる。2026-09-16: A/Bパート区切りタグの前後でAパート/Bパートの
  // タグを分けて表示する機能のために、この順序保持が必須になったため修正した。
  function getEpisodeTags(ep) {
    var ids = getEpisodeTagIds(ep);
    var byId = {};
    getTags().forEach(function (t) { byId[t.id] = t; });
    return ids.map(function (id) { return byId[id]; }).filter(function (t) { return !!t; });
  }

  function assignTag(ep, tagId) {
    var user = load();
    var key = pairKey(ep, tagId);
    if (user.unassignedSeedPairs[key]) delete user.unassignedSeedPairs[key]; // 再付与で解除上書きを取り消す
    if (!user.episodeTags[ep]) user.episodeTags[ep] = [];
    if (user.episodeTags[ep].indexOf(tagId) === -1) user.episodeTags[ep].push(tagId);
    return save(user);
  }

  function unassignTag(ep, tagId) {
    var user = load();
    if (user.episodeTags[ep]) {
      user.episodeTags[ep] = user.episodeTags[ep].filter(function (id) { return id !== tagId; });
    }
    if ((SEED_EPISODE_TAGS[ep] || []).indexOf(tagId) !== -1) {
      user.unassignedSeedPairs[pairKey(ep, tagId)] = true; // シードの既定付与を、この話数だけ打ち消す
    }
    return save(user);
  }

  return {
    addCategory: addCategory,
    getCategories: getCategories,
    addTag: addTag,
    removeTag: removeTag,
    updateTagValue: updateTagValue,
    approveTag: approveTag,
    isSeedTagId: isSeedTagId,
    getTags: getTags,
    getTagById: getTagById,
    getEpisodeTags: getEpisodeTags,
    getEpisodeTagIds: getEpisodeTagIds,
    assignTag: assignTag,
    unassignTag: unassignTag,
  };
})();
