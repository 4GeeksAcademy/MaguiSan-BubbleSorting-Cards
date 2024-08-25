/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  // declaracion de variables
  let sym = ["♦", "♥", "♠", "♣"];
  let num = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let cards = [];
  let numCards = document.getElementById("numCards");
  let draw = document.getElementById("draw");
  let cardsContainer = document.getElementById("cardsContainer");
  let sortContainer = document.getElementById("sortContainer");

  function randomGenerator(array) {
    let result = Math.floor(Math.random() * array.length);
    return array[result];
  }
  draw.addEventListener("click", () => {
    cardsContainer.innerHTML = "";
    cards = [];
    for (let i = 0; i < numCards.value; i++) {
      const randomCardNum = randomGenerator(num);
      const randomCardSym = randomGenerator(sym);
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("cardBubbleSort");

      const cardSymDivTop = document.createElement("div");
      cardSymDivTop.classList.add("cardSymTop", randomCardSym);
      cardSymDivTop.innerHTML = randomCardSym;

      const cardNumDiv = document.createElement("div");
      cardNumDiv.classList.add("numRandom");
      cardNumDiv.innerHTML = randomCardNum;

      const cardSymDivBottom = document.createElement("div");
      cardSymDivBottom.classList.add("cardSymBottom", randomCardSym);
      cardSymDivBottom.innerHTML = randomCardSym;

      cardDiv.appendChild(cardSymDivTop);
      cardDiv.appendChild(cardNumDiv);
      cardDiv.appendChild(cardSymDivBottom);
      cardsContainer.appendChild(cardDiv);

      cards.push([randomCardNum, randomCardSym]);
    }
    console.log(cards);
  });
  // SORT
  const bubbleSort = arr => {
    let wall = arr.length - 1; //iniciamos el wall o muro al final del array
    while (wall > 0) {
      let index = 0;
      while (index < wall) {
        //comparar las posiciones adyacentes, si la correcta es más grande, tenemos que intercambiar
        if (arr[index][0] > arr[index + 1][0]) {
          let aux = arr[index];
          arr[index] = arr[index + 1];
          arr[index + 1] = aux;
          for (let j = 0; j < arr.length; j++) {
            let randomCardNum = arr[j][0];
            let randomCardSym = arr[j][1];
            const cardDiv = document.createElement("div");
            cardDiv.classList.add("cardBubbleSort");

            const cardSymDivTop = document.createElement("div");
            cardSymDivTop.classList.add("cardSymTop", randomCardSym);
            cardSymDivTop.innerHTML = randomCardSym;

            const cardNumDiv = document.createElement("div");
            cardNumDiv.classList.add("numRandom");
            cardNumDiv.innerHTML = randomCardNum;

            const cardSymDivBottom = document.createElement("div");
            cardSymDivBottom.classList.add("cardSymBottom", randomCardSym);
            cardSymDivBottom.innerHTML = randomCardSym;

            cardDiv.appendChild(cardSymDivTop);
            cardDiv.appendChild(cardNumDiv);
            cardDiv.appendChild(cardSymDivBottom);
            sortContainer.appendChild(cardDiv);
            if (j == arr.length - 1) {
              let brArr = document.createElement("br");
              sortContainer.appendChild(brArr);
            }
          }
        }
        index++;
      }
      wall--; //disminuir la pared para optimizar
    }
    return arr;
  };
  //boton Sort
  const cardSort = () => {
    let newCards = bubbleSort(cards);
    console.log(newCards);
  };
  cardSort();
};
