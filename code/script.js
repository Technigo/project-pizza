// Step 1 - Welcome and introduction
alert('Welcome to Trattoria Pizzeria. Ready to Start? - Click "OK" to begin.');

let userName = prompt("Please enter your name:");
alert(`Hi ${userName}, nice to meet you!`);

// Step 2 - Food choice
let userSelection = prompt(
  `What type of food would you like to order?
  Please select a number: 
    1 - Pizza
    2 - Pasta
    3 - Salad`
);

let foodType;
if (userSelection === "1") {
  foodType = "Pizza";
} else if (userSelection === "2") {
  foodType = "Pasta";
} else if (userSelection === "3") {
  foodType = "Salad";
} else {
  alert("Invalid selection. Please choose a number between 1 and 3.");
  throw new Error("Invalid selection"); // Stop the script if selection is invalid
}

// Step 3 - Subtype choice
let subtypeSelection;

if (foodType === "Pizza") {
  subtypeSelection = prompt(
    `Select a Pizza type
    Enter a number: 
      1 - Napolitana
      2 - Hawaiian
      3 - Pepperoni`
  );
  let pizzaType;
  if (subtypeSelection === "1") {
    pizzaType = "Napolitana";
  } else if (subtypeSelection === "2") {
    pizzaType = "Hawaiian";
  } else if (subtypeSelection === "3") {
    pizzaType = "Pepperoni";
  } else {
    alert("Invalid selection. Please choose a number between 1 and 3.");
    throw new Error("Invalid pizza type selection"); // Stop the script if selection is invalid
  }
} else if (foodType === "Pasta") {
  subtypeSelection = prompt(
    `Select a Pasta type
    Enter a number: 
      1 - Carbonara
      2 - Vongole
      3 - Lasagna`
  );
  let pastaType;
  if (subtypeSelection === "1") {
    pastaType = "Carbonara";
  } else if (subtypeSelection === "2") {
    pastaType = "Vongole";
  } else if (subtypeSelection === "3") {
    pastaType = "Lasagna";
  } else {
    alert("Invalid selection. Please choose a number between 1 and 3.");
    throw new Error("Invalid pasta type selection"); // Stop the script if selection is invalid
  }
} else if (foodType === "Salad") {
  subtypeSelection = prompt(
    `Select a Salad type
    Enter a number: 
      1 - Caprese
      2 - Insalata Russa
      3 - Giardiniera`
  );
  let saladType;
  if (subtypeSelection === "1") {
    saladType = "Caprese";
  } else if (subtypeSelection === "2") {
    saladType = "Insalata Russa";
  } else if (subtypeSelection === "3") {
    saladType = "Giardiniera";
  } else {
    alert("Invalid selection. Please choose a number between 1 and 3.");
    throw new Error("Invalid salad type selection"); // Stop the script if selection is invalid
  }
}

// Step 4 - Age
let age = prompt(
  'Is this food intended for a child or an adult? Type "child" or "adult":'
);

// Example cost for simplicity
let cost;
if (age.toLowerCase() === "adult") {
  cost = "15 USD"; // Adult meal cost
} else if (age.toLowerCase() === "child") {
  cost = "10 USD"; // Child meal cost
} else {
  alert('Invalid input. Please type "child" or "adult".');
  throw new Error("Invalid age input"); // Stop the script if input is invalid
}

// Confirm order details
let confirmation = confirm(
  `You have ordered ${foodType} (${
    foodType === "Pizza"
      ? pizzaType
      : foodType === "Pasta"
      ? pastaType
      : saladType
  }) for a ${age} at ${cost}. Click "OK" to confirm or "Cancel" to modify.`
);

if (confirmation) {
  alert("Thank you for your order! Your meal will be prepared.");
} else {
  alert("Order cancelled. We hope to see you again!");
}
