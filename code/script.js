// Start here

const pizzeriaName = "Naima's Pizzeria";
const numberOne = "1";
const numberTwo = "2";
const numberThree = "3";

let subtype;

// Step 1 - Welcome and introduction
// Your code goes here
alert(`Welcome to ${pizzeriaName}. Ready to Start? - Click 'OK' to begin.`);
const customerName = prompt("Please enter your name.");
alert(`Nice to meet you, ${customerName}!`);

// Step 2 - Food choice
// Your code goes here
const foodChoice = prompt(
  `What would like to order from the menu below? Please enter only a number. 
  1 - Pizza 
  2 - Pasta 
  3 - Salad`
);

if (foodChoice === numberOne) {
  alert(`Great! You have chosen pizza.`);
} else if (foodChoice === numberTwo) {
  alert(`Great! You have chosen pasta`);
} else if (foodChoice === numberThree) {
  alert(`Great you have chosen salad`);
} else {
  alert("Invalid number! Please select between the numbers 1 and 3.");
}

// Step 3 - Subtype choice
// Your code goes here

if (foodChoice === numberOne) {
  subtype =
    prompt(`Please select which pizza you would like to order. Enter only the number:
  1 - Margarita
  2 - Spicy Chicken
  3 - Vegetarian`);

  if (subtype === numberOne) {
    alert("You chose Margarita Pizza!");
  } else if (subtype === numberTwo) {
    alert("You chose Spicy Chicken Pizza");
  } else if (subtype === numberThree) {
    alert("You chose Vegetarian Pizza");
  }
} else if (foodChoice === numberTwo) {
  subtype =
    prompt(`Please select which pasta you would like to order. Enter only the number:
1 - Creamy Mushroom Pasta
2 - Bolenaise Spaghetti
3 - Pomodoro Fettucini`);

  if (subtype === numberOne) {
    alert("You chose Creamy Mushroom Pasta");
  } else if (subtype === numberTwo) {
    alert("You chose Bolenaise Spaghetti");
  } else if (subtype === numberThree) {
    alert("You chose Pomodoro Fettucini");
  }
} else if (foodChoice === numberThree) {
  subtype =
    prompt(`Please select which salad you would like to order. Enter only the number:
1 - Avocado and salmon salad
2 - Chévre and walnut salad
3 - Caesar salad`);

  if (subtype === numberOne) {
    alert("You chose Avocado and salmon salad");
  } else if (subtype === numberTwo) {
    alert("You chose Chévre and walnut salad");
  } else if (subtype === numberThree) {
    alert("You chose Caesar salad");
  }
} else {
  alert("Invalid number! Please select between the numbers 1 and 3.");
}
// Step 4 - Age
// Your code goes here
const age = prompt(
  "Is this a children's or an adult order? Please type your age:"
);
age;

if (age >= 18) {
  alert("One adult order");
} else if (age > 18) {
  alert("One child order");
} else {
  alert("Invalid number!");
}

// Step 5 - Order confirmation
// Your code goes here
