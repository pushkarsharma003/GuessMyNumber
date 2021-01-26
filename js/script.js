"use strict";

let level = 1;
let score = 0;
let lightmode = true;
let level_increment = 5;
let secretNumber = Math.trunc(Math.random() * level_increment) + 1;
// document.querySelector(".number").textContent = secretNumber;
let display_message = document.querySelector(".message");
let chances = 5;
let highScore = 0;
function calcHighScore(score) {
  if (score > highScore) {
    highScore = score;
  }
  document.querySelector(".high_score_info").textContent = highScore;
}
const initialise = function () {
  const userInputGuess = Number(document.querySelector(".guess").value);
  document.querySelector(".guess").value = "";
  if (chances <= 4) {
    document.querySelector(".chances_message").textContent =
      "You Left " + chances + " chances";
  }

  //if there is no input
  if (!userInputGuess) {
    document.querySelector(".message").textContent = "No Number";
  }

  // if guess is correct
  else if (userInputGuess === secretNumber) {
    document.querySelector(".message").textContent =
      "Hurray! Your guess is correct, Go to Next Level!";
    document.querySelector(".number").textContent =
      "The number was " + secretNumber;
    document.querySelector("body").style.backgroundColor = "#99ff99";
    document.querySelector(".check").style.display = "none";
    document.querySelector(".guess").style.display = "none";
    document.querySelector(".start_again").style.display = "inline";
    document.querySelector(".chances_message").style.display = "none";
    score += 1;
    document.querySelector(".score_info").textContent = score;
    calcHighScore(score);
    level++;
    level_increment += 5;
    document.querySelector(".start_again").textContent = "Go to Level " + level;
    if (!lightmode) {
      document.querySelector(".message").style.color = "black";
      document.querySelector(".number").style.color = "black";
    }
  }

  //if guess is incorrect
  else if (userInputGuess > secretNumber || userInputGuess < secretNumber) {
    userInputGuess > secretNumber
      ? (display_message.textContent = "Your guess is too high...")
      : (display_message.textContent = "Your guess is too low...");
    chances--;
    document.querySelector(".chances_message").textContent =
      "You Left " + chances + " chances";
  }

  //when no chance left
  if (chances <= 0) {
    display_message.textContent = "Oh! Your guess is incorrect, GAME OVER!";
    document.querySelector(".number").textContent =
      "The number was " + secretNumber;
    document.querySelector("body").style.backgroundColor = "#ff8080";
    document.querySelector(".check").style.display = "none";
    document.querySelector(".guess").style.display = "none";
    document.querySelector(".start_again").style.display = "inline";
    document.querySelector(".chances_message").style.display = "none";
    document.querySelector(".start_again").textContent = "Start Again";
  }
};

//when game will start again
const again = function () {
  //when game is over
  if (chances <= 0) {
    level = 1;
    score = 0;
    chances = 5;
    level_increment = 5;
  }

  if (lightmode) {
    document.querySelector("body").style.backgroundColor = "white";
  } else {
    document.querySelector("body").style.backgroundColor = "#424242";
    document.querySelector(".message").style.color = "white";
    document.querySelector(".number").style.color = "white";
    document.querySelector(".chances_message").style.color = "yellowgreen";
  }

  document.querySelector(".guess").style.display = "inline";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".level_info").textContent = level;
  document.querySelector(".hint").textContent = level_increment;
  document.querySelector(".score_info").textContent = score;
  secretNumber = Math.trunc(Math.random() * level_increment) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".check").style.display = "inline";
  document.querySelector(".start_again").style.display = "none";
  document.querySelector(".chances_message").style.display = "inline";
  document.querySelector(".chances_message").textContent =
    "You have " + chances + " chances";
  calcHighScore(score);
};

let modal = document.querySelector(".tip");
let open = document.querySelector(".info");
let overlay = document.querySelector(".overlay");
let close = document.querySelector(".close_btn");
open.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
close.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
document.querySelector(".check").addEventListener("click", initialise);
document.querySelector(".start_again").addEventListener("click", again);

//actvate dark mode
document.querySelector(".dark_mode").addEventListener("click", function () {
  lightmode = false;
  document.querySelector("body").style.backgroundColor = "#424242";
  document.querySelector(".jumbotron").style.backgroundColor = "#424242";
  document.querySelector(".alert").style.backgroundColor = "#424242";
  document.querySelector(".alert").style.color = "white";
  document.querySelector(".jumbotron").style.color = "white";
  document.querySelector(".message").style.color = "white";
  document.querySelector(".number").style.color = "white";
  document.querySelector(".guess").style.backgroundColor = "#424242";
  document.querySelector(".guess").style.color = "white";
  document.querySelector(".chances_message").style.color = "yellowgreen";
  document.querySelector(".hint_div").style.color = "#FF4000";
  document.querySelector(".tip").style.backgroundColor = "#424242";
  document.querySelector(".tip").style.color = "white";
  document.querySelector(".hr").style.borderColor = "white";
  document.querySelector(".dark_mode").style.display = "none";
  document.querySelector(".light_mode").style.display = "inline";
});

//deactivate dark mode
document.querySelector(".light_mode").addEventListener("click", function () {
  lightmode = true;
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector(".jumbotron").style.backgroundColor = "whitesmoke";
  document.querySelector(".alert").style.backgroundColor = "whitesmoke";
  document.querySelector(".alert").style.color = "black";
  document.querySelector(".jumbotron").style.color = "black";
  document.querySelector(".message").style.color = "black";
  document.querySelector(".number").style.color = "black";
  document.querySelector(".guess").style.backgroundColor = "whitesmoke";
  document.querySelector(".guess").style.color = "black";
  document.querySelector(".chances_message").style.color = "green";
  document.querySelector(".hint_div").style.color = "crimson";
  document.querySelector(".tip").style.backgroundColor = "whitesmoke";
  document.querySelector(".tip").style.color = "black";
  document.querySelector(".hr").style.borderColor = "gray";
  document.querySelector(".light_mode").style.display = "none";
  document.querySelector(".dark_mode").style.display = "inline";
});
