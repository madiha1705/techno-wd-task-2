
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");

});


function changeTextcolour() {
  var input = document.getElementById("dobInput");
  input.style.color = "black";
};

function changeTextColor() {
  var input = document.getElementById("countryInput");
  input.style.color = "black";
};



// Function to handle login
function login() {
  // Get the username and password input values
  var usernameInput = document.querySelector(".sign-in-form input[type='text']");
  var passwordInput = document.querySelector(".sign-in-form input[type='password']");

  // Check if both fields are filled
  if (usernameInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
    // Simulate a successful login
    alert('Login successful!');
  } else {
    // If fields are not filled, show an alert
    alert('Please enter both username and password.');
  }
}

var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

function register() {
  var checkbox = document.getElementById("check");
  var errorMessage = document.getElementById('errormessage');
  if (checkbox.checked) {
    errorMessage.textContent ='';
      // Simulate a successful registration
      alert('Registration successful!');
  } else {
    errorMessage.textContent = 'Please accept the terms and conditions';
      // If fields are not filled or checkbox is not checked, show an alert
      alert('Please fill in all required fields.');
  }
}

function checkboxchecked(){
  var checkbox = document.getElementById("check");
  var errorMessage = document.getElementById('errormessage');
  if (checkbox.checked) {
    errorMessage.textContent ='';
     
  } else {
    errorMessage.textContent = 'Please accept the terms and conditions';
     
  }
}
