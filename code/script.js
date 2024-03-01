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
    throw alert("please choose a number between 1 and 4.");
    break;
}
alert(`You chose ${foodName}!`);

// Step 3 - Subtype choice
// Your code goes here

let foodOrder;
if (foodName === "Pizza") {
  foodOrder = prompt(
    `That's what we have in the menu!
  Choose a number:
  1 - Pizza Margherita
  2 - Pizza Capricciosa
  3 - Pizza Napoletana
  4 - Pizza 4 Formaggi`,
    `1`
  );
} else if (foodName === "Pasta") {
  foodOrder = prompt(
    `That's what we have in the menu!
  Choose a number:
  1 - Pasta al pomodoro
  2 - Pasta cacio e pepe
  3 - Pasta alla carbonara
  4 - Pasta alla diavola`,
    `1`
  );
} else if (foodName === "Salad") {
  foodOrder = prompt(
    `That's what we have in the menu!
  Choose a number:
  1 - Tuna Salad 
  2 - Ceasar Salad
  3 - Greek Salad
  4 - Vegetarian Salad`,
    `1`
  );
} else if (foodName === "Soup") {
  foodOrder = prompt(
    `That's what we have in the menu!
  Choose a number:
  1 - Chicken Soup
  2 - Veggie Soup
  3 - Carrot Soup
  4 - Pumpkin Soup`,
    `1`
  );
}

let pizzaType;
if (foodName === "Pizza" && foodOrder === "1") {
  pizzaType = "Pizza Margherita";
  alert(`You chose ${pizzaType}`);
} else if (foodName === "Pizza" && foodOrder === "2") {
  pizzaType = " Pizza Capricciosa";
  alert(`You chose ${pizzaType}`);
} else if (foodName === "Pizza" && foodOrder === "3") {
  pizzaType = " Pizza Napoletana";
  alert(`You chose ${pizzaType}`);
} else if (foodName === "Pizza" && foodOrder === "4") {
  pizzaType = " Pizza 4 Formaggi";
  alert(`You chose ${pizzaType}`);
}

let pastaType;
if (foodName === "Pasta" && foodOrder === "1") {
  pastaType = "Pasta al pomodoro";
  alert(`You chose ${pastaType}!`);
} else if (foodName === "Pasta" && foodOrder === "2") {
  pastaType = "Pasta cacio e pepe";
  alert(`You chose ${pastaType}!`);
} else if (foodName === "Pasta" && foodOrder === "3") {
  pastaType = "Pasta alla carbonara";
  alert(`You chose ${pastaType}!`);
} else if (foodName === "Pasta" && foodOrder === "4") {
  pastaType = "Pasta alla diavola";
  alert(`You chose ${pastaType}!`);
}

let saladType;
if (foodName === "Salad" && foodOrder === "1") {
  saladType = "Tuna Salad";
  alert(`You chose ${saladType}!`);
} else if (foodName === "Salad" && foodOrder === "2") {
  saladType = "Ceasar Salad";
  alert(`You chose ${saladType}!`);
} else if (foodName === "Salad" && foodOrder === "3") {
  saladType = "Greek Salad";
  alert(`You chose ${saladType}!`);
} else if (foodName === "Salad" && foodOrder === "4") {
  saladType = "Vegetarian Salad";
  alert(`You chose ${saladType}!`);
}

let soupType;
if (foodName === "Soup" && foodOrder === "1") {
  soupType = "Chicken Soup";
  alert(`You chose ${soupType}!`);
} else if (foodName === "Soup" && foodOrder === "2") {
  soupType = "Veggie Soup";
  alert(`You chose ${soupType}!`);
} else if (foodName === "Soup" && foodOrder === "3") {
  soupType = "Carrot Soup";
  alert(`You chose ${soupType}!`);
} else if (foodName === "Soup" && foodOrder === "4") {
  soupType = "Pumpkin Soup";
  alert(`You chose ${soupType}!`);
}

// Step 4 - Age
// Your code goes here

let age = prompt(
  `Is the order for a child or an adult?
Type your age:`,
  `10`
);

let pizzaSize = age >= "18" ? "One adult sized" : "One child sized";
let pastaSize = age >= "18" ? "One adult sized" : "One child sized";
let saladSize = age >= "18" ? "One adult sized" : "One child sized";
let soupSize = age >= "18" ? "One adult sized" : "One child sized";

let confirmation;
if (foodName === "Pizza" && age >= "18") {
  confirmation = prompt(
    `${pizzaSize} ${pizzaType} will be prepared for you. That'll be €15.
Are you sure you want to order this?
Please enter a number to confirm:
1 - Yes
2 - No`,
    `2`
  );
} else if (foodName === "Pasta" && age >= "18") {
  confirmation = prompt(
    `${pastaSize} ${pastaType} will be prepared for you. That'll be €15.
Are you sure you want to order this?
Please enter a number to confirm:
1 - Yes
2 - No`,
    `2`
  );
} else if (foodName === "Salad" && age >= "18") {
  confirmation = prompt(
    `${saladSize} ${saladType} will be prepared for you. That'll be €15.
Are you sure you want to order this?
Please enter a number to confirm:
1 - Yes
2 - No`,
    `2`
  );
} else if (foodName === "Soup" && age >= "18") {
  confirmation = prompt(
    `${soupSize} ${soupType} will be prepared for you. That'll be €15.
Are you sure you want to order this?
Please enter a number to confirm:
1 - Yes
2 - No`,
    `2`
  );
}

if (foodName === "Pizza" && age < "18") {
  confirmation = prompt(
    `${pizzaSize} ${pizzaType} will be prepared for you. That'll be €10.
Are you sure you want to order this?
Please enter a number to confirm:
1 - Yes
2 - No`,
    `2`
  );
} else if (foodName === "Pasta" && age < "18") {
  confirmation = prompt(
    `${pastaSize} ${pastaType} will be prepared for you. That'll be €10.
Are you sure you want to order this?
Please enter a number to confirm:
1 - Yes
2 - No`,
    `2`
  );
} else if (foodName === "Salad" && age < "18") {
  confirmation = prompt(
    `${saladSize} ${saladType} will be prepared for you. That'll be €10.
Are you sure you want to order this?
Please enter a number to confirm:
1 - Yes
2 - No`,
    `2`
  );
} else if (foodName === "Soup" && age < "18") {
  confirmation = prompt(
    `${soupSize} ${soupType} will be prepared for you. git at'll be €10.
Are you sure you want to order this?
Please enter a number to confirm:
1 - Yes
2 - No`,
    `2`
  );
}
// Step 5 - Order confirmation
// Your code goes here

if (confirmation === "1") {
  alert(`Thank you for your order, your meal will be prepared soon!`);
} else if (confirmation === "2") {
  alert(`Ok, come back if you change your mind!`);
}
