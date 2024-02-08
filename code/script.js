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

// Step 3 - Subtype choice
// Your code goes here


let subType = ""
let selectedSubType = ""

if (selectedFood === "delicious pizza") {
  subType = prompt(
    `What kind of pizza would you prefer?
    1 - Calzone
    2 - Funghi
    3 - Quatro Staggioni`
  )
  if (subType === "1") {
    selectedSubType = "Calzone"
  } else if (subType === "2") {
    selectedSubType = "Funghi"
  } else if (subType === "3") {
    selectedSubType = "Quatro Staggioni"
  } else {
    alert("Choose a number to make an order")
    exit(1)
  }
} else if (selectedFood === "pasta") {
  subType = prompt(
    `What kind of pasta would you prefer?
    1 - Carbonara
    2 - Bolognese
    3 - Tomato basilica`
  )
  if (subType === "1") {
    selectedSubType = "Carbonara"
  } else if (subType === "2") {
    selectedSubType = "Bolognese"
  } else if (subType === "3") {
    selectedSubType = "tomato basilica"
  } else {
    alert("Choose a number to make an order")
    exit(1)
  }
} else if (selectedFood === "salad") {
  subType = prompt(
    `What kind of salad would you prefer?
    1 - Chicken
    2 - Avocado
    3 - Shrimp`
  )
  if (subType === "1") {
    selectedSubType = "with chicken"
  } else if (subType === "2") {
    selectedSubType = "with avocado"
  } else if (subType === "3") {
    selectedSubType = "with shrimps"
  } else {
    alert("Choose a number to make an order")
    exit(1)
  }
} else {
  alert(`Please try again, choose a number`)
}

alert(`I see you want to order a ${selectedFood} ${selectedSubType}`)