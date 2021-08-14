function computerPlay() {
    //Create a variable containing an array with all possible options
    let RPSOptions = ["Rock", "Paper", "Scissors"];
    /* Randomly get a number from 0-2 (inclusive), representing 
    an index in the previous variable. Store it.*/
    let arrIndex = Math.floor(Math.random() * 3);
    /* return an item from the array based on the random integer */
    return RPSOptions[arrIndex];
}
