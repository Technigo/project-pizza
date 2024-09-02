document.addEventListener("DOMContentLoaded", function () {
  // Step 1 - Welcome and introduction
  alert(`Welcome to Bella Italia Pizzeria! Click 'OK' to start your order.`);

  // Step 1 – Ask for name
  const userName = prompt("What is your name?");

  // Step 2 – Welcome with name + ask for type of food
  // Using Do...while statement to prompt again if invalid value is entered
  let foodType;
  do {
    foodType = parseInt(
      prompt(
        `Welcome ${userName}! What would you like to eat today?
  
        Enter a number:
          1 – Pizza
          2 – Pasta
          3 – Salad
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
      alert("Wrong input. Please type 1, 2 or 3 to make your selection.");
    }
  } while (foodType === null);

  // Step 4 - Subtype choice
  // Your code goes here

  // Step 5 - Age
  // Your code goes here

  // Step 6 - Order confirmation
  // Your code goes here
});
