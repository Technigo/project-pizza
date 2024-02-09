// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let person = prompt('Enter your name')

alert(
  'Hi there, ' + person
)

// Step 2 - Food choice
// Your code goes here

let Pizza = 1
let Pasta = 2
let Burger = 3

let food = prompt('Choose what food you want to order by entering a number: \n1. Pizza \n2. Pasta \n3. Burger ')


if (food === '1') {
  alert('You have choosen Pizza')
}

else if (food === '2') {
  alert('You have choosen Pasta')
}

else if (food === '3') {
  alert('You have choosen Burger')
}

else {
  alert('Invalid choice')
}

// Step 3 - Subtype choice
// Your code goes here

if (food === '1') {
  let pizzaChoice = prompt('Choose what Pizza you want by entering a number: \n1. Margherita \n2. Hawaii \n3. Salami ')

  if (pizzaChoice === '1') {
    alert('You have choosen Margherita')
  }
  
  else if (pizzaChoice === '2') {
    alert('You have choosen Hawaii')
  }
  
  else if (pizzaChoice === '3') {
    alert('You have choosen Salami')
  }
  
  else {
    alert('Invalid choice')
  }
}

else if (food === '2') {
  let pastaChoice = prompt('Choose what Pasta you want by entering a number: \n1. Bolognese \n2. Carbonara \n3. Alfredo')
 
  if (pastaChoice === '1') {
    alert('You have choosen Bolognese')
  }

  else if (pastaChoice === '2') {
    alert('You have choosen Carbonara')
  }

  else if (pastaChoice === '3') {
    alert('You have choosen Alfredo')
  }

  else {
    alert('Invalid choice')
  }
}

else if (food === '3') {
  let burgerChoice = prompt('Choose what Burger you want by entering a number: \n1. Cheeseburger \n2. Chicken Burger \n3. Vegan Burger')

  if (burgerChoice === '1') {
    alert('You have choosen Cheeseburger')
  }

  else if (burgerChoice === '2') {
    alert('You have choosen Chicken Burger')
  }

  else if (burgerChoice === '3') {
    alert('You have choosen Vegan Burger')
  }

  else {
    alert('Invalid choice')
  }
}

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
