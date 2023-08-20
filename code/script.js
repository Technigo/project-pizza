// Start here

// Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let name = prompt(`Please enter your name:`);

alert(`Nice to meet you, ${name}!`);

// Declaring all variables
let food = parseInt(prompt(`What would you like to order? 
Enter number 1-3 to choose among the followings:
1. Pizza
2. Pasta
3. Sallad`
));

let subtype;

let age;

let confirmation;

// Handling logical sequences for each food choice

// Pizza
if (food == 1) {
  alert(`Thank you. Let's get you a pizza!`);
  // Subtype choice for pizza
  subtype = parseInt(prompt(
    `Please enter number 1-3 to select a pizza type:
    1. Hawaiian
    2. Pepperoni
    3. Quattro Stagioni`
  ));
  if (subtype == 1) {
    alert(`You selected a Hawaiian pizza!`);
  } else if (subtype == 2) {
    alert(`You selected a Pepperoni pizza!`);
  } else if (subtype == 3) {
    alert(`You selected a Quattro Stagioni pizza!`);
  } else {
    alert(`Invalid choice. Please enter number 1-3 to choose among the dishes.`);
    // go back to selecting pizza???
  }

  // Age
  if (subtype >= 1 && subtype <= 3) {
    age = parseInt(prompt(`Is this food for a child or an adult? Type your age:`));
    if (age >= 0 && age < 18) {
      // Child-size
      confirmation = parseInt(prompt(`One child-sized portion will be prepared for you. It will cost $10.
      Please enter 1-2 to confirm your order:
      1. Yes
      2. No`));

      // Order confirmation
      if (confirmation == 1) {
        alert(`Thank you for your order. Your meal will be prepared soon. We will let you know when it is ready for pick-up.`);
      } else if (confirmation == 2) {
        alert(`No problem. Go back and order anytime. See you then!`);
      } else {
        alert(`Invalid choice. Please enter number 1-2 to confirm your order.`); // go back to confirming order???
      }

    } else if (age >= 18) {
      // Adult-size
      confirmation = parseInt(prompt(`One adult-sized portion will be prepared for you. It will cost $15.
      Please enter 1-2 to confirm your order:
      1. Yes
      2. No`));

      // Order confirmation
      if (confirmation == 1) {
        alert(`Thank you for your order. Your meal will be prepared soon. We will let you know when it is ready for pick-up.`);
      } else if (confirmation == 2) {
        alert(`No problem. Go back and order anytime. See you then!`);
      } else {
        alert(`Invalid choice. Please enter number 1-2 to confirm your order.`); // go back to confirming order???
      }
    } else {
      // Handling invalid answer for age
      alert(`Invalid answer. Please enter a number equal or greater than 0.`) // go back to putting in age???
    }
  }

// Pasta
} else if (food == 2) {
  alert(`Thank you. Let's get you a pasta!`);
  // Subtype choice for pasta
  subtype = parseInt(prompt(
    `Please enter number 1-3 to select a pasta type:
    1. Spaghetti Bolognese
    2. Fettuccine Alfredo
    3. Pesto pasta`
  ));
  if (subtype == 1) {
    alert(`You selected a Spaghetti Bolognese!`);
  } else if (subtype == 2) {
    alert(`You selected a Fettuccine Alfredo!`);
  } else if (subtype == 3) {
    alert(`You selected a Pesto pasta!`);
  } else {
    alert(`Invalid choice. Please enter number 1-3 to choose among the dishes.`);
    // go back to selecting pasta???
  }
  // Age
  if (subtype >= 1 && subtype <= 3) {
    age = parseInt(prompt(`Is this food for a child or an adult? Type your age:`));
    if (age >= 0 && age < 18) {
      // Child-size
      confirmation = parseInt(prompt(`One child-sized portion will be prepared for you. It will cost $10.
      Please enter 1-2 to confirm your order:
      1. Yes
      2. No`));

      // Order confirmation
      if (confirmation == 1) {
        alert(`Thank you for your order. Your meal will be prepared soon. We will let you know when it is ready for pick-up.`);
      } else if (confirmation == 2) {
        alert(`No problem. Go back and order anytime. See you then!`);
      } else {
        alert(`Invalid choice. Please enter number 1-2 to confirm your order.`); // go back to confirming order???
      }

    } else if (age >= 18) {
      // Adult-size
      confirmation = parseInt(prompt(`One adult-sized portion will be prepared for you. It will cost $15.
      Please enter 1-2 to confirm your order:
      1. Yes
      2. No`));

      // Order confirmation
      if (confirmation == 1) {
        alert(`Thank you for your order. Your meal will be prepared soon. We will let you know when it is ready for pick-up.`);
      } else if (confirmation == 2) {
        alert(`No problem. Go back and order anytime. See you then!`);
      } else {
        alert(`Invalid choice. Please enter number 1-2 to confirm your order.`); // go back to confirming order???
      }
    } else {
      // Handling invalid answer for age
      alert(`Invalid answer. Please enter a number equal or greater than 0.`) // go back to putting in age???
    }
  }

// Salad
} else if (food == 3) {
  alert(`Thank you. Let's get you a salad!`);
  // Subtype choice for salad
  subtype = parseInt(prompt(
    `Please enter number 1-3 to select salad type:
    1. Caesar Salad
    2. Classic Green Salad
    3. Carprese Salad`
  ));
  if (subtype == 1) {
    alert(`You selected a Caesar Salad!`);
  } else if (subtype == 2) {
    alert(`You selected a Classic Green Salad!`);
  } else if (subtype == 3) {
    alert(`You selected a Carprese Salad!`);
  } else {
    alert(`Invalid choice. Please enter number 1-3 to choose among the dishes.`);
    // go back to selecting salad
  }

  // Age
  if (subtype >= 1 && subtype <= 3) {
    age = parseInt(prompt(`Is this food for a child or an adult? Type your age:`));
    if (age >= 0 && age < 18) {
      // Child-size
      confirmation = parseInt(prompt(`One child-sized portion will be prepared for you. It will cost $10.
      Please enter 1-2 to confirm your order:
      1. Yes
      2. No`));

      // Order confirmation
      if (confirmation == 1) {
        alert(`Thank you for your order. Your meal will be prepared soon. We will let you know when it is ready for pick-up.`);
      } else if (confirmation == 2) {
        alert(`No problem. Go back and order anytime. See you then!`);
      } else {
        alert(`Invalid choice. Please enter number 1-2 to confirm your order.`); // go back to confirming order
      }

    } else if (age >= 18) {
      // Adult-size
      confirmation = parseInt(prompt(`One adult-sized portion will be prepared for you. It will cost $15.
      Please enter 1-2 to confirm your order:
      1. Yes
      2. No`));

      // Order confirmation
      if (confirmation == 1) {
        alert(`Thank you for your order. Your meal will be prepared soon. We will let you know when it is ready for pick-up.`);
      } else if (confirmation == 2) {
        alert(`No problem. Go back and order anytime. See you then!`);
      } else {
        alert(`Invalid choice. Please enter number 1-2 to confirm your order.`); // go back to confirming order
      }
    } else {
      // Handling invalid answer for age
      alert(`Invalid answer. Please enter a number equal or greater than 0.`) // go back to putting in age???
    }
  }

} else {
  // Handling invalid food choice
  alert(`Invalid choice. Please enter number 1-3 to choose among the dishes.`);
}
// go back to beginning by refreshing page
