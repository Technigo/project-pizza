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
let chosenFood;
if (isNaN(choice) || choice < 1 || choice > foodChoices.length) {
  alert("Invalid choice. Please enter a number between 1 and " + foodChoices.length);
} else {
  chosenFood = foodChoices[choice - 1];
  alert("You chose " + chosenFood);
}


// Step 3 - Subtype choice
// Your code goes here
// Prompt for subtype based on chosen food
switch (chosenFood) {
  case "Pizza":
    let pizzaTypes = ["Pepperoni", "Margherita", "Hawaiian"];
    let pizzaChoice = prompt("Choose your pizza type by entering a number (1, 2 or 3):\n1. Pepperoni\n2. Margherita\n3. Hawaiian");
    // ... handle pizza subtype choice
    break;
  case "Pasta":
    let pastaTypes = ["Spaghetti", "Mac and Cheese", "Lasagna"];
    let pastaChoice = prompt("Choose your pasta type by entering a number (1, 2 or 3):\n1. Spaghetti\n2. Mac and Cheese\n3. Lasagna");
    // ... handle pasta subtype choice
    break;
  case "Salad":
    let saladTypes = ["Caesar", "Greek", "Cobb"];
    let saladChoice = prompt("Choose your salad type by entering a number (1, 2 or 3):\n1. Caesar\n2. Greek\n3. Cobb");
    // ... handle salad subtype choice
    break;
  default:
    alert("Error: Invalid food choice.");
}


// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
