// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

alert(`Nice to meet you, ${prompt(`Please enter your name:`)}!`);

// Step 2 - Food choice
// Ask the user to choose a type of food
const foodSelection = prompt(`
  What type of food would you like to order?
  Enter a number:
  1: Pizza 🍕
  2: Pasta 🍝
  3: Salad 🥗
 `);

// Initialize a variable to store the selected food
let foodSelected = "";

// Determine the type of food based on the user's choice
if (foodSelection === "1") {
  foodSelected = "Pizza";
} else if (foodSelection === "2") {
  foodSelected = "Pasta";
} else if (foodSelection === "3") {
  foodSelected = "Salad";
} else {
  alert(`Invalid choice. Please select a number between 1 and 3.`);
  exit(1);
}

// Display the selected food
alert(`You´ve chosen ${foodSelected}!`);

// Step 3 - Subtype choice
// Ask the user to select a subtype of food based on the chosen food.
let foodTypeSelection = "";
let foodTypeNames = [];

switch (foodSelected) {
  case "Pizza":
    foodTypeSelection = prompt(
      `What type of pizza would you like to order?
        Enter a number:
        1: Napolitana 🌿
        2: Hawaiian 🍍
        3: Pepperoni 🌶️`
    );
    foodTypeNames = ["Napolitana", "Hawaiian", "Pepperoni"];
    break;

  case "Pasta":
    foodTypeSelection = prompt(
      `What type of pasta would you like to order?
        Enter a number:
        1: Spaghetti Carbonara 🌿
        2: Fettuccine Alfredo 🇮🇹
        3: Cheesy Tortellini  🧀`
    );
    foodTypeNames = [
      "Spaghetti Carbonara",
      "Fettuccine Alfredo",
      "Cheesy Tortellini",
    ];
    break;

  case "Salad":
    foodTypeSelection = prompt(
      `What type of salad would you like to order?
      Enter a number:
      1: Ceaser Salad 🥬
      2: Carprese Salad 🍅
      3: Greek Salad 🇬🇷 `
    );
    foodTypeNames = ["Ceaser Salad", "Carprese Salad", "Greek Salad"];
    break;

  default:
    alert(`Invalid ${foodSelected} type choice.`);
    exit(1);
}

// Determine the type of food based on the user's choice
if (foodTypeSelection === "1") {
  alert(`You've chosen ${foodTypeNames[0]} ${foodSelected}!`);
} else if (foodTypeSelection === "2") {
  alert(`You've chosen ${foodTypeNames[1]} ${foodSelected}!`);
} else if (foodTypeSelection === "3") {
  alert(`You've chosen ${foodTypeNames[2]} ${foodSelected}!`);
} else {
  alert(`Invalid choice. Please select a number between 1 and 3.`);
  exit(1);
}

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
