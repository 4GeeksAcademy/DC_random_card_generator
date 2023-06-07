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
};
let btn = document
  .getElementById("btn-card")
  .addEventListener("click", window.onload);
