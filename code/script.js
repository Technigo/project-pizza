// Start here

// Step 1 - Welcome and introduction
alert(`Hey stranger! Welcome to our Pizza Popup! Ready to Start? - Click 'OK' to begin.`);

// Ask the user for their name
const name = prompt("What is your name?");

// Display a greeting with their name
alert("Hello " + name + "!");

// Step 2 - Food choice
const foodChoice = prompt(
  "What would you like to order? Please choose a number:\n1. Pizza\n2. Pasta\n3. Salad"
);

let whatKind = ""; // This will store the specific food item

// Display their food of choice
if (foodChoice === "1") {
  alert("You've ordered a pizza!");
} else if (foodChoice === "2") {
  alert("You've ordered pasta!");
} else if (foodChoice === "3") {
  alert("You've ordered a salad!");
} else {
  alert("Invalid choice. Please use a number between 1 and 3");
}

// Step 3 - Subtype choice
if (foodChoice === "1") {
  // if the user chooses Pizza
  whatKind = prompt(
    "What kind of Pizza would you like? Please choose a number:\n1. Margherita\n2. Pepperoni\n3. Hawaii"
  );

  if (whatKind === "1") {
    whatKind = "Margherita pizza";
  } else if (whatKind === "2") {
    whatKind = "Pepperoni pizza";
  } else if (whatKind === "3") {
    whatKind = "Hawaii pizza";
  } else {
    alert("Invalid choice");
  }

} else if (foodChoice === "2") {
  // if the user chooses Pasta
  whatKind = prompt(
    "What kind of pasta would you like? Please choose a number:\n1. Vodka pasta\n2. Carbonara\n3. Bolognese"
  );

  if (whatKind === "1") {
    whatKind = "Vodka pasta";
  } else if (whatKind === "2") {
    whatKind = "Carbonara";
  } else if (whatKind === "3") {
    whatKind = "Bolognese";
  } else {
    alert("Invalid choice");
  }

} else if (foodChoice === "3") {
  // if the user chooses Salad
  whatKind = prompt(
    "What kind of salad would you like? Please choose a number:\n1. Ceasar salad\n2. Greek salad\n3. Tuna salad"
  );

  if (whatKind === "1") {
    whatKind = "Ceasar salad";
  } else if (whatKind === "2") {
    whatKind = "Greek salad";
  } else if (whatKind === "3") {
    whatKind = "Tuna salad";
  } else {
    alert("Invalid choice");
  }
}

// Step 4 - Age
// Asks the user for their age
const age = parseInt(
  prompt(`One ${whatKind} it is! Is this order for a child or an adult? Type your age:`)
);

let price = ""; //stores the price
let portionSize = ""; //stores the portion size (adult/child)

if (age) {
  if (age <= 10) {
    price = "50kr";
    portionSize = "child-sized";
  } else {
    price = "100kr";
    portionSize = "adult-sized";
  }
} else {
  alert("Invalid entry. Refresh the page and try again");
}

// Step 5 - Order confirmation
const orderConfirm = parseInt(
  prompt(
    `Got it ${name}! One ${portionSize} ${whatKind} is on the way. That will be ${price}.\nPlease confirm your order:\n1. Yes \n2. No`
  )
);

if (orderConfirm === 1) {
  alert(`Thank you ${name} for your order! We are preparing your ${whatKind} now.`);
} else if (orderConfirm === 2) {
  alert("That's cool! You are welcome back anytime.");
} else {
  alert("Sorry - invalid answer. Please try again!");
}
