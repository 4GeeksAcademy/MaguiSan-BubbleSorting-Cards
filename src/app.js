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
    }
  });
  // SORT
  const bubbleSort = arr => {
    let wall = arr.length - 1; //iniciamos el muro al final del array

    let lineDiv = document.createElement("div");
    lineDiv.style.marginTop = "10px";
    // lineDiv.style.display = "flex";
    // lineDiv.style.alignItems = "center";
    lineDiv.classList.add("d-flex", "flex-column", "gap-2");
    sortContainer.innerHTML = "";
    sortContainer.appendChild(lineDiv);
    while (wall > 0) {
      let index = 0;
      let otherDiv = document.createElement("div");
      // otherDiv.style.display = "flex";
      otherDiv.classList.add("d-flex", "gap-2");
      while (index < wall) {
        if (arr[index][0] > arr[index + 1][0]) {
          [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
          otherDiv.innerHTML = "";
          arr.forEach(item => {
            otherDiv.innerHTML += item[1];
          });
          lineDiv.appendChild(otherDiv);
          otherDiv = document.createElement("div");
          // otherDiv.style.display = "flex";
          otherDiv.classList.add("d-flex", "gap-2");
        }
        index++;
      }
      wall--; //disminuir la pared para optimizar
    }

    let lastDiv = document.createElement("div");
    // lastDiv.style.display = "flex";
    lastDiv.classList.add("d-flex", "gap-2");
    arr.forEach(item => {
      lastDiv.innerHTML += item[1];
    });
    lineDiv.appendChild(lastDiv);

    return arr;
  };

  sort.addEventListener("click", () => {
    // console.log(cards);
    let sortDiv = document.createElement("div");
    // sortDiv.style.display = "flex";
    // sortDiv.style.alignItems = "center";
    sortDiv.classList.add("d-flex", "gap-2");

    sortContainer.innerHTML = "";
    sortContainer.appendChild(sortDiv);
    cards.forEach(item => {
      sortDiv.innerHTML += item[1];
    });
    bubbleSort(cards);
  });
};
