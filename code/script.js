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

if (foodChoices[foodChoice] == undefined) {
  alert(`Invalid answer. please select a number between 1 and ${Object.entries(foodChoices).length}`);
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

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
