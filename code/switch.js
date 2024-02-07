
// Step 1 - Welcome and introduction

alert(
  `Welcome to Wen's Java Pizzeria🍕. Ready to Start? - Click 'OK' to begin.`
);

/* Created a function that ensures the value is not null. If the input is null, the function reprompt until it gets the input from the user.
*/
function getGuestName() {
  let guestName = prompt("What is your first name?");
  switch (true) {
    case !guestName:
			// call the function itself and run the function again
      getGuestName();
      break;
    default:
      alert(`Welcome my dear guest ${guestName}! - Click 'OK' to order.`);
  }
}

// call the function to get the guestname
getGuestName();

// Step 2 - Food choice
/* Create an object for menu, i.e. main food types and subtypes which contains arrays for each category.
*/
const menu = {
  food: ["Pizza", "Pasta", "Salad"],
  pizza: ["Margherita Pizza", "Pepperoni Pizza", "Veggie Pizza"],
  pasta: ["Spaghetti Bolognaise", "Lasagne", "Fettuccine Alfredo"],
  salad: ["Caesar salad", "Greek salad", "Caprese salad"],
};

// Created a function that can be used for every single prompt about the type choice.

function makePrompt(food) {
  let userInput = prompt(`What kind of ${food} would you like?
  Please enter the number of the ${food} type:
  1. ${menu[food][0]}
  2. ${menu[food][1]}
  3. ${menu[food][2]}`);
  return userInput;
}

/* Created a function that can be used for:
1. Main food type & subtype prompt and alert;
2. Looping through the prompt if the input is invalid, i.e. not 1 OR 2 OR 3 until the input is valid.
3. return the value of food name.
*/
function confirmSelection(food) {
  let typeNumber = makePrompt(food);
  switch (typeNumber) {
    case "1":
      alert(`You've chosen ${menu[food][0]}! - Click 'OK' to procceed.`);
      return menu[food][0];
    case "2":
      alert(`You've chosen ${menu[food][1]}! - Click 'OK' to procceed.`);
      return menu[food][1];
    case "3":
      alert(`You've chosen ${menu[food][2]}! - Click 'OK' to procceed.`);
      return menu[food][2];
    default:
			alert("Unfortunately, what you have chosen is not on our menu. - Click 'OK' to see the menu.")
      return confirmSelection(food);
  }
}

// call the function to prompt the first round of food choice
let mainFoodType = confirmSelection("food");
/* call the function again to prompt the second round of food choice. The first letter of mainfood is capitalised, hence we need to use the lowercase method to get the correct string that equals the property of menu object.
*/
let order = confirmSelection(mainFoodType.toLowerCase());

// Step 4 - Age
let age = prompt("Is this food for a child or an adult? Type your age:");

// Created the price confirmation message that can be used in the adult and child sized situations.
let priceConfirmation = `One adult sized ${order} will be prepared for you.
That'll be 99kr.
🚨Are you sure to order?
1. Yes
2. No`;

// Declare the confirmOrder variable so the value of this variable can be reassigned within the function and further can be used in the order confirmation part.
let confirmOrder;
/* Created a function to check the age and customise the prompt message based on the range of the age.
*/
function ageCheck(age) {
  switch (true) {
    case Number(age) <= 123 && Number(age) >= 18:
      confirmOrder = prompt(priceConfirmation);
      break;
    case Number(age) >= 0 && Number(age) < 18:
      confirmOrder = prompt(
        priceConfirmation.replaceAll("adult", "child").replaceAll("99", "79")
      );
      break;
    default:
      age = prompt(`The age you entered is invalid, please enter a valid age.`);
      ageCheck(age);
  }
}
// call the function to perform the prompt about order confirmation
ageCheck(age);

// Step 5 - Order confirmation
/* Switch conditions to check the status of order confirmation.
*/
switch (confirmOrder) {
  case "1":
    alert(
      `Thank you for your order! Your delicious ${order} will be ready in 10min. Bon Appétit 🍽️ !`
    );
    break;
  case "2":
    alert(
      "No problem, come back and refresh the page to order anytime you want."
    );
    break;
  default:
    alert(
      "Sorry, your input is invalid, hence the order is cancelled, please restart."
    );
}
