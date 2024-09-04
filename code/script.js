// Start here

// Step 1 - Welcome and introduction
// Your code goes here
// 1:1
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

// 1:2
let name = prompt("What is your name?"); 

// 1:3
alert(
  `Hello, ${name}!`
)  

// Step 2 - Food choice
// Your code goes here
let typeOfFood = prompt("We offer the following food:\n1. Pizza\n2. Pasta\n3. Sallad\n\nWhat type of food do you want to order? Type the number of the food.");

if (typeOfFood === "1") {
  alert(
    `You have chosen pizza!`
  )
} else if (typeOfFood === "2") {
  alert(
    `You have chosen pasta!`
  )
} else if (typeOfFood === "3") {
  alert(
    `You have chosen sallad!`
  )
}


// Step 3 - Subtype choice
// Your code goes here
let chooseFoodSub = ""

if (typeOfFood === "1") {
  let choosePizza = prompt("What type of pizza do you want?\n1. Margaritha\n2. Hawaii\n3. Vesuvio");
  if (choosePizza === "1") {
    chooseFoodSub = "Margaritha"
    alert(
      `You have chosen ${chooseFoodSub}!`
    )
  } else if (choosePizza === "2") {
    chooseFoodSub = "Hawaii"
    alert(
      `You have chosen ${chooseFoodSub}!`
    )
  } else if (choosePizza === "3") {
    chooseFoodSub = "Vesuvio"
    alert(
      `You have chosen ${chooseFoodSub}!`
    )
  }
} else if (typeOfFood === "2") {
  let choosePasta = prompt("What type of pasta do you want?\n1. Bolognese\n2. Puttanesca\n3. Carbonara");
  if (choosePasta === "1") {
    chooseFoodSub = "Bolognese"
    alert(
      `You have chosen ${chooseFoodSub}!`
    )
  } else if (choosePasta === "2") {
    chooseFoodSub = "Puttanesca"
    alert(
      `You have chosen ${chooseFoodSub}!`
    )
  } else if (choosePasta === "3") {
    chooseFoodSub = "Carbonara"
    alert(
      `You have chosen ${chooseFoodSub}!`
    )
  }
} else if (typeOfFood === "3") {
  let chooseSallad = parseInt(prompt("What type of sallad do you want?\n1. Greek\n2. Shrimp\n3. Falafel"))
  if (chooseSallad === 1) {
    chooseFoodSub = "Greek Salad"
    alert(
      `You have chosen ${chooseFoodSub}!`
    )
  } else if (chooseSallad === 2) {
    chooseFoodSub = "Shrimp Salad"
    alert(
      `You have chosen ${chooseFoodSub}!`
    )
  } else if (chooseSallad === 3) {
    chooseFoodSub = "Falafel Salad"
    alert(
      `You have chosen ${chooseFoodSub}!`
    )
  }
}


// Step 4 - Age
// Your code goes here
let yourAge = parseInt(prompt("Do you want to order a kids or an adult meal? Enter you age below:"))
let confirmOrder = 0

if (yourAge <= 12) {
  alert(
    `You want to order one kids sized portion of our ${chooseFoodSub}!`
  )
  confirmOrder = parseInt(prompt("Do you want to confirm your order?\n1. Yes\n2. No"))
} else if (yourAge >= 13) {
  alert(
    `You want to order one adult sized portion of our ${chooseFoodSub}!`
  )
  confirmOrder = parseInt(prompt("Do you want to confirm your order?\n1. Yes\n2. No"))
}


// Step 5 - Order confirmation
// Your code goes here

if (confirmOrder === 1) {
  alert(
    `Thank you for your order at JavaScript Pizzeria. It will be ready and on its way in 15-20 minutes!`
  )
} else if (confirmOrder === 2) {
  alert(
    `You have declined your order. But JavaScript Pizzera will be open for you if you change your mind. Hope to see you soon!`
  )
}