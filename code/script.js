// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  "Welcome to my Javascript Pizzeria.Ready to Start ? - Click 'OK' to begin."
)

const userName = prompt("What's your name?")
if(userName == "") {
  alert("Invalid entry, please try again. See you!")
  exit(1)
}

alert(
    `Nice to meet you ${userName.toUpperCase()}!`
  )



// Step 2 - Food choice
const typeOfFood = parseInt(
  prompt(`
    What type of food would you like to order?
    Enter a number:
    1 - Pizza
    2 - Pasta
    3 - Salad
  `)
)

let selectedFood = ""

if(typeOfFood === 1) {
  selectedFood = "Pizza"
} else if(typeOfFood === 2) {
  selectedFood = "Pasta"
} else if(typeOfFood === 3) {
  selectedFood = "Salad"
} else {
  alert("Invalid choice. Please start over again and select a valid number between 1 to 3.")
  exit(1)
}

alert(
  `You've chosen ${selectedFood}!`
)

// Step 3 - Subtype choice
let subFoodNr = ""
let subFood = []

switch(selectedFood) {
  case "Pizza":
    subFoodNr = parseInt(
      prompt(`
        Select a Pizza type, enter a number:
        1 - Napolitana
        2 - Hawaian
        3 - Pepperoni        
      `)
    )
    subFood = ["Napolitana","Hawaian","Pepperoni"]
    break

  case "Pasta":
    subFoodNr = parseInt(
      prompt(`
        Select a Pasta type, enter a number:
        1 - Spaghetti Carbonara
        2 - Fettuccine Alfredo
        3 - Cheesy Tortellini
      `)
    )
    subFood = ["Spaghetti Carbonara","Fettuccine Alfredo","Cheesy Tortellini"]
    break

  case "Salad":
    subFoodNr = parseInt(
      prompt(`
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
    exit(1)
}

if (subFoodNr === 1) {
  alert(`
    You've chosen ${subFood[0]}!
  `)
} else if (subFoodNr === 2) {
  alert(`
    You've chosen ${subFood[1]}!
  `)
} else if (subFoodNr === 3) {
  alert(`
    You've chosen ${subFood[2]}!
  `)
}

// Step 4 - Age


// Step 5 - Order confirmation

