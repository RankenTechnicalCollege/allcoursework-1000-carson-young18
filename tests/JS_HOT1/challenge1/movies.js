"use strict";

document.addEventListener("DOMContentLoaded", () => {
  let favoriteMovies = ["Titanic", "The Godfather", "The Sandlot"];
  document.querySelector("#addMovie").addEventListener("click", () => {
    document.querySelector("p").innerHTML = "Favorite movies:";
    
    const newMovie = document.querySelector("#movie").value;
    favoriteMovies.push(newMovie);
    for (let movie of favoriteMovies){
      document.querySelector("p").innerHTML = document.querySelector("p").innerHTML + " " + movie;
    }
  })
})