'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

//Functions and constants used for DRY principle
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayHighScore = function (highScore) {
  document.querySelector('.highscore').textContent = highScore;
};

const secretNumberElement = document.querySelector('.number');


function checkNumber() {
  let guessNumber = Number(document.querySelector('.guess').value);

  if (!guessNumber) {
    displayMessage('Enter a number b/w 1 to 20..!');
  } else if (guessNumber === secretNumber) {
    displayMessage('Guess is Correct');
    secretNumberElement.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    secretNumberElement.style.width = '30rem';
    if (score > highScore) {
      highScore = score;
    }
  } else if (guessNumber !== secretNumber && score > 1) {
    displayMessage(guessNumber < secretNumber ? 'Too Low' : 'Too high');
    score--;
  } else {
    displayMessage('Game Over');
    score--;
  }

  displayScore(score);
  displayHighScore(highScore);
}

// Check button event listner
document.querySelector('.check').addEventListener('click', checkNumber );
document.addEventListener('keydown', function(event){
  
  if(event.key === 'Enter'){
    checkNumber();
  }
} );

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayScore(score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumberElement.style.width = '15rem';
  secretNumberElement.textContent = '?';
  displayMessage('Start guessing...');
});
