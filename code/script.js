// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let yourName = prompt("What is your name?");

alert(`Welcome, ${yourName}!`);

// Step 2 - Food choice
let menuSelect = prompt(
  `What would you like to order?
    Enter a number:
    1. Pizza  
    2. Pasta 
    3. Salad`
);

// let selectedItem = ""

if (menuSelect === "1") {
  alert('You selected Pizza');
} else if (menuSelect === "2") {
  alert('You selected Pasta');
} else {
  alert('You selected Salad');
};


// Step 3 - Subtype choice
if (menuSelect === "1") {
  prompt(
    `Select the type of pizza:
    Enter a number:
    1. Hawaiian
    2. Margherito
    3. Pepperoni`
  )
} else if (menuSelect === "2") {
  prompt(
    `Select the type of pasta:
    Enter a number:
    1. Spaghetti alla Puttanesca
    2. Carbonara
    3. Pesto alla Genovese`
  )
} else { 
  prompt(
    `Select the type of salad:
    Enter a number:
    1. Caprese
    2. Insalata di Riso
    3. Panzanella`
  )
}





// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
