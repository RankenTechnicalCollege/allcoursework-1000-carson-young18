"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];
const regions = [region1, region2, region3, region4, region5];

document.write("<h2>Sales by Quarter</h2>")
for(let i = 0; i < 4; i++){
  let quarterTotal = 0;
  for(let x in regions){
    quarterTotal += regions[x][i];
  }
  document.write(`<div>Q${i+1}: $${quarterTotal}</div>`);
}

document.write("<h2>Sales by Region</h2>")
for(let i in regions){
  let regionTotal = 0;
  for(let x in regions[i]){
    regionTotal += regions[i][x];
  }
  document.write(`<div>Region ${parseInt(i)+1}: $${regionTotal}</div>`);
}

let total = 0;
document.write("<h2>Total Sales</h2>")
for(let i in regions){
  for(let x in regions[i]){
    total += regions[i][x];
  }
}
document.write(`<div>$${total}</div>`);