// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our JavaScript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let userName = prompt("What is your name?")
alert(
  `Ciao ${userName}, great to see you! Click 'OK' to begin your order.`
  )

// Step 2 - Food choice
// Your code goes here

let foodSelection = prompt (
  `What do you want to order?
Please enter the corresponding number:
1 - Pizza
2 - Pasta
3 - Salad`
)

let selectedDish = ""

if (foodSelection === "1") {
  selectedDish = "pizza"
} else if (foodSelection === "2") {
  selectedDish = "pasta"
} else if (foodSelection === "3") {
  selectedDish = "salad"
} else {
  alert("Invalid choice, please try again!")
  exit(1)
}

alert(`You have selected ${selectedDish}! Click 'OK' to continue.`)


// Step 3 - Subtype choice
// Your code goes here

let subtypeDish = ""

//Subchoice if they selected pizza
if (foodSelection === "1") {dishSelection = prompt (
  `What kind of pizza would you like to order?
Please enter the corresponding number:
1 - Ortolana 
2 - Margherita 
3 - Quattro Formaggi
  `)
  if (dishSelection === "1") {
    subtypeDish = "Ortolana"
  } else if (dishSelection === "2") {
    subtypeDish = "Margherita"
  } else if (dishSelection === "3") {
    subtypeDish = "Quattro Formaggi"
  } else {
    alert("Invalid choice, please try again!")
    exit(1)
  }
} 
//Subchoice if they selected pasta
else if (foodSelection === "2") {dishSelection = prompt (
`What kind of pasta would you like to order?
Please enter the corresponding number:
1 - Carbonara 
2 - Puttanesca 
3 - Cacio e pepe
  `)
  if (dishSelection === "1") {
    subtypeDish = "Carbonara"
  } else if (dishSelection === "2") {
    subtypeDish = "Puttanesca"
  } else if (dishSelection === "3") {
    subtypeDish = "Cacio e pepe"
  } else {
    alert("Invalid choice, please try again!")
    exit(1)
  }
} 
//Subchoice if they selected salad
else if (foodSelection === "3") {dishSelection = prompt (
`What kind of salad would you like to order?
Please enter the corresponding number:
1 - Salade niçoise 
2 - Caesar salad
3 - Caprese salad
  `)
  if (dishSelection === "1") {
    subtypeDish = "Niçoise"
  } else if (dishSelection === "2") {
    subtypeDish = "Caesar"
  } else if (dishSelection === "3") {
    subtypeDish = "Caprese"
  } else {
    alert("Invalid choice, please try again!")
    exit(1)
  }
} 
else {
  alert("Invalid choice, please try again!")
  exit(1)
}

alert(`You have selected ${subtypeDish}! Click 'OK' to continue.`)

// Step 4 - Age
// Your code goes here

let age = prompt(`Is this order for a child or an adult? Please enter your age:`)
if (age>=18 && age<=120) {
  alert("You will be served an adult portion, that will be 150 SEK.")
}
else if (age>=0 && age<18) {
  alert("You will be served a children's portion, that will be 75 SEK.")
}
else {
  alert("Invalid choice, please try again!")
  exit(1)
}

// Step 5 - Order confirmation
// Your code goes here

prompt(`You have ordered a ${subtypeDish} ${selectedDish} for a ${age} year old person. 
Please confirm your order by typing the corresponding number:
1 - 'Yes' 
2 - 'No'`)

