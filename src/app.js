import "bootstrap";
import "./style.css";

window.onload = function() {
  // Declarando variables
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
  let template = document.getElementById("list").content;

  //Funcion para crear un array con valores random
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
  //Ordenando las cartas por el metodo bubble sort
  function bubbleSort(arr) {
    console.log("Iniciando la función Bubble Sort", arr);
    // Limpiando el contenedor antes de comenzar
    sortContainer.innerHTML = "";
    let wall = arr.length - 1; //iniciamos el muro al final del array
    while (wall > 0) {
      let index = 0;
      while (index < wall) {
        if (arr[index][0] > arr[index + 1][0]) {
          // Intercambiando los elementos
          let aux = arr[index];
          arr[index] = arr[index + 1];
          arr[index + 1] = aux;
          // Capturando los valores para mostrar cada etapa de intercambio
          console.log("clonar", [...arr]);
          displayArrayState([...arr]);
        }
        index++;
      }
      wall--; //disminuir la pared para optimizar
    }
  }
  //Funcion para mostrar cada etapa
  function displayArrayState(arr) {
    let clone = document.importNode(template, true);
    let row = clone.querySelector(".row");
    arr.forEach(item => {
      let cardClone = item[1].cloneNode(true);
      row.appendChild(cardClone);
    });
    sortContainer.appendChild(clone);
  }
  //Generando el ordenamiento
  sort.addEventListener("click", () => {
    bubbleSort(cards);
  });
};
