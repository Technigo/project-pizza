// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to place an order? - Click 'OK' to begin.`
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
alert(`${selectedFood}! Excellent choice! In the next step please select what typ of ${selectedFood} you want`)

// Step 3 - Subtype choice
// Your code goes here
let subFoodtype = ""
let foodName = []

switch (selectedFood) {
  case "Pizza":
    subFoodtype = parseInt
      (prompt(
        `Select what pizza you want 
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
 1 - Arrabiata
 2 - Carbonara
 3 - Bolgonese
 Please enter the number of your choice:
 `
      )
      )
    foodName = ["Arrabiata", "Carbonara", "Bolognese"]
    break

  case "Salad":
    subFoodtype = parseInt
      (prompt(
        `Select what salad you want 
 1 - Chicken salad
 2 - Greek salad
 3 - Salmon salad
 Please enter the number of your choice:
 `
      )
      )
    foodName = ["Chicken salad", "Greek salad", "Salmon salad"]
    break

  default:
    alert("Sorry - you need to make a choice in order to continue. Please start over.")
    exit(1)
}

// Step 4 - Age
// Your code goes here

console.log("portion size", portionSize)

let adultChild
switch (portionSize) {
  case 1:
    adultChild = "adult size"
    break

  case 2:
    adultChild = "child size"
    break

  default:
    alert("invalid choice")
    exit(1)
}


// Step 5 - Order confirmation
// Your code goes here
console.log("food name", foodName)

if (foodName === 1) {
  alert
    `Excellent choice! You have ordered a ${adultChild}${foodName[0]} and it will be ready in 10-15 minutes. Welcome!`
} else if (foodName === 2) {

  `Excellent choice! You have ordered a ${adultChild}${foodName[1]} and it will be ready in 10-15 minutes. Welcome!`
} else if (foodName === 3) {

  `Excellent choice! You have ordered a ${adultChild}${foodName[2]} and it will be ready in 10-15 minutes. Welcome!`
}

