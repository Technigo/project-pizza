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

let foodName; // to print the name of food in confirmation

let subtype; 

let subtypeName; // to print the name of subtype in confirmation

let age;

let confirmation;

// Handling logical sequences for each food choice

// Pizza
if (food == 1) {
  foodName = "pizza";
  alert(`Thank you. Let's get you a ${foodName}!`);
  
  // Subtype choice for pizza
  subtype = parseInt(prompt(
    `Please enter number 1-3 to select a pizza type:
    1. Hawaiian
    2. Pepperoni
    3. Quattro Stagioni`
  ));
  if (subtype == 1) {
    subtypeName = "Hawaiian pizza";
    alert(`You selected a ${subtypeName}!`);
  } else if (subtype == 2) {
    subtypeName = "Pepperoni pizza";
    alert(`You selected a ${subtypeName}!`);
  } else if (subtype == 3) {
    subtypeName = "Quattro Stagioni pizza";
    alert(`You selected a ${subtypeName}!`);
  } else {
    alert(`Invalid choice. Please enter number 1-3 to choose among the dishes.`);
    // how to go back to selecting pizza???
  }


  // Age
  if (subtype >= 1 && subtype <= 3) {
    age = parseInt(prompt(`Is this food for a child or an adult? Type your age:`));
    if (age >= 0 && age < 18) {
      // Child-size
      confirmation = parseInt(prompt(`One child-sized ${subtypeName} will be prepared for you. It will cost $10.
      Please enter 1-2 to confirm your order:
      1. Yes
      2. No`));

      // Order confirmation
      if (confirmation == 1) {
        alert(`Thank you for your order. Your meal will be prepared soon. We will let you know when it is ready for pick-up.`);
      } else if (confirmation == 2) {
        alert(`No problem. Go back and order anytime. See you then!`);
      } else {
        alert(`Invalid choice. Please enter number 1-2 to confirm your order.`); // how to go back to confirming order???
      }

    } else if (age >= 18) {
      // Adult-size
      confirmation = parseInt(prompt(`One adult-sized ${subtypeName} will be prepared for you. It will cost $15.
      Please enter 1-2 to confirm your order:
      1. Yes
      2. No`));

      // Order confirmation
      if (confirmation == 1) {
        alert(`Thank you for your order. Your meal will be prepared soon. We will let you know when it is ready for pick-up.`);
      } else if (confirmation == 2) {
        alert(`No problem. Go back and order anytime. See you then!`);
      } else {
        alert(`Invalid choice. Please enter number 1-2 to confirm your order.`); // how to go back to confirming order???
      }
    } else {
      // Handling invalid answer for age
      alert(`Invalid answer. Please enter a number equal or greater than 0.`) // how to go back to putting in age???
    }
  }

// Pasta
} else if (food == 2) {
  foodName = "pasta";
  alert(`Thank you. Let's get you a ${foodName}!`);
  
  // Subtype choice for pasta
  subtype = parseInt(prompt(
    `Please enter number 1-3 to select a pasta type:
    1. Spaghetti Bolognese
    2. Fettuccine Alfredo
    3. Pesto pasta`
  ));
  if (subtype == 1) {
    subtypeName = "Spaghetti Bolognese";
    alert(`You selected a ${subtypeName}!`);
  } else if (subtype == 2) {
    subtypeName = "Fettuccine Alfredo";
    alert(`You selected a ${subtypeName}!`);
  } else if (subtype == 3) {
    subtypeName = "Pesto pasta";
    alert(`You selected a ${subtypeName}!`);
  } else {
    alert(`Invalid choice. Please enter number 1-3 to choose among the dishes.`);
    // how to go back to selecting pasta???
  }

  // Age
  if (subtype >= 1 && subtype <= 3) {
    age = parseInt(prompt(`Is this food for a child or an adult? Type your age:`));
    if (age >= 0 && age < 18) {
      // Child-size
      confirmation = parseInt(prompt(`One child-sized ${subtypeName} will be prepared for you. It will cost $10.
      Please enter 1-2 to confirm your order:
      1. Yes
      2. No`));

      // Order confirmation
      if (confirmation == 1) {
        alert(`Thank you for your order. Your meal will be prepared soon. We will let you know when it is ready for pick-up.`);
      } else if (confirmation == 2) {
        alert(`No problem. Go back and order anytime. See you then!`);
      } else {
        alert(`Invalid choice. Please enter number 1-2 to confirm your order.`); // how to go back to confirming order???
      }

    } else if (age >= 18) {
      // Adult-size
      confirmation = parseInt(prompt(`One adult-sized ${subtypeName} will be prepared for you. It will cost $15.
      Please enter 1-2 to confirm your order:
      1. Yes
      2. No`));

      // Order confirmation
      if (confirmation == 1) {
        alert(`Thank you for your order. Your meal will be prepared soon. We will let you know when it is ready for pick-up.`);
      } else if (confirmation == 2) {
        alert(`No problem. Go back and order anytime. See you then!`);
      } else {
        alert(`Invalid choice. Please enter number 1-2 to confirm your order.`); // how to go back to confirming order???
      }
    } else {
      // Handling invalid answer for age
      alert(`Invalid answer. Please enter a number equal or greater than 0.`) // how to go back to putting in age???
    }
  }

// Salad
} else if (food == 3) {
  foodName = "salad";
  alert(`Thank you. Let's get you a ${foodName}!`);
  
  // Subtype choice for salad
  subtype = parseInt(prompt(
    `Please enter number 1-3 to select salad type:
    1. Caesar Salad
    2. Classic Green Salad
    3. Carprese Salad`
  ));
  if (subtype == 1) {
    subtypeName = "Caesar Salad";
    alert(`You selected a ${subtypeName}!`);
  } else if (subtype == 2) {
    subtypeName = "Classic Green Salad";
    alert(`You selected a ${subtypeName}!`);
  } else if (subtype == 3) {
    subtypeName = "Carprese Salad";
    alert(`You selected a ${subtypeName}!`);
  } else {
    alert(`Invalid choice. Please enter number 1-3 to choose among the dishes.`);
    // how to go back to selecting salad???
  }

  // Age
  if (subtype >= 1 && subtype <= 3) {
    age = parseInt(prompt(`Is this food for a child or an adult? Type your age:`));
    if (age >= 0 && age < 18) {
      // Child-size
      confirmation = parseInt(prompt(`One child-sized ${subtypeName} will be prepared for you. It will cost $10.
      Please enter 1-2 to confirm your order:
      1. Yes
      2. No`));

      // Order confirmation
      if (confirmation == 1) {
        alert(`Thank you for your order. Your meal will be prepared soon. We will let you know when it is ready for pick-up.`);
      } else if (confirmation == 2) {
        alert(`No problem. Go back and order anytime. See you then!`);
      } else {
        alert(`Invalid choice. Please enter number 1-2 to confirm your order.`); // how to go back to confirming order???
      }

    } else if (age >= 18) {
      // Adult-size
      confirmation = parseInt(prompt(`One adult-sized ${subtypeName} will be prepared for you. It will cost $15.
      Please enter 1-2 to confirm your order:
      1. Yes
      2. No`));

      // Order confirmation
      if (confirmation == 1) {
        alert(`Thank you for your order. Your meal will be prepared soon. We will let you know when it is ready for pick-up.`);
      } else if (confirmation == 2) {
        alert(`No problem. Go back and order anytime. See you then!`);
      } else {
        alert(`Invalid choice. Please enter number 1-2 to confirm your order.`); // how to go back to confirming order
      }
    } else {
      // Handling invalid answer for age
      alert(`Invalid answer. Please enter a number equal or greater than 0.`) // how to go back to putting in age???
    }
  }

} else {
  // Handling invalid food choice
  alert(`Invalid choice. Please enter number 1-3 to choose among the dishes.`);
}
// go back to beginning by refreshing page
