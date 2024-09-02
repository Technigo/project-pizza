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

let choice = prompt("Choose your food: Pizza, Pasta, or Salad");

// Convert the choice to lowercase for case-insensitive comparison
choice = choice.toLowerCase();

switch (choice) {
  case "pizza":
    alert("You chose Pizza");
    break;
  case "pasta":
    alert("You chose Pasta");
    break;
  case "salad":
    alert("You chose Salad");
    break;
  default:
    alert("Invalid choice. Please enter Pizza, Pasta, or Salad.");
}
// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
