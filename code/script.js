// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

const userName = prompt("What is you name?");

alert(
  `Nice to meet you ${userName}!`
)


// Step 2 - Food choice
// Your code goes here

const foodChoice = prompt(`What food would you like to order today? Enter a number: 
1.Pizza 
2.Pasta 
3.Salad`);

let selectedFood

if (foodChoice === "1") {
  selectedFood = "Pizza";
} else if (foodChoice === "2") {
  selectedFood = "Pasta";
} else if (foodChoice === "3") {
  selectedFood = "Salad";
} else {
  alert(`Invalid choice. Please select a valid number ${userName}`);
  process.exit(1);
}


alert(
  `Nice ${userName} , you've choosen ${selectedFood}!`
)



// Step 3 - Subtype choice
// Your code goes here

let foodSlot = "";
let foodOption = "";

switch (selectedFood) {
  case "Pizza":
    foodSlot = prompt(`Select a pizza type:
  1. Napolitana
  2. Pepperoni
  3. Margherita
  Please enter a number of your choice:`);
    foodOption = ["Napolitana", "Pepperoni", "Margherita"];
    break;

  case "Pasta":
    foodSlot = prompt(`Select a pasta type:
  1. Spaghetti carbonara
  2. Ferruccine Alfredo
  3. Cheesy Tortellini
  Please enter a number of your choice:`);
    foodOption = ["Spaghetti carbonara", "Ferruccine Alfredo", "Cheesy Tortellini"];
    break;

  case "Salad":
    foodSlot = prompt(`Select a salad type:
    1. Ceasar salad
    2. Caprese salad
    3. Greek salad
    Please enter a number of your choice:`);
    foodOption = ["Ceasar salad", " Caprese salad", "Greek salad"]
    break;

  default:
    alert(`Invalid choice. Please select a valid number ${userName}`);
    process.exit(1);
}

if (selectedFood === "1") {
  alert(
    `Nice ${userName} , you've choosen ${foodOption[0]}!`);
}
else if (selectedFood === "2") {
  alert(`Nice ${userName} , you've choosen ${foodOption[1]}!`);
}
else if (selectedFood === "3") {
  alert(`Nice ${userName} , you've choosen ${foodOption[2]}!`);
}
{
  alert(`Invalid choice. Please select a valid number ${userName}`);
}


// Step 4 - Age
// Your code goes here

const age = prompt(`Is this food for an adult or a child. Please enter your age.`);
if (age >= 15) {
  const confirmation = prompt(`One adult sized ${selectedFood} will be prepared for you. That'll be €20. 
Are you sure you want to order this? 
Enter a number to confirm: 
1. Yes 
2. No`);
}

else {
  const confirmation = prompt(`One child size ${selectedFood} will be prepared for you. That'll be €10. 
  Are you sure you want to order this? 
  Enter a numer to confirm: 
  1. Yes 
  2. No`);
}

// Step 5 - Order confirmation
// Your code goes here

let orderConfirmation = "";
if (orderConfirmation === "1") {
  orderConfirmation = "Yes",
    alert(`Thank you for your order! Your meal will be prepared shortly. See you soon!`);
}

else if (orderConfirmation === "2") {
  orderConfirmation = "No",
    alert(`No problem, welcome back and order any time you want! See you!`)
}

else {
  alert(`Invalid choice. Please select a valid number ${userName}`)
}