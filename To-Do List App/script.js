// Array to store all tasks
let tasks = [];

// Function to add a new task
function addTask() {
  let taskInput = document.getElementById('taskInput');
  let taskText = taskInput.value.trim();

  if (taskText !== "") {
    tasks.push(taskText);
    taskInput.value = "";

    // SAVE to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    displayTasks();
  } else {
    alert("Please enter a task.");
    }
}

// Function to display all tasks
function displayTasks() {
  let taskList = document.getElementById('taskList');
  taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let listItem = document.createElement('li');
 
    let span = document.createElement('span');
    span.textContent = tasks[i];
    
    let removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.onclick = function() {
      removeTask(i);
    };

    listItem.appendChild(span);
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);
  }
}

// Function to remove a task
function removeTask(index) {
  // Remove the task from the tasks array
  tasks.splice(index, 1);
  // UPDATE localStorage
  localStorage.setItem('tasks', JSON.stringify(tasks));
  displayTasks();
}

// Load tasks when page loads
window.onload = function() {
  let storedTasks = localStorage.getItem('tasks');

  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
    displayTasks();
  }
};  