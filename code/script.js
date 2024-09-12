// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert (
  "Welcome to my Javascript Pizzeria.Ready to Start ? - Click 'OK' to begin."
)

const userName = prompt ("What's your name?")
if (userName == "") {
  alert ("Invalid entry, please try again. See you!")
  exit (1)
}

alert (
    `Nice to meet you ${userName.toUpperCase()}!`
  )

// Step 2 - Food choice
const typeOfFood = parseInt (
  prompt (`
    What type of food would you like to order?
    Enter a number:
    1 - Pizza
    2 - Pasta
    3 - Salad
  `)
)

let selectedFood = ""

if (typeOfFood === 1) {
  selectedFood = "Pizza"
} else if (typeOfFood === 2) {
  selectedFood = "Pasta"
} else if (typeOfFood === 3) {
  selectedFood = "Salad"
} else {
  alert ("Invalid choice. Please start over again and select a valid number between 1 to 3.")
  exit (1)
}

alert (
  `You've chosen ${selectedFood}!`
)

// Step 3 - Subtype choice
let subFoodNr = ""
let subFood = []

switch (selectedFood) {
  case "Pizza":
    subFoodNr = parseInt (
      prompt (`
        Select a Pizza type, enter a number:
        1 - Napolitana
        2 - Hawaian
        3 - Pepperoni        
      `)
    )
    subFood = ["Napolitana","Hawaian","Pepperoni"]
    break

  case "Pasta":
    subFoodNr = parseInt (
      prompt (`
        Select a Pasta type, enter a number:
        1 - Spaghetti Carbonara
        2 - Fettuccine Alfredo
        3 - Cheesy Tortellini
      `)
    )
    subFood = ["Spaghetti Carbonara","Fettuccine Alfredo","Cheesy Tortellini"]
    break

  case "Salad":
    subFoodNr = parseInt (
      prompt (`
        Select a Salad type, enter a number:
        1 - Caesar Salad
        2 - Caprese Salad
        3 - Greek Salad    
      `)
    )
    subFood = ["Caesar Salad","Caprese Salad","Greek Salad"]
    break
  
  default:
    alert("Invalid entry, please try again. See you!")
}

if (subFoodNr === 1 || subFoodNr === 2 || subFoodNr === 3) {
  alert (`
    You've chosen ${subFood[subFoodNr-1]}!
  `)
} else {
  alert("Invalid entry, please try again. See you!")
  exit(1)
}
// Dry js code by using ||

// Step 4 - Age
let age = prompt ("Is this food for a child or an adult? Type your age:")
let ageGroup = ""
let cost = ""

if (age <= 17) {
  ageGroup = "Child"
  cost = "€10"
} else if (age > 17) {
  ageGroup = "Adult"
  cost = "€15"
} else {
  alert ("Invalid entry, please try again. See you!")
  exit (1)
}

//display the order message and the associated cost
if (ageGroup && cost) {
  alert(`
    You've chosen a ${subFood[subFoodNr-1]} for a ${ageGroup}. The cost will be ${cost}.
    `)
}

// Step 5 - Order confirmation
let detail = `You are about to order a ${selectedFood} (${subFood[subFoodNr-1]}) for a ${ageGroup}. The cost will be ${cost}. Would you like to confirm your order?`

let confirmNr = parseInt(
  prompt(`
    ${detail}
    Enter a number to comfirm:
    1 - Yes
    2 - No
    `)
)

if (confirmNr === 1) {
  alert(`
    Thank you for your order! Your delicious meal will be prepared. See you soon!👍
  `)
} else if (confirmNr === 2) {
  alert(`
    No problem. Come back and order anytime you want!🖖
  `)
} else {
  alert ("Invalid entry, please select 1 for Yes or 2 for No.")  
}