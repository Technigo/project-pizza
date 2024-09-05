// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let userName = prompt("Hi there, whats your name?");
alert(`Hi ${userName}! Order your food in the next step`)


// Step 2 - Food choice

let foodChoice = prompt(" What kind of food do you want?  1. Pizza 2. Pasta 3. Sallad ")




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

if (foodChoice === "1") {
  selectedFood = "Pizza";

  let subChoice = prompt("What kind of pizza do you want? 1. Hawaii 2. Margarita 3. Calzone");

  if (subChoice === "1") {
    subChoice = "Hawaii";
  } else if (subChoice === "2") {
    subChoice = "Margarita";
  } else if (subChoice === "3") {
    subChoice = "Calzone";
  } else {
    subChoice = "Unknown pizza";
    alert("Invalid choice");
  }

} else if (foodChoice === "2") {
  selectedFood = "Pasta";

  let subChoice = prompt("What kind of pasta do you want? 1. Bolognese 2. Carbonara 3. Meatballs");

  if (subChoice === "1") {
    subChoice = "Bolognese";
  } else if (subChoice === "2") {
    subChoice = "Carbonara";
  } else if (subChoice === "3") {
    subChoice = "Meatballs";
  } else {
    subChoice = "Unknown pasta";
    alert("Invalid choice");
  }

} else if (foodChoice === "3") {
  selectedFood = "Sallad";

  let subChoice = prompt("What kind of sallad do you want? 1. Caesar 2. Chicken 3. Cheese & Ham");

  if (subChoice === "1") {
    subChoice = "Caesar";
  } else if (subChoice === "2") {
    subChoice = "Chicken";
  } else if (subChoice === "3") {
    subChoice = "Cheese & Ham";
  } else {
    subChoice = "Unknown sallad";
    alert("Invalid choice");
  }
}

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation




