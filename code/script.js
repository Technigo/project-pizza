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
let foodType = ""
let subtypeChoice = ""

switch (selectedFoodChoice) {
  case "Pizza":
    foodType = prompt(`Select a Pizza type. Enter a number:
    1- Napolitiana
    2 - Hawaiian
    3 - Pepperoni`);
    subtypeChoice = ["Napolitiana", "Hawaiian", "Pepperoni"];
    break;
  case "Pasta":
    foodType = prompt(`Select a Pasta type. Enter a number:
  1 - Spaghetti Carbonara
  2 - Fettuccine Alfredo
  3 - Cheesy Tortellini`);
    subtypeChoice = ["Spaghetti Carbonara", "Fettuccine Alfredo", "Cheesy Tortellin"];
    break;
  case "Salad":
      foodType = prompt(`Select a Salad type. Enter a number:
      1 - Ceasar Salad
      2 - Caprese Salad
      3 - Greek Salad`);
      subtypeChoice = ["Ceasar Salad", "Caprese Salad", "Greek Salad"];
      break;
    default:
      alert("Invalid choice.");
      process.exit(1);
}



// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
