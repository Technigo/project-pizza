
alert(
  `Welcome to Pizzeria Estockholmo. Ready to order? - Click 'OK' to begin.`)

  let userName = prompt("Please enter your name:")
alert("Hi, " + userName + "!")

let userChoice = prompt("Please enter the number corresponding to your choice:\n1. Pizza\n2. Pasta\n3. Salad")
switch(userChoice) {
    case "1":
        alert("You have chosen Pizza!")
        break;
    case "2":
        alert("You have chosen Pasta!")
        break;
    case "3":
        alert("You have chosen Salad!")
        break;
    default:
        alert("Invalid choice. Please enter 1, 2, or 3.")
}

let customerType = prompt ("Is the order for a child or an adult?")

if (customerType === "child") {
  alert("Your price will be 5€")
} else if (customerType ==="adult") {
  alert("Your price will be 10€")
} else {
  alert ("Not valid, please try again")
}

let order = "You have chosen " + (userChoice === "1" ? "Pizza" : userChoice === "2" ? "Pasta" : "Salad") +
  " ,your price will be  " + (customerType === "child" ? "5€" : "10€") +
  ". Please let us know if you want to place this order? Type 'yes' to confirm, 'no' to cancel.";

let confirmOrder = prompt(order);

if (confirmOrder.toLowerCase() === "yes") {
    alert("Thank you " + userName + "! Your " + (userChoice === "1" ? "Pizza" : userChoice === "2" ? "Pasta" : "Salad") + " will be made.");
} else if (confirmOrder.toLowerCase() === "no") {
    alert("Thanks for visiting Pizzeria Estockholmo. See you soon!");
} else {
    alert("Please try again.");
}