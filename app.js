//variables y caching the dom
let userScore = 0;
let pcScore = 0;
const humanScore_span = document.getElementById("humanScore");
const pcScore_span = document.getElementById("pcScore");
const piedra_btn = document.getElementById("btnPiedra");
const papel_btn = document.getElementById("btnPapel");
const tijera_btn = document.getElementById("btnTijera");

//events
piedra_btn.addEventListener("click", function () {
  console.log(playRound("rock", computerPlay()));
  if (userScore == 4) {
    document.write("Ganaste el juego");
  }
});
function computerPlay() {
  let options = ["rock", "paper", "scissor"];
  let word = options[Math.floor(Math.random() * options.length)];
  return word;
}

function playRound(playerSelection, computerSelection) {
  let userSelection = playerSelection;
  let computer = computerSelection;

  if (computer == userSelection) {
    return "It's a draw, they both chose the same thing";
  } else if (computer == "rock" && userSelection == "paper") {
    return userScore++;
  } else if (computer == "paper" && userSelection == "scissor") {
    return userScore++;
  } else if (computer == "scissor" && userSelection == "rock") {
    return userScore++;
  } else {
    return pcScore++;
  }
}
