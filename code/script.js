// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

var username = prompt("What's your name?", "Confused Developer");

alert("Welcome! Let's order some yummy food " + username + "!");

// Step 2 - Food choice
var choosefood = prompt("What would you like to order? 1 = Pizza, 2 = Pasta, 3 = Salad", "Type your number of choice here");

let foodName;

if (choosefood === "1") {
  foodName = "Pizza";
} else if (choosefood === "2") {
  foodName = "Pasta";
} else if (choosefood === "3") {
  foodName = "Salad";
} else {
  alert(`Sorry, invalid number. Please start over.`);
}

alert("Yummy! " + foodName + "! What a great choice!");

// Step 3 - Subtype choice depending on food choice
let specifyfood;

if (foodName === "Pizza") {
  specifyfood = prompt("Select a type of pizza: 1 = Spicy pizza, 2 = Yummy Pizza, 3= Yummy yummy pizza")
} else if (foodName === "Pasta") {
  specifyfood = prompt("Select a type of pasta: 1 = Spicy spaghetti, 2 = Yummy spagetthi, 3 = Yummy yummy spagetthi", "Type your number of choice here");
} else if (foodName === "Salad") {
  specifyfood = prompt("Select a type of salad: 1 = Spicy salad, 2 = Yummy salad, 3 = Yummy yummy salad", "Type your number of choice here");
} else {
  alert(`Sorry, invalid choice. Please start over.`);
}

//Determining the chosen subtype and providing feedback using alert method to confirm the selection.
if (foodName === "Pizza") {
  if (specifyfood === "1") {
    alert(`You choosed the ${foodName}: Spicy pizza`);
  } else if (specifyfood === "2") {
    alert(`You choosed the ${foodName}: Yummy Pizza`);
  }
  else if (specifyfood === "3") {
    alert(`You choosed the ${foodName}: Yummy yummy Pizza`);
  }
} else if (foodName === "Pasta") {
  if (specifyfood === "1") {
    alert(`You choosed the ${foodName}: Spicy spagetthi`);
  } else if (specifyfood === "2") {
    alert(`You choosed the ${foodName}: Yummy spagetthi`);
  }
  else if (specifyfood === "3") {
    alert(`You choosed the ${foodName}: Yummy yummy spagetthi`);
  }
} else if (foodName === "Salad") {
  if (specifyfood === "1") {
    alert(`You choosed the ${foodName}: Spicy salad`);
  } else if (specifyfood === "2") {
    alert(`You choosed the ${foodName}: Yummy salad`);
  }
  else if (specifyfood === "3") {
    alert(`You choosed the ${foodName}: Yummy yummy salad`);
  }
} else {
  alert(`Invalid choice. Please start over.`);
}


// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
