// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

// Ask for name
let userName = prompt(`What is your name?`);

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
  {
    item: "Small burger",
    price: 70,
  },
  {
    item: "Big burger",
    price: 100,
  },
  {
    item: "Small cheeseburger",
    price: 80,
  },
  {
    item: "Big cheeseburger",
    price: 110,
  },
];
const saladMenu = [
  {
    item: "Greek salad",
    price: 90,
  },
  {
    item: "Ceasar salad",
    price: 90,
  },
  {
    item: "Pasta salad",
    price: 90,
  },
  {
    item: "Avocado salad",
    price: 100,
  },
];

//Ask for choice within a specific menu
let menuAnswer = null;
let menuChoice = null;
let menuPrice = null;

while (menuChoice === null) {
  //Choose within pizza menu
  if (foodChoice === "pizza") {
    menuAnswer = parseInt(
      prompt(
        `What type of pizza do you want? Write the number on the menu: 
      1. Margerita (tomato, cheese) 100:-
      2. Al Funghi (tomato, cheese, mushrooms) 110:-
      3. Vegetariana (tomato, cheese, onion, bell pepper, mushrooms, olives, artichoke) 120:-
      4. Chicken No Chicken (tomato, cheese, banana, curry, peanuts) 110:-
      (Children's size -10:-)`
      )
    );
    //Save chosen item and price
    if (menuAnswer >= 1 && menuAnswer <= 4) {
      menuChoice = pizzaMenu[menuAnswer - 1]["item"];
      menuPrice = pizzaMenu[menuAnswer - 1]["price"];
    } else {
      alert(
        `I'm sorry. Number ${menuAnswer} is not an option. Please start over.`
      );
    }

    //Choose within burger menu
  } else if (foodChoice === "burger") {
    menuAnswer = parseInt(
      prompt(
        `Here is our burger menu:
      1. Small burger 70:-
      2. Big burger 100:-
      3. Small cheeseburger 80:-
      4. Big cheeseburger 110:-
    Write the number of your choice of burger.
    (Children's size -10:-)`
      )
    );
    //Save chosen item and price
    if (menuAnswer >= 1 && menuAnswer <= 4) {
      menuChoice = burgerMenu[menuAnswer - 1]["item"];
      menuPrice = burgerMenu[menuAnswer - 1]["price"];
    } else {
      alert(
        `I'm sorry. Number ${menuAnswer} is not an option. Please start over.`
      );
    }

    //Choose within salad menu
  } else {
    menuAnswer = parseInt(
      prompt(
        `What type of salad do you want? Write the number on the menu:
      1. Greek salad 90:-
      2. Ceasar salad 90:-
      3. Pasta salad 90:-
      4. Avocado salad 100:-
      (Children's size -10:-)`
      )
    );
    //Save chosen item and price
    if (menuAnswer >= 1 && menuAnswer <= 4) {
      menuChoice = saladMenu[menuAnswer - 1]["item"];
      menuPrice = saladMenu[menuAnswer - 1]["price"];
    } else {
      alert(
        `I'm sorry. Number ${menuAnswer} is not an option. Please start over.`
      );
    }
  }
}

alert(`You chose the ${menuChoice}. Great choice!`);

// Step 4 - Age
//Ask for age
let age = prompt(
  `We need to know if the food is for an adult or a child. Please write your age:`
);
//Decide if the size is child or adult
let size = "";
let finalPrice = null;

if (age < 18) {
  alert(
    `Since you are younger than 18. We will make a child-size ${foodChoice}.`
  );
  size = "a child";
  finalPrice = menuPrice - 10;
} else {
  alert(`Since you are 18 or older. We will make an adult-size ${foodChoice}.`);
  size = "an adult";
  finalPrice = menuPrice;
}

// Step 5 - Order confirmation
let confirmation = prompt(
  `You have ordered ${size}-size ${menuChoice} for the price of ${finalPrice}:-. Is this order correct? Write yes or no:`
);

let orderDone = false;

switch (confirmation.toLowerCase()) {
  case "yes":
    alert(
      `Thank you for your order, ${userName}! Your ${menuChoice} is on its way.`
    );
    orderDone = true;
    break;
  default:
    alert(
      `I'm sorry to hear that ${userName}. You're welcome to start over and place a new order. Otherwise - have a good one, and I hope to see you again soon!`
    );
}
