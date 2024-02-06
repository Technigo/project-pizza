// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let yourName = prompt("What is your name?");

alert(`Welcome, ${yourName}!`);

// Step 2 - Food choice
const menuSelect = prompt(
  `What would you like to order?
    Enter the number of your choice:
    1. Pizza  
    2. Pasta 
    3. Salad
    `
)

// let selectedItem = ""

let selectedItem = ""

if (menuSelect === "1") {
  selectedItem = "pizza";
} else if (menuSelect === "2") {
  selectedItem = "pasta";
} else {
  selectedItem = "salad"
}

alert(`You chose ${selectedItem}!`)



// Step 3 - Subtype choice

let subChoicePizza = ""
let subChoicePasta = ""
let subChoiceSalad = ""
let choicePizza = ""
let choicePasta = ""
let choiceSalad = ""

if (menuSelect === "1") {
  subChoicePizza = prompt(
    `Select the type of pizza:
    Enter the number of your choice:
    1. Hawaiian
    2. Margherita
    3. Pepperoni
    `
  )
} else if (selectedItem === "pasta") {
  let subItemPasta = prompt(
    `Select the type of pasta:
    Enter the number of your choice:
    1. Spaghetti alla Puttanesca
    2. Carbonara
    3. Pesto alla Genovese
    `
  )
} else { 
  let subItem = prompt(
    `Select the type of salad:
    Enter the number of your choice:
    1. Caprese
    2. Insalata di Riso
    3. Panzanella
    `
  )
}

if (subChoicePizza === "1") {
  choicePizza = "Hawaiian";
} else if (subChoicePizza === "2") {
  choicePizza = "Marherita";
} else {
  choicePizza = "Pepperoni"
}

alert(`You chose ${choicePizza} pizza!`)


// if (pizzaChoice === "1") {
//   pizzaType = "Hawaiian";
// } else if (pizzaChoice === "2") {
//   pizzaType = "Margherita";
// } else {
//   pizzaTypee = "pepperoni"
// }

// alert(`You chose ${pizzaType} pizza!`)

// let subItemPasta = ""

// if (pastaChoice === "1") {
//   subItemPasta = "Spaghetti alla Puttanesca";
// } else if (pastaChoice === "2") {
//   subItemPasta = "Carbonara";
// } else {
//   subItemPasta = "Pesto alla Genovese"
// }

// let subItemSalad = ""

// if (saladChoice === "1") {
//   subItemSalad = "Caprese";
// } else if (saladChoice === "2") {
//   subItemSalad = "Insalata di Riso";
// } else {
//   subItemSalad = "Panzanella"
// }

// Step 4 - Age



// }

// Step 5 - Order confirmation
// Your code goes here
