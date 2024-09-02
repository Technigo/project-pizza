// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

// b) Ask for the user's name using the prompt
let userName = prompt("What is your name?");

// c) Create an alert using the name variable to greet the user
alert(
  "Hi, " + userName + "!");


// Step 2 - Food choice
// Your code goes here
let choice = prompt("What food would you like to order?\n1. Pizza\n2. Pasta\n3. Salad\nEnter a number:");
let foodType;
if (choice === "1") {
  foodType = "Pizza";
} else if (choice === "2") {
  foodType = "Pasta";
} else if (choice === "3") {
  foodType = "Salad";
} else {
  foodType = null;
}

// Display a message using the alert() method to confirm the user's selection
if (foodType) {
  alert("You have selected " + foodType + ".");
} else {
  alert("Invalid choice. Please try again.");
}

// Step 3 - Subtype choice
// Your code goes here
// Let's assume 'foodType' contains the choice from Step 2, like "Pizza", "Pasta", or "Salad"
let subtype;

if (foodType === "Pizza") {
  // Pizza subtypes
  subtype = prompt("Please choose a Pizza type:\n1. Margherita\n2. Capricciosa\n3. Marinara\nPlease enter a number:");

  if (subtype === "1") {
    subtype = "Margherita";
  } else if (subtype === "2") {
    subtype = "Capricciosa";
  } else if (subtype === "3") {
    subtype = "Marinara";
    alert("You have selected " + subtype + ".");
  } else {
    alert("Invalid choice. Please refresh and try again.");
  }

}

else if (foodType === "Pasta") {
  // Pasta subtypes
  subtype = prompt("Please choose a Pasta type:\n1. Carbonara\n2. Arrabiata\n3. Bolognese\nPlease enter a number:");

  if (subtype === "1") {
    subtype = "Carbonara";
  } else if (subtype === "2") {
    subtype = "Arrabiata";
  } else if (subtype === "3") {
    subtype = "Bolognese";
  } else {
    alert("Invalid choice. Please refresh and try again.");
  }
  if (subtype) {
    alert("You have selected " + subtype + ".");
  }
}

else if (foodType === "Salad") {
  // Salad subtypes
  subtype = prompt("Please choose a Salad type:\n1. Greek salad\n2. Salad Nicoise \n3. Caesar salad\nPlease enter a number:");

  if (subtype === "1") {
    subtype = "Greek salad";
  } else if (subtype === "2") {
    subtype = "Salad Nicoise";
  } else if (subtype === "3") {
    subtype = "Caesar salad";
    alert("You have selected " + subtype + ".");
  } else {
    alert("Invalid choice. Please refresh and try again.");
  }
}
// Step 4 - Age
// Your code goes here
let age = prompt("Is this food for a child or an adult? Type your age:");

// Determine if the user is a child or an adult based on the entered age
let ageGroup, cost;

if (age < 16) {
  ageGroup = "Child";
  cost = "€8.00";
} else if (age >= 16) {
  ageGroup = "Adult";
  cost = "€10.00";
} else {
  alert("Invalid age entered. Please refresh the page and try again.");
}



// Step 5 - Order confirmation
// Your code goes here
if (ageGroup && foodType && subtype) {
  let orderDetails = "You have selected a " + foodType + " (" + subtype + ") for a " + ageGroup + ". The cost will be " + cost + ". Would you like to confirm your order?";
  let confirmation = prompt(orderDetails + "\n1. Yes\n2. No\nEnter the number corresponding to your choice:");

  if (confirmation === "1") {
    alert("Thank you! Your meal will be prepared shortly.");
  } else if (confirmation === "2") {
    alert("Thank you for visiting! We hope to see you again soon.");
  } else {
    alert("Invalid choice. Please refresh the page and try again.");
  }
}
