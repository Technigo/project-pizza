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

let subtype = []
if (food == 1) {
  subtype = ["1 - Margherita","2 - Pepperoni","3 - Hawaiian"]
} else if (food == 2) {
  subtype = ["1 - Carbonara","2 - Bolognese","3 - Alfredo"]
} else if (food == 3) {
  subtype = ["1 - With Meet","2 - Vegetarian","3 - Vegan"]
} else {
  subtype = ["nothing"]
}

let choice = prompt (`Please select your meal from the following by entering the number\n ${subtype.join("\n")}`)
if (food == 1 && choice == 1) {
  alert (
    `You choose Margherita.`
  )
} else if (food == 1 && choice == 2) {
  alert (
    `You choose Pepperoni.`
  )
} else if (food == 1 && choice == 3) {
  alert (
    `You choose Hawaiian.`
  )
} else if (food == 2 && choice == 1) {
  alert (
    `You choose Carbonara.`
  )
} else if (food == 2 && choice == 2) {
  alert (
    `You choose Bolognese.`
  )
} else if (food == 2 && choice == 3) {
  alert (
    `You choose Alfredo.`
  )
} else if (food == 3 && choice == 1) {
  alert (
    `You choose with meet.`
  )
} else if (food == 3 && choice == 2) {
  alert (
    `You choose vegetarian.`
  )
} else if (food == 3 && choice == 3) {
  alert (
    `You choose vegan.`
  )
} else {
  alert (
    `You choose nothing.`
  )
}


// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
