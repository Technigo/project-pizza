var userName = prompt("What is your name?");

// Step 2 - Food choice
var userChoice = prompt("What do you want today?\n1. Pizza\n2. Pasta\n3. Salad\nPlease write the number of your choice (1, 2, or 3).");

var foodSubtypeChoice;
switch (userChoice) {
  case "1":
    foodSubtypeChoice = "Superdelicious margarita";
    break;
  case "2":
    foodSubtypeChoice = "The big favorite capricciosa";
    break;
  case "3":
    foodSubtypeChoice = "A new and exciting experience: half margarita and half capricciosa";
    break;
}

// Step 4 - Age
var ageConfirmation = prompt("Is this order for a child or an adult?");
var orderMessage = generateOrderMessage(ageConfirmation, foodSubtypeChoice);
alert(orderMessage);

// Step 5 - Order confirmation
var confirmOrder = confirm(`Just to confirm:\nYou ordered a ${foodSubtypeChoice} from our ${userChoice} menu.\nIs this correct?`);

if (confirmOrder) {
  alert(`Your order has been confirmed, ${userName}!\nIt will be served shortly.`);
} else {
  alert(`No worries, ${userName}! If you'd like to make any changes, please let our staff know.`);
}

function generateOrderMessage(ageConfirmation, foodSubtypeChoice) {
  if (ageConfirmation === "child") {
    return `You've ordered a child's ${foodSubtypeChoice}. It will be prepared shortly.`;
  } else if (ageConfirmation === "adult") {
    return `You've ordered an adult ${foodSubtypeChoice}. It will be prepared shortly.`;
  } else {
    return "Your selection was not recognized. Please specify if this order is for a child or an adult.";
  }
}
