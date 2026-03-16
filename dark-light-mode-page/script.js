// Select the button
const toggleButton = document.getElementById('toggleButton');

// Add a click event to the button
toggleButton.addEventListener("click" , function() {
  // Check if body currently has dark-mode
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    toggleButton.textContent = "Switch to Dark Mode";
  }  else {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    toggleButton.textContent = "Switch to Light Mode";
  } 
});