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
    foodType = parseInt(foodInput);

    // Assign the appropriate food type based on the user's input
    if (foodType === 1) {
      foodType = "Pizza";
    } else if (foodType === 2) {
      foodType = "Pasta";
    } else if (foodType === 3) {
      foodType = "Salad";
    } else {
      // Alert the user if an invalid selection was made
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
  if (foodType === "Pizza") {
    subFoodTypes = `Enter a number:
  1 – Margaritha
  2 – Capricciosa 
  3 – Hawaii`;
  } else if (foodType === "Pasta") {
    subFoodTypes = `Enter a number:
  1 – Carbonara
  2 – Vongole 
  3 – Lasagna`;
  } else if (foodType === "Salad") {
    subFoodTypes = `Enter a number:
  1 – Caprese
  2 – Insalata Russa 
  3 – Giardiniera`;
  } else {
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
    subFoodSelection = parseInt(subFoodInput);

    // Assign the sub-food based on user's input
    if (foodType === "Pizza") {
      if (subFoodSelection === 1) {
        subFoodSelection = "Margaritha";
      } else if (subFoodSelection === 2) {
        subFoodSelection = "Capricciosa";
      } else if (subFoodSelection === 3) {
        subFoodSelection = "Hawaii";
      } else {
        subFoodSelection = null;
      }
    } else if (foodType === "Pasta") {
      if (subFoodSelection === 1) {
        subFoodSelection = "Carbonara";
      } else if (subFoodSelection === 2) {
        subFoodSelection = "Spaghetti Alle Vongole";
      } else if (subFoodSelection === 3) {
        subFoodSelection = "Lasagne";
      } else {
        subFoodSelection = null;
      }
    } else if (foodType === "Salad") {
      if (subFoodSelection === 1) {
        subFoodSelection = "Caprese";
      } else if (subFoodSelection === 2) {
        subFoodSelection = "Insalata Russa";
      } else if (subFoodSelection === 3) {
        subFoodSelection = "Giardiniera";
      } else {
        subFoodSelection = null;
      }
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
      // Confirm adult-sized order if age is higher than 12
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
