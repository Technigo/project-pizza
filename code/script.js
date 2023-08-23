// Start here

// NOTE TO SELF `` || '' || "" ????????

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

const guestName = prompt("Dear guest, what is your name?")
console.log(guestName)

alert(
  `Hi ${guestName}! We will happily take your order!`
)

// Step 2 - Food choice
// Your code goes here
const foodChoice = prompt(`What are you craving today?
  1 - Pizza
  2 - Pasta
  3 - Salad
  Please choose the number of what you would like to order:`)
console.log(foodChoice)

let selectedFood = ""

if (foodChoice === "1") {
selectedFood = "pizza"
} else if (foodChoice === "2") {
  selectedFood = "pasta"
} else if (foodChoice === "3") {
  selectedFood = "salad"
} else {
  alert("We can't identify what type of food you want to order. Please choose a valid number.")
  process.exit(1)
}

alert(
  `You have chosen to order a delicious ${selectedFood}!`
)

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
