"use strict";

let scores = [];
let score = 0;
do{
  score = parseInt(prompt("Enter number grade from 0 through 100\nOr enter 999 to end entries", 999));
  if(isNaN(score)){
    alert("Please enter a number");
  }
  else if((score > 100 || score < 0) && score != 999){
    alert("Please enter a score from 0-100");
  }
  else if(score != 999){
    scores.push(score);
  }
}
while(score!="999");

for(let i in scores){
  let letterGrade;
  if (scores[i] >= 90){
    letterGrade = "A";
  }
  else if(scores[i] >= 80){
    letterGrade = "B";
  }
  else if(scores[i] >= 70){
    letterGrade = "C";
  }
  else if(scores[i] >= 60){
    letterGrade = "D";
  }
  else{
    letterGrade = "F";
  }

  document.write(`<p>Grade ${scores[i]} = ${letterGrade}</p>`)
}