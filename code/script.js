// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
const firstName = prompt("Please enter your name:");
alert (`Hello, ${firstName}! Let's get started.`);    

// Step 2 - Food choice
alert(`Time to choose what food you want!`)
const foodChoice = prompt(`What type of food would you like to order? 
Enter a number: 
1 - Pizza 
2 - Pasta 
3 - Salad
`);

let selectedFoodChoice = "";
if (foodChoice === "1") {
  selectedFoodChoice = "Pizza";
} else if (foodChoice === "2") {
  selectedFoodChoice = "Pasta";
} else if (foodChoice === "3") {
  selectedFoodChoice = "Salad";
} else {
  alert("Invaild choice. Please select a number between 1 and 3.");
  process.exit(1);
}

alert(`You've chosen ${selectedFoodChoice}!`);

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
