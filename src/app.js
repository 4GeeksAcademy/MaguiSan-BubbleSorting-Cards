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
  let arrCards = [];
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
    return cardDiv;
  }
  //generador de un array de cartas random
  draw.addEventListener("click", () => {
    cardsContainer.innerHTML = "";
    arrCards = [];
    for (let i = 0; i < numCards.value; i++) {
      let cardRandom = drawCard();
      arrCards.push(cardRandom);
      cardsContainer.appendChild(cardRandom);
      // arrCards.push([cardValue, cardDiv]);
    }
  });
  // SORT
  const bubbleSort = arr => {
    let wall = arr.length - 1; //iniciamos el muro al final del array

    let lineDiv = document.createElement("div");
    lineDiv.style.marginTop = "10px";
    lineDiv.style.display = "flex";
    lineDiv.style.alignItems = "center";
    sortContainer.innerHTML = "";
    sortContainer.appendChild(lineDiv);
    while (wall > 0) {
      let index = 0;
      let otherDiv = document.createElement("div");
      otherDiv.style.display = "flex";
      while (index < wall) {
        if (arr[index][0] > arr[index + 1][0]) {
          [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
          otherDiv.innerHTML = "";
          arr.forEach(item => {
            otherDiv.innerHTML += item[1];
          });
          lineDiv.appendChild(otherDiv);
          otherDiv = document.createElement("div");
          otherDiv.style.display = "flex";
        }
        index++;
      }
      wall--; //disminuir la pared para optimizar
    }

    let lastDiv = document.createElement("div");
    lastDiv.style.display = "flex";
    arr.forEach(item => {
      lastDiv.innerHTML += item[1];
    });
    lineDiv.appendChild(lastDiv);

    return arr;
  };

  sort.addEventListener("click", () => {
    // console.log(arrCards);
    let sortDiv = document.createElement("div");
    sortDiv.style.display = "flex";
    sortDiv.style.alignItems = "center";

    sortContainer.innerHTML = "";
    sortContainer.appendChild(sortDiv);
    arrCards.forEach(item => {
      sortDiv.innerHTML += item[1];
    });
    bubbleSort(arrCards);
  });
};
