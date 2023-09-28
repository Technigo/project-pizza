// Start here

// Step 1 - Welcome and introduction
alert(
	`Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

const userName = prompt("Please enter your name beloved customer");

alert(`Welcome to our mighty fine pizzeria ${userName}`);

// Step 2 - Food choice
const menu = {
	1: "pizza",
	2: "pasta",
	3: "salad",
};

const order = prompt(
	"Please provide your preferred meal. Enter 1 for pizza, 2 for pasta or 3 for salad."
);

const chosenMeal = menu[order];

alert(`You have ordered ${chosenMeal ? chosenMeal : "nothing"}`);

// Step 3 - Subtype choice

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
