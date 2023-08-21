// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let name = prompt("What's your name?")
if (name != null) {
  alert(
    `Hey there ${name}, are you ready to order?`
    )
  }

// Step 2 - Food choice
let menuChoices = "What type of food would you like to order? \n \n"
+ "\tEnter a number: \n"
+ "\t1. Pizza\n"
+ "\t2. Pasta\n"
+ "\t3. Salad \n"

let foodChoice = Number(prompt(menuChoices, "Ex. 1"))
let foodName =""
if (foodChoice === 1) {foodName = "pizza"}
else if (foodChoice === 2) {foodName = "pasta"}
else if (foodChoice === 3) {foodName = "salad"}
else {foodName = "an invalid number"}

alert(`You have chosen ${foodName}`)

// Step 3 - Subtype choice
let menuSubchoice;
switch (foodChoice){
  case 1:
    menuSubchoice = "Select a Pizza type: \n \n"
    + "\tEnter a number:\n"
    + "\t1. Vesuvio\n"
    + "\t2. Capricciosa\n"
    + "\t3. Hawaii\n"
    break;
  case 2:
    menuSubchoice = "Select a Pasta type: \n \n"
    + "\tEnter a number:\n"
    + "\t1. Carbonara\n"
    + "\t2. Bolognese\n"
    + "\t3. Vongole\n"
    break;
  case 3:
    menuSubchoice = "Select a Salad type: \n \n"
    + "\tEnter a number:\n"
    + "\t1. Greek salad\n"
    + "\t2. Chicken salad\n"
    + "\t3. Korean noodle salad\n"
    break;
}
let foodSubchoice;
if (menuSubchoice != null){
  foodSubchoice = Number(prompt(menuSubchoice, "Ex. 1"))
}

let dishChosen
if (foodChoice === 1) {
  switch (foodSubchoice){
    case 1:
      dishChosen = "Vesuvio"
      break;
    case 2:
      dishChosen = "Capricciosa"
      break;
    case 3:
      dishChosen = "Hawaii"
      break;
  }
  } else if (foodChoice === 2) {
    switch (foodSubchoice){
      case 1:
        dishChosen = "Pasta Carbonara"
        break;
      case 2:
        dishChosen = "Pasta Bolognese"
        break;
      case 3:
        dishChosen = "Spaghetti alle Vongole"
        break;
    }} else if (foodChoice === 3) {
      switch (foodSubchoice){
        case 1:
          dishChosen = "Greek salad"
          break;
        case 2:
          dishChosen = "Chicken salad"
          break;
        case 3:
          dishChosen = "Korean noodle salad"
          break;
      }
    }

alert(`You have chosen to order ${dishChosen}. Press OK to confirm your choice`)

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
