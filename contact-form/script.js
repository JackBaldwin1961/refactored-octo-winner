const form = document.getElementById("contactForm");
const error = document.getElementById("error");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    error.textContent = "All fields are required";
    return;
  }

  error.textContent = "Form submitted successfully";
  error.style.color = "lime";
});  
