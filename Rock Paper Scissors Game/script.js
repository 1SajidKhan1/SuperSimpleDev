let result = '';
const choices = ['Rock', 'Paper', 'Scissors'];

let score = JSON.parse(localStorage.getItem('score')) || { player: 0, computer: 0, ties: 0 };

const choose = document.querySelectorAll('.choose');
const resultDisplay = document.querySelector('#result-display');

function displayScore(playerChoice = '', computerChoice = '') {
  resultDisplay.innerHTML = `
  You choose ${playerChoice},<br>
  computer chooses ${computerChoice},<br>
  ${result}<br>
  Score:<br>
  Player: ${score.player},<br>
  Computer: ${score.computer},<br>
  Ties: ${score.ties}<br>
  `;
}

displayScore();

choose.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.innerHTML;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];


    if (playerChoice === computerChoice) {
      result = 'It\'s a tie!';
      score.ties++;
    } else if (
      (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
      (playerChoice === 'Paper' && computerChoice === 'Rock') ||
      (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
      result = 'You win!';
      score.player++;
    } else {
      result = 'Computer wins!';
      score.computer++;
    }
    localStorage.setItem('score', JSON.stringify(score));
    displayScore(playerChoice, computerChoice);
  })
})

const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', () => {
  score.player = 0;
  score.computer = 0;
  score.ties = 0;
  localStorage.setItem('score', JSON.stringify(score));
  resultDisplay.innerHTML = 'Score reset! Start a new game.';
});