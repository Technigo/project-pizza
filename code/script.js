// Start here

// Step 1 - Welcome and introduction

alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let userName = prompt("What is your user name?")

alert(
  `Hi ${userName}`
)
// Step 2 - Food choice

let foodChoice = prompt("What would you like to order? For Pizza enter 1. For Pasta enter 2. For Salad enter 3.")

if (foodChoice == 1) {
  alert(
    `You have ordered pizza!`
  )
} else if (foodChoice == 2) {
  alert(
    `You have ordered Pasta!`
  )
} else if (foodChoice == 3) {
  alert(
    `You have ordered Salad!`
  )
} else {
  alert(
    `You haven't ordered any food!`
  )
};

// Step 3 - Subtype choice

let subQuestion= "What would you like to order with your"
if (foodChoice == 1) {
  let subChoice = prompt(`${subQuestion} pizza? Choices: Coke. Pizza salad. Bread`)
    alert(`You ordered ${subChoice} with your pizza.`);
 } else if (foodChoice == 2) {
  subChoice = prompt(`${subQuestion} pasta? Choices: Coke. Side salad. Bread`)
    alert(`You ordered ${subChoice} with your pasta.`);
 } else if (foodChoice == 3) {
  subChoice = prompt(`${subQuestion} salad? Choices: Coke. Bread. Hummus.`)
  alert(`You ordered ${subChoice} with your salad.`);
 };

// Step 4 - Age
let age = prompt(`Is the food order intended for an adult or child? Enter 1 for adult. Enter 2 for child.`)
if (age == 1) {
  alert(`You ordered an adult sized meal`);
} else {
  alert(`You ordered an child sized meal`);
};

// Step 5 - Order confirmation
// Your code goes here

alert(`Thank you for your order:
 Food: ${foodChoice} 
 Sides: ${subChoice}
 Size: ${age == 1 ? 'Adult' : 'Child'}
 
 We are now preparing your food. Hope to see you again soon`);


