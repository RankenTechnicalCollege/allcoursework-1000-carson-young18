"use strict";

const getLyrics = () => {
  const num = parseInt(document.querySelector("#number").value);

  if (isNaN(num)){
    alert("Please enter a number, not a word.");
  }
  else if (num == 1){
    alert("One is the loneliest number that you'll ever do.");
  }
  else if (num == 2){
    alert("Two can be as bad as one. It's the loneliest number since the number one.");
  }
  else if (num == 3){
    alert("There is no three.");
  }
  else{
    alert("You didn't enter a valid number.")
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#lyric").addEventListener("click", getLyrics);
})