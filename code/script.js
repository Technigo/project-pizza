// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

alert(`Nice to meet you, ${prompt(`Please enter your name:`)}!`);

// Step 2 - Food choice
// Your code goes here
let foodType = prompt(`
  What type of food would you like to order?
  Enter a number:
  1: Pizza 🍕
  2: Pasta 🍝
  3: Salad 🥗
 `);

if (foodType == 1) {
  foodType = "Pizza";
} else if (foodType == 2) {
  foodType = "Pasta";
} else if (foodType == 3) {
  foodType = "Salad";
} else {
  alert(`Invalid choice. Please select a number between 1 and 3.`);
  exit(1);
}

alert(`You´ve chosen ${foodType}!`);

// Step 3 - Subtype choice
// Your code goes here
// For this iteration, the focus is on enabling the user to choose a
// subtype of the selected food type. Depending on the previously
// chosen food type (Pizza, Pasta, Salad), the program should present
// the user with subtype options specific to that food type.
// The prompt() method should be used to get the user's input.
// The program should then determine the chosen subtype and provide
// feedback using the alert() method to confirm the selection.
// Tip: Use conditional statements for this.
// const foodChoice;
// const subType = [];

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
