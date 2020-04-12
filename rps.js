let lose = "You Lose!";
let win = "You Win!";
let tie ="You're Tie";

function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() == "paper") {
        switch (computerSelection.toLowerCase()){
            case "paper":
                return tie;
                break;
            case "rock":
                return win + playerSelection +" beats "+computerSelection;
                break;
            case "scissor":
                return lose + computerSelection +" beats "+playerSelection;
                break;
        }
    }
    if (playerSelection.toLowerCase() == "rock") {
        switch (computerSelection.toLowerCase()){
            case "paper":
                return lose + computerSelection +" beats "+playerSelection;
                break;
            case "rock":
                return tie;
                break;
            case "scissor":
                return win + playerSelection +" beats "+computerSelection;
                break;
        }
        
    }
    if (playerSelection.toLowerCase() == "scissor") {
        switch (computerSelection.toLowerCase()){
            case "paper":
                return win + playerSelection +" beats "+computerSelection;
                break;
            case "rock":
                return lose + computerSelection +" beats "+playerSelection;
                break;
            case "scissor":
                return tie;
                break;
        }        
    }
    return "Invalid choice, try again!! (Reminder: Rock OR Paper OR Scissor ONLY)";
}

let b = ["rock","paper","scissor"]

function game(){
    for (let i =0; i<= 5;i++){
        let a = prompt("Rock, paper or scissor? Enter your decision","");
        let c = b[Math.floor(Math.random()*b.length)];
        alert(playRound(a,c));
    }
}
game();
