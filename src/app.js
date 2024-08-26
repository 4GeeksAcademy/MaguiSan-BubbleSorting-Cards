import "bootstrap";
import "./style.css";

window.onload = function() {
  // declaracion de variables
  let sym = ["♦", "♥", "♠", "♣"];
  let num = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let cards = [];
  let draw = document.getElementById("draw");
  let sort = document.getElementById("sort");
  let numCards = document.getElementById("numCards");
  let cardsContainer = document.getElementById("cardsContainer");
  let sortContainer = document.getElementById("sortContainer");

  function randomGenerator(array) {
    let result = Math.floor(Math.random() * array.length);
    return array[result];
  }
  //Generador de una carta random
  function drawCard() {
    let randomCardNum = randomGenerator(num);
    let randomCardSym = randomGenerator(sym);
    let color;
    if (randomCardSym === "♠" || randomCardSym === "♣") {
      color = "black";
    } else {
      color = "red";
    }

    let cardDiv = document.createElement("div");
    cardDiv.style.border = "1px solid black";
    cardDiv.style.borderRadius = "4px";
    cardDiv.style.width = "70px";
    cardDiv.style.height = "100px";
    cardDiv.style.margin = "5px";
    cardDiv.style.overflow = "auto";
    cardDiv.style.paddingLeft = "2px";
    cardDiv.style.paddingRight = "2px";
    cardDiv.style.backgroundColor = "white";

    let cardSymDivTop = document.createElement("div");
    cardSymDivTop.innerHTML = randomCardSym;
    cardSymDivTop.style.color = color;
    cardSymDivTop.style.position = "left";

    let cardNumDiv = document.createElement("div");
    cardNumDiv.innerHTML = randomCardNum;
    cardNumDiv.style.fontSize = "25px";
    cardNumDiv.style.padding = "3px";
    cardNumDiv.style.textAlign = "center";

    let cardSymDivBottom = document.createElement("div");
    cardSymDivBottom.innerHTML = randomCardSym;
    cardSymDivBottom.style.color = color;
    cardSymDivTop.style.position = "rigth";
    cardSymDivBottom.style.transform = "rotate(180deg)";

    cardDiv.appendChild(cardSymDivTop);
    cardDiv.appendChild(cardNumDiv);
    cardDiv.appendChild(cardSymDivBottom);

    // cardDiv.dataset.num = randomCardNum;
    return cardDiv;
  }
  //generador de un array de cartas random
  draw.addEventListener("click", () => {
    cardsContainer.innerHTML = "";
    cards = [];
    for (let i = 0; i < numCards.value; i++) {
      let cardRandom = drawCard();
      cards.push(cardRandom);
      cardsContainer.appendChild(cardRandom);
    }
  });

  // SORT
  const bubbleSort = arr => {
    sortContainer.innerHTML = "";
    let wall = arr.length - 1; //iniciamos el wall o muro al final del array
    while (wall > 0) {
      let index = 0;
      while (index < wall) {
        //comparar las posiciones adyacentes, si la correcta es más grande, tenemos que intercambiar
        if (arr[index][0] > arr[index + 1][0]) {
          //intercambio de cartas
          let aux = arr[index];
          arr[index] = arr[index + 1];
          arr[index + 1] = aux;
          // for (let j = 0; j < arr.length; j++) {
          //   let randCardNum = arr[j][0];
          //   let randCardSym = arr[j][1];
          //   let sortDiv = document.createElement("div");
          //   sortDiv.style.display = "flex";
          //   sortDiv.style.alignItems = "center";
          //   let indCounter = document.createElement("div");
          //   indCounter.innerHTML = index;
          //   indCounter.style.fontSize = "10px";

          //   sortDiv.appendChild(indCounter);
          //   sortContainer.appendChild(sortDiv);
          // }
        }
        index++;
      }
      wall--; //disminuir la pared para optimizar
    }
    return arr;
  };

  sort.addEventListener("click", () => {
    bubbleSort(cards);
  });
};
