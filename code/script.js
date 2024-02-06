// Start here

// Step 1 - Welcome and introduction
// Your code goes here

alert(
  "Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin."
);

let yourName = prompt("Please enter your name:", "Eliane");

alert("Hello " + yourName + "!");

// Step 2 - Food choice
// Your code goes here

let yourChoice = prompt(
  `Please choose between Pizza, Pasta or Salad.
  Enter the number:
  1 for Pizza
  2 for Pasta
  3 for Salad`
);

let foodName;
if (yourChoice === "1") {
  foodName = "Pizza";
} else if (yourChoice === "2") {
  foodName = "Pasta";
} else if (yourChoice === "3") {
  foodName = "Salad";
}

if (foodName === "Pizza") {
  alert("You've chosen " + foodName);
} else if (foodName === "Pasta") {
  alert("You've chosen " + foodName);
} else if (foodName === "Salad") {
  alert("You've chosen " + foodName);
} else {
  alert(
    `Please choose a number between 1 and 3:
    1 for Pizza
    2 for Pasta
    3 for Salad`
  );
}
//Loop!?!?
// Step 3 - Subtype choice
// Your code goes here

let yourSubchoice;
if (foodName === "Pizza") {
  yourSubchoice = prompt(
    `You can now choose between:
    1 - Pizza Margherita
    2 - Pizza ai Funghi
    3 - Pizza Vegetariana`
  );
} else if (foodName === "Pasta") {
  yourSubchoice = prompt(
    `You can now choose between:
    1 - Arrabiata
    2 - Aglio e Olio
    3 - Carbonara`
  );
} else if (foodName === "Salad") {
  yourSubchoice = prompt(
    `You can now choose between:
    1 - Green Salad
    2 - Mixed Salad
    3 - Greek Salad`
  );
}

/* -- do not delete - this works!!!!! --
let pizzaChoice;
if (foodName === "Pizza" && yourSubchoice === "1") {
  pizzaChoice = "Pizza Margherita";
  alert("Good choice! You've put a " + pizzaChoice + " in your basket.");
} else if (foodName === "Pizza" && yourSubchoice === "2") {
  pizzaChoice = "Pizza ai Funghi";
  alert("Good choice! You've put a " + pizzaChoice + " in your basket.");
} else if (foodName === "Pizza" && yourSubchoice === "3") {
  pizzaChoice = "Pizza Vegetariana";
  alert("Good choice! You've put a " + pizzaChoice + " in your basket.");
}

let pastaChoice;
if (foodName === "Pasta" && yourSubchoice === "1") {
  pastaChoice = "Pasta Arrabiata";
  alert("Good choice! You've put a " + pastaChoice + " in your basket.");
} else if (foodName === "Pasta" && yourSubchoice === "2") {
  ppastaChoice = "Pasta Aglio e Olio";
  alert("Good choice! You've put a " + pastaChoice + " in your basket.");
} else if (foodName === "Pasta" && yourSubchoice === "3") {
  pastaChoice = "Pasta Carbonara";
  alert("Good choice! You've put a " + pastaChoice + " in your basket.");
}

let saladChoice;
if (foodName === "Salad" && yourSubchoice === "1") {
  saladChoice = "Green Salad";
  alert("Good choice! You've put a " + saladChoice + " in your basket.");
} else if (foodName === "Salad" && yourSubchoice === "2") {
  saladChoice = "Mixed Salad";
  alert("Good choice! You've put a " + saladChoice + " in your basket.");
} else if (foodName === "Salad" && yourSubchoice === "3") {
  saladChoice = "Greek Salad";
  alert("Good choice! You've put a " + saladChoice + " in your basket.");
}
*/

let foodChoice;
if (foodName === "Pizza" && yourSubchoice === "1") {
  foodChoice = "Pizza Margherita";
  alert("Good choice! You've put a " + foodChoice + " in your basket.");
} else if (foodName === "Pizza" && yourSubchoice === "2") {
  foodChoice = "Pizza ai Funghi";
  alert("Good choice! You've put a " + foodChoice + " in your basket.");
} else if (foodName === "Pizza" && yourSubchoice === "3") {
  foodChoice = "Pizza Vegetariana";
  alert("Good choice! You've put a " + foodChoice + " in your basket.");
} else if (foodName === "Pasta" && yourSubchoice === "1") {
  foodChoice = "Pasta Arrabiata";
  alert("Good choice! You've put a " + foodChoice + " in your basket.");
} else if (foodName === "Pasta" && yourSubchoice === "2") {
  foodChoice = "Pasta Aglio e Olio";
  alert("Good choice! You've put a " + foodChoice + " in your basket.");
} else if (foodName === "Pasta" && yourSubchoice === "3") {
  foodChoice = "Pasta Carbonara";
  alert("Good choice! You've put a " + foodChoice + " in your basket.");
} else if (foodName === "Salad" && yourSubchoice === "1") {
  foodChoice = "Green Salad";
  alert("Good choice! You've put a " + foodChoice + " in your basket.");
} else if (foodName === "Salad" && yourSubchoice === "2") {
  foodChoice = "Mixed Salad";
  alert("Good choice! You've put a " + foodChoice + " in your basket.");
} else if (foodName === "Salad" && yourSubchoice === "3") {
  foodChoice = "Greek Salad";
  alert("Good choice! You've put a " + foodChoice + " in your basket.");
}

// Step 4.1 - Age
// This part defines size of the meal based on the age of the person ordering
// Step 4.2 - This part associates costs to the meal
let yourAge = prompt("Please enter your age to define the size of your meal:");

let orderCost = 10;
if (yourAge <= 12) {
  yourAge = "child size";
  alert(
    "You ordered a " +
      yourAge +
      " " +
      foodChoice +
      " for " +
      orderCost +
      " EUR!"
  );
} else if (yourAge > 12) {
  yourAge = "regular size";
  alert(
    "You ordered a " +
      yourAge +
      " " +
      foodChoice +
      " for " +
      orderCost + //check math here - it's not working!!
      5 +
      " EUR!"
  );
}

let yourOrder = prompt(
  "Thank you for ordering with us. Based on your choices you ordered " +
    yourAge +
    " " +
    foodChoice +
    " for " +
    orderCost + // Check math here - it's not working!!
    " EUR. " +
    "Please confirm your order now. Enter Yes or No to confirm."
);

// Step 5 - Order confirmation
// Your code goes here*/
