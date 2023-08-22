// Step 1 - Welcome and introduction
// Ordering process starts
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

// Asking for the customer name and storing it in a variable
const customerName = prompt(
  `Hi and welcome! First and foremost, what is you name?`
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

// Chosen food is saved in a variable and then shown to the customer via an alert, using an switch case
let chosenFood
let pizzaType
let pastaType
let saladType
let subtypeChoice

// Step 3 - Subtype choice
// Nested switch case for checking subtype choices at the same time as main choice. 
switch (foodType) {
  case "1":
    chosenFood = "Pizza"
    alert(
      `You've chosen ${chosenFood}!`
    )
    pizzaType = prompt(
      `Delicious! What kind of pizza do you want? Type a number.
    \n1. Quattro Formaggio
    \n2. Margherita
    \n3. Swedish Kebab`
    )
    switch (pizzaType) {
      case "1":
        subtypeChoice = "Quattro Formaggio"
        alert(
          `You chose a ${subtypeChoice} ${chosenFood}.`
        )
        break
      case "2":
        subtypeChoice = "Margherita"
        alert(
          `You chose a ${subtypeChoice} ${chosenFood}.`
        )
        break
      case "3":
        subtypeChoice = "Swedish Kebab"
        alert(
          `You chose a ${subtypeChoice} ${chosenFood}.`
        )
        break
    }
    break
  case "2":
    chosenFood = "Pasta"
    alert(
      `You've chosen ${chosenFood}!`
    )
    pastaType = prompt(
      `Delicious! What kind of pasta do you want? Type a number.
    \n1. Truffle
    \n2. Bolognese
    \n3. Carbonara`
    )
    switch (pastaType) {
      case "1":
        subtypeChoice = "Truffle"
        alert(`
        You chose a ${subtypeChoice} ${chosenFood}.`
        )
        break
      case "2":
        subtypeChoice = "Bolognese"
        alert(
          `You chose a ${subtypeChoice} ${chosenFood}.`
        )
        break
      case "3":
        subtypeChoice = "Carbonara"
        alert(
          `You chose a ${subtypeChoice} ${chosenFood}.`
        )
        break
    }
    break
  case "3":
    chosenFood = "Salad"
    alert(`You've chosen ${chosenFood}!`)
    saladType = prompt(`Delicious! What kind of pasta do you want? Type a number.
    \n1. Ceasar
    \n2. Goat Cheese
    \n3. Vegan`)
    switch (saladType) {
      case "1":
        subtypeChoice = "Ceasar"
        alert(
          `You chose a ${subtypeChoice} ${chosenFood}.`
        )
        break
      case "2":
        subtypeChoice = "Goat Cheese"
        alert(
          `You chose a ${subtypeChoice} ${chosenFood}.`
        )
        break
      case "3":
        subtypeChoice = "Vegan"
        alert(
          `You chose a ${subtypeChoice} ${chosenFood}.`
        )
        break
    }
    break
  default: alert(
    `I'm sorry, we don't have that on the menu.`
  )
}

// Step 4 - Age
// Step 5 - Order confirmation
// I decided to nest the switch cases here aswell, so stept 4-5 are in the same section
let foodCost = 11
let confirmAdultOrder
let confirmChildOrder
const customerAge = prompt(
  `Is this food for an adult or a child? Enter your age down below please!`
)
// Turns the string entered into the prompt into a number instead, for easy comparison down below
const customerAgeInt = parseInt(customerAge)

//To check a range of values in a switch block, I needed to add true in the expression.
switch (true) {
  case customerAgeInt >= 18:
    confirmAdultOrder = prompt(
      `You've chosen an adult sized ${subtypeChoice} ${chosenFood}. The total amount will be €${foodCost}. Are you sure you want to order this? Enter a number to confirm:
    \n1. Yes
    \n2. No`
    )
    switch (confirmAdultOrder) {
      case "1":
        alert(
          `Thank you for your order ${customerName}, the food will be with you in no time! Have a great day!`
        )
        break
      case "2":
        alert(
          `Sorry to see you go ${customerName}, come back an other time!`
        )
        break
    }
    break
  case customerAgeInt < 18:
    confirmChildOrder = prompt(
      `You've chosen a child sized ${subtypeChoice} ${chosenFood}. Please note, an adult must make the order for you. The total amount will be €${foodCost}. Are you sure you want to order this? Enter a number to confirm:
    \n1. Yes
    \n2. No`
    )
    switch (confirmChildOrder) {
      case "1":
        alert(
          `Thank you for your order ${customerName}, the food will be with you in no time! Have a great day!`
        )
        break
      case "2":
        alert(
          `Sorry to see you go ${customerName}, come back an other time!`
        )
        break
    }
  default:
    alert(
      "I'm afraid something went wrong"
    )
    break
}