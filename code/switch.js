// Start here

const invalidChoise = (selectionOption) => {
  alert(`Invalid choice. Please ${selectionOption}`);
  // process.exsit(1);
};

const selectNumOneToThree = "select a number between 1 and 3";
const selectNumOneAndTwo = "select a number 1 or 2";
const selectAge = "type your age";

// Step 1 - Welcome and introduction
// Your code goes here

alert(`Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`);
const userName = prompt("What is your name?");

alert(`Wellcome to Technigo pizzaria, ${userName}`);

///////////////////////////////////////////////////////////////////////////////
// Step 2 - Food choice
// Your code goes here

// Here you can  ask a question in prompt. parameter is an object which contains key words, question and choiceArr.
// I use this in step 2 and 3.

const chooseOption = (obj) => {
  const choice = obj.choiceArr.map((el, index) => "  " + (index + 1) + " - " + el + "\n");
  const answerNum = parseInt(
    prompt(
      `${obj.question}
Enter a number:
${choice.join("")}`
    )
  );

  return answerNum;
};

// This is a object for a prompt asking what type of food you want to eat. Used in chooseOption function
const foodTypeChoiceObj = {
  question: "What type of food would you like to eat?",
  choiceArr: ["Pizza", "Salad", "Pasta"],
};

let foodTypeNum = chooseOption(foodTypeChoiceObj);
let foodType;

while (foodTypeNum !== 1 && foodTypeNum !== 2 && foodTypeNum !== 3) {
  invalidChoise(selectNumOneToThree);
  foodTypeNum = chooseOption(foodTypeChoiceObj);
}

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

alert(`Would you want to eat ${foodType}? Click "ok" to confirm`);

///////////////////////////////////////////////////////////////////////////////
// Step 3 - Subtype choice
// Your code goes here

let dishNum;
let yourDish;
let dishChoiceObj;

const loopCorrectDishNum = () => {
  while (dishNum !== 1 && dishNum !== 2 && dishNum !== 3) {
    invalidChoise(selectNumOneToThree);
    dishNum = chooseOption(dishChoiceObj);
  }
};

if (foodType === "Pizza") {
  dishChoiceObj = {
    question: "Which food would like to order? ",
    choiceArr: ["Vegan Pizza", "Vegan Cheese Pizza", "Vegetarian Pizza"],
  };

  dishNum = chooseOption(dishChoiceObj);
  loopCorrectDishNum();

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
  }
} else if (foodType === "Salad") {
  dishChoiceObj = {
    question: "Which food would like to order? ",
    choiceArr: ["Vegan Feta Salad", "talian Salad ", "Grilled Vegan Cheese Salad`"],
  };

  dishNum = chooseOption(dishChoiceObj);
  loopCorrectDishNum();

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
  }
} else if (foodType === "Pasta") {
  dishChoiceObj = {
    question: "Which food would like to order? ",
    choiceArr: ["Tomato Pasta", "Vegan Cream Pasta ", "Ruccola and Dryed Tomato Pasta`"],
  };

  dishNum = chooseOption(dishChoiceObj);
  loopCorrectDishNum();

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
  }
}

// confirming which dish you want to eat

alert(`You've chosen ${yourDish}!  - Click "ok" to confirm`);

///////////////////////////////////////////////////////////////////////////////
// Step 4 - Age
// Your code goes here

let age = parseInt(prompt(`Is this dish for a child or an adult? - Enter your age.`));

let isChild;

// over 16 years order an adult sized dish
while (age <= 0 && age > 130) {
  invalidChoise(selectAge);
  age = parseInt(prompt(`Is this dish for a child or an adult? - Enter your age.`));
}

age >= 16 ? (isChild = false) : (isChild = true);

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
    invalidChoise(selectNumOneAndTwo);
}
