/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  // ---arrais---

  let palos = ["♦", "♥", "♠", "♣"];

  let arnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];

  // ---funcion random---

  function random(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  let newPalo = random(palos);
  let newNum = random(arnum);

  // ---manipulacion del DOM---

  // ---palos---

  let top = document.querySelector(".top");
  top.innerHTML = newPalo;
  let bottom = document.querySelector(".bottom");
  bottom.innerHTML = newPalo;

  if (newPalo === "♦" || newPalo === "♥") {
    top.style.color = "red";
    bottom.style.color = "red";
  } else {
    top.style.color = "black";
    bottom.style.color = "black";
  }

  // ---numero---

  let num = document.querySelector(".num");
  num.innerHTML = newNum;

  // ---temporizador--- // Tengo la sensacion de que se acelera.

  // setTimeout(function() {
  //   newCard();
  // }, 10000);
};

// ---nueva carta---
const newCarta = document.getElementById("carta");
function newCard() {
  window.onload(newCarta);
}

// ---boton---
let btn = document
  .getElementById("btn-card")
  .addEventListener("click", newCard);

// ---modificando alto---

const newAlt = document.getElementById("alt");
newAlt.addEventListener("keydown", e => {
  if (e.keyCode === 13) {
    alt();
  }
});

const alt = () => {
  newCarta.style.height = `${newAlt.value}px`;
};

// ---modificando ancho---

const newAnc = document.getElementById("anc");
newAnc.addEventListener("keydown", e => {
  if (e.keyCode === 13) {
    anc();
  }
});

const anc = () => {
  newCarta.style.width = `${newAnc.value}px`;
};
