/* 
Create a function called computerPlay
Create a variable that returns random values from 1 to 3.
    use console log to make sure the returning value is random
if the random value is 1 then returns a string "Rock"
else if the random value is 2 returns a string "Paper"
else returns a string "Scissors"
    Use console log to make sure the returing string is random 
*/
function computerPlay() {
    let randomNumb = Math.floor((Math.random()*3) + 1);
    if (randomNumb === 1){
        return "Rock"
    } else if (randomNumb === 2){
        return "Paper"
    } return "Scissors"
}


// Test the computerPlay function using console.log
// console.log(computerPlay());



/*
Create a function that takes in 2 paramters(playerSelection, copmuterSelection) to decide who wins a round of rock-paper-scissors
*/
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.substr(1)
    // if ((playerSelection == "Rock" && computerSelection == "Rock") || (playerSelection == "Paper" && computerSelection == "Paper") || (playerSelection == "Scissors" && computerSelection == "Scissors")){
    //     return ("It's a tie!")
    // }
    if (playerSelection == computerSelection){
        return("It's a tie!")
    }
    else if ((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper")) {
        return (`You won! ${playerSelection} beats ${computerSelection}`)
    }
    else {
        return (`You lose! ${computerSelection} beats ${playerSelection}`)
    }
}

/* Test the playRound function using the codes below */
// const playerSelection = "scissors";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));


/* 
Create a function called game() 
Loop the playRound function 5 times
Prompt for user selection b/n rock-paper-scissors and set it as a variable
Return playRound(playerSelection,computerPlay) to return the result
*/

function game(){
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt("Choose rock, paper, or scissors: ");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection,computerSelection));
    }
}

console.log(game())
