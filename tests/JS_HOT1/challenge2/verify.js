"use strict";

const verifyAge = () => {
  const age = parseInt(document.querySelector("#age").value);

  if (!Number.isInteger(age)){
    alert("Please enter your age!");
  }
  else if (age > 200 || age < 1){
    alert("Age out of range!");
  }
  else if (age >= 21){
    alert("Welcome to the venue!");
  }
  else if(age < 21){
    alert("You're not old enough!");
  }
}



document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#verify").addEventListener("click", verifyAge);
})