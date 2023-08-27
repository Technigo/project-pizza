// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `
  WELCOME TO ELBINES PIZZERIA

  Click OK to start your order.`
)

let firstName = prompt("Please enter your first name", "First Name")
let lastName = prompt("Please enter your last name", "Last Name")
alert("Welcome " + firstName + "!")
//I dont need to devide first and last name in two separate strings, should i make one "yourName" string instead? Edit: I decided to keep them separated but to only use firstName in the greeting. Code used before: alert("Welcome " + firstName + " " + lastName + "")

//HOW can I change the fist letter in the imput to automatically change to a capital letter? I tested some things, but they did not work.
//CAN I make it so only letters will be accepted? Tested; did not figure it out. 


// Step 2 - Food choice
// Your code goes here
let options = prompt(`Please select what you would like by entering the number of the catagory below: 

1 - Pizza
2 - Pasta
3 - Salad
4 - Desserts`);

//I need to choose words that are simpler and that explain the variable betetr
let selectedOption = "";

if (options === "1") {
  selectedOption = "Pizza"
}
else if (options === "2") {
  selectedOption = "Pasta"
}
else if (options === "3") {
  selectedOption = "Salad"
}
else if (options === "4") {
  selectedOption = "Dessert"
}
else {
  alert("ERROR. Please select a valid number");
  process.exit(1);
}

alert(`You have chosen "${selectedOption}". Continue to the next step to choose a dish.`);

//HOW can I have less than four choises and get a default message if I enter 4 for example? Now im getting "great choise, you have chosen undefined" 

// Step 3 - Subtype choice
// Your code goes here

let menuFoodSelected = "";
let typeOf = "";

switch (selectedOption) {
  case "Pizza":
    menuFoodSelected = prompt(`Please select what you would like by entering the number:

    1 - Quattro Formaggi
    2 - Pepperoni
    3 - Margherita
    4 - Calzone
    `);
    typeOf = ["Quattro Formaggi", "Pepperoni", "Margherita", "Calzone"];
    break;
  case "Pasta":
    menuFoodSelected = prompt(`Please select what you would like by entering the number:

    1- Carbonara
    2 - Bolognaise 
    3 - Cacio e pepe
    4 - Spaghetti allo Scoglio
    `);
    typeOf = ["Carbonara", "Bolognaise", " Cacio e pepe", "Spaghetti allo Scoglio"];
    break;//obs, don't forget square baccets for the arry
  case "Salad":
    menuFoodSelected = prompt(`Please select what you would like by entering the number:

    1 - Green Godess
    2 - Rainbow
    3 - Greek
    4 - Fruit
    `);
    typeOf = ["Green Godess", "Rainbow", "Greek", "Fruit"];
    break;
  case "Dessert":
    menuFoodSelected = prompt(`Please select what you would like by entering the number:

    1 - Tiramisu
    2 - Gelato
    3 - Chocolate Fondant
    4 - Surprise dish: Yummy in my tummy
    `);
    typeOf = ["Tiramisu", "Gelato", "Chocolate Fondant", "Surprise dish; Yummy in my tummy"];
    break;
}

if (menuFoodSelected === "1") {
  alert(
    `Great Choice, You have chosen: ${typeOf[0]} as your ${selectedOption}!`);
} else if (menuFoodSelected === "2") {
  alert(
    `Great Choice, You have chosen: ${typeOf[1]} as your ${selectedOption}!`);
} else if (menuFoodSelected === "3") {
  alert(
    `Great Choice, You have chosen: ${typeOf[2]} as your ${selectedOption}!`);
}
else if (menuFoodSelected === "4") {
  alert(
    `Great Choice, You have chosen: ${typeOf[3]} as your ${selectedOption}!`);
}
else {
  alert(`Invalid choise, please select a number between 1-4 to make an order`)
}
//Should I have used the parseInt here as well to simplyfy the code? Would that make it easier to specify texts for each of the foodtypes?

// Step 4 - Age
// Your code goes here
// I really wanted to figure out how to get a message to display  the choises made and the associated cost together with the confirmation promt in one message. Do I have to change this to an alert and a promt seperated from eachother to meet the requrements?

let order = "";

let age = prompt("Please enter your age to choose if the dish is meant for an adult or a child.")
if (age >= 18) {
  order = prompt(`You have chosen an adult sized ${typeOf[parseInt(menuFoodSelected) - 1]} ${selectedOption}. That will be €20.

  Enter Y for "Yes" to confirm.
  Enter N for "No" to decline`);
}
else if (age <= 18) {
  order = prompt(`You have chosen an child sized ${typeOf[parseInt(menuFoodSelected) - 1]} ${selectedOption}. That will be €15.
  
  Enter Y for "Yes" to confirm.
  Enter N for "No" to decline`);
}
//I spent a lot of time trying to figgure out the right way to write the code so that the typeOf array chosen earlier would be the same here as well. I kept trying with ${typeOf[0]} ${typeOf[0, 1 , 2 , 3]} and so on. I got help on slack and during the demos! Not sure if I copletly understand the "parseInt" yet, but for now it works. 

// Step 5 - Order confirmation
// Your code goes here
//How to make is so it dosn't matter if a capital letter is entered or a small letter?

if (order === "Y") {
  alert(`Thank you for your order! We will start preparing it right away. We hope you enjoy it!`);
}
else if (order === "N") {
  alert(`Not hungry? No worries, we'll be ready for your order when you are!`);
}
else {
  alert(`ERROR. Your order was not placed. If you still want to order please try again and enter Y to comfirm`)
}

