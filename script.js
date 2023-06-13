const getCompterChoice = () => {
    const move = ["rock", "paper", "scissor"]
    return move[(Math.floor(Math.random() * 3))]
}



const round = () => {
    let computerSelection = getCompterChoice()
    let playerSelection = prompt("Enter your move:").toLowerCase()
    if (computerSelection == playerSelection){
        console.log(`It's a Draw! ${computerSelection} equals ${playerSelection}`)
    }
    else if (computerSelection == "rock" && playerSelection == "paper"){
        console.log(`You Win! ${computerSelection} gets beaten by ${playerSelection}`)
    }
    else if (computerSelection == "rock" && playerSelection == "scissor"){
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
    }
    else if (computerSelection == "paper" && playerSelection == "rock"){
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
    }
    else if (computerSelection == "paper" && playerSelection == "scissor"){
        console.log(`You Win! ${computerSelection} gets beaten by ${playerSelection}`)
    }
    else if (computerSelection == "scissor" && playerSelection == "rock"){
        console.log(`You Win! ${computerSelection} gets beaten by ${playerSelection}`)
    }
    else if (computerSelection == "scissor" && playerSelection == "paper"){
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
    }
}

const game = () => {
    for (let i = 1; i <= 5; i++){
        round()
    }
}

game()



