import { loadTasksFromStorage } from "./utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "./ui/render.js";

import {
  setupModalCloseHandler,
  setupNewTaskModalHandler,
} from "./ui/modalHandlers.js";

function initTaskBoard() {
  const tasks = loadTasksFromStorage();
  console.log("Tasks from storage:", tasks); 
  clearExistingTasks();
  renderTasks(tasks);
 
  setupModalCloseHandler();
  setupNewTaskModalHandler();
}

document.addEventListener("DOMContentLoaded", initTaskBoard);

//toggle functionality to hide/show sidebar with icon update

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("side-bar-div");
  const hideBtn = document.getElementById("sidebar-toggle-btn");
  const showBtn = document.getElementById("sidebar-show-btn");

  hideBtn.addEventListener("click", () => {
    sidebar.classList.add("hidden");  // hide sidebar
    hideBtn.style.display = "none";   // hide inside button
    showBtn.style.display = "flex";   // show bottom-left button
  });

  showBtn.addEventListener("click", () => {
    sidebar.classList.remove("hidden"); // show sidebar
    hideBtn.style.display = "flex";     // show inside button
    showBtn.style.display = "none";     // hide outside button
  });
});