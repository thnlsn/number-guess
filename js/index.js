'use strict';

console.log('Working');

//////////////////////////////////////////////////////////////////////////////////////////////////

const setMessage = (message) => {
  document.querySelector('.dashboard-section__message').textContent = message;
};

const reduceScore = (message) => {
  setMessage(message);
  score--; // Reduce score state
  document.querySelector('.dashboard-section__score').textContent = score; // Set to score dom
};

const endGame = (message) => {
  document.querySelector('.header__number').textContent = answer; // Set ? to answer
  document.querySelector('.header__number').style.padding =
    '3.5rem 6rem 2rem 7.5rem';
  setMessage(message);
};

const winGame = () => {
  endGame('You win!');
  document.querySelector('body').style.backgroundColor = '#60b347';
  if (
    highscore < document.querySelector('.dashboard-section__score').textContent
  ) {
    // Set highscore variable to the current score
    highscore = document.querySelector('.dashboard-section__score').textContent;
    // Set the textContent of highscore span to that new highscore
    document.querySelector(
      '.dashboard-section__highscore'
    ).textContent = highscore;
  }
};

const loseGame = () => {
  endGame('You lose!');
  document.querySelector('body').style.backgroundColor = '#b34760';
  score = 0;
  document.querySelector('.dashboard-section__score').textContent = score; // Set to score dom
};

const resetGame = () => {
  // Reset the answer and score state variables
  score = 20;
  answer = Math.trunc(Math.random() * 99 + 1);

  // Set message, ?, and score back to default
  setMessage('Begin guessing...');
  // Set the number back to ?
  document.querySelector('.header__number').textContent = '?';
  // Set score back to 20
  document.querySelector('.dashboard-section__score').textContent = score; // Set to score dom
  // Set value of input to 1
  document.querySelector('.guess-section__input').value = 1;

  // Set background back to black
  document.querySelector('body').style.backgroundColor = '#201f20';
  // Set the padding of the number back
  document.querySelector('.header__number').style.padding =
    '3.5rem 2rem 2rem 3.5rem';

  // Console
  console.log(answer);
};

//////////////////////////////////////////////////////////////////////////////////////////////////

// State
let score = 20;
let highscore = 0;
let answer = Math.trunc(Math.random() * 99 + 1);
console.log(answer);

document.querySelector('.btn--check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess-section__input').value);
  console.log(guess, typeof guess);

  // If there isn't a guess, or the guess is outside the 1-99 parameters...
  if (!guess || guess < 1 || guess > 99) {
    setMessage('Not a valid number!');
    // IF THE SCORE IS NOT YET 0, CHECK GUESS TO ANSWER...
  } else if (score >= 1) {
    // IF GUESS IS WRONG...
    if (guess !== answer) {
      guess > answer ? reduceScore('Too high!') : reduceScore('Too low!');
    } else winGame(); // MUST HAVE WON...
    // IF SCORE IS 0...
  } else {
    loseGame();
  }
});

document.querySelector('.btn--again').addEventListener('click', () => {
  resetGame();
});
