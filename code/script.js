// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert("Welcome to our Javascript Pizzeria. Ready to place an order? - Click 'OK' to begin."
)
const clientName = prompt("Please start by writing your name")

alert(`Hi ${clientName}! Let's order some delicious food! Are you ready?`)

// Step 2 - Food choice
// Your code goes here
const foodChoice = parseInt(
  prompt(`
Select your food:
1 - Pizza
2 - Pasta
3 - Salad
Please enter the number of your choice.
`)
)

let selectedFood = ""

if (foodChoice === 1) {
  selectedFood = "Pizza"
} else if (foodChoice === 2) {
  selectedFood = "Pasta"
} else if (foodChoice === 3) {
  selectedFood = "Salad"
} else {
  alert(`Sorry - that's not a valid option. Please start over and choose a valid option. Thank you!`)
  exit(1)
}

alert(`${selectedFood}! Excellent choice ${clientName}! In the next step please select what typ of ${selectedFood} you want`)

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
    alert(`Sorry - you need to make a choice in order to continue. Please start over.`)
    exit(1)
}
if (subFoodtype === 1) {
  alert(
    `Great choice - Our chef will start to make a ${foodName[0]}`
  )
}
if (subFoodtype === 2) {
  alert(
    `Great choice - Our chef will start to make a ${foodName[1]}`
  )
}
if (subFoodtype === 3) {
  alert(
    `Great choice - Our chef will start to make a ${foodName[2]}`
  )
}
// Step 4 - Age
// Your code goes here

const age = prompt(`Please enter your age in order to get the correct meal size`)

let orderConfirmation = "";

if (age >= 15) {
  orderConfirmation = prompt(`Thank you - we'll prepair an regular sized portion for you. It will be 15 €
  To confirm please select
  1 - Yes
  2 - No`)
} else if (age <= 14) {
  orderConfirmation = prompt(`Thank you - we'll prepair a smaller sized portion for you. Please press OK to confim order of 10 €
To confirm please select
  1 - Yes
  2 - No`)
}
else {
  alert(`Invalid input - please enter a valid age`)
  exit(1)
}


// Step 5 - Order confirmation
// Your code goes here

if (orderConfirmation === "1") {
  alert(
    `Thank you for your confirmation ${clientName}. We'll start preparing your meal. It'll be ready within 15 minutes. Welcome!`)
} else if (orderConfirmation === "2") {
  alert(`No worries ${clientName}! You're welcome back when you're in a mood for great food!`)
}
else {
  alert(`Our apologies ${clientName}! Something went wrong - please try again.`)
}
