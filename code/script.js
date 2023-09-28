// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

alert(`Nice to meet you, ${prompt(`Please enter your name:`)}!`);

// Step 2 - Food choice
// Your code goes here
const foodType = prompt(`
  What type of food would you like to order?
  Enter a number:
  1: Pizza 🍕
  2: Pasta 🍝
  3: Salad 🥗
 `);

if (foodType == 1) {
  alert(`You´ve chosen Pizza!`);
} else if (foodType == 2) {
  alert(`You´ve chosen Pasta!`);
} else if (foodType == 3) {
  alert(`You´ve chosen Salad!`);
} else {
  alert(`Invalid choice. Please select a number between 1 and 3.`);
}

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
