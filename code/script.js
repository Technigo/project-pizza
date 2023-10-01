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
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
