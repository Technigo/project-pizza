// Technigo Pizza Project
// 29 September 2023
// Kai Lee

// I created a separate file for variables called variable.js. This file will have
// the different menu choices we have. If we want to add new menu items, we just need
// to update the menu choices in that file.

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

const firstName = prompt("Please enter your name:");
alert(`Nice to meet you, ${firstName}.`);

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

const foodChoice = foodChoices.find(choice => choice.key === foodChoiceNum)
if (!foodChoice) {
  alert(`Invalid answer. Please select a number between 1 and ${foodChoices.length}`)
  exit(1)
} else {
  alert(`You've chosen ${foodChoice.name}`)
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
const finalChoice = foodChoice.subchoice.find(choice => choice.key === subtypeChoiceNumber);
if (!finalChoice) {
  alert(`Invalid ${foodChoice.name} type choice`)
  exit(1)
} else {
  alert(`You've chosen a ${finalChoice.name} ${foodChoice.name}!`)
}

// Step 4 - Age
const age = prompt(
  `Is this order for a child or an adult? Type your age:`
);
// validate the age. We only accept positive numeric values under 150
if (age < 0 || age > 150 || isNaN(age) && isNaN(parseFloat(age))) {
  alert(`Invalid age entered!`)
  exit(1)
}
const isAdult = age >= 18;

// Step 5 - Order confirmation
const orderConfirmation = prompt(
  `One ${isAdult ? `adult` : `child`} sized ${finalChoice.name} ${foodChoice.name} will be prepared for you.
That will be €${isAdult ? finalChoice.adultPrice.toFixed(2) : finalChoice.kidsPrice.toFixed(2)}. Are you sure you want to order this?

    Enter a number to confirm:
    1 - Yes
    2 - No
  `
);

if (orderConfirmation === "1") {
  alert(`Thank you for your order! Your delicious ${finalChoice.name} ${foodChoice.name} will be prepared.
Please prepare 💶€${isAdult ? finalChoice.adultPrice.toFixed(2) : finalChoice.kidsPrice.toFixed(2)}. See you soon 👋🏽`);
} else if (orderConfirmation === "2") {
  alert(`No problem, come back and order anytime you want.`);
} else {
  alert(`Invalid choice. Please select 1 for Yes or 2 for No.`)
}
