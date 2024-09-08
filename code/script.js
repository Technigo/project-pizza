// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let userName = prompt("What is your name?");
alert("Hi, " + userName + "!");

// Step 2 - Food choice
// Your code goes here
let foodChoices = ["Pizza", "Pasta", "Salad"];

let choice = prompt("Choose your food by entering a number (1, 2 or 3):\n1. Pizza\n2. Pasta\n3. Salad");

// Convert the choice to a number
choice = parseInt(choice);

// Check if the choice is valid and within the range of food choices
let chosenFood;
if (isNaN(choice) || choice < 1 || choice > foodChoices.length) {
  alert("Invalid choice. Please enter a number between 1 and " + foodChoices.length);
} else {
  chosenFood = foodChoices[choice - 1];
  alert("You chose " + chosenFood);
}

// Declare chosenSubtype outside the switch statement
let chosenSubtype;

// Step 3 - Subtype choice
// Your code goes here
// Prompt for subtype only if chosenFood has subtypes
if (chosenFood === "Pizza" || chosenFood === "Pasta" || chosenFood === "Salad") {
  let subtypes = {
    Pizza: ["Pepperoni", "Margherita", "Hawaiian"],
    Pasta: ["Spaghetti", "Mac and Cheese", "Lasagna"],
    Salad: ["Caesar", "Greek", "Cobb"]
  };

  chosenSubtype = subtypes[chosenFood][parseInt(prompt(`Choose your ${chosenFood} type by entering a number (1, 2 or 3):\n1. ${subtypes[chosenFood][0]}\n2. ${subtypes[chosenFood][1]}\n3. ${subtypes[chosenFood][2]}`)) - 1];
}

// Step 4 - Age
// Your code goes here
// Step 4 - Child or adult
let age = parseInt(prompt("Enter the age of the person the food is for:"));

// Calculate the cost based on food type, subtype, and age
let foodPrices = {
  Pizza: {
    Pepperoni: {
      adult: 100,
      child: 80
    },
    Margherita: {
      adult: 90,
      child: 70
    },
    Hawaiian: {
      adult: 110,
      child: 90
    }
  },
  Pasta: {
    Spaghetti: {
      adult: 80,
      child: 60
    },
    "Mac and Cheese": {
      adult: 70,
      child: 50
    },
    Lasagna: {
      adult: 90,
      child: 70
    }
  },
  Salad: {
    Caesar: {
      adult: 60,
      child: 40
    },
    Greek: {
      adult: 70,
      child: 50
    },
    Cobb: {
      adult: 80,
      child: 60
    }
  }
};

// Construct the order message based on food type, subtype, and age
let orderMessage = `You ordered ${chosenFood}`;

if (chosenSubtype) {
  orderMessage += ` - ${chosenSubtype}`;
}

if (age < 12) {
  orderMessage += " (child portion)";
}

// Calculate the cost based on food type, subtype, and age
let cost = foodPrices[chosenFood][chosenSubtype][age < 12 ? "child" : "adult"];

// Display the order message and cost
alert(`Your order: ${orderMessage}\nTotal cost: ${cost} SEK`);



// Step 5 - Order confirmation
// Your code goes here
// Get confirmation
let confirmOrder = prompt("Confirm your order? (yes/no)");

if (confirmOrder.toLowerCase() === "yes") {
  alert("Order confirmed!");
} else {
  alert("Order canceled.");
}