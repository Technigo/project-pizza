// Start here

// This version is one I only used if statement. No switch statement.

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

// convert number to a word

let foodType;

if (foodTypeNum === 1) {
  foodType = "Pizza";
} else if (foodTypeNum === 2) {
  foodType = "Salad";
} else if (foodTypeNum === 3) {
  foodType = "Pasta";
} else {
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

if (foodType === "Pizza") {
  dishNum = parseInt(
    prompt(
      `Which food would like to order? \n Enter a number:
       1 - Vegan Pizza
       2 - Vegan Cheese Pizza 
       3 - Vegetarian Pizza`
    )
  );

  if (dishNum === 1) {
    yourDish = " Vegan Pizza";
  } else if (dishNum === 2) {
    yourDish = "Vegan Cheese Pizza";
  } else if (dishNum === 3) {
    yourDish = "Vevetarian Pizza";
  } else {
    alert("Invalid choice. Please select a number between 1 and 3");
    process.exsit(1);
  }
} else if (foodType === "Salad") {
  dishNum = parseInt(
    prompt(
      `Which food would like to order? 
       Enter a number: 
       1 - Vegan Feta Salad
       2 - Italian Salad 
       3 - Grilled Vegan Cheese Salad`
    )
  );

  if (dishNum === 1) {
    yourDish = " Vegan Feta Salad";
  } else if (dishNum === 2) {
    yourDish = "Italian Salad";
  } else if (dishNum === 3) {
    yourDish = "Grilled Vegan Cheese Salad";
  } else {
    alert("Invalid choice. Please select a number between 1 and 3");
    process.exsit(1);
  }
} else if (foodType === "Pasta") {
  dishNum = parseInt(
    prompt(
      `Which food would like to order? 
      Enter a number: 
      1 - Tomato Pasta
      2 - Vegan Cream Pasta 
      3 - Ruccola and Dryed Tomato Pasta`
    )
  );

  if (dishNum === 1) {
    yourDish = " Tomato Pasta";
  } else if (dishNum === 2) {
    yourDish = "Vegan cream Pasta";
  } else if (dishNum === 3) {
    yourDish = "Ruccola and Dryed Tomato Pasta";
  } else {
    alert("Invalid choice. Please select a number between 1 and 3");
    process.exsit(1);
  }
}

// confirming which dish you want to eat

alert(`You've chosen ${yourDish}!  - Click "ok" to confirm`);

///////////////////////////////////////////////////////////////////////////////
// Step 4 - Age
// Your code goes here

let age = parseInt(prompt(`Is this dish for a child or an adult? - Enter your age.`));

let isChild;

if (age >= 12) {
  isChild = false;
} else {
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

if (isSure === 1) {
  alert("Thank you for your Order. See you again!");
} else if (isSure === 2) {
  alert("No problem! You can come back anytime when you want to order!");
} else {
  alert("Invalid choise. Please enter a number 1 or 2.");
  process.exsit(1);
}
