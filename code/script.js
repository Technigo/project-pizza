// Start here

// Step 1 - Welcome and introduction
// Your code goes here

alert("Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.")
let customerName = prompt("Please enter your name", "Your name")
alert("Hi " + customerName + "! What are you craving today? \nPlease press \"ok\” to continue.")
const errMsg = "Incorrect number, please enter 1, 2 or 3."

// Step 2 - Food choice
// Your code goes here

let foodChoice = ""
while (foodChoice == "") {
  let choice = prompt("Please enter a number: \n 1 - Pizza \n 2 - Pasta \n 3 - Salad", "Please type you number of choice here")
  if (choice == 1) {
    foodChoice = "Pizza"
  } else if (choice == 2) {
    foodChoice = "Pasta"
  } else if (choice == 3) {
    foodChoice = "Salad"
  } else {
    alert(errMsg)
  }
}

alert("You have selected: " + foodChoice + ". Yummy!")  

// Step 3 - Subtype choice
// Your code goes here

let foodType = ""
while (foodType == "") {
  if (foodChoice == "Pizza") {
    choice = prompt("Please enter a number: \n 1 - Napolitana \n 2 - Margherita \n 3 - Sicilian", "Please type you number of choice here") 
    if (choice == 1) {
      foodType = "Napolitana"          
    } else if (choice == 2) {
      foodType = "Margherita"  
    } else if (choice == 3) {
      foodType = "Sicilian"  
    } else {
      alert(errMsg)
    }
  } else if (foodChoice == "Pasta") {
    choice = prompt("Please enter a number: \n 1 - Fungui \n 2 - Ragú \n 3 - Carbonara", "Please type you number of choice here") 
    if (choice == 1) {
      foodType = "Fungui"          
    } else if (choice == 2) {
      foodType = "Ragú"  
    } else if (choice == 3) {
      foodType = "Carbonara"  
    } else {
      alert(errMsg)
    }
  } else if (foodChoice == "Salad") {
    choice= prompt("Please enter a number: \n 1 - Caesar \n 2 - Greek \n 3 - Caprese", "Please type you number of choice here") 
    if (choice == 1) {
      foodType = "Caesar"          
    } else if (choice == 2) {
      foodType = "Greek"  
    } else if (choice == 3) {
      foodType = "Caprese"  
    } else {
      alert(errMsg)
    }
  } 
}

alert("You have selected: " + foodType + ", great choice!")

// Step 4 - Age
// Your code goes here

let age 
while (isNaN(age) == true ||  age < 1 || 100 < age) {
  age = prompt("How old are you?", "Please type your age here")
  if (isNaN(age) == true || age < 1 || 100 < age) {
    alert("Please enter a valid age.")
  }
}
let price, size
if (age > 15) {
  size = "an adult size "
  price = 150
} else {
  size = "a kid size "
  price = 75
}

let confirm = ""
while (confirm == "") {
  choice = prompt("You have chosen " + size + foodType + " " + foodChoice + ". This will cost you " + price + " kr. \nIs this correct? Please enter 1 - for Yes or 2 - for No")
  if (choice == 1) {
    confirm = 1
  } else if (choice == 2) {
    confirm = 2
  } else {
    alert("Please enter 1 or 2")
  }
}  

// Step 5 - Order confirmation
// Your code goes here

if (confirm == 1) {
  alert("Thank you for your order! Your delicious meal will be prepared. See you soon " + String.fromCodePoint(0x1F920))
} else if (confirm == 2) {
  alert("No problem, come back and order anytime you want!");
}