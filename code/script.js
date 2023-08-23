// Start here

// NOTE TO SELF `` || '' || "" ????????

// Step 1 - Welcome and introduction
// Your code goes here
window.onload = function () { //Tillägg av Sus.

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
  Please choose the number of what you would like to order.`)
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
let subMenu = ""
let dishName = ""
let selectedDish = "" //Tillägg från Sus.

switch (selectedFood) {
  case "pizza": 
    subMenu = prompt(`What dish would you like to have?
  1 - Vesuvio
  2 - Capricciosa
  3 - Veggie Delight
  Please choose the number of what you would like to order.`)
    dishName = ["Vesuvio", "Capricciosa", "Veggie Delight"]
    break
  case "pasta": 
    subMenu = prompt(`What dish would you like to have?
  1 - Bolognese
  2 - Carbonara
  3 - Frutti di Mare
  Please choose the number of what you would like to order.`)
    dishName = ["Bolognese", "Carbonara", "Frutti di Mare"]
    break
  case "salad": 
    subMenu = prompt(`What dish would you like to have?
  1 - Caesar salad
  2 - Greek salad
  3 - Cobb salad
  Please choose the number of what you would like to order.`)
    dishName = ["Caesar salad", "Greek salad", "Cobb salad"]
    break
  default:
    alert("We can't identify what dish you want to order. Please choose a valid number.")
    process.exit(1)
}

selectedDish = dishName[subMenu - 1] //Tillägg från Sus.

console.log(dishName)

alert(
  `You have chosen to order a yummy ${selectedDish}!`
)
  

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
}