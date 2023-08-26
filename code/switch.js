// Start here
// Step 1 - Welcome and introduction

// Welcome message for the user.
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

// A prompt asking the user for their name.
const userName = prompt(`What's your name?`);

// If-statement with a prompt asking the user for their name. If they enter nothing, there will be an alert message telling them to re-enter their name.
if (userName === "") {
  alert("Sorry, didn't catch your name. Please enter you name again.");
  // The process.exit(1) command is used to exit a Node.js program with a non-zero exit code.
  // It immediately ends the program's execution and indicates that something went wrong or an error occurred.
  process.exit(1);
} else {
  // Greeting which uses the user's entered name.
  alert(
    `Hi ${userName}! Welcome to the Javascript Pizzeria!`);
}

// Step 2 - Food choice
// Variable with the different food choices and a prompt asking the user to make a food choice.

// Variables for food categories and corresponding user choice
let foodCategory = "";  //pizza, pinsa, dessert pizza
let selectedFoodCategory = "";

// Prompt asking the user to enter a number related to the food category they wanna choose.
foodCategory = prompt(`What would you like to order today? 
    Please enter the number of your choice:
  1 - Pizza
  2 - Pinsa
  3 - Dessert Pizza`);

// Switch-statement to relate the different food categories with the user's choice. An error message will appear if they choose something else. I am thinking of storing the error message in its own variable (since they look very much the same with  small variations) but I will leave this as it is for the moment since I'm not sure what is better/easier to read.
switch (foodCategory) {
  case "1":
    selectedFoodCategory = "Pizza";
    break;
  case "2":
    selectedFoodCategory = "Pinsa";
    break;
  case "3":
    selectedFoodCategory = "Dessert Pizza";
    break;
  default:
    alert("Invalid menu choice. Please enter (1), (2) or (3).");
    process.exit(1);
}

// Message and confirmation to the user about their selected food category.
alert(`You've chosen ${selectedFoodCategory}! What a great choice ${userName}!`);

// Initializing variables related to menu choices for the different food categories and corresponding proces for children and adult size pizzas respectively (string and arrays).
let foodSubType = "";
let foodOption = [];
let foodPrice = [];

// Switch-statement that relates the different food categories with a prompt to the user for each category, giving them menu alternatives to choose from.
// For each food category there's an array with the menu choices as well as the corresponding prices.
// In later iterations I wanna try storing all data further up in the code. If someone adds items to this code I would have update multiple places which isn't ideal. A better solution I think would be to not have the arrays in this part of the code and use a variable here instead.
switch (selectedFoodCategory) {
  case "Pizza":
    foodSubType = prompt(`Select the pizza that you wanna order:
        1 - Pizza Margherita
        2 - Pizza Funghi 
        3 - Pizza Quattro formaggi
        Please enter the number of your choice.`);
    foodOption = ["Pizza Margherita", "Pizza Funghi", "Pizza Quattro formaggi"];  // Pizza choices
    foodPrice = [
      ["70", "80", "75"],   // Price for adult size, sek
      ["40", "45", "42"],   // Price for child size, sek
    ];
    break;
  case "Pinsa":
    foodSubType = prompt(`Select the pinsa that you wanna order:
        1 - Romana Ricetta Originale
        2 - Pinsa with Zucchini, Ricotta, and Lemon
        3 - Classic Pinsa Romana
        Please enter a number from these 3 choices.`);
    foodOption = ["Romana Ricetta Originale", "Pinsa with Zucchini, Ricotta, and Lemon", "Classic Pinsa Romana"];  //Pinsa choices
    foodPrice = [
      ["60", "70", "65"],   // Price for adult size, sek
      ["35", "40", "38"],   // Price for child size, sek
    ];
    break;
  case "Dessert Pizza":
    foodSubType = prompt(`Select the dessert pizza that you wanna order:
        1 - Cinnamon roll Pizza
        2 - Berry Marscapone Pizza
        3 - Nutella and Strawberry Pizza
        Please enter a number from these 3 choices.`);
    foodOption = ["Cinnamon roll Pizza", "Berry Marscapone Pizza", "Nutella and Strawberry Pizza"]; // Dessert choices
    foodPrice = [
      ["65", "70", "60"],   // Price for adult size, sek
      ["38", "40", "35"],   // Price for child size, sek
    ];
    break;
  default:
    alert("Invalid menu choice. Please enter (1), (2) or (3).");
    process.exit(1);
}

// Step 3 - Subtype choice
// One variable that stores which food the user chooses and one variable that stores which subtype of food the user chooses.

// Switch statement that relates the input from the user regarding their choice of meal to the values stored in the variable foodOption, and assigns and stores a value based on this in the 
// variable foodOrder. This is done so that I can keep only one alert message later for the user (since I only need one variable now), instead of three separate ones for each type of food. 
// The default message shouldn't happen since the errors should be caught in previous conditional statements so maybe it isn't needed?
// The goal of this step is to give a confirmation message to the user based on their choice of meal.

let foodOrder = "";

switch (foodSubType) {
  case "1":
    foodOrder = foodOption[0];
    break;
  case "2":
    foodOrder = foodOption[1];
    break;
  case "3":
    foodOrder = foodOption[2];
    break;
  default:
    alert("Invalid choice. Please enter a valid number.");
    process.exit(1);
    break;
}
alert(`Awesome! You have chosen the ${foodOrder}.`);

// Step 4 - Age

// Input where the user adds their age
let userAgeInput = prompt(`Is this food for a child (younger than 15 years old) or an adult? 
Type your age:`);

// Using a ternary conditional operator to assign an age category to the pizzaSize variable. This is later related to meal prices. I wanted to add process.exit(1); after the alert message, but I'm guessing i would have to use a function then for it to work.
let pizzaSize = ""; // adult or child size
let price = "";

pizzaSize = userAgeInput < 15 && userAgeInput > 0 ? "child"
  : userAgeInput >= 15 ? "adult"
  : alert("Oops, looks like you tried to enter an invalid number.");

// If-statement with a nested switch statement. Depending on the pizzaSize value, two different switch statements will execute (adult vs child). In each case the pizzaSize variable relates to individual prices for the different meals. These prices are found in array further up in the code (line 73 - 98).
if (pizzaSize === "adult") {
  switch (foodSubType) {
    case "1": price = foodPrice[0][0];
      break;
    case "2": price = foodPrice[0][1];
      break;
    case "3": price = foodPrice[0][2];
      break;
    default:
      alert("Invalid choice. Please enter a valid number.");
      process.exit(1);
      break;
  }
} else if (pizzaSize === "child") {
  switch (foodSubType) {
    case "1": price = foodPrice[1][0];
      break;
    case "2": price = foodPrice[1][1];
      break;
    case "3": price = foodPrice[1][2];
      break;
    default:
      alert("Invalid choice. Please enter a valid number.");
      process.exit(1);
      break;
  }
}

// Prompt that asks the user to confirm their choices.
let userConfirmation = prompt(`You have chosen one ${pizzaSize} size ${foodOrder}! That will be ${price} kr. Are you sure you want to order this?
  1 - Yes
  2 - No
  `);

// Step 5 - Order confirmation
//  Confirmation messages for the user.

// Switch statement that executes prompt messages to the user depending on if they wanna confirm the order or not.
switch (userConfirmation) {
  case "1":
    alert(`Thank you for your order! Your delicious meal will be prepared. See you soon!`);
    break;
  case "2":
    alert(`No problem! Come back soon again!.`);
    break;
  default:
    alert("Invalid confirmation choice. Please enter a number (1) or (2).");
    process.exit(1);
}