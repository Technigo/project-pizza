// Step 1 - Welcome and introduction
alert(
  "Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin."
)

let userName = prompt("Please enter your name:");

alert(`Hi, ${userName}!`)

// Step 2 - Food choice
let foodChoice = prompt("What type of food would you like to order?\nEnter a number:\n1 - Pizza\n2 - Pasta\n3 - Salad");

// User food coice
let foodName = "";
if (foodChoice === "1") {
  foodName = "Pizza";
  alert("You have selected Pizza!");
} else if (foodChoice === "2") {
  foodName = "Pasta";
  alert("You've selected Pasta");
} else if (foodChoice === "3") {
  foodName = "Salad";
  alert("You've selected Salad");
} else {
  alert("Invalid choice, please enter a number between 1 and 3.");
}

//Step 3 Subtype choice
let subTypeChoice = "";
let subTypeName = "";

if (foodChoice === "1") {
  // subtypes for pizza
  subTypeChoice = prompt("Which type of Pizza would you like?\n1 - Margherita\n2 - Pepperoni\n3 - Vesuvio");
  if (subTypeChoice === "1") {
    subTypeName = "Margherita";
    alert("You've selected Margherita!");
  } else if (subTypeChoice === "2") {
    subTypeName = "Pepperoni";
    alert("You've selected Pepperoni!");
  } else if (subTypeChoice === "3") {
    subTypeName = "Vesuvio";
    alert("You've selected Vesuvio!");
  } else {
    alert("Invalid choice, please enter a number between 1 and 3.");
  }
} else if (foodChoice === "2") {
  // subtypes for pasta
  subTypeChoice = prompt("Which type of Pasta would you like?\n1 - Spaghetti Carbonara!\n2 - Lasagna!\n3 - Cheesy Tortellini!");
  if (subTypeChoice === "1") {
    subTypeName = "Spaghetti Carbonara";
    alert("You've selected Spaghetti Carbonara!");
  } else if (subTypeChoice === "2") {
    subTypeName = "Lasagna";
    alert("You've selected Lasagna!");
  } else if (subTypeChoice === "3") {
    subTypeName = "Cheesy Tortellini";
    alert("You've selected Cheesy Tortellini!");
  } else {
    alert("Invalid choice, please enter a number between 1 and 3.");
  }
} else if (foodChoice === "3") {
  //subtypes for salad
  subTypeChoice = prompt("Which type of salad would you like?\n1 - Ceasar Salad!\n2 - Greek Salad!\n3 - Garden Salad!");
  if (subTypeChoice === "1") {
    subTypeName = "Ceasar Salad";
    alert("You've selected Ceasar Salad!");
  } else if (subTypeChoice === "2") {
    subTypeName = "Greek Salad";
    alert("You've selected Greek Salad!");
  } else if (subTypeChoice === "3") {
    subTypeName = "Garden Salad";
    alert("You've selected Garden Salad!");
  } else {
    alert("Invalid choice, please enter a number between 1 and 3.");
  }
}

// Step 4 - Identify user's age 
let userAge = prompt("Please enter your age:");

//variable to store the size and price based on age
let size = "";
let price = "";

// check if user is a child or an adult
if (userAge >= 18) {
  size = "adult";
  price = 15;
} else if (userAge > 0 && userAge < 18) {
  size = "child";
  price = 10;
} else {
  alert("Invalid input, please enter a valid age");
}

let confirmation = prompt(`One ${size} sized ${subTypeName} will be prepared for you. That'll be €${price}. Are you sure you want to order this?\nEnter a number to confirm:\n1 - Yes\n2 - No`);

// Step 5 - Order confirmation
if (confirmation === "1") {
  alert("Your order has been confirmed. Enjoy your meal!");
} else {
  alert("Your order has been cancelled. Feel free to order our delicious food in the future!");
}