import { createTaskElement } from "./taskElement.js";

/**
 * Finds the task container element based on task status.
 */
function getTaskContainerByStatus(status) {
  status = status.toLowerCase().trim();  // Normalize status to lowercase and remove extra spaces
  const column = document.querySelector(`.column-div[data-status="${status}"]`);
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
  clearExistingTasks();

  const counts = { todo: 0, doing: 0, done: 0 };// counts number of tasks in each column

  tasks.forEach((task) => {
    const container = getTaskContainerByStatus(task.status);
    if (container) {
      const taskElement = createTaskElement(task);
      container.appendChild(taskElement);
     
      const key = task.status.toLowerCase().trim();
      if (counts[key] !== undefined) counts[key]++;
    }
  });

  // Update column headers with task counts
  ['todo', 'doing', 'done'].forEach(status => {
    const header = document.querySelector(`[data-status="${status}"] .columnHeader`);
    if (header) header.textContent = `${status.toUpperCase()} (${counts[status]})`;
  });
}
