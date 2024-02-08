// Start here
let mainDish
let subtypeDish
let userName
/* 
I tryied to create an array but then I didn't figured out how could I use it:´)
const menuOptions = {
  pizza:{subtypeDish: ["Margherita", "Cheese", "Caprichosa", "Pepperoni", "Meatballs"]},
  pasta:{subtypeDish: ["Spaghetti Carbonara", "Mac & Cheese", "Pesto", "Spaghetti and Meatballs", "Beef & Cheese Lasagna"]},
  sallad:{subtypeDish: ["Mediterranian", "Cesar", "Vegana", "Salmon", "Chèvre"]}
} */

// Step 1 - Welcome and introduction

alert(`Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`)
userName = prompt(`What's your name?`)
alert(`Hi ${userName}! What a preatty name you have!
Welcome into our pizzeria,

Press Ok to continue.`)

// Step 2 - Food choice
mainDish = prompt(`What are you going to eat? You have 3 options:
 1 - Pizza
 2 - Pasta
 3 - Salad
 (answer by typing 1, 2 or 3)`)

 switch (mainDish){
  case "1":
  alert (`Youmy! Pizza 🍕
  
  OK to continue.`)
    break
  case "2":
  alert (`The HGI option:D Pasta!! 🍝

  OK to continue.`)
    break
  case "3":
  alert (`Salad 🥗, the healthy choise!
  
  OK to continue.`)
    break
  default:
    alert (`Make sure you are typing one of the 3 options (1, 2 or 3).
    
Reload the page and start again.`)
}

// Step 3 - Subtype choice
if (mainDish===1){  
    subtypeDish = prompt(`Which pizza do you want?

    1 - Margherita
    2 - Cheese 
    3 - Caprichosa
    4 - Pepperoni
    5 - Meatballs
    
    Type the number`)}
else if (mainDish===2){   
   subtypeDish = prompt(`Which kind of pasta do you want?

    1 - Spaghetti Carbonara
    2 - Mac & Cheese
    3 - Pesto
    4 - Spaghetti and Meatballs
    5 - Beef & Cheese Lasagna
    
    Type the number`)}
else{ (mainDish===3) 
  subtypeDish = prompt(`What kind of sallad do you want?

   1 - Mediterranian
   2 - Cesar 
   3 - Vegana
   4 - Salmon
   5 - Chèvre
   
   Type the number`)}

let order = `${mainDish}${subtypeDish}`
console.log(order)

if (order = 1,1){  alert(`Your order is a Margherita pizza 🍕`)}
else if (order = 1,2){  alert(`Your order is a Cheese pizza 🍕`)}
else if (order = 1,3){  alert(`Your order is a Caprichosa pizza 🍕`)}
else if (order = 1,4){  alert(`Your order is a Pepperoni pizza 🍕`)}
else if (order = 1,5){  alert(`Your order is a Meatballs pizza 🍕`)}
else if (order = 2,1){  alert(`Your order is a Spaghetti Carbonara 🍝`)}
else if (order = 2,2){  alert(`Your order is a Mac & Cheese pasta 🍝`)}
else if (order = 2,3){  alert(`Your order is a Pesto pasta 🍝`)}
else if (order = 2,4){  alert(`Your order is a Spaghetti and Meatballs 🍝`)}
else if (order = 2,5){  alert(`Your order is a Beef & Cheese Lasagna 🍝`)}
else if (order = 3,1){  alert(`Your order is a Mediterranian salad 🍀`)}
else if (order = 3,2){  alert(`Your order is a Cesar salad 🍝`)}
else if (order = "33"){  alert(`Your order is a Vegan salad 🍝`)}
else if (order = 3,4){  alert(`Your order is a Salmon salad 🍝`)}
else if (order = 3,5){  alert(`Your order is a Chèvre salad 🍝`)}
else alert (`Please, reload the page and start again.`)


// Step 4 - Age
let age = prompt(`How old are you?`)

if (age =>15) alert (`You will get an adult size dish.`)
else if (age < 15) alert(`You will get a child size dish.`)

// Step 5 - Order confirmation
// Your code goes here
