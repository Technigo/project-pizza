// Start
alert(`Please click 'ok' to start your order.`)

// Getting the name
let name = prompt(`Please enter you name:`)

// First order
let firstOrder = prompt(`Hi ${name}, welcome to the Café. Let's start with your order! What would you like to drink? 
    1 - Coffee
    2 - Limonade
    3 - Juice
    Please enter the number!`)

// Second order
switch (firstOrder) {
    case '1':
        secondOrder = prompt(`You have selected Coffee. Please select the Coffee by writing the assigned number:
            1 - Café Latte Macchiato
            2 - Espresso
            3 - Cappuccino`)
        break
    case '2':
        secondOrder = prompt(`You have selected Limonade. Please select the Limonade by typing 1, 2 or 3:
            1 - Coke
            2 - Fanta
            3 - Sprite`)
        break
    case '3':
        secondOrder = prompt(`You have selected Juice. Please select the Juice:
            1 - Apple Juice
            2 - Tomato Juice
            3 - Orange Juice`)
        break

    default:
        alert(`Sorry, something went wrong. Please refresh and try again`)
        break
}

let age = prompt(`How old are you?`)

// Order confirmation
let orderConfirmation = ''
if (firstOrder === '1') {
    if (secondOrder === '1') orderConfirmation = 'Café Latte Macciato'
    else if (secondOrder === '2') orderConfirmation = 'Espresso'
    else if (secondOrder === '3') orderConfirmation = 'Cappuccino'
} else if (firstOrder === '2') {
    if (secondOrder === '1') orderConfirmation = 'Coke'
    else if (secondOrder === '2') orderConfirmation = 'Fanta'
    else if (secondOrder === '3') orderConfirmation = 'Sprite'
} else if (firstOrder === '3') {
    if (secondOrder === '1') orderConfirmation = 'Apple Juice'
    else if (secondOrder === '2') orderConfirmation = 'Tomato Juice'
    else if (secondOrder === '3') orderConfirmation = 'Orange Juice'
}

// Ask for age of the user & send out confirmation of order
if (age <= 13) {
    alert(`You like to order a small ${orderConfirmation}. Click 'ok' to confirm your order!`)
} else {
    alert(`You like to order a big ${orderConfirmation}. Click 'ok' to confirm your order`)
}


alert(`Thank you for your order!`)