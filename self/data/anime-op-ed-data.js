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
//               o: 1=公式チャンネル / 0=非公式, ch: チャンネル名, e: 0=埋め込み再生不可(省略=可), alt: 埋め込める代替動画 {id,k,o}(任意) }
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
          "ch": "アニプレックス チャンネル"
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
          "ch": "アニプレックス チャンネル"
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
          "ch": "アニプレックス チャンネル"
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
          "ch": "アニプレックス チャンネル"
        }
      }
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
          "ch": "Nagatomo"
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
          "ch": "コードギアスチャンネル CODEGEASS Channel"
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
          "ch": "コードギアスチャンネル CODEGEASS Channel"
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
          "ch": "「KING AMUSEMENT CREATIVE」公式チャンネル"
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
          "ch": "「KING AMUSEMENT CREATIVE」公式チャンネル"
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
          "ch": "「KING AMUSEMENT CREATIVE」公式チャンネル"
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
          "ch": "「KING AMUSEMENT CREATIVE」公式チャンネル"
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
          "ch": "hosiken856563"
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
          "ch": "avex"
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
          "ch": "avex"
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
          "ch": "avex"
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
          "ch": "avex"
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
          "ch": "avex"
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
          "ch": "avex"
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
          "ch": "avex"
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
          "ch": "Fear, and Loathing in Las Vegas"
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
          "ch": "Sony Music (Japan)"
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
          "ch": "KADOKAWAanime"
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
          "ch": "KADOKAWAanime"
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
          "ch": "KADOKAWAanime"
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
          "ch": "KADOKAWAanime"
        }
      }
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
          "ch": "NBCUniversal Anime/Music"
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
          "ch": "NBCUniversal Anime/Music"
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
          "ch": "NBCUniversal Anime/Music"
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
          "ch": "「KING AMUSEMENT CREATIVE」公式チャンネル"
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
          "ch": "株式会社インフィニット"
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
          "ch": "株式会社インフィニット"
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
          "ch": "株式会社インフィニット"
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
          "ch": "株式会社インフィニット"
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
          "ch": "バンダイナムコフィルムワークス チャンネル"
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
          "ch": "バンダイナムコフィルムワークス チャンネル"
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
          "ch": "バンダイナムコフィルムワークス チャンネル"
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
          "ch": "バンダイナムコフィルムワークス チャンネル"
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
          "ch": "バンダイナムコフィルムワークス チャンネル"
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
          "ch": "バンダイナムコフィルムワークス チャンネル"
        }
      }
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
          "ch": "KADOKAWAanime"
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
          "ch": "「Re:ゼロから始める異世界生活」チャンネル【公式】 and Konomi Suzuki Official"
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
          "ch": "KADOKAWAanime"
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
          "ch": "「Re:ゼロから始める異世界生活」チャンネル【公式】 and 2 more"
        }
      }
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
          "ch": "ShoProアニメチャンネル"
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
          "ch": "ShoProアニメチャンネル"
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
          "ch": "ShoProアニメチャンネル"
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
          "ch": "ShoProアニメチャンネル"
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
          "ch": "ShoProアニメチャンネル"
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
          "ch": "ShoProアニメチャンネル"
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
          "ch": "ShoProアニメチャンネル"
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
          "ch": "ShoProアニメチャンネル"
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
          "ch": "ShoProアニメチャンネル"
        }
      }
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
          "ch": "けものフレンズプロジェクト公式"
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
          "ch": "Victor Entertainment"
        }
      }
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
          "ch": "ワーナー ブラザース 公式チャンネル"
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
          "ch": "KADOKAWAanime"
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
          "ch": "KADOKAWAanime"
        }
      }
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
          "ch": "Sony Music (Japan)"
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
          "ch": "FURYU Pictures Channel"
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
          "ch": "FURYU Pictures Channel"
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
          "ch": "FURYU Pictures Channel"
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
          "ch": "けものフレンズプロジェクト公式"
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
          "ch": "けものフレンズプロジェクト公式"
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
          "ch": "けものフレンズプロジェクト公式"
        }
      }
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
          "ch": "アニプレックス チャンネル"
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
          "ch": "アニプレックス チャンネル"
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
          "ch": "アニプレックス チャンネル"
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
          "ch": "アニプレックス チャンネル"
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
          "ch": "アニプレックス チャンネル"
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
          "ch": "アニプレックス チャンネル"
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
          "ch": "NBCUniversal Anime/Music"
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
          "ch": "NBCUniversal Anime/Music"
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
          "ch": "NBCUniversal Anime/Music"
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
          "ch": "NBCUniversal Anime/Music"
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
          "ch": "とあるプロジェクト公式toaru.project"
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
          "ch": "とあるプロジェクト公式toaru.project"
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
          "ch": "NBCUniversal Anime/Music"
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
          "ch": "NBCUniversal Anime/Music"
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
          "ch": "NBCUniversal Anime/Music"
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
          "ch": "とあるプロジェクト公式toaru.project"
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
          "ch": "とあるプロジェクト公式toaru.project"
        }
      }
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
          "ch": "TOHO animation チャンネル"
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
          "ch": "TOHO animation チャンネル"
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
          "ch": "TOHO animation チャンネル"
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
          "ch": "TOHO animation チャンネル"
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
          "ch": "TOHO animation チャンネル"
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
          "ch": "TOHO animation チャンネル"
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
          "ch": "TOHO animation チャンネル"
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
          "ch": "TOHO animation チャンネル"
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
          "ch": "TOHO animation チャンネル"
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
          "ch": "TOHO animation チャンネル"
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
          "ch": "TOHO animation チャンネル"
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
          "ch": "TOHO animation チャンネル"
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
          "ch": "TOHO animation チャンネル"
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
          "ch": "𝑾𝒆𝒊𝑬𝑵"
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
          "ch": "TOHO animation チャンネル"
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
          "ch": "アークナイツ 公式チャンネル"
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
          "ch": "アークナイツ 公式チャンネル"
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
          "ch": "アークナイツ 公式チャンネル"
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
          "ch": "アークナイツ 公式チャンネル"
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
          "ch": "KADOKAWAanime"
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
          "ch": "KADOKAWAanime"
        }
      },
      {
        "kind": "ED",
        "name": "DREAMS DREAMS<nowiki>:</nowiki>Mabel Ver",
        "artist": "",
        "usage": "メイベル（悠木碧）による第12話挿入歌。作詞・作曲はササキトモコ",
        "q": "異世界おじさん ED DREAMS DREAMS<nowiki>:</nowiki>Mabel Ver"
      }
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
          "ch": "「虚構推理」公式"
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
          "ch": "「虚構推理」公式"
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
          "ch": "「虚構推理」公式"
        }
      }
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
          "ch": "TWIN ENGINE"
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
          "ch": "TWIN ENGINE"
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
          "ch": "FlyingDog"
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
          "ch": "TWIN ENGINE"
        }
      }
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
          "ch": "『シャインポスト』公式"
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
          "ch": "『シャインポスト』公式"
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
          "ch": "『シャインポスト』公式"
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
          "ch": "TOHO animation チャンネル"
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
          "ch": "TOHO animation チャンネル and spitzclips"
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
          "ch": "TOHO animation チャンネル"
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
          "ch": "TOHO animation チャンネル"
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
          "ch": "TOHO animation チャンネル"
        }
      }
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
          "ch": "TOHO animation チャンネル"
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
          "ch": "TOHO animation チャンネル"
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
          "ch": "TOHO animation チャンネル"
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
          "ch": "TOHO animation チャンネル"
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
          "ch": "TOHO animation チャンネル"
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
          "ch": "TOHO animation チャンネル"
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
          "ch": "TOHO animation チャンネル"
        }
      }
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
          "ch": "NBCUniversal Anime/Music"
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
          "ch": "NBCUniversal Anime/Music"
        }
      }
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
          "ch": "TOHO animation チャンネル and Masayoshi Oishi"
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
          "ch": "TOHO animation チャンネル and Masayoshi Oishi"
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
          "ch": "TOHO animation チャンネル"
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
          "ch": "TOHO animation チャンネル"
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
          "ch": "TOHO animation チャンネル"
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
          "ch": "TOHO animation チャンネル"
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
          "ch": "TOHO animation チャンネル"
        }
      }
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
          "ch": "TVアニメ「シャングリラ・フロンティア」公式"
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
          "ch": "TVアニメ「シャングリラ・フロンティア」公式"
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
          "ch": "TVアニメ「シャングリラ・フロンティア」公式"
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
          "ch": "TVアニメ「シャングリラ・フロンティア」公式"
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
          "ch": "TVアニメ「シャングリラ・フロンティア」公式"
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
          "ch": "TVアニメ「シャングリラ・フロンティア」公式"
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
          "ch": "TVアニメ「シャングリラ・フロンティア」公式"
        }
      }
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
          "ch": "KADOKAWAanime"
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
          "ch": "KADOKAWAanime"
        }
      }
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
          "ch": "TMSアニメ公式チャンネル"
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
          "ch": "TMSアニメ公式チャンネル"
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
          "ch": "TMSアニメ公式チャンネル"
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
          "ch": "TMSアニメ公式チャンネル"
        }
      },
      {
        "kind": "ED",
        "name": "blue in",
        "artist": "エルスウェア紀行",
        "usage": "Season2",
        "q": "アオのハコ ED blue in エルスウェア紀行"
      }
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
          "ch": "isekai channel @バンダイナムコフィルムワークス"
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
          "ch": "isekai channel @バンダイナムコフィルムワークス and Bandai Namco Filmworks Channel"
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
          "ch": "isekai channel @バンダイナムコフィルムワークス"
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
          "ch": "isekai channel @バンダイナムコフィルムワークス"
        }
      }
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
          "ch": "TVアニメ FAIRY TAIL 100年クエスト 公式"
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
          "ch": "TVアニメ FAIRY TAIL 100年クエスト 公式"
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
          "ch": "TVアニメ FAIRY TAIL 100年クエスト 公式"
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
          "ch": "KADOKAWAanime"
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
          "ch": "KADOKAWAanime"
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
          "ch": "KADOKAWAanime"
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
          "ch": "KADOKAWAanime"
        }
      }
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
          "ch": "KADOKAWAanime"
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
          "ch": "KADOKAWAanime"
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
          "ch": "KADOKAWAanime"
        }
      }
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
          "ch": "アニプレックス チャンネル and Kento Nakajima Official YouTube Channel"
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
          "ch": "アニプレックス チャンネル"
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
          "ch": "アニプレックス チャンネル and 2 more"
        }
      }
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
          "ch": "tv asahi  animation YouTubeチャンネル"
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
          "ch": "tv asahi  animation YouTubeチャンネル"
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
          "ch": "tv asahi  animation YouTubeチャンネル"
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
          "ch": "tv asahi  animation YouTubeチャンネル"
        }
      }
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
          "ch": "KADOKAWAanime"
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
          "ch": "KADOKAWAanime"
        }
      }
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
          "ch": "バンダイナムコフィルムワークス チャンネル"
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
          "ch": "バンダイナムコフィルムワークス チャンネル"
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
          "ch": "バンダイナムコフィルムワークス チャンネル"
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
          "ch": "バンダイナムコフィルムワークス チャンネル"
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
          "ch": "バンダイナムコフィルムワークス チャンネル"
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
          "ch": "バンダイナムコフィルムワークス チャンネル"
        }
      }
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
          "ch": "バンダイナムコフィルムワークス チャンネル"
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
          "ch": "isekai channel @バンダイナムコフィルムワークス"
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
          "ch": "isekai channel @バンダイナムコフィルムワークス and 2 more"
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
          "ch": "isekai channel @バンダイナムコフィルムワークス"
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
          "ch": "isekai channel @バンダイナムコフィルムワークス and 3 more"
        }
      }
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
          "ch": "KADOKAWAanime"
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
          "ch": "KADOKAWAanime"
        }
      }
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
          "ch": "アニプレックス チャンネル"
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
          "ch": "アニプレックス チャンネル"
        }
      }
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
          "ch": "KADOKAWAanime"
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
          "ch": "アニプレックス チャンネル"
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
          "ch": "アニプレックス チャンネル"
        }
      }
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
          "ch": "TMSアニメ公式チャンネル"
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
          "ch": "TMSアニメ公式チャンネル"
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
          "ch": "TMSアニメ公式チャンネル"
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
          "ch": "アニプレックス チャンネル"
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
          "ch": "アニプレックス チャンネル"
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
          "ch": "アニプレックス チャンネル"
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
          "ch": "MBS animation 公式チャンネル"
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
          "ch": "MBS animation 公式チャンネル"
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
          "ch": "ぽにきゃん-Anime PONY CANYON"
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
          "ch": "ぽにきゃん-Anime PONY CANYON"
        }
      }
    ]
  }
];
