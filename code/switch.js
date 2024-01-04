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

switch (typeOfFood.toLowerCase()) {
  case "1":
  case "pizza":
    selectedFoodType = "Pizza";
    break;
  case "2":
  case "pasta":
    selectedFoodType = "Pasta"
    break;
  case "3":
  case "salad":
    selectedFoodType = "Salad"
    break;
  default:
    alert(`You didn't choose anything from the list ${userName}, please start over and try again.
    `);
    exit(1);
}


// Display the chosen food type
alert(`Excellent choice ${userName}! You have chosen ${selectedFoodType}!`);

// Step 3 - Subtype choice

let subMenu = "";
let subMenuSlot = [];

switch (selectedFoodType) {
  case "Pizza":
    subMenu = prompt(
      `What kind of pizza would you like?
      Please choose a number.
      1 - Margherita 
      2 - Vesuvio
      3 - Hawaii
      `);
    subMenuSlot = ["Margherita", "Vesuvio", "Hawaii"];
    break;

  case "Pasta":
    subMenu = prompt(
      `What kind of pasta would you like?
      Please choose a number.
      1 - Carbonara 
      2 - Alfredo
      3 - Bolognese
      `);
    subMenuSlot = ["Carbonara", "Alfredo", "Bolognese"];
    break;

  case "Salad":
    subMenu = prompt(
      `What kind of pasta would you like?
      Please choose a number.
      1 - Greek salad
      2 - Halloumi salad
      3 - Caprese salad
      `);
    subMenuSlot = ["Greek salad", "Halloumi salad", "Caprese salad"];
    break;

  default:
    alert(`You didn't write a valid choice, please try again and select the option of your choice. Bye for now ${userName}!
    `);
    exit(1);
}

//Set the name of the choice

let menuSelection = "";

switch (subMenu.toLowerCase()) {
  case "1":
  case "margherita":
  case "carbonara":
  case "greek salad":
    menuSelection = subMenuSlot[0];
    break;
  case "2":
  case "vesuvio":
  case "alfredo":
  case "halloumi salad":
    menuSelection = subMenuSlot[1];
    break;
  case "3":
  case "hawaii":
  case "bolognese":
  case "caprese salad":
    menuSelection = subMenuSlot[2];
    break;

}

// Step 4 - Age
// Your code goes here
let userAge = prompt(`How old are you ${userName}?`);
const adultPrice = 120;
const childPrice = adultPrice - 60;
let price = "";

price = userAge >= 15 ? adultPrice : childPrice;
alert(userAge >= 15 ? `A regular size then, it costs ${price} kr.` : `A child size then, it costs ${price} kr.`);

// Step 5 - Order confirmation

let confirmation = "";

confirmation = prompt(
  `A ${menuSelection} for you then, ${userName}. That will be ${price} kr.

  Write 'OK' to confirm
  `);


switch (confirmation.toLowerCase()) {
  case "ok":
    alert(`Your ${selectedFoodType} is being prepared ${userName}!
    You will soon be able to enjoy your ${menuSelection}.
    We will debit you ${price} kr.

    Thanks for using Javascript Pizzeria and have a lovely day ${userName}!
    `);
    break;
  default:
    alert(`No order for you ${userName}? We hope you will visit us again!`);
    exit(1);
}
