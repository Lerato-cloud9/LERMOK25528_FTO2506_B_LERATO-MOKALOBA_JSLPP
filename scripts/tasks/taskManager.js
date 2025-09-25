import {
  loadTasksFromStorage,
  saveTasksToStorage,
} from "../utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "../ui/render.js";
import { resetForm } from "./formUtils.js";

export function addNewTask() {
  const title = document.getElementById("title-input").value.trim();
  const description = document.getElementById("desc-input").value.trim();
  const status = document.getElementById("select-status").value;
  const overlay = document.querySelector(".modal-overlay");

  if (!title) return;

  const tasks = loadTasksFromStorage();
  const newTask = {
    id: tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1,
    title,
    description,
    status,
  };

  const updatedTasks = [...tasks, newTask];
  saveTasksToStorage(updatedTasks);

  clearExistingTasks();
  renderTasks(updatedTasks);
  resetForm();
  overlay.close();
}

// DOM element for messages and fetching the API
const statusMessage = document.getElementById("status-message");

export async function fetchTasksFromAPI() {
 
  try {
    if (statusMessage) statusMessage.textContent = "⏳ Loading tasks..."; //show loading message
    const res = await fetch("https://jsl-kanban-api.vercel.app/");        //Fetch tasks from API
    if (!res.ok) throw new Error("Failed to fetch tasks");                //Check if response is OK
    const data = await res.json();                                        //Parse response JSON to convert responce to object

    saveTasksToStorage(data);                                             // Save to localStorage as backup
    clearExistingTasks();                                                 // Clear existing tasks in UI
    renderTasks(data);                                                    // Render tasks in columns
  }

  catch (error) {
    if (statusMessage) statusMessage.textContent = "❌ Error: " + error.message;  // Display error message if fetch fails
    const fallbackTasks = loadTasksFromStorage();                                 // Load fallback tasks from localStorage in case of fail

    clearExistingTasks();
    renderTasks(fallbackTasks);
  }

  finally {
    if (statusMessage) setTimeout(() => (statusMessage.textContent = ""), 3000);  // Clears status message after 3 seconds
  }
}

//A Click handler for tasks 

export function createTaskElement(task) {
  const div = document.createElement("div");

   // Add class for styling task cards
  div.classList.add("task-div");

  // Set the visible task title
  div.textContent = task.title;
}