function getComputerChoice() {
    // Returns a (random) move for the computer

    possibleChoices = ['rock', 'paper', 'scissors'];
    choiceIndex = Math.floor(Math.random() * 3);  // random number 0-2
    choice = possibleChoices[choiceIndex];
    return choice;
}

function getUserChoice() {
    // Prompts the user to make their choice
    
    // Get choice from user
    choiceRaw = prompt('What\'s your move? (rock, paper, or scissors): ')
    if (choiceRaw === null) {
        // User pressed cancel. End game.
        console.log('You pressed cancel. Ending game...')
        keepPlaying = false;
    } else {
        choice = choiceRaw.toLowerCase();
        // Validate user choice
        possibleChoices = ['rock', 'paper', 'scissors'];
        if (!possibleChoices.includes(choice)) {
            // Choice is invalid. Prompt for new choice.
            console.log("Invalid move! Please choose either 'rock', 'paper', or 'scissors'.");
            getUserChoice();
        }
        return choice
    }
}

function playRound(userChoice, computerChoice) {
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
                    return 'Paper beats rock! You lose!'
                }
            case 'paper':
                if (computerChoice == 'rock') {
                    userScore += 1;
                    return 'Paper beats rock! You win!';
                } else {
                    // Computer chose scissors
                    computerScore += 1;
                    return 'Scissors beats paper! You lose!'
                }
            case 'scissors':
                if (computerChoice == 'paper') {
                    userScore += 1;
                    return 'Scissors beats paper! You win!';
                } else {
                    // Computer chose rock
                    computerScore += 1;
                    return 'Rock beats scissors! You lose!'
                }
        }
    }
}

function endGame() {
    // Ends the current game and asks user if they'd like to play again

    console.log(`GAME OVER! Final Score - You: ${userScore}, Computer: ${computerScore}`);
    playAgain = prompt("Would you like to play again? (y/n)");
    if (playAgain === 'y' || playAgain === 'Y'){
        // Reset scores and play again!
        userScore = 0;
        computerScore = 0;
        keepPlaying = true;
        console.log('Starting a new game!')
    } else {
        // End program
        keepPlaying = false;
        console.log('Thank you for playing. Bye!')
    }
}

// function game() {
//     // Runs a best-of-5 game and returns the game results

//     while (userScore < 3 && computerScore < 3) {
//         let userChoice = getUserChoice();
//         let computerChoice = getComputerChoice();
//         if (!keepPlaying) break;
//         roundResults = playRound(userChoice, computerChoice);
//         console.log(roundResults);
//         if (roundResults === 'Tie!') {
//             console.log('Replaying round...')
//         } else {
//             console.log(`Current Score | You: ${userScore} , Computer: ${computerScore}`)
//         }
//     }
//     endGame();
// }

// let userScore = 0;
// let computerScore = 0;
// let keepPlaying = true;
// while (keepPlaying) {
//     game();
// }