// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
customer_name = prompt(`Please enter your name`)

alert(`hi ${customer_name}!, nice to meet you`)
// Step 2 - Food choice
// Your code goes here
food_choice = prompt(`What type of food would you like to order?
  Enter a number:
  1- Pizza
  2- Pasta
  3- Salad`)

if (food_choice == 1) {
  alert(`You have chosed Pizza`)
} else if (food_choice == 2) {
  alert(`You have chosen Pasta`)
} else if (food_choice == 3) {
  alert(`You have chosen Salad`)
} else {
  alert(`Invalid choice. Please select a number between 1 and 3.`)
}

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
