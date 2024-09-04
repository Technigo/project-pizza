// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Hey there, pizza lover! 🍕 Welcome to Pizzeria Fresco! Click 'OK' to get started!`
)
let userName = prompt("What is your name?")
console.log("User's name is:", userName)

alert(
  `Hi there, ${userName}! 😊 It's great to meet you. Click 'OK' to start placing your order.`
)

// Step 2 - Food choice
// Selection between Pizza, Pasta, Salad
let foodSelection = prompt(`Please select your food of choice: 
  Write: 1 - for Pizza 🍕
  Write: 2 - for Pasta 🍝
  Write: 3 - for Salad 🥗`
)
//convert the variabel "foodselection" to be a number
foodSelection = Number(foodSelection)

let foodType

if (foodSelection === 1) {
  console.log("Pizza")
  foodType = "Pizza"
} else if (foodSelection === 2) {
  console.log("Pasta")
  foodType = "Pasta"
} else if (foodSelection === 3) {
  console.log("Salad")
  foodType = "Salad"
} else {
  alert(`Oops! It looks like that's not an option. Please choose from 1, 2, or 3`)
  console.log("Invalid selection. Please choose 1, 2, or 3.")

}

//message with the food that has been chosen 
alert(`Great choice, ${foodType}! Click 'OK' to select the specific type of ${foodType} you'd like.`)

// Step 3 - Subtype choice
// Variables to store subtype choices
let pizzaType, pastaType, saladType
let subType

//If choice is Pizza -> select type of pizza
if (foodType === "Pizza") {
  pizzaType = prompt(`Please select your type of Pizza 🍕: 
    Write: 1 - for Margherita Pizza 
    Write: 2 - for Pepperoni Pizza
    Write: 3 - for Veggie Pizza`
  )

  pizzaType = Number(pizzaType)

  if (pizzaType === 1) {
    console.log("Margherita")
    subType = "Margherita Pizza"
  } else if (pizzaType === 2) {
    console.log("Pepperoni Pizza")
    subType = "Pepperoni"
  } else if (pizzaType === 3) {
    console.log("Veggie")
    subType = "Veggie Pizza"
  } else {
    alert(`Oops! It looks like that's not an option. Please choose from 1, 2, or 3`)
    console.log("Invalid selection. Please choose 1, 2, or 3.")
  }
}
// If choice is pasta -> select type of pasta
if (foodType === "Pasta") {
  pastaType = prompt(`Please select your type of Pasta 🍝: 
    Write: 1 - for Spaghetti Carbonara  
    Write: 2 - for Spaghetti Bolognese
    Write: 3 - for Pasta Primavera`
  )

  pastaType = Number(pastaType)

  if (pastaType === 1) {
    console.log("Carbonara")
    subType = "Spaghetti Carbonara"
  } else if (pastaType === 2) {
    console.log("Bolognese")
    subType = "Spaghetti Bolognese"
  } else if (pastaType === 3) {
    console.log("Primavera")
    subType = "Pasta Primavera"
  } else {
    alert(`Oops! It looks like that's not an option. Please choose from 1, 2, or 3`)
    console.log("Invalid selection. Please choose 1, 2, or 3.")
  }
}
// If choice is salad -> select type of salad

if (foodType === "Salad") {
  saladType = prompt(`Please select your type of Salad 🥗: 
    Write: 1 - for Ceacar Salad  
    Write: 2 - for Shrimp Salad
    Write: 3 - for Greek Salad`
  )

  saladType = Number(saladType)

  if (saladType === 1) {
    console.log("Ceacar Salad")
    subType = "Ceacar Salad"
  } else if (saladType === 2) {
    console.log("Shrimp Salad")
    subType = "Shrimp Salad"
  } else if (saladType === 3) {
    console.log("Greek Salad")
    subType = "Greek Salad"
  } else {
    alert(`Oops! It looks like that's not an option. Please choose from 1, 2, or 3`)
    console.log("Invalid selection. Please choose 1, 2, or 3.")
  }
}
//message with the subtype that has been chosen 
alert(`Yum! You've selected ${subType}! Excellent choice! Click 'OK' to start placing your order.`)

// Step 4 - Age
let userAge = prompt("Is this order intended for a child or an adult? Please respond with 'adult' or 'child' in the field below:")
console.log("User's age is:", userAge)

// Step 5 - Order confirmation
if (userAge === "adult") {
  alert(`One Adult-sized ${subType} coming straight up! Thanks for dining with us at Pizzeria Fresco! 🍕`)
} else if (userAge === "child") {
  alert(`One Child-sized ${subType} coming straight up! Thanks for dining with us at Pizzeria Fresco! 🍕`)
} else {
  console.log("Invalid selection. Please choose:", "child", "adult")
}


