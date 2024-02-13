// Step 1 - Welcome and introduction
alert(
  `Welcome to the Javascript Pizzeria. Ready to order? - Click 'OK' to begin.`
);

const userName = prompt(`Enter your name`);
alert(`Welcome ${userName}! Let's have a look at the menu.`);

// Step 2 - Food choice
const foodChoice =
  prompt(`What are you craving?

 1 - Pizza
 2 - Pasta
 3 - Salad`);

let selectedFood = "";

if (foodChoice === "1") {
  selectedFood = "Pizza";
} else if (foodChoice === "2") {
  selectedFood = "Pasta";
} else if (foodChoice === "3") {
  selectedFood = "Salad";
} else {
  alert(`Sorry, we don't have that. Make a choice by entering a number between 1-3.`);
  exit(1);
}

alert(`OK! Let's have a look at our ${selectedFood}s.`);

// Step 3 - Subtype choice
let subtypeChoice = "";

if (selectedFood === "Pizza") {
  subtypeChoice = prompt(`Choose your pizza by entering a number between 1-3.

  1 - Vegeteriana
  2 - Mexicana
  3 - Chicken BBQ
  `);
} else if (selectedFood === "Pasta") {
  subtypeChoice = prompt(`Choose your pasta by entering a number between 1-3.

  1 - Alfredo
  2 - Arrabiata
  3 - Pesto`);
} else if (selectedFood === "Salad") {
  subtypeChoice = prompt(`Choose your salad by entering a number between 1-3.

  1 - Tuna
  2 - Feta Cheese
  3 - Ceasar`);
}

let selectedSubtype = "";

if (selectedFood === "Pizza") {
  if (subtypeChoice === "1") {
    selectedSubtype = "Vegetariana";
  } else if (subtypeChoice === "2") {
    selectedSubtype = "Mexicana";
  } else if (subtypeChoice === "3") {
    selectedSubtype = "Chicken BBQ";
  } else {
    alert(`Sorry, we don't have that. Make a choice by entering a number between 1-3.`);
    exit(1);
  }
} else if (selectedFood === "Pasta") {
  if (subtypeChoice === "1") {
    selectedSubtype = "Alfredo";
  } else if (subtypeChoice === "2") {
    selectedSubtype = "Arrabiata";
  } else if (subtypeChoice === "3") {
    selectedSubtype = "Pesto";
  } else {
    alert(`Sorry, we don't have that. Make a choice by entering a number between 1-3.`);
    exit(1);
  }
} else if (selectedFood === "Salad") {
  if (subtypeChoice === "1") {
    selectedSubtype = "Tuna";
  } else if (subtypeChoice === "2") {
    selectedSubtype = "Feta Cheese";
  } else if (subtypeChoice === "3") {
    selectedSubtype = "Ceasar";
  } else {
    alert(`Sorry, we don't have that. Make a choice by entering a number between 1-3.`);
    exit(1);
  }
}

alert(`${selectedSubtype} is always a good choice! Let's move on to the last step.`);

// Step 4 - Age
const age = prompt(`Enter your age in numbers so we can adjust your portion size accordingly.`);

let orderMessage = "";

if (age < 15) {
  orderMessage = prompt(`OK ${userName}, this is your order:

  One kids size ${selectedSubtype}.
  
  Total price:
  10€.
  
  Do you want to place this order?
  1 - Yes
  2 - No`);
} else if (age >= 15) {
  orderMessage = prompt(`OK ${userName}, this is your order:

  One adult size ${selectedSubtype}.
  
  Total price:
  15€.
  
  Do you want to place this order?
  1 - Yes
  2 - No`);
} else {
  alert(`Sorry, we didn't get that. Let's try again.`);
  exit(1);
}

// Step 5 - Order confirmation
if (orderMessage === "1") {
  alert(
    `Thank you for your order! We will start preparing your meal.
    Estimated wait: 10-15 minutes.`);
} else if (orderMessage === "2") {
  alert(`No problem, we're here the next time you're in the mood for something delicious!`);
} else {
  alert(`Sorry, we didn't get that. Let's try again.`);
}