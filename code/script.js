// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

//get user's name
const userName = prompt("What is your name?: ")
alert('Hi, ' + userName + ', we are glad you are here!')

// Step 2 - Food choice
// Your code goes here
// The program should use the prompt() method to present the user with a menu of options (Pizza, Pasta, Salad) and prompt them to enter a number corresponding to their choice. Based on the user's input, the program should determine the chosen food type (Pizza, Pasta, Salad) and display a message using the alert() method to confirm the user's selection.

let foodChoice = 0;
do {
  foodChoice = prompt("What would you like to eat?\nPlease type 1,2 or 3:\n(1) Pizza\n(2) Pasta\n(3) Salad")
  alert('You chose' + foodChoice)
  if (foodChoice == 1) {
    alert('You have choosen Pizza!')
  } else if (foodChoice == 2) {
    alert('You have choosen Pasta!')
  } else if (foodChoice == 3) {
    alert('You have choosen Salad!')
  } else {
    alert('Your choice is not available, please enter 1, 2 or 3')
  }
}
while (foodChoice >= 4);
alert('we are now out of the loop')

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

const userAge = prompt("What is your age?")
const pizzaSize = userAge >= 18 ? "Adult size pizza" : "Child sized pizza"

// Step 5 - Order confirmation
// Your code goes here
