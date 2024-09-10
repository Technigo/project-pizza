// I have used while loops and let before const, so the variable can change in the loop. I have also assigned empty strings. The empty string is useful since it doesn’t imply any pre-selection or default choice, which means the code will rely entirely on user input, in this case the different meal choices.  

// A while loop is a control flow structure in programming that repeatedly executes a block of code as long as a given condition evaluates to true. The condition is checked before each iteration of the loop, and if the condition is false, the loop terminates.


alert(`Welcome to Mama Mia Pizzeria 🍕 Ready to order? - Click 'OK' to begin.`)

let userName = prompt(`What's your name?`) 

if (!userName) {
  userName = "anonymous"
}
alert(`Thank you for choosing our restaurant, ${userName.toUpperCase()}! We're here to make your experience memorable.`)


// Step 2 - What type of food

// Added while loops to check if the user's input is not one of the valid options by using === ( strict equality operator) and with the loop keep prompting the user until he/she provide the valid input (one of the alternative meal choices or subtypes)

let mealChoice = ""
while (!(mealChoice === "1" || mealChoice === "2" || mealChoice === "3")) {
  mealChoice = prompt(

    `What would you like to order? Choose the dish number 1, 2 or 3 according to below:

    1. Pizza
    2. Pasta
    3. Salad
  `
  )
// If none of the valid options (!) are chosen the alert below will show)

  if (!(mealChoice === "1" || mealChoice === "2" || mealChoice === "3")) {
    alert(`I'm sorry ${userName}, that is not a valid option. Please choose number 1, 2 or 3.`)
  }
}

let selectedMeal = ""
let subType = ""

if (mealChoice === "1") {
  selectedMeal = "pizza"
  alert(`Thank you ${userName}, you have chosen no 1, Pizza`)

  // Step 3 - Subtype choice for Pizza. // Added while loops to check if the user's input is not one of the valid options by using === (strict equality operator)
  let pizzaType = "" 

  while (!(pizzaType === "1" || pizzaType === "2" || pizzaType === "3")) {
    pizzaType = prompt(

      `What kind of Pizza would you like? Choose between no 1, 2 or 3 according to below:

      1. Capricciosa 
      2. Hawaii
      3. Kebab
    `
    )

    if (pizzaType === "1") {

      subType = "Capricciosa"
      alert(`You have chosen no 1, Capricciosa. Love your choice!`)

    } else if (pizzaType === "2") {
      subType = "Hawaii"
      alert(`You have chosen no 2, Hawaii. Aloha!`)
    } else if (pizzaType === "3") {
      subType = "Kebab"
      alert(`You have chosen no 3, Kebab pizza. Great choice!`)

    } else {

      alert(`I'm sorry ${userName}, that is not a valid option. Please choose number 1, 2 or 3.`)
    }
  }
 

} else if (mealChoice === "2") {
  selectedMeal = "pasta"
  alert(`Thank you ${userName}, you have chosen no 2, Pasta`)

// Step 3 - Subtype choice for Pasta. // Added while loops to check if the user's input is not one of the valid options by using === (equals)

  let pastaType = ""

  while (!(pastaType === "1" || pastaType === "2" || pastaType === "3")) {
    
    pastaType = prompt(
      `What kind of pasta would you like? Choose between no 1, 2 or 3 according to below:

      1. Bolognese 
      2. Carbonara
      3. Lasagna
    `
    )

    if (pastaType === "1") 
    {
      subType = 'Bolognese'
      alert(`You have chosen no 1, Bolognese. Great choice!`)

    } else if (pastaType === "2") {
      subType = 'Carbonara'
      alert(`You have chosen no 2, Carbonara. Splendido!`)
    } else if (pastaType === "3") {
      subType = 'Lasagna'
      alert(`You have chosen no 3, Lasagna. Delicious choice!`)

    } else {
      alert(`I'm sorry ${userName}, that is not a valid option. Please choose number 1, 2 or 3.`)
    }
  }

} else if (mealChoice === "3") {
  selectedMeal = "salad"

  alert(`Thank you ${userName}, you have chosen no 3, Salad`)

  // Step 3 - Subtype choice for Salad
  let saladType = ""

  while (!(saladType === "1" || saladType === "2" || saladType === "3")) {

    saladType = prompt(

      ` What kind of salad would you like? Choose between no 1, 2 or 3 according to below:

      1. Caesar 
      2. Greek 
      3. Ham & cheese 
    `
    )

    if (saladType === "1") {
      subType = "Caesar"

      alert (`You have chosen no 1, Caesar salad. Fresh choice!`)
    } else if (saladType === "2") {
      subType = "Greek"
      alert (`You have chosen no 2, Greek salad. Healthy choice!`)
    } else if (saladType === "3") {
      subType = "Ham & cheese"
      alert (`You have chosen no 3, Ham & cheese salad. Great choice!`)
    } else {
      alert (`I'm sorry ${userName}, that is not a valid option. Please choose number 1, 2 or 3.`)
    }
  }
}

// Step 4 - Portion size   // Added while loops to check if the user's input is not one of the valid options by using === (equals)
let age = ""
let portionSize = ""   

while (!(age === "1" || age === "2")) {
  age = prompt(

    `Is this order for an adult or child? Please choose corresponding number below.

    1. Adult
    2. Child
  `
  )

  if (age === "1") {
    portionSize = 'adult'

    alert(`You have chosen an adult portion.`)
  } else if (age === "2") {
    portionSize = 'child'

    alert(`You have chosen a child portion.`)
  } else {
    alert (`I'm sorry ${userName}, that is not a valid option. Please choose number 1 or 2.`)
  }
}

// Step 5 - Order confirmation  I used confirmOrder.toLowercase to make sure that the user input is not case sensitive. In other words, they can write YES, yes or No, no and it will be valid. 

let confirmOrder = prompt (`Do you confirm the order of ${portionSize} portion, 
  ${subType} ${selectedMeal}? Confirm by writing Yes or No.`)

if (confirmOrder.toLowerCase() === "yes") {
  alert(`Thank you for your order, ${userName}! We will start preparing your meal and we hope you will enjoy the food!`)

} else {
  alert(`You have declined the order, ${userName}. Please come back again if you want to order another time!`)
}
