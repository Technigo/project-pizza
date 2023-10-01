// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let userQuestion = "Please enter your name:"
const userName = prompt(userQuestion)
alert(`Hi ${userName}!`)

// Step 2 - Food choice
userQuestion = "Please select the menu of your choice.\n Enter a number: \n 1 - Pizza \n 2 - Pasta \n 3 - Salad"
const userChoice = prompt(userQuestion)

let choiceName

switch (userChoice) {
  case "1":
    choiceName = "Pizza"
    break
  case "2":
    choiceName = "Pasta"
    break
  case "3":
    choiceName = "Salad"
    break
  default:
    choiceName = "Invalid"
    break
}

if (choiceName === "Invalid")
{
  alert(`Invalid choice! Please choose between 1 - 3!`)
}
else
{
  alert(`You've chosen ${choiceName}!`)
}

// Step 3 - Subtype choice
let subChoiceName
let adultPrice, childPrice

if (choiceName === "Pizza")
{
  userQuestion = "Select a Pizza type.\n Enter a number: \n 1 - Vegetarian \n 2 - Fungi \n 3 - Falafel"
  const pizzaType = prompt(userQuestion)
  switch (pizzaType) {
    case "1":
      subChoiceName = "Vegetarian"
      adultPrice = 100 
      childPrice = 50
      break
    case "2":
      subChoiceName = "Fungi"
      adultPrice = 95 
      childPrice = 50
      break
    case "3":
      subChoiceName = "Falafel"
      adultPrice = 85 
      childPrice = 35
      break
    default:
      subChoiceName = "Invalid"
      break
  } 
}
else if (choiceName === "Pasta")
{
  userQuestion = "Select a Pasta type.\n Enter a number: \n 1 - Macaroni \n 2 - Spaghetti Carbonara \n 3 - Cheesy Italian"
  const pastaType = prompt(userQuestion)
  switch (pastaType) {
    case "1":
      subChoiceName = "Macaroni"
      adultPrice = 60 
      childPrice = 30
      break
    case "2":
      subChoiceName = "Spaghetti Carbonara"
      adultPrice = 105 
      childPrice = 50
      break
    case "3":
      subChoiceName = "Cheesy Italian"
      adultPrice = 149 
      childPrice = 60
      break
    default:
      subChoiceName = "Invalid"
      break
  } 
}
else if (choiceName === "Salad")
{
  userQuestion = "Select a Salad type.\n Enter a number: \n 1 - Greek \n 2 - Mexican \n 3 - Indian"
  const saladType = prompt(userQuestion)
  switch (saladType) {
    case "1":
      subChoiceName = "Greek"
      adultPrice = 65 
      childPrice = 30
      break
    case "2":
      subChoiceName = "Mexican"
      adultPrice = 85 
      childPrice = 40
      break
    case "3":
      subChoiceName = "Indian"
      adultPrice = 75 
      childPrice = 35
      break
    default:
      subChoiceName = "Invalid"
      break
  } 
}

if (subChoiceName === "Invalid")
{
  alert(`Invalid choice! Please choose between 1 - 3!`)
}
else
{
  alert(`You've chosen ${subChoiceName}!`)
}

// Step 4 - Age
userQuestion = "Is this food for a child or adult? Please enter age: "
const age = prompt(userQuestion)
if (age >= 18)
{
 orderMessage = `One adult sized ${subChoiceName} ${choiceName.toLowerCase()} will be prepared for you. That'll be ${adultPrice} SEK`
}
else
{
  orderMessage = `One child sized ${subChoiceName} ${choiceName.toLowerCase()} will be prepared for you. That'll be ${childPrice} SEK`
}

userQuestion = `${orderMessage}. Are you sure you want to order this? Enter a number to confirm: \n 1 - Yes \n 2 - No`
const confirmationChoice = prompt(userQuestion)

// Step 5 - Order confirmation
if (confirmationChoice === "1")
{
  alert(`Thankyou for your order! Your delicious meal will be prepared. See you soon!!`)
}
else if (confirmationChoice === "2")
{
  alert(`No worries! Comeback and order anytime soon!`)
}
else
{
  alert(`Invalid choice! Please choose between 1 or 2!`) 
}
