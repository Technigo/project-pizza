// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

// Store name in variable and greet new user
const username = prompt(`Please enter your name:`);

alert(`Nice to meet you, ${username}!`);

// Step 2 - Food choice
let foodChoice = prompt(`
  What type of food would you like to order?

  Enter a number:
  1. Pizza
  2. Pasta
  3. Salad

`);

if (foodChoice === "1") {
  foodChoice = "Pizza";
} else if (foodChoice === "2") {
  foodChoice = "Pasta";
} else if (foodChoice === "3") {
  foodChoice = "Salad";
} else {
  alert(`Invalid choice. Please select a number between 1 and 3.`);
}

alert(`You've chosen ${foodChoice}!`);

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
