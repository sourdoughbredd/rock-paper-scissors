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
        endGame();
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

    // Report results of game
    // Ask if user would like to play again
    // If user wants to play again, reset scores and start new game
    // Else exit program
}

function game() {
    // Runs a best-of-5 game and returns the game results

    // While both scores are less than 3
        // Get a user choice and computer choice
        // Play a round
        // Display round results
    // End the current game

    while (userScore < 3 && computerScore < 3) {
        let userChoice = getUserChoice();
        let computerChoice = getComputerChoice();
        roundResults = playRound(userChoice, computerChoice);
        console.log(roundResults);
        if (roundResults === 'Tie!') {
            console.log('Replaying round...')
        } else {
            console.log(`Current Score | You: ${userScore} , Computer: ${computerScore}`)
        }
    }
    endGame();
}

let userScore = 0;
let computerScore = 0;

