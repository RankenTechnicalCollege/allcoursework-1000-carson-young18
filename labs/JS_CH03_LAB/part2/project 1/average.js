"use strict";

const average = () =>{
  let total = 0;
  const numbers = document.querySelectorAll(".average");
  for(let i = 0; i < numbers.length; i++){
    total += parseFloat(numbers[i].value);
  }
  const average = total / numbers.length;
  document.getElementById("average").innerHTML = `Average: ${average}`;
}