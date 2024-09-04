// Start here

// Step 1 - Welcome and introduction
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
let subType

if (foodChoice === `1`) {
  subType = prompt(
    `What kind of Pizza would you like to order?
    Enter a number:
    1 - Margeritha
    2 - Napolitana
    3 - Bussola
    `
  )

  if (subType === `1`) {
    subType = `Margeritha`
  } else if (subType === `2`) {
    subType = `Napolitana`
  } else if (subType === `3`) {
    subType = `Bussola`
  } else {
    subType = `no food`
  }

} else if (foodChoice === `2`) {
  subType = prompt(
    `What kind of Pasta would you like to order?
    Enter a number:
    1 - Arrabiata
    2 - Garlic
    3 - Meat and sauce
    `
  )

  if (subType === `1`) {
    subType = `Arrabiata`
  } else if (subType === `2`) {
    subType = `Garlic`
  } else if (subType === `3`) {
    subType = `Meat and sauce`
  } else {
    subType = `no food`
  }

} else if (foodChoice === `3`) {
  subType = prompt(
    `What kind of Salad would you like to order?
    Enter a number:
    1 - Tuna
    2 - Ham and cheese
    3 - Veggi
    `
  )

  if (subType === `1`) {
    subType = `Tuna`
  } else if (subType === `2`) {
    subType = `Ham and cheese`
  } else if (subType === `3`) {
    subType = `Veggi`
  } else {
    subType = `no food`
  }

} else {
  subType = `no food`
}

alert(
  `You have chosen ${subType}. Yum!`
)

// Step 4 - Age
let userAge = prompt(
  `Is this food for a child or an adult?
  Please type your age:`
)

//Step 5 - Order confirmation
let confirmation

if (userAge <= 12) {
  confirmation = prompt(
    `You'd like to order a child portion of ${subType}.
    - price $7
    
    Are you sure you want to order this?
    Enter a number to confirm:
    1 - Yes
    2 - No
    `
  )

} else {
  confirmation = prompt(
    `You'd like to order an adult portion of ${subType}.
    - price $10
    
    Are you sure you want to order this?
    Enter a number to confirm:
    1 - Yes
    2 - No
    `
  )
}

if (confirmation === `1`) {
  alert(
    `Thank you for your order, your food is now being prepared`
  )
} else if (confirmation === `2`) {
  alert(
    `Your order has been canceled, please return for future orders`
  )

} else {
  alert(
    `Your order has ben canceled due to a type error, please return for future orders`
  )
}