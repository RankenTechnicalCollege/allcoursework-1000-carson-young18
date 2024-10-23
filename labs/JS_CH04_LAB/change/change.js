"use strict";

const $ = selector => (document.querySelector(selector));

const makeChange = () => {
  let change = parseInt($("#change").value);
  $("#changeForm").reset();
  $("#change").value = change;
  if (change < 0 || change > 99){
    alert("Please enter a number between 0 - 99");
  }
  else{
    if ((change / 25) >= 1){
      $("#quarters").value = parseInt(change / 25);
      change = change % 25;
    }
    if ((change / 10) >= 1){
      $("#dimes").value = parseInt(change / 10);
      change = change % 10;
    }
    if ((change / 5) >= 1){
      $("#nickels").value = parseInt(change / 5);
      change = change % 5;
    }
    if (change >= 0){
      $("#pennies").value = change;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", makeChange);
});