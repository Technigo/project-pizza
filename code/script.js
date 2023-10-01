// Start here

// Step 1 - Welcome and introduction
alert(
  "Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin."
);
const userName = prompt(
  "Please, type your name below and click 'OK' to continue."
);
if(!userName){
  alert("Sorry, but we need a name to register the order. Please come back when you are ready.")
  exit(1);
}
alert(
  `Hello, ${userName}! The order will be registered now. Click 'OK' and follow the steps to choose your meal.`
);
// Step 2 - Food choice
const foodType = prompt(
  `Select one of the options below by typing the corresponding number:
  1 - Pizza
  2 - Pasta
  3 - Salad`
)
let foodSelection = "";

switch (foodType){
  case "1":
    foodSelection = "pizza";
    alert(`Great choice! You selected ${foodSelection}.`);
    break;
  case "2":
    foodSelection = "pasta";
    alert(`Mamma Mia! Great choice! You selected ${foodSelection}.`);
    break;
  case "3":
    foodSelection = "salad";
    alert(`You selected ${foodSelection}. Something fresh and light, right?`);
    break;
  default:
    alert("Invalid option, process ended. Please start again when you want. Bye! 👋")
    exit(1);
}
// Step 3 - Subtype choice
let foodSubType = "";
let subTypeSelection = [];

switch (foodSelection){
  case "pizza":
    foodSubType = prompt(
      `Select one of the pizzas type from the menu below:
      1 - Pizza Marguerita
      2 - Pizza Capriciosa
      3 - Pizza Gorgonzola
      Please, type the number of your choice.`
    );
    subTypeSelection = ["Pizza Marguerita", "Pizza Capriciosa", "Pizza Gorgonzola"];
    break;
  case "pasta":
    foodSubType = prompt(
      `Select one of the pastas type from the menu below:
      1 - Pasta Pollo al Limone
      2 - Pasta Bolognese
      3 - Pasta Ai Funghi
      Please, type the number of your choice.`
    );
    subTypeSelection = ["Pasta Pollo al Limone", "Pasta Bolognese", "Pasta Ai Funghi"];
    break;
  case "salad":
    foodSubType = prompt(
      `Select one of the salads type from the menu below:
      1 - Caesar Salad
      2 - Greek Salad
      3 - Coleslaw
      Please, type the number of your choice.`
    );
    subTypeSelection = ["Caesar Salad", "Greek Salad", "Coleslaw"];
    break;
  default:
    alert("Invalid option, process ended. Please start again when you want. Bye! 👋");
    exit(1);
}

alert(`You have selected ${subTypeSelection[parseInt(foodSubType) - 1]}!`);

// Step 4 - Age | Portion Size

//portion price variables
const adultPortionFee = 169;
const childPortionFee = 99;
let portionFeeSelection = 0;

//portion size code
let portionSize = prompt(
  `Which meal size do you want?
  1 - adult portion
  2 - child portion
  Please, type the corresponding number.`
);

if(portionSize === "1"){
  portionSize = "adult portion";
  portionFeeSelection = adultPortionFee;
} else if(portionSize === "2"){
  portionSize = "child portion";
  portionFeeSelection = childPortionFee;
} else {
  alert("Invalid option, process ended. Please start again when you want. Bye! 👋")
}
//evaluate order choices and alert specific response according to it

alert(`The order is ${subTypeSelection[parseInt(foodSubType) - 1]} in ${portionSize}. Total is ${portionFeeSelection}:-.`);

// Step 5 - Order confirmation
const portionConfirmation = prompt(
  `Do you confirm everything is correct and that you wish to proceed?
  1 - Yes
  2 - No`
);

if(portionConfirmation === "1"){
  alert("Great! Order confirmed. Thank you. We'll start preparing your meal right now.")
} else {
  alert(`Order not confirmed. We hope to have you back when you are ready. Process ended now. Bye!👋`);
}