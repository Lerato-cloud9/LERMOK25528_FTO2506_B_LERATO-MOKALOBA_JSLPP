import { addNewTask } from "../tasks/taskManager.js";

let editingTaskId = null; // Tracks which task is being edited

export function setupModalCloseHandler() {
  const modal = document.getElementById("task-modal");
  const closeBtn = document.getElementById("close-modal-btn");
  closeBtn.addEventListener("click", () => modal.close());
  editingTaskId = null; // reset editing state
}

export function setupNewTaskModalHandler() {
  const overlay = document.querySelector(".modal-overlay");
  const newTaskBtn = document.getElementById("add-new-task-btn");
  const form = document.querySelector(".modal-window");
  const cancelBtn = document.getElementById("cancel-add-btn");

  newTaskBtn.addEventListener("click", () => {
    overlay.style.visibility = "visible";
    overlay.showModal();
  });

  cancelBtn.addEventListener("click", () => overlay.close());

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.checkValidity()) {
      addNewTask();
    } else {
      form.reportValidity();
    }
  });
}

export function openTaskModal(task) {
  editingTaskId = task.id; // track which task is being edited
  const modal = document.getElementById("task-modal");
  document.getElementById("task-title").value = task.title;
  document.getElementById("task-desc").value = task.description;
  document.getElementById("task-status").value = task.status;
  modal.showModal();
}

//Adding a submit handler for editing tasks

const editForm = document.getElementById("task-form");  // Get the task form element for editing

editForm.addEventListener("submit", (e) => {            // Add submit event listener to handle task edits
  e.preventDefault();                                  // Prevent default page refresh

  if (editingTaskId === null) return;                 // Exit if no task is being edited
  const tasks = loadTasksFromStorage();               // Load current tasks from localStorage

  const updatedTasks = tasks.map(t => {               // Go over tasks to update only the one being edited
    if (t.id === editingTaskId)
      
});