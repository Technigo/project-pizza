// Start here

// Step 1 - Welcome and introduction

alert(
  `Welcome to Gustino Pizzeria. Are you ready to order? - Click 'OK' to begin.`
)

// Ask the user's name using prompt and stores the answer in a variable.
const userName = prompt(`Please enter your name:`);
alert(`Ciao ${userName}! Click 'OK' to choose type of food.`);

// Step 2 - Food choice
// Let's prompt the user to choose a food item by entering a corresponding number.

const mealChoice = prompt(
  `What type of meal would you like to order? Enter a number:
  - 1: Margherita
  - 2: Napolitana
  - 3: Vegetariana`
);

let selectedMeal = "";

if (mealChoice === "1") {
  selectedMeal = "Margherita";
} else if (mealChoice === "2") {
  selectedMeal = "Napolitana"
} else if (mealChoice === "3") {
  selectedMeal = "Vegetariana"
} else {
  alert("You haven't ordered any food! Please select a number between 1 and 3");
  process.exit(1);
} alert (`Perfetto! One ${selectedMeal} is getting prepared for you!`);

// Step 3 - Subtype choice
// Your code goes here

// Use a conditional statement to prompt the user for a specific type of dish based on the previously selected food item.

const dessertChoice = prompt(
  `What type of dessert would you like to order? Enter a number:
  - 1: Tiramisu
  - 2: Calzone nutella
  - 3: Cannolo
  - 4: No dessert`
);

let selectedDessert = "";

if (dessertChoice === "1") {
  selectedDessert = "Tiramisu";
} else if (dessertChoice === "2") {
  selectedDessert = "Calzone nutella"
} else if (dessertChoice === "3") {
  selectedDessert = "Cannolo"
} else if (dessertChoice === "4") {
  selectedDessert = "No dessert"
} else {
  alert("You haven't ordered any dessert! Please select a number between 1 and 4");
  process.exit(1);
} alert (`Perfetto! One ${selectedMeal} is getting prepared for you anche!`);

// Step 4 - Age
// Your code goes here

let age = prompt("Is this food for a child or an adult? Type your age: ");

if (age >= 18) {
	console.log("You're a child, your meal costs you 9.5€");
} else {
	console.log("You're a adult, your meal costs 15€");
}

// Step 5 - Order confirmation
// Your code goes here

// Prompt order confirmation through numeric input and responds with a message.

const confirmation = confirm(
  `Delizioso! Your order is ${selectedMeal} with ${selectedDessert}.`
);

if (confirmation) {
    alert("Thank you for your order! Buon appetito!");
} else {
    alert("We hope to see you in the future. Have a great day!");
    process.exit(1);
}