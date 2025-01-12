const buttons = document.querySelectorAll(".button");
const playerImg = document.querySelector(".playerImg");
const computerImg = document.querySelector(".computerImg");
let playerScore = document.querySelector("#playerScore");
let computerSco = document.querySelector("#computerScore");
const display = document.querySelector("#display");

function getUserChoice(event){
    const clickedButtonId = event.target.id;
    if (clickedButtonId === 'rock'){
        playerImg.src = 'images/rock.jpeg';
        return 'rock';
    } else if (clickedButtonId === 'paper'){
        playerImg.src = 'images/paper.jpeg';
        return 'paper';
    } else{
        playerImg.src = 'images/scissors.png';
        return 'scissors';
    }
}


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3); 
    if (randomNumber === 0){
        computerImg.src = 'images/rock.jpeg';
        return "rock";
    } else if (randomNumber ===1){
        computerImg.src = 'images/paper.jpeg';
        return "paper";
    } else{
        computerImg.src = 'images/scissors.png'
        return "scissors";
    }
}

function PlayRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "draw";
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
    let humanSelection;
    let computerSelection;
    let humanScore = 0;
    let computerScore = 0;

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
          humanSelection = getUserChoice(event);
          computerSelection = getComputerChoice();

          let result = PlayRound(humanSelection,computerSelection);

        if (result === "draw") {
            display.textContent = "It's a draw!";
        } else if (result === "human") {
            display.textContent = `You win! ${humanSelection} beats ${computerSelection}.`;
            humanScore++;
            playerScore.textContent = humanScore;
        } else if (result === "computer") {
            display.textContent = `You lose! ${computerSelection} beats ${humanSelection}.`;
            computerScore++;
            computerSco.textContent = computerScore;
        }

        if (humanScore === 5){
            humanScore = 0;
            playerScore.textContent = humanScore;
            computerScore = 0;
            computerSco.textContent = computerScore;
            display.textContent = `You Win the round🎊`
        } else if(computerScore === 5){
            humanScore = 0;
            playerScore.textContent = humanScore;
            computerScore = 0;
            computerSco.textContent = computerScore;
            display.textContent = `You lose. Computer wins😔`
        }
        })
    })
}
   

 

playGame();


