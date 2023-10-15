// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

const clientName = prompt(
  `What is your name?
  Please enter it below.`
);

// Check if a name was entered
if ((clientName === "") || (clientName === null)) {
  alert(
    `You have not entered a name.
    Please start again by refreshing the page.`
  );
  exit(1);
}

alert(`Hello ${clientName}!`);

// Step 2 - Food choice
// Your code goes here
let courseChoice = prompt(
  `Please select a type of dish you would like.
  1 - Starter
  2 - Main
  3 - Dessert
  Enter the number or name:`
);

// Check if user input is valid and assign appropriate food type name to the courseChoice variable based on the users choice
if ((courseChoice === "1") || (courseChoice.toLowerCase() === "starter")) {
  courseChoice = "starter";
} else if ((courseChoice === "2") || (courseChoice.toLowerCase() === "main")) {
  courseChoice = "main";
} else if ((courseChoice === "3") || (courseChoice.toLowerCase() === "dessert")) {
  courseChoice = "dessert";
} else {
  alert(
    `You entered an invalid selection.
    Please start again by refreshing the page.`
  );
  exit(1);
}

alert(`Let me get you the ${courseChoice} menu...`);

// Step 3 - Subtype choice
// Your code goes here
let foodOption1;
let foodOption2;
let foodOption3;

// Depending on the users previous input assign appropriate names to the variables for their available options
// This step could be combined into the previous step
if (courseChoice === "starter") {
  foodOption1 = "Salad";
  foodOption2 = "Bread";
  foodOption3 = "Cheese";
} else if (courseChoice === "main") {
  foodOption1 = "Pizza";
  foodOption2 = "Pasta";
  foodOption3 = "Salad";
} else if (courseChoice === "dessert") {
  foodOption1 = "Ice cream";
  foodOption2 = "Cake";
  foodOption3 = "Jelly";
} else {
  // This else statement is optional as the variable should be a valid one as if it has got this far as it should have had a valid variable assigned in the previous step
  alert(
    `You entered an invalid selection.
    Please start again by refreshing the page.`
  );
  exit(1);
}

let foodChoice = prompt(
  `Please select a which dish you would like.
  1 - ${foodOption1}
  2 - ${foodOption2}
  3 - ${foodOption3}
  Enter the number or name:`
);

// Check the users choice and assign an appropriate name for the variable of their choice
if ((foodChoice === "1") || (foodChoice.toLowerCase() === foodOption1.toLowerCase())) {
  foodChoice = foodOption1.toLowerCase();
} else if ((foodChoice === "2") || (foodChoice.toLowerCase() === foodOption2.toLowerCase())) {
  foodChoice = foodOption2.toLowerCase();
} else if ((foodChoice === "3") || (foodChoice.toLowerCase() === foodOption3.toLowerCase())) {
  foodChoice = foodOption3.toLowerCase();
} else {
  alert(
    `You entered an invalid selection.
    Please start again by refreshing the page.`
  );
  exit(1);
}

alert(`Some ${foodChoice}, a fine choice!`);

// Step 4 - Age
// Your code goes here
const age = prompt(`How old are you?`);
let portionSize;
let price;

// Check the users entered age and assign variables depending on if they are an adult or child
if (age >= 18) {
  portionSize = "adult";
  price = 150;
} else if (age > 0) {
  portionSize = "child";
  price = 100;
} else {
  alert(
    `You entered an invalid selection.
    Please start again by refreshing the page.`
  );
  exit(1);
}

alert(`A ${portionSize} sized portion will be ${price} kr`);

// Step 5 - Order confirmation
// Your code goes here
const confirmation = prompt(
  `Order for ${clientName}:
  a ${portionSize} sized ${courseChoice} of ${foodChoice}.
  This will cost ${price} kr.
  Press 'OK to confirm. Press 'Cancel' to decline.`
);

if (confirmation !== null) {
  alert(`Your order has been confirmed and shall be delivered soon. Enjoy your meal!`);
} else {
  alert(`Sorry to hear that. If you wish to make a different order please refresh the page.`);
}