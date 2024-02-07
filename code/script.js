// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

/*Variable userName collecting & storing the answer from the prompt*/
const userName = prompt(`Please type your name`);

/*An alert saying Hi and whatever the userName is*/
alert(`Hi, ${userName}!`);

// Step 2 - Food choice
/*Variable userName collecting & storing the answer from the prompt*/

const menuSelection =
  prompt(`What type of food would you like to order? Enter a number:
 1 - Pizza
 2 - Pasta
 3 - Salad 
 `);

let selectedFood = ``;

if (menuSelection === `1`) {
  selectedFood = `pizza`;
  alert(`You've chosen ${selectedFood}`);
} else if (menuSelection === `2`) {
  selectedFood = `pasta`;
  alert(`You've chosen ${selectedFood}`);
} else if (menuSelection === `3`) {
  selectedFood = `salad`;
  alert(`You've chosen ${selectedFood}`);
} else {
  alert(
    `Invalid choice, please start again and select an option between 1 and 3.`
  );
}

// Step 3 - Subtype choice
// Your code goes here

pizzatype`Select a pizza-type. Enter a number: 

1 - Napolitana
2 - Hawaian
3 - Pepperoni
`/* Svar mha en alert*/
`You've chosen Napolitana pizza!``You've chosen Hawaian pizza!``You've chosen Pepperoni pizza!`;

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
