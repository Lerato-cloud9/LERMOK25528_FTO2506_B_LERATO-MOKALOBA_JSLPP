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

    const counts = { todo: 0, doing: 0, done: 0 };
  });
}

/**
 * Renders tasks to their appropriate columns.
 */
export function renderTasks(tasks) {
  tasks.forEach((task) => {
    const container = getTaskContainerByStatus(task.status);
    if (container) {
      const taskElement = createTaskElement(task);
      container.appendChild(taskElement);
     
    }
  });

  // Update column headers with task counts
  document.querySelector('[data-status="todo"] .columnHeader').textContent = `TODO (${counts.todo})`;
  document.querySelector('[data-status="doing"] .columnHeader').textContent = `DOING (${counts.doing})`;
  document.querySelector('[data-status="done"] .columnHeader').textContent = `DONE (${counts.done})`;
}
