"use strict";

const calculateTax = () => {
  const subtotal = parseFloat(document.querySelector("#subtotal").value);
  const rate = parseFloat(document.querySelector("#rate").value);

  let errorMsg = "";

  if (subtotal <= 0 || subtotal >= 10000) {
    errorMsg = "Subtotal must be between 0 and 10,000";
  }
  else if (rate <= 0 || rate >= 12){
    errorMsg = "Rate must be between 0 and 12";
  }
  
  if (errorMsg != ""){
    alert(errorMsg);
  }
  else{
    let tax = (subtotal * rate / 100);
    document.querySelector("#tax").value = tax.toFixed(2);

    let total = subtotal + tax;
    document.querySelector("#total").value = total.toFixed(2);

    document.querySelector("#subtotal").focus();
  }
}

const clearForm = () => {
  document.querySelector("#taxForm").reset();
  document.querySelector("#subtotal").focus();
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#calculate").addEventListener("click", calculateTax);
  document.querySelector("#clear").addEventListener("click", clearForm);
  document.querySelector("#subtotal").addEventListener("focus", () => {
    document.querySelector("#subtotal").value = "";
  });
  document.querySelector("#rate").addEventListener("focus", () => {
    document.querySelector("#rate").value = "";
  });
  document.querySelector("#calculate").addEventListener("click", calculateTax);
  document.querySelector("#subtotal").focus();
});