// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);
const message_name = prompt(`Please enter your name:`);
alert(`Nice to meet you ${message_name} !😊`);
// Step 2 - Food choice
// Your code goes here
const orderName = prompt(
  `What type of food would you like to order? \nPlease enter a number: \n1- Pizza🍕 \n2- Pasta🍝 \n3- Salad🥗`
);
let typeFood = "";
// switch (orderName) {
//   case 1:
//     typeFood = "Pizza";
//     break;
//   case 2:
//     typeFood = "Pasta";
//     break;
//   case 3:
//     typeFood = "Salad";
//     break;
//   default:
//     typeFood = "Invalid type";
//     break;
// }
// alert(`You've chosen ${typeFood} !`);
if (orderName === "1") {
  foodType = "Pizza";
} else if (orderName === "2") {
  foodType = "Pasta";
} else if (orderName === "3") {
  foodType = "Salad";
} else {
  alert("Invalid choice. Please enter a valid number.");
  process.exit(1);
}
alert(`You've chosen ${foodType}!`);
// // Step 3 - Subtype choice
// // Your code goes here
let subType = "";
let subTypeChoice = ""; // store subtype choice here

switch (foodType) {
  case "Pizza":
    subType = prompt(
      `Select a Pizza type:\n Enter a number: \n 1- Napolitana \n 2- Hawaian \n 3- Pepperoni`
    );
    subTypeChoice = ["Napolitana", "Hawaian", "Pepperoni"];
    break;

  case "Pasta":
    subType = prompt(
      `Select a pasta type : \n Enter a number \n 1- Spaghetti Carbonara \n2- Fettuccine Alfredo \n3- Cheesy Tortellini`
    );
    subTypeChoice = [
      "Spaghetti Carbonara",
      "Fettuccine Alfredo",
      "Cheesy Tortellini",
    ];
    break;

  case "Salad":
    subType = prompt(
      `Select a salad type  \n Enter a number \n 1- Caesar Salad \n2- Caprese Salad \n3- Greek Salad`
    );
    subTypeChoice = ["Caesar Salad", "Caprese Salad", "Greek Salad"];
    break;
  default:
    alert("Invalid choice.");
    process.exit(1);
}
// store the choice for the sub menu
let bestChoice = "";
switch (subType) {
  case "1":
    bestChoice = subTypeChoice[0];
    break;
  case "2":
    bestChoice = subTypeChoice[1];
    break;
  case "3":
    bestChoice = subTypeChoice[2];
    break;
  default:
    alert("Invalid Choice.");
    process.exit(1);
}
alert(`You've chosen ${bestChoice}!`);
// Step 4 - Age
// Your code goes here
const age = Number(
  prompt(`Is this food for a child or an adult? Type your age:`)
);
let child = "";
let adult = "";
if (age <= 16) {
  child = prompt(
    `One child sized ${bestChoice} will be prepared for you. That'll be €10. Are you sure you want to order this? \n Enter a number to confirm: \n1- Yes\n2- No`
  );
} else {
  adult = prompt(
    `One adult sized ${bestChoice} will be prepared for you. That'll be €15. Are you sure you want to order this? \n Enter a number to confirm:\n1- Yes\n2- No `
  );
}
// Step 5 - Order confirmation
// Your code goes here
if (child === "1" || adult == "1") {
  alert(
    `Thank you for your order! Your delicious meal will be prepared. See you soon!👋`
  );
} else if (child == "2" || adult === "2") {
  alert(`No problem, come back and order anytime you want.😊`);
} else {
  alert(`Invalid choice. Please select 1 Yes or 2 for No❗️`);
}
