// Start here

// Step 1 - Welcome and introduction

alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

let customerName = prompt("Please enter your name?");
alert(`Nice to meet you, ${customerName}!`);

// Step 2 - Food choice

let food = prompt(`What type of food would you like to order? 
  Enter a number: 
1 - Pizza 
2 - Pasta 
3 - Salad`);

if (food === "1") {
  alert(`You've chosen pizza!`);
  food = "pizza";
} else if (food === "2") {
  alert(`You've chosen pasta!`);
  food = "pasta";
} else if (food === "3") {
  alert(`You've chosen salad!`);
  food = "salad";
} else {
  alert(`Invalid choice!`);
  throw new Error("invalid");
}

// Step 3 - Subtype choice

let subtype;

if (food === "pizza") {
  let pizzaType = prompt(`Select a pizza type.
  Enter a number:
1 - Napolitana
2 - Hawaian
3 - Pepperoni`);

  switch (pizzaType) {
    case "1":
      alert(`You've chosen napolitana!`);
      subtype = "napolitana";
      break;
    case "2":
      alert(`You've chosen hawian!"`);
      subtype = "hawian";
      break;
    case "3":
      alert(`You've chosen pepperoni!`);
      subtype = "pepperoni";
      break;
    default: {
      alert(`Invalid choice!`);
      throw new Error("invalid");
    }
  }
}

if (food === "pasta") {
  let pastaType = prompt(`Select a pasta type
  Enter a number:
1 - Spagetti carbonara
2 - Fettuccine Alfredo
3 - Cheesy tortellini`);

  switch (pastaType) {
    case "1":
      alert(`You've chosen spagetti carbonara!`);
      subtype = "spagetti carbonara";
      break;
    case "2":
      alert(`You've chosen fettuccine Alfredo!`);
      subtype = "fettuccine Alfredo";
      break;
    case "3":
      alert(`You've chosen cheesy tortellini!`);
      subtype = "cheesy tortellini";
      break;
    default: {
      alert(`Invalid choice!`);
      throw new Error("invalid");
    }
  }
}

if (food === "salad") {
  let saladType = prompt(`Select a salad type
    Enter a number:
  1 - Ceasar salad
  2 - Caprese salad
  3 - Greek salad`);

  switch (saladType) {
    case "1":
      alert(`You've chosen ceasar salad!`);
      subtype = "ceasar salad";
      break;
    case "2":
      alert(`You've chosen caprese salad!`);
      subtype = "caprese salad";
      break;
    case "3":
      alert(`You've chosen greek salad!`);
      subtype = "greek salad";
      break;
    default: {
      alert(`Invalid choice!`);
      throw new Error("invalid");
    }
  }
}

// Step 4 - Age

let age = prompt(`Is this food for a child or an adulf?
  Type your age:`);
age = parseInt(age);

if (age < 18) {
  price = 10;
  size = "child";
} else {
  price = 15;
  size = "adult";
}

// Step 5 - Order confirmation

let order = prompt(
  `One ${size} ${food} ${subtype} will be prepared for you. That will be €${price}. Are you sure you want to order this? Press 1 for yes and 2 for no:`
);

if (order === "1") {
  alert(`You have placed your order! Your delicous food it's on it's way!🎉`);
} else if (order === "2") {
  alert(`No problem! Come back and order anytime!👋`);
}

// Step 6 – Optional alternative

let reason =
  prompt(`Psst, ${customerName}, may we ask why you cancelled your order?
  Enter a reason:
1 - The price 
2 - No longer hungry
3 - Not enough alternatives
4 - Other`);

switch (reason) {
  case "1":
    alert(`You've chosen the price.`);
    break;
  case "2":
    alert(`You've chosen no longer hungry.`);
    break;
  case "3":
    alert(`You've chosen not enough alternatives.`);
    break;
  case "4":
    alert(`You've chosen other.`);
    break;
  default: {
    alert(`Invalid choice!`);
    throw new Error("invalid");
  }
}

prompt(`Tell us more:`);
