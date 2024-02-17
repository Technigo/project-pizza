alert(
  "Welcome to Pizzeria Penguin. Ready to order? - Click 'OK' to begin.")

//user name//
const userName = prompt("Please enter your name:")
alert (`Hi ${userName}! Get ready to order! `)

//User selection of food//
const userChoice = parseInt(
  prompt(`
Select your choice:
1 - Pizza
2 - Pasta
3 - Salad
Please enter the number of your choice
`)
)
let selectedMeal = ""

if (userChoice === 1) {
  selectedMeal = "Pizza"
} else if (userChoice === 2) {
  selectedMeal = "Pasta"
} else if (userChoice === 3) {
  selectedMeal = "Salad"
} else {
  alert("Invaild choice, please start again")
}

alert(`You chose ${selectedMeal} ,exellent choice!`)

let subtype = "";

if (selectedMeal) {
  if (selectedMeal === "Pizza") {
    subtype = prompt("Please choose a type of pizza: Margherita, Pepperoni, Hawaiian");
  } else if (selectedMeal === "Pasta") {
    subtype = prompt("Please choose a type of pasta: Spaghetti, Lasagna, Ravioli");
  } else if (selectedMeal === "Salad") {
    subtype = prompt("Please choose a type of salad: Caesar, Greek, Chicken");
  }

  if (!subtype) {
    alert("You did not choose a subtype. Please start again.");
 
  } else {
    alert(`You chose ${subtype} ${selectedMeal}, a great choice!`);
  }
}

// User selection of age
let customerType = prompt("Is the order for a child or an adult? Please type 'child' or 'adult'.");
if (customerType !== "child" && customerType !== "adult") {
  alert("Not valid, please try again");
}

let orderPrice = customerType === "child" ? "5€" : "10€";
alert(`Your price will be ${orderPrice}`);

// Order information and confirmation
let orderConfirmation = prompt(`You have ordered a ${subtype} ${selectedMeal} for a ${customerType}. Your total price is ${orderPrice}. Would you like to confirm your order? Yes or No`);

if (orderConfirmation.toLowerCase() === "yes") {
  alert(`Thank you, ${userName}! Your order for a ${subtype} ${selectedMeal} is being prepared.`);
} else if (orderConfirmation.toLowerCase() === "no") {
  alert("No problem, your order has been canceled. Welcome back any time!");
} else {
  alert("Invalid response. Please restart your order.");
}