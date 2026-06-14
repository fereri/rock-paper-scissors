const computerChoice = function getComputerChoice() {
    let rand = Math.random()

    console.log(rand)
    if (rand >= 0.7) {
        return "rock"
    } else if (rand >= 0.4 && rand < 0.7) {
        return "scissor"
    } else if (rand < 0.4) {
        return "paper"
    }

}

const humanChoice = function getHumanChoice() {
    let choice = prompt("What do you pick")

    switch (choice) {
        case "rock" :
            return "rock"
            break

        case "paper" :
            return "paper"
            break

        case "scissor" :
            return "scissor"
            break
    }
}

console.log(computerChoice())

function playGame() {
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "rock") {
            return "Draw"
        }  else if (humanChoice == "paper" && computerChoice == "paper") {
            return "Draw"
        } else if (humanChoice == "scissor" && computerChoice == "scissor") {
            return "Draw"
        } else if (humanChoice == "rock" && computerChoice == "scissor") {
            return humanScore += 1
        } else if (humanChoice == "paper" && computerChoice == "scissor") {
            return computerScore += 1
        } else if (humanChoice == "scissor" && computerChoice == "rock") {
            return computerScore += 1
        } else if (humanChoice == "scissor" && computerChoice == "paper") {
            return humanScore += 1
        } else if (humanChoice == "rock" && computerChoice == "paper") {
            return computerScore += 1
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            return humanScore += 1
        }
        
    }

    playRound(humanChoice(), computerChoice())
}

playGame()
playGame()
playGame()
playGame()
playGame()