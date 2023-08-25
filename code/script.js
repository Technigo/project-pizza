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

// convert the input to a number
const pizzaNumber = parseInt(pizzaChoice);

alert (
  `Great you chose nr.${pizzaChoice}!`);

// Step 3 - Subtype choice
let selectedPizza = "";

if (pizzaChoice === "1") {
  selectedPizza = "Margarita";
} 
else if (pizzaChoice ==="2") {
  selectedPizza = "kebab";
} 
else if (pizzaChoice ==="3") {
  selectedPizza = "Fungi";
} 
else if (pizzaChoice ==="4") {
  selectedPizza = "Surprise";
} 
else {
  alert ("invalid pizzaChoice, Please select a valid Number.");
  Process.exit(1);
}

alert (
  `Fantastic you have chosen ${pizzaChoice}!`);

// Step 4 - Age
let age = prompt(`Pizza for Adult or child? Enter age:`)

// Convert the input to a number
age = parseInt(age);

// Check for age
if (age >= 18) {
  alert("Big pizza for an Adult incoming!")
} else {
  alert ("A kids pizza for you, sorry... it's still good though!")
}

// Step 5 - Order confirmation
if (selectedPizza[pizzaNumber]) {
  alert (`Great, you chose ${selectedPizza[pizzaNumber]}`)
    let confirmed = confirm("You have selected: " + selectedPizza + ". Do you want to confirm your order?");
    
    if (confirmed) {
        alert("Thank you for your order! Your " + selectedPizza + " will be prepared in 15 minutes.");
    } else {
        alert("Thank you for considering us. Have a great day, boss!");
    }
} else {
    alert("Invalid choice. Please select one of our selected pizzas.");
    process.exit(1);
}