// Start here

//Declaring variables used inside conditionals
let catName;
let subPizza;
let subMilkshake;
let subSalad;

let subName;
let portion;

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
  catName = "Pizza";
}
else if (category === "2"){
  catName = "Milkshake";
}
else if (category === "3"){
  catName = "Salad";
}
else {
  alert("We cannot process orders outside of our categories.\nPlease restart the application.")
}
alert(catName + " is a great choice!")

// Step 3 - Subtype choice
// Your code goes here
if (catName === "Pizza"){
  subPizza = prompt("Pizza? Great choice. Which pizza would you like?\n1. Vesuvio\n2. Margherita\n3. Capricciosa")
  if (subPizza === "1"){
    subName = "Vesuvio"
  }
  else if (subPizza === "2"){
    subName = "Margherita"
  }
  else if (subPizza === "3"){
    subName = "Capricciosa"
  }
  else {
    alert("We cannot process orders outside of our categories.\nPlease restart the application.")
  }
}
else if (catName === "Milkshake"){
  subMilkshake = prompt("Milkshake? Great choice. Which flavour would you like?\n1. Vanilla\n2. Chocolate\n3. Strawberry")
  if (subMilkshake === "1"){
    subName = "Vanilla Milkshake"
  }
  else if (subMilkshake === "2"){
    subName = "Chocolate Milkshake"
  }
  else if (subMilkshake === "3"){
    subName = "Strawberry Milkshake"
  }
  else {
    alert("We cannot process orders outside of our categories.\nPlease restart the application.")
  }
}
else if (catName === "Salad"){
  subSalad = prompt("What type of salad would you like?\n1. Ceasar salad\n2. Halloumi salad\n3. Ham and cheese salad")
  if (subSalad === "1"){
    subName = "Ceasar salad"
  }
  else if (subSalad === "2"){
    subName = "Halloumi salad"
  }
  else if (subSalad === "3"){
    subName = "Ham and cheese salad"
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

if (age <= 12){
  portion = "child "
}
else{
  portion = "adult "
}

let confirm = prompt("To comfirm your order " + name + ", One " + portion + subName +", is this correct?\n1. Yes\n2. No")
if (confirm === "1" || confirm === "Yes" || confirm === "yes"){
  alert("That will be €1! The order will be delivered shortly. Thank you!")
}
else {
  alert("You are welcome to place a new order anytime.")
}