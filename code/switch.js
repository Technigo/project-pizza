const startOrder = () => {
  // Step 1 - Welcome and introduction
  alert(`Benvenuto! Welcome! 
Click the button below to begin your order.`);

  // Step 2 – Ask the user for their name
  let userName = prompt("What is your name?");

  // If no name is provided (= the user clicks Cancel), assign Anonynous
  if (!userName) {
    userName = "Anonymous";
  }

  // Step 3 – Welcome with their name + Ask for the type of food they want to order
  // Using Do...while statement to prompt again if invalid value is entered
  let foodType;
  do {
    let foodInput = prompt(`
Ciao ${userName} 👋 
What would you like to eat today?

Enter a number:
  1 – Pizza 🍕
  2 – Pasta 🍝
  3 – Salad 🥗
`);

    // If user clicks cancel abort the order process
    if (foodInput === null) {
      alert("You cancelled the order. Goodbye!");
      return;
    }

    // Parse the user's input
    foodType = Number(foodInput);

    // Assign the appropriate food type based on the user's input
    switch (foodType) {
      case 1:
        foodType = "Pizza";
        break;
      case 2:
        foodType = "Pasta";
        break;
      case 3:
        foodType = "Salad";
        break;
      default:
        foodType = null;
        alert(
          "Sorry, that's not on the menu today. Please type 1, 2 or 3 to make your selection."
        );
    }
  } while (foodType === null); // Keep asking until a valid option is chosen

  // Step 4 - Ask for the specific type of food within the chosen category
  let subFoodTypes;
  let subFoodSelection;

  // Set the sub-food options based on the selected food type
  switch (foodType) {
    case "Pizza":
      subFoodTypes = `Enter a number:
  1 – Margaritha
  2 – Capricciosa 
  3 – Hawaii`;
      break;

    case "Pasta":
      subFoodTypes = `Enter a number:
  1 – Carbonara
  2 – Vongole 
  3 – Lasagna`;
      break;

    case "Salad":
      subFoodTypes = `Enter a number:
  1 – Caprese
  2 – Insalata Russa 
  3 – Giardiniera`;
      break;

    default:
      subFoodTypes = null;
  }

  // Use another do...while loop to get valid input for sub-food selection
  do {
    let subFoodInput = prompt(`
${foodType}, what an excellent choice!
What type would you like?
          
${subFoodTypes}
`);

    // If user clicks cancel abort the order process
    if (subFoodInput === null) {
      alert("You cancelled the order. Goodbye!");
      return;
    }

    // Parse the user's input
    subFoodSelection = Number(subFoodInput);

    // Assign the sub-food based on user's input
    switch (foodType) {
      case "Pizza":
        switch (subFoodSelection) {
          case 1:
            subFoodSelection = "Margaritha";
            break;
          case 2:
            subFoodSelection = "Capricciosa";
            break;
          case 3:
            subFoodSelection = "Hawaii";
            break;
          default:
            subFoodSelection = null;
        }
        break;
      case "Pasta":
        switch (subFoodSelection) {
          case 1:
            subFoodSelection = "Carbonara";
            break;
          case 2:
            subFoodSelection = "Spaghetti Alle Vongole";
            break;
          case 3:
            subFoodSelection = "Lasagne";
            break;
          default:
            subFoodSelection = null;
        }
        break;
      case "Salad":
        switch (subFoodSelection) {
          case 1:
            subFoodSelection = "Caprese";
            break;
          case 2:
            subFoodSelection = "Insalata Russa";
            break;
          case 3:
            subFoodSelection = "Giardiniera";
            break;
          default:
            subFoodSelection = null;
        }
        break;
    }

    // Alert the user if they make an invalid sub-food selection
    if (subFoodSelection === null) {
      alert(
        "We're all out of that for today I'm afraid. Please type 1, 2 or 3 to make your selection."
      );
    }
  } while (subFoodSelection === null); // Keep asking until a valid selection is made

  // Step 5 - Ask for the user's age to determine the portion size
  let pizzaSize = prompt(
    `Is the pizza for an adult or a child? 

Please enter your age.`
  );

  // Step 6 - Confirm the order details and ask for confirmation
  let orderConfirmation;

  do {
    if (Number(pizzaSize) >= 12) {
      // Confirm adult-sized order if age is equal or higher than 12
      orderConfirmation = prompt(`Fantastico ${userName}! 
Please confirm your order:
A delicious ${subFoodSelection} ${foodType} in adult size.
          
To confirm your order, type 'Yes'. 
To decline, type anything else.
        `);
    } else if (Number(pizzaSize) < 12) {
      // Confirm child-sized order if age is lower than 12
      orderConfirmation = prompt(`Bellissimo ${userName}! 
Please confirm your order:
A perfectly crafted ${subFoodSelection} ${foodType} in child size.
          
To confirm your order, type 'Yes'. 
To decline, type anything else.
        `);
    } else {
      // Prompt again if age input is invalid
      pizzaSize = null;
    }
  } while (pizzaSize === null); // Keep asking until valid input is given

  // Step 7 - Final message based on confirmation
  if (orderConfirmation.toLowerCase() === "yes") {
    alert(`Splendido ${userName}! Your order is on it's way.`);
  } else {
    alert("No worries, hope too see you soon again. Arrivederci!");
  }
};
