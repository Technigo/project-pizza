// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let userName = prompt("Hi there, whats your name?");
alert(`Hi ${userName}! Order your food in the next step`)


// Step 2 - Food choice

let foodChoice = prompt(" What kind of food do you want?  1. Pizza 2. Pasta 3. Sallad ")


let selectedFood
let subChoice

if (foodChoice === "1") {
  selectedFood = "Pizza";
}
else if (foodChoice === "2") {
  selectedFood = "Pasta";
}
else if (foodChoice === "3") {
  selectedFood = "Sallad";
} else {
  selectedFood = "unknown";
  alert("Error");
}

// Step 3 - Subtype choice



// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation




