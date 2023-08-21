// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
let person = prompt("Please enter you name");

if (person != null) {
  alert("Hello " + person + "!" + " that is a really cool name!");
}

// Step 2 - Food choice
let foodOption = prompt("What would you like to order? \n 1 Pasta \n 2 Pizza \n 3 Meat");
if (foodOption == 1) {
  alert("Pizza is a great choise!");
} else if (foodOption == 2) {
  alert("Amazing! Pasta here is delicious!");
} else if (foodOption == 3) {
  alert("wow, meat, that is a great choise!");
} else {
  alert("Oh! are you not hungry? Please choose one of the options!")
}

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
