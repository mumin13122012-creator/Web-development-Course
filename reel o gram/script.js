const recordBtn = document.getElementById("recordBtn");
const stopBtn = document.getElementById("stopBtn");
const timerDisplay = document.getElementById("timer");

let timeLeft = 10;
let timerInterval = null;

// UI State Management for 10-second timer
recordBtn.addEventListener("click", () => {
  recordBtn.disabled = true;
  stopBtn.disabled = false;
  timeLeft = 10;
  timerDisplay.textContent = `${timeLeft}s`;

  // Start 10-second countdown UI state
  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `${timeLeft}s`;

    if (timeLeft <= 0) {
      resetUI();
    }
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  resetUI();
});

function resetUI() {
  clearInterval(timerInterval);
  timerDisplay.textContent = "10s";
  recordBtn.disabled = false;
  stopBtn.disabled = true;
}