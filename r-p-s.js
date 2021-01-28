// - rock beats scissors
// - paper beats rock
// - scissors beats paper
function getWinner(player, computer) {
    const cases = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper',
    };

    if (playerChoice === computerChoice) {
        console.log('TIE');

        return 'TIE';
    }

    // cases[playerChoice]: find the winning pair for the player's choice
    if (cases[playerChoice] === computerChoice) {
        console.log('PLAYER WINS');

        return 'PLAYER WINS';
    }

    if (cases[computerChoice] === playerChoice) {
        console.log('COMPUTER WINS');

        return 'COMPUTER WINS';
    }
}

function playGame() {
    // Use random function to get random options every time
    const playerChoice = 'paper';
    const computerChoice = 'scissors';
  
    getWinner(playerChoice, computerChoice);
}

playGame();