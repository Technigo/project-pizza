// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Hey there, pizza lover! 🍕 Welcome to Pizzeria Fresco! Click 'OK' to get started!`
)
const userName = prompt(`What is your name?`)
console.log("User's name is:", userName)

alert(
  `Hi there, ${userName}! 😊 It's great to meet you. Click 'OK' to start placing your order.`
)

// Step 2 - Food choice
// Selection between Pizza, Pasta, Salad
// while loop to ensure that the user selects a valid option if not, the user will be prompted to select again. Will loop until it hits break. 
let foodType

while (true) {

  let foodSelection = prompt(`Please select your food of choice: 
      Write: 1 - for Pizza 🍕
      Write: 2 - for Pasta 🍝
      Write: 3 - for Salad 🥗`)

  // convert the variabel "foodSelection" to be a number instead of a string
  foodSelection = Number(foodSelection)


  if (foodSelection === 1) {
    console.log("Pizza")
    foodType = "Pizza"
    break
  } else if (foodSelection === 2) {
    console.log("Pasta")
    foodType = "Pasta"
    break
  } else if (foodSelection === 3) {
    console.log("Salad")
    foodType = "Salad"
    break
  } else {
    alert(
      `Oops! It looks like that's not an option. Please choose from 1, 2, or 3`
    )
    console.log("Invalid selection. Please choose 1, 2, or 3.")
  }
}
//message with the food that has been chosen 
alert(`Great choice, ${foodType}! Click 'OK' to select the specific type of ${foodType} you'd like.`)

// Step 3 - Subtype choice
// Variables to store subtype choices
let pizzaType
let pastaType
let saladType
let subType

//If choice is Pizza -> select type of pizza
if (foodType === "Pizza") {
  while (true) {
    pizzaType = prompt(`Please select your type of Pizza 🍕: 
    Write: 1 - for Margherita Pizza 
    Write: 2 - for Pepperoni Pizza
    Write: 3 - for Veggie Pizza`
    )

    pizzaType = Number(pizzaType)

    if (pizzaType === 1) {
      console.log("Margherita")
      subType = "Margherita Pizza"
      break
    } else if (pizzaType === 2) {
      console.log("Pepperoni Pizza")
      subType = "Pepperoni"
      break
    } else if (pizzaType === 3) {
      console.log("Veggie")
      subType = "Veggie Pizza"
      break
    } else {
      alert(`Oops! It looks like that's not an option. Please choose from 1, 2, or 3`)
      console.log("Invalid selection. Please choose 1, 2, or 3.")
    }
  }
}


// If choice is pasta -> select type of pasta
if (foodType === "Pasta") {
  while (true) {
    pastaType = prompt(`Please select your type of Pasta 🍝: 
    Write: 1 - for Spaghetti Carbonara  
    Write: 2 - for Spaghetti Bolognese
    Write: 3 - for Pasta Primavera`
    )

    pastaType = Number(pastaType)

    if (pastaType === 1) {
      console.log("Carbonara")
      subType = "Spaghetti Carbonara"
      break
    } else if (pastaType === 2) {
      console.log("Bolognese")
      subType = "Spaghetti Bolognese"
      break
    } else if (pastaType === 3) {
      console.log("Primavera")
      subType = "Pasta Primavera"
      break
    } else {
      alert(`Oops! It looks like that's not an option. Please choose from 1, 2, or 3`)
      console.log("Invalid selection. Please choose 1, 2, or 3.")
    }
  }
}

// If choice is salad -> select type of salad
if (foodType === "Salad") {
  while (true) {
    saladType = prompt(`Please select your type of Salad 🥗: 
    Write: 1 - for Ceacar Salad  
    Write: 2 - for Shrimp Salad
    Write: 3 - for Greek Salad`
    )

    saladType = Number(saladType)

    if (saladType === 1) {
      console.log("Ceacar Salad")
      subType = "Ceacar Salad"
      break
    } else if (saladType === 2) {
      console.log("Shrimp Salad")
      subType = "Shrimp Salad"
      break
    } else if (saladType === 3) {
      console.log("Greek Salad")
      subType = "Greek Salad"
      break
    } else {
      alert(`Oops! It looks like that's not an option. Please choose from 1, 2, or 3`)
      console.log("Invalid selection. Please choose 1, 2, or 3.")
    }
  }
}
//message with the subtype that has been chosen 
alert(`Yum! You've selected ${subType}! Excellent choice! Click 'OK' to start placing your order.`)


// Step 4 - Age
let userAge;
while (true) {
  userAge = prompt(
    `Is this order intended for a child or an adult? Please respond with 'adult' or 'child' in the field below:`
  )
  console.log("User's age is:", userAge)

  if (userAge === "adult" || userAge === "child") {
    break
  } else {
    alert(
      `Oops! It looks like that's not an option. Please choose 'adult' or 'child'`
    )
    console.log("Invalid selection. Please choose:", "child", "adult")
  }
}

let confirmation;
while (true) {
  if (userAge === "adult") {
    confirmation =
      prompt(
        `One Adult-sized ${subType} coming straight up!🍕 
        Do you accept? 
        Please enter 'yes' to confirm or 'no' to decline:`)
  } else if (userAge === "child") {
    confirmation = prompt(
      `One Child-sized ${subType} coming straight up! 🍕
      Do you accept? 
      Please enter 'yes' to confirm or 'no' to decline:`)
  }

  // Step 5 - Order confirmation
  if (confirmation === "yes") {
    alert(
      `Woho! 🎉 Your ${subType} is on its way! Thanks for dining with us at Pizzeria Fresco! 🍕`
    );
    break
  } else if (confirmation === "no") {
    alert(`Your order has been cancelled. Hope to see you here again soon!`)
    break
  } else {
    alert(`Invalid selection. Please choose 'yes' or 'no'.`)
    console.log("Invalid selection. Please choose:", "yes", "no")
  }
}
