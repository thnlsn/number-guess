'use strict';

console.log('Working');

const score = 20;
const highscore = 0;

const answer = Math.trunc(Math.random() * 99 + 1);
console.log(answer);

/* document.querySelector('.dashboard-section__message').textContent =
  'Correct Number!';

document.querySelector('.header__number').textContent = 13;
document.querySelector('.dashboard-section__score').textContent = 10;

document.querySelector('.guess-section__input').value = 23;
console.log(document.querySelector('.guess-section__input').value); */

document.querySelector('.btn--check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess-section__input').value);
  console.log(guess, typeof guess);

  // If there isn't a guess, or the guess is outside the 1-99 parameters...
  if (!guess || guess < 1 || guess > 99) {
    document.querySelector('.dashboard-section__message').textContent =
      'Not a valid number!';
  } else {
    // Check if the guess less than the answer
    if (guess > answer) {
      // Tell user too high
      document.querySelector('.dashboard-section__message').textContent =
        'Too high!';
      // Check if the guess more than the answer
    } else if (guess < answer) {
      document.querySelector('.dashboard-section__message').textContent =
        'Too low!';
      // Guess must be correct
    } else {
      document.querySelector('.header__number').textContent = answer;
      document.querySelector('.dashboard-section__message').textContent =
        'Correct! You win!';
    }
  }
});
