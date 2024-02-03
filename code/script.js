// Start here

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

if (foodType === 1) {
  let pizzaType = parseInt(prompt(`Please select a type of Pizza. \n  Enter a number: \n  1 - Vesuvius \n  2 - Hawaii \n  3 - Capricciosa`))
  if (pizzaType === 1) {
    alert(`You've chosen Vesuvius!`);
  } else if (pizzaType === 2) {
    alert(`You've chosen Hawaii!`);
  } else if (pizzaType === 3) {
    alert(`You've chosen Capricciosa!`);
  } else {
    alert(`Invalid pizza type. Please refresh site and try again`);
  }
} else if (foodType === 2) {
  let pastaType = parseInt(prompt(`Please select a Pasta dish. \n  Enter a number: \n  1 - Spaghetti Bolognese \n  2 - Penne all’Arrabbiata \n  3 - Frutti de Mare`))
  if (pastaType === 1) {
    alert(`You've chosen Spaghetti Bolognese!`);
  } else if (pastaType === 2) {
    alert(`You've chosen Penne all’Arrabbiata!`);
  } else if (pastaType === 3) {
    alert(`You've chosen Frutti de Mare!`);
  } else {
    alert(`Invalid pasta type. Please refresh site and try again`);
  }
} else if (foodType === 3) {
  let saladType = parseInt(prompt(`Please select a Salad. \n  Enter a number: \n  1 - Caesar Salad \n  2 - Salade Niçoise \n  3 - Waldorf Salad`))
  if (saladType === 1) {
    alert(`You've chosen Caesar Salad!`);
  } else if (saladType === 2) {
    alert(`You've chosen Salade Niçoise!`);
  } else if (saladType === 3) {
    alert(`You've chosen Waldorf Salad!`);
  } else {
    alert(`Invalid salad type. Please refresh site and try again`);
  }
} 

// Step 4 - Age
// Your code goes here

let age = parseInt(prompt(`Is this food for a child or an adult? Type your age:`))

if (age <= 17) {

}

// Step 5 - Order confirmation
// Your code goes here
