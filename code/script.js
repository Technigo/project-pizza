// Function to prompt the user for input and validate it
function promptAndValidate(message, options) {
  let input;
  do {
    input = prompt(message);
    input = parseInt(input);
  } while (isNaN(input) || !options.includes(input));
  return input;
}

alert(`Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`);

// Step 1 - Welcome and introduction
let customer = prompt("Please enter your name:");
alert(`Nice to meet you, ${customer}!`);

// Step 2 - Food choice
const foodOptions = ["Pizza", "Pasta", "Salad"];
let foodChoice = promptAndValidate(
  `What type of food would you like to order?\n\n Enter a number:\n1. ${foodOptions[0]}\n2. ${foodOptions[1]}\n3. ${foodOptions[2]}`,
  [1, 2, 3]
);

let food;
let subType;

// step 3 Handle food choice & subtype choice
switch (foodChoice) {
  case 1: // Pizza
    const pizzaOptions = ["Napolitana", "Hawaiian", "Pepperoni"];
    let pizzaChoice = promptAndValidate(
      `Select Pizza type:\n\n Enter a number:\n1. ${pizzaOptions[0]}\n2. ${pizzaOptions[1]}\n3. ${pizzaOptions[2]}`,
      [1, 2, 3]
    );
    food = "Pizza";
    subType = pizzaOptions[pizzaChoice - 1];
    break;
  case 2: // Pasta
    const pastaOptions = ["Spaghetti Carbonara", "Fettuccine Alfredo", "Cheesy Tortellini"];
    let pastaChoice = promptAndValidate(
      `Select a Pasta type:\n\n Enter a number:\n1. ${pastaOptions[0]}\n2. ${pastaOptions[1]}\n3. ${pastaOptions[2]}`,
      [1, 2, 3]
    );
    food = "Pasta";
    subType = pastaOptions[pastaChoice - 1];
    break;
  case 3: // Salad
    const saladOptions = ["Caesar Salad", "Caprese Salad", "Greek Salad"];
    let saladChoice = promptAndValidate(
      `Select a Salad type:\n\n Enter a number:\n1. ${saladOptions[0]}\n2. ${saladOptions[1]}\n3. ${saladOptions[2]}`,
      [1, 2, 3]
    );
    food = "Salad";
    subType = saladOptions[saladChoice - 1];
    break;
}

// Display the chos- n food and subtype
alert(`You've chosen ${subType} ${food}!`);

// Step 4 - Age
let customerInputAge = prompt("Is this food for a child or an adult? Type your age:");
customerInputAge = parseInt(customerInputAge);

if (!isNaN(customerInputAge)) {
  let price;
  if (customerInputAge <= 18) {
    price = 10;
  } else {
    price = 15;
  }

  let customerConfirmation = prompt(`One ${customerInputAge <= 18 ? "child" : "adult"} sized ${food} will be prepared for you. That'll be €${price}. Are you sure you want to order this?\n1. Yes\n2. No`);
  
  // Step 5 - Order confirmation
  if (customerConfirmation === "1") {
    alert(`Thank you for your order! Your delicious meal will be prepared. See you soon! 👋🏼`);
  } else if (customerConfirmation === "2") {
    alert(`No problem, come back and order anytime you want.`);
  } else {
    alert(`Invalid choice. Please select 1 for Yes or 2 for No.`);
  }
} else {
  alert(`Invalid age input. Please enter a valid age.`);
}
