// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
const firstName = prompt("Please enter your name:");
alert (`Hello, ${firstName}! Let's get started.`);    

// Step 2 - Food choice
alert(`Time to choose what food you want!`)
const foodChoice = prompt(`What type of food would you like to order? 
Enter a number: 
1 - Pizza 
2 - Pasta 
3 - Salad
`);

let selectedFoodChoice = "";
if (foodChoice === "1") {
  selectedFoodChoice = "Pizza";
} else if (foodChoice === "2") {
  selectedFoodChoice = "Pasta";
} else if (foodChoice === "3") {
  selectedFoodChoice = "Salad";
} else {
  alert("Invaild choice. Please select a number between 1 and 3.");
  process.exit(1);
}

alert(`You've chosen ${selectedFoodChoice}!`);

// Step 3 - Subtype choice
let pizzaType = ""
let pastaType = ""
let saladType = ""
let subtypeChoice = ""

if (selectedFoodChoice === "Pizza")
  pizzaType = prompt(
    `Delicious! What kind of pizza do you want? Type a number.
  1 - Napolitiana
  2 - Hawaiian
  3 - Pepperoni`
  ); if (pizzaType == 1) {
    subtypeChoice = "Napolitiana"
    alert(
      `You chose a ${subtypeChoice} ${selectedFoodChoice}.`
    )
  } else if (pizzaType == 2) {
    subtypeChoice = "Hawaiian"
    alert(
      `You chose a ${subtypeChoice} ${selectedFoodChoice}.`
    )
  } else if (pizzaType == 3) {
    subtypeChoice = "Pepperoni"
    alert(
      `You chose a ${subtypeChoice} ${selectedFoodChoice}.`
    )
  }

  if (selectedFoodChoice === "Pasta")
  pastaType = prompt(
    `Delicious! What kind of pasta do you want? Type a number.
  1 - Spaghetti Carbonara
  2 - Fettuccine Alfredo
  3 - Cheesy Tortellini`
  ); if (pastaType == 1) {
    subtypeChoice = "Spaghetti Carbonara"
    alert(
      `You chose a ${subtypeChoice} ${selectedFoodChoice}.`
    )
  } else if (pastaType == 2) {
    subtypeChoice = "Fettuccine Alfredo"
    alert(
      `You chose a ${subtypeChoice} ${selectedFoodChoice}.`
    )
  } else if (pastaType == 3) {
    subtypeChoice = "Cheesy Tortellini"
    alert(
      `You chose a ${subtypeChoice} ${selectedFoodChoice}.`
    )
  }

  if (selectedFoodChoice === "Salad")
  saladType = prompt(
    `Delicious! What kind of salad do you want? Type a number.
  1 - Ceasar Salad
  2 - Caprese Salad
  3 - Greek Salad`
  ); if (saladType == 1) {
    subtypeChoice = "Ceasar Salad"
    alert(
      `You chose a ${subtypeChoice} ${selectedFoodChoice}.`
    )
  } else if (saladType == 2) {
    subtypeChoice = "Caprese Salad"
    alert(
      `You chose a ${subtypeChoice} ${selectedFoodChoice}.`
    )
  } else if (saladType == 3) {
    subtypeChoice = "Greek Salad"
    alert(
      `You chose a ${subtypeChoice} ${selectedFoodChoice}.`
    )
  }
// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
