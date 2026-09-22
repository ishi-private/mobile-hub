// アニメOP/EDまとめのデータ。anime-op-ed.html がこの配列から表を描画する。
// 【生成物】scrape/14_build_data.py が scrape/anime_op_ed_src.txt から生成する。直すのは src.txt（このファイルは手編集しない）。
//
// 記載ルール:
//   - 作品は F:\anime のお気に入り（shared/favorites-data.js の FAVORITES_SEED）から選んだもの（劇場版・OVA・放送前を除く）。
//   - 曲名・歌手・使用話数は日本語版Wikipediaの各作品記事で確認したものだけ（scrape/11 で生wikitextを取得 → 12 で下書き抽出 →
//     人が一覧を読んで確認・修正）。記載のない項目は空欄（表では「—」表示）。記憶で書かない。
//   - 画像は F:\anime のお気に入りページと同じサムネイル（myanimelist.net / animatetimes.com の画像を直接参照）。
//   - 視聴リンクは scrape/anime_op_ed_youtube.json（16_search_youtube.py → 17_pick_youtube.py が候補検索・優先順位で採用動画を決めたもの）を
//     yt として持つ。動画IDは検索結果から取得したもので推測していない。yt が無い曲は q（検索語）からYouTube検索リンクを生成する。
//
// フィールド（作品）:
//   id, title, year(放送開始年), wiki(出典の日本語版Wikipedia記事名), note(任意), image(任意), imageCredit(任意), tracks[]
// フィールド（曲）:
//   kind("OP" | "ED"), name(曲名), artist(歌手), usage(使用話数・期・編), note(任意), q(YouTube検索語),
//   yt(任意): { id: 動画ID, k: "nc"公式ノンクレ | "op"公式OP/ED映像 | "mv"公式MV等 | "au"公式音源(Topic) | "ot"その他,
//               o: 1=公式チャンネル / 0=非公式, ch: チャンネル名, e: 0=埋め込み再生不可(省略=可), alt: 埋め込める代替動画 {id,k,o}(任意),
//               fa: フルサイズ音源 {id,k,o}(任意。個人用サイトだけが使う。TVサイズ等の音が中に見つかった同じ録音＝36_verify_full.py で照合OK) }
window.ANIME_OP_ED_DATA = [
  {
    "id": "rurouni",
    "title": "るろうに剣心 -明治剣客浪漫譚-",
    "year": 1996,
    "wiki": "るろうに剣心 -明治剣客浪漫譚- (アニメ)",
    "note": "1996年版・2023年版（第1期・第2期「京都動乱」）",
    "image": "https://cdn.myanimelist.net/images/anime/1346/119505l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "そばかす",
        "artist": "JUDY AND MARY",
        "usage": "1996年版 第1〜38話",
        "q": "るろうに剣心 -明治剣客浪漫譚- OP そばかす JUDY AND MARY",
        "yt": {
          "id": "Fy4MForBPqc",
          "k": "ot",
          "o": 0,
          "ch": "YUKI VIDEO"
        }
      },
      {
        "kind": "OP",
        "name": "1/2",
        "artist": "川本真琴",
        "usage": "1996年版 第39〜82話",
        "q": "るろうに剣心 -明治剣客浪漫譚- OP 1/2 川本真琴",
        "yt": {
          "id": "SdNIvtev8wA",
          "k": "ot",
          "o": 0,
          "ch": "XIT 27"
        }
      },
      {
        "kind": "OP",
        "name": "君に触れるだけで",
        "artist": "CURIO",
        "usage": "1996年版 第83〜95話",
        "q": "るろうに剣心 -明治剣客浪漫譚- OP 君に触れるだけで CURIO",
        "yt": {
          "id": "F4f27trfq8M",
          "k": "ot",
          "o": 0,
          "ch": "新懐チャンーサブカルの樹",
          "e": 0,
          "alt": {
            "id": "XTcyBXIEG_g",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "OP",
        "name": "飛天",
        "artist": "Ayase×R-指定",
        "usage": "2023年版 第1期 第1クール",
        "q": "るろうに剣心 -明治剣客浪漫譚- OP 飛天 Ayase",
        "yt": {
          "id": "IpTLWGfDrX0",
          "k": "ot",
          "o": 0,
          "ch": "RE:SONG UNIVERSE"
        }
      },
      {
        "kind": "OP",
        "name": "るろうの形代",
        "artist": "菅田将暉×東京スカパラダイスオーケストラ",
        "usage": "2023年版 第1期 第2クール",
        "q": "るろうに剣心 -明治剣客浪漫譚- OP るろうの形代 菅田将暉",
        "yt": {
          "id": "0ujoFDVtOI8",
          "k": "op",
          "o": 1,
          "ch": "アニプレックス チャンネル",
          "fa": {
            "id": "uH8OsrZwkZc",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "OP",
        "name": "いらないもの",
        "artist": "キタニタツヤ×なとり",
        "usage": "2023年版 第2期「京都動乱」第1クール",
        "q": "るろうに剣心 -明治剣客浪漫譚- OP いらないもの キタニタツヤ",
        "yt": {
          "id": "03KqrRhvjw4",
          "k": "op",
          "o": 1,
          "ch": "アニプレックス チャンネル",
          "fa": {
            "id": "QDR-63nrdlE",
            "k": "au",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "BURN",
        "artist": "yama✕WurtS",
        "usage": "2023年版 第2期「京都動乱」第2クール",
        "q": "るろうに剣心 -明治剣客浪漫譚- OP BURN yama✕WurtS",
        "yt": {
          "id": "ZEsyXCanlIA",
          "k": "op",
          "o": 1,
          "ch": "アニプレックス チャンネル",
          "fa": {
            "id": "GD5fJHduztU",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "Tactics",
        "artist": "THE YELLOW MONKEY",
        "usage": "1996年版 第1〜12話",
        "q": "るろうに剣心 -明治剣客浪漫譚- ED Tactics THE YELLOW MONKEY",
        "yt": {
          "id": "2PgNo41p91Q",
          "k": "au",
          "o": 1,
          "ch": "THE YELLOW MONKEY"
        }
      },
      {
        "kind": "ED",
        "name": "涙は知っている",
        "artist": "涼風真世",
        "usage": "1996年版 第13〜27話",
        "q": "るろうに剣心 -明治剣客浪漫譚- ED 涙は知っている 涼風真世",
        "yt": {
          "id": "p-1dpwsmMZw",
          "k": "au",
          "o": 1,
          "ch": "涼風真世"
        }
      },
      {
        "kind": "ED",
        "name": "HEART OF SWORD / 〜夜明け前〜",
        "artist": "T.M.Revolution",
        "usage": "1996年版 第28〜38話、第43〜49話",
        "q": "るろうに剣心 -明治剣客浪漫譚- ED HEART OF SWORD / 〜夜明け前〜 T.M.Revolution",
        "yt": {
          "id": "n7di6LFTtPA",
          "k": "mv",
          "o": 1,
          "ch": "T.M.Revolution"
        }
      },
      {
        "kind": "ED",
        "name": "the Fourth Avenue Café",
        "artist": "L'Arc〜en〜Ciel",
        "usage": "1996年版 第39〜42話",
        "q": "るろうに剣心 -明治剣客浪漫譚- ED the Fourth Avenue Café L'Arc〜en〜Ciel",
        "yt": {
          "id": "loSxMpPL4qo",
          "k": "ot",
          "o": 0,
          "ch": "seung seo"
        }
      },
      {
        "kind": "ED",
        "name": "It's gonna rain!",
        "artist": "BONNIE PINK",
        "usage": "1996年版 第50〜66話",
        "q": "るろうに剣心 -明治剣客浪漫譚- ED It's gonna rain! BONNIE PINK",
        "yt": {
          "id": "knigdXm-woA",
          "k": "mv",
          "o": 1,
          "ch": "ponycanyon"
        }
      },
      {
        "kind": "ED",
        "name": "1/3の純情な感情",
        "artist": "SIAM SHADE",
        "usage": "1996年版 第67〜82話",
        "q": "るろうに剣心 -明治剣客浪漫譚- ED 1/3の純情な感情 SIAM SHADE",
        "yt": {
          "id": "RgC8kKv0hqM",
          "k": "au",
          "o": 1,
          "ch": "Siam Shade - Topic"
        }
      },
      {
        "kind": "ED",
        "name": "ダメ！",
        "artist": "和泉容",
        "usage": "1996年版 第83〜95話",
        "q": "るろうに剣心 -明治剣客浪漫譚- ED ダメ！ 和泉容"
      },
      {
        "kind": "ED",
        "name": "切っ先",
        "artist": "Reol",
        "usage": "2023年版 第1期 第1クール",
        "q": "るろうに剣心 -明治剣客浪漫譚- ED 切っ先 Reol",
        "yt": {
          "id": "24vxDN5m5Q0",
          "k": "ot",
          "o": 0,
          "ch": "獨行貓 MaveriCat"
        }
      },
      {
        "kind": "ED",
        "name": "存在証明",
        "artist": "KID PHENOMENON",
        "usage": "2023年版 第1期 第2クール",
        "q": "るろうに剣心 -明治剣客浪漫譚- ED 存在証明 KID PHENOMENON",
        "yt": {
          "id": "Dxt3qgfKKm4",
          "k": "au",
          "o": 1,
          "ch": "KID PHENOMENON"
        }
      },
      {
        "kind": "ED",
        "name": "水光接天",
        "artist": "NOMELON NOLEMON",
        "usage": "2023年版 第2期「京都動乱」第1クール",
        "q": "るろうに剣心 -明治剣客浪漫譚- ED 水光接天 NOMELON NOLEMON",
        "yt": {
          "id": "j4x3m8Pp56A",
          "k": "au",
          "o": 1,
          "ch": "ツミキ / NOMELON NOLEMON"
        }
      },
      {
        "kind": "ED",
        "name": "ただひとつ",
        "artist": "ざらめ",
        "usage": "2023年版 第2期「京都動乱」第2クール",
        "q": "るろうに剣心 -明治剣客浪漫譚- ED ただひとつ ざらめ",
        "yt": {
          "id": "eyybuqWT7qg",
          "k": "op",
          "o": 1,
          "ch": "アニプレックス チャンネル",
          "fa": {
            "id": "8CzxQUs6Jt8",
            "k": "au",
            "o": 1
          }
        }
      }
    ],
    "favs": [
      "16661",
      "14052",
      "23245",
      "25726"
    ]
  },
  {
    "id": "naruto",
    "title": "NARUTO -ナルト-",
    "year": 2002,
    "wiki": "NARUTO -ナルト- (アニメ)",
    "note": "無印（220話）",
    "image": "https://img2.animatetimes.com/2019/04/5cb03b5d3c130_6318dc7733af9118ce110e06c423230c.jpg",
    "imageCredit": "animatetimes.com",
    "tracks": [
      {
        "kind": "OP",
        "name": "R★O★C★K★S",
        "artist": "HOUND DOG",
        "usage": "第1〜25話",
        "q": "NARUTO -ナルト- OP R★O★C★K★S HOUND DOG"
      },
      {
        "kind": "OP",
        "name": "遥か彼方",
        "artist": "ASIAN KUNG-FU GENERATION",
        "usage": "第26〜53話",
        "q": "NARUTO -ナルト- OP 遥か彼方 ASIAN KUNG-FU GENERATION",
        "yt": {
          "id": "RtO6jkLeoBM",
          "k": "mv",
          "o": 1,
          "ch": "ASIAN KUNG-FU GENERATION Official YouTube Channel"
        }
      },
      {
        "kind": "OP",
        "name": "悲しみをやさしさに",
        "artist": "little by little",
        "usage": "第54〜77話",
        "q": "NARUTO -ナルト- OP 悲しみをやさしさに little by little",
        "yt": {
          "id": "ggw_sjUdTaA",
          "k": "ot",
          "o": 0,
          "ch": "のっこちん"
        }
      },
      {
        "kind": "OP",
        "name": "GO!!!",
        "artist": "FLOW",
        "usage": "第78〜103話",
        "q": "NARUTO -ナルト- OP GO!!! FLOW",
        "yt": {
          "id": "zejYD43HyQo",
          "k": "mv",
          "o": 1,
          "ch": "FLOW Official YouTube Channel"
        }
      },
      {
        "kind": "OP",
        "name": "青春狂騒曲",
        "artist": "サンボマスター",
        "usage": "第104〜128話",
        "q": "NARUTO -ナルト- OP 青春狂騒曲 サンボマスター",
        "yt": {
          "id": "ma3kps5AHOE",
          "k": "au",
          "o": 1,
          "ch": "サンボマスター"
        }
      },
      {
        "kind": "OP",
        "name": "ノーボーイ・ノークライ",
        "artist": "STANCE PUNKS",
        "usage": "第129〜153話",
        "q": "NARUTO -ナルト- OP ノーボーイ・ノークライ STANCE PUNKS",
        "yt": {
          "id": "FH0jaC1bIJ8",
          "k": "mv",
          "o": 1,
          "ch": "Sony Music (Japan)"
        }
      },
      {
        "kind": "OP",
        "name": "波風サテライト",
        "artist": "シュノーケル",
        "usage": "第154〜178話",
        "q": "NARUTO -ナルト- OP 波風サテライト シュノーケル",
        "yt": {
          "id": "JFHFGgSGP9Q",
          "k": "ot",
          "o": 0,
          "ch": "SNOW"
        }
      },
      {
        "kind": "OP",
        "name": "Re:member",
        "artist": "FLOW",
        "usage": "第179〜202話",
        "q": "NARUTO -ナルト- OP Re:member FLOW",
        "yt": {
          "id": "_msng5j20tA",
          "k": "mv",
          "o": 1,
          "ch": "FLOW Official YouTube Channel"
        }
      },
      {
        "kind": "OP",
        "name": "ユラユラ",
        "artist": "Hearts Grow",
        "usage": "第203〜220話",
        "q": "NARUTO -ナルト- OP ユラユラ Hearts Grow",
        "yt": {
          "id": "T30urMGcnuw",
          "k": "au",
          "o": 1,
          "ch": "Hearts Grow - Topic"
        }
      },
      {
        "kind": "ED",
        "name": "Wind",
        "artist": "Akeboshi",
        "usage": "第1〜25話",
        "q": "NARUTO -ナルト- ED Wind Akeboshi",
        "yt": {
          "id": "SaaRwKlcNaA",
          "k": "mv",
          "o": 1,
          "ch": "Akeboshi"
        }
      },
      {
        "kind": "ED",
        "name": "ハルモニア",
        "artist": "RYTHEM",
        "usage": "第26〜51話",
        "q": "NARUTO -ナルト- ED ハルモニア RYTHEM",
        "yt": {
          "id": "sE9Q5RK4ML0",
          "k": "mv",
          "o": 1,
          "ch": "RYTHEMのハモり便"
        }
      },
      {
        "kind": "ED",
        "name": "ビバ★ロック 〜japanese side〜",
        "artist": "ORANGE RANGE",
        "usage": "第52〜64話",
        "q": "NARUTO -ナルト- ED ビバ★ロック 〜japanese side〜 ORANGE RANGE",
        "yt": {
          "id": "k4YJcOrefEg",
          "k": "mv",
          "o": 1,
          "ch": "ORANGE RANGE"
        }
      },
      {
        "kind": "ED",
        "name": "ALIVE",
        "artist": "雷鼓",
        "usage": "第65〜77話",
        "q": "NARUTO -ナルト- ED ALIVE 雷鼓",
        "yt": {
          "id": "rG2VJnixaBI",
          "k": "ot",
          "o": 0,
          "ch": "Weeaboo Animaniaholics"
        }
      },
      {
        "kind": "ED",
        "name": "今まで何度も",
        "artist": "ザ・マスミサイル",
        "usage": "第78〜89話",
        "q": "NARUTO -ナルト- ED 今まで何度も ザ・マスミサイル",
        "yt": {
          "id": "09-n8gL9OkI",
          "k": "mv",
          "o": 1,
          "ch": "ザ・マスミサイル"
        }
      },
      {
        "kind": "ED",
        "name": "流星",
        "artist": "TiA",
        "usage": "第90〜103話",
        "q": "NARUTO -ナルト- ED 流星 TiA",
        "yt": {
          "id": "5-wu3Yal7H4",
          "k": "ot",
          "o": 0,
          "ch": "dumyumdoodles"
        }
      },
      {
        "kind": "ED",
        "name": "マウンテン・ア・ゴーゴー・ツー",
        "artist": "キャプテンストライダム",
        "usage": "第104〜115話",
        "q": "NARUTO -ナルト- ED マウンテン・ア・ゴーゴー・ツー キャプテンストライダム",
        "yt": {
          "id": "IP066d4BkPY",
          "k": "ot",
          "o": 0,
          "ch": "Mobile Melody Series - Topic"
        }
      },
      {
        "kind": "ED",
        "name": "はじめて君としゃべった",
        "artist": "ガガガSP",
        "usage": "第116〜128話",
        "q": "NARUTO -ナルト- ED はじめて君としゃべった ガガガSP",
        "yt": {
          "id": "xGtCZQVa2sg",
          "k": "au",
          "o": 1,
          "ch": "ガガガSP オフィシャルYouTubeチャンネル"
        }
      },
      {
        "kind": "ED",
        "name": "失くした言葉",
        "artist": "No Regret Life",
        "usage": "第129〜141話",
        "q": "NARUTO -ナルト- ED 失くした言葉 No Regret Life"
      },
      {
        "kind": "ED",
        "name": "スピード",
        "artist": "アナログフィッシュ",
        "usage": "第142〜153話",
        "q": "NARUTO -ナルト- ED スピード アナログフィッシュ"
      },
      {
        "kind": "ED",
        "name": "そばにいるから",
        "artist": "AMADORI",
        "usage": "第154〜165話",
        "q": "NARUTO -ナルト- ED そばにいるから AMADORI",
        "yt": {
          "id": "z8t3FtkIEa8",
          "k": "ot",
          "o": 0,
          "ch": "アニソン紹介-AnimeSongPod-"
        }
      },
      {
        "kind": "ED",
        "name": "パレード",
        "artist": "CHABA",
        "usage": "第166〜178話",
        "q": "NARUTO -ナルト- ED パレード CHABA",
        "yt": {
          "id": "dHp_lJYgu3M",
          "k": "ot",
          "o": 0,
          "ch": "Kin Lost in Universe"
        }
      },
      {
        "kind": "ED",
        "name": "Yellow moon",
        "artist": "Akeboshi",
        "usage": "第179〜191話",
        "q": "NARUTO -ナルト- ED Yellow moon Akeboshi",
        "yt": {
          "id": "aZq8luXZsH0",
          "k": "ot",
          "o": 0,
          "ch": "MUSIC Liverary"
        }
      },
      {
        "kind": "ED",
        "name": "ピノキオ",
        "artist": "オレスカバンド",
        "usage": "第192〜202話",
        "q": "NARUTO -ナルト- ED ピノキオ オレスカバンド"
      },
      {
        "kind": "ED",
        "name": "シナリオ",
        "artist": "SABOTEN",
        "usage": "第203〜220話",
        "q": "NARUTO -ナルト- ED シナリオ SABOTEN",
        "yt": {
          "id": "UShGn4SJTf8",
          "k": "au",
          "o": 1,
          "ch": "Saboten - Topic"
        }
      }
    ],
    "favs": [
      "1695"
    ]
  },
  {
    "id": "hagaren03",
    "title": "鋼の錬金術師（2003）",
    "year": 2003,
    "wiki": "鋼の錬金術師 (アニメ)",
    "note": "2003年版",
    "image": "https://cdn.myanimelist.net/images/anime/10/75815l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "メリッサ",
        "artist": "ポルノグラフィティ",
        "usage": "第1期（第2〜13話）",
        "note": "第1話ではエンディングテーマとして使用",
        "q": "鋼の錬金術師（2003） OP メリッサ ポルノグラフィティ",
        "yt": {
          "id": "YSa3cEkI4GE",
          "k": "ot",
          "o": 0,
          "ch": "いけちゃん"
        }
      },
      {
        "kind": "OP",
        "name": "READY STEADY GO",
        "artist": "L'Arc〜en〜Ciel",
        "usage": "第2期（第14〜25話）",
        "q": "鋼の錬金術師（2003） OP READY STEADY GO L'Arc〜en〜Ciel",
        "yt": {
          "id": "NZdjDUjzUiQ",
          "k": "mv",
          "o": 1,
          "ch": "L'Arc-en-Ciel"
        }
      },
      {
        "kind": "OP",
        "name": "UNDO",
        "artist": "COOL JOKE",
        "usage": "第3期（第26〜41話）",
        "q": "鋼の錬金術師（2003） OP UNDO COOL JOKE",
        "yt": {
          "id": "RXCdBw5Ft2s",
          "k": "au",
          "o": 1,
          "ch": "Cool Joke - Topic"
        }
      },
      {
        "kind": "OP",
        "name": "リライト",
        "artist": "ASIAN KUNG-FU GENERATION",
        "usage": "第4期（第42〜51話）",
        "q": "鋼の錬金術師（2003） OP リライト ASIAN KUNG-FU GENERATION",
        "yt": {
          "id": "omkKMzR_vZY",
          "k": "au",
          "o": 1,
          "ch": "ASIAN KUNG-FU GENERATION Official YouTube Channel"
        }
      },
      {
        "kind": "ED",
        "name": "消せない罪",
        "artist": "北出菜奈",
        "usage": "第1期（第2〜13話）",
        "note": "第7話ではエンディングアニメーションが一部変更",
        "q": "鋼の錬金術師（2003） ED 消せない罪 北出菜奈",
        "yt": {
          "id": "G4--RPSPnWU",
          "k": "ot",
          "o": 0,
          "ch": "shiromawari"
        }
      },
      {
        "kind": "ED",
        "name": "扉の向こうへ",
        "artist": "YeLLOW Generation",
        "usage": "第2期（第14〜24話）",
        "note": "第25話では提供クレジットで使用",
        "q": "鋼の錬金術師（2003） ED 扉の向こうへ YeLLOW Generation",
        "yt": {
          "id": "D8_Rk2VRrZ4",
          "k": "ot",
          "o": 0,
          "ch": "largogrunge2"
        }
      },
      {
        "kind": "ED",
        "name": "Motherland",
        "artist": "Crystal Kay",
        "usage": "第3期（第26〜41話）",
        "q": "鋼の錬金術師（2003） ED Motherland Crystal Kay",
        "yt": {
          "id": "zkiPhkfuheA",
          "k": "nc",
          "o": 0,
          "ch": "Nagatomo",
          "fa": {
            "id": "AgQBPmhJKeQ",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "I Will",
        "artist": "Sowelu",
        "usage": "第4期（第42〜50話）",
        "note": "第51話では提供クレジットで使用",
        "q": "鋼の錬金術師（2003） ED I Will Sowelu",
        "yt": {
          "id": "lsFjBYEqQtE",
          "k": "au",
          "o": 1,
          "ch": "Sowelu - Topic"
        }
      }
    ],
    "favs": [
      "384"
    ]
  },
  {
    "id": "geass",
    "title": "コードギアス 反逆のルルーシュ",
    "year": 2006,
    "wiki": "コードギアス 反逆のルルーシュ",
    "note": "R1・R2",
    "image": "https://cdn.myanimelist.net/images/anime/1032/135088l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "COLORS",
        "artist": "FLOW",
        "usage": "第1期 第1クール（STAGE 1〜12）",
        "q": "コードギアス 反逆のルルーシュ OP COLORS FLOW",
        "yt": {
          "id": "H7cykKMpp_I",
          "k": "mv",
          "o": 1,
          "ch": "FLOW Official YouTube Channel"
        }
      },
      {
        "kind": "OP",
        "name": "解読不能",
        "artist": "ジン",
        "usage": "第1期 第2クール（STAGE 13〜23）",
        "q": "コードギアス 反逆のルルーシュ OP 解読不能 ジン",
        "yt": {
          "id": "piT9VI2zy5o",
          "k": "mv",
          "o": 1,
          "ch": "コードギアスチャンネル CODEGEASS Channel"
        }
      },
      {
        "kind": "OP",
        "name": "瞳ノ翼",
        "artist": "access",
        "usage": "第1期 STAGE 24・25、SPECIAL EDITION",
        "q": "コードギアス 反逆のルルーシュ OP 瞳ノ翼 access",
        "yt": {
          "id": "hp-ooLHwq_g",
          "k": "au",
          "o": 1,
          "ch": "accessofficial"
        }
      },
      {
        "kind": "OP",
        "name": "O2",
        "artist": "ORANGE RANGE",
        "usage": "R2 第1クール（TURN 01〜12）",
        "q": "コードギアス 反逆のルルーシュ OP O2 ORANGE RANGE",
        "yt": {
          "id": "n-3SrDQiFU4",
          "k": "mv",
          "o": 1,
          "ch": "ORANGE RANGE"
        }
      },
      {
        "kind": "OP",
        "name": "WORLD END",
        "artist": "FLOW",
        "usage": "R2 第2クール（TURN 13〜25）",
        "q": "コードギアス 反逆のルルーシュ OP WORLD END FLOW",
        "yt": {
          "id": "yySkwG-reF4",
          "k": "mv",
          "o": 1,
          "ch": "コードギアスチャンネル CODEGEASS Channel",
          "fa": {
            "id": "a7Jywlc6wlA",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "勇侠青春謳",
        "artist": "ALI PROJECT",
        "usage": "第1期 第1クール（STAGE 1〜12）",
        "q": "コードギアス 反逆のルルーシュ ED 勇侠青春謳 ALI PROJECT",
        "yt": {
          "id": "b2SxY0zYNRM",
          "k": "mv",
          "o": 1,
          "ch": "FlyingDog"
        }
      },
      {
        "kind": "ED",
        "name": "モザイクカケラ",
        "artist": "SunSet Swish",
        "usage": "第1期 第2クール（STAGE 13〜25）、スペシャル",
        "q": "コードギアス 反逆のルルーシュ ED モザイクカケラ SunSet Swish",
        "yt": {
          "id": "ked9t2AlGTA",
          "k": "mv",
          "o": 1,
          "ch": "SunSet Swish Official"
        }
      },
      {
        "kind": "ED",
        "name": "シアワセネイロ",
        "artist": "ORANGE RANGE",
        "usage": "R2 第1クール（TURN 01〜12）",
        "q": "コードギアス 反逆のルルーシュ ED シアワセネイロ ORANGE RANGE",
        "yt": {
          "id": "e7k0SUrxhSQ",
          "k": "mv",
          "o": 1,
          "ch": "コードギアスチャンネル CODEGEASS Channel",
          "fa": {
            "id": "njty2yui0PA",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "わが﨟たし悪の華",
        "artist": "ALI PROJECT",
        "usage": "R2 第2クール（TURN 13〜25）",
        "q": "コードギアス 反逆のルルーシュ ED わが﨟たし悪の華 ALI PROJECT",
        "yt": {
          "id": "xpJilCH2zZg",
          "k": "mv",
          "o": 1,
          "ch": "FlyingDog"
        }
      }
    ],
    "favs": [
      "15065",
      "12745"
    ]
  },
  {
    "id": "minamike",
    "title": "みなみけ",
    "year": 2007,
    "wiki": "みなみけ",
    "note": "1〜4期",
    "image": "https://img2.animatetimes.com/2018/11/3105a1dfdc569559fa41d2c859609fd269043c3f1de8d1_53054895_ee9552e0d441d833a6ef50517ba094bdc55664af-e1761885258456.jpg",
    "imageCredit": "animatetimes.com",
    "tracks": [
      {
        "kind": "OP",
        "name": "経験値上昇中☆",
        "artist": "みなみけ3姉妹",
        "usage": "第1期",
        "q": "みなみけ OP 経験値上昇中☆ みなみけ3姉妹",
        "yt": {
          "id": "dVBVs64xihM",
          "k": "mv",
          "o": 1,
          "ch": "「KING AMUSEMENT CREATIVE」公式チャンネル",
          "fa": {
            "id": "5hx4zlXA550",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "OP",
        "name": "ココロノツバサ",
        "artist": "みなみけ3姉妹",
        "usage": "第2期",
        "q": "みなみけ OP ココロノツバサ みなみけ3姉妹",
        "yt": {
          "id": "P9ck5hD47SM",
          "k": "mv",
          "o": 1,
          "ch": "「KING AMUSEMENT CREATIVE」公式チャンネル",
          "fa": {
            "id": "uyrYLjuBtwk",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "OP",
        "name": "経験値速上々↑↑",
        "artist": "みなみけ3姉妹",
        "usage": "第3期",
        "q": "みなみけ OP 経験値速上々↑↑ みなみけ3姉妹",
        "yt": {
          "id": "hOpRssVsQjc",
          "k": "mv",
          "o": 1,
          "ch": "「KING AMUSEMENT CREATIVE」公式チャンネル"
        }
      },
      {
        "kind": "OP",
        "name": "シアワセ☆ハイテンション↑↑",
        "artist": "南春香（佐藤利奈）、南夏奈（井上麻里奈）、南千秋（茅原実里）",
        "usage": "第4期",
        "q": "みなみけ OP シアワセ☆ハイテンション↑↑ 南春香",
        "yt": {
          "id": "aBy9QERq_lQ",
          "k": "ot",
          "o": 0,
          "ch": "Haruka Minami(CV:Rina Satoh) - Topic"
        }
      },
      {
        "kind": "ED",
        "name": "カラフルDAYS",
        "artist": "みなみけ3姉妹",
        "usage": "第1期",
        "q": "みなみけ ED カラフルDAYS みなみけ3姉妹",
        "yt": {
          "id": "yMu577MgCvw",
          "k": "mv",
          "o": 1,
          "ch": "「KING AMUSEMENT CREATIVE」公式チャンネル",
          "fa": {
            "id": "DZjMDNPekiE",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "その声が聴きたくて",
        "artist": "みなみけ3姉妹",
        "usage": "第2期",
        "q": "みなみけ ED その声が聴きたくて みなみけ3姉妹",
        "yt": {
          "id": "LGbjqampSg4",
          "k": "mv",
          "o": 1,
          "ch": "「KING AMUSEMENT CREATIVE」公式チャンネル",
          "fa": {
            "id": "_KAcz4txXHE",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "絶対カラフル宣言",
        "artist": "みなみけ3姉妹",
        "usage": "第3期",
        "q": "みなみけ ED 絶対カラフル宣言 みなみけ3姉妹",
        "yt": {
          "id": "fU-05ysYkPA",
          "k": "ot",
          "o": 0,
          "ch": "hosiken856563",
          "fa": {
            "id": "JHK2pHYtKLU",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "急接近ラッキーDAYS",
        "artist": "南春香（佐藤利奈）、南夏奈（井上麻里奈）、南千秋（茅原実里）",
        "usage": "第4期",
        "q": "みなみけ ED 急接近ラッキーDAYS 南春香",
        "yt": {
          "id": "11MJoInGkbY",
          "k": "ot",
          "o": 0,
          "ch": "amenohayasi"
        }
      },
      {
        "kind": "ED",
        "name": "クリスマスの歌",
        "artist": "保坂（小野大輔）",
        "usage": "第4期",
        "q": "みなみけ ED クリスマスの歌 保坂",
        "yt": {
          "id": "i_r6gU2YNR4",
          "k": "ot",
          "o": 0,
          "ch": "crashyu"
        }
      }
    ],
    "favs": [
      "210",
      "14481",
      "14482",
      "14350"
    ]
  },
  {
    "id": "hagarenfa",
    "title": "鋼の錬金術師 FULLMETAL ALCHEMIST",
    "year": 2009,
    "wiki": "鋼の錬金術師 FULLMETAL ALCHEMIST",
    "note": "2009年版",
    "image": "https://cdn.myanimelist.net/images/anime/1208/94745l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "again",
        "artist": "YUI",
        "usage": "第1期（第1〜14話）",
        "q": "鋼の錬金術師 FULLMETAL ALCHEMIST OP again YUI",
        "yt": {
          "id": "x8FC4tIszgU",
          "k": "au",
          "o": 1,
          "ch": "YUI OFFICIAL YouTube CHANNEL"
        }
      },
      {
        "kind": "OP",
        "name": "ホログラム",
        "artist": "NICO Touches the Walls",
        "usage": "第2期（第15〜26話）",
        "note": "最終話のエンディングに使用",
        "q": "鋼の錬金術師 FULLMETAL ALCHEMIST OP ホログラム NICO Touches the Walls",
        "yt": {
          "id": "XoAeV5m2pOk",
          "k": "au",
          "o": 1,
          "ch": "NICO Touches the Walls Official YouTube Channel"
        }
      },
      {
        "kind": "OP",
        "name": "ゴールデンタイムラバー",
        "artist": "スキマスイッチ",
        "usage": "第3期（第27〜38話）",
        "q": "鋼の錬金術師 FULLMETAL ALCHEMIST OP ゴールデンタイムラバー スキマスイッチ",
        "yt": {
          "id": "0iAF8TJAqp4",
          "k": "mv",
          "o": 1,
          "ch": "スキマスイッチ / SUKIMASWITCH"
        }
      },
      {
        "kind": "OP",
        "name": "Period",
        "artist": "CHEMISTRY",
        "usage": "第4期（第39〜50話）",
        "q": "鋼の錬金術師 FULLMETAL ALCHEMIST OP Period CHEMISTRY",
        "yt": {
          "id": "xslAjvvlJkE",
          "k": "mv",
          "o": 1,
          "ch": "CHEMISTRY Official YouTube Channel"
        }
      },
      {
        "kind": "OP",
        "name": "レイン",
        "artist": "シド",
        "usage": "最終期（第51〜60話、第62話）",
        "note": "第52話・第61話では挿入歌、第63話ではエンディングに使用",
        "q": "鋼の錬金術師 FULLMETAL ALCHEMIST OP レイン シド",
        "yt": {
          "id": "MRulD9u9BIk",
          "k": "ot",
          "o": 0,
          "ch": "Vega Orgel - Topic"
        }
      },
      {
        "kind": "ED",
        "name": "嘘",
        "artist": "シド",
        "usage": "第1期（第1〜14話）",
        "q": "鋼の錬金術師 FULLMETAL ALCHEMIST ED 嘘 シド"
      },
      {
        "kind": "ED",
        "name": "LET IT OUT",
        "artist": "福原美穂",
        "usage": "第2期（第15〜26話）",
        "note": "第27話では挿入歌として使用",
        "q": "鋼の錬金術師 FULLMETAL ALCHEMIST ED LET IT OUT 福原美穂",
        "yt": {
          "id": "WPjVQ6OM-7o",
          "k": "au",
          "o": 1,
          "ch": "Miho Fukuhara's official YouTube CHANNEL."
        }
      },
      {
        "kind": "ED",
        "name": "つないだ手",
        "artist": "Lil'B",
        "usage": "第3期（第27〜38話）",
        "q": "鋼の錬金術師 FULLMETAL ALCHEMIST ED つないだ手 Lil'B",
        "yt": {
          "id": "OchB4oXGQLk",
          "k": "ot",
          "o": 0,
          "ch": "nd7070"
        }
      },
      {
        "kind": "ED",
        "name": "瞬間センチメンタル",
        "artist": "SCANDAL",
        "usage": "第4期（第39〜50話）",
        "note": "第45話では特別版がオンエア",
        "q": "鋼の錬金術師 FULLMETAL ALCHEMIST ED 瞬間センチメンタル SCANDAL",
        "yt": {
          "id": "38bhs0MnvxI",
          "k": "mv",
          "o": 1,
          "ch": "SCANDAL"
        }
      },
      {
        "kind": "ED",
        "name": "RAY OF LIGHT",
        "artist": "中川翔子",
        "usage": "最終期（第51〜62話）",
        "q": "鋼の錬金術師 FULLMETAL ALCHEMIST ED RAY OF LIGHT 中川翔子",
        "yt": {
          "id": "EbTJugG46iA",
          "k": "mv",
          "o": 1,
          "ch": "Shoko Nakagawa OFFICIAL YouTube CHANNEL"
        }
      }
    ],
    "favs": [
      "15347"
    ]
  },
  {
    "id": "danball",
    "title": "ダンボール戦機",
    "year": 2011,
    "wiki": "ダンボール戦機",
    "note": "第1期=無印・第2期=W・第3期=WARS",
    "image": "https://cdn.myanimelist.net/images/anime/1937/94703l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "1ドリーム",
        "artist": "Little Blue boX",
        "usage": "第1期 第1話〜第24話",
        "q": "ダンボール戦機 OP 1ドリーム Little Blue boX",
        "yt": {
          "id": "-mo64M6sa-E",
          "k": "mv",
          "o": 1,
          "ch": "avex"
        }
      },
      {
        "kind": "OP",
        "name": "以心伝心",
        "artist": "Little Blue boX",
        "usage": "第1期 第25話〜第44話",
        "q": "ダンボール戦機 OP 以心伝心 Little Blue boX",
        "yt": {
          "id": "rQ9pakYRuf4",
          "k": "mv",
          "o": 1,
          "ch": "avex",
          "fa": {
            "id": "oG3oP2Px5S4",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "OP",
        "name": "BRAVE HERO",
        "artist": "Little Blue boX",
        "usage": "第2期 第1話〜第16話",
        "q": "ダンボール戦機 OP BRAVE HERO Little Blue boX",
        "yt": {
          "id": "TKF8Sjj3lyw",
          "k": "mv",
          "o": 1,
          "ch": "avex",
          "fa": {
            "id": "qEqljMsCcLE",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "OP",
        "name": "三位一体",
        "artist": "Little Blue boX",
        "usage": "第2期 第17話〜第34話",
        "q": "ダンボール戦機 OP 三位一体 Little Blue boX",
        "yt": {
          "id": "wTeQL_Cd9r4",
          "k": "mv",
          "o": 1,
          "ch": "avex",
          "fa": {
            "id": "oFqMmJmR3y4",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "OP",
        "name": "2スピリッツ",
        "artist": "リトルブルーボックス",
        "usage": "第2期 第35話〜第45話",
        "q": "ダンボール戦機 OP 2スピリッツ リトルブルーボックス",
        "yt": {
          "id": "wBe2CeacwV0",
          "k": "mv",
          "o": 1,
          "ch": "avex",
          "fa": {
            "id": "x9w7hY9UeZ0",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "OP",
        "name": "テレパシー",
        "artist": "リトルブルーボックス",
        "usage": "第2期 第46話〜第58話",
        "q": "ダンボール戦機 OP テレパシー リトルブルーボックス",
        "yt": {
          "id": "CGZvBJ3xlSc",
          "k": "mv",
          "o": 1,
          "ch": "avex",
          "fa": {
            "id": "Wn7DfzaxZwE",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "OP",
        "name": "無限マイセルフ",
        "artist": "リトルブルーボックス",
        "usage": "第3期 第1話〜第21話",
        "q": "ダンボール戦機 OP 無限マイセルフ リトルブルーボックス",
        "yt": {
          "id": "DpxdKqrzqBY",
          "k": "mv",
          "o": 1,
          "ch": "avex",
          "fa": {
            "id": "XkmMuz5oZos",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "OP",
        "name": "エターナル",
        "artist": "リトルブルーボックス",
        "usage": "第3期 第22話〜第37話",
        "q": "ダンボール戦機 OP エターナル リトルブルーボックス",
        "yt": {
          "id": "eT1lmJWrbr4",
          "k": "mv",
          "o": 1,
          "ch": "avex",
          "fa": {
            "id": "yvUHHXEdaI8",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "僕の貯金箱",
        "artist": "前川紘毅",
        "usage": "第1期 第1話〜第24話",
        "q": "ダンボール戦機 ED 僕の貯金箱 前川紘毅",
        "yt": {
          "id": "oO0qAJb-YoU",
          "k": "au",
          "o": 1,
          "ch": "前川紘毅 - Topic"
        }
      },
      {
        "kind": "ED",
        "name": "ヒミツキチ",
        "artist": "前川紘毅",
        "usage": "第1期 第25話〜第44話",
        "q": "ダンボール戦機 ED ヒミツキチ 前川紘毅",
        "yt": {
          "id": "21WVFTGqes4",
          "k": "au",
          "o": 1,
          "ch": "前川紘毅 - Topic"
        }
      },
      {
        "kind": "ED",
        "name": "Do Wak パラッパ",
        "artist": "前川紘毅",
        "usage": "第2期 第1話〜第16話",
        "q": "ダンボール戦機 ED Do Wak パラッパ 前川紘毅",
        "yt": {
          "id": "90VSb3uPwsM",
          "k": "au",
          "o": 1,
          "ch": "前川紘毅 - Topic"
        }
      },
      {
        "kind": "ED",
        "name": "目を閉じて…",
        "artist": "前川紘毅",
        "usage": "第2期 第17話〜第34話、第58話",
        "q": "ダンボール戦機 ED 目を閉じて… 前川紘毅",
        "yt": {
          "id": "C5jhCndZgJs",
          "k": "au",
          "o": 1,
          "ch": "前川紘毅 - Topic"
        }
      },
      {
        "kind": "ED",
        "name": "生まれ変わっても僕でいいよ",
        "artist": "前川紘毅",
        "usage": "第2期 第35話〜第45話",
        "q": "ダンボール戦機 ED 生まれ変わっても僕でいいよ 前川紘毅",
        "yt": {
          "id": "kAuBpFQ0Hos",
          "k": "au",
          "o": 1,
          "ch": "前川紘毅 - Topic"
        }
      },
      {
        "kind": "ED",
        "name": "地球の絆",
        "artist": "Dream5",
        "usage": "第2期 第46話〜第57話",
        "q": "ダンボール戦機 ED 地球の絆 Dream5",
        "yt": {
          "id": "e_iXV5Dr1TU",
          "k": "ot",
          "o": 0,
          "ch": "神田実来"
        }
      },
      {
        "kind": "ED",
        "name": "神様 ヤーヤーヤー",
        "artist": "Dream5",
        "usage": "第3期 第2話〜第21話",
        "q": "ダンボール戦機 ED 神様 ヤーヤーヤー Dream5",
        "yt": {
          "id": "cXXHPJ0wbMI",
          "k": "au",
          "o": 1,
          "ch": "dream5go"
        }
      },
      {
        "kind": "ED",
        "name": "ぼくたちのウォーズ",
        "artist": "瀬名アラタ（逢坂良太）、星原ヒカル（石塚さより）、出雲ハルキ（前野智昭）",
        "usage": "第3期 第22話〜第36話",
        "q": "ダンボール戦機 ED ぼくたちのウォーズ 瀬名アラタ",
        "yt": {
          "id": "dzzpeEA-gFg",
          "k": "ot",
          "o": 0,
          "ch": "lightning11sk",
          "fa": {
            "id": "XJoggcbHKrc",
            "k": "ot",
            "o": 0
          },
          "e": 0,
          "alt": {
            "id": "XJoggcbHKrc",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "閃き",
        "artist": "瀬名アラタ（逢坂良太）",
        "usage": "第3期 第37話",
        "q": "ダンボール戦機 ED 閃き 瀬名アラタ",
        "yt": {
          "id": "AIP_p_GxLv4",
          "k": "ot",
          "o": 0,
          "ch": "obratoto"
        }
      }
    ],
    "favs": [
      "2149",
      "13976",
      "14850"
    ]
  },
  {
    "id": "hxh",
    "title": "HUNTER×HUNTER（2011）",
    "year": 2011,
    "wiki": "HUNTER×HUNTER (2011年のアニメ)",
    "note": "2011年版",
    "image": "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "departure!",
        "artist": "小野正利",
        "usage": "第1話〜第26話、第50話〜第52話、第62話〜第75話、第137話〜第147話",
        "q": "HUNTER×HUNTER（2011） OP departure! 小野正利",
        "yt": {
          "id": "sYv4fgtQRfY",
          "k": "au",
          "o": 1,
          "ch": "小野正利"
        }
      },
      {
        "kind": "OP",
        "name": "departure! -second version-",
        "artist": "小野正利",
        "usage": "第27話〜第49話、第76話〜第103話、第109話〜第134話、第136話",
        "q": "HUNTER×HUNTER（2011） OP departure! -second version- 小野正利"
      },
      {
        "kind": "OP",
        "name": "departure! -オープニング特別版-",
        "artist": "小野正利",
        "usage": "第53話〜第61話、第104話〜第108話",
        "q": "HUNTER×HUNTER（2011） OP departure! -オープニング特別版- 小野正利"
      },
      {
        "kind": "ED",
        "name": "JUST AWAKE",
        "artist": "Fear, and Loathing in Las Vegas",
        "usage": "第1話〜第26話",
        "q": "HUNTER×HUNTER（2011） ED JUST AWAKE Fear",
        "yt": {
          "id": "9TzEsDYuiyI",
          "k": "au",
          "o": 1,
          "ch": "Fear, and Loathing in Las Vegas",
          "fa": {
            "id": "6ocwpTMyBbE",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "HUNTING FOR YOUR DREAM",
        "artist": "GALNERYUS",
        "usage": "第27話〜第50話、第52話〜第58話",
        "q": "HUNTER×HUNTER（2011） ED HUNTING FOR YOUR DREAM GALNERYUS",
        "yt": {
          "id": "6FhmyWT-_0U",
          "k": "mv",
          "o": 1,
          "ch": "GALNERYUS"
        }
      },
      {
        "kind": "ED",
        "name": "REASON",
        "artist": "ゆず",
        "usage": "第59話〜第75話、第147話",
        "q": "HUNTER×HUNTER（2011） ED REASON ゆず",
        "yt": {
          "id": "cyq5bUXpnYI",
          "k": "mv",
          "o": 1,
          "ch": "TOYSFACTORYJP"
        }
      },
      {
        "kind": "ED",
        "name": "流れ星キラリ（ゆずバージョン）",
        "artist": "ゆず",
        "usage": "第76話〜第98話",
        "q": "HUNTER×HUNTER（2011） ED 流れ星キラリ（ゆずバージョン） ゆず",
        "yt": {
          "id": "_mS3_IUHhBk",
          "k": "ot",
          "o": 0,
          "ch": "野心the legendary Weekender Girl;"
        }
      },
      {
        "kind": "ED",
        "name": "表裏一体",
        "artist": "ゆず",
        "usage": "第99話〜第134話、第136話〜第146話",
        "q": "HUNTER×HUNTER（2011） ED 表裏一体 ゆず",
        "yt": {
          "id": "eKoD2CRr_KA",
          "k": "mv",
          "o": 1,
          "ch": "yuzuofficial"
        }
      }
    ],
    "favs": [
      "2420"
    ]
  },
  {
    "id": "fatezero",
    "title": "Fate/Zero",
    "year": 2012,
    "wiki": "Fate/Zero",
    "image": "https://cdn.myanimelist.net/images/anime/1887/117644l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "oath sign",
        "artist": "LiSA",
        "usage": "第1期 第2話〜第10話、第12話〜第13話、Remix I・II",
        "q": "Fate/Zero OP oath sign LiSA",
        "yt": {
          "id": "OcNSFV5Io0Q",
          "k": "mv",
          "o": 1,
          "ch": "LiSA Official YouTube"
        }
      },
      {
        "kind": "OP",
        "name": "to the beginning",
        "artist": "Kalafina",
        "usage": "第2期 第14〜17話、第20〜23話",
        "note": "「Remix II」のエンディングテーマとしても使用",
        "q": "Fate/Zero OP to the beginning Kalafina",
        "yt": {
          "id": "QproZ4l8yqo",
          "k": "au",
          "o": 1,
          "ch": "Kalafina Official YouTube Channel"
        }
      },
      {
        "kind": "ED",
        "name": "MEMORIA",
        "artist": "藍井エイル",
        "usage": "第1期 第2話〜第13話、Remix I",
        "q": "Fate/Zero ED MEMORIA 藍井エイル",
        "yt": {
          "id": "LnMA-BrpDCg",
          "k": "mv",
          "o": 1,
          "ch": "Eir Aoi Official YouTube Channel"
        }
      },
      {
        "kind": "ED",
        "name": "空は高く風は歌う",
        "artist": "春奈るな",
        "usage": "第2期 第14話〜第17話、第20話〜第24話",
        "q": "Fate/Zero ED 空は高く風は歌う 春奈るな",
        "yt": {
          "id": "4vRtHhgKyEY",
          "k": "mv",
          "o": 1,
          "ch": "Luna Haruna / 春奈るな"
        }
      },
      {
        "kind": "ED",
        "name": "満天",
        "artist": "Kalafina",
        "usage": "第2期 第18話、第19話",
        "q": "Fate/Zero ED 満天 Kalafina",
        "yt": {
          "id": "54CgKKJd4WQ",
          "k": "au",
          "o": 1,
          "ch": "Kalafina Official YouTube Channel"
        }
      }
    ],
    "favs": [
      "2297"
    ]
  },
  {
    "id": "gintama",
    "title": "銀魂' 延長戦",
    "year": 2012,
    "wiki": "銀魂 (アニメ)",
    "note": "銀魂' 延長戦",
    "image": "https://cdn.myanimelist.net/images/anime/1452/123686l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "LET'S GO OUT",
        "artist": "AMOYAMO",
        "usage": "第253〜256話",
        "q": "銀魂' 延長戦 OP LET'S GO OUT AMOYAMO",
        "yt": {
          "id": "4TctcvXwRFA",
          "k": "mv",
          "o": 1,
          "ch": "Sony Music (Japan)",
          "fa": {
            "id": "pNGKZxLpy74",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "OP",
        "name": "サクラミツツキ",
        "artist": "SPYAIR",
        "usage": "第257〜265話",
        "q": "銀魂' 延長戦 OP サクラミツツキ SPYAIR",
        "yt": {
          "id": "npMg0Ua9mJU",
          "k": "au",
          "o": 1,
          "ch": "SPYAIR Official YouTube Channel"
        }
      },
      {
        "kind": "ED",
        "name": "ムーンウォーク",
        "artist": "MONOBRIGHT",
        "usage": "第253〜256話",
        "q": "銀魂' 延長戦 ED ムーンウォーク MONOBRIGHT",
        "yt": {
          "id": "6LIuOiLxi4w",
          "k": "mv",
          "o": 1,
          "ch": "Sony Music (Japan)"
        }
      },
      {
        "kind": "ED",
        "name": "エクスペクト",
        "artist": "PAGE",
        "usage": "第257〜265話",
        "q": "銀魂' 延長戦 ED エクスペクト PAGE",
        "yt": {
          "id": "TNKAbk0gpH4",
          "k": "au",
          "o": 1,
          "ch": "PAGE - Topic"
        }
      }
    ],
    "favs": [
      "14060"
    ]
  },
  {
    "id": "hyouka",
    "title": "氷菓",
    "year": 2012,
    "wiki": "〈古典部〉シリーズ",
    "image": "https://cdn.myanimelist.net/images/anime/13/50521l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "優しさの理由",
        "artist": "ChouCho",
        "usage": "第1話〜第11.5話",
        "q": "氷菓 OP 優しさの理由 ChouCho",
        "yt": {
          "id": "RpqqaNJuopc",
          "k": "nc",
          "o": 1,
          "ch": "KADOKAWAanime",
          "fa": {
            "id": "0hJiMN4Csjw",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "未完成ストライド",
        "artist": "こだまさおり",
        "usage": "第13話〜第22話",
        "q": "氷菓 OP 未完成ストライド こだまさおり",
        "yt": {
          "id": "2IfqimeWay8",
          "k": "nc",
          "o": 1,
          "ch": "KADOKAWAanime",
          "fa": {
            "id": "Ig4v6ON1f1k",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "まどろみの約束",
        "artist": "千反田える（佐藤聡美）、伊原摩耶花（茅野愛衣）",
        "usage": "第2話〜第11.5話",
        "q": "氷菓 ED まどろみの約束 千反田える",
        "yt": {
          "id": "tL6BMqnSdH8",
          "k": "nc",
          "o": 1,
          "ch": "KADOKAWAanime",
          "fa": {
            "id": "b4DpSSbKuuQ",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "君にまつわるミステリー",
        "artist": "千反田える（佐藤聡美）、伊原摩耶花（茅野愛衣）",
        "usage": "第12話〜第22話",
        "q": "氷菓 ED 君にまつわるミステリー 千反田える",
        "yt": {
          "id": "7OHW_vxDl0g",
          "k": "nc",
          "o": 1,
          "ch": "KADOKAWAanime",
          "fa": {
            "id": "qjqvu70WBTk",
            "k": "ot",
            "o": 0
          }
        }
      }
    ],
    "favs": [
      "2780"
    ]
  },
  {
    "id": "nagiasu",
    "title": "凪のあすから",
    "year": 2013,
    "wiki": "凪のあすから",
    "image": "https://cdn.myanimelist.net/images/anime/7/53549l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "lull〜そして僕らは〜",
        "artist": "Ray",
        "usage": "第1話〜第13話",
        "q": "凪のあすから OP lull〜そして僕らは〜 Ray",
        "yt": {
          "id": "INV83XSs6A4",
          "k": "op",
          "o": 1,
          "ch": "NBCUniversal Anime/Music"
        }
      },
      {
        "kind": "OP",
        "name": "ebb and flow",
        "artist": "Ray",
        "usage": "第14話〜第24話",
        "q": "凪のあすから OP ebb and flow Ray",
        "yt": {
          "id": "RCcKHjjaqeY",
          "k": "op",
          "o": 1,
          "ch": "NBCUniversal Anime/Music",
          "fa": {
            "id": "3LjKx9Ikp8w",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "アクアテラリウム",
        "artist": "やなぎなぎ",
        "usage": "第1話〜第13話",
        "q": "凪のあすから ED アクアテラリウム やなぎなぎ",
        "yt": {
          "id": "ALk0_ImQ-fY",
          "k": "op",
          "o": 1,
          "ch": "NBCUniversal Anime/Music",
          "fa": {
            "id": "lepWytvmIzw",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "三つ葉の結びめ",
        "artist": "やなぎなぎ",
        "usage": "第14話〜第25話",
        "q": "凪のあすから ED 三つ葉の結びめ やなぎなぎ",
        "yt": {
          "id": "jbxROAG04Ak",
          "k": "op",
          "o": 1,
          "ch": "NBCUniversal Anime/Music",
          "fa": {
            "id": "aJCIO0SR2P0",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "lull〜Earth color of a calm〜",
        "artist": "Ray",
        "usage": "最終話",
        "q": "凪のあすから ED lull〜Earth color of a calm〜 Ray",
        "yt": {
          "id": "INV83XSs6A4",
          "k": "op",
          "o": 1,
          "ch": "NBCUniversal Anime/Music"
        }
      }
    ],
    "favs": [
      "3587"
    ]
  },
  {
    "id": "rdg",
    "title": "RDG レッドデータガール",
    "year": 2013,
    "wiki": "RDG レッドデータガール",
    "image": "https://cdn.myanimelist.net/images/anime/4/50313l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "スモルワールドロップ",
        "artist": "Annabel",
        "usage": "",
        "q": "RDG レッドデータガール OP スモルワールドロップ Annabel",
        "yt": {
          "id": "2uPXxwQbBWw",
          "k": "au",
          "o": 1,
          "ch": "Annabel Official"
        }
      },
      {
        "kind": "ED",
        "name": "予感",
        "artist": "伊藤真澄",
        "usage": "",
        "q": "RDG レッドデータガール ED 予感 伊藤真澄"
      },
      {
        "kind": "ED",
        "name": "予感（泉水子バージョン）",
        "artist": "鈴原泉水子（早見沙織）",
        "usage": "第3話、第8話",
        "q": "RDG レッドデータガール ED 予感（泉水子バージョン） 鈴原泉水子"
      }
    ],
    "favs": [
      "3186"
    ]
  },
  {
    "id": "hozuki",
    "title": "鬼灯の冷徹",
    "year": 2014,
    "wiki": "鬼灯の冷徹",
    "note": "1〜2期",
    "image": "https://cdn.myanimelist.net/images/anime/7/87177l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "地獄の沙汰も君次第",
        "artist": "地獄の沙汰オールスターズ",
        "usage": "第壱期",
        "note": "演奏: YOUR SONG IS GOOD",
        "q": "鬼灯の冷徹 OP 地獄の沙汰も君次第 地獄の沙汰オールスターズ",
        "yt": {
          "id": "ePSz2NODsdc",
          "k": "mv",
          "o": 1,
          "ch": "「KING AMUSEMENT CREATIVE」公式チャンネル"
        }
      },
      {
        "kind": "OP",
        "name": "大！地獄地獄節",
        "artist": "地獄の沙汰オールスターズ",
        "usage": "第弐期 第1〜12話",
        "note": "演奏: YOUR SONG IS GOOD。第13話はオープニング無し",
        "q": "鬼灯の冷徹 OP 大！地獄地獄節 地獄の沙汰オールスターズ",
        "yt": {
          "id": "usdr-lYmrzY",
          "k": "mv",
          "o": 1,
          "ch": "「KING AMUSEMENT CREATIVE」公式チャンネル",
          "fa": {
            "id": "YxD3ZsxvAUg",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "拝啓、地獄より",
        "artist": "地獄の沙汰オールスターズ",
        "usage": "第弐期 第14〜26話",
        "note": "演奏: YOUR SONG IS GOOD",
        "q": "鬼灯の冷徹 OP 拝啓、地獄より 地獄の沙汰オールスターズ",
        "yt": {
          "id": "Uch7GOyxmtU",
          "k": "ot",
          "o": 0,
          "ch": "射干"
        }
      },
      {
        "kind": "ED",
        "name": "大きな金魚の樹の下で",
        "artist": "東京混声合唱団",
        "usage": "第壱期 第1話",
        "note": "再放送では別のEDに差し替えられた",
        "q": "鬼灯の冷徹 ED 大きな金魚の樹の下で 東京混声合唱団",
        "yt": {
          "id": "jxXdO58r33k",
          "k": "ot",
          "o": 0,
          "ch": "安澤彌音"
        }
      },
      {
        "kind": "ED",
        "name": "パララックス・ビュー",
        "artist": "上坂すみれ",
        "usage": "第壱期 第2〜7話、第9〜13話",
        "q": "鬼灯の冷徹 ED パララックス・ビュー 上坂すみれ",
        "yt": {
          "id": "E8DkIwMYzt4",
          "k": "mv",
          "o": 1,
          "ch": "KING RECORDS"
        }
      },
      {
        "kind": "ED",
        "name": "キャラメル桃ジャム120%",
        "artist": "ピーチ・マキ（上坂すみれ）",
        "usage": "第壱期 第8話",
        "q": "鬼灯の冷徹 ED キャラメル桃ジャム120% ピーチ・マキ",
        "yt": {
          "id": "F1BocfX1TSY",
          "k": "mv",
          "o": 1,
          "ch": "KING RECORDS"
        }
      },
      {
        "kind": "ED",
        "name": "リバーサイド・ラヴァーズ（奈落の恋）",
        "artist": "上坂すみれ",
        "usage": "第弐期 第1〜12話",
        "q": "鬼灯の冷徹 ED リバーサイド・ラヴァーズ（奈落の恋） 上坂すみれ",
        "yt": {
          "id": "PZD2A5mQZSI",
          "k": "mv",
          "o": 1,
          "ch": "KING RECORDS"
        }
      },
      {
        "kind": "ED",
        "name": "地獄の沙汰も君次第",
        "artist": "地獄の沙汰オールスターズ",
        "usage": "第弐期 第13話",
        "note": "演奏: YOUR SONG IS GOOD",
        "q": "鬼灯の冷徹 ED 地獄の沙汰も君次第 地獄の沙汰オールスターズ",
        "yt": {
          "id": "ePSz2NODsdc",
          "k": "mv",
          "o": 1,
          "ch": "「KING AMUSEMENT CREATIVE」公式チャンネル"
        }
      },
      {
        "kind": "ED",
        "name": "地獄でホットケーキ",
        "artist": "上坂すみれ",
        "usage": "第弐期 第14〜26話",
        "q": "鬼灯の冷徹 ED 地獄でホットケーキ 上坂すみれ",
        "yt": {
          "id": "tQxgUxGUkWU",
          "k": "au",
          "o": 1,
          "ch": "上坂すみれ YouTube OFFICIAL CHANNEL"
        }
      }
    ],
    "favs": [
      "3402",
      "15263"
    ]
  },
  {
    "id": "shirobako",
    "title": "SHIROBAKO",
    "year": 2014,
    "wiki": "SHIROBAKO",
    "image": "https://cdn.myanimelist.net/images/anime/1460/141897l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "あいむそーりーEXODUS",
        "artist": "トレイシー（中春鳴（中原麻衣）、伊藤鈴鹿（伊藤静）、茅菜夢衣（茅野愛衣））",
        "usage": "第1話",
        "note": "劇中劇『えくそだすっ！』のOP",
        "q": "SHIROBAKO OP あいむそーりーEXODUS トレイシー",
        "yt": {
          "id": "J11JUxJJG5M",
          "k": "ot",
          "o": 0,
          "ch": "里村訊作"
        }
      },
      {
        "kind": "OP",
        "name": "COLORFUL BOX",
        "artist": "石田燿子",
        "usage": "前期",
        "q": "SHIROBAKO OP COLORFUL BOX 石田燿子",
        "yt": {
          "id": "Tv8yJbgnxz0",
          "k": "nc",
          "o": 1,
          "ch": "株式会社インフィニット",
          "fa": {
            "id": "QYB5lMYbzzQ",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "OP",
        "name": "宝箱-TREASURE BOX-",
        "artist": "奥井雅美",
        "usage": "後期",
        "q": "SHIROBAKO OP 宝箱-TREASURE BOX- 奥井雅美",
        "yt": {
          "id": "VrFMv_uzH2Y",
          "k": "nc",
          "o": 1,
          "ch": "株式会社インフィニット",
          "fa": {
            "id": "a4E0y8ABC0c",
            "k": "au",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "Animetic Love Letter",
        "artist": "宮森あおい（木村珠莉）、安原絵麻（佳村はるか）、坂木しずか（千菅春香）",
        "usage": "前期",
        "q": "SHIROBAKO ED Animetic Love Letter 宮森あおい",
        "yt": {
          "id": "u4wj6H1iHoM",
          "k": "nc",
          "o": 1,
          "ch": "株式会社インフィニット",
          "fa": {
            "id": "TaS-PIyHeZw",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "プラチナジェット",
        "artist": "どーなつ◎くいんてっと（宮森あおい（木村珠莉）、安原絵麻（佳村はるか）、坂木しずか（千菅春香）、藤堂美沙（髙野麻美）、今井みどり（大和田仁美））",
        "usage": "後期",
        "q": "SHIROBAKO ED プラチナジェット どーなつ◎くいんてっと",
        "yt": {
          "id": "-g9pX3A69so",
          "k": "nc",
          "o": 1,
          "ch": "株式会社インフィニット",
          "fa": {
            "id": "eRECY2_7fe8",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "山はりねずみアンデスチャッキー",
        "artist": "くにたけみゆき",
        "usage": "第19話",
        "note": "劇中劇『山はりねずみアンデスチャッキー』のOP",
        "q": "SHIROBAKO ED 山はりねずみアンデスチャッキー くにたけみゆき",
        "yt": {
          "id": "-0u3EWx5dr0",
          "k": "ot",
          "o": 0,
          "ch": "tsuyo iri"
        }
      }
    ],
    "favs": [
      "5142"
    ]
  },
  {
    "id": "euphonium",
    "title": "響け！ユーフォニアム",
    "year": 2015,
    "wiki": "響け!ユーフォニアム (アニメ)",
    "note": "1〜3期",
    "image": "https://cdn.myanimelist.net/images/anime/1517/142072l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "DREAM SOLISTER",
        "artist": "TRUE",
        "usage": "第1期",
        "q": "響け！ユーフォニアム OP DREAM SOLISTER TRUE",
        "yt": {
          "id": "Gf_jJ9dpcVk",
          "k": "mv",
          "o": 1,
          "ch": "Lantis Channel"
        }
      },
      {
        "kind": "OP",
        "name": "サウンドスケープ",
        "artist": "TRUE",
        "usage": "第2期",
        "q": "響け！ユーフォニアム OP サウンドスケープ TRUE",
        "yt": {
          "id": "B_3m8EPJkcM",
          "k": "mv",
          "o": 1,
          "ch": "Lantis Channel"
        }
      },
      {
        "kind": "OP",
        "name": "ReCoda",
        "artist": "TRUE",
        "usage": "第3期",
        "q": "響け！ユーフォニアム OP ReCoda TRUE",
        "yt": {
          "id": "R-40Id14jLU",
          "k": "mv",
          "o": 1,
          "ch": "TRUE Lantis Official Channel"
        }
      },
      {
        "kind": "ED",
        "name": "トゥッティ！",
        "artist": "北宇治カルテット",
        "usage": "第1期",
        "q": "響け！ユーフォニアム ED トゥッティ！ 北宇治カルテット",
        "yt": {
          "id": "PVOI5-O5iYE",
          "k": "ot",
          "o": 0,
          "ch": "Music Game Garden"
        }
      },
      {
        "kind": "ED",
        "name": "ヴィヴァーチェ!",
        "artist": "北宇治カルテット",
        "usage": "第2期",
        "q": "響け！ユーフォニアム ED ヴィヴァーチェ! 北宇治カルテット",
        "yt": {
          "id": "TsmnaZ3VZK0",
          "k": "ot",
          "o": 0,
          "ch": "KITAUJI QUARTET - Topic"
        }
      },
      {
        "kind": "ED",
        "name": "音色の彼方",
        "artist": "北宇治カルテット",
        "usage": "第3期",
        "q": "響け！ユーフォニアム ED 音色の彼方 北宇治カルテット",
        "yt": {
          "id": "P2-qGPPw7lI",
          "k": "ot",
          "o": 0,
          "ch": "KITAUJI QUARTET - Topic"
        }
      }
    ],
    "favs": [
      "5405",
      "15585",
      "15617"
    ]
  },
  {
    "id": "onepunch",
    "title": "ワンパンマン",
    "year": 2015,
    "wiki": "ワンパンマン",
    "note": "1〜3期",
    "image": "https://cdn.myanimelist.net/images/anime/12/76049l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "THE HERO !! 〜怒れる拳に火をつけろ〜",
        "artist": "JAM Project",
        "usage": "第1期",
        "q": "ワンパンマン OP THE HERO !! 〜怒れる拳に火をつけろ〜 JAM Project",
        "yt": {
          "id": "oZU6QvWHBxY",
          "k": "nc",
          "o": 1,
          "ch": "バンダイナムコフィルムワークス チャンネル",
          "fa": {
            "id": "QImBolnTVH8",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "静寂のアポストル",
        "artist": "JAM Project",
        "usage": "第2期",
        "q": "ワンパンマン OP 静寂のアポストル JAM Project",
        "yt": {
          "id": "qR6NtzkeqCI",
          "k": "nc",
          "o": 1,
          "ch": "バンダイナムコフィルムワークス チャンネル",
          "fa": {
            "id": "sZ3meON6yrY",
            "k": "au",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "Get No Satisfied!",
        "artist": "JAM Project feat. BABYMETAL",
        "usage": "第3期・第1クール",
        "q": "ワンパンマン OP Get No Satisfied! JAM Project",
        "yt": {
          "id": "Mo6yWVF6Md0",
          "k": "nc",
          "o": 1,
          "ch": "バンダイナムコフィルムワークス チャンネル",
          "fa": {
            "id": "9ozUgvalZxw",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "星より先に見つけてあげる",
        "artist": "森口博子",
        "usage": "第1期 第1〜11話",
        "q": "ワンパンマン ED 星より先に見つけてあげる 森口博子",
        "yt": {
          "id": "6MXzlLq7L9I",
          "k": "nc",
          "o": 1,
          "ch": "バンダイナムコフィルムワークス チャンネル",
          "fa": {
            "id": "7pd5YTER_tQ",
            "k": "au",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "悲しみたちを抱きしめて",
        "artist": "森口博子",
        "usage": "第1期 第12話",
        "q": "ワンパンマン ED 悲しみたちを抱きしめて 森口博子",
        "yt": {
          "id": "yIUnJScUGnI",
          "k": "au",
          "o": 1,
          "ch": "森口博子 オフィシャル YouTube チャンネル"
        }
      },
      {
        "kind": "ED",
        "name": "地図が無くても戻るから",
        "artist": "古川慎",
        "usage": "第2期",
        "q": "ワンパンマン ED 地図が無くても戻るから 古川慎",
        "yt": {
          "id": "MeK5M0M8U8A",
          "k": "nc",
          "o": 1,
          "ch": "バンダイナムコフィルムワークス チャンネル",
          "fa": {
            "id": "hb6ycQgyVzk",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "そこに有る灯り",
        "artist": "古川慎",
        "usage": "第3期・第1クール",
        "q": "ワンパンマン ED そこに有る灯り 古川慎",
        "yt": {
          "id": "DsWsyXCv8bQ",
          "k": "nc",
          "o": 1,
          "ch": "バンダイナムコフィルムワークス チャンネル",
          "fa": {
            "id": "chOTy1FTtDM",
            "k": "mv",
            "o": 1
          }
        }
      }
    ],
    "favs": [
      "26848",
      "13525",
      "16772"
    ]
  },
  {
    "id": "soma",
    "title": "食戟のソーマ",
    "year": 2015,
    "wiki": "食戟のソーマ (アニメ)",
    "note": "1〜5期",
    "image": "https://img2.animatetimes.com/2018/11/62b02f7d6aa6e_27d588ce0d80a418b971bbb560b7dbb5-e1655713688982.jpg",
    "imageCredit": "animatetimes.com",
    "tracks": [
      {
        "kind": "OP",
        "name": "希望の唄",
        "artist": "ウルトラタワー",
        "usage": "食戟のソーマ 前期",
        "q": "食戟のソーマ OP 希望の唄 ウルトラタワー",
        "yt": {
          "id": "mFYK47afoSY",
          "k": "mv",
          "o": 1,
          "ch": "avex"
        }
      },
      {
        "kind": "OP",
        "name": "ライジングレインボウ",
        "artist": "ミソッカス",
        "usage": "食戟のソーマ 後期",
        "q": "食戟のソーマ OP ライジングレインボウ ミソッカス",
        "yt": {
          "id": "xE0KsfXT9mo",
          "k": "mv",
          "o": 1,
          "ch": "avex"
        }
      },
      {
        "kind": "OP",
        "name": "ROUGH DIAMONDS",
        "artist": "SCREEN mode",
        "usage": "食戟のソーマ 弐ノ皿",
        "q": "食戟のソーマ OP ROUGH DIAMONDS SCREEN mode",
        "yt": {
          "id": "T-mir4Lodbg",
          "k": "mv",
          "o": 1,
          "ch": "SCREEN mode"
        }
      },
      {
        "kind": "OP",
        "name": "BRAVER",
        "artist": "ZAQ",
        "usage": "食戟のソーマ 餐ノ皿 前期",
        "q": "食戟のソーマ OP BRAVER ZAQ",
        "yt": {
          "id": "P19zZzpbCGQ",
          "k": "mv",
          "o": 1,
          "ch": "ZAQ Official Channel"
        }
      },
      {
        "kind": "OP",
        "name": "シンボル",
        "artist": "ラックライフ",
        "usage": "食戟のソーマ 餐ノ皿 遠月列車篇",
        "q": "食戟のソーマ OP シンボル ラックライフ",
        "yt": {
          "id": "XgoHifs0sfk",
          "k": "mv",
          "o": 1,
          "ch": "Lantis Channel"
        }
      },
      {
        "kind": "OP",
        "name": "Chronos",
        "artist": "STEREO DIVE FOUNDATION",
        "usage": "食戟のソーマ 神ノ皿",
        "q": "食戟のソーマ OP Chronos STEREO DIVE FOUNDATION",
        "yt": {
          "id": "O8tt9wiWjds",
          "k": "mv",
          "o": 1,
          "ch": "Lantis Channel and STEREO DIVE FOUNDATION Official Channel"
        }
      },
      {
        "kind": "OP",
        "name": "ラストチャプター",
        "artist": "nano.RIPE",
        "usage": "食戟のソーマ 豪ノ皿",
        "q": "食戟のソーマ OP ラストチャプター nano.RIPE",
        "yt": {
          "id": "Jr3IWAqvDDs",
          "k": "au",
          "o": 1,
          "ch": "nano. RIPE Official Channel"
        }
      },
      {
        "kind": "ED",
        "name": "スパイス",
        "artist": "東京カランコロン",
        "usage": "食戟のソーマ 前期",
        "q": "食戟のソーマ ED スパイス 東京カランコロン",
        "yt": {
          "id": "C9EVYcUGZ14",
          "k": "mv",
          "o": 1,
          "ch": "avex"
        }
      },
      {
        "kind": "ED",
        "name": "さっちゃんのセクシーカレー",
        "artist": "大森靖子",
        "usage": "食戟のソーマ 後期",
        "q": "食戟のソーマ ED さっちゃんのセクシーカレー 大森靖子",
        "yt": {
          "id": "U4LR7ZJUwxs",
          "k": "au",
          "o": 1,
          "ch": "大森靖子 Youtube Channel"
        }
      },
      {
        "kind": "ED",
        "name": "スノードロップ",
        "artist": "nano.RIPE",
        "usage": "食戟のソーマ 弐ノ皿",
        "q": "食戟のソーマ ED スノードロップ nano.RIPE",
        "yt": {
          "id": "LIGrbQUHGkE",
          "k": "au",
          "o": 1,
          "ch": "nano. RIPE Official Channel"
        }
      },
      {
        "kind": "ED",
        "name": "虚虚実実",
        "artist": "nano.RIPE",
        "usage": "食戟のソーマ 餐ノ皿 前期",
        "q": "食戟のソーマ ED 虚虚実実 nano.RIPE",
        "yt": {
          "id": "s6NDo-CqZ_U",
          "k": "mv",
          "o": 1,
          "ch": "Lantis Channel"
        }
      },
      {
        "kind": "ED",
        "name": "アトリア",
        "artist": "Fo'xTails",
        "usage": "食戟のソーマ 餐ノ皿 遠月列車篇",
        "q": "食戟のソーマ ED アトリア Fo'xTails",
        "yt": {
          "id": "HLJ8EEabNWM",
          "k": "au",
          "o": 1,
          "ch": "Fo'xTails - Topic"
        }
      },
      {
        "kind": "ED",
        "name": "エンブレム",
        "artist": "nano.RIPE",
        "usage": "食戟のソーマ 神ノ皿",
        "q": "食戟のソーマ ED エンブレム nano.RIPE",
        "yt": {
          "id": "iMdhHKLZ1kI",
          "k": "au",
          "o": 1,
          "ch": "nano. RIPE Official Channel"
        }
      },
      {
        "kind": "ED",
        "name": "Crossing Road",
        "artist": "渕上舞",
        "usage": "食戟のソーマ 豪ノ皿",
        "q": "食戟のソーマ ED Crossing Road 渕上舞",
        "yt": {
          "id": "tdsl57qreHg",
          "k": "au",
          "o": 1,
          "ch": "渕上 舞Official Channel"
        }
      }
    ],
    "favs": [
      "5273",
      "15600",
      "15601",
      "14158",
      "14159"
    ]
  },
  {
    "id": "bungo",
    "title": "文豪ストレイドッグス",
    "year": 2016,
    "wiki": "文豪ストレイドッグス",
    "note": "1〜5期",
    "image": "https://cdn.myanimelist.net/images/anime/3/79409l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "TRASH CANDY",
        "artist": "GRANRODEO",
        "usage": "第1シーズン",
        "q": "文豪ストレイドッグス OP TRASH CANDY GRANRODEO",
        "yt": {
          "id": "-e119C6VGHA",
          "k": "mv",
          "o": 1,
          "ch": "GRANRODEO"
        }
      },
      {
        "kind": "OP",
        "name": "Reason Living",
        "artist": "SCREEN mode",
        "usage": "第2シーズン",
        "q": "文豪ストレイドッグス OP Reason Living SCREEN mode",
        "yt": {
          "id": "iEcOzINHOUE",
          "k": "mv",
          "o": 1,
          "ch": "SCREEN mode"
        }
      },
      {
        "kind": "OP",
        "name": "セツナの愛",
        "artist": "GRANRODEO",
        "usage": "第3シーズン",
        "q": "文豪ストレイドッグス OP セツナの愛 GRANRODEO",
        "yt": {
          "id": "sV4BmFw2oiM",
          "k": "au",
          "o": 1,
          "ch": "GRANRODEO"
        }
      },
      {
        "kind": "OP",
        "name": "TRUE STORY",
        "artist": "SCREEN mode",
        "usage": "第4シーズン",
        "q": "文豪ストレイドッグス OP TRUE STORY SCREEN mode",
        "yt": {
          "id": "26w2Q1k0niw",
          "k": "mv",
          "o": 1,
          "ch": "SCREEN mode"
        }
      },
      {
        "kind": "OP",
        "name": "鉄の檻",
        "artist": "GRANRODEO",
        "usage": "第5シーズン",
        "q": "文豪ストレイドッグス OP 鉄の檻 GRANRODEO",
        "yt": {
          "id": "kMrYDrwM2K8",
          "k": "au",
          "o": 1,
          "ch": "GRANRODEO"
        }
      },
      {
        "kind": "ED",
        "name": "名前を呼ぶよ",
        "artist": "ラックライフ",
        "usage": "第1シーズン",
        "note": "第2シーズンの最終回のEDにも使用",
        "q": "文豪ストレイドッグス ED 名前を呼ぶよ ラックライフ",
        "yt": {
          "id": "-g6MYL5lOZs",
          "k": "mv",
          "o": 1,
          "ch": "Lantis Channel"
        }
      },
      {
        "kind": "ED",
        "name": "風が吹く街",
        "artist": "ラックライフ",
        "usage": "第2シーズン",
        "q": "文豪ストレイドッグス ED 風が吹く街 ラックライフ",
        "yt": {
          "id": "vcJ61mfcK3A",
          "k": "mv",
          "o": 1,
          "ch": "Lantis Channel"
        }
      },
      {
        "kind": "ED",
        "name": "Lily",
        "artist": "ラックライフ",
        "usage": "第3シーズン",
        "q": "文豪ストレイドッグス ED Lily ラックライフ",
        "yt": {
          "id": "bxbXUMy4kok",
          "k": "mv",
          "o": 1,
          "ch": "Lantis Channel"
        }
      },
      {
        "kind": "ED",
        "name": "しるし",
        "artist": "ラックライフ",
        "usage": "第4シーズン",
        "q": "文豪ストレイドッグス ED しるし ラックライフ",
        "yt": {
          "id": "YbFSOlLemak",
          "k": "mv",
          "o": 1,
          "ch": "Lantis Channel"
        }
      },
      {
        "kind": "ED",
        "name": "軌跡",
        "artist": "ラックライフ",
        "usage": "第5シーズン",
        "q": "文豪ストレイドッグス ED 軌跡 ラックライフ",
        "yt": {
          "id": "vuYs-1hVXlY",
          "k": "mv",
          "o": 1,
          "ch": "Lantis Channel"
        }
      }
    ],
    "favs": [
      "13611",
      "13610",
      "13612",
      "13647",
      "20445"
    ]
  },
  {
    "id": "kabaneri",
    "title": "甲鉄城のカバネリ",
    "year": 2016,
    "wiki": "甲鉄城のカバネリ",
    "image": "https://img2.animatetimes.com/2018/11/619b40725f3bb_62b6c2a5d3bf787e1cbd3c44eec3b74d-e1637564539777.jpg",
    "imageCredit": "animatetimes.com",
    "tracks": [
      {
        "kind": "OP",
        "name": "KABANERI OF THE IRON FORTRESS",
        "artist": "EGOIST",
        "usage": "",
        "q": "甲鉄城のカバネリ OP KABANERI OF THE IRON FORTRESS EGOIST",
        "yt": {
          "id": "BpAZbM6FYkE",
          "k": "mv",
          "o": 1,
          "ch": "EGOIST Official YouTube Channel"
        }
      },
      {
        "kind": "ED",
        "name": "ninelie",
        "artist": "Aimer with chelly",
        "usage": "第2話〜第10話、第12話",
        "q": "甲鉄城のカバネリ ED ninelie Aimer",
        "yt": {
          "id": "j9ypaPVzrbE",
          "k": "mv",
          "o": 1,
          "ch": "Aimer Official YouTube Channel"
        }
      },
      {
        "kind": "ED",
        "name": "Through My Blood <AM>",
        "artist": "Aimer",
        "usage": "第11話",
        "q": "甲鉄城のカバネリ ED Through My Blood <AM> Aimer",
        "yt": {
          "id": "D_hpOkI9_xU",
          "k": "ot",
          "o": 0,
          "ch": "Crepity"
        }
      }
    ],
    "favs": [
      "5312"
    ]
  },
  {
    "id": "qualidea",
    "title": "クオリディア・コード",
    "year": 2016,
    "wiki": "プロジェクト・クオリディア",
    "image": "https://cdn.myanimelist.net/images/anime/6/80823l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "Brave Freak Out",
        "artist": "LiSA",
        "usage": "第2〜8話",
        "q": "クオリディア・コード OP Brave Freak Out LiSA",
        "yt": {
          "id": "FvUOSQub1Lw",
          "k": "mv",
          "o": 1,
          "ch": "LiSA Official YouTube"
        }
      },
      {
        "kind": "OP",
        "name": "AxxxiS",
        "artist": "LiSA",
        "usage": "第9〜12話",
        "q": "クオリディア・コード OP AxxxiS LiSA",
        "yt": {
          "id": "fqtEWs8diWM",
          "k": "ot",
          "o": 0,
          "ch": "Michael V. Hooper"
        }
      },
      {
        "kind": "ED",
        "name": "Gravity",
        "artist": "ClariS",
        "usage": "第1〜4話",
        "q": "クオリディア・コード ED Gravity ClariS",
        "yt": {
          "id": "UamXkkVPn4A",
          "k": "mv",
          "o": 1,
          "ch": "ClariS Official YouTube Channel"
        }
      },
      {
        "kind": "ED",
        "name": "約束-Promise code-",
        "artist": "GARNiDELiA",
        "usage": "第5〜7話",
        "q": "クオリディア・コード ED 約束-Promise code- GARNiDELiA",
        "yt": {
          "id": "5t5nyRHlkbA",
          "k": "au",
          "o": 1,
          "ch": "GARNiDELiA"
        }
      },
      {
        "kind": "ED",
        "name": "clever",
        "artist": "ClariS×GARNiDELiA",
        "usage": "第8〜12話",
        "q": "クオリディア・コード ED clever ClariS",
        "yt": {
          "id": "Mde6d0d0Dw8",
          "k": "mv",
          "o": 1,
          "ch": "ClariS Official YouTube Channel"
        }
      }
    ],
    "favs": [
      "5964"
    ]
  },
  {
    "id": "rezero",
    "title": "Re:ゼロから始める異世界生活",
    "year": 2016,
    "wiki": "Re:ゼロから始める異世界生活 (アニメ)",
    "note": "1〜4期",
    "image": "https://cdn.myanimelist.net/images/anime/1522/128039l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "Redo",
        "artist": "鈴木このみ",
        "usage": "第1期 第2〜12話の偶数話",
        "q": "Re:ゼロから始める異世界生活 OP Redo 鈴木このみ",
        "yt": {
          "id": "8_PvNdZJ378",
          "k": "mv",
          "o": 1,
          "ch": "「Re:ゼロから始める異世界生活」チャンネル【公式】 and Konomi Suzuki Official"
        }
      },
      {
        "kind": "OP",
        "name": "Paradisus-Paradoxum",
        "artist": "MYTH & ROID",
        "usage": "第1期 第14〜24話の偶数話",
        "q": "Re:ゼロから始める異世界生活 OP Paradisus-Paradoxum MYTH",
        "yt": {
          "id": "Yc8pu8TC7IM",
          "k": "mv",
          "o": 1,
          "ch": "KADOKAWAanime"
        }
      },
      {
        "kind": "OP",
        "name": "Realize",
        "artist": "鈴木このみ",
        "usage": "第2期 第27話・30話・33話・41話",
        "q": "Re:ゼロから始める異世界生活 OP Realize 鈴木このみ",
        "yt": {
          "id": "uaRnwnmqrws",
          "k": "mv",
          "o": 1,
          "ch": "KADOKAWAanime"
        }
      },
      {
        "kind": "OP",
        "name": "Long shot",
        "artist": "前島麻由",
        "usage": "第2期 第44話・46話・50話",
        "q": "Re:ゼロから始める異世界生活 OP Long shot 前島麻由",
        "yt": {
          "id": "p8X5hG51jbA",
          "k": "mv",
          "o": 1,
          "ch": "KADOKAWAanime"
        }
      },
      {
        "kind": "OP",
        "name": "Reweave",
        "artist": "鈴木このみ",
        "usage": "第3期 第51話・52話・53話・55話・57話・59〜61話・63話・65話",
        "q": "Re:ゼロから始める異世界生活 OP Reweave 鈴木このみ",
        "yt": {
          "id": "wKvBpv2idRc",
          "k": "nc",
          "o": 1,
          "ch": "KADOKAWAanime",
          "fa": {
            "id": "ZaiPQrrzy2E",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "Recollect",
        "artist": "鈴木このみ feat. Ashnikko",
        "usage": "第4期 第68話・69話・72話・74話・75話・78話・80話・83話",
        "q": "Re:ゼロから始める異世界生活 OP Recollect 鈴木このみ",
        "yt": {
          "id": "VDGG9zi53rQ",
          "k": "nc",
          "o": 1,
          "ch": "「Re:ゼロから始める異世界生活」チャンネル【公式】 and Konomi Suzuki Official",
          "fa": {
            "id": "6yOpDa4GsNg",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "STYX HELIX",
        "artist": "MYTH & ROID",
        "usage": "第1期 第1〜11話の奇数話、第25話",
        "q": "Re:ゼロから始める異世界生活 ED STYX HELIX MYTH",
        "yt": {
          "id": "tIhL2KHVdgE",
          "k": "mv",
          "o": 1,
          "ch": "KADOKAWAanime"
        }
      },
      {
        "kind": "ED",
        "name": "Stay Alive",
        "artist": "エミリア（高橋李依）",
        "usage": "第1期 第13話、第17〜23話の奇数話、第25話",
        "q": "Re:ゼロから始める異世界生活 ED Stay Alive エミリア",
        "yt": {
          "id": "84YBqfpCGW8",
          "k": "au",
          "o": 1,
          "ch": "エミリア（CV：高橋李依） - Topic"
        }
      },
      {
        "kind": "ED",
        "name": "Memento",
        "artist": "nonoc",
        "usage": "第2期 第28話・29話・31話・32話、第34〜36話・38話・39話・41話",
        "q": "Re:ゼロから始める異世界生活 ED Memento nonoc",
        "yt": {
          "id": "jfvB3DPJ4FU",
          "k": "mv",
          "o": 1,
          "ch": "KADOKAWAanime"
        }
      },
      {
        "kind": "ED",
        "name": "Believe in you",
        "artist": "nonoc",
        "usage": "第2期 第42〜47話、49話",
        "q": "Re:ゼロから始める異世界生活 ED Believe in you nonoc",
        "yt": {
          "id": "zVMdd9GCs9s",
          "k": "au",
          "o": 1,
          "ch": "nonoc Official"
        }
      },
      {
        "kind": "ED",
        "name": "NOX LUX",
        "artist": "MYTH & ROID",
        "usage": "第3期 第52話・54〜56話・59〜64話",
        "q": "Re:ゼロから始める異世界生活 ED NOX LUX MYTH",
        "yt": {
          "id": "aPzI7S3MVI4",
          "k": "nc",
          "o": 1,
          "ch": "KADOKAWAanime",
          "fa": {
            "id": "bVUEuXOjeDc",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "I Trust You",
        "artist": "エミリア（高橋李依）",
        "usage": "第3期 第57話",
        "q": "Re:ゼロから始める異世界生活 ED I Trust You エミリア",
        "yt": {
          "id": "DZQgBR69g5Q",
          "k": "au",
          "o": 1,
          "ch": "エミリア（CV：高橋李依） - Topic"
        }
      },
      {
        "kind": "ED",
        "name": "プリステラの君よ",
        "artist": "リリアナ（山根綺）",
        "usage": "第3期 第66話",
        "q": "Re:ゼロから始める異世界生活 ED プリステラの君よ リリアナ",
        "yt": {
          "id": "WeK4gLh0DGQ",
          "k": "au",
          "o": 1,
          "ch": "Release - Topic"
        }
      },
      {
        "kind": "ED",
        "name": "Ender Ember",
        "artist": "MYTH & ROID feat. TK（凛として時雨）",
        "usage": "第4期 第69話・70話・73話・75話・76話・78話・80話・81話",
        "q": "Re:ゼロから始める異世界生活 ED Ender Ember MYTH",
        "yt": {
          "id": "iKLqlb_oX60",
          "k": "nc",
          "o": 1,
          "ch": "「Re:ゼロから始める異世界生活」チャンネル【公式】 and 2 more",
          "fa": {
            "id": "SrwCOIe_Lhw",
            "k": "mv",
            "o": 1
          }
        }
      }
    ],
    "favs": [
      "12013",
      "15099",
      "20420",
      "25741"
    ]
  },
  {
    "id": "saiki",
    "title": "斉木楠雄のΨ難",
    "year": 2016,
    "wiki": "斉木楠雄のΨ難",
    "note": "1期・2期・完結編・Ψ始動編",
    "image": "https://cdn.myanimelist.net/images/anime/1973/142750l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "青春は残酷じゃない",
        "artist": "花江夏樹",
        "usage": "第1期 深夜版 第1χ〜12χ",
        "q": "斉木楠雄のΨ難 OP 青春は残酷じゃない 花江夏樹",
        "yt": {
          "id": "3nSg8JNqTQU",
          "k": "nc",
          "o": 1,
          "ch": "ShoProアニメチャンネル",
          "fa": {
            "id": "0a0ml2pcFPY",
            "k": "au",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "最Ψ最好調！",
        "artist": "でんぱ組.inc",
        "usage": "第1期 深夜版 第13χ〜24χ",
        "q": "斉木楠雄のΨ難 OP 最Ψ最好調！ でんぱ組.inc",
        "yt": {
          "id": "uZVPPMkdfr4",
          "k": "nc",
          "o": 1,
          "ch": "ShoProアニメチャンネル",
          "fa": {
            "id": "VPBxxGx4nts",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "こころ",
        "artist": "花江夏樹",
        "usage": "第1期 深夜版 第13χ〜24χ",
        "q": "斉木楠雄のΨ難 OP こころ 花江夏樹",
        "yt": {
          "id": "yUDT_VGbunE",
          "k": "nc",
          "o": 1,
          "ch": "ShoProアニメチャンネル",
          "fa": {
            "id": "EFhhJst33fY",
            "k": "au",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "Ψレントプリズナー",
        "artist": "斉木ックラバー feat. 斉木楠雄（神谷浩史）、燃堂力（小野大輔）、海藤瞬（島﨑信長）",
        "usage": "第2期・完結編・ANIMAX放送版Ψ始動編 第1χ〜12χ、ANIMAX放送版",
        "q": "斉木楠雄のΨ難 OP Ψレントプリズナー 斉木ックラバー",
        "yt": {
          "id": "NUwIilgfAPs",
          "k": "nc",
          "o": 1,
          "ch": "ShoProアニメチャンネル",
          "fa": {
            "id": "fY16bScc3Tc",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "OP",
        "name": "お手上げサイキクス",
        "artist": "Shiggy Jr.",
        "usage": "第2期 第13χ〜24χ、完結編前後編",
        "q": "斉木楠雄のΨ難 OP お手上げサイキクス Shiggy Jr.",
        "yt": {
          "id": "8uHveZ93WV4",
          "k": "nc",
          "o": 1,
          "ch": "ShoProアニメチャンネル",
          "fa": {
            "id": "0N7UhOgrsvY",
            "k": "au",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "Ψです I LIKE YOU",
        "artist": "でんぱ組.inc",
        "usage": "第1期 深夜版 第1χ〜12χ",
        "note": "朝版OPではショートVerが使用",
        "q": "斉木楠雄のΨ難 ED Ψです I LIKE YOU でんぱ組.inc",
        "yt": {
          "id": "3Idcaclajws",
          "k": "nc",
          "o": 1,
          "ch": "ShoProアニメチャンネル",
          "fa": {
            "id": "0rpIePsUBN8",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "Ψ発見伝！",
        "artist": "でんぱ組.inc",
        "usage": "第2期 第1χ〜12χ、ANIMAX放送版",
        "q": "斉木楠雄のΨ難 ED Ψ発見伝！ でんぱ組.inc",
        "yt": {
          "id": "EGfvWITmhdU",
          "k": "nc",
          "o": 1,
          "ch": "ShoProアニメチャンネル",
          "fa": {
            "id": "7caTf1P842U",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "Duet♡してくだΨ",
        "artist": "斉木ックラバー feat. 斉木楠雄（神谷浩史）、照橋心美（茅野愛衣）、相卜命（喜多村英梨）",
        "usage": "第2期 第13χ〜24χ、完結編前後編",
        "q": "斉木楠雄のΨ難 ED Duet♡してくだΨ 斉木ックラバー",
        "yt": {
          "id": "tB9SQJE7JlY",
          "k": "nc",
          "o": 1,
          "ch": "ShoProアニメチャンネル",
          "fa": {
            "id": "cY-8x5FXFyA",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "Ψです I LIKE YOU～最Ψ最好調！～Ψ発見伝！",
        "artist": "でんぱ組.inc",
        "usage": "完結編（本放送版）",
        "note": "メドレー。本放送のみで、再放送・ネット配信では2期第13話以降のOP・EDを使用",
        "q": "斉木楠雄のΨ難 ED Ψです I LIKE YOU～最Ψ最好調！～Ψ発見伝！ でんぱ組.inc",
        "yt": {
          "id": "3Idcaclajws",
          "k": "nc",
          "o": 1,
          "ch": "ShoProアニメチャンネル",
          "fa": {
            "id": "0rpIePsUBN8",
            "k": "ot",
            "o": 0
          }
        }
      }
    ],
    "favs": [
      "6140",
      "14141",
      "14142",
      "14143"
    ]
  },
  {
    "id": "abyss",
    "title": "メイドインアビス",
    "year": 2017,
    "wiki": "メイドインアビス",
    "note": "第1期のみ（第2期「烈日の黄金郷」の主題歌は出典の記事に記載なし）",
    "image": "https://cdn.myanimelist.net/images/anime/6/86733l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "憧れに捧ぐ花",
        "artist": "リコ（富田美憂）、レグ（伊瀬茉莉也）、ナナチ（井澤詩織）",
        "usage": "",
        "q": "メイドインアビス OP 憧れに捧ぐ花 リコ",
        "yt": {
          "id": "f-YIV61Zk78",
          "k": "ot",
          "o": 0,
          "ch": "PoptoamanAI"
        }
      },
      {
        "kind": "ED",
        "name": "灯火",
        "artist": "安月名莉子",
        "usage": "",
        "q": "メイドインアビス ED 灯火 安月名莉子",
        "yt": {
          "id": "PleLNaREi3I",
          "k": "au",
          "o": 1,
          "ch": "安月名莉子 ちゃんねる"
        }
      }
    ],
    "favs": [
      "6534",
      "13762"
    ]
  },
  {
    "id": "kemono",
    "title": "けものフレンズ",
    "year": 2017,
    "wiki": "けものフレンズ (アニメ)",
    "note": "1期",
    "image": "https://img2.animatetimes.com/news/visual/2017/1488452395_5_28_c6cb4a40f87ff60a6e809937b5427b28-e1589435904704.jpg",
    "imageCredit": "animatetimes.com",
    "tracks": [
      {
        "kind": "OP",
        "name": "ようこそジャパリパークへ",
        "artist": "どうぶつビスケッツ×PPP",
        "usage": "",
        "q": "けものフレンズ OP ようこそジャパリパークへ どうぶつビスケッツ",
        "yt": {
          "id": "xkMdLcB_vNU",
          "k": "mv",
          "o": 1,
          "ch": "けものフレンズプロジェクト公式",
          "fa": {
            "id": "g67QKrSg8RY",
            "k": "au",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "ぼくのフレンド",
        "artist": "みゆはん",
        "usage": "",
        "q": "けものフレンズ ED ぼくのフレンド みゆはん",
        "yt": {
          "id": "LOKM9Gl3cA4",
          "k": "mv",
          "o": 1,
          "ch": "Victor Entertainment",
          "fa": {
            "id": "83xwNaTUB54",
            "k": "au",
            "o": 1
          }
        }
      }
    ],
    "favs": [
      "6430"
    ]
  },
  {
    "id": "oratoria",
    "title": "ソード・オラトリア",
    "year": 2017,
    "wiki": "ダンジョンに出会いを求めるのは間違っているだろうか (アニメ)",
    "image": "https://img2.animatetimes.com/2018/11/5d4cf01933dd1_eae26fc30340c124ad6bdbacca8a07b3.jpg",
    "imageCredit": "animatetimes.com",
    "tracks": [
      {
        "kind": "OP",
        "name": "RE-ILLUSION",
        "artist": "井口裕香",
        "usage": "",
        "q": "ソード・オラトリア OP RE-ILLUSION 井口裕香",
        "yt": {
          "id": "611DTfoxAsQ",
          "k": "mv",
          "o": 1,
          "ch": "ワーナー ブラザース 公式チャンネル",
          "fa": {
            "id": "i7K6M-ETT1c",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "day by day",
        "artist": "鹿乃",
        "usage": "",
        "q": "ソード・オラトリア ED day by day 鹿乃",
        "yt": {
          "id": "9K1XXiOeGic",
          "k": "ot",
          "o": 0,
          "ch": "鹿乃まほろ / Kano Mahoro"
        }
      }
    ],
    "favs": [
      "6027"
    ]
  },
  {
    "id": "sukasuka",
    "title": "終末なにしてますか？ 忙しいですか？ 救ってもらっていいですか？",
    "year": 2017,
    "wiki": "終末なにしてますか? 忙しいですか? 救ってもらっていいですか?",
    "image": "https://img2.animatetimes.com/2018/11/be1d93c882a20a40f582f88a831beecb654c5a181953a3_73911920_c9d9cef5330925781c035e89dfb11dcb4514342c-e1699502625590.jpg",
    "imageCredit": "animatetimes.com",
    "tracks": [
      {
        "kind": "OP",
        "name": "DEAREST DROP",
        "artist": "田所あずさ",
        "usage": "",
        "q": "終末なにしてますか？ 忙しいですか？ 救ってもらっていいですか？ OP DEAREST DROP 田所あずさ",
        "yt": {
          "id": "94W5nENM0iM",
          "k": "mv",
          "o": 1,
          "ch": "Lantis Channel"
        }
      },
      {
        "kind": "ED",
        "name": "フロム",
        "artist": "TRUE",
        "usage": "第6話・第12話以外",
        "note": "第6話は「キネマ」、第12話は「Ever be my love」に代わった",
        "q": "終末なにしてますか？ 忙しいですか？ 救ってもらっていいですか？ ED フロム TRUE",
        "yt": {
          "id": "yCTpG52bFQA",
          "k": "mv",
          "o": 1,
          "ch": "Lantis Channel"
        }
      },
      {
        "kind": "ED",
        "name": "キネマ",
        "artist": "TRUE",
        "usage": "第6話",
        "q": "終末なにしてますか？ 忙しいですか？ 救ってもらっていいですか？ ED キネマ TRUE",
        "yt": {
          "id": "2QGAHKuXqZI",
          "k": "au",
          "o": 1,
          "ch": "TRUE Lantis Official Channel"
        }
      },
      {
        "kind": "ED",
        "name": "Ever be my love",
        "artist": "山田タマル",
        "usage": "第12話",
        "q": "終末なにしてますか？ 忙しいですか？ 救ってもらっていいですか？ ED Ever be my love 山田タマル",
        "yt": {
          "id": "nan4KlFWTKE",
          "k": "ot",
          "o": 0,
          "ch": "山田タマル -YAMADA TAMARU/山田珠露-"
        }
      }
    ],
    "favs": [
      "6677"
    ]
  },
  {
    "id": "youjo",
    "title": "幼女戦記",
    "year": 2017,
    "wiki": "幼女戦記 (アニメ)",
    "note": "1期・Ⅱ",
    "image": "https://cdn.myanimelist.net/images/anime/5/82890l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "JINGO JUNGLE",
        "artist": "MYTH & ROID",
        "usage": "第1期",
        "q": "幼女戦記 OP JINGO JUNGLE MYTH",
        "yt": {
          "id": "5VRyiaszGtA",
          "k": "mv",
          "o": 1,
          "ch": "KADOKAWAanime"
        }
      },
      {
        "kind": "OP",
        "name": "Why? RED induction",
        "artist": "MYTH & ROID",
        "usage": "第2期",
        "q": "幼女戦記 OP Why? RED induction MYTH",
        "yt": {
          "id": "IVyvkwvsqW0",
          "k": "nc",
          "o": 1,
          "ch": "KADOKAWAanime",
          "fa": {
            "id": "QDcB5PBXyJ8",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "Los! Los! Los!",
        "artist": "ターニャ・フォン・デグレチャフ（悠木碧）",
        "usage": "第1期",
        "q": "幼女戦記 ED Los! Los! Los! ターニャ・フォン・デグレチャフ",
        "yt": {
          "id": "OgXZn_H_QAI",
          "k": "ot",
          "o": 0,
          "ch": "Aonis"
        }
      },
      {
        "kind": "ED",
        "name": "戦線のリアリズム",
        "artist": "新菜まこ",
        "usage": "第8話",
        "q": "幼女戦記 ED 戦線のリアリズム 新菜まこ",
        "yt": {
          "id": "Gh3SsjZ6V_g",
          "k": "ot",
          "o": 0,
          "ch": "- masa"
        }
      },
      {
        "kind": "ED",
        "name": "Weiter! Weiter!",
        "artist": "ターニャ・フォン・デグレチャフ（悠木碧）",
        "usage": "第2期",
        "q": "幼女戦記 ED Weiter! Weiter! ターニャ・フォン・デグレチャフ",
        "yt": {
          "id": "x2k_iYCGKvE",
          "k": "nc",
          "o": 1,
          "ch": "KADOKAWAanime",
          "fa": {
            "id": "7igP1I4XWws",
            "k": "mv",
            "o": 1
          }
        }
      }
    ],
    "favs": [
      "5321",
      "14369"
    ]
  },
  {
    "id": "emiya",
    "title": "衛宮さんちの今日のごはん",
    "year": 2018,
    "wiki": "衛宮さんちの今日のごはん",
    "image": "https://img2.animatetimes.com/different/news/2018/10/1538441491966.jpg",
    "imageCredit": "animatetimes.com",
    "tracks": [
      {
        "kind": "OP",
        "name": "エプロンボーイ",
        "artist": "DJみそしるとMCごはん",
        "usage": "",
        "q": "衛宮さんちの今日のごはん OP エプロンボーイ DJみそしるとMCごはん",
        "yt": {
          "id": "iMVpJbFV_u4",
          "k": "mv",
          "o": 1,
          "ch": "Sony Music (Japan)",
          "fa": {
            "id": "_eZ2cs2_u8Q",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "コラージュ",
        "artist": "三月のパンタシア",
        "usage": "",
        "q": "衛宮さんちの今日のごはん ED コラージュ 三月のパンタシア",
        "yt": {
          "id": "jSQjdrGm6Lo",
          "k": "ot",
          "o": 0,
          "ch": "パルタロボット"
        }
      }
    ],
    "favs": [
      "7022"
    ]
  },
  {
    "id": "yurucamp",
    "title": "ゆるキャン△",
    "year": 2018,
    "wiki": "ゆるキャン△ (アニメ)",
    "note": "1〜4期",
    "image": "https://img2.animatetimes.com/2021/12/61b94e5f8240f_ec01ee3dd4747daacf6a4479b9a9ceec.jpg",
    "imageCredit": "animatetimes.com",
    "tracks": [
      {
        "kind": "OP",
        "name": "SHINY DAYS",
        "artist": "亜咲花",
        "usage": "第1期",
        "q": "ゆるキャン△ OP SHINY DAYS 亜咲花",
        "yt": {
          "id": "rFMo9PULMtk",
          "k": "au",
          "o": 1,
          "ch": "亜咲花公式チャンネル"
        }
      },
      {
        "kind": "OP",
        "name": "Seize The Day",
        "artist": "亜咲花",
        "usage": "第2期",
        "q": "ゆるキャン△ OP Seize The Day 亜咲花",
        "yt": {
          "id": "SvTb43SY460",
          "k": "nc",
          "o": 1,
          "ch": "FURYU Pictures Channel",
          "fa": {
            "id": "-yRQJdj04ZE",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "レイドバックジャーニー",
        "artist": "キミのね",
        "usage": "第3期",
        "q": "ゆるキャン△ OP レイドバックジャーニー キミのね",
        "yt": {
          "id": "_SXLsH7LSAY",
          "k": "mv",
          "o": 1,
          "ch": "キミのね official channel"
        }
      },
      {
        "kind": "ED",
        "name": "ふゆびより",
        "artist": "佐々木恵梨",
        "usage": "第1期",
        "q": "ゆるキャン△ ED ふゆびより 佐々木恵梨",
        "yt": {
          "id": "qJ-Kx7IKYEA",
          "k": "nc",
          "o": 1,
          "ch": "FURYU Pictures Channel",
          "fa": {
            "id": "PCDzg5kdGPM",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "はるのとなり",
        "artist": "佐々木恵梨",
        "usage": "第2期",
        "q": "ゆるキャン△ ED はるのとなり 佐々木恵梨",
        "yt": {
          "id": "qJ-Kx7IKYEA",
          "k": "nc",
          "o": 1,
          "ch": "FURYU Pictures Channel",
          "fa": {
            "id": "PCDzg5kdGPM",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "So Precious",
        "artist": "亜咲花",
        "usage": "第3期",
        "q": "ゆるキャン△ ED So Precious 亜咲花",
        "yt": {
          "id": "vYuvUKc1XPM",
          "k": "au",
          "o": 1,
          "ch": "亜咲花公式チャンネル"
        }
      }
    ],
    "favs": [
      "13963",
      "13964",
      "18164",
      "25171"
    ]
  },
  {
    "id": "elmelloi",
    "title": "ロード・エルメロイII世の事件簿",
    "year": 2019,
    "wiki": "ロード・エルメロイII世の事件簿",
    "image": "https://cdn.myanimelist.net/images/anime/1107/111530l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "starting the case : Rail Zeppelin",
        "artist": "梶浦由記（作曲・編曲）",
        "usage": "",
        "note": "出典では「梶浦由記作曲・編曲によるオープニングテーマ」と記載（歌手の記載なし）",
        "q": "ロード・エルメロイII世の事件簿 OP starting the case : Rail Zeppelin 梶浦由記",
        "yt": {
          "id": "XgLdHaQLD6c",
          "k": "au",
          "o": 1,
          "ch": "梶浦由記 / Yuki Kajiura Official"
        }
      },
      {
        "kind": "ED",
        "name": "雲雀",
        "artist": "ASCA",
        "usage": "",
        "q": "ロード・エルメロイII世の事件簿 ED 雲雀 ASCA",
        "yt": {
          "id": "zrrM5cWw0vg",
          "k": "ot",
          "o": 0,
          "ch": "KainerNS Music"
        }
      },
      {
        "kind": "ED",
        "name": "君が見た夢の物語",
        "artist": "ASCA",
        "usage": "特別編",
        "q": "ロード・エルメロイII世の事件簿 ED 君が見た夢の物語 ASCA",
        "yt": {
          "id": "NqOhg285op4",
          "k": "au",
          "o": 1,
          "ch": "ASCA Official YouTube Channel"
        }
      }
    ],
    "favs": [
      "7764",
      "14078"
    ]
  },
  {
    "id": "isekaicharat",
    "title": "異世界かるてっと",
    "year": 2019,
    "wiki": "異世界かるてっと",
    "note": "1〜3期",
    "image": "https://cdn.myanimelist.net/images/anime/1965/99667l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "異世界かるてっと",
        "artist": "アインズ（日野聡）、カズマ（福島潤）、スバル（小林裕介）、ターニャ（悠木碧）",
        "usage": "第1期",
        "q": "異世界かるてっと OP 異世界かるてっと アインズ",
        "yt": {
          "id": "NwSaAjwNBrw",
          "k": "nc",
          "o": 1,
          "ch": "KADOKAWAanime"
        }
      },
      {
        "kind": "OP",
        "name": "異世界ショータイム",
        "artist": "アインズ（日野聡）、カズマ（福島潤）、スバル（小林裕介）、ターニャ（悠木碧）",
        "usage": "第2期",
        "q": "異世界かるてっと OP 異世界ショータイム アインズ",
        "yt": {
          "id": "qLn6wgRKAaY",
          "k": "au",
          "o": 1,
          "ch": "アインズ（CV：日野 聡）、カズマ（CV：福島 潤）、スバル（CV：小林 裕介）、ターニャ（CV：悠木 碧） - Topic"
        }
      },
      {
        "kind": "OP",
        "name": "異世界こんちぇると",
        "artist": "アインズ（日野聡）、カズマ（福島潤）、スバル（小林裕介）、ターニャ（悠木碧）",
        "usage": "第3期",
        "q": "異世界かるてっと OP 異世界こんちぇると アインズ",
        "yt": {
          "id": "8WxNlfmIOzk",
          "k": "au",
          "o": 1,
          "ch": "アインズ（CV：日野 聡）、カズマ（CV：福島 潤）、スバル（CV：小林 裕介）、ターニャ（CV：悠木 碧） - Topic"
        }
      },
      {
        "kind": "ED",
        "name": "異世界ガールズ♡トーク",
        "artist": "アルベド（原由実）、アクア（雨宮天）、エミリア（高橋李依）、ターニャ（悠木碧）",
        "usage": "第1期",
        "q": "異世界かるてっと ED 異世界ガールズ♡トーク アルベド",
        "yt": {
          "id": "Kt2fkaWiQHk",
          "k": "au",
          "o": 1,
          "ch": "Release - Topic"
        }
      },
      {
        "kind": "ED",
        "name": "Hollow Veil",
        "artist": "nonoc",
        "usage": "第1期 第5話",
        "q": "異世界かるてっと ED Hollow Veil nonoc",
        "yt": {
          "id": "54DSOYmbZ_o",
          "k": "au",
          "o": 1,
          "ch": "nonoc Official"
        }
      },
      {
        "kind": "ED",
        "name": "ポンコツ！異世界シアター",
        "artist": "シャルティア（上坂すみれ）、めぐみん（高橋李依）、レム（水瀬いのり）、ヴィーシャ（早見沙織）",
        "usage": "第2期",
        "q": "異世界かるてっと ED ポンコツ！異世界シアター シャルティア",
        "yt": {
          "id": "zb3Ya_Jb-2Y",
          "k": "ot",
          "o": 0,
          "ch": "梵天ちゃんねる"
        }
      },
      {
        "kind": "ED",
        "name": "sweet pass",
        "artist": "安月名莉子",
        "usage": "第2期 第5話",
        "q": "異世界かるてっと ED sweet pass 安月名莉子",
        "yt": {
          "id": "IobMn_FRUW4",
          "k": "ot",
          "o": 0,
          "ch": "jerry"
        }
      },
      {
        "kind": "ED",
        "name": "君色、僕色",
        "artist": "鈴木このみ、伊東歌詞太郎",
        "usage": "第3期",
        "q": "異世界かるてっと ED 君色、僕色 鈴木このみ",
        "yt": {
          "id": "dI8PEIHmlr4",
          "k": "mv",
          "o": 1,
          "ch": "KADOKAWAanime and 2 more"
        }
      },
      {
        "kind": "ED",
        "name": "melting days",
        "artist": "前島麻由",
        "usage": "第3期 第7話",
        "q": "異世界かるてっと ED melting days 前島麻由",
        "yt": {
          "id": "21n_9rX33M4",
          "k": "mv",
          "o": 1,
          "ch": "MAYU MAESHIMA YouTube Official Channel"
        }
      }
    ],
    "favs": [
      "7502",
      "14858",
      "26210"
    ]
  },
  {
    "id": "kemono2",
    "title": "けものフレンズ2",
    "year": 2019,
    "wiki": "けものフレンズ2",
    "image": "https://img2.animatetimes.com/2022/01/61f0edd0b0acc_c04b60658f28227e7446457d0eed3718.jpg",
    "imageCredit": "animatetimes.com",
    "tracks": [
      {
        "kind": "OP",
        "name": "乗ってけ！ジャパリビート",
        "artist": "どうぶつビスケッツ×PPP",
        "usage": "",
        "q": "けものフレンズ2 OP 乗ってけ！ジャパリビート どうぶつビスケッツ",
        "yt": {
          "id": "vOX_UsdM_uc",
          "k": "mv",
          "o": 1,
          "ch": "けものフレンズプロジェクト公式"
        }
      },
      {
        "kind": "ED",
        "name": "星をつなげて",
        "artist": "Gothic×Luck",
        "usage": "第1話から第5話",
        "q": "けものフレンズ2 ED 星をつなげて Gothic",
        "yt": {
          "id": "cVPERtPy-kM",
          "k": "mv",
          "o": 1,
          "ch": "けものフレンズプロジェクト公式",
          "fa": {
            "id": "3w8uhEhM5oY",
            "k": "au",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "きみは帰る場所",
        "artist": "Gothic×Luck",
        "usage": "第6話から第11話",
        "q": "けものフレンズ2 ED きみは帰る場所 Gothic",
        "yt": {
          "id": "h-v-pL74MSs",
          "k": "mv",
          "o": 1,
          "ch": "けものフレンズプロジェクト公式",
          "fa": {
            "id": "Ca2QjgScbFk",
            "k": "au",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "ようこそジャパリパークへ（ただいま ver.）",
        "artist": "うぃあーふれんず！",
        "usage": "第12話",
        "q": "けものフレンズ2 ED ようこそジャパリパークへ（ただいま ver.） うぃあーふれんず！",
        "yt": {
          "id": "xkMdLcB_vNU",
          "k": "mv",
          "o": 1,
          "ch": "けものフレンズプロジェクト公式",
          "fa": {
            "id": "g67QKrSg8RY",
            "k": "au",
            "o": 1
          }
        }
      }
    ],
    "favs": [
      "14382"
    ]
  },
  {
    "id": "yakuneba",
    "title": "約束のネバーランド",
    "year": 2019,
    "wiki": "約束のネバーランド",
    "note": "1〜2期",
    "image": "https://cdn.myanimelist.net/images/anime/1830/118780l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "Touch off",
        "artist": "UVERworld",
        "usage": "第1期",
        "q": "約束のネバーランド OP Touch off UVERworld",
        "yt": {
          "id": "L-QXTyHMqJM",
          "k": "mv",
          "o": 1,
          "ch": "UVERworld Official YouTube Channel"
        }
      },
      {
        "kind": "OP",
        "name": "アイデンティティ",
        "artist": "秋山黄色",
        "usage": "第2期",
        "q": "約束のネバーランド OP アイデンティティ 秋山黄色",
        "yt": {
          "id": "E4llyNVH71c",
          "k": "au",
          "o": 1,
          "ch": "秋山黄色"
        }
      },
      {
        "kind": "ED",
        "name": "絶体絶命/Lamp",
        "artist": "Cö shu Nie",
        "usage": "第1期",
        "q": "約束のネバーランド ED 絶体絶命/Lamp Cö shu Nie"
      },
      {
        "kind": "ED",
        "name": "魔法",
        "artist": "Myuk",
        "usage": "第2期",
        "q": "約束のネバーランド ED 魔法 Myuk",
        "yt": {
          "id": "l5MOVg9eMe4",
          "k": "mv",
          "o": 1,
          "ch": "Myuk"
        }
      }
    ],
    "favs": [
      "7270",
      "13526"
    ]
  },
  {
    "id": "kaguya",
    "title": "かぐや様は告らせたい",
    "year": 2020,
    "wiki": "かぐや様は告らせたい〜天才たちの恋愛頭脳戦〜",
    "note": "第2期",
    "image": "https://cdn.myanimelist.net/images/anime/1764/106659l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "ラブ・ドラマティック feat. 伊原六花",
        "artist": "鈴木雅之",
        "usage": "第1期",
        "q": "かぐや様は告らせたい OP ラブ・ドラマティック feat. 伊原六花 鈴木雅之",
        "yt": {
          "id": "6vRxlXHH4H8",
          "k": "op",
          "o": 1,
          "ch": "アニプレックス チャンネル",
          "fa": {
            "id": "Y9BlLMsgKRc",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "OP",
        "name": "DADDY ! DADDY ! DO ! feat. 鈴木愛理",
        "artist": "鈴木雅之",
        "usage": "第2期",
        "q": "かぐや様は告らせたい OP DADDY ! DADDY ! DO ! feat. 鈴木愛理 鈴木雅之",
        "yt": {
          "id": "4NEbSnuL6GA",
          "k": "op",
          "o": 1,
          "ch": "アニプレックス チャンネル",
          "fa": {
            "id": "2Od7QCsyqkE",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "GIRI GIRI",
        "artist": "鈴木雅之 feat. すぅ",
        "usage": "第3期",
        "q": "かぐや様は告らせたい OP GIRI GIRI 鈴木雅之",
        "yt": {
          "id": "j3p6sXq_uUM",
          "k": "op",
          "o": 1,
          "ch": "アニプレックス チャンネル",
          "fa": {
            "id": "vptdHEUZN10",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "センチメンタルクライシス",
        "artist": "halca",
        "usage": "第1期",
        "q": "かぐや様は告らせたい ED センチメンタルクライシス halca",
        "yt": {
          "id": "DScR3LonMFA",
          "k": "op",
          "o": 1,
          "ch": "アニプレックス チャンネル",
          "fa": {
            "id": "RHfaZZAMwA0",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "風に吹かれて",
        "artist": "福原遥",
        "usage": "第2期",
        "q": "かぐや様は告らせたい ED 風に吹かれて 福原遥",
        "yt": {
          "id": "l0Z6_6fi-HI",
          "k": "op",
          "o": 1,
          "ch": "アニプレックス チャンネル",
          "fa": {
            "id": "ncnHddqNqhM",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "ハートはお手上げ",
        "artist": "鈴木愛理",
        "usage": "第3期",
        "q": "かぐや様は告らせたい ED ハートはお手上げ 鈴木愛理",
        "yt": {
          "id": "sVoz_fH59Ew",
          "k": "op",
          "o": 1,
          "ch": "アニプレックス チャンネル",
          "fa": {
            "id": "GSuselwRqcE",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "My Nonfiction",
        "artist": "白銀御行（古川慎）、藤原千花（小原好美）",
        "usage": "第3期 第5話",
        "note": "特別エンディングテーマ",
        "q": "かぐや様は告らせたい ED My Nonfiction 白銀御行",
        "yt": {
          "id": "yWp6SXivHBQ",
          "k": "op",
          "o": 1,
          "ch": "アニプレックス チャンネル"
        }
      }
    ],
    "favs": [
      "13541"
    ]
  },
  {
    "id": "railgun",
    "title": "とある科学の超電磁砲",
    "year": 2020,
    "wiki": "とある科学の超電磁砲 (アニメ)",
    "note": "T（3期）",
    "image": "https://cdn.myanimelist.net/images/anime/1099/106939l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "only my railgun",
        "artist": "fripSide",
        "usage": "第1期 前期",
        "q": "とある科学の超電磁砲 OP only my railgun fripSide",
        "yt": {
          "id": "NOt2qxWtBv0",
          "k": "op",
          "o": 1,
          "ch": "NBCUniversal Anime/Music",
          "fa": {
            "id": "cFqaN3vgxLc",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "LEVEL5-judgelight-",
        "artist": "fripSide",
        "usage": "第1期 後期",
        "q": "とある科学の超電磁砲 OP LEVEL5-judgelight- fripSide",
        "yt": {
          "id": "mK2R8vQzojM",
          "k": "op",
          "o": 1,
          "ch": "NBCUniversal Anime/Music",
          "fa": {
            "id": "W4YbIxlfw8k",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "sister's noise",
        "artist": "fripSide",
        "usage": "S 前期",
        "q": "とある科学の超電磁砲 OP sister's noise fripSide",
        "yt": {
          "id": "rCtc-9EVE_c",
          "k": "op",
          "o": 1,
          "ch": "NBCUniversal Anime/Music",
          "fa": {
            "id": "e6g3mkqhFzo",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "eternal reality",
        "artist": "fripSide",
        "usage": "S 後期",
        "q": "とある科学の超電磁砲 OP eternal reality fripSide",
        "yt": {
          "id": "s3_riCFJ3MY",
          "k": "op",
          "o": 1,
          "ch": "NBCUniversal Anime/Music",
          "fa": {
            "id": "AJ7zMdz0OBs",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "final phase",
        "artist": "fripSide",
        "usage": "T 前期",
        "q": "とある科学の超電磁砲 OP final phase fripSide",
        "yt": {
          "id": "R33q3f7Xpiw",
          "k": "op",
          "o": 1,
          "ch": "とあるプロジェクト公式toaru.project",
          "fa": {
            "id": "gQ91NaeO2To",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "dual existence",
        "artist": "fripSide",
        "usage": "T 後期",
        "q": "とある科学の超電磁砲 OP dual existence fripSide",
        "yt": {
          "id": "Ud8muRt82kI",
          "k": "op",
          "o": 1,
          "ch": "とあるプロジェクト公式toaru.project",
          "fa": {
            "id": "mtBGt4ghlxk",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "Dear My Friend -まだ見ぬ未来へ-",
        "artist": "ELISA",
        "usage": "第1期 前期",
        "q": "とある科学の超電磁砲 ED Dear My Friend -まだ見ぬ未来へ- ELISA"
      },
      {
        "kind": "ED",
        "name": "SMILE -You&Me-",
        "artist": "ELISA",
        "usage": "第1期 第12話",
        "q": "とある科学の超電磁砲 ED SMILE -You&Me- ELISA"
      },
      {
        "kind": "ED",
        "name": "Real Force",
        "artist": "ELISA",
        "usage": "第1期 後期",
        "q": "とある科学の超電磁砲 ED Real Force ELISA",
        "yt": {
          "id": "APmjN__YU4s",
          "k": "op",
          "o": 1,
          "ch": "NBCUniversal Anime/Music",
          "fa": {
            "id": "kVUDqLjq55c",
            "k": "au",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "Grow Slowly",
        "artist": "井口裕香",
        "usage": "S 前期",
        "q": "とある科学の超電磁砲 ED Grow Slowly 井口裕香",
        "yt": {
          "id": "O7oFmGCvgbs",
          "k": "op",
          "o": 1,
          "ch": "NBCUniversal Anime/Music",
          "fa": {
            "id": "Ph2Mq1T8xGc",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "リンクス",
        "artist": "三澤紗千香",
        "usage": "S 後期",
        "q": "とある科学の超電磁砲 ED リンクス 三澤紗千香",
        "yt": {
          "id": "grwIhl15hCg",
          "k": "op",
          "o": 1,
          "ch": "NBCUniversal Anime/Music",
          "fa": {
            "id": "fx0VLex8L5M",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "nameless story",
        "artist": "岸田教団&THE明星ロケッツ",
        "usage": "T 前期",
        "q": "とある科学の超電磁砲 ED nameless story 岸田教団",
        "yt": {
          "id": "xuo3MpsN_MA",
          "k": "op",
          "o": 1,
          "ch": "とあるプロジェクト公式toaru.project",
          "fa": {
            "id": "gNYZfmHGbW8",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "青嵐のあとで",
        "artist": "sajou no hana",
        "usage": "T 後期",
        "q": "とある科学の超電磁砲 ED 青嵐のあとで sajou no hana",
        "yt": {
          "id": "u3FzrcYC5ds",
          "k": "op",
          "o": 1,
          "ch": "とあるプロジェクト公式toaru.project",
          "fa": {
            "id": "gTFeQHPLmNE",
            "k": "mv",
            "o": 1
          }
        }
      }
    ],
    "favs": [
      "14984"
    ]
  },
  {
    "id": "mushoku",
    "title": "無職転生",
    "year": 2021,
    "wiki": "無職転生 〜異世界行ったら本気だす〜 (アニメ)",
    "note": "1〜3期",
    "image": "https://cdn.myanimelist.net/images/anime/1530/117776l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "旅人の唄",
        "artist": "大原ゆい子",
        "usage": "第1期 第1〜8話",
        "q": "無職転生 OP 旅人の唄 大原ゆい子",
        "yt": {
          "id": "vhRf4uBPzbU",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "V7tcjHd68WU",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "目覚めの唄",
        "artist": "大原ゆい子",
        "usage": "第1期 第10〜13話",
        "q": "無職転生 OP 目覚めの唄 大原ゆい子",
        "yt": {
          "id": "sRjYwdmaNNQ",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "NEh3-Qmq1LE",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "継承の唄",
        "artist": "大原ゆい子",
        "usage": "第1期 第14話・第15話",
        "q": "無職転生 OP 継承の唄 大原ゆい子",
        "yt": {
          "id": "1vNVI9gINtg",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "uFtCdcbEuc8",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "祈りの唄",
        "artist": "大原ゆい子",
        "usage": "第1期 第16〜18話、番外編",
        "q": "無職転生 OP 祈りの唄 大原ゆい子",
        "yt": {
          "id": "yAj0Oj4lRKk",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル"
        }
      },
      {
        "kind": "OP",
        "name": "遠くの子守の唄",
        "artist": "大原ゆい子",
        "usage": "第1期 第19〜21話",
        "q": "無職転生 OP 遠くの子守の唄 大原ゆい子",
        "yt": {
          "id": "cb0idLH-CnY",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "lDeIjANwEOM",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "旅人の唄〜帰郷〜",
        "artist": "大原ゆい子",
        "usage": "第1期 第22話・第23話",
        "q": "無職転生 OP 旅人の唄〜帰郷〜 大原ゆい子",
        "yt": {
          "id": "vhRf4uBPzbU",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "V7tcjHd68WU",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "spiral",
        "artist": "LONGMAN",
        "usage": "第2期 第1クール",
        "q": "無職転生 OP spiral LONGMAN",
        "yt": {
          "id": "_NIp8wvNXmM",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "fE9trKOuT3Q",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "オン・ザ・フロントライン",
        "artist": "ヒトリエ",
        "usage": "第2期 第2クール",
        "q": "無職転生 OP オン・ザ・フロントライン ヒトリエ",
        "yt": {
          "id": "kQ5Zfgpirwc",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "TjM4AOK_ZsU",
            "k": "au",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "決意の唄",
        "artist": "大原ゆい子",
        "usage": "第3期 第1話・第2話",
        "q": "無職転生 OP 決意の唄 大原ゆい子",
        "yt": {
          "id": "3F8-KF40VhI",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "NvaiTxBEnh0",
            "k": "au",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "芽吹の唄",
        "artist": "大原ゆい子",
        "usage": "第3期 第4〜7話",
        "q": "無職転生 OP 芽吹の唄 大原ゆい子",
        "yt": {
          "id": "7ClAoZKbuhA",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "ARKWdKzLCvA",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "光の唄",
        "artist": "大原ゆい子",
        "usage": "第3期 第8話以降",
        "q": "無職転生 OP 光の唄 大原ゆい子",
        "yt": {
          "id": "yb-cdQhbTRU",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル"
        }
      },
      {
        "kind": "ED",
        "name": "オンリー",
        "artist": "大原ゆい子",
        "usage": "第1期 第1クール",
        "q": "無職転生 ED オンリー 大原ゆい子",
        "yt": {
          "id": "3mLWoJF17U4",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "ebaaWokWIo4",
            "k": "au",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "風と行く道",
        "artist": "大原ゆい子",
        "usage": "第1期 第2クール",
        "q": "無職転生 ED 風と行く道 大原ゆい子",
        "yt": {
          "id": "PINgF6rCuME",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "mUZEnAeUvgA",
            "k": "au",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "ムスビメ",
        "artist": "大原ゆい子",
        "usage": "第2期 第1クール",
        "q": "無職転生 ED ムスビメ 大原ゆい子",
        "yt": {
          "id": "zr19Xf-tH9o",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "wbq1Q0iykIw",
            "k": "au",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "守りたいもの",
        "artist": "大原ゆい子",
        "usage": "第2期 第2クール",
        "q": "無職転生 ED 守りたいもの 大原ゆい子",
        "yt": {
          "id": "1C_cjVx66PE",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "v7FApIxb4Y8",
            "k": "au",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "Clover",
        "artist": "大原ゆい子",
        "usage": "第2期 第0話",
        "q": "無職転生 ED Clover 大原ゆい子",
        "yt": {
          "id": "DisOzS-ZjPQ",
          "k": "au",
          "o": 1,
          "ch": "大原ゆい子Official YouTube"
        }
      },
      {
        "kind": "ED",
        "name": "花咲み",
        "artist": "シルフィエット（茅野愛衣）",
        "usage": "第2期 第12話",
        "q": "無職転生 ED 花咲み シルフィエット",
        "yt": {
          "id": "ZeDldD53qxI",
          "k": "au",
          "o": 1,
          "ch": "シルフィエット（CV：茅野愛衣） - Topic"
        }
      },
      {
        "kind": "ED",
        "name": "ツバサ",
        "artist": "ナナホシ（若山詩音）",
        "usage": "第2期 第15話",
        "q": "無職転生 ED ツバサ ナナホシ",
        "yt": {
          "id": "ovEcE7UthV8",
          "k": "ot",
          "o": 0,
          "ch": "𝑾𝒆𝒊𝑬𝑵",
          "fa": {
            "id": "s9u7oQ7aaV0",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "かげくらべの唄",
        "artist": "大原ゆい子",
        "usage": "第2期 第24話",
        "q": "無職転生 ED かげくらべの唄 大原ゆい子",
        "yt": {
          "id": "fDcufjgMoSA",
          "k": "au",
          "o": 1,
          "ch": "大原ゆい子Official YouTube"
        }
      },
      {
        "kind": "ED",
        "name": "祈り、終われば",
        "artist": "中島美嘉",
        "usage": "第3期",
        "q": "無職転生 ED 祈り、終われば 中島美嘉",
        "yt": {
          "id": "UKcJqQqiXq0",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "i8b4L1i55OQ",
            "k": "au",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "一縷",
        "artist": "大原ゆい子",
        "usage": "第3期 第13話",
        "q": "無職転生 ED 一縷 大原ゆい子",
        "yt": {
          "id": "r5DeWy_TxXs",
          "k": "au",
          "o": 1,
          "ch": "大原ゆい子Official YouTube"
        }
      }
    ],
    "favs": [
      "9105",
      "14665",
      "24285"
    ]
  },
  {
    "id": "arknights",
    "title": "アークナイツ",
    "year": 2022,
    "wiki": "アークナイツ",
    "note": "黎明前奏・冬隠帰路・焔燼曙明",
    "image": "https://cdn.myanimelist.net/images/anime/1644/128406l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "Alive",
        "artist": "ReoNa",
        "usage": "第1期",
        "q": "アークナイツ OP Alive ReoNa",
        "yt": {
          "id": "1XKJqBrhyeE",
          "k": "nc",
          "o": 1,
          "ch": "アークナイツ 公式チャンネル",
          "fa": {
            "id": "7jqVuqVQvvA",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "ACHE in PULSE",
        "artist": "MYTH & ROID",
        "usage": "第2期",
        "q": "アークナイツ OP ACHE in PULSE MYTH",
        "yt": {
          "id": "SEpX-8wjqRc",
          "k": "nc",
          "o": 1,
          "ch": "アークナイツ 公式チャンネル",
          "fa": {
            "id": "lgP560HhOVs",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "End of Days",
        "artist": "ReoNa",
        "usage": "第3期",
        "q": "アークナイツ OP End of Days ReoNa",
        "yt": {
          "id": "xYCvpdigzUA",
          "k": "mv",
          "o": 1,
          "ch": "ReoNa official YouTube channel"
        }
      },
      {
        "kind": "ED",
        "name": "BE ME",
        "artist": "Doul",
        "usage": "第1期",
        "q": "アークナイツ ED BE ME Doul",
        "yt": {
          "id": "wEjfXC5er5Q",
          "k": "nc",
          "o": 1,
          "ch": "アークナイツ 公式チャンネル",
          "fa": {
            "id": "XA-D0jY0Z9w",
            "k": "au",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "R.I.P.",
        "artist": "ReoNa",
        "usage": "第2期",
        "q": "アークナイツ ED R.I.P. ReoNa",
        "yt": {
          "id": "4btSbeB1Ado",
          "k": "nc",
          "o": 1,
          "ch": "アークナイツ 公式チャンネル",
          "fa": {
            "id": "c0r6H89FWrs",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "Fleeting Wish",
        "artist": "フロストノヴァ（高垣彩陽）",
        "usage": "第16話",
        "q": "アークナイツ ED Fleeting Wish フロストノヴァ",
        "yt": {
          "id": "obmvHjtGvHg",
          "k": "mv",
          "o": 1,
          "ch": "アークナイツ 公式チャンネル"
        }
      },
      {
        "kind": "ED",
        "name": "Truth",
        "artist": "糸奇はな",
        "usage": "第3期",
        "q": "アークナイツ ED Truth 糸奇はな",
        "yt": {
          "id": "cdI3pFxfw50",
          "k": "mv",
          "o": 1,
          "ch": "アークナイツ 公式チャンネル"
        }
      },
      {
        "kind": "ED",
        "name": "生命換装",
        "artist": "ReoNa",
        "usage": "第26話",
        "q": "アークナイツ ED 生命換装 ReoNa",
        "yt": {
          "id": "5Wr5315DxxM",
          "k": "au",
          "o": 1,
          "ch": "ReoNa official YouTube channel"
        }
      }
    ],
    "favs": [
      "9490",
      "19116",
      "24010"
    ]
  },
  {
    "id": "bleachtybw",
    "title": "BLEACH 千年血戦篇",
    "year": 2022,
    "wiki": "BLEACH 千年血戦篇",
    "note": "千年血戦篇 全4クール",
    "image": "https://cdn.myanimelist.net/images/anime/1908/135431l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "スカー",
        "artist": "キタニタツヤ",
        "usage": "第1クール",
        "q": "BLEACH 千年血戦篇 OP スカー キタニタツヤ",
        "yt": {
          "id": "llV33cnS4Ws",
          "k": "au",
          "o": 1,
          "ch": "キタニタツヤ / Tatsuya Kitani"
        }
      },
      {
        "kind": "OP",
        "name": "STARS",
        "artist": "w.o.d.",
        "usage": "第2クール『-訣別譚-』",
        "q": "BLEACH 千年血戦篇 OP STARS w.o.d.",
        "yt": {
          "id": "oXcnhuNIzF4",
          "k": "mv",
          "o": 1,
          "ch": "w.o.d."
        }
      },
      {
        "kind": "OP",
        "name": "言葉にせずとも",
        "artist": "SIX LOUNGE",
        "usage": "第3クール『-相剋譚-』",
        "q": "BLEACH 千年血戦篇 OP 言葉にせずとも SIX LOUNGE",
        "yt": {
          "id": "WyIIEj-zpHE",
          "k": "ot",
          "o": 0,
          "ch": "Yubisaki no Distortion"
        }
      },
      {
        "kind": "OP",
        "name": "I-BULL（いぶる）",
        "artist": "jo0ji",
        "usage": "第4クール『-禍進譚-』",
        "q": "BLEACH 千年血戦篇 OP I-BULL（いぶる） jo0ji",
        "yt": {
          "id": "P31CxorjHjI",
          "k": "mv",
          "o": 1,
          "ch": "jo0ji"
        }
      },
      {
        "kind": "ED",
        "name": "最果て",
        "artist": "SennaRin",
        "usage": "第1クール",
        "q": "BLEACH 千年血戦篇 ED 最果て SennaRin",
        "yt": {
          "id": "qD4-fgIAe-Y",
          "k": "au",
          "o": 1,
          "ch": "SennaRin official YouTube channel"
        }
      },
      {
        "kind": "ED",
        "name": "Rapport",
        "artist": "キタニタツヤ",
        "usage": "第1話",
        "note": "スペシャルエンディングテーマ",
        "q": "BLEACH 千年血戦篇 ED Rapport キタニタツヤ",
        "yt": {
          "id": "yN1Pz0FtrVU",
          "k": "au",
          "o": 1,
          "ch": "キタニタツヤ / Tatsuya Kitani"
        }
      },
      {
        "kind": "ED",
        "name": "Endroll",
        "artist": "神山羊",
        "usage": "第2クール『-訣別譚-』",
        "q": "BLEACH 千年血戦篇 ED Endroll 神山羊",
        "yt": {
          "id": "nyFuKqOQbFo",
          "k": "mv",
          "o": 1,
          "ch": "神山羊 / Yoh Kamiyama"
        }
      },
      {
        "kind": "ED",
        "name": "MONOCHROME",
        "artist": "水槽",
        "usage": "第3クール『-相剋譚-』",
        "q": "BLEACH 千年血戦篇 ED MONOCHROME 水槽",
        "yt": {
          "id": "PvEz-mDsQeI",
          "k": "mv",
          "o": 1,
          "ch": "suisoh"
        }
      },
      {
        "kind": "ED",
        "name": "螺旋",
        "artist": "9Lana",
        "usage": "第4クール『-禍進譚-』",
        "q": "BLEACH 千年血戦篇 ED 螺旋 9Lana",
        "yt": {
          "id": "y5Wi5kOiGAQ",
          "k": "mv",
          "o": 1,
          "ch": "9Lana"
        }
      },
      {
        "kind": "ED",
        "name": "螺旋-Acoustic Ver.-",
        "artist": "9Lana",
        "usage": "第4クール 第45話",
        "q": "BLEACH 千年血戦篇 ED 螺旋-Acoustic Ver.- 9Lana",
        "yt": {
          "id": "y5Wi5kOiGAQ",
          "k": "mv",
          "o": 1,
          "ch": "9Lana"
        }
      }
    ],
    "favs": [
      "14033",
      "19244",
      "22787",
      "25417"
    ]
  },
  {
    "id": "isekaiojisan",
    "title": "異世界おじさん",
    "year": 2022,
    "wiki": "異世界おじさん",
    "image": "https://cdn.myanimelist.net/images/anime/1743/125204l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "story",
        "artist": "前島麻由",
        "usage": "",
        "q": "異世界おじさん OP story 前島麻由",
        "yt": {
          "id": "NFS7ZvqOO_A",
          "k": "nc",
          "o": 1,
          "ch": "KADOKAWAanime",
          "fa": {
            "id": "4wwi-wdpeck",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "一番星ソノリティ",
        "artist": "井口裕香",
        "usage": "",
        "q": "異世界おじさん ED 一番星ソノリティ 井口裕香",
        "yt": {
          "id": "pCb0C5K78fo",
          "k": "nc",
          "o": 1,
          "ch": "KADOKAWAanime",
          "fa": {
            "id": "A61wLFQ8CCI",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "DREAMS DREAMS<nowiki>:</nowiki>Mabel Ver",
        "artist": "",
        "usage": "メイベル（悠木碧）による第12話挿入歌。作詞・作曲はササキトモコ",
        "q": "異世界おじさん ED DREAMS DREAMS<nowiki>:</nowiki>Mabel Ver"
      }
    ],
    "favs": [
      "12470"
    ]
  },
  {
    "id": "kyokou",
    "title": "虚構推理",
    "year": 2022,
    "wiki": "虚構推理",
    "note": "1〜2期",
    "image": "https://cdn.myanimelist.net/images/anime/1310/117188l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "モノノケ・イン・ザ・フィクション",
        "artist": "嘘とカメレオン",
        "usage": "第1期",
        "q": "虚構推理 OP モノノケ・イン・ザ・フィクション 嘘とカメレオン",
        "yt": {
          "id": "B2qPiSi3rdw",
          "k": "mv",
          "o": 1,
          "ch": "嘘とカメレオンofficial"
        }
      },
      {
        "kind": "OP",
        "name": "ヨトギバナシ",
        "artist": "カノエラナ",
        "usage": "第2期",
        "q": "虚構推理 OP ヨトギバナシ カノエラナ",
        "yt": {
          "id": "4t34fDwwkvo",
          "k": "nc",
          "o": 1,
          "ch": "「虚構推理」公式",
          "fa": {
            "id": "hDCgkn-i0UQ",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "LAST DANCE",
        "artist": "宮野真守",
        "usage": "第1期",
        "q": "虚構推理 ED LAST DANCE 宮野真守",
        "yt": {
          "id": "F9mjmz70UoI",
          "k": "nc",
          "o": 1,
          "ch": "「虚構推理」公式",
          "fa": {
            "id": "lgifQ2dBqqI",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "Invincible Love",
        "artist": "宮野真守",
        "usage": "第2期",
        "q": "虚構推理 ED Invincible Love 宮野真守",
        "yt": {
          "id": "F9mjmz70UoI",
          "k": "nc",
          "o": 1,
          "ch": "「虚構推理」公式",
          "fa": {
            "id": "lgifQ2dBqqI",
            "k": "mv",
            "o": 1
          }
        }
      }
    ],
    "favs": [
      "7780",
      "13645"
    ]
  },
  {
    "id": "mahoyome",
    "title": "魔法使いの嫁",
    "year": 2022,
    "wiki": "魔法使いの嫁",
    "note": "1〜2期",
    "image": "https://cdn.myanimelist.net/images/anime/3/88476l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "Here",
        "artist": "JUNNA",
        "usage": "SEASON1 第1クール",
        "q": "魔法使いの嫁 OP Here JUNNA",
        "yt": {
          "id": "SNUOYgeuwso",
          "k": "mv",
          "o": 1,
          "ch": "Junna_Official"
        }
      },
      {
        "kind": "OP",
        "name": "You",
        "artist": "May'n",
        "usage": "SEASON1 第2クール",
        "q": "魔法使いの嫁 OP You May'n",
        "yt": {
          "id": "uteo_N6PUnQ",
          "k": "mv",
          "o": 1,
          "ch": "FlyingDog"
        }
      },
      {
        "kind": "OP",
        "name": "Dear",
        "artist": "JUNNA",
        "usage": "SEASON2 第1クール",
        "q": "魔法使いの嫁 OP Dear JUNNA",
        "yt": {
          "id": "Q3QPWINIX_g",
          "k": "nc",
          "o": 1,
          "ch": "TWIN ENGINE",
          "fa": {
            "id": "rPxKKC_GI2Q",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "眠らされたリネージュ",
        "artist": "JUNNA",
        "usage": "SEASON2 第2クール",
        "q": "魔法使いの嫁 OP 眠らされたリネージュ JUNNA",
        "yt": {
          "id": "WEJGuVPYAQc",
          "k": "nc",
          "o": 1,
          "ch": "TWIN ENGINE",
          "fa": {
            "id": "GTaK5ppKd8M",
            "k": "au",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "環-cycle-",
        "artist": "糸奇はな",
        "usage": "SEASON1 第1クール",
        "q": "魔法使いの嫁 ED 環-cycle- 糸奇はな",
        "yt": {
          "id": "0AFsMUBp70Y",
          "k": "mv",
          "o": 1,
          "ch": "FlyingDog",
          "fa": {
            "id": "_B0g58w-dig",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "月のもう半分",
        "artist": "AIKI & AKINO from bless4",
        "usage": "SEASON1 第2クール",
        "q": "魔法使いの嫁 ED 月のもう半分 AIKI",
        "yt": {
          "id": "PWavjarfaK8",
          "k": "au",
          "o": 1,
          "ch": "AIKI ＆ AKINO from bless4 - Topic"
        }
      },
      {
        "kind": "ED",
        "name": "The Legend of \"The Ancient Magus Bride\"",
        "artist": "Jessica",
        "usage": "SEASON1 最終話",
        "q": "魔法使いの嫁 ED The Legend of \"The Ancient Magus Bride\" Jessica",
        "yt": {
          "id": "wwH4bAck5L4",
          "k": "au",
          "o": 1,
          "ch": "Jessica - Topic"
        }
      },
      {
        "kind": "ED",
        "name": "無伴奏",
        "artist": "edda",
        "usage": "SEASON2 第1クール",
        "q": "魔法使いの嫁 ED 無伴奏 edda"
      },
      {
        "kind": "ED",
        "name": "fam",
        "artist": "遊遊",
        "usage": "SEASON2 第2クール",
        "q": "魔法使いの嫁 ED fam 遊遊",
        "yt": {
          "id": "3Oj8iVg2LjY",
          "k": "nc",
          "o": 1,
          "ch": "TWIN ENGINE",
          "fa": {
            "id": "-DXPmE2W3w0",
            "k": "au",
            "o": 1
          }
        }
      }
    ],
    "favs": [
      "6033",
      "17152"
    ]
  },
  {
    "id": "shinepost",
    "title": "シャインポスト",
    "year": 2022,
    "wiki": "シャインポスト",
    "image": "https://cdn.myanimelist.net/images/anime/1976/123710l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "ワンダー・スターター",
        "artist": "TINGS",
        "usage": "",
        "q": "シャインポスト OP ワンダー・スターター TINGS",
        "yt": {
          "id": "pHemM_8IOrY",
          "k": "nc",
          "o": 1,
          "ch": "『シャインポスト』公式",
          "fa": {
            "id": "qX8j_HsXrHI",
            "k": "au",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "パレットガールズ",
        "artist": "TINGS",
        "usage": "",
        "q": "シャインポスト ED パレットガールズ TINGS",
        "yt": {
          "id": "pLiV9zTDC08",
          "k": "nc",
          "o": 1,
          "ch": "『シャインポスト』公式",
          "fa": {
            "id": "zrXA4nx9bMo",
            "k": "au",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "ワンダー・スターター",
        "artist": "TINGS",
        "usage": "第1話",
        "q": "シャインポスト ED ワンダー・スターター TINGS",
        "yt": {
          "id": "pHemM_8IOrY",
          "k": "nc",
          "o": 1,
          "ch": "『シャインポスト』公式",
          "fa": {
            "id": "qX8j_HsXrHI",
            "k": "au",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "一歩前ノセカイ",
        "artist": "TiNgS",
        "usage": "第4話",
        "q": "シャインポスト ED 一歩前ノセカイ TiNgS",
        "yt": {
          "id": "SJUvkubL-Ts",
          "k": "mv",
          "o": 1,
          "ch": "『シャインポスト』公式"
        }
      },
      {
        "kind": "ED",
        "name": "Yellow Rose",
        "artist": "TiNgS",
        "usage": "第6話",
        "q": "シャインポスト ED Yellow Rose TiNgS",
        "yt": {
          "id": "N3Lp8yYewWU",
          "k": "mv",
          "o": 1,
          "ch": "『シャインポスト』公式"
        }
      }
    ],
    "favs": [
      "13567"
    ]
  },
  {
    "id": "spyfamily",
    "title": "SPY×FAMILY",
    "year": 2022,
    "wiki": "SPY×FAMILY (アニメ)",
    "note": "Season1〜3",
    "image": "https://cdn.myanimelist.net/images/anime/1441/122795l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "ミックスナッツ",
        "artist": "Official髭男dism",
        "usage": "第2〜12話",
        "q": "SPY×FAMILY OP ミックスナッツ Official髭男dism",
        "yt": {
          "id": "CbH2F0kXgTY",
          "k": "mv",
          "o": 1,
          "ch": "OFFICIAL HIGE DANDISM"
        }
      },
      {
        "kind": "OP",
        "name": "SOUVENIR",
        "artist": "BUMP OF CHICKEN",
        "usage": "第13〜25話",
        "q": "SPY×FAMILY OP SOUVENIR BUMP OF CHICKEN",
        "yt": {
          "id": "C9vAUfSEh8Q",
          "k": "mv",
          "o": 1,
          "ch": "BUMP OF CHICKEN"
        }
      },
      {
        "kind": "OP",
        "name": "クラクラ",
        "artist": "Ado",
        "usage": "第26〜37話",
        "q": "SPY×FAMILY OP クラクラ Ado",
        "yt": {
          "id": "gz--GkzpAf8",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "W_fHWaoQwkw",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "灯を護る",
        "artist": "スピッツ",
        "usage": "第38〜50話",
        "q": "SPY×FAMILY OP 灯を護る スピッツ",
        "yt": {
          "id": "PcmmU4aEQu0",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル and spitzclips",
          "fa": {
            "id": "itsVKmm32A0",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "喜劇",
        "artist": "星野源",
        "usage": "第1〜12話",
        "q": "SPY×FAMILY ED 喜劇 星野源",
        "yt": {
          "id": "nRKJBpFFsuI",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "JyRmSOle6ps",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "色彩",
        "artist": "yama",
        "usage": "第13〜25話",
        "q": "SPY×FAMILY ED 色彩 yama",
        "yt": {
          "id": "0butuH1N0sE",
          "k": "au",
          "o": 1,
          "ch": "yama"
        }
      },
      {
        "kind": "ED",
        "name": "トドメの一撃 feat. Cory Wong",
        "artist": "Vaundy",
        "usage": "第26〜37話",
        "q": "SPY×FAMILY ED トドメの一撃 feat. Cory Wong Vaundy",
        "yt": {
          "id": "4Ql6YwCTAko",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "7xRWOylrLfI",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "Actor",
        "artist": "幾田りら",
        "usage": "第39〜50話",
        "q": "SPY×FAMILY ED Actor 幾田りら",
        "yt": {
          "id": "e0wrj-qP4LI",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "fH8hLLww2JI",
            "k": "mv",
            "o": 1
          }
        }
      }
    ],
    "favs": [
      "24167",
      "19101",
      "24157"
    ]
  },
  {
    "id": "frieren",
    "title": "葬送のフリーレン",
    "year": 2023,
    "wiki": "葬送のフリーレン (アニメ)",
    "note": "第1〜2期",
    "image": "https://img2.animatetimes.com/2022/09/92c37b909ddd992b3fa00b908d5459976588f67fcf1b47_28040167_4bc06a95b4f7eb2b94b04ad6ff20e0c4410bd722.jpg",
    "imageCredit": "animatetimes.com",
    "tracks": [
      {
        "kind": "OP",
        "name": "勇者",
        "artist": "YOASOBI",
        "usage": "第1期・第1話〜第16話",
        "q": "葬送のフリーレン OP 勇者 YOASOBI",
        "yt": {
          "id": "QoGM9hCxr4k",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "M4-XU0a2hf0",
            "k": "au",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "晴る",
        "artist": "ヨルシカ",
        "usage": "第1期・第17話〜第28話",
        "q": "葬送のフリーレン OP 晴る ヨルシカ",
        "yt": {
          "id": "iqsnJJK8GA4",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "CkvWJNt77mU",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "lulu.",
        "artist": "Mrs. GREEN APPLE",
        "usage": "第2期",
        "q": "葬送のフリーレン OP lulu. Mrs. GREEN APPLE",
        "yt": {
          "id": "C0BG3B7aksU",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "MjeiIal1ZR0",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "bliss",
        "artist": "milet",
        "usage": "初回（第1話〜第4話）特別",
        "q": "葬送のフリーレン ED bliss milet",
        "yt": {
          "id": "5Ufj38W6-o4",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "vPRlSyJBVfk",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "Anytime Anywhere",
        "artist": "milet",
        "usage": "第1期",
        "q": "葬送のフリーレン ED Anytime Anywhere milet",
        "yt": {
          "id": "7pmd0kt3FOs",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "r105CzDvoo0",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "The Story of Us",
        "artist": "milet",
        "usage": "第2期",
        "q": "葬送のフリーレン ED The Story of Us milet",
        "yt": {
          "id": "FY4Bx2qtkRM",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "_1NbGbYG4qg",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "Trace",
        "artist": "milet",
        "usage": "第38話",
        "q": "葬送のフリーレン ED Trace milet",
        "yt": {
          "id": "R5cBm08p_jE",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "bm62EnYTWg4",
            "k": "au",
            "o": 1
          }
        }
      }
    ],
    "favs": [
      "28093",
      "24971"
    ]
  },
  {
    "id": "hikikomari",
    "title": "ひきこまり吸血姫の悶々",
    "year": 2023,
    "wiki": "ひきこまり吸血姫の悶々",
    "image": "https://cdn.myanimelist.net/images/anime/1032/137893l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "Red Liberation",
        "artist": "fripSide",
        "usage": "",
        "q": "ひきこまり吸血姫の悶々 OP Red Liberation fripSide",
        "yt": {
          "id": "DPOy0Ntne3g",
          "k": "nc",
          "o": 1,
          "ch": "NBCUniversal Anime/Music",
          "fa": {
            "id": "d62GvsOTaio",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "眠れない feat.楠木ともり",
        "artist": "MIMiNARI",
        "usage": "",
        "q": "ひきこまり吸血姫の悶々 ED 眠れない feat.楠木ともり MIMiNARI",
        "yt": {
          "id": "HMn2eOox16s",
          "k": "nc",
          "o": 1,
          "ch": "NBCUniversal Anime/Music",
          "fa": {
            "id": "VzMT8e2zgh0",
            "k": "ot",
            "o": 0
          }
        }
      }
    ],
    "favs": [
      "19323"
    ]
  },
  {
    "id": "otonari",
    "title": "お隣の天使様にいつの間にか駄目人間にされていた件",
    "year": 2023,
    "wiki": "お隣の天使様にいつの間にか駄目人間にされていた件",
    "note": "1〜2期",
    "image": "https://cdn.myanimelist.net/images/anime/1240/133638l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "ギフト",
        "artist": "オーイシマサヨシ",
        "usage": "第1期",
        "q": "お隣の天使様にいつの間にか駄目人間にされていた件 OP ギフト オーイシマサヨシ",
        "yt": {
          "id": "G7v3T5pDj-M",
          "k": "op",
          "o": 1,
          "ch": "TOHO animation チャンネル and Masayoshi Oishi",
          "fa": {
            "id": "_QiVgICckPk",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "OP",
        "name": "君は恋人",
        "artist": "オーイシマサヨシ",
        "usage": "第2期",
        "q": "お隣の天使様にいつの間にか駄目人間にされていた件 OP 君は恋人 オーイシマサヨシ",
        "yt": {
          "id": "SNISFSVUuL0",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル and Masayoshi Oishi",
          "fa": {
            "id": "mG0qU4B6YtI",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "小さな恋のうた",
        "artist": "椎名真昼（石見舞菜香）",
        "usage": "第1期",
        "q": "お隣の天使様にいつの間にか駄目人間にされていた件 ED 小さな恋のうた 椎名真昼",
        "yt": {
          "id": "xrwOuCvkSrs",
          "k": "op",
          "o": 1,
          "ch": "TOHO animation チャンネル"
        }
      },
      {
        "kind": "ED",
        "name": "愛唄",
        "artist": "椎名真昼（石見舞菜香）",
        "usage": "第1期第7話",
        "q": "お隣の天使様にいつの間にか駄目人間にされていた件 ED 愛唄 椎名真昼",
        "yt": {
          "id": "o84W3uu0EbI",
          "k": "mv",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "SGd9dllIbyY",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "君に届け",
        "artist": "椎名真昼（石見舞菜香）",
        "usage": "第1期第12話",
        "q": "お隣の天使様にいつの間にか駄目人間にされていた件 ED 君に届け 椎名真昼",
        "yt": {
          "id": "xdcGceVvuYY",
          "k": "mv",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "3a3iAC2nuYo",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "うれしい!たのしい!大好き!",
        "artist": "椎名真昼（石見舞菜香）",
        "usage": "第2期",
        "q": "お隣の天使様にいつの間にか駄目人間にされていた件 ED うれしい!たのしい!大好き! 椎名真昼",
        "yt": {
          "id": "sZRWkXpekDE",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "nuB6ggYhC1w",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "夏祭り",
        "artist": "椎名真昼（石見舞菜香）",
        "usage": "第2期第5話",
        "q": "お隣の天使様にいつの間にか駄目人間にされていた件 ED 夏祭り 椎名真昼",
        "yt": {
          "id": "pOfUSptOHmk",
          "k": "mv",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "AZn4DjPVkwE",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "ヘビーローテーション",
        "artist": "椎名真昼（石見舞菜香）・白河千歳（白石晴香）、コーラス：藤宮周（坂泰斗）・赤澤樹（八代拓）・門脇優太（小野賢章）による第2期第9話のエンディングテーマ。作詞は秋元康、作曲は山崎燿、編曲は山田航平。",
        "usage": "",
        "q": "お隣の天使様にいつの間にか駄目人間にされていた件 ED ヘビーローテーション 椎名真昼・白河千歳",
        "yt": {
          "id": "BjBIYXkOXQA",
          "k": "au",
          "o": 1,
          "ch": "Mahiru Shiina（CV.Manaka Iwami） - Topic"
        }
      },
      {
        "kind": "ED",
        "name": "明日への扉",
        "artist": "椎名真昼（石見舞菜香）",
        "usage": "第2期第12話",
        "q": "お隣の天使様にいつの間にか駄目人間にされていた件 ED 明日への扉 椎名真昼",
        "yt": {
          "id": "8PKGEp-Yq_Y",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "sl9digrMdY0",
            "k": "ot",
            "o": 0
          }
        }
      }
    ],
    "favs": [
      "14205",
      "22824"
    ]
  },
  {
    "id": "pokemon23",
    "title": "ポケットモンスター（2023）",
    "year": 2023,
    "wiki": "ポケットモンスター (2023年のアニメ)",
    "note": "新シリーズ",
    "image": "https://img2.animatetimes.com/2022/12/f341a68df00a26244c14f9390974dbeb69801a56b40a50_16437181_25cc98912c3972e2c38722cbc6a78cda737f0354.jpg",
    "imageCredit": "animatetimes.com",
    "tracks": [
      {
        "kind": "OP",
        "name": "ドキメキダイアリー",
        "artist": "asmi feat. Chinozo",
        "usage": "「リコとロイの旅立ち」編",
        "q": "ポケットモンスター（2023） OP ドキメキダイアリー asmi",
        "yt": {
          "id": "UtN-Wjuqu8U",
          "k": "au",
          "o": 1,
          "ch": "asmi Official Channel"
        }
      },
      {
        "kind": "OP",
        "name": "ハロ",
        "artist": "yama × ぼっちぼろまる",
        "usage": "「テラパゴスのかがやき」編",
        "q": "ポケットモンスター（2023） OP ハロ yama",
        "yt": {
          "id": "o2PwpMc9Bks",
          "k": "au",
          "o": 1,
          "ch": "yama"
        }
      },
      {
        "kind": "OP",
        "name": "Will",
        "artist": "IVE",
        "usage": "「テラスタルデビュー」編",
        "q": "ポケットモンスター（2023） OP Will IVE",
        "yt": {
          "id": "IMQ58tsFjf0",
          "k": "au",
          "o": 1,
          "ch": "IVE"
        }
      },
      {
        "kind": "OP",
        "name": "Only One Story",
        "artist": "ZEROBASEONE",
        "usage": "「レックウザ ライジング」編",
        "q": "ポケットモンスター（2023） OP Only One Story ZEROBASEONE",
        "yt": {
          "id": "pR92uGTGb0g",
          "k": "mv",
          "o": 1,
          "ch": "JXS_BP Official"
        }
      },
      {
        "kind": "OP",
        "name": "GET BACK",
        "artist": "ゆず",
        "usage": "「メガボルテージ」編",
        "q": "ポケットモンスター（2023） OP GET BACK ゆず",
        "yt": {
          "id": "-vclKjpof9Q",
          "k": "mv",
          "o": 1,
          "ch": "yuzuofficial"
        }
      },
      {
        "kind": "OP",
        "name": "アイオライト",
        "artist": "Eve",
        "usage": "「ライジングアゲイン」編",
        "q": "ポケットモンスター（2023） OP アイオライト Eve",
        "yt": {
          "id": "l96CCKCktOU",
          "k": "mv",
          "o": 1,
          "ch": "Eve"
        }
      },
      {
        "kind": "OP",
        "name": "セカイツナガレ",
        "artist": "リコ（鈴木みのり）、ロイ（寺崎裕香）",
        "usage": "「ワンダーボヤージュ」編",
        "q": "ポケットモンスター（2023） OP セカイツナガレ リコ",
        "yt": {
          "id": "GeOp4mK6dG8",
          "k": "mv",
          "o": 1,
          "ch": "HoneyWorks OFFICIAL and ポケモン公式YouTubeチャンネル"
        }
      },
      {
        "kind": "ED",
        "name": "RVR〜ライジングボルテッカーズラップ〜",
        "artist": "リコ（鈴木みのり）、ロイ（寺崎裕香）",
        "usage": "「リコとロイの旅立ち」編・「テラパゴスのかがやき」編",
        "q": "ポケットモンスター（2023） ED RVR〜ライジングボルテッカーズラップ〜 リコ",
        "yt": {
          "id": "oqfZr98LY2E",
          "k": "mv",
          "o": 1,
          "ch": "ポケモン公式YouTubeチャンネル"
        }
      },
      {
        "kind": "ED",
        "name": "Let me battle",
        "artist": "9Lana",
        "usage": "「テラスタルデビュー」編",
        "q": "ポケットモンスター（2023） ED Let me battle 9Lana",
        "yt": {
          "id": "whTcBozYrOo",
          "k": "mv",
          "o": 1,
          "ch": "9Lana"
        }
      },
      {
        "kind": "ED",
        "name": "ピッカーン!",
        "artist": "Giga & TeddyLoid meets 松田里奈 & 森田ひかる（櫻坂46）",
        "usage": "「レックウザ ライジング」編",
        "q": "ポケットモンスター（2023） ED ピッカーン! Giga",
        "yt": {
          "id": "mmg24yw9VQE",
          "k": "au",
          "o": 1,
          "ch": "Giga"
        }
      },
      {
        "kind": "ED",
        "name": "Ready Go",
        "artist": "ME:I",
        "usage": "「メガボルテージ」編",
        "q": "ポケットモンスター（2023） ED Ready Go ME:I",
        "yt": {
          "id": "VfWvzhxg2rc",
          "k": "mv",
          "o": 1,
          "ch": "ME:I"
        }
      },
      {
        "kind": "ED",
        "name": "尤",
        "artist": "ゆず",
        "usage": "「エピソード：メガシンカ」編",
        "note": "出典では「編主題歌」と記載",
        "q": "ポケットモンスター（2023） ED 尤 ゆず"
      },
      {
        "kind": "ED",
        "name": "ねてもさめても",
        "artist": "ポルカドットスティングレイ",
        "usage": "「ライジングアゲイン」編",
        "q": "ポケットモンスター（2023） ED ねてもさめても ポルカドットスティングレイ",
        "yt": {
          "id": "PVyKHNdV8SU",
          "k": "mv",
          "o": 1,
          "ch": "POLKADOT STINGRAY and ポケモン公式YouTubeチャンネル"
        }
      },
      {
        "kind": "ED",
        "name": "キュートなキューたい",
        "artist": "CUTIE STREET",
        "usage": "「ワンダーボヤージュ」編",
        "q": "ポケットモンスター（2023） ED キュートなキューたい CUTIE STREET",
        "yt": {
          "id": "hlM4oELwVR8",
          "k": "au",
          "o": 1,
          "ch": "CUTIE STREET"
        }
      }
    ],
    "favs": [
      "19097"
    ]
  },
  {
    "id": "shangri",
    "title": "シャングリラ・フロンティア",
    "year": 2023,
    "wiki": "シャングリラ・フロンティア〜クソゲーハンター、神ゲーに挑まんとす〜",
    "note": "1〜2期",
    "image": "https://img2.animatetimes.com/2022/07/8d289377f77ed36d5d8694bddce3bbe26563f736ee8154_57926491_a262cb2760ff6db0357a53d3b426bb1c7b572c10.jpeg",
    "imageCredit": "animatetimes.com",
    "tracks": [
      {
        "kind": "OP",
        "name": "BROKEN GAMES",
        "artist": "FZMZ",
        "usage": "1st season 第1クール",
        "q": "シャングリラ・フロンティア OP BROKEN GAMES FZMZ",
        "yt": {
          "id": "4hUx_N8QIYA",
          "k": "nc",
          "o": 1,
          "ch": "TVアニメ「シャングリラ・フロンティア」公式",
          "fa": {
            "id": "X_YHXdCcmVc",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "Danger Danger",
        "artist": "FZMZ feat. icy",
        "usage": "1st season 第2クール",
        "q": "シャングリラ・フロンティア OP Danger Danger FZMZ",
        "yt": {
          "id": "VlcjW90l6c4",
          "k": "nc",
          "o": 1,
          "ch": "TVアニメ「シャングリラ・フロンティア」公式",
          "fa": {
            "id": "e5NIiPEQRUw",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "QUEEN",
        "artist": "LiSA",
        "usage": "2nd season 第1クール",
        "q": "シャングリラ・フロンティア OP QUEEN LiSA",
        "yt": {
          "id": "pFRamQ0gruQ",
          "k": "nc",
          "o": 1,
          "ch": "TVアニメ「シャングリラ・フロンティア」公式",
          "fa": {
            "id": "cEvhPxb5vw0",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "Frontiers",
        "artist": "Awich",
        "usage": "2nd season 第2クール",
        "q": "シャングリラ・フロンティア OP Frontiers Awich",
        "yt": {
          "id": "lXVlZvB6FEg",
          "k": "nc",
          "o": 1,
          "ch": "TVアニメ「シャングリラ・フロンティア」公式",
          "fa": {
            "id": "S_WkKna5DXc",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "エース",
        "artist": "CHiCO",
        "usage": "1st season 第1クール",
        "q": "シャングリラ・フロンティア ED エース CHiCO",
        "yt": {
          "id": "rcgR7JbVTWg",
          "k": "nc",
          "o": 1,
          "ch": "TVアニメ「シャングリラ・フロンティア」公式",
          "fa": {
            "id": "ttYwDXR1gao",
            "k": "au",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "ガジュマル 〜Heaven in the Rain〜",
        "artist": "ReoNa",
        "usage": "1st season 第2クール",
        "q": "シャングリラ・フロンティア ED ガジュマル 〜Heaven in the Rain〜 ReoNa",
        "yt": {
          "id": "V_J-KChrwT0",
          "k": "nc",
          "o": 1,
          "ch": "TVアニメ「シャングリラ・フロンティア」公式",
          "fa": {
            "id": "rl7xMXlD-Ac",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "闇夜のダンサー -Dancer in the Dark Night",
        "artist": "音羽-otoha-",
        "usage": "2nd season 第1クール",
        "q": "シャングリラ・フロンティア ED 闇夜のダンサー -Dancer in the Dark Night 音羽-otoha-"
      },
      {
        "kind": "ED",
        "name": "realitYhurts.",
        "artist": "CVLTE",
        "usage": "2nd season 第2クール",
        "q": "シャングリラ・フロンティア ED realitYhurts. CVLTE",
        "yt": {
          "id": "Rn77dK9X7ZY",
          "k": "nc",
          "o": 1,
          "ch": "TVアニメ「シャングリラ・フロンティア」公式",
          "fa": {
            "id": "VhYud9rZLOw",
            "k": "mv",
            "o": 1
          }
        }
      }
    ],
    "favs": [
      "16199",
      "23827"
    ]
  },
  {
    "id": "tenten",
    "title": "転生王女と天才令嬢の魔法革命",
    "year": 2023,
    "wiki": "転生王女と天才令嬢の魔法革命",
    "image": "https://cdn.myanimelist.net/images/anime/1053/129004l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "アルカンシェル",
        "artist": "花たん",
        "usage": "",
        "q": "転生王女と天才令嬢の魔法革命 OP アルカンシェル 花たん",
        "yt": {
          "id": "f5Rml_Jol8o",
          "k": "nc",
          "o": 1,
          "ch": "KADOKAWAanime",
          "fa": {
            "id": "WqzBLcufkxw",
            "k": "au",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "Only for you",
        "artist": "アニスフィア・ウィン・パレッティア（千本木彩花）、ユフィリア・マゼンタ（石見舞菜香）",
        "usage": "",
        "q": "転生王女と天才令嬢の魔法革命 ED Only for you アニスフィア・ウィン・パレッティア",
        "yt": {
          "id": "y1hHJ0A6k6M",
          "k": "nc",
          "o": 1,
          "ch": "KADOKAWAanime",
          "fa": {
            "id": "nwFClY_H58c",
            "k": "au",
            "o": 1
          }
        }
      }
    ],
    "favs": [
      "16663"
    ]
  },
  {
    "id": "aonohako",
    "title": "アオのハコ",
    "year": 2024,
    "wiki": "アオのハコ",
    "note": "1期",
    "image": "https://cdn.myanimelist.net/images/anime/1341/145349l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "Same Blue",
        "artist": "Official髭男dism",
        "usage": "Season1・第1クール",
        "q": "アオのハコ OP Same Blue Official髭男dism",
        "yt": {
          "id": "d0jg9hNHqn8",
          "k": "nc",
          "o": 1,
          "ch": "TMSアニメ公式チャンネル",
          "fa": {
            "id": "A7cp6OVa0Qc",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "然らば",
        "artist": "マカロニえんぴつ",
        "usage": "Season1・第2クール",
        "q": "アオのハコ OP 然らば マカロニえんぴつ",
        "yt": {
          "id": "jj7DnKGG148",
          "k": "nc",
          "o": 1,
          "ch": "TMSアニメ公式チャンネル",
          "fa": {
            "id": "s2wApOpofXQ",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "あなたの花の色",
        "artist": "aiko",
        "usage": "Season2",
        "q": "アオのハコ OP あなたの花の色 aiko",
        "yt": {
          "id": "rEGbiEmDEn8",
          "k": "ot",
          "o": 0,
          "ch": "OCEAN BEACH TREE"
        }
      },
      {
        "kind": "ED",
        "name": "ティーンエイジブルー",
        "artist": "Eve",
        "usage": "Season1・第1クール",
        "q": "アオのハコ ED ティーンエイジブルー Eve",
        "yt": {
          "id": "2k8zlyquTOs",
          "k": "nc",
          "o": 1,
          "ch": "TMSアニメ公式チャンネル",
          "fa": {
            "id": "eYqSJhpNIYY",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "コントラスト",
        "artist": "TOMOO",
        "usage": "Season1・第2クール",
        "q": "アオのハコ ED コントラスト TOMOO",
        "yt": {
          "id": "pAjs2GWEZvI",
          "k": "nc",
          "o": 1,
          "ch": "TMSアニメ公式チャンネル",
          "fa": {
            "id": "oDLHkQI4GEQ",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "blue in",
        "artist": "エルスウェア紀行",
        "usage": "Season2",
        "q": "アオのハコ ED blue in エルスウェア紀行"
      }
    ],
    "favs": [
      "23082"
    ]
  },
  {
    "id": "dainana",
    "title": "転生したら第七王子だったので、気ままに魔術を極めます",
    "year": 2024,
    "wiki": "転生したら第七王子だったので、気ままに魔術を極めます",
    "note": "1〜2期",
    "image": "https://img2.animatetimes.com/2022/11/7e4c41b7913b83a75935b7444fd3893e65c026601ef0c0_06722986_77e2f2e37f05d8ebf9097587583b87dc21bc9758.jpg",
    "imageCredit": "animatetimes.com",
    "tracks": [
      {
        "kind": "OP",
        "name": "キュンリアス",
        "artist": "樋口楓",
        "usage": "第1期",
        "q": "転生したら第七王子だったので、気ままに魔術を極めます OP キュンリアス 樋口楓",
        "yt": {
          "id": "Rj0H9Ce1-nI",
          "k": "nc",
          "o": 1,
          "ch": "isekai channel @バンダイナムコフィルムワークス",
          "fa": {
            "id": "wKrb1q5hWWI",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "OP",
        "name": "CALLING†",
        "artist": "樋口楓",
        "usage": "第2期",
        "q": "転生したら第七王子だったので、気ままに魔術を極めます OP CALLING† 樋口楓",
        "yt": {
          "id": "WZ-xST_J04g",
          "k": "nc",
          "o": 1,
          "ch": "isekai channel @バンダイナムコフィルムワークス and Bandai Namco Filmworks Channel",
          "fa": {
            "id": "gPBwiuijMQg",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "ハッピーの秘訣",
        "artist": "熊田茜音",
        "usage": "第1期",
        "q": "転生したら第七王子だったので、気ままに魔術を極めます ED ハッピーの秘訣 熊田茜音",
        "yt": {
          "id": "NWgfNomFXgk",
          "k": "nc",
          "o": 1,
          "ch": "isekai channel @バンダイナムコフィルムワークス",
          "fa": {
            "id": "DiDDWexFjmg",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "Meteor",
        "artist": "岬なこ",
        "usage": "第2期",
        "q": "転生したら第七王子だったので、気ままに魔術を極めます ED Meteor 岬なこ",
        "yt": {
          "id": "LV0EaKjqMAo",
          "k": "nc",
          "o": 1,
          "ch": "isekai channel @バンダイナムコフィルムワークス",
          "fa": {
            "id": "ZQTbnRejazA",
            "k": "mv",
            "o": 1
          }
        }
      }
    ],
    "favs": [
      "18329",
      "24211"
    ]
  },
  {
    "id": "fairytail100",
    "title": "FAIRY TAIL 100年クエスト",
    "year": 2024,
    "wiki": "FAIRY TAIL",
    "image": "https://img2.animatetimes.com/2021/09/53d537a25a5b79d2874869f8622d9627670dd102db9c14_02171090_cdb8b2121feed9aa34e5fdbcf884e90df4d77123-e1728958739635.jpg",
    "imageCredit": "animatetimes.com",
    "tracks": [
      {
        "kind": "OP",
        "name": "Story",
        "artist": "Da-iCE",
        "usage": "第1クール",
        "q": "FAIRY TAIL 100年クエスト OP Story Da-iCE",
        "yt": {
          "id": "NhGC9GDzmxQ",
          "k": "nc",
          "o": 1,
          "ch": "TVアニメ FAIRY TAIL 100年クエスト 公式",
          "fa": {
            "id": "FsUYmOyiDCs",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "Endless Happy-Ending",
        "artist": "THE RAMPAGE from EXILE TRIBE",
        "usage": "第2クール",
        "q": "FAIRY TAIL 100年クエスト OP Endless Happy-Ending THE RAMPAGE from EXILE TRIBE",
        "yt": {
          "id": "ZeIneHTb1l8",
          "k": "nc",
          "o": 1,
          "ch": "TVアニメ FAIRY TAIL 100年クエスト 公式",
          "fa": {
            "id": "8iLoUobwuG0",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "友よ ここでサヨナラだ",
        "artist": "僕が見たかった青空",
        "usage": "第1クール",
        "q": "FAIRY TAIL 100年クエスト ED 友よ ここでサヨナラだ 僕が見たかった青空",
        "yt": {
          "id": "plFrzmWj5co",
          "k": "nc",
          "o": 1,
          "ch": "TVアニメ FAIRY TAIL 100年クエスト 公式",
          "fa": {
            "id": "GWvnFpIr5MM",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "ties",
        "artist": "野田愛実",
        "usage": "第2クール",
        "q": "FAIRY TAIL 100年クエスト ED ties 野田愛実",
        "yt": {
          "id": "-Tw0CVQh4F4",
          "k": "nc",
          "o": 1,
          "ch": "TVアニメ FAIRY TAIL 100年クエスト 公式"
        }
      }
    ],
    "favs": [
      "13374"
    ]
  },
  {
    "id": "isyura",
    "title": "異修羅",
    "year": 2024,
    "wiki": "異修羅",
    "note": "1〜2期",
    "image": "https://img2.animatetimes.com/2023/02/97b8d224f070331b230ec750c9586a90656d5696269462_48504331_27567f414ac390812b7aa2fbe2a8caea29c567a5.jpg",
    "imageCredit": "animatetimes.com",
    "tracks": [
      {
        "kind": "OP",
        "name": "修羅に堕として",
        "artist": "sajou no hana",
        "usage": "第1期",
        "q": "異修羅 OP 修羅に堕として sajou no hana",
        "yt": {
          "id": "IcQZSrHtzMs",
          "k": "nc",
          "o": 1,
          "ch": "KADOKAWAanime",
          "fa": {
            "id": "JMRWhm9Wjzk",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "True Peak",
        "artist": "前島麻由",
        "usage": "第2期",
        "q": "異修羅 OP True Peak 前島麻由",
        "yt": {
          "id": "oVfo_p4xYwk",
          "k": "nc",
          "o": 1,
          "ch": "KADOKAWAanime",
          "fa": {
            "id": "cY2S8_xgJTs",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "白花",
        "artist": "鈴木このみ",
        "usage": "第1期",
        "q": "異修羅 ED 白花 鈴木このみ",
        "yt": {
          "id": "0bXv1ECSwBs",
          "k": "nc",
          "o": 1,
          "ch": "KADOKAWAanime",
          "fa": {
            "id": "73phl3KWygc",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "THE IOLITE",
        "artist": "sajou no hana",
        "usage": "第2期",
        "q": "異修羅 ED THE IOLITE sajou no hana",
        "yt": {
          "id": "dySwoaGL8JQ",
          "k": "nc",
          "o": 1,
          "ch": "KADOKAWAanime",
          "fa": {
            "id": "nG39PRginuo",
            "k": "mv",
            "o": 1
          }
        }
      }
    ],
    "favs": [
      "19734",
      "23788"
    ]
  },
  {
    "id": "mayonaka",
    "title": "真夜中ぱんチ",
    "year": 2024,
    "wiki": "真夜中ぱんチ",
    "image": "https://cdn.myanimelist.net/images/anime/1700/143395l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "ギミギミ",
        "artist": "りぶ（ファイルーズあい）、苺子（伊藤ゆいな）、譜風（羊宮妃那）、十景（上田瞳）、ゆき（茅野愛衣）",
        "usage": "",
        "q": "真夜中ぱんチ OP ギミギミ りぶ",
        "yt": {
          "id": "Ayc7sfRrQRg",
          "k": "nc",
          "o": 1,
          "ch": "KADOKAWAanime",
          "fa": {
            "id": "2atWQpPbwts",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "編集点",
        "artist": "真咲（長谷川育美）",
        "usage": "",
        "q": "真夜中ぱんチ ED 編集点 真咲"
      },
      {
        "kind": "ED",
        "name": "君へ",
        "artist": "譜風（羊宮妃那）",
        "usage": "第4話",
        "q": "真夜中ぱんチ ED 君へ 譜風",
        "yt": {
          "id": "I6wp76bJKv8",
          "k": "mv",
          "o": 1,
          "ch": "KADOKAWAanime",
          "fa": {
            "id": "FEM1CwT_0iA",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "ナイトダイバー",
        "artist": "りぶ（ファイルーズあい）、苺子（伊藤ゆいな）、譜風（羊宮妃那）、十景（上田瞳）",
        "usage": "第8話",
        "q": "真夜中ぱんチ ED ナイトダイバー りぶ",
        "yt": {
          "id": "EbFjnm9jE8E",
          "k": "mv",
          "o": 1,
          "ch": "KADOKAWAanime",
          "fa": {
            "id": "ZNQvQoeuVTE",
            "k": "ot",
            "o": 0
          }
        }
      }
    ],
    "favs": [
      "23518"
    ]
  },
  {
    "id": "nigewaka",
    "title": "逃げ上手の若君",
    "year": 2024,
    "wiki": "逃げ上手の若君",
    "note": "1〜2期",
    "image": "https://cdn.myanimelist.net/images/anime/1386/140401l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "プランA",
        "artist": "DISH//",
        "usage": "第一期",
        "q": "逃げ上手の若君 OP プランA DISH",
        "yt": {
          "id": "XmpgKUcm2nI",
          "k": "nc",
          "o": 1,
          "ch": "アニプレックス チャンネル"
        }
      },
      {
        "kind": "OP",
        "name": "鬼事",
        "artist": "中島健人",
        "usage": "第二期",
        "q": "逃げ上手の若君 OP 鬼事 中島健人",
        "yt": {
          "id": "Dgj69Vqr120",
          "k": "nc",
          "o": 1,
          "ch": "アニプレックス チャンネル and Kento Nakajima Official YouTube Channel",
          "fa": {
            "id": "wp_4AThBtCA",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "鎌倉STYLE",
        "artist": "ぼっちぼろまる",
        "usage": "第一期",
        "q": "逃げ上手の若君 ED 鎌倉STYLE ぼっちぼろまる",
        "yt": {
          "id": "VNl4J9b_xhE",
          "k": "nc",
          "o": 1,
          "ch": "アニプレックス チャンネル",
          "fa": {
            "id": "ikzBo9_Qdnk",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "ロマンティックがほしいなら feat. 小坂菜緒, 正源司陽子, 藤嶌果歩（日向坂46）",
        "artist": "ぼっちぼろまる",
        "usage": "第二期",
        "q": "逃げ上手の若君 ED ロマンティックがほしいなら feat. 小坂菜緒, 正源司陽子, 藤嶌果歩（日向坂46） ぼっちぼろまる",
        "yt": {
          "id": "2xkn83S68sM",
          "k": "nc",
          "o": 1,
          "ch": "アニプレックス チャンネル and 2 more",
          "fa": {
            "id": "tZFZ_iar-P8",
            "k": "ot",
            "o": 0
          }
        }
      }
    ],
    "favs": [
      "11641",
      "25034"
    ]
  },
  {
    "id": "shoshimin",
    "title": "小市民シリーズ",
    "year": 2024,
    "wiki": "〈小市民〉シリーズ",
    "note": "1〜2期",
    "image": "https://cdn.myanimelist.net/images/anime/1164/143459l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "スイートメモリー",
        "artist": "Eve",
        "usage": "第1期",
        "q": "小市民シリーズ OP スイートメモリー Eve",
        "yt": {
          "id": "kk6meRqr-o4",
          "k": "nc",
          "o": 1,
          "ch": "tv asahi  animation YouTubeチャンネル",
          "fa": {
            "id": "CaW5teT0oLc",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "火星人",
        "artist": "ヨルシカ",
        "usage": "第2期",
        "q": "小市民シリーズ OP 火星人 ヨルシカ",
        "yt": {
          "id": "Tvusi5PSzo0",
          "k": "op",
          "o": 1,
          "ch": "tv asahi  animation YouTubeチャンネル",
          "fa": {
            "id": "OLRbIc8KZ_8",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "意解けない",
        "artist": "ammo",
        "usage": "第1期",
        "q": "小市民シリーズ ED 意解けない ammo",
        "yt": {
          "id": "UxoqXIo82Xo",
          "k": "nc",
          "o": 1,
          "ch": "tv asahi  animation YouTubeチャンネル",
          "fa": {
            "id": "v0rm5rrgJYg",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "SugaRiddle",
        "artist": "やなぎなぎ",
        "usage": "第2期",
        "q": "小市民シリーズ ED SugaRiddle やなぎなぎ",
        "yt": {
          "id": "P4jTLEnAUEs",
          "k": "op",
          "o": 1,
          "ch": "tv asahi  animation YouTubeチャンネル",
          "fa": {
            "id": "vtawKP7hqgk",
            "k": "mv",
            "o": 1
          }
        }
      }
    ],
    "favs": [
      "23391",
      "24876"
    ]
  },
  {
    "id": "shumatsutrain",
    "title": "終末トレインどこへいく？",
    "year": 2024,
    "wiki": "終末トレインどこへいく?",
    "image": "https://cdn.myanimelist.net/images/anime/1224/137451l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "GA-TAN GO-TON",
        "artist": "中島怜",
        "usage": "",
        "q": "終末トレインどこへいく？ OP GA-TAN GO-TON 中島怜",
        "yt": {
          "id": "q_adhS3FPJw",
          "k": "nc",
          "o": 1,
          "ch": "KADOKAWAanime",
          "fa": {
            "id": "yk5P6_8fp50",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "ユリイカ",
        "artist": "ロクデナシ",
        "usage": "",
        "q": "終末トレインどこへいく？ ED ユリイカ ロクデナシ",
        "yt": {
          "id": "CJcHQm-zA4Q",
          "k": "nc",
          "o": 1,
          "ch": "KADOKAWAanime",
          "fa": {
            "id": "3Idwfyezsk8",
            "k": "ot",
            "o": 0
          }
        }
      }
    ],
    "favs": [
      "18000"
    ]
  },
  {
    "id": "shy",
    "title": "SHY",
    "year": 2024,
    "wiki": "SHY (漫画)",
    "note": "東京奪還編",
    "image": "https://cdn.myanimelist.net/images/anime/1518/143558l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "Shiny Girl",
        "artist": "MindaRyn",
        "usage": "第1期",
        "q": "SHY OP Shiny Girl MindaRyn",
        "yt": {
          "id": "2e_Zo9Jaw2M",
          "k": "op",
          "o": 1,
          "ch": "バンダイナムコフィルムワークス チャンネル",
          "fa": {
            "id": "WlDUBJqceec",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "WILLSHINE",
        "artist": "PassCode",
        "usage": "第2期",
        "q": "SHY OP WILLSHINE PassCode",
        "yt": {
          "id": "9TBVQm3d4jI",
          "k": "nc",
          "o": 1,
          "ch": "バンダイナムコフィルムワークス チャンネル",
          "fa": {
            "id": "pV-WthRjU0s",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "シリタイキモチ",
        "artist": "シャイ / 紅葉山テル（下地紫野）、小石川惟子（東山奈央）",
        "usage": "第1期",
        "q": "SHY ED シリタイキモチ シャイ",
        "yt": {
          "id": "rQlIoYygceg",
          "k": "nc",
          "o": 1,
          "ch": "バンダイナムコフィルムワークス チャンネル"
        }
      },
      {
        "kind": "ED",
        "name": "君だけがヒーロー",
        "artist": "小石川惟子（東山奈央）",
        "usage": "第4話",
        "q": "SHY ED 君だけがヒーロー 小石川惟子",
        "yt": {
          "id": "ECIfoAsa5ZI",
          "k": "nc",
          "o": 1,
          "ch": "バンダイナムコフィルムワークス チャンネル"
        }
      },
      {
        "kind": "ED",
        "name": "私の青い空〜As I am〜",
        "artist": "シャイ / 紅葉山テル（下地紫野）",
        "usage": "第5話",
        "q": "SHY ED 私の青い空〜As I am〜 シャイ",
        "yt": {
          "id": "XSIJFaHerLU",
          "k": "nc",
          "o": 1,
          "ch": "バンダイナムコフィルムワークス チャンネル"
        }
      },
      {
        "kind": "ED",
        "name": "そばにいるよ",
        "artist": "シャイ / 紅葉山テル（下地紫野）、小石川惟子（東山奈央）",
        "usage": "第2期",
        "q": "SHY ED そばにいるよ シャイ",
        "yt": {
          "id": "CE1JcYx6u-0",
          "k": "nc",
          "o": 1,
          "ch": "バンダイナムコフィルムワークス チャンネル"
        }
      },
      {
        "kind": "ED",
        "name": "月篝",
        "artist": "天王寺曖（小岩井ことり）",
        "usage": "第15話",
        "q": "SHY ED 月篝 天王寺曖",
        "yt": {
          "id": "iHttutjKDFw",
          "k": "nc",
          "o": 1,
          "ch": "バンダイナムコフィルムワークス チャンネル",
          "fa": {
            "id": "ONLDSwLv5V4",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "ボクらのLove&Peace",
        "artist": "ミェンロン / リー＝ミンミン（村瀬歩）",
        "usage": "第17話",
        "q": "SHY ED ボクらのLove&Peace ミェンロン",
        "yt": {
          "id": "onSWW8aueds",
          "k": "ot",
          "o": 0,
          "ch": "Mianlong/Lee Mingming (CV: Ayumu Murase) - Topic"
        }
      },
      {
        "kind": "ED",
        "name": "ウリプカ",
        "artist": "スピリッツ / ペペシャ・アンドレアノワ（能登麻美子）",
        "usage": "第18話",
        "q": "SHY ED ウリプカ スピリッツ",
        "yt": {
          "id": "Fzdo3WzStiU",
          "k": "nc",
          "o": 1,
          "ch": "バンダイナムコフィルムワークス チャンネル",
          "fa": {
            "id": "DBOdR974n3Q",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "Angel In Black",
        "artist": "レディ・ブラック / ピルツ・デュナン（鈴代紗弓）",
        "usage": "第19話",
        "q": "SHY ED Angel In Black レディ・ブラック",
        "yt": {
          "id": "ergHOBcGL30",
          "k": "nc",
          "o": 1,
          "ch": "バンダイナムコフィルムワークス チャンネル",
          "fa": {
            "id": "8LLvemUg7qE",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "One Day A Boy",
        "artist": "スターダスト / ディヴィー＝W＝ジョン（三木眞一郎）",
        "usage": "第20話",
        "q": "SHY ED One Day A Boy スターダスト",
        "yt": {
          "id": "U9_pogzAgD0",
          "k": "nc",
          "o": 1,
          "ch": "バンダイナムコフィルムワークス チャンネル",
          "fa": {
            "id": "KDl5B2HRcis",
            "k": "ot",
            "o": 0
          }
        }
      }
    ],
    "favs": [
      "23256"
    ]
  },
  {
    "id": "tower",
    "title": "神之塔 -Tower of God-",
    "year": 2024,
    "wiki": "神之塔",
    "note": "王子の帰還",
    "image": "https://cdn.myanimelist.net/images/anime/1218/143537l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "TOP -Japanese ver.-",
        "artist": "Stray Kids",
        "usage": "第1期",
        "q": "神之塔 -Tower of God- OP TOP -Japanese ver.- Stray Kids"
      },
      {
        "kind": "OP",
        "name": "RISE UP",
        "artist": "NiziU",
        "usage": "第2期『王子の帰還』",
        "q": "神之塔 -Tower of God- OP RISE UP NiziU",
        "yt": {
          "id": "yhazsP8E7lk",
          "k": "mv",
          "o": 1,
          "ch": "JXS_BP Official"
        }
      },
      {
        "kind": "OP",
        "name": "NIGHT",
        "artist": "Stray Kids",
        "usage": "第2期『工房戦』",
        "q": "神之塔 -Tower of God- OP NIGHT Stray Kids",
        "yt": {
          "id": "mJBtlJ5SquU",
          "k": "nc",
          "o": 1,
          "ch": "バンダイナムコフィルムワークス チャンネル",
          "fa": {
            "id": "-Gu33fnz-VE",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "SLUMP -Japanese ver.-",
        "artist": "Stray Kids",
        "usage": "第1期",
        "q": "神之塔 -Tower of God- ED SLUMP -Japanese ver.- Stray Kids"
      },
      {
        "kind": "ED",
        "name": "BELIEVE",
        "artist": "NiziU",
        "usage": "第2期『王子の帰還』",
        "q": "神之塔 -Tower of God- ED BELIEVE NiziU",
        "yt": {
          "id": "hPDJMPU-6R4",
          "k": "mv",
          "o": 1,
          "ch": "JXS_BP Official"
        }
      },
      {
        "kind": "ED",
        "name": "Falling Up",
        "artist": "Stray Kids",
        "usage": "第2期『工房戦』",
        "q": "神之塔 -Tower of God- ED Falling Up Stray Kids",
        "yt": {
          "id": "ek-X_UKCVVc",
          "k": "mv",
          "o": 1,
          "ch": "JXS_BP Official"
        }
      }
    ],
    "favs": [
      "16625"
    ]
  },
  {
    "id": "wistoria",
    "title": "杖と剣のウィストリア",
    "year": 2024,
    "wiki": "杖と剣のウィストリア",
    "note": "1〜2期",
    "image": "https://cdn.myanimelist.net/images/anime/1281/144104l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "Fire and Fear",
        "artist": "PENGUIN RESEARCH",
        "usage": "Season1",
        "q": "杖と剣のウィストリア OP Fire and Fear PENGUIN RESEARCH",
        "yt": {
          "id": "VJLJ15yIQlI",
          "k": "nc",
          "o": 1,
          "ch": "isekai channel @バンダイナムコフィルムワークス",
          "fa": {
            "id": "-ly2itFTLfQ",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "BELIEVERS",
        "artist": "ASH DA HERO",
        "usage": "Season2",
        "q": "杖と剣のウィストリア OP BELIEVERS ASH DA HERO",
        "yt": {
          "id": "I5u5gNcKVfk",
          "k": "nc",
          "o": 1,
          "ch": "isekai channel @バンダイナムコフィルムワークス and 2 more",
          "fa": {
            "id": "tAbbeN47Ttk",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "フローズン",
        "artist": "TRUE",
        "usage": "Season1",
        "q": "杖と剣のウィストリア ED フローズン TRUE",
        "yt": {
          "id": "luke9AYCN7g",
          "k": "nc",
          "o": 1,
          "ch": "isekai channel @バンダイナムコフィルムワークス",
          "fa": {
            "id": "YJJSdQldxtM",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "リーチライト",
        "artist": "シユイ",
        "usage": "Season2",
        "q": "杖と剣のウィストリア ED リーチライト シユイ",
        "yt": {
          "id": "Pn0c9QIiqbo",
          "k": "nc",
          "o": 1,
          "ch": "isekai channel @バンダイナムコフィルムワークス and 3 more",
          "fa": {
            "id": "DUkeznWp5Nk",
            "k": "mv",
            "o": 1
          }
        }
      }
    ],
    "favs": [
      "23571",
      "24972"
    ]
  },
  {
    "id": "alma",
    "title": "アルマちゃんは家族になりたい",
    "year": 2025,
    "wiki": "少女型兵器は家族になりたい",
    "image": "https://cdn.myanimelist.net/images/anime/1631/153644l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "ドラマチック・オーバーレイ",
        "artist": "ZAQ",
        "usage": "",
        "q": "アルマちゃんは家族になりたい OP ドラマチック・オーバーレイ ZAQ",
        "yt": {
          "id": "9MqsPMdLVHM",
          "k": "nc",
          "o": 1,
          "ch": "KADOKAWAanime",
          "fa": {
            "id": "zTgY4i5z90w",
            "k": "au",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "ありふれてたい",
        "artist": "花譜",
        "usage": "",
        "q": "アルマちゃんは家族になりたい ED ありふれてたい 花譜",
        "yt": {
          "id": "-MHfE_rpJWA",
          "k": "nc",
          "o": 1,
          "ch": "KADOKAWAanime",
          "fa": {
            "id": "CetPaiJsw4Q",
            "k": "ot",
            "o": 0
          }
        }
      }
    ],
    "favs": [
      "25474"
    ]
  },
  {
    "id": "hojo",
    "title": "味方が弱すぎて補助魔法に徹していた宮廷魔法師、追放されて最強を目指す",
    "year": 2025,
    "wiki": "味方が弱すぎて補助魔法に徹していた宮廷魔法師、追放されて最強を目指す",
    "image": "https://cdn.myanimelist.net/images/anime/1732/153360l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "Quest",
        "artist": "秋山黄色",
        "usage": "",
        "q": "味方が弱すぎて補助魔法に徹していた宮廷魔法師、追放されて最強を目指す OP Quest 秋山黄色",
        "yt": {
          "id": "PE-__2gG4kE",
          "k": "au",
          "o": 1,
          "ch": "秋山黄色"
        }
      },
      {
        "kind": "ED",
        "name": "欠片",
        "artist": "aruma",
        "usage": "",
        "q": "味方が弱すぎて補助魔法に徹していた宮廷魔法師、追放されて最強を目指す ED 欠片 aruma",
        "yt": {
          "id": "muzUEsLY5A4",
          "k": "mv",
          "o": 1,
          "ch": "aruma"
        }
      }
    ],
    "favs": [
      "25709",
      "20979"
    ]
  },
  {
    "id": "lycoris",
    "title": "リコリス・リコイル",
    "year": 2025,
    "wiki": "リコリス・リコイル",
    "note": "Friends are thieves of time.",
    "image": "https://img2.animatetimes.com/2023/02/62fddf89911d55bc57422757ecc32d62678dbc2f090a57_77775507_1eaa786fee4990d4e8aaa5932baf56efa69c1049.jpg",
    "imageCredit": "animatetimes.com",
    "tracks": [
      {
        "kind": "OP",
        "name": "ALIVE",
        "artist": "ClariS",
        "usage": "",
        "note": "第13話では挿入歌として「ALIVE LycoReco Version」が使用された",
        "q": "リコリス・リコイル OP ALIVE ClariS",
        "yt": {
          "id": "VxR_BYPG7v4",
          "k": "nc",
          "o": 1,
          "ch": "アニプレックス チャンネル",
          "fa": {
            "id": "Vi-1402wYtI",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "花の塔",
        "artist": "さユり",
        "usage": "",
        "q": "リコリス・リコイル ED 花の塔 さユり",
        "yt": {
          "id": "WIKKyrGGaDk",
          "k": "nc",
          "o": 1,
          "ch": "アニプレックス チャンネル",
          "fa": {
            "id": "H2r25lVcIHw",
            "k": "au",
            "o": 1
          }
        }
      }
    ],
    "favs": [
      "19735",
      "19780"
    ]
  },
  {
    "id": "majo",
    "title": "ある魔女が死ぬまで",
    "year": 2025,
    "wiki": "ある魔女が死ぬまで",
    "image": "https://cdn.myanimelist.net/images/anime/1620/148221l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "Drops",
        "artist": "坂本真綾",
        "usage": "",
        "q": "ある魔女が死ぬまで OP Drops 坂本真綾",
        "yt": {
          "id": "PEP7a_FoIi4",
          "k": "nc",
          "o": 1,
          "ch": "KADOKAWAanime",
          "fa": {
            "id": "6nda3Rlay28",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "花咲く道で",
        "artist": "手嶌葵",
        "usage": "",
        "q": "ある魔女が死ぬまで ED 花咲く道で 手嶌葵",
        "yt": {
          "id": "DFmuDZTgwIk",
          "k": "mv",
          "o": 1,
          "ch": "Aoi Teshima"
        }
      }
    ],
    "favs": [
      "24291"
    ]
  },
  {
    "id": "ruri",
    "title": "瑠璃の宝石",
    "year": 2025,
    "wiki": "瑠璃の宝石",
    "image": "https://cdn.myanimelist.net/images/anime/1431/148742l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "光のすみか",
        "artist": "安田レイ",
        "usage": "",
        "q": "瑠璃の宝石 OP 光のすみか 安田レイ",
        "yt": {
          "id": "YDOARwO2SNk",
          "k": "nc",
          "o": 1,
          "ch": "アニプレックス チャンネル",
          "fa": {
            "id": "Y5K9M07odz0",
            "k": "au",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "サファイア",
        "artist": "Hana Hope",
        "usage": "",
        "q": "瑠璃の宝石 ED サファイア Hana Hope",
        "yt": {
          "id": "CtA_47WtzzY",
          "k": "nc",
          "o": 1,
          "ch": "アニプレックス チャンネル",
          "fa": {
            "id": "4LNdfWi0268",
            "k": "au",
            "o": 1
          }
        }
      }
    ],
    "favs": [
      "24836"
    ]
  },
  {
    "id": "sakamoto",
    "title": "SAKAMOTO DAYS",
    "year": 2025,
    "wiki": "SAKAMOTO DAYS",
    "note": "第1期",
    "image": "https://cdn.myanimelist.net/images/anime/1026/146459l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "走れSAKAMOTO",
        "artist": "Vaundy",
        "usage": "第1期・第1クール",
        "q": "SAKAMOTO DAYS OP 走れSAKAMOTO Vaundy",
        "yt": {
          "id": "zkOYWw0u8as",
          "k": "nc",
          "o": 1,
          "ch": "TMSアニメ公式チャンネル",
          "fa": {
            "id": "9SfUmSi358Q",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "OP",
        "name": "Method",
        "artist": "Kroi",
        "usage": "第1期・第2クール",
        "q": "SAKAMOTO DAYS OP Method Kroi",
        "yt": {
          "id": "YNYkTXknYjE",
          "k": "op",
          "o": 1,
          "ch": "TMSアニメ公式チャンネル",
          "fa": {
            "id": "oioOfrRKhrI",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "普通",
        "artist": "Conton Candy",
        "usage": "第1期・第1クール",
        "q": "SAKAMOTO DAYS ED 普通 Conton Candy",
        "yt": {
          "id": "8SpMHADYTD4",
          "k": "nc",
          "o": 1,
          "ch": "TMSアニメ公式チャンネル",
          "fa": {
            "id": "WeQBxwO5BoY",
            "k": "au",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "Somebody help us",
        "artist": "Vaundy",
        "usage": "第7話",
        "q": "SAKAMOTO DAYS ED Somebody help us Vaundy",
        "yt": {
          "id": "f9oTHp0GIQE",
          "k": "au",
          "o": 1,
          "ch": "Vaundy"
        }
      },
      {
        "kind": "ED",
        "name": "ダンデライオン",
        "artist": "go!go!vanillas",
        "usage": "第1期・第2クール",
        "q": "SAKAMOTO DAYS ED ダンデライオン go!go!vanillas",
        "yt": {
          "id": "3u8JxBtxt5k",
          "k": "nc",
          "o": 1,
          "ch": "TMSアニメ公式チャンネル"
        }
      }
    ],
    "favs": [
      "24107",
      "26834"
    ]
  },
  {
    "id": "shumatsutouring",
    "title": "終末ツーリング",
    "year": 2025,
    "wiki": "終末ツーリング",
    "image": "https://cdn.myanimelist.net/images/anime/1681/151599l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "Touring",
        "artist": "Conton Candy",
        "usage": "",
        "q": "終末ツーリング OP Touring Conton Candy",
        "yt": {
          "id": "ihRZ-XcFBxA",
          "k": "nc",
          "o": 1,
          "ch": "アニプレックス チャンネル",
          "fa": {
            "id": "CEH2toGL3_0",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "グライド",
        "artist": "Myuk",
        "usage": "",
        "q": "終末ツーリング ED グライド Myuk",
        "yt": {
          "id": "7S6QlyfnSb4",
          "k": "nc",
          "o": 1,
          "ch": "アニプレックス チャンネル",
          "fa": {
            "id": "GmnIza7Vtiw",
            "k": "au",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "ハルジオン",
        "artist": "五阿弥ルナ",
        "usage": "第9話",
        "q": "終末ツーリング ED ハルジオン 五阿弥ルナ",
        "yt": {
          "id": "Ut_n7BpLzgs",
          "k": "ot",
          "o": 0,
          "ch": "Kenichiro Suehiro - Topic"
        }
      }
    ],
    "favs": [
      "25582"
    ]
  },
  {
    "id": "silentwitch",
    "title": "サイレント・ウィッチ 沈黙の魔女の隠しごと",
    "year": 2025,
    "wiki": "サイレント・ウィッチ",
    "image": "https://cdn.myanimelist.net/images/anime/1669/149732l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "Feel",
        "artist": "羊文学",
        "usage": "",
        "q": "サイレント・ウィッチ 沈黙の魔女の隠しごと OP Feel 羊文学",
        "yt": {
          "id": "8dky0A7Gx1c",
          "k": "nc",
          "o": 1,
          "ch": "アニプレックス チャンネル",
          "fa": {
            "id": "88XrxFwo4vM",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "mild days",
        "artist": "羊文学",
        "usage": "",
        "q": "サイレント・ウィッチ 沈黙の魔女の隠しごと ED mild days 羊文学",
        "yt": {
          "id": "ZssInPdN6o8",
          "k": "nc",
          "o": 1,
          "ch": "アニプレックス チャンネル"
        }
      }
    ],
    "favs": [
      "24600"
    ]
  },
  {
    "id": "towa",
    "title": "永久のユウグレ",
    "year": 2025,
    "wiki": "永久のユウグレ",
    "image": "https://cdn.myanimelist.net/images/anime/1294/151734l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "プラットフォーム",
        "artist": "Uru",
        "usage": "",
        "note": "第1話と第12話ではエンディングで使用された",
        "q": "永久のユウグレ OP プラットフォーム Uru",
        "yt": {
          "id": "FCJ7klVnaq4",
          "k": "nc",
          "o": 1,
          "ch": "MBS animation 公式チャンネル",
          "fa": {
            "id": "peg-lEQA9AY",
            "k": "au",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "Two Of Us",
        "artist": "Hana Hope",
        "usage": "",
        "q": "永久のユウグレ ED Two Of Us Hana Hope",
        "yt": {
          "id": "gSzBX2LXNjw",
          "k": "nc",
          "o": 1,
          "ch": "MBS animation 公式チャンネル",
          "fa": {
            "id": "lY5iBCVugIU",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "ED",
        "name": "星紡ぎ",
        "artist": "Hana Hope",
        "usage": "第0話・第9話",
        "q": "永久のユウグレ ED 星紡ぎ Hana Hope",
        "yt": {
          "id": "3TxMhdfABdM",
          "k": "au",
          "o": 1,
          "ch": "Hana Hope"
        }
      }
    ],
    "favs": [
      "26302"
    ]
  },
  {
    "id": "kamiina",
    "title": "上伊那ぼたん、酔へる姿は百合の花",
    "year": 2026,
    "wiki": "上伊那ぼたん、酔へる姿は百合の花",
    "image": "https://img2.animatetimes.com/2025/03/868668a5aba773572d9473707c8f35e367d23b7e3cd436_67373524_b71c17a7de5b708094419dbee7a679a147a19ee4-e1741831048724.jpg",
    "imageCredit": "animatetimes.com",
    "tracks": [
      {
        "kind": "OP",
        "name": "芽吹くとき",
        "artist": "yonige",
        "usage": "",
        "q": "上伊那ぼたん、酔へる姿は百合の花 OP 芽吹くとき yonige",
        "yt": {
          "id": "pXesuTZKpOk",
          "k": "au",
          "o": 1,
          "ch": "yonige_official"
        }
      },
      {
        "kind": "ED",
        "name": "感情グラス",
        "artist": "",
        "usage": "",
        "note": "出典に歌手の記載なし",
        "q": "上伊那ぼたん、酔へる姿は百合の花 ED 感情グラス",
        "yt": {
          "id": "eYLeC2wNa-E",
          "k": "ot",
          "o": 0,
          "ch": "Botan Kamiina(CV.Sayumi Suzushiro) - Topic"
        }
      },
      {
        "kind": "ED",
        "name": "茜色の夕日",
        "artist": "フジファブリック",
        "usage": "第10話",
        "q": "上伊那ぼたん、酔へる姿は百合の花 ED 茜色の夕日 フジファブリック",
        "yt": {
          "id": "HtJgUnZHrRg",
          "k": "au",
          "o": 1,
          "ch": "フジファブリック Official Channel"
        }
      }
    ],
    "favs": [
      "25671"
    ]
  },
  {
    "id": "kizoku",
    "title": "貴族転生 ～恵まれた生まれから最強の力を得る～",
    "year": 2026,
    "wiki": "貴族転生 〜恵まれた生まれから最強の力を得る〜",
    "image": "https://cdn.myanimelist.net/images/anime/1629/153722l.jpg",
    "imageCredit": "myanimelist.net",
    "tracks": [
      {
        "kind": "OP",
        "name": "Break off",
        "artist": "SUPER★DRAGON",
        "usage": "",
        "q": "貴族転生 ～恵まれた生まれから最強の力を得る～ OP Break off SUPER★DRAGON",
        "yt": {
          "id": "iw0oJHZiP30",
          "k": "nc",
          "o": 1,
          "ch": "ぽにきゃん-Anime PONY CANYON",
          "fa": {
            "id": "szTRoNp3cAg",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "ED",
        "name": "You'll Be In My Heart〜そばに〜",
        "artist": "アリーチェ（橘杏咲）",
        "usage": "",
        "q": "貴族転生 ～恵まれた生まれから最強の力を得る～ ED You'll Be In My Heart〜そばに〜 アリーチェ",
        "yt": {
          "id": "ohFsMWho5z4",
          "k": "nc",
          "o": 1,
          "ch": "ぽにきゃん-Anime PONY CANYON",
          "fa": {
            "id": "NeHfpe6NHZw",
            "k": "mv",
            "o": 1
          }
        }
      }
    ],
    "favs": [
      "25422"
    ]
  },
  {
    "id": "medley250",
    "title": "アニソンメドレー250曲（作品不明の曲）",
    "note": "YouTube「【250曲】何度でも繰り返し聴ける！名曲アニソンメドレー」（あつき）の曲。作品・歌手は投稿者のセットリストに無いため不明",
    "image": "https://i.ytimg.com/vi/4YJ6bUYr2Ys/maxresdefault.jpg",
    "imageCredit": "YouTube（あつき）",
    "favs": [],
    "tracks": [
      {
        "kind": "",
        "name": "eternal reality",
        "artist": "",
        "usage": "メドレー #1（0:17〜）",
        "q": "eternal reality アニメ 主題歌",
        "yt": {
          "id": "MVIR22baorw",
          "k": "ot",
          "o": 1,
          "ch": "fripSide OfficiAL YouTube Channnel"
        },
        "note": "動画の照合が弱い（別の音源の可能性）"
      },
      {
        "kind": "",
        "name": "sister's noise",
        "artist": "",
        "usage": "メドレー #2（1:05〜）",
        "q": "sister's noise アニメ 主題歌",
        "yt": {
          "id": "rCtc-9EVE_c",
          "k": "op",
          "o": 1,
          "ch": "NBCUniversal Anime/Music",
          "fa": {
            "id": "e6g3mkqhFzo",
            "k": "mv",
            "o": 1
          },
          "alt": {
            "id": "KXTVKGsPXz8",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "final phase",
        "artist": "",
        "usage": "メドレー #3（1:33〜）",
        "q": "final phase アニメ 主題歌",
        "yt": {
          "id": "R33q3f7Xpiw",
          "k": "op",
          "o": 1,
          "ch": "とあるプロジェクト公式toaru.project",
          "fa": {
            "id": "gQ91NaeO2To",
            "k": "mv",
            "o": 1
          },
          "alt": {
            "id": "gQ91NaeO2To",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "LEVEL5-judgelight-",
        "artist": "",
        "usage": "メドレー #4（2:00〜）",
        "q": "LEVEL5-judgelight- アニメ 主題歌",
        "yt": {
          "id": "mK2R8vQzojM",
          "k": "op",
          "o": 1,
          "ch": "NBCUniversal Anime/Music",
          "fa": {
            "id": "W4YbIxlfw8k",
            "k": "mv",
            "o": 1
          },
          "alt": {
            "id": "a4deMm8soGA",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "flower of bravery",
        "artist": "",
        "usage": "メドレー #5（2:28〜）",
        "q": "flower of bravery アニメ 主題歌",
        "yt": {
          "id": "Zgoz5erWZow",
          "k": "ot",
          "o": 0,
          "ch": "木風 _ 采彡",
          "fa": {
            "id": "Ij6EeV9SUAo",
            "k": "ot",
            "o": 0
          },
          "alt": {
            "id": "q3U_5E6eyYQ",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "black bullet",
        "artist": "",
        "usage": "メドレー #6（2:58〜）",
        "q": "black bullet アニメ 主題歌",
        "yt": {
          "id": "5rKArAGGMwM",
          "k": "op",
          "o": 1,
          "ch": "NBCUniversal Anime/Music",
          "fa": {
            "id": "1dJICzRip8Y",
            "k": "mv",
            "o": 1
          },
          "alt": {
            "id": "3YXOL7seziA",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "killing bites",
        "artist": "",
        "usage": "メドレー #7（3:31〜）",
        "q": "killing bites アニメ 主題歌",
        "yt": {
          "id": "oEjBn9sBZKg",
          "k": "mv",
          "o": 1,
          "ch": "fripSide OfficiAL YouTube Channnel",
          "alt": {
            "id": "gY5YHQ0fcfQ",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "Two souls toward the truth",
        "artist": "",
        "usage": "メドレー #8（3:55〜）",
        "q": "Two souls toward the truth アニメ 主題歌",
        "yt": {
          "id": "BJ2VFg6L1hA",
          "k": "mv",
          "o": 1,
          "ch": "fripSide OfficiAL YouTube Channnel",
          "alt": {
            "id": "ouXUP0VwW4c",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "STRAIGHT JET",
        "artist": "",
        "usage": "メドレー #9（4:20〜）",
        "q": "STRAIGHT JET アニメ 主題歌",
        "yt": {
          "id": "2oK45vJ3Jq4",
          "k": "mv",
          "o": 1,
          "ch": "Minami Kuribayashi - Topic"
        }
      },
      {
        "kind": "",
        "name": "リトルチャームファング",
        "artist": "",
        "usage": "メドレー #10（4:49〜）",
        "q": "リトルチャームファング アニメ 主題歌",
        "yt": {
          "id": "2eV7PPZ_Rdw",
          "k": "ot",
          "o": 0,
          "ch": "。擬",
          "fa": {
            "id": "t6bgON-fwI0",
            "k": "ot",
            "o": 0
          }
        },
        "note": "動画の照合が弱い（別の音源の可能性）"
      },
      {
        "kind": "",
        "name": "DreamRiser",
        "artist": "",
        "usage": "メドレー #11（5:16〜）",
        "q": "DreamRiser アニメ 主題歌",
        "yt": {
          "id": "5cey4Lyy2sw",
          "k": "mv",
          "o": 1,
          "ch": "ChouCho Official Channel",
          "alt": {
            "id": "GsgPApB3_fE",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "Grand symphony",
        "artist": "",
        "usage": "メドレー #12（5:45〜）",
        "q": "Grand symphony アニメ 主題歌",
        "yt": {
          "id": "-PIWr5Xyue8",
          "k": "mv",
          "o": 1,
          "ch": "Lantis Channel",
          "alt": {
            "id": "Fi1_XMELpCc",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "DREAM SOLISTER",
        "artist": "",
        "usage": "メドレー #13（6:07〜）",
        "q": "DREAM SOLISTER アニメ 主題歌",
        "yt": {
          "id": "Gf_jJ9dpcVk",
          "k": "mv",
          "o": 1,
          "ch": "Lantis Channel",
          "alt": {
            "id": "teJN1BC1FRE",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "宝箱 TREASURE BOX",
        "artist": "",
        "usage": "メドレー #14（6:36〜）",
        "q": "宝箱 TREASURE BOX アニメ 主題歌",
        "yt": {
          "id": "VrFMv_uzH2Y",
          "k": "nc",
          "o": 1,
          "ch": "株式会社インフィニット",
          "fa": {
            "id": "a4E0y8ABC0c",
            "k": "au",
            "o": 1
          },
          "alt": {
            "id": "a4E0y8ABC0c",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "COLORFUL BOX",
        "artist": "",
        "usage": "メドレー #15（7:01〜）",
        "q": "COLORFUL BOX アニメ 主題歌",
        "yt": {
          "id": "Tv8yJbgnxz0",
          "k": "nc",
          "o": 1,
          "ch": "株式会社インフィニット",
          "fa": {
            "id": "QYB5lMYbzzQ",
            "k": "ot",
            "o": 0
          },
          "alt": {
            "id": "l1z3PzO2hZU",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "Check my soul",
        "artist": "",
        "usage": "メドレー #16（7:28〜）",
        "q": "Check my soul アニメ 主題歌",
        "yt": {
          "id": "fXT6tiZmqm8",
          "k": "mv",
          "o": 1,
          "ch": "azusa - Topic",
          "alt": {
            "id": "bxQGocf4Dcc",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "キミの花",
        "artist": "",
        "usage": "メドレー #17（7:55〜）",
        "q": "キミの花 アニメ 主題歌",
        "yt": {
          "id": "UByj6Web-ws",
          "k": "mv",
          "o": 1,
          "ch": "奥華子 Official YouTube Channel",
          "alt": {
            "id": "HTeE72XrkZE",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "君のままで",
        "artist": "",
        "usage": "メドレー #18（8:20〜）",
        "q": "君のままで アニメ 主題歌",
        "yt": {
          "id": "VeV-9HaTlIA",
          "k": "mv",
          "o": 1,
          "ch": "azusa - Topic"
        }
      },
      {
        "kind": "",
        "name": "届かない恋 Live at Campus Fes(TV anime ver.)",
        "artist": "",
        "usage": "メドレー #19（8:50〜）",
        "q": "届かない恋 Live at Campus Fes(TV anime ver.) アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "ツナグキズナ",
        "artist": "",
        "usage": "メドレー #20（9:23〜）",
        "q": "ツナグキズナ アニメ 主題歌",
        "yt": {
          "id": "NAGTD9S4XN4",
          "k": "mv",
          "o": 1,
          "ch": "Release - Topic",
          "alt": {
            "id": "GNFPfdE4Tbg",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "colorless wind",
        "artist": "",
        "usage": "メドレー #21（9:51〜）",
        "q": "colorless wind アニメ 主題歌",
        "yt": {
          "id": "fLiwf4ZFgkI",
          "k": "mv",
          "o": 1,
          "ch": "結城アイラ Official Channel",
          "alt": {
            "id": "D1MJfEKjEaA",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "Higher's High",
        "artist": "",
        "usage": "メドレー #22（10:20〜）",
        "q": "Higher's High アニメ 主題歌",
        "yt": {
          "id": "Rp-y_R1SbX8",
          "k": "mv",
          "o": 1,
          "ch": "ナナヲアカリ OFFICIAL",
          "alt": {
            "id": "CN4QnE_14Y8",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "コレカラ",
        "artist": "",
        "usage": "メドレー #23（10:54〜）",
        "q": "コレカラ アニメ 主題歌",
        "yt": {
          "id": "ajV8lTk8onI",
          "k": "mv",
          "o": 1,
          "ch": "日本コロムビア 公式YouTubeチャンネル"
        }
      },
      {
        "kind": "",
        "name": "せーのっ！",
        "artist": "",
        "usage": "メドレー #24（11:19〜）",
        "q": "せーのっ！ アニメ 主題歌",
        "yt": {
          "id": "8yX1a1PD11s",
          "k": "mv",
          "o": 1,
          "ch": "野々原 ゆずこ(CV.大久保瑠美) - Topic",
          "alt": {
            "id": "iLEfnRUgY_c",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "スリピス",
        "artist": "",
        "usage": "メドレー #25（11:36〜）",
        "q": "スリピス アニメ 主題歌",
        "yt": {
          "id": "lyB3eWB5Txk",
          "k": "mv",
          "o": 1,
          "ch": "KADOKAWAanime",
          "alt": {
            "id": "E03DoMoyHRg",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "Super Driver",
        "artist": "",
        "usage": "メドレー #26（11:59〜）",
        "q": "Super Driver アニメ 主題歌",
        "yt": {
          "id": "BV-dtWAnp-M",
          "k": "mv",
          "o": 1,
          "ch": "Aya Hirano - Topic",
          "alt": {
            "id": "Ihhn06aSKxA",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "Naked Drive",
        "artist": "",
        "usage": "メドレー #27（12:27〜）",
        "q": "Naked Drive アニメ 主題歌",
        "yt": {
          "id": "yzPhDK1iDpQ",
          "k": "ot",
          "o": 0,
          "ch": "TORIC MASTER",
          "alt": {
            "id": "tyxqNrxDMGw",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "VOICE",
        "artist": "",
        "usage": "メドレー #28（12:52〜）",
        "q": "VOICE アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "優しさの理由",
        "artist": "",
        "usage": "メドレー #29（13:28〜）",
        "q": "優しさの理由 アニメ 主題歌",
        "yt": {
          "id": "0hJiMN4Csjw",
          "k": "mv",
          "o": 1,
          "ch": "Lantis Global Channel"
        }
      },
      {
        "kind": "",
        "name": "サウンドスケープ",
        "artist": "",
        "usage": "メドレー #30（13:55〜）",
        "q": "サウンドスケープ アニメ 主題歌",
        "yt": {
          "id": "URLFJdofCqY",
          "k": "mv",
          "o": 1,
          "ch": "TRUE Lantis Official Channel",
          "alt": {
            "id": "yEZy6cgmuSM",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "ドラマチックマーケットライド",
        "artist": "",
        "usage": "メドレー #31（14:19〜）",
        "q": "ドラマチックマーケットライド アニメ 主題歌",
        "yt": {
          "id": "h8sjg6M0iGg",
          "k": "mv",
          "o": 1,
          "ch": "北白川たまこ(cv:洲崎 綾) - Topic",
          "fa": {
            "id": "NS_QhuUUuTY",
            "k": "ot",
            "o": 0
          },
          "alt": {
            "id": "NS_QhuUUuTY",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "Cagayake!GIRLS",
        "artist": "",
        "usage": "メドレー #32（14:42〜）",
        "q": "Cagayake!GIRLS アニメ 主題歌",
        "yt": {
          "id": "ua02dloykJ4",
          "k": "mv",
          "o": 1,
          "ch": "Release - Topic",
          "alt": {
            "id": "Gw8cCYdykOg",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "Don't say\"lazy\"",
        "artist": "",
        "usage": "メドレー #33（15:06〜）",
        "q": "Don't say\"lazy\" アニメ 主題歌",
        "yt": {
          "id": "5CSNv9MNEC4",
          "k": "mv",
          "o": 1,
          "ch": "Release - Topic"
        }
      },
      {
        "kind": "",
        "name": "境界の彼方",
        "artist": "",
        "usage": "メドレー #34（15:30〜）",
        "q": "境界の彼方 アニメ 主題歌",
        "yt": {
          "id": "C3XQi3kIgYw",
          "k": "ot",
          "o": 1,
          "ch": "Meiris - Topic"
        },
        "note": "動画の照合が弱い（別の音源の可能性）"
      },
      {
        "kind": "",
        "name": "南風",
        "artist": "",
        "usage": "メドレー #35（15:53〜）",
        "q": "南風 アニメ 主題歌",
        "yt": {
          "id": "f8Nv-5wIlbg",
          "k": "mv",
          "o": 1,
          "ch": "Mikuni Shimokawa - Topic"
        }
      },
      {
        "kind": "",
        "name": "FLYING FAFNIR",
        "artist": "",
        "usage": "メドレー #36（16:23〜）",
        "q": "FLYING FAFNIR アニメ 主題歌",
        "yt": {
          "id": "1e-nYtDMhpA",
          "k": "mv",
          "o": 1,
          "ch": "Trustrick - Topic",
          "alt": {
            "id": "5Iggu9eiA5k",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "はっぴぃ にゅう にゃあ",
        "artist": "",
        "usage": "メドレー #37（16:45〜）",
        "q": "はっぴぃ にゅう にゃあ アニメ 主題歌",
        "yt": {
          "id": "4LgPyEhzP0w",
          "k": "ot",
          "o": 0,
          "ch": "AZUNYAN2gonyan",
          "alt": {
            "id": "z7VAaK7py0o",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "にゃんだふる!",
        "artist": "",
        "usage": "メドレー #38（17:00〜）",
        "q": "にゃんだふる! アニメ 主題歌",
        "yt": {
          "id": "oLKJhtEZsvE",
          "k": "mv",
          "o": 1,
          "ch": "Yui Sakakibara - Topic"
        }
      },
      {
        "kind": "",
        "name": "侵略ノススメ☆",
        "artist": "",
        "usage": "メドレー #39（17:25〜）",
        "q": "侵略ノススメ☆ アニメ 主題歌",
        "yt": {
          "id": "x4AekOcIJ3E",
          "k": "ot",
          "o": 0,
          "ch": "alanracious",
          "alt": {
            "id": "KW1D94S2CP8",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "HIGH POWERED",
        "artist": "",
        "usage": "メドレー #40（17:55〜）",
        "q": "HIGH POWERED アニメ 主題歌",
        "yt": {
          "id": "iK6av4QT9lE",
          "k": "mv",
          "o": 1,
          "ch": "Sphere - Topic",
          "alt": {
            "id": "5f5jNobHPAs",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "星屑のインターリュード",
        "artist": "",
        "usage": "メドレー #41（18:30〜）",
        "q": "星屑のインターリュード アニメ 主題歌",
        "yt": {
          "id": "fu2LrpHQATY",
          "k": "nc",
          "o": 1,
          "ch": "株式会社インフィニット",
          "fa": {
            "id": "S_ucMS7sxx8",
            "k": "mv",
            "o": 1
          },
          "alt": {
            "id": "z5CtuHeTA6s",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "コメット・ルシファー ～The Seed and the Sower～",
        "artist": "",
        "usage": "メドレー #42（18:49〜）",
        "q": "コメット・ルシファー ～The Seed and the Sower～ アニメ 主題歌",
        "yt": {
          "id": "_cYkpih_nDE",
          "k": "mv",
          "o": 1,
          "ch": "バンダイナムコフィルムワークス チャンネル",
          "fa": {
            "id": "dBv-jcNv7IA",
            "k": "mv",
            "o": 1
          },
          "alt": {
            "id": "dBv-jcNv7IA",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "いつかの、いくつかのきみとのせかい",
        "artist": "",
        "usage": "メドレー #43（19:12〜）",
        "q": "いつかの、いくつかのきみとのせかい アニメ 主題歌",
        "yt": {
          "id": "MqBsLtindR0",
          "k": "mv",
          "o": 1,
          "ch": "fhána Official Channel",
          "alt": {
            "id": "8n5iT3gbFjY",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "tiny lamp",
        "artist": "",
        "usage": "メドレー #44（19:42〜）",
        "q": "tiny lamp アニメ 主題歌",
        "yt": {
          "id": "B38sOOPEBKA",
          "k": "mv",
          "o": 1,
          "ch": "fhána Official Channel",
          "alt": {
            "id": "AMmHvsFrLEk",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "My secret",
        "artist": "",
        "usage": "メドレー #45（20:11〜）",
        "q": "My secret アニメ 主題歌",
        "yt": {
          "id": "eQ6WkAAr19s",
          "k": "op",
          "o": 1,
          "ch": "NBCUniversal Anime/Music",
          "fa": {
            "id": "NV5Esvj5-6s",
            "k": "mv",
            "o": 1
          },
          "alt": {
            "id": "NV5Esvj5-6s",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "今日に恋色",
        "artist": "",
        "usage": "メドレー #46（20:36〜）",
        "q": "今日に恋色 アニメ 主題歌",
        "yt": {
          "id": "yzoYTAuR29U",
          "k": "mv",
          "o": 1,
          "ch": "FlyingDog",
          "fa": {
            "id": "CpsdxltCgG0",
            "k": "mv",
            "o": 1
          },
          "alt": {
            "id": "CpsdxltCgG0",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "カワルミライ",
        "artist": "",
        "usage": "メドレー #47（21:00〜）",
        "q": "カワルミライ アニメ 主題歌",
        "yt": {
          "id": "d2UtKpZKWMM",
          "k": "mv",
          "o": 1,
          "ch": "ChouCho Official Channel",
          "alt": {
            "id": "Un9UiVL6Dms",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "1000%SPARKING!",
        "artist": "",
        "usage": "メドレー #48（21:32〜）",
        "q": "1000%SPARKING! アニメ 主題歌",
        "yt": {
          "id": "vgA7kahrD4o",
          "k": "mv",
          "o": 1,
          "ch": "「KING AMUSEMENT CREATIVE」公式チャンネル",
          "fa": {
            "id": "1fEUb2WdrUk",
            "k": "ot",
            "o": 0
          },
          "alt": {
            "id": "PU99eFWwqjc",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "お願い！シンデレラ",
        "artist": "",
        "usage": "メドレー #49（21:58〜）",
        "q": "お願い！シンデレラ アニメ 主題歌",
        "yt": {
          "id": "wquiL5qNrH0",
          "k": "mv",
          "o": 1,
          "ch": "Release - Topic",
          "alt": {
            "id": "sfaKw_A9ZSc",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "READY!!&CHANGE!!!SPECIAL EDITION",
        "artist": "",
        "usage": "メドレー #50（22:33〜）",
        "q": "READY!!&CHANGE!!!SPECIAL EDITION アニメ 主題歌",
        "yt": {
          "id": "dE1HUE5tTjk",
          "k": "ot",
          "o": 0,
          "ch": "あべしうわらば"
        }
      },
      {
        "kind": "",
        "name": "Invisible Date",
        "artist": "",
        "usage": "メドレー #51（24:55〜）",
        "q": "Invisible Date アニメ 主題歌",
        "yt": {
          "id": "0K3IPbQzCys",
          "k": "mv",
          "o": 1,
          "ch": "sweet ARMS - Topic"
        }
      },
      {
        "kind": "",
        "name": "Birth",
        "artist": "",
        "usage": "メドレー #52（25:40〜）",
        "q": "Birth アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "Alchemy",
        "artist": "",
        "usage": "メドレー #53（26:07〜）",
        "q": "Alchemy アニメ 主題歌",
        "yt": {
          "id": "jQ7fkobjpDs",
          "k": "mv",
          "o": 1,
          "ch": "Marina - Topic",
          "alt": {
            "id": "668Zpt1Bq5o",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "Bravely you",
        "artist": "",
        "usage": "メドレー #54（26:30〜）",
        "q": "Bravely you アニメ 主題歌",
        "yt": {
          "id": "oDdysk3bDdw",
          "k": "mv",
          "o": 1,
          "ch": "Lia Official YouTube",
          "alt": {
            "id": "OYWM6tcFxwc",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "360°星のオーケストラ",
        "artist": "",
        "usage": "メドレー #55（26:56〜）",
        "q": "360°星のオーケストラ アニメ 主題歌",
        "yt": {
          "id": "ap6jVHxTzJ4",
          "k": "mv",
          "o": 1,
          "ch": "ZERO-A Official Channel",
          "fa": {
            "id": "1A0TGHIgsD8",
            "k": "ot",
            "o": 0
          },
          "alt": {
            "id": "ip7hBYS57wU",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "Checmate!?",
        "artist": "",
        "usage": "メドレー #56（27:23〜）",
        "q": "Checmate!? アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "ネ！コ！",
        "artist": "",
        "usage": "メドレー #57（27:46〜）",
        "q": "ネ！コ！ アニメ 主題歌",
        "yt": {
          "id": "nDrRMLsAB6I",
          "k": "mv",
          "o": 1,
          "ch": "Harukaze official",
          "fa": {
            "id": "ueSjTcBLMRQ",
            "k": "ot",
            "o": 0
          },
          "alt": {
            "id": "ueSjTcBLMRQ",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "SAKURAスキップ",
        "artist": "",
        "usage": "メドレー #58（28:03〜）",
        "q": "SAKURAスキップ アニメ 主題歌",
        "yt": {
          "id": "eUYPGRjpqhc",
          "k": "mv",
          "o": 1,
          "ch": "fourfolium - Topic",
          "alt": {
            "id": "NRbg54cT-aQ",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "Save you Save me",
        "artist": "",
        "usage": "メドレー #59（28:30〜）",
        "q": "Save you Save me アニメ 主題歌",
        "yt": {
          "id": "Zyj0mwT-hm8",
          "k": "mv",
          "o": 1,
          "ch": "KADOKAWAanime",
          "alt": {
            "id": "0iInOkuTFZI",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "刹那の果実",
        "artist": "",
        "usage": "メドレー #60（28:55〜）",
        "q": "刹那の果実 アニメ 主題歌",
        "yt": {
          "id": "t-BpXrYzoQM",
          "k": "op",
          "o": 1,
          "ch": "NBCUniversal Anime/Music",
          "fa": {
            "id": "0x5pJU8U0tg",
            "k": "mv",
            "o": 1
          },
          "alt": {
            "id": "iflX2Y-wBSk",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "SAVIOR OF SONG",
        "artist": "",
        "usage": "メドレー #61（29:21〜）",
        "q": "SAVIOR OF SONG アニメ 主題歌",
        "yt": {
          "id": "D2uqpqrYmMY",
          "k": "mv",
          "o": 1,
          "ch": "FlyingDog",
          "alt": {
            "id": "Ryjfjhi6cuU",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "star*frost",
        "artist": "",
        "usage": "メドレー #62（29:33〜）",
        "q": "star*frost アニメ 主題歌",
        "yt": {
          "id": "QK_62EgzF7o",
          "k": "mv",
          "o": 1,
          "ch": "KADOKAWAanime",
          "alt": {
            "id": "mna7Ly90YLk",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "創傷イノセンス",
        "artist": "",
        "usage": "メドレー #63（30:01〜）",
        "q": "創傷イノセンス アニメ 主題歌",
        "yt": {
          "id": "9NnzDFc9x2I",
          "k": "mv",
          "o": 1,
          "ch": "ぽにきゃん-Anime PONY CANYON",
          "fa": {
            "id": "SFkLZ0yN3H8",
            "k": "mv",
            "o": 1
          },
          "alt": {
            "id": "wKyIXi48g1c",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "海色",
        "artist": "",
        "usage": "メドレー #64（30:27〜）",
        "q": "海色 アニメ 主題歌",
        "yt": {
          "id": "IZ5UB9abD-c",
          "k": "mv",
          "o": 1,
          "ch": "FlyingDog",
          "alt": {
            "id": "W6zK9jCf5sM",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "graphite/diamond",
        "artist": "",
        "usage": "メドレー #65（30:54〜）",
        "q": "graphite/diamond アニメ 主題歌",
        "yt": {
          "id": "Uxfei0GmZlQ",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "eE6lTM9pvcI",
            "k": "ot",
            "o": 0
          },
          "alt": {
            "id": "jgLbu5vTo0I",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "LIVE for LIFE ～狼たちの夜～",
        "artist": "",
        "usage": "メドレー #66（31:18〜）",
        "q": "LIVE for LIFE ～狼たちの夜～ アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "Hacking to the Gate",
        "artist": "",
        "usage": "メドレー #67（31:39〜）",
        "q": "Hacking to the Gate アニメ 主題歌",
        "yt": {
          "id": "3TADlbgAXHY",
          "k": "mv",
          "o": 1,
          "ch": "Ito Kanako - Topic"
        }
      },
      {
        "kind": "",
        "name": "Amadeus",
        "artist": "",
        "usage": "メドレー #68（31:56〜）",
        "q": "Amadeus アニメ 主題歌",
        "yt": {
          "id": "I012yI2Kzqg",
          "k": "ot",
          "o": 0,
          "ch": "Harlequin",
          "fa": {
            "id": "aWfFrMqQQTY",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "ANGEL",
        "artist": "",
        "usage": "メドレー #69（32:22〜）",
        "q": "ANGEL アニメ 主題歌",
        "yt": {
          "id": "hxfDuJp9R3U",
          "k": "mv",
          "o": 1,
          "ch": "「KING AMUSEMENT CREATIVE」公式チャンネル",
          "alt": {
            "id": "fxpiktN19ho",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "楽園の翼",
        "artist": "",
        "usage": "メドレー #70（32:42〜）",
        "q": "楽園の翼 アニメ 主題歌",
        "yt": {
          "id": "LXht5Pdv1Uk",
          "k": "op",
          "o": 1,
          "ch": "NBCUniversal Anime/Music",
          "fa": {
            "id": "Tu6j2YwPPPg",
            "k": "ot",
            "o": 0
          },
          "alt": {
            "id": "qYRt3ntQnVs",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "Contrail～軌跡～",
        "artist": "",
        "usage": "メドレー #71（33:08〜）",
        "q": "Contrail～軌跡～ アニメ 主題歌",
        "yt": {
          "id": "xUDHfflIK8A",
          "k": "mv",
          "o": 1,
          "ch": "NBCUniversal Anime/Music",
          "fa": {
            "id": "UQhcmQUVgLU",
            "k": "ot",
            "o": 0
          },
          "alt": {
            "id": "uYZzYxaGIzs",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "See visionS",
        "artist": "",
        "usage": "メドレー #72（33:34〜）",
        "q": "See visionS アニメ 主題歌",
        "yt": {
          "id": "hcZQ2B6axV4",
          "k": "op",
          "o": 1,
          "ch": "NBCUniversal Anime/Music",
          "fa": {
            "id": "yU5_cA5PHA8",
            "k": "mv",
            "o": 1
          },
          "alt": {
            "id": "yU5_cA5PHA8",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "No buts!",
        "artist": "",
        "usage": "メドレー #73（34:03〜）",
        "q": "No buts! アニメ 主題歌",
        "yt": {
          "id": "QIU044tsV2Q",
          "k": "op",
          "o": 1,
          "ch": "NBCUniversal Anime/Music",
          "fa": {
            "id": "j0XwN7EuKvY",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "PSI-missing",
        "artist": "",
        "usage": "メドレー #74（34:30〜）",
        "q": "PSI-missing アニメ 主題歌",
        "yt": {
          "id": "JwnGaYtQnjU",
          "k": "op",
          "o": 1,
          "ch": "NBCUniversal Anime/Music",
          "fa": {
            "id": "E3hRBdvM58M",
            "k": "mv",
            "o": 1
          },
          "alt": {
            "id": "E3hRBdvM58M",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "Break a spell",
        "artist": "",
        "usage": "メドレー #75（34:58〜）",
        "q": "Break a spell アニメ 主題歌",
        "yt": {
          "id": "Azp1dry5Tns",
          "k": "op",
          "o": 1,
          "ch": "NBCUniversal Anime/Music",
          "fa": {
            "id": "AnOCYDyeD8w",
            "k": "ot",
            "o": 0
          },
          "alt": {
            "id": "AnOCYDyeD8w",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "JOINT",
        "artist": "",
        "usage": "メドレー #76（35:23〜）",
        "q": "JOINT アニメ 主題歌",
        "yt": {
          "id": "VSOnIahWAs4",
          "k": "op",
          "o": 1,
          "ch": "NBCUniversal Anime/Music",
          "fa": {
            "id": "8EiX4LkUPaU",
            "k": "mv",
            "o": 1
          },
          "alt": {
            "id": "8EiX4LkUPaU",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "FAITH",
        "artist": "",
        "usage": "メドレー #77（35:47〜）",
        "q": "FAITH アニメ 主題歌",
        "yt": {
          "id": "MKBEaATNe48",
          "k": "op",
          "o": 1,
          "ch": "KADOKAWAanime",
          "fa": {
            "id": "A0iJkPbU7yA",
            "k": "mv",
            "o": 1
          },
          "alt": {
            "id": "A0iJkPbU7yA",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "イツカノキオク",
        "artist": "",
        "usage": "メドレー #78（36:11〜）",
        "q": "イツカノキオク アニメ 主題歌",
        "yt": {
          "id": "_C22KZcyZaU",
          "k": "ot",
          "o": 0,
          "ch": "和氣あず未 Music Channel"
        },
        "note": "動画の照合が弱い（別の音源の可能性）"
      },
      {
        "kind": "",
        "name": "あの日タイムマシン",
        "artist": "",
        "usage": "メドレー #79（36:27〜）",
        "q": "あの日タイムマシン アニメ 主題歌",
        "yt": {
          "id": "4uhbx-cf_4I",
          "k": "ot",
          "o": 0,
          "ch": "アニメソングコレクション",
          "alt": {
            "id": "q_z_5dO7eik",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "一斉の声",
        "artist": "",
        "usage": "メドレー #80（36:47〜）",
        "q": "一斉の声 アニメ 主題歌",
        "yt": {
          "id": "XGCurOIuSBU",
          "k": "mv",
          "o": 1,
          "ch": "喜多修平 Official Channel",
          "alt": {
            "id": "aewwbcAW_8g",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "MIRACLE kRUSH",
        "artist": "",
        "usage": "メドレー #81（37:21〜）",
        "q": "MIRACLE kRUSH アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "New SPARKS!",
        "artist": "",
        "usage": "メドレー #82（37:46〜）",
        "q": "New SPARKS! アニメ 主題歌",
        "yt": {
          "id": "B2k5Ce-Bj9g",
          "k": "nc",
          "o": 1,
          "ch": "ぽにきゃん-Anime PONY CANYON",
          "fa": {
            "id": "W4BJbslevOE",
            "k": "mv",
            "o": 1
          },
          "alt": {
            "id": "n3EWlrHY9fc",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "Futuristic Player",
        "artist": "",
        "usage": "メドレー #83（38:10〜）",
        "q": "Futuristic Player アニメ 主題歌",
        "yt": {
          "id": "FG79YzKAxic",
          "k": "nc",
          "o": 1,
          "ch": "ぽにきゃん-Anime PONY CANYON",
          "fa": {
            "id": "BrDq4wk58e8",
            "k": "ot",
            "o": 0
          },
          "alt": {
            "id": "dANRWJmX8fE",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "Treasure",
        "artist": "",
        "usage": "メドレー #84（38:42〜）",
        "q": "Treasure アニメ 主題歌",
        "yt": {
          "id": "Klxz9U5niCc",
          "k": "mv",
          "o": 1,
          "ch": "碧陽学園生徒会 - Topic"
        }
      },
      {
        "kind": "",
        "name": "ミライファンファーレ",
        "artist": "",
        "usage": "メドレー #85（39:13〜）",
        "q": "ミライファンファーレ アニメ 主題歌",
        "yt": {
          "id": "9wf9-FujVOM",
          "k": "ot",
          "o": 0,
          "ch": "akitoshi hayami a",
          "fa": {
            "id": "Q36RKAvXhbg",
            "k": "ot",
            "o": 0
          },
          "alt": {
            "id": "kO_7WdgwJBU",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "君が夢を連れてきた",
        "artist": "",
        "usage": "メドレー #86（39:42〜）",
        "q": "君が夢を連れてきた アニメ 主題歌",
        "yt": {
          "id": "IUrmsHyipho",
          "k": "ot",
          "o": 0,
          "ch": "白翊廷",
          "alt": {
            "id": "E5jvhb_Fctw",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "ハナノイロ",
        "artist": "",
        "usage": "メドレー #87（40:08〜）",
        "q": "ハナノイロ アニメ 主題歌",
        "yt": {
          "id": "B0Po_B_d_Uw",
          "k": "nc",
          "o": 1,
          "ch": "株式会社インフィニット",
          "fa": {
            "id": "XsTZMrAnPIU",
            "k": "ot",
            "o": 0
          },
          "alt": {
            "id": "TQMWfybOdCU",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "面影ワープ",
        "artist": "",
        "usage": "メドレー #88（40:41〜）",
        "q": "面影ワープ アニメ 主題歌",
        "yt": {
          "id": "h63-1MWMbBo",
          "k": "nc",
          "o": 1,
          "ch": "株式会社インフィニット",
          "fa": {
            "id": "UlVWqFi60Bc",
            "k": "mv",
            "o": 1
          },
          "alt": {
            "id": "UlVWqFi60Bc",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "なないろびより",
        "artist": "",
        "usage": "メドレー #89（41:07〜）",
        "q": "なないろびより アニメ 主題歌",
        "yt": {
          "id": "PVxY8Cay--E",
          "k": "mv",
          "o": 1,
          "ch": "nano. RIPE Official Channel",
          "fa": {
            "id": "j6WuUAuD8JU",
            "k": "mv",
            "o": 1
          },
          "alt": {
            "id": "j6WuUAuD8JU",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "エキストラレボリューション",
        "artist": "",
        "usage": "メドレー #90（41:34〜）",
        "q": "エキストラレボリューション アニメ 主題歌",
        "yt": {
          "id": "Gdj7PUhUGWA",
          "k": "mv",
          "o": 1,
          "ch": "ZAQ Official Channel",
          "alt": {
            "id": "GPdxlHPc4BI",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "ZERO!!",
        "artist": "",
        "usage": "メドレー #91（42:08〜）",
        "q": "ZERO!! アニメ 主題歌",
        "yt": {
          "id": "se4VTu6SK4E",
          "k": "mv",
          "o": 1,
          "ch": "Minami Kuribayashi - Topic"
        }
      },
      {
        "kind": "",
        "name": "愛のシュプリーム！",
        "artist": "",
        "usage": "メドレー #92（42:42〜）",
        "q": "愛のシュプリーム！ アニメ 主題歌",
        "yt": {
          "id": "XCs7FacjHQY",
          "k": "mv",
          "o": 1,
          "ch": "fhána Official Channel",
          "alt": {
            "id": "xiCdLC6bWU4",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "とまどい→レシピ",
        "artist": "",
        "usage": "メドレー #93（43:18〜）",
        "q": "とまどい→レシピ アニメ 主題歌",
        "yt": {
          "id": "fQ_m5VLhqNg",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "iIzgqDDYL1g",
            "k": "mv",
            "o": 1
          },
          "alt": {
            "id": "hH5d3riIHN4",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "Baby→Lady LOVE",
        "artist": "",
        "usage": "メドレー #94（43:44〜）",
        "q": "Baby→Lady LOVE アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "W:Wonder tale",
        "artist": "",
        "usage": "メドレー #95（44:08〜）",
        "q": "W:Wonder tale アニメ 主題歌",
        "yt": {
          "id": "mcty1jm1z7I",
          "k": "mv",
          "o": 1,
          "ch": "KING RECORDS",
          "fa": {
            "id": "b6Gu-GHXouk",
            "k": "mv",
            "o": 1
          },
          "alt": {
            "id": "b6Gu-GHXouk",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "すーぱー☆あふぇくしょん",
        "artist": "",
        "usage": "メドレー #96（44:39〜）",
        "q": "すーぱー☆あふぇくしょん アニメ 主題歌",
        "yt": {
          "id": "mj3S8FL7whI",
          "k": "mv",
          "o": 1,
          "ch": "Release - Topic",
          "alt": {
            "id": "4iXenMW9nHA",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "Fantastic future",
        "artist": "",
        "usage": "メドレー #97（45:06〜）",
        "q": "Fantastic future アニメ 主題歌",
        "yt": {
          "id": "JKBQTZyLfyw",
          "k": "mv",
          "o": 1,
          "ch": "Music Anime {Official}",
          "alt": {
            "id": "JZYTuTUBfFk",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "Shiny Happy Days",
        "artist": "",
        "usage": "メドレー #98（45:28〜）",
        "q": "Shiny Happy Days アニメ 主題歌",
        "yt": {
          "id": "RGWNUzkbt7Q",
          "k": "mv",
          "o": 1,
          "ch": "Release - Topic",
          "fa": {
            "id": "5POmdt-P03M",
            "k": "ot",
            "o": 0
          },
          "alt": {
            "id": "5POmdt-P03M",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "Seredipty",
        "artist": "",
        "usage": "メドレー #99（45:53〜）",
        "q": "Seredipty アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "SOUND OF DESTINY",
        "artist": "",
        "usage": "メドレー #100（46:32〜）",
        "q": "SOUND OF DESTINY アニメ 主題歌",
        "yt": {
          "id": "Iv5YEjIMInY",
          "k": "ot",
          "o": 0,
          "ch": "rd5850",
          "fa": {
            "id": "9nSmYbAOqB4",
            "k": "ot",
            "o": 0
          },
          "alt": {
            "id": "ulp3Z0lVz6M",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "プラチナ",
        "artist": "",
        "usage": "メドレー #101（47:16〜）",
        "q": "プラチナ アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "ギミー！レボリューション",
        "artist": "",
        "usage": "メドレー #102（47:59〜）",
        "q": "ギミー！レボリューション アニメ 主題歌",
        "yt": {
          "id": "Q73Hee1b4Ds",
          "k": "mv",
          "o": 1,
          "ch": "内田真礼（UCHIDA MAAYA）Official Channel",
          "alt": {
            "id": "XxgwzIAWT0Q",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "ホシトハナ",
        "artist": "",
        "usage": "メドレー #103（48:26〜）",
        "q": "ホシトハナ アニメ 主題歌",
        "yt": {
          "id": "EjOhpzbY4_4",
          "k": "nc",
          "o": 1,
          "ch": "ぽにきゃん-Anime PONY CANYON",
          "fa": {
            "id": "yA7BzjINVlI",
            "k": "ot",
            "o": 0
          },
          "alt": {
            "id": "yA7BzjINVlI",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "明日の君さえいればいい。",
        "artist": "",
        "usage": "メドレー #104（48:56〜）",
        "q": "明日の君さえいればいい。 アニメ 主題歌",
        "yt": {
          "id": "t0nJRInmr0I",
          "k": "mv",
          "o": 1,
          "ch": "ChouCho Official Channel",
          "alt": {
            "id": "Icpi7-whh3Q",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "BINKAN♡あてんしょん",
        "artist": "",
        "usage": "メドレー #105（49:33〜）",
        "q": "BINKAN♡あてんしょん アニメ 主題歌",
        "yt": {
          "id": "somL1iSk0M4",
          "k": "ot",
          "o": 0,
          "ch": "Yayoi"
        }
      },
      {
        "kind": "",
        "name": "ひだまりデイズ",
        "artist": "",
        "usage": "メドレー #106（50:01〜）",
        "q": "ひだまりデイズ アニメ 主題歌",
        "yt": {
          "id": "9BF4I20Wgzw",
          "k": "mv",
          "o": 1,
          "ch": "妹S(シスターズ)[土間うまる(CV:田中あいみ)/海老名菜々(CV:影山 灯)/本場切絵(CV:白石晴香)/橘・シルフィンフォード(CV... - Topic",
          "alt": {
            "id": "SQvpK1eIlWk",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "Blade of Hope",
        "artist": "",
        "usage": "メドレー #107（50:27〜）",
        "q": "Blade of Hope アニメ 主題歌",
        "yt": {
          "id": "qBV7C0s-42c",
          "k": "ot",
          "o": 0,
          "ch": "Baptiste Shin'Fonem"
        }
      },
      {
        "kind": "",
        "name": "Ring My Bell",
        "artist": "",
        "usage": "メドレー #108（50:54〜）",
        "q": "Ring My Bell アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "もうそう★こうかんにっき",
        "artist": "",
        "usage": "メドレー #109（51:24〜）",
        "q": "もうそう★こうかんにっき アニメ 主題歌",
        "yt": {
          "id": "twLdWkJ20tk",
          "k": "mv",
          "o": 1,
          "ch": "Otome Shinto - Topic",
          "fa": {
            "id": "LA0H1sT8XvU",
            "k": "ot",
            "o": 0
          },
          "alt": {
            "id": "LA0H1sT8XvU",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "Destin Histoire",
        "artist": "",
        "usage": "メドレー #110（51:48〜）",
        "q": "Destin Histoire アニメ 主題歌",
        "yt": {
          "id": "o6LMdQDAGv8",
          "k": "mv",
          "o": 1,
          "ch": "Nurcantika Official",
          "fa": {
            "id": "ty9F3qkwUhM",
            "k": "ot",
            "o": 0
          },
          "alt": {
            "id": "ty9F3qkwUhM",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "INSIDE IDENTITY",
        "artist": "",
        "usage": "メドレー #111（52:14〜）",
        "q": "INSIDE IDENTITY アニメ 主題歌",
        "yt": {
          "id": "zO67ZJpUvwQ",
          "k": "ot",
          "o": 0,
          "ch": "Anime OP & ED",
          "fa": {
            "id": "314bWYDGKjk",
            "k": "ot",
            "o": 0
          },
          "alt": {
            "id": "314bWYDGKjk",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "エガオノキミヘ",
        "artist": "",
        "usage": "メドレー #112（52:46〜）",
        "q": "エガオノキミヘ アニメ 主題歌",
        "yt": {
          "id": "43aB09vrnTc",
          "k": "ot",
          "o": 0,
          "ch": "GJ SGC2020"
        },
        "note": "動画の照合が弱い（別の音源の可能性）"
      },
      {
        "kind": "",
        "name": "片翼のイカロス",
        "artist": "",
        "usage": "メドレー #113（53:25〜）",
        "q": "片翼のイカロス アニメ 主題歌",
        "yt": {
          "id": "IXw7R3KPTbo",
          "k": "mv",
          "o": 1,
          "ch": "Yui Sakakibara - Topic",
          "alt": {
            "id": "IapRvEFssb0",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "On my Sheep",
        "artist": "",
        "usage": "メドレー #114（53:49〜）",
        "q": "On my Sheep アニメ 主題歌",
        "yt": {
          "id": "KaxSBkJxM7c",
          "k": "ot",
          "o": 0,
          "ch": "中恵光城 -Mitsuki Nakae-",
          "alt": {
            "id": "-pLlbuq3M88",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "NEVERLAND",
        "artist": "",
        "usage": "メドレー #115（54:18〜）",
        "q": "NEVERLAND アニメ 主題歌",
        "yt": {
          "id": "1cUDJ4I771g",
          "k": "mv",
          "o": 1,
          "ch": "橋本みゆき Official Channel",
          "alt": {
            "id": "skpDT24x2gs",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "euphoric field",
        "artist": "",
        "usage": "メドレー #116（54:45〜）",
        "q": "euphoric field アニメ 主題歌",
        "yt": {
          "id": "4oczlUGLmgw",
          "k": "op",
          "o": 1,
          "ch": "NBCUniversal Anime/Music",
          "fa": {
            "id": "o5xd_PR21RE",
            "k": "mv",
            "o": 1
          },
          "alt": {
            "id": "3RrkKAcYlbU",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "絆 kizunairo 色",
        "artist": "",
        "usage": "メドレー #117（55:08〜）",
        "q": "絆 kizunairo 色 アニメ 主題歌",
        "yt": {
          "id": "Hs_rIBPgTn8",
          "k": "mv",
          "o": 1,
          "ch": "Lia Official YouTube",
          "alt": {
            "id": "GqlBJoQw1BU",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "Spread Wings.",
        "artist": "",
        "usage": "メドレー #118（55:41〜）",
        "q": "Spread Wings. アニメ 主題歌",
        "yt": {
          "id": "IoZ8uKQ19F4",
          "k": "ot",
          "o": 1,
          "ch": "Aki Misato - Topic"
        },
        "note": "動画の照合が弱い（別の音源の可能性）"
      },
      {
        "kind": "",
        "name": "The fine every day",
        "artist": "",
        "usage": "メドレー #119（56:20〜）",
        "q": "The fine every day アニメ 主題歌",
        "yt": {
          "id": "OtfV19x5biE",
          "k": "ot",
          "o": 0,
          "ch": "kamimaezu",
          "alt": {
            "id": "stt1-AvqNGo",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "The Other Side of the Wall",
        "artist": "",
        "usage": "メドレー #120（57:00〜）",
        "q": "The Other Side of the Wall アニメ 主題歌",
        "yt": {
          "id": "72_Z-JCxacY",
          "k": "ot",
          "o": 0,
          "ch": "Void_Chords a.k.a. Ryo Takahashi"
        },
        "note": "動画の照合が弱い（別の音源の可能性）"
      },
      {
        "kind": "",
        "name": "Red fraction",
        "artist": "",
        "usage": "メドレー #121（57:45〜）",
        "q": "Red fraction アニメ 主題歌",
        "yt": {
          "id": "dqczAWZUKjk",
          "k": "mv",
          "o": 1,
          "ch": "MELL - Topic",
          "alt": {
            "id": "FM3JRDvthok",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "mind as Judgment",
        "artist": "",
        "usage": "メドレー #122（58:11〜）",
        "q": "mind as Judgment アニメ 主題歌",
        "yt": {
          "id": "ucN_5ahgkEQ",
          "k": "mv",
          "o": 1,
          "ch": "Faylan - Topic",
          "alt": {
            "id": "90KqR5KSB4g",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "End of the World",
        "artist": "",
        "usage": "メドレー #123（58:37〜）",
        "q": "End of the World アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "ハートの確率",
        "artist": "",
        "usage": "メドレー #124（59:04〜）",
        "q": "ハートの確率 アニメ 主題歌",
        "yt": {
          "id": "Jy0_ju4i2VA",
          "k": "ot",
          "o": 0,
          "ch": "ZXHTR"
        },
        "note": "動画の照合が弱い（別の音源の可能性）"
      },
      {
        "kind": "",
        "name": "Day to Story",
        "artist": "",
        "usage": "メドレー #125（59:30〜）",
        "q": "Day to Story アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "Philosophyz～TV animation ver.～",
        "artist": "",
        "usage": "メドレー #126（60:02〜）",
        "q": "Philosophyz～TV animation ver.～ アニメ 主題歌",
        "yt": {
          "id": "WEExs_Dpwds",
          "k": "mv",
          "o": 1,
          "ch": "Release - Topic",
          "fa": {
            "id": "9cswQ1M9P-U",
            "k": "ot",
            "o": 0
          },
          "alt": {
            "id": "9cswQ1M9P-U",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "サンプライト",
        "artist": "",
        "usage": "メドレー #127（60:33〜）",
        "q": "サンプライト アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "lull～そして僕らは～",
        "artist": "",
        "usage": "メドレー #128（61:04〜）",
        "q": "lull～そして僕らは～ アニメ 主題歌",
        "yt": {
          "id": "fZ0UsDLs_zw",
          "k": "op",
          "o": 1,
          "ch": "NBCUniversal Anime/Music",
          "fa": {
            "id": "hHw3I1ryrBY",
            "k": "mv",
            "o": 1
          },
          "alt": {
            "id": "GQgXPByTaIA",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "ebb and flow",
        "artist": "",
        "usage": "メドレー #129（61:34〜）",
        "q": "ebb and flow アニメ 主題歌",
        "yt": {
          "id": "F1Ee5VxoApI",
          "k": "mv",
          "o": 1,
          "ch": "Ray - Topic",
          "alt": {
            "id": "3LjKx9Ikp8w",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "Rainy veil",
        "artist": "",
        "usage": "メドレー #130（62:37〜）",
        "q": "Rainy veil アニメ 主題歌",
        "yt": {
          "id": "Ds2zm8N4-9U",
          "k": "op",
          "o": 1,
          "ch": "NBCUniversal Anime/Music",
          "fa": {
            "id": "kjulACVyOXg",
            "k": "mv",
            "o": 1
          },
          "alt": {
            "id": "kjulACVyOXg",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "夢の続き",
        "artist": "",
        "usage": "メドレー #131（63:09〜）",
        "q": "夢の続き アニメ 主題歌",
        "yt": {
          "id": "NPc__cmzLL8",
          "k": "mv",
          "o": 1,
          "ch": "Konomi Suzuki Official"
        }
      },
      {
        "kind": "",
        "name": "オオカミハート",
        "artist": "",
        "usage": "メドレー #132（63:40〜）",
        "q": "オオカミハート アニメ 主題歌",
        "yt": {
          "id": "FBQQ24fuzfc",
          "k": "mv",
          "o": 1,
          "ch": "ORESAMA Official Channel",
          "alt": {
            "id": "PwAgOqNvFGA",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "Q&Aリサイタル!",
        "artist": "",
        "usage": "メドレー #133（64:08〜）",
        "q": "Q&Aリサイタル! アニメ 主題歌",
        "yt": {
          "id": "we1WnfLpY4I",
          "k": "mv",
          "o": 1,
          "ch": "Sony Music (Japan)",
          "alt": {
            "id": "1d4Ko0SpO74",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "Youthful Dreamer",
        "artist": "",
        "usage": "メドレー #134（64:34〜）",
        "q": "Youthful Dreamer アニメ 主題歌",
        "yt": {
          "id": "_xwINNH6kBQ",
          "k": "mv",
          "o": 1,
          "ch": "TrySail（麻倉もも・雨宮天・夏川椎菜）official YouTube channel",
          "alt": {
            "id": "QcwbRf_VRRw",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "センチメンタルラブ",
        "artist": "",
        "usage": "メドレー #135（64:59〜）",
        "q": "センチメンタルラブ アニメ 主題歌",
        "yt": {
          "id": "ulCPyOiw12k",
          "k": "ot",
          "o": 0,
          "ch": "Dorayaki",
          "alt": {
            "id": "VWROj0mCkVA",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "Climber's High!",
        "artist": "",
        "usage": "メドレー #136（65:29〜）",
        "q": "Climber's High! アニメ 主題歌",
        "yt": {
          "id": "FU21xtlEUKw",
          "k": "mv",
          "o": 1,
          "ch": "FlyingDog",
          "alt": {
            "id": "OjeX5FbVX0k",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "ボタン",
        "artist": "",
        "usage": "メドレー #137（65:56〜）",
        "q": "ボタン アニメ 主題歌",
        "yt": {
          "id": "EIwY6L2VDPY",
          "k": "mv",
          "o": 1,
          "ch": "PENGUIN RESEARCH Official Channel",
          "alt": {
            "id": "MYKyRRkOQS8",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "未来形Answer",
        "artist": "",
        "usage": "メドレー #138（66:36〜）",
        "q": "未来形Answer アニメ 主題歌",
        "yt": {
          "id": "WrlC6WbpjLg",
          "k": "mv",
          "o": 1,
          "ch": "Trustrick - Topic",
          "alt": {
            "id": "_ng2Hg1DE88",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "恋のマホウ",
        "artist": "",
        "usage": "メドレー #139（67:02〜）",
        "q": "恋のマホウ アニメ 主題歌",
        "yt": {
          "id": "t3bNZfxwem8",
          "k": "ot",
          "o": 0,
          "ch": "nagisa2929"
        }
      },
      {
        "kind": "",
        "name": "リフレクティア",
        "artist": "",
        "usage": "メドレー #140（67:33〜）",
        "q": "リフレクティア アニメ 主題歌",
        "yt": {
          "id": "bPuCsWhFjLY",
          "k": "mv",
          "o": 1,
          "ch": "eufonius - Topic",
          "alt": {
            "id": "E5SkAXJISuU",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "いちばん星",
        "artist": "",
        "usage": "メドレー #141（68:05〜）",
        "q": "いちばん星 アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "セカイノナミダ",
        "artist": "",
        "usage": "メドレー #142（68:43〜）",
        "q": "セカイノナミダ アニメ 主題歌",
        "yt": {
          "id": "ExhOKzxvRgQ",
          "k": "mv",
          "o": 1,
          "ch": "結城アイラ Official Channel",
          "alt": {
            "id": "bj30KnwvQKU",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "風のなかのプリムローズ",
        "artist": "",
        "usage": "メドレー #143（69:17〜）",
        "q": "風のなかのプリムローズ アニメ 主題歌",
        "yt": {
          "id": "j-3CjHYnSyU",
          "k": "ot",
          "o": 0,
          "ch": "Sunny Yamada",
          "fa": {
            "id": "2xHFLZ-DgpA",
            "k": "ot",
            "o": 0
          },
          "alt": {
            "id": "2xHFLZ-DgpA",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "Brave Shine",
        "artist": "",
        "usage": "メドレー #144（69:54〜）",
        "q": "Brave Shine アニメ 主題歌",
        "yt": {
          "id": "VQ2D8rZljwU",
          "k": "mv",
          "o": 1,
          "ch": "Aimer Official YouTube Channel",
          "alt": {
            "id": "GVSEg3kWv4A",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "Realize",
        "artist": "",
        "usage": "メドレー #145（70:19〜）",
        "q": "Realize アニメ 主題歌",
        "yt": {
          "id": "67LVBH1dv5k",
          "k": "mv",
          "o": 1,
          "ch": "Konomi Suzuki Official",
          "alt": {
            "id": "V7ZEEymq0DQ",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "TIT FOR TAT",
        "artist": "",
        "usage": "メドレー #146（70:46〜）",
        "q": "TIT FOR TAT アニメ 主題歌",
        "yt": {
          "id": "wvBmjhnr2Po",
          "k": "ot",
          "o": 1,
          "ch": "MYTH & ROID Official Channel"
        },
        "note": "動画の照合が弱い（別の音源の可能性）"
      },
      {
        "kind": "",
        "name": "VORACITY",
        "artist": "",
        "usage": "メドレー #147（71:14〜）",
        "q": "VORACITY アニメ 主題歌",
        "yt": {
          "id": "njBp4VBFMBU",
          "k": "nc",
          "o": 1,
          "ch": "KADOKAWAanime",
          "fa": {
            "id": "bI2-ioFv3UA",
            "k": "mv",
            "o": 1
          },
          "alt": {
            "id": "UhazA6PvjHA",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "Seven Doors",
        "artist": "",
        "usage": "メドレー #148（71:36〜）",
        "q": "Seven Doors アニメ 主題歌",
        "yt": {
          "id": "a7FPdVNdhvs",
          "k": "mv",
          "o": 1,
          "ch": "ZAQ Official Channel",
          "alt": {
            "id": "EtZn__7l6dM",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "Link",
        "artist": "",
        "usage": "メドレー #149（72:01〜）",
        "q": "Link アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "DeCIDE",
        "artist": "",
        "usage": "メドレー #150（72:28〜）",
        "q": "DeCIDE アニメ 主題歌",
        "yt": {
          "id": "Hu2zZcBONF0",
          "k": "mv",
          "o": 1,
          "ch": "SUMMONERS 2 plus - Topic"
        }
      },
      {
        "kind": "",
        "name": "Trip innocent of D",
        "artist": "",
        "usage": "メドレー #151（72:53〜）",
        "q": "Trip innocent of D アニメ 主題歌",
        "yt": {
          "id": "2dun6sN5bBA",
          "k": "mv",
          "o": 1,
          "ch": "Lantis Channel",
          "alt": {
            "id": "Nlfb1icel-k",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "miele paradiso",
        "artist": "",
        "usage": "メドレー #152（73:20〜）",
        "q": "miele paradiso アニメ 主題歌",
        "yt": {
          "id": "7SyN5_YAnl0",
          "k": "mv",
          "o": 1,
          "ch": "Iori Nomizu - Topic"
        }
      },
      {
        "kind": "",
        "name": "REALOVE:REALIFE",
        "artist": "",
        "usage": "メドレー #153（73:51〜）",
        "q": "REALOVE:REALIFE アニメ 主題歌",
        "yt": {
          "id": "6EHQWY2avjQ",
          "k": "mv",
          "o": 1,
          "ch": "Sphere - Topic",
          "alt": {
            "id": "-LlCBeVEXHU",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "BLOODRED",
        "artist": "",
        "usage": "メドレー #154（74:24〜）",
        "q": "BLOODRED アニメ 主題歌",
        "yt": {
          "id": "S57BfN3RHAM",
          "k": "mv",
          "o": 1,
          "ch": "D-selections - Topic",
          "alt": {
            "id": "H2rmqzZs7ao",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "True Blue Traveler",
        "artist": "",
        "usage": "メドレー #155（74:48〜）",
        "q": "True Blue Traveler アニメ 主題歌",
        "yt": {
          "id": "M9asnx95Zvc",
          "k": "mv",
          "o": 1,
          "ch": "Minami Kuribayashi - Topic",
          "alt": {
            "id": "uVx6oYWWpk8",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "BEAUTIFUL SKY",
        "artist": "",
        "usage": "メドレー #156（75:11〜）",
        "q": "BEAUTIFUL SKY アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "DISCOTHEQUE",
        "artist": "",
        "usage": "メドレー #157（75:33〜）",
        "q": "DISCOTHEQUE アニメ 主題歌",
        "yt": {
          "id": "pQ6oN4Auwdw",
          "k": "ot",
          "o": 0,
          "ch": "水樹奈々"
        },
        "note": "動画の照合が弱い（別の音源の可能性）"
      },
      {
        "kind": "",
        "name": "innocent starter",
        "artist": "",
        "usage": "メドレー #158（75:57〜）",
        "q": "innocent starter アニメ 主題歌",
        "yt": {
          "id": "dYVftmni4rw",
          "k": "mv",
          "o": 1,
          "ch": "魔法少女リリカルなのは YouTube OFFICIAL CHANNEL and 水樹奈々",
          "fa": {
            "id": "6nMiFspQ6bc",
            "k": "ot",
            "o": 0
          },
          "alt": {
            "id": "ct6WuBF1w0Q",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "Synchrogazer",
        "artist": "",
        "usage": "メドレー #159（76:23〜）",
        "q": "Synchrogazer アニメ 主題歌",
        "yt": {
          "id": "2DKCoLZAGvQ",
          "k": "ot",
          "o": 0,
          "ch": "水樹奈々",
          "alt": {
            "id": "pJzNzllwNUI",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "深愛",
        "artist": "",
        "usage": "メドレー #160（76:54〜）",
        "q": "深愛 アニメ 主題歌",
        "yt": {
          "id": "ePVJdev77Gw",
          "k": "mv",
          "o": 1,
          "ch": "KING RECORDS",
          "alt": {
            "id": "A_PtfjzETUo",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "Golden Time",
        "artist": "",
        "usage": "メドレー #161（77:30〜）",
        "q": "Golden Time アニメ 主題歌",
        "yt": {
          "id": "sJuwHqm0xoc",
          "k": "mv",
          "o": 1,
          "ch": "堀江由衣 Official Channel",
          "alt": {
            "id": "ZWre4Mde13I",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "silky heart",
        "artist": "",
        "usage": "メドレー #162（77:58〜）",
        "q": "silky heart アニメ 主題歌",
        "yt": {
          "id": "3W7eWwNqFGo",
          "k": "mv",
          "o": 1,
          "ch": "堀江由衣 Official Channel",
          "alt": {
            "id": "LVh_hUxm-0A",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "虹のかけら",
        "artist": "",
        "usage": "メドレー #163（78:28〜）",
        "q": "虹のかけら アニメ 主題歌",
        "yt": {
          "id": "D4JXy4kYfIY",
          "k": "nc",
          "o": 1,
          "ch": "TOHO animation チャンネル",
          "fa": {
            "id": "hP26EVRrtqk",
            "k": "ot",
            "o": 0
          },
          "alt": {
            "id": "hl_gd6tmAQg",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "over and over",
        "artist": "",
        "usage": "メドレー #164（78:57〜）",
        "q": "over and over アニメ 主題歌",
        "yt": {
          "id": "yqhoYkw-lrg",
          "k": "op",
          "o": 1,
          "ch": "NBCUniversal Anime/Music",
          "fa": {
            "id": "gvIWoZLSBzI",
            "k": "mv",
            "o": 1
          },
          "alt": {
            "id": "tmJibXSG4_U",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "CANDY MAGIC",
        "artist": "",
        "usage": "メドレー #165（79:25〜）",
        "q": "CANDY MAGIC アニメ 主題歌",
        "yt": {
          "id": "oVuze_0sT14",
          "k": "ot",
          "o": 0,
          "ch": "みみめめMIMI",
          "fa": {
            "id": "1BOfoSc7nBM",
            "k": "ot",
            "o": 0
          },
          "alt": {
            "id": "d-LRe-FdjWo",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "くちづけDiamond",
        "artist": "",
        "usage": "メドレー #166（79:56〜）",
        "q": "くちづけDiamond アニメ 主題歌",
        "yt": {
          "id": "ZLBCrRWLMXU",
          "k": "ot",
          "o": 0,
          "ch": "AniSoL",
          "alt": {
            "id": "E3NO2Ytx434",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "Wonder Wind",
        "artist": "",
        "usage": "メドレー #167（80:33〜）",
        "q": "Wonder Wind アニメ 主題歌",
        "yt": {
          "id": "yUQZyFjMmd4",
          "k": "mv",
          "o": 1,
          "ch": "NBCUniversal Music Channel",
          "alt": {
            "id": "gBHJBCdz3Zs",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "I SAY YES",
        "artist": "",
        "usage": "メドレー #168（81:00〜）",
        "q": "I SAY YES アニメ 主題歌",
        "yt": {
          "id": "nn808-3SbVk",
          "k": "ot",
          "o": 0,
          "ch": "UN1212",
          "alt": {
            "id": "bbHPnDG8IiA",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "コイノシルシ",
        "artist": "",
        "usage": "メドレー #169（81:24〜）",
        "q": "コイノシルシ アニメ 主題歌",
        "yt": {
          "id": "0esUbeigC6s",
          "k": "mv",
          "o": 1,
          "ch": "Kami nomi zo shiri-Tai - Topic",
          "alt": {
            "id": "4xDGTCY3wLA",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "I'LL BE THERE FOR YOU",
        "artist": "",
        "usage": "メドレー #170（81:49〜）",
        "q": "I'LL BE THERE FOR YOU アニメ 主題歌",
        "yt": {
          "id": "pimvPProU0w",
          "k": "ot",
          "o": 0,
          "ch": "zeroneki6"
        }
      },
      {
        "kind": "",
        "name": "Cherish",
        "artist": "",
        "usage": "メドレー #171（82:17〜）",
        "q": "Cherish アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "LOVE × HEAVEN",
        "artist": "",
        "usage": "メドレー #172（82:45〜）",
        "q": "LOVE × HEAVEN アニメ 主題歌",
        "yt": {
          "id": "SAXKoKjVRlk",
          "k": "ot",
          "o": 0,
          "ch": "大庭蓮實"
        }
      },
      {
        "kind": "",
        "name": "恋する☆ひよこ",
        "artist": "",
        "usage": "メドレー #173（83:12〜）",
        "q": "恋する☆ひよこ アニメ 主題歌",
        "yt": {
          "id": "IeecCWSN6AI",
          "k": "ot",
          "o": 0,
          "ch": "砂肝さん"
        },
        "note": "動画の照合が弱い（別の音源の可能性）"
      },
      {
        "kind": "",
        "name": "Fly Away",
        "artist": "",
        "usage": "メドレー #174（83:35〜）",
        "q": "Fly Away アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "Choose me♡ダーリン",
        "artist": "",
        "usage": "メドレー #175（84:00〜）",
        "q": "Choose me♡ダーリン アニメ 主題歌",
        "yt": {
          "id": "WVgsmlTLAKk",
          "k": "mv",
          "o": 1,
          "ch": "StylipS - Topic",
          "alt": {
            "id": "BcQYOrzbrmY",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "SELF PRODUCER",
        "artist": "",
        "usage": "メドレー #176（84:29〜）",
        "q": "SELF PRODUCER アニメ 主題歌",
        "yt": {
          "id": "FjQy6QyxpdE",
          "k": "ot",
          "o": 0,
          "ch": "Minori Chihara / minorhythm",
          "alt": {
            "id": "MiGkTVycmMc",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "U-n-d-e-r--STANDING!",
        "artist": "",
        "usage": "メドレー #177（84:57〜）",
        "q": "U-n-d-e-r--STANDING! アニメ 主題歌",
        "yt": {
          "id": "k7h-SBU16eo",
          "k": "ot",
          "o": 0,
          "ch": "REDshoma",
          "alt": {
            "id": "ApbbwH9pWnY",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "Arrival of Tears",
        "artist": "",
        "usage": "メドレー #178（85:30〜）",
        "q": "Arrival of Tears アニメ 主題歌",
        "yt": {
          "id": "eoV7GAMCxMg",
          "k": "ot",
          "o": 1,
          "ch": "彩音 -Ayane Official YouTube Channel-"
        },
        "note": "動画の照合が弱い（別の音源の可能性）"
      },
      {
        "kind": "",
        "name": "Be mine!",
        "artist": "",
        "usage": "メドレー #179（86:13〜）",
        "q": "Be mine! アニメ 主題歌",
        "yt": {
          "id": "HEDoirg99hU",
          "k": "ot",
          "o": 0,
          "ch": "The Guy",
          "fa": {
            "id": "Jk2bnP1dWLI",
            "k": "ot",
            "o": 0
          },
          "alt": {
            "id": "Jk2bnP1dWLI",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "CHOIR JAIL",
        "artist": "",
        "usage": "メドレー #180（86:36〜）",
        "q": "CHOIR JAIL アニメ 主題歌",
        "yt": {
          "id": "lyDAsYdNtt0",
          "k": "mv",
          "o": 1,
          "ch": "Konomi Suzuki Official",
          "alt": {
            "id": "Jr13UYJEads",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "CHAIN",
        "artist": "",
        "usage": "メドレー #181（86:58〜）",
        "q": "CHAIN アニメ 主題歌",
        "yt": {
          "id": "4qQZZbYykdg",
          "k": "mv",
          "o": 1,
          "ch": "ASCA Official YouTube Channel",
          "alt": {
            "id": "FjdvgI_jVP8",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "Ray of bullet",
        "artist": "",
        "usage": "メドレー #182（87:23〜）",
        "q": "Ray of bullet アニメ 主題歌",
        "yt": {
          "id": "tjR_HsR4sDY",
          "k": "ot",
          "o": 0,
          "ch": "大庭蓮實",
          "alt": {
            "id": "yQXYhAyqoxU",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "最高速Fall in Love",
        "artist": "",
        "usage": "メドレー #183（87:58〜）",
        "q": "最高速Fall in Love アニメ 主題歌",
        "yt": {
          "id": "JWfemp8fYuM",
          "k": "mv",
          "o": 1,
          "ch": "ミーア、パピ、セントレア、スー、メロ、ラクネラ - Topic",
          "alt": {
            "id": "0O_ReJPDYTQ",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "BURST THE GRAVITY",
        "artist": "",
        "usage": "メドレー #184（88:20〜）",
        "q": "BURST THE GRAVITY アニメ 主題歌",
        "yt": {
          "id": "RH8pmvO_d4Q",
          "k": "mv",
          "o": 1,
          "ch": "ALTIMA - Topic",
          "alt": {
            "id": "7YcMeVt1W_g",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "Tears Infection",
        "artist": "",
        "usage": "メドレー #185（88:48〜）",
        "q": "Tears Infection アニメ 主題歌",
        "yt": {
          "id": "3iEGrBdV89o",
          "k": "ot",
          "o": 0,
          "ch": "江戶川柯南",
          "fa": {
            "id": "Rvsnjl4mJy8",
            "k": "ot",
            "o": 0
          },
          "alt": {
            "id": "bGZ8Top7W7I",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "カラフル",
        "artist": "",
        "usage": "メドレー #186（89:19〜）",
        "q": "カラフル アニメ 主題歌",
        "yt": {
          "id": "UGXSscY5hn8",
          "k": "mv",
          "o": 1,
          "ch": "ClariS Official YouTube Channel"
        }
      },
      {
        "kind": "",
        "name": "キミシニタモウコトナカレ",
        "artist": "",
        "usage": "メドレー #187（89:48〜）",
        "q": "キミシニタモウコトナカレ アニメ 主題歌",
        "yt": {
          "id": "JBcNYaw8NOo",
          "k": "mv",
          "o": 1,
          "ch": "FlyingDog",
          "alt": {
            "id": "VkocqRBwk3U",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "射手座☆午後九時Don't be late",
        "artist": "",
        "usage": "メドレー #188（90:15〜）",
        "q": "射手座☆午後九時Don't be late アニメ 主題歌",
        "yt": {
          "id": "5sKSCRuKLHo",
          "k": "ot",
          "o": 0,
          "ch": "May'n",
          "alt": {
            "id": "i93FwE8W_Oo",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "Distance",
        "artist": "",
        "usage": "メドレー #189（90:46〜）",
        "q": "Distance アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "No pain, No game",
        "artist": "",
        "usage": "メドレー #190（91:16〜）",
        "q": "No pain, No game アニメ 主題歌",
        "yt": {
          "id": "Tq2RFOvf3Tk",
          "k": "ot",
          "o": 0,
          "ch": "ナノ / NANO",
          "alt": {
            "id": "H--aFiuOV4g",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "Bull's Eye",
        "artist": "",
        "usage": "メドレー #191（91:41〜）",
        "q": "Bull's Eye アニメ 主題歌",
        "yt": {
          "id": "WzoIvqVpO-k",
          "k": "mv",
          "o": 1,
          "ch": "FlyingDog",
          "alt": {
            "id": "26rGp61lmHw",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "ROUGH DIAMONDS",
        "artist": "",
        "usage": "メドレー #192（92:06〜）",
        "q": "ROUGH DIAMONDS アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "ライムツリー",
        "artist": "",
        "usage": "メドレー #193（92:35〜）",
        "q": "ライムツリー アニメ 主題歌",
        "yt": {
          "id": "qTjMzo62uRI",
          "k": "mv",
          "o": 1,
          "ch": "nano. RIPE Official Channel"
        }
      },
      {
        "kind": "",
        "name": "1st Love Story",
        "artist": "",
        "usage": "メドレー #194（93:03〜）",
        "q": "1st Love Story アニメ 主題歌",
        "yt": {
          "id": "A3fyvdU6U30",
          "k": "mv",
          "o": 1,
          "ch": "NBCUniversal Anime/Music",
          "fa": {
            "id": "_N8LKyZT0Lw",
            "k": "mv",
            "o": 1
          },
          "alt": {
            "id": "_N8LKyZT0Lw",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "セイシュンゼミナール",
        "artist": "",
        "usage": "メドレー #195（93:41〜）",
        "q": "セイシュンゼミナール アニメ 主題歌",
        "yt": {
          "id": "Qk1gxobARdE",
          "k": "mv",
          "o": 1,
          "ch": "アニプレックス チャンネル",
          "fa": {
            "id": "LecPw5uPNVk",
            "k": "ot",
            "o": 0
          },
          "alt": {
            "id": "N-YDJV8GuC0",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "TERMINATED",
        "artist": "",
        "usage": "メドレー #196（94:17〜）",
        "q": "TERMINATED アニメ 主題歌",
        "yt": {
          "id": "B_eRJiiLPCU",
          "k": "mv",
          "o": 1,
          "ch": "Lantis Channel",
          "fa": {
            "id": "e2yHprLk6No",
            "k": "ot",
            "o": 0
          },
          "alt": {
            "id": "e2yHprLk6No",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "暁の華",
        "artist": "",
        "usage": "メドレー #197（94:43〜）",
        "q": "暁の華 アニメ 主題歌",
        "yt": {
          "id": "PbTDo1bWgms",
          "k": "mv",
          "o": 1,
          "ch": "アニメ 音楽 2.5次元舞台 - マーベラス公式チャンネル",
          "fa": {
            "id": "5wWsUnNM1V4",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "Last Proof",
        "artist": "",
        "usage": "メドレー #198（95:13〜）",
        "q": "Last Proof アニメ 主題歌",
        "yt": {
          "id": "cb__kDI7PKQ",
          "k": "mv",
          "o": 1,
          "ch": "ZAQ Official Channel",
          "alt": {
            "id": "dFRjHo2o04U",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "Black Rover",
        "artist": "",
        "usage": "メドレー #199（95:40〜）",
        "q": "Black Rover アニメ 主題歌",
        "yt": {
          "id": "8RSfSxkN0ek",
          "k": "ot",
          "o": 0,
          "ch": "VK Blanka ",
          "fa": {
            "id": "Y27hMeRCYzA",
            "k": "ot",
            "o": 0
          },
          "alt": {
            "id": "yIlBb1Jvjbk",
            "k": "ot",
            "o": 0
          }
        }
      },
      {
        "kind": "",
        "name": "700,000,000,000,000,000,000,000の空で",
        "artist": "",
        "usage": "メドレー #200（96:20〜）",
        "q": "700,000,000,000,000,000,000,000の空で アニメ 主題歌",
        "yt": {
          "id": "1uYnW64BvPA",
          "k": "mv",
          "o": 1,
          "ch": "LiGHTs - Topic",
          "alt": {
            "id": "v5XVk4x_amw",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "この世界は僕らを待っていた",
        "artist": "",
        "usage": "メドレー #201（97:51〜）",
        "q": "この世界は僕らを待っていた アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "starlog",
        "artist": "",
        "usage": "メドレー #202（98:28〜）",
        "q": "starlog アニメ 主題歌",
        "yt": {
          "id": "4hnn9BywgTQ",
          "k": "mv",
          "o": 1,
          "ch": "Lantis Global Channel",
          "alt": {
            "id": "CGz2I_5ikI4",
            "k": "mv",
            "o": 1
          }
        }
      },
      {
        "kind": "",
        "name": "Scarlet Ballet",
        "artist": "",
        "usage": "メドレー #203（98:52〜）",
        "q": "Scarlet Ballet アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "あんりある♡パラダイス",
        "artist": "",
        "usage": "メドレー #204（99:25〜）",
        "q": "あんりある♡パラダイス アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "Shiny Ray",
        "artist": "",
        "usage": "メドレー #205（99:58〜）",
        "q": "Shiny Ray アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "シャンランランfeat.96猫",
        "artist": "",
        "usage": "メドレー #206（100:20〜）",
        "q": "シャンランランfeat.96猫 アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "アンチテーゼ・エスケイプ",
        "artist": "",
        "usage": "メドレー #207（100:50〜）",
        "q": "アンチテーゼ・エスケイプ アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "Blue Bud Blue",
        "artist": "",
        "usage": "メドレー #208（101:11〜）",
        "q": "Blue Bud Blue アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "メニメニマニマニ",
        "artist": "",
        "usage": "メドレー #209（101:40〜）",
        "q": "メニメニマニマニ アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "secret arms",
        "artist": "",
        "usage": "メドレー #210（102:09〜）",
        "q": "secret arms アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "Authentic symphony",
        "artist": "",
        "usage": "メドレー #211（102:41〜）",
        "q": "Authentic symphony アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "初恋パラシュート",
        "artist": "",
        "usage": "メドレー #212（103:11〜）",
        "q": "初恋パラシュート アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "BEAM my BEAM",
        "artist": "",
        "usage": "メドレー #213（103:39〜）",
        "q": "BEAM my BEAM アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "Precious Memories",
        "artist": "",
        "usage": "メドレー #214（104:00〜）",
        "q": "Precious Memories アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "サクラサクミライコイユメ",
        "artist": "",
        "usage": "メドレー #215（104:29〜）",
        "q": "サクラサクミライコイユメ アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "サクラハッピーイノベーション",
        "artist": "",
        "usage": "メドレー #216（105:03〜）",
        "q": "サクラハッピーイノベーション アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "Endless Story",
        "artist": "",
        "usage": "メドレー #217（105:28〜）",
        "q": "Endless Story アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "トゥッティ！",
        "artist": "",
        "usage": "メドレー #218（105:49〜）",
        "q": "トゥッティ！ アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "ここから、ここから",
        "artist": "",
        "usage": "メドレー #219（106:14〜）",
        "q": "ここから、ここから アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "花雪",
        "artist": "",
        "usage": "メドレー #220（106:58〜）",
        "q": "花雪 アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "Bursty Greedy Spider",
        "artist": "",
        "usage": "メドレー #221（107:27〜）",
        "q": "Bursty Greedy Spider アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "Crow Song",
        "artist": "",
        "usage": "メドレー #222（107:59〜）",
        "q": "Crow Song アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "鳥の詩",
        "artist": "",
        "usage": "メドレー #223（108:31〜）",
        "q": "鳥の詩 アニメ 主題歌",
        "yt": {
          "id": "3dbuqZIc_3g",
          "k": "ot",
          "o": 1,
          "ch": "森口博子 オフィシャル YouTube チャンネル"
        },
        "note": "動画の照合が弱い（別の音源の可能性）"
      },
      {
        "kind": "",
        "name": "YOU",
        "artist": "",
        "usage": "メドレー #224（109:07〜）",
        "q": "YOU アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "ヒカリ",
        "artist": "",
        "usage": "メドレー #225（109:39〜）",
        "q": "ヒカリ アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "正解はひとつ！じゃない！！",
        "artist": "",
        "usage": "メドレー #226（110:05〜）",
        "q": "正解はひとつ！じゃない！！ アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "BEAUTIFUL≒SENTENCE",
        "artist": "",
        "usage": "メドレー #227（110:33〜）",
        "q": "BEAUTIFUL≒SENTENCE アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "Lostorage",
        "artist": "",
        "usage": "メドレー #228（111:00〜）",
        "q": "Lostorage アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "Evidence",
        "artist": "",
        "usage": "メドレー #229（111:26〜）",
        "q": "Evidence アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "Ring of Fortune",
        "artist": "",
        "usage": "メドレー #230（111:50〜）",
        "q": "Ring of Fortune アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "乙女どもよ。",
        "artist": "",
        "usage": "メドレー #231（112:20〜）",
        "q": "乙女どもよ。 アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "やさしい希望",
        "artist": "",
        "usage": "メドレー #232（112:43〜）",
        "q": "やさしい希望 アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "Deal with the devil",
        "artist": "",
        "usage": "メドレー #233（113:09〜）",
        "q": "Deal with the devil アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "Black White",
        "artist": "",
        "usage": "メドレー #234（113:42〜）",
        "q": "Black White アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "Strike my soul",
        "artist": "",
        "usage": "メドレー #235（114:07〜）",
        "q": "Strike my soul アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "signal",
        "artist": "",
        "usage": "メドレー #236（114:34〜）",
        "q": "signal アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "Alicemagic",
        "artist": "",
        "usage": "メドレー #237（115:03〜）",
        "q": "Alicemagic アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "Eternal Star",
        "artist": "",
        "usage": "メドレー #238（115:28〜）",
        "q": "Eternal Star アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "君へ",
        "artist": "",
        "usage": "メドレー #239（115:53〜）",
        "q": "君へ アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "ebullient future",
        "artist": "",
        "usage": "メドレー #240（116:32〜）",
        "q": "ebullient future アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "アフターグロウ",
        "artist": "",
        "usage": "メドレー #241（117:11〜）",
        "q": "アフターグロウ アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "Beautiful Soldier",
        "artist": "",
        "usage": "メドレー #242（117:52〜）",
        "q": "Beautiful Soldier アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "ビードロ模様",
        "artist": "",
        "usage": "メドレー #243（118:26〜）",
        "q": "ビードロ模様 アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "THERE IS A REASON",
        "artist": "",
        "usage": "メドレー #244（118:56〜）",
        "q": "THERE IS A REASON アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "Harvest",
        "artist": "",
        "usage": "メドレー #245（119:27〜）",
        "q": "Harvest アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "たましい",
        "artist": "",
        "usage": "メドレー #246（119:53〜）",
        "q": "たましい アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "メグメル",
        "artist": "",
        "usage": "メドレー #247（120:33〜）",
        "q": "メグメル アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "Brave Song",
        "artist": "",
        "usage": "メドレー #248（121:10〜）",
        "q": "Brave Song アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "behind",
        "artist": "",
        "usage": "メドレー #249（121:49〜）",
        "q": "behind アニメ 主題歌"
      },
      {
        "kind": "",
        "name": "Sincerely",
        "artist": "",
        "usage": "メドレー #250（122:28〜）",
        "q": "Sincerely アニメ 主題歌"
      }
    ]
  }
];
