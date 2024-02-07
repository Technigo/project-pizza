// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);
let firstName = prompt("What is your name?");
alert("Hi " + firstName + "!");

// Step 2 - Food choice
let orderFood = prompt(
  "What type of food would you like to order? \nEnter your choice:\n1 - Pizza\n2 - Pasta\n3 - Salad"
);
let foodType;
switch (parseInt(orderFood)) {
  case 1:
    foodType = "Pizza";
    break;
  case 2:
    foodType = "Pasta";
    break;
  case 3:
    foodType = "Salad";
    break;
}
alert("You have chosen " + foodType + "!");

// Step 3 - Subtype choice
let subType;
if (foodType === "Pizza") {
  subType = prompt(
    "What type of " +
      foodType +
      " would you like?\n1 - Margherita\n2 - Pepperoni\n3 - Hawaiian"
  );
  switch (parseInt(subType)) {
    case 1:
      subType = "Margherita";
      break;
    case 2:
      subType = "Pepperoni";
      break;
    case 3:
      subType = "Hawaiian";
      break;
    default:
      subType = "Unknown";
  }
} else if (foodType === "Pasta") {
  subType = prompt(
    "What type of " +
      foodType +
      " would you like?\n1 - Spaghetti Carbonara\n2 - Penne Arrabiata\n3 - Fettuccine Alfredo"
  );
  switch (parseInt(subType)) {
    case 1:
      subType = "Spaghetti Carbonara";
      break;
    case 2:
      subType = "Penne Arrabiata";
      break;
    case 3:
      subType = "Fettuccine Alfredo";
      break;
    default:
      subType = "Unknown";
  }
} else if (foodType === "Salad") {
  subType = prompt(
    "What type of " +
      foodType +
      " would you like?\n1 - Caesar Salad\n2 - Greek Salad\n3 - Caprese Salad"
  );
  switch (parseInt(subType)) {
    case 1:
      subType = "Caesar Salad";
      break;
    case 2:
      subType = "Greek Salad";
      break;
    case 3:
      subType = "Caprese Salad";
      break;
    default:
      subType = "Unknown";
  }
} else {
  subType = "Sorry! Please make your order again.";
}
alert("You have chosen " + subType + "!");

// Step 4 - Age
let age = prompt("Is this food for an adult or a child? Type your age:");
let confirmation;
if (age < 18) {
  confirmation = prompt(
    "One child sized " +
      subType +
      " will be prepared for you. That'll be €10. Are you sure you want to order this? \nEnter a number to confirm: \n1 - Yes\n2 - No"
  );
}

if (age >= 18) {
  confirmation = prompt(
    "One adult sized " +
      subType +
      " will be prepared for you. That'll be €15. Are you sure you want to order this? \nEnter a number to confirm: \n1 - Yes\n2 - No"
  );
}
if (confirmation === "1") {
  alert(
    "Thank you for your order! Your delicious meal will be prepared. See you soon!👋"
  );
} else {
  alert("Order cancelled. Please order again if you change your mind.🙏");
}
// Step 5 - Order confirmation
