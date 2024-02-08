// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

// Ask for name
let userName = prompt(`What is your name?`);
console.log("Name:", userName);

//Welcome with name
alert(`Welcome ${userName}! Let's order some food`);

// Step 2 - Food choice

//Ask for type of food until answer is pizza, burger or salad
let foodChoice = "apple";

while (foodChoice === "apple") {
  let foodAnswer = prompt(
    `What do you want to eat? 
  Choose between pizza, burger or salad and write your answer.`
  );
  console.log("Answer:", foodAnswer);

  switch (foodAnswer.toLowerCase()) {
    case "pizza":
      foodChoice = "pizza";
      break;
    case "burger":
      foodChoice = "burger";
      break;
    case "salad":
      foodChoice = "salad";
      break;
    default:
      alert(`I'm sorry. We don't have ${foodAnswer}. Choose again!`);
  }
}

console.log("Choice:", foodChoice);

// Step 3 - Subtype choice

//menus:
const pizzaMenu = [
  {
    item: "Margerita",
    price: 100,
  },
  {
    item: "Al Funghi",
    price: 110,
  },
  {
    item: "Vegetariana",
    price: 120,
  },
  {
    item: "Chicken No Chicken",
    price: 110,
  },
];
const burgerMenu = [
  "Small burger",
  "Big burger",
  "Small cheeseburger",
  "Big cheeseburger",
];
const saladMenu = [
  "Greek salad",
  "Ceasar salad",
  "Pasta salad",
  "Avocado salad",
];

//Ask for choice within a specific menu
let menuAnswer = null;
let menuChoice = null;
let menuPrice = null;

//Choose within pizza menu
if (foodChoice === "pizza") {
  menuAnswer = parseInt(
    prompt(
      `What type of pizza do you want? Write the number on the menu: 
    1. Margerita (tomato, cheese) 100:-
    2. Al Funghi (tomato, cheese, mushrooms) 110:-
    3. Vegetariana (tomato, cheese, onion, bell pepper, mushrooms, olives, artichoke) 120:-
    4. Chicken No Chicken (tomato, cheese, banana, curry, peanuts) 110:-`
    )
  );
  console.log("Answer:", menuAnswer);

  if (menuAnswer >= 1 && menuAnswer <= 4) {
    menuChoice = pizzaMenu[menuAnswer - 1]["item"];
    console.log("Option:", menuChoice);
    menuPrice = pizzaMenu[menuAnswer - 1]["price"];
    console.log("Price:", menuPrice);
  } else {
    exit(1);
  }
  //Choose within burger menu
} else if (foodChoice === "burger") {
  menuAnswer = parseInt(
    prompt(
      `Here is our burger menu:
    1. Small burger
    2. Big burger
    3. Small cheeseburger
    4. Big cheeseburger 
  Write the number of your choice of burger.`
    )
  );
  console.log("Answer:", menuAnswer);

  if (subType <= 4) {
    console.log("Option:", burgerMenu[subType - 1]);
    order = burgerMenu[subType - 1];
  } else {
    exit(1);
  }
  //Choose within salad menu
} else {
  menuAnswer = parseInt(
    prompt(
      `What type of salad do you want? Write the number on the menu:
    1. Greek salad
    2. Ceasar salad
    3. Pasta salad
    4. Avocado salad`
    )
  );
  console.log("Answer:", menuAnswer);

  if (subType <= 4) {
    console.log("Option:", saladMenu[subType - 1]);
    order = saladMenu[subType - 1];
  } else {
    exit(1);
  }
}

// Step 4 - Age
//Ask for age
let age = prompt(
  `We need to know if the food is for an adult or a child. Please write your age:`
);
console.log("Age:", age);
//Decide if the size is child or adult
let size = "";

if (age < 18) {
  alert(
    `Since you are younger than 18. We will make a child-size ${foodChoice}.`
  );
  size = "child";
} else {
  alert(`Since you are 18 or older. We will make an adult-size ${foodChoice}.`);
  size = "adult";
}

console.log("Size:", size);
console.log("Order:", size, menuChoice);
//order =
// Step 5 - Order confirmation

//alert(`Thank you for your order! Your ${order} is on its way.`);
alert(`Thank you for your order! Your ${foodChoice} is on its way.`);
