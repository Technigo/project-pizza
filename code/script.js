// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  "Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin."
)

//Asking person for name with prompt

let person = prompt("Please enter your name")
if (person) {
  alert (
    `Hi and welcome ${person}`
    )
  } else {
  alert (
  `Hi and welcome anonymous.`
  )
  }

// Step 2 - Food choice
// Your code goes here

let food = prompt(`Please select your choice of Food by entering the number.
1 - Pizza
2 - Pasta
3 - Lasagne`)
if (food == 1) {
  alert (
    `You choose Pizza.`
  )
} else if (food == 2) {
  alert (
    `You choose Pasta.`
  )
} else if (food == 3) {
  alert (
    `You choose Lasagne.`
  )
} else {
  alert (
    `You haven't choosen anything.`
  )
}



// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
