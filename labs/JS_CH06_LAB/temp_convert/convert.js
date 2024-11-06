"use strict";

const $ = selector => document.querySelector(selector);

const change = () => {
  if ($("#fahrenheit").checked){
    $("#input").previousElementSibling.innerHTML = "Enter F Degrees:";
    $("#output").previousElementSibling.innerHTML = "Degrees Celsius:";
  }
  if ($("#celsius").checked){
    $("#input").previousElementSibling.innerHTML = "Enter C Degrees:";
    $("#output").previousElementSibling.innerHTML = "Degrees Fahrenheit:";
  }
  $("#input").focus();
}

const convert = () => {
  const input = $("#input").value;
  let output = 0;

  if (isNaN(input) || input == ""){
    $("#error").innerHTML = "You must enter a valid number for degrees.";
  }
  else{
    $("#error").innerHTML = "";
    if ($("#fahrenheit").checked){
      output = (input - 32) * (5/9);
    }
    else{
      output = (input * (9/5)) + 32;
    }
    $("#output").setAttribute("value", output.toFixed(0));
  }

}

document.addEventListener("DOMContentLoaded", () => {
  $("#convert").addEventListener("click", convert);
  $("#fahrenheit").addEventListener("click", change);
  $("#celsius").addEventListener("click", change);
  $("#input").focus();
})