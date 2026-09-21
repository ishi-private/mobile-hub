// 自動生成ファイル - F:\Tools\Music\music-detect\tools\export_free_music_js.py（カタログJSONから生成）。手編集しないこと。
// 生成日: 2026-09-21 / 規約の確認日: 2026-09-21
window.FREE_MUSIC_DATA = {
  "generatedAt": "2026-09-21",
  "verifiedAt": "2026-09-21",
  "sites": [
    {
      "id": "opentracks",
      "name": "OpenTracks（旧DOVA-SYNDROME）",
      "url": "https://opentracks.com/",
      "image": "https://opentracks.com/static/img/og/top.jpg",
      "image_credit": "opentracks.com（公式）",
      "renamed": "DOVA-SYNDROME は 2026-09-15 付で OpenTracks に名称変更（公式ページの記載）",
      "catalog_size": "BGM 19,224曲・効果音 1,296（公式トップ、2026-09-20）／在籍作曲・制作者 242名（作曲者一覧ページ、2026-09-20）",
      "terms_urls": [
        "https://opentracks.com/help/articles/license/",
        "https://opentracks.com/help/articles/terms/"
      ],
      "commercial": "可（用途・営利/非営利を問わず無料）",
      "credit_required": "不要（著作権表示・提供等の表示は不要）。ただし作曲・制作者が別途条件を設けている場合はそちらが優先",
      "content_id": "サイト側が YouTube Content ID を自社管理し、ライセンスを守る動画には申し立てしない（公式トップの記載）。利用者が音源や作品を Content ID 等のフィンガープリントに登録することは禁止",
      "redistribution": "禁止（音源のみを配布・販売する行為）。ダウンロードせず直リンクすることも禁止",
      "ai_training": "禁止（ライセンスの禁止事項『音源をAIのトレーニングに使用すること』）",
      "acquisition": "manual_only",
      "acquisition_note": "サイト利用規約の禁止事項に『bot等プログラムを使用して当サイトのコンテンツ（画像・音源など）を自動的に収集する行為』がある。サイト（opentracks.com / dova-s.jp）へのスクリプトからのアクセスは今後行わない（2026-09-20 に規約・ランキングの確認で HTML を最小限取得した）。参照音源は、サイトではなく公式YouTubeチャンネル（OpenTracks/旧DOVA-SYNDROME）の公式アップロードから、1曲ずつ間隔を空けて取得する方法に切り替えた（2026-09-21、`tools/acquire_benchmark.py`。ベンチマーク動画の曲のみ）。サイトから直接ダウンロードしたい場合は人手で行う",
      "related_features": "公式の『YouTube動画内BGM検索』（動画URLを入力するとYouTubeの検出システムを元にした結果を最大20曲表示。DB更新は月1回程度、動画内で30秒未満の使用は検出されない可能性、精度はYouTubeのシステムに依存）",
      "popularity_evidence": "DL数順ランキング（2026-09-20取得、全19,224件中の上位）",
      "featured_composers": [
        "しゃろう",
        "KK",
        "かずち",
        "こおろぎ",
        "GT-K",
        "もっぴーさうんど",
        "鷹尾まさき(タカオマサキ)",
        "今川彰人オーケストラ",
        "yuki",
        "天野 七祈",
        "Kyaai",
        "Keyta",
        "稿屋 隆"
      ]
    },
    {
      "id": "maoudamashii",
      "name": "魔王魂",
      "url": "https://maou.audio/",
      "image": "https://maou.audio/wp-content/themes/jks_maoudamashii/img/twitter_card.png",
      "image_credit": "maou.audio（公式）",
      "catalog_size": "BGM 約400曲（BGMカテゴリのページ表示『1/401』、2026-09-20）。全曲 作曲：森田交一（同ページ）",
      "terms_urls": [
        "https://maou.audio/rule/"
      ],
      "commercial": "可（個人・商用とも無料。JASRAC等から料金を請求されることはない）",
      "credit_required": "必要（『音楽：魔王魂』等。YouTubeは動画内でも概要欄でもよい）。著作権フリー・CC0ではない。CC BY 4.0 で利用するか、同サイトの素材利用規約を守るかを選べる",
      "content_id": "JASRAC等の著作権管理団体への楽曲登録・管理委託は禁止（規約）",
      "redistribution": "曲単品の再配布は不可。二次配布は著作表記とリンクが必要",
      "ai_training": "禁止（生成AIに学習させる行為はいかなる場合でも違反。作曲システムへの組み込みも禁止）",
      "acquisition": "manual_only",
      "acquisition_note": "個別ダウンロードと『一括ダウンロード』が公式に提供されている。ファイルURLはスクリプトからも、ブラウザでURLを直接開いても403（サイトのページ上のリンクからのみ）。2026-09-21 にユーザーの許可を得て、Chromeで https://maou.audio/all/ のリンクをクリックし、ネオロックのZIP（85曲・153MB）を取得して指紋化した。2本目以降は Google の全面広告がクリックを横取りして中断（残り8カテゴリは人手で取得）。規約に自動取得の禁止規定は見当たらないが、Referer偽装などでの回避はしない。音源は mp3/ogg/m4a",
      "popularity_evidence": "未取得（人気順の根拠は今後）"
    },
    {
      "id": "amacha",
      "name": "甘茶の音楽工房",
      "url": "https://amachamusic.chagasi.com/",
      "image": "https://amachamusic.chagasi.com/img/main.png",
      "image_credit": "amachamusic.chagasi.com（公式）",
      "catalog_size": "音楽素材 500点以上（公式ページの説明）",
      "terms_urls": [
        "https://amachamusic.chagasi.com/terms.html"
      ],
      "commercial": "可（商用・個人利用とも）",
      "credit_required": "必須ではない（サイト名・作曲者名・URLのいずれか1つを任意の場所に載せると喜ばれる）",
      "content_id": "この素材を使った作品を YouTube の Content ID に登録することは禁止。YouTube上の著作権管理は TRACKS Inc. に委託しており、音楽がメインの動画には著作権表記が挿入される場合がある（規約の記載）",
      "redistribution": "禁止（音楽だけの販売・二次配布）。直リンクでの使用も禁止",
      "ai_training": "規約に記載なし",
      "acquisition": "throttled_script_ok",
      "acquisition_note": "規約にbot禁止の記載がなく、各曲のダウンロードリンクは通常のmp3への直リンク（右クリック保存と同じ）。2026-09-21 にユーザーの許可を得て、ジャンル別ページ（ページ送り含む、2秒間隔）で曲一覧を作り、mp3を5〜10秒間隔で1曲ずつ保存する `tools/amacha.py` で取得した（543曲・約1.08GB）。用途は個人の指紋DBのみ・再配布しない。MP3 128kbpsのみ",
      "popularity_evidence": "未取得"
    },
    {
      "id": "incompetech",
      "name": "Kevin MacLeod（incompetech）",
      "url": "https://incompetech.com/music/royalty-free/",
      "image": null,
      "image_credit": null,
      "catalog_size": "2,000曲以上（英語版Wikipediaの記載）",
      "terms_urls": [
        "https://incompetech.com/music/royalty-free/faq.html",
        "https://incompetech.com/music/royalty-free/licenses/"
      ],
      "commercial": "可（YouTubeの収益化も可）",
      "credit_required": "必要（CC BY 4.0。『Title Kevin MacLeod (incompetech.com) / Licensed under Creative Commons: By Attribution 4.0 / https://creativecommons.org/licenses/by/4.0/』。YouTubeは動画説明欄でも動画内でもよい）。クレジットが不可能な用途は有料の Standard License",
      "content_id": "サイトに『YouTube Content ID』の解説記事あり（内容は未取得）",
      "redistribution": "改変は可だが、どこが自分の部分かをクレジットで明示する必要がある",
      "ai_training": "規約に記載なし",
      "acquisition": "manual_only",
      "acquisition_note": "曲ごとにサイトから人手でダウンロード。ライセンスページは JS でカタログを読み込む（取得は人手）",
      "popularity_evidence": "英語版Wikipediaが、YouTubeの数百万本の動画で使われていること、『Monkeys Spinning Monkeys』『Electrodoodle』がTikTokで特に再生されていることを記載"
    },
    {
      "id": "youtube_audio_library",
      "name": "YouTube オーディオ ライブラリ",
      "url": "https://support.google.com/youtube/answer/3376882?hl=ja",
      "image": null,
      "image_credit": null,
      "catalog_size": "不明（未確認）",
      "terms_urls": [
        "https://support.google.com/youtube/answer/3376882?hl=ja"
      ],
      "commercial": "可（YouTube パートナー プログラム参加時は収益化も可）",
      "credit_required": "クリエイティブ・コモンズの曲は動画の説明欄にアーティストのクレジットが必須（『帰属表示が必要』フィルタで区別）。標準ライセンスの曲は不要",
      "content_id": "ダウンロードした『著作権上安全』な音楽・効果音は、権利所持者から Content ID による申し立てを受けることはない（公式ヘルプ）",
      "redistribution": "未確認",
      "ai_training": "未確認",
      "acquisition": "excluded_initial",
      "acquisition_note": "YouTube Studio のログインが必要で、公式ヘルプに『YouTube Studio からのみアクセスできる』とある。自動化はしない。人が個別にダウンロードした MP3 は inbox から取り込み可能（初期の300曲の対象外）",
      "popularity_evidence": "未取得"
    },
    {
      "id": "musmus",
      "name": "MusMus",
      "url": "https://musmus.main.jp/",
      "image": null,
      "image_credit": null,
      "catalog_size": "未確認",
      "terms_urls": [
        "https://musmus.main.jp/info.html"
      ],
      "commercial": "商用利用OK・無料・登録不要（サイトの案内）",
      "credit_required": "YouTube等ではクレジット表記が必要（映像内でも動画説明欄でも可、サイトの案内）",
      "content_id": "未確認",
      "redistribution": "未確認",
      "ai_training": "未確認",
      "acquisition": "official_youtube",
      "acquisition_note": "各曲のページに『YouTubeで聴く』の公式YouTubeリンクがあり、その音声から指紋を作る。サイトのmp3は取得していない",
      "popularity_evidence": "未取得"
    },
    {
      "id": "noiseless_world",
      "name": "騒音のない世界（YouTubeチャンネル）",
      "url": "https://www.youtube.com/@noiseless_world",
      "image": null,
      "image_credit": null,
      "catalog_size": "未確認",
      "terms_urls": [],
      "commercial": "未確認",
      "credit_required": "未確認",
      "content_id": "未確認",
      "redistribution": "未確認",
      "ai_training": "未確認",
      "acquisition": "youtube_video",
      "acquisition_note": "YouTube上の動画（ベンチマーク動画の概要欄のURL）の音声から指紋を作る。規約は未確認",
      "popularity_evidence": "ベンチマーク動画に掲載"
    },
    {
      "id": "artlist",
      "name": "Artlist",
      "url": "https://artlist.io/",
      "image": null,
      "image_credit": null,
      "catalog_size": "未確認",
      "terms_urls": [],
      "commercial": "有償のサブスクリプション（未確認）",
      "credit_required": "未確認",
      "content_id": "未確認",
      "redistribution": "未確認",
      "ai_training": "未確認",
      "acquisition": "official_youtube",
      "acquisition_note": "有償サービスのため、サイトからは取得しない（サイトへのスクリプトアクセスは403）。YouTube上のアーティスト本人/Topicチャンネルの投稿を参照音源にする（2026-09-21、ベンチマーク動画の15曲）。同名の別アーティストの曲を取り違えないよう、アーティスト名がチャンネル名に含まれる投稿だけを採用する（アーティスト名はArtlist曲ページのタイトルを検索結果で確認）",
      "popularity_evidence": "ベンチマーク動画に掲載"
    },
    {
      "id": "hmix",
      "name": "フリー音楽素材 H/MIX GALLERY",
      "url": "https://www.hmix.net/",
      "image": null,
      "image_credit": null,
      "catalog_size": "302曲（公式トップの表記、2026-09-21）",
      "terms_urls": [
        "https://www.hmix.net/terms.html"
      ],
      "commercial": "個人・同人・YouTube（収益化含む）は無料。自社・自作品の商用利用は有料（標準ライセンス）。詳細は規約ページ",
      "credit_required": "著作権表示は任意（無料利用の場合）",
      "content_id": "利用者が楽曲を Content ID 等の権利管理システムに登録することは禁止（規約）",
      "redistribution": "禁止（楽曲ファイルの再配布・二次販売）",
      "ai_training": "禁止（『AI学習データとしての利用』）。本システムの指紋はハッシュで学習ではない",
      "acquisition": "official_youtube",
      "acquisition_note": "サイトはJSアプリ（ログイン連携あり）のためスクリプトでは取得しない。公式YouTube（M-Studio Official Channel の H/MIX GALLERY 紹介61秒クリップ68本、BGM channel by h/mix 秋山裕和 の曲集2本）の音声から指紋を作る（2026-09-21）。全302曲は網羅していない",
      "popularity_evidence": "未取得"
    }
  ],
  "composers": [
    {
      "site_id": "incompetech",
      "composer": "Kevin MacLeod",
      "tracks": [
        {
          "title": "Monkeys Spinning Monkeys",
          "metric": "英語版Wikipedia（Kevin MacLeod）にTikTokで特に再生された曲として記載",
          "value": null,
          "rank": null,
          "fp_status": "none"
        },
        {
          "title": "Electrodoodle",
          "metric": "英語版Wikipedia（Kevin MacLeod）にTikTokで特に再生された曲として記載",
          "value": null,
          "rank": null,
          "fp_status": "none"
        }
      ]
    },
    {
      "site_id": "opentracks",
      "composer": "Sharou",
      "tracks": [
        {
          "title": "Morning",
          "metric": "OpenTracks DL数順ランキング",
          "value": 661785,
          "rank": 1,
          "fp_status": "ok"
        },
        {
          "title": "２:２３ AM",
          "metric": "OpenTracks DL数順ランキング",
          "value": 610583,
          "rank": 2,
          "fp_status": "ok"
        },
        {
          "title": "10℃",
          "metric": "OpenTracks DL数順ランキング",
          "value": 402948,
          "rank": 8,
          "fp_status": "ok"
        },
        {
          "title": "SUMMER TRIANGLE",
          "metric": "OpenTracks DL数順ランキング",
          "value": 362389,
          "rank": 9,
          "fp_status": "ok"
        }
      ]
    },
    {
      "site_id": "opentracks",
      "composer": "KK",
      "tracks": [
        {
          "title": "なんでしょう？",
          "metric": "OpenTracks DL数順ランキング",
          "value": 576815,
          "rank": 3,
          "fp_status": "ok"
        },
        {
          "title": "昼下がり気分",
          "metric": "OpenTracks DL数順ランキング",
          "value": 406271,
          "rank": 7,
          "fp_status": "ok"
        }
      ]
    },
    {
      "site_id": "opentracks",
      "composer": "かずち",
      "tracks": [
        {
          "title": "パステルハウス",
          "metric": "OpenTracks DL数順ランキング",
          "value": 539886,
          "rank": 4,
          "fp_status": "ok"
        }
      ]
    },
    {
      "site_id": "opentracks",
      "composer": "しゃろう",
      "tracks": [
        {
          "title": "野良猫は宇宙を目指した",
          "metric": "OpenTracks DL数順ランキング",
          "value": 468196,
          "rank": 5,
          "fp_status": "none"
        },
        {
          "title": "しゅわしゅわハニーレモン350ml",
          "metric": "OpenTracks DL数順ランキング",
          "value": 325486,
          "rank": 10,
          "fp_status": "none"
        }
      ]
    },
    {
      "site_id": "opentracks",
      "composer": "こおろぎ",
      "tracks": [
        {
          "title": "かえるのピアノ",
          "metric": "OpenTracks DL数順ランキング",
          "value": 410736,
          "rank": 6,
          "fp_status": "ok"
        }
      ]
    },
    {
      "site_id": "opentracks",
      "composer": "もっぴーさうんど / MoppySound",
      "tracks": [
        {
          "title": "ほんわかぷっぷー",
          "metric": "OpenTracks DL数順ランキング",
          "value": 323689,
          "rank": 11,
          "fp_status": "ok"
        }
      ]
    }
  ],
  "detection": {
    "catalogTracks": 1813,
    "featuredTracks": 13,
    "fpStatus": {
      "none": 6,
      "ok": 1807
    },
    "bySite": {
      "opentracks": {
        "tracks": 592,
        "fpOk": 590
      },
      "incompetech": {
        "tracks": 2,
        "fpOk": 0
      },
      "amacha": {
        "tracks": 543,
        "fpOk": 543
      },
      "youtube_audio_library": {
        "tracks": 5,
        "fpOk": 5
      },
      "musmus": {
        "tracks": 216,
        "fpOk": 214
      },
      "noiseless_world": {
        "tracks": 10,
        "fpOk": 10
      },
      "artlist": {
        "tracks": 15,
        "fpOk": 15
      },
      "maoudamashii": {
        "tracks": 360,
        "fpOk": 360
      },
      "hmix": {
        "tracks": 70,
        "fpOk": 70
      }
    }
  }
};
