// Step 1 - Welcome and introduction
// Ordering process starts
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

// Asking for the customer name and storing it in a variable
const customerName = prompt(
  `First and foremost, what is you name?`
)

// Gretting the customer with an alert
alert(
  `Happy to see you here, ${customerName}!`
)

// Step 2 - Food choice
// Customer is given three food alternatives, promting the customer to choose one number
const foodType = prompt(
  `What do you feel like eating today? Type a number.
  \n1. Pizza
  \n2. Pasta
  \n3. Salad`
)

// Chosen food is saved in a variable and then shown to the customer via an alert, using an if/else statement
let chosenFood

if (foodType == 1) {
  chosenFood = "Pizza"
  alert(`You've chosen ${chosenFood}!`)
} else if (foodType == 2) {
  chosenFood = "Pasta"
  alert(`You've chosen ${chosenFood}!`)
} else if (foodType == 3) {
  chosenFood = "Salad"
  alert(`You've chosen ${chosenFood}!`)
} else {
  alert(`I'm sorry, we don't have that on the menu.`)
}

// Step 3 - Subtype choice
// subtypeChoice defines a variable for the different subchoices. pizzaType, pastaType and saladType save the prompt values for display in the alert-message. Created in a nested if/else statement. 

let pizzaType
let pastaType
let saladType
let subtypeChoice

if (chosenFood == "Pizza") {
  pizzaType = prompt(`Delicious! What kind of pizza do you want? Type a number.
  \n1. Quattro Formaggio
  \n2. Margherita
  \n3. Swedish Kebab`
  ); if (pizzaType == 1) {
    subtypeChoice = "Quattro Formaggio"
    alert(`You chose a ${subtypeChoice} ${chosenFood}.`)
  } else if (pizzaType == 2) {
    subtypeChoice = "Margherita"
    alert(`You chose a ${subtypeChoice} ${chosenFood}.`)
  } else if (pizzaType == 3) {
    subtypeChoice = "Swedish Kebab"
    alert(`You chose a ${subtypeChoice} ${chosenFood}.`)
  }
} else if (chosenFood == "Pasta") {
  pastaType = prompt(`Delicious! What kind of pasta do you want? Type a number.
  \n1. Truffle
  \n2. Bolognese
  \n3. Carbonara`
  ); if (pastaType == 1) {
    subtypeChoice = "Truffle"
    alert(`You chose a ${subtypeChoice} ${chosenFood}.`)
  } else if (pastaType == 2) {
    subtypeChoice = "Bolognese"
    alert(`You chose a ${subtypeChoice} ${chosenFood}.`)
  } else if (pastaType == 3) {
    subtypeChoice = "Carbonara"
    alert(`You chose a ${subtypeChoice} ${chosenFood}.`)
  }
} else if (chosenFood == "Salad") {
  saladType = prompt(`Delicious! What kind of pasta do you want? Type a number.
  \n1. Ceasar
  \n2. Goat Cheese
  \n3. Vegan`
  ); if (saladType == 1) {
    subtypeChoice = "Ceasar"
    alert(`You chose a ${subtypeChoice} ${chosenFood}.`)
  } else if (saladType == 2) {
    subtypeChoice = "Goat Cheese"
    alert(`You chose a ${subtypeChoice} ${chosenFood}.`)
  } else if (saladType == 3) {
    subtypeChoice = "Vegan"
    alert(`You chose a ${subtypeChoice} ${chosenFood}.`)
  }
} else {
  alert("Please try again")
}


// Step 4 - Age
const customerAge = prompt(
  `Is this food for an adult or a child? Enter your age below please!`
)

let foodCost = 11

if (customerAge >= 18) {
  alert(`Thank you ${customerName}, one adult sized ${subtypeChoice} ${chosenFood} coming up! The total amount will be €${foodCost}.Are you sure you want to order this? Enter a number to confirm:
  \n1. Yes
  \n1. No`)
} else if (customerAge < parseInt("18")) {
  alert(`Thank you ${customerName}, one child sized ${subtypeChoice} ${chosenFood} coming up! Please note, an adult must make the order for you. The total amount will be €${foodCost}.Are you sure you want to order this? Enter a number to confirm:
  \n1. Yes
  \n1. No`)
} else {
  alert("I'm afraid something went wrong")
}

// Step 5 - Order confirmation
// Your code goes here

/*That'll be €15. Are you sure you want to order this?
Enter a number to confirm: 
1 - Yes
2 - No*/