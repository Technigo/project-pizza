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
let toppingChoiceNumber;
let toppingChoice;

switch (foodChoiceOfUser){
  case '1':
    toppingChoiceNumber = prompt(`
    Choose your pizza toppings by writing the number corresponding to the topping you like:
      - 1 Pineapple
      - 2 Banana
      - 3 Ketchup`);
      alert(`You've chosen ${foodChoices[foodChoiceOfUser - 1][0]} with ${pizzaToppings[toppingChoiceNumber -1]}. `)
      toppingChoice = pizzaToppings[toppingChoiceNumber -1];
  break;
  
  case '2':
    toppingChoiceNumber = prompt(`
    Choose your pasta toppings by writing the number corresponding to the topping you like:
      - 1 Olives
      - 2 Feta cheese
      - 3 Sun-dried tomatoes
    `);
    alert(`You've chosen ${foodChoices[foodChoiceOfUser - 1][0]} with ${pastaToppings[toppingChoiceNumber -1]}. `)
    toppingChoice = pizzaToppings[toppingChoiceNumber -1];
  break;
  
  case '3':
    toppingChoiceNumber = prompt(`
    Choose your salad toppings by writing the number corresponding to the topping you like:
     - 1 Grapes
     - 2 Avocado
     - 3 Red onion
      `);
      alert(`You've chosen ${foodChoices[foodChoiceOfUser - 1][0]} with ${saladToppings[toppingChoiceNumber -1]}. `)
      toppingChoice = pizzaToppings[toppingChoiceNumber -1];
  break;

  default:
    alert(`That's not one of the choices!`)
    exit(1);
}


// Step 4 - Age

//Use the prompt to let the user enter their age

const userAge = prompt(`Write your age as a number to determine portion size.`);

// Use alert to display the order and cost
if (userAge > '18'){
  alert(`Awesome, you've ordered a full size portion of ${foodChoices[foodChoiceOfUser -1][0]} with ${toppingChoice} for ${foodChoices[foodChoiceOfUser - 1][1]} €.`)
} else {
  alert(`Awesome, you've ordered a children's portion of ${foodChoices[foodChoiceOfUser - 1][0]} with ${toppingChoice} for ${foodChoices[foodChoiceOfUser - 1][1]} €.`)
}

const confirmation = prompt(`Please confirm your order by typing the appropriate number below:
  1 - Confirm order
  2 - Cancel order
`)
// Step 5 - Order confirmation
//Use a prompt to ask if the user wants to confirm the order and give appropriate message for each response

if (confirmation == 1) {
  alert('Great, your order is being prepared!')
} else {
  alert('Sorry to see you go. Start a new order by refreshing the page!')
}

