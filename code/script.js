// Step 1 - Welcome and introduction

//Loop until a name is given
let userName = "";
while (!userName) {
  userName = prompt("What's your name? Please enter your name:");
}

// Afficher un message de bienvenue une fois que le nom est entré
alert("Hello, " + userName + " !");
// Step 2 - Food choice
let foodChoice = prompt("What would you like to order ? Select a number :\n1. Pizza\n2. Pasta\n3. Salad");

if (foodChoice == 1) {
  alert("You've chosen a Pizza.");
} else if (foodChoice == 2) {
  alert("You've chosen some Pasta.");
} else if (foodChoice == 3) {
  alert("You've chosen a Salad.");
} else {
  alert("Invalid Choice.");
}

// Step 3 - Subtype choice
// Subtype for Pizza
if (foodChoice == 1) {
  let pizzaType = prompt("Which pizza would you like ?\n1. Margherita\n2. Pepperoni\n3. 4 cheeses");
  if (pizzaType == 1) {
    alert("You've chosen a Margherita Pizza.");
  } else if (pizzaType == 2) {
    alert("You've chosen a Pepperoni Pizza.");
  } else if (pizzaType == 3) {
    alert("You've chosen a 4 Cheeses Pizza.");
  } else {
    alert("Invalid Choice.");
  }
}

// Subtype for Pasta
if (foodChoice == 2) {
  let pastaType = prompt("Which type of pasta would you like?\n1. Carbonara\n2. Bolognese\n3. Pesto");
  if (pastaType == 1) {
    alert("You've chosen Carbonara Pasta.");
  } else if (pastaType == 2) {
    alert("You've chosen Bolognese Pasta.");
  } else if (pastaType == 3) {
    alert("You've chosen Pesto Pasta.");
  } else {
    alert("Invalid Choice.");
  }
}

// Subtype for Salad
if (foodChoice == 3) {
  let saladType = prompt("Which type of salad would you like?\n1. Caesar\n2. Greek\n3. Niçoise");
  if (saladType == 1) {
    alert("You've chosen a Caesar Salad.");
  } else if (saladType == 2) {
    alert("You've chosen a Greek Salad.");
  } else if (saladType == 3) {
    alert("You've chosen a Niçoise Salad.");
  } else {
    alert("Invalid Choice.");
  }
}

// Step 4 - Age
// Asking if the order is for an Adult or A child, the user must enter his age
let ageGroup = prompt("Is the meal for a child or an adult? What's your age ?");

// Déclaration des prix
let finalPrice;
if (ageGroup >= 18) {
  // Adult
  finalPrice = 10; // Prix pour un adulte
  alert("You've selected a meal for an adult. The price is " + finalPrice + " CHF.");
} else {
  // Minor
  finalPrice = 7; // Prix pour un enfant
  alert("You've selected a meal for a child. The price is " + finalPrice + " CHF.");
}

// Step 5 - Order confirmation
let confirmation = prompt("Would you like to confirm your order? Type 'yes' or 'no'.");
if (confirmation.toLowerCase() == 'yes') {
  alert("Thank you! Your meal will be prepared shortly. The total cost is " + finalPrice + " CHF.");
} else {
  alert("We hope to see you again soon!");
}
