"use strict";

const $ = selector => document.querySelector(selector);

let tasks = ["Clean room", "Wash dishes", "Sweep kitchen", "Fold laundry", "Mow the lawn"];

const updateList = () => {
  while ($("#taskList").firstChild){
    $("#taskList").removeChild($("#taskList").firstChild);
  }
  for (let task of tasks){
    const listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(task));
    $("#taskList").appendChild(listItem);
  }
}

const removeTask = () => {
  const task = $("#task").value;
  for (let node of $("#taskList").childNodes){
    if (node.innerHTML == task){
      $("#taskList").removeChild(node);
    }
  }
}

const addTask = () => {
  const newTask = $("#task").value;
  $("#message").innerHTML = "";
  if (newTask == ""){
    $("#message").innerHTML = "Cannot add blank tasks";
  }
  else{
    tasks.push(newTask);
    updateList();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateList();
  $("#addTask").addEventListener("click", addTask);
  $("#removeTask").addEventListener("click", removeTask);
});