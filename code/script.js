alert(
  "Welcome to Pizzeria Penguen. Ready to order? - Click 'OK' to begin.")

//user name//
const userName = prompt("Please enter your name:")
console.log(userName)
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
console.log("user choice", userChoice, typeof userChoice)

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

console.log("selected meal", selectedMeal)
alert(`You chose ${selectedMeal} ,exellent choice!`)

//user selection of age//
let customerType = prompt ("Is the order for a child or an adult?")

if (customerType === "child") {
  alert("Your price will be 5€")
} else if (customerType ==="adult") {
  alert("Your price will be 10€")
} else {
  alert ("Not valid, please try again")
}

//order confirmation//
let orderConfirmation = "";

if (customerType === "child" || customerType === "adult") {
  orderConfirmation = prompt(`You have ordered ${selectedMeal} for a ${customerType}. Your total price is ${customerType === "child" ? "5€" : "10€"}. Would you like to confirm your order? Yes or No`);
} else {
  alert("Invalid customer type. Please restart your order.");
}

if (orderConfirmation.toLowerCase() === "yes") {
  alert(`Thank you, ${userName}! Your order for ${selectedMeal} has been confirmed.`);
} else if (orderConfirmation.toLowerCase() === "no") {
  alert("No problem, your order has been canceled. Welcome back any time!");
} else {
  alert("Invalid response. Please restart your order.");
}

