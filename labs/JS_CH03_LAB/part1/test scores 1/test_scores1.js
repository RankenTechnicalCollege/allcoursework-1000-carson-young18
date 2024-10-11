"use strict";

const scores = [];
let score = 0;
let highestScore = 0;

do{
  score = parseInt(prompt("Enter a test score, or enter -1 to end scores.", -1));

  if(score >= 0 && score <=100){
    scores[scores.length] = score;
  }
  else if(score != -1){
    alert("Score must be a valid number from 0 through 100>");
  }
}
while(score != -1);

if(scores.length > 0){
  let total = 0;
  for(let i in scores){
    total += scores[i];
    if(scores[i] > highestScore){
      highestScore = scores[i];
    }
    document.write(`<p>Score ${parseInt(i) + 1}: ${scores[i]}</p>`);
  }
  // for(let i in scores){
  //   if(scores[i] > highestScore){
  //     highestScore = scores[i];
  //   }
  // }
  const average = parseInt(total/scores.length);
  document.write(`<p>Average score is ${average}</p>`);
  document.write(`<p>Highest score is ${highestScore}</p>`);
}

