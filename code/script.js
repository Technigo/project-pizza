// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

//Asking for name
const orderName = prompt("Please provide a name:");
alert(`Hello ${orderName}, can I take your order please.`);

// Step 2 - Food choice
// Your code goes here
//Food variables
let foodSelection
let mealType


foodSelection = prompt(`
  What would you like to order?
  Please provide a number:
  1 - Pizza
  2 - Pasta
  3 - Salad
`);

// Updating variable names based on numers selected
if (foodSelection === "1") {
  foodSelection = "Pizza";

} else if (foodSelection === "2") {
  foodSelection = "Pasta";

} else if (foodSelection === "3") {
  foodSelection = "Salad";

} else {
  alert("This item is not on the meny please try again");
  exit(1)
}

//Chosen main meal
alert(`Great, you have chosen ${foodSelection}!`);



// Step 3 - Subtype choice
// Your code goes here

// Pizza options
if (foodSelection === "Pizza") {
  mealType = prompt(`
  What type of pizza would you like to order?
  Please provide a number:
  1 - Margerita
  2 - Hawaian
  3 - Pepperoni
  `);

  // Updating variable names based on numers selected
  if (mealType === "1") {
    mealType = "Margerita";

  } else if (mealType === "2") {
    mealType = "Hawaian";

  } else if (mealType === "3") {
    mealType = "Pepperoni";

  } else {
    alert("That option is currently unavailable");
    exit(1)
  }

  // Pasta options
} else if (foodSelection === "Pasta") {
  mealType = prompt(`
  What type of pasta would you like to order?
  Please provide a number:
  1 - Carbonara
  2 - Tortellini
  3 - Fettucini
  `);

  // Updating variable names based on numers selected
  if (mealType === "1") {
    mealType = "Carbonara";

  } else if (mealType === "2") {
    mealType = "Tortellini";

  } else if (mealType === "3") {
    mealType = "Fettucini";

  } else {
    alert("That option is currently unavailable");
    exit(1)
  }

  // Salad options
} else if (foodSelection === "Salad") {
  mealType = prompt(`
  What type of salad would you like to order?
  Please provide a number:
  1 - Greek salad
  2 - Ceasar salad
  3 - Tuna salad
  `);

  // Updating variable names based on numers selected
  if (mealType === "1") {
    mealType = "Greek salad";

  } else if (mealType === "2") {
    mealType = "Ceasar salad";

  } else if (mealType === "3") {
    mealType = "Tuna salad";

  } else {
    alert("That option is currently unavailable");
    exit(1)
  }

} else {
  alert("The meal you have seceted is not on the menu.");
  exit(1)
}

//Complete meal order
alert(`Great choice! Our ${mealType} ${foodSelection} is amazing!`);


// Step 4 - Age
// Your code goes here
let sizeOfPerson
let costOfMeal

let ageOfPerson = prompt("How old are you?");
if (ageOfPerson >= 18) {
  sizeOfPerson = "adult";
  costOfMeal = "€15";

} else {
  sizeOfPerson = "child";
  costOfMeal = "€10";
}


// Step 5 - Order confirmation
// Your code goes here
const orderStatus = prompt(`
 Order summary:
 One ${sizeOfPerson} size ${foodSelection} comes to a total cost of ${costOfMeal}.
 Do you wish to place the order?
 1 - Yes
 2 - No`);


if (orderStatus === "1") {
  alert("Thank you! We have recieved your order. Your order number is 4372");

} else {
  alert("Take your time. We look forward to hearing from you again.");
  exit(1)
}
