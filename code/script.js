

// Welcome 
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

//Ask for the name
const name = prompt(`Please enter your name:`)

//Introduction
alert(
  `Hallo, ${name}! Are you ready to order? - Click 'OK'.`
)

// Submit food choice

let firstOrder = ''
while (firstOrder !== '1' && firstOrder !== '2' && firstOrder !== '3') {
  firstOrder = prompt(`What would you like to order? Please enter the number: 
  1 - Pizza
  2 - Pasta
  3 - Salad`)
  if (firstOrder !== '1' && firstOrder !== '2' && firstOrder !== '3') {
    alert(`Please enter a valid number: 1, 2, or 3`)
  }
}

//The first order confirmation

if (firstOrder === '1') {
  firstOrder = 'Pizza'
}
else if (firstOrder === '2') {
  firstOrder = 'Pasta'
}
else if (firstOrder === '3') {
  firstOrder = 'Salad'
}

alert(
  `You would like to have ${firstOrder}. Is that correct?`
)

// The second order

//Pizza Type
secondOrder = ''
if (firstOrder === 'Pizza') {
  while (secondOrder !== '1' && secondOrder !== '2' && secondOrder !== '3') {
    secondOrder = prompt(`What type of Pizza would you like to order? Please write the number:
  1 - Pizza Margherita
  2 - Pizza Pepperoni
  3 - Pizza Hawaiian`)
    if (secondOrder !== '1' && secondOrder !== '2' && secondOrder !== '3') {
      alert(`Pease enter a valid number: 1, 2, or 3`)
    }
  }


  if (secondOrder === '1') {
    secondOrder = 'Pizza Margherita'
  }

  else if (secondOrder === '2') {
    secondOrder = 'Pizza Pepperoni'
  }

  else if (secondOrder === '3') {
    secondOrder = 'Pizza Hawaiian'
  }
}


// Pasta Type

else if (firstOrder === 'Pasta') {
  while (secondOrder !== '1' && secondOrder !== '2' && secondOrder !== '3') {
    secondOrder = prompt(`What kind of Pasta would you like to order today? Please write the number:
    1 - Spaghetti
    2 - Carbonara
    3 - Lasagna`)
    if (secondOrder !== '1' && secondOrder !== '2' && secondOrder !== '3') {
      alert(`Please enter a valid number: 1, 2, or 3!`)
    }
  }

  if (secondOrder === '1') {
    secondOrder = 'Spaghetti'
  }
  else if (secondOrder === '2') {
    secondOrder = 'Carbonara'
  }
  else if (secondOrder === '3') {
    secondOrder = 'Lasagna'
  }
}

// Salad Type

else if (firstOrder === 'Salad') {
  while (secondOrder !== '1' && secondOrder !== '2' && secondOrder !== '3') {
    secondOrder = prompt(`What kind of Salad would you love to order today? Please write the number:
    1 - Greek Salad
    2 - Fish Salad
    3 - Chicken Salad`)
    if (secondOrder !== '1' && secondOrder !== '2' && secondOrder !== '3') {
      alert(`Please enter a valid number: 1, 2, or 3!`)
    }
  }


  if (secondOrder === '1') {
    secondOrder = 'Greek Salad'
  }
  else if (secondOrder === '2') {
    secondOrder = 'Fish Salad'
  }
  else if (secondOrder === '3') {
    secondOrder = 'Chicken Salad'
  }
}

alert(
  `${secondOrder}, great choice!`
)

// Step 4 - Age
let age = prompt(`To know the right size of your meal one last question: How old are you, ${name}?`)

// Check if age is not a number
while (isNaN(age)) {
  alert(`Please enter a valid number`)
  age = prompt(`Enter your age:`)
}
//Order 
if (age >= 13) {
  alert(`Thank you! You like to order ${secondOrder} regular size. Click 'Ok' to order.`)
}
else if (age < 13) {
  alert(`Thank you.You like to order a kid's ${secondOrder}. Click 'ok' to order`)
}


// Order confirmation

alert(`Thank you for your order!`)
