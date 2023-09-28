// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

alert(`Nice to meet you, ${prompt(`Please enter your name:`)}!`);

// Step 2 - Food choice
// Your code goes here
const foodSelection = prompt(`
  What type of food would you like to order?
  Enter a number:
  1: Pizza 🍕
  2: Pasta 🍝
  3: Salad 🥗
 `);

let foodSelected = "";

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

alert(`You´ve chosen ${foodSelected}!`);
// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
