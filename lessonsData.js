export const lessonsData = [
  {
    id: 'week-1',
    title: 'Survival English',
    description: 'Essential phrases for everyday situations',
    days: [
      {
        id: 'day-1',
        title: 'Greetings & Introductions',
        isReview: false,
        sections: [
          {
            type: 'phrases',
            items: [
              { english: "What's up?", meaning: 'Chào hỏi thân mật', pronunciation: '/wɒts ʌp/', usage: 'casual', tone: 'casual', situation: 'Với bạn bè', example: "Hey! What's up? Long time no see!" },
              { english: "Nice to meet you!", meaning: 'Rất vui được gặp bạn', pronunciation: '/naɪs tuː miːt juː/', usage: 'formal', tone: 'friendly', situation: 'Khi gặp ai đó lần đầu', example: "Hi, I'm Mike. Nice to meet you!" },
              { english: "How's it going?", meaning: 'Dạo này thế nào?', pronunciation: '/haʊz ɪt ˈɡəʊɪŋ/', usage: 'neutral', tone: 'casual', situation: 'Chào hỏi', example: "Hey John! How's it going? Been a while." },
              { english: "Long time no see!", meaning: 'Lâu rồi không gặp!', pronunciation: '/lɒŋ taɪm nəʊ siː/', usage: 'neutral', tone: 'warm', situation: 'Gặp lại người quen', example: "Wow, long time no see! How have you been?" },
              { english: "You alright?", meaning: 'Bạn ổn chứ?', pronunciation: '/juː ɔːlˈraɪt/', usage: 'casual', tone: 'caring', situation: 'Ở UK', example: "Hey mate, you alright? You look tired." },
            ]
          },
          {
            type: 'vocabulary',
            items: [
              { word: 'buddy', phonetic: '/ˈbʌdi/', meaning: 'Bạn thân', collocations: 'old buddy, buddy system', formalExample: 'My colleague Jack.', casualExample: "Hey buddy, what's going on?", commonMistakes: 'Too casual for strangers', memoryTrick: 'Bud-dy = Bạn già', difficulty: 2 },
              { word: 'colleague', phonetic: '/ˈkɒliːɡ/', meaning: 'Đồng nghiệp', collocations: 'close colleague', formalExample: 'My colleague from London office.', casualExample: "She's my colleague.", commonMistakes: 'For classmates', memoryTrick: 'Colleague = Cùng làm', difficulty: 3 },
              { word: 'mate', phonetic: '/meɪt/', meaning: 'Bạn (UK slang)', collocations: 'best mate', formalExample: 'I work with my mates.', casualExample: "Oi mate, coming to the pub?", commonMistakes: 'Too informal US', memoryTrick: 'Mate = Mấy thím', difficulty: 2 },
              { word: 'acquaintance', phonetic: '/əˈkweɪntəns/', meaning: 'Người quen', collocations: 'casual acquaintance', formalExample: 'Business acquaintance.', casualExample: "He's just an acquaintance.", commonMistakes: 'For close friends', memoryTrick: 'Ac-quain-tance = Biết mặt', difficulty: 4 },
              { word: 'greetings', phonetic: '/ˈɡriːtɪŋz/', meaning: 'Lời chào', collocations: 'warm greetings', formalExample: 'My warmest greetings.', casualExample: 'Just wanted to send greetings!', commonMistakes: 'Singular', memoryTrick: 'Greet-ings = Chào nhau', difficulty: 1 },
            ]
          },
          {
            type: 'dialogue',
            situation: 'Meeting someone new at a party',
            items: [
              { speaker: 'A', english: "Hey! I don't think we've met. I'm Alex.", meaning: 'Chúng ta chưa gặp. Mình là Alex.' },
              { speaker: 'B', english: "Hi Alex! Nice to meet you! I'm Sarah.", meaning: 'Rất vui được gặp! Mình là Sarah.' },
              { speaker: 'A', english: "Nice to meet you too! How do you know the host?", meaning: 'Cậu quen chủ nhà thế nào?' },
              { speaker: 'B', english: "We're old college friends. What about you?", meaning: 'Chúng tớ là bạn đại học cũ.' },
              { speaker: 'A', english: "He's my neighbor. Just moved in last week.", meaning: 'Anh ấy là hàng xóm.' },
              { speaker: 'B', english: "Oh nice! Welcome! Let me get you a drink.", meaning: 'Chào mừng! Để mình lấy cho cậu một ly nhé.' },
            ]
          },
          {
            type: 'grammar',
            items: {
              title: '"Nice to meet you" vs "Nice to SEE you"',
              textbook: 'Use "nice to meet you" for first meetings and "nice to see you" for remeetings.',
              native: '"Nice to see you" is more common when you\'ve met before. Often shortened to "Good to see ya!"',
              formalVsCasual: { formal: 'It is a pleasure to make your acquaintance.', casual: "Nice to meetcha! / Good to see ya!" },
              commonMistakes: "Don't say 'Nice to meet you' when you see someone again!",
              examples: ['Nice to meet you! (first time)', "Good to see you again! (remeeting)"],
            }
          },
          {
            type: 'writing',
            items: {
              situation: 'Introducing yourself',
              instructions: 'Write 2-3 sentences to introduce yourself',
              examples: "Hi! I'm [name] from [country]. I'm a student. I love [hobby]. Nice to meet you!",
              hints: ['Start with greeting', 'Mention where you are from', 'Share one interest'],
            }
          },
          {
            type: 'quiz',
            questions: [
              { type: 'multipleChoice', question: "Which is MOST casual?", options: ['How do you do?', "Nice to meet you", "What's up?", 'Pleasure to meet you'], correctAnswer: "What's up?", explanation: '"What\'s up?" is very casual.' },
              { type: 'fillBlank', question: "Nice to ___ you!", correctAnswer: 'meet', explanation: '"Nice to meet you" is correct.' },
            ]
          },
          {
            type: 'dailyMission',
            items: { vocabRecap: true, speakingMission: true, mirrorChallenge: true, sentencesToUse: ["Nice to meet you!", "How's it going?", "Long time no see!"], confidenceTracker: 50 }
          }
        ]
      },
      {
        id: 'day-2',
        title: 'Asking for Help',
        isReview: false,
        sections: [
          {
            type: 'phrases',
            items: [
              { english: "Could you help me with this?", meaning: 'Bạn có thể giúp mình không?', pronunciation: '/kʊd juː help miː wɪð ðɪs/', usage: 'polite', tone: 'polite', situation: 'Yêu cầu giúp đỡ', example: "Hey, could you help me with this report?" },
              { english: "Do you have a minute?", meaning: 'Bạn có một phút không?', pronunciation: '/duː juː hæv ə ˈmɪnɪt/', usage: 'neutral', tone: 'polite', situation: 'Cần nói chuyện nhanh', example: "Do you have a minute? I need your advice." },
              { english: "Can I get a hand?", meaning: 'Cho mình xin một tay?', pronunciation: '/kæn aɪ get ə hænd/', usage: 'casual', tone: 'casual', situation: 'Cần giúp đỡ', example: "Can I get a hand moving these boxes?" },
              { english: "I was wondering if you could help me...", meaning: 'Mình muốn hỏi bạn...', pronunciation: '/aɪ wɒz ˈwʌndərɪŋ/', usage: 'formal', tone: 'very polite', situation: 'Yêu cầu quan trọng', example: "I was wondering if you could help me with the presentation." },
              { english: "I could really use some help here", meaning: 'Mình cần được giúp đỡ', pronunciation: '/aɪ kʊd ˈrɪəli/', usage: 'casual', tone: 'urgent', situation: 'Đang gặp khó khăn', example: "I could really use some help here." },
            ]
          },
          {
            type: 'vocabulary',
            items: [
              { word: 'assist', phonetic: '/əˈsɪst/', meaning: 'Hỗ trợ', collocations: 'assist with', formalExample: 'I am here to assist you.', casualExample: "Can you assist me with this?", memoryTrick: 'As-sist = Hỗ trợ', difficulty: 2 },
              { word: 'lend a hand', phonetic: '/lend ə hænd/', meaning: 'Giúp đỡ', collocations: 'lend me a hand', formalExample: 'Would you lend me a hand?', casualExample: "Can you lend me a hand?", memoryTrick: 'Lend + hand = Giúp', difficulty: 3 },
              { word: 'favor', phonetic: '/ˈfeɪvə/', meaning: 'Nhờ vả', collocations: 'do me a favor', formalExample: 'Could I ask you a favor?', casualExample: "Do me a favor and grab me coffee?", memoryTrick: 'Favor = Ơn', difficulty: 2 },
              { word: 'support', phonetic: '/səˈpɔːt/', meaning: 'Hỗ trợ', collocations: 'customer support', formalExample: 'Please contact support.', casualExample: "Thanks for the support!", memoryTrick: 'Support = Đỡ dưới', difficulty: 1 },
              { word: 'guidance', phonetic: '/ˈɡaɪdəns/', meaning: 'Hướng dẫn', collocations: 'seek guidance', formalExample: 'I seek your guidance.', casualExample: "Could use some guidance.", memoryTrick: 'Guide-ance = Hướng dẫn', difficulty: 3 },
            ]
          },
          {
            type: 'dialogue',
            situation: 'Asking a colleague for help',
            items: [
              { speaker: 'A', english: "Hey Sarah, do you have a minute?", meaning: 'Này Sarah, cậu có một phút không?' },
              { speaker: 'B', english: "Sure, what's up?", meaning: 'Ừ, có chuyện gì?' },
              { speaker: 'A', english: "I'm stuck on this Excel formula. Could you help me?", meaning: 'Mình bị stuck với công thức Excel này.' },
              { speaker: 'B', english: "Of course! Let me take a look.", meaning: 'Tất nhiên! Để mình xem qua.' },
              { speaker: 'A', english: "Thanks so much! I've been trying for an hour.", meaning: 'Cảm ơn nhiều! Mình đã cố 1 tiếng rồi.' },
              { speaker: 'B', english: "No problem! Try using VLOOKUP instead.", meaning: 'Không có gì! Thử dùng VLOOKUP xem.' },
            ]
          },
          {
            type: 'grammar',
            items: {
              title: 'Could vs Can - Politeness',
              textbook: '"Could" is more polite than "can".',
              native: '"Could you..." sounds less demanding than "Can you..."',
              formalVsCasual: { formal: 'I was wondering if you could...', casual: "Hey, can you help me?" },
              commonMistakes: '"cannot" vs "can\'t" - we say "can\'t"',
              examples: ['Could you pass me the salt? (polite)', 'Can you swim? (ability)'],
            }
          },
          {
            type: 'writing',
            items: {
              situation: 'Asking a professor for help',
              instructions: 'Write a polite email asking for help',
              examples: "Dear Professor [Name],\nI hope this email finds you well. I am writing to ask for guidance on [topic]. Would you have time this week?\nThank you.\nSincerely, [Your name]",
              hints: ['Use formal greeting', 'Be specific', 'Thank them'],
            }
          },
          {
            type: 'quiz',
            questions: [
              { type: 'multipleChoice', question: "Which is MOST polite?", options: ['Help me!', 'Can you help me?', 'Could you help me?', 'Help me please!'], correctAnswer: 'Could you help me?', explanation: '"Could" sounds more polite.' },
              { type: 'fillBlank', question: "Do you have a ___?", correctAnswer: 'minute', explanation: '"Do you have a minute?" is common.' },
            ]
          },
          {
            type: 'dailyMission',
            items: { vocabRecap: true, speakingMission: true, mirrorChallenge: true, sentencesToUse: ["Could you help me with this?", "Do you have a minute?", "I could really use some help."], confidenceTracker: 55 }
          }
        ]
      },
      {
        id: 'day-3',
        title: 'Directions & Locations',
        isReview: false,
        sections: [
          {
            type: 'phrases',
            items: [
              { english: "How do I get to...?", meaning: 'Làm sao đến...?', pronunciation: '/haʊ duː aɪ ɡet tuː/', usage: 'neutral', tone: 'neutral', situation: 'Hỏi đường', example: "How do I get to the train station?" },
              { english: "It's right around the corner", meaning: 'Ngay ở góc đó', pronunciation: '/ɪts raɪt əˈraʊnd/', usage: 'casual', tone: 'helpful', situation: 'Chỉ đường gần', example: "The coffee shop? It's right around the corner." },
              { english: "Go straight past the...", meaning: 'Đi thẳng qua...', pronunciation: '/ɡəʊ streɪt pɑːst/', usage: 'neutral', tone: 'informative', situation: 'Hướng dẫn', example: "Go straight past the bank, then turn left." },
              { english: "You're looking at it", meaning: 'Bạn đang nhìn nó đấy', pronunciation: '/jɔː ˈlʊkɪŋ æt ɪt/', usage: 'casual', tone: 'funny', situation: 'Khi người hỏi đứng ngay tại đó', example: "Where's the library? Oh, you're looking at it!" },
              { english: "Head towards the...", meaning: 'Đi về hướng...', pronunciation: '/hed təˈwɔːdz/', usage: 'neutral', tone: 'direct', situation: 'Chỉ đường', example: "Head towards the park." },
            ]
          },
          {
            type: 'vocabulary',
            items: [
              { word: 'intersection', phonetic: '/ˌɪntəˈsekʃən/', meaning: 'Ngã tư', collocations: 'busy intersection', formalExample: 'Turn left at the intersection.', casualExample: "Turn left at the big intersection.", memoryTrick: 'Inter-section = Giao đoạn', difficulty: 4 },
              { word: 'block', phonetic: '/blɒk/', meaning: 'Khu, dãy nhà', collocations: 'two blocks away', formalExample: 'Three blocks from here.', casualExample: "It's just a few blocks away.", memoryTrick: 'Block = Dãy nhà', difficulty: 2 },
              { word: 'landmark', phonetic: '/ˈlændmɑːk/', meaning: 'Điểm mốc', collocations: 'famous landmark', formalExample: 'A famous landmark.', casualExample: "You'll see the church - it's a landmark.", memoryTrick: 'Land-mark = Dấu trên đất', difficulty: 3 },
              { word: 'opposite', phonetic: '/ˈɒpəzɪt/', meaning: 'Đối diện', collocations: 'opposite the bank', formalExample: 'Opposite the railway station.', casualExample: "It's right opposite.", memoryTrick: 'Oppo-site = Bên kia', difficulty: 2 },
              { word: 'next door to', phonetic: '/nekst dɔː tuː/', meaning: 'Cạnh nhà', collocations: 'live next door', formalExample: 'Next door to the clinic.', casualExample: "My friend lives next door.", memoryTrick: 'Next door = Cửa kế tiếp', difficulty: 1 },
            ]
          },
          {
            type: 'dialogue',
            situation: 'Asking for directions',
            items: [
              { speaker: 'A', english: "Excuse me, how to get to Central Park?", meaning: 'Xin lỗi, đường đến Central Park?' },
              { speaker: 'B', english: "Sure! Walking or subway?", meaning: 'Ừ! Đi bộ hay tàu?' },
              { speaker: 'A', english: "I'm walking.", meaning: 'Mình đi bộ.' },
              { speaker: 'B', english: "Walk down this street for two blocks.", meaning: 'Đi thẳng 2 dãy nhà.' },
              { speaker: 'A', english: "Got it. And then?", meaning: 'Hiểu rồi. Rồi sao?' },
              { speaker: 'B', english: "Turn left at the traffic light. Can't miss it!", meaning: 'Rẽ trái ở đèn. Bạn sẽ thấy ngay!' },
            ]
          },
          {
            type: 'grammar',
            items: {
              title: 'Prepositions of Place',
              textbook: 'Use "next to", "near", "opposite", "between".',
              native: '"Behind the building" not "in back of"',
              formalVsCasual: { formal: 'Adjacent to the elevator.', casual: "Right next to the elevator." },
              commonMistakes: '"in" vs "on" for floors - it\'s "on the 5th floor"',
              examples: ['The store is next to the bank.', "It's between the library and cafe."],
            }
          },
          {
            type: 'quiz',
            questions: [
              { type: 'multipleChoice', question: "What is a landmark?", options: ['In a book', 'Reference point', 'In a shop', 'At home'], correctAnswer: 'Reference point', explanation: 'Landmark helps you find a location.' },
              { type: 'fillBlank', question: "Right ___ the corner.", correctAnswer: 'around', explanation: '"Around the corner" means very close.' },
            ]
          },
          {
            type: 'dailyMission',
            items: { vocabRecap: true, speakingMission: true, mirrorChallenge: true, sentencesToUse: ["How do I get to...?", "It's around the corner.", "Go straight past the..."], confidenceTracker: 60 }
          }
        ]
      },
      {
        id: 'day-4',
        title: 'Ordering Food',
        isReview: false,
        sections: [
          {
            type: 'phrases',
            items: [
              { english: "What do you recommend?", meaning: 'Bạn recommend gì?', pronunciation: '/wɒt duː juː ˌrekəˈmend/', usage: 'neutral', tone: 'curious', situation: 'Hỏi gợi ý', example: "What do you recommend?" },
              { english: "Can I get this to go?", meaning: 'Cho mình mang về?', pronunciation: '/kæn aɪ get ðɪs tuː ɡəʊ/', usage: 'casual', tone: 'casual', situation: 'Order mang về', example: "I'm in a hurry. Can I get this to go?" },
              { english: "I'll have the...", meaning: 'Mình sẽ gọi...', pronunciation: '/aɪl hæv ðə/', usage: 'neutral', tone: 'confident', situation: 'Đặt món', example: "I'll have the chicken sandwich." },
              { english: "I'm allergic to...", meaning: 'Mình dị ứng với...', pronunciation: '/aɪm əˈlɜːdʒɪk tuː/', usage: 'important', tone: 'urgent', situation: 'Thông báo dị ứng', example: "I'm allergic to peanuts." },
              { english: "Can I get the check?", meaning: 'Cho mình tính tiền?', pronunciation: '/kæn aɪ get ðə tʃek/', usage: 'casual', tone: 'casual', situation: 'Yêu cầu thanh toán', example: "Can I get the check?" },
            ]
          },
          {
            type: 'vocabulary',
            items: [
              { word: 'appetizer', phonetic: '/ˈæpɪtaɪzə/', meaning: 'Món khai vị', collocations: 'start with appetizer', formalExample: 'A light appetizer.', casualExample: "Let's get appetizers to share.", memoryTrick: 'Appetite-izer = Kích thèm', difficulty: 2 },
              { word: 'dessert', phonetic: '/dɪˈzɜːt/', meaning: 'Tráng miệng', collocations: 'dessert menu', formalExample: 'Would you care for dessert?', casualExample: "I'm saving room for dessert!", memoryTrick: 'Des-sert = Tráng miệng', difficulty: 1 },
              { word: 'specials', phonetic: '/ˈspeʃəlz/', meaning: 'Món đặc biệt', collocations: "today's specials", formalExample: 'Our specials include fresh salmon.', casualExample: "What's the specials today?", memoryTrick: 'Specials = Đặc biệt', difficulty: 1 },
              { word: 'server', phonetic: '/ˈsɜːvə/', meaning: 'Người phục vụ', collocations: 'your server', formalExample: 'Your server will be with you.', casualExample: "Can I get the server's attention?", memoryTrick: 'Serve-r = Phục vụ', difficulty: 2 },
              { word: 'entree', phonetic: '/ˈɒntreɪ/', meaning: 'Món chính (US)', collocations: "What's the entree?", formalExample: 'The entree includes soup or salad.', casualExample: "What entrees do you have?", memoryTrick: 'Entre = Vào', difficulty: 4 },
            ]
          },
          {
            type: 'dialogue',
            situation: 'Ordering at a restaurant',
            items: [
              { speaker: 'A', english: "Can I get you something to drink?", meaning: 'Có gì uống trước không?' },
              { speaker: 'B', english: "Yes, I'll have a glass of red wine.", meaning: 'Ừ, cho mình một ly rượu vang đỏ.' },
              { speaker: 'A', english: "Great! Ready to order?", meaning: 'Tuyệt! Đã sẵn sàng order chưa?' },
              { speaker: 'B', english: "What do you recommend for the main course?", meaning: 'Bạn recommend món chính nào?' },
              { speaker: 'A', english: "The ribeye steak is most popular. It's really tender.", meaning: 'Ribeye là món được gọi nhiều nhất.' },
              { speaker: 'B', english: "That sounds perfect. I'll have the ribeye, medium rare.", meaning: 'Cho mình ribeye, medium rare.' },
            ]
          },
          {
            type: 'grammar',
            items: {
              title: 'Ordering Food Patterns',
              textbook: 'Use "I\'ll have..." and "Can I get..."',
              native: '"I\'ll have this" or just "This one" in casual settings',
              formalVsCasual: { formal: 'I would like to order...', casual: "I'll take the salmon. / Gimme the salmon." },
              commonMistakes: '"I want" - sounds too demanding',
              examples: ["I'll have the chicken.", "Can I get the check?"],
            }
          },
          {
            type: 'quiz',
            questions: [
              { type: 'multipleChoice', question: "What is 'to go'?", options: ['Sit down', 'Take out', 'Drive through', 'Buffet'], correctAnswer: 'Take out', explanation: '"To go" means take out.' },
              { type: 'fillBlank', question: "I'm allergic ___ peanuts.", correctAnswer: 'to', explanation: '"Allergic to" is correct.' },
              { type: 'multipleChoice', question: "What does 'the check' mean?", options: ['Menu', 'Receipt', 'Bill', 'Order'], correctAnswer: 'Bill', explanation: '"The check" means the bill.' },
            ]
          },
          {
            type: 'dailyMission',
            items: { vocabRecap: true, speakingMission: true, mirrorChallenge: true, sentencesToUse: ["What do you recommend?", "I'll have the...", "Can I get the check?"], confidenceTracker: 65 }
          }
        ]
      },
      {
        id: 'day-5',
        title: 'Shopping & Prices',
        isReview: false,
        sections: [
          {
            type: 'phrases',
            items: [
              { english: "How much is this?", meaning: 'Cái này bao nhiêu?', pronunciation: '/haʊ mʌtʃ ɪz ðɪs/', usage: 'neutral', tone: 'curious', situation: 'Hỏi giá', example: "How much is this jacket?" },
              { english: "Is there a discount?", meaning: 'Có giảm giá không?', pronunciation: '/ɪz ðeə ə ˈdɪskaʊnt/', usage: 'neutral', tone: 'hopeful', situation: 'Hỏi giảm giá', example: "Is there a discount?" },
              { english: "That's a bit steep", meaning: 'Hơi mắc đấy', pronunciation: '/ðæts ə bɪt stiːp/', usage: 'casual', tone: 'negotiating', situation: 'Phản ứng giá cao', example: "500 dollars? That's a bit steep." },
              { english: "Can you do a better price?", meaning: 'Giảm giá hơn được không?', pronunciation: '/kæn juː duː ə ˈbetə praɪs/', usage: 'casual', tone: 'negotiating', situation: 'Mặc cả', example: "Can you do a better price?" },
              { english: "I'll take it!", meaning: 'Mình lấy!', pronunciation: '/aɪl teɪk ɪt/', usage: 'casual', tone: 'decisive', situation: 'Quyết định mua', example: "Perfect, I'll take it." },
            ]
          },
          {
            type: 'vocabulary',
            items: [
              { word: 'bargain', phonetic: '/ˈbɑːɡɪn/', meaning: 'Món hời', collocations: 'great bargain', formalExample: 'At a bargain price.', casualExample: "What a bargain! Half price!", memoryTrick: 'Bar-gain = Mặc cả', difficulty: 2 },
              { word: 'receipt', phonetic: '/rɪˈsiːt/', meaning: 'Hóa đơn', collocations: 'ask for receipt', formalExample: 'Would you like a receipt?', casualExample: "Do you need receipt for warranty?", memoryTrick: 'Re-ceipt = Nhận tiền', difficulty: 3 },
              { word: 'refund', phonetic: '/ˈriːfʌnd/', meaning: 'Hoàn tiền', collocations: 'full refund', formalExample: 'Entitled to a full refund.', casualExample: "Can I get a refund?", memoryTrick: 'Re-fund = Lấy lại tiền', difficulty: 2 },
              { word: 'exchange', phonetic: '/ɪksˈtʃeɪndʒ/', meaning: 'Đổi hàng', collocations: 'size exchange', formalExample: 'Free exchange within 30 days.', casualExample: "Can I exchange for a different size?", memoryTrick: 'Ex-change = Đổi', difficulty: 2 },
              { word: 'worth it', phonetic: '/wɜːθ ɪt/', meaning: 'Xứng đáng', collocations: 'totally worth it', formalExample: 'Worth the cost.', casualExample: "It's expensive but worth it.", memoryTrick: 'Worth = Giá trị', difficulty: 2 },
            ]
          },
          {
            type: 'dialogue',
            situation: 'Shopping for clothes',
            items: [
              { speaker: 'A', english: "Hi, can I help you find something?", meaning: 'Chào bạn, cần giúp gì không?' },
              { speaker: 'B', english: "Yes, I'm looking for a dress for a wedding.", meaning: 'Mình tìm đầm cho đám cưới.' },
              { speaker: 'A', english: "We have beautiful dresses here. What's your budget?", meaning: 'Chúng tôi có đầm đẹp. Ngân sách?' },
              { speaker: 'B', english: "Something under $200 would be great.", meaning: 'Dưới $200 thì tốt.' },
              { speaker: 'A', english: "This one is $180 and on sale this week.", meaning: 'Chiếc này $180, đang giảm giá.' },
              { speaker: 'B', english: "Oh nice! Can I try it on?", meaning: 'Ồ tuyệt! Mình thử được không?' },
            ]
          },
          {
            type: 'quiz',
            questions: [
              { type: 'multipleChoice', question: "What does 'steep' mean for prices?", options: ['Very low', 'Very high', 'Just right', 'On sale'], correctAnswer: 'Very high', explanation: '"Steep" means expensive.' },
              { type: 'fillBlank', question: "It's totally ___ it.", correctAnswer: 'worth', explanation: '"Worth it" = good value.' },
            ]
          },
          {
            type: 'dailyMission',
            items: { vocabRecap: true, speakingMission: true, mirrorChallenge: true, sentencesToUse: ["How much is this?", "That's a bit steep.", "I'll take it!"], confidenceTracker: 70 }
          }
        ]
      },
      {
        id: 'day-6',
        title: 'Emergency Phrases',
        isReview: false,
        sections: [
          {
            type: 'phrases',
            items: [
              { english: "Help!", meaning: 'Cứu!', pronunciation: '/help/', usage: 'emergency', tone: 'urgent', situation: 'Cần giúp ngay', example: "Help! Someone call 911!" },
              { english: "Call an ambulance!", meaning: 'Gọi xe cấp cứu!', pronunciation: '/kɔːl ən ˈæmbjʊləns/', usage: 'emergency', tone: 'urgent', situation: 'Người bị thương nặng', example: "She's not breathing! Call an ambulance!" },
              { english: "I need a doctor", meaning: 'Mình cần bác sĩ', pronunciation: '/aɪ niːd ə ˈdɒktə/', usage: 'urgent', tone: 'serious', situation: 'Cần chăm sóc y tế', example: "I need a doctor. I think my arm is broken." },
              { english: "Where is the hospital?", meaning: 'Bệnh viện ở đâu?', pronunciation: '/weə ɪz ðə ˈhɒspɪtəl/', usage: 'urgent', tone: 'worried', situation: 'Tìm bệnh viện', example: "Where's the hospital? There was an accident." },
              { english: "I've lost my passport", meaning: 'Mình làm mất hộ chiếu', pronunciation: '/aɪv lɒst maɪ ˈpɑːspɔːt/', usage: 'important', tone: 'worried', situation: 'Mất giấy tờ', example: "I've lost my passport. What should I do?" },
            ]
          },
          {
            type: 'vocabulary',
            items: [
              { word: 'emergency', phonetic: '/ɪˈmɜːdʒənsi/', meaning: 'Khẩn cấp', collocations: 'in case of emergency', formalExample: 'In case of emergency.', casualExample: "It's an emergency! Call 911!", memoryTrick: 'E-mergency = Ra ngoài nhanh', difficulty: 2 },
              { word: 'police', phonetic: '/pəˈliːs/', meaning: 'Cảnh sát', collocations: 'call the police', formalExample: 'Report to the police.', casualExample: "Someone call the police!", memoryTrick: 'Po-lice = Bảo vệ', difficulty: 1 },
              { word: 'fire', phonetic: '/ˈfaɪə/', meaning: 'Cháy', collocations: 'fire alarm, on fire', formalExample: 'In case of fire, use stairs.', casualExample: "There's a fire! Get out!", memoryTrick: 'Fire = Lửa', difficulty: 1 },
              { word: 'pharmacy', phonetic: '/ˈfɑːməsi/', meaning: 'Hiệu thuốc', collocations: '24-hour pharmacy', formalExample: 'The pharmacy opens at 9 AM.', casualExample: "Where's the nearest pharmacy?", memoryTrick: 'Phar-macy = Bán thuốc', difficulty: 3 },
              { word: 'insurance', phonetic: '/ɪnˈʃʊərəns/', meaning: 'Bảo hiểm', collocations: 'health insurance', formalExample: 'Do you have travel insurance?', casualExample: "Check if insurance covers this.", memoryTrick: 'In-surance = An toàn', difficulty: 2 },
            ]
          },
          {
            type: 'dialogue',
            situation: 'Getting help at a pharmacy',
            items: [
              { speaker: 'A', english: "I don't feel well. Do you have anything for a headache?", meaning: 'Mình không khỏe. Có thuốc đau đầu không?' },
              { speaker: 'B', english: "Of course! Allergic to any medication?", meaning: 'Tất nhiên! Dị ứng thuốc gì không?' },
              { speaker: 'A', english: "No, I don't think so.", meaning: 'Không, mình không nghĩ có.' },
              { speaker: 'B', english: "Here's some ibuprofen. Take one with food.", meaning: 'Đây là ibuprofen. Uống một viên với thức ăn.' },
              { speaker: 'A', english: "Thank you! Where's the hospital just in case?", meaning: 'Cảm ơn! Bệnh viện ở đâu, phòng?' },
              { speaker: 'B', english: "About 10 minutes walk. Take care!", meaning: 'Khoảng 10 phút. Giữ gìn sức khỏe nhé!' },
            ]
          },
          {
            type: 'quiz',
            questions: [
              { type: 'multipleChoice', question: "Emergency number in US?", options: ['911', '999', '112', '000'], correctAnswer: '911', explanation: '911 is US emergency number.' },
              { type: 'fillBlank', question: "Call an ___!", correctAnswer: 'ambulance', explanation: '"Ambulance" = xe cấp cứu.' },
            ]
          },
          {
            type: 'dailyMission',
            items: { vocabRecap: true, speakingMission: true, mirrorChallenge: true, sentencesToUse: ["Help!", "I need a doctor.", "I don't feel well."], confidenceTracker: 75 }
          }
        ]
      },
      {
        id: 'day-7',
        title: 'Weekly Review',
        isReview: true,
        sections: [
          {
            type: 'dailyMission',
            items: { vocabRecap: true, speakingMission: true, mirrorChallenge: true, sentencesToUse: ["Week 1 Complete! You've learned survival English!"], confidenceTracker: 100 }
          }
        ]
      }
    ]
  },
  {
    id: 'week-2',
    title: 'Friends & Social Life',
    description: 'Build relationships and connect with others',
    days: [
      {
        id: 'day-1',
        title: 'Making Plans',
        isReview: false,
        sections: [
          {
            type: 'phrases',
            items: [
              { english: "Are you free this weekend?", meaning: 'Cuối tuần bạn rảnh không?', pronunciation: '/ɑː juː friː ðɪs ˌwiːkˈend/', usage: 'neutral', tone: 'friendly', situation: 'Hẹn bạn bè', example: "Wanna grab coffee?" },
              { english: "What are you up to?", meaning: 'Bạn đang làm gì?', pronunciation: '/wɒt ɑː juː ʌp tuː/', usage: 'casual', tone: 'casual', situation: 'Hỏi kế hoạch', example: "What are you up to this weekend?" },
              { english: "Let's catch up!", meaning: 'Gặp nhau nói chuyện!', pronunciation: '/lets kætʃ ʌp/', usage: 'casual', tone: 'excited', situation: 'Hẹn gặp bạn cũ', example: "Let's catch up soon!" },
              { english: "I'm down!", meaning: 'Mình sẵn sàng!', pronunciation: '/aɪm daʊn/', usage: 'casual', tone: 'enthusiastic', situation: 'Đồng ý kế hoạch', example: "BBQ party? I'm down!" },
              { english: "Count me in!", meaning: 'Tính mình vào!', pronunciation: '/kaʊnt miː ɪn/', usage: 'casual', tone: 'excited', situation: 'Tham gia', example: "There's a concert? Count me in!" },
            ]
          },
          {
            type: 'vocabulary',
            items: [
              { word: 'hang out', phonetic: '/hæŋ aʊt/', meaning: 'Tụ tập', collocations: 'hang out with friends', formalExample: 'Join us for dinner?', casualExample: "Let's hang out this weekend!", memoryTrick: 'Hang out = ở ngoài', difficulty: 1 },
              { word: 'chill', phonetic: '/tʃɪl/', meaning: 'Thư giãn', collocations: 'chill out, just chilling', formalExample: 'Informal gathering', casualExample: "Let's just chill tonight.", memoryTrick: 'Chill = Lạnh/thư giãn', difficulty: 1 },
              { word: 'get together', phonetic: '/ɡet təˈɡeðə/', meaning: 'Gặp nhau', collocations: 'get together for dinner', formalExample: 'Should get together.', casualExample: "We should get together soon!", memoryTrick: 'Together = Cùng nhau', difficulty: 2 },
              { word: 'rain check', phonetic: '/reɪn tʃek/', meaning: 'Hẹn khi khác', collocations: 'take a rain check', formalExample: 'Could we take a rain check?', casualExample: "Can I take a rain check?", memoryTrick: 'Rain check = Hẹn lần sau', difficulty: 3 },
              { word: 'double book', phonetic: '/ˈdʌbəl bʊk/', meaning: 'Đặt lịch trùng', collocations: "I've double booked", formalExample: 'I have a double booking.', casualExample: "I double booked Friday!", memoryTrick: 'Double = Gấp đôi', difficulty: 3 },
            ]
          },
          {
            type: 'dialogue',
            situation: 'Planning with a friend',
            items: [
              { speaker: 'A', english: "Hey! Are you free on Saturday?", meaning: 'Này! Thứ 7 rảnh không?' },
              { speaker: 'B', english: "Yeah, I think so. Why?", meaning: 'Ừ, rảnh. Sao vậy?' },
              { speaker: 'A', english: "Checking out that new cafe downtown. Wanna come?", meaning: 'Ghé quán cafe mới. Có đi không?' },
              { speaker: 'B', english: "Oh, on Main Street? I've heard it's good!", meaning: 'Ồ, ở Main Street hả? Nghe nói ngon!' },
              { speaker: 'A', english: "Exactly! What time works?", meaning: 'Đúng rồi! Mấy giờ?' },
              { speaker: 'B', english: "How about 2 PM? We can grab lunch first.", meaning: 'Khoảng 2h? Ăn trưa trước.' },
            ]
          },
          {
            type: 'grammar',
            items: {
              title: 'Making Plans',
              textbook: 'Use "Let\'s", "Should", "Could"',
              native: '"Wanna hang out?" "Sounds good!" We use contractions a lot!',
              formalVsCasual: { formal: 'Would you like to join us?', casual: "Hey, wanna grab dinner Friday?" },
              commonMistakes: 'Being too formal with friends!',
              examples: ["Let's go!", "We should try that.", "Could we meet at 7?"],
            }
          },
          {
            type: 'quiz',
            questions: [
              { type: 'multipleChoice', question: "What does 'I'm down' mean?", options: ["I'm sad", "I'm tired", "I'm ready/excited", "I'm leaving"], correctAnswer: "I'm ready/excited", explanation: '"I\'m down" = I agree.' },
              { type: 'fillBlank', question: "Let's ___ out!", correctAnswer: 'hang', explanation: '"Hang out" = spend time together.' },
              { type: 'multipleChoice', question: "What is a 'rain check'?", options: ['Weather', 'Postponed plan', 'Receipt', 'Reservation'], correctAnswer: 'Postponed plan', explanation: '"Rain check" = do it another time.' },
            ]
          },
          {
            type: 'dailyMission',
            items: { vocabRecap: true, speakingMission: true, mirrorChallenge: true, sentencesToUse: ["Are you free this weekend?", "I'm down!", "Count me in!"], confidenceTracker: 60 }
          }
        ]
      },
      {
        id: 'day-2',
        title: 'Social Media English',
        isReview: false,
        sections: [
          {
            type: 'phrases',
            items: [
              { english: "Just posted a new video!", meaning: 'Vừa đăng video mới!', pronunciation: '/dʒʌst ˈpəʊstɪd/', usage: 'casual', tone: 'excited', situation: 'Thông báo content', example: "Check the link in bio! 🔥" },
              { english: "Link in bio", meaning: 'Link ở phần giới thiệu', pronunciation: '/lɪŋk ɪn ˈbaɪəʊ/', usage: 'casual', tone: 'informative', situation: 'Chỉ đường link', example: "Want to know more? Link in bio!" },
              { english: "Drop a comment below", meaning: 'Bình luận bên dưới', pronunciation: '/drɒp ə ˈkɒment bɪˈləʊ/', usage: 'casual', tone: 'engaging', situation: 'Kêu gọi tương tác', example: "What do you think? Drop a comment! 👇" },
              { english: "S/O to my...", meaning: 'Shout out đến...', pronunciation: '/ʃaʊt aʊt tuː maɪ/', usage: 'casual', tone: 'appreciative', situation: 'Cảm ơn ai đó', example: "Big S/O to my team! 🙌" },
              { english: "Goes viral", meaning: 'Nổi tiếng', pronunciation: '/ɡəʊz ˈvaɪrəl/', usage: 'casual', tone: 'excited', situation: 'Content được nhiều người xem', example: "The video went viral! 1M views!" },
            ]
          },
          {
            type: 'vocabulary',
            items: [
              { word: 'follow', phonetic: '/ˈfɒləʊ/', meaning: 'Theo dõi', collocations: 'follow me, new followers', formalExample: 'Please follow our account.', casualExample: "Hit that follow button!", memoryTrick: 'Follow = Đi theo', difficulty: 1 },
              { word: 'share', phonetic: '/ʃeə/', meaning: 'Chia sẻ', collocations: 'share this', formalExample: 'Share with your network.', casualExample: "Smash that share button!", memoryTrick: 'Share = Chia sẻ', difficulty: 1 },
              { word: 'DM', phonetic: '/diː em/', meaning: 'Tin nhắn riêng', collocations: 'send me a DM', formalExample: 'Contact via DM.', casualExample: "DM me for more info!", memoryTrick: 'D-M = Direct Message', difficulty: 2 },
              { word: 'content', phonetic: '/ˈkɒntent/', meaning: 'Nội dung', collocations: 'create content', formalExample: 'Various content types.', casualExample: "Creating lots of content!", memoryTrick: 'Con-tent = Chứa bên trong', difficulty: 2 },
              { word: 'trending', phonetic: '/ˈtrendɪŋ/', meaning: 'Đang hot', collocations: 'trending topic', formalExample: 'Currently trending.', casualExample: "This song is trending!", memoryTrick: 'Trend = Xu hướng', difficulty: 2 },
            ]
          },
          {
            type: 'quiz',
            questions: [
              { type: 'multipleChoice', question: "What does 'S/O' mean?", options: ['Shout out', 'Sign out', 'Shut up', 'Stand on'], correctAnswer: 'Shout out', explanation: '"S/O" = publicly acknowledge.' },
              { type: 'multipleChoice', question: "What is a 'DM'?", options: ['Daily mail', 'Direct message', 'Download', 'Dance move'], correctAnswer: 'Direct message', explanation: '"DM" = private message.' },
            ]
          },
          {
            type: 'dailyMission',
            items: { vocabRecap: true, speakingMission: true, mirrorChallenge: true, sentencesToUse: ["Link in bio!", "Drop a comment!", "Big S/O to..."], confidenceTracker: 65 }
          }
        ]
      },
      {
        id: 'day-3',
        title: 'Hanging Out',
        isReview: false,
        sections: [
          {
            type: 'phrases',
            items: [
              { english: "Wanna grab a bite?", meaning: 'Đi ăn gì đó không?', pronunciation: '/ˈwɒnə ɡræb ə baɪt/', usage: 'casual', tone: 'casual', situation: 'Mời đi ăn', example: "It's almost noon. Wanna grab a bite?" },
              { english: "Split the bill?", meaning: 'Chia tiền không?', pronunciation: '/splɪt ðə bɪl/', usage: 'neutral', tone: 'practical', situation: 'Thanh toán', example: "Should we split the bill?" },
              { english: "It's on me", meaning: 'Mình trả', pronunciation: '/ɪts ɒn miː/', usage: 'casual', tone: 'generous', situation: 'Mời trả tiền', example: "No no, it's on me today!" },
              { english: "My treat!", meaning: 'Mình mời!', pronunciation: '/maɪ triːt/', usage: 'casual', tone: 'friendly', situation: 'Mời ai đó ăn', example: "You helped me! My treat today!" },
              { english: "First round's on me", meaning: 'Vòng đầu mình trả', pronunciation: '/fɜːst raʊndz/', usage: 'casual', tone: 'generous', situation: 'Mời uống', example: "First round's on me! What are you having?" },
            ]
          },
          {
            type: 'vocabulary',
            items: [
              { word: 'treat', phonetic: '/triːt/', meaning: 'Mời', collocations: 'my treat', formalExample: 'Allow me to treat you.', casualExample: "It's my treat!", memoryTrick: 'Treat = Chiêu đãi', difficulty: 2 },
              { word: 'split', phonetic: '/splɪt/', meaning: 'Chia đôi', collocations: 'split the bill', formalExample: 'Split equally.', casualExample: "Let's split 50/50.", memoryTrick: 'Split = Chia ra', difficulty: 2 },
              { word: 'round', phonetic: '/raʊnd/', meaning: 'Vòng', collocations: 'next round', formalExample: 'Another round?', casualExample: "I'll get the next round.", memoryTrick: 'Round = Vòng', difficulty: 2 },
              { word: 'cover charge', phonetic: '/ˈkʌvə tʃɑːdʒ/', meaning: 'Phí vào cửa', collocations: 'no cover charge', formalExample: 'No cover charge.', casualExample: "This club has $20 cover.", memoryTrick: 'Cover + charge = Phí', difficulty: 3 },
              { word: 'grab', phonetic: '/ɡræb/', meaning: 'Lấy nhanh', collocations: 'grab food', formalExample: 'Grab some documents.', casualExample: "Let's grab tacos!", memoryTrick: 'Grab = Chộp', difficulty: 1 },
            ]
          },
          {
            type: 'quiz',
            questions: [
              { type: 'multipleChoice', question: "What does 'My treat' mean?", options: ['I want treatment', "I'm paying for you", 'I want a gift', 'Nice to meet you'], correctAnswer: "I'm paying for you", explanation: '"Treat" = chiêu đãi.' },
              { type: 'multipleChoice', question: "What does 'grab a bite' mean?", options: ['Catch something', 'Eat something quick', 'Buy groceries', 'Cook'], correctAnswer: 'Eat something quick', explanation: '"Grab a bite" = eat quickly.' },
            ]
          },
          {
            type: 'dailyMission',
            items: { vocabRecap: true, speakingMission: true, mirrorChallenge: true, sentencesToUse: ["Wanna grab a bite?", "It's on me!", "Let's split the bill."], confidenceTracker: 70 }
          }
        ]
      },
      {
        id: 'day-4',
        title: 'Expressing Feelings',
        isReview: false,
        sections: [
          {
            type: 'phrases',
            items: [
              { english: "I'm feeling under the weather", meaning: 'Mình không khỏe', pronunciation: '/aɪm ˈfiːlɪŋ/', usage: 'neutral', tone: 'concerned', situation: 'Báo ốm', example: "Sorry I can't make it. Under the weather." },
              { english: "That made my day!", meaning: 'Làm mình vui cả ngày!', pronunciation: '/ðæt meɪd maɪ deɪ/', usage: 'casual', tone: 'happy', situation: 'Khi có chuyện vui', example: "You remembered my birthday! Made my day!" },
              { english: "I'm not gonna lie", meaning: 'Nói thật nhé', pronunciation: '/aɪm nɒt ˈɡɒnə/', usage: 'casual', tone: 'honest', situation: 'Nói thật lòng', example: "I'm not gonna lie, that exam was brutal." },
              { english: "I'm so pumped!", meaning: 'Mình rất hào hứng!', pronunciation: '/aɪm səʊ pʌmpt/', usage: 'casual', tone: 'excited', situation: 'Rất phấn khích', example: "We got concert tickets! I'm so pumped!" },
              { english: "That sucks", meaning: 'Tệ quá', pronunciation: '/ðæt sʌks/', usage: 'casual', tone: 'sympathetic', situation: 'Thông cảm', example: "Your flight got cancelled? That sucks." },
              { english: "I'm over the moon", meaning: 'Vui như điên', pronunciation: '/aɪm ˈəʊvə ðə muːn/', usage: 'casual', tone: 'ecstatic', situation: 'Rất vui mừng', example: "I got the job! I'm over the moon!" },
            ]
          },
          {
            type: 'vocabulary',
            items: [
              { word: 'thrilled', phonetic: '/θrɪld/', meaning: 'Phấn khích', collocations: 'absolutely thrilled', formalExample: 'We are thrilled to announce...', casualExample: "I'm absolutely thrilled!", memoryTrick: 'Thrill-ed = Phấn khích', difficulty: 2 },
              { word: 'gutted', phonetic: '/ˈɡʌtɪd/', meaning: 'Rất thất vọng (UK)', collocations: 'absolutely gutted', formalExample: 'Disappointed', casualExample: "I'm absolutely gutted.", memoryTrick: 'Gut-ted = Ruột', difficulty: 4 },
              { word: 'stoked', phonetic: '/stəʊkt/', meaning: 'Rất hào hứng', collocations: 'so stoked', formalExample: 'Very enthusiastic', casualExample: "I'm so stoked for this!", memoryTrick: 'Stoked = Được đốt', difficulty: 3 },
              { word: 'bummed', phonetic: '/bʌmd/', meaning: 'Buồn', collocations: 'really bummed', formalExample: 'Disappointed', casualExample: "I'm so bummed I missed it.", memoryTrick: 'Bummed = Buồn', difficulty: 3 },
              { word: 'relieved', phonetic: '/rɪˈliːvd/', meaning: 'Nhẹ nhõm', collocations: 'so relieved', formalExample: 'Greatly relieved.', casualExample: "I'm so relieved!", memoryTrick: 'Re-lieved = Nhẹ đi', difficulty: 2 },
            ]
          },
          {
            type: 'quiz',
            questions: [
              { type: 'multipleChoice', question: "What does 'under the weather' mean?", options: ['In the rain', 'Feeling sick', 'In a bad mood', 'Tired'], correctAnswer: 'Feeling sick', explanation: '"Under the weather" = unwell.' },
              { type: 'fillBlank', question: "That ___ my day!", correctAnswer: 'made', explanation: '"Made my day" = made happy.' },
              { type: 'multipleChoice', question: "What does 'stoked' mean?", options: ['Angry', 'Bored', 'Very excited', 'Sleepy'], correctAnswer: 'Very excited', explanation: '"Stoked" = slang for excited.' },
            ]
          },
          {
            type: 'dailyMission',
            items: { vocabRecap: true, speakingMission: true, mirrorChallenge: true, sentencesToUse: ["I'm over the moon!", "That sucks.", "I'm feeling under the weather."], confidenceTracker: 75 }
          }
        ]
      },
      {
        id: 'day-5',
        title: 'Apologies & Excuses',
        isReview: false,
        sections: [
          {
            type: 'phrases',
            items: [
              { english: "My bad!", meaning: 'Lỗi của mình!', pronunciation: '/maɪ bæd/', usage: 'casual', tone: 'apologetic', situation: 'Xin lỗi nhẹ', example: "Oops, my bad! Wrong file." },
              { english: "I didn't mean to", meaning: 'Mình không có ý', pronunciation: '/aɪ ˈdɪdənt miːn tuː/', usage: 'neutral', tone: 'apologetic', situation: 'Giải thích vô tình', example: "I didn't mean to upset you." },
              { english: "Please forgive me", meaning: 'Xin hãy tha thứ', pronunciation: '/pliːz fəˈɡɪv miː/', usage: 'formal', tone: 'sincere', situation: 'Xin lỗi nghiêm túc', example: "Please forgive me." },
              { english: "No worries!", meaning: 'Không sao đâu!', pronunciation: '/nəʊ ˈwʌriz/', usage: 'casual', tone: 'reassuring', situation: 'Trả lời xin lỗi', example: "Sorry I'm late! - No worries!" },
              { english: "I owe you one", meaning: 'Mình nợ cậu một lần', pronunciation: '/aɪ əʊ juː wʌn/', usage: 'casual', tone: 'grateful', situation: 'Cảm ơn', example: "Thanks for covering. I owe you one!" },
            ]
          },
          {
            type: 'vocabulary',
            items: [
              { word: 'apology', phonetic: '/əˈpɒlədʒi/', meaning: 'Lời xin lỗi', collocations: 'formal apology', formalExample: 'I formally apologize.', casualExample: "Soz! My bad!", memoryTrick: 'A-pol-o-gy = Xin lỗi', difficulty: 2 },
              { word: 'blame', phonetic: '/bleɪm/', meaning: 'Đổ lỗi', collocations: "don't blame me", formalExample: 'I take responsibility.', casualExample: "Don't blame me!", memoryTrick: 'Blame = Đổ lỗi', difficulty: 2 },
              { word: 'fault', phonetic: '/fɔːlt/', meaning: 'Lỗi', collocations: "it's my fault", formalExample: 'Not our fault.', casualExample: "It's not your fault.", memoryTrick: 'Fault = Sai lầm', difficulty: 2 },
              { word: 'responsibility', phonetic: '/rɪˌspɒnsəˈbɪləti/', meaning: 'Trách nhiệm', collocations: 'take responsibility', formalExample: 'I take full responsibility.', casualExample: "It was my responsibility.", memoryTrick: 'Re-spond = Phản hồi', difficulty: 3 },
              { word: 'excuse', phonetic: '/ɪkˈskjuːz/', meaning: 'Lý do', collocations: "that's no excuse", formalExample: 'Understand my circumstances.', casualExample: "That's not an excuse.", memoryTrick: 'Ex-cuse = Xin phép', difficulty: 2 },
            ]
          },
          {
            type: 'quiz',
            questions: [
              { type: 'multipleChoice', question: "What does 'My bad' mean?", options: ['I bad', 'My mistake', 'I sorry you', 'Bad mood'], correctAnswer: 'My mistake', explanation: '"My bad" = I made a mistake.' },
              { type: 'fillBlank', question: "I ___ you one.", correctAnswer: 'owe', explanation: '"I owe you one" = I need to repay.' },
              { type: 'multipleChoice', question: "How respond to apology?", options: ['Welcome', 'No worries', 'I forgive you', 'It is okay'], correctAnswer: 'No worries', explanation: '"No worries" = reassuring.' },
            ]
          },
          {
            type: 'dailyMission',
            items: { vocabRecap: true, speakingMission: true, mirrorChallenge: true, sentencesToUse: ["My bad!", "I didn't mean to.", "No worries!"], confidenceTracker: 80 }
          }
        ]
      },
      {
        id: 'day-6',
        title: 'Compliments & Reactions',
        isReview: false,
        sections: [
          {
            type: 'phrases',
            items: [
              { english: "Looking good!", meaning: 'Nhìn đẹp đấy!', pronunciation: '/ˈlʊkɪŋ ɡʊd/', usage: 'casual', tone: 'complimentary', situation: 'Khen ngoại hình', example: "New haircut? Looking good!" },
              { english: "You nailed it!", meaning: 'Cậu làm tốt lắm!', pronunciation: '/juː neɪld ɪt/', usage: 'casual', tone: 'impressed', situation: 'Khen thành quả', example: "The presentation was amazing! You nailed it!" },
              { english: "You're on fire!", meaning: 'Cậu đang cháy!', pronunciation: '/jɔːr ɒn ˈfaɪə/', usage: 'casual', tone: 'excited', situation: 'Khen khi làm tốt', example: "3 home runs! You're on fire!" },
              { english: "I'm impressed", meaning: 'Ấn tượng', pronunciation: '/aɪm ɪmˈprest/', usage: 'neutral', tone: 'surprised', situation: 'Thể hiện ấn tượng', example: "I'm really impressed with your work." },
              { english: "You're killing it!", meaning: 'Cậu đang làm rất tốt!', pronunciation: '/jɔːr ˈkɪlɪŋ ɪt/', usage: 'casual', tone: 'encouraging', situation: 'Động viên', example: "You're killing it!" },
              { english: "No way!", meaning: 'Không thể nào!', pronunciation: '/nəʊ weɪ/', usage: 'casual', tone: 'surprised', situation: 'Phản ứng ngạc nhiên', example: "You ran a marathon? No way!" },
            ]
          },
          {
            type: 'vocabulary',
            items: [
              { word: 'amazing', phonetic: '/əˈmeɪzɪŋ/', meaning: 'Tuyệt vời', collocations: 'absolutely amazing', formalExample: 'Absolutely remarkable.', casualExample: "That was absolutely amazing!", memoryTrick: 'A-maze-ing = Như lạc vào mê', difficulty: 1 },
              { word: 'incredible', phonetic: '/ɪnˈkredəbəl/', meaning: 'Không thể tin', collocations: 'truly incredible', formalExample: 'An incredible achievement.', casualExample: "That's incredible!", memoryTrick: 'In-credible = Không tin được', difficulty: 2 },
              { word: 'awesome', phonetic: '/ˈɔːsəm/', meaning: 'Tuyệt vời', collocations: 'totally awesome', formalExample: 'Outstanding result.', casualExample: "That concert was awesome!", memoryTrick: 'Awsome = Đáng sợ (theo nghĩa tốt)', difficulty: 1 },
              { word: 'brilliant', phonetic: '/ˈbrɪljənt/', meaning: 'Xuất sắc', collocations: 'absolutely brilliant', formalExample: 'A brilliant solution.', casualExample: "Brilliant idea!", memoryTrick: 'Brilliant = Tỏa sáng', difficulty: 2 },
              { word: 'nailed', phonetic: '/neɪld/', meaning: 'Làm xuất sắc', collocations: 'nailed it', formalExample: 'Successfully completed', casualExample: "You nailed the interview!", memoryTrick: 'Nail = Đóng đinh', difficulty: 3 },
            ]
          },
          {
            type: 'quiz',
            questions: [
              { type: 'multipleChoice', question: "What does 'You're on fire' mean?", options: ['You are hot', 'You are doing great', 'There is a fire', 'You are angry'], correctAnswer: 'You are doing great', explanation: '"On fire" = performing extremely well.' },
              { type: 'fillBlank', question: "You ___ it!", correctAnswer: 'nailed', explanation: '"Nailed it" = did perfectly.' },
              { type: 'multipleChoice', question: "React to great news?", options: ['I understand', 'No way!', 'Maybe', 'Good luck'], correctAnswer: 'No way!', explanation: '"No way!" = surprised and excited.' },
            ]
          },
          {
            type: 'dailyMission',
            items: { vocabRecap: true, speakingMission: true, mirrorChallenge: true, sentencesToUse: ["You nailed it!", "That's incredible!", "You're on fire!"], confidenceTracker: 85 }
          }
        ]
      },
      {
        id: 'day-7',
        title: 'Weekly Review',
        isReview: true,
        sections: [
          {
            type: 'dailyMission',
            items: { vocabRecap: true, speakingMission: true, mirrorChallenge: true, sentencesToUse: ["Week 2 Complete! Social English mastered!"], confidenceTracker: 100 }
          }
        ]
      }
    ]
  },
  {
    id: 'week-3',
    title: 'Work & Study',
    description: 'Excel in academic and professional settings',
    days: [
      {
        id: 'day-1',
        title: 'Classroom English',
        isReview: false,
        sections: [
          {
            type: 'phrases',
            items: [
              { english: "Could you repeat that, please?", meaning: 'Nhắc lại được không?', pronunciation: '/kʊd juː rɪˈpiːt/', usage: 'polite', tone: 'polite', situation: 'Hỏi nhắc lại', example: "Sorry, could you repeat that?" },
              { english: "I have a question", meaning: 'Mình có câu hỏi', pronunciation: '/aɪ hæv ə ˈkwestʃən/', usage: 'neutral', tone: 'engaged', situation: 'Xin phép hỏi', example: "I have a question about the deadline." },
              { english: "May I be excused?", meaning: 'Cho mình xin phép?', pronunciation: '/meɪ aɪ biː ɪkˈskjuːzd/', usage: 'formal', tone: 'formal', situation: 'Xin ra ngoài', example: "May I be excused? I need the restroom." },
              { english: "What does [word] mean?", meaning: 'Có nghĩa là gì?', pronunciation: '/wɒt dʌz/', usage: 'neutral', tone: 'curious', situation: 'Hỏi từ vựng', example: "What does 'paradigm' mean?" },
              { english: "I didn't quite follow", meaning: 'Mình chưa hiểu lắm', pronunciation: '/aɪ ˈdɪdənt kwaɪt/', usage: 'polite', tone: 'confused', situation: 'Thừa nhận không hiểu', example: "I didn't quite follow." },
            ]
          },
          {
            type: 'vocabulary',
            items: [
              { word: 'assignment', phonetic: '/əˈsaɪnmənt/', meaning: 'Bài tập', collocations: 'homework assignment', formalExample: 'Complete by Friday.', casualExample: "When's assignment due?", memoryTrick: 'Assign-ment = Giao việc', difficulty: 2 },
              { word: 'deadline', phonetic: '/ˈdedlaɪn/', meaning: 'Thời hạn', collocations: 'meet the deadline', formalExample: 'Deadline is Monday.', casualExample: "Racing against the deadline!", memoryTrick: 'Dead-line = Vạch ranh', difficulty: 2 },
              { word: 'lecture', phonetic: '/ˈlektʃə/', meaning: 'Bài giảng', collocations: 'attend lecture', formalExample: 'Lecture on economics.', casualExample: "Two lectures today.", memoryTrick: 'Lect-ure = Bài giảng', difficulty: 2 },
              { word: 'semester', phonetic: '/sɪˈmestə/', meaning: 'Học kỳ (US)', collocations: 'this semester', formalExample: 'Begins in September.', casualExample: "Exams next semester.", memoryTrick: 'Se-mes-ter = Kỳ học', difficulty: 3 },
              { word: 'syllabus', phonetic: '/ˈsɪləbəs/', meaning: 'Giáo trình', collocations: 'check the syllabus', formalExample: 'See the syllabus.', casualExample: "Is that on the syllabus?", memoryTrick: 'Syl-la-bus = Giáo trình', difficulty: 4 },
            ]
          },
          {
            type: 'quiz',
            questions: [
              { type: 'multipleChoice', question: "What is a 'deadline'?", options: ['Line for dead', 'Time limit', 'Test', 'Lecture'], correctAnswer: 'Time limit', explanation: '"Deadline" = latest time.' },
              { type: 'multipleChoice', question: "What does 'syllabus' mean?", options: ['Classroom', 'Course outline', 'Textbook', 'Exam'], correctAnswer: 'Course outline', explanation: 'Syllabus outlines course.' },
            ]
          },
          {
            type: 'dailyMission',
            items: { vocabRecap: true, speakingMission: true, mirrorChallenge: true, sentencesToUse: ["Could you repeat that?", "I have a question.", "What does this mean?"], confidenceTracker: 60 }
          }
        ]
      },
      {
        id: 'day-2',
        title: 'Office Communication',
        isReview: false,
        sections: [
          {
            type: 'phrases',
            items: [
              { english: "Let's circle back on that", meaning: ' Quay lại sau', pronunciation: '/lets ˈsɜːkəl bæk/', usage: 'professional', tone: 'business', situation: 'Hoãn thảo luận', example: "Let's circle back on that later." },
              { english: "Can I delegate this to you?", meaning: 'Giao việc này cho cậu?', pronunciation: '/kæn aɪ ˈdelɪɡeɪt/', usage: 'neutral', tone: 'delegating', situation: 'Giao việc', example: "Can I delegate this to you?" },
              { english: "I'll follow up on that", meaning: 'Mình sẽ theo dõi', pronunciation: '/aɪl ˈfɒləʊ ʌp/', usage: 'neutral', tone: 'proactive', situation: 'Theo dõi', example: "I'll follow up on that email." },
              { english: "We need to touch base", meaning: 'Cần gặp nhau nói chuyện', pronunciation: '/wiː niːd tuː tʌtʃ beɪs/', usage: 'neutral', tone: 'collab', situation: 'Hẹn gặp nhanh', example: "We need to touch base." },
              { english: "Let's take this offline", meaning: 'Bàn chuyện này riêng', pronunciation: '/lets teɪk ðɪs ˌɒfˈlaɪn/', usage: 'professional', tone: 'efficient', situation: 'Chuyển cuộc họp riêng', example: "Let's take this offline." },
            ]
          },
          {
            type: 'vocabulary',
            items: [
              { word: 'stakeholder', phonetic: '/ˈsteɪkhəʊldə/', meaning: 'Người liên quan', collocations: 'key stakeholder', formalExample: 'All stakeholders informed.', casualExample: "Update stakeholders.", memoryTrick: 'Stake-holder = Giữ cổ phần', difficulty: 4 },
              { word: 'workflow', phonetic: '/ˈwɜːkfləʊ/', meaning: 'Quy trình làm việc', collocations: 'improve workflow', formalExample: 'Streamlining workflow.', casualExample: "This workflow is killing productivity.", memoryTrick: 'Work-flow = Dòng chảy', difficulty: 3 },
              { word: 'deliverable', phonetic: '/dɪˈlɪvərəbəl/', meaning: 'Sản phẩm bàn giao', collocations: 'key deliverables', formalExample: 'List all deliverables.', casualExample: "Main deliverables?", memoryTrick: 'De-liverable = Bàn giao', difficulty: 4 },
              { word: 'bandwidth', phonetic: '/ˈbændwɪdθ/', meaning: 'Công suất', collocations: 'bandwidth issues', formalExample: 'Lack bandwidth.', casualExample: "No bandwidth for this.", memoryTrick: 'Band-width = Băng thông', difficulty: 4 },
              { word: 'pivot', phonetic: '/ˈpaɪvət/', meaning: 'Xoay chiều', collocations: 'pivot strategy', formalExample: 'Pivot business strategy.', casualExample: "Had to pivot during COVID.", memoryTrick: 'Piv-ot = Quay trục', difficulty: 3 },
            ]
          },
          {
            type: 'quiz',
            questions: [
              { type: 'multipleChoice', question: "What does 'circle back' mean?", options: ['Run around', 'Discuss later', 'Make circles', 'Cancel'], correctAnswer: 'Discuss later', explanation: '"Circle back" = return to later.' },
              { type: 'fillBlank', question: "Let's touch ___", correctAnswer: 'base', explanation: '"Touch base" = briefly meet.' },
            ]
          },
          {
            type: 'dailyMission',
            items: { vocabRecap: true, speakingMission: true, mirrorChallenge: true, sentencesToUse: ["Let's circle back.", "I'll follow up.", "We need to touch base."], confidenceTracker: 65 }
          }
        ]
      },
      {
        id: 'day-3',
        title: 'Email Writing',
        isReview: false,
        sections: [
          {
            type: 'phrases',
            items: [
              { english: "Please find attached", meaning: 'File đính kèm', pronunciation: '/pliːz faɪnd əˈtætʃt/', usage: 'formal', tone: 'formal', situation: 'Email công việc', example: "Please find attached the report." },
              { english: "I hope this email finds you well", meaning: 'Hy vọng bạn khỏe mạnh', pronunciation: '/aɪ həʊp/', usage: 'formal', tone: 'formal', situation: 'Opening formal', example: "Dear Mr. Johnson, I hope this email finds you well." },
              { english: "Thanks in advance", meaning: 'Cảm ơn trước', pronunciation: '/θæŋks ɪn ədˈvɑːns/', usage: 'neutral', tone: 'appreciative', situation: 'Closing email', example: "Thanks in advance!" },
              { english: "Looking forward to hearing from you", meaning: 'Rất mong phản hồi', pronunciation: '/ˈlʊkɪŋ ˈfɔːwəd/', usage: 'formal', tone: 'formal', situation: 'Formal closing', example: "Looking forward to hearing from you." },
            ]
          },
          {
            type: 'vocabulary',
            items: [
              { word: 'attachment', phonetic: '/əˈtætʃmənt/', meaning: 'File đính kèm', collocations: 'see attachment', formalExample: 'Attached document.', casualExample: "Forgot the attachment!", memoryTrick: 'At-tach-ment = Gắn vào', difficulty: 2 },
              { word: 'cc', phonetic: '/siː siː/', meaning: 'Gửi chồng', collocations: 'cc someone', formalExample: 'Please cc manager.', casualExample: "CC me when you send!", memoryTrick: 'CC = Carbon copy', difficulty: 2 },
              { word: 'subject line', phonetic: '/ˈsʌbdʒekt laɪn/', meaning: 'Tiêu đề', collocations: 'clear subject', formalExample: 'Use clear subject.', casualExample: "Subject needs to be specific.", memoryTrick: 'Subject = Chủ đề', difficulty: 1 },
              { word: 'regards', phonetic: '/rɪˈɡɑːdz/', meaning: 'Trân trọng', collocations: 'best regards', formalExample: 'Best regards, [Name]', casualExample: "Thanks, [Name]", memoryTrick: 'Re-gards = Kính trọng', difficulty: 1 },
              { word: 'recipient', phonetic: '/rɪˈsɪpiənt/', meaning: 'Người nhận', collocations: 'intended recipient', formalExample: 'For recipient only.', casualExample: "Wrong recipient!", memoryTrick: 'Re-cip-ient = Nhận', difficulty: 3 },
            ]
          },
          {
            type: 'quiz',
            questions: [
              { type: 'multipleChoice', question: "What is 'CC' in email?", options: ['Close copy', 'Carbon copy', 'Copy client', 'Clean copy'], correctAnswer: 'Carbon copy', explanation: '"CC" = Carbon copy.' },
              { type: 'fillBlank', question: "Please find ___", correctAnswer: 'attached', explanation: '"Attached" = đính kèm.' },
            ]
          },
          {
            type: 'dailyMission',
            items: { vocabRecap: true, speakingMission: true, mirrorChallenge: true, sentencesToUse: ["Please find attached.", "Thanks in advance.", "Looking forward to hearing from you."], confidenceTracker: 70 }
          }
        ]
      },
      {
        id: 'day-4',
        title: 'Presentations',
        isReview: false,
        sections: [
          {
            type: 'phrases',
            items: [
              { english: "To get started", meaning: 'Để bắt đầu', pronunciation: '/tuː ɡet ˈstɑːtɪd/', usage: 'professional', tone: 'professional', situation: 'Bắt đầu', example: "To get started, let me give background." },
              { english: "Moving on to...", meaning: 'Chuyển sang...', pronunciation: '/ˈmuːvɪŋ ɒn tuː/', usage: 'professional', tone: 'transitional', situation: 'Chuyển slide', example: "Moving on to the next section." },
              { english: "As you can see from this chart...", meaning: 'Như các bạn thấy...', pronunciation: '/æz juː kæn siː/', usage: 'neutral', tone: 'presenting', situation: 'Chỉ data', example: "As you can see, sales increased 40%." },
              { english: "In a nutshell", meaning: 'Tóm lại', pronunciation: '/ɪn ə ˈnʌtʃel/', usage: 'neutral', tone: 'summarizing', situation: 'Tóm tắt', example: "In a nutshell, we achieved all goals." },
              { english: "To sum up", meaning: 'Tóm lại', pronunciation: '/tuː sʌm ʌp/', usage: 'neutral', tone: 'closing', situation: 'Kết thúc', example: "To sum up, three main takeaways." },
            ]
          },
          {
            type: 'vocabulary',
            items: [
              { word: 'presentation', phonetic: '/ˌprezənˈteɪʃən/', meaning: 'Bài thuyết trình', collocations: 'give presentation', formalExample: 'Scheduled for 2 PM.', casualExample: "How was your presentation?", memoryTrick: 'Pre-sent-a-tion = Trình bày', difficulty: 2 },
              { word: 'slide', phonetic: '/slaɪd/', meaning: 'Slide', collocations: 'next slide', formalExample: 'Next slide please.', casualExample: "Check out slide 5.", memoryTrick: 'Slide = Trượt', difficulty: 1 },
              { word: 'takeaway', phonetic: '/ˈteɪkəweɪ/', meaning: 'Bài học rút ra', collocations: 'key takeaway', formalExample: 'Key takeaways?', casualExample: "Main takeaway: need to pivot.", memoryTrick: 'Take-away = Bài học', difficulty: 3 },
              { word: 'deliver', phonetic: '/dɪˈlɪvə/', meaning: 'Trình bày', collocations: 'deliver presentation', formalExample: 'Deliver results.', casualExample: "Deliver tomorrow.", memoryTrick: 'De-liver = Bàn giao', difficulty: 2 },
              { word: 'brainstorm', phonetic: '/ˈbreɪnstɔːm/', meaning: 'Động não', collocations: 'brainstorm session', formalExample: 'Brainstorm solutions.', casualExample: "Let's brainstorm!", memoryTrick: 'Brain-storm = Bão não', difficulty: 2 },
            ]
          },
          {
            type: 'quiz',
            questions: [
              { type: 'multipleChoice', question: "What does 'moving on to' mean?", options: ['Leaving', 'Transitioning', 'Moving', 'Continuing'], correctAnswer: 'Transitioning', explanation: '"Moving on to" = transition.' },
              { type: 'multipleChoice', question: "What is a 'takeaway'?", options: ['Food to go', 'Key point', 'Gift', 'Slide'], correctAnswer: 'Key point', explanation: '"Takeaway" = remember.' },
            ]
          },
          {
            type: 'dailyMission',
            items: { vocabRecap: true, speakingMission: true, mirrorChallenge: true, sentencesToUse: ["To get started...", "As you can see...", "To sum up..."], confidenceTracker: 75 }
          }
        ]
      },
      {
        id: 'day-5',
        title: 'Meetings & Discussions',
        isReview: false,
        sections: [
          {
            type: 'phrases',
            items: [
              { english: "I'd like to pitch an idea", meaning: 'Mình muốn đề xuất ý tưởng', pronunciation: '/aɪd laɪk tuː pɪtʃ/', usage: 'neutral', tone: 'proactive', situation: 'Đề xuất ý', example: "I'd like to pitch an idea." },
              { english: "Let's table this for now", meaning: 'Hoãn chuyện này', pronunciation: '/lets ˈteɪbəl/', usage: 'professional', tone: 'efficient', situation: 'Hoãn', example: "Let's table this for now." },
              { english: "Building on that...", meaning: 'Phát triển từ ý đó...', pronunciation: '/ˈbɪldɪŋ ɒn/', usage: 'neutral', tone: 'collaborative', situation: 'Phát triển ý', example: "Building on John's point..." },
              { english: "Can we go back to...", meaning: ' Quay lại...', pronunciation: '/kæn wiː ɡəʊ bæk tuː/', usage: 'neutral', tone: 'clarifying', situation: 'Quay lại', example: "Can we go back to the budget?" },
              { english: "I see your point, but...", meaning: 'Mình hiểu ý bạn, nhưng...', pronunciation: '/aɪ siː jɔː pɔɪnt/', usage: 'neutral', tone: 'diplomatic', situation: 'Phản biện nhẹ', example: "I see your point, but..." },
            ]
          },
          {
            type: 'vocabulary',
            items: [
              { word: 'agenda', phonetic: '/əˈdʒendə/', meaning: 'Chương trình họp', collocations: 'set agenda', formalExample: 'What\'s on the agenda?', casualExample: "Any items for the agenda?", memoryTrick: 'A-gen-da = Chương trình', difficulty: 2 },
              { word: 'brainstorm', phonetic: '/ˈbreɪnstɔːm/', meaning: 'Động não', collocations: 'brainstorm ideas', formalExample: 'Let\'s brainstorm.', casualExample: "Brainstorm session!", memoryTrick: 'Brain-storm = Bão não', difficulty: 2 },
              { word: 'consensus', phonetic: '/kənˈsensəs/', meaning: 'Đồng thuận', collocations: 'reach consensus', formalExample: 'Reach consensus.', casualExample: "What's the consensus?", memoryTrick: 'Con-sensus = Cùng suy nghĩ', difficulty: 3 },
              { word: 'action items', phonetic: '/ˈækʃən ˈaɪtəmz/', meaning: 'Việc cần làm', collocations: 'action items list', formalExample: 'List action items.', casualExample: "Any action items?", memoryTrick: 'Action = Hành động', difficulty: 2 },
              { word: 'stakeholder', phonetic: '/ˈsteɪkhəʊldə/', meaning: 'Người quan tâm', collocations: 'key stakeholder', formalExample: 'Update stakeholders.', casualExample: "Stakeholder buy-in needed.", memoryTrick: 'Stake-holder = Giữ cổ phần', difficulty: 4 },
            ]
          },
          {
            type: 'quiz',
            questions: [
              { type: 'multipleChoice', question: "What is an 'action item'?", options: ['Exercise', 'Task to do', 'Question', 'Topic'], correctAnswer: 'Task to do', explanation: 'Action item = việc cần làm.' },
              { type: 'multipleChoice', question: "What does 'table this' mean?", options: ['Put on table', 'Postpone', 'Discuss', 'End'], correctAnswer: 'Postpone', explanation: '"Table this" = hoãn lại.' },
            ]
          },
          {
            type: 'dailyMission',
            items: { vocabRecap: true, speakingMission: true, mirrorChallenge: true, sentencesToUse: ["I'd like to pitch an idea.", "Building on that...", "Can we go back to...?"], confidenceTracker: 78 }
          }
        ]
      },
      {
        id: 'day-6',
        title: 'Networking',
        isReview: false,
        sections: [
          {
            type: 'phrases',
            items: [
              { english: "What do you do for a living?", meaning: 'Bạn làm nghề gì?', pronunciation: '/wɒt duː juː duː/', usage: 'neutral', tone: 'social', situation: 'Hỏi nghề', example: "So, what do you do for a living?" },
              { english: "I'm in [industry]", meaning: 'Mình làm trong ngành...', pronunciation: '/aɪm ɪn/', usage: 'neutral', tone: 'professional', situation: 'Nói về nghề', example: "I'm in tech." },
              { english: "That sounds interesting!", meaning: 'Nghe thú vị!', pronunciation: '/ðæt saʊndz/', usage: 'neutral', tone: 'engaged', situation: 'Phản hồi', example: "That sounds really interesting!" },
              { english: "We should connect sometime", meaning: 'Chúng ta nên kết nối', pronunciation: '/wiː ʃʊd kəˈnekt/', usage: 'neutral', tone: 'positive', situation: 'Kết nối', example: "We should definitely connect!" },
              { english: "Can I add you on LinkedIn?", meaning: 'Cho mình kết nối LinkedIn?', pronunciation: '/kæn aɪ æd juː ɒn/', usage: 'neutral', tone: 'professional', situation: 'LinkedIn', example: "Can I add you on LinkedIn?" },
            ]
          },
          {
            type: 'vocabulary',
            items: [
              { word: 'networking', phonetic: '/ˈnetwɜːkɪŋ/', meaning: 'Kết nối', collocations: 'professional networking', formalExample: 'Networking event.', casualExample: "Great for networking!", memoryTrick: 'Net-work-ing = Mạng lưới', difficulty: 2 },
              { word: 'contact', phonetic: '/ˈkɒntækt/', meaning: 'Liên hệ', collocations: 'make contact', formalExample: 'Valuable contact.', casualExample: "Good contact to have.", memoryTrick: 'Con-tact = Tiếp xúc', difficulty: 1 },
              { word: 'referral', phonetic: '/rɪˈfɜːrəl/', meaning: 'Giới thiệu', collocations: 'get a referral', formalExample: 'Through referral.', casualExample: "Got a referral.", memoryTrick: 'Re-ferral = Giới thiệu lại', difficulty: 3 },
              { word: 'introduce', phonetic: '/ˌɪntrəˈdjuːs/', meaning: 'Giới thiệu', collocations: 'let me introduce', formalExample: 'Allow me to introduce...', casualExample: "Let me introduce my colleague.", memoryTrick: 'In-tro-duce = Đưa vào', difficulty: 2 },
              { word: 'pitch', phonetic: '/pɪtʃ/', meaning: 'Đề xuất', collocations: 'elevator pitch', formalExample: 'Business pitch.', casualExample: "Quick pitch?", memoryTrick: 'Pitch = Sân', difficulty: 2 },
            ]
          },
          {
            type: 'quiz',
            questions: [
              { type: 'multipleChoice', question: "What does 'What do you do for a living?' mean?", options: ['What do you eat', 'What is your job', 'Where do you live', 'What do you study'], correctAnswer: 'What is your job', explanation: 'Asking about profession.' },
              { type: 'multipleChoice', question: "What is a 'referral'?", options: ['Reference', 'Refund', 'Discount', 'Report'], correctAnswer: 'Reference', explanation: 'Referral = giới thiệu.' },
            ]
          },
          {
            type: 'dailyMission',
            items: { vocabRecap: true, speakingMission: true, mirrorChallenge: true, sentencesToUse: ["What do you do for a living?", "We should connect!", "Can I add you on LinkedIn?"], confidenceTracker: 80 }
          }
        ]
      },
      {
        id: 'day-7',
        title: 'Weekly Review',
        isReview: true,
        sections: [
          {
            type: 'dailyMission',
            items: { vocabRecap: true, speakingMission: true, mirrorChallenge: true, sentencesToUse: ["Week 3 Complete! Work English mastered!"], confidenceTracker: 100 }
          }
        ]
      }
    ]
  },
  {
    id: 'week-4',
    title: 'Independent Life',
    description: 'Navigate daily life with confidence',
    days: [
      {
        id: 'day-1',
        title: 'Banking & Finance',
        isReview: false,
        sections: [
          {
            type: 'phrases',
            items: [
              { english: "I'd like to open an account", meaning: 'Mình muốn mở tài khoản', pronunciation: '/aɪd laɪk tuː ˈəʊpən/', usage: 'formal', tone: 'formal', situation: 'Mở tài khoản', example: "I'd like to open a savings account." },
              { english: "What's my balance?", meaning: 'Số dư của mình là bao nhiêu?', pronunciation: '/wɒts maɪ ˈbæləns/', usage: 'neutral', tone: 'practical', situation: 'Kiểm tra số dư', example: "What's my balance please?" },
              { english: "I'd like to transfer money", meaning: 'Mình muốn chuyển tiền', pronunciation: '/aɪd laɪk tuː trænsˈfɜː/', usage: 'neutral', tone: 'formal', situation: 'Chuyển tiền', example: "I'd like to transfer money abroad." },
              { english: "The ATM ate my card", meaning: 'Máy ATM nuốt thẻ', pronunciation: '/ðiː eɪ tiː em/', usage: 'casual', tone: 'frustrated', situation: 'Thẻ bị nuốt', example: "The ATM ate my card! Can you help?" },
              { english: "Is there a minimum deposit?", meaning: 'Có số tiền gửi tối thiểu không?', pronunciation: '/ɪz ðeə ə ˈmɪnɪməm/', usage: 'neutral', tone: 'inquisitive', situation: 'Hỏi về gửi tiền', example: "Is there a minimum deposit?" },
            ]
          },
          {
            type: 'vocabulary',
            items: [
              { word: 'balance', phonetic: '/ˈbæləns/', meaning: 'Số dư', collocations: 'account balance', formalExample: 'Check your balance.', casualExample: "What's my balance?", memoryTrick: 'Bal-ance = Cân bằng', difficulty: 2 },
              { word: 'deposit', phonetic: '/dɪˈpɒzɪt/', meaning: 'Gửi tiền', collocations: 'make deposit', formalExample: 'Initial deposit required.', casualExample: "Want to make a deposit?", memoryTrick: 'De-posit = Bỏ vào', difficulty: 2 },
              { word: 'withdraw', phonetic: '/wɪðˈdrɔː/', meaning: 'Rút tiền', collocations: 'withdraw money', formalExample: 'Withdraw funds.', casualExample: "Need to withdraw cash.", memoryTrick: 'With-draw = Rút ra', difficulty: 3 },
              { word: 'transfer', phonetic: '/trænsˈfɜː/', meaning: 'Chuyển khoản', collocations: 'wire transfer', formalExample: 'Bank transfer.', casualExample: "Need to transfer money.", memoryTrick: 'Trans-fer = Chuyển qua', difficulty: 2 },
              { word: 'overdraft', phonetic: '/ˈəʊvədrɑːft/', meaning: 'Nợ quá hạn', collocations: 'overdraft fee', formalExample: 'Overdraft protection.', casualExample: "Got charged for overdraft.", memoryTrick: 'Over-draft = Quá mức', difficulty: 4 },
            ]
          },
          {
            type: 'quiz',
            questions: [
              { type: 'multipleChoice', question: "What is a 'balance'?", options: ['Bank name', 'Account amount', 'Password', 'Card'], correctAnswer: 'Account amount', explanation: 'Balance = số dư.' },
              { type: 'multipleChoice', question: "What does 'withdraw' mean?", options: ['Put money in', 'Take money out', 'Save money', 'Count money'], correctAnswer: 'Take money out', explanation: 'Withdraw = rút tiền.' },
            ]
          },
          {
            type: 'dailyMission',
            items: { vocabRecap: true, speakingMission: true, mirrorChallenge: true, sentencesToUse: ["I'd like to open an account.", "What's my balance?", "I'd like to transfer money."], confidenceTracker: 60 }
          }
        ]
      },
      {
        id: 'day-2',
        title: 'Healthcare',
        isReview: false,
        sections: [
          {
            type: 'phrases',
            items: [
              { english: "I need to make an appointment", meaning: 'Mình cần đặt lịch hẹn', pronunciation: '/aɪ niːd tuː meɪk ə/', usage: 'neutral', tone: 'polite', situation: 'Đặt lịch khám', example: "I'd like to make an appointment." },
              { english: "I have a fever", meaning: 'Mình bị sốt', pronunciation: '/aɪ hæv ə ˈfiːvə/', usage: 'neutral', tone: 'concerned', situation: 'Mô tả triệu chứng', example: "I have a fever and headache." },
              { english: "Where does it hurt?", meaning: 'Chỗ nào đau?', pronunciation: '/weə dʌz ɪt hɜːt/', usage: 'neutral', tone: 'concerned', situation: 'Khám bệnh', example: "Where does it hurt?" },
              { english: "I'm due for a checkup", meaning: 'Đến lịch khám định kỳ', pronunciation: '/aɪm djuː fɔː ə ˈtʃekʌp/', usage: 'neutral', tone: 'routine', situation: 'Khám định kỳ', example: "I'm due for a checkup." },
              { english: "What are the side effects?", meaning: 'Tác dụng phụ là gì?', pronunciation: '/wɒt ɑː ðə saɪd ɪˈfekts/', usage: 'neutral', tone: 'concerned', situation: 'Hỏi về thuốc', example: "What are the side effects?" },
            ]
          },
          {
            type: 'vocabulary',
            items: [
              { word: 'symptoms', phonetic: '/ˈsɪmptəmz/', meaning: 'Triệu chứng', collocations: 'mild symptoms', formalExample: 'Symptoms include...', casualExample: "What are your symptoms?", memoryTrick: 'Sympt-oms = Biểu hiện', difficulty: 2 },
              { word: 'prescription', phonetic: '/prɪˈskrɪpʃən/', meaning: 'Đơn thuốc', collocations: 'pick up prescription', formalExample: 'Electronic prescription.', casualExample: "Got the prescription.", memoryTrick: 'Pre-scription = Kê trước', difficulty: 3 },
              { word: 'appointment', phonetic: '/əˈpɔɪntmənt/', meaning: 'Lịch hẹn', collocations: 'make appointment', formalExample: 'Doctor appointment.', casualExample: "Have an appointment at 3.", memoryTrick: 'Ap-point-ment = Hẹn', difficulty: 2 },
              { word: 'allergy', phonetic: '/ˈælədʒi/', meaning: 'Dị ứng', collocations: 'food allergy', formalExample: 'Any allergies?', casualExample: "I have a nut allergy.", memoryTrick: 'Al-ler-gy = Dị ứng', difficulty: 2 },
              { word: 'pharmacy', phonetic: '/ˈfɑːməsi/', meaning: 'Hiệu thuốc', collocations: '24-hour pharmacy', formalExample: 'The pharmacy.', casualExample: "Pick up from pharmacy.", memoryTrick: 'Phar-macy = Bán thuốc', difficulty: 3 },
            ]
          },
          {
            type: 'quiz',
            questions: [
              { type: 'multipleChoice', question: "What is a 'prescription'?", options: ['Appointment', 'Medicine order', 'Bill', 'Referral'], correctAnswer: 'Medicine order', explanation: 'Prescription = đơn thuốc.' },
              { type: 'multipleChoice', question: "What does 'Where does it hurt?' mean?", options: ['Where is the pain', 'Where is the hospital', 'Where does it itch', 'Where is the problem'], correctAnswer: 'Where is the pain', explanation: 'Asking about pain location.' },
            ]
          },
          {
            type: 'dailyMission',
            items: { vocabRecap: true, speakingMission: true, mirrorChallenge: true, sentencesToUse: ["I need to make an appointment.", "I have a fever.", "What are the side effects?"], confidenceTracker: 65 }
          }
        ]
      },
      {
        id: 'day-3',
        title: 'Travel & Transportation',
        isReview: false,
        sections: [
          {
            type: 'phrases',
            items: [
              { english: "Where can I catch the bus?", meaning: 'Bắt xe buýt ở đâu?', pronunciation: '/weə kæn aɪ kætʃ ðə bʌs/', usage: 'neutral', tone: 'helpful', situation: 'Hỏi đi xe buýt', example: "Where can I catch the bus to downtown?" },
              { english: "How much is a ticket to...?", meaning: 'Vé đến... bao nhiêu?', pronunciation: '/haʊ mʌtʃ ɪz ə ˈtɪkɪt/', usage: 'neutral', tone: 'practical', situation: 'Hỏi giá vé', example: "How much is a ticket to New York?" },
              { english: "Is this seat taken?", meaning: 'Chỗ này có người ngồi chưa?', pronunciation: '/ɪz ðɪs siːt ˈteɪkən/', usage: 'neutral', tone: 'polite', situation: 'Hỏi chỗ ngồi', example: "Is this seat taken?" },
              { english: "What's the next stop?", meaning: 'Trạm kế tiếp là gì?', pronunciation: '/wɒts ðə nekst stɒp/', usage: 'neutral', tone: 'curious', situation: 'Hỏi trạm', example: "What's the next stop?" },
              { english: "I missed my flight", meaning: 'Mình lỡ chuyến bay', pronunciation: '/aɪ mɪst maɪ flaɪt/', usage: 'urgent', tone: 'worried', situation: 'Lỡ chuyến', example: "I missed my flight! What can I do?" },
            ]
          },
          {
            type: 'vocabulary',
            items: [
              { word: 'terminal', phonetic: '/ˈtɜːmɪnəl/', meaning: 'Nhà ga', collocations: 'airport terminal', formalExample: 'Terminal A.', casualExample: "Which terminal?", memoryTrick: 'Ter-min-al = Điểm cuối', difficulty: 3 },
              { word: 'departure', phonetic: '/dɪˈpɑːtʃə/', meaning: 'Khởi hành', collocations: 'departure time', formalExample: 'Departure at 3 PM.', casualExample: "What's our departure?", memoryTrick: 'De-part-ure = Rời đi', difficulty: 3 },
              { word: 'arrival', phonetic: '/əˈraɪvəl/', meaning: 'Đến nơi', collocations: 'arrival time', formalExample: 'Arrival expected at 5 PM.', casualExample: "Time of arrival?", memoryTrick: 'Ar-ri-val = Đến', difficulty: 2 },
              { word: 'transfer', phonetic: '/trænsˈfɜː/', meaning: 'Chuyển tuyến', collocations: 'transfer station', formalExample: 'Need transfer.', casualExample: "Where do I transfer?", memoryTrick: 'Trans-fer = Chuyển', difficulty: 2 },
              { word: 'delay', phonetic: '/dɪˈleɪ/', meaning: 'Trì hoãn', collocations: 'flight delay', formalExample: 'Significant delay.', casualExample: "Flight delay expected.", memoryTrick: 'De-lay = Trì hoãn', difficulty: 2 },
            ]
          },
          {
            type: 'quiz',
            questions: [
              { type: 'multipleChoice', question: "What is 'departure'?", options: ['Arrival', 'Leaving', 'Destination', 'Ticket'], correctAnswer: 'Leaving', explanation: 'Departure = khởi hành.' },
              { type: 'multipleChoice', question: "What does 'delay' mean?", options: ['Speed up', 'Postpone', 'Cancel', 'Fly'], correctAnswer: 'Postpone', explanation: 'Delay = trì hoãn.' },
            ]
          },
          {
            type: 'dailyMission',
            items: { vocabRecap: true, speakingMission: true, mirrorChallenge: true, sentencesToUse: ["Where can I catch the bus?", "How much is a ticket?", "I missed my flight!"], confidenceTracker: 70 }
          }
        ]
      },
      {
        id: 'day-4',
        title: 'Housing & Rentals',
        isReview: false,
        sections: [
          {
            type: 'phrases',
            items: [
              { english: "Is the apartment still available?", meaning: 'Căn hộ còn trống không?', pronunciation: '/ɪz ðiː əˈpɑːtmənt/', usage: 'neutral', tone: 'interested', situation: 'Hỏi thuê nhà', example: "Is the apartment still available?" },
              { english: "What's included in the rent?", meaning: 'Giá thuê bao gồm gì?', pronunciation: '/wɒts ɪnˈkluːdɪd/', usage: 'neutral', tone: 'practical', situation: 'Hỏi về tiền thuê', example: "What's included? Utilities?" },
              { english: "Can I see the lease?", meaning: 'Cho mình xem hợp đồng?', pronunciation: '/kæn aɪ siː ðə liːs/', usage: 'neutral', tone: 'cautious', situation: 'Xem hợp đồng', example: "Can I see the lease first?" },
              { english: "When is rent due?", meaning: 'Khi nào đóng tiền thuê?', pronunciation: '/wen ɪz rent djuː/', usage: 'neutral', tone: 'practical', situation: 'Hỏi ngày đóng tiền', example: "When is rent due each month?" },
              { english: "I need to give notice", meaning: 'Mình cần báo trước', pronunciation: '/aɪ niːd tuː ɡɪv ˈnəʊtɪs/', usage: 'neutral', tone: 'formal', situation: 'Báo nghỉ thuê', example: "I need to give 30 days notice." },
            ]
          },
          {
            type: 'vocabulary',
            items: [
              { word: 'lease', phonetic: '/liːs/', meaning: 'Hợp đồng thuê', collocations: 'sign lease', formalExample: 'Sign the lease.', casualExample: "When does the lease end?", memoryTrick: 'Lease = Thuê', difficulty: 2 },
              { word: 'landlord', phonetic: '/ˈlændlɔːd/', meaning: 'Chủ nhà', collocations: 'contact landlord', formalExample: 'Contact the landlord.', casualExample: "The landlord is nice.", memoryTrick: 'Land-lord = Chủ đất', difficulty: 2 },
              { word: 'tenant', phonetic: '/ˈtenənt/', meaning: 'Người thuê', collocations: 'current tenant', formalExample: 'Former tenant.', casualExample: "Good tenant.", memoryTrick: 'Ten-ant = Người thuê', difficulty: 3 },
              { word: 'deposit', phonetic: '/dɪˈpɒzɪt/', meaning: 'Tiền đặt cọc', collocations: 'security deposit', formalExample: 'Refundable deposit.', casualExample: "Need first month's deposit.", memoryTrick: 'De-posit = Đặt cọc', difficulty: 2 },
              { word: 'utilities', phonetic: '/juːˈtɪlətiz/', meaning: 'Tiện ích', collocations: 'pay utilities', formalExample: 'Utilities included.', casualExample: "Utilities extra?", memoryTrick: 'U-til-i-ties = Tiện ích', difficulty: 2 },
            ]
          },
          {
            type: 'quiz',
            questions: [
              { type: 'multipleChoice', question: "What is a 'lease'?", options: ['Rent', 'Contract', 'Deposit', 'Key'], correctAnswer: 'Contract', explanation: 'Lease = hợp đồng thuê.' },
              { type: 'multipleChoice', question: "What are 'utilities'?", options: ['Furniture', 'Services like water/electric', 'Rooms', 'Appliances'], correctAnswer: 'Services like water/electric', explanation: 'Utilities = điện nước, gas...' },
            ]
          },
          {
            type: 'dailyMission',
            items: { vocabRecap: true, speakingMission: true, mirrorChallenge: true, sentencesToUse: ["Is it still available?", "What's included?", "When is rent due?"], confidenceTracker: 75 }
          }
        ]
      },
      {
        id: 'day-5',
        title: 'Legal & Official',
        isReview: false,
        sections: [
          {
            type: 'phrases',
            items: [
              { english: "I need to file a report", meaning: 'Mình cần nộp báo cáo', pronunciation: '/aɪ niːd tuː faɪl ə rɪˈpɔːt/', usage: 'formal', tone: 'formal', situation: 'Nộp báo cáo', example: "I'd like to file a police report." },
              { english: "What documents do I need?", meaning: 'Tôi cần giấy tờ gì?', pronunciation: '/wɒt ˈdɒkjʊmənts/', usage: 'neutral', tone: 'practical', situation: 'Hỏi giấy tờ', example: "What documents do I need for the visa?" },
              { english: "Where do I sign?", meaning: 'Ký ở đâu?', pronunciation: '/weə duː aɪ saɪn/', usage: 'neutral', tone: 'practical', situation: 'Ký giấy tờ', example: "Where do I sign?" },
              { english: "What are the requirements?", meaning: 'Yêu cầu là gì?', pronunciation: '/wɒt ɑː ðə rɪˈkwaɪəmənts/', usage: 'neutral', tone: 'inquisitive', situation: 'Hỏi yêu cầu', example: "What are the requirements for this permit?" },
              { english: "How long does it take?", meaning: 'Mất bao lâu?', pronunciation: '/haʊ lɒŋ dʌz ɪt teɪk/', usage: 'neutral', tone: 'practical', situation: 'Hỏi thời gian', example: "How long does it take to process?" },
            ]
          },
          {
            type: 'vocabulary',
            items: [
              { word: 'document', phonetic: '/ˈdɒkjʊmənt/', meaning: 'Giấy tờ', collocations: 'official document', formalExample: 'Required documents.', casualExample: "Need to bring documents.", memoryTrick: 'Doc-u-ment = Văn bản', difficulty: 1 },
              { word: 'permit', phonetic: '/ˈpɜːmɪt/', meaning: 'Giấy phép', collocations: 'work permit', formalExample: 'Residence permit.', casualExample: "Got my permit.", memoryTrick: 'Per-mit = Cho phép', difficulty: 2 },
              { word: 'application', phonetic: '/ˌæplɪˈkeɪʃən/', meaning: '�ơn', collocations: 'visa application', formalExample: 'Application form.', casualExample: "Submitted application.", memoryTrick: 'Ap-pli-ca-tion = Ứng dụng', difficulty: 3 },
              { word: 'verify', phonetic: '/ˈverɪfaɪ/', meaning: 'Xác minh', collocations: 'verify identity', formalExample: 'For verification purposes.', casualExample: "Need to verify information.", memoryTrick: 'Ver-i-fy = Xác nhận', difficulty: 3 },
              { word: 'authorize', phonetic: '/ˈɔːθəraɪz/', meaning: 'Ủy quyền', collocations: 'authorized person', formalExample: 'Authorized signature.', casualExample: "You're authorized.", memoryTrick: 'Au-thor-ize = Cho phép', difficulty: 4 },
            ]
          },
          {
            type: 'quiz',
            questions: [
              { type: 'multipleChoice', question: "What is a 'permit'?", options: ['Passport', 'Permission document', 'Ticket', 'Card'], correctAnswer: 'Permission document', explanation: 'Permit = giấy phép.' },
              { type: 'multipleChoice', question: "What does 'verify' mean?", options: ['Sign', 'Confirm', 'Send', 'Receive'], correctAnswer: 'Confirm', explanation: 'Verify = xác nhận.' },
            ]
          },
          {
            type: 'dailyMission',
            items: { vocabRecap: true, speakingMission: true, mirrorChallenge: true, sentencesToUse: ["What documents do I need?", "Where do I sign?", "How long does it take?"], confidenceTracker: 78 }
          }
        ]
      },
      {
        id: 'day-6',
        title: 'Technology Support',
        isReview: false,
        sections: [
          {
            type: 'phrases',
            items: [
              { english: "My computer is not working", meaning: 'Máy tính không hoạt động', pronunciation: '/maɪ kəmˈpjuːtər/', usage: 'neutral', tone: 'frustrated', situation: 'Báo lỗi máy', example: "My computer is not working. Can you help?" },
              { english: "I forgot my password", meaning: 'Mình quên mật khẩu', pronunciation: '/aɪ fəˈɡɒt maɪ ˈpɑːswɜːd/', usage: 'neutral', tone: 'concerned', situation: 'Quên mật khẩu', example: "I forgot my password. How do I reset it?" },
              { english: "Can you help me set this up?", meaning: 'Giúp mình cài đặt được không?', pronunciation: '/kæn juː help miː set/', usage: 'neutral', tone: 'helpful', situation: 'Cài đặt', example: "Can you help me set up my new phone?" },
              { english: "It's giving me an error message", meaning: 'Nó hiện thông báo lỗi', pronunciation: '/ɪts ˈɡɪvɪŋ miː ən ˈerə/', usage: 'neutral', tone: 'frustrated', situation: 'Lỗi phần mềm', example: "It's giving me an error message." },
              { english: "Can you walk me through it?", meaning: 'Hướng dẫn mình được không?', pronunciation: '/kæn juː wɔːk miː θruː/', usage: 'neutral', tone: 'patient', situation: 'Cần hướng dẫn', example: "Can you walk me through the steps?" },
            ]
          },
          {
            type: 'vocabulary',
            items: [
              { word: 'password', phonetic: '/ˈpɑːswɜːd/', meaning: 'Mật khẩu', collocations: 'reset password', formalExample: 'Change password.', casualExample: "Forgot password!", memoryTrick: 'Pass-word = Từ qua cổng', difficulty: 1 },
              { word: 'download', phonetic: '/ˌdaʊnˈləʊd/', meaning: 'Tải về', collocations: 'download file', formalExample: 'Download the app.', casualExample: "Download it here.", memoryTrick: 'Down-load = Tải xuống', difficulty: 1 },
              { word: 'update', phonetic: '/ʌpˈdeɪt/', meaning: 'Cập nhật', collocations: 'software update', formalExample: 'System update required.', casualExample: "Need to update the app.", memoryTrick: 'Up-date = Đưa lên ngày', difficulty: 2 },
              { word: 'restart', phonetic: '/ˌriːˈstɑːt/', meaning: 'Khởi động lại', collocations: 'restart device', formalExample: 'Please restart.', casualExample: "Have you tried restarting?", memoryTrick: 'Re-start = Bắt đầu lại', difficulty: 2 },
              { word: 'settings', phonetic: '/ˈsetɪŋz/', meaning: 'Cài đặt', collocations: 'change settings', formalExample: 'Check settings.', casualExample: "Go to settings.", memoryTrick: 'Set-tings = Thiết lập', difficulty: 1 },
            ]
          },
          {
            type: 'quiz',
            questions: [
              { type: 'multipleChoice', question: "What is a 'password'?", options: ['Username', 'Secret word', 'Email', 'Code'], correctAnswer: 'Secret word', explanation: 'Password = mật khẩu.' },
              { type: 'multipleChoice', question: "What does 'restart' mean?", options: ['Turn off', 'Turn on', 'Start again', 'Update'], correctAnswer: 'Start again', explanation: 'Restart = khởi động lại.' },
            ]
          },
          {
            type: 'dailyMission',
            items: { vocabRecap: true, speakingMission: true, mirrorChallenge: true, sentencesToUse: ["My computer is not working.", "I forgot my password.", "Can you help me set this up?"], confidenceTracker: 80 }
          }
        ]
      },
      {
        id: 'day-7',
        title: 'Final Boss Review',
        isReview: true,
        sections: [
          {
            type: 'dailyMission',
            items: { vocabRecap: true, speakingMission: true, mirrorChallenge: true, sentencesToUse: ["Week 4 Complete! You're now independent! All survival skills mastered!"], confidenceTracker: 100 }
          }
        ]
      }
    ]
  }
];

export default lessonsData;
