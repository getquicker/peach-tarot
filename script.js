/* Peach Tarot — Interactive Script */

const majorArcana = [
  {
    number: "0",
    title: "The Fool",
    art: "🌸",
    keywords: "New beginnings • Trust • Innocence",
    meaning: "A soft invitation to step forward with an open heart. The path ahead is unknown, but filled with possibility. Trust your first gentle impulse."
  },
  {
    number: "I",
    title: "The Magician",
    art: "✨",
    keywords: "Manifestation • Skill • Focus",
    meaning: "You already hold the tools you need. Channel your energy with quiet intention. What you focus on with care begins to take form."
  },
  {
    number: "II",
    title: "The High Priestess",
    art: "🌙",
    keywords: "Intuition • Mystery • Inner knowing",
    meaning: "Listen to the soft voice within. Not everything needs to be spoken aloud. The answers you seek are already blooming in the quiet."
  },
  {
    number: "III",
    title: "The Empress",
    art: "🌿",
    keywords: "Abundance • Nurture • Beauty",
    meaning: "A season of growth and softness. Tend to yourself and those you love. Beauty and nourishment are available — receive them."
  },
  {
    number: "IV",
    title: "The Emperor",
    art: "🏛️",
    keywords: "Structure • Stability • Protection",
    meaning: "Create gentle boundaries. Structure need not be rigid — it can be a warm container that holds your dreams safely."
  },
  {
    number: "V",
    title: "The Hierophant",
    art: "📿",
    keywords: "Tradition • Guidance • Shared wisdom",
    meaning: "Seek counsel from trusted sources or ancestral knowledge. There is comfort in paths that others have walked with care."
  },
  {
    number: "VI",
    title: "The Lovers",
    art: "💞",
    keywords: "Connection • Choice • Harmony",
    meaning: "A meaningful bond or an important choice of the heart. Align with what feels true and mutually nourishing."
  },
  {
    number: "VII",
    title: "The Chariot",
    art: "🐎",
    keywords: "Direction • Will • Progress",
    meaning: "Move forward with quiet determination. You can hold opposing forces in balance and still advance with grace."
  },
  {
    number: "VIII",
    title: "Strength",
    art: "🦁",
    keywords: "Courage • Compassion • Inner power",
    meaning: "True strength is soft and steady. Approach challenges (and yourself) with patience and kindness rather than force."
  },
  {
    number: "IX",
    title: "The Hermit",
    art: "🕯️",
    keywords: "Solitude • Reflection • Inner light",
    meaning: "A time to turn inward. Your own quiet company holds valuable insight. Carry your light gently."
  },
  {
    number: "X",
    title: "Wheel of Fortune",
    art: "🎡",
    keywords: "Cycles • Change • Destiny",
    meaning: "The wheel turns. Embrace the natural rhythm of rise and rest. What is leaving makes space for what is arriving."
  },
  {
    number: "XI",
    title: "Justice",
    art: "⚖️",
    keywords: "Balance • Truth • Fairness",
    meaning: "Seek clarity and honesty — with others and yourself. Fair outcomes grow from careful, considered action."
  },
  {
    number: "XII",
    title: "The Hanged One",
    art: "🕊️",
    keywords: "Surrender • New perspective • Pause",
    meaning: "Sometimes the wisest move is to pause. Release control for a moment and allow a new view to appear."
  },
  {
    number: "XIII",
    title: "Death",
    art: "🍂",
    keywords: "Transformation • Release • Renewal",
    meaning: "An ending that clears the way for something softer and truer. Let go with gratitude. Renewal follows."
  },
  {
    number: "XIV",
    title: "Temperance",
    art: "💧",
    keywords: "Balance • Patience • Harmony",
    meaning: "Blend opposing elements gently. Moderation and patience create lasting peace. Find the middle path."
  },
  {
    number: "XV",
    title: "The Devil",
    art: "🔗",
    keywords: "Attachment • Shadow • Liberation",
    meaning: "Notice where you feel bound. Awareness is the first soft key to freedom. You can loosen what no longer serves."
  },
  {
    number: "XVI",
    title: "The Tower",
    art: "⚡",
    keywords: "Sudden change • Revelation • Clearing",
    meaning: "Old structures may shift or fall. Though startling, this clearing makes space for a more authentic foundation."
  },
  {
    number: "XVII",
    title: "The Star",
    art: "⭐",
    keywords: "Hope • Healing • Inspiration",
    meaning: "A gentle light after difficulty. Trust in renewal. Your hopes are valid and your healing is underway."
  },
  {
    number: "XVIII",
    title: "The Moon",
    art: "🌕",
    keywords: "Illusion • Emotion • Dreams",
    meaning: "Not everything is as it first appears. Honor your feelings and dreams, but walk carefully through uncertainty."
  },
  {
    number: "XIX",
    title: "The Sun",
    art: "☀️",
    keywords: "Joy • Clarity • Vitality",
    meaning: "Warmth returns. Celebrate simple joys and the clarity that comes with light. You are allowed to shine."
  },
  {
    number: "XX",
    title: "Judgement",
    art: "📯",
    keywords: "Awakening • Reflection • Calling",
    meaning: "A soft inner call to rise into a more authentic version of yourself. Review the past with compassion."
  },
  {
    number: "XXI",
    title: "The World",
    art: "🌍",
    keywords: "Completion • Wholeness • Integration",
    meaning: "A cycle completes with grace. You have gathered the lessons. Rest in the feeling of fullness before the next beginning."
  }
];

// DOM elements
const drawBtn = document.getElementById('drawBtn');
const tarotCard = document.getElementById('tarotCard');
const drawnArea = document.getElementById('drawnArea');
const cardNumber = document.getElementById('cardNumber');
const cardTitle = document.getElementById('cardTitle');
const cardArt = document.getElementById('cardArt');
const cardKeywords = document.getElementById('cardKeywords');
const meaningTitle = document.getElementById('meaningTitle');
const meaningText = document.getElementById('meaningText');

let isDrawing = false;
let currentCard = null;

// Navigation
document.querySelectorAll('.nav-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    // Update tabs
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    
    // Update sections
    const sectionId = tab.dataset.section;
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
  });
});

// Draw a card
drawBtn.addEventListener('click', () => {
  if (isDrawing) return;
  isDrawing = true;
  drawBtn.classList.add('disabled');
  
  // Reset previous
  tarotCard.classList.remove('flipped');
  drawnArea.classList.remove('visible');
  
  // Small delay for theatrical feel
  setTimeout(() => {
    // Pick random card
    currentCard = majorArcana[Math.floor(Math.random() * majorArcana.length)];
    
    // Populate front
    cardNumber.textContent = currentCard.number;
    cardTitle.textContent = currentCard.title;
    cardArt.textContent = currentCard.art;
    cardKeywords.textContent = currentCard.keywords;
    meaningTitle.textContent = currentCard.title;
    meaningText.textContent = currentCard.meaning;
    
    // Show the card area
    drawnArea.classList.add('visible');
    
    // Flip after a beat
    setTimeout(() => {
      tarotCard.classList.add('flipped');
      isDrawing = false;
      drawBtn.classList.remove('disabled');
      drawBtn.querySelector('.btn-text').textContent = 'Draw Another';
    }, 400);
  }, 300);
});

// Allow clicking the card to flip back and forth (for fun)
tarotCard.addEventListener('click', () => {
  if (currentCard && !isDrawing) {
    tarotCard.classList.toggle('flipped');
  }
});

// Book button (placeholder)
document.querySelector('.book-btn')?.addEventListener('click', () => {
  alert('Thank you for your interest 🍑\n\nIn a real site this would open a booking form or calendar.\nFor now, imagine a soft confirmation email is on its way.');
});
