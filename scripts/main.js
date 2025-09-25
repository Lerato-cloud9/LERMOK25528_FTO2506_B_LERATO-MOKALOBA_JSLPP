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

// Get sidebar and both buttons
const sidebar = document.getElementById("side-bar-div");          
const hideBtn = document.getElementById("sidebar-toggle-btn"); // Hide Sidebar button
const showBtn = document.getElementById("sidebar-show-btn");   // Show Sidebar button (👀)

// Hide sidebar when Hide button is clicked
hideBtn.addEventListener("click", () => {
  sidebar.classList.add("hidden");   // slide sidebar away
  hideBtn.style.display = "none";    // hide "Hide Sidebar" button
  showBtn.style.display = "block";   // show 👀 "Show Sidebar" button
});

// Show sidebar when Show button is clicked
showBtn.addEventListener("click", () => {
  sidebar.classList.remove("hidden"); // bring sidebar back
  showBtn.style.display = "none";     // hide 👀 button
  hideBtn.style.display = "block";    // show "Hide Sidebar" button again
});