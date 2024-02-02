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
if (category === "1"){
  var catName = "Pizza";
}
else if (category === "2"){
  var catName = "Milkshake";
}
else if (category === "3"){
  var catName = "Salad";
}
else {
  alert("We cannot process orders outside of our categories.\nPlease restart the application.")
}
alert(catName + " is a great choice!")

// Step 3 - Subtype choice
// Your code goes here
let subPizza;
let subMilkshake;
let subSalad;
if (catName === "Pizza"){
  let subPizza = prompt("Pizza? Great choice. Which pizza would you like?\n1. Vesuvio\n2. Margherita\n3. Capricciosa")
  if (subPizza === "1"){
    var subName = "Vesuvio"
  }
  else if (subPizza === "2"){
    var subName = "Margherita"
  }
  else if (subPizza === "3"){
    var subName = "Capricciosa"
  }
  else {
    alert("We cannot process orders outside of our categories.\nPlease restart the application.")
  }
}
else if (catName === "Milkshake"){
  let subMilkshake = prompt("Milkshake? Great choice. Which flavour would you like?\n1. Vanilla\n2. Chocolate\n3. Strawberry")
  if (subMilkshake === "1"){
    var subName = "Vanilla Milkshake"
  }
  else if (subMilkshake === "2"){
    var subName = "Chocolate Milkshake"
  }
  else if (subMilkshake === "3"){
    var subName = "Strawberry Milkshake"
  }
  else {
    alert("We cannot process orders outside of our categories.\nPlease restart the application.")
  }
}
else if (catName === "Salad"){
  let subSalad = prompt("What type of salad would you like?\n1. Ceasar salad\n2. Halloumi salad\n3. Ham and cheese salad")
  if (subSalad === "1"){
    var subName = "Ceasar salad"
  }
  else if (subSalad === "2"){
    var subName = "Halloumi salad"
  }
  else if (subSalad === "3"){
    var subName = "Ham and cheese salad"
  }
  else {
    alert("We cannot process orders outside of our categories.\nPlease restart the application.")
  }
}
else {
  alert("I'm sorry, we cannot process orders outside of the predetemined dishes.\nPlease restart your order.")
}
alert(subName + " is a great choice!")


// Step 4 - Age
// Your code goes here

let age = prompt(name + ", we need to verify your age to determine the portion size:")

// Step 5 - Order confirmation
// Your code goes here
