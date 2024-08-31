import "bootstrap";
import "./style.css";

window.onload = function() {
  // declaracion de variables
  let sym = ["♦", "♥", "♠", "♣"];
  let num = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
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
    // cardDiv.style.overflow = "auto";
    cardDiv.style.paddingLeft = "2px";
    cardDiv.style.paddingRight = "2px";
    cardDiv.style.backgroundColor = "white";
    cardDiv.style.display = "flex";
    cardDiv.style.justifyContent = "space-between";

    let cardSymDivTop = document.createElement("div");
    cardSymDivTop.innerHTML = randomCardSym;
    cardSymDivTop.style.color = color;
    // cardSymDivTop.style.position = "left";

    let cardNumDiv = document.createElement("div");
    cardNumDiv.innerHTML = randomCardNum;
    cardNumDiv.style.fontSize = "25px";
    cardNumDiv.style.alignContent = "center";

    let cardSymDivBottom = document.createElement("div");
    cardSymDivBottom.innerHTML = randomCardSym;
    cardSymDivBottom.style.color = color;
    // cardSymDivBottom.style.position = "rigth";
    cardSymDivBottom.style.transform = "rotate(180deg)";

    cardDiv.appendChild(cardSymDivTop);
    cardDiv.appendChild(cardNumDiv);
    cardDiv.appendChild(cardSymDivBottom);
    arrCards.push(randomCardNum);

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
    console.log(cards);
    console.log(arrCards);
  });
  // SORT
  const bubbleSort = arr => {
    //[8, 10, 4, 1, 3]
    //              4
    // sortContainer.innerHTML = "";
    let wall = arr.length - 1; //iniciamos el wall o muro al final del array
    //      4>0
    while (wall > 0) {
      //true
      //espacio de memoria donde guardamos un valor
      let index = 0;
      //comparacion: i=0 < 4 // true entra al if
      while (index < wall) {
        //comparar las posiciones adyacentes, si la correcta es más grande, tenemos que intercambiar
        // posicion 0: 8 > posicion 0+1: 10 //true? ño  // sgte iteracion=> 1:10 > 1+1:4 posiscion 2
        if (arr[index] > arr[index + 1]) {
          //intercambio de cartas
          //espacio de memoria
          // lee la posicion 1
          //  10
          let aux = arr[index];
          // i 1: 10        2:4
          arr[index] = arr[index + 1];
          //posicion 2 --> asignamos aux q valia 10
          // [8, 4, 10, 1, 3]
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
        //index=0--> +1 ahora vale index=1, pasado el if ..+1 tons i=2
        index++;
      }
      //wall valia 4 --menos1 es igual a 3
      wall--; //disminuir la pared para optimizar
    }
    return arr;
  };

  // let array = [8, 10, 4, 1, 3];
  // console.log(bubbleSort(array));

  sort.addEventListener("click", () => {
    console.log(bubbleSort(arrCards));
  });
};
