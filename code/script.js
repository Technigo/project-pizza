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

//Select a pizza type: 
//Enter a number: 
//1 - Napolitana
//2 - Hawaiian
//3 - Pepperoni

let selectedSubtype = "";

switch (selectedFood) {
  case "Pizza":
    selectedSubtype = prompt(`Please select a pizza type:
  1 - Napolitana
  2 - Hawaii
  3 - Pepperoni
  Please enter the number of your choice.`);
    break;
}

console.log(selectedSubtype)

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
