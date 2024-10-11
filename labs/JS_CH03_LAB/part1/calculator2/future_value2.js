"use strict";

let again = "y"
do{
  let investment = 0;
  do{
    investment = parseFloat(prompt("Enter investment amount as xxxxx.xx", 10000));
  }
  while(isNaN(investment) || investment <= 0);

  let rate = 0;
  do{
    rate = parseFloat(prompt("Enter interest rate as xx.x", 7.5));
  }
  while(isNaN(rate) || rate <= 0 || rate >=15);

  let years = 0;
  do{
    years = parseInt(prompt("Enter number of years", 5));
  }
  while(isNaN(years) || years <= 0);

  let futureValue = investment;
  for(let i = 1; i <= years; i++){
    futureValue += (futureValue * rate) / 100;
  }

  document.write("<h4>Future Value with Yearly Interest</h4>");
  document.write(`<p>Investment amount: ${investment}</p>`);
  document.write(`<p>Interest rate: ${rate}</p>`);
  document.write(`<p>Years: ${years}</p>`);
  document.write(`<p>Future Value: ${futureValue.toFixed(2)}</p>`);

  futureValue = investment;
  for(let i = 1; i <= (years*12); i++){
    futureValue += (futureValue * (rate/12)) / 100;
  }

  document.write("<h4>Future Value with Monthly Interest</h4>");
  document.write(`<p>Investment amount: ${investment}</p>`);
  document.write(`<p>Interest rate: ${rate}</p>`);
  document.write(`<p>Years: ${years}</p>`);
  document.write(`<p>Future Value: ${futureValue.toFixed(2)}</p>`);

  again = prompt("Repeat with new entries? y/n", "n");
}
while(again=="y");