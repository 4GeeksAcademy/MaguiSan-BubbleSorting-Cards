import "bootstrap";
import "./style.css";

window.onload = function() {
  // declaracion de variables
  let sym = ["♦", "♥", "♠", "♣"];
  let num = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let numValue = {
    A: 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    J: 11,
    Q: 12,
    K: 13
  };
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
  //Generador de un array de cartas random
  draw.addEventListener("click", () => {
    cardsContainer.innerHTML = "";
    cards = [];
    for (let i = 0; i < numCards.value; i++) {
      let randomCardNum = randomGenerator(num);
      let randomCardSym = randomGenerator(sym);
      let cardValue = numValue[randomCardNum];
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
      cardDiv.style.height = "95px";
      cardDiv.style.margin = "5px";
      cardDiv.style.paddingLeft = "2px";
      cardDiv.style.paddingRight = "2px";
      cardDiv.style.backgroundColor = "white";
      cardDiv.style.display = "flex";
      cardDiv.style.justifyContent = "space-between";

      let cardSymDivTop = document.createElement("div");
      cardSymDivTop.innerHTML = randomCardSym;
      cardSymDivTop.style.color = color;

      let cardNumDiv = document.createElement("div");
      cardNumDiv.innerHTML = randomCardNum;
      cardNumDiv.style.fontSize = "25px";
      cardNumDiv.style.alignContent = "center";

      let cardSymDivBottom = document.createElement("div");
      cardSymDivBottom.innerHTML = randomCardSym;
      cardSymDivBottom.style.color = color;
      cardSymDivBottom.style.transform = "rotate(180deg)";

      cardDiv.appendChild(cardSymDivTop);
      cardDiv.appendChild(cardNumDiv);
      cardDiv.appendChild(cardSymDivBottom);
      cardsContainer.appendChild(cardDiv);
      cards.push([cardValue, cardDiv]);
      console.log(cards);
    }
  });
  // SORT
  function bubbleSort(arr) {
    let wall = arr.length - 1; //iniciamos el muro al final del array
    while (wall > 0) {
      let index = 0;
      // let swapped = false;
      while (index < wall) {
        if (arr[index][0] > arr[index + 1][0]) {
          // [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
          let aux = arr[index];
          arr[index] = arr[index + 1];
          arr[index + 1] = aux;
          //   swapped = true;
          arr.forEach(item => {
            sortContainer.appendChild(item[1]); // Agrega cada carta al contenedor
          });
        }
        index++;
      }
      // if (!swapped) break; //Detener si no hay cambios
      wall--; //disminuir la pared para optimizar
    }
    return arr;
  }
  sort.addEventListener("click", () => {
    // console.log(cards);
    sortContainer.innerHTML = "";
    bubbleSort(cards);
    console.log(cards);
  });
};
