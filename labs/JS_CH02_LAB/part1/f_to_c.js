"use strict";

const fahrenheit = parseFloat(prompt("Enter Fahrenheit temperature"));

const celsius = parseFloat((fahrenheit - 32) * (5/9));

document.write(`<p>${fahrenheit.toFixed(1)} F = ${celsius.toFixed(1)} C</p>`);