// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
    `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
let person = prompt(`Please enter you name`);

if (person != null) {
    alert(`Hello ${person}! that is a really cool name!`);
}

// Step 2 - Food choice
let foodOption = prompt(`What would you like to order? 
  1 - Pizza
  2 - Pasta
  3 - Salad`)