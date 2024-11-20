"use strict";

const $ = selector => document.querySelector(selector);

let up = 0;
let down = 0;
let total = 0;

const update = value => {
  if (value == "up"){
    up += 1;
    total += 1
    $("#up").innerHTML = `Thumbs up (${up})`;
  }
  else{
    down += 1;
    total -= 1;
    $("#down").innerHTML = `Thumbs down (${down})`;
  }
  $("#total").innerHTML = `Total score: (${total})`;
}

document.addEventListener("DOMContentLoaded", () => {
  $("#up").addEventListener("click", () => {update($("#up").value)});
  $("#down").addEventListener("click", () => {update($("#down").value)});
});