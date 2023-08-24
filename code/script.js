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
  alert (`Invalid choice. Please select a valid number ${userName}`);
  process.exit (1);
}


alert(`You've choosen ${selectedFood}!`)

// Step 3 - Subtype choice
// Your code goes here

let foodSlot = "";
let foodOption = "";

switch (selectedFood) {
  case "Pizza":
  foodSlot = prompt (`Select a pizza type:
  1. Napolitana
  2. Pepperoni
  3. Margherita
  Please enter a number of your choice:`);
  foodOption =["Napolitana", "Pepperoni", "Margherita"];
  break;

  case "Pasta":
  foodSlot = prompt (`Select a pasta type:
  1. Spaghetti carbonara
  2. Ferruccine Alfredo
  3. Cheesy Tortellini
  Please enter a number of your choice:`);
  foodOption =["Spaghetti carbonara", "Ferruccine Alfredo", "Cheesy Tortellini"];
  break;

  case "Salad":
    foodSlot = prompt (`Select a salad type:
    1. Ceasar salad
    2. Caprese salad
    3. Greek salad
    Please enter a number of your choice:`);
    foodOption =["Ceasar salad", " Caprese salad", "Greek salad"]
    break;

    default:
      alert (`Invalid choice. Please select a valid number ${userName}`);
      process.exit (1);
}



// Step 4 - Age
// Your code goes here
  
// Step 5 - Order confirmation
// Your code goes here
