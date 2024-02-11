// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

const customer = prompt("Please enter your name");

if (customer == null || customer === "") {
  alert("Invalid entry, please try again. Thank you!");
  exit(1);
}

alert(`Hello ${customer} and welcome to Cancino pizzeria`);

const foodChoiceOptions = ["Panini", "Pizza", "Salad", "Calzone"];
// Array indexes starts at 0
// Step 2 - Food choice
const foodChoiceInput = prompt(`
  What would you like to order?
  1 - ${foodChoiceOptions[0]}
  2 - ${foodChoiceOptions[1]}
  3 - ${foodChoiceOptions[2]}
  4 - ${foodChoiceOptions[3]}
`);

let foodChoice;

if (
  isNaN(foodChoiceInput) ||
  Number(foodChoiceInput) < 1 ||
  Number(foodChoiceInput) > 4
) {
  alert("Sorry, invalid option. Please select a number between 1 and 4");
  exit(1);
} else {
  foodChoice = foodChoiceOptions[foodChoiceInput - 1];
  alert(`You have chosen ${foodChoice}`);
}

// Step 3 - Subtype choice
// Your code goes here

const foodSubtypePanini = ["Avocado & Tomatoes", "Cheese & Jam", "Four Cheese"];
const foodSubtypePizza = ["Vegan", "Hawaiian", "Kebab"];
const foodSubtypeSalad = ["Grilled Chicken", "Shrimp", "Greek"];
const foodSubtypeCalzone = ["Peperoni", "Ricotta & Spinach", "BBQ Chicken"];

let subMenuChoice;
let subMenuInput;

switch (foodChoice) {
  case "Panini":
    subMenuInput = prompt(`Select a number:
      1 - ${foodSubtypePanini[0]}
      2 - ${foodSubtypePanini[1]}
      3 - ${foodSubtypePanini[2]}
      `);
    break;
  case "Pizza":
    subMenuInput = prompt(`Select a number:
      1 - ${foodSubtypePizza[0]}
      2 - ${foodSubtypePizza[1]}
      3 - ${foodSubtypePizza[2]}
      `);
    break;
  case "Salad":
    subMenuInput = prompt(`Select a number:
      1 - ${foodSubtypeSalad[0]}
      2 - ${foodSubtypeSalad[1]}
      3 - ${foodSubtypeSalad[2]}
      `);
    break;
  case "Calzone":
    subMenuInput = prompt(`Select a number:
      1 - ${foodSubtypeCalzone[0]}
      2 - ${foodSubtypeCalzone[1]}
      3 - ${foodSubtypeCalzone[2]}
      `);
    break;
}

if (
  isNaN(subMenuInput) ||
  Number(subMenuInput) < 1 ||
  Number(subMenuInput) > 3
) {
  alert("Sorry, invalid option. Please select a number between 1 and 3");
  exit(1);
} else {
  switch (foodChoice) {
    case "Panini":
      subMenuChoice = foodSubtypePanini[subMenuInput - 1];
      break;
    case "Pizza":
      subMenuChoice = foodSubtypePizza[subMenuInput - 1];
      break;
    case "Salad":
      subMenuChoice = foodSubtypeSalad[subMenuInput - 1];
      break;
    case "Calzone":
      subMenuChoice = foodSubtypeCalzone[subMenuInput - 1];
      break;
  }

  alert(`You have chosen ${foodChoice} with ${subMenuChoice}`);
}

// Step 4 - Age
// Your code goes here

const customerAge = prompt(
  "Should the portion be for a child or an adult? Detail your age:"
);

if (customerAge < 0) {
  alert("Invalid entry, please try again. Thank you!");
  exit(1);
}

let confirmation;

if (customerAge <= 18) {
  confirmation =
    prompt(`One child portion ${foodChoice} with ${subMenuChoice} it is on preparation for you. That'll be 90SEK. Are you sure you want to order this?
  Select a number to confirm:
    1 - Of course!
    2 - Not really
  `);
} else {
  confirmation =
    prompt(`One adult portion ${foodChoice} with ${subMenuChoice} it is on preparation for you. That'll be 110SEK. Are you sure you want to order this?
  Select a number to confirm:
    1 - Of course!
    2 - Not really
  `);
}

// Step 5 - Order confirmation
// Your code goes here

if (confirmation == 1) {
  alert(`Thank you for your order, your meal is on your way!`);
} else if (confirmation == 2) {
  alert(`Thank you for visit Cancino Pizzeria, come back anytime!`);
} else {
  alert(`Sorry!, Invalid input`);
  exit(1);
}
