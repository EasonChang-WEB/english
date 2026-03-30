// grammar.js
// Complete grammar structure for 國七上、國七下、國八上

window.grammarMapBranches = [
  "Be / Sentence Basics",
  "Nouns / Pronouns / Determiners",
  "Verbs / Tenses / Auxiliaries",
  "Questions / WH-questions",
  "Time / Date / Frequency",
  "Prepositions / Location / Directions",
  "Quantifiers / Countability / Amount",
  "Clauses / Connectors",
  "Non-finite Verbs",
  "Future / Plans",
  "Cost / Time Expressions"
];

window.grammarCatalog = [
  {
    "id": "國七上_U1",
    "book": "國七上",
    "unit": "U1",
    "unitOrder": 1,
    "unitTitle": "be動詞、Who/How old、所有格、形容詞",
    "groups": [
      {
        "id": "國七上_U1_G1",
        "title": "be動詞與基本句型",
        "order": 1,
        "pointIds": [
          "G7A_U1_BE_MATCH",
          "G7A_U1_BE_AFFIRM",
          "G7A_U1_BE_NEG",
          "G7A_U1_BE_YN",
          "G7A_U1_BE_SHORT",
          "G7A_U1_BE_SHORT_ANSWER"
        ]
      },
      {
        "id": "國七上_U1_G2",
        "title": "Wh-問句",
        "order": 2,
        "pointIds": [
          "G7A_U1_WHO",
          "G7A_U1_HOW_OLD",
          "G7A_U1_YEARS_OLD",
          "G7A_U1_YEAR_OLD"
        ]
      },
      {
        "id": "國七上_U1_G3",
        "title": "所有格與形容詞",
        "order": 3,
        "pointIds": [
          "G7A_U1_POSS_ADJ",
          "G7A_U1_NOUN_POSS",
          "G7A_U1_APPOSITION",
          "G7A_U1_ADJ_ATTR",
          "G7A_U1_ADJ_PRED",
          "G7A_U1_ADJ_MOD"
        ]
      }
    ]
  },
  {
    "id": "國七上_U2",
    "book": "國七上",
    "unit": "U2",
    "unitOrder": 2,
    "unitTitle": "指示代名詞、名詞複數、位置介系詞",
    "groups": [
      {
        "id": "國七上_U2_G1",
        "title": "指示代名詞",
        "order": 1,
        "pointIds": [
          "G7A_U2_THIS_THAT",
          "G7A_U2_THESE_THOSE",
          "G7A_U2_DEMO_PRON",
          "G7A_U2_DEMO_ANSWER"
        ]
      },
      {
        "id": "國七上_U2_G2",
        "title": "名詞複數",
        "order": 2,
        "pointIds": [
          "G7A_U2_PLURAL_S",
          "G7A_U2_PLURAL_ES",
          "G7A_U2_PLURAL_Y",
          "G7A_U2_PLURAL_VOWEL_Y",
          "G7A_U2_PLURAL_F_FE",
          "G7A_U2_PLURAL_IRREG",
          "G7A_U2_PLURAL_SOUND"
        ]
      },
      {
        "id": "國七上_U2_G3",
        "title": "位置介系詞",
        "order": 3,
        "pointIds": [
          "G7A_U2_PREP_BASIC",
          "G7A_U2_PREP_MORE",
          "G7A_U2_IN_ON_TREE"
        ]
      }
    ]
  },
  {
    "id": "國七上_U3",
    "book": "國七上",
    "unit": "U3",
    "unitOrder": 3,
    "unitTitle": "祈使句、Let's、can、受格、連接詞",
    "groups": [
      {
        "id": "國七上_U3_G1",
        "title": "祈使句與 can",
        "order": 1,
        "pointIds": [
          "G7A_U3_IMP_BASIC",
          "G7A_U3_IMP_PLEASE",
          "G7A_U3_IMP_NEG",
          "G7A_U3_IMP_DO",
          "G7A_U3_LETS",
          "G7A_U3_LETS_NEG",
          "G7A_U3_CAN_BASIC",
          "G7A_U3_CAN_YN",
          "G7A_U3_CAN_REQ"
        ]
      },
      {
        "id": "國七上_U3_G2",
        "title": "受格與連接詞",
        "order": 2,
        "pointIds": [
          "G7A_U3_OBJ_PRON",
          "G7A_U3_AND_OR_BUT"
        ]
      }
    ]
  },
  {
    "id": "國七上_U4",
    "book": "國七上",
    "unit": "U4",
    "unitOrder": 4,
    "unitTitle": "時間問答、時間介系詞、現在進行式",
    "groups": [
      {
        "id": "國七上_U4_G1",
        "title": "時間問答",
        "order": 1,
        "pointIds": [
          "G7A_U4_WHAT_DAY",
          "G7A_U4_WHAT_TIME",
          "G7A_U4_TIME_READING",
          "G7A_U4_TIME_PREP"
        ]
      },
      {
        "id": "國七上_U4_G2",
        "title": "現在進行式",
        "order": 2,
        "pointIds": [
          "G7A_U4_PRES_PROG",
          "G7A_U4_VING_RULES",
          "G7A_U4_PRES_PROG_NEG_YN",
          "G7A_U4_WHAT_DOING",
          "G7A_U4_PROG_AND"
        ]
      }
    ]
  },
  {
    "id": "國七上_U5",
    "book": "國七上",
    "unit": "U5",
    "unitOrder": 5,
    "unitTitle": "數字、序數、日期、When、before/after",
    "groups": [
      {
        "id": "國七上_U5_G1",
        "title": "日期與序數",
        "order": 1,
        "pointIds": [
          "G7A_U5_CARDINAL",
          "G7A_U5_ORDINAL",
          "G7A_U5_ORDINAL_SPELL",
          "G7A_U5_DATE_Q",
          "G7A_U5_DATE_ANSWER",
          "G7A_U5_MONTHS",
          "G7A_U5_WHEN",
          "G7A_U5_BEFORE_AFTER"
        ]
      }
    ]
  },
  {
    "id": "國七上_U6",
    "book": "國七上",
    "unit": "U6",
    "unitOrder": 6,
    "unitTitle": "there is/are、some/any、數量",
    "groups": [
      {
        "id": "國七上_U6_G1",
        "title": "there be 與數量",
        "order": 1,
        "pointIds": [
          "G7A_U6_THERE_BE",
          "G7A_U6_THERE_NEG",
          "G7A_U6_THERE_YN",
          "G7A_U6_SOME_ANY",
          "G7A_U6_AMOUNT_BASIC",
          "G7A_U6_THERE_LOCATION",
          "G7A_U6_THERE_PROG"
        ]
      }
    ]
  },
  {
    "id": "國七下_U1",
    "book": "國七下",
    "unit": "U1",
    "unitOrder": 1,
    "unitTitle": "一般現在式、do/does、have/has、How tall",
    "groups": [
      {
        "id": "國七下_U1_G1",
        "title": "一般現在式",
        "order": 1,
        "pointIds": [
          "G7B_U1_PRES_SIMPLE",
          "G7B_U1_THIRD_SING",
          "G7B_U1_DO_DOES",
          "G7B_U1_DONT_DOESNT",
          "G7B_U1_WHAT_DO",
          "G7B_U1_FREQ_TIME",
          "G7B_U1_DO_EMPH",
          "G7B_U1_HAVE_HAS",
          "G7B_U1_DONT_HAVE",
          "G7B_U1_HOW_TALL"
        ]
      }
    ]
  },
  {
    "id": "國七下_U2",
    "book": "國七下",
    "unit": "U2",
    "unitOrder": 2,
    "unitTitle": "頻率副詞、How often",
    "groups": [
      {
        "id": "國七下_U2_G1",
        "title": "頻率副詞",
        "order": 1,
        "pointIds": [
          "G7B_U2_FREQ_LIST",
          "G7B_U2_FREQ_AFTER_BE",
          "G7B_U2_FREQ_BEFORE_V",
          "G7B_U2_NEVER",
          "G7B_U2_FREQ_SENT_POS",
          "G7B_U2_HOW_OFTEN",
          "G7B_U2_FREQ_PHRASES",
          "G7B_U2_ALWAYS_PROG"
        ]
      }
    ]
  },
  {
    "id": "國七下_U3",
    "book": "國七下",
    "unit": "U3",
    "unitOrder": 3,
    "unitTitle": "可數/不可數、Which、How much、one/ones",
    "groups": [
      {
        "id": "國七下_U3_G1",
        "title": "可數不可數與問價",
        "order": 1,
        "pointIds": [
          "G7B_U3_COUNT_UNCOUNT",
          "G7B_U3_UNCOUNT_RULES",
          "G7B_U3_MUCH_LOT_SOME_ANY",
          "G7B_U3_DUAL_USE",
          "G7B_U3_WHICH",
          "G7B_U3_WHICH_NOUN",
          "G7B_U3_WHICH_WHAT",
          "G7B_U3_HOW_MUCH_PRICE",
          "G7B_U3_PRICE_EXPR",
          "G7B_U3_ONE_ONES",
          "G7B_U3_WHICH_ONE"
        ]
      }
    ]
  },
  {
    "id": "國七下_U4",
    "book": "國七下",
    "unit": "U4",
    "unitOrder": 4,
    "unitTitle": "How many/How much、because、so、why",
    "groups": [
      {
        "id": "國七下_U4_G1",
        "title": "數量與原因句",
        "order": 1,
        "pointIds": [
          "G7B_U4_MEASURE_UNCOUNT",
          "G7B_U4_MEASURE_COUNT",
          "G7B_U4_HOW_MANY",
          "G7B_U4_HOW_MANY_THERE",
          "G7B_U4_HOW_MANY_DOES",
          "G7B_U4_HOW_MUCH_AMOUNT",
          "G7B_U4_HOW_MUCH_THERE",
          "G7B_U4_BECAUSE",
          "G7B_U4_BECAUSE_FIRST",
          "G7B_U4_BECAUSE_OF",
          "G7B_U4_SO",
          "G7B_U4_WHY",
          "G7B_U4_WHY_NOT"
        ]
      }
    ]
  },
  {
    "id": "國七下_U5",
    "book": "國七下",
    "unit": "U5",
    "unitOrder": 5,
    "unitTitle": "過去式 be、一般動詞規則變化、did",
    "groups": [
      {
        "id": "國七下_U5_G1",
        "title": "過去簡單式",
        "order": 1,
        "pointIds": [
          "G7B_U5_PAST_BE",
          "G7B_U5_PAST_TIME",
          "G7B_U5_PAST_BE_NEG",
          "G7B_U5_PAST_BE_Q",
          "G7B_U5_REGULAR_ED",
          "G7B_U5_ED_SPELLING",
          "G7B_U5_ED_PRON",
          "G7B_U5_DID",
          "G7B_U5_PAST_WH"
        ]
      }
    ]
  },
  {
    "id": "國七下_U6",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "unitTitle": "不規則動詞過去式",
    "groups": [
      {
        "id": "國七下_U6_G1",
        "title": "不規則動詞過去式",
        "order": 1,
        "pointIds": [
          "G7B_U6_IRREGULAR_CONCEPT",
          "G7B_U6_IRREGULAR_TYPES",
          "G7B_U6_LET_LET",
          "G7B_U6_PUT_PUT",
          "G7B_U6_READ_READ",
          "G7B_U6_BUILD_BUILT",
          "G7B_U6_BUY_BOUGHT",
          "G7B_U6_COME_CAME",
          "G7B_U6_DO_DID",
          "G7B_U6_DRINK_DRANK",
          "G7B_U6_DRIVE_DROVE",
          "G7B_U6_EAT_ATE",
          "G7B_U6_FALL_FELL",
          "G7B_U6_FLY_FLEW",
          "G7B_U6_GET_GOT",
          "G7B_U6_GO_WENT",
          "G7B_U6_HAVE_HAD",
          "G7B_U6_KNOW_KNEW",
          "G7B_U6_LOSE_LOST",
          "G7B_U6_MAKE_MADE",
          "G7B_U6_MEET_MET",
          "G7B_U6_RIDE_RODE",
          "G7B_U6_RUN_RAN",
          "G7B_U6_SAY_SAID",
          "G7B_U6_SEE_SAW",
          "G7B_U6_SELL_SOLD",
          "G7B_U6_SHAKE_SHOOK",
          "G7B_U6_SING_SANG",
          "G7B_U6_SIT_SAT",
          "G7B_U6_SLEEP_SLEPT",
          "G7B_U6_STAND_STOOD",
          "G7B_U6_SWIM_SWAM",
          "G7B_U6_TAKE_TOOK",
          "G7B_U6_THINK_THOUGHT",
          "G7B_U6_WAKE_WOKE",
          "G7B_U6_WEAR_WORE",
          "G7B_U6_WRITE_WROTE",
          "G7B_U6_CAN_COULD",
          "G7B_U6_MAY_MIGHT"
        ]
      }
    ]
  },
  {
    "id": "國八上_U1",
    "book": "國八上",
    "unit": "U1",
    "unitOrder": 1,
    "unitTitle": "天氣詢問、授與動詞",
    "groups": [
      {
        "id": "國八上_U1_G1",
        "title": "天氣與授與動詞",
        "order": 1,
        "pointIds": [
          "G8A_U1_WEATHER_HOW",
          "G8A_U1_WEATHER_LIKE",
          "G8A_U1_WEATHER_ADJ",
          "G8A_U1_WEATHER_VERB",
          "G8A_U1_WEATHER_NOUN",
          "G8A_U1_DOUBLE_OBJECT",
          "G8A_U1_TO_FOR",
          "G8A_U1_DOUBLE_OBJECT_PRON"
        ]
      }
    ]
  },
  {
    "id": "國八上_U2",
    "book": "國八上",
    "unit": "U2",
    "unitOrder": 2,
    "unitTitle": "時間連接詞、所有格代名詞",
    "groups": [
      {
        "id": "國八上_U2_G1",
        "title": "時間從屬連接詞與所有格代名詞",
        "order": 1,
        "pointIds": [
          "G8A_U2_AFTER",
          "G8A_U2_BEFORE",
          "G8A_U2_WHEN_CONN",
          "G8A_U2_TIME_TENSE",
          "G8A_U2_FUTURE_TIME_CLAUSE",
          "G8A_U2_AFTER_VING",
          "G8A_U2_AFTER_BEFORE_N",
          "G8A_U2_POSS_PRON_TABLE",
          "G8A_U2_WHOSE",
          "G8A_U2_DOUBLE_GENITIVE"
        ]
      }
    ]
  },
  {
    "id": "國八上_U3",
    "book": "國八上",
    "unit": "U3",
    "unitOrder": 3,
    "unitTitle": "過去進行式、when、片語動詞",
    "groups": [
      {
        "id": "國八上_U3_G1",
        "title": "過去進行式與片語動詞",
        "order": 1,
        "pointIds": [
          "G8A_U3_PAST_PROG",
          "G8A_U3_PAST_PROG_NEG",
          "G8A_U3_PAST_PROG_YN",
          "G8A_U3_PAST_PROG_WH",
          "G8A_U3_PAST_SIMPLE_VS_PROG",
          "G8A_U3_WHEN_PAST",
          "G8A_U3_CONT_INSTANT",
          "G8A_U3_REVERSE_TIME",
          "G8A_U3_PHRASAL_VERBS",
          "G8A_U3_SEPARABLE_PV",
          "G8A_U3_INSEPARABLE_PV"
        ]
      }
    ]
  },
  {
    "id": "國八上_U4",
    "book": "國八上",
    "unit": "U4",
    "unitOrder": 4,
    "unitTitle": "不定詞、動名詞、虛主詞 it",
    "groups": [
      {
        "id": "國八上_U4_G1",
        "title": "不定詞、動名詞與虛主詞 it",
        "order": 1,
        "pointIds": [
          "G8A_U4_TO_V",
          "G8A_U4_TO_V_OBJECT",
          "G8A_U4_NOT_TO_V",
          "G8A_U4_GERUND",
          "G8A_U4_TO_V_VING_BOTH",
          "G8A_U4_REMEMBER",
          "G8A_U4_STOP",
          "G8A_U4_TRY",
          "G8A_U4_ADJ_TO_V",
          "G8A_U4_PREP_VING",
          "G8A_U4_BE_ADJ_PREP_VING",
          "G8A_U4_VERB_PREP_VING",
          "G8A_U4_GERUND_SUBJECT",
          "G8A_U4_GERUND_POSSESS",
          "G8A_U4_GERUND_COMPOUND",
          "G8A_U4_GERUND_PART",
          "G8A_U4_DUMMY_IT",
          "G8A_U4_FOR_OF_TO_V"
        ]
      }
    ]
  },
  {
    "id": "國八上_U5",
    "book": "國八上",
    "unit": "U5",
    "unitOrder": 5,
    "unitTitle": "交通方式、位置詢問、指路",
    "groups": [
      {
        "id": "國八上_U5_G1",
        "title": "交通與指路",
        "order": 1,
        "pointIds": [
          "G8A_U5_HOW_TRANSPORT",
          "G8A_U5_BY_TRANSPORT",
          "G8A_U5_ON_FOOT",
          "G8A_U5_GET_TO",
          "G8A_U5_TRANSPORT_VERBS",
          "G8A_U5_RIDE_ON_IN",
          "G8A_U5_WHERE_LOCATION",
          "G8A_U5_LOCATION_PREPS",
          "G8A_U5_DIRECTIONS_BASIC",
          "G8A_U5_DIRECTIONS_MORE",
          "G8A_U5_DISTANCE",
          "G8A_U5_GET_OFF",
          "G8A_U5_ASK_DIRECTIONS"
        ]
      }
    ]
  },
  {
    "id": "國八上_U6",
    "book": "國八上",
    "unit": "U6",
    "unitOrder": 6,
    "unitTitle": "未來式、花費金錢、花費時間",
    "groups": [
      {
        "id": "國八上_U6_G1",
        "title": "未來式與花費表達",
        "order": 1,
        "pointIds": [
          "G8A_U6_WILL",
          "G8A_U6_WONT",
          "G8A_U6_WILL_YN",
          "G8A_U6_BE_GOING_TO",
          "G8A_U6_BE_GOING_TO_Q",
          "G8A_U6_FUTURE_TIME_ADV",
          "G8A_U6_FUTURE_COMPARE",
          "G8A_U6_FUTURE_WH",
          "G8A_U6_FUTURE_TIME_CLAUSE2",
          "G8A_U6_COST",
          "G8A_U6_SPEND_MONEY",
          "G8A_U6_PAY",
          "G8A_U6_PRICE_Q",
          "G8A_U6_TAKE_TIME",
          "G8A_U6_SPEND_TIME",
          "G8A_U6_TAKE_SPEND",
          "G8A_U6_HOW_LONG"
        ]
      }
    ]
  }
];

window.grammarPoints = [
  {
    "id": "G7A_U1_BE_MATCH",
    "book": "國七上",
    "unit": "U1",
    "unitOrder": 1,
    "group": "be動詞與基本句型",
    "mapBranch": "Be / Sentence Basics",
    "subGroup": "be-match",
    "title": "be動詞與主詞搭配",
    "pattern": "I am / You are / He She It is / We They are",
    "explanation": "依主詞不同，be動詞要改成 am / is / are。",
    "examples": [
      "I am a student.",
      "She is my teacher.",
      "They are my friends."
    ],
    "commonErrors": [
      "He are my brother.",
      "They is my classmates."
    ],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U1_BE_AFFIRM",
    "book": "國七上",
    "unit": "U1",
    "unitOrder": 1,
    "group": "be動詞與基本句型",
    "mapBranch": "Be / Sentence Basics",
    "subGroup": "be-affirm",
    "title": "be動詞肯定句",
    "pattern": "S + be + ...",
    "explanation": "肯定句用 be 動詞表身分、狀態或描述。",
    "examples": [
      "She is my teacher.",
      "We are classmates."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U1_BE_NEG",
    "book": "國七上",
    "unit": "U1",
    "unitOrder": 1,
    "group": "be動詞與基本句型",
    "mapBranch": "Be / Sentence Basics",
    "subGroup": "be-negative",
    "title": "be動詞否定句",
    "pattern": "S + be + not + ...",
    "explanation": "be 動詞否定句在 be 後面加 not。",
    "examples": [
      "She is not my teacher.",
      "I am not Ray."
    ],
    "commonErrors": [
      "She not is my teacher."
    ],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U1_BE_YN",
    "book": "國七上",
    "unit": "U1",
    "unitOrder": 1,
    "group": "be動詞與基本句型",
    "mapBranch": "Be / Sentence Basics",
    "subGroup": "be-yn",
    "title": "be動詞疑問句",
    "pattern": "Be + S + ... ?",
    "explanation": "疑問句把 be 動詞移到主詞前。",
    "examples": [
      "Is she your teacher?",
      "Are you a student?"
    ],
    "commonErrors": [
      "She is your teacher?"
    ],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U1_BE_SHORT",
    "book": "國七上",
    "unit": "U1",
    "unitOrder": 1,
    "group": "be動詞與基本句型",
    "mapBranch": "Be / Sentence Basics",
    "subGroup": "be-short",
    "title": "be動詞縮寫",
    "pattern": "I'm / you're / he's / isn't / aren't",
    "explanation": "肯定與否定都常有縮寫形式。",
    "examples": [
      "I'm a student.",
      "He isn't busy."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U1_BE_SHORT_ANSWER",
    "book": "國七上",
    "unit": "U1",
    "unitOrder": 1,
    "group": "be動詞與基本句型",
    "mapBranch": "Be / Sentence Basics",
    "subGroup": "short-answer",
    "title": "be問句簡答",
    "pattern": "Yes, S + be. / No, S + be not.",
    "explanation": "be 動詞問句回答時常用簡短回答。",
    "examples": [
      "Yes, I am.",
      "No, he isn't."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U1_WHO",
    "book": "國七上",
    "unit": "U1",
    "unitOrder": 1,
    "group": "Wh-問句",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "who",
    "title": "Who 問人",
    "pattern": "Who + be + S ?",
    "explanation": "Who 用來詢問人名、關係或身分。",
    "examples": [
      "Who is he?",
      "Who is the girl?"
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U1_HOW_OLD",
    "book": "國七上",
    "unit": "U1",
    "unitOrder": 1,
    "group": "Wh-問句",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "how-old",
    "title": "How old 問年齡",
    "pattern": "How old + be + S ?",
    "explanation": "How old 用來詢問年齡。",
    "examples": [
      "How old are you?",
      "She is thirteen years old."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U1_YEARS_OLD",
    "book": "國七上",
    "unit": "U1",
    "unitOrder": 1,
    "group": "Wh-問句",
    "mapBranch": "Time / Date / Frequency",
    "subGroup": "years-old",
    "title": "years old / month(s) old",
    "pattern": "數字 + years old",
    "explanation": "描述年齡時常用 years old。",
    "examples": [
      "He is ten years old.",
      "The baby is six months old."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U1_YEAR_OLD",
    "book": "國七上",
    "unit": "U1",
    "unitOrder": 1,
    "group": "Wh-問句",
    "mapBranch": "Nouns / Pronouns / Determiners",
    "subGroup": "year-old",
    "title": "複合形容詞 year-old",
    "pattern": "數字-year-old + 名詞",
    "explanation": "當 age 作形容詞時，year 不加 s。",
    "examples": [
      "an eight-year-old girl"
    ],
    "commonErrors": [
      "an eight-years-old girl"
    ],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U1_POSS_ADJ",
    "book": "國七上",
    "unit": "U1",
    "unitOrder": 1,
    "group": "所有格與形容詞",
    "mapBranch": "Nouns / Pronouns / Determiners",
    "subGroup": "poss-adj",
    "title": "所有格形容詞",
    "pattern": "my / your / his / her / its / our / their + N",
    "explanation": "所有格形容詞後面要接名詞。",
    "examples": [
      "This is my book.",
      "Their house is big."
    ],
    "commonErrors": [
      "This is mine book."
    ],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U1_NOUN_POSS",
    "book": "國七上",
    "unit": "U1",
    "unitOrder": 1,
    "group": "所有格與形容詞",
    "mapBranch": "Nouns / Pronouns / Determiners",
    "subGroup": "noun-poss",
    "title": "名詞所有格",
    "pattern": "名詞 + 's",
    "explanation": "可用名詞所有格表示『某人的…』。",
    "examples": [
      "Tom's book is new."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U1_APPOSITION",
    "book": "國七上",
    "unit": "U1",
    "unitOrder": 1,
    "group": "所有格與形容詞",
    "mapBranch": "Be / Sentence Basics",
    "subGroup": "apposition",
    "title": "同位語",
    "pattern": "名詞 , 名詞",
    "explanation": "同位語可補充人名或身分說明。",
    "examples": [
      "She is my sister, Sally."
    ],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U1_ADJ_ATTR",
    "book": "國七上",
    "unit": "U1",
    "unitOrder": 1,
    "group": "所有格與形容詞",
    "mapBranch": "Nouns / Pronouns / Determiners",
    "subGroup": "adj-before-n",
    "title": "形容詞放名詞前",
    "pattern": "a/an + adj + N",
    "explanation": "形容詞可放在名詞前修飾名詞。",
    "examples": [
      "a big box",
      "a new car"
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U1_ADJ_PRED",
    "book": "國七上",
    "unit": "U1",
    "unitOrder": 1,
    "group": "所有格與形容詞",
    "mapBranch": "Be / Sentence Basics",
    "subGroup": "adj-after-be",
    "title": "形容詞放 be 後",
    "pattern": "S + be + adj",
    "explanation": "形容詞也可放在 be 動詞後描述主詞。",
    "examples": [
      "She is happy.",
      "The car is old."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U1_ADJ_MOD",
    "book": "國七上",
    "unit": "U1",
    "unitOrder": 1,
    "group": "所有格與形容詞",
    "mapBranch": "Be / Sentence Basics",
    "subGroup": "very-so-really",
    "title": "形容詞修飾副詞",
    "pattern": "very / so / really + adj",
    "explanation": "可加強形容詞程度。",
    "examples": [
      "She is very happy.",
      "The box is really big."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U2_THIS_THAT",
    "book": "國七上",
    "unit": "U2",
    "unitOrder": 2,
    "group": "指示代名詞",
    "mapBranch": "Nouns / Pronouns / Determiners",
    "subGroup": "this-that",
    "title": "this / that",
    "pattern": "this/that + 單數名詞",
    "explanation": "this 表近的單數，that 表遠的單數。",
    "examples": [
      "This book is mine.",
      "That house is old."
    ],
    "commonErrors": [
      "These book is mine."
    ],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U2_THESE_THOSE",
    "book": "國七上",
    "unit": "U2",
    "unitOrder": 2,
    "group": "指示代名詞",
    "mapBranch": "Nouns / Pronouns / Determiners",
    "subGroup": "these-those",
    "title": "these / those",
    "pattern": "these/those + 複數名詞",
    "explanation": "these 表近的複數，those 表遠的複數。",
    "examples": [
      "These books are new.",
      "Those students are busy."
    ],
    "commonErrors": [
      "This books are new."
    ],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U2_DEMO_PRON",
    "book": "國七上",
    "unit": "U2",
    "unitOrder": 2,
    "group": "指示代名詞",
    "mapBranch": "Nouns / Pronouns / Determiners",
    "subGroup": "demo-pronoun",
    "title": "指示代名詞代替名詞",
    "pattern": "This is ... / Those are ...",
    "explanation": "this/that/these/those 可直接代替名詞。",
    "examples": [
      "This is a pen.",
      "Those are my shoes."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U2_DEMO_ANSWER",
    "book": "國七上",
    "unit": "U2",
    "unitOrder": 2,
    "group": "指示代名詞",
    "mapBranch": "Nouns / Pronouns / Determiners",
    "subGroup": "demo-answer",
    "title": "指示代名詞問答",
    "pattern": "What is this? / What are those?",
    "explanation": "回答可用 this/that/these/those，也可用 it/they。",
    "examples": [
      "What are those? They are notebooks."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U2_PLURAL_S",
    "book": "國七上",
    "unit": "U2",
    "unitOrder": 2,
    "group": "名詞複數",
    "mapBranch": "Nouns / Pronouns / Determiners",
    "subGroup": "plural-s",
    "title": "名詞複數 +s",
    "pattern": "N + s",
    "explanation": "一般可數名詞複數直接加 s。",
    "examples": [
      "book → books",
      "chair → chairs"
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U2_PLURAL_ES",
    "book": "國七上",
    "unit": "U2",
    "unitOrder": 2,
    "group": "名詞複數",
    "mapBranch": "Nouns / Pronouns / Determiners",
    "subGroup": "plural-es",
    "title": "名詞複數 +es",
    "pattern": "N + es",
    "explanation": "字尾為 s, x, sh, ch 等常加 es。",
    "examples": [
      "bus → buses",
      "box → boxes",
      "watch → watches"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U2_PLURAL_Y",
    "book": "國七上",
    "unit": "U2",
    "unitOrder": 2,
    "group": "名詞複數",
    "mapBranch": "Nouns / Pronouns / Determiners",
    "subGroup": "plural-y",
    "title": "子音+y → ies",
    "pattern": "子音+y → ies",
    "explanation": "字尾子音+y 的名詞變複數時改 y 為 ies。",
    "examples": [
      "party → parties",
      "family → families"
    ],
    "commonErrors": [
      "boy → boies"
    ],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U2_PLURAL_VOWEL_Y",
    "book": "國七上",
    "unit": "U2",
    "unitOrder": 2,
    "group": "名詞複數",
    "mapBranch": "Nouns / Pronouns / Determiners",
    "subGroup": "plural-vowel-y",
    "title": "母音+y 直接加 s",
    "pattern": "母音+y + s",
    "explanation": "字尾母音+y 的名詞複數直接加 s。",
    "examples": [
      "boy → boys",
      "monkey → monkeys"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U2_PLURAL_F_FE",
    "book": "國七上",
    "unit": "U2",
    "unitOrder": 2,
    "group": "名詞複數",
    "mapBranch": "Nouns / Pronouns / Determiners",
    "subGroup": "plural-f-fe",
    "title": "f/fe → ves",
    "pattern": "f/fe → ves",
    "explanation": "部分字尾 f/fe 的名詞變複數要改成 ves。",
    "examples": [
      "wolf → wolves",
      "wife → wives"
    ],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U2_PLURAL_IRREG",
    "book": "國七上",
    "unit": "U2",
    "unitOrder": 2,
    "group": "名詞複數",
    "mapBranch": "Nouns / Pronouns / Determiners",
    "subGroup": "plural-irregular",
    "title": "不規則複數",
    "pattern": "man/men, child/children ...",
    "explanation": "有些名詞複數不依一般規則變化。",
    "examples": [
      "man → men",
      "woman → women",
      "child → children",
      "mouse → mice"
    ],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U2_PLURAL_SOUND",
    "book": "國七上",
    "unit": "U2",
    "unitOrder": 2,
    "group": "名詞複數",
    "mapBranch": "Nouns / Pronouns / Determiners",
    "subGroup": "plural-pronunciation",
    "title": "複數發音",
    "pattern": "[s] / [z] / [ɪz]",
    "explanation": "名詞複數字尾發音可分三類。",
    "examples": [
      "cats [s]",
      "dogs [z]",
      "boxes [iz]"
    ],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U2_PREP_BASIC",
    "book": "國七上",
    "unit": "U2",
    "unitOrder": 2,
    "group": "位置介系詞",
    "mapBranch": "Prepositions / Location / Directions",
    "subGroup": "in-on-under",
    "title": "基本位置介系詞",
    "pattern": "in / on / under",
    "explanation": "用來描述物品所在位置。",
    "examples": [
      "The ball is in the box.",
      "The cat is under the table."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U2_PREP_MORE",
    "book": "國七上",
    "unit": "U2",
    "unitOrder": 2,
    "group": "位置介系詞",
    "mapBranch": "Prepositions / Location / Directions",
    "subGroup": "more-location-preps",
    "title": "其他位置介系詞",
    "pattern": "behind / in front of / next to / near / between / above / at",
    "explanation": "更細緻描述相對位置。",
    "examples": [
      "The tree is behind my house.",
      "The school is between the bank and the park."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U2_IN_ON_TREE",
    "book": "國七上",
    "unit": "U2",
    "unitOrder": 2,
    "group": "位置介系詞",
    "mapBranch": "Prepositions / Location / Directions",
    "subGroup": "in-vs-on-tree",
    "title": "in the tree / on the tree",
    "pattern": "in the tree vs on the tree",
    "explanation": "描述長在樹上與掛在樹上的差別。",
    "examples": [
      "There are birds in the tree.",
      "There are apples on the tree."
    ],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U3_IMP_BASIC",
    "book": "國七上",
    "unit": "U3",
    "unitOrder": 3,
    "group": "祈使句與 can",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "imp-basic",
    "title": "祈使句基本型",
    "pattern": "V + ...",
    "explanation": "祈使句用原形動詞開頭，主詞 you 常省略。",
    "examples": [
      "Sit down.",
      "Open the door."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U3_IMP_PLEASE",
    "book": "國七上",
    "unit": "U3",
    "unitOrder": 3,
    "group": "祈使句與 can",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "imp-please",
    "title": "please 在祈使句中",
    "pattern": "Please + V / V, please.",
    "explanation": "please 可放句首或句尾，使語氣較客氣。",
    "examples": [
      "Please open the door.",
      "Sit down, please."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U3_IMP_NEG",
    "book": "國七上",
    "unit": "U3",
    "unitOrder": 3,
    "group": "祈使句與 can",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "imp-neg",
    "title": "否定祈使句",
    "pattern": "Don't + V",
    "explanation": "否定祈使句在原形動詞前加 Don't。",
    "examples": [
      "Don't run.",
      "Please don't open the door."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U3_IMP_DO",
    "book": "國七上",
    "unit": "U3",
    "unitOrder": 3,
    "group": "祈使句與 can",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "imp-do",
    "title": "Do + V 強調",
    "pattern": "Do + 原形動詞",
    "explanation": "Do 可用來加強祈使句語氣。",
    "examples": [
      "Do close the door."
    ],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U3_LETS",
    "book": "國七上",
    "unit": "U3",
    "unitOrder": 3,
    "group": "祈使句與 can",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "lets",
    "title": "Let's 句型",
    "pattern": "Let's + V",
    "explanation": "Let's 用來提出一起做某事的建議。",
    "examples": [
      "Let's play games.",
      "Let's go to school."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U3_LETS_NEG",
    "book": "國七上",
    "unit": "U3",
    "unitOrder": 3,
    "group": "祈使句與 can",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "lets-neg",
    "title": "Let's not",
    "pattern": "Let's not + V",
    "explanation": "表示『我們不要…』。",
    "examples": [
      "Let's not be late."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U3_CAN_BASIC",
    "book": "國七上",
    "unit": "U3",
    "unitOrder": 3,
    "group": "祈使句與 can",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "can-basic",
    "title": "can 表能力",
    "pattern": "S + can + V",
    "explanation": "can 後接原形動詞，表示能力。",
    "examples": [
      "I can sing.",
      "She can dance."
    ],
    "commonErrors": [
      "She can sings."
    ],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U3_CAN_YN",
    "book": "國七上",
    "unit": "U3",
    "unitOrder": 3,
    "group": "祈使句與 can",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "can-neg-yn",
    "title": "can 問句與否定",
    "pattern": "Can + S + V ? / can't",
    "explanation": "can 可做問句、否定與短答。",
    "examples": [
      "Can he swim? Yes, he can.",
      "I can't drive."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U3_CAN_REQ",
    "book": "國七上",
    "unit": "U3",
    "unitOrder": 3,
    "group": "祈使句與 can",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "can-request",
    "title": "can 表請求",
    "pattern": "Can you + V ?",
    "explanation": "can 也能用來提出請求。",
    "examples": [
      "Can you help me?"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U3_OBJ_PRON",
    "book": "國七上",
    "unit": "U3",
    "unitOrder": 3,
    "group": "受格與連接詞",
    "mapBranch": "Nouns / Pronouns / Determiners",
    "subGroup": "obj-pron",
    "title": "受格",
    "pattern": "me / him / her / us / them",
    "explanation": "受格可作動詞受詞或介系詞受詞。",
    "examples": [
      "Please help me.",
      "The gift is for her."
    ],
    "commonErrors": [
      "Please help I."
    ],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U3_AND_OR_BUT",
    "book": "國七上",
    "unit": "U3",
    "unitOrder": 3,
    "group": "受格與連接詞",
    "mapBranch": "Clauses / Connectors",
    "subGroup": "and-or-but",
    "title": "對等連接詞",
    "pattern": "and / or / but",
    "explanation": "用來連接字、片語或子句。",
    "examples": [
      "She is young and beautiful.",
      "Do you want tea or coffee?",
      "He is tired, but he is happy."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U4_WHAT_DAY",
    "book": "國七上",
    "unit": "U4",
    "unitOrder": 4,
    "group": "時間問答",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "what-day",
    "title": "What day 問星期",
    "pattern": "What day is it ... ?",
    "explanation": "用 What day 詢問星期幾。",
    "examples": [
      "What day is it today? It is Sunday."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U4_WHAT_TIME",
    "book": "國七上",
    "unit": "U4",
    "unitOrder": 4,
    "group": "時間問答",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "what-time",
    "title": "What time 問時間",
    "pattern": "What time is it?",
    "explanation": "用 What time 詢問幾點。",
    "examples": [
      "What time is it? It is six o'clock."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U4_TIME_READING",
    "book": "國七上",
    "unit": "U4",
    "unitOrder": 4,
    "group": "時間問答",
    "mapBranch": "Time / Date / Frequency",
    "subGroup": "time-reading",
    "title": "時間表達",
    "pattern": "o'clock / half past / quarter past / quarter to",
    "explanation": "可用多種方式表達時刻。",
    "examples": [
      "It's half past two.",
      "It's a quarter to eleven."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U4_TIME_PREP",
    "book": "國七上",
    "unit": "U4",
    "unitOrder": 4,
    "group": "時間問答",
    "mapBranch": "Prepositions / Location / Directions",
    "subGroup": "time-prep",
    "title": "時間介系詞",
    "pattern": "at / on / in",
    "explanation": "at 用時刻，on 用日期/星期，in 用較長時間。",
    "examples": [
      "at 7 p.m.",
      "on Sunday",
      "in the morning"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U4_PRES_PROG",
    "book": "國七上",
    "unit": "U4",
    "unitOrder": 4,
    "group": "現在進行式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "pres-prog",
    "title": "現在進行式",
    "pattern": "S + be + V-ing",
    "explanation": "表示正在進行的動作。",
    "examples": [
      "She is singing.",
      "They are playing."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U4_VING_RULES",
    "book": "國七上",
    "unit": "U4",
    "unitOrder": 4,
    "group": "現在進行式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "ving-rules",
    "title": "V-ing 變化規則",
    "pattern": "play→playing / ride→riding / run→running",
    "explanation": "現在分詞有加 ing、去 e、雙寫等變化。",
    "examples": [
      "play → playing",
      "ride → riding",
      "run → running"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U4_PRES_PROG_NEG_YN",
    "book": "國七上",
    "unit": "U4",
    "unitOrder": 4,
    "group": "現在進行式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "pres-prog-neg-yn",
    "title": "現在進行式否定與問句",
    "pattern": "be not V-ing / Be + S + V-ing ?",
    "explanation": "進行式否定在 be 後加 not；問句把 be 提前。",
    "examples": [
      "She isn't running.",
      "Is she singing?"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U4_WHAT_DOING",
    "book": "國七上",
    "unit": "U4",
    "unitOrder": 4,
    "group": "現在進行式",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "what-doing",
    "title": "What ... doing 問句",
    "pattern": "What + be + S + doing ?",
    "explanation": "用來問正在做什麼。",
    "examples": [
      "What are you doing?"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U4_PROG_AND",
    "book": "國七上",
    "unit": "U4",
    "unitOrder": 4,
    "group": "現在進行式",
    "mapBranch": "Clauses / Connectors",
    "subGroup": "prog-and",
    "title": "進行式連接 and",
    "pattern": "S be V-ing and V-ing",
    "explanation": "可把同時進行的兩個動作用 and 連接。",
    "examples": [
      "She is singing and dancing."
    ],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U5_CARDINAL",
    "book": "國七上",
    "unit": "U5",
    "unitOrder": 5,
    "group": "日期與序數",
    "mapBranch": "Time / Date / Frequency",
    "subGroup": "cardinal",
    "title": "基數",
    "pattern": "one, two, three ...",
    "explanation": "基數用來表示數量。",
    "examples": [
      "five books",
      "two apples"
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U5_ORDINAL",
    "book": "國七上",
    "unit": "U5",
    "unitOrder": 5,
    "group": "日期與序數",
    "mapBranch": "Time / Date / Frequency",
    "subGroup": "ordinal",
    "title": "序數",
    "pattern": "first, second, third ...",
    "explanation": "序數用來表示順序、日期。",
    "examples": [
      "the first day",
      "July twenty-first"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U5_ORDINAL_SPELL",
    "book": "國七上",
    "unit": "U5",
    "unitOrder": 5,
    "group": "日期與序數",
    "mapBranch": "Time / Date / Frequency",
    "subGroup": "ordinal-spelling",
    "title": "序數拼字變化",
    "pattern": "one→first / two→second / three→third",
    "explanation": "部分序數拼字變化不規則。",
    "examples": [],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U5_DATE_Q",
    "book": "國七上",
    "unit": "U5",
    "unitOrder": 5,
    "group": "日期與序數",
    "mapBranch": "Time / Date / Frequency",
    "subGroup": "date-question",
    "title": "What's the date",
    "pattern": "What's the date today?",
    "explanation": "用來詢問今天幾月幾日。",
    "examples": [
      "What's the date today? It's May 10."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U5_DATE_ANSWER",
    "book": "國七上",
    "unit": "U5",
    "unitOrder": 5,
    "group": "日期與序數",
    "mapBranch": "Time / Date / Frequency",
    "subGroup": "date-answer",
    "title": "日期回答",
    "pattern": "It's May 10. / It's the tenth of May.",
    "explanation": "日期有不同英語表達方式。",
    "examples": [],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U5_MONTHS",
    "book": "國七上",
    "unit": "U5",
    "unitOrder": 5,
    "group": "日期與序數",
    "mapBranch": "Time / Date / Frequency",
    "subGroup": "months",
    "title": "月份與日期介系詞",
    "pattern": "in + 月 / on + 日期",
    "explanation": "月份用 in，日期用 on。",
    "examples": [
      "in January",
      "on July 14"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U5_WHEN",
    "book": "國七上",
    "unit": "U5",
    "unitOrder": 5,
    "group": "日期與序數",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "when",
    "title": "When 問句",
    "pattern": "When is ... ?",
    "explanation": "When 用來詢問時間或日期。",
    "examples": [
      "When is Father's Day? It's on August 8."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U5_BEFORE_AFTER",
    "book": "國七上",
    "unit": "U5",
    "unitOrder": 5,
    "group": "日期與序數",
    "mapBranch": "Time / Date / Frequency",
    "subGroup": "before-after",
    "title": "before / after",
    "pattern": "before + N / after + N",
    "explanation": "before 和 after 可表示前後時間關係。",
    "examples": [
      "before dinner",
      "after school"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U6_THERE_BE",
    "book": "國七上",
    "unit": "U6",
    "unitOrder": 6,
    "group": "there be 與數量",
    "mapBranch": "Be / Sentence Basics",
    "subGroup": "there-be",
    "title": "there is / there are",
    "pattern": "There is + 單數 / There are + 複數",
    "explanation": "用 there be 表示某地有某物。",
    "examples": [
      "There is a pen on the desk.",
      "There are two dogs in the park."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U6_THERE_NEG",
    "book": "國七上",
    "unit": "U6",
    "unitOrder": 6,
    "group": "there be 與數量",
    "mapBranch": "Be / Sentence Basics",
    "subGroup": "there-neg",
    "title": "there be 否定",
    "pattern": "There isn't ... / There aren't ...",
    "explanation": "there be 否定常縮寫成 isn't / aren't。",
    "examples": [
      "There isn't a cat here.",
      "There aren't any books here."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U6_THERE_YN",
    "book": "國七上",
    "unit": "U6",
    "unitOrder": 6,
    "group": "there be 與數量",
    "mapBranch": "Be / Sentence Basics",
    "subGroup": "there-yn",
    "title": "there be 問句",
    "pattern": "Is there ... ? / Are there ... ?",
    "explanation": "there be 問句把 be 提前。",
    "examples": [
      "Is there a park nearby?",
      "Are there any apples on the table?"
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U6_SOME_ANY",
    "book": "國七上",
    "unit": "U6",
    "unitOrder": 6,
    "group": "there be 與數量",
    "mapBranch": "Quantifiers / Countability / Amount",
    "subGroup": "some-any",
    "title": "some / any",
    "pattern": "肯定句多用 some；否定與問句多用 any。",
    "explanation": [
      "There is some candy on the table.",
      "Are there any apples?"
    ],
    "examples": [],
    "commonErrors": 2,
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U6_AMOUNT_BASIC",
    "book": "國七上",
    "unit": "U6",
    "unitOrder": 6,
    "group": "there be 與數量",
    "mapBranch": "Quantifiers / Countability / Amount",
    "subGroup": "amount-basic",
    "title": "數量概念",
    "pattern": "one / two / many / some / any",
    "explanation": "可搭配 there be 或一般名詞使用。",
    "examples": [
      "There are many students here."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U6_THERE_LOCATION",
    "book": "國七上",
    "unit": "U6",
    "unitOrder": 6,
    "group": "there be 與數量",
    "mapBranch": "Be / Sentence Basics",
    "subGroup": "there-location",
    "title": "there be + 地點",
    "pattern": "There is/are + N + 地點",
    "explanation": "可同時表達存在與所在位置。",
    "examples": [
      "There is a pen on the desk."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7A_U6_THERE_PROG",
    "book": "國七上",
    "unit": "U6",
    "unitOrder": 6,
    "group": "there be 與數量",
    "mapBranch": "Be / Sentence Basics",
    "subGroup": "there-prog",
    "title": "there be + V-ing",
    "pattern": "There is/are + N + V-ing ...",
    "explanation": "可接現在分詞片語補充描述。",
    "examples": [
      "There is a monkey playing under the tree."
    ],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U1_PRES_SIMPLE",
    "book": "國七下",
    "unit": "U1",
    "unitOrder": 1,
    "group": "一般現在式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "pres-simple",
    "title": "一般現在式",
    "pattern": "S + V / S + Vs",
    "explanation": "表示習慣、事實或固定狀態。",
    "examples": [
      "I take a walk every Saturday.",
      "We watch TV in the evening."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U1_THIRD_SING",
    "book": "國七下",
    "unit": "U1",
    "unitOrder": 1,
    "group": "一般現在式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "third-sing",
    "title": "第三人稱單數",
    "pattern": "likes / watches / flies / has",
    "explanation": "主詞是第三人稱單數時，動詞要變化。",
    "examples": [
      "She likes music.",
      "He watches TV."
    ],
    "commonErrors": [
      "He watch TV every day."
    ],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U1_DO_DOES",
    "book": "國七下",
    "unit": "U1",
    "unitOrder": 1,
    "group": "一般現在式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "do-does",
    "title": "do / does 問句",
    "pattern": "Do/Does + S + V ?",
    "explanation": "一般現在式問句用 do/does。",
    "examples": [
      "Do you watch TV?",
      "Does he play sports?"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U1_DONT_DOESNT",
    "book": "國七下",
    "unit": "U1",
    "unitOrder": 1,
    "group": "一般現在式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "dont-doesnt",
    "title": "don't / doesn't",
    "pattern": "S + don't/doesn't + V",
    "explanation": "一般現在式否定句用 don't/doesn't。",
    "examples": [
      "I don't watch TV.",
      "She doesn't play baseball."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U1_WHAT_DO",
    "book": "國七下",
    "unit": "U1",
    "unitOrder": 1,
    "group": "一般現在式",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "what-do",
    "title": "What do/does 問句",
    "pattern": "What do/does + S + do ... ?",
    "explanation": "用來問某人平常做什麼。",
    "examples": [
      "What do you do on weekends?"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U1_FREQ_TIME",
    "book": "國七下",
    "unit": "U1",
    "unitOrder": 1,
    "group": "一般現在式",
    "mapBranch": "Time / Date / Frequency",
    "subGroup": "freq-time",
    "title": "頻率與時間副詞",
    "pattern": "every day / every week / on Sundays",
    "explanation": "常搭配一般現在式表習慣。",
    "examples": [
      "I exercise every day.",
      "We go shopping on Sundays."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U1_DO_EMPH",
    "book": "國七下",
    "unit": "U1",
    "unitOrder": 1,
    "group": "一般現在式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "do-emphasis",
    "title": "do/does 強調",
    "pattern": "I do like ... / She does stand out.",
    "explanation": "do/does 也可用來加強語氣。",
    "examples": [
      "I do like animals.",
      "She does stand out."
    ],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U1_HAVE_HAS",
    "book": "國七下",
    "unit": "U1",
    "unitOrder": 1,
    "group": "一般現在式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "have-has",
    "title": "have / has",
    "pattern": "S + have/has + N",
    "explanation": "have/has 可表擁有。",
    "examples": [
      "He has big eyes.",
      "We have thin lips."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U1_DONT_HAVE",
    "book": "國七下",
    "unit": "U1",
    "unitOrder": 1,
    "group": "一般現在式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "dont-have",
    "title": "don't have / doesn't have",
    "pattern": "S + don't/doesn't have + N",
    "explanation": "否定擁有時用 don't/doesn't have。",
    "examples": [
      "He doesn't have long hair."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U1_HOW_TALL",
    "book": "國七下",
    "unit": "U1",
    "unitOrder": 1,
    "group": "一般現在式",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "how-tall",
    "title": "How tall 問身高",
    "pattern": "How tall + be + S ?",
    "explanation": "用來詢問身高。",
    "examples": [
      "How tall is he? He is 180 cm tall."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U2_FREQ_LIST",
    "book": "國七下",
    "unit": "U2",
    "unitOrder": 2,
    "group": "頻率副詞",
    "mapBranch": "Time / Date / Frequency",
    "subGroup": "freq-list",
    "title": "頻率副詞種類",
    "pattern": "always / usually / often / sometimes / seldom / never",
    "explanation": "頻率副詞表事情發生的頻率高低。",
    "examples": [
      "She is always happy.",
      "I often read books."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U2_FREQ_AFTER_BE",
    "book": "國七下",
    "unit": "U2",
    "unitOrder": 2,
    "group": "頻率副詞",
    "mapBranch": "Time / Date / Frequency",
    "subGroup": "freq-after-be",
    "title": "頻率副詞在 be 後",
    "pattern": "S + be + 頻率副詞",
    "explanation": "頻率副詞常放在 be 動詞後。",
    "examples": [
      "Tom is usually busy."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U2_FREQ_BEFORE_V",
    "book": "國七下",
    "unit": "U2",
    "unitOrder": 2,
    "group": "頻率副詞",
    "mapBranch": "Time / Date / Frequency",
    "subGroup": "freq-before-v",
    "title": "頻率副詞在一般動詞前",
    "pattern": "S + 頻率副詞 + V",
    "explanation": "頻率副詞常放在一般動詞前。",
    "examples": [
      "She sometimes eats breakfast."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U2_NEVER",
    "book": "國七下",
    "unit": "U2",
    "unitOrder": 2,
    "group": "頻率副詞",
    "mapBranch": "Time / Date / Frequency",
    "subGroup": "never",
    "title": "never 的用法",
    "pattern": "never + V",
    "explanation": "never 本身就是否定，不再加 not。",
    "examples": [
      "He never goes out at night."
    ],
    "commonErrors": [
      "He doesn't never go out."
    ],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U2_FREQ_SENT_POS",
    "book": "國七下",
    "unit": "U2",
    "unitOrder": 2,
    "group": "頻率副詞",
    "mapBranch": "Time / Date / Frequency",
    "subGroup": "freq-sentence-pos",
    "title": "句首/句尾頻率副詞",
    "pattern": "Often, ... / ..., often.",
    "explanation": "部分頻率副詞可在句首或句尾作語氣變化。",
    "examples": [
      "Often in the morning, she runs in the park.",
      "I don't go there often."
    ],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U2_HOW_OFTEN",
    "book": "國七下",
    "unit": "U2",
    "unitOrder": 2,
    "group": "頻率副詞",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "how-often",
    "title": "How often 問句",
    "pattern": "How often + do/does + S + V ?",
    "explanation": "How often 用來問頻率。",
    "examples": [
      "How often do they exercise?"
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U2_FREQ_PHRASES",
    "book": "國七下",
    "unit": "U2",
    "unitOrder": 2,
    "group": "頻率副詞",
    "mapBranch": "Time / Date / Frequency",
    "subGroup": "frequency-phrases",
    "title": "次數片語",
    "pattern": "once a week / twice a month / three times a year",
    "explanation": "用來回答 How often。",
    "examples": [
      "I go there once a week.",
      "He practices twice a month."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U2_ALWAYS_PROG",
    "book": "國七下",
    "unit": "U2",
    "unitOrder": 2,
    "group": "頻率副詞",
    "mapBranch": "Time / Date / Frequency",
    "subGroup": "always-prog",
    "title": "always + 進行式",
    "pattern": "be always V-ing",
    "explanation": "可表示抱怨或反覆發生的不滿。",
    "examples": [
      "James is always running in the classroom."
    ],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U3_COUNT_UNCOUNT",
    "book": "國七下",
    "unit": "U3",
    "unitOrder": 3,
    "group": "可數不可數與問價",
    "mapBranch": "Quantifiers / Countability / Amount",
    "subGroup": "count-vs-uncount",
    "title": "可數 / 不可數名詞",
    "pattern": "countable / uncountable nouns",
    "explanation": "可數名詞可有複數；不可數名詞通常不可直接數。",
    "examples": [
      "flowers",
      "milk"
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U3_UNCOUNT_RULES",
    "book": "國七下",
    "unit": "U3",
    "unitOrder": 3,
    "group": "可數不可數與問價",
    "mapBranch": "Quantifiers / Countability / Amount",
    "subGroup": "uncount-rules",
    "title": "不可數名詞規則",
    "pattern": "不可數名詞不用 a/an、通常搭單數動詞",
    "explanation": "不可數名詞沒有複數，常與 much、some 等搭配。",
    "examples": [
      "The food is great.",
      "The juice is good."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U3_MUCH_LOT_SOME_ANY",
    "book": "國七下",
    "unit": "U3",
    "unitOrder": 3,
    "group": "可數不可數與問價",
    "mapBranch": "Quantifiers / Countability / Amount",
    "subGroup": "much-lot-some-any",
    "title": "much / a lot of / some / any",
    "pattern": "可表示可數或不可數名詞的量。",
    "explanation": [
      "We don't have much homework.",
      "There is some food on the table."
    ],
    "examples": [],
    "commonErrors": 2,
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U3_DUAL_USE",
    "book": "國七下",
    "unit": "U3",
    "unitOrder": 3,
    "group": "可數不可數與問價",
    "mapBranch": "Quantifiers / Countability / Amount",
    "subGroup": "dual-use-nouns",
    "title": "可數/不可數兼用名詞",
    "pattern": "a cake / some cake",
    "explanation": "有些名詞依語意可作可數或不可數。",
    "examples": [
      "I want a cake.",
      "I want some cake."
    ],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U3_WHICH",
    "book": "國七下",
    "unit": "U3",
    "unitOrder": 3,
    "group": "可數不可數與問價",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "which",
    "title": "Which 問句",
    "pattern": "Which + do/does + S + V ?",
    "explanation": "which 用於限定選擇。",
    "examples": [
      "Which do you like, tea or coffee?"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U3_WHICH_NOUN",
    "book": "國七下",
    "unit": "U3",
    "unitOrder": 3,
    "group": "可數不可數與問價",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "which-noun",
    "title": "Which + 名詞",
    "pattern": "Which + N + do/does ... ?",
    "explanation": "which 也可直接接名詞。",
    "examples": [
      "Which drink do you want?",
      "Which girl is your classmate?"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U3_WHICH_WHAT",
    "book": "國七下",
    "unit": "U3",
    "unitOrder": 3,
    "group": "可數不可數與問價",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "which-vs-what",
    "title": "which vs what",
    "pattern": "which = 限定選擇 / what = 開放問題",
    "explanation": "兩者都可問『什麼』，但範圍不同。",
    "examples": [],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U3_HOW_MUCH_PRICE",
    "book": "國七下",
    "unit": "U3",
    "unitOrder": 3,
    "group": "可數不可數與問價",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "how-much-price",
    "title": "How much 問價錢",
    "pattern": "How much is/are ... ?",
    "explanation": "可詢問單複數物品價格。",
    "examples": [
      "How much is the coffee?",
      "How much are the pens?"
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U3_PRICE_EXPR",
    "book": "國七下",
    "unit": "U3",
    "unitOrder": 3,
    "group": "可數不可數與問價",
    "mapBranch": "Quantifiers / Countability / Amount",
    "subGroup": "price-expression",
    "title": "價格表達",
    "pattern": "three hundred dollars / NT$95",
    "explanation": "價格有一般金額與幣別寫法。",
    "examples": [
      "It is three hundred dollars.",
      "It is NT$95."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U3_ONE_ONES",
    "book": "國七下",
    "unit": "U3",
    "unitOrder": 3,
    "group": "可數不可數與問價",
    "mapBranch": "Nouns / Pronouns / Determiners",
    "subGroup": "one-ones",
    "title": "one / ones",
    "pattern": "one 代替單數名詞；ones 代替複數名詞。",
    "explanation": [
      "Do you want one?",
      "The pink ones are $100."
    ],
    "examples": [],
    "commonErrors": 2,
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U3_WHICH_ONE",
    "book": "國七下",
    "unit": "U3",
    "unitOrder": 3,
    "group": "可數不可數與問價",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "which-one",
    "title": "Which one 問句",
    "pattern": "Which one do you want?",
    "explanation": "可用 one 代替重複的名詞。",
    "examples": [
      "Which one do you want?"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U4_MEASURE_UNCOUNT",
    "book": "國七下",
    "unit": "U4",
    "unitOrder": 4,
    "group": "數量與原因句",
    "mapBranch": "Quantifiers / Countability / Amount",
    "subGroup": "measure-uncount",
    "title": "單位量詞 + 不可數",
    "pattern": "數字 + 單位 + of + 不可數名詞",
    "explanation": "不可數名詞常靠單位量詞表數量。",
    "examples": [
      "a bottle of milk",
      "four bags of sugar"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U4_MEASURE_COUNT",
    "book": "國七下",
    "unit": "U4",
    "unitOrder": 4,
    "group": "數量與原因句",
    "mapBranch": "Quantifiers / Countability / Amount",
    "subGroup": "measure-count",
    "title": "單位量詞 + 可數",
    "pattern": "數字 + 單位 + of + 複數名詞",
    "explanation": "單位量詞也可搭配可數名詞。",
    "examples": [
      "a bag of balls",
      "three boxes of cookies"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U4_HOW_MANY",
    "book": "國七下",
    "unit": "U4",
    "unitOrder": 4,
    "group": "數量與原因句",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "how-many",
    "title": "How many",
    "pattern": "How many + 複數名詞 ... ?",
    "explanation": "用來問可數名詞數量。",
    "examples": [
      "How many glasses are there on the table?"
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U4_HOW_MANY_THERE",
    "book": "國七下",
    "unit": "U4",
    "unitOrder": 4,
    "group": "數量與原因句",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "how-many-there",
    "title": "How many ... are there",
    "pattern": "How many + 複數名詞 + are there + 地方?",
    "explanation": "用來問某地有多少可數名詞。",
    "examples": [
      "How many bags of flour are there?"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U4_HOW_MANY_DOES",
    "book": "國七下",
    "unit": "U4",
    "unitOrder": 4,
    "group": "數量與原因句",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "how-many-does",
    "title": "How many do/does",
    "pattern": "How many + 名詞 + do/does + S + V ?",
    "explanation": "用來問人需要或擁有的可數量。",
    "examples": [
      "How many eggs do you need?"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U4_HOW_MUCH_AMOUNT",
    "book": "國七下",
    "unit": "U4",
    "unitOrder": 4,
    "group": "數量與原因句",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "how-much",
    "title": "How much",
    "pattern": "How much + 不可數名詞 ... ?",
    "explanation": "用來問不可數名詞數量。",
    "examples": [
      "How much milk do you need?"
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U4_HOW_MUCH_THERE",
    "book": "國七下",
    "unit": "U4",
    "unitOrder": 4,
    "group": "數量與原因句",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "how-much-there",
    "title": "How much ... is there",
    "pattern": "How much + 不可數名詞 + is there + 地方?",
    "explanation": "用來問某地有多少不可數名詞。",
    "examples": [
      "How much candy is there on the table?"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U4_BECAUSE",
    "book": "國七下",
    "unit": "U4",
    "unitOrder": 4,
    "group": "數量與原因句",
    "mapBranch": "Clauses / Connectors",
    "subGroup": "because",
    "title": "because",
    "pattern": "主句 + because + 子句",
    "explanation": "because 用來說明原因。",
    "examples": [
      "He can eat three bowls of rice because he is hungry."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U4_BECAUSE_FIRST",
    "book": "國七下",
    "unit": "U4",
    "unitOrder": 4,
    "group": "數量與原因句",
    "mapBranch": "Clauses / Connectors",
    "subGroup": "because-first",
    "title": "Because 子句在句首",
    "pattern": "Because + 子句, 主句",
    "explanation": "原因子句也可放句首。",
    "examples": [
      "Because Helen is too young, she can't go to school."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U4_BECAUSE_OF",
    "book": "國七下",
    "unit": "U4",
    "unitOrder": 4,
    "group": "數量與原因句",
    "mapBranch": "Clauses / Connectors",
    "subGroup": "because-of",
    "title": "because of",
    "pattern": "because of + 名詞",
    "explanation": "because of 後面接名詞或名詞片語。",
    "examples": [
      "The kids are happy because of the new computer game."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U4_SO",
    "book": "國七下",
    "unit": "U4",
    "unitOrder": 4,
    "group": "數量與原因句",
    "mapBranch": "Clauses / Connectors",
    "subGroup": "so",
    "title": "so",
    "pattern": "主句, so + 子句",
    "explanation": "so 用來表示結果。",
    "examples": [
      "The library is near, so we walk there."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U4_WHY",
    "book": "國七下",
    "unit": "U4",
    "unitOrder": 4,
    "group": "數量與原因句",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "why",
    "title": "Why 問句與回答",
    "pattern": "Why ... ? / because ...",
    "explanation": "Why 用來詢問原因，回答常用 because。",
    "examples": [
      "Why do you sing the song every day? Because I like it."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U4_WHY_NOT",
    "book": "國七下",
    "unit": "U4",
    "unitOrder": 4,
    "group": "數量與原因句",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "why-not",
    "title": "Why not + V",
    "pattern": "Why not + 原形動詞 ?",
    "explanation": "Why not 用來提出建議。",
    "examples": [
      "Why not eat some more?"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U5_PAST_BE",
    "book": "國七下",
    "unit": "U5",
    "unitOrder": 5,
    "group": "過去簡單式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "past-be",
    "title": "be 動詞過去式",
    "pattern": "was / were",
    "explanation": "am/is 的過去式是 was；are 的過去式是 were。",
    "examples": [
      "Billy was fat at that time.",
      "We were classmates three years ago."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U5_PAST_TIME",
    "book": "國七下",
    "unit": "U5",
    "unitOrder": 5,
    "group": "過去簡單式",
    "mapBranch": "Time / Date / Frequency",
    "subGroup": "past-time",
    "title": "過去時間副詞",
    "pattern": "ago / yesterday / last night ...",
    "explanation": "這些副詞常和過去式連用。",
    "examples": [
      "two hours ago",
      "yesterday afternoon"
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U5_PAST_BE_NEG",
    "book": "國七下",
    "unit": "U5",
    "unitOrder": 5,
    "group": "過去簡單式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "past-be-neg",
    "title": "be 過去式否定",
    "pattern": "was not / were not",
    "explanation": "be 過去式否定可縮寫成 wasn't / weren't。",
    "examples": [
      "The girl wasn't happy last night.",
      "They weren't classmates three months ago."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U5_PAST_BE_Q",
    "book": "國七下",
    "unit": "U5",
    "unitOrder": 5,
    "group": "過去簡單式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "past-be-yn-wh",
    "title": "be 過去式問句",
    "pattern": "Was/Were + S ... ? / Wh + was/were + S ... ?",
    "explanation": "be 過去式可做 yes-no 與 wh 問句。",
    "examples": [
      "Was he busy yesterday?",
      "Where was she yesterday?"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U5_REGULAR_ED",
    "book": "國七下",
    "unit": "U5",
    "unitOrder": 5,
    "group": "過去簡單式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "regular-ed",
    "title": "規則動詞過去式",
    "pattern": "V + ed",
    "explanation": "一般過去式常以 ed 形成。",
    "examples": [
      "played",
      "visited",
      "cleaned"
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U5_ED_SPELLING",
    "book": "國七下",
    "unit": "U5",
    "unitOrder": 5,
    "group": "過去簡單式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "ed-spelling",
    "title": "ed 拼字規則",
    "pattern": "+ed / +d / y→ied / 雙寫 / ck+ed",
    "explanation": "規則動詞過去式有多種拼字變化。",
    "examples": [
      "like → liked",
      "study → studied",
      "stop → stopped",
      "picnic → picnicked"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U5_ED_PRON",
    "book": "國七下",
    "unit": "U5",
    "unitOrder": 5,
    "group": "過去簡單式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "ed-pron",
    "title": "ed 發音",
    "pattern": "[t] / [d] / [id]",
    "explanation": "ed 的發音依字尾音決定。",
    "examples": [
      "walked [t]",
      "played [d]",
      "wanted [id]"
    ],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U5_DID",
    "book": "國七下",
    "unit": "U5",
    "unitOrder": 5,
    "group": "過去簡單式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "did",
    "title": "did 問句與否定",
    "pattern": "Did + S + V ? / didn't + V",
    "explanation": "一般動詞過去式問句與否定用 did。",
    "examples": [
      "Did you play the game?",
      "I didn't watch TV."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U5_PAST_WH",
    "book": "國七下",
    "unit": "U5",
    "unitOrder": 5,
    "group": "過去簡單式",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "past-wh",
    "title": "過去式 wh 問句",
    "pattern": "Wh + did + S + V ?",
    "explanation": "過去 wh 問句後面仍用原形動詞。",
    "examples": [
      "What did you do yesterday?"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_IRREGULAR_CONCEPT",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-concept",
    "title": "不規則動詞過去式概念",
    "pattern": "go→went / eat→ate / see→saw ...",
    "explanation": "不規則動詞過去式需個別記憶。",
    "examples": [
      "go → went",
      "drink → drank",
      "write → wrote"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_IRREGULAR_TYPES",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-types",
    "title": "不規則動詞類型",
    "pattern": "不變 / 母音變化 / 完全不同",
    "explanation": "有些變化有類型可觀察，但仍需記憶。",
    "examples": [
      "put → put",
      "swim → swam",
      "go → went"
    ],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_LET_LET",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "let → let",
    "pattern": "let → let",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "Let me help you."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_PUT_PUT",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "put → put",
    "pattern": "put → put",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "He put the book on the desk."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_READ_READ",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "read → read",
    "pattern": "read → read",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "She read the story yesterday."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_BUILD_BUILT",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "build → built",
    "pattern": "build → built",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "They built a house last year."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_BUY_BOUGHT",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "buy → bought",
    "pattern": "buy → bought",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "I bought a new bag yesterday."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_COME_CAME",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "come → came",
    "pattern": "come → came",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "My uncle came last night."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_DO_DID",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "do → did",
    "pattern": "do → did",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "He did his homework after dinner."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_DRINK_DRANK",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "drink → drank",
    "pattern": "drink → drank",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "She drank some milk this morning."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_DRIVE_DROVE",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "drive → drove",
    "pattern": "drive → drove",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "Dad drove to work yesterday."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_EAT_ATE",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "eat → ate",
    "pattern": "eat → ate",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "We ate noodles for lunch."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_FALL_FELL",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "fall → fell",
    "pattern": "fall → fell",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "The cup fell off the table."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_FLY_FLEW",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "fly → flew",
    "pattern": "fly → flew",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "The bird flew away."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_GET_GOT",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "get → got",
    "pattern": "get → got",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "I got a gift from Mom."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_GO_WENT",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "go → went",
    "pattern": "go → went",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "They went to the park."
    ],
    "commonErrors": [
      "They goed to the park."
    ],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_HAVE_HAD",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "have → had",
    "pattern": "have → had",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "She had a headache yesterday."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_KNOW_KNEW",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "know → knew",
    "pattern": "know → knew",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "I knew the answer."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_LOSE_LOST",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "lose → lost",
    "pattern": "lose → lost",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "He lost his keys."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_MAKE_MADE",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "make → made",
    "pattern": "make → made",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "Mom made a cake."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_MEET_MET",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "meet → met",
    "pattern": "meet → met",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "I met my teacher on the street."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_RIDE_RODE",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "ride → rode",
    "pattern": "ride → rode",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "He rode his bike to school."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_RUN_RAN",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "run → ran",
    "pattern": "run → ran",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "They ran in the park."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_SAY_SAID",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "say → said",
    "pattern": "say → said",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "She said hello to me."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_SEE_SAW",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "see → saw",
    "pattern": "see → saw",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "We saw a movie yesterday."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_SELL_SOLD",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "sell → sold",
    "pattern": "sell → sold",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "The store sold all the tickets."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_SHAKE_SHOOK",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "shake → shook",
    "pattern": "shake → shook",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "He shook the bottle."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_SING_SANG",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "sing → sang",
    "pattern": "sing → sang",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "She sang beautifully at the party."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_SIT_SAT",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "sit → sat",
    "pattern": "sit → sat",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "We sat by the window."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_SLEEP_SLEPT",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "sleep → slept",
    "pattern": "sleep → slept",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "The baby slept all night."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_STAND_STOOD",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "stand → stood",
    "pattern": "stand → stood",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "He stood by the door."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_SWIM_SWAM",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "swim → swam",
    "pattern": "swim → swam",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "They swam in the lake."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_TAKE_TOOK",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "take → took",
    "pattern": "take → took",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "I took the bus to school."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_THINK_THOUGHT",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "think → thought",
    "pattern": "think → thought",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "I thought about the problem."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_WAKE_WOKE",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "wake → woke",
    "pattern": "wake → woke",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "She woke up early."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_WEAR_WORE",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "wear → wore",
    "pattern": "wear → wore",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "He wore a blue jacket."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_WRITE_WROTE",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "write → wrote",
    "pattern": "write → wrote",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "She wrote a letter to her friend."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_CAN_COULD",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "can → could",
    "pattern": "can → could",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "I could read when I was five."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G7B_U6_MAY_MIGHT",
    "book": "國七下",
    "unit": "U6",
    "unitOrder": 6,
    "group": "不規則動詞過去式",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "irregular-item",
    "title": "may → might",
    "pattern": "may → might",
    "explanation": "常見不規則動詞過去式之一。",
    "examples": [
      "It might rain later."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U1_WEATHER_HOW",
    "book": "國八上",
    "unit": "U1",
    "unitOrder": 1,
    "group": "天氣與授與動詞",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "weather-how",
    "title": "How is the weather ...?",
    "pattern": "How is the weather + 地方/時間 ?",
    "explanation": "用 How 詢問天氣狀況。",
    "examples": [
      "How is the weather today?",
      "How is the weather in Taipei?"
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U1_WEATHER_LIKE",
    "book": "國八上",
    "unit": "U1",
    "unitOrder": 1,
    "group": "天氣與授與動詞",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "weather-like",
    "title": "What's the weather like ...?",
    "pattern": "What is the weather like + 地方/時間 ?",
    "explanation": "What ... like 也可用來問天氣。",
    "examples": [
      "What's the weather like today?"
    ],
    "commonErrors": [
      "How's the weather like today?"
    ],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U1_WEATHER_ADJ",
    "book": "國八上",
    "unit": "U1",
    "unitOrder": 1,
    "group": "天氣與授與動詞",
    "mapBranch": "Time / Date / Frequency",
    "subGroup": "weather-adj",
    "title": "天氣形容詞",
    "pattern": "It is + adj",
    "explanation": "可用 sunny, rainy, windy 等形容詞描述天氣。",
    "examples": [
      "It is rainy today.",
      "It is windy in Penghu."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U1_WEATHER_VERB",
    "book": "國八上",
    "unit": "U1",
    "unitOrder": 1,
    "group": "天氣與授與動詞",
    "mapBranch": "Time / Date / Frequency",
    "subGroup": "weather-verb",
    "title": "天氣動詞",
    "pattern": "It rains/snows ...",
    "explanation": "可用自然現象動詞描述天氣。",
    "examples": [
      "It rains a lot in Keelung.",
      "It is snowing now."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U1_WEATHER_NOUN",
    "book": "國八上",
    "unit": "U1",
    "unitOrder": 1,
    "group": "天氣與授與動詞",
    "mapBranch": "Quantifiers / Countability / Amount",
    "subGroup": "weather-noun",
    "title": "天氣名詞量",
    "pattern": "There is ... / have ...",
    "explanation": "也可用名詞表雨、雪、風等量。",
    "examples": [
      "There is a lot of rain here.",
      "We have some snow in winter."
    ],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U1_DOUBLE_OBJECT",
    "book": "國八上",
    "unit": "U1",
    "unitOrder": 1,
    "group": "天氣與授與動詞",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "double-object",
    "title": "授與動詞雙受詞",
    "pattern": "S + give/send/show + 人 + 物",
    "explanation": "授與動詞可直接接人再接物。",
    "examples": [
      "I gave the kid some cards.",
      "Mary sent Lily a painting."
    ],
    "commonErrors": [
      "I gave to him a book."
    ],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U1_TO_FOR",
    "book": "國八上",
    "unit": "U1",
    "unitOrder": 1,
    "group": "天氣與授與動詞",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "to-for",
    "title": "to / for 授與動詞",
    "pattern": "S + V + 物 + to/for + 人",
    "explanation": "有些動詞搭 to，有些搭 for。",
    "examples": [
      "I gave a book to him.",
      "Mom bought a gift for me."
    ],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U1_DOUBLE_OBJECT_PRON",
    "book": "國八上",
    "unit": "U1",
    "unitOrder": 1,
    "group": "天氣與授與動詞",
    "mapBranch": "Nouns / Pronouns / Determiners",
    "subGroup": "double-object-pronoun",
    "title": "授與動詞代名詞位置",
    "pattern": "give him a book / give it to him",
    "explanation": "雙受詞與代名詞位置容易混淆。",
    "examples": [
      "I gave him a book.",
      "I gave it to him."
    ],
    "commonErrors": [
      "I gave him it."
    ],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U2_AFTER",
    "book": "國八上",
    "unit": "U2",
    "unitOrder": 2,
    "group": "時間從屬連接詞與所有格代名詞",
    "mapBranch": "Clauses / Connectors",
    "subGroup": "after",
    "title": "after",
    "pattern": "主句 + after + 子句 / After + 子句, 主句",
    "explanation": "after 表示某事發生在另一件事之後。",
    "examples": [
      "After she takes a shower, she uses the computer.",
      "She uses the computer after she takes a shower."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U2_BEFORE",
    "book": "國八上",
    "unit": "U2",
    "unitOrder": 2,
    "group": "時間從屬連接詞與所有格代名詞",
    "mapBranch": "Clauses / Connectors",
    "subGroup": "before",
    "title": "before",
    "pattern": "主句 + before + 子句 / Before + 子句, 主句",
    "explanation": "before 表示某事發生在另一件事之前。",
    "examples": [
      "Before they had dinner, they turned off the television."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U2_WHEN_CONN",
    "book": "國八上",
    "unit": "U2",
    "unitOrder": 2,
    "group": "時間從屬連接詞與所有格代名詞",
    "mapBranch": "Clauses / Connectors",
    "subGroup": "when",
    "title": "when",
    "pattern": "主句 + when + 子句",
    "explanation": "when 可表『當…的時候』，常表示同時或某時間點。",
    "examples": [
      "When she gets up, she makes the bed."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U2_TIME_TENSE",
    "book": "國八上",
    "unit": "U2",
    "unitOrder": 2,
    "group": "時間從屬連接詞與所有格代名詞",
    "mapBranch": "Clauses / Connectors",
    "subGroup": "time-clause-tense",
    "title": "時間子句時態一致",
    "pattern": "現在式 / 過去式一致",
    "explanation": "時間子句與主句常需維持相對時態。",
    "examples": [
      "He walks his dog after he comes home.",
      "He took a rest after he studied math."
    ],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U2_FUTURE_TIME_CLAUSE",
    "book": "國八上",
    "unit": "U2",
    "unitOrder": 2,
    "group": "時間從屬連接詞與所有格代名詞",
    "mapBranch": "Clauses / Connectors",
    "subGroup": "future-time-clause",
    "title": "未來時間子句不用未來式",
    "pattern": "after/before/when + 現在式",
    "explanation": "時間子句即使表未來，也多用現在式。",
    "examples": [
      "I will talk to Mom after she comes back."
    ],
    "commonErrors": [
      "after she will come back"
    ],
    "difficulty": 4,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U2_AFTER_VING",
    "book": "國八上",
    "unit": "U2",
    "unitOrder": 2,
    "group": "時間從屬連接詞與所有格代名詞",
    "mapBranch": "Clauses / Connectors",
    "subGroup": "after-ving",
    "title": "after + V-ing",
    "pattern": "After seeing the movie, she cried.",
    "explanation": "主詞相同時，時間子句可省略成 V-ing 片語。",
    "examples": [
      "After seeing the movie, she cried."
    ],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U2_AFTER_BEFORE_N",
    "book": "國八上",
    "unit": "U2",
    "unitOrder": 2,
    "group": "時間從屬連接詞與所有格代名詞",
    "mapBranch": "Prepositions / Location / Directions",
    "subGroup": "after-before-noun",
    "title": "after/before + 名詞",
    "pattern": "after school / before class",
    "explanation": "after/before 也可直接接名詞。",
    "examples": [
      "after school",
      "before class"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U2_POSS_PRON_TABLE",
    "book": "國八上",
    "unit": "U2",
    "unitOrder": 2,
    "group": "時間從屬連接詞與所有格代名詞",
    "mapBranch": "Nouns / Pronouns / Determiners",
    "subGroup": "poss-pron-table",
    "title": "所有格代名詞",
    "pattern": "mine / yours / his / hers / ours / theirs",
    "explanation": "所有格代名詞可替代 my book、our house 這類名詞片語。",
    "examples": [
      "His room is clean, and mine is clean, too."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U2_WHOSE",
    "book": "國八上",
    "unit": "U2",
    "unitOrder": 2,
    "group": "時間從屬連接詞與所有格代名詞",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "whose",
    "title": "Whose 問句",
    "pattern": "Whose + 名詞 ... ?",
    "explanation": "Whose 用來問『誰的』。",
    "examples": [
      "Whose guitar is it?"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U2_DOUBLE_GENITIVE",
    "book": "國八上",
    "unit": "U2",
    "unitOrder": 2,
    "group": "時間從屬連接詞與所有格代名詞",
    "mapBranch": "Nouns / Pronouns / Determiners",
    "subGroup": "double-genitive",
    "title": "雙重所有格",
    "pattern": "a friend of mine / some books of hers",
    "explanation": "雙重所有格常用來表『其中之一』。",
    "examples": [],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U3_PAST_PROG",
    "book": "國八上",
    "unit": "U3",
    "unitOrder": 3,
    "group": "過去進行式與片語動詞",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "past-prog",
    "title": "過去進行式",
    "pattern": "S + was/were + V-ing",
    "explanation": "表示過去某一時刻正在進行的動作。",
    "examples": [
      "I was making dinner at that time.",
      "They were talking in the living room."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U3_PAST_PROG_NEG",
    "book": "國八上",
    "unit": "U3",
    "unitOrder": 3,
    "group": "過去進行式與片語動詞",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "past-prog-neg",
    "title": "過去進行式否定",
    "pattern": "wasn't / weren't + V-ing",
    "explanation": "過去進行式否定在 was/were 後加 not。",
    "examples": [
      "Emma wasn't washing her clothes."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U3_PAST_PROG_YN",
    "book": "國八上",
    "unit": "U3",
    "unitOrder": 3,
    "group": "過去進行式與片語動詞",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "past-prog-yn",
    "title": "過去進行式問句",
    "pattern": "Was/Were + S + V-ing ?",
    "explanation": "問過去某時正在做什麼。",
    "examples": [
      "Was your sister taking out the trash?"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U3_PAST_PROG_WH",
    "book": "國八上",
    "unit": "U3",
    "unitOrder": 3,
    "group": "過去進行式與片語動詞",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "past-prog-wh",
    "title": "過去進行式 wh 問句",
    "pattern": "Wh + was/were + S + V-ing ?",
    "explanation": "可問過去某時正在做什麼、在哪裡做。",
    "examples": [
      "What were you doing at half past two?",
      "Where was Janice playing ball?"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U3_PAST_SIMPLE_VS_PROG",
    "book": "國八上",
    "unit": "U3",
    "unitOrder": 3,
    "group": "過去進行式與片語動詞",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "past-simple-vs-prog",
    "title": "過去簡單式 vs 過去進行式",
    "pattern": "完成事件 vs 持續動作",
    "explanation": "兩者常一起出題。",
    "examples": [
      "I went to my grandma's house this morning.",
      "We were watching TV at seven last night."
    ],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U3_WHEN_PAST",
    "book": "國八上",
    "unit": "U3",
    "unitOrder": 3,
    "group": "過去進行式與片語動詞",
    "mapBranch": "Clauses / Connectors",
    "subGroup": "when-past",
    "title": "when + 過去進行式 / 過去簡單式",
    "pattern": "持續動作 + when + 瞬間動作",
    "explanation": "常表『正在…的時候，突然…』。",
    "examples": [
      "I was studying when Ben called.",
      "When Ben called, I was studying."
    ],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U3_CONT_INSTANT",
    "book": "國八上",
    "unit": "U3",
    "unitOrder": 3,
    "group": "過去進行式與片語動詞",
    "mapBranch": "Clauses / Connectors",
    "subGroup": "continuous-vs-instant",
    "title": "持續動作 vs 瞬間動作",
    "pattern": "study/play ... vs start/call/open ...",
    "explanation": "與 when 子句搭配時常區分兩類動作。",
    "examples": [],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U3_REVERSE_TIME",
    "book": "國八上",
    "unit": "U3",
    "unitOrder": 3,
    "group": "過去進行式與片語動詞",
    "mapBranch": "Time / Date / Frequency",
    "subGroup": "reverse-time",
    "title": "時間逆讀法",
    "pattern": "five after eleven / a quarter to ten",
    "explanation": "會讀與會寫時間的另一種表達。",
    "examples": [
      "It's five after eleven.",
      "It's a quarter to ten."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U3_PHRASAL_VERBS",
    "book": "國八上",
    "unit": "U3",
    "unitOrder": 3,
    "group": "過去進行式與片語動詞",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "phrasal-verbs",
    "title": "片語動詞",
    "pattern": "turn off / wake up / write down",
    "explanation": "動詞加副詞可能形成新意思。",
    "examples": [],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U3_SEPARABLE_PV",
    "book": "國八上",
    "unit": "U3",
    "unitOrder": 3,
    "group": "過去進行式與片語動詞",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "separable-pv",
    "title": "可分片語動詞與代名詞位置",
    "pattern": "put down the jacket / put it down",
    "explanation": "代名詞作受詞時常必須夾在中間。",
    "examples": [
      "Eddie put his jacket down.",
      "Eddie put it down."
    ],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U3_INSEPARABLE_PV",
    "book": "國八上",
    "unit": "U3",
    "unitOrder": 3,
    "group": "過去進行式與片語動詞",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "inseparable-pv",
    "title": "不可分片語動詞",
    "pattern": "look for / listen to / talk about / wait for",
    "explanation": "不可分片語動詞的受詞不能插在中間。",
    "examples": [],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U4_TO_V",
    "book": "國八上",
    "unit": "U4",
    "unitOrder": 4,
    "group": "不定詞、動名詞與虛主詞 it",
    "mapBranch": "Non-finite Verbs",
    "subGroup": "to-v",
    "title": "不定詞 to V",
    "pattern": "to + 原形動詞",
    "explanation": "不定詞可作受詞、補語等。",
    "examples": [
      "I want to be a teacher.",
      "Iris plans to take a trip."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U4_TO_V_OBJECT",
    "book": "國八上",
    "unit": "U4",
    "unitOrder": 4,
    "group": "不定詞、動名詞與虛主詞 it",
    "mapBranch": "Non-finite Verbs",
    "subGroup": "to-v-object",
    "title": "V + O + to V",
    "pattern": "want/ask/teach/tell + O + to V",
    "explanation": "有些動詞可接受詞再接不定詞。",
    "examples": [
      "Mom needed me to buy lunch.",
      "Jason asked me to open the door."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U4_NOT_TO_V",
    "book": "國八上",
    "unit": "U4",
    "unitOrder": 4,
    "group": "不定詞、動名詞與虛主詞 it",
    "mapBranch": "Non-finite Verbs",
    "subGroup": "not-to-v",
    "title": "不定詞否定",
    "pattern": "not to + V",
    "explanation": "否定不定詞時在 to 前加 not。",
    "examples": [
      "It is important not to go to bed late."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U4_GERUND",
    "book": "國八上",
    "unit": "U4",
    "unitOrder": 4,
    "group": "不定詞、動名詞與虛主詞 it",
    "mapBranch": "Non-finite Verbs",
    "subGroup": "gerund",
    "title": "動名詞",
    "pattern": "V-ing 作名詞",
    "explanation": "動名詞可作受詞、主詞或介系詞受詞。",
    "examples": [
      "I like swimming.",
      "Playing computer games is fun."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U4_TO_V_VING_BOTH",
    "book": "國八上",
    "unit": "U4",
    "unitOrder": 4,
    "group": "不定詞、動名詞與虛主詞 it",
    "mapBranch": "Non-finite Verbs",
    "subGroup": "to-v-ving-both",
    "title": "to V / V-ing 皆可",
    "pattern": "like/love/hate/start + to V/V-ing",
    "explanation": "有些動詞後兩種形式皆可。",
    "examples": [
      "I love to interview people.",
      "I love interviewing people."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U4_REMEMBER",
    "book": "國八上",
    "unit": "U4",
    "unitOrder": 4,
    "group": "不定詞、動名詞與虛主詞 it",
    "mapBranch": "Non-finite Verbs",
    "subGroup": "remember",
    "title": "remember + to V / V-ing",
    "pattern": "remember to V vs remember V-ing",
    "explanation": "前者表記得去做，後者表記得做過。",
    "examples": [
      "Remember to lock the door.",
      "I remember meeting him."
    ],
    "commonErrors": [],
    "difficulty": 4,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U4_STOP",
    "book": "國八上",
    "unit": "U4",
    "unitOrder": 4,
    "group": "不定詞、動名詞與虛主詞 it",
    "mapBranch": "Non-finite Verbs",
    "subGroup": "stop",
    "title": "stop + to V / V-ing",
    "pattern": "stop to V vs stop V-ing",
    "explanation": "前者表停下來去做，後者表停止做。",
    "examples": [
      "He stopped to rest.",
      "He stopped smoking."
    ],
    "commonErrors": [],
    "difficulty": 4,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U4_TRY",
    "book": "國八上",
    "unit": "U4",
    "unitOrder": 4,
    "group": "不定詞、動名詞與虛主詞 it",
    "mapBranch": "Non-finite Verbs",
    "subGroup": "try",
    "title": "try + to V / V-ing",
    "pattern": "try to V vs try V-ing",
    "explanation": "前者表努力去做，後者表試著做。",
    "examples": [
      "Try to finish it.",
      "Try adding some sugar."
    ],
    "commonErrors": [],
    "difficulty": 4,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U4_ADJ_TO_V",
    "book": "國八上",
    "unit": "U4",
    "unitOrder": 4,
    "group": "不定詞、動名詞與虛主詞 it",
    "mapBranch": "Non-finite Verbs",
    "subGroup": "adj-to-v",
    "title": "形容詞 + to V",
    "pattern": "be + adj + to V",
    "explanation": "形容詞後可接不定詞補充說明。",
    "examples": [
      "I'm happy to help you."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U4_PREP_VING",
    "book": "國八上",
    "unit": "U4",
    "unitOrder": 4,
    "group": "不定詞、動名詞與虛主詞 it",
    "mapBranch": "Non-finite Verbs",
    "subGroup": "prep-ving",
    "title": "介系詞 + V-ing",
    "pattern": "after/before/about/at + V-ing",
    "explanation": "介系詞後面通常接動名詞。",
    "examples": [
      "after having breakfast",
      "before going out"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U4_BE_ADJ_PREP_VING",
    "book": "國八上",
    "unit": "U4",
    "unitOrder": 4,
    "group": "不定詞、動名詞與虛主詞 it",
    "mapBranch": "Non-finite Verbs",
    "subGroup": "be-adj-prep-ving",
    "title": "形容詞 + 介系詞 + V-ing",
    "pattern": "be good at / be sorry for + V-ing",
    "explanation": "固定搭配後面多接動名詞。",
    "examples": [
      "be good at making cookies",
      "be sorry for being late"
    ],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U4_VERB_PREP_VING",
    "book": "國八上",
    "unit": "U4",
    "unitOrder": 4,
    "group": "不定詞、動名詞與虛主詞 it",
    "mapBranch": "Non-finite Verbs",
    "subGroup": "verb-prep-ving",
    "title": "動詞 + 介系詞 + V-ing",
    "pattern": "dream of / talk about / think about + V-ing",
    "explanation": "部分動詞片語後接動名詞。",
    "examples": [
      "dream of becoming a singer"
    ],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U4_GERUND_SUBJECT",
    "book": "國八上",
    "unit": "U4",
    "unitOrder": 4,
    "group": "不定詞、動名詞與虛主詞 it",
    "mapBranch": "Non-finite Verbs",
    "subGroup": "gerund-subject",
    "title": "動名詞作主詞",
    "pattern": "V-ing + is/are ...",
    "explanation": "動名詞可作句子主詞。",
    "examples": [
      "Eating breakfast is important."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U4_GERUND_POSSESS",
    "book": "國八上",
    "unit": "U4",
    "unitOrder": 4,
    "group": "不定詞、動名詞與虛主詞 it",
    "mapBranch": "Non-finite Verbs",
    "subGroup": "gerund-poss",
    "title": "動名詞所有格",
    "pattern": "所有格 + V-ing",
    "explanation": "所有格可修飾動名詞。",
    "examples": [
      "I like Joe's singing."
    ],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U4_GERUND_COMPOUND",
    "book": "國八上",
    "unit": "U4",
    "unitOrder": 4,
    "group": "不定詞、動名詞與虛主詞 it",
    "mapBranch": "Non-finite Verbs",
    "subGroup": "gerund-compound",
    "title": "動名詞複合名詞",
    "pattern": "sleeping bag / drinking water",
    "explanation": "動名詞可形成複合名詞。",
    "examples": [],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U4_GERUND_PART",
    "book": "國八上",
    "unit": "U4",
    "unitOrder": 4,
    "group": "不定詞、動名詞與虛主詞 it",
    "mapBranch": "Non-finite Verbs",
    "subGroup": "gerund-vs-participle",
    "title": "動名詞 vs 現在分詞",
    "pattern": "swimming (noun) / swimming (verb)",
    "explanation": "同樣是 V-ing，功能可能不同。",
    "examples": [
      "My favorite sport is swimming.",
      "They are swimming."
    ],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U4_DUMMY_IT",
    "book": "國八上",
    "unit": "U4",
    "unitOrder": 4,
    "group": "不定詞、動名詞與虛主詞 it",
    "mapBranch": "Non-finite Verbs",
    "subGroup": "dummy-it",
    "title": "It + be + adj + to V",
    "pattern": "It is + adj + to V",
    "explanation": "虛主詞 it 可把真正主詞 to V 往後放。",
    "examples": [
      "It is great to drink some milk."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U4_FOR_OF_TO_V",
    "book": "國八上",
    "unit": "U4",
    "unitOrder": 4,
    "group": "不定詞、動名詞與虛主詞 it",
    "mapBranch": "Non-finite Verbs",
    "subGroup": "for-of-to-v",
    "title": "for / of + 人 + to V",
    "pattern": "It is + adj + for/of + 人 + to V",
    "explanation": "for 常指事情對某人；of 常指人的性質。",
    "examples": [
      "It is a good idea for him to exercise.",
      "It's kind of you to help me."
    ],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U5_HOW_TRANSPORT",
    "book": "國八上",
    "unit": "U5",
    "unitOrder": 5,
    "group": "交通與指路",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "how-transport",
    "title": "How 問交通方式",
    "pattern": "How did/do + S + go/get to + 地點 ?",
    "explanation": "可用 How 詢問去某地的交通方式。",
    "examples": [
      "How did you go to the zoo?"
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U5_BY_TRANSPORT",
    "book": "國八上",
    "unit": "U5",
    "unitOrder": 5,
    "group": "交通與指路",
    "mapBranch": "Prepositions / Location / Directions",
    "subGroup": "by-transport",
    "title": "by + 交通工具",
    "pattern": "by bus / by train / by plane",
    "explanation": "by 後接交通工具時通常不加冠詞。",
    "examples": [],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U5_ON_FOOT",
    "book": "國八上",
    "unit": "U5",
    "unitOrder": 5,
    "group": "交通與指路",
    "mapBranch": "Prepositions / Location / Directions",
    "subGroup": "on-foot",
    "title": "on foot",
    "pattern": "on foot",
    "explanation": "走路用 on foot。",
    "examples": [
      "She went to the museum on foot."
    ],
    "commonErrors": [
      "on feet"
    ],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U5_GET_TO",
    "book": "國八上",
    "unit": "U5",
    "unitOrder": 5,
    "group": "交通與指路",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "get-to",
    "title": "get to",
    "pattern": "get to + 地點",
    "explanation": "get to 表示到達某地。",
    "examples": [
      "How do you get to the office?"
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U5_TRANSPORT_VERBS",
    "book": "國八上",
    "unit": "U5",
    "unitOrder": 5,
    "group": "交通與指路",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "transport-verbs",
    "title": "ride / take / drive / fly / sail",
    "pattern": "ride a bike / take a bus / drive a car ...",
    "explanation": "也可直接用動詞表交通方式。",
    "examples": [
      "I rode my bike to school.",
      "I took a bus to the bank."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U5_RIDE_ON_IN",
    "book": "國八上",
    "unit": "U5",
    "unitOrder": 5,
    "group": "交通與指路",
    "mapBranch": "Prepositions / Location / Directions",
    "subGroup": "ride-on-in",
    "title": "ride on / ride in",
    "pattern": "ride on a bus / ride in a taxi",
    "explanation": "不同交通工具前的介系詞可能不同。",
    "examples": [],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U5_WHERE_LOCATION",
    "book": "國八上",
    "unit": "U5",
    "unitOrder": 5,
    "group": "交通與指路",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "where-location",
    "title": "Where 問位置",
    "pattern": "Where is + 地點 ?",
    "explanation": "問某地點在哪裡。",
    "examples": [
      "Where is the park?"
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U5_LOCATION_PREPS",
    "book": "國八上",
    "unit": "U5",
    "unitOrder": 5,
    "group": "交通與指路",
    "mapBranch": "Prepositions / Location / Directions",
    "subGroup": "location-preps",
    "title": "位置介系詞",
    "pattern": "next to / across from / between / on the corner of ...",
    "explanation": "用來描述地點相對位置。",
    "examples": [
      "It is next to the hospital.",
      "The bank is across from the school."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U5_DIRECTIONS_BASIC",
    "book": "國八上",
    "unit": "U5",
    "unitOrder": 5,
    "group": "交通與指路",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "directions-basic",
    "title": "指路句型",
    "pattern": "go straight / turn right / turn left",
    "explanation": "常見指路句型以原形動詞開頭。",
    "examples": [
      "Go straight for two blocks.",
      "Turn right at the corner."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U5_DIRECTIONS_MORE",
    "book": "國八上",
    "unit": "U5",
    "unitOrder": 5,
    "group": "交通與指路",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "directions-more",
    "title": "walk along / go down",
    "pattern": "Walk along ... / Go down ...",
    "explanation": "另一類常見指路句型。",
    "examples": [
      "Walk along the street.",
      "Go down this road."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U5_DISTANCE",
    "book": "國八上",
    "unit": "U5",
    "unitOrder": 5,
    "group": "交通與指路",
    "mapBranch": "Time / Date / Frequency",
    "subGroup": "distance",
    "title": "距離表達",
    "pattern": "for + 數字 + blocks",
    "explanation": "可用 blocks 表示步行距離。",
    "examples": [
      "Walk for three blocks."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U5_GET_OFF",
    "book": "國八上",
    "unit": "U5",
    "unitOrder": 5,
    "group": "交通與指路",
    "mapBranch": "Verbs / Tenses / Auxiliaries",
    "subGroup": "get-off",
    "title": "get off",
    "pattern": "get off + 交通工具 / at + 站名",
    "explanation": "用來表示下車。",
    "examples": [
      "Take Bus 235 and get off at Museum Station."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U5_ASK_DIRECTIONS",
    "book": "國八上",
    "unit": "U5",
    "unitOrder": 5,
    "group": "交通與指路",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "ask-directions",
    "title": "問路句型",
    "pattern": "Is there ... nearby? / Where can I find ... ? / Could you show me the way ... ?",
    "explanation": "旅遊與生活英語常見問路句。",
    "examples": [],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U6_WILL",
    "book": "國八上",
    "unit": "U6",
    "unitOrder": 6,
    "group": "未來式與花費表達",
    "mapBranch": "Future / Plans",
    "subGroup": "will",
    "title": "will 未來式",
    "pattern": "S + will + V",
    "explanation": "will 可表臨時決定、預測或未來。",
    "examples": [
      "I will wear a tie tomorrow."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U6_WONT",
    "book": "國八上",
    "unit": "U6",
    "unitOrder": 6,
    "group": "未來式與花費表達",
    "mapBranch": "Future / Plans",
    "subGroup": "wont",
    "title": "won't",
    "pattern": "S + won't + V",
    "explanation": "will not 常縮寫為 won't。",
    "examples": [
      "He won't be home next Saturday."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U6_WILL_YN",
    "book": "國八上",
    "unit": "U6",
    "unitOrder": 6,
    "group": "未來式與花費表達",
    "mapBranch": "Future / Plans",
    "subGroup": "will-yn",
    "title": "will 問句與回答",
    "pattern": "Will + S + V ?",
    "explanation": "will 可形成 yes-no 問句與簡答。",
    "examples": [
      "Will you go to the market tomorrow? Yes, I will."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U6_BE_GOING_TO",
    "book": "國八上",
    "unit": "U6",
    "unitOrder": 6,
    "group": "未來式與花費表達",
    "mapBranch": "Future / Plans",
    "subGroup": "be-going-to",
    "title": "be going to",
    "pattern": "S + be + going to + V",
    "explanation": "be going to 常表事先計畫或打算。",
    "examples": [
      "I am going to eat dinner with Amy."
    ],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U6_BE_GOING_TO_Q",
    "book": "國八上",
    "unit": "U6",
    "unitOrder": 6,
    "group": "未來式與花費表達",
    "mapBranch": "Future / Plans",
    "subGroup": "be-going-to-q",
    "title": "be going to 問句",
    "pattern": "Be + S + going to + V ?",
    "explanation": "be going to 也可形成 yes-no 問句。",
    "examples": [
      "Are you going to sweep the floor?"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U6_FUTURE_TIME_ADV",
    "book": "國八上",
    "unit": "U6",
    "unitOrder": 6,
    "group": "未來式與花費表達",
    "mapBranch": "Future / Plans",
    "subGroup": "future-time-adv",
    "title": "未來時間副詞",
    "pattern": "tomorrow / next week / later / soon ...",
    "explanation": "這些副詞常和未來式連用。",
    "examples": [],
    "commonErrors": [],
    "difficulty": 1,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U6_FUTURE_COMPARE",
    "book": "國八上",
    "unit": "U6",
    "unitOrder": 6,
    "group": "未來式與花費表達",
    "mapBranch": "Future / Plans",
    "subGroup": "future-compare",
    "title": "will vs be going to",
    "pattern": "臨時決定 vs 事先計畫",
    "explanation": "兩種未來式常會混合出題。",
    "examples": [
      "I'll make a cake.",
      "I'm going to make a cake."
    ],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U6_FUTURE_WH",
    "book": "國八上",
    "unit": "U6",
    "unitOrder": 6,
    "group": "未來式與花費表達",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "future-wh",
    "title": "未來 wh 問句",
    "pattern": "What will ... ? / What are you going to ... ?",
    "explanation": "可用兩種未來式形成 wh 問句。",
    "examples": [
      "What will he buy later?",
      "What are you going to do tomorrow?"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U6_FUTURE_TIME_CLAUSE2",
    "book": "國八上",
    "unit": "U6",
    "unitOrder": 6,
    "group": "未來式與花費表達",
    "mapBranch": "Clauses / Connectors",
    "subGroup": "future-time-clause",
    "title": "未來時間子句",
    "pattern": "after/before/when + 現在式",
    "explanation": "表未來時，時間子句仍用現在式。",
    "examples": [
      "I will give Lily a gift when she visits me."
    ],
    "commonErrors": [
      "when she will visit"
    ],
    "difficulty": 4,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U6_COST",
    "book": "國八上",
    "unit": "U6",
    "unitOrder": 6,
    "group": "未來式與花費表達",
    "mapBranch": "Cost / Time Expressions",
    "subGroup": "cost",
    "title": "cost",
    "pattern": "物 + cost(s) + 價錢",
    "explanation": "cost 的主詞是『物品』。",
    "examples": [
      "The dinner cost Mike USD50."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U6_SPEND_MONEY",
    "book": "國八上",
    "unit": "U6",
    "unitOrder": 6,
    "group": "未來式與花費表達",
    "mapBranch": "Cost / Time Expressions",
    "subGroup": "spend-money",
    "title": "spend money on",
    "pattern": "人 + spend + 錢 + on + 物",
    "explanation": "spend 的主詞是『人』。",
    "examples": [
      "We spent NT$500 on that hat."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U6_PAY",
    "book": "國八上",
    "unit": "U6",
    "unitOrder": 6,
    "group": "未來式與花費表達",
    "mapBranch": "Cost / Time Expressions",
    "subGroup": "pay",
    "title": "pay for",
    "pattern": "人 + pay + 錢 + for + 物",
    "explanation": "pay 也以『人』為主詞，後面常接 for。",
    "examples": [
      "They paid NT$700 for the car."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U6_PRICE_Q",
    "book": "國八上",
    "unit": "U6",
    "unitOrder": 6,
    "group": "未來式與花費表達",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "price-q",
    "title": "問價錢",
    "pattern": "How much does ... cost?",
    "explanation": "可問物品價格，也可問人花了多少錢。",
    "examples": [
      "How much does the bag cost?"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U6_TAKE_TIME",
    "book": "國八上",
    "unit": "U6",
    "unitOrder": 6,
    "group": "未來式與花費表達",
    "mapBranch": "Cost / Time Expressions",
    "subGroup": "take-time",
    "title": "take 花時間",
    "pattern": "It takes + 人 + 時間 + to V",
    "explanation": "take 的虛主詞通常是 It。",
    "examples": [
      "It takes me forty minutes to make a kite."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U6_SPEND_TIME",
    "book": "國八上",
    "unit": "U6",
    "unitOrder": 6,
    "group": "未來式與花費表達",
    "mapBranch": "Cost / Time Expressions",
    "subGroup": "spend-time",
    "title": "spend 花時間",
    "pattern": "人 + spend + 時間 + V-ing",
    "explanation": "spend 時間的主詞是人。",
    "examples": [
      "Tony spent half an hour doing his homework."
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U6_TAKE_SPEND",
    "book": "國八上",
    "unit": "U6",
    "unitOrder": 6,
    "group": "未來式與花費表達",
    "mapBranch": "Cost / Time Expressions",
    "subGroup": "take-vs-spend",
    "title": "take vs spend",
    "pattern": "It takes ... / S spend ...",
    "explanation": "花時間時 take 和 spend 的主詞不同。",
    "examples": [
      "It took us 20 minutes.",
      "We spent 20 minutes."
    ],
    "commonErrors": [],
    "difficulty": 3,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  },
  {
    "id": "G8A_U6_HOW_LONG",
    "book": "國八上",
    "unit": "U6",
    "unitOrder": 6,
    "group": "未來式與花費表達",
    "mapBranch": "Questions / WH-questions",
    "subGroup": "how-long",
    "title": "How long / How much time",
    "pattern": "How long did it take ... ?",
    "explanation": "可用來詢問完成某事花多久。",
    "examples": [
      "How long did it take you to finish the work?"
    ],
    "commonErrors": [],
    "difficulty": 2,
    "questionTypes": [
      "multiple_choice",
      "fill_in_blank",
      "error_correction"
    ],
    "examWeight": 3,
    "tags": []
  }
];


window.grammarPointIndexById = Object.fromEntries(
  window.grammarPoints.map(point => [point.id, point])
);

window.grammarPointIdsByUnit = Object.fromEntries(
  window.grammarCatalog.map(unit => [
    `${unit.book}_${unit.unit}`,
    unit.groups.flatMap(group => group.pointIds)
  ])
);
