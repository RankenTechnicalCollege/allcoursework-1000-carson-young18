"use strict";

const calcBMI = () =>{
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  const bmi = parseFloat((weight * 703) / (height * 72));

  document.getElementById("bmi").value = bmi;
}