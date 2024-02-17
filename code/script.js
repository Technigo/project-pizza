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

//user selection of age//
let customerType = prompt ("Is the order for a child or an adult? Please type 'child' or 'adult'. ")

if (customerType === "child") {
  alert("Your price will be 5€")
} else if (customerType ==="adult") {
  alert("Your price will be 10€")
} else {
  alert ("Not valid, please try again")
}
//order information//
let orderConfirmation = "";

if (customerType === "child" || customerType === "adult") {
  orderConfirmation = prompt(`You have ordered ${selectedMeal} for a ${customerType}. Your total price is ${customerType === "child" ? "5€" : "10€"}. Would you like to confirm your order? Yes or No`);
} else {
  alert("Invalid customer type. Please restart your order.");
}
//order confirmation//
if (orderConfirmation.toLowerCase() === "yes") {
  alert(`Thank you, ${userName}! Your order for ${selectedMeal} is being prepared.`);
} else if (orderConfirmation.toLowerCase() === "no") {
  alert("No problem, your order has been canceled. Welcome back any time!");
} else {
  alert("Invalid response. Please restart your order.");
}

