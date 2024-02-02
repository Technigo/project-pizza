// Start here

// Step 1 - Welcome and introduction
// Your code goes here

alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
let name = prompt("Hey What should we call you?")
alert(
  "Hey " + name + "!"
)


// Step 2 - Food choice
// Your code goes here

let category = prompt("Ok, " + name + " what would you like to order:\n1. Pizza\n2. Milkshake\n3. Salad")
let catName
if (category === "1"){
  let catName = "Pizza"
  alert("Pizza is a great choice!")
}
else if (category === "2"){
  let catName = "Milkshake"
  alert("Milkshake is a great choice!")
}
else if (category === "3"){
  let catName = "Salad"
  alert("Salad is a great choice!")
}
else {
  alert("We cannot process orders outside of our categories.\nPlease restart the application.")
}

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
