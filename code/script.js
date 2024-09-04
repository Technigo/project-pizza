// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

const userName = prompt(
  `Hi hungry fellow! What's your name?`
)

alert(
  `Hello, ${userName}! Hit the button below whenever you are ready to order!`
)

// Step 2 - Food choice
const mealchoice = prompt(
  `What would you like to order? Please enter the number of your choice.
  
  1. Pizza
  2. Pasta
  3. Salad
  `
)
if (mealchoice === "1") {
  alert(
    `Thanks, ${userName}! You wish to order Pizza!`
  )
} else if (mealchoice === "2") {
  alert(
    `Thanks, ${userName}! You wish to order Pasta!`
  )
} else if (mealchoice === "3") {
  alert(
    `Thanks, ${userName}! You wish to order Salad!`
  )
} else {
  alert(
    `Sorry, ${userName}! That's not a valid choice!`
  )
}
// Step 3 - Subtype choice
//Pizza

// Your code goes here


// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
