// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

const customerName = prompt(
  `What is your name?`)
console.log(customerName)

alert(
  `Hello, ${customerName}!`
)
  
// Step 2 - Food choice
// Your code goes here

const foodChoice = prompt(
  `What would you like to order?
  Please enter the number of your choice:
  1 - Pizza
  2 - Pasta
  3 - Salad
  `
)

console.log(foodChoice)

let selectedFood = ""

if (foodChoice === "1") {
  selectedFood = "Pizza"
} else if (foodChoice === "2") {
  selectedFood = "Pasta"
} else if (foodChoice === "3") {
  selectedFood = "Salad"
} else {
  alert("Invalid choice, please try again.")
  exit(1)
}

alert(
  `You chose ${selectedFood}, is that correct?`)

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
