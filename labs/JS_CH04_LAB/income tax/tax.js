"use strict";

const $ = selector => (document.querySelector(selector))

const calculateTax = () => {
  const income = parseFloat($("#income").value);
  let tax = 0;

  if (isNaN(income) || income < 0){
    alert("Income is not valid");
  }
  else{
    if (income <= 9875){
      tax = (income * 0.1);
    }
    else if (income <= 40125){
      tax = (987.50 + ((income - 9875) * 0.12));
    }
    else if (income <= 85525){
      tax = (4617.50 + ((income - 40125) * 0.22));
    }
    else if (income <= 163300){
      tax = (14605.50 + ((income - 85525) * 0.24));
    }
    else if (income <= 207350){
      tax = (33271.50 + ((income - 163300) * 0.32));
    }
    else if (income <= 518400){
      tax = (47367.50 + ((income - 207350) * 0.35));
    }
    else{
      tax = (156235.50 + ((income - 518400) * 0.37));
    }
    $("#tax").value = tax.toFixed(2);
    $("#income").focus();
  }
}


document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", calculateTax);
});