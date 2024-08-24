/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  // declaracion de variables
  let sym = ["♦", "♥", "♠", "♣"];
  let num = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let randomCardNum = randomGenerator(num);
  let randomCardSym = randomGenerator(sym);
  let color;

  function randomGenerator(array) {
    // generando valores aleatorios
    let result = Math.floor(Math.random() * array.length);
    return array[result];
  }
  // agregando los valores a la carta
  document.getElementById("number").innerHTML = randomCardNum;
  document.getElementById("header").innerHTML = randomCardSym;
  document.getElementById("footer").innerHTML = randomCardSym;

  function drawCard() {
    // agregando los colores a los palos
    if (randomCardSym === "♠" || randomCardSym === "♣") {
      color = "black";
    } else {
      color = "red";
    }
    header.style.color = color;
    footer.style.color = color;
  }
  drawCard();
};
//faltan botones inputs temporizadores
