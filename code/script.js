// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

const firstName = prompt(`What's your name?`);
alert(`Hello ${firstName}! 👋`);
console.log(`Hello ${firstName}! 👋`);

// Step 2 - Food choice
// Your code goes here

const foodSelection = prompt(
  `What are you craving today?
  1 - Pizza 🍕
  2 - Pasta 🍝
  3 - Salad 🥗
  Please enter the number of your choice`
);
console.log(foodSelection);

let selectedFood = "";

if (foodSelection === "1") {
  selectedFood = "Pizza";
} else if (foodSelection === "2") {
  selectedFood = "Pasta";
} else if (foodSelection === "3") {
  selectedFood = "Salad";
} else {
  alert("Invalid choice, please start again and select an option. Bye 👋");
  exit(1);
}

alert(`You chose ${selectedFood}!`);

console.log(selectedFood);

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
