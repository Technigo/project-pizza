
// Step 1 - Welcome and introduction

// Welcome message and ask user for name 
let userName = prompt("Welcome to Sherrys Pizzabot! - Please enter your name to start your order.")



//Let user know that the pizza-bot is now ready to take order
alert("Hey " + userName + "! Click 'OK' to order your food in the next step.")

let foodChoice = prompt("What would you like to order? Select a number :\n1. Pizza\n2. Pasta\n3. Arancini")

//Show user the foodtype that is chosen 

if (foodChoice == 1) {
  alert("You've chosen Pizza, Click 'OK' to continue.")
} else if (foodChoice == 2) {
  alert("You've chosen Pasta, Click 'OK' to continue.")
} else if (foodChoice == 3) {
  alert("You've chosen Arancini, Click 'OK' to continue.")
} else {
  alert("Invalid Chioce")
}

//Subchoices to choose from - Type of pizzas

if (foodChoice == 1) {
  let pizzaType = prompt("What type of pizza would you like to order? Select a number for your choice :\n1. Pizza Margherita\n2. Pizza Quattro Stagioni\n3. Pizza Diavola")

  if (pizzaType == 1) {
    alert("You've chosen Pizza Margherita.")
  } else if (pizzaType == 2) {
    alert("You've chosen Pizza Quattro Stagioni.")
  } else if (pizzaType == 3) {
    alert("You've chosen Pizza Diavola.")
  } else {
    alert("Invalid choice.")
  }
}

// Subchoices Pasta

if (foodChoice == 2) {
  let pastaType = prompt("What type of pasta would you like to order? Select a number for your choice:\n1. Spaghetti Carbonara\n2. Lasagna alla Bolognese\n3. Penne all'Arrabiata.")

  if (pastaType == 1) {
    alert("You've chosen Spaghetti Carbonara.")
  } else if (pastaType == 2) {
    alert("You've chosen Lasagna alla Bolognese.")
  } else if (pastaType == 3) {
    alert("You've chosen Penne all'Arrabiata.")
  } else {
    alert("Invalid choice.")
  }
}

//Subchoices Arancini

if (foodChoice == 3) {
  let aranciniType = prompt("What type of Arancini would you like to order? Select a number for your choice:\n1. Arancini with Ragú\n2. Arancini with Peas\n3. Arancini with Spinach and Mozzarella")

  if (aranciniType == 1) {
    alert("You've chosen Arancini with Ragú. Click 'OK' to continue.")
  } else if (aranciniType == 2) {
    alert("You've chosen Arancini with Peas. Click 'OK' to continue.")
  } else if (aranciniType == 3) {
    alert("You've chosen Arancini with Spinach and Mozzarella. Click 'OK' to continue.")
  } else {
    alert("Invalid choice.")
  }
}

// Ask the user if this order is for a child or an adult - ask user to type age

let ageGroup = prompt("Is this order for a child or and adult? Type your age:")

// Show final/totalprice 

let totalPrice;

if (ageGroup >= 18) {
  // Then the meal is for an adult
  totalPrice = 145; // total price for an adult
  alert("You've selected a meal for an adult. The price is " + totalPrice + " SEK. Click 'OK' to continue.")
} else {
  // Child
  totalPrice = 95; // total price for a child
  alert("You've selected a meal for a child. The price is " + totalPrice + " SEK. Click 'OK' to continue.")
}

// Ask the user to confirm order
let confirmOrder = prompt("Confirm your order. Type 'yes' or 'no'.")
if (confirmOrder.toLowerCase() == "yes") {
  alert("Thank you for your order! Your delicious meal is now being prepared and will be ready for pick-up in about 30 minutes.See you soon!")
} else {
  alert("No problem! We hope to see you soon.")
}
