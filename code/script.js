// Start here

// Step 1 - Welcome and introduction
alert(
  "Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin."
);

let yourName = prompt("Please enter your name:", "Eliane");

alert("Hello " + yourName + "!");

// Step 2 - Food choice
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
} else {
  alert(`Invalid response.
Please choose a number between 1 and 3.`);
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
// Step 3 - Subtype choice
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
} else {
  alert(`Please choose a number between 1 and 3. Try again!`);
}

// Step 4
// This part defines size of the meal based on the age of the person ordering
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
      (orderCost + 5) +
      " EUR! "
  );
} else {
  alert("Invalid response. Please start over!");
}

// Step 5 - Order confirmation
let confirmation = prompt("Do you want to place your order? Type yes or no");
if (
  confirmation === "yes" ||
  confirmation === "Yes" ||
  confirmation === "YES"
) {
  alert("Thank you for ordering with us. We start preparing your meal now.");
} else if (
  confirmation === "no" ||
  confirmation === "No" ||
  confirmation === "NO"
) {
  alert("You changed your mind? Please come back for future orders.");
} else {
  alert("Invalid response. Please start over!");
}
