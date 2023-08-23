// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to Tara's Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

const guestName = prompt(`What is your name?`)
console.log(guestName)

alert(
  `Hi ${guestName}! We will now take your order. `
)

// Step 2 - Food choice

const foodChoise = prompt(`Please choose from the list:
  1 - Pizza
  2 - Pasta
  3 - Salad
  Please enter the number of your choise:`)

let selectedFood = ""


if (foodChoise === "1") {
  selectedFood = "pizza"
} else if (foodChoise === "2") {
  selectedFood = "pasta"
} else if (foodChoise === "3") {
  selectedFood = "salad"
} else {
  alert(`You haven't chosen a food. Please select a number from the list.`)
  Process.exit(1)
}

alert(
  `You have chosen ${selectedFood}`
)


// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
