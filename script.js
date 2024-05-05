console.log("SBA 0.3")


const emailInput = document.getElementById('email');

form = document.querySelector('form');

const nextSibling = firstChild.nextElementSibling;
    console.log('Next sibling of h1:'

// Username validation functions
function isUsernameValid(username) {
  // Check if username is blank
  if (!username) {
    return false;
  }

  // Check if username is at least 4 characters long
  if (username.length < 4) {
    return false;
  }

  // Check if username contains at least two unique characters
  const uniqueChars = new Set(username).size;
  if (uniqueChars < 2) {
    return false;
  }

  // Check if username contains any special characters or whitespace
  const specialCharsRegex = /[!@#$%^&*(),.?":{}|<>]/;
  const whitespaceRegex = /\s/;
  if (specialCharsRegex.test(username) || whitespaceRegex.test(username)) {
    return false;
  }

  // Check if username is unique (assuming usernames are stored in localStorage)
  const storedUsernames = Object.keys(localStorage);
  const lowercaseUsername = username.toLowerCase();
  if (storedUsernames.includes(lowercaseUsername)) {
    return false;
  }

  return true;
}

// Email validation function
function isEmailValid(email) {
  // Check if email is a valid email address
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return false;
  }

  // Check if email is not from "example.com" domain
  if (email.endsWith('@example.com')) {
    return false;
  }

  return true;
}

// Password validation functions
function isPasswordValid(password) {
  // Check if password is at least 12 characters long
  if (password.length < 12) {
    return false;
  }

  // Check if password has at least one uppercase and one lowercase letter
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  if (!hasUppercase || !hasLowercase) {
    return false;
  }

  // Check if password contains at least one number
  const hasNumber = /\d/.test(password);
  if (!hasNumber) {
    return false;
  }

  // Check if password contains at least one special character
  const specialCharsRegex = /[!@#$%^&*(),.?":{}|<>]/;
  if (!specialCharsRegex.test(password)) {
    return false;
  }

  // Check if password does not contain the word "password"
  const passwordRegex = /password/i;
  if (passwordRegex.test(password)) {
    return false;
  }

  // Check if password does not contain the username
  const username = usernameInput.value.toLowerCase();
  if (password.toLowerCase().includes(username)) {
    return false;
  }

  return true;
}

function doPasswordsMatch() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  return password === confirmPassword;
}

// Form submission function
function handleFormSubmit(event) {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value;
  const termsAccepted = termsCheckbox.checked;

  if (!isUsernameValid(username)) {
    // Show username error message
    return;
  }

  if (!isEmailValid(email)) {
    // Show email error message
    return;
  }

  if (!isPasswordValid(password) || !doPasswordsMatch()) {
    // Show password error message
    return;
  }

  if (!termsAccepted) {
    // Show terms and conditions error message
    return;
  }

  // Store user data in localStorage
  const users = JSON.parse(localStorage.getItem('users')) || {};
  users[username.toLowerCase()] = { email, password };
  localStorage.setItem('users', JSON.stringify(users));

  // Clear form fields and show success message
  usernameInput.value = '';
  emailInput.value = '';
  passwordInput.value = '';
  confirmPasswordInput.value = '';
  termsCheckbox.checked = false;
  // Show success message

  // Optionally, you can redirect the user to another page or perform additional actions
}

// Add event listener for form submission
form.addEventListener('submit', handleFormSubmit);