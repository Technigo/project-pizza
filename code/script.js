document.addEventListener("DOMContentLoaded", function () {
  // Step 1 - Welcome and introduction
  alert(`Welcome to Bella Italia Pizzeria! Click 'OK' to start your order.`);

  // Step 1 – Ask for name
  let userName = prompt("What is your name?");

  if (!userName) {
    userName = "Anonymous";
  }

  // Step 2 – Welcome with name + ask for type of food
  // Using Do...while statement to prompt again if invalid value is entered
  let foodType;
  do {
    foodType = parseInt(
      prompt(
        `Ciao ${userName} 👋 
        What would you like to eat today?
  
        Enter a number:
          1 – Pizza 🍕
          2 – Pasta 🍝
          3 – Salad 🥗
          `
      )
    );

    if (foodType === 1) {
      foodType = "Pizza";
    } else if (foodType === 2) {
      foodType = "Pasta";
    } else if (foodType === 3) {
      foodType = "Salad";
    } else {
      foodType = null;
      alert(
        "Sorry, that's not on the menu today. Please type 1, 2 or 3 to make your selection."
      );
    }
  } while (foodType === null);

  // Step 3 - Subtype choice
  let subFoodTypes;
  let subFoodSelection;

  if (foodType === "Pizza") {
    subFoodTypes = `Enter a number:
          1 – Margaritha
          2 – Capricciosa 
          3 – Hawaiis`;
  } else if (foodType === "Pasta") {
    subFoodTypes = `Enter a number:
          1 – Carbonara
          2 – Vongole 
          3 – Lasagne`;
  } else if (foodType === "Salad") {
    subFoodTypes = `Enter a number:
          1 – Caprese
          2 – Insalata Russa 
          3 – Giardiniera`;
  } else {
    subFoodTypes = null;
  }

  do {
    subFoodSelection = parseInt(
      prompt(
        `${foodType}, what an excellent choice! 
        What type would you like?
        
        ${subFoodTypes}
        `
      )
    );

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

    if (subFoodSelection === null) {
      alert(
        "We're all out of that for today I'm afraid. Please type 1, 2 or 3 to make your selection."
      );
    }
  } while (subFoodSelection === null);

  // Step 5 - Age
  let pizzaSize = prompt(
    `Is the pizza for an adult or a child? Please respond with 'adult' or 'child,' or enter 1 for adult and 2 for child.`
  );

  // Step 6 - Order confirmation
  let orderConfirmation;

  do {
    if (pizzaSize.toLowerCase() === "adult" || pizzaSize === "1") {
      orderConfirmation = prompt(`Fantastico ${userName}! 
      Please confirm your order:
      A delicious ${subFoodSelection} ${foodType} in adult size.
        
      To confirm your order, type 'Yes'. 
      To decline, type anything else.
      `);
    } else if (pizzaSize.toLowerCase === "child" || pizzaSize === "2") {
      orderConfirmation = prompt(`Bellissimo ${userName}! 
      Please confirm your order:
      A perfectly crafted ${subFoodSelection} ${foodType} in child size.
        
      To confirm your order, type 'Yes'. 
      To decline, type anything else.
      `);
    } else {
      pizzaSize = null;
    }
  } while (pizzaSize === null);

  if (orderConfirmation === "Yes") {
    alert(`Splendido ${userName}! Your order is on it's way.`);
  } else {
    alert("No worries, hope too see you soon again. Arrivederci!");
  }
});
