"use strict";

const $ = selector => document.querySelector(selector);

const calculateFV = (investment, interest, years) => {
  let futureValue = investment;
  for (let i = 1; i <= years; i++){
    futureValue += (futureValue * interest / 100);
  }
  return futureValue.toFixed(2);
}

// const processEntries = () => {
//   const investment = parseFloat($("#investment").value);
//   const interest = parseFloat($("#rate").value);
//   const years = parseFloat($("#years").value);

//   let errorMsg = "";

//   if (investment >= 100000 || investment <= 0){
//     errorMsg = "Investment should be between 0 and 100,000";
//   }
//   else if (interest >= 15 || interest <= 0){
//     errorMsg = "Interest should be between 0 and 15";
//   }
//   else if (years >= 50 || years <= 0){
//     errorMsg = "Years should be between 0 and 50";
//   }

//   if (errorMsg != ""){
//     alert(errorMsg);
//   }
//   else{
//     $("#future_value").value = calculateFV(investment, interest, years);
//   }
// }

document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", () => {
    const investment = parseFloat($("#investment").value);
    const interest = parseFloat($("#rate").value);
    const years = parseFloat($("#years").value);

    let errorMsg = "";

    if (investment >= 100000 || investment <= 0){
      errorMsg = "Investment should be between 0 and 100,000";
    }
    else if (interest >= 15 || interest <= 0){
      errorMsg = "Interest should be between 0 and 15";
    }
    else if (years >= 50 || years <= 0){
      errorMsg = "Years should be between 0 and 50";
    }

    if (errorMsg != ""){
      alert(errorMsg);
    }
    else{
      $("#future_value").value = calculateFV(investment, interest, years);
    }
  });
  $("#investment").focus();
});