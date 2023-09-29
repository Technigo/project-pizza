// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

const userName = prompt(
  "Please, type your name below and click 'OK' to continue."
);

alert (`Hello ${userName}! Thank you for visiting us today! - Click 'OK' to choose your meal.`);

// Step 2 - Food choice
const foodType = prompt(
  `Please choose one of the options below by typing the corresponding number:
  1 - Pizza
  2 - Pasta
  3 - Salad`
)
let foodSelection;

if(foodType === "1") {
  foodSelection = "Pizza";
  alert(`Great! You have choosen ${foodSelection}!`)
} else if(foodType === "2") {
  foodSelection = "Pasta";
  alert(`Great! You have choosen ${foodSelection}!`)
} else if(foodType === "3") {
  foodSelection = "Salad";
  alert(`Great! You have choosen ${foodSelection}!`)
} else {
  alert("Invalid option, process ended. Bye!")
}
// Step 3 - Subtype choice
// Your code goes here

// const foodSubType;

// switch (foodSubType) {
//   case 1

// }

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
