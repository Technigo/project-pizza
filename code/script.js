// Start here

// Step 1 - Welcome and introduction

alert(
  `Welcome to our Javascript Pizzeria. \nReady to Start? - Click 'OK' to begin.`
)
let person = prompt(`What's your name? :) `, `Write it here!`);
if (person !== null || `Write it here!` ) {
alert(`Hi ${person}! Hope you're hungry to order!`);
} else { 
  alert(`No worries, let's continue anyway!`)
} 
//Cant get the error message right???

// Step 2 - Food choice

let foodType = prompt(`Can I take your order?
\nChoose from today's menu!
\n1 - Pizza
\n2 - Pasta
\n3 - Salad`,
`Please enter the number of your dish`); 

let foodTypeConfirm = "";
if(foodType === "1"){ foodTypeConfirm = `Pizza`;} 
if(foodType === "2"){ foodTypeConfirm = `Pasta`;} 
if(foodType === "3"){ foodTypeConfirm = `Salad`;} 
alert(`You have chosen ${foodTypeConfirm}`)

// Step 3 - Subtype choice

let pizzaType
let pastaType
let saladType
let foodOrder

if (foodTypeConfirm = `Pizza`){
  pizzaType = prompt(
    `Great! We have these to choose from:
    \n1 - Margherita
    \n2 - Verdure
    \n3 - Surprise`
  ); if (pizzaType === "1"){
    foodOrder = `Margherita`
  } if (pizzaType === "2"){
    foodOrder = `Verdure`
  }if (pizzaType === "3"){
    foodOrder = `Surprise`
  }
  alert(`You have ordered ${foodOrder}`)
}

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
