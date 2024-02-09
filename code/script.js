// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert (
  `Welcome to our JavaScript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let userName = prompt ("What is your name?")
alert (
  `Ciao ${userName}, great to see you! Click 'OK' to begin your order.`
  )

// Step 2 - Food choice
// Your code goes here

let foodSelection = parseInt ( 
  prompt (
  `What do you want to order?
Please enter the corresponding number:
1 - Pizza
2 - Pasta
3 - Salad`
)
)

let selectedDish =""

if (foodSelection === 1) {
  selectedDish = "pizza"
} else if (foodSelection === 2) {
  selectedDish = "pasta"
} else if (foodSelection === 3) {
  selectedDish = "salad"
} else {
  alert ("Invalid choice, please start again! 🍕")
  exit (1)
}

alert (`You have selected ${selectedDish}! Click 'OK' to continue.`)


// Step 3 - Subtype choice
// Your code goes here

let subtypeDish = ""

//Subchoice if they selected pizza
if (foodSelection === 1) {dishSelection = parseInt( 
  prompt (
  `What kind of pizza would you like to order?
Please enter the corresponding number:
1 - Ortolana 
2 - Margherita 
3 - Quattro Formaggi
  `)
  )
  if (dishSelection === 1) {
    subtypeDish = "Ortolana"
  } else if (dishSelection === 2) {
    subtypeDish = "Margherita"
  } else if (dishSelection === 3) {
    subtypeDish = "Quattro Formaggi"
  } else {
    alert("Invalid choice, please start again! 🍕")
    exit(1)
  }
} 
//Subchoice if they selected pasta
else if (foodSelection === 2) {dishSelection = parseInt( 
  prompt(
`What kind of pasta would you like to order?
Please enter the corresponding number:
1 - Carbonara 
2 - Puttanesca 
3 - Cacio e pepe
  `)
)
  if (dishSelection === 1) {
    subtypeDish = "Carbonara"
  } else if (dishSelection === 2) {
    subtypeDish = "Puttanesca"
  } else if (dishSelection === 3) {
    subtypeDish = "Cacio e pepe"
  } else {
    alert ("Invalid choice, please start again! 🍕")
    exit (1)
  }
} 
//Subchoice if they selected salad
else if (foodSelection === 3) {dishSelection = parseInt(
  prompt (
`What kind of salad would you like to order?
Please enter the corresponding number:
1 - Salade niçoise 
2 - Caesar salad
3 - Caprese salad
  `)
)
  if (dishSelection === 1) {
    subtypeDish = "Niçoise"
  } else if (dishSelection === 2) {
    subtypeDish = "Caesar"
  } else if (dishSelection === 3) {
    subtypeDish = "Caprese"
  } else {
    alert ("Invalid choice, please start again! 🍕")
    exit (1)
  }
} 
else {
  alert ("Invalid choice, please start again! 🍕")
  exit (1)
}

alert (`You have selected ${subtypeDish}! Click 'OK' to continue.`)

// Step 4 - Age
// Your code goes here

let ageInput = parseInt ( 
  prompt (
  `Is this order for a child or an adult? 
Please enter your age:`
)
)

let age =""

if (ageInput >=18 && ageInput<=120) { age = "an adult",
  alert (`You are ordering ${age} size portion. That will be 150 SEK. Click 'OK' to continue 👉`)
} else if (ageInput>=0 && ageInput<18) { age ="a child"
  alert (`You are ordering ${age} size portion. That will be 75 SEK. Click 'OK' to continue 👉`)
} else {
  alert ("Invalid choice, please start again! 🍕")
  exit (1)
}

// Step 5 - Order confirmation
// Your code goes here

let finalConfirmation = parseInt(
  prompt(`Order summary: ${subtypeDish} ${selectedDish} for ${age}. 
Please confirm your order by typing the corresponding number:
1 - 'Yes, I want to proceed with my order' 
2 - 'No, I want to cancel'`)
)

if (finalConfirmation === 1) {
  alert (`Your order has been confirmed and we will start preparing your ${subtypeDish}. Enjoy your meal! 👋`)
} else if (finalConfirmation === 2) {
  alert (`Your order has been cancelled. You're welcome back another time 👋`)
} else {
  alert ("Invalid choice, please start again! 🍕")
  exit (1)
}