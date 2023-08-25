// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);
// Ask the user for their name and store the input in a variable
const userName = prompt(`Please enter your name:`);

// Display a greeting using the user's name
if (userName) {
  alert(`Hello, ${userName} ! Welcome to our Javascript Pizzeria. 🍕`);
} else {
  alert(`No name entered.☹️`);
};
// Step 2 - Food choice
const foodChoice = prompt(`What food would you like to order? 
 Enter a number:
 1 - Pizza
 2 - Pasta
 3 - Salad`);

let foodType;

if (foodChoice === "1") {
  foodType = "Pizza";
  alert(`You chosen  pizza.`);
} else if (foodChoice === "2") {
  foodType = "Pasta";
  alert(`You chosen  pasta.`);
} else if (foodChoice === "3") {
  foodType = "Salad";
  alert(`You chosen salad.`);
} else {
  alert("Please select again.");
};


// Step 3 - Subtype choice
// Your code goes here

let pizzaType;
let pastaType;
let saladType;

if (foodType === "Pizza") {
  pizzaType= prompt(`Choose a type of Pizza
  1 - Margherita
  2 - Pepperoni
  3 - Vegetarian `);

  if (pizzaType === "1") {
        alert(`You chosen Margherita pizza.`);
      } else if (pizzaType === "2") {
        alert(`You chosen Pepperoni pizza.`);
      } else if (pizzaType === "3") {
        alert(`You chosen Vegetarian pizza.`);
      } else {
        alert(`Invalid pizza type selection.`);
      }
} else if (foodType === "Pasta") {
  pastaType = prompt(`Choose a type of Pasta
  1 - Spaghetti
  2 - Alfredo
  3 - Penne`);
  if (pastaType === "1") {
        alert(`You chosen Spaghetti.`);
      } else if (pastaType === "2") {
        alert(`You chosen Alfredo.`);
      } else if (pastaType === "3") {
        alert(`You chosen Penne .`);
      } else {
        alert(`Invalid pasta type selection.`);
      }
} else if (foodType === "Salad") {
  saladType = prompt(`CHoose a type of Salad
  1 - Caesar
  2 - Greek
  3 - Garden`);
  if (saladType === "1") {
        alert(`You chosen Caesar Salad.`);
      } else if (saladType === "2") {
        alert(`You chosen Greek Salad.`);
      } else if (saladType === "3") {
        alert(`You chosen Garden Salad.`);
      } else {
        alert(`Invalid salad type selection.`);
      }
} else {
  alert("Something went wrong. Please try again.");
};

// Step 4 - Age
// Your code goes here
const ageChoice = prompt(`Who order? Write your age`)

let orderMessage;
// let prise;

if (ageChoice >= 18) {
  orderMessage = `You've ordered a adult size ${foodType}. That will be 130 SEK`;
} else if (ageChoice < 18){
  orderMessage = `You've ordered a child size ${foodType}. That will be 100 SEK`;
} else {
  orderMessage = "Invalid choice. Please specify 'child' or 'adult'.";
}
alert(orderMessage);

// Step 5 - Order confirmation
// Your code goes here
const confirmation = prompt("Would you like to confirm your order? (Yes/No)");

if (confirmation === "yes") {
  alert(`Thank you for your order !`)
} else if (confirmation === "no") {
  alert(`We hope to serve you again in the future.`)
} else {
  alert("Invalid choice. Please specify 'Yes' or 'No'.");
}
