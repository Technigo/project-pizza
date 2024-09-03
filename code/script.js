// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let userName = prompt(
  `What is your name?`
)

alert(
  `Hello ${userName}!`
)

// Step 2 - Food choice
// Your code goes here
let foodChoice = prompt(
  `What kind of food would you like to order?
  Enter a number:
  1 - Pizza
  2 - Pasta
  3 - Salad
  `
)

let foodName

if (foodChoice === `1`) {
  foodName = `Pizza`
} else if (foodChoice === `2`) {
  foodName = `Pasta`
} else if (foodChoice === `3`) {
  foodName = `Salad`
} else {
  foodName = `no food`
}

alert(
  `You have chosen ${foodName}. Yum!`
)

// Step 3 - Subtype choice
// Your code goes here
if (foodChoice === `1`) {
  let pizzaChoice = prompt(
    `What kind of Pizza would you like to order?
    Enter a number:
    1 - Margeritha
    2 - Napolitana
    3 - Bussola
    `
  )

  let pizzaName

  if (pizzaChoice === `1`) {
    pizzaName = `Margeritha`
  } else if (pizzaChoice === `2`) {
    pizzaName = `Napolitana`
  } else if (pizzaChoice === `3`) {
    pizzaName = `Bussola`
  } else {
    pizzaChoice = `no food`
  }

  alert(
    `You have chosen ${pizzaName}. Yum!`
  )
} else if (foodChoice === `2`) {
  let pastaChoice = prompt(
    `What kind of Pasta would you like to order?
    Enter a number:
    1 - Arrabiata
    2 - Garlic
    3 - Meat and sauce
    `
  )

  let pastaName

  if (pastaChoice === `1`) {
    pastaName = `Arrabiata`
  } else if (pastaChoice === `2`) {
    pastaName = `Garlic`
  } else if (pastaChoice === `3`) {
    pastaName = `Meat and sauce`
  } else {
    pastaChoice = `no food`
  }

  alert(
    `You have chosen ${pastaName}. Yum!`
  )
} else if (foodChoice === `3`) {
  let saladChoice = prompt(
    `What kind of Salad would you like to order?
    Enter a number:
    1 - Tuna
    2 - Ham and cheese
    3 - Veggi
    `
  )

  let saladName

  if (saladChoice === `1`) {
    saladName = `Tuna`
  } else if (saladChoice === `2`) {
    saladName = `Ham and cheese`
  } else if (saladChoice === `3`) {
    saladName = `Veggi`
  } else {
    saladChoice = `no food`
  }

  alert(
    `You have chosen ${saladName}. Yum!`
  )
} else {
  foodChoice = `no food`
}

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
