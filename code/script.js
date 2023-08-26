// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

//Ask user for their name using prompt method (when using conts the variable name doesn't appear in the alert. it says that it's deprecated)
const userName = prompt(`What's your name? - ex. Maria`)

//Display a greeting to confirm users name
alert(`Hi ${userName}! Welcome to Javascript Pizzeria.`)


// Step 2 - Food choice

const foodChoice = prompt(`Choose the type of food that you'd like to order.
Enter a number:
1 - Pizza
2 - Pasta
3 - Salad`);

//Why do I already need to define these 2 in step2? Probably this code would look lot cleaner if I had used an array.
let chosenSubtype; //subtype choice - define dish based on user's choice to alert in next step
let subtypeMessage; //Prepare for next step because I need 2 variables in the condition to define the correct message 

const foodType = parseInt(foodChoice);

let chosenFoodType; //Declare a variable to store the chosen food type

if (foodType === 1) {
  chosenFoodType = "Pizza";
  alert("Wonderful, you've chosen Pizza.");
} else if (foodType === 2) {
  chosenFoodType = "Pasta";
  alert("Wonderful, you've chosen Pasta.");
} else if (foodType === 3) {
  chosenFoodType = "Salad";
  alert("Wonderful, you've chosen Salad.");
} else {
  chosenFoodType = alert("Invalid choice. Please select a number between 1-3.");
}

// Step 3 - Subtype choice

if (chosenFoodType) {
  let subtype;

  if (chosenFoodType === "Pizza") {
    subtype = prompt("What type of pizza would you like?\n1 - Margherita\n2 - Pepperoni\n3 - Veggie");
    subtypeMessage = "Pizza";
  } else if (chosenFoodType === "Pasta") {
    subtype = prompt("What type of pasta would you like?\n1 - Spaghetti\n2 - Alfredo\n3 - Pesto");
    subtypeMessage = "Pasta";
  } else if (chosenFoodType === "Salad") {
    subtype = prompt("What type of salad would you like?\n1 - Caesar\n2 - Greek\n3 - Garden");
    subtypeMessage = "Salad"
  } else {
    // Handle invalid food choice
    alert("Invalid food choice.");
  }

  // Based on the chosen subtype, set the confirmation message
  if (chosenFoodType === "Pizza") {
    if (subtype === "1") {
      chosenSubtype = "Margherita";
    } else if (subtype === "2") {
      chosenSubtype = "Pepperoni";
    } else if (subtype === "3") {
      chosenSubtype = "Veggie";
    }
  } else if (chosenFoodType === "Pasta") {
    if (subtype === "1") {
      chosenSubtype = "Spaghetti";
    } else if (subtype === "2") {
      chosenSubtype = "Alfredo";
    } else if (subtype === "3") {
      chosenSubtype = "Pesto";
    }
  } else if (chosenFoodType === "Salad") {
    if (subtype === "1") {
      chosenSubtype = "Caesar";
    } else if (subtype === "2") {
      chosenSubtype = "Greek";
    } else if (subtype === "3") {
      chosenSubtype = "Garden";
    }
  }

  // Display a confirmation message for subtype choice
  if (chosenSubtype) {
    alert(`Great choice! You selected ${chosenSubtype} ${subtypeMessage}.`);
  } else {
    alert("Invalid subtype choice.");
  }
}

// Step 4 - Age

const age = parseInt(prompt(`Is this pizza for a child or an adult? Type your age:`));

//I hwas struggeling here to get the prompt to work, 
//the error message i got was that chosenSubtype and subtypeMessage wasn't defined
//I found out that bu specifying the variables earlier in the code I could avoid this, but I do not know why?!
let dishSize;
if (age <= 18) {
  dishSize = parseInt(prompt(`One child sized ${chosenSubtype} ${subtypeMessage} will be prepared for you. That'll be €10. Are you sure you want to order this? \nEnter a number to confirm: \n1 - Yes \n2 - No`));
} else {
  dishSize = parseInt(prompt(`One adult sized ${chosenSubtype} ${subtypeMessage} will be prepared for you. That'll be €15. Are you sure you want to order this? \nEnter a number to confirm: \n1 - Yes \n2 - No`));
}

// Step 5 - Order confirmation
//Use ternary?

const orderConfirmation = dishSize === 1
? alert(`Thank you for your order! Your delicious meal will be prepared. see you soon!`)
: alert(`No problem, come back and order anytime you want.`);