// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria 🧚🏼‍♀️ 
  Ready to Start?
  Click 🆗 to begin!
  `
)

const yourName = prompt("What is your name?");

alert(`✨ Welcome ${yourName} ✨`);

// Step 2 - Food choice
const menuSelect = parseInt(
  prompt(`
  What would you like to order?
    Enter the number of your choice:
    1. Pizza 🍕
    2. Pasta 🍝
    3. Salad 🥗
    `
  )
);

console.log("selected menu value", menuSelect)

let selectedItem

if (menuSelect === 1) {
  selectedItem = "pizza";
} else if (menuSelect === 2) {
  selectedItem = "pasta";
} else {
  selectedItem = "salad";
}

alert(`✨ You chose ${selectedItem} ✨`)

// Step 3 - Subtype choice
let subTypePizza
let subTypePasta 
let subTypeSalad

if (selectedItem === "pizza") {
  subTypePizza = parseInt(
    prompt(`
    Select your pizza type:
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
    Select your pasta type:
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
    Select your salad type:
    Enter the number of your choice:
    1. Caprese
    2. Insalata di Riso
    3. Panzanella
    `
    )
  )
};

let subTypeName

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
} else if (subTypeSalad === 3) {
  subTypeName = "Panzanella";
} else {
  alert("Please try again 🧚🏼‍♀️")
  exit(1)
}

console.log("sub type name", subTypeName)

alert(`✨ You chose ${subTypeName} ✨`)


// // Step 4 - Age

const age = prompt(`
Is your order for a child or an adult? 
Enter your age:
`
)

let confirm

if (age >= 13) {
  confirm = parseInt(
    prompt(`
    One adult size ${subTypeName} ${selectedItem} will be $20. 
     To confirm your order, enter a number:
     1. Yes
     2. No
     `
    )
  )
} else {
  confirm = parseInt(
    prompt(`
    One child size ${subTypeName} ${selectedItem} will be $10.
    To confirm your order, enter a number:
    1. Yes
    2. No
    `
    )
  )
}

console.log("age and confirmation", age, confirm)

// Step 5 - Order confirmation
if (confirm === 1 ) {
  alert("✨ Thanks for ordering with us, enjoy! ✨");
} else {
  alert("No worries, see you soon! 🧚🏼‍♀️")
}
