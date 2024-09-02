// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

// b) Ask for the user's name using the prompt
let userName = prompt("What is your name?");

// c) Create an alert using the name variable to greet the user
alert(
  "Hi, " + userName + "!");


// Step 2 - Food choice
// Your code goes here
let choice = prompt("What food would you like to order?\n1. Pizza\n2. Pasta\n3. Salad\nEnter a number:");
let food;
if (choice === "1") {
  food = "Pizza";
} else if (choice === "2") {
  food = "Pasta";
} else if (choice === "3") {
  food = "Salad";
} else {
  food = null;
}

// Display a message using the alert() method to confirm the user's selection
if (food) {
  alert("You have selected " + food + ".");
} else {
  alert("Invalid choice. Please try again.");
}

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
