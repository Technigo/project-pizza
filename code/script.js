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
let foodOptionText;

let foodOption = prompt("What would you like to order? \n 1 Pizza \n 2 Pasta \n 3 Salad"); {

  if (foodOption == 1) {
    alert("Pizza is a great choice!");
  } else if (foodOption == 2) {
    alert("Amazing! Pasta here is delicious!");
  } else if (foodOption == 3) {
    alert("wow, salad, that is a great choice!");
  } else {
    alert("Oh... are you not hungry? Please choose one of the options!");
  }
}
// Step 3 - Subtype choice

if (foodOption == 1) {
  let pizzaOption = prompt("Which Pizza would you like to order? \n 1 Pizza Bianca \n 2 Pizza con pomodorini \n 3 Quattro Stagioni");
  foodOptionText = "Pizza Bianca"
  if (pizzaOption == 1) {
    alert("You have choosen Pizza Bianca, amazing!");
  } else if (pizzaOption == 2) {
    foodOptionText = "Pizza con Pomodorini"
    alert("You have choosen Pizza con Pomodorini, amazing!");
  } else if (pizzaOption == 3) {
    foodOptionText = "Quattro Stagioni"
    alert("You have choosen Quattro Stagioni, amazing!");
  } else {
    alert("Please choose a number between 1-3");
  }
} else if (foodOption == 2) {
  let pastaOption = prompt("Which pasta would you like to order? \n 1 Pasta Alio e Olio \n 2 Pasta con Pomodorini \n 3 Pasta allo Scoglio");
  if (pastaOption == 1) {
    foodOptionText = "Pasta Alio e Olio"
    alert("You have choosen Pasta Alio e Olio, amazing!");
  } else if (pastaOption == 2) {
    foodOptionText = "Pasta con Pomodorini"
    alert("You have choosen Pasta con Pomodorini, amazing!");
  } else if (pastaOption == 1) {
    foodOptionText = "Pasta allo Scoglio"
    alert("You have choosen Pasta allo Scoglio, amazing!");
  } else {
    alert("Please choose a number between 1-3");
  }

} else if (foodOption == 3) {
  let saladOption = prompt("Which salad would you like to order? \n 1 Tuna Salad \n 2 Broccoli Salad \n 3 Fruit Salad");
  foodOptionText = "Tuna Salad"
  if (saladOption == 1) {
    alert("You have choosen Tuna Salad, amazing!");
    foodOptionText = "Broccoli Salad"
  } if (saladOption == 2) {
    alert("You have choosen Broccoli Salad, amazing!");
  } if (saladOption == 3) {
    foodOptionText = "Fruit Salad"
    alert("You have choosen Fruit Salad, amazing!");
  } else {
    alert("Please choose a number between 1-3");
  }
} else {
  alert("Please choose a valid option!");
}
// Step 4 - Age
let ageOption = prompt("How old are you?");

if (ageOption >= 18) {
  alert("You have ordered a " + foodOptionText + " from the grown ups menu!");
} else {
  alert("you have ordered a " + foodOptionText + " from the childrens menu!");
}
// Step 5 - Order confirmation

let confirmOption = prompt("One " + ageOption + foodOptionText + "will be prapared for you for only €15. Are you sure you want to order this? \n Enter a number to confirm: \n 1-yes \n 2-No")
