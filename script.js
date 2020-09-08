let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// generate new secret target number at start of each round
function generateTarget() {
    return Math.floor(Math.random()*10);
}

// determine which guess is closest to the target number
function compareGuesses(userGuess, compGuess, target) {
    const userDiff = Math.abs(userGuess - target);
    const compDiff = Math.abs(compGuess - target);
    if (userDiff <= compDiff) {
        return true;
    } else {
        return false;
    }
}

// increase the winner’s score after each round
function updateScore(winner) {
    switch (winner) {
        case 'human':
            humanScore += 1;
            break;
        case 'computer':
            computerScore += 1;   
            break;     
    }
}

// update the round number after each round
const advanceRound = () => currentRoundNumber += 1;

