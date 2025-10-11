// mine.js
let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

let display = document.querySelector(".calc span");
let startBtn = document.querySelector(".btn");
let stopBtn = document.querySelector(".bun");
let resetBtn = document.querySelector(".tun");

// display update function
function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.textContent = `${h}:${m}:${s}`;
}

// start button
function startTimer() {
  if (!timer) {
    timer = setInterval(() => {
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
          minutes = 0;
          hours++;
        }
      }
      updateDisplay();
    }, 1000);
  }
}

// stop button
function stopTimer() {
  clearInterval(timer);
  timer = null;
}

// reset button
function resetTimer() {
  stopTimer();
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}

// event listeners
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

// প্রথমে 00:00:00 দেখাবে
updateDisplay();
