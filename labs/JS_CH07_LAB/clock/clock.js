"use strict";

const $ = selector => document.querySelector(selector);

const getTime = () => {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let am_pm = "AM";

  if (hours >= 12){
    hours -= 12;
    am_pm = "PM";
  }
  if (hours == 0){
    hours = 12;
  }
  if (hours < 10){
    hours = `0${hours}`;
  }
  if (minutes < 10){
    minutes = `0${minutes}`;
  }
  if (seconds < 10){
    seconds = `0${seconds}`;
  }

  const output = `${hours}: ${minutes}: ${seconds}  ${am_pm}`;
  $("#clock").value = output;
}

document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    getTime();
  }, 1000);
});