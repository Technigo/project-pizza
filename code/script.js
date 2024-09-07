// Start here

// Step 1 - Welcome and introduction
// Your code goes here


// This part is the welcome for the customer
alert("Welcome to our Javascript Pizza!");

let userName = prompt ("What's your name ?")
alert("Hello, " + userName + " !");


// Step 2 - Food choice
// Your code goes here
// Choice of the foods"

// let foodChoice let the customer chose his meal before giving a second choice
// we use if to cover all the options

let foodChoice = prompt("What would you like to order ? Select a number :\n1. Pizza\n2. Pasta\n3. Salad");
if (foodChoice == 1) {
  alert("you've chosen a Pizza.");
} else if (foodChoice == 2) {
  alert("you've chosen some Pastas.");
} else if (foodChoice == 3) {
  alert("you've chosen some Salads.");
} else {
  alert("Invalid Choice.");
}


// Step 3 - Subtype choice
// Your code goes here
if (foodChoice == 1){
  let pizzaType = prompt ("Which pizza would you like ?\n1. Margherita\n2. Pepperoni\n3. 4 cheeses");
  if (pizzaType == 1) {
    alert("You've chosen a Margherita Pizza .");
} else if (pizzaType == 2) {
    alert("You've chosen a Pepperoni Pizza .");
} else if (pizzaType == 3) {
    alert("You've chosen a 4 Cheeses Pizza.");
} else {
    alert("Invalid Choice.");
}
}
if (foodChoice == 2) {
  let pastaType = prompt("Which type of pasta would you like?\n1. Carbonara\n2. Bolognese\n3. Pesto");
  if (pastaType == 1) {
    alert("You've chosen Carbonara Pasta.");
  } else if (pastaType == 2) {
    alert("You've chosen Bolognese Pasta.");
  } else if (pastaType == 3) {
    alert("You've chosen Pesto Pasta.");
  } else {
    alert("Invalid Choice.");
    if (foodChoice == 3) {
      let saladType = prompt("Which type of salad would you like?\n1. Caesar\n2. Greek\n3. Niçoise");
      if (saladType == 1) {
        alert("You've chosen a Caesar Salad.");
      } else if (saladType == 2) {
        alert("You've chosen a Greek Salad.");
      } else if (saladType == 3) {
        alert("You've chosen a Niçoise Salad.");
      } else {
        alert("Invalid Choice.");
      }
    }
  }
}


// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
