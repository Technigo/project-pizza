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

// Converts the input to a integer.
// const pizzaNumber = parseInt(pizzaChoice);

let selectedPizza = ""

switch (pizzaChoice) {
  case "1": selectedPizza = "Margarita"; break;
  case "2": selectedPizza = "Kebab"; break;
  case "3": selectedPizza = "Fungi"; break;
  case "4": selectedPizza = "Surprise"; break;
  default: break;
}

alert (`Great you chose ${selectedPizza}!`);

// Step 3 - Subtype choice
const pizzaSize = prompt(`Please select your size:
  1 - Small
  2 - Medium
  3 - Large
  4 - Extra Large
  Please enter the number of your choice:`);

let selectedPizzaSize = "";

switch (pizzaSize) {
  case "1": selectedPizzaSize = "Small"; break;
  case "2": selectedPizzaSize = "Medium"; break;
  case "3": selectedPizzaSize = "Large"; break;
  case "4": selectedPizzaSize = "Extra Large"; break;
  default: break;
}

alert (`Fantastic you have chosen a ${selectedPizzaSize.toLowerCase()} ${selectedPizza}!`);

// let selectedPizza = "";

// if (pizzaChoice === "1") {
//   selectedPizza = "Margarita";
// } 
// else if (pizzaChoice ==="2") {
//   selectedPizza = "kebab";
// } 
// else if (pizzaChoice ==="3") {
//   selectedPizza = "Fungi";
// } 
// else if (pizzaChoice ==="4") {
//   selectedPizza = "Surprise";
// } 
// else {
//   alert ("invalid pizzaChoice, Please select a valid Number.");
//   Process.exit(1);
// }

// Step 4 - Age
let age = prompt(`Pizza for Adult or child? Enter age:`)

// Convert the input to a number
age = parseInt(age);

// Check for age
if (age >= 18) {
  alert("Big pizza for an Adult incoming: £ 15!")
} else {
  alert ("A kids pizza for you, sorry... it's cheaper though: £ 10!")
}

// Step 5 - Order confirmation
let confirmed = confirm("You have selected: " + selectedPizza + ". Do you want to confirm your order?");

if (confirmed) {
  alert("Thank you for your order! Your " + selectedPizza + " will be prepared in 15 minutes.");
} 
else {
  alert("Thank you for considering us. Have a great day, boss!");
}
process.exit(1);
