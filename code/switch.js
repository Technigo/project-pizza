// Technigo Pizza Project
// 29 September 2023
// Kai Lee

// I created a separate file for variables called variable.js. This file will have
// the different menu choices we have.

// Step 1 - Welcome and introduction
alert(
  `Welcome to Kai's Pizzeria 👨🏽‍🍳. Ready to Start? - Click 'OK' to begin.`
);

const firstName = prompt("Please enter your name:");
alert(`Nice to meet you, ${firstName} 👋🏽`);

// Step 2 - Food choice
// the food choice option is generated based on our foodChoices variable
let foodChoiceText = "\n";
foodChoices.forEach(choice => {
  foodChoiceText += `${choice.key} - ${choice.name}\n`;
});

const foodChoiceNum = prompt(
  `What type of food would you like to order?

    Enter a number:
    ${foodChoiceText}
  `
);

let foodChoice;

// we use this switch case to get the user's food choice based on the number
// they selected. 
switch (foodChoiceNum) {
  case '1': 
    // Pizza
    foodChoice = foodChoices[0];
    break;
  case '2':
    // Pasta
    foodChoice = foodChoices[1];
    break;
  case '3':
    // Salad
    foodChoice = foodChoices[2];
    break;
  default:
    alert(`Invalid answer❗️ Please select a number between 1 and ${foodChoices.length}`)
    exit(1)
}


// Step 3 - Subtype choice
// The subchoices menu will be generated based on our food choice in Step 2
let subchoiceText = "\n";
foodChoice.subchoice.forEach(choice => {
  subchoiceText += `${choice.key} - ${choice.name}\n`;
});

const subtypeChoiceNumber = prompt(
  `Select a ${foodChoice.name} type?

    Enter a number:
    ${subchoiceText}
  `
);

// Step 3.5 - Get the user's final choice
// we get the user's final choice based on the selected food choice and subtype choice.
let finalChoice;

// we use the switch case belowto assign the the user's final food choice based on the
// subtypeChoiceNumber
switch (subtypeChoiceNumber) {
  case '1':
    finalChoice = foodChoice.subchoice[0];
    break;
  case '2':
    finalChoice = foodChoice.subchoice[1];
    break;
  case '3':
    finalChoice = foodChoice.subchoice[2];
    break;
  default:
    alert(`Invalid ${foodChoice.name} type choice❗️`)
    exit(1)
}

alert(`You've chosen a ${finalChoice.name} ${foodChoice.name}!`)

// Step 4 - Age
const age = prompt(
  `Is this order for a child or an adult? Type your age:`
);
// validate the age. We only accept positive numeric values under 150
// We're keeping this as an if statement instead of refactoring to a switch statement
// as a switch statement would not make sense here.
if (age < 0 || age > 150 || isNaN(age) && isNaN(parseFloat(age))) {
  alert(`Invalid age entered❗️`)
  exit(1)
}
const isAdult = age >= 18;
const price = isAdult ? finalChoice.adultPrice.toFixed(2) : finalChoice.kidsPrice.toFixed(2);

// Step 5 - Order confirmation
const orderConfirmation = prompt(
  `One ${isAdult ? `adult` : `child`} sized ${finalChoice.name} ${foodChoice.name} will be prepared for you.
That will be €${price}. Are you sure you want to order this?

    Enter a number to confirm:
    1 - Yes
    2 - No
  `
);

switch (orderConfirmation) {
  case '1': 
    alert(`Thank you for your order! Your delicious ${finalChoice.name} ${foodChoice.name} will be prepared. Please prepare 💶€${price}. See you soon 👋🏽`);
    break;
  case '2':
    alert(`No problem, come back and order anytime you want. 👋🏽`);
    break;
  default:
    alert(`Invalid choice❗️ Please select 1 for Yes or 2 for No.`);
    exit(1);
}
