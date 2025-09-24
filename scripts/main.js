import { loadTasksFromStorage } from "./utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "./ui/render.js";
import { fetchTasksFromAPI } from './tasks/taskManager.js';
import {
  setupModalCloseHandler,
  setupNewTaskModalHandler,
} from "./ui/modalHandlers.js";

function initTaskBoard() {
  const tasks = loadTasksFromStorage();
  console.log("Tasks from storage:", tasks); 
  clearExistingTasks();
  renderTasks(tasks);
  fetchTasksFromAPI();
  setupModalCloseHandler();
  setupNewTaskModalHandler();
}

document.addEventListener("DOMContentLoaded", initTaskBoard);
