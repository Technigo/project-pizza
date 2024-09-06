// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

const userName = prompt(
  `Hi hungry fellow! What's your name?`
)

alert(
  `Hello, ${userName}! Hit the button below whenever you are ready to order!`
)

// Step 2 - Food choice
const mealchoice = prompt(
  `What would you like to order? Please enter the number of your choice.
  
  1. Pizza
  2. Pasta
  3. Salad
  `
)
 //Pizza
if (mealchoice === "1") {
  const pizzachoice = prompt(
       `Thanks, ${userName}! You wish to order Pizza!
      
       What type of Pizza you like to order? Please enter the number of your choice.
    
          1. Capricciosa 
          2. Hawaii
          3. Vesuvius
          `
    )
    if (pizzachoice === "1") {
        orderedFood = "Capricciosa pizza"
    } else if (pizzachoice === "2") {
        orderedFood = "Hawaii pizza"
    } else if (pizzachoice === "3") {
        orderedFood = "Vesuvius pizza"
    } else {
        alert("Sorry, we don't have that kind of pizza.")
    }
  if (orderedFood) {
    alert(`You've chosen ${orderedFood}`)
  }

} else if (mealchoice === "2") {
  alert(
    `Thanks, ${userName}! You wish to order Pasta!`
  )

  //Pasta
  const pastachoice = prompt(
    `What type of Pasta you like to order ? Please enter the number of your choice.
     
     1. Spagetti Bolognese
     2. Pasta Carbonara
     3. Fettuccine Alfredo
  `
  )
  
  if (pastachoice === "1") {
    orderedFood = "Spagetti Bolognese"
  } else if (pastachoice === "2") {
    orderedFood = "Pasta Carbonara"
  } else if (pastachoice === "3") {
    orderedFood = "Fettuccine Alfredo"
  } else {
    alert("Sorry, we don't have that kind of pasta.")
  }
  if (orderedFood) {
    alert(`You've chosen ${orderedFood}`)
  }

} else if (mealchoice === "3") {
  alert(
    `Thanks, ${userName}! You wish to order Salad!`
  )

  //Salad
  const saladchoice = prompt(
    `What type of Salad you like to order ? Please enter the number of your choice.
      
      1. Pasta salad 
      2. Noodle salad
      3. Ceaser salad 
    `
  )

  if (saladchoice === "1") {
    orderedFood = "Pasta salad"
  } else if (saladchoice === "2") {
    orderedFood = "Noodle salad"
  } else if (saladchoice === "3") {
    orderedFood = "Ceaser salad"
  } else {
    alert("Sorry, we don't have that kind of salad.")
  }
  if (orderedFood) {
    alert(`You've selected ${orderedFood}`)
  }

} else {
  alert(
    `Sorry, ${userName}! That's not a valid choice!`
  )
}

// Step 4 - Age
const age = prompt (
  `Is this food for a child or an adult? Type your age:`
)
let portion = ""
if (parseInt(age) >= 18) {
  portion = "regular portion" 
}
else {
  portion = "kid's meal"
}

alert(
  `You wish to order a ${portion}`
)

// Step 5 - Order confirmation
const confirmation = prompt(
  `Thank you, ${userName}, for your order of a ${portion} of ${orderedFood}!
  
  Are you sure you want to order this?

  1. Yes
  2. No
`
)

if (confirmation === "1") {
  alert(`
  Thank you for your order, ${userName}! 
    
  Your ${orderedFood} (${portion}) will be prepared shortly. 
    
  We hope you enjoy your meal!`)
}else {
  alert(`No worries, ${userName}. 
    
Thank you for visiting our Javascript Pizzeria. We hope to serve you next time!`);
}