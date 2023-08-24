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
var finalchoice

if (foodName === "Pizza") {
  if (specifyfood === "1") {
    finalchoice = "Spicy pizza"
    alert(`You choosed the ${foodName}: ${finalchoice}`);
  } else if (specifyfood === "2") {
    finalchoice = "Yummy pizza"
    alert(`You choosed the ${foodName}: ${finalchoice}`);
  }
  else if (specifyfood === "3") {
    finalchoice = "Yummy yummy pizza"
    alert(`You choosed the ${foodName}: ${finalchoice}`);
  }
} else if (foodName === "Pasta") {
  if (specifyfood === "1") {
    finalchoice = "Spicy spagetthi"
    alert(`You choosed the ${foodName}: ${finalchoice}`);
  } else if (specifyfood === "2") {
    finalchoice = "Yummy spagetthi"
    alert(`You choosed the ${foodName}: ${finalchoice}`);
  }
  else if (specifyfood === "3") {
    finalchoice = "Yummy yummy spagetthi"
    alert(`You choosed the ${foodName}: ${finalchoice}`);
  }
} else if (foodName === "Salad") {
  if (specifyfood === "1") {
    finalchoice = "Spicy salad"
    alert(`You choosed the ${foodName}: ${finalchoice}`);
  } else if (specifyfood === "2") {
    finalchoice = "Yummy salad"
    alert(`You choosed the ${foodName}: ${finalchoice}`);
  }
  else if (specifyfood === "3") {
    finalchoice = "Yummy yummy salad"
    alert(`You choosed the ${foodName}: ${finalchoice}`);
  }
} else {
  alert(`Invalid choice. Please start over.`);
}

// Step 4 - Age. Adolescent/adult or child
var age = prompt("Portion sizes differs depending on if it's a child or adolescent/adult.", "Please type your age here");

if (age >= 16) {
  alert(`One adult sized ${finalchoice}. That'll be 10euros.`)
} else if (age <= 15) {
  alert(`One child sized ${finalchoice}. That'll be 7euros.`)
}

// Step 5 - Order confirmation
var confirmation = prompt("Enter a number to confirm: 1: Yes, 2: No.");

if (confirmation === "1") {
  alert(`Your ${finalchoice} is being prepared. Yummy!`)
} else {
  alert(`Ok, we'll be happy to prepare a ${finalchoice} or another yummy meal for you another time! Welcome back!`)
}