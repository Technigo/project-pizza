// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);
let userName = prompt("What's your name?");
alert(`Hi, ${userName}!`);

// Step 2 - Food choice
// Your code goes here
let userInput = prompt(
  "What type of food would you like to order?\n Enter a number:\n 1 - Pizza\n 2 - Pasta\n 3 - Salad"
);

let orderNumber = Number(userInput);
let mealType;

switch (orderNumber) {
  case 1:
    mealType = "Pizza";
    alert("You've chosen Pizza!");
    break;

  case 2:
    mealType = "Pasta";
    alert("You've chosen Pasta!");
    break;

  case 3:
    mealType = "Salad";
    alert("You've chosen Salad!");
    break;

  default:
    alert("Invaild input. Please choose a number between 1-3.");
    break;
}

// Step 3 - Subtype choice
// Your code goes here
let subInput;
let subMealType;

switch (orderNumber) {
  case 1:
    subInput = prompt(
      "Select a Pizza type: \n Enter a number:\n 1 - Napolitana\n 2 - Hawaian\n 3 - Pepperoni"
    );

    let pizzaType = Number(subInput);

    switch (pizzaType) {
      case 1:
        subMealType = "Napolitana";
        alert("You've chosen Napolitana!");
        break;

      case 2:
        subMealType = "Hawaian";
        alert("You've chosen Hawaian!");
        break;

      case 3:
        subMealType = "Pepperoni";
        alert("You've chosen Pepperoni!");
        break;

      default:
        alert("Invaild pizza type choice.");
        break;
    }
    break;

  case 2:
    subInput = prompt(
      "Select a Pasta type: \n Enter a number:\n 1 - Spaghetti Carbonara\n 2 - Fettuccine Alfredo\n 3 - Cheesy Tortellini"
    );

    let pastaType = Number(subInput);

    switch (pastaType) {
      case 1:
        subMealType = "Spaghetti Carbonara";
        alert("You've chosen Spaghetti Carbonara!");
        break;

      case 2:
        subMealType = "Fettuccine Alfredo";
        alert("You've chosen Fettuccine Alfredo!");
        break;

      case 3:
        subMealType = "Cheesy Tortellini";
        alert("You've chosen Cheesy Tortellini!");
        break;

      default:
        alert("Invaild pasta type choice.");
        break;
    }
    break;

  case 3:
    subInput = prompt(
      "Select a Salad type: \n Enter a number:\n 1 - Caesar Salad\n 2 - Caprese Salad\n 3 - Greek Salad"
    );

    let saladType = Number(subInput);

    switch (saladType) {
      case 1:
        subMealType = "Caesar Salad";
        alert("You've chosen Caesar Salad!");
        break;

      case 2:
        subMealType = "Caprese Salad";
        alert("You've chosen Caprese Salad!");
        break;

      case 3:
        subMealType = "Greek Salad";
        alert("You've chosen Greek Salad!");
        break;

      default:
        alert("Invaild salad type choice.");
        break;
    }
    break;

  default:
    alert("Invaild input. Please try again.");
    break;
}

// Step 4 - Age
// Your code goes here

let userAge = prompt("Is this food for a child or an adult? Type your age:");

let ageNumber = Number(userAge);
let userConfirm;

switch (true) {
  case ageNumber > 0 && ageNumber <= 17:
    userConfirm = prompt(
      `One child sized ${subMealType} ${mealType} will be prepared for you. That'll be 10€. Are you sure you want to order this?\n Enter a number to confirm:\n 1 - Yes\n 2 - No`
    );
    break;

  case ageNumber > 17:
    userConfirm = prompt(
      `One adult sized ${subMealType} ${mealType} will be prepared for you. That'll be 15€. Are you sure you want to order this?\n Enter a number to confirm:\n 1 - Yes\n 2 - No`
    );
    break;

  default:
    alert("Invalid age choice. Please type a number.");
    break;
}

// Step 5 - Order confirmation
// Your code goes here

let userConfirmResult = Number(userConfirm);

switch (userConfirmResult) {
  case 1:
    alert(
      "Thank you for your order! Your delicious meal will be prepared. See you soon!"
    );
    break;

  case 2:
    alert("Alright! Thank you for visiting. See you next time!");
    break;

  default:
    alert("Invalid number. Please enter number 1 or 2.");
    break;
}
