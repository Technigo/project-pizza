// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

let person = prompt("What's your name?", "Vittoria Matteoli");

alert(`Hi ${person}!`);

// Step 2 - Food choice
// Your code goes here
let foodChoice = prompt(
  `What would you like to order?
    Choose a number:
    1 - Pizza 
    2 - Pasta
    3 - Salad 
    4 - Soup
    `,
  `1`
);
let foodName;
switch (foodChoice) {
  case "1":
    foodName = `Pizza`;
    break;
  case "2":
    foodName = "Pasta";
    break;
  case "3":
    foodName = "Salad";
    break;
  case "4":
    foodName = "Soup";
    break;
  default:
    throw alert("invalid choice: choose a number between 1 and 4");
}

alert(`You choosed ${foodName}!`);

// Step 3 - Subtype choice
// Your code goes here

let foodOrderPizza;
let foodOrderPasta;
let foodOrderSalad;
let foodOrderSoup;

// created a switch for foodName with 4 cases.

switch (foodName) {
  case "Pizza":
    foodOrderPizza = prompt(
      `That's what we have in the menu!
    Choose a number:
    1 - Pizza Margherita
    2 - Pizza Capricciosa
    3 - Pizza Napoletana
    4 - Pizza 4 Formaggi`,
      `1`
    );
    break;
  case "Pasta":
    foodOrderPasta = prompt(
      `That's what we have in the menu!
Choose a number:
1 - Pasta al pomodoro
2 - Pasta cacio e pepe
3 - Pasta alla carbonara
4 - Pasta alla diavola`,
      `1`
    );
    break;
  case "Salad":
    foodOrderSalad = prompt(
      `That's what we have in the menu!
    Choose a number:
    1 - Tuna Salad 
    2 - Ceasar Salad
    3 - Greek Salad
    4 - Vegetarian Salad`,
      `1`
    );
    break;
  case "Soup":
    foodOrderSoup = prompt(
      `That's what we have in the menu!
        Choose a number:
        1 - Chicken Soup
        2 - Veggie Soup
        3 - Carrot Soup
        4 - Pumpkin Soup`,
      `1`
    );
    break;
}

// created a switch for foodOrderPizza with 4 cases.

let pizzaType;

switch (foodOrderPizza) {
  case "1":
    pizzaType = "Pizza Margherita";
    alert(`You choosed ${pizzaType}`);
    break;
  case "2":
    pizzaType = " Pizza Capricciosa";
    alert(`You choosed ${pizzaType}`);
    break;
  case "3":
    pizzaType = " Pizza Napoletana";
    alert(`You choosed ${pizzaType}`);
    break;
  case "4":
    pizzaType = " Pizza 4 Formaggi";
    alert(`You choosed ${pizzaType}`);
    break;
}

// created a switch for foodOrderPasta with 4 cases.
let pastaType;

switch (foodOrderPasta) {
  case "1":
    pastaType = "Pasta al pomodoro";
    alert(`You choosed ${pastaType}!`);
    break;
  case "2":
    pastaType = "Pasta cacio e pepe";
    alert(`You choosed ${pastaType}!`);
    break;
  case "3":
    pastaType = "Pasta alla carbonara";
    alert(`You choosed ${pastaType}!`);
    break;
  case "4":
    pastaType = "Pasta alla diavola";
    alert(`You choosed ${pastaType}!`);
  default:
}

// created a switch for foodOrderSalad with 4 cases.
let saladType;

switch (foodOrderSalad) {
  case "1":
    saladType = "Tuna Salad";
    alert(`You choosed ${saladType}!`);
    break;
  case "2":
    saladType = "Ceasar Salad";
    alert(`You choosed ${saladType}!`);
    break;
  case "3":
    saladType = "Greek Salad";
    alert(`You choosed ${saladType}!`);
  case "4":
    saladType = "Vegetarian Salad";
    alert(`You choosed ${saladType}!`);
    break;
}

// created a switch for foodOrderSoup with 4 cases.
let soupType;

switch (foodOrderSoup) {
  case "1":
    soupType = "Chicken Soup";
    alert(`You choosed ${soupType}!`);
    break;
  case "2":
    soupType = "Veggie Soup";
    alert(`You choosed ${soupType}!`);
    break;
  case "3":
    soupType = "Carrot Soup";
    alert(`You choosed ${soupType}!`);
    break;
  case "4":
    soupType = "Pumpkin Soup";
    alert(`You choosed ${soupType}!`);
    break;
  default:
}

let age = prompt(
  `Is the order for a child or an adult?
  Type your age:`,
  `10`
);

let pizzaSize = age >= "18" ? "One adult sized" : "One child sized";
let pastaSize = age >= "18" ? "One adult sized" : "One child sized";
let saladSize = age >= "18" ? "One adult sized" : "One child sized";
let soupSize = age >= "18" ? "One adult sized" : "One child sized";
let pizzaPrice = age >= "18" ? "€15" : "€10";
let pastaPrice = age >= "18" ? "€15" : "€10";
let saladPrice = age >= "18" ? "€15" : "€10";
let soupPrice = age >= "18" ? "€15" : "€10";

let confirmation;
switch (foodName) {
  case `Pizza`:
    confirmation = prompt(
      `${pizzaSize} ${pizzaType} will be prepared for you. That'll be ${pizzaPrice}.
        Are you sure you want to order this?
        Please enter a number to confirm:
        1 - Yes
        2 - No`,
      `2`
    );
    break;
  case `Pasta`:
    confirmation = prompt(
      `${pastaSize} ${pastaType} will be prepared for you. That'll be ${pastaPrice}.
          Are you sure you want to order this?
          Please enter a number to confirm:
          1 - Yes
          2 - No`,
      `2`
    );
    break;
  case `Salad`:
    confirmation = prompt(
      `${saladSize} ${saladType} will be prepared for you. That'll be ${saladPrice}.
        Are you sure you want to order this?
        Please enter a number to confirm:
        1 - Yes
        2 - No`,
      `2`
    );
    break;
  case `Soup`:
    confirmation = prompt(
      `${soupSize} ${soupType} will be prepared for you. That'll be ${soupPrice}.
        Are you sure you want to order this?
        Please enter a number to confirm:
        1 - Yes
        2 - No`,
      `2`
    );
    break;
}

switch (confirmation) {
  case "1":
    alert(`Thank you for your order, your meal will be prepared soon!`);
    break;
  case "2":
    alert(`Ok, come back if you change your mind!`);
    break;
  default:
    throw alert("invalid choice: choose a number between 1 and 2");
}

typeof age;
console.log(typeof age);
