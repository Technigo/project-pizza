
console.log("Pizzeria order")

alert(
  "Welcome to Pizzeria. Ready to order? - Click 'OK' to begin.")

const userName = prompt("Please enter your name:")

console.log(userName)

alert (`Hi ${userName}! Get ready to order! `)

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
alert(`You chose ${selectedMeal}`)


