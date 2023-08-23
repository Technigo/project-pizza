// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

const userName = prompt("Please enter your name")

alert(`How are you ${userName}?`)


// Step 2 - Food choice
// Your code goes here

const foodChoice = prompt(`What would you like to eat today? On today's menu we have: 
1 - Pizza
2 - Pasta 
3 - Salad
Please enter the number of your choice`)
console.log(foodChoice)

let selectedFood = "";

if (foodChoice === "1") {
  selectedFood = "Pizza"
} else if (foodChoice === "2") {
  selectedFood = "Pasta"
} else if (foodChoice === "3") {
  selectedFood = "Salad"
} else {
  alert("Invalid choice. Please select valid number.");
  process.exit(1)
}
console.log(selectedFood)

alert(`You chose ${selectedFood}!`)

// Step 3 - Subtype choice
// Your code goes here

let selectedSubtype = "";

switch (selectedFood) {
  case "Pizza":
    selectedSubtype = prompt(`Please select a pizza type:
  1 - Capricciosa
  2 - Vegetariana
  3 - Quattro Formaggi
  Please enter the number of your choice.`);
    break;
  case "Pasta":
    selectedSubtype = prompt(`Please select a pasta type:
  1 - Pasta Carbonara
  2 - Pasta Puttanesca
  3 - Pasta Bolognese
  Please enter the number of your choice.`);
    break;
  case "Salad":
    selectedSubtype = prompt(`Please select a salad type:
  1 - Caprese salad
  2 - Caesar salad
  3 - Nicoise salad
  Please enter the number of your choice.`);
    break;
  default:
    alert("Invalid choice.")
    process.exit(1)
}

let subtypeName = "";
if (selectedFood === "Pizza") {
  switch (selectedSubtype) {
    case "1":
      subtypeName = "Capricciosa"
      break
    case "2":
      subtypeName = "Vegeteriana"
      break
    case "3":
      subtypeName = "Quattro Formaggio"
      break
  }
} else if (selectedFood === "Pasta") {
  switch (selectedSubtype) {
    case "1":
      subtypeName = "Pasta Carbonara"
      break
    case "2":
      subtypeName = "Pasta Puttanesca"
      break
    case "3":
      subtypeName = "Pasta Bolognese"
      break
  }
} else if (selectedFood === "Salad") {
  switch (selectedSubtype) {
    case "1":
      subtypeName = "Caprese salad"
      break
    case "2":
      subtypeName = "Caesar salad"
      break
    case "3":
      subtypeName = "Nicoise salad"
      break
  }
}

console.log(subtypeName)
alert(`You've chosen ${subtypeName}!`);

// Step 4 - Age
// Your code goes here
const age = prompt(`Is this food for a child or an adult? Type your age`);

console.log(age)

let price = (age >= 18) ? 120 : 60;
let ageType = (age >= 18 ? "adult" : "child")

console.log(price)
console.log(ageType)

const confirm = prompt(`One ${ageType} sized ${subtypeName} will be prepared for you. That'll be ${price}SEK. Are you sure you want to order this?
Enter a number to confirm:
1 - Yes
2 - No`)

console.log(confirm);

// Step 5 - Order confirmation
// Your code goes here
