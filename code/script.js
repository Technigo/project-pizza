// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

const userName = prompt(
  "Please, type your name below and click 'OK' to continue."
);

alert (`Hello, ${userName}! The order will be registered under your name.
Click 'OK' and follow the steps to choose your meal.`);

// Step 2 - Food choice
const foodType = prompt(
  `Select one of the options below by typing the corresponding number:
  1 - Pizza
  2 - Pasta
  3 - Salad`
)
let foodSelection;

if(foodType === "1") {
  foodSelection = "Pizza";
  alert(`Great choice! You selected ${foodSelection}!`)
} else if(foodType === "2") {
  foodSelection = "Pasta";
  alert(`Mamma Mia! You selected ${foodSelection}!`)
} else if(foodType === "3") {
  foodSelection = "Salad";
  alert(`Something fresh and light today! You selected ${foodSelection}!`)
} else {
  alert("Invalid option, process ended. Please start again when you want. Bye! 👋")
}
// Step 3 - Subtype choice
// Your code goes here
let foodSubType = "";
let subTypeSelection = [];

switch (foodSelection){
  case "Pizza":
    foodSubType = prompt(
      `Select one of the pizzas from the menu below:
      1 - Marguerita
      2 - Capriciosa
      3 - Gorgonzola
      Please, type the number of your choice.`
    );
    subTypeSelection = ["Marguerita", "Capriciosa", "Gorgonzola"];
    break;

    case "Pasta":
    foodSubType = prompt(
      `Select one of the pastas from the menu below:
      1 - Pollo al limone
      2 - Bolognese
      3 - Ai Funghi
      Please, type the number of your choice.`
    );
    subTypeSelection = ["Pollo al limone", "Bolognese", "Ai Funghi"];
    break;

    case "Salad":
      foodSubType = prompt(
        `Select one of the salads from the menu below:
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

if(foodSubType === "1"){
  alert(`You have selected ${subTypeSelection[0]}!`);
} else if (foodSubType ==="2"){
  alert(`You have selected ${subTypeSelection[1]}!`);
} else if (foodSubType === "3"){
  alert(`You have selected ${subTypeSelection[2]}!`);
}
// const foodSubType;

// switch (foodSubType) {
//   case 1

// }

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
