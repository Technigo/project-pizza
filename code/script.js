
// Function to display a welcome message
function welcomeMessage() {
  alert("Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.");
}

// Function to get user's name
function getUserName() {
  let userName = prompt("What is your name?");
  if (userName === null || userName === "") {
    alert("You did not provide a valid name. Please try again.");
    return null;
  } else {
    alert(`Nice to meet you, ${userName}!`);
    return userName;
  }
}

// Function to handle food choice
function chooseFood() {
  return prompt("What type of food would you like to order?\nEnter a number: \n  1 - Pizza \n  2 - Pasta \n  3 - Salad");
}

// Function to handle pizza selection
function choosePizza() {
  let pizzaOptions = ["Napolitana", "Hawaian", "Pepperoni"];
  let pizzaChoice = prompt("Select a Pizza type:\n  Enter a number: \n  1 - Napolitana \n  2 - Hawaian \n  3 - Pepperoni");
  return pizzaOptions[parseInt(pizzaChoice) - 1];
}

// Function to handle pasta selection
function choosePasta() {
  let pastaOptions = ["Spaghetti Carbonara", "Fettuccine Alfredo", "Cheesy Tortellini"];
  let pastaChoice = prompt("Select a Pasta type:\n  Enter a number: \n  1 - Spaghetti Carbonara \n  2 - Fettuccine Alfredo \n  3 - Cheesy Tortellini");
  return pastaOptions[parseInt(pastaChoice) - 1];
}

// Function to handle salad selection
function chooseSalad() {
  let saladOptions = ["Caesar Salad", "Caprese Salad", "Greek Salad"];
  let saladChoice = prompt("Select a Salad type:\n  Enter a number: \n  1 - Caesar Salad \n  2 - Caprese Salad \n  3 - Greek Salad");
  return saladOptions[parseInt(saladChoice) - 1];
}

// Function to determine if food is for adult or child
function determineAge(selectedFood, selectedFoodType) {
  let age = parseInt(prompt("Is this food for a child or an adult? Type your age:"));
  if (!isNaN(age)) {
    if (age >= 18) {
      let adultAge = prompt(`One adult sized ${selectedFoodType} ${selectedFood} will be prepared for you. That will be 150 SEK. Are you sure you want to order this?\nEnter a number to confirm:\n1 - Yes\n2 - No`);
      if (adultAge === "1") {
        alert("Thank you for your order! Your delicious meal will be prepared. See you soon!");
      } else if (adultAge === "2") {
        alert("No problem, come back and order anytime you want.");
      } else {
        alert("Invalid choice. Please enter 1 or 2.");
      }
    } else if (age >= 0) {
      let childAge = prompt(`One child sized ${selectedFoodType} ${selectedFood} will be prepared for you. That will be 100 SEK. Are you sure you want to order this?\nEnter a number to confirm:\n1 - Yes\n2 - No`);
      if (childAge === "1") {
        alert("Thank you for your order! Your delicious meal will be prepared. See you soon!");
      } else if (childAge === "2") {
        alert("No problem, come back and order anytime you want.");
      } else {
        alert("Invalid choice. Please enter 1 or 2.");
      }
    } else {
      alert("Invalid age. Please enter a positive number.");
    }
  } else {
    alert("Invalid input. Please enter a number for your age.");
  }
}

let selectedFood = null; // Variable to store selected food
let selectedFoodType = null; // Variable to store selected food type

// Main execution
welcomeMessage();

let userName = getUserName();

if (userName !== null) {
  let foodChoice = chooseFood();

  switch (foodChoice) {
    case "1":
      alert("You've chosen pizza!");
      selectedFood = "Pizza";
      selectedFoodType = choosePizza(); // Store the selected pizza type
      break;

    case "2":
      alert("You've chosen Pasta");
      selectedFood = "Pasta";
      selectedFoodType = choosePasta(); // Store the selected pasta type
      break;

    case "3":
      alert("You've chosen Salad");
      selectedFood = "Salad";
      selectedFoodType = chooseSalad(); // Store the selected salad type
      break;

    default:
      alert("Invalid choice. Please enter 1, 2, or 3.");
  }

  determineAge(selectedFood, selectedFoodType); // Pass selectedFood and selectedFoodType
}
