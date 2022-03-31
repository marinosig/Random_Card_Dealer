/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let suit = Math.floor(Math.random(+1) * 4);
  let numbers = Math.floor(Math.random() * 12);
  let arrSuit = ["spade", "club", "heart", "diamond"];
  let arrNumber = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let arrSymbol = ["♠", "♣", "♥", "♦"];

  let DivSuit = document.createElement("div");
  // DivSuit.classList.add("card");
  DivSuit.setAttribute("class", "card");
  DivSuit.innerHTML =
    "<span class=card" +
    arrSuit[suit] +
    " id=UP>" +
    arrSymbol[suit] +
    "</span> <span class=card" +
    arrSuit[suit] +
    " id=NUMBER>" +
    arrNumber[numbers] +
    "</span> <span class=card" +
    arrSuit[suit] +
    " id=DOWN>" +
    arrSymbol[suit] +
    "</span>";
  document.body.appendChild(DivSuit);

  console.log(arrSuit[suit]);
  console.log(arrNumber[numbers]);
};

console.log("Hello Rigo from the console!");
