// Step 1 - Welcome and introduction
//a
alert(
  `Welcome to this chick JavaScript Pizzeria! Ready to Start? - Click 'OK' to begin.`
);

//b
const customerName = prompt("Enter your name:");

//c
alert(`Hi, ${customerName}! Proceed to place an order.`);


// Step 2 - Food choice
const foodType = prompt(
  `What type of food would you like to order?
  Enter a number:
  1 - Pizza
  2 - Pasta
  3 - Salad`
);

let chosenFoodType;

if (foodType == 1) {
  chosenFoodType = "Pizza";
} else if (foodType == 2) {
  chosenFoodType = "Pasta";
} else if (foodType == 3) {
  chosenFoodType = "Salad";
} else {
  alert("Invalid choice. Refresh and try again.");
  process.exit(1);
}

alert (`You've chosen ${chosenFoodType}!`);

// 3 - Subtype choice
let pizzaType;
let pastaType;
let saladType;

if (chosenFoodType == "Pizza") {
  pizzaType = prompt(
    `Select a Pizza type.
    Enter a number:
    1 - Hawaiian
    2 - Pepperoni
    3 - Veggie`
  );
} else if (chosenFoodType == "Pasta") {
  pastaType = prompt(
    `Select a Pasta type.
    Enter a number:
    1 - Napolitana
    2 - Penne Alla Vodka
    3 - Creamy Tomato With Burrata`
  );
} else if (chosenFoodType == "Salad") {
  saladType = prompt(
    `Select a Salad type.
    Enter a number:
    1 - Greek
    2 - Caesar
    3 - Fruit`
  );
} else {
  alert("Invalid choice. Refresh and try again.");
  process.exit(1);
}

let finalOrder;

if (chosenFoodType == "Pizza") {
  if (pizzaType == 1) {
    finalOrder = "Hawaiian pizza";
  } else if (pizzaType == 2) {
    finalOrder = "Pepperoni pizza";
  } else if (pizzaType == 3) {
    finalOrder = "Veggie pizza";
  } else {
    alert("Invalid pizza choice. Refresh and try again.");
    process.exit(1);
  }
} else if (chosenFoodType == "Pasta") {
  if (pastaType == 1) {
    finalOrder = "Napolitana pasta";
  } else if (pastaType == 2) {
    finalOrder = "Penne Alla Vodka pasta";
  } else if (pastaType == 3) {
    finalOrder = "Creamy Tomato With Burrata pasta";
  } else {
    alert("Invalid pasta choice. Refresh and try again.");
    process.exit(1);
  }
} else if (chosenFoodType == "Salad") {
  if (saladType == 1) {
    finalOrder = "Greek salad";
  } else if (saladType == 2) {
    finalOrder = "Caesar salad";
  } else if (saladType == 3) {
    finalOrder = "Fruit salad";
  } else {
    alert("Invalid salad choice. Refresh and try again.");
    process.exit(1);
  }
} else {
  alert("Invalid choice. Refresh and try again.");
  process.exit(1);
}

alert(
  `Great ${customerName}, you've chosen a ${finalOrder}!`
  );



