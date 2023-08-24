// Start here

// Step 1 - Welcome and introduction

alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`);

// Enter username
const userName = prompt("Please enter your name");

alert (
  `Hello, ${userName}! Time to order som pizza.`);

// Step 2 - Food choice
const pizzaChoice = prompt(`Please select your pizza:
  1 - Margarita
  2 - Kebab
  3 - Fungi
  4 - Surprise
  Please enter the number of your choice:`);

alert (
  `Great you choose, ${pizzaChoice}! Now for the size.`);

// Step 3 - Subtype choice
let selectedPizza = "";

if (pizzaChoice === "1") {
  selectedPizza = "Margarita";
  
  } else if (pizzaChoice ==="2") {
  selectedPizza = "kebab";

  } else if (pizzaChoice ==="3") {
  selectedPizza = "Fungi";

  } else if (pizzaChoice ==="4") {
  selectedPizza = "Surprise";

  } else {
  alert ("invalid pizzaChoice, Please select a valid Number.");
  ProcessingInstruction.exit(1);
}

alert (`Fantastic you have choosen ${selectedPizza}!`);

// Step 4 - Age
const age = prompt(`Pizza for Adult of child`)

// Step 5 - Order confirmation
// Your code goes here
