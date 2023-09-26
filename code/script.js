// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);
//alert("Please enter your name here:");
let Name = prompt("Enter your name: ");
alert("hi " + Name + "!");
// Step 2 - Food choice
// Your code goes here
let choice = prompt(
  "Please choose your food:\n Enter a number (Pizza = 1, Pasta = 2, Salad = 3):"
);
let food;
switch (choice) {
  case "1":
    food = "Pizza";
    break;
  case "2":
    food = "Pasta";
    break;
  case "3":
    food = "Salad";
    break;
  default:
    food = "Invalid choice";
}
alert("You selected: " + food);

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
