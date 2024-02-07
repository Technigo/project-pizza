// Start here
let mainDish = null
let subtypeDish = null
let menuOptions = {
  pizza:{subtypeDish["Margherita", "Cheese", "Caprichosa", "Pepperoni", "Meatballs", "BBQ Chicken", "Hawaiian", "Buffalo"]}
  pasta:{}
  sallad:
}
// Step 1 - Welcome and introduction

alert(`Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`)
let userName = prompt(`What's your name?`)
let upperCaseName = userName.toUpperCase()
alert(`Hi ${upperCaseName}! What a preatty name you have!
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
if (mainDish=1){  
    subtypeDish = prompt(`Which pizza do you want?

    1 - Margherita
    2 - Cheese 
    3 - Caprichosa
    4 - Pepperoni
    5 - Meatballs
    6 - BBQ Chicken
    7 - Hawaiian 
    8 - Buffalo
    
    Type the number`)}
else if (mainDish=2){   
   subtypeDish = prompt(`Which kind of pasta do you want?

    1 - Spaghetti Carbonara
    2 - Mac & Cheese
    3 - Pesto
    4 - Spaghetti and Meatballs
    5 - Beef & Cheese Lasagna
    6 - Chicken and Mushroom Penne
    7 - Chicken Piccata
    
    Type the number`)}
else{ subtypeDish = prompt(`What kind of sallad do you want?

   1 - Mediterranian
   2 - Cesar 
   3 - Vegana
   4 - Salmon
   5 - Chèvre
   
   Type the number`)}

let order = `${subtypeDish}, ${mainDish}`
alert(`You order is: 
${order}

Press OK to constinue`)
// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
