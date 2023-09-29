// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

const firstName = prompt("Please enter your name:");
console.log(firstName);

alert(`Nice to meet you, ${firstName}.`);

// Step 2 - Food choice
// Your code goes here
const foodChoice = prompt(
  `What type of food would you like to order?

    Enter a number:
    ${foodChoiceText}
  `
)

if (!foodChoices[foodChoice]) {
  alert(`Invalid answer. please select a number between 1 and ${Object.entries(foodChoices).length}`)
  location.reload()
} else {
  alert(`You've chosen ${foodChoices[foodChoice]} `)
}


let subtypeChoiceText;
switch(foodChoices[foodChoice]) {
  case foodChoices["1"]:
    subtypeChoiceText = pizzaSubchoiceText;
    break;
  case foodChoices["2"]:
    subtypeChoiceText = pastaSubchoiceText;
    break;
  case foodChoices["3"]:
    subtypeChoiceText = saladSubchoiceText;
    break;
}

// Step 3 - Subtype choice
// Your code goes here
const subtypeChoice = prompt(
  `Select a ${foodChoices[foodChoice]} type?

    Enter a number:
    ${subtypeChoiceText}
  `
)

const finalChoice = getChoice(foodChoice, subtypeChoice);

if (!finalChoice) {
  alert(`Invalid ${foodChoices[foodChoice]} type choice`)
  location.reload()
} else {
  alert(`You've chosen ${finalChoice.name} ${foodChoices[foodChoice]}!`)
}

// Step 4 - Age
const age = prompt(
  `Is this order for a child or an adult? Type your age:`
)

const isAdult = age >= 18;

// Step 5 - Order confirmation
const orderConfirmation = prompt(
  `One ${isAdult ? `adult` : `child`} sized ${finalChoice.name} ${foodChoices[foodChoice]} will be prepared for you.
That will be €${isAdult ? finalChoice.adultPrice : finalChoice.kidsPrice}. Are you sure you want to order this?

    Enter a number to confirm:
    1 - Yes
    2 - No
  `
)

if (orderConfirmation === "1") {
  alert(`Thank you for your order! Your delicious meal will be prepared. See you soon! 👋🏼`);
} else if (orderConfirmation === "2") {
  alert(`No problem, come back and order anytime you want.`);
} else {
  alert(`Invalid choice. Please select 1 for Yes or 2 for No.`)
}
