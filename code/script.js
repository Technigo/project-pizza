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
const foodChoice = parseInt(prompt`
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
let subFoodtype = ""
let foodName = []

switch (selectedFood) {
  case "Pizza":
    subFoodtype = parseInt
      (prompt(
        `Select what pasta you want 
   1 - Margarita
   2 - Vesuvio
   3 - Quattro formaggi
   Please enter the number of your choice:
   `
      )
      )
    foodName = ["Margarita", "Vesuvio", "Quattro formaggi"]
    break

  case "Pasta":
    subFoodtype = parseInt
      (prompt(
        `Select what pasta you want 
 1 - Aribiata
 2 - Carbonara
 3 - Bolgonese
 Please enter the number of your choice:
 `
      )
      )
    foodName = ["Aribiata", "Carbonara", "Bolognese"]
    break

  case "Salad":
    subFoodtype = parseInt
      (prompt(
        `Select what pasta you want 
 1 - Chicken salad
 2 - Greek salad
 3 - Salomon salad
 Please enter the number of your choice:
 `
      )
      )
    foodName = ["Chicken salad", "Greek salad", "Salomon salad"]
    break

  default:
    alert("Sorry - you need to make a choice in order to continue. Please start over.")
}

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
console.log("food name", foodName)

if (foodName === 1) {
  alert
    `Excellent choise! You have ordered ${foodName[0]} and it will be ready in 10-15 minutes. Welcome!`
}
