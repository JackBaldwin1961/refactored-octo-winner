# To-Do List App

A simple and clean To-Do List application built with HTML, CSS, and JavaScript

## Features
- Add new tasks
- Remove tasks
- Edit existing tasks
- Mark tasks as completed
- Press Enter to quickly add tasks
- Tasks saved using localStorage (data persists after refresh)
- Clean and responsive design
- Dynamic task updates using JavaScript


## Technologies Used
- HTML
- CSS
- JavaScript

## Key Features Explained
1. localStorage (biggest one)
2. Task completion toggle
3. Edit task feature

### Local Storage (Data Persistence)
This app uses localStorage to save tasks in the browser.
Even after refreshing the page, the tasks saved.

- 'JSON.stringify()' is used to store the tasks array
- 'JSON.parse()' is used to retrieve the data

---

## Task Completion Toggle
User can click on a task to mark it as completed

- 'classList.toggle()' is used to add or remove a CSS class
- This visually updates the task with a line-through style 

---

## Edit Task Functionality
Users can edit an existing task.

- 'prompt()' is used to allow quick inline editing
- The task is updated in the array and re-rendered on the page

## Keyboard Interaction
Users can press the Enter key to quickly add a task.

- A keypress event listener detects when Enter is pressed
- This improves user experience by reducing the need for clicks

## What I Learned
This project helped me practice:
- DOM manipulation
- Arrays in JavaScript
- Functions
- Event handling
- Creating and removing HTML elements dynamically
- Using localStorage to persist data
- Updating existing data in an array
- Using prompt() for quick editing
- Improving user interaction with keyboard support

## How to Run
1. Open the project folder in VS Code
2. Open 'index.html'
3. Run with Live Server

## Project Purpose
This Project was built as part of my JavaScript learning journey to practice building interactive web applications.

## Author
Jack Baldwin 
Aspiring Junior Web Developer
GitHub: [View Repository](https://github.com/JackBaldwin1961/refactored-octo-winner)