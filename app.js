function computerPlay(){
    let options = ["rock", "paper", "scissor"];
    let word = options[Math.floor(Math.random() * options.length)];
    return word;
}

function playRound(playerSelection, computerSelection){
    let userSelection =  playerSelection.toLowerCase();
    let computer =  computerSelection;

    if(computer == userSelection){
        return "It's a draw, they both chose the same thing";
    }
    else if(computer == "rock" && userSelection == "paper"){
        return "You win!, paper beats rock.";
    }
    else if(computer == "paper" && userSelection == "scissor"){
        return "You win!, scissor beats paper";
    }
    else if(computer == "scissor" && userSelection == "rock"){
        return "You win!, rock beats scissor";
    }
    else{
        return "You lose!, " + computer + " beats " + userSelection;
    }
}

function game(){
    let i = 0;
    while(i <= 4){
        i ++;
        const user = prompt("Write your chose, rock, scissor or paper");
        const pc = computerPlay();
        console.log(playRound(user, pc));
    }
}

game();