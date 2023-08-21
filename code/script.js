// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

var Name = prompt("What is your name?");
if (Name !== null) {
  alert("Hi, " + Name + "! Welcome!");
} else {
  alert("Hi there! Nice to meet you!");
}

// Step 2 - Food choice
var userInput = prompt("Please select a food type:\n1. Pizza\n2. Pasta\n3. Salad");

var selectedOption = parseInt(userInput);

if (selectedOption === 1) {
  alert("You have selected Pizza!");

  // Step 3 - Subtype choice
  var pizzaSubtype = prompt("Please select a pizza subtype:\n1. Margherita\n2. Pepperoni\n3. Veggie");

  if (pizzaSubtype === "1") {
    alert("You have selected Margherita Pizza!");
  } else if (pizzaSubtype === "2") {
    alert("You have selected Pepperoni Pizza!");
  } else if (pizzaSubtype === "3") {
    alert("You have selected Veggie Pizza!");
  } else {
    alert("Invalid choice. Please select a valid subtype.");
  }

  // Step 2 - Food choice
} else if (selectedOption === 2) {
  alert("You have selected Pasta!");

  // Step 3 - Subtype choice
  var pastaSubtype = prompt("Please select a pasta:\n1. Spaghetti\n2. Fettuccine Alfredo\n3. Pasta Agli Oglio");

  if (pastaSubtype === "1") {
    alert("You have selected Spaghetti Pasta!");
  } else if (pastaSubtype === "2") {
    alert("You have selected Fettuccine Alfredo Pasta!");
  } else if (pastaSubtype === "3") {
    alert("You have selected Pasta Agli Oglio!");
  } else {
    alert("Invalid choice. Please select a valid subtype.");
  }

  // Step 2 - Food choice
} else if (selectedOption === 3) {
  alert("You have selected Salad!");

  // Step 3 - Subtype choice
  var saladSubtype = prompt("Please select a salad:\n1. Caesar Salad\n2. Greek Salad\n3. Garden Salad");

  if (saladSubtype === "1") {
    alert("You have selected Caesar Salad!");
  } else if (saladSubtype === "2") {
    alert("You have selected Greek Salad!");
  } else if (saladSubtype === "3") {
    alert("You have selected Garden Salad!");
  } else {
    alert("Invalid choice. Please select a valid subtype.");
  }
} else {
  alert("Invalid choice. Please select a valid option.");
}



// Step 4 - Age
var userInput = prompt("Is this meal for a child or an adult? Please enter your age");
var age = parseInt(userInput);

if (!isNaN(age)) {
  if (age < 11) {
    alert("You have selected child!");
  } else if (age > 11) {
    alert("You have selected adult!");
  } else {
    alert("Invalid input. Please enter a valid age.");
  }

  // Step 5 - Order confirmation

  var confirmation = prompt("Would you like to confirm your order? \n1. Yes \n2. No");

  if (confirmation === "1") {
    alert("Thank you for your order! Your meal will be prepared. Enjoy!");
  } else if (confirmation === "2") {
    alert("Thank you for considering us. Feel free to return for future orders!");
  }

} else {
  alert("Invalid input. Please enter a valid age.");
}

