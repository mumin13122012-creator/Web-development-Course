// Quiz Questions Data
const quizData = [
  {
    question: "What is a Barcode?",
    options: [
      "An optical machine-readable representation of data",
      "A secret password for computers",
      "A type of wireless internet connection",
      "A hardware component inside a battery"
    ],
    correct: 0
  },
  {
    question: "Where is a barcode commonly used?",
    options: [
      "In retail store product tracking",
      "In identity cards and package shipping",
      "In library management systems",
      "All of the above"
    ],
    correct: 3
  },
  {
    question: "How does a barcode reader scan information?",
    options: [
      "By using sound waves",
      "By measuring light reflected from lines",
      "By measuring magnetic weight",
      "By using heat sensors"
    ],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;

// Screens
const homeScreen = document.getElementById("homeScreen");
const quizScreen = document.getElementById("quizScreen");
const finalScreen = document.getElementById("finalScreen");

// Elements
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const questionNum = document.getElementById("questionNum");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const scoreText = document.getElementById("scoreText");

// Web Speech API for Text-to-Speech
function speakText(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // Stop any ongoing speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    window.speechSynthesis.speak(utterance);
  }
}

// Navigation between screens
function showScreen(screen) {
  homeScreen.classList.remove("active");
  quizScreen.classList.remove("active");
  finalScreen.classList.remove("active");
  screen.classList.add("active");
}

startBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  showScreen(quizScreen);
  loadQuestion();
});

restartBtn.addEventListener("click", () => {
  showScreen(homeScreen);
});

function loadQuestion() {
  const data = quizData[currentQuestion];
  questionNum.textContent = `Question ${currentQuestion + 1}/${quizData.length}`;
  questionText.textContent = data.question;
  optionsContainer.innerHTML = "";

  data.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = option;
    btn.addEventListener("click", () => checkAnswer(index));
    optionsContainer.appendChild(btn);
  });
}

function checkAnswer(selectedIndex) {
  const correctIndex = quizData[currentQuestion].correct;
  
  if (selectedIndex === correctIndex) {
    score++;
    speakText("Correct answer!");
  } else {
    speakText("Incorrect answer!");
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showFinalScreen();
  }
}

function showFinalScreen() {
  showScreen(finalScreen);
  scoreText.textContent = `Your Score: ${score}/${quizData.length}`;
  speakText("Thank you for completing the Barcode quiz.");
}