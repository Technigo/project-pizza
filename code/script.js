// // URL of the background image
// const bgImageUrl = "trattoria.jpg";

// // Create a new Image object to preload the image
// const img = new Image();
// img.src = bgImageUrl;

// // Wait for the background image to load
// img.onload = function () {
//   // Set the background image once it has been loaded
//   document.body.style.backgroundImage = `url(${bgImageUrl})`;

// Function to get valid user selection----------------------------------------
function getValidSelection(promptText, options) {
  let userSelection = prompt(promptText);
  if (options.includes(userSelection)) {
    return userSelection;
  } else {
    alert("Invalid selection. Please choose a valid option.");
    return getValidSelection(promptText, options); // Recursive call
  }
}

// Step 1 - Welcome and introduction
alert('Welcome to Trattoria Pizzeria. Ready to Start? - Click "OK" to begin.');

let userName;

// Keep prompting the user until a valid name is entered
while (!userName) {
  userName = prompt("Please enter your name:");

  if (!userName) {
    alert("No name entered. Please enter your name to continue.");
  }
}

alert(`Hi ${userName}, nice to meet you!`);

// Step 2 - Food choice
let foodType;
const foodOptions = ["1", "2", "3"];
const foodTypeOptions = {
  1: "Pizza",
  2: "Pasta",
  3: "Salad",
};

let userSelection = getValidSelection(
  `What type of food would you like to order?
        Please select a number: 
          1 - Pizza
          2 - Pasta
          3 - Salad`,
  foodOptions
);

foodType = foodTypeOptions[userSelection];

// Step 3 - Subtype choice
let subtypeSelection;
let subtype;
const subtypeOptions = {
  Pizza: {
    1: "Napolitana",
    2: "Hawaiian",
    3: "Pepperoni",
  },
  Pasta: {
    1: "Carbonara",
    2: "Vongole",
    3: "Lasagna",
  },
  Salad: {
    1: "Caprese",
    2: "Insalata Russa",
    3: "Giardiniera",
  },
};

let subtypePrompt = {
  Pizza: `Select a Pizza type
          Enter a number: 
            1 - Napolitana
            2 - Hawaiian
            3 - Pepperoni`,
  Pasta: `Select a Pasta type
          Enter a number: 
            1 - Carbonara
            2 - Vongole
            3 - Lasagna`,
  Salad: `Select a Salad type
          Enter a number: 
            1 - Caprese
            2 - Insalata Russa
            3 - Giardiniera`,
};

let subtypeOptionsList = Object.keys(subtypeOptions[foodType]);

subtypeSelection = getValidSelection(
  subtypePrompt[foodType],
  subtypeOptionsList
);
subtype = subtypeOptions[foodType][subtypeSelection];

// Step 4 - Age
let age = parseInt(
  prompt("Is this food for a child or an adult? Type your age:"),
  10
);
let cost;
let ageLabel;

if (isNaN(age)) {
  alert("Invalid input. Please type a valid number.");
  throw new Error("Invalid age input"); // Stop the script if input is invalid
} else if (age >= 18) {
  cost = "€15"; // Adult meal cost
  ageLabel = "adult";
} else {
  cost = "€10"; // Child meal cost
  ageLabel = "child";
}

// Confirm order details
let confirmation = confirm(
  `You have ordered ${foodType} (${subtype}) for a ${ageLabel}. That will be ${cost}. Click "OK" to confirm or "Cancel" to modify.`
);

if (confirmation) {
  alert("Thank you for your order! Your meal will be prepared.");
} else {
  alert("Order cancelled. We hope to see you again!");
}
