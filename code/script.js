// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  "Welcome to my Javascript Pizzeria. Ready to Start? - Click 'OK' to begin."
)

const userName = prompt("What's your name?")

alert(
  `Nice to meet you ${userName.toUpperCase()}!`
)


// Step 2 - Food choice
const typeOfFood = parseInt(
  prompt(`
    What type of food would you like to order?
    Enter a number:
    1 - Pizza
    2 - Pasta
    3 - Salad
    `)
)

let selectedFood = ""
if (typeOfFood === 1) {
  selectedFood = "Pizza"
} else if (typeOfFood === 2) {
  selectedFood = "Pasta"
} else if (typeOfFood === 3) {
  selectedFood = "Salad"
} else {
  alert("Invalid choice. Please start over again and select a valid number between 1 to 3.")
  exit (1)
}

alert(
  `You've chosen ${selectedFood}!`
)

// Step 3 - Subtype choice


// Step 4 - Age


// Step 5 - Order confirmation

