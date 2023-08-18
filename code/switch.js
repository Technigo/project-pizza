// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

let name = prompt(`What is your name?`, "");

switch (name) {
  case "":
    alert(
      "That's alright, not everyone wants to give out their name. Welcome to JavaScript Pizzeria!"
    );
    break;
  default:
    alert(`Hi ${name}. Welcome to JavaScript Pizzeria!`);
    break;
}
// Step 2 - Food choice
// Your code goes here

let order = prompt(
  `What would you like to order? 
  Choose a number from the following:
  1. Pizza
  2. Pasta
  3. Salad`,
  ""
);

switch (order) {
  case "1":
    alert("Alright, you want Pizza. Excellent choice!");
    break;
  case "2":
    alert("Alright, you want Pasta. Excellent choice!");
    break;
  case "3":
    alert("Alright, you want Salad. Excellent choice!");
    break;
  default:
    alert(`Sorry, you either didn't choose a number or that is not something that we have. 
  Please contact us again if you want to order one of our dishes.`);
    break;
}

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
