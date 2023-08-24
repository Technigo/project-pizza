// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

const userName = prompt("What is you name?");

alert(
  `Nice to meet you ${userName}!`
)


// Step 2 - Food choice
// Your code goes here

const foodChoice = prompt("What food would you like to order today? Enter a number: 1.Pizza 2.Pasta 3.Salad ");


// Step 3 - Subtype choice
// Your code goes here

let selectedFood

if (foodChoice === "1") {
  selectedFood = "Pizza";
} else if (foodChoice === "2") {
  selectedFood = "Pasta";
} else if (foodChoice === "3") {
  selectedFood = "Salad";
} else {
  alert("Invalid choice. Please select a valid number.");
  process.exit(1);
}


alert(`You've choosen ${selectedFood}!`)

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
