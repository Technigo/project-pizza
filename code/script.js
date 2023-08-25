// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Gotlands best Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
const username = prompt("Please enter your name!");
alert(`Hallo ${username} lets make your order!`);

// Step 2 - Food choice
//
// ... (your previous code)

// Step 2 - Food choice
// Your code goes here
const foodChoice = prompt(`What would you like to eat today?:
  1 - Pasta
  2 - Pizza
  3 - Salad
  Please enter the number of your choice:`);

let chosenFood = "";

if (foodChoice === "1") {
  chosenFood = "Pasta";
} else if (foodChoice === "2") {
  chosenFood = "Pizza";
} else if (foodChoice === "3") {
  chosenFood = "Salad";
} else {
  alert("Invalid choice, please select a valid number! ");
  process.exit(1);
}

alert(`You've chosen to eat a ${chosenFood}!`);

// Step 3 - Subtype choice
// Your code goes here

let selectedDish = ""; // Initialize selectedDish as an empty string

switch (chosenFood) {
  case "Pasta":
    selectedDish = prompt(`Please select your favorite Pasta:
    1 - Bolognese
    2 - Carbonara
    3 - Fettuccine
    Please enter the number of your choice!`);
    dishes = ["Bolognese", "Carbonara", "Fettuccine"];
    break;
  case "Pizza":
    selectedDish = prompt(`Please select your favorite Italian Pizza:
    1 - Margherita (Tomatosauce, mozarella, basil)
    2 - Caprese (tomato, buffalo mozarella, basil, oliveoil) 
    3 - Quattro formaggio (Mozarella, Gorgonzola, Provolone, Pecorino)
    Please enter the number of your choice!`);
    dishes = ["Margherita", "Caprese", "Quattro formaggio"];
    break;
  case "Salad":
    selectedDish = prompt(`Please select your favorite salad!:
    1 - Caesar Salad (Chicken, romaine lettuce, parmesan, Caesar dressing)
    2 - Greek Salad (Lettuce, feta cheese, red onions, cucumber, tomato)
    3 - Shrimp Salad (Lettuce, corn, tomato, cucumber, shrimps, dressing)
    Please enter the number of your choice!`);
    dishes = ["Caesar Salad", "Greek Salad", "Shrimp Salad"];
    break;
  default:
    alert("Invalid choice, please select a valid number! ");
    process.exit(1);
}


// Step 4 - Age
// Your code goes here
const age = prompt(`Please enter your age`);

// Calculate selectedDishNumber 
const selectedDishNumber = Number(selectedDish) - 1;


// Step 5 - Order confirmation
// Your code goes here

if (selectedDishNumber >= 0 && selectedDishNumber < dishes.length) {
  const mealSize = age >= 15 ? "normal sized dish" : "juniorsized meal";
  const mealPrice = age >= 15 ? "13€" : "7€";

  const confirmation = confirm(`Hi ${username}, please confirm your order:
  You've chosen ${dishes[selectedDishNumber]} for your ${mealSize} at a price of ${mealPrice}.
  Click OK to confirm or Cancel to decline.`);

  if (confirmation) {
    alert("Thank you for your order! Your meal will be prepared and will be ready in about 15 minutes.");
  } else {
    alert("Thank you for considering us. We hope to serve you in the future. Have a great day!");
  }
} else {
  alert("Invalid dish selection. Please try again.");
}
