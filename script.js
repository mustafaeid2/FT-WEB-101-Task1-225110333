// Dark mode: only toggles the class. Colours live in CSS (body.dark).
var toggleButton = document.getElementById("theme-toggle");
toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

// Form: keep the page, reject an empty email, greet by name.
var form = document.getElementById("contact-form");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var errorText = document.getElementById("error");
var greeting = document.getElementById("greeting");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var email = emailInput.value.trim();
  var valid = email !== "" && emailInput.checkValidity();

  if (!valid) {
    errorText.hidden = false;
    errorText.textContent = email === "" ? "Please enter your email." : "Please enter a valid email.";
    emailInput.classList.add("invalid");
    emailInput.focus();
    return;
  }

  errorText.hidden = true;
  emailInput.classList.remove("invalid");

  var visitor = nameInput.value.trim();
  greeting.textContent = "Hello, " + (visitor || "friend") + "! Thanks for your message.";
  form.reset();
});

// Back-to-top button
var topButton = document.getElementById("back-to-top");
window.addEventListener("scroll", function () {
  topButton.classList.toggle("show", window.scrollY > 300);
});
topButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
