// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

const name = prompt(
  `Hi hungry fellow! What's your name?`
)

alert(
  `Hello, ${name}! Hit the button below whenever you are ready to order!`
)

// Step 2 - Food choice
// Your code goes here
let mealchoice = prompt(
  `What would you like to order? 1. Pizza, 2. Pasta, 3. Salad. Please enter the number of your choice`
)
if (mealchoice === `1`) {
  alert(
    `Thanks, ${name}! You wish to order Pizza!`
  )
} else if (mealchoice === `2`) {
  alert(
    `Thanks, ${name}! You wish to order Pasta!`
  )
} else if (mealchoice === `3`) {
  alert(
    `Thanks, ${name}! You wish to order Salad!`
  )
} else {
  alert(
    `Sorry, ${name}! That's not a valid choice!`
  )
}

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
