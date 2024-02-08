// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let userName = prompt("Hi! What's your name?"
)
if (userName != null)
  console.log 
  alert((`Hi, ${userName}! Get ready to place your food order!`)
  )


// Step 2 - Food choice
// Your code goes here
let foodChoice = parseInt (
prompt (`
  What would you like to eat?
  1 - Pizza
  2 - Pan Pizza
  3 - Pasta
  Enter the number of your choice to proceed:`)
)

console.log ("food choice", foodChoice)

if (foodChoice === 1)
  alert ((`Great choice, ${userName}, you'll now get the opportunity to modify your Pizza.`)
)

else if (foodChoice === 2)
  alert (`Great choice, ${userName}, you'll now get the opportunity to 
  modify your Pan Pizza.`)

else if (foodChoice === 3)
  alert (`Great choice, ${userName}, you'll now get the opportunity to 
  modify your Pasta.`) 

console.log ("plate number", foodChoice)

// Step 3 - Subtype choice
// Your code goes here


// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
