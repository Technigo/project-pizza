// Technigo Pizza Project
// 29 September 2023
// Kai Lee

// I created a separate file for variables called variable.js. This file will have
// the different menu choices as well as a couple of helper functions:
// `getSubchoiceText` dynamically generates the subchoice menu options
// `getFinalChoice` get the user's final choice based on food choice and subtype choice

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

const firstName = prompt("Please enter your name:");
console.log(firstName);

alert(`Nice to meet you, ${firstName}.`);

// Step 2 - Food choice
// the food choice option is generated based on our foodChoices variable
const foodChoice = prompt(
  `What type of food would you like to order?

    Enter a number:
    ${foodChoiceText}
  `
)

if (!foodChoices[foodChoice]) {
  alert(`Invalid answer. Please select a number between 1 and ${Object.entries(foodChoices).length}`)
  exit(1)
} else {
  alert(`You've chosen ${foodChoices[foodChoice]}`)
}

// Step 3 - Subtype choice
// the subchoices available will be generated based on our food choice
// the subchoice selection text below is generated in the getSubchoiceText helper function
const subtypeChoice = prompt(
  `Select a ${foodChoices[foodChoice]} type?

    Enter a number:
    ${getSubchoiceText(foodChoice)}
  `
)

// we get the user's final choice based on the selected food choice and subtype choice.
const finalChoice = getFinalChoice(foodChoice, subtypeChoice);
if (!finalChoice) {
  alert(`Invalid ${foodChoices[foodChoice]} type choice`)
  exit(1)
} else {
  alert(`You've chosen a ${finalChoice.name} ${foodChoices[foodChoice]}!`)
}

// Step 4 - Age
const age = prompt(
  `Is this order for a child or an adult? Type your age:`
)
// validate the age. We only accept positive numeric values under 150
if (age < 0 || age > 150 || isNaN(age) && isNaN(parseFloat(age))) {
  alert(`Invalid age entered!`)
  exit(1)
}
const isAdult = age >= 18;



// Step 5 - Order confirmation
const orderConfirmation = prompt(
  `One ${isAdult ? `adult` : `child`} sized ${finalChoice.name} ${foodChoices[foodChoice]} will be prepared for you.
That will be €${isAdult ? finalChoice.adultPrice.toFixed(2) : finalChoice.kidsPrice.toFixed(2)}. Are you sure you want to order this?

    Enter a number to confirm:
    1 - Yes
    2 - No
  `
)

if (orderConfirmation === "1") {
  alert(`Thank you for your order! Your delicious ${finalChoice.name} ${foodChoices[foodChoice]} will be prepared.
Please prepare 💶€${isAdult ? finalChoice.adultPrice.toFixed(2) : finalChoice.kidsPrice.toFixed(2)}. See you soon 👋🏽`);
} else if (orderConfirmation === "2") {
  alert(`No problem, come back and order anytime you want.`);
} else {
  alert(`Invalid choice. Please select 1 for Yes or 2 for No.`)
}
