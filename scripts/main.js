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

const sidebar = document.getElementById("side-bar-div");          // Get the sidebar element
const toggleBtn = document.getElementById("sidebar-toggle-btn"); // Get the toggle button element

// A click listener to toggle the sidebar visibility
toggleBtn.addEventListener("click", () => {
sidebar.classList.toggle("hidden");                            // Toggle the 'hidden' class on sidebar

});