// This runs when the page loads
console.log("External JavaScript file connected successfully!");

// Select elements from the HTML
let button = document.getElementById("btn");
let message = document.getElementById("message");

// Add a click event to the button
let isToggled = false;

button.addEventListener("click", function () {
   console.log("Button was clicked!");

   if (!isToggled) {
     message.textContent = "You understand Module 1!";
        isToggled = true;
   } else {
     message.textContent = "Click the button below.";
     isToggled = false;
   }
});