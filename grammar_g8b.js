// grammar_g8b.js — 國八下 Unit 1–6 文法重點
// Appends to window.grammarPoints and updates catalog/index
(function(){
  var g8b_catalog = [
    {
      "id": "國八下_U1", "book": "國八下", "unit": "U1", "unitOrder": 1,
      "unitTitle": "比較級、連繫動詞、as...as...",
      "groups": [
        { "id": "國八下_U1_G1", "title": "比較級", "order": 1,
          "pointIds": ["G8B_U1_COMP_REG","G8B_U1_COMP_IRREG","G8B_U1_COMP_USE"] },
        { "id": "國八下_U1_G2", "title": "連繫動詞", "order": 2,
          "pointIds": ["G8B_U1_LINK_VERB","G8B_U1_LINK_BECOME"] },
        { "id": "國八下_U1_G3", "title": "as...as... 原級比較", "order": 3,
          "pointIds": ["G8B_U1_AS_AS"] }
      ]
    },
    {
      "id": "國八下_U2", "book": "國八下", "unit": "U2", "unitOrder": 2,
      "unitTitle": "最高級、反身代名詞",
      "groups": [
        { "id": "國八下_U2_G1", "title": "最高級", "order": 1,
          "pointIds": ["G8B_U2_SUP_REG","G8B_U2_SUP_IRREG","G8B_U2_SUP_USE"] },
        { "id": "國八下_U2_G2", "title": "反身代名詞", "order": 2,
          "pointIds": ["G8B_U2_REFLEXIVE","G8B_U2_BY_MYSELF"] }
      ]
    },
    {
      "id": "國八下_U3", "book": "國八下", "unit": "U3", "unitOrder": 3,
      "unitTitle": "副詞構成與比較",
      "groups": [
        { "id": "國八下_U3_G1", "title": "副詞構成", "order": 1,
          "pointIds": ["G8B_U3_ADV_FORM","G8B_U3_ADV_IRREG"] },
        { "id": "國八下_U3_G2", "title": "副詞比較級與最高級", "order": 2,
          "pointIds": ["G8B_U3_ADV_COMP","G8B_U3_ADV_SUP"] }
      ]
    },
    {
      "id": "國八下_U4", "book": "國八下", "unit": "U4", "unitOrder": 4,
      "unitTitle": "感官動詞、情態助動詞、if條件句",
      "groups": [
        { "id": "國八下_U4_G1", "title": "感官動詞 + V / V-ing", "order": 1,
          "pointIds": ["G8B_U4_SENSE_V","G8B_U4_SENSE_VING"] },
        { "id": "國八下_U4_G2", "title": "情態助動詞 must / should", "order": 2,
          "pointIds": ["G8B_U4_MUST","G8B_U4_SHOULD","G8B_U4_MUSTNT","G8B_U4_DONT_HAVE_TO"] },
        { "id": "國八下_U4_G3", "title": "if 條件句", "order": 3,
          "pointIds": ["G8B_U4_IF_COND"] }
      ]
    },
    {
      "id": "國八下_U5", "book": "國八下", "unit": "U5", "unitOrder": 5,
      "unitTitle": "one/both/all of + 名詞、although 用法",
      "groups": [
        { "id": "國八下_U5_G1", "title": "Quantifier + of + 名詞", "order": 1,
          "pointIds": ["G8B_U5_ONE_OF","G8B_U5_BOTH_OF","G8B_U5_ALL_OF","G8B_U5_MOST_OF"] },
        { "id": "國八下_U5_G2", "title": "although / though", "order": 2,
          "pointIds": ["G8B_U5_ALTHOUGH"] }
      ]
    },
    {
      "id": "國八下_U6", "book": "國八下", "unit": "U6", "unitOrder": 6,
      "unitTitle": "附加問句、that 子句",
      "groups": [
        { "id": "國八下_U6_G1", "title": "附加問句", "order": 1,
          "pointIds": ["G8B_U6_TAG_AFF","G8B_U6_TAG_NEG","G8B_U6_TAG_RESP"] },
        { "id": "國八下_U6_G2", "title": "that 名詞子句", "order": 2,
          "pointIds": ["G8B_U6_THAT_CLAUSE"] }
      ]
    }
  ];

  var g8b_points = [
    // U1 比較級
    {
      "id":"G8B_U1_COMP_REG","book":"國八下","unit":"U1","unitOrder":1,
      "group":"比較級","mapBranch":"Verbs / Tenses / Auxiliaries",
      "title":"比較級規則變化",
      "pattern":"adj. + -er / more + adj.",
      "explanation":"單音節形容詞加 -er；雙/多音節形容詞用 more。特殊：big→bigger, easy→easier。",
      "examples":["Turkey is bigger than Taiwan.","Getting around here is easier than in Turkey.","Beef dishes here are more delicious than the pork dishes."],
      "commonErrors":["more bigger（不可重複比較）","more easy（單音節不用 more）"],
      "difficulty":2,"questionTypes":["multiple_choice","fill_in_blank","error_correction"],"examWeight":5,"tags":[]
    },
    {
      "id":"G8B_U1_COMP_IRREG","book":"國八下","unit":"U1","unitOrder":1,
      "group":"比較級","mapBranch":"Verbs / Tenses / Auxiliaries",
      "title":"比較級不規則變化",
      "pattern":"good→better, bad→worse, many/much→more, little→less",
      "explanation":"不規則比較級需個別記憶。",
      "examples":["This idea is better than that one.","His grade is worse than mine."],
      "commonErrors":["more good（應用 better）","more bad（應用 worse）"],
      "difficulty":2,"questionTypes":["multiple_choice","fill_in_blank"],"examWeight":4,"tags":[]
    },
    {
      "id":"G8B_U1_COMP_USE","book":"國八下","unit":"U1","unitOrder":1,
      "group":"比較級","mapBranch":"Verbs / Tenses / Auxiliaries",
      "title":"比較級句型 A + be + 比較級 + than + B",
      "pattern":"A + be + 比較級 + than + B",
      "explanation":"比較兩者時用 than 連接。可用 much 強調程度。",
      "examples":["You two are much hungrier than we are.","This book is more interesting than that one."],
      "commonErrors":["than後接受格 them（而非 they）"],
      "difficulty":2,"questionTypes":["multiple_choice","fill_in_blank","error_correction"],"examWeight":5,"tags":[]
    },
    {
      "id":"G8B_U1_LINK_VERB","book":"國八下","unit":"U1","unitOrder":1,
      "group":"連繫動詞","mapBranch":"Verbs / Tenses / Auxiliaries",
      "title":"連繫動詞 look / smell / taste / sound / feel",
      "pattern":"連繫動詞 + 形容詞",
      "explanation":"感官連繫動詞後接形容詞（不接副詞）。look like 後接名詞。",
      "examples":["The steak looks yummy.","The meat pies here smell good and taste great!","That sounds like a great idea."],
      "commonErrors":["looks yummily（應用形容詞）","smells goodly（副詞錯誤）"],
      "difficulty":2,"questionTypes":["multiple_choice","fill_in_blank","error_correction"],"examWeight":4,"tags":[]
    },
    {
      "id":"G8B_U1_LINK_BECOME","book":"國八下","unit":"U1","unitOrder":1,
      "group":"連繫動詞","mapBranch":"Verbs / Tenses / Auxiliaries",
      "title":"get / become / turn 表示變化",
      "pattern":"get/become/turn + 形容詞",
      "explanation":"表示狀態改變，後接形容詞。become more and more + adj. 表漸漸變化。",
      "examples":["The weather became cold after October.","The soup turned cold in just three minutes.","I'm getting hungry."],
      "commonErrors":["become coldly（應用形容詞）"],
      "difficulty":2,"questionTypes":["multiple_choice","fill_in_blank"],"examWeight":3,"tags":[]
    },
    {
      "id":"G8B_U1_AS_AS","book":"國八下","unit":"U1","unitOrder":1,
      "group":"as...as...","mapBranch":"Verbs / Tenses / Auxiliaries",
      "title":"as...as... 原級比較",
      "pattern":"A + be + as + 原級形容詞 + as + B",
      "explanation":"表兩者程度相同。常見固定片語：as hungry as a bear 等。",
      "examples":["Ela is as hungry as a bear.","Bobby's Pie Shop is as old as Oliver's.","Spider silk is as strong as steel."],
      "commonErrors":["as more big as（不加比較級）","as bigger as（不加 -er）"],
      "difficulty":2,"questionTypes":["multiple_choice","fill_in_blank","error_correction"],"examWeight":4,"tags":[]
    },
    // U2 最高級
    {
      "id":"G8B_U2_SUP_REG","book":"國八下","unit":"U2","unitOrder":2,
      "group":"最高級","mapBranch":"Verbs / Tenses / Auxiliaries",
      "title":"最高級規則變化",
      "pattern":"the + adj. + -est / the most + adj.",
      "explanation":"單音節加 -est；雙/多音節用 the most。",
      "examples":["Red fire ants are the most dangerous ants of all.","The Great Wall is the longest wall in the world."],
      "commonErrors":["the most biggest（重複）","the dangerousest（多音節不加 -est）"],
      "difficulty":2,"questionTypes":["multiple_choice","fill_in_blank","error_correction"],"examWeight":5,"tags":[]
    },
    {
      "id":"G8B_U2_SUP_IRREG","book":"國八下","unit":"U2","unitOrder":2,
      "group":"最高級","mapBranch":"Verbs / Tenses / Auxiliaries",
      "title":"最高級不規則變化",
      "pattern":"good→best, bad→worst, many→most, little→least",
      "explanation":"不規則最高級。",
      "examples":["Staying away from them is the best idea.","That's the worst thing to do."],
      "commonErrors":["the most good（應用 best）"],
      "difficulty":2,"questionTypes":["multiple_choice","fill_in_blank"],"examWeight":4,"tags":[]
    },
    {
      "id":"G8B_U2_SUP_USE","book":"國八下","unit":"U2","unitOrder":2,
      "group":"最高級","mapBranch":"Verbs / Tenses / Auxiliaries",
      "title":"最高級句型 + of all / in + 範圍",
      "pattern":"the + 最高級 + of all / in + 地點/群體",
      "explanation":"最高級後用 of all 或 in + 範圍說明比較對象。",
      "examples":["Snakes are the scariest of all.","The elephants are the largest animals in the zoo."],
      "commonErrors":["the scariest in all（of all 才對）"],
      "difficulty":2,"questionTypes":["multiple_choice","fill_in_blank","error_correction"],"examWeight":4,"tags":[]
    },
    {
      "id":"G8B_U2_REFLEXIVE","book":"國八下","unit":"U2","unitOrder":2,
      "group":"反身代名詞","mapBranch":"Nouns / Pronouns / Determiners",
      "title":"反身代名詞 myself / yourself / themselves...",
      "pattern":"主詞 + V + 反身代名詞",
      "explanation":"I→myself, you→yourself/yourselves, he→himself, she→herself, they→themselves, we→ourselves。",
      "examples":["He taught himself to play the guitar.","She talks to herself sometimes.","The ants will bite you to protect themselves."],
      "commonErrors":["theirselves（應用 themselves）","hisself（應用 himself）"],
      "difficulty":2,"questionTypes":["multiple_choice","fill_in_blank","error_correction"],"examWeight":4,"tags":[]
    },
    {
      "id":"G8B_U2_BY_MYSELF","book":"國八下","unit":"U2","unitOrder":2,
      "group":"反身代名詞","mapBranch":"Nouns / Pronouns / Determiners",
      "title":"by + 反身代名詞 = 獨自地、靠自己",
      "pattern":"by + 反身代名詞",
      "explanation":"by myself = alone，表示獨力完成。",
      "examples":["I moved the rock by myself.","Can someone give me a hand? I can't do it by myself."],
      "commonErrors":["by my own（慣用 by myself）"],
      "difficulty":2,"questionTypes":["multiple_choice","fill_in_blank"],"examWeight":3,"tags":[]
    },
    // U3 副詞
    {
      "id":"G8B_U3_ADV_FORM","book":"國八下","unit":"U3","unitOrder":3,
      "group":"副詞構成","mapBranch":"Verbs / Tenses / Auxiliaries",
      "title":"形容詞 + -ly → 副詞",
      "pattern":"adj. + -ly",
      "explanation":"大多數形容詞加 -ly 成副詞。字尾 y→ily；字尾 le→ly。形容詞副詞同形：fast, hard, early。",
      "examples":["He treats his cat badly.","The man drove slowly.","She finished the work carefully."],
      "commonErrors":["fastly（fast 無需加 -ly）","hardly 意思是「幾乎不」，非 hard 的副詞"],
      "difficulty":2,"questionTypes":["multiple_choice","fill_in_blank","error_correction"],"examWeight":4,"tags":[]
    },
    {
      "id":"G8B_U3_ADV_IRREG","book":"國八下","unit":"U3","unitOrder":3,
      "group":"副詞構成","mapBranch":"Verbs / Tenses / Auxiliaries",
      "title":"不規則副詞 good → well",
      "pattern":"good → well",
      "explanation":"good 的副詞是 well，不是 goodly。",
      "examples":["He doesn't treat us well.","She sings well."],
      "commonErrors":["sings good（應用 well）"],
      "difficulty":2,"questionTypes":["multiple_choice","fill_in_blank","error_correction"],"examWeight":3,"tags":[]
    },
    {
      "id":"G8B_U3_ADV_COMP","book":"國八下","unit":"U3","unitOrder":3,
      "group":"副詞比較","mapBranch":"Verbs / Tenses / Auxiliaries",
      "title":"副詞比較級",
      "pattern":"more + adv. / adv. + -er + than",
      "explanation":"-ly 副詞用 more；形副同形用 -er/-est。不規則：badly→worse, well→better。",
      "examples":["Kevin works harder than Jason.","Jason works more carefully than Kevin."],
      "commonErrors":["more hard（hard 用 harder）"],
      "difficulty":2,"questionTypes":["multiple_choice","fill_in_blank"],"examWeight":4,"tags":[]
    },
    {
      "id":"G8B_U3_ADV_SUP","book":"國八下","unit":"U3","unitOrder":3,
      "group":"副詞比較","mapBranch":"Verbs / Tenses / Auxiliaries",
      "title":"副詞最高級",
      "pattern":"the most + adv. / adv. + -est",
      "explanation":"Kevin works (the) hardest of all. 最高級前 the 可省略。",
      "examples":["Kevin works (the) hardest of all.","Ida works the most quickly of all."],
      "commonErrors":["the most fast（fast 最高級是 fastest）"],
      "difficulty":2,"questionTypes":["multiple_choice","fill_in_blank"],"examWeight":3,"tags":[]
    },
    // U4 感官動詞、情態助動詞、if
    {
      "id":"G8B_U4_SENSE_V","book":"國八下","unit":"U4","unitOrder":4,
      "group":"感官動詞","mapBranch":"Non-finite Verbs",
      "title":"感官動詞 + 受詞 + 原形動詞（完成動作）",
      "pattern":"see/hear/feel/watch + O + V（原形）",
      "explanation":"強調整個動作或動作已完成時，用原形動詞。",
      "examples":["Mrs. Kaya heard the wind blow.","Mr. Kaya saw the trees sway.","The family felt the house shake."],
      "commonErrors":["heard the wind to blow（感官動詞後不加 to）"],
      "difficulty":3,"questionTypes":["multiple_choice","fill_in_blank","error_correction"],"examWeight":5,"tags":[]
    },
    {
      "id":"G8B_U4_SENSE_VING","book":"國八下","unit":"U4","unitOrder":4,
      "group":"感官動詞","mapBranch":"Non-finite Verbs",
      "title":"感官動詞 + 受詞 + V-ing（進行中動作）",
      "pattern":"see/hear/feel/watch + O + V-ing",
      "explanation":"強調動作正在進行中時，用現在分詞。",
      "examples":["I can see the trees on the street swaying.","Ela watched the people walking."],
      "commonErrors":["感官動詞 + to V-ing（不存在此用法）"],
      "difficulty":3,"questionTypes":["multiple_choice","fill_in_blank"],"examWeight":4,"tags":[]
    },
    {
      "id":"G8B_U4_MUST","book":"國八下","unit":"U4","unitOrder":4,
      "group":"情態助動詞","mapBranch":"Verbs / Tenses / Auxiliaries",
      "title":"must 表強烈義務",
      "pattern":"must + V（原形）",
      "explanation":"must 表示強烈必要性或義務，語氣比 should 強。",
      "examples":["We must be ready for it.","You must prepare food.","A good rescue team must have rescue dogs."],
      "commonErrors":["must to go（助動詞後不接 to）"],
      "difficulty":2,"questionTypes":["multiple_choice","fill_in_blank"],"examWeight":3,"tags":[]
    },
    {
      "id":"G8B_U4_SHOULD","book":"國八下","unit":"U4","unitOrder":4,
      "group":"情態助動詞","mapBranch":"Verbs / Tenses / Auxiliaries",
      "title":"should 表建議",
      "pattern":"should + V（原形）",
      "explanation":"should 表示建議或應當，語氣比 must 弱。",
      "examples":["We should stay at home.","You should train yourself to face your fear.","People shouldn't go swimming during a typhoon."],
      "commonErrors":["should goes（助動詞後用原形）"],
      "difficulty":2,"questionTypes":["multiple_choice","fill_in_blank","error_correction"],"examWeight":3,"tags":[]
    },
    {
      "id":"G8B_U4_MUSTNT","book":"國八下","unit":"U4","unitOrder":4,
      "group":"情態助動詞","mapBranch":"Verbs / Tenses / Auxiliaries",
      "title":"mustn't vs. don't have to",
      "pattern":"mustn't（絕對禁止）vs. don't have to（不需要）",
      "explanation":"mustn't = 絕對不可以；don't have to = 不必（無義務）。意思完全不同。",
      "examples":["You mustn't play with fire.","You don't have to come if you're busy."],
      "commonErrors":["混用 mustn't 和 don't have to"],
      "difficulty":3,"questionTypes":["multiple_choice","error_correction"],"examWeight":4,"tags":[]
    },
    {
      "id":"G8B_U4_DONT_HAVE_TO","book":"國八下","unit":"U4","unitOrder":4,
      "group":"情態助動詞","mapBranch":"Verbs / Tenses / Auxiliaries",
      "title":"have to 表義務",
      "pattern":"have to + V（原形）",
      "explanation":"have to 與 must 意思接近，但 have to 受時態影響（had to）。",
      "examples":["We have to prepare some food.","She had to stay home yesterday."],
      "commonErrors":["has to + V-ing（後接原形）"],
      "difficulty":2,"questionTypes":["multiple_choice","fill_in_blank"],"examWeight":3,"tags":[]
    },
    {
      "id":"G8B_U4_IF_COND","book":"國八下","unit":"U4","unitOrder":4,
      "group":"if條件句","mapBranch":"Clauses / Connectors",
      "title":"if 條件句（現在式→未來式）",
      "pattern":"If + S + V（現在式）, S + will + V",
      "explanation":"if 子句用現在式，主句用 will。if 子句可前可後，後置時不加逗號。",
      "examples":["If the typhoon gets stronger tomorrow, we won't go to school.","If you go to the mountains, you will see bright stars.","Noah will stay home and read books if it rains tomorrow."],
      "commonErrors":["If it will rain（if 子句不用 will）"],
      "difficulty":3,"questionTypes":["multiple_choice","fill_in_blank","error_correction"],"examWeight":5,"tags":[]
    },
    // U5
    {
      "id":"G8B_U5_ONE_OF","book":"國八下","unit":"U5","unitOrder":5,
      "group":"Quantifier + of","mapBranch":"Quantifiers / Countability / Amount",
      "title":"one of + 複數名詞 → 單數動詞",
      "pattern":"one of + 複數名詞 + 單數動詞",
      "explanation":"one of 後接複數名詞，但動詞用單數（主詞是 one）。",
      "examples":["One of the teachers is sick.","One of my favorite recipes for a cough is honey with lemon."],
      "commonErrors":["One of the teachers are sick（動詞應為 is）"],
      "difficulty":3,"questionTypes":["multiple_choice","fill_in_blank","error_correction"],"examWeight":4,"tags":[]
    },
    {
      "id":"G8B_U5_BOTH_OF","book":"國八下","unit":"U5","unitOrder":5,
      "group":"Quantifier + of","mapBranch":"Quantifiers / Countability / Amount",
      "title":"both of + 複數名詞 → 複數動詞",
      "pattern":"both of + 複數名詞 + 複數動詞",
      "explanation":"both of 後接複數名詞，動詞用複數。",
      "examples":["Both of my parents drink a lot of water.","Both of them are tired."],
      "commonErrors":["Both of my parents drinks（應為 drink）"],
      "difficulty":2,"questionTypes":["multiple_choice","fill_in_blank"],"examWeight":3,"tags":[]
    },
    {
      "id":"G8B_U5_ALL_OF","book":"國八下","unit":"U5","unitOrder":5,
      "group":"Quantifier + of","mapBranch":"Quantifiers / Countability / Amount",
      "title":"all of + 名詞 → 動詞視名詞而定",
      "pattern":"all of + 可數複數 → 複數動詞；all of + 不可數 → 單數動詞",
      "explanation":"all of 後若為複數名詞用複數動詞；後若為不可數名詞用單數動詞。",
      "examples":["All of the food stands look great.","All of the lemon tea has sugar in it.","All of the music sounds beautiful."],
      "commonErrors":["All of the music sound（不可數用單數）"],
      "difficulty":3,"questionTypes":["multiple_choice","fill_in_blank","error_correction"],"examWeight":5,"tags":[]
    },
    {
      "id":"G8B_U5_MOST_OF","book":"國八下","unit":"U5","unitOrder":5,
      "group":"Quantifier + of","mapBranch":"Quantifiers / Countability / Amount",
      "title":"some / many / most of + 名詞",
      "pattern":"some/many/most of + 可數複數 → 複數；+ 不可數 → 單數",
      "explanation":"依後接名詞決定動詞單複數。",
      "examples":["Many of them have a sore throat.","Most of the food here smells good.","Some of the medicine is for stomachaches."],
      "commonErrors":["Most of the food smell（不可數應用 smells）"],
      "difficulty":3,"questionTypes":["multiple_choice","fill_in_blank","error_correction"],"examWeight":4,"tags":[]
    },
    {
      "id":"G8B_U5_ALTHOUGH","book":"國八下","unit":"U5","unitOrder":5,
      "group":"although","mapBranch":"Clauses / Connectors",
      "title":"although / though 表轉折",
      "pattern":"Although/Though + S + V, S + V（不可與 but 連用）",
      "explanation":"although 和 though 意思相同，表「雖然」，可置句首或句中，不可同時與 but 連用。",
      "examples":["Although most of the food here smells good, I don't feel like eating.","Though he was sick, he still made dinner."],
      "commonErrors":["Although..., but...（不可同時用）"],
      "difficulty":3,"questionTypes":["multiple_choice","fill_in_blank","error_correction"],"examWeight":5,"tags":[]
    },
    // U6
    {
      "id":"G8B_U6_TAG_AFF","book":"國八下","unit":"U6","unitOrder":6,
      "group":"附加問句","mapBranch":"Questions / WH-questions",
      "title":"附加問句：前肯後否",
      "pattern":"肯定句, 否定附加問句?",
      "explanation":"前句肯定→附加問句用否定。主詞用代名詞，動詞時態一致。",
      "examples":["The science fair is around the corner, isn't it?","Gina wants to get good grades, doesn't she?","We will have a meeting tomorrow, won't we?"],
      "commonErrors":["is it?（應用 isn't it?）","doesn't she?→動詞時態不符"],
      "difficulty":3,"questionTypes":["multiple_choice","fill_in_blank","error_correction"],"examWeight":5,"tags":[]
    },
    {
      "id":"G8B_U6_TAG_NEG","book":"國八下","unit":"U6","unitOrder":6,
      "group":"附加問句","mapBranch":"Questions / WH-questions",
      "title":"附加問句：前否後肯",
      "pattern":"否定句, 肯定附加問句?",
      "explanation":"前句否定→附加問句用肯定。",
      "examples":["Grades are not everything, are they?","You didn't fail the test, did you?","He can't throw a ball well, can he?"],
      "commonErrors":["aren't they?（否定句後應用肯定）"],
      "difficulty":3,"questionTypes":["multiple_choice","fill_in_blank","error_correction"],"examWeight":5,"tags":[]
    },
    {
      "id":"G8B_U6_TAG_RESP","book":"國八下","unit":"U6","unitOrder":6,
      "group":"附加問句","mapBranch":"Questions / WH-questions",
      "title":"附加問句的回答",
      "pattern":"Yes, S + V. / No, S + 否定動詞.",
      "explanation":"回答依事實（非附加問句形式）。Yes = 肯定事實；No = 否定事實。",
      "examples":["The science fair is around the corner, isn't it? → Yes, it is.","He can't throw a ball well, can he? → Yes, he can."],
      "commonErrors":["依附加問句形式回答（應依事實）"],
      "difficulty":3,"questionTypes":["multiple_choice"],"examWeight":3,"tags":[]
    },
    {
      "id":"G8B_U6_THAT_CLAUSE","book":"國八下","unit":"U6","unitOrder":6,
      "group":"that子句","mapBranch":"Clauses / Connectors",
      "title":"that 名詞子句",
      "pattern":"S + think/know/say/remember/be + adj. + (that) + S + V",
      "explanation":"that 可省略。that 後接完整子句（主詞＋動詞）。",
      "examples":["We think (that) Jamie is a great basketball player.","I am happy (that) they will join the study group.","She heard (that) her favorite team won the big game."],
      "commonErrors":["I think that is he late.（that 後應接完整子句）"],
      "difficulty":3,"questionTypes":["multiple_choice","fill_in_blank","error_correction"],"examWeight":4,"tags":[]
    }
  ];

  // Append grammar points
  if (!window.grammarPoints) window.grammarPoints = [];
  window.grammarPoints = window.grammarPoints.concat(g8b_points);

  // Append catalog
  if (!window.grammarCatalog) window.grammarCatalog = [];
  window.grammarCatalog = window.grammarCatalog.concat(g8b_catalog);

  // Rebuild indexes
  window.grammarPointIndexById = Object.fromEntries(
    window.grammarPoints.map(function(p){ return [p.id, p]; })
  );
  window.grammarPointIdsByUnit = Object.fromEntries(
    window.grammarCatalog.map(function(u){
      return [
        u.book + "_" + u.unit,
        u.groups.flatMap(function(g){ return g.pointIds; })
      ];
    })
  );
})();
