// Start here

// Step 1 - Welcome and introduction
// Your code goes here

alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

let userName = prompt("What's your name?");

if (userName.length === 0) {
  alert(`Hello, stranger!`);
} else {
  alert(`Hi, ${userName}!`);
}

// Step 2 - Food choice
// Your code goes here
let userInput = prompt(
  `What type of food would you like to order?Enter a number:
     1 - Pizza
     2 - Pasta
     3 - Salad`
);

let orderNumber = parseInt(userInput);
let mealType;

switch (orderNumber) {
  case 1:
    mealType = "Pizza";
    break;

  case 2:
    mealType = "Pasta";
    break;

  case 3:
    mealType = "Salad";
    break;

  default:
    alert("Invaild input. Please choose a number between 1-3.");
    break;
}

alert(`You've chosen ${mealType}!`);

// Step 3 - Subtype choice
// Your code goes here
let subInput;
let subMealType;

switch (orderNumber) {
  case 1:
    subInput = prompt(
      `Select a Pizza type: 
      Enter a number:
      1 - Napolitana
      2 - Hawaian
      3 - Pepperoni`
    );

    let pizzaType = parseInt(subInput);

    switch (pizzaType) {
      case 1:
        subMealType = "Napolitana";
        break;

      case 2:
        subMealType = "Hawaian";
        break;

      case 3:
        subMealType = "Pepperoni";
        break;

      default:
        alert("Invaild pizza type choice.");
        break;
    }

    break;

  case 2:
    subInput = prompt(
      `Select a Pasta type: 
      Enter a number:
      1 - Spaghetti Carbonara
      2 - Fettuccine Alfredo
      3 - Cheesy Tortellini`
    );

    let pastaType = parseInt(subInput);

    switch (pastaType) {
      case 1:
        subMealType = "Spaghetti Carbonara";
        break;

      case 2:
        subMealType = "Fettuccine Alfredo";
        break;

      case 3:
        subMealType = "Cheesy Tortellini";
        break;

      default:
        alert("Invaild pasta type choice.");
        break;
    }

    break;

  case 3:
    subInput = prompt(
      `Select a Salad type: 
      Enter a number:
      1 - Caesar Salad
      2 - Caprese Salad
      3 - Greek Salad`
    );

    let saladType = parseInt(subInput);

    switch (saladType) {
      case 1:
        subMealType = "Caesar Salad";
        break;

      case 2:
        subMealType = "Caprese Salad";
        break;

      case 3:
        subMealType = "Greek Salad";
        break;

      default:
        alert("Invaild salad type choice.");
        break;
    }

    break;

  default:
    alert(`Hmm..something seems to be wrong. Please choose again!`);
    break;
}

alert(`You've chosen ${subMealType}!`);

// Step 4 - Age
// Your code goes here

let userAge = prompt("Is this food for a child or an adult? Type your age:");

let ageNumber = parent(userAge);

const childPrice = 10;
const adultPrice = 15;

let userConfirm;

switch (true) {
  case ageNumber > 0 && ageNumber <= 17:
    userConfirm = prompt(
      `One child sized ${subMealType} ${mealType} will be prepared for you. That'll be ${childPrice}€. Are you sure you want to order this?
      Enter a number to confirm:
      1 - Yes 
      2 - No`
    );
    break;

  case ageNumber > 17:
    userConfirm = prompt(
      `One adult sized ${subMealType} ${mealType} will be prepared for you. That'll be ${adultPrice}€. Are you sure you want to order this? 
      Enter a number to confirm: 
      1 - Yes 
      2 - No`
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
