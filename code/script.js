// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(`Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`);
let name = prompt("What is your name?");
alert(`Wellcome to Technigo pizzaria, ${name}`);

// Step 2 - Food choice
// Your code goes here

let foodTypeNum = prompt(
  "What type of food would you like to eat? \n Enter a number:\n 1 - Pizza \n 2 - Salad \n 3 - Pasta"
);

foodTypeNum = Number(foodTypeNum);

let foodType;
switch (foodTypeNum) {
  case 1:
    foodType = "Pizza";
    break;
  case 2:
    foodType = "Salad";
    break;
  case 3:
    foodType = "Pasta";
    break;
}

// confirming what type of food you want to eat

alert(`Would you want to eat ${foodType}? Click enter to confirm`);

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
