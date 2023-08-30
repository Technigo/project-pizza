// Start here

// Step 1 - Welcome and introduction

alert(`Welcome to the Island Pizzeria. Ready to Start? - Click 'OK' to begin.`);

const userName = prompt (`Please enter your name:`);
alert(`Hello ${userName}, welcome to our restaurant!`);

// Step 2 - Food choice
const foodChoise = prompt (`What type of food would you like to order today?
1 - Pizza
2 - Salad
3 - Pasta
Please enter the number of your choise:`);

let selectedFood = "";

if (foodChoise === "1") {
selectedFood = "Pizza";
}

else if (foodChoise === "2") {
  selectedFood = "Salad";
}

else if (foodChoise === "3") {
  selectedFood = "Pasta";
}

else {
  alert(`Invalid choise, please start over and pick a number between 1 and 4.`)
  process.exit;
}

alert(`You've chosen ${selectedFood}.`);

// Step 3 - Subtype choice
let selectMenu = "";
let nameOfSelection = "";

switch (selectedFood) {
  case "Pizza":
    selectMenu = prompt(`Select a pizza
      1 - Capricciosa
      2 - Hawaii
      3 - Vesuvio
      Please enter the number of your choice:`);
    nameOfSelection = ["Capricciosa", "Hawaii", "Vesuvio"];
    break;
    
  case "Salad":
    selectMenu = prompt(`Select a salad
      1 - Greek salad
      2 - Caesar salad
      Please enter the number of your choice:`);
    nameOfSelection = ["Greek salad", "Caesar salad"];
    break;
    
    case "Pasta":
    selectMenu = prompt(`Select a pasta
      1 - Pasta bolognese
      2 - Pasta carbonara
      3 - Pasta frutti di mare
      Please enter the number of your choice:`);
    nameOfSelection = ["Pasta bolognese", "Pasta carbonara", "Pasta frutti di mare"];
    break;
    
  default:
    alert("Invalid food selection");
    break;
}

if (selectMenu !== "") {
  alert(`You've chosen ${nameOfSelection[parseInt(selectMenu) - 1]}. Excellent choice!`);
}

// Step 4 & 5- Age & confirmation
let age = prompt(`Is this food for an adult or a child? Please type your age:`);
let confirmation = ""; 

if (age >= 15) {
  confirmation = prompt(`One adult sized ${nameOfSelection[parseInt(selectMenu) - 1]} will be prepared for you. That will be 15€.
  Are you sure you want to order this?
  Please enter a number to confirm:
  1 - Yes
  2 - No`);
} else {
  confirmation = prompt(`One child sized ${nameOfSelection[parseInt(selectMenu) - 1]} will be prepared for you. That will be 10€.
  Are you sure you want to order this?
  Please enter a number to confirm:
  1 - Yes
  2 - No`);
}

if (confirmation === "1") {
  alert(`Thank you for your order! Your delicious meal will be prepared. See you soon!`);
} else if (confirmation === "2") {
  alert(`No problem, welcome back and order any time you want!`);
}