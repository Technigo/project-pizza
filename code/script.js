// Start here

// Step 1 - Welcome and introduction
// Your code goes here

//Welcome-message for the customer to Javascript Pizzeria
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);
//Asking/prompt the customer to put in their name
const customerName = prompt(`Please enter your name for your order:`);

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
alert(`You choose a ${selectedFood}!`);


// Step 3 - Subtype choice
// Your code goes here

// Here the customer get to choose different foodType depending on their selectedFood.
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
    }

alert(`You have selected ${foodName[parseInt(foodType)-1]}!`);

// Step 4 - Age
// Your code goes here

// Determening the age of the customer and how much they should pay based on their age.
const costumerAge = prompt(`Is this food for a child or an adult? Type your age:
`);

let selectedAge = "";

if (costumerAge >= 18) {
  selectedAge = "Adult";
  price = 12;
}
else if(costumerAge < 18) {
  selectedAge = "Child";
  price = 6;
}
else { alert("Option does not exist. Please try again 👩🏼‍🍳");
exit(1);}



// Step 5 - Order confirmation
// Your code goes here

//Comfirmation of customers order
const orderConfirmation = prompt(`One ${selectedAge} sized ${foodName[parseInt(foodType)-1]} will be prepared for you. That will be $${price}. Would you like to place this order?
    Enter a number to confirm:
    1 - Yes
    2 - No`);

if (orderConfirmation === "1") {
  alert(`Thank you for your order! Your meal is being prepared. Enjoy your meal!`);
} 
else if (orderConfirmation === "2") {
  alert(`Your order has been canceled.Welcome back to order another time.`);
}
else {
  alert(`Invalid choice. Please choose 1 for Yes or 2 for No.`);
}



