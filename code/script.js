// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let customerName = prompt(
  `Hello and welcome to our establishment! May I have your name?`
  )

alert(
  `Are you hungry today, ${customerName}? We've got some delicious dishes here at Javascript Pizzeria!`
)

// Step 2 - Food choice
// Your code goes here
let typeOfFood = prompt(
  `What would you like to eat? A tasty pizza, our famous pasta or perhaps a fresh salad? Type a number 1-3.
  \n1. Pizza
  \n2. Pasta
  \n3. Salad`
)

let foodOfChoice

if (typeOfFood == 1) {
  foodOfChoice = "Pizza"
  alert(
  `What a great choice - you chose ${foodOfChoice}.`
)
} else if (typeOfFood == 2) {
  foodOfChoice = "Pasta"
  alert(
    `Mmm our famous homemade pasta - you chose ${foodOfChoice}.`
  )
} else if (typeOfFood == 3) {
  foodOfChoice = "Salad"
  alert(
  `Green and oh so fresh - you chose ${foodOfChoice}.`
)
} else {
  alert(
    `I'm sorry. That's not on the menu. Please select a number between 1-3.`
  )
}

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
