// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

const yourName = prompt("What is your name?");

alert(`Welcome, ${yourName}!`);



// Step 2 - Food choice
const menuSelect = parseInt(
  prompt(`
  What would you like to order?
    Enter the number of your choice:
    1. Pizza  
    2. Pasta 
    3. Salad
    `
  )
);

let selectedItem

if (menuSelect === 1) {
  selectedItem = "pizza";
} else if (menuSelect === 2) {
  selectedItem = "pasta";
} else {
  selectedItem = "salad";
}

alert(`You chose ${selectedItem}.`)

// Step 3 - Subtype choice
let subTypePizza
let subTypePasta 
let subTypeSalad

if (selectedItem === "pizza") {
  subTypePizza = parseInt(
    prompt(`
    Select the type of pizza:
    Enter the number of your choice:
    1. Hawaiian
    2. Margherita
    3. Pepperoni
    `
    ) 
  )
} else if (selectedItem === "pasta") {
  subTypePasta = parseInt(
    prompt(`
    Select the type of pasta:
    Enter the number of your choice:
    1. Spaghetti alla Puttanesca
    2. Carbonara
    3. Pesto alla Genovese
    `
    )
  )
} else {
  subTypeSalad = parseInt(
    prompt(`
    Select the type of salad:
    Enter the number of your choice:
    1. Caprese
    2. Insalata di Riso
    3. Panzanella
    `
    )
  )
};


if (subTypePizza === 1) {
  subTypeName = "Hawaiian";
} else if (subTypePizza === 2) {
  subTypeName = "Margherita";
} else if (subTypePizza === 3) {
  subTypeName = "Pepperoni";
} else if (subTypePasta === 1) {
  subTypeName = "Spaghetti alla Puttanesca";
} else if (subTypePasta === 2) {
  subTypeName = "Carbonara";
} else if (subTypePasta === 3) {
  subTypeName = "Pesto alla Genovese";
} else if (subTypeSalad === 1) {
  subTypeName = "Caprese";
} else if (subTypeSalad === 2) {
  subTypeName = "Insalata di Riso";
} else {
  subTypeName = "Panzanella";
}

console.log("sub type name", subTypeName)
alert(`You chose ${subTypeName}`)


// // Step 4 - Age
const age = prompt("Is the order for a child or an adult? Enter your age:")

let confirm

if (age >= 13) {
  confirm = parseInt(
    prompt(`
    One adult size ${subTypeName} ${selectedItem} will be $20. 
     Do you confirm this order? Enter a number:
     1. Yes
     2. No
     `
    )
  )
} else {
  confirm = parseInt(
    prompt(`
    One child size ${subTypeName} ${selectedItem} will be $10.
    Do you confirm this order? Enter a number:
    1. Yes
    2. No
    `
    )
  )
}

console.log("age and confirmation", age, confirm)

// Step 5 - Order confirmation
if (confirm === 1 ) {
  alert("Thank you for your order, enjoy!");
} else {
  alert("No worries, see you soon!")
}
