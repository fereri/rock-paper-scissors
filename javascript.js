let rand = Math.random()

function getComputerChoice(rand) {
    if (rand >= 0.7) {
        return "Rock"
    } else if (rand >= 0.4 && rand < 0.7) {
        return "Scissor"
    } else if (rand < 0.4) {
        return "Paper"
    }
}

console.log(rand)
console.log(getComputerChoice(rand))