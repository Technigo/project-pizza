// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `
  Welcome to Javascript Pizzeria!
  
  Ready to order? :)
  `
);

const userName = prompt("What's your name?");

alert(`Howdy ${userName}, let's get you some food!`);

// Step 2 - Food choice
let typeOfFood = prompt(
  `So, what do you feel like eating today ${userName}?
  1 - Pizza
  2 - Pasta
  3 - Salad
  `);

let selectedFoodType = "";

if (typeOfFood === "1" || typeOfFood.toLowerCase() === "pizza") {
  selectedFoodType = "Pizza";
} else if (typeOfFood === "2" || typeOfFood.toLowerCase() === "pasta") {
  selectedFoodType = "Pasta";
} else if (typeOfFood === "3" || typeOfFood.toLowerCase() === "salad") {
  selectedFoodType = "Salad";
} else {
  alert(`You didn't choose anything from the list ${userName}, please start over and try again.
    `);
  exit(1);
}
// Display the chosen food type
alert(`Excellent choice ${userName}! You have chosen ${selectedFoodType}!`);

// Step 3 - Subtype choice
let typeOfPizza = "";
let typeOfPasta = "";
let typeOfSalad = "";

if (selectedFoodType === "Pizza") {
  typeOfPizza = prompt(
    `What kind of pizza would you like?
    Please choose a number.
    1 - Margherita 
    2 - Vesuvio
    3 - Hawaii
    `);
} else if (selectedFoodType === "Pasta") {
  typeOfPasta = prompt(
    `What kind of pasta would you like?
    Please choose a number.
    1 - Carbonara
    2 - Alfredo
    3 - Bolognese
    `);
} else if (selectedFoodType === "Salad") {
  typeOfSalad = prompt(
    `What kind of salad would you like?
    Please choose a number.
    1 - Greek salad
    2 - Halloumi salad
    3 - Caprese salad
    `);
} else {
  alert(
    `You didn't write a valid choice, please try again and select the option of your choice. Bye for now ${userName}!
    `);
  exit(1);
}

//Set the name of the choice
let menuSelection = "";

if (typeOfPizza === "1") {
  menuSelection = "Margherita";
} else if (typeOfPizza === "2") {
  menuSelection = "Vesuvio";
} else if (typeOfPizza === "3") {
  menuSelection = "Hawaii";
} else if (typeOfPasta === "1") {
  menuSelection = "Carbonara";
} else if (typeOfPasta === "2") {
  menuSelection = "Alfredo";
} else if (typeOfPasta === "3") {
  menuSelection = "Bolognese";
} else if (typeOfSalad === "1") {
  menuSelection = "Greek Salad";
} else if (typeOfSalad === "2") {
  menuSelection = "Halloumi Salad";
} else if (typeOfSalad === "3") {
  menuSelection = "Caprese Salad";
} else {
  alert(`You didn't choose anything from the list ${userName}, please start over and try again.
    `);
  exit(1);
}

// Step 4 - Age
// Your code goes here
let userAge = prompt(`How old are you ${userName}?`);
const adultPrice = 120;
const childPrice = adultPrice - 60;
let price = "";

if (userAge >= 15) {
  price = adultPrice;
  alert(`A regular size then, it costs ${price} kr.`);
} else {
  price = childPrice;
  alert(`A child size then, it costs ${price} kr.`);
}

// Step 5 - Order confirmation

let confirmation = "";

confirmation = prompt(
  `A ${menuSelection} for you then, ${userName}. That will be ${price} kr.

  Write 'OK' to confirm
  `);

if (confirmation.toLowerCase() === "ok") {
  alert(`Your ${selectedFoodType} is being prepared ${userName}!
  You will soon be able to enjoy your ${menuSelection}.
  We will debit you ${price} kr.

  Thanks for using Javascript Pizzeria and have a lovely day ${userName}!
  `);
} else {
  alert(`No order for you ${userName}? We hope you will visit us again!`);
  exit(1);
}
