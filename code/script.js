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

let selectedItem = ""

if (menuSelect === "1") {
  selectedItem = "pizza";
} else if (menuSelect === "2") {
  selectedItem = "pasta";
} else {
  selectedItem = "salad"
}



if (selectedItem === "pizza") {
  alert('You selected Pizza');
} else if (selectedItem === "pasta") {
  alert('You selected Pasta');
} else {
  alert('You selected Salad');
};


// Step 3 - Subtype choice
if (selectedItem === "1") {
  prompt(
    `Select the type of pizza:
    Enter a number:
    1. Hawaiian
    2. Margherita
    3. Pepperoni`
  )
} else if (selectedItem === "2") {
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

let subItem = ""

if (selectedItem === "1") {
  subItem = "hawaiian";
} else if (selectedItem === "2") {
  subItem = "margherita";
} else {
  subItem = "pepperoni"
}

// Step 4 - Age
let age = prompt("Is your order for a child or an adult? Please enter your age:")

if (age >= 11) {
  prompt(`You chose one adult sized ${subItem} ${selectedItem}). Your total is $20. Do you confirm this ordwer?
  Enter a number:
  1. Yes
  2. No`)
}

// }

// Step 5 - Order confirmation
// Your code goes here
