const choices = ['Rock', 'Paper', 'Scissors'];
const resultDisplay = document.querySelector('#result-display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.textContent;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';
    if (playerChoice === computerChoice) {
      result = 'It\'s a tie!';
    } else if ((playerChoice === 'Rock' && computerChoice === 'Scissors') || (playerChoice === 'Paper' && computerChoice === 'Rock') || (playerChoice === 'Scissors' && computerChoice === 'Paper')) {
      result = 'You win!';
    } else {
      result = 'Computer wins!';
    }

    resultDisplay.textContent = `You choose ${playerChoice}, computer chooses ${computerChoice}. ${result}`;
  })
})