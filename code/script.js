// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

let name = prompt("What's your name?");

if (name != null) {
  alert("Welcome " + name + "!")
  };

// Step 2 - Food choice
let foodChoice = prompt(
  `What would you like to eat today? Choose a number
  1 - Pizza
  2 - Pasta
  3 - Salad`
);

switch (foodChoice) {

    case "1":
        foodChoice = alert('You chose Pizza. Good choice!');
        break;
    case "2":
        foodChoice = alert('You chose Pasta. Good choice!');
        break;
    case "3":
        foodChoice = alert('You chose Salad. Good choice!');
    default:
        foodChoice = 'not found';
        break;
}

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
