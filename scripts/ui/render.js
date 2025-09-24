import { createTaskElement } from "./taskElement.js";

/**
 * Finds the task container element based on task status.
 */
function getTaskContainerByStatus(status) {
  const column = document.querySelector(`.column-div[data-status="${status}"]`);
  console.log("Looking for container with status:", status, "→ found:", column);
  return column ? column.querySelector(".tasks-container") : null;
}

/**
 * Clears all existing task-divs from all task containers.
 */
export function clearExistingTasks() {
  document.querySelectorAll(".tasks-container").forEach((container) => {
    container.innerHTML = "";
  });
}

/**
 * Renders tasks to their appropriate columns.
 */
export function renderTasks(tasks) {
  tasks.forEach((task) => {
    console.log("Rendering task:", task);
    const container = getTaskContainerByStatus(task.status);
    if (container) {
      const taskElement = createTaskElement(task);
      container.appendChild(taskElement);
    }
  });
}
