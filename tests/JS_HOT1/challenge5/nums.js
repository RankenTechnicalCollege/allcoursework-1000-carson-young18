"use strict";

const numbers = [15, 30, 45, 60, 75, 90];

document.write("<h1>Multiples of X</h1>");
for (let i = 1; i <= 100; i++){
  if (numbers.includes(i)){
    document.write(`<p>${i}</p>`);
  }
}