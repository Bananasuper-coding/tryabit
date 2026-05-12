export const gamesData = [
  {
    id: 'flashcard-battle',
    title: 'Flashcard Battle',
    description: 'Match words with meanings in this fast-paced card game',
    icon: '🎴',
    category: 'vocabulary',
    difficulty: 2,
    xpReward: 30,
    color: 'from-blue-500 to-cyan-500',
    getInitialState: () => ({
      cards: [],
      flipped: [],
      matched: 0,
      score: 0,
      moves: 0,
      timer: 0,
      isPlaying: false,
      questions: [
        { word: 'awesome', meaning: 'tuyệt vời', phonetic: '/ˈɔːsəm/' },
        { word: 'buddy', meaning: 'bạn thân', phonetic: '/ˈbʌdi/' },
        { word: 'colleague', meaning: 'đồng nghiệp', phonetic: '/ˈkɒliːɡ/' },
        { word: 'hang out', meaning: 'tụ tập', phonetic: '/hæŋ aʊt/' },
        { word: 'bargain', meaning: 'món hời', phonetic: '/ˈbɑːɡɪn/' },
        { word: 'deadline', meaning: 'thời hạn', phonetic: '/ˈdedlaɪn/' },
        { word: 'stoked', meaning: 'rất hào hứng', phonetic: '/stəʊkt/' },
        { word: 'nailed', meaning: 'làm xuất sắc', phonetic: '/neɪld/' },
      ]
    })
  },
  {
    id: 'listening-arena',
    title: 'Listening Arena',
    description: 'Test your listening skills with audio questions',
    icon: '🎧',
    category: 'listening',
    difficulty: 3,
    xpReward: 40,
    color: 'from-purple-500 to-pink-500',
    getInitialState: () => ({
      currentQuestion: 0,
      score: 0,
      questions: [
        { audio: "What's up?", options: ['How are you?', "What's new?", 'Where are you?'], correct: 1 },
        { audio: "I'm feeling under the weather", options: ['I feel sick', 'I feel happy', 'I feel angry'], correct: 0 },
        { audio: "Nice to meet you", options: ['Rất vui được gặp', 'Lâu rồi không gặp', 'Bạn khỏe không?'], correct: 0 },
        { audio: "Can I get this to go?", options: ['Mang về', 'Ăn ở đây', 'Thanh toán'], correct: 0 },
        { audio: "It's on me", options: ['Mình trả', 'Tính tiền', 'Chia tiền'], correct: 0 },
      ]
    })
  },
  {
    id: 'sentence-builder',
    title: 'Sentence Builder',
    description: 'Arrange words to form correct sentences',
    icon: '🧩',
    category: 'grammar',
    difficulty: 2,
    xpReward: 35,
    color: 'from-green-500 to-emerald-500',
    getInitialState: () => ({
      currentSentence: 0,
      score: 0,
      sentences: [
        { words: ['Nice', 'to', 'meet', 'you'], correct: ['Nice', 'to', 'meet', 'you'] },
        { words: ['How', 'are', 'you'], correct: ['How', 'are', 'you'] },
        { words: ['I', 'would', 'like', 'to', 'order'], correct: ['I', 'would', 'like', 'to', 'order'] },
        { words: ['Where', 'is', 'the', 'bathroom'], correct: ['Where', 'is', 'the', 'bathroom'] },
        { words: ['Can', 'you', 'help', 'me'], correct: ['Can', 'you', 'help', 'me'] },
      ]
    })
  },
  {
    id: 'speed-quiz',
    title: 'Speed Quiz',
    description: 'Answer questions before time runs out!',
    icon: '⚡',
    category: 'speed',
    difficulty: 3,
    xpReward: 50,
    color: 'from-orange-500 to-red-500',
    getInitialState: () => ({
      currentQuestion: 0,
      score: 0,
      combo: 0,
      timeLeft: 60,
      questions: [
        { question: "What's the opposite of 'cold'?", options: ['Hot', 'Warm', 'Cool'], correct: 0, time: 5 },
        { question: "Which is a greeting?", options: ['Banana', 'Hello', 'Book'], correct: 1, time: 5 },
        { question: "'Bargain' means...", options: ['Expensive', 'Cheap', 'Normal'], correct: 1, time: 5 },
        { question: "Complete: 'Break a ___'", options: ['Leg', 'Arm', 'Head'], correct: 0, time: 5 },
        { question: "What's 'receipt'?", options: ['Bill', 'Menu', 'Order'], correct: 0, time: 5 },
      ]
    })
  },
  {
    id: 'memory-match',
    title: 'Memory Match',
    description: 'Find matching pairs of vocabulary words',
    icon: '🧠',
    category: 'memory',
    difficulty: 2,
    xpReward: 25,
    color: 'from-yellow-500 to-amber-500',
    getInitialState: () => ({
      cards: [],
      flipped: [],
      matched: 0,
      attempts: 0,
      score: 0,
      pairs: [
        { word: 'awesome', emoji: '🔥' },
        { word: 'buddy', emoji: '👋' },
        { word: 'deadline', emoji: '⏰' },
        { word: 'bargain', emoji: '💰' },
        { word: 'chill', emoji: '❄️' },
        { word: 'stoked', emoji: '🏄' },
      ]
    })
  },
  {
    id: 'pronunciation-challenge',
    title: 'Pronunciation Challenge',
    description: 'Listen and repeat to improve your pronunciation',
    icon: '🎤',
    category: 'speaking',
    difficulty: 3,
    xpReward: 45,
    color: 'from-rose-500 to-pink-500',
    getInitialState: () => ({
      currentPhrase: 0,
      score: 0,
      phrases: [
        { phrase: "What's up?", phonetic: '/wɒts ʌp/', difficulty: 1 },
        { phrase: "Nice to meet you", phonetic: '/naɪs tuː miːt juː/', difficulty: 2 },
        { phrase: "How's it going?", phonetic: '/haʊz ɪt ˈɡəʊɪŋ/', difficulty: 2 },
        { phrase: "I'm feeling under the weather", phonetic: '/aɪm ˈfiːlɪŋ/', difficulty: 3 },
        { phrase: "That's a bit steep", phonetic: '/ðæts ə bɪt stiːp/', difficulty: 3 },
      ]
    })
  },
  {
    id: 'reaction-time',
    title: 'Reaction Time',
    description: 'Quick! Choose the correct answer before it disappears!',
    icon: '🎯',
    category: 'speed',
    difficulty: 4,
    xpReward: 55,
    color: 'from-red-500 to-rose-500',
    getInitialState: () => ({
      currentRound: 0,
      score: 0,
      reactionTime: 0,
      showing: false,
      rounds: [
        { prompt: 'happy', correct: 'vui vẻ', options: ['buồn', 'vui vẻ', 'tức giận'], time: 2000 },
        { prompt: 'colleague', correct: 'đồng nghiệp', options: ['bạn bè', 'đồng nghiệp', 'hàng xóm'], time: 2000 },
        { prompt: 'deadline', correct: 'thời hạn', options: ['ngày sinh', 'thời hạn', 'cuộc họp'], time: 2000 },
        { prompt: 'bargain', correct: 'món hời', options: ['món hời', 'món đắt', 'món rẻ'], time: 2000 },
        { prompt: 'stoked', correct: 'rất hào hứng', options: ['buồn', 'tức giận', 'rất hào hứng'], time: 2000 },
      ]
    })
  },
  {
    id: 'word-survival',
    title: 'Word Survival',
    description: 'Wrong answer means eliminated! How long can you last?',
    icon: '💀',
    category: 'vocabulary',
    difficulty: 4,
    xpReward: 60,
    color: 'from-gray-700 to-gray-900',
    getInitialState: () => ({
      lives: 3,
      score: 0,
      questionIndex: 0,
      isGameOver: false,
      questions: [
        { word: 'Which means "to help"?', correct: 'assist', options: ['ignore', 'assist', 'leave'] },
        { word: 'Which means "expensive"?', correct: 'steep', options: ['cheap', 'steep', 'stale'] },
        { word: '"Rain check" means?', correct: 'postpone', options: ['rain', 'postpone', 'cancel'] },
        { word: 'Which is a greeting?', correct: 'wassup', options: ['goodbye', 'wassup', 'sorry'] },
        { word: '"Stoked" means?', correct: 'excited', options: ['tired', 'bored', 'excited'] },
      ]
    })
  },
  {
    id: 'shadowing-rush',
    title: 'Shadowing Rush',
    description: 'Listen and shadow sentences as fast as you can!',
    icon: '🗣️',
    category: 'speaking',
    difficulty: 3,
    xpReward: 40,
    color: 'from-indigo-500 to-violet-500',
    getInitialState: () => ({
      currentRound: 0,
      score: 0,
      isListening: false,
      rounds: [
        { sentence: "I'm really looking forward to it!", time: 3000 },
        { sentence: "That's a bit steep, don't you think?", time: 3500 },
        { sentence: "How do I get to the train station?", time: 3500 },
        { sentence: "Can I get this to go?", time: 2500 },
        { sentence: "No worries, I've got this!", time: 3000 },
      ]
    })
  },
  {
    id: 'boss-battle',
    title: 'Boss Battle',
    description: 'The ultimate challenge! Test all your skills!',
    icon: '👑',
    category: 'grammar',
    difficulty: 5,
    xpReward: 100,
    color: 'from-amber-500 to-orange-500',
    getInitialState: () => ({
      phase: 'vocabulary',
      lives: 3,
      score: 0,
      currentQuestion: 0,
      isComplete: false,
      phases: {
        vocabulary: {
          name: 'Vocabulary',
          icon: '📚',
          questions: [
            { word: 'awesome', meaning: 'tuyệt vời' },
            { word: 'colleague', meaning: 'đồng nghiệp' },
            { word: 'deadline', meaning: 'thời hạn' },
          ]
        },
        grammar: {
          name: 'Grammar',
          icon: '📝',
          questions: [
            { question: "Complete: 'Nice to ___ you'", answer: 'meet' },
            { question: "'My bad' means...", answer: 'my mistake' },
          ]
        },
        listening: {
          name: 'Listening',
          icon: '👂',
          questions: [
            { audio: "What's up?", meaning: 'How are you?' },
            { audio: "I'll take it", meaning: 'I will buy it' },
          ]
        }
      }
    })
  }
];

export default gamesData;
