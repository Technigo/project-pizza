// Start here

// Step 1 - Welcome and introduction
// Your code goes here

const pizzeriaName = "Naima's Pizzeria";
alert(`Welcome to ${pizzeriaName}. Ready to Start? - Click 'OK' to begin.`);
const customerName = prompt("Please enter your name.");
alert(`Nice to meet you, ${customerName}!`);

// Step 2 - Food choice
// Your code goes here
const foodChoice = prompt(
  `What would like to order from the menu below? Please enter only a number. 
  1 - Pizza 
  2 - Pasta 
  3 - Salad`
);

if (foodChoice === "1") {
  alert(`Great! You have chosen pizza.`);
} else if (foodChoice === "2") {
  alert(`Great! You have chosen pasta`);
} else if (foodChoice === "3") {
  alert(`Great you have chosen salad`);
} else {
  alert("Invalid number! Please select between the numbers 1 and 3.");
  exit(1);
}

// Step 3 - Subtype choice
// Your code goes here
let subtype;
let subtypeChoices = [];

if (foodChoice === "1") {
  subtype =
    prompt(`Please select which pizza you would like to order. Enter only the number:
      1 - Margarita
      2 - Spicy Chicken
      3 - Vegetarian`);
  subtypeChoices = ["Margarita,", "Spicy Chicken", "Vegetarian"];

  if (subtype === "1") {
    alert(`You have chosen ${subtypeChoices[0]} pizza`);
  } else if (subtype === "2") {
    alert(`You have chosen ${subtypeChoices[1]} pizza`);
  } else if (subtype === "3") {
    alert(`You have chosen ${subtypeChoices[2]} pizza`);
  }
} else if (foodChoice === "2") {
  subtype =
    prompt(`Please select which pasta you would like to order. Enter only the number:
    1 - Creamy Mushroom Pasta
    2 - Bolognese Spaghetti
    3 - Pomodoro Fettucini`);

  subtypeChoices = [
    "Creamy Mushroom Pasta,",
    "Bolognese Spaghetti",
    "Pomodoro Fettucini",
  ];

  if (subtype === "1") {
    alert(`You have chosen ${subtypeChoices[0]}`);
  } else if (subtype === "2") {
    alert(`You have chosen ${subtypeChoices[1]}`);
  } else if (subtype === "3") {
    alert(`You have chosen ${subtypeChoices[0]}`);
  }
} else if (foodChoice === "3") {
  subtype =
    prompt(`Please select which salad you would like to order. Enter only the number:
    1 - Avocado and salmon salad
    2 - Chévre and walnut salad
    3 - Caesar salad`);
  subtypeChoices = [
    "Avocado and salmon salad,",
    "Chévre and walnut salad",
    "Caesar salad",
  ];
  if (subtype === "1") {
    alert(`You have chosen ${subtypeChoices[0]}`);
  } else if (subtype === "2") {
    alert(`You have chosen ${subtypeChoices[1]}`);
  } else if (subtype === "3") {
    alert(`You have chosen ${subtypeChoices[2]}`);
  }
} else {
  alert("Invalid number! Please select between the numbers 1 and 3.");
  exit(1);
}
// Step 4 - Age
// Your code goes here
const age = Number(
  prompt("Is this a child or an adult order? Please type your age:")
);
let confirmation = "";

if (age >= 18) {
  confirmation = prompt(
    `Ok, one adult sized ${
      subtypeChoices[Number(subtype) - 1]
    } order. That will be €15. Would you like to proceed with the order?
    Enter a number to confirm the order.
    1 - Yes
    2 - No`
  );
} else if (age < 18) {
  confirmation = prompt(`Ok, one child sized ${
    subtypeChoices[Number(subtype) - 1]
  } order. That will be €10 . Would you like to proceed with the order?
  Enter a number to confirm the order.
  1 - Yes
  2 - No`);
} else {
  alert("Invalid number!");
  exit(1);
}

// Step 5 - Order confirmation
// Your code goes here
if (confirmation === "1") {
  alert("Your order is complete and will be delivered soon. 🚗");
} else if (confirmation === "2") {
  alert("Ok, no problem! Come back another day. 😃");
}
