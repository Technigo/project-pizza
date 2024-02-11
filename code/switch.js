// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

// User Name Entry
// Your code goes here
let userName = prompt("Please enter your name:", "Joe Biden");
alert(`👋😀 Hello ${userName} nice to see you!`);

// Step 2 - Food choice
// Your code goes here
let mainChoice = prompt(
  `What would you like to order?
  Please choose from:
  1 - Pasta 🍝
  2 - Pizza 🍕 
  3 - Soup 🥣
`);

// Step 3 - Subtype choice
// Your code goes here
let foodCategory;
switch (mainChoice) {
  case "1":
    foodCategory = "Pasta";
    break;
  case "2":
    foodCategory = "Pizza";
    break;
  case "3":
    foodCategory= "Soup";
    break;
  default:
    alert("Invalid choice. Please select a valid number"
    );
}

// Confirmation of Category
alert(`You've chosen ${foodCategory}!`);

// Selected food
let foodOrder;
if (foodCategory === "Pasta") {
  foodOrder = prompt(
    `What type of pasta would you like?
     Choose from:
  1 - Pasta al Pomodoro
  2 - Pasta Carbonara
  3 - Pasta alle Vongole`);
} 
else if (foodCategory === "Pizza") {
  foodOrder = prompt(
    `What type of pizza would you like?
    Choose from:
  1 - Pizza Margherita 
  2 - Pizza Quattro Stagioni
  3 - Pizza Capricciosa`
  );
} 
else if (foodCategory === "Soup") {
  foodOrder = prompt(
    `What type of soup would you like?
     Choose from:
  1 - Pumpkin Soup
  2 - Veggie Soup
  3 - Chicken Soup`
  );
}

// Confirmation of Category
// Your code goes here
let pastaType, pizzaType, soupType;

// Selected food
switch (foodCategory) {
  case "Pasta":
    switch (foodOrder) {
      case "1":
        pastaType = "Pasta al Pomodoro";
        break;
      case "2":
        pastaType = "Pasta Carbonara";
        break;
      case "3":
        pastaType = "Pasta alle Vongole";
        break;
      default:
        alert("Invalid choice. Please select a valid number.");
    }
    alert(`You've chosen ${pastaType}!`);
    break;
  case "Pizza":
    switch (foodOrder) {
      case "1":
        pizzaType = "Pizza Margherita";
        break;
      case "2":
        pizzaType = "Pizza Quattro Stagioni";
        break;
      case "3":
        pizzaType = "Pizza Capricciosa";
        break;
      default:
        alert("Invalid choice. Please select a valid number.");
    }
    alert(`You've chosen ${pizzaType}!`);
    break;
  case "Soup":
    switch (foodOrder) {
      case "1":
        soupType = "Pumpkin Soup";
        break;
      case "2":
        soupType = "Veggie Soup";
        break;
      case "3":
        soupType = "Chicken Soup";
        break;
      default:
        alert("Invalid choice. Please select a valid number.");
    }
    alert(`You've chosen ${soupType}!`);
    break;
  default:
    alert("Invalid choice. Please select a valid number.");
}

// Step 4 - Age
// Your code goes here
let age = prompt(
  `Are you ordering for a child 👦🏻 or an adult👩🏻‍🦰👨🏻?
  Please type your age:`,
);


let pizzaSize = age >= "18" ? "One adult sized" : "One child sized";
let pastaSize = age >= "18" ? "One adult sized" : "One child sized";
let soupSize = age >= "18" ? "One adult sized" : "One child sized";

// Step 5 - Order confirmation
// Your code goes here
let confirmation;
switch (foodCategory) {
  case "Pasta":
    confirmation = prompt(
      `${pastaSize} ${pastaType} will be prepared for you. That'll be ${age >= "18" ? "€15" : "€10"}.
Are you sure you want to order this?
Please enter a number to confirm:
1 - 🟢Yes
2 - 🔴No`,
    );
    break;
  case "Pizza":
    confirmation = prompt(
      `${pizzaSize} ${pizzaType} will be prepared for you. That'll be ${age >= "18" ? "€15" : "€10"}.
Are you sure you want to order this?
Please enter a number to confirm:
1 - 🟢Yes
2 - 🔴No`,
    );
    break;
  case "Soup":
    confirmation = prompt(
      `${soupSize} ${soupType} will be prepared for you. That'll be ${age >= "18" ? "€15" : "€10"}.
Are you sure you want to order this?
Please enter a number to confirm:
1 - 🟢Yes
2 - 🔴No`,
    );
    break;
  default:
    alert("Invalid choice. Please select a valid number.");
}

// Step 5 - Order confirmation
// Your code goes here
if (confirmation === "1") {
  alert(`✅ Thank you for your order, your ${pastaType || pizzaType || soupType} will be prepared soon!👌`);
} else if (confirmation === "2") {
  alert(`Ok, Please come back if you change your mind!✋😊 `);
}  
