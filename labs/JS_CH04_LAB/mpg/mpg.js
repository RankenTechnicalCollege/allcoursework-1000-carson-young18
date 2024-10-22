"use strict";

const $ = selector => document.querySelector(selector);

const getNaNErrorMsg = lbl =>
  `${lbl} must be a valid number.`;

const getZeroErrorMsg = lbl =>
  `${lbl} must be greater than zero.`;

const focusAndSelect = selector => {
  const elem = $(selector);
  elem.focus();
  elem.select();
}

const clearEntries = () => {
  focusAndSelect("#miles");
}

const processEntries = () => {
  const miles = parseFloat($("#miles").value);
  const gallons = parseFloat($("#gallons").value);

  if (isNaN(miles) || miles <= 0){
    if (isNaN(miles)){
      alert(getNaNErrorMsg("Miles driven"));
    }
    else{
      alert(getZeroErrorMsg("Miles driven"));
    }
    focusAndSelect("#miles");
  }
  else if (isNaN(gallons) || gallons <= 0){
    if (isNaN(gallons)){
      alert(getNaNErrorMsg("Gallons used"));
    }
    else{
      alert(getZeroErrorMsg("Gallons used"));
    }
    focusAndSelect("#gallons");
  }
  else{
    $("#mpg").value = (miles / gallons).toFixed(2);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", processEntries);
  $("#clear").addEventListener("click", clearEntries);
  $("#miles").addEventListener("dblclick", clearEntries);
  $("#miles").focus();
})