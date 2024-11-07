"use strict";

const $ = selector => document.querySelector(selector);
let scores = [];

const addScore = () => {
  $("#name").nextElementSibling.innerHTML = "";
  $("#score").nextElementSibling.innerHTML = "";
  const name = $("#name").value;
  const score = parseInt($("#score").value);
  let valid = true;

  if (!isNaN(name) || name == ""){
    $("#name").nextElementSibling.innerHTML = "Please enter a valid name.";
    valid = false;
  }
  if (isNaN(score) || score == "" || score < 0 || score > 100){
    $("#score").nextElementSibling.innerHTML = "Please enter a valid score between 0 and 100.";
    valid = false;
  }
  if (valid){
    scores.push([name, score]);
    console.log(scores);
  }
  $("#name").focus();
}

const displayResults = () => {
  let sum = 0;
  let highScore = ["", 0];
  for (let score of scores){
    sum += score[1];
    if (score[1] > highScore [1]){
      highScore = score;
    }
  }
  const average = (sum / scores.length).toFixed(0);

  $("#average").innerHTML = average;
  $("#high-name").innerHTML = highScore[0];
  $("#high-score").innerHTML = highScore[1];
  $("#result-text").hidden = false;

  console.log(average);
  console.log(highScore);
}

const displayScores = () => {
  for (let score of scores){
    const newScore = document.createElement("p");
    const scoreText = document.createTextNode(`${score[0]}  ${score[1]}`);
    newScore.appendChild(scoreText);
    $("#scores-text div").appendChild(newScore);
  }
  $("#scores-text").hidden = false;
}

document.addEventListener("DOMContentLoaded", () => {
  $("#add").addEventListener("click", addScore);
  $("#results").addEventListener("click", displayResults);
  $("#scores").addEventListener("click", displayScores);
})