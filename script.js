function computerPlay() {
    let randomNumb = Math.floor((Math.random()*3) + 1);
    if (randomNumb === 1){
        return "Rock";
    } else if (randomNumb === 2){
        return "Paper";
    } return "Scissors";
}

let tieCount = 0;
let winCount = 0;
let loseCount = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.substr(1);
    if (playerSelection == computerSelection){
        tieCount = tieCount + 1;
        return("It's a tie!");   
    }
    else if ((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper")) {
        winCount = winCount + 1;
        return (`You won! ${playerSelection} beats ${computerSelection}`);
    }
    else {
        loseCount = loseCount + 1;
        return (`You lose! ${computerSelection} beats ${playerSelection}`);
    }
}

function game(){
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt("Choose rock, paper, or scissors: ");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection,computerSelection));
    }
    if (winCount > loseCount){
        return `You won the game. Your score: ${winCount} VS AI score: ${loseCount}`;
    }
    else if (loseCount > winCount){
        return `You lost the game. Your score: ${winCount} VS AI score: ${loseCount}`;
    }
    else 
        return `It's a tie game. Your score: ${winCount} VS AI score: ${loseCount}`;
}

console.log(game());

