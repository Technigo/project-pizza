// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let userName = prompt("What is your name?");
alert("Hi, " + userName + "!");

// Step 2 - Food choice
// Your code goes here
let foodChoices = ["Pizza", "Pasta", "Salad"];

let choice = prompt("Choose your food by entering a number (1, 2 or 3):\n1. Pizza\n2. Pasta\n3. Salad");

// Convert the choice to a number
choice = parseInt(choice);

// Check if the choice is valid and within the range of food choices
if (isNaN(choice) || choice < 1 || choice > foodChoices.length) {
  alert("Invalid choice. Please enter a number between 1 and " + foodChoices.length);
} else {
  let chosenFood = foodChoices[choice - 1];
  alert("You chose " + chosenFood);
}

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
