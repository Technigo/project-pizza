// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Online Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

//Prompt the user to enter their name.
const userName = prompt("Please provide us your username?");

if (userName === null || !isNaN(parseInt(userName)) || userName.trim() === ""){
  alert("You response is not valid");
  exit(1);
} else {
  alert(`Hello ${userName}!! I would like to take your order please!!`); 
}

//Display a greeting message with the user's name.



// Step 2 - Food choice
// Prompt the user to select the food.
const foodChoice = prompt(
  `What would you like to have today?
  1 - Pizza
  2 - Burger
  3 - Pasta
Please enter a number to order!
`
).toLowerCase();

//Initializing a variable to store the selected food.

let selectedFood = "";

//Determine the selected food based on the user's choice
if (foodChoice === "1" || foodChoice === "pizza") {
  selectedFood = "Pizza 🍕";
} else if (foodChoice === "2" || foodChoice === "burger") {
  selectedFood = "Burger 🍔";
} else if (foodChoice === "3" || foodChoice === "pasta") {
  selectedFood = "Pasta 🍝";
} else {
  alert("Invalid choice, please start again and select an option.");
  exit(1);
}

alert(`You choose ${selectedFood}`);

// Step 3 - Subtype choice
// using swtich method to store the selectedSubType of the food
let selectedSubType = "";
let foodType = [];

switch (selectedFood) {
  case "Pizza 🍕":
    selectedSubType = prompt(
      `
        Which type of pizza do you want?
        1 - Magareta
        2 - Napoli
        3 - Taglio
        Please enter the number of your choice 
        `
    );
    foodType = ["Magareta", "Napoli", "Taglio"];
    break;

  case "Burger 🍔":
    selectedSubType = prompt(
      `
        Which type of burger  do you want?
        1 - Chicken
        2 - Veg
        3 - Beef
        Please enter the number of your choice `
    );
    foodType = ["Chicken", "Veg", "Beef"];
    break;

  case "Pasta 🍝":
    selectedSubType = prompt(
      `
        Which type of pasta  do you want?
        1 - Spaghetti
        2 - Pappardelle
        3 - Carbonara
        Please enter the number of your choice `
    );
    foodType = ["Spaghetti", "Pappardelle", "Carbonara"];
    break;

  default:
    alert(
      "Invalid choice, please start again and select an option. Waiting for your order!!"
    );
    exit(1);
}

if (selectedSubType === "1") {
  alert(`Great Choice!! ${foodType[0]} ${selectedFood}`);
} else if (selectedSubType === "2") {
  alert(`Great choice! ${foodType[1]} ${selectedFood}`);
} else if (selectedSubType === "3") {
  alert(`Great Choice! ${foodType[2]} ${selectedFood}`);
} else {
  alert("Invalid choice! Please start again");
}

// Step 4 - Age
// creating a age variable and based on it calculating the price of the meal
const age = parseInt(prompt(`How old are you?`));
let price = "";

if (age >= 18) {
  (price = "200 SEK") && alert ("You will received a Adult Meal");
} else {
  (price = "100 SEK") && alert ("You will received a Child Meal");
}

// Step 5 - Order confirmation
// creating a variable to show the order summary and ask the order confirmation and show alert as per their selection

const confirmOrder = prompt(`
Order Summary:
Dear ${userName}, You have ordered ${
  foodType[selectedSubType - 1]
} ${selectedFood}.
The total price is ${price}.
Do you confirm your order? 
1 - yes
2 - no?`).toLowerCase();

if (confirmOrder === "1" || confirmOrder === "yes") {
  alert(`Your order is on the way!! 🚚 `);
} else if (confirmOrder === "2" || confirmOrder === "no") {
  alert(`Please!! Order when you are ready!`);
} else {
  alert(`Invalid choice!!`);
  exit(1);
}
