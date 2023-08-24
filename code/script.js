// Step 1 - Welcome and introduction
alert(
  `Welcome to this chick Javascript Pizzeria! Ready to Start? - Click 'OK' to begin.`
);

// Customers name
const customerName = prompt(
  "Please enter your name:"
);

alert(
  `Hi, ${customerName}!
  In the next step, you will chose what to order.`
);

// Step 2 - Food choice --------------------
const foodType = prompt(
  `This is what we have.
  Enter a number:
  1 - Pizza
  2 - Pasta
  3 - Fish`
);

// Chosen food
let chosenFood;

if (foodType == 1) {
  chosenFood = "Pizza";
  alert(`You've chosen ${chosenFood}!`);
} else if (foodType == 2) {
  chosenFood = "Pasta";
  alert(`You've chosen ${chosenFood}!`);
} else if (foodType == 3) {
  chosenFood = "Fish";
  alert(`You've chosen ${chosenFood}!`);
} else {
  alert (`I don't have the choice you made.
  Please refresh and pick a number between 1-3.`);
}

