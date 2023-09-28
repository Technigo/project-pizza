// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

// Write a prompt to ask for the name, and store the answer in a variable.
const firstName = prompt('Please enter your first name!');

//Create a new alert using the name variable, to say something like “Hi Diego!”

alert(`Hi ${firstName}!`);

// Step 2 - Food choice

// Nested arrays will reduce the need for many variables for food and prices
const foodChoices =[['Pizza', 10], ['Pasta', 8], ['Salad', 20]];

// Use promt to show the user the menu

const foodChoiceOfUser = prompt(`
  Please choose what food you want to order by writing the number next to the dish:

  - 1 Pizza 10 €
  - 2 Pasta 8 $
  - 3 Salad 20 $
`);


//Alert the user with the chosen food item

alert(`You've ordered ${foodChoices[foodChoiceOfUser - 1][0]} for a cost of ${foodChoices[foodChoiceOfUser - 1][1]} € `)

// Step 3 - Subtype choice
// Adding the array for the subtypes
const pizzaToppings = ['Pineapple', 'Banana', 'Ketchup'];
const pastaToppings = ['Olives', 'Feta cheese', 'Sun-dried tomatoes'];
const saladToppings = ['Grapes', 'Avocado', 'Red onion'];
let toppingChoice;

console.log(foodChoiceOfUser);

switch (foodChoiceOfUser){
  case '1':
    toppingChoice = prompt(`
    Choose your pizza toppings by writing the number corresponding to the topping you like:
      - 1 Pineapple
      - 2 Banana
      - 3 Ketchup`);
      alert(`You've chosen ${foodChoices[foodChoiceOfUser - 1][0]} with ${pizzaToppings[toppingChoice -1]}. `)
  break;
  
  case '2':
    toppingChoice = prompt(`
    Choose your pasta toppings by writing the number corresponding to the topping you like:
      - 1 Olives
      - 2 Feta cheese
      - 3 Sun-dried tomatoes
    `);
    alert(`You've chosen ${foodChoices[foodChoiceOfUser - 1][0]} with ${pastaToppings[toppingChoice -1]}. `)
  break;
  
  case '3':
    toppingChoice = prompt(`
    Choose your salad toppings by writing the number corresponding to the topping you like:
     - 1 Grapes
     - 2 Avocado
     - 3 Red onion
      `);
      alert(`You've chosen ${foodChoices[foodChoiceOfUser - 1][0]} with ${saladToppings[toppingChoice -1]}. `)
  break;

  default:
    alert(`That's not one of the choices!`)
    exit(1);
}



// const subFoodChoices = prompt(`Choose your toppings by writing the number corresponding to the topping you like:`)
// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
