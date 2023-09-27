// Start here
// Step 1 - Welcome and introduction
// Your code goes here
alert(
  "Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin."
);
let userName = prompt("Please enter your name: ");

if (userName != null) {
  alert("Nice to meet you, " + userName + "!");
} else {
  alert("Nice to meet you, " + "!");
}

// Step 2 - Food choice
// Your code goes here
let foodChoices = ["Pizza", "Pasta", "Salad"];
let foodChoice = prompt(
  `What type of food would you like to order?\n Enter a number:\n1 - ${foodChoices[0]}\n2 - ${foodChoices[1]}\n3 - ${foodChoices[2]}`
);
if (foodChoice >= 1 && foodChoice <= 3) {
  alert(`You've chosen ${foodChoices[foodChoice - 1]}!`);
} else {
  alert("Invalid food choice. Please select a number between 1 and 3");
}
// Step 3 - Subtype choice
// Your code goes here

let typeOption = [
  ["Napolitana", "Hawaian", "Pepperoni"],
  ["Spaghetti Carbonara", "Fettuccine Alfredo", "Cheesy Tortellini"],
  ["Caesar", "Caprese", "Greek"],
];
let foodType = prompt(`Select a ${foodChoices[foodChoice - 1]} type.\nEnter a number: \n1 - ${typeOption[foodChoice - 1][0]}\n2 - ${typeOption[foodChoice - 1][1]}\n3 - ${typeOption[foodChoice - 1][2]}`);
if(foodType >= 1 && foodType <= 3){
  alert(`You have chosen ${typeOption[foodChoice -1][foodType -1]} ${foodChoices[foodChoice -1]}!`);
}
else{
  alert(`Invalid ${foodChoices[foodChoice -1]} type choice.`);
}

// Step 4 - Age
// Your code goes here


let age = prompt("Is this food for a child or an adult? Type your age: ");
let child;
let adult;

if (age === null || age < 1) {
  alert("Invalid age choice. Please type a number");
} 
else if (age < 18 ) {
  child = prompt(
    `One child sized ${typeOption[foodChoice -1][foodType -1]} ${foodChoices[foodChoice -1]} will be prepare for you. That'll be €10. Are you sure you want to order this? \n Enter a number to confirm: \n 1 - Yes \n 2 - No`
  );
} else{
  adult = prompt(
    `One adult ${typeOption[foodChoice -1][foodType -1]} ${foodChoices[foodChoice -1]} size will be prepare for you. That'll be €15. Are you sure you want to order this? \n Enter a number to confirm: \n 1 - Yes \n 2 - No`
  );
 
}

// Step 5 - Order confirmation
// Your code goes here
if (child === "1" || adult === "1") {
  alert(
    "Thank you for your order! Your delicious meal will be prepared. See you soon! 👋🏼"
  );
} else if (child === "2" || adult === "2") {
  alert("No problem, come back and order anytime you want.");
} else {
  alert("Invalid choice. Please select 1 for Yes or 2 for No.");
}
