// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
const clientName = prompt("Please start by writing your name")

console.log(clientName)

alert(`Hi ${clientName}! Let's order some delicious food! Are you ready?`)

// Step 2 - Food choice
// Your code goes here
const foodChoice = prompt(`
Select your food:
1 - Pizza
2 - Pasta
3 - Salad
Please enter the number of your choice.
`)

console.log(foodChoice)

let selectedFood = ""

if (foodChoice === 1) {
  selectedFood = "Pizza"
} else if (foodChoice === 2) {
  selectedFood = "Pasta"
} else if (foodChoice === 3) {
  selectedFood = "Salad"
} else {
  alert("Sorry - that's not a valid option. Please start over and choose a valid option. Thank you!")
  exit(1)
}

console.log(selectedFood)
alert(`You choose ${selectedFood} Excellent choice!!`)

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
