// Start here

// Step 1 - Welcome and introduction
// Your code goes here

// Step 2 - Food choice
// Your code goes here

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here


alert(
  `Welcome to our pineapple JS Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
const userName = prompt(`What is your name?`);

alert(
  `Hi ${userName}! Don't worry, we don't judge you like pineapple on your pizza here:)`)

  let pizzaChoice = "Hawaiian";
switch (pizzaChoice) {
case "Nodic smoked salmon pizza":
  console.log("You picked Nodic smoked salmon pizza.");
  break;
case "Kabab pizza":
  console.log("You picked kabab pizza.");
  break;
case "Spicy Italian pizza":
  console.log("You picked Spicy Italian pizza.");
  break;
case "Kimchi BBQ chicken pizza":
  console.log("You picked Kimchi BBQ chicken pizza.");
defalut:
console.log(`Sorry, we are out of ${pizzaChoice}.`);
}