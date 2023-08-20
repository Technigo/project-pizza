// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let name = prompt(`Please enter your name:`);

alert(`Nice to meet you, ${name}!`);

// Step 2 - Food choice
// Your code goes here
let food = parseInt(prompt(`What would you like to order? 
Enter number 1-3 to choose among the followings:
1. Pizza
2. Pasta
3. Sallad`
));

switch (food) {
  case 1:
    alert(
      `Thank you. Let's get you a pizza!`
    );
    break;
  case 2:
    alert(
      `Thank you. Let's get you a pasta!`
    );
    break;
  case 3:
    alert(
      `Thank you. Let's get you a sallad!`
    );
    break;
  default:
    alert(
      `Invalid choice. Please enter number 1-3 to choose among the dishes.` 
    ); 
    // go back to beginning
    break;
}

// Step 3 - Subtype choice
// Your code goes here
let subtype;
if (food == 1) {
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
    // go back to select pizza
  }
} else if (food == 2) {
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
    // go back to select pasta
  }
} else if (food == 3) {
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
    // go back to select salad
  }
} else {
  alert(`Invalid choice. Please enter number 1-3 to choose among the dishes.`);
  // go back to beginning
}

// Step 4 - Age
// Your code goes here
let age = parseInt(prompt(`Is this food for a child or an adult? Type your age:`));
let confirmation;
if (age < 18) {
  confirmation = parseInt(prompt(`One child-sized portion will be prepared for you. It will cost $10.
  Please enter 1-2 to confirm your order:
  1. Yes
  2. No`)); // what happens when No?
} else {
  confirmation = parseInt(prompt(`One adult-sized portion will be prepared for you. It will cost $15.
  Please enter 1-2 to confirm your order:
  1. Yes
  2. No`)); // what happens when No?
}

// Step 5 - Order confirmation
// Your code goes here
if (confirmation == 1) {
  alert(`Thank you for your order. Your meal will be prepared soon. We will let you know when it is ready for pick-up.`);
} else if (confirmation == 2) {
  alert(`No problem. Go back and order anytime. See you then!`);
} else {
  alert(`Invalid choice. Please enter number 1-2 to confirm your order.`); // go back to confirming order
}