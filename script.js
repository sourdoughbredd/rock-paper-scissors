function getComputerChoice() {
    // Returns a (random) move for the computer

    possibleChoices = ['rock', 'paper', 'scissors'];
    choiceIndex = Math.floor(Math.random() * 3);  // random number 0-2
    choice = possibleChoices[choiceIndex];
    return choice;
}

function getRoundResults(userChoice, computerChoice) {
    // Returns a string with the round results

    if (userChoice === computerChoice) {
        // Tie
        return 'Tie!'
    } else {
        // User and computer chose differently. Determine winner.
        switch (userChoice) {
            case 'rock':
                if (computerChoice == 'scissors') {
                    userScore += 1;
                    return 'Rock beats scissors! You win!';
                } else {
                    // Computer chose paper
                    computerScore += 1;
                    return 'Paper beats rock! You lose.';
                }
            case 'paper':
                if (computerChoice == 'rock') {
                    userScore += 1;
                    return 'Paper beats rock! You win!';
                } else {
                    // Computer chose scissors
                    computerScore += 1;
                    return 'Scissors beats paper! You lose.';
                }
            case 'scissors':
                if (computerChoice == 'paper') {
                    userScore += 1;
                    return 'Scissors beats paper! You win!';
                } else {
                    // Computer chose rock
                    computerScore += 1;
                    return 'Rock beats scissors! You lose.';
                }
        }
    }
}

function playRound(userChoice) {
    // Get round results
    let roundResults = getRoundResults(userChoice, getComputerChoice());
    roundResultsDiv.textContent = roundResults;
    // Update score display
    userScoreDiv.textContent = userScore;
    computerScoreDiv.textContent = computerScore;
    // Check if game is over
    if (userScore >= 5 || computerScore >= 5) { 
        // Use a timeout so that the reuslts display updates before ending the game
        setTimeout(() => {
            endGame();
        }, 10);
    }
}

function endGame() {
    // Ends the current game and asks user if they'd like to play again
    winStr = (userScore > computerScore) ? "win!" : "lose.";
    playAgain = alert(`GAME OVER! You ${winStr} Click "Ok" to start a new game.`);
    // Reset scores
    userScore = 0;
    computerScore = 0;
    // Reset results displays
    userScoreDiv.textContent = userScore;
    computerScoreDiv.textContent = computerScore;
    roundResultsDiv.textContent = defaultRoundResults;
}


// Set up click listeners on the images and play!
const rockImg = document.querySelector('#rock');
const paperImg = document.querySelector('#paper');
const scissorsImg = document.querySelector('#scissors');

const userScoreDiv = document.querySelector('#user-score');
const computerScoreDiv = document.querySelector('#computer-score');
const roundResultsDiv = document.querySelector('#results-text');
const defaultRoundResults = roundResultsDiv.textContent; // save off to reset later

let userScore = 0;
let computerScore = 0;

rockImg.addEventListener('click', () => { playRound('rock'); });
paperImg.addEventListener('click', () => { playRound('paper'); });
scissorsImg.addEventListener('click', () => { playRound('scissors'); });