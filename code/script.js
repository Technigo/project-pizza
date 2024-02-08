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

/*const orderFood = ;
if (orderFood == 1 ){
  console.log (alert (`You have chosen pizza! Good choice!`))
} else if (orderFood == 2){
  console.log (alert (`You have chosen pasta! Good choice!`))
} else if (orderFood == 3){
  console.log (alert ( `You have chosen salad! Good choice!`))
} else {console.log (alert (`Invalid typing, please enter the number of food.`))}*/

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
    subtypeMenu = parseInt(prompt(`Select your Pizza type, please enter the number:
    1. Napolitana
    2. Hawaian
    3. Pepperoni
    `))
    subtypeOrder = ["Napolitana", "Hawaian", "Pepperoni"]
    break;
  case 2:
    mainSelected = "Pasta"
    subtypeMenu = parseInt(prompt(`Select your pasta type, please enter the number:
    1. Spaghetti
    2. Fettuccine Alfred
    3. Cheesy Tortellini
    `))
    subtypeOrder = ["Spaghetti", "Fettuccine Alfredo", "Cheesy Tortellini"]
    break;
  case 3:
    mainSelected = "Salad"
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

if (subtypeMenu === 1){
  alert (`You have chosen ${mainSelected} and ${subtypeOrder[0]}`)
} else if (subtypeMenu === 2){
  alert (`You have chosen ${mainSelected} and ${subtypeOrder[1]}`)
} else if (subtypeMenu === 3){
  alert (`You have chosen ${mainSelected} and ${subtypeOrder[3]}`)
}




// Step 4 - Age
// Your code goes here


// Step 5 - Order confirmation
// Your code goes here
