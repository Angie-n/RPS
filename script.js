function computerPlay() {
    //Create a variable containing an array with all possible options
    let RPSOptions = ["rock", "paper", "scissors"];
    /* Randomly get a number from 0-2 (inclusive), representing 
    an index in the previous variable. Store it.*/
    let arrIndex = Math.floor(Math.random() * 3);
    // return an item from the array based on the random integer 
    return RPSOptions[arrIndex];
}

function playRound(playerSelection, computerSelection, playerScore, computerScore) {
    // Change the playerselection to lowercase.
    playerSelection = playerSelection.toLowerCase();
    // Create if statements to see whether the player won, lost, or tied.
    if (playerSelection === ComputerSelection) {
        return "tied";
    }
    else if(playerSelection === "rock" && computerSelection === "scissors" 
    || playerSelection === "scissors" && computerSelection === "paper"
    || playerSelectio === "paper" && computerSelection === "rock") {
        playerScore++;
        return "won";
    }
    else {
        computerScore++;
        return "lost";
    }
}

