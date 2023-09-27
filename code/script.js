// Start here

const pizzeriaName = "Naima's Pizzeria";
const pizza = "1";
const pasta = "2";
const salad = "3";

// Step 1 - Welcome and introduction
// Your code goes here
alert(`Welcome to ${pizzeriaName}. Ready to Start? - Click 'OK' to begin.`);
const customerName = prompt("Please enter your name.");
alert(`Nice to meet you, ${customerName}!`);

// Step 2 - Food choice
// Your code goes here
const foodChoice = prompt(
  `What would like to order from the menu below? Please enter only a number. 
  1 - Pizza 
  2 - Pasta 
  3 - Salad`
);

if (foodChoice === pizza) {
  alert(`Great! You have chosen pizza.`);
} else if (foodChoice === pasta) {
  alert(`Great! You have chosen pasta`);
} else if (foodChoice === salad) {
  alert(`Great you have chosen salad`);
} else {
  alert("Invalid number! Please try again.");
}

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
