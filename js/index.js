'use strict';

console.log('Working');

// State
let score = 20;
let highscore = 0;
const answer = Math.trunc(Math.random() * 99 + 1);

console.log(answer);

document.querySelector('.btn--check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess-section__input').value);
  console.log(guess, typeof guess);

  // If there isn't a guess, or the guess is outside the 1-99 parameters...
  if (!guess || guess < 1 || guess > 99) {
    document.querySelector('.dashboard-section__message').textContent =
      'Not a valid number!';
  } else if (score > 1) {
    // Check if the guess less than the answer
    if (guess > answer) {
      // Tell user too high
      document.querySelector('.dashboard-section__message').textContent =
        'Too high!';
      score--; // Reduce score state
      document.querySelector('.dashboard-section__score').textContent = score; // Set to score dom

      // Check if the guess more than the answer
    } else if (guess < answer) {
      // Tell user too low
      document.querySelector('.dashboard-section__message').textContent =
        'Too low!';
      score--; // Reduce score state
      document.querySelector('.dashboard-section__score').textContent = score; // Set to score dom

      // Guess must be correct
    } else {
      document.querySelector('.header__number').textContent = answer; // Set ? to answer
      // Tell user they win
      document.querySelector('.dashboard-section__message').textContent =
        'Correct! You win!';

      // If highscore is less than the current score as the game ends...
      if (
        highscore <
        document.querySelector('.dashboard-section__score').textContent
      ) {
        // Set highscore variable to the current score
        highscore = document.querySelector('.dashboard-section__score')
          .textContent;
        // Set the textContent of highscore span to that new highscore
        document.querySelector(
          '.dashboard-section__highscore'
        ).textContent = highscore;
      }
    }
  } else {
    document.querySelector('.dashboard-section__message').textContent =
      'You lose!';
    document.querySelector('.dashboard-section__score').textContent = score; // Set to score dom
  }
});
