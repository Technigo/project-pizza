// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

// User Name Entry
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
if (foodCategory=== "Pasta") {
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

let pastaType;
if (foodCategory === "Pasta" && foodOrder === "1"){
  pastaType = "Pasta al Pomodoro";
alert (`You´ve chosen ${pastaType}`);
}
if (foodCategory === "Pasta" && foodOrder === "2"){
  pastaType = "Pasta Carbonara";
alert (`You´ve chosen ${pastaType}`);
}
if (foodCategory === "Pasta" && foodOrder === "3"){
  pastaType = "Pasta alle Vongole";
alert (`You´ve chosen ${pastaType}`);
}
let pizzaType;
if (foodCategory === "Pizza" && foodOrder === "1"){
  pizzaType = "Pizza Margherita";
alert (`You´ve chosen ${pizzaType}`);
}
if (foodCategory === "Pizza" && foodOrder === "2"){
  pizzaType = "Pizza Quattro Stagioni";
alert (`You´ve chosen ${pizzaType}`);
}
if (foodCategory === "Pizza" && foodOrder === "3"){
  pizzaType = "Pizza Capricciosa";
alert (`You´ve chosen ${pizzaType}`);
}
let soupType;
if (foodCategory === "Soup" && foodOrder === "1"){
  soupType = "Pumpkin Soup";
alert (`You´ve chosen ${soupType}`);
}
if (foodCategory === "Soup" && foodOrder === "2"){
  soupType = "Veggie Soup";
alert (`You´ve chosen ${soupType}`);
}
if (foodCategory === "Soup" && foodOrder === "3"){
  soupType = "Chicken Soup";
alert (`You´ve chosen ${soupType}`);
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

let confirmation;
if (foodCategory === "Pasta" && age >= "18") {
  confirmation = prompt(
    `${pastaSize} ${pastaType} will be prepared for you. That'll be €15.
Are you sure you want to order this?
Please enter a number to confirm:
1 - 🟢Yes
2 - 🔴No`,
  );
} else if (foodCategory === "Pizza" && age >= "18") {
  confirmation = prompt(
    `${pizzaSize} ${pizzaType} will be prepared for you. That'll be €15.
Are you sure you want to order this?
Please enter a number to confirm:
1 - 🟢Yes
2 - 🔴No`,
  );
} else if (foodCategory === "Soup" && age >= "18") {
  confirmation = prompt(
    `${soupSize} ${soupType} will be prepared for you. That'll be €15.
Are you sure you want to order this?
Please enter a number to confirm:
1 - 🟢Yes
2 - 🔴No`,
  );
}if (foodCategory === "Pasta" && age < "18") {
  confirmation = prompt(
    `${pastaSize} ${pastaType} will be prepared for you. That'll be €10.
Are you sure you want to order this?
Please enter a number to confirm:
1 - 🟢Yes
2 - 🔴No`,
  );
}else if (foodCategory === "Pizza" && age < "18") {
  confirmation = prompt(
    `${pizzaSize} ${pizzaType} will be prepared for you. That'll be €10.
Are you sure you want to order this?
Please enter a number to confirm:
1 - 🟢Yes
2 - 🔴No`,
  );
}else if (foodCategory === "Soup" && age < "18") {
  confirmation = prompt(
    `${soupSize} ${soupType} will be prepared for you. That'll be €10.
Are you sure you want to order this?
Please enter a number to confirm:
1 - 🟢Yes
2 - 🔴No`,
  );
} 
// Step 5 - Order confirmation
// Your code goes here
if (confirmation === "1") {
  alert(`✅ Thank you for your order, your ${pastaType || pizzaType || soupType} will be prepared soon!👌`);
} else if (confirmation === "2") {
  alert(`Ok, Please come back if you change your mind!✋😊 `);
}