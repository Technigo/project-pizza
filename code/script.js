// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

// Prompt the user to enter their name
const name = prompt(`Please enter your name:`);

// Display a greeting message with user's name
alert(`Nice to meet you, ${name}!`);

// Step 2 - Food choice 
// Prompt the user to choose food
const food = prompt(`What would you like to order? 
Enter number 1-3 to choose among the followings:
1. Pizza
2. Pasta
3. Salad`
);

// Initialize a variable to store the selected food
let selectedFood = "";

// Determine the selected food based on the user's input
if (food === "1") {
  selectedFood = "Pizza";
} else if (food === "2") {
  selectedFood = "Pasta";
} else if (food === "3") {
  selectedFood = "Salad";
} else {
  // If the user enters an invalid food choice, show an error message and exit the program
  alert(`Invalid choice. Please enter number 1-3 to choose among the dishes.`);
  process.exit(1);
}

// Display the selected food
alert(`Thank you. Let's get you a ${selectedFood}!`);

// Step 3 - Subtype choice
let subtype = "";
let selectedSubtype = "";

// Determine the selected subtype based on the user's input
if (selectedFood === "Pizza") {
  subtype = prompt(
    `Please enter number 1-3 to select a pizza type:
    1. Hawaiian
    2. Pepperoni
    3. Quattro Stagioni`
    );
  
    selectedSubtype = ["Hawaiian pizza", "Pepperoni pizza", "Quattro Stagioni pizza"];

} else if (selectedFood === "Pasta") {
  subtype = prompt(`Please enter number 1-3 to select a pasta type:
    1. Spaghetti Bolognese
    2. Fettuccine Alfredo
    3. Pesto pasta`
  );

  selectedSubtype = ["Spaghetti Bolognese", "Fettuccine Alfredo", "Pesto pasta"];

} else if (selectedFood === "Salad") {
  subtype = prompt(`Please enter number 1-3 to select salad type:
    1. Caesar Salad
    2. Classic Green Salad
    3. Carprese Salad`
  );

  selectedSubtype = ["Caesar Salad", "Classic Green Salad", "Carprese Salad"];
}

// Display the selected subtype
if (subtype === "1" || subtype === "2" || subtype === "3") {
  alert(`You selected a ${selectedSubtype[Number(subtype) - 1]}!`);
} else {
  // If the user enters an invalid food choice, show an error message and exit the program
  alert(`Invalid choice. Please enter number 1-3 to choose among the dishes.`);
  process.exit(1);
}


// Step 4 - Age
// Initialize a variable to store the age
let age = 0;

// Determine whether the food is for a child or an adult based on the user's input
if (Number(subtype) >= 1 && Number(subtype) <= 3) {
  age = Number(prompt(`Is this food for a child or an adult? Type your age:`));
} else {
  // If the user enters an invalid food choice, show an error message and exit the program
  alert(`Invalid choice. Please enter number 1-3 to choose among the dishes.`);
  process.exit(1);
}

// Display order message with associated cost based on age input
if (age >= 0 && age < 18) {
  // Child-size
  alert(`One child-sized ${selectedSubtype} will be prepared for you. It will cost $10.`);
} else if (age >= 18) {
  // Adult-size
  alert(`One adult-sized ${selectedSubtype} will be prepared for you. It will cost $15.`);
} else {
  // If the user enters an invalid food choice, show an error message and exit the program
  alert(`Invalid answer. Please enter a number equal or greater than 0.`);
  process.exit(1);
}

// Step 5 - Order confirmation
// Initialize a variable to store the confirmation input
let confirmation = prompt(`Please enter 1-2 to confirm your order:
1. Yes
2. No`);

// Evaluate the user's confirmation
if (confirmation === "1") {
  alert(`Thank you for your order. Your meal will be prepared soon. We will let you know when it is ready for pick-up.`);
} else if (confirmation === "2") {
  alert(`No problem. Go back and order anytime. See you then!`);
} else {
  alert(`Invalid choice. Please enter number 1-2 to confirm your order.`);
  process.exit(1);
}