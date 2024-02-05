// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to Wen's Java Pizzeria🍕. Ready to Start? - Click 'OK' to begin.`
)
let guestName = prompt("What is your first name?");

function getGuestName(guestName){
  if(guestName) {
    alert(`Welcome ${guestName}! - Click 'OK' to order.`);
  } else {
    guestName = prompt("What is your first name?");
    getGuestName(guestName);
  }
}

getGuestName(guestName);

// Step 2 - Food choice
// Your code goes here
let chosenType = prompt(
  `Which type of food would you like to order? Please type the number below.
  1. Pizza🍕
  2. Pasta🍝
  3. Salad🥗`
); 
const foodType = ["Pizza", "Pasta", "Salad"];

function selectFood(chosenType, foodType){
  switch (chosenType) {
    case "1":
      alert(`You've chosen ${foodType[0]}!`);
      return foodType[0];
    case "2":
      alert(`You've chosen ${foodType[1]}!`);
      return foodType[1];
    case "3":
      alert(`You've chosen ${foodType[2]}!`);
      return foodType[2];
    default:
      chosenType = prompt(`Unfortunately, what you have chosen is not on our menu.
      🚨Please enter a valid number as below.
      1. ${foodType[0]}
      2. ${foodType[1]}
      3. ${foodType[2]}`);
      selectFood(chosenType, foodType);
  }
}

selectFood(chosenType, foodType);

// Step 3 - Subtype choice
// Your code goes here

let subType = ""
let order = ""
// 🍕Subtypes of Pizza
const pizzaType = ["Margherita Pizza", "Pepperoni Pizza", "Veggie Pizza"];
// 🍝Subtypes of Pasta
const pastaType = ["Spaghetti Bolognaise", "Lasagne", "Fettuccine Alfredo"];
// 🥗Subtypes of Salad
const saladType = ["Caesar salad", "Greek salad", "Caprese salad"];


if (chosenType == 1){
  subType = prompt(`What kind of pizza would you like?
  Please enter the number of the pizza type:
  1. Margherita Pizza
  2. Pepperoni Pizza
  3. Veggie Pizza`
  );
  // const pizzaType = ["Margherita Pizza", "Pepperoni Pizza", "Veggie Pizza"];
  order = selectFood(subType, pizzaType);
} else if (chosenType == 2){
  subType = prompt(`What kind of pasta would you like?
  Please enter the number of the pasta type:
  1. Spaghetti Bolognaise
  2. Lasagne
  3. Fettuccine Alfredo`);
  // const pastaType = ["Spaghetti Bolognaise", "Lasagne", "Fettuccine Alfredo"];
  order = selectFood(subType, pastaType);
} else {
  subType = prompt(`What kind of salad would you like?
  Please enter the number of the salad type:
  1. Caesar salad
  2. Greek salad
  3. Caprese salad`);
  // const saladType = ["Caesar salad", "Greek salad", "Caprese salad"];
  order = selectFood(subType, saladType);
}


// Step 4 - Age
// Your code goes here
let confirmOrder = ""
let age = prompt("Is this food for a child or an adult? Type your age:");
function checkAge(age){
  if (Number(age) <= 123 && Number(age) >= 18){
    confirmOrder = prompt(`One adult sized ${order} will be prepared for you. That'll be 99kr.
    Are you sure to order?
    1. Yes
    2. No`);
  } else if (Number(age) >= 0 && Number(age) < 18) {
    confirmOrder = prompt(`One child sized ${order} will be prepared for you. That'll be 79kr.
    Are you sure to order?
    1. Yes
    2. No`);
  } else {
    age = prompt(`The age you entered is invalid, please enter a valid age.`);
    checkAge(age);
  } 
}

checkAge(age);

// Step 5 - Order confirmation
// Your code goes here
if (confirmOrder === "1"){
  alert(`Thank you for your order! Your delicious ${order} will be ready in 10min. Bon Appétit 🍽️ !`);
} else {
  alert("No problem, come back and refresh the page to order anytime you want.");
}