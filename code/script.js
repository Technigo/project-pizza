// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start?? - Click 'OK' to begin.`
)

//CAN I make it so only letters will be accepted? 
//HOW can I make the first letter a capital?
let firstName = prompt("Please enter your first name", "First Name")
let lastName = prompt("Please enter your last name", "Last Name")
alert("Welcome " + firstName + " " + lastName + "!")
//I dont need to devide first and last name in two separate strings, should i make one "yourname" string instead?


// Step 2 - Food choice
// Your code goes here
const options = prompt(`Please select an option you would like to order:
1 - Pizza
2 - Pasta
3 - Salad
4 - Dessert`);
//Variable to store selected foodchoise? 
let selectedOption = "";
//Determine selected foodchoise based on the users number choise. 
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
  alert("Invalid choise. Please select a valid number");
  process.exit(1);
}

alert(`You've chosen ${selectedOption}! Please continue to the next step to place your order`);

// Step 3 - Subtype choice
// Your code goes here

let menuFoodSelected = "";
let typeOf = "";

switch (selectedOption) {
  case "Pizza":
    menuFoodSelected = prompt(`Select a type of Pizza:
    1 - Quattro Formaggi
    2 - Pepperoni
    3 - Margherita
    4 - Calzone
    Please enter the number of your choise:`);
    typeOf = ["Quattro Formaggi", "Pepperoni", "Margherita", "Calzone"];
    break;
  case "Pasta":
    menuFoodSelected = prompt(`Select type of pasta:
    1- Carbonara
    2 - Bolognaise 
    3 - WoW
    4 - Yum
    Please enter the number of your choise:`);
    typeOf = ["Carbonara", "Bolognaise", " WoW", "Yum"];
    break;//obs, don't forget square baccets 
  case "Salad":
    menuFoodSelected = prompt(`Select type of salad:
    1 - Green
    2 - Rainbow 
    3 - Happy
    4 - Yey
    Please enter the number of your choise:`);
    typeOf = ["Green", "Rainbow", "Happy", "Yey"];
    break;
  case "Dessert":
    menuFoodSelected = prompt(`Select type of dessert:
    1 - Tiramisu
    2 - Gelato
    3 - Chocolate Fondant
    4 - Yummy in my tummy 
    Please enter the number of your choise:`);
    typeOf = ["Tiramisu", "Gelato", "Chocolate Fondant", "Yummy in my tummy"]; //HOW to have less than four choises and getting a default message if I enter 4?
    break;
}

if (menuFoodSelected === "1") {
  alert(
    `Great Choice, You've chosen a ${typeOf[0]} ${selectedOption}!`);
} else if (menuFoodSelected === "2") {
  alert(
    `Great Choice, You've chosen ${typeOf[1]} from the ${selectedOption} menu!`);
} else if (menuFoodSelected === "3") {
  alert(
    `Great Choice, You've chosen ${typeOf[2]}  from the ${selectedOption} menu!`);
}
else if (menuFoodSelected === "4") {
  alert(
    `Great Choice, You've chosen ${typeOf[3]} from the ${selectedOption} menu!`);
}
else {
  alert(`Invalid choise, please select a number between 1-4 to make an order`)
}

// Step 4 - Age
// Your code goes here
// I really wanted to figure out how to get a message to display the order message and the associated cost alert and the confirmation promt in one message. Do I have to change this to an alert and a promt seperated from eachother to meet the requrements?

let order = "";

let age = prompt("Please enter an age to choose if the dish is meant for an adult or a child.")
if (age >= 18) {
  order = prompt(`You have chosen an adult sized ${selectedOption} and ${typeOf[parseInt(menuFoodSelected) - 1]}. That will be €20.
  Enter Y for "Yes" to confirm.
  Enter N for "No" to decline`);
}
else if (age <= 18) {
  order = prompt(`You have chosen an child sized ${typeOf[parseInt(menuFoodSelected) - 1]} ${selectedOption} for your meal. That will be €15.
  Enter Y for "Yes" to confirm.
  Enter N for "No" to decline`);
}
//I spent a lot of time trying to figgure out the right way to write the code so that the typeOf array chosen earlier would be the same here as well. I kept trying with ${typeOf[0]} ${typeOf[0, 1 , 2 , 3]} and so on. Not sure if I copletly understand the "parseInt" yet, but for now it owrks. 

// Step 5 - Order confirmation
// Your code goes here
if (order === "Y") {
  alert(`Thank you for your order.`);
}
else if (order === "N") {
  alert(`Hope to see you again!`);
}
else {
  alert(`Invalid input, your order was not placed. If you still want to order please try again and enter Y to comfirm`)
}

//if the user confirms, a thank you message should be displayed using the alert() method, indicating that their meal will be prepared. If the user declines, a polite farewell message should be displayed using the alert() method, encouraging them to return for future orders.
