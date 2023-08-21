// Start here

// Step 1 - Welcome and introduction
// alert(
//   `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
// )

// let name = prompt("What's your name?")
// if (name != null) {
//   alert(
//     `Hey there ${name}, are you ready to order?`
//     )
//   }

// Step 2 - Food choice
let menuChoices = "What types of food would you like to order? \n \n"
+ "\tEnter a number: \n"
+ "\t1. Pizza\n"
+ "\t2. Pasta\n"
+ "\t3. Salad \n"

let foodChoice = Number(prompt(menuChoices, "Ex. 1"))
let foodName =""
if (foodChoice === 1) {foodName = "pizza"}
else if (foodChoice === 2) {foodName = "pasta"}
else if (foodChoice === 3) {foodName = "salad"}
else {foodName = "an invalid number"}

alert(`You have chosen ${foodName}`)

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
