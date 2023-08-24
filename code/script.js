// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to my Javascript Pizza shop! Ready to Start? - Click 'OK' to begin.`
)

// Customers name
const customerName = prompt(
  `Please enter your name:`
)

alert(
  `Hi, ${customerName}. In the next step, you will pick your food choice.`
)

// Step 2 - Food choice
const foodType = prompt (
  `This is what we have.
  Enter a number:
  1 - Pizza
  2 - Pasta
  3 - Fish`
)

let foodChoice

if (foodType == 1) {
  foodChoice = "Pizza"
  alert (`You've chosen ${foodChoice}!`)
}

else if (foodType == 2) {
  foodChoice = "Pasta"
  alert (`You've chosen ${foodChoice}!`)
}

else if (foodType == 3) {
  foodChoice = "Fish"
  alert (`You've chosen ${foodChoice}!`)
}

else {
  alert (`I don't have the choice you made.
  Please refresh and pick a number between 1-3.`)
}

let pizzaType
let pastaType
let fishType
let subtypeChoice

//We offer three delicious pizzas.
//Enter a number:

// Step 3 - Subtype choice
// Your code goes here