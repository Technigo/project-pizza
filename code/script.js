// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

// b) user's name using the prompt
let userName = prompt("What is your name?");

// c)  alert using the name variable to greet the user
alert(
  "Hi, " + userName + "!");


// Step 2 - Food choice
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
//alert message for choice of food
if (foodType) {
  alert("You have selected " + foodType + ".");
} else {
  alert("Invalid choice. Please try again.");
}

// Step 3 - Subtype choice
let subtype;

// Pizza subtypes
if (foodType === "Pizza") {
  subtype = prompt("Please choose a Pizza type:\n1. Margherita\n2. Capricciosa\n3. Marinara\nPlease enter a number:");

  if (subtype === "1") {
    subtype = "Margherita";
  } else if (subtype === "2") {
    subtype = "Capricciosa";
  } else if (subtype === "3") {
    subtype = "Marinara";

    //alert message for subtype of pizza
    alert("You have selected " + subtype + ".");
  } else {
    alert("Invalid choice. Please refresh and try again.");
  }

}
// Pasta subtypes

else if (foodType === "Pasta") {
  subtype = prompt("Please choose a Pasta type:\n1. Carbonara\n2. Arrabiata\n3. Bolognese\nPlease enter a number:");

  if (subtype === "1") {
    subtype = "Carbonara";
  } else if (subtype === "2") {
    subtype = "Arrabiata";
  } else if (subtype === "3") {
    subtype = "Bolognese";

    //alert message for subtype of pasta
  } else {
    alert("Invalid choice. Please refresh and try again.");
  }
  if (subtype) {
    alert("You have selected " + subtype + ".");
  }
}

// Salad subtypes
else if (foodType === "Salad") {
  subtype = prompt("Please choose a Salad type:\n1. Greek salad\n2. Salad Nicoise \n3. Caesar salad\nPlease enter a number:");

  if (subtype === "1") {
    subtype = "Greek salad";
  } else if (subtype === "2") {
    subtype = "Salad Nicoise";
  } else if (subtype === "3") {
    subtype = "Caesar salad";

    //alert message for subtyoe of salad
    alert("You have selected " + subtype + ".");
  } else {
    alert("Invalid choice. Please refresh and try again.");
  }
}
// Step 4 - Age
let age = prompt("Is this food for a child or an adult? Please type your age:");

let ageGroup, cost;

if (age < 16) {
  ageGroup = "Child";
  cost = "€8.00";
} else if (age >= 16) {
  ageGroup = "Adult";
  cost = "€10.00";
} else {
  alert("Invalid age entered. Please try again.");
}



// Step 5 - Order confirmation
if (ageGroup && foodType && subtype) {
  let orderDetails = "You have selected a " + foodType + " (" + subtype + ") for a " + ageGroup + ". The cost will be " + cost + ". Would you like to confirm your order?";
  let confirmation = prompt(orderDetails + "\n1. Yes\n2. No\nPlease enter a number:");

  if (confirmation === "1") {
    alert("Thank you! Your meal will be prepared shortly.");
  } else if (confirmation === "2") {
    alert("Thank you for visiting! We hope to see you again soon.");
  } else {
    alert("Invalid choice. Please refresh the page and try again.");
  }
}
