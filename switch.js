//Most of the variables are declared up here:
let mainDishNumber
let mainDish
let subtypeDish
let userName

/* 
I tryied to create an array but then I couldn't figure out how I could use it:
  const menuOptions = {
  pizza:{subtypeDish: ["Margherita", "Cheese", "Caprichosa", "Pepperoni", "Meatballs"]},
  pasta:{subtypeDish: ["Spaghetti Carbonara", "Mac & Cheese", "Pesto", "Spaghetti and Meatballs", "Beef & Cheese Lasagna"]},
  sallad:{subtypeDish: ["Mediterranian", "Cesar", "Vegana", "Salmon", "Chèvre"]}
} 
*/

// Step 1 - Welcome and introduction

alert (`Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`)
userName = prompt(`What's your name?`)
alert (`Hi ${userName}! What a preatty name you have!
Welcome into our pizzeria,

Press Ok to continue.`)

// Step 2 - Food choice

mainDishNumber = parseInt(prompt(`What are you going to eat? You have 3 options:

  1 - Pizza 🍕
  2 - Pasta 🍝
  3 - Salad 🥗

(answer by typing 1, 2 or 3)`))

if (mainDishNumber===1){
  mainDish = "pizza"
  alert (`Pizza 🍕 Youmy! 
  
  Press OK to continue.`)
} else if (mainDishNumber===2) { 
  mainDish = "pasta"
  alert (`The HGI option:D Pasta!! 🍝

  Press OK to continue.`)
} else if ( mainDishNumber===3) { 
  mainDish = "salad"
  alert (`Salad 🥗, the healthy choise!
 
  Press OK to continue.`)
} else {
  alert (`Make sure you are typing one the options available.)
 
  You have to start again.`)
  exit(1)}

/* Some testing in the console here: console.log(typeof mainDish) */
// Step 3 - Subtype choice

if (mainDishNumber===1) {
  subtypeDishNumber = parseInt(prompt(`Which pizza do you want?

  1 - Margherita
  2 - Cheese 
  3 - Caprichosa
  4 - Pepperoni
  5 - Meatballs
  
  Type the number`))
} else if (mainDishNumber===2) {   
  subtypeDishNumber = parseInt(prompt(`Which kind of pasta do you want?

  1 - Spaghetti Carbonara
  2 - Mac & Cheese
  3 - Pesto
  4 - Spaghetti and Meatballs
  5 - Beef & Cheese Lasagna
  
  Type the number`))
} else if (mainDishNumber===3) { 
subtypeDishNumber = parseInt(prompt(`What kind of sallad do you want?

  1 - Mediterranian
  2 - Cesar 
  3 - Vegana
  4 - Salmon
  5 - Chèvre
  
  Type the number`))
} else {
alert (`Make sure you are typing one the options available.)

You have to start again.`)
exit(1)}

// This was some testing in the console
console.log("mainDish", mainDishNumber)
console.log(typeof mainDishNumber)
console.log("subtypeDish",subtypeDishNumber)
console.log(typeof subtypeDishNumber)


if (mainDishNumber === 1 && subtypeDishNumber === 1) {
  subtypeDish = "Margherita" 
} else if (mainDishNumber === 1 && subtypeDishNumber === 2) {
  subtypeDish = "Cheese"
} else if (mainDishNumber === 1 && subtypeDishNumber === 3) {
  subtypeDish = "Caprichosa"
} else if (mainDishNumber === 1 && subtypeDishNumber === 4) {
  subtypeDish = "Pepperoni"
} else if (mainDishNumber === 1 && subtypeDishNumber === 5) {
  subtypeDish = "Meatballs"
} else if (mainDishNumber === 2 && subtypeDishNumber === 1) {
  subtypeDish = "Spaghetti Carbonara"
} else if (mainDishNumber === 2 && subtypeDishNumber === 2) {
  subtypeDish = "Mac & Cheese"
} else if (mainDishNumber === 2 && subtypeDishNumber === 3) {
  subtypeDish = "Pesto"
} else if (mainDishNumber === 2 && subtypeDishNumber === 4) {
  subtypeDish = "Spaghetti and Meatballs"
} else if (mainDishNumber === 2 && subtypeDishNumber === 5) {
  subtypeDish = "Beef & Cheese Lasagna"
} else if (mainDishNumber === 3 && subtypeDishNumber === 1) {
  subtypeDish = "Mediterranian"
} else if (mainDishNumber === 3 && subtypeDishNumber === 2) {
  subtypeDish = "Cesar"
} else if (mainDishNumber === 3 && subtypeDishNumber === 3) {
  subtypeDish = "Vegana"
} else if (mainDishNumber === 3 && subtypeDishNumber === 4) {
  subtypeDish = "Salmon"
} else if (mainDishNumber === 3 && subtypeDishNumber === 5) {
  subtypeDish = "Chèvre"
} else {
  alert (`Make sure you are typing one the options available.)
  
  You have to start again.`)
  exit(1)}

alert (`Your order is ${subtypeDish} ${mainDish}!

OK to continue.`)


// Step 4 - Age
let age = parseInt (prompt(`How old are you?`))
let ageSize 

if (age >= 15) { ageSize = ("ADULT SIZE")
  alert (`You will get an ADULT SIZE ${subtypeDish} ${mainDish}.`)
} else if (age < 15){ageSize = ("CHILD SIZE")
  alert(`You will get cheaper CHILD SIZE ${subtypeDish} ${mainDish}.`)
} else { 
  alert (`this is an invalid input, you will need to start again`)
exit(1)}

// Step 5 - Order confirmation
orderConfirmation = prompt (`To accept your delicious ${subtypeDish} ${mainDish} - ${ageSize}

  Press 1 - to confirm

  Press 0 - to Cancel`
  
  )

if (orderConfirmation === "1") {
  (alert (`Your order is in the way. 
  
We will make sure you enjoy your meal😋

Thank you! We hope to see you again soon, have a nice day`))
} else if (orderConfirmation === "0"){
  alert (`Order Canceled, start again if you would like to order some thing else.`)
} else {
  alert (`This options isn't available.

  We are sorry but. You will have to start again.`)
  exit(1)}

