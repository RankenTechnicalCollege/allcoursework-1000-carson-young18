"use strict";

const calcBMI = () =>{
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  const bmi = parseFloat((weight * 703) / (height * height));

  document.getElementById("bmi").value = bmi;
}