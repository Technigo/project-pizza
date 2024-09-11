// Start here

// Step 1 - Welcome and introduction
// Your code goes here
// Step 1a
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
// Step 1b A prompt asking for the clients name
const name = prompt('What is your name?')
// Step 1c An alert confirmin the clients name
alert(`Ciao ${name.toUpperCase()}, Let's get started with your order!`)

// Step 2 - Food choice
// Your code goes here
// Step 2a
// Prompt with a meal selection

const mealSelection = prompt(`Please, select what dish you would have us cook for you:

  Press: 1 - for Pizza
  Press: 2 - for Pasta
  Press: 3 - for Salad`)

// Step 2b
if (mealSelection === '1') {
  alert('You have selected a pizza!')
} else if (mealSelection === '2') {
  alert('You have selected pasta!')
} else if (mealSelection === '3') {
  alert('You have selected a salad!')
} else { 
  alert('Invalid choice. Please use a number between 1 and 3')
}

// Step 3 - Subtype choice
// Your code goes here

let subChoice = '' 

if (mealSelection === '1') {
    //if the client selects Pizza to order
    subChoice = prompt(
`Choose your preffered pizza topping. 
    
    Press: 1 - for Margarita
    Press: 2 - for Pepperoni
    Press: 3 - for Hawaii`)
   
    
    if (subChoice === '1') {
      subChoice = 'Margarita'
    } else if (subChoice === '2') {
      subChoice = 'Pepperoni'
    } else if (subChoice === '3') {
      subChoice = 'Hawaii'
    } else {
      alert('Invalid choice. Please use a number between 1 and 3')
    }
  


  } else if (mealSelection === '2') {
    //if the client selects Pasta to order
    subChoice = prompt(`Choose your preffered pasta dish. 
    
    Press: 1 - for Bolognese
    Press: 2 - for King Shrimp
    Press: 3 - for Carbonara`)
    
    if (subChoice === '1') {
      subChoice = 'Bolognese'
    } else if (subChoice === '2') {
      subChoice = 'King Shrimp'
    } else if (subChoice === '3') {
      subChoice = 'Carbonara'
    } else {
      alert('Invalid choice. Please use a number between 1 and 3')
    }



  } else if (mealSelection === '3') {
    //if the client selects Pasta to order
    subChoice = prompt(`Choose your preffered refreshing salad. 
    
    Press: 1 - for Goat Cheese Salad
    Press: 2 - for Ceasar Salad
    Press: 3 - for Tuna Salad`)
    
    if (subChoice === '1') {
      subChoice = 'Goat Cheese Salad'
    } else if (subChoice === '2') {
      subChoice = 'Ceasar Salad'
    } else if (subChoice === '3') {
      subChoice = 'Tuna Salad'
    } else {
      alert('Invalid choice. Please use a number between 1 and 3')
    } 
  }

  alert(`You have chosen a ${subChoice}`)

// Step 4 - Age
// Prompt where client is asked about their age to determine meal size
let age = prompt(`${name}, to ensure you get full by your meal we would like to know your age. Please, type in your age and click 'OK'`)


if (age > 12) {
  age = 'Adult sized, 120kr'
  alert(`You will be delivered an Adult sized ${subChoice}`)
  // If the age is greater than 12 the meal will become adult sized 120kr
} else if (age <= 12) {
  age = 'Child sized 65kr'
  alert(`You will be delivered a Child sized ${subChoice}`)
  // If the age is smaller than 12 the meal will become children's sized 65kr
}

// Step 5 - Order confirmation
// Your code goes here
