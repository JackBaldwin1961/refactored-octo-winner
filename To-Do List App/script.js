// Array to store all tasks
let tasks = [];

// Add a task
function addTask() {
  let taskInput = document.getElementById('taskInput');
  let taskText = taskInput.value.trim();

  if (taskText !== "") {
    tasks.push(taskText);
    taskInput.value = "";
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
  } else {
    alert("Please enter a task.");
    }
}

// Show all tasks
function displayTasks() {
  let taskList = document.getElementById('taskList');
  taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let listItem = document.createElement('li');
 
    let span = document.createElement('span');
    span.textContent = tasks[i];

    span.onclick = function() {
      span.classList.toggle('completed');
    };

    let buttonGroup = document.createElement('div');
    buttonGroup.className = 'button-group';

    let editButton = document.createElement('button');
    editButton.textContent = "Edit";
    editButton.className = 'edit-btn';
    editButton.onclick = function() {
        editTask(i);
    };
    
    let removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.className = 'remove-btn';
    removeButton.onclick = function() {
      removeTask(i);
    };

    buttonGroup.appendChild(editButton);
    buttonGroup.appendChild(removeButton);

    listItem.appendChild(span);
    listItem.appendChild(buttonGroup);
    taskList.appendChild(listItem);
  }
}

// Remove a task
function removeTask(index) {
  tasks.splice(index, 1);
  // UPDATE localStorage
  localStorage.setItem('tasks', JSON.stringify(tasks));
  displayTasks();
}

// Edit a task
function editTask(index) {
  let updatedTask = prompt("Edit your task:", tasks[index]);

  if (updatedTask !== "") {
    tasks[index] = updatedTask;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
  } else {
    alert("Task cannot be empty.");
  }
}

// Load tasks when page loads
window.onload = function() {
  let savedTasks = localStorage.getItem('tasks');

  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
    displayTasks();
  }
};  

// Press Enter to add task
document.getElementById("taskInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addTask();
  }
});