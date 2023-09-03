let round = 0;
let playerScore = 0;
let compScore = 0;
let computerSelection;
let playerSelection;

const buttons = document.querySelectorAll('.btn')

document.getElementById("round").innerHTML = '<h2>Round ' + round +'! Fight!</h2>';
document.getElementById("pScore").innerHTML = playerScore;
document.getElementById("cScore").innerHTML = compScore;
document.getElementById("cResult").innerHTML = '<h3>Comp chose ' + computerSelection + '!<h3>';
document.getElementById("pResult").innerHTML = '<h3>Player chose ' + playerSelection + '!<h3>';

const getCompterChoice = () => {
    const move = ["rock", "paper", "scissor"]
    return move[(Math.floor(Math.random() * 3))]
}

buttons.forEach(button => {
    button.addEventListener("click", function() {
        if (playerScore >= 5 || compScore >= 5){
            if (playerScore >= 5) {
                document.getElementById("pResult").innerHTML = '<h3>Player won!<h3>';
                document.getElementById("cResult").innerHTML = '<h3>Computer Lost!<h3>';
            }
            if (compScore >= 5) {
                document.getElementById("cResult").innerHTML = '<h3>Computer won!<h3>';
                document.getElementById("pResult").innerHTML = '<h3>Player Lost!<h3>';
            }
        }
        else {
            playerSelection = this.getAttribute("data-option");
            playRound();
        }
        
    });
});

function playRound() {
    computerSelection = getCompterChoice()

    if (computerSelection == playerSelection){
        console.log(`It's a Draw! ${computerSelection} equals ${playerSelection}`)
        round++;
    }
    else if (computerSelection == "rock" && playerSelection == "paper"){
        console.log(`You Win! ${computerSelection} gets beaten by ${playerSelection}`)
        round++
        playerScore++
    }
    else if (computerSelection == "rock" && playerSelection == "scissor"){
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        round++
        compScore++
    }
    else if (computerSelection == "paper" && playerSelection == "rock"){
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        round++
        compScore++
    }
    else if (computerSelection == "paper" && playerSelection == "scissor"){
        console.log(`You Win! ${computerSelection} gets beaten by ${playerSelection}`)
        round++
        playerScore++
    }
    else if (computerSelection == "scissor" && playerSelection == "rock"){
        console.log(`You Win! ${computerSelection} gets beaten by ${playerSelection}`)
        round++
        playerScore++
    }
    else if (computerSelection == "scissor" && playerSelection == "paper"){
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        round++
        compScore++
    }

    document.getElementById("round").innerHTML = '<h2>Round ' + round +'! Fight!</h2>';
    document.getElementById("pScore").innerHTML = playerScore;
    document.getElementById("cScore").innerHTML = compScore;
    document.getElementById("cResult").innerHTML = '<h3>Comp chose ' + computerSelection + '!<h3>';
    document.getElementById("pResult").innerHTML = '<h3>Player chose ' + playerSelection + '!<h3>';

}


