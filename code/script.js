// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

let userName = prompt(
  'Please type your name.'
);

alert(
  `Welcome ${userName}!`
);

// Step 2 - Food choice
let foodChoice = prompt(
  `What type of food would you like to order?
  Please enter a number:

  1. Pizza
  2. Salad
  3. Kebab`
);

let foodName = 'Pizza';

if (foodChoice === 2) {
  foodName = 'Salad'
}

if (foodChoice === 3) {
  foodName = 'Kebab'
};

alert(`You have chosen ${foodName}`);


// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
