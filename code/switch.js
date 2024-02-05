// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

// Store name in variable and greet new user
const username = prompt(`Please enter your name:`);

if (username === "") {
  alert(`Oops, no name was entered.`);
} else {
  alert(`Nice to meet you, ${username}!`);

  // Step 2 - Food choice
  let foodChoice = prompt(`
  What type of food would you like to order?

  Enter a number:
  1. Pizza
  2. Pasta
  3. Salad

`);

  switch (foodChoice) {
    case "1":
      foodChoice = "Pizza";
      break;
    case "2":
      foodChoice = "Pasta";
      break;
    case "3":
      foodChoice = "Salad";
      break;
    default:
      alert(`Invalid choice. Please select a number between 1 and 3.`);
  }

  alert(`You've chosen ${foodChoice}!`);

  // Step 3 - Subtype choice
  const pizzaSubtypes = ["Napolitana", "Hawaian", "Pepperoni"];
  const pastaSubtypes = [
    "Spaghetti Carbonara",
    "Fettucine Alfredo",
    "Cheesy Tortellini",
  ];
  const saladSubtypes = ["Ceaser Salad", "Caprese Salad", "Greek Salad"];
  let foodSubtypes = [];

  switch (foodChoice) {
    case "Pizza":
      foodSubtypes = pizzaSubtypes;
      break;
    case "Pasta":
      foodSubtypes = pastaSubtypes;
      break;
    case "Salad":
      foodSubtypes = saladSubtypes;
      break;
    default:
      alert(`Invalid ${foodChoice} type choice.`);
  }

  // Prompt the subtypes corresponding food choice
  let subtypeChoice = prompt(`
    Select a ${foodChoice} type

    Enter a number:
    1. ${foodSubtypes[0]}
    2. ${foodSubtypes[1]}
    3. ${foodSubtypes[2]}

`);

  // Translate number into corresponding subtype
  switch (subtypeChoice) {
    case "1":
      subtypeChoice = `${pizzaSubtypes[subtypeChoice - 1]}`;
      break;
    case "2":
      subtypeChoice = `${pastaSubtypes[subtypeChoice - 1]}`;
      break;
    case "3":
      subtypeChoice = `${saladSubtypes[subtypeChoice - 1]}`;
      break;
    default:
      alert(`Invalid choice. Please select a number between 1 and 3.`);
  }

  alert(`You've chosen ${subtypeChoice}!`);
}
