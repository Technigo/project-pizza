// Start here

// Step 1 - Welcome and introduction
alert(
  "Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin."
)

const userName = prompt("Please enter your name:");

alert(
  "Hi, " + userName + "!"
)

// Step 2 - Food choice
let foodChoice = prompt("What type of food would you like to order?\nEnter a number:\n1 - Pizza\n2 - Pasta\n3 - Salad");

if (foodChoice === "1") {
  alert("You have selected Pizza!");
} else if (foodChoice === "2") {
  alert("You have selected Pasta!");
} else if (foodChoice === "3") {
  alert("You have selected Salad!");
} else {
  alert("Invalid choice! Please enter a number between 1 and 3.");
}






// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
