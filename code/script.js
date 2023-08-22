// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);
let name = prompt (
  "What is your name?"
);
alert(
  "Hi, " + name + "!"
);

// Step 2 - Food choice
let food = prompt(
  "What food would you like to order?\nEnter a number:\n1 - Pizza\n2 - Pasta\n3 - Salad");
  let choise
if (food ==="1") {
  //choise = pizza
  alert("You have chosen the delicous pizza!");
} else if (food ==="2") {
  //choise = pasta
  alert("You have chosen the creamy pasta!");
} else if (food ==="3") {
  //choise = salad
  alert("You have chosen the healthy salad!");
} else {
  alert("Invalid choise");
}

// Step 3 - Subtype choice
if(food === "1"){
prompt("Select a pizza type:\nEnter a number:\n1 - Funghi\n2 - Hawaian\n3 - Kebab");
} else if(food === "2") {
  prompt("Select a pasta type:\nEnter a number:\n1 - Chicken\n2 - Veggie\n3 - Carbonara");
} else if(food === "3") {
  prompt("Select a salad type:\nEnter a number:\n1 - Caesarsalad\n2 - Shrimpsalad\n3 - Greeksalad");
} else {
  alert("You have not made a choise of food type");
}

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
