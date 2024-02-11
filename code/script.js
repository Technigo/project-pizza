// Start here

const mainType = ["Pizza", "Pasta", "Salad"];

const pizzaType = ["Napolitana", "Hawaian", "Pepperoni"];
const pastaType = [
  "Spaghetti Carbonara",
  "Fettuccine Alfredo",
  "Cheesy Tortellini",
];
const saladType = ["Caesar Salad", "Caprese Salad", "Greek Salad"];

const angryChief =
  "The chief gets angry: You aren't choosing carefully! No food for you!";

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
     1 - ${mainType[0]}
     2 - ${mainType[1]}
     3 - ${mainType[2]}`
);

let orderNumber = parseInt(userInput);
let mealType;
const mainTypeIndex = orderNumber - 1;

if (orderNumber > 0 && orderNumber <= mainType.length) {
  mealType = mainType[mainTypeIndex];
  alert(`You've chosen ${mealType}!`);
} else {
  alert(`${angryChief}`);
}

// Step 3 - Subtype choice
// Your code goes here
let subTypeArray;

switch (orderNumber) {
  case 1:
    subTypeArray = pizzaType;
    break;

  case 2:
    subTypeArray = pastaType;
    break;

  case 3:
    subTypeArray = saladType;
    break;

  default:
    alert(`${angryChief}`);
    break;
}

let subInput = prompt(
  `Select a ${mealType} type: 
      Enter a number:
      1 - ${subTypeArray[0]}
      2 - ${subTypeArray[1]}
      3 - ${subTypeArray[2]}`
);

let subIndex = parseInt(subInput);

let subMealType = subTypeArray[subIndex - 1];

alert(`You've chosen ${subMealType}!`);

// Step 4 - Age
// Your code goes here

let userAge = prompt("Is this food for a child or an adult? Type your age:");

let ageNumber = parseInt(userAge);

const childPrice = 10;
const adultPrice = 15;

let userConfirm;

if (ageNumber > 0 && ageNumber <= 15) {
  userConfirm = prompt(
    `One child sized ${subMealType} ${mealType} will be prepared for you. That'll be ${childPrice}€. Are you sure you want to order this?
    Enter a number to confirm:
    1 - Yes 
    2 - No`
  );
} else if (ageNumber > 15) {
  userConfirm = prompt(
    `One adult sized ${subMealType} ${mealType} will be prepared for you. That'll be ${adultPrice}€. Are you sure you want to order this? 
    Enter a number to confirm: 
    1 - Yes 
    2 - No`
  );
} else {
  alert(
    "The cheif doesn't understand how old you are and can't decide what size the meal should be."
  );
}

// Step 5 - Order confirmation
// Your code goes here

if (Number(userConfirm) === 1) {
  alert(
    "Thank you for your order! Your delicious meal will be prepared. See you soon!"
  );
} else if (Number(userConfirm) === 2) {
  alert("Alright! Thank you for visiting. See you next time!");
} else {
  alert(
    "Almost there. But you didn't choose carefully. Now we need to start over again!"
  );
}
