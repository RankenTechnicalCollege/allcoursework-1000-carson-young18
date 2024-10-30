"use strict";

document.write("<h1>Odd numbers 1-100</h1>");
for (let i = 1; i <= 100; i++){
  if ((i % 2) != 0){
    document.write(`<p>${i}</p>`);
  }
}