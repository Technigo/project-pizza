// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to the Cheeziest Pizzeria. 
Ready to order some delicious food?
  
  Click 'OK' to begin.`
)
// Step 2 - Food choice
// Your code goes here


const nameInput = prompt(
  `What is your name?`
)

if (nameInput === "") {
  alert(
    `Please reload the page, write your name to procees`)
  exit(1)
} else if (nameInput != null) {
  alert(
    `Welcome ${nameInput}!
    
Let's begin.
We'll make sure to fill your belly!`
  )
}


const foodChoice = prompt(
  `What would you like to order? 
  
  Please choose a number from our meny:
  1 - Delicious Pizza
  2 - Pasta
  3 - Salad`
)

let selectedFood = ""

if (foodChoice === "1") {
  selectedFood = "delicious pizza"
} else if (foodChoice === "2") {
  selectedFood = "pasta"
} else if (foodChoice === "3") {
  selectedFood = "salad"
} else {
  alert("Choose a number to make an order")
  exit(1)
}

alert(`I see! One ${selectedFood} coming up.`)
