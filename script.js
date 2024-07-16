var randomNumber1 = Math.floor(Math.random() * 6 + 1); //1-6

var randomDiceImage = "images/dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0];

let winnerText = document.querySelector("h1");

image1.setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random() * 6 + 1); //1-6

var randomDiceImage = "images/dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomDiceImage);

if (randomNumber1 > randomNumber2) {
  winnerText.innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  winnerText.innerHTML = "Player 2 Wins!";
} else {
  winnerText.innerHTML = "Draw!";
}
