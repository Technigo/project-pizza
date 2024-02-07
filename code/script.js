// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our JavaScript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let userName = prompt("What is your name?")
alert(
  `Ciao ${userName}, great to see you! Click 'OK' to begin your order.`
  )

// Step 2 - Food choice
// Your code goes here

let foodSelection = prompt (
  `What do you want to order?
  Please enter the corresponding number:
  1 - Pizza
  2 - Pasta
  3 - Salad`
)

let selectedDish = ""

if (foodSelection === "1") {
  selectedDish = "pizza"
} else if (foodSelection === "2") {
  selectedDish = "pasta"
} else if (foodSelection === "3") {
  selectedDish = "salad"
} else {
  alert("Invalid choice, please try again!")
  exit(1)
}

alert(`You have selected ${selectedDish}! Click 'OK' to continue.`)


// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
