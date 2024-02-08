// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

//b)
const yourName = prompt(`What's your name? 😊`)

alert(
  `Hello ${yourName}!`
)



// Step 2 - Food choice

const foodSelection = prompt(
  `We offer delicious Italian food. (Please select the food of your choice with the corresponding number).
  1 - 🍕 Pizza
  2 - 🍝 Pasta
  3 - 🥗 Sallad`
)
 
let selectedFood = ""

if (foodSelection === "1"){
  selectedFood = "Pizza"
} else if (foodSelection === "2") {
  selectedFood = "Pasta" 
} else if (foodSelection === "3"){
  selectedFood = "Sallad"
} else { 
  alert("Number input is invalid!☹️ please return and select a valid number.")
  exit(1)}

  alert(`You choose ${selectedFood}, Yummy!😃`) 

 // Step 3 - Subtype choice

 let pizzaSelection = "1"
 let pastaSelection = "2"
 let salladSelection = "3"

 if (foodSelection === "1"){
  pizzaSelection = prompt (`Which type of pizza do you want to order?(please select the pizza of your choice with the corresponding number )
  1 - Margherita
  2 - Capriccosa
  3 - Vegetariana`)
 } else if (foodSelection === "2"){
  pastaSelection = prompt (`Which type of pasta do you want to order?(please select the pasta of your choice with the corresponding number
    1 - Carbonara
    2 - Cacio e pepe
    3 - Bolognese`)
 } else if (foodSelection === "3"){
  salladSelection = prompt (`Which type of sallad do you want to order?(please select the sallad of your choice with the corresponding number
    1 - Caesar
    2 - Scampi
    3 - Vegetariana`)
 } 



// Step 4 - Age
// Your code goes here



// Step 5 - Order confirmation
// Your code goes here
