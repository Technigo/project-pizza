// Step 1 - Welcome and introduction
alert(
  "Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin."
);

const yourName = prompt("Please enter your name:", "Eliane"); // after the "," is the default value

alert(`Hello ${yourName}!
Let's order some delicious food`);

// Step 2 - Food choice
const yourChoice = parseInt(
  prompt(
    `Please choose between Pizza, Pasta or Salad.
    Enter the number:
    1 for Pizza
    2 for Pasta
    3 for Salad`
  )
);

let foodName;
switch (yourChoice) {
  case 1:
    foodName = "Pizza";
    alert(`You've chosen ${foodName}`);
    break;
  case 2:
    foodName = "Pasta";
    alert(`You've chosen ${foodName}`);
    break;
  case 3:
    foodName = "Salad";
    alert(`You've chosen ${foodName}`);
    break;
  default:
    alert(`Invalid response.
  Please choose a number between 1 and 3.`);
    exit(1);
}

// Step 3 - Subtype choice
let yourSubchoice;
switch (foodName) {
  case "Pizza":
    yourSubchoice = prompt(`You can now choose between:
    1 - Pizza Margherita
    2 - Pizza ai Funghi
    3 - Pizza Vegetariana`);
    break;
  case "Pasta":
    yourSubchoice = prompt(`You can now choose between:
    1 - Arrabiata
    2 - Aglio e Olio
    3 - Carbonara`);
    break;
  case "Salad":
    yourSubchoice = prompt(`You can now choose between:
    1 - Green Salad
    2 - Mixed Salad
    3 - Greek Salad`);
    break;
}
//logical operators like && can be nested
let foodChoice;
switch (foodName) {
  case "Pizza":
    switch (yourSubchoice) {
      case "1":
        foodChoice = "Pizza Margherita";
        break;
      case "2":
        foodChoice = "Pizza ai Funghi";
        break;
      case "3":
        foodChoice = "Pizza Vegetariana";
        break;
      default:
        alert(`Please choose a number between 1 and 3 for Pizza. Try again!`);
        exit(1);
    }
    break;
  case "Pasta":
    switch (yourSubchoice) {
      case "1":
        foodChoice = "Pasta Arrabiata";
        break;
      case "2":
        foodChoice = "Pasta Aglio e Olio";
        break;
      case "3":
        foodChoice = "Pasta Carbonara";
        break;
      default:
        alert(`Please choose a number between 1 and 3 for Pasta. Try again!`);
        exit(1);
    }
    break;
  case "Salad":
    switch (yourSubchoice) {
      case "1":
        foodChoice = "Green Salad";
        break;
      case "2":
        foodChoice = "Mixed Salad";
        break;
      case "3":
        foodChoice = "Greek Salad";
        break;
      default:
        alert(`Please choose a number between 1 and 3 for Salad. Try again!`);
        exit(1);
    }
    break;
  default:
    alert(`Invalid food name. Please try again!`);
    exit(1);
}

if (foodChoice) {
  alert(`Good choice! You've put a ${foodChoice} in your basket.`);
} else {
  alert(`Please choose a valid option. Try again!`);
  exit(1);
}

// Step 4
// This part defines size of the meal based on the age of the person ordering
let yourAge = parseInt(
  prompt(
    `Please enter your age to define the size of your meal.
Children under the age of 13 get a child sized meal.`
  )
);

let orderCost = 10;
switch (true) {
  case yourAge <= 12:
    yourAge = "child size";
    alert(`You ordered a ${yourAge} ${foodChoice} for ${orderCost} EUR!`);
    break;
  case yourAge > 12:
    yourAge = "regular size";
    alert(`You ordered a ${yourAge} ${foodChoice} for ${orderCost + 5} EUR!`);
    break;
  default:
    alert("Invalid response. Please start over!");
    exit(1);
}

// Step 5 - Order confirmation
let confirmation = prompt(
  "Do you want to place your order? Type yes or no"
).toLowerCase();
switch (confirmation) {
  case "yes":
    alert("Thank you for ordering with us. We start preparing your meal now.");
    break;
  case "no":
    alert("You changed your mind? Please come back for future orders.");
    break;
  default:
    alert("Invalid response. Please start over!");
}
