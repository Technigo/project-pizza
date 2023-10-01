// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  "Welcome to our Javascript Pizzeria."
)

let name =
  prompt("Hello! Please write your name:")

alert("Hi" + " " + name + " " + "and welcome to the pizzeria!")

// Step 2 - Food choice
// Your code goes here
let food = prompt("What are you in the mood for today?\nPlease enter a number:\n1. Pizza\n2. Pasta\n3. Salad");

switch (food) {
  case "1":
    alert("You are craving pizza today!")
    break;
  case "2":
    alert("You are craving Pasta today!")
    break;
  case "3":
    alert("You are craving Salad today!")
    break;
}

// Step 3 - Subtype choice
// Your code goes here
let selectedFood

if (food === "1") {
  let pizzaType = prompt("Select a Pizza type:\n 1. Kebab \n 2. Hawaiian \n3. Calzone")
  if (pizzaType === "1") {
    selectedFood = "Kebab pizza"
    alert("You have choosen Kebab Pizza! Yum")
  }

  else if (pizzaType === "2") {
    selectedFood = "Hawaiian pizza"
    alert("You have choosen Hawaiian Pizza! Yum")
  }

  else {
    selectedFood = "Calzone pizza"
    alert("You have choosen Calzone Pizza! Yum")
  }
}

else if (food === "2") {
  let pastaType = prompt("Select a Pasta type:\n 1. Carbonara \n 2. Tortellini \n3.Alfredo")
  if (pastaType === "1") {
    selectedFood = "Carbonara pasta"
    alert("You have choosen Carbonara Pasta! Yum")
  }
  else if (pastaType === "2") {
    selectedFood = "Tortellini"
    alert("You have choosen Tortellini! Yum")
  }
  else {
    selectedFood = "Alfredo Pasta"
    alert("You have choosen Alfredo Pasta! Yum")
  }
}

else {
  let saladsType = prompt("Select a Salad type:\n 1. Ceasar \n 2. Greek \n3. Chicken")
  if (saladsType === "1") {
    selectedFood = "Ceasar salad"
    alert("You have choosen Ceasar Salad! Yum")
  }
  else if (saladsType === "2") {
    selectedFood = "Greek salad"
    alert("You have choosen Greek Salad! Yum")
  }
  else {
    selectedFood = "Chicken salad"
    alert("You have choosen Chicken Salad! Yum")
  }
}

// Step 4 - Age
// Your code goes here
let age = prompt("The food - is it for an adult or child? Type your age please:")

const cost = age >= 18 ? 15 : 10
const foodType = age >= 18 ? "adult sized" : "child size"

const confirmation = prompt("One" + " " + foodType + " " + selectedFood + " " + "will be prepared for you. The cost will be £" + cost + " " + ".Are you sure you want to order?\nEnter a number to confirm:\n1. Yes, ofc I am hungry!\n2. No, thank you");


// Step 5 - Order confirmation
// Your code goes here
if (confirmation === "1") {
  alert("Thank you so much for your order! Your meal is being prepared. See you in 10-15 minutes.")
}
else alert("Your order is cancelled. Welcome back any time!")
