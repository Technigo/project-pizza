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

if (mealchoice === "1") {
  alert(
    `Thanks, ${userName}! You wish to order Pizza!`
  )

  //Pizza
  const pizzachoice = prompt(
    `What type of Pizza you like to order? Please enter the number of your choice.
    
    1. Capricciosa 
    2. Hawaii
    3. Vesuvius
    `
  )

  if (pizzachoice === "1") {
    orderedFood = "Capricciosa"
  } else if (pizzachoice === "2") {
    orderedFood = "Hawaii"
  } else if (pizzachoice === "3") {
    orderedFood = "Vesuvius"
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
    alert(`You've chosen ${orderedFood}`)
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
if (age >= 18) 
   alert("The food is for an adult")
  else {
    alert ("The food is for a child")
  }

// Step 5 - Order confirmation
// Your code goes here

