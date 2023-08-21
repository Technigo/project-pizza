// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
let person = prompt("Please enter you name");

if (person != null) {
  alert("Hello " + person + "!" + " that is a really cool name!");
}

// Step 2 - Food choice
let foodOption = prompt("What would you like to order? \n 1 Pizza \n 2 Pasta \n 3 Salad");
if (foodOption == 1) {
  alert("Pizza is a great choice!");
} else if (foodOption == 2) {
  alert("Amazing! Pasta here is delicious!");
} else if (foodOption == 3) {
  alert("wow, salad, that is a great choice!");
} else {
  alert("Oh... are you not hungry? Please choose one of the options!");
}

// Step 3 - Subtype choice
if (foodOption == 1) {
  let foodOption = prompt("Which Pizza would you like to order? \n 1 Pizza Bianca \n 2 Pizza con pomodorini \n 3 Quattro Stagioni");
}
if (foodOption == 2) {
  let foodOption = prompt("Which pasta would you like to order? \n 1 Pasta Alio e Olio \n 2 Pasta con Pomodorini \n 3 Pasta allo Scoglio");
}
if (foodOption == 3) {
  let foodOption = prompt("Which salad would you like to order? \n 1 Tuna Salad \n 2 Broccoli Salad \n 3 Fruit Salad");
} else {
  alert("Oh... are you not hungry? Please choose one of the options!");
}

// Step 4 - Age
let ageOption = prompt("Is the food for a child or an adult?");

// Step 5 - Order confirmation
// Your code goes here
