// Start here

// This version is one I only used switch statement. No if statement.

// Step 1 - Welcome and introduction
// Your code goes here

alert(`Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`);
const userName = prompt("What is your name?");

alert(`Wellcome to Technigo pizzaria, ${userName}`);

///////////////////////////////////////////////////////////////////////////////
// Step 2 - Food choice
// Your code goes here

const foodTypeNum = parseInt(
  prompt(
    `What type of food would you like to eat?
   Enter a number:
    1 - Pizza 
    2 - Salad 
    3 - Pasta`
  )
);

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
    process.exsit(1);
}

// confirming what type of food you want to eat

alert(`Would you want to eat ${foodType}? Click "ok" to confirm`);

///////////////////////////////////////////////////////////////////////////////
// Step 3 - Subtype choice
// Your code goes here

let dishNum;
let yourDish;

switch (foodType) {
  // Asking what kind of Pizza
  case "Pizza":
    dishNum = parseInt(
      prompt(
        `Which food would like to order? \n Enter a number:
               1 - Vegan Pizza
               2 - Vegan Cheese Pizza 
               3 - Vegetarian Pizza`
      )
    );

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
        process.exsit(1);
    }
    break;

  // Asking what kind of Salad
  case "Salad":
    dishNum = parseInt(
      prompt(
        `Which food would like to order? 
               Enter a number: 
               1 - Vegan Feta Salad
               2 - Italian Salad 
               3 - Grilled Vegan Cheese Salad`
      )
    );

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
        process.exsit(1);
    }
    break;
  // Asking what kind of Pasta

  case "Pasta":
    dishNum = parseInt(
      prompt(
        `Which food would like to order? 
              Enter a number: 
              1 - Tomato Pasta
              2 - Vegan Cream Pasta 
              3 - Ruccola and Dryed Tomato Pasta`
      )
    );

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
        process.exsit(1);
    }
    break;
}

// confirming which dish you want to eat

alert(`You've chosen ${yourDish}!  - Click "ok" to confirm`);

///////////////////////////////////////////////////////////////////////////////
// Step 4 - Age
// Your code goes here

let age = parseInt(prompt(`Is this dish for a child or an adult? - Enter your age.`));

let isChild;

switch (true) {
  case age >= 12:
    isChild = false;
    break;
  default:
    isChild = true;
}

///////////////////////////////////////////////////////////////////////////////
// Step 5 - Order confirmation
// Your code goes here

let isSure = parseInt(
  prompt(
    `One ${isChild ? "child" : "adult"} sized ${yourDish} will be prepared for you. That'll be ${
      isChild ? 10 : 15
    } euro. Are you sure to order this?
   Enter a number to confirm: 
  1 - Yes
  2 - No`
  )
);

switch (isSure) {
  case 1:
    alert("Thank you for your Order. See you again!");
    break;
  case 2:
    alert("No problem! You can come back anytime when you want to order!");
    break;
  default:
    alert("Invalid choise. Please enter a number 1 or 2.");
    process.exsit(1);
}
