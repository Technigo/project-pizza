// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`);

let customer = prompt(`Please enter your name:`); 

alert(`Welcome to our pizzeria, ${customer}!`);


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
  alert(`Invalid food type. Please start over and try again.`);
}

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
