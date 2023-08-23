// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

var username = prompt("What's your name?", "Confused Developer");

alert("Welcome! Let's order some yummy food " + username + "!");

// Step 2 - Food choice
// Your code goes here
// Menu
var choosefood = prompt("What would you like to order? 1 = Pizza, 2 = Pasta, 3 = Salad", "Type your number of choice here");

let foodName;
let numericChoosefood = parseInt(choosefood);

switch (numericChoosefood) {
  case 1:
    foodName = "Pizza"
    break;
  case 2:
    foodName = "Pasta"
    break;
  case 3:
    foodName = "Salad"
    break;
  default:
    foodName = "Invalid choice";
}

// Alert confirming menu selection
alert("Yummy! " + foodName + "! What a great choice!");


// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
