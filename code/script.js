// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
let userName = prompt("What's your name?");
alert(`Hi ${userName}!`);

// Step 2 - Food choice
// Your code goes here

let foodChoice = prompt(
  `Hello ${userName}, what would you like to order?\n1. Pizza\n2. Pasta\n3. Salad`
);
let chosenFood;
switch (foodChoice) {
  case "1":
    chosenFood = "Pizza";
    break;
  case "2":
    chosenFood = "Pasta";
    break;
  case "3":
    chosenFood = "Salad";
    break;
  default:
    chosenFood = "Unknown";
}
alert(`You've chosen ${chosenFood}.`);



// Step 3 - Subtype choice
// Your code goes here

let subtypeChoice;
if (chosenFood !== "Unknown") {
  if (chosenFood == "Pizza") {
    subtypeChoice = prompt(
      `What type of ${chosenFood} would you like?\n1. Margherita\n2. Pepperoni\n3. Veggie`
    );
  } else if (chosenFood == "Pasta") {
    subtypeChoice = prompt(
      `What type of ${chosenFood} would you like?\n1. Spaghetti\n2. Fettuccine Alfredo\n3. Penne Pesto`
    );
  } else if (chosenFood == "Salad") {
    subtypeChoice = prompt(
      `What type of ${chosenFood} would you like?\n1. Caesar Salad\n2. Greek Salad\n3. Caprese Salad`
    );
  }
}
if (subtypeChoice) {
  alert(`You've chosen ${subtypeChoice}.`);
}

// Step 4 - Age
// Your code goes here

let ageChoice = prompt("Is this for a child or an adult?");
let orderMessage;
if (ageChoice.toLowerCase() === "child") {
  orderMessage = `You've ordered a ${chosenFood} for a child. Enjoy your meal!`;
} else if (ageChoice.toLowerCase() === "adult") {
  orderMessage = `You've ordered a ${chosenFood} for an adult. Enjoy your meal!`;
} else {
  orderMessage = "We're not sure who this order is for. Enjoy your meal!";
}


// Step 5 - Order confirmation
// Your code goes here
let confirmation = prompt(`${orderMessage} Confirm your order? (yes/no)`);
if (confirmation.toLowerCase() === "yes") {
  alert("Thank you for your order! Your meal will be prepared.");
} else {
  alert("We hope to see you again soon. Have a great day!");
}