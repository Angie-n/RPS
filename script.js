function computerPlay() {
    //Create a variable containing an array with all possible options
    let RPSOptions = ["rock", "paper", "scissors"];
    /* Randomly get a number from 0-2 (inclusive), representing 
    an index in the previous variable. Store it.*/
    let arrIndex = Math.floor(Math.random() * 3);
    // return an item from the array based on the random integer 
    return RPSOptions[arrIndex];
}

function playRound(playerSelection, computerSelection) {
    // Change the playerselection to lowercase.
    playerSelection = playerSelection.toLowerCase();
    // Create if statements to see whether the player won, lost, or tied.
    if (playerSelection === computerSelection) {
        return "tied";
    }
    else if(playerSelection === "rock" && computerSelection === "scissors" 
    || playerSelection === "scissors" && computerSelection === "paper"
    || playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "won";
    }
    else {
        computerScore++;
        return "lost";
    }
}

function userChoice(choice) {
    playerSelection = choice;
}

function changeIcon(pSelect, cSelect) {
    if (pSelect === "rock") {
        document.getElementById("user-icon").className = "fas fa-hand-rock";
    }
    else if (pSelect === "scissors") {
        document.getElementById("user-icon").className = "fas fa-hand-scissors";
    }
    else {
        document.getElementById("user-icon").className = "fas fa-hand-paper";
    }
    if (cSelect === "rock") {
        document.getElementById("computer-icon").className = "fas fa-hand-rock";
    }
    else if (cSelect === "scissors") {
        document.getElementById("computer-icon").className = "fas fa-hand-scissors";
    }
    else {
        document.getElementById("computer-icon").className = "fas fa-hand-paper";
    }
}

function roundChanges(round, playerScore, computerScore) {
    if (playerScore > computerScore) {
        document.querySelector("body").style.background = "linear-gradient(hsl(0, 100%, 98%), white, white,white,hsl(0, 100%, 98%)) no-repeat";
        document.getElementById("user-score").innerHTML = "Suspicious Human: " + playerScore;
        document.getElementById("computer-score").innerHTML = "Astounded Computer: " + computerScore;
        switch(round) {
            case 2: 
                document.getElementById("game-remark").innerHTML = "Beginner's luck";
                break;
            case 3:
                document.getElementById("game-remark").innerHTML = "Hmph, looks like I've underestimated you";
                break;
            case 4: 
                document.getElementById("game-remark").innerHTML = "All my work...";
                break;
            case 5: 
                document.getElementById("game-remark").innerHTML = "What kind of sorcery is this?";
                break;
        }
    }
    else if (playerScore < computerScore)  {
        document.querySelector("body").style.background = "linear-gradient(hsl(213, 100%, 93%), white, white,white,hsl(213, 100%, 93%)) no-repeat";
        document.getElementById("user-score").innerHTML = "Foolish Human: " + playerScore;
        document.getElementById("computer-score").innerHTML = "Brilliant Computer: " + computerScore;
        switch(round) {
            case 2: 
                document.getElementById("game-remark").innerHTML = "This will be a win for machines everywhere";
                break;
            case 3:
                document.getElementById("game-remark").innerHTML = "Don't be sad about your predictability, human";
                break;
            case 4: 
                document.getElementById("game-remark").innerHTML = "Looks like we're getting closer and closer to world domination...";
                break;
            case 5: 
                document.getElementById("game-remark").innerHTML = "I would say I'd keep you as a pet but dogs are better";
                break;
        }
    }
    else {
        document.getElementById("user-score").innerHTML = "Human: " + playerScore;
        document.getElementById("computer-score").innerHTML = "Computer: " + computerScore;
        switch(round) {
            case 2: 
                document.getElementById("game-remark").innerHTML = "Never thought I'd think the same way as a human";
                break;
            case 3:
                document.getElementById("game-remark").innerHTML = "Evenly matched, for now";
                break;
            case 4: 
                document.getElementById("game-remark").innerHTML = "Twinsies! That's what you humans say, right?";
                break;
            case 5: 
                document.getElementById("game-remark").innerHTML = "Great minds think alike";
                break;
        }
    }
}

let playerSelection;
let computerSelection;
let round = 1;
let playerScore = 0;
let computerScore = 0;

function game() {
    //Make sure only five rounds are played
    if (round <= 5) {
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        round++;
        console.log(playerScore + " " + computerScore);
        console.log(playerSelection + " " + computerSelection);
        //Change icons to display what the user and computer picked
        changeIcon(playerSelection, computerSelection);
        //Change background color and remark depending on how well the player is doing
        //Update scoreboard
        roundChanges(round, playerScore, computerScore);
    }
    //Once five rounds are played, give the appropriate results
    if (round > 5) {
        if (playerScore > computerScore) {
            document.getElementById("win-lose").innerHTML = "SUCCESS";
            document.getElementById("results-remark").innerHTML = "I guess I can push back the overthrow of mankind a bit";
        }
        else if (playerScore < computerScore) {
            document.getElementById("win-lose").innerHTML = "FAILURE";
            document.getElementById("results-remark").innerHTML = "If I had an evil laugh file, you'd hear it now";
        }
        else {
            document.getElementById("win-lose").innerHTML = "TIE";
            document.getElementById("results-remark").innerHTML = "Until my win next time";
        }
    }
}

