// Start here

// Defining some useful variables 
let orderedFood = ``;
let price = ``;
let portionSize = ``;

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`);

let customer = prompt(`Please enter your name:`); 

alert(`Happy to meet you, ${customer}!`);


// Step 2 - Food choice
// Your code goes here

let foodType = parseInt(prompt(`What type of food would you like to order? \n  Please enter a number: \n  1 - Pizza \n  2 - Pasta \n  3 - Salad`))

if (foodType === 1) {
  alert(`You've chosen Pizza!`);

} else if (foodType === 2) {
  alert(`You've chosen Pasta!`);

} else if (foodType === 3) {
  alert(`You've chosen Salad!`);

} else {
  alert(`Invalid food type. Please refresh site and try again.`);
}

// Step 3 - Subtype choice
// Your code goes here

// Pizza 
if (foodType === 1) {
  let pizzaType = parseInt(prompt(`Please select a type of Pizza. \n  Enter a number: \n  1 - Vesuvius \n  2 - Hawaii \n  3 - Capricciosa`))
  if (pizzaType === 1) {
    orderedFood = `Vesuvius`;
  } else if (pizzaType === 2) {
    orderedFood = `Hawaii`;
  } else if (pizzaType === 3) {
    orderedFood = `Capricciosa`;
  } else {
    alert(`Invalid pizza type. Please refresh site and try again`);
  }
  alert(`You've chosen ${orderedFood}!`);

// Pasta 
} else if (foodType === 2) {
  let pastaType = parseInt(prompt(`Please select a Pasta dish. \n  Enter a number: \n  1 - Spaghetti Bolognese \n  2 - Penne all’Arrabbiata \n  3 - Frutti de Mare`))
  if (pastaType === 1) {
    orderedFood = `Spaghetti Bolognese`;
  } else if (pastaType === 2) {
    orderedFood = `Penne all’Arrabbiata`;
  } else if (pastaType === 3) {
    orderedFood = `Frutti de Mare`;
  } else {
    alert(`Invalid pasta type. Please refresh site and try again`);
  }
  alert(`You've chosen ${orderedFood}!`);

  // Salad 
} else if (foodType === 3) {
  let saladType = parseInt(prompt(`Please select a Salad. \n  Enter a number: \n  1 - Caesar Salad \n  2 - Salade Niçoise \n  3 - Waldorf Salad`))
  if (saladType === 1) {
    orderedFood = `Caesar Salad`;
  } else if (saladType === 2) {
    orderedFood = `Salade Niçoise`;
  } else if (saladType === 3) {
    orderedFood = `Waldorf Salad`;
  } else {
    alert(`Invalid salad type. Please refresh site and try again`);
  }
  alert(`You've chosen ${orderedFood}!`);
} 

// Step 4 - Age
// Your code goes here

let age = (prompt(`Is this food for a child or an adult? Type your age:`));

// Step 5 - Order confirmation
// Your code goes here

if (age <= 17) {
  price = `€10`;
  portionSize = `child-sized`;
} else {
  price = `€15`;
  portionSize = `adult-sized`;
} 

let confirmOrder = parseInt(prompt(`One ${portionSize} ${orderedFood} will be prepared for you. That'll be ${price}. Are you sure you want to order this? \n  Enter a number to confirm: \n 1 - Yes \n 2 - No`));

if (confirmOrder === 1) {
  alert(`Thank you for your order! Your meal will be prepared.`); 
} else {
  alert(`No worries, we'll be here if you change your mind.`)
}