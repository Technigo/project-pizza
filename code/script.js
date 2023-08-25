// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

const userName = prompt("Please enter your name:");
alert(`Hello, ${userName}! Let's get started.`);


// Step 2 - Food choice
// Your code goes here

const foodChoice = prompt(`Select your yummy food:

1 - Pizza
2 - pasta
3 - Sallad

Please enter the number of your choice:`);

let selectedFood = "";

if (foodChoice === "1") {
  selectedFood = "Pizza";
} else if (foodChoice === "2") {
  selectedFood = "Pasta";
} else if (foodChoice === "3") {
  selectedFood = "Salad";
} else {

  alert("Invalid choice. Please select a valid number.");
  process.exit(1);
}

alert(`You've chosen ${selectedFood}!`);


// Step 3 - Subtype choice
// Your code goes here

let subFood = ""
let foodNames = ""

switch (selectedFood) {
  case "Pizza":
    subFood = prompt(`Select your pizza type:
    1 - Margherita
    2 - Napolitana
    3 - Bianca 
    Please enter the number of your choice:`);
    foodNames = ["Margherita", "Napolitana", "Bianca"];
    break;

  case "Pasta":
    subFood = prompt(`Select your pasta type:
    1 - Cacio e pepe
    2 - Vongole
    3 -  Carbonara 
    Please enter the number of your choice:`);
    foodNames = ["Cacio e pepe", "Vongole", "Carbonara"];
    break;

  case "Salad":
    subFood = prompt(`Select your salad type:
    1 - Pomodoro e basilico
    2 - Buratta
    3 - Melon e peperoncino
    Please enter the number of your choice:`);
    foodNames = ["Pomodoro e basilico", "Buratta", "Melon e peperoncino"];
    break;

  default:
    alert("Invalid choice.");
    process.exit(1);
}

if (subFood === "1") {
  alert(`Great choice, You've selected ${foodNames[0]} for your ${selectedFood}!`)
} else if (subFood === "2") {
  alert(`Great choice, You've selected ${foodNames[1]} for your ${selectedFood}!`)
} else if (subFood === "3") {
  alert(`Great choice, You've selected ${foodNames[2]} for your ${selectedFood}!`)
}

// Step 4 - Age
// Your code goes here

const ageNumber = prompt("Is this food for a child or an adult? Type your age:");









// Step 5 - Order confirmation
// Your code goes here
