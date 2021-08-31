window.addEventListener("load", () => {
    document.getElementById("intro1a").style.visibility = "visible";
});
window.onload=()=> {
    document.getElementById("intro1a").addEventListener("animationend", (event) => {
        if (event.animationName === "typed-text") {
            document.getElementById("intro1b").style.visibility = "visible";
        }
        if (event.animationName === "delete-text") {
            document.getElementById("intro2a").style.visibility = "visible";
        }
    });
    document.getElementById("intro2a").addEventListener("animationend", (event) => {
        if (event.animationName === "typed-text") {
            document.getElementById("intro2b").style.visibility = "visible";
        }
        if (event.animationName === "delete-text") {
            document.getElementById("intro3").style.visibility = "visible";
        }
    });
    document.getElementById("intro3").addEventListener("animationend", (event) => {
        if (event.animationName === "delete-text") {
            document.getElementById("intro4").style.visibility = "visible";
        }
    });
    document.getElementById("intro4").addEventListener("animationend", (event) => {
        if (event.animationName === "typed-text") {
            document.getElementById("start-button").style.visibility = "visible";
            document.getElementById("skip-button").style.display = "none";
        }
    });
    document.addEventListener("keydown", (event) => {
        if(document.getElementById("start-button").style.visibility === "visible" && event.keyCode === 13) {
            introToGame();
        }
    });
}

let playerSelection;
let computerSelection;
let round = 1;
let playerScore = 0;
let computerScore = 0;
let tiedGames = 0;

function introToGame() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("skip-button").style.display = "none";
    document.getElementById("game").style.display = "flex";
}

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
        tiedGames++;
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

function changeHandIcon(pSelect, cSelect) {
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

function changeOutcomeIcon(roundResult) {
    if(roundResult === "won") {
        document.getElementById("outcome-icon").className = "far fa-check-circle";
    }
    else if(roundResult === "lost") {
        document.getElementById("outcome-icon").className = "far fa-times-circle";
    }
    else {
        document.getElementById("outcome-icon").className = "fab fa-creative-commons-nd";
    }
}

function roundChanges(roundResult, playerScore, computerScore, tiedGames) {
    if (playerScore > computerScore) {
        document.querySelector("body").style.background = "linear-gradient(hsl(0, 100%, 93%), white, white,white,hsl(0, 100%, 98%)) no-repeat";
        document.querySelector("html").style.background = "linear-gradient(hsl(0, 100%, 93%)";
        document.getElementById("user-score").innerHTML = "Suspicious Human: " + playerScore;
        document.getElementById("computer-score").innerHTML = "Astounded Computer: " + computerScore;
    }
    else if (playerScore < computerScore)  {
        document.querySelector("body").style.background = "linear-gradient(hsl(213, 100%, 93%), white, white,white,hsl(213, 100%, 93%)) no-repeat";
        document.querySelector("html").style.background = "linear-gradient(hsl(213, 100%, 93%)";
        document.getElementById("user-score").innerHTML = "Foolish Human: " + playerScore;
        document.getElementById("computer-score").innerHTML = "Brilliant Computer: " + computerScore;
    }
    else {
        document.querySelector("body").style.background = "linear-gradient(hsl(194, 1%, 85%), white, white,white,hsl(194, 1%, 85%)) no-repeat";
        document.getElementById("user-score").innerHTML = "Human: " + playerScore;
        document.getElementById("computer-score").innerHTML = "Computer: " + computerScore;
    }
    if (roundResult === "won") {
        switch(playerScore) {
            case 1:
                document.getElementById("game-remark").innerHTML = "What kind of sorcery is this?";
                break;
            case 2: 
                document.getElementById("game-remark").innerHTML = "Beginner's luck";
                break;
            case 3:
                document.getElementById("game-remark").innerHTML = "Hmph, looks like I've underestimated you";
                break;
            case 4: 
                document.getElementById("game-remark").innerHTML = "Your luck disgusts me";
                break;
        }
    }
    else if (roundResult === "lost") {
        switch(computerScore) {
            case 1: 
                document.getElementById("game-remark").innerHTML = "I would say I'd keep you as a pet but dogs are better";
                break;
            case 2: 
                document.getElementById("game-remark").innerHTML = "This will be a win for machines everywhere";
                break;
            case 3:
                document.getElementById("game-remark").innerHTML = "Don't be sad about your predictability, human";
                break;
            case 4: 
                document.getElementById("game-remark").innerHTML = "Looks like we're getting closer and closer to world domination...";
                break;
        }
    }
    else {
        switch(tiedGames) {
            case 1: 
                document.getElementById("game-remark").innerHTML = "Evenly matched for this round";
                break;
            case 2:
                document.getElementById("game-remark").innerHTML = "Looks like I'll have to switch tactics";
                break;
            case 3: 
                document.getElementById("game-remark").innerHTML = "A HUMAN shouldn't have the same superior mindset as me";
                break;
            default:
                document.getElementById("game-remark").innerHTML = "Stop reading my mind, creep";
                break;
        }
    }
}

function getResults(playerScore, computerScore) {
    if (playerScore > computerScore) {
        document.getElementById("win-lose").innerHTML = "SUCCESS";
        document.getElementById("results-remark").innerHTML = "I guess I can push back the overthrow of mankind a bit";
        document.getElementById("results-icon").className = "fas fa-trophy";
    }
    else if (playerScore < computerScore) {
        document.getElementById("win-lose").innerHTML = "FAILURE";
        document.getElementById("results-remark").innerHTML = "If I had an evil laugh file, you'd hear it now";
        document.getElementById("results-icon").className = "fas fa-robot";
    }
    else {
        document.getElementById("win-lose").innerHTML = "TIE";
        document.getElementById("results-remark").innerHTML = "Until my win next time";
        document.getElementById("results-icon").className = "fas fa-balance-scale";
    }
    let scoreClone = document.getElementById("score").cloneNode(true);
    document.getElementById("results").insertBefore(scoreClone, document.getElementById("results-remark"));
    document.getElementById("game").style.display = "none";
    document.getElementById("results").style.display = "flex";
}

function game() {
    //Play another round if neither party reached the needed points to win
    if (playerScore < 5 && computerScore < 5) {
        computerSelection = computerPlay();
        //Checks if the player won and updates score accordingly
        let roundResult = playRound(playerSelection, computerSelection);
        round++;
        //Change outcome icon to display whether the user won the round
        changeOutcomeIcon(roundResult);
        //Change hand icons to display what the user and computer picked
        changeHandIcon(playerSelection, computerSelection);
        /*Change background color depending on how well the player is doing for the game, remark
        based on how well the player is doing for the round */
        roundChanges(roundResult, playerScore, computerScore, tiedGames);
    }
    //Ends the game once either party reaches five points
    if (playerScore >= 5 || computerScore >= 5) {
        getResults(playerScore, computerScore);
    }
}

