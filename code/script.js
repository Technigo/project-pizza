// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
let person = prompt (`Please enter your name`);

alert (`Hello ${person}!`);

// Step 2 - Food choice
let foodType = prompt (`What type of food would you like to order?
Please enter a number: 
1. Pizza
2. Pasta
3. Salad`);

if (foodType == 1) {
  chosenFoodType = `pizza`;
  alert(`You've chosen Pizza!`);
}
else if (foodType == 2) {
  chosenFoodType = `pasta`;
  alert(`You've chosen Pasta!`);
}
else if (foodType == 3) {
  chosenFoodType = `salad`;
  alert(`You've chosen Salad!`);
}
else {
  alert (`Invalid choice, please try again.`);
}

// Step 3 - Subtype choice
let subtype;
if (chosenFoodType == `pizza`) {
  subtype = prompt (`Which pizza would you like to order?
  Please enter a number: 
  1. Calzone
  2. Vezuvio
  3. Hawaii`);
}
else if (chosenFoodType == `pasta`) {
  subtype = prompt (`Which pasta would you like to order?
  Please enter a number: 
  1. Bolognese
  2. Carbonara
  3. Vegetarian`);
}
else if (chosenFoodType == `salad`) {
  subtype = prompt (`Which salad would you like to order?
  Please enter a number: 
  1. Ceasar
  2. Caprese
  3. Greek salad`);
}
else {
  alert (`Invalid choice, please try again.`);
}

alert (`Great choice of ${chosenFoodType} ${person}!`);

// Step 4 - Age
let age = prompt (`is this for a child or an adult? Please enter you age below:`);

let confirm;

if (age >= 18) {
  confirm = prompt (`You will get an adult sized ${chosenFoodType}, the total vill be 99 SEK. Do you confirm?
  Please enter 1 for yes and 2 for no
  1. Yes
  2. No `); 
}
else if (age < 18) {
  confirm = prompt (`You will get a child sized ${chosenFoodType}, the total vill be 75 SEK. Do you confirm?
  Please enter 1 for yes and 2 for no
  1. Yes
  2. No `); 
}

// Step 5 - Order confirmation
if (confirm ==1) {
  alert (`Your order of ${chosenFoodType} is confirmed. Have a nice day ${person}!`);
}
else if (confirm ==2) {
  alert (`Your order of ${chosenFoodType} is cancelled. You're welcome back anytime ${person}!`);
}
else {
  alert (`Invalid choice, please try again.`);
}
