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
  default:
    alert("Invalid choice. Please select a number between 1 and 3");
}

// confirming what type of food you want to eat

alert(`Would you want to eat ${foodType}? Click "ok" to confirm`);

// Step 3 - Subtype choice
// Your code goes here
let dishNum;
let yourDish;
if (foodType === "Pizza") {
  dishNum = prompt(
    "Which food would like to order? \n Enter a number: \n 1 - Vegan Pizza\n 2 - Vegan Cheese Pizza \n 3 - Vegetarian Pizza"
  );
  dishNum = Number(dishNum);
  switch (dishNum) {
    case 1:
      yourDish = " Vegan Pizza";
      break;
    case 2:
      yourDish = "Vegan Cheese Pizza";
      break;
    case 3:
      yourDish = "Vevetarian Pizza";
      break;
    default:
      alert("Invalid choice. Please select a number between 1 and 3");
  }
} else if (foodType === "Salad") {
  dishNum = prompt(
    "Which food would like to order? \n Enter a number: \n 1 - Vegan Feta Salad\n 2 - Italian Salad \n 3 - Grilled Vegan Cheese Salad"
  );

  dishNum = Number(dishNum);
  switch (dishNum) {
    case 1:
      yourDish = " Vegan Feta Salad";
      break;
    case 2:
      yourDish = "Italian Salad";
      break;
    case 3:
      yourDish = "Grilled Vegan Cheese Salad";
      break;
    default:
      alert("Invalid choice. Please select a number between 1 and 3");
  }
} else if (foodType === "Pasta") {
  dishNum = prompt(
    "Which food would like to order? \n Enter a number: \n 1 - Tomato Pasta\n 2 - Vegan Cream Pasta \n 3 - Ruccola and Dryed Tomato Pasta"
  );
  dishNum = Number(dishNum);
  switch (dishNum) {
    case 1:
      yourDish = " Tomato Pasta";
      break;
    case 2:
      yourDish = "Vegan cream Pasta";
      break;
    case 3:
      yourDish = "Ruccola and Dryed Tomato Pasta";
      break;
    default:
      alert("Invalid choice. Please select a number between 1 and 3");
  }
}

alert(`You've chosen ${yourDish}!  - Click "ok" to confirm`);

// Step 4 - Age
// Your code goes here

let age = prompt("Is this dish for a child or an adult? - Enter your age.");

age = Number(age);

let isChild;

if (age >= 12) {
  isChild = false;
} else {
  isChild = true;
}

let isSure = prompt(
  `One ${isChild ? "child" : "adult"} sized ${yourDish} will be prepared for you. That'll be ${
    isChild ? 10 : 15
  } euro. Are you sure to order this? \n Enter a number to confirm: \n 1 - Yes\n 2 - No`
);

isSure = Number(isSure);

switch (isSure) {
  case 1:
    alert("Thank you for your Order. See you again!");
    break;
  case 2:
    alert("No problem! You can come back anytime when you want to order!");
    break;
  default:
    alert("Invalid choise. Please enter a number 1 or 2.");
}
// Step 5 - Order confirmation
// Your code goes here
