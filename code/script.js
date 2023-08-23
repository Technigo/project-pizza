// Start here

// Step 1 - Welcome and introduction
// Your code goes here

// Welcome message for the user.
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

// A prompt asking the user for theit name.
let userName = prompt(`What's your name?`);


// Greeting which uses the user's entered name.
alert(
  `Hi ${userName}! Welcome to the Javascript Pizzeria!`
);

// Step 2 - Food choice
// Variable with the different food choices and a prompt asking the user to make a food choice.

let foodChoice = prompt(`What would you like to order today? Enter a number from these 3 choices:
1 - Pizza
2 - Pinsa
3 - Dessert Pizza`);

// Initialize a variable to store the selected food choice.

let selectedFoodType = "";

// If-statement to connect the user's food choice with the variable for the selected food type.
if (foodChoice === "1") {
  selectedFoodType = "Pizza";
} else if (foodChoice === "2") {
  selectedFoodType = "Pinsa";
} else if (foodChoice === "3") {
  selectedFoodType = "Dessert Pizza";
} else {
  alert("Invalid choice. Please enter a valid number.");
  // The process.exit(1) command is used to exit a Node.js program with a non-zero exit code.
  // It immediately ends the program's execution and indicates that something went wrong or an error occurred.
  process.exit(1);
}

// Message and confirmation to the user about their selected food.

alert(`You've chosen ${selectedFoodType}! What a great choice!`);


// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
