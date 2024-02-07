// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to Javascript Restaurant! \nReady to start ordering? - Click 'OK' to begin.`
)

// Step 2 - Name
const customerName = prompt(
  `Hi! Welcome to our interactive food ordering experience. \nFirst and foremost, what is your name?`
)

// Step 3 - Food choice
if (customerName == "") {
  alert(
    `Hmm... Looks like no name was entered, and I'm pretty sure you have a name. Please try again.`
    )
}

else {
  alert(
    `Nice of you to pop by, ${customerName}! Now let's get you some food, shall we?`
  )
}

const food = prompt(
`What do you feel like eating today? \nChoose your preference by typing in the corresponding number.
1. Pizza 🍕
2. Pasta 🍝
3. Salad 🥗`
)

let foodChosen

if (food == 1) {
  foodChosen = "pizza"
  alert(
    `You've chosen ${foodChosen}! Yummy!`
  )
}

else if (food == 2) {
  foodChosen = "pasta"
  alert(
    `You've chosen ${foodChosen}! Great choice! `
  )
}

else if (food == 3) {
  foodChosen = "salad"
  alert(
    `You've chosen ${foodChosen}! Gotta get those vitamins, am I right?`
  )
}

else {
  alert(
    `I'm sorry, looks like we don't have that on the menu. Please try again.`
  )
}

// Step 4 - Subtype choice
// 

let pizzaType
let pastaType
let saladType
let typeChosen

if (foodChosen == "pizza"){
  pizzaType = prompt(
    `Now let's decide what type of ${foodChosen} you're in the mood for. \nType the corresponding number below.
    1. Margherita
    2. Vesuvio
    3. Capricciosa`
  )

  if (pizzaType == 1) {
    typeChosen = "Margherita"
    alert(
      `A delicious ${typeChosen} ${foodChosen}, great choice!`
    )
  }

  else if (pizzaType == 2) {
    typeChosen = "Vesuvio"
    alert(
      `A delicious ${typeChosen} ${foodChosen}, great choice!`
    )
  }


  else if(pizzaType == 3) {
    typeChosen = "Capricciosa"
    alert(
      `A delicious ${typeChosen} ${foodChosen}, great choice!`
    )
  }


  else {
    alert(
      `Looks like you tried to order something outside the menu. Unfortunately, we only serve three types of ${foodChosen}s at this restaurant, please try again.`
    )
  }

}


else if (foodChosen == "pasta"){
  pastaType = prompt(
    `Now let's decide what type of ${foodChosen} you're in the mood for. \nType the corresponding number below.
    1. Pomodoro
    2. Bolognese
    3. Carbonara`
  )

  if (pastaType == 1) {
    typeChosen = "Pomodoro"
    alert(
      `A delicious ${foodChosen} ${typeChosen}, love it!`
    )
  }

  else if (pastaType == 2) {
    typeChosen = "Bolognese"
    alert(
      `A delicious ${foodChosen} ${typeChosen}, love it!`
    )
  }


  else if(pastaType == 3) {
    typeChosen = "Carbonara"
    alert(
      `A delicious ${foodChosen} ${typeChosen}, love it!`
    )
  }


  else {
    alert(
      `Looks like you tried to order something outside the menu. Unfortunately, we only serve three types of ${foodChosen}s at this restaurant, please try again.`
    )
  }
}


else if (foodChosen == "salad"){
  saladType = prompt(
    `Now let's decide what type of ${foodChosen} you're in the mood for. \nType in the corresponding number below.
    1. Caesar 
    2. Greek
    3. Niçoise`
  )

  if (saladType == 1) {
    typeChosen = "Caesar"
    alert(
      `A delicious ${typeChosen} ${foodChosen}, yummy!`
    )
  }

  else if (saladType == 2) {
    typeChosen = "Greek"
    alert(
      `A delicious ${typeChosen} ${foodChosen}, yummy!`
    )
  }


  else if(saladType == 3) {
    typeChosen = "Niçoise"
    alert(
      `A delicious ${typeChosen} ${foodChosen}, yummy!`
    )
  } 


  else {
    alert(
      `Looks like you tried to order something outside the menu. Unfortunately, we only serve three types of ${foodChosen}s at this restaurant, please try again.`
    )
  }

}

// Step 5 - Age + Order confirmation

let adultPrice = 100 
let kidsPrice = 70

const customerAge = prompt(
  `Now we just need to calculate what size your ${foodChosen} should be, and what the total cost will be. Please enter your age below and we'll do the rest.`
)

if (customerAge >= 15) {
  orderConfirm = prompt(
    `You've ordered an adult size ${typeChosen} ${foodChosen}. Your total will be SEK ${adultPrice}. Is this correct? Enter a number below to confirm your order.
    1. Yes, I want to order.
    2. No, I want to cancel.`
  )
}

else if (customerAge <= 15) {
  orderConfirm = prompt(
    `You've ordered a child size ${typeChosen} ${foodChosen}. Your total will be SEK ${kidsPrice}. Is this correct? Enter a number below to confirm your order.
    1. Yes, I want to order.
    2. No, I want to cancel.`
  )
}

if (orderConfirm == 1) {
  alert(
    `Thank you for your order, ${customerName}! Your food will be ready soon!`
  )
}
else if (orderConfirm == 2) {
  alert(
    `We're sad to see you go, ${customerName}! We will be here whenever you're ready to order again!`
  )
}

else {
  alert(
      `We can't understand what you mean by that command, please try again.`
    )
}
