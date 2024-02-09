// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to the Cheeziest Pizzeria. 
Ready to order some delicious food?
  
  Click 'OK' to begin.`
)


const nameInput = prompt(
  `What is your name?`
)

switch (nameInput) {
  case "":
    alert(`NONONO, give me your actual name`)
    exit(1)
  break
  default: 
  alert(`Welcome ${nameInput}!
      
  Let's begin.
  We'll make sure to fill your belly!`)

}

/*
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
}*/

console.log(nameInput)

// Step 2 + 3, Food choice + subtype
// Your code goes here

const foodChoice = parseInt( prompt(
  `What would you like to order? 
  
  Please choose a number from our meny:
  1 - Delicious Pizza
  2 - Pasta
  3 - Salad`
)
)
let selectedFood
let subType
let selectedSubType

switch (foodChoice) {
  case 1:
  selectedFood = "delicious pizza"
  alert(`I see! One ${selectedFood} coming up.`)
  subType = parseInt( prompt(
    `What kind of pizza would you prefer?
    1 - Calzone
    2 - Funghi
    3 - Quattro Stagioni`
  )
  )
    switch (subType) {
      case 1:
        selectedSubType = "Calzone"
        alert(`I see you want to order a ${selectedFood} ${selectedSubType}, great choice`)
        break
        case 2:
        selectedSubType = "Funghi"
        alert(`I see you want to order a ${selectedFood} ${selectedSubType}, great choice`)
        break
        case 3:
        selectedSubType = "Quattro stagioni"
        alert(`I see you want to order a ${selectedFood} ${selectedSubType}, great choice`)
        break
        default:
        alert("Choose a number to make an order")
        exit(1)
    }
  break
  case 2:
  selectedFood = "pasta"
  alert(`I see! One ${selectedFood} coming up.`)
  subType = parseInt( prompt(
    `What kind of pasta would you prefer?
    1 - Carbonara
    2 - Bolognese
    3 - Tomato basilica`
  )
  )

  switch (subType) {
    case 1:
      selectedSubType = "Carbonara"
      alert(`I see you want to order a ${selectedFood} ${selectedSubType}, great choice`)
      break
      case 2:
      selectedSubType = "Bolognese"
      alert(`I see you want to order a ${selectedFood} ${selectedSubType}, great choice`)
      break
      case 3:
      selectedSubType = "Tomato Basilica"
      alert(`I see you want to order a ${selectedFood} ${selectedSubType}, great choice`)
      break
      default:
      alert("Choose a number to make an order")
      exit(1)
  }
  break
  case 3:
  selectedFood = "salad"
  alert(`I see! One ${selectedFood} coming up.`)
  subType = parseInt( prompt(
    `What kind of salad would you prefer?
    1 - Chicken
    2 - Avocado
    3 - Shrimp`
  )
  )

  switch (subType) {
    case 1:
      selectedSubType = "with chicken"
      alert(`I see you want to order a ${selectedFood} ${selectedSubType}, great choice`)
      break
      case 2:
      selectedSubType = "with avocado"
      alert(`I see you want to order a ${selectedFood} ${selectedSubType}, great choice`)
      break
      case 3:
      selectedSubType = "with shrimp"
      alert(`I see you want to order a ${selectedFood} ${selectedSubType}, great choice`)
      break
      default:
      alert("Choose a number to make an order")
      exit(1)
  }
  break
default:
  alert("Choose a number to make an order")
  exit(1)
}


// Step 4 - Age
// Your code goes here



let portionSize
let cost
let confirmation 

let age = parseInt( prompt(
  `We serve both adult portion and child sized portion.

Choose your preffered portion size
by entering your age:`
)
)

switch (true) {
  case age <12:
      portionSize = "child portion"
      cost = "6"
      confirmation = parseInt( prompt(
    `So, ${nameInput}, you have selected a ${portionSize} ${selectedFood}, ${selectedSubType}.
  That will be ${cost} euros.

  Shall I forward your order to the chef?

    Enter a number to confirm:
    1 - yes
    2 - no`)
    )
    switch (confirmation) {
      case 1: 
      alert(
        `Thank you for your order!
      
    Your meal will be ready in 10 to 15 minutes`
      )
    break
    case 2:
      alert(
        `I understand, you're welcome back some other time!`
      )
    }

    break
    case age >=12:
      portionSize = "adult portion"
      cost = "10"
      confirmation = parseInt( prompt(
    `So,  ${nameInput}, you have selected an ${portionSize} ${selectedFood}, ${selectedSubType}.
  That will be ${cost} euros.

  Shall I forward your order to the chef?

    Enter a number to confirm:
    1 - yes
    2 - no`)
    )

    switch (confirmation) {
      case 1: 
      alert(
        `Thank you for your order!
      
    Your meal will be ready in 10 to 15 minutes`
      )
    break
    case 2:
      alert(
        `I understand, you're welcome back some other time!`
      )
      break
    }
    break
}