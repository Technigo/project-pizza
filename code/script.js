// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
const userName = prompt(`What is your name?`)
const userNameUp = userName[0].toUpperCase() + userName.slice(1).toLowerCase()
alert(`Hi ${userNameUp} !`)

// Step 2 - Food choice
// Your code goes here

// Step 3 - Subtype choice
// Your code goes here

const orderMain = parseInt(prompt(`What type of food would you like to order? 
Please enter the number of the food. 
1. Pizza 
2. Pasta 
3. Salad`))

console.log ("main order", orderMain, typeof orderMain)
let mainSelected = ""
let subtypeOrder = []

switch (orderMain) {
  case 1:
    mainSelected = "Pizza"
    alert (`You have chosen ${mainSelected}`)
    subtypeMenu = parseInt(prompt(`Select your Pizza type, please enter the number:
    1. Napolitana
    2. Hawaian
    3. Pepperoni
    `))
    subtypeOrder = ["Napolitana", "Hawaian", "Pepperoni"]
    break;
  case 2:
    mainSelected = "Pasta"
    alert (`You have chosen ${mainSelected}`)
    subtypeMenu = parseInt(prompt(`Select your pasta type, please enter the number:
    1. Spaghetti
    2. Fettuccine Alfred
    3. Cheesy Tortellini
    `))
    subtypeOrder = ["Spaghetti", "Fettuccine Alfredo", "Cheesy Tortellini"]
    break;
  case 3:
    mainSelected = "Salad"
    alert (`You have chosen ${mainSelected}`)
    subtypeMenu = parseInt(prompt(`Select your pasta type, please enter the number:
    1. caesar Salad
    2. Caprese Salad
    3. Greek Salad
    `))
    subtypeOrder = ["caesar Salad", "Caprese Salad", "Greek Salad"]
    break;
  default:
    alert(`Invalid information. Please enter the number of you choice, thank you!`)
  exit(1)
}

console.log("subtype menu", subtypeMenu, typeof subtypeMenu)

// Step 4 - Age
// Your code goes here

if (subtypeMenu === 1){
  alert (`You have chosen ${subtypeOrder[0]}`)
  let userAge = parseInt(prompt(`Is this food for a child or an adult? Please type your age`))
  if (userAge < 18){
    orderConfirm = parseInt(prompt(`One child sized ${subtypeOrder[0]} will be prepared. That will be 10 €. 
    Are you sure you want to order this?
    Enter a number to confirm:
    1. Yes
    2. No`)) 
  } else if (userAge >= 18){
    orderConfirm = parseInt(prompt(`One adult sized ${subtypeOrder[0]} will be prepared. That will be 15 €. 
    Are you sure you want to order this?
    Enter a number to confirm:
    1. Yes
    2. No`)) 
  }
} else if (subtypeMenu === 2){
  alert (`You have chosen ${subtypeOrder[1]}`)
  let userAge = parseInt(prompt(`Is this food for a child or an adult? Please type your age`))
  if (userAge < 18){
    orderConfirm = parseInt(prompt(`One child sized ${subtypeOrder[1]} will be prepared. That will be 10 €. 
    Are you sure you want to order this?
    Enter a number to confirm:
    1. Yes
    2. No`)) 
  } else if (userAge >= 18){
    orderConfirm = parseInt(prompt(`One adult sized ${subtypeOrder[1]} will be prepared. That will be 15 €. 
    Are you sure you want to order this?
    Enter a number to confirm:
    1. Yes
    2. No`)) 
  }
} else if (subtypeMenu === 3){
  alert (`You have chosen ${subtypeOrder[2]}`)
  let userAge = parseInt(prompt(`Is this food for a child or an adult? Please type your age:`))
  if (userAge < 18){
    orderConfirm = parseInt(prompt(`One child sized ${subtypeOrder[2]} will be prepared. That will be 10 €. 
    Are you sure you want to order this?
    Enter a number to confirm:
    1. Yes
    2. No`)) 
  } else if (userAge >= 18){
    orderConfirm = parseInt(prompt(`One adult sized ${subtypeOrder[2]} will be prepared. That will be 15 €. 
    Are you sure you want to order this?
    Enter a number to confirm:
    1. Yes
    2. No`)) 
  } else {
    alert (`Please tell us your age by entering a number, Thank you!`)
  }
} else { 
  alert (`Invalid information. Please select a number, thank you!`)
  exit(1)
}

console.log("subtype order", subtypeOrder[0], typeof subtypeOrder[0])
console.log("order confirm", orderConfirm, typeof orderConfirm)

// Step 5 - Order confirmation
// Your code goes here
if (orderConfirm === 1){
  alert(`Thank you for your order! Your delicious meal will be prepared soon!`)
} else if (orderConfirm === 2){
  alert(`No problem! Please come back and order again! See you!`)
} else{
  alert (`Invalid information. Please enter number 1 or 2.`)
  exit(1)
}