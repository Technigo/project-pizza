// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  "Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin."
)

//Aks for the costumers name with a prompt
let yourName = prompt(`Please enter your name!`)

//Greets the costumer by name using alert
alert(`Hi ${yourName}, nice to see you!`)

// Step 2 - Food choice
// Your code goes here

//Promts the costumer to enter a number for prefered food
let foodChoice = prompt(
  `What do you want to eat today?

  1 - Pizza
  2 - Pasta
  3 - Salad

  Please enter the number of your choice.
  `
)

// Determine the chosen food type based on user input
let foodType

if (foodChoice === "1") {
    foodType = "Pizza"
} else if (foodChoice === "2") {
    foodType = "Pasta"
} else if (foodChoice === "3") {
    foodType = "Salad"
} else {
  alert("I'm afraid that's not an option. Please start again and select one of the options (1-3).")
  exit(1)
}

// Display a message to confirm the user's selection
if (foodType) {
  alert(`You chose ${foodType}. Great choise ${yourName}!`)
}

// Step 3 - Subtype choice
// Your code goes here

let foodSubtype

if (foodType === "Pizza") {
  // Prompt the user to choose a pizza subtype
  let pizzaSubtype = prompt(
    `What type of pizza do you want?

    1 - Margherita
    2 - Capricciosa
    3 - Quattro Stagioni

    Please enter the number of your choice.`
  )

  // Determine the chosen pizza subtype based on user input
  if (pizzaSubtype === "1") {
    foodSubtype = "Margherita"
  } else if (pizzaSubtype === "2") {
    foodSubtype = "Capricciosa"
  } else if (pizzaSubtype === "3") {
    foodSubtype = "Quattro Stagioni"
  } else {
    alert("I'm afraid that's not an option. Please start again and select one of the options (1-3).")
    exit(1)
  }

} else if (foodType === "Pasta") {
  // Prompt the user to choose a pasta subtype
  let pastaSubtype = prompt(
    `What type of pasta do you want?

    1 - Spaghetti Carbonara
    2 - Fettuccine Alfredo
    3 - Cheesy Tortellini

    Please enter the number of your choice.`
  )

  // Determine the chosen pasta subtype based on user input
  if (pastaSubtype === "1") {
    foodSubtype = "Spaghetti Carbonara"
  } else if (pastaSubtype === "2") {
    foodSubtype = "Fettuccine Alfredo"
  } else if (pastaSubtype === "3") {
    foodSubtype = "Cheesy Tortellini"
  } else {
    alert("I'm afraid that's not an option. Please start again and select one of the options (1-3).")
    exit(1)
  }
} else if (foodType === "Salad") {
  
  // Prompt the user to choose a salad subtype
  let saladSubtype = prompt(
    `What type of salad do you want?

    1 - Caesar Salad
    2 - Greek Salad
    3 - Caprese Salad

    Please enter the number of your choice.`
  )

  // Determine the chosen salad subtype based on user input
  if (saladSubtype === "1") {
    foodSubtype = "Caesar Salad"
  } else if (saladSubtype === "2") {
    foodSubtype = "Greek Salad"
  } else if (saladSubtype === "3") {
    foodSubtype = "Caprese Salad"
  } else {
    alert("I'm afraid that's not an option. Please start again and select one of the options (1-3).")
    exit(1)
  }
}

// Display a message to confirm the user's selection
if (foodSubtype) {
  alert(`You chose the delicious ${foodSubtype}!`)
}

// // Display a message to confirm the user's selection
// if (subtypeChoice) {
//   alert(`You chose the delicious ${foodType} ${subtypeChoic}. Nice!`)
// }

// Step 4 - Age
// Your code goes here



// Step 5 - Order confirmation
// Your code goes here
