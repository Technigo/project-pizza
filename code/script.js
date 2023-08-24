// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

//Ask user for their name using prompt method (when using conts the variable name doesn't appear in the alert. it says that it's deprecated)
const userName = prompt(`What's your name? - ex. Maria`)

//Display a greeting to confirm users name
alert(`Hi ${userName}! Welcome to Javascript Pizzeria.`)


// Step 2 - Food choice

const foodType = prompt(`Choose the type of food that you'd like to order.
Enter a number:
1 - Pizza
2 - Pasta
3 - Salad`);

const userChoice = parseInt(foodType);

let chosenFoodType; //Why can't I use const here instead of let?

if (userChoice === 1) {
  chosenFoodType = alert("Wonderful, you've chosen Pizza");
} else if (userChoice === 2) {
  chosenFoodType = alert("Wonderful, you've chosen Pasta");
} else if (userChoice === 3) {
  chosenFoodType = alert("Wonderful, you've chosen Salad");
} else {
  chosenFoodType = alert("Invalid choice. Please select a number between 1-3.");
}




// Step 3 - Subtype choice


// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
