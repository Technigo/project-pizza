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
1 - Pizza 🍕
2 - Pasta 🍝
3 - Salad 🥗
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

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
