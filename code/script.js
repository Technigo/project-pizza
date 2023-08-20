// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);
let message_name = prompt(`Please enter your name:`);
alert(`Nice to meet you ${message_name}`);
// Step 2 - Food choice
// Your code goes here
let menu = prompt(
  `What type of food would you like to order? \n Enter a number: \n 1- Pizza \n 2- Pasta \n 3- Salad`
);
let food_type;
switch (menu) {
  case "1":
    food_type = "Pizza";
    break;
  case "2":
    food_type = "Pasta";
    break;
  case "3":
    food_type = "Salad";
    break;

  default:
    food_type = "invalid food type";
    break;
}
alert(`You've choose ${food_type}!`);

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
