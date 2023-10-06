'use strict';

// const message = document.querySelector(`.message`).textContent;
// console.log(message);

// // maniputlating web page contents
// document.querySelector(`.message`).textContent = `Correct Number`;
// console.log(document.querySelector(`.message`).textContent);

// // setting or manipulating elecment contents
// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 10;

// // for number elements, use value to set or get their values
// document.querySelector(`.guess`).value = 23;
// const guessnum = (document.querySelector(`.guess`).value = 23);
// console.log(guessnum);

// manipulating the DOM
const checkEl = document.querySelector(`.check`);
const guessEl = document.querySelector(`.guess`);
const messageEl = document.querySelector(`.message`);
const numberEl = document.querySelector(`.number`);
const scoreEl = document.querySelector(`.score`);
const bodyEl = document.querySelector(`body`);
const againEl = document.querySelector(`.again`);
const initialMessage = `Start guessing...`;
const highscoreEl = document.querySelector(`.highscore`);
let score = 20;
let highscore = 0;

function generateSecret() {
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  return secretNumber;
} // fxn to generate random secret number between 1 and 20 inclusive
function setScoreEl(score) {
  scoreEl.textContent = score;
} // fxn to set score element

let secretNumber = generateSecret();

function displayMessage(message) {
  messageEl.textContent = message;
} // function to display message in the message element

checkEl.addEventListener(`click`, function () {
  const guess = Number(guessEl.value);

  if (!guess) {
    // when no input
    displayMessage(`⛔ No number! `);
    // when number is correct
  } else if (guess === secretNumber) {
    displayMessage(`Correct Number 🎉`);
    bodyEl.style.backgroundColor = `#60b347`;
    numberEl.style.width = `30rem`;
    numberEl.textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
    // when number is greater
  } else if (guess !== secretNumber) {
    const result =
      --score >= 1
        ? `${guess > secretNumber} ? 'Too High' : 'Too Low'`
        : `  💥 You lost the game`;
    displayMessage(result);
    setScoreEl(score >= 0 ? score : 0); // preventing displaying negative values
  }
  console.log(guess, typeof guess);
});

// event handler for again element
againEl.addEventListener('click', function () {
  score = 20;
  setScoreEl(score);
  secretNumber = generateSecret();
  numberEl.textContent = `?`;
  displayMessage(initialMessage);
  guessEl.value = ``;
  bodyEl.style.backgroundColor = '#222';
  numberEl.style.width = `15rem`;
});
