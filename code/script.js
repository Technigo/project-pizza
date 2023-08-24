// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
let userName = prompt("What's your name?");
alert(`Hi ${userName}!`);

// Step 2 - Food choice
// Your code goes here

let foodChoice = prompt(
  `Hello ${userName}, what would you like to order?\n1. Pizza\n2. Pasta\n3. Salad`
);
let chosenFood;
switch (foodChoice) {
  case "1":
    chosenFood = "Pizza";
    break;
  case "2":
    chosenFood = "Pasta";
    break;
  case "3":
    chosenFood = "Salad";
    break;
  default:
    chosenFood = "Unknown";
}
alert(`You've chosen ${chosenFood}.`);




// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
