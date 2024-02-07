// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let yourName = prompt("What is your name?");

alert(`Welcome, ${yourName}!`);

// Step 2 - Food choice
const menuSelect = prompt(
  `What would you like to order?
    Enter the number of your choice:
    1. Pizza  
    2. Pasta 
    3. Salad
    `
);

// let selectedItem = ""

let selectedItem = ""

if (menuSelect === "1") {
  selectedItem = "pizza";
} else if (menuSelect === "2") {
  selectedItem = "pasta";
} else {
  selectedItem = "salad";
}

alert(`You chose ${selectedItem}!`)


// Step 3 - Subtype choice
let pizzaChoice = ""
let pastaChoice = ""
let saladChoice = ""
let subItem = ""

if (menuSelect === "1") {
  pizzaChoice = prompt(
    `Select the type of pizza:
    Enter the number of your choice:
    1. Hawaiian
    2. Margherita
    3. Pepperoni
    `
  );
} 
else if (menuSelect === "2") {
   pastaChoice = prompt(
    `Select the type of pasta:
    Enter the number of your choice:
    1. Spaghetti alla Puttanesca
    2. Carbonara
    3. Pesto alla Genovese
    `
  );
} else { 
    saladChoice = prompt(
    `Select the type of salad:
    Enter the number of your choice:
    1. Caprese
    2. Insalata di Riso
    3. Panzanella
    `
  );
}

if (pizzaChoice === "1") {
  subItem = "Hawaiian";
} else if (pizzaChoice === "2") {
  subItem = "Margherita"; 
} else if (pizzaChoice === "3") {
  subItem = "Pepperoni"; 
} else if (pastaChoice === "1") {
  subItem = "Spaghetti"; 
} else if (pastaChoice === "2") {
  subItem = "Carbonara"; 
} else if (pastaChoice === "3") {
  subItem = "Pesto"; 
} else if (saladChoice === "1") {
  subItem = "Caprese"; 
} else if (saladChoice === "2") {
  subItem = "Insalata"; 
} else {
  subItem = "Panzanella"; 
}

if (pizzaChoice === "1") {
  alert("You chose Hawaiian!");
} else if (pizzaChoice === "2") {
  alert("You chose Margherita!");
} else if (pizzaChoice === "3") {
  alert("You chose Pepperoni!") 
} else if (pastaChoice === "1") {
  alert("You chose Spaghetti alla Puttanesca!");
} else if (pastaChoice === "2") {
  alert("You chose Carbonara!");
} else if (pastaChoice === "3") {
  alert("You chose Pesto alla Genovese!"); 
} else if (saladChoice === "1") {
  alert("You chose Caprese!"); 
} else if (saladChoice === "2") {
  alert("You chose Insalata di Riso!");
} else {
  alert("You chose Panzanella!");
}


// Step 4 - Age
let age = prompt("Is the order for a child or an adult? Enter your age:")

let confirm = ""

if (age >= 13) {
  confirm = prompt(
    `One adult size ${subItem} will be $20. 
     Do you confirm this order? Enter a number:
     1. Yes
     2. No
     `
    );
} else {
  confirm = prompt(
    `One child size ${subItem} will be $10.
    Do you confirm this order? Enter a number:
    1. Yes
    2. No
    `
  );
}


// Step 5 - Order confirmation
if (confirm === "1" ) {
  alert("Thank you for your order, enjoy! ");
} else {
  alert("No worries, see you soon!")
}
