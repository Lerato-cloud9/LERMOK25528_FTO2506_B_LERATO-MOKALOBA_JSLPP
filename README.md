# JSL05 Solution Code

## Overview

This solution builds on the previous challenge (JSL04) by introducing **major improvements**:

✅ **Modular code structure** – All logic has been broken down into responsibility-based modules  
✅ **Local storage integration** – Tasks are now loaded from and saved to localStorage  
✅ **Task creation modal** – Users can add new tasks via a form-driven modal interface

These changes make the project more scalable, persistent across sessions, and easier to extend with future features like editing or deleting tasks.

## Learning goals

By studying the JSL05 solution, you will:

- Understand how to **organise JavaScript code into modules** using `import/export`.
- Use **localStorage** as the single source of truth for all task data.
- Dynamically **render tasks grouped by status** into columns.
- Implement **task creation via modal form** with form validation.
- Apply **separation of concerns** and clean architectural practices.

## New Features in JSL05

| Feature                 | Description                                                      |
| ----------------------- | ---------------------------------------------------------------- |
| 🧩 Modular JS files     | Logic is split across folders like `ui/`, `tasks/`, and `utils/` |
| 💾 Persistent storage   | All tasks are saved and retrieved using `localStorage`           |
| ➕ Add new task feature | A modal lets users input a new task and assign its status        |

## File structure

├── `index.html` # HTML structure with empty columns & modals

├── `styles.css` # Layout and dialog styling

├── `initialData.js` # Fallback seed data for first load

├── /scripts

│ ├── `main.js` # Entry point: init board, attach handlers

│ ├── /ui

│ │ ├── `render.js` # Functions to render/clear tasks in columns

│ │ ├──` taskElement.js` # Generates individual .task-divs

│ │ └── `modalHandlers.js` # Handles modal open/close logic

│ ├── /tasks

│ │ ├── `taskManager.js` # Logic for adding new tasks to storage/UI

│ │ └── `formUtils.js` # Utility to reset form fields

│ └── /utils

│ └── `localStorage.js` # Reads/writes task list to localStorage

└── `README.md` # ← you are here

### Module overview

| File/Function                                     | Responsibility                                            |
| ------------------------------------------------- | --------------------------------------------------------- |
| `main.js`                                         | Initialise task board on DOM load                         |
| `renderTasks(tasks)`                              | Display tasks in the correct columns                      |
| `createTaskElement(task)`                         | Build one `.task-div` and attach click handlers           |
| `openTaskModal(task)`                             | Prefills and shows the edit modal (view-only for now)     |
| `addNewTask()`                                    | Constructs, saves, and renders new task from form input   |
| `resetForm()`                                     | Clears input fields after task creation                   |
| `setupNewTaskModalHandler()`                      | Opens the creation modal, validates, and submits new task |
| `loadTasksFromStorage()` / `saveTasksToStorage()` | LocalStorage persistence                                  |

## Running the solution

1. **Clone / download** the repo.
2. Open `index.html` with **Live Server** or any modern browser.
3. Explore:
   - Click the “Add New Task” button to open the modal.
   - Fill out and submit the form to create a task.
   - Reload the page to verify tasks persist via localStorage.
   - Click a task card to view its details in the preview modal.

## License

Provided for **educational purposes only**.

# 🗂 My Personal Kanban Board

Hey! This is my Kanban task management app project. It’s dynamic, mobile-friendly, and includes a dark/light mode toggle. While I didn’t implement all stretch features, the app allows task creation, editing, deletion, and persistent storage with a responsive sidebar..

---

## 🎯 What I Built

### 🟣 Deployment & Hosting
- I prepared the app files following best practices for deployment.
- Deployed it on **Netlify**, so you can access it live.
- Everything works online — creating, editing, deleting tasks, local storage persistence, and sorting all function in real-time.

### 🔵 Fetching Tasks & Loading State
- Tasks are fetched from [this API](https://jsl-kanban-api.vercel.app/) instead of being hard-coded.
- While tasks load, a **loading message** shows so users know data is coming.
- If the API fails, an error message appears and fallback tasks from **localStorage** are shown.

### 🟢 Persistent Storage
- All tasks are saved in **localStorage**, so refreshing the page keeps your tasks intact.
- On startup, tasks are loaded and displayed in **To Do, Doing, and Done** columns.

### 🟠 Task Editing & Deletion
- I created a modal where users can edit task title, description, and status.
- Save updates immediately reflect on the board and in localStorage.
- Deletion asks for confirmation before removing a task from the board and storage.

### 🟡 Sidebar & Navigation
- The sidebar contains all navigation elements like in my Figma design.
- It’s **toggleable**, so you can hide it or show it as you prefer.
- On mobile, the sidebar works like a menu from the top, just like the desktop version.
- Theme toggle switch is included in both mobile and desktop sidebar.

### 🔴 Dark/Light Mode
- I implemented a theme toggle.
- Switching themes updates **everything**, including task cards, headers, and even the logo.
- Dark mode is fully styled for readability and contrast.

### 🟣 Stretch Goal: Priority (Optional)
- Users can set **High, Medium, Low priority** on tasks.
- Priority is shown on each card, saved in localStorage, and immediately reflected in the UI.
- Tasks are sorted by priority automatically within each column.

### ⚪ How I Wrote My Code
- The code is split into modules: localStorage handling, task rendering, and modal management.
- Everything is clearly named and documented so I can maintain or expand the app easily.

---

## 🌟 Outcome
- A working, live Kanban board.
- Fully responsive and mobile-friendly.
- Dynamic task fetching, editing, deletion, and persistent storage.
- Theme toggle with dark/light modes.
- Deployed to Netlify for anyone to access.

---

## 🔗 Check It Out
[https://lerato-kanban.netlify.app/]

---

## 🛠 Tech Stack
- HTML, CSS, JavaScript
- Fetch API for live tasks
- LocalStorage for persistence
- Netlify for hosting