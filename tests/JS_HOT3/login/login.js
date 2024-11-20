"use strict";

const $ = selector => document.querySelector(selector);

const login = () => {
  const email = $("#email").value;
  const password = $("#password").value;
  let errorMessage;

  if ($("#message").firstChild != null){
    console.log($("#message").childNodes);
    $("#message").removeChild($("#message").firstChild);
    $("#message").classList.remove("text-danger");
    $("#message").classList.remove("text-success");
  }

  if (email == "" || password == ""){
    errorMessage = "You seem to have forgotten your username and password."
    $("#message").appendChild(document.createTextNode(errorMessage));
    $("#message").classList.add("text-danger");
  }
  else if (email == "admin@example.com" && password == "password"){
    errorMessage = "Welcome back Admin!";
    $("#message").appendChild(document.createTextNode(errorMessage));
    $("#message").classList.add("text-success");
  }
  else{
    errorMessage = "That email and password doesn't seem to be right. Try again.";
    $("#message").appendChild(document.createTextNode(errorMessage));
    $("#message").classList.add("text-danger");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  $("#loginBtn").addEventListener("click", login);
});