// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);
// Ask the user for their name and store the input in a variable
const userName = prompt(`Please enter your name:`);

// Display a greeting using the user's name
if (userName) {
  alert(`Hello, ${userName} ! Welcome to our Javascript Pizzeria. 🍕`);
} else {
  alert(`No name entered.☹️`);
};
// Step 2 - Food choice
const foodName = prompt(`What food would you like to order? 
 Enter a number:
 1 - Pizza
 2 - Pasta
 3 - Salad`);

if (foodName === "1") {
  // Step 3 - Pizza subtype choice
  const pizzaType = prompt(`Choose a type of pizza:
  1 - Margherita
  2 - Pepperoni
  3 - Vegetarian`);
  
  if (pizzaType === "1") {
    alert(`You chose Margherita pizza.`);
  } else if (pizzaType === "2") {
    alert(`You chose Pepperoni pizza.`);
  } else if (pizzaType === "3") {
    alert(`You chose Vegetarian pizza.`);
  } else {
    alert(`Invalid pizza type selection.`);
  }
} else if (foodName === "2") {
  // Step 3 - Pasta subtype choice
  const pastaType = prompt(`Choose a type of pasta:
  1 - Spaghetti
  2 - Fettuccine Alfredo
  3 - Penne Arrabbiata`);
  
  if (pastaType === "1") {
    alert(`You chose Spaghetti.`);
  } else if (pastaType === "2") {
    alert(`You chose Fettuccine Alfredo.`);
  } else if (pastaType === "3") {
    alert(`You chose Penne Arrabbiata.`);
  } else {
    alert(`Invalid pasta type selection.`);
  }
} else if (foodName === "3") {
  // Step 3 - Salad subtype choice
  const saladType = prompt(`Choose a type of salad:
  1 - Caesar Salad
  2 - Greek Salad
  3 - Caprese Salad`);
  
  if (saladType === "1") {
    alert(`You chose Caesar Salad.`);
  } else if (saladType === "2") {
    alert(`You chose Greek Salad.`);
  } else if (saladType === "3") {
    alert(`You chose Caprese Salad.`);
  } else {
    alert(`Invalid salad type selection.`);
  }
} else {
  alert(`You didn't make a valid food choice.`);
}

// Step 4 - Age
// Your code goes here
const age = prompt(`Who order? Write your age`)

if (age >= 18) {
  alert(`You paid 14 sek`)
} else {
  alert(`Sorry, you can't pay`)
}

// Step 5 - Order confirmation
// Your code goes here
