// Start here

// Step 1 - Welcome and introduction
// Your code goes here

//Welcome-message for the customer to Javascript Pizzeria
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);
//Asking/prompt the customer to put in their name
const customerName = prompt('Please enter your name for your order:');

//Alert to say hello to customer
alert(`Hi there ${customerName}!`);

// Step 2 - Food choice
// Your code goes here

//Asking the customer what food option the want.
const foodOption = prompt(`What would you like to order?
1 - Pizza 
2 - Pasta 
3 - Salad 
`);

// Store the selected food in a variable
let selectedFood = "";

//Determine the costumer´s input of food option, type of food.
if (foodOption === "1") {
  selectedFood = "Pizza";
} 
else if (foodOption === "2") {
  selectedFood = "Pasta";
}
else if (foodOption === "3") {
  selectedFood = "Salad";
}

else {
  alert("Option does not exist. Please try again and select your food option 👩🏼‍🍳");
  exit(1);
}

// Display of costumer´s selected food
alert(`You choose a ${selectedFood}`);


// Step 3 - Subtype choice
// Your code goes here

const foodDish = prompt(
  `Please enter the number of your food order:

Pizza:
  1 - Quattro Stagioni
  2 - Capricciosa
  3 - Siciliana

Pasta: 
  4 - Spaghetti Carbonara
  5 - Shrimp Alfredo
  6 - Spaghetti Bolognese

Salad:
  7 - Cobb Salad
  8 - Ceaser Salad
  9 - Salad Caprese
`);


let foodName = "";

if (foodDish === "1") {
  foodName = "Quattro Stagioni";
}
else if (foodDish === "2") {
  foodName = "Capricciosa";
}
else if (foodDish === "3") {
  foodName = "Siciliana";
}
else if (foodDish === "4") {
  foodName = "Spaghetti Carbonara";
}
else if (foodDish === "5") {
  foodName = "Shrimp Alfredo";
}
else if (foodDish === "6") {
  foodName = "Spaghetti Bolognese";
}
else if (foodDish === "7") {
  foodName = "Cobb Salad";
}
else if (foodDish === "8") {
  foodName = "Ceaser Salad";
}
else if (foodDish === "9") {
  foodName = "Salad Caprese";
}

else {
  alert("Option does not exist. Please try again and select your food option 👩🏼‍🍳");
  exit(1);
}

alert(`You picked ${foodName}`);



/*
let foodType = "";
let foodName = [];

switch (selectedFood) {

  case "Pizza":
    foodType = prompt(
      `Select a Pizza
      1 - Quattro Stagioni
      2 - Capricciosa
      3 - Siciliana
      Please enter the number of your Pizza:`
      );

    foodName = ["Quattro Stagioni", "Capricciosa", "Siciliana"];
    break;


  case "Pasta":
    foodType = prompt(`Select a Pasta
      1 - Spaghetti Carbonara
      2 - Shrimp Alfredo
      3 - Spaghetti Bolognese
      Please enter the number of your Pasta:`);

    foodName = ["Spaghetti Carbonara", "Shrimp Alfredo", "Spaghetti Bolognese"];
    break;


  case "Salad":
    foodType = prompt(`Select a Salad
      1 - Cobb Salad
      2 - Ceaser Salad
      3 - Salad Caprese
      Please enter the number of your Salad:`);

    foodName = ["Cobb Salad", "Ceaser Salad", "Salad Caprese"];
    break;

    default: 
    alert("Option does not exist. Please try again and select your food option 👩🏼‍🍳");
    exit(1);
}*/



// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
