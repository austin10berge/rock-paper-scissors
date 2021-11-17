const choices = ["rock", "paper", "scissors"]; // global choices

// Randomly generate the opponents decision
function computerPlay() {  
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return choices[0]; // rock
            break;
    
        case 1:
            return choices[1]; // paper
            break;

        case 2:
            return choices[2]; // scissors
            break;

        default:
            break;
    }
    return;
}

// goes through a single round
function singleRound(playerSelection, computerSelection) { 
    if ((playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "scissors" && computerSelection === "paper")) {
        return "You win! :)";
    }

    else if (playerSelection === computerSelection) {
        return "Tie!";
    }

    else {  
        return "You lose! :(";
    }
}

// prompt for user decision
function getInput() {
    let input = prompt("Enter your move:");
    input = input.toLowerCase();
    switch (input) {
        case "rock":
            return choices[1];
            break;
        case "paper":
            return choices[2];
            break;
        case "scissors":
            return choices[0];
        break;
        default:
            return "Error."
            break;
    }
    return;
}

// run the game
function game() {
    let input = getInput();
    let computerMove = computerPlay();
    console.log("You chose " + input);
    console.log("The opponent chose " + computerMove);
    console.log(singleRound(input, computerMove));
    
    return;
}