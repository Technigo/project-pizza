function main() {
  // Step 1 - Welcome and introduction
  alert(
    `Welcome to our Stockholm Pizzeria.
Ready to Start?
Click 'OK' to begin.`
  );

  let name = prompt("Please type your name.");

  while (!name.trim()) {
    alert("Please enter a valid name.");
    name = prompt("Please type your name.");
  }

  alert("Hi, " + name + "!");

  // Step 2 - Food choice
  let userChoice = prompt(
    `What would you like to order?
Choose and type the number:
1-Pizza
2-Pasta
3-Salad`
  );

  let hasCorrectResult = ["1", "2", "3"].includes(userChoice);

  while (!hasCorrectResult) {
    alert("Invalid answer. Please choose from 1, 2, 3.");
    userChoice = prompt(
      `What would you like to order?
  Choose and type the number:
  1-Pizza
  2-Pasta
  3-Salad`
    );
    hasCorrectResult = ["1", "2", "3"].includes(userChoice);
  }

  let foodTypes = ["Pizza", "Pasta", "Salad"];
  let chosenFoodType = foodTypes[parseInt(userChoice) - 1];

  alert("You have selected " + chosenFoodType + "!");

  // Step 3 - Subtype choice
  let subtypeChoice;
  switch (chosenFoodType) {
    case "Pizza":
      subtypeChoice = prompt(
        `What type of Pizza would you like?
    Choose and type the number:
    1 - Margherita
    2 - Pepperoni
    3 - Hawaiian`
      );
      break;

    case "Pasta":
      subtypeChoice = prompt(
        `What type of Pasta would you like?
    Choose and type the number:
    1 - Spaghetti Carbonara
    2 - Lasagna
    3 - Penne Arrabbiata`
      );
      break;

    case "Salad":
      subtypeChoice = prompt(
        `What type of Salad would you like?
    Choose and type the number:
    1 - Caesar Salad
    2 - Greek Salad
    3 - Caprese Salad`
      );
      break;

    default:
      alert("Something went wrong. Please start over.");
      break;
  }

  let subtypeOptions = {
    Pizza: ["Margherita", "Pepperoni", "Hawaiian"],
    Pasta: ["Spaghetti Carbonara", "Lasagna", "Penne Arrabbiata"],
    Salad: ["Caesar Salad", "Greek Salad", "Caprese Salad"],
  };

  let chosenSubtypeValue =
    subtypeOptions[chosenFoodType][parseInt(subtypeChoice) - 1];

  if (chosenSubtypeValue) {
    alert("You have selected " + chosenSubtypeValue + "!");
  } else {
    alert("Invalid answer. Please start over.");
    return;
  }

  // Step 4 - Age
  const userAge = prompt(
    `Is this food for a child or an adult? 
Please type your age:`
  );

  const adultPrices = {
    Pizza: {
      Margherita: 12,
      Pepperoni: 14,
      Hawaiian: 14,
    },
    Pasta: {
      "Spaghetti Carbonara": 15,
      Lasagna: 18,
      "Penne Arrabbiata": 17,
    },
    Salad: {
      "Caesar Salad": 14,
      "Greek Salad": 12,
      "Caprese Salad": 15,
    },
  };

  const childPrices = {
    Pizza: {
      Margherita: 8,
      Pepperoni: 11,
      Hawaiian: 12,
    },
    Pasta: {
      "Spaghetti Carbonara": 12,
      Lasagna: 13,
      "Penne Arrabbiata": 12,
    },
    Salad: {
      "Caesar Salad": 8,
      "Greek Salad": 9,
      "Caprese Salad": 10,
    },
  };

  let price;
  if (parseInt(userAge) > 13) {
    price = adultPrices[chosenFoodType][chosenSubtypeValue];
  } else if (parseInt(userAge) <= 13) {
    price = childPrices[chosenFoodType][chosenSubtypeValue];
  }

  if (chosenSubtypeValue) {
    alert("The price for " + chosenSubtypeValue + " is €" + price + ".");
  } else {
    alert("Invalid answer. Please start over.");
    return;
  }

  // Step 5 - Order confirmation
  let confirmation = prompt(
    `Your order: ${chosenSubtypeValue} 's price is €${price}.
Is this correct?
Type "yes" to confirm or "no" to cancel.`
  );

  if (confirmation.toLowerCase() === "yes") {
    alert("Thank you! Your meal will be prepared shortly.");
  } else if (confirmation.toLowerCase() === "no") {
    alert("Please make a new order!");
  } else {
    alert("Invalid answer. Please start over.");
  }
}

main();
