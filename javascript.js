function getComputerChoice(choice) {
    let rand = Math.random;

    if (rand >= 0.7) {
        choice = "rock";
    } else if ( rand >= 0.3) {
        choice = "paper";
    } else  {
        choice = "scissors";
    }
}