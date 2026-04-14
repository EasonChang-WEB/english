// reading_passages.js — 課文練習資料（國八下 Unit 1–6）
window.readingPassages = [
  {
    "id": "G8B_U1_DIALOGUE",
    "book": "國八下",
    "unit": "U1",
    "title": "Unit 1 對話 — The Steak Looks Yummy",
    "type": "dialogue",
    "text": `Zac: What's your country like, Ela?
Ela: Turkey is bigger and colder than Taiwan.
Jamie: Do you like living in Taiwan?
Ela: Yes. People here are friendly. Also, life here is convenient, and getting around in Taiwan is easier than in Turkey.
Zac: How do you like the food here?
Ela: Well... my family and I don't eat pork, but people here love pork.
Cody: Do you eat beef?
Ela: Sure. Beef dishes here are more delicious than the ones back home.
Zac: I feel hungry now.
Jamie: I'm getting hungry, too. Let's go to that steak house near the school.
Cody: That sounds like a great idea.
Waitress: May I take your order?
Ela: The steak looks yummy. May I have it with some butter on top?
Waitress: Sure. How would you like your steak?
Ela: Medium, please.
Jamie: I'll have the hamburger and the meat pie. The meat pies here smell good and taste great!
Ela: I am as hungry as a bear.
Zac: Wow. You two are much hungrier than we are.`,
    "questions": [
      {
        "q": "Where is Ela from?",
        "opts": ["Taiwan","Turkey","Japan","Korea"],
        "ans": 1,
        "exp": "Ela says 'Turkey is bigger and colder than Taiwan,' meaning she is from Turkey."
      },
      {
        "q": "Why doesn't Ela eat pork?",
        "opts": ["She doesn't like the taste.","Her family doesn't eat pork.","Pork is too expensive.","She is allergic to pork."],
        "ans": 1,
        "exp": "Ela says 'my family and I don't eat pork.'"
      },
      {
        "q": "How does Ela want her steak cooked?",
        "opts": ["Well-done","Rare","Medium","Raw"],
        "ans": 2,
        "exp": "Ela says 'Medium, please.'"
      },
      {
        "q": "Which sentence uses a COMPARATIVE correctly?",
        "opts": [
          "Turkey is more big than Taiwan.",
          "Getting around in Taiwan is easyer than in Turkey.",
          "Beef dishes here are more delicious than the ones back home.",
          "You two are much more hungrier than we are."
        ],
        "ans": 2,
        "exp": "多音節形容詞 delicious 用 more delicious。其他選項：big→bigger；easy→easier；much hungrier 不需再加 more。"
      },
      {
        "q": "\"That sounds like a great idea.\" What grammar is used here?",
        "opts": ["Comparative adjective","Linking verb + adjective","Superlative adjective","as...as... comparison"],
        "ans": 1,
        "exp": "sound 是連繫動詞，後接形容詞 great（sound like + 名詞 great idea）。"
      }
    ,
      {"q": "\"Getting around in Taiwan is easier than in Turkey.\" What does 'getting around' mean?", "opts": ["driving a car", "meeting friends", "traveling from place to place", "going to school"], "ans": 2, "exp": "getting around 表示在一個地方到處移動或旅遊。"},
      {"q": "Which country is Ela from according to the passage?", "opts": ["Taiwan", "Turkey", "Japan", "United States"], "ans": 1, "exp": "Ela 說『Turkey is bigger and colder than Taiwan』，表示她來自土耳其。"},
      {"q": "Why does Ela eat beef but not pork?", "opts": ["She doesn't like the taste of pork", "She is allergic to pork", "Her family has cultural or religious reasons not to eat pork", "Pork is too expensive"], "ans": 2, "exp": "Ela 說『my family and I don't eat pork』，這表示家庭習慣或文化信仰。"},
      {"q": "\"I am as hungry as a bear.\" What does this comparison mean?", "opts": ["Ela is a bear", "Ela is very hungry", "Ela likes bears", "Ela is angry"], "ans": 1, "exp": "as...as... 比較句型用來表示同樣程度的特徵，這裡指 Ela 很餓。"},
      {"q": "Where do the characters decide to go eat?", "opts": ["A pork restaurant", "A steak house", "A fast food shop", "A home kitchen"], "ans": 1, "exp": "Jamie 說『Let's go to that steak house near the school』。"},
      {"q": "\"Life here is convenient.\" Which sentence uses a similar linking verb structure?", "opts": ["The steak looks yummy.", "Getting around is easier.", "People are friendly.", "The beef is delicious."], "ans": 0, "exp": "look 也是連繫動詞，後接形容詞 yummy，結構與 is convenient 相同。"},
      {"q": "What is the correct comparative form of 'cold'?", "opts": ["more cold", "colder", "coldier", "most cold"], "ans": 1, "exp": "單音節形容詞 cold 直接加 -er → colder。"},
      {"q": "\"You two are much hungrier than we are.\" Why is 'much' used here?", "opts": ["To mean 'less'", "To emphasize the degree of difference", "To replace the comparative", "To make it a superlative"], "ans": 1, "exp": "much 用來加強比較級的程度（much hungrier = very much hungrier）。"},
      {"q": "What can we infer about Ela's feelings toward Taiwan?", "opts": ["She dislikes Taiwan", "She loves Taiwan and feels comfortable there", "She wants to go back to Turkey immediately", "She is confused about Taiwan"], "ans": 1, "exp": "Ela 說『Yes. People here are friendly』且『life here is convenient』，推論她喜歡台灣。"},
      {"q": "What does the waitress ask Ela about her steak order?", "opts": ["If she wants butter", "How she would like it cooked", "If she is vegetarian", "Where she is from"], "ans": 1, "exp": "侍者問『How would you like your steak?』，指烹飪方式。"}
    ]
  },
  {
    "id": "G8B_U1_READING",
    "book": "國八下",
    "unit": "U1",
    "title": "Unit 1 閱讀 — Cappadocia",
    "type": "reading",
    "text": `Cappadocia is better than any other place on earth for a hot-air balloon ride. The view from the balloon always brings smiles to people's faces. For many people, taking a hot-air balloon ride in Cappadocia is a great experience.

Cappadocia is the perfect place for a hot-air balloon ride because the land is unique. There are tall rocks in many different shapes, and they look beautiful from the sky. Also, the weather in Cappadocia is usually nice. The wind is not too strong, and the sky is clear. With this good weather, the ride is safe and comfortable.

Every morning, the sky in Cappadocia fills with balloons of different colors. People from around the world come to enjoy the view and take pictures. A balloon ride is a cool way to start the day. So don't wait—pack a bag and come join the fun!`,
    "questions": [
      {
        "q": "What makes Cappadocia a perfect place for a balloon ride?",
        "opts": ["Its big cities","Its unique land and nice weather","Its famous food","Its tall buildings"],
        "ans": 1,
        "exp": "The passage says the land is unique and the weather is nice."
      },
      {
        "q": "According to the passage, how do the rocks in Cappadocia look from the sky?",
        "opts": ["Scary","Boring","Beautiful","Dark"],
        "ans": 2,
        "exp": "The passage says 'they look beautiful from the sky.'"
      },
      {
        "q": "\"The rocks look beautiful from the sky.\" Which word is a LINKING VERB?",
        "opts": ["rocks","look","beautiful","sky"],
        "ans": 1,
        "exp": "look 是連繫動詞，後接形容詞 beautiful 描述岩石的狀態。"
      },
      {
        "q": "\"Cappadocia is better than any other place on earth.\" This sentence uses ___.",
        "opts": ["a superlative adjective","a comparative adjective","as...as... comparison","a linking verb"],
        "ans": 1,
        "exp": "better than 是比較級句型（good → better）。"
      },
      {
        "q": "What does the author suggest at the end of the passage?",
        "opts": ["Stay home and rest","Wait for better weather","Pack a bag and come visit","Take a plane instead"],
        "ans": 2,
        "exp": "The author says 'pack a bag and come join the fun!'"
      }
    ,
      {"q": "\"Taking a hot-air balloon ride in Cappadocia is a great experience.\" What does this sentence mean?", "opts": ["Cappadocia is a bad place", "Few people enjoy balloon rides there", "It is a wonderful and memorable activity", "Balloon rides are dangerous"], "ans": 2, "exp": "a great experience 表示一個很好的經歷，即很值得的活動。"},
      {"q": "Why is the weather in Cappadocia suitable for balloon rides?", "opts": ["It is very hot", "The wind is strong and the sky is cloudy", "The wind is not too strong and the sky is clear", "It rains frequently"], "ans": 2, "exp": "文章說『the wind is not too strong, and the sky is clear』。"},
      {"q": "What happens every morning in Cappadocia?", "opts": ["It rains heavily", "The sky fills with balloons of different colors", "The rocks change shape", "The weather becomes cold"], "ans": 1, "exp": "文章說『Every morning, the sky in Cappadocia fills with balloons of different colors』。"},
      {"q": "\"These rocks... look beautiful from the sky.\" What is a synonym for 'look' in this context?", "opts": ["glance", "appear", "search", "find"], "ans": 1, "exp": "在連繫動詞的用法中，look 和 appear 都表示『看起來』的意思。"},
      {"q": "Which of the following is NOT mentioned as a reason Cappadocia is perfect for balloon rides?", "opts": ["Unique land formations", "Nice weather", "Clear sky", "Inexpensive costs"], "ans": 3, "exp": "文章沒有提到氣球之旅的花費。"},
      {"q": "\"The view from the balloon always brings smiles to people's faces.\" What does this suggest?", "opts": ["The balloon view is boring", "People enjoy the view and feel happy", "People are scared of the view", "People prefer ground views"], "ans": 1, "exp": "bring smiles 表示帶來笑容，即使人快樂。"},
      {"q": "What is the author's main purpose in writing this passage?", "opts": ["To complain about Cappadocia", "To encourage people to visit Cappadocia", "To explain hot-air balloons", "To describe Turkish culture"], "ans": 1, "exp": "文章最後說『pack a bag and come join the fun』，目的是推薦讀者去卡帕多西亞。"},
      {"q": "\"Cappadocia is better than any other place on earth.\" Is this statement a fact or an opinion?", "opts": ["It is a definite fact", "It is the author's personal opinion", "It is a scientific fact", "It cannot be determined"], "ans": 1, "exp": "這是作者的主觀意見（opinion），因為沒有客觀的絕對標準來比較『最好的地方』。"},
      {"q": "What do people from around the world come to Cappadocia to do?", "opts": ["Buy souvenirs", "Learn Turkish", "Enjoy the view and take pictures", "Meet local residents"], "ans": 2, "exp": "文章說『People from around the world come to enjoy the view and take pictures』。"},
      {"q": "How would the weather in Cappadocia affect a balloon ride?", "opts": ["Bad weather makes the ride more dangerous", "Good weather makes the ride safe and comfortable", "Weather doesn't matter for balloon rides", "Strong wind is necessary for balloon rides"], "ans": 1, "exp": "文章說『With this good weather, the ride is safe and comfortable』。"}
    ]
  },
  {
    "id": "G8B_U2_DIALOGUE",
    "book": "國八下",
    "unit": "U2",
    "title": "Unit 2 對話 — Red Fire Ants Are the Most Dangerous",
    "type": "dialogue",
    "text": `Cody: Let's go rest on the grass.
Yuki: Wait! Look at the sign. It says, "Be Careful of Red Fire Ants!"
Zac: They're the most dangerous ants of all. Their bites can even cause death.
Cody: That sounds terrible. Can we just kick their nest down?
Zac: That's the worst thing to do. The ants will bite you to protect themselves. Killing them with hot water is the easiest and fastest way.
Ela: We don't have hot water. Staying away from them is the best idea for now.
Zac: I agree. Let's go sit on the rocks.
Cody: I want to move this rock over there, but I can't do it by myself. Can someone give me a hand?
Ela: Watch out. There might be a snake under it.
Cody: Thanks for telling me. Snakes are the scariest animals to me.
Ela: Outdoor safety is important. It's better to be safe than sorry.`,
    "questions": [
      {
        "q": "Why is kicking the fire ant nest a bad idea?",
        "opts": ["The nest is too heavy.","The ants will bite to protect themselves.","The nest is too deep underground.","It might rain."],
        "ans": 1,
        "exp": "Zac says 'The ants will bite you to protect themselves.'"
      },
      {
        "q": "\"I can't do it by myself.\" What does 'by myself' mean?",
        "opts": ["with my friends","alone / without help","next to me","by myself at home"],
        "ans": 1,
        "exp": "by + 反身代名詞 表示「獨自地、靠自己」。"
      },
      {
        "q": "Which is the SUPERLATIVE form used correctly in the dialogue?",
        "opts": [
          "They're the most dangerous ants of all.",
          "Their bites are the more dangerous.",
          "Snakes are scariest of all animals.",
          "That's the worse thing to do."
        ],
        "ans": 0,
        "exp": "the most dangerous ants of all 是正確最高級句型。"
      },
      {
        "q": "\"The ants will bite you to protect themselves.\" The word 'themselves' refers to ___.",
        "opts": ["Cody and his friends","the fire ants","the snakes","the rocks"],
        "ans": 1,
        "exp": "themselves 是 they 的反身代名詞，指fire ants。"
      },
      {
        "q": "What does Ela suggest they do about the fire ants?",
        "opts": ["Kill them with hot water","Stay away from them","Kick their nest","Call for help"],
        "ans": 1,
        "exp": "Ela says 'Staying away from them is the best idea for now.'"
      }
    ,
      {"q": "What is the sign warning people about?", "opts": ["Snakes on the grass", "Red Fire Ants", "Bad weather", "Rocks to avoid"], "ans": 1, "exp": "Yuki 說『It says, \"Be Careful of Red Fire Ants!\"』"},
      {"q": "How dangerous are red fire ants according to Zac?", "opts": ["They are not dangerous at all", "They are mildly dangerous", "They are the most dangerous ants and their bites can cause death", "They are less dangerous than regular ants"], "ans": 2, "exp": "Zac 說『They're the most dangerous ants of all. Their bites can even cause death』。"},
      {"q": "Why is kicking the fire ant nest a bad idea?", "opts": ["It won't kill the ants", "The ants will protect themselves by biting", "The nest is underground", "It makes a loud noise"], "ans": 1, "exp": "Zac 說『The ants will bite you to protect themselves』。"},
      {"q": "\"Killing them with hot water is the easiest and fastest way.\" What adjectives describe how to kill fire ants?", "opts": ["dangerous and slow", "safe and quick", "easiest and fastest", "hardest and slowest"], "ans": 2, "exp": "文章明確說『Killing them with hot water is the easiest and fastest way』。"},
      {"q": "What does Ela do when Cody wants to move a rock?", "opts": ["She helps him move it", "She warns him about a possible snake", "She tells him the rock is too heavy", "She suggests moving a different rock"], "ans": 1, "exp": "Ela 說『Watch out. There might be a snake under it』。"},
      {"q": "Which sentence uses superlative form INCORRECTLY?", "opts": ["They're the most dangerous ants of all.", "This is the worst thing to do.", "That's the scariest animal to me.", "Snakes are the most scary animals."], "ans": 3, "exp": "scary 用 scariest（最高級）較恰當，『most scary』較少使用，且不符合文章語氣。"},
      {"q": "\"Staying away from them is the best idea for now.\" What does 'for now' mean?", "opts": ["forever", "at this moment in time", "never", "yesterday"], "ans": 1, "exp": "for now 表示『目前為止』或『現在』。"},
      {"q": "What does the phrase 'by myself' in 'I can't do it by myself' indicate?", "opts": ["Cody is alone at home", "Cody needs help from others", "Cody is strong", "Cody is next to himself"], "ans": 1, "exp": "by + 反身代名詞表示『靠自己』，所以 by myself = 沒有幫助，需要別人協助。"},
      {"q": "What conclusion can we draw about outdoor safety from the dialogue?", "opts": ["Outdoor activities are always dangerous", "It is important to be aware of dangers and take precautions", "Snakes and ants are harmless", "People should never go outdoors"], "ans": 1, "exp": "Ela 說『Outdoor safety is important. It's better to be safe than sorry』，說明戶外安全很重要。"},
      {"q": "\"They're the most dangerous ants of all.\" Which superlative structure is used?", "opts": ["the + Adj-est", "the most + Adj", "more than", "as...as"], "ans": 1, "exp": "dangerous 是多音節形容詞，最高級使用『the most + adjective』結構。"}
    ]
  },
  {
    "id": "G8B_U2_READING",
    "book": "國八下",
    "unit": "U2",
    "title": "Unit 2 閱讀 — Smart Road Safety Designs",
    "type": "reading",
    "text": `Road accidents happen every day, and this is a big problem around the world. To keep everyone safe, many countries have smart road safety designs.

To start with, Japan has "singing roads." These roads play beautiful music when drivers follow the traffic rules, but they make strange sounds when drivers don't.

Another example is the 3D crosswalk in Iceland. It appears to float in the air. When drivers see the crosswalk from far away, they slow down because they don't want to "hit" it.

Finally, in South Korea, some traffic lights are on the ground. Many people don't stop using their phones when crossing the road. With this design, people can see the traffic lights even when they look down at their phones.

Thanks to these smart designs, roads are becoming safer. However, following traffic rules and being careful are still the best ways to protect ourselves.`,
    "questions": [
      {
        "q": "What do Japan's 'singing roads' do when drivers DON'T follow traffic rules?",
        "opts": ["Play beautiful music","Make strange sounds","Turn red","Stop working"],
        "ans": 1,
        "exp": "The passage says the roads 'make strange sounds when drivers don't.'"
      },
      {
        "q": "Why do drivers slow down when they see Iceland's 3D crosswalk?",
        "opts": ["It is very colorful.","It appears to float in the air.","It makes loud noises.","It is very wide."],
        "ans": 1,
        "exp": "The crosswalk appears to float in the air, so drivers slow down."
      },
      {
        "q": "What problem do South Korea's ground-level traffic lights solve?",
        "opts": [
          "Drivers speeding on highways",
          "People using phones while crossing the road",
          "Traffic jams in big cities",
          "Children running across streets"
        ],
        "ans": 1,
        "exp": "The design helps people who look down at their phones still see the traffic lights."
      },
      {
        "q": "\"Roads are becoming safer.\" What grammar structure is used here?",
        "opts": ["Comparative adjective","Linking verb + adjective","be + V-ing (present progressive)","Superlative adjective"],
        "ans": 2,
        "exp": "are becoming 是現在進行式（be + V-ing），safer 是形容詞。"
      },
      {
        "q": "According to the passage, what is STILL the best way to stay safe on roads?",
        "opts": [
          "Using smart road designs",
          "Following traffic rules and being careful",
          "Always looking at your phone",
          "Driving slowly at all times"
        ],
        "ans": 1,
        "exp": "The passage says 'following traffic rules and being careful are still the best ways.'"
      }
    ,
      {"q": "What is the main problem addressed in this passage?", "opts": ["Pollution in cities", "Road accidents around the world", "Poor weather conditions", "Expensive cars"], "ans": 1, "exp": "文章開頭說『Road accidents happen every day, and this is a big problem around the world』。"},
      {"q": "How do Japan's 'singing roads' work?", "opts": ["They sing songs to drivers", "They play beautiful music for good drivers and make strange sounds for bad drivers", "They only play music at night", "They help cars avoid accidents"], "ans": 1, "exp": "文章說『These roads play beautiful music when drivers follow the traffic rules, but they make strange sounds when drivers don't』。"},
      {"q": "What is the purpose of Iceland's 3D crosswalk?", "opts": ["To look beautiful", "To make the road wider", "To appear to float, causing drivers to slow down", "To replace regular crosswalks"], "ans": 2, "exp": "文章說『It appears to float in the air. When drivers see the crosswalk from far away, they slow down』。"},
      {"q": "\"It appears to float in the air.\" What does 'appear' mean in this sentence?", "opts": ["to show up", "to seem / to look like", "to disappear", "to float"], "ans": 1, "exp": "appear 在此表示『看起來』或『似乎』的意思。"},
      {"q": "Why are ground-level traffic lights useful in South Korea?", "opts": ["They are cheaper than regular lights", "They help people using phones see the traffic signals", "They prevent rain from falling", "They make the road look nice"], "ans": 1, "exp": "文章說『With this design, people can see the traffic lights even when they look down at their phones』。"},
      {"q": "\"Roads are becoming safer.\" What verb form is 'becoming'?", "opts": ["simple present", "present progressive", "past tense", "future tense"], "ans": 1, "exp": "becoming 是 be + V-ing（現在進行式），表示正在進行的過程。"},
      {"q": "Which country's safety design addresses people using mobile phones?", "opts": ["Japan", "Iceland", "South Korea", "United States"], "ans": 2, "exp": "文章說『Many people don't stop using their phones when crossing the road. With this design...』，指南韓的地面交通號誌。"},
      {"q": "What does the passage suggest is still most important for road safety?", "opts": ["Using smart technology", "Following traffic rules and being careful", "Driving slowly all the time", "Using expensive cars"], "ans": 1, "exp": "文章結論說『following traffic rules and being careful are still the best ways to protect ourselves』。"},
      {"q": "\"The crosswalk appears to float in the air.\" Is this literally true?", "opts": ["Yes, it really floats", "No, it only appears to float but is actually on the ground", "It is invisible", "It moves constantly"], "ans": 1, "exp": "appear 表示『看起來』，3D 效果使十字路口看起來像浮在空中，但實際上在地面上。"},
      {"q": "How are the three examples (Japan, Iceland, South Korea) similar?", "opts": ["They all play music", "They all use technology to make roads safer", "They all use lights", "They are not similar at all"], "ans": 1, "exp": "三個例子都是聰明的道路安全設計，用不同的方法來提高行車安全。"}
    ]
  },
  {
    "id": "G8B_U3_DIALOGUE",
    "book": "國八下",
    "unit": "U3",
    "title": "Unit 3 對話 — The Animals Work Hard",
    "type": "dialogue",
    "text": `Ida the Cow: Mr. Jones is mean to us. He makes us work day and night and seldom lets us take a break.
Rio the Horse: Over ten hours. We work hard, but Mr. Jones doesn't treat us well. We are thin and weak.
Ida the Cow: Hens, what about you?
Pox the Hen: We work the hardest, but Mr. Jones takes all our eggs and treats us badly. Our house is small and dirty.
Ida the Cow: Rio, you run the most quickly of all. Go tell everybody.
Eddie the Pig: Wait. Why don't we fight for our rights in a different way?
Ida the Cow: How?
Eddie the Pig: We can report Mr. Jones to the Labor Department. They will make him treat us better.
Ida the Cow: We'll need a lawyer, but we don't have money for that.
Eddie the Pig: Have a look at this lawyer's web page. She provides free services.
Ida the Cow: Good. Everyone, let's try Eddie's idea.
Everyone: Sure! That's a wise thing to do.`,
    "questions": [
      {
        "q": "\"Mr. Jones doesn't treat us well.\" What does 'well' function as here?",
        "opts": ["adjective","adverb","noun","verb"],
        "ans": 1,
        "exp": "well 是 good 的副詞，修飾動詞 treat。"
      },
      {
        "q": "\"We work the hardest.\" Which type of word is 'hardest'?",
        "opts": ["Superlative adjective","Superlative adverb","Comparative adverb","Linking verb"],
        "ans": 1,
        "exp": "hardest 修飾動詞 work，所以是副詞的最高級。"
      },
      {
        "q": "\"She provides free services.\" How does Ida feel about the lawyer?",
        "opts": ["Suspicious","Surprised and pleased","Angry","Confused"],
        "ans": 1,
        "exp": "Ida says 'Really?' and 'Good,' showing she is pleased."
      },
      {
        "q": "\"Rio, you run the most quickly of all.\" This sentence uses ___.",
        "opts": ["comparative adverb","superlative adverb","comparative adjective","linking verb"],
        "ans": 1,
        "exp": "the most quickly 是 quickly 的副詞最高級，修飾動詞 run。"
      },
      {
        "q": "What is Eddie's idea to solve the problem?",
        "opts": [
          "Fight Mr. Jones directly",
          "Run away from the farm",
          "Report Mr. Jones to the Labor Department",
          "Call the police"
        ],
        "ans": 2,
        "exp": "Eddie says 'We can report Mr. Jones to the Labor Department.'"
      }
    ,
      {"q": "\"Mr. Jones is mean to us.\" How does Ida describe Mr. Jones?", "opts": ["kind and helpful", "mean and unfair", "friendly and generous", "smart and wise"], "ans": 1, "exp": "Ida 說『Mr. Jones is mean to us』，明確描述他對動物們不好。"},
      {"q": "How many hours do the animals work each day?", "opts": ["5 hours", "8 hours", "over 10 hours", "20 hours"], "ans": 2, "exp": "Rio 說『Over ten hours. We work hard, but Mr. Jones doesn't treat us well』。"},
      {"q": "What does Eddie the Pig suggest as a solution?", "opts": ["Fight Mr. Jones directly", "Report Mr. Jones to the Labor Department", "Run away from the farm", "Ask the police for help"], "ans": 1, "exp": "Eddie 說『We can report Mr. Jones to the Labor Department』。"},
      {"q": "\"We work the hardest.\" What is 'hardest' here?", "opts": ["comparative adjective", "superlative adverb", "superlative adjective", "linking verb"], "ans": 1, "exp": "hardest 修飾動詞 work，是副詞的最高級形式。"},
      {"q": "Why doesn't Ida think they can get a lawyer?", "opts": ["There are no lawyers available", "Lawyers don't help animals", "They don't have money for legal fees", "The Labor Department is closed"], "ans": 2, "exp": "Ida 說『We'll need a lawyer, but we don't have money for that』。"},
      {"q": "What good news does Eddie share about the lawyer?", "opts": ["The lawyer is very famous", "The lawyer provides free services", "The lawyer works for the government", "The lawyer is very old"], "ans": 1, "exp": "Eddie 說『She provides free services』。"},
      {"q": "\"Rio, you run the most quickly of all.\" What does this mean?", "opts": ["Rio runs slowly compared to others", "Rio is the fastest runner among all the animals", "Rio doesn't run at all", "Rio runs as fast as the others"], "ans": 1, "exp": "the most quickly 是副詞的最高級，表示 Rio 跑得最快。"},
      {"q": "What does 'doesn't treat us well' indicate about Mr. Jones?", "opts": ["He is very kind", "He does not care for the animals properly", "He is nice to the animals", "He gives them good food"], "ans": 1, "exp": "treat well 表示『對待好』，反面就是沒有良好的對待。"},
      {"q": "What can we infer about the hens' living conditions?", "opts": ["They live in a large, clean house", "They have a small, dirty house and are treated badly", "They have the best living conditions", "They don't need a house"], "ans": 1, "exp": "Pox 說『We work the hardest... Our house is small and dirty』。"},
      {"q": "\"Everyone: Sure! That's a wise thing to do.\" What does this suggest about Eddie's idea?", "opts": ["The animals don't like the idea", "The animals think it is a foolish plan", "The animals think it is a smart and intelligent solution", "The animals are unsure about the idea"], "ans": 2, "exp": "wise 表示『聰明的、明智的』，動物們認為這是個聰明的辦法。"}
    ]
  },
  {
    "id": "G8B_U4_DIALOGUE",
    "book": "國八下",
    "unit": "U4",
    "title": "Unit 4 對話 — I Can Hear the Wind Blow",
    "type": "dialogue",
    "text": `Mr. Kaya: The typhoon is coming. I can see the trees on the street swaying.
Mrs. Kaya: I can hear the wind blow. I need to move the roses on our balcony inside, or the strong wind might blow them away.
Mr. Kaya: This is our first typhoon. We must be ready for it.
Ela: Dad, we have to prepare some food.
Mr. Kaya: Right. Let's go shopping later.
Ela: We should get candles, too.
Mrs. Kaya: No worries. We have flashlights.
(It's 8 p.m. Suddenly, the lights go out.)
Omer: It's so dark.
Mr. Kaya: Is everyone OK?
Omer: No. I need to use the bathroom, but I don't want to go by myself! I'm scared.
Mr. Kaya: Here, take a flashlight with you. You really should train yourself to face your fear of the dark.
Ela: Should we turn on the radio and listen to the latest news? If the typhoon gets stronger, we won't need to go to school tomorrow.
Omer: Great! A typhoon holiday!`,
    "questions": [
      {
        "q": "\"I can see the trees on the street swaying.\" The word 'swaying' tells us the trees are ___.",
        "opts": [
          "making noise",
          "moving back and forth right now",
          "falling down",
          "growing fast"
        ],
        "ans": 1,
        "exp": "感官動詞 see + 受詞 + V-ing，V-ing 強調動作正在進行中（樹正在搖擺）。"
      },
      {
        "q": "\"I can hear the wind blow.\" Here, 'blow' is ___.",
        "opts": ["a present participle (V-ing)","a base form verb (原形)","a past tense verb","an adjective"],
        "ans": 1,
        "exp": "感官動詞 hear + 受詞 + 原形動詞，blow 是原形，強調聽到完整動作。"
      },
      {
        "q": "\"We must be ready for it.\" What does 'must' express?",
        "opts": ["a suggestion","a strong obligation","a possibility","a habit"],
        "ans": 1,
        "exp": "must 表強烈義務或必要性（strong obligation）。"
      },
      {
        "q": "\"If the typhoon gets stronger, we won't need to go to school tomorrow.\" What is the grammar rule for the if-clause?",
        "opts": [
          "If + will + V, S + V",
          "If + V (present), S + will + V",
          "If + V (past), S + would + V",
          "If + V-ing, S + can + V"
        ],
        "ans": 1,
        "exp": "if 條件句：if 子句用現在式，主句用 will（未來式）。"
      },
      {
        "q": "\"You should train yourself to face your fear.\" The word 'yourself' is ___.",
        "opts": ["a personal pronoun","a reflexive pronoun","a possessive pronoun","an object pronoun"],
        "ans": 1,
        "exp": "yourself 是反身代名詞（reflexive pronoun），指主詞 you 本身。"
      }
    ,
      {"q": "What is the weather situation at the beginning of the dialogue?", "opts": ["It is sunny", "It is raining lightly", "A typhoon is coming", "It is snowing"], "ans": 2, "exp": "Mr. Kaya 說『The typhoon is coming』。"},
      {"q": "\"I can see the trees on the street swaying.\" What does this tell us?", "opts": ["The trees are tall", "The trees are moving in the wind", "The trees are dead", "The wind is calm"], "ans": 1, "exp": "sway 表示『搖擺』，表明強風導致樹木搖動。"},
      {"q": "What does Mrs. Kaya decide to do with the roses?", "opts": ["Plant them in the ground", "Cut them down", "Move them inside to protect them", "Leave them outside"], "ans": 2, "exp": "Mrs. Kaya 說『I need to move the roses on our balcony inside』。"},
      {"q": "What does Ela suggest they prepare for the typhoon?", "opts": ["Nothing", "Food", "Furniture", "Clothes"], "ans": 1, "exp": "Ela 說『Dad, we have to prepare some food』。"},
      {"q": "\"We must be ready for it.\" What does 'must' express?", "opts": ["suggestion", "strong obligation or necessity", "possibility", "permission"], "ans": 1, "exp": "must 表示強烈的義務或必要性。"},
      {"q": "What happens at 8 p.m.?", "opts": ["The typhoon starts", "The family goes to bed", "The lights go out", "A visitor arrives"], "ans": 2, "exp": "文章說『It's 8 p.m. Suddenly, the lights go out』。"},
      {"q": "Why is Omer scared to use the bathroom?", "opts": ["The bathroom is too small", "He is afraid of the dark", "The bathroom is dirty", "The typhoon is in the bathroom"], "ans": 1, "exp": "Omer 說『It's so dark』且『I don't want to go by myself! I'm scared』。"},
      {"q": "\"If the typhoon gets stronger, we won't need to go to school tomorrow.\" What is this type of sentence?", "opts": ["a comparison", "an if-clause / conditional sentence", "a superlative", "a linking verb sentence"], "ans": 1, "exp": "if + 現在式動詞，主句用 will + V，這是條件句。"},
      {"q": "What does Mr. Kaya suggest Omer should do?", "opts": ["Stay in bed", "Train himself to face his fear of the dark", "Never use the bathroom", "Ask someone to stay with him forever"], "ans": 1, "exp": "Mr. Kaya 說『You really should train yourself to face your fear of the dark』。"},
      {"q": "\"You should train yourself to face your fear.\" The word 'yourself' is what type of pronoun?", "opts": ["personal pronoun", "reflexive pronoun", "possessive pronoun", "relative pronoun"], "ans": 1, "exp": "yourself 是反身代名詞（reflexive pronoun），指主詞 you。"}
    ]
  },
  {
    "id": "G8B_U5_DIALOGUE",
    "book": "國八下",
    "unit": "U5",
    "title": "Unit 5 對話 — All of the Food Stands Look Great",
    "type": "dialogue",
    "text": `Yuki: All of the food stands here look great. I want to try everything. What do you want to try first, Zac?
Zac: Although most of the food here smells good, I don't feel like eating at all.
Yuki: That's not like you. What's the matter?
Zac: I have a sore throat. Maybe I have a cold.
Yuki: That explains it. I heard you cough at school today.
Zac: I'm sorry, but I should probably go home and take a rest. I am feeling so weak now.
Yuki: Sure. Take care of yourself and get well soon.
(The next day at noon)
Yuki: You look much better today! How are you feeling?
Zac: My throat doesn't hurt now. Thanks. I drank a lot of water and slept a lot. Both of my parents do that to treat a cold.
Yuki: So you didn't take any cold medicine?
Zac: No. I usually use food as medicine. For example, one of my favorite recipes for a cough is honey with lemon.
Yuki: Does that help?
Zac: Yes. That is a useful recipe from my grandma.`,
    "questions": [
      {
        "q": "\"All of the food stands here look great.\" Why is the verb 'look' (plural)?",
        "opts": [
          "Because 'all' is always singular",
          "Because 'food stands' is a countable plural noun",
          "Because 'all' takes a singular verb",
          "Because 'look' is a linking verb"
        ],
        "ans": 1,
        "exp": "all of + 可數複數名詞（food stands），動詞用複數 look。"
      },
      {
        "q": "\"Although most of the food here smells good, I don't feel like eating.\" What does 'although' signal?",
        "opts": ["a reason","a contrast / concession","a result","a condition"],
        "ans": 1,
        "exp": "although 表轉折（雖然…但是），連接兩個對比的想法。"
      },
      {
        "q": "\"One of my favorite recipes for a cough is honey with lemon.\" Why is the verb 'is' (singular)?",
        "opts": [
          "Because 'recipes' is uncountable",
          "Because 'one of' makes the subject singular",
          "Because 'honey' is singular",
          "Because 'lemon' is singular"
        ],
        "ans": 1,
        "exp": "one of + 複數名詞，主詞是 one，所以動詞用單數 is。"
      },
      {
        "q": "\"Both of my parents do that to treat a cold.\" Why is the verb 'do' (plural)?",
        "opts": [
          "Because 'both of' takes a plural verb",
          "Because 'treat' is the main verb",
          "Because 'parents' is singular",
          "Because 'both' is an adjective"
        ],
        "ans": 0,
        "exp": "both of + 複數名詞，動詞用複數。"
      },
      {
        "q": "Which sentence uses 'although' INCORRECTLY?",
        "opts": [
          "Although the food looks delicious, I don't want to eat it.",
          "Although he spent hours shopping, he wasn't tired.",
          "Although it was raining, but we still went out.",
          "I don't feel like eating although the food smells good."
        ],
        "ans": 2,
        "exp": "although 和 but 不可同時出現在同一句中。"
      }
    ,
      {"q": "Where does the conversation take place?", "opts": ["At home", "At school", "At a food market", "At a restaurant"], "ans": 2, "exp": "Yuki 說『All of the food stands here look great』，indicating a food market。"},
      {"q": "\"All of the food stands here look great.\" Why is the verb 'look' plural?", "opts": ["Because 'all' is always singular", "Because 'food stands' is a countable plural noun", "Because linking verbs are always plural", "Because 'great' requires a plural verb"], "ans": 1, "exp": "all of + 可數複數名詞 food stands，動詞用複數 look。"},
      {"q": "What is wrong with Zac?", "opts": ["He is hungry", "He has a sore throat and might have a cold", "He is tired", "He has a broken leg"], "ans": 1, "exp": "Zac 說『I have a sore throat. Maybe I have a cold』。"},
      {"q": "\"Although most of the food here smells good, I don't feel like eating.\" What does 'although' indicate?", "opts": ["a reason", "a contrast or concession", "a result", "a time order"], "ans": 1, "exp": "although 表示轉折，前句說食物聞起來很好，後句說不想吃，形成對比。"},
      {"q": "What does Zac do to treat his cold the next day?", "opts": ["He takes medicine", "He drinks water, sleeps a lot, and uses honey with lemon", "He goes to the doctor", "He eats lots of food"], "ans": 1, "exp": "Zac 說『I drank a lot of water and slept a lot』且提到『honey with lemon』食療。"},
      {"q": "\"Both of my parents do that to treat a cold.\" Why is the verb 'do' plural?", "opts": ["Because 'both' is always singular", "Because 'both of' takes a plural verb", "Because 'parents' is singular", "Because 'that' is plural"], "ans": 1, "exp": "both of + 複數名詞，動詞用複數 do。"},
      {"q": "\"One of my favorite recipes for a cough is honey with lemon.\" Why is 'is' singular?", "opts": ["Because 'recipes' is singular", "Because 'one of' makes the subject singular", "Because 'honey' is singular", "Because 'lemon' is singular"], "ans": 1, "exp": "one of + 複數名詞，主詞是 one，動詞用單數 is。"},
      {"q": "What can we infer about Zac's approach to health?", "opts": ["He only trusts doctors", "He prefers natural remedies and rest over medicine", "He never gets sick", "He likes to eat lots of medicine"], "ans": 1, "exp": "Zac 說『I usually use food as medicine』且提到從奶奶學來的食療方，推論他相信食療勝過西藥。"},
      {"q": "\"You look much better today!\" What is the implied meaning?", "opts": ["Zac looks worse", "Zac looks the same", "Zac has recovered from his cold", "Zac is still very sick"], "ans": 2, "exp": "look better 表示情況改善，結合前文 Zac 生病，現在看起來更好表示他開始康復。"},
      {"q": "Which sentence uses 'although' INCORRECTLY?", "opts": ["Although it was cold, we still went outside.", "Although the food smells good, I don't want to eat it.", "Although he was tired, but he finished his homework.", "Although she studied hard, she didn't pass the test."], "ans": 2, "exp": "although 和 but 不可同時在同一句中使用。"}
    ]
  },
  {
    "id": "G8B_U6_DIALOGUE",
    "book": "國八下",
    "unit": "U6",
    "title": "Unit 6 對話 — You Can Throw a Ball, Can't You?",
    "type": "dialogue",
    "text": `Shin: Come on, Cody. Pass the ball to me.
Cody: Here... oops, sorry.
Shin: You're a boy, aren't you? Why do you throw like a girl?
Jamie: What do you mean? I'm a girl, and I can throw well. I got more points than you, didn't I?
Yuki: Everyone is good and bad at something. Be nice to Cody.
Shin: Sorry, guys. I just wanted to win the game, but there's no excuse for me to speak like that.
Cody: No worries. I'm good now.
(At break)
Jamie: Hey, Cody. The science fair is just around the corner. Do you want to be a member of our group?
Cody: Are you sure? I don't usually get good grades in science. Do you know that I failed the test yesterday? I'm afraid that I will just hold you back.
Jamie: Come on! Few people passed the test. Also, grades aren't everything.
Yuki: Jamie's right. Don't forget that you're smart and always full of fresh ideas. I think that's more important.
Cody: OK, guys. Count me in!
Jamie: Great. Let's begin by having our first meeting tomorrow.`,
    "questions": [
      {
        "q": "\"You're a boy, aren't you?\" This is an example of ___.",
        "opts": ["a that-clause","a tag question","an if-clause","a comparative sentence"],
        "ans": 1,
        "exp": "前句肯定（You're a boy）→ 附加問句用否定（aren't you?），這是附加問句。"
      },
      {
        "q": "\"I got more points than you, didn't I?\" Choose the correct explanation.",
        "opts": [
          "The main clause is negative, so the tag is positive.",
          "The main clause is positive (got), so the tag is negative (didn't I?).",
          "The tag should be 'isn't it?' instead.",
          "The main clause uses 'will,' so the tag uses 'won't.'"
        ],
        "ans": 1,
        "exp": "前句肯定（I got）→ 附加問句用否定（didn't I?）。動詞 got 是過去式，助動詞用 did。"
      },
      {
        "q": "\"Grades aren't everything, are they?\" How should this tag question be answered if grades ARE important to the speaker?",
        "opts": ["Yes, they aren't.","No, they are.","Yes, they are.","No, they aren't."],
        "ans": 2,
        "exp": "回答依事實：如果成績是重要的，回答 Yes, they are.（不管附加問句的形式）"
      },
      {
        "q": "\"I'm afraid that I will just hold you back.\" The word 'that' here introduces ___.",
        "opts": ["a time clause","a noun (that) clause","a condition clause","a comparison"],
        "ans": 1,
        "exp": "be afraid that + S + V，that 引導名詞子句作受詞。"
      },
      {
        "q": "\"Don't forget that you're smart.\" In this sentence, 'that' can be ___.",
        "opts": ["replaced with 'because'","omitted (省略)","replaced with 'although'","replaced with 'if'"],
        "ans": 1,
        "exp": "that 名詞子句中，that 可以省略：Don't forget you're smart."
      }
    ,
      {"q": "\"You're a boy, aren't you?\" What type of sentence is this?", "opts": ["a statement", "a tag question", "a command", "a that-clause"], "ans": 1, "exp": "這是附加問句（tag question），在陳述句後加上簡短問句。"},
      {"q": "Why does Jamie respond to Shin's comment?", "opts": ["She agrees with him", "She is offended and defends herself", "She wants to be Shin's friend", "She is asking for advice"], "ans": 1, "exp": "Jamie 說『What do you mean? I'm a girl, and I can throw well』，她在為自己和女性辯護。"},
      {"q": "\"I got more points than you, didn't I?\" Why is the tag question 'didn't I'?", "opts": ["Because the main verb is always positive", "Because 'got' is past tense, so the tag uses past tense 'didn't'", "Because Jamie is asking a real question", "Because 'points' is plural"], "ans": 1, "exp": "前句肯定（I got），附加問句用否定（didn't I?），且主句動詞 got 是過去式，助動詞用 did。"},
      {"q": "What is the science fair opportunity for Cody?", "opts": ["He has to participate alone", "He is invited to join Jamie and Yuki's group", "He is not allowed to participate", "He can only watch from the sidelines"], "ans": 1, "exp": "Jamie 說『Do you want to be a member of our group?』"},
      {"q": "\"I'm afraid that I will just hold you back.\" What does 'that' introduce here?", "opts": ["a time clause", "a noun clause", "an if-clause", "a comparison"], "ans": 1, "exp": "be afraid that + S + V，that 引導名詞子句作受詞。"},
      {"q": "What reason does Cody give for worrying about joining the science fair group?", "opts": ["He doesn't like science", "He failed yesterday's science test", "The group members are mean to him", "The science fair is too difficult"], "ans": 1, "exp": "Cody 說『Do you know that I failed the test yesterday?』"},
      {"q": "\"Grades aren't everything, are they?\" If grades ARE important, how should you answer?", "opts": ["Yes, they aren't.", "No, they aren't.", "Yes, they are.", "No, they don't."], "ans": 2, "exp": "如果成績是重要的（事實為真），無論附加問句形式如何，回答『Yes, they are』（符合事實）。"},
      {"q": "What quality does Yuki emphasize that Cody has?", "opts": ["He is good at sports", "He has good grades", "He is smart and full of fresh ideas", "He is fast at math"], "ans": 2, "exp": "Yuki 說『you're smart and always full of fresh ideas. I think that's more important』。"},
      {"q": "\"Don't forget that you're smart.\" Can the word 'that' be omitted?", "opts": ["No, 'that' is always required", "Yes, 'that' can be omitted in noun clauses", "Only at the beginning of a sentence", "Never in this type of sentence"], "ans": 1, "exp": "名詞子句中，that 可以省略：Don't forget you're smart."},
      {"q": "What does Shin's apology suggest about his character development?", "opts": ["He doesn't care about others' feelings", "He realizes his mistake and regrets his comment", "He wants to make fun of everyone", "He is perfect and never does wrong things"], "ans": 1, "exp": "Shin 說『I just wanted to win the game, but there's no excuse for me to speak like that』，表示他認識到自己的錯誤。"}
    ]
  },
  {
    "id": "G8B_U6_READING",
    "book": "國八下",
    "unit": "U6",
    "title": "Unit 6 閱讀 — Does Gender Matter?",
    "type": "reading",
    "text": `Picture that you're sick in a hospital. A nurse comes up to you and brings you to a room. Inside, the doctor is sitting at a desk. Now, be honest. You pictured the nurse as a woman and the doctor as a man, didn't you? Then, you might hold a gender stereotype, and you should stop it.

Gender stereotypes can lead to many problems. People often say boys should be strong, brave, and good at sports. As for girls, they should be thin, kind, and good at cooking. These stereotypes can push people into hiding their true selves.

Many people try to break gender stereotypes. Take Jason Wu and Kuo Hsing-chun for example. Jason Wu is an excellent fashion designer. As for Kuo Hsing-chun, she believes women can be strong, too. She broke many world records. Both Jason Wu and Kuo Hsing-chun are able to live lives to the full because they didn't let gender stereotypes hold them back.

Everyone is special and different in their own way. Believe in yourself. Don't let gender stereotypes define you.`,
    "questions": [
      {
        "q": "\"You pictured the nurse as a woman and the doctor as a man, didn't you?\" What does this tag question suggest?",
        "opts": [
          "The author thinks this is correct.",
          "The author challenges readers to think about their own stereotypes.",
          "The author is asking for information.",
          "The author is angry at the reader."
        ],
        "ans": 1,
        "exp": "這個附加問句是在挑戰讀者反思自己的刻板印象，引出文章主題。"
      },
      {
        "q": "According to the passage, what CAN gender stereotypes lead to?",
        "opts": [
          "More job opportunities for everyone",
          "People hiding their true selves",
          "Better grades in school",
          "Stronger friendships"
        ],
        "ans": 1,
        "exp": "The passage says stereotypes 'can push people into hiding their true selves.'"
      },
      {
        "q": "\"Both Jason Wu and Kuo Hsing-chun are able to live lives to the full.\" Why?",
        "opts": [
          "They followed gender stereotypes carefully.",
          "They didn't let gender stereotypes hold them back.",
          "They both became doctors.",
          "They both studied at the same school."
        ],
        "ans": 1,
        "exp": "The passage says 'they didn't let gender stereotypes hold them back.'"
      },
      {
        "q": "\"I think that Jason Wu is a great designer.\" The word 'that' here is ___.",
        "opts": [
          "a conjunction introducing a noun clause",
          "a demonstrative pronoun",
          "a relative pronoun",
          "an article"
        ],
        "ans": 0,
        "exp": "think that + S + V，that 是連接詞引導名詞子句。"
      },
      {
        "q": "What is the main message of this passage?",
        "opts": [
          "Boys should be strong and girls should be kind.",
          "Fashion is the best career choice.",
          "Don't let gender stereotypes limit who you are.",
          "Sports are more important than fashion."
        ],
        "ans": 2,
        "exp": "The author concludes 'Don't let gender stereotypes define you.'"
      }
    ,
      {"q": "\"You pictured the nurse as a woman and the doctor as a man, didn't you?\" What is the author's purpose with this tag question?", "opts": ["To ask for information", "To challenge readers to examine their own gender stereotypes", "To state a fact", "To make a joke"], "ans": 1, "exp": "這個附加問句是在引導讀者思考自己的刻板印象，進而反思這個問題。"},
      {"q": "What problems can gender stereotypes create according to the passage?", "opts": ["They help people make good decisions", "They cause people to hide their true selves", "They make people happier", "They improve people's grades"], "ans": 1, "exp": "文章說『These stereotypes can push people into hiding their true selves』。"},
      {"q": "What stereotype does the passage mention about boys?", "opts": ["They should be thin and kind", "They should be strong, brave, and good at sports", "They should be good at cooking", "They should be quiet and shy"], "ans": 1, "exp": "文章說『boys should be strong, brave, and good at sports』。"},
      {"q": "Who is Jason Wu and what does he represent?", "opts": ["A sports athlete who breaks records", "A fashion designer who breaks gender stereotypes", "A doctor who works in hospitals", "A teacher who doesn't believe in education"], "ans": 1, "exp": "文章說『Jason Wu is an excellent fashion designer』，他代表打破性別刻板印象。"},
      {"q": "What is Kuo Hsing-chun known for?", "opts": ["Being a fashion designer", "Being a nurse", "Being a weightlifter and breaking world records", "Being a teacher"], "ans": 2, "exp": "文章說『Kuo Hsing-chun...she believes women can be strong, too. She broke many world records』。"},
      {"q": "\"Both Jason Wu and Kuo Hsing-chun are able to live lives to the full.\" Why?", "opts": ["They followed all gender stereotypes", "They didn't let gender stereotypes hold them back", "They avoided all challenges", "They gave up their dreams"], "ans": 1, "exp": "文章說『they didn't let gender stereotypes hold them back』。"},
      {"q": "What is a gender stereotype according to the passage?", "opts": ["A scientific fact about boys and girls", "An incorrect belief about what boys and girls should do", "A rule that everyone must follow", "A new type of clothing"], "ans": 1, "exp": "性別刻板印象是對男女應該做什麼的不正確固定想法。"},
      {"q": "\"Everyone is special and different in their own way.\" What message does this convey?", "opts": ["Everyone should be the same", "People should follow gender stereotypes", "People have unique qualities that shouldn't be limited by stereotypes", "Only some people are special"], "ans": 2, "exp": "這句話傳達每個人都獨特且不同，不應被刻板印象限制。"},
      {"q": "What is the author's main recommendation at the end?", "opts": ["Follow all gender rules strictly", "Don't believe in yourself", "Believe in yourself and don't let stereotypes define you", "Always listen to what others say"], "ans": 2, "exp": "文章結論說『Believe in yourself. Don't let gender stereotypes define you』。"},
      {"q": "Which sentence from the passage best shows someone breaking a gender stereotype?", "opts": ["Boys should be strong and brave", "Girls should be good at cooking", "Jason Wu is an excellent fashion designer", "People often say boys should be strong"], "ans": 2, "exp": "Jason Wu 是時尚設計師通常被視為女性的職業，這打破了刻板印象。"}
    ]
  }
];
