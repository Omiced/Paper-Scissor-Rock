let userScore = 0;
let pcScore = 0;
let userChoice = "";
let pcChoice = "";
const humanScore_span = document.querySelector("#humanScore");
const pcScore_span = document.querySelector("#pcScore");
const piedra_btn = document.getElementById("btnPiedra");
const papel_btn = document.querySelector("#btnPapel");
const tijera_btn = document.getElementById("btnTijera");
const mensaje_p = document.getElementById("mensajeResultado");

function gana() {
  userScore++;
  humanScore_span.innerHTML = userScore;
  mensaje_p.innerText = `Tu ganas ${userChoice} vence ${pcChoice}`;
}

function pierde() {
  pcScore++;
  pcScore_span.innerHTML = pcScore;
  mensaje_p.innerText = `La pc gana ${pcChoice} vence ${userChoice}`;
}

function finJuego() {
  if (userScore == 5) {
    userScore = 0;
    pcScore = 0;
    pcScore_span.innerHTML = pcScore;
    humanScore_span.innerHTML = userScore;
    return (mensaje_p.innerText = "Fin del juego tu ganas con 5 puntos");
  } else if (pcScore == 5) {
    userScore = 0;
    pcScore = 0;
    pcScore_span.innerHTML = pcScore;
    humanScore_span.innerHTML = userScore;
    return (mensaje_p.innerText = "La pc gana con 5 puntos F");
  }
}

function computerPlay() {
  let options = ["piedra", "papel", "tijeras"];
  let word = options[Math.floor(Math.random() * options.length)];
  return word;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return (mensaje_p.innerHTML = "Empate");
  } else if (computerSelection == "piedra" && playerSelection == "papel") {
    return gana();
  } else if (computerSelection == "papel" && playerSelection == "tijeras") {
    return gana();
  } else if (computerSelection == "tijeras" && playerSelection == "piedra") {
    return gana();
  } else {
    return pierde();
  }
}
function main() {
  papel_btn.addEventListener("click", function () {
    userChoice = "papel";
    pcChoice = computerPlay();
    if (userScore == 5 || pcScore == 5) {
      finJuego();
    } else {
      playRound(userChoice, pcChoice);
    }
  });
  piedra_btn.addEventListener("click", function () {
    userChoice = "piedra";
    pcChoice = computerPlay();
    if (userScore == 5 || pcScore == 5) {
      finJuego();
    } else {
      playRound(userChoice, pcChoice);
    }
  });
  tijera_btn.addEventListener("click", function () {
    userChoice = "tijeras";
    pcChoice = computerPlay();
    if (userScore == 5 || pcScore == 5) {
      finJuego();
    } else {
      playRound(userChoice, pcChoice);
    }
  });
}

main();
