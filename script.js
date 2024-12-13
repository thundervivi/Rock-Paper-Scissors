
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3); 
    if (randomNumber === 0){
        return "rock"
    } else if (randomNumber ===1){
        return "paper";
    } else{
        return "scissors"
    }
}

function getHumanChoice(){
    let userChoice = prompt("Choose between: Rock,Paper,Scissors").toLowerCase();
    return userChoice; 
}

function PlayRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "tie";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        return "human";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        return "human";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        return "human";
    } else {
        return "computer";
    }
}
    

function playGame(){
    let round = 5;
    let humanScore = 0;
    let computerScore = 0;
    while (round > 0){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        let result = PlayRound(humanSelection,computerSelection);
        if (result === "tie"){
            console.log("It's a draw!");
        }else if (result === "human"){
            humanScore++;
            console.log(`You win! ${humanSelection} beats ${computerSelection}.\nYour score is ${humanScore}!`);
        }else if(result === "computer"){
            computerScore++;
            console.log(`You lose! ${computerSelection} beats ${humanSelection}.\nComputer score is ${computerScore}!`);
        }
        round--;
    }
    return `Final score: Human: ${humanScore} Computer: ${computerScore}`;
}
console.log(playGame());