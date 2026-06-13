let rand = Math.random()
let humanScore = 0
let computerScore = 0

function getComputerChoice(rand) {
    if (rand >= 0.7) {
        return "rock"
    } else if (rand >= 0.4 && rand < 0.7) {
        return "scissor"
    } else if (rand < 0.4) {
        return "paper"
    }
}

function getHumanChoice() {
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

console.log(getHumanChoice())