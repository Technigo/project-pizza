// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
// prompt to ask for the name and store the answer in a variable
const guestName = prompt('Please enter your name')
alert('Hi ' + guestName + '!')

// Step 2 - Food choice
//  allow the user to select the type of food they want to order

const foodChoice = prompt('What type of food would you like to order?\Please enter a number:\ 1 - Pizza 2 - Pasta 3 - Salad');

if (foodChoice === '1') {
  alert('You have chosen Pizza!')
} else if (foodChoice === '2') {
  alert('You have chosen Pasta!')
}
else if (foodChoice === '3') {
  alert('You have chosen Salad!')
}
else {
  alert('Invalid choice. Please select a number between 1 and 3.')
}

// Step 3 - Subtype choice
// Your code goes here

// Pizza subtype
if (foodChoice === '1') {
  const pizzaType = prompt('Select a Pizza type! \ Enter a number:\ 1 - Margherita 2 - Pepperoni 3 - Hawaiian')

  if (pizzaType === '1') {
    alert('You have chosen Margherita!')
    selectedFoodType = 'Margherita'
  } else if (pizzaType === '2') {
    alert('You have chosen Pepperoni!')
    selectedFoodType = 'Pepperoni'
  }
  else if (pizzaType === '3') {
    alert('You have chosen Hawaiian!')
    selectedFoodType = 'Hawaiian'
  }
  else {
    alert('Invalid choice. Please select a number between 1 and 3.')
  }
}


// Pasta subtype

if (foodChoice === '2') {
  const pastaType = prompt('Select a Pasta type! Enter a number: 1 - Spaghetti Carbonara: 2 - Pasta Bolognese 3 - Pasta Alfredo')

  if (pastaType === '1') {
    alert('You have chosen Spaghetti Carbonara!')
    selectedFoodType = 'Spaghetti Carbonara'
  } else if (pastaType === '2') {
    alert('You have chosen Pasta Bolognese!')
    selectedFoodType = 'Pasta Bolognese'
  }
  else if (pastaType === '3') {
    alert('You have chosen Pasta Alfredo!')
    selectedFoodType = 'Pasta Alfredo'
  }
  else {
    alert('Invalid choice. Please select a number between 1 and 3.')
  }
}

//Salad subtype

if (foodChoice === '3') {
  const saladType = prompt('Select a Salad type! Enter a number: 1 - Caesar Salad 2 - Garden Salad 3 - Greek Salad')

  if (saladType === '1') {
    alert('You have chosen Caesar Salad!')
    selectedFoodType = 'Ceaser Salad'
  } else if (saladType === '2') {
    alert('You have chosen Garden Salad!')
    selectedFoodType = 'Garden Salad'
  }
  else if (saladType === '3') {
    alert('You have chosen Greek Salad!')
    selectedFoodType = 'Greek Salad'
  }
  else {
    alert('Invalid choice. Please select a number between 1 and 3.')
  }
}

// Step 4 - Age
const userInputAge = prompt('Is this food for a child or an adult? Type your age:')
const ageConvertedToNumber = Number(userInputAge);

let finalPrice;
if (userInputAge >= '13') {
  // Adult
  finalPrice = 15;
  alert(`One ${selectedFoodType} will be prepared for you. That'll be €15.`);
}
else {
  //Child
  finalPrice = 10;
  alert(`One child sized ${selectedFoodType} will be prepared for you. That'll be €10.`);
}

// Step 5 - Order confirmation

const confirmation = prompt(`Would you like to confirm your order? Type 'yes' or 'no'.`)

if (confirmation === 'yes') {
  alert('Thank you! Your meal will be prepared shortly. The total cost is ' + finalPrice + '€')
}
else {
  alert('We hope to see you again soon!');
}

