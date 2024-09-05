// Start here

// Step 1 - Welcome and introduction
alert(
  "Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin."
)

let userName = prompt("Please enter your name:");
// add a console log here maybe

alert(`Hi, ${userName}!`)

// Step 2 - Food choice
let foodChoice = prompt("What type of food would you like to order?\nEnter a number:\n1 - Pizza\n2 - Pasta\n3 - Salad");

// check user food coice
if (foodChoice === "1") {
  alert("You have selected Pizza!");

  // Ask for pizza type only if pizza is selected
  let pizzaType = prompt("Select a Pizza type:\nEnter a number:\n1 - Napolitana\n2 - Hawaian\n3 - Peperoni");
  if (pizzaType === "1") {
    alert("You have selected Napolitana!");
  } else if (pizzaType === "2") {
    alert("You have selected Hawaian");
  } else if (pizzaType === "3") {
    alert("You have selected Peperoni");
  } else {
    alert("Invalid choice! Please enter a number between 1 and 3.");
  }

} else if (foodChoice === "2") {
  alert("You have selected Pasta!");

  // Ask for pasta type only if pasta is selected
  let pastaType = prompt("Select a Pasta type:\nEnter a number:\n1 - Spaghetti Carbonara\n2 - Fettuccine Alfredo\n3 - Cheesy Tortellini");
  if (pastaType === "1") {
    alert("You have selected Spaghetti Carbonara!");
  } else if (pastaType === "2") {
    alert("You have selected Fettuccine Alfredo");
  } else if (pastaType === "3") {
    alert("You have selected Cheesy Tortellini");
  } else {
    alert("Invalid choice! Please enter a number between 1 and 3.");
  }

} else if (foodChoice === "3") {
  alert("You have selected Salad!");

  // Ask for pizza type only if pizza is selected
  let saladType = prompt("Select a Salad type:\nEnter a number:\n1 - Ceasar Salad\n2 - Caprese Salad\n3 - Greek Salad");
  if (saladType === "1") {
    alert("You have selected Ceasar salad!");
  } else if (saladType === "2") {
    alert("You have selected Caprese Salad");
  } else if (saladType === "3") {
    alert("You have selected Greek salad");
  } else {
    alert("Invalid choice! Please enter a number between 1 and 3.");
  }
}






// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
