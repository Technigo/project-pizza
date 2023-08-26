////////////////////////////////////////////////////////////////////////////////
// Functions and Variables

// This is a function to alert when a user made an invalid choice in prompt.
// You can use selectNumOnetoThree in step 2 and 3 as a parameter.
const selectNumOneToThree = "select a number between 1 and 3";

const invalidChoise = (selectionOption) => {
  alert(`Invalid choice. Please ${selectionOption}`);
};

// Here you can  ask a question in prompt. parameter is an object which contains question and choiceArr as its key words.
//  use this in step 2 and 3.

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

// function to evaluate three conditions. Use it in step 2 and 3.

const evaluateThreeConditions = (checker, obj) => {
  let answer;
  switch (checker) {
    case 1:
      answer = obj.choiceArr[0];
      return answer;

    case 2:
      answer = obj.choiceArr[1];
      return answer;
    case 3:
      answer = obj.choiceArr[2];
      return answer;
  }
};
// Validating if a user put a correct unmber( 1, 2 or 3) if not, prompt show up again. This is for step 3. Used it in if("Pizza"/"Pasta"/"Salad")
let dishNum;
let yourDish;
let dishChoiceObj;

const loopCorrectDishNum = () => {
  while (dishNum !== 1 && dishNum !== 2 && dishNum !== 3) {
    invalidChoise(selectNumOneToThree);
    dishNum = chooseOption(dishChoiceObj);
  }
};

///////////////////////////////////////////////////////////////////////////////
// Step 1 - Welcome and introduction
// Your code goes here

alert(`Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`);
let userName = prompt("What is your nick name?");

// Validatibg if a user type something.
while (!userName) {
  invalidChoise("type your name");
  userName = prompt("What is your nick name?");
}

// Welcoming a user.
const welcome = alert(`Welcome to Technigo Pizzaria, ${userName}`);

///////////////////////////////////////////////////////////////////////////////
// Step 2 - Food choice
// Your code goes here

// This is a object for chooseOption function. It will should what kind of food you want to eat in prompt.
const foodTypeChoiceObj = {
  question: "What type of food would you like to eat?",
  choiceArr: ["Pizza", "Salad", "Pasta"],
};

// I made a variable for revolking a chooseOption function.
let foodTypeNum = chooseOption(foodTypeChoiceObj);

// Validating if a user put a correct unmber( 1, 2 or 3) if not, prompt show up again.
while (foodTypeNum !== 1 && foodTypeNum !== 2 && foodTypeNum !== 3) {
  invalidChoise(selectNumOneToThree);
  foodTypeNum = chooseOption(foodTypeChoiceObj);
}

// Here I am checking which food you want to eat from a number that a user chose in chooseOption function
const foodType = evaluateThreeConditions(foodTypeNum, foodTypeChoiceObj);

// confirming what type of food you want to eat
alert(`Would you want to eat ${foodType}? Click "ok" to confirm`);

///////////////////////////////////////////////////////////////////////////////
// Step 3 - Subtype choice
// Your code goes here

//
if (foodType === "Pizza") {
  // Pizza type object for chooseOption function
  dishChoiceObj = {
    question: "Which food would like to order? ",
    choiceArr: ["Vegan Pizza", "Vegan Cheese Pizza", "Vegetarian Pizza"],
  };

  // Show a prompt to ask which pizza.
  dishNum = chooseOption(dishChoiceObj);
  // validating and ask again when it is not valid
  loopCorrectDishNum();

  yourDish = evaluateThreeConditions(dishNum, dishChoiceObj);
} else if (foodType === "Salad") {
  // Salad type object for chooseOption function
  dishChoiceObj = {
    question: "Which food would like to order? ",
    choiceArr: ["Vegan Feta Salad", "talian Salad ", "Grilled Vegan Cheese Salad"],
  };

  dishNum = chooseOption(dishChoiceObj);
  // validating and ask again when it is not valid
  loopCorrectDishNum();

  yourDish = evaluateThreeConditions(dishNum, dishChoiceObj);
} else if (foodType === "Pasta") {
  // Pasta type object for chooseOption function
  dishChoiceObj = {
    question: "Which food would like to order? ",
    choiceArr: ["Tomato Pasta", "Vegan Cream Pasta ", "Ruccola and Dryed Tomato Pasta"],
  };

  dishNum = chooseOption(dishChoiceObj);
  // validating and ask again when it is not valid
  loopCorrectDishNum();

  yourDish = evaluateThreeConditions(dishNum, dishChoiceObj);
}

// confirming which dish you want to eat

alert(`You've chosen ${yourDish}!  - Click "ok" to confirm`);

///////////////////////////////////////////////////////////////////////////////
// Step 4 - Age
// Your code goes here

let age = parseInt(prompt(`Is this dish for a child or an adult? - Enter your age.`));

let isChild;

// Validating age. If it is age<0, age>130 or not a number, prompt will show again.
while ((age < 0 && age > 130) || age === NaN) {
  invalidChoise(selectAge);
  age = parseInt(prompt(`Is this dish for a child or an adult? - Enter your age.`));
}
// over 16 years order an adult sized dish
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

// validating a num in a user type one or two, otherwise prompt again.

while (isSure !== 1 && isSure !== 2) {
  invalidChoise("select a number 1 or 2");
  isSure = parseInt(
    prompt(
      `One ${isChild ? "child" : "adult"} sized ${yourDish} will be prepared for you. That'll be ${
        isChild ? 10 : 15
      } euro. Are you sure to order this?
     Enter a number to confirm: 
    1 - Yes
    2 - No`
    )
  );
}

// Depends on a user's choice, one of these will show.

switch (isSure) {
  case 1:
    alert("Thank you for your Order. See you again!");
    break;
  case 2:
    alert("No problem! You can come back anytime when you want to order!");
    break;
}
