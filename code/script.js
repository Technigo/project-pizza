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
  alert("You have chosen the delicous pizza!");
} else if (food ==="2") {
  alert("You have chosen the creamy pasta!");
} else if (food ==="3") {
  alert("You have chosen the healthy salad!");
} else {
  alert("Invalid choise");
}

// Step 3 - Subtype choice
if(food === "1"){
  choise = prompt("Select a pizza type:\nEnter a number:\n1 - Funghi\n2 - Hawaian\n3 - Kebab");
} else if(food === "2") {
  choise = prompt("Select a pasta type:\nEnter a number:\n1 - Chicken\n2 - Veggie\n3 - Carbonara");
} else if(food === "3") {
  choise = prompt("Select a salad type:\nEnter a number:\n1 - Caesar salad\n2 - Shrimp salad\n3 - Greek salad");
} else {
  alert("You have not made a choise of food type");
}
  //Pizza
if(food === "1" && choise === "1") {
  alt = "Funghi pizza"
  alert("You have chosen " + alt);
} else if(food === "1" && choise === "2") {
  alt = "Hawaian pizza"
  alert("You have chosen " + alt);
}else if(food === "1" && choise === "3") {
  alt = "Kebab pizza"
  alert("You have chosen " + alt);
}
  //Pasta 
else if(food === "2" && choise === "1") {
  alt = "Chicken pasta"
  alert("You have chosen " + alt);
} else if(food === "2" && choise === "2") {
  alt = "Veggie pasta"
  alert("You have chosen " + alt);
}else if(food === "2" && choise === "3") {
  alt = "Spaghetti carbonara"
  alert("You have chosen " + alt);
}
  //Salad
else if(food === "3" && choise === "1") {
  alt = "Caesar salad"
  alert("You have chosen " + alt);
}else if(food === "3" && choise === "2") {
  alt = "Shrimp salad"
  alert("You have chosen " + alt);
} else if(food === "3" && choise === "3") {
  alt = "Greek salad"
  alert("You have chosen " + alt);
} else {
  alert("Invalid choise. Please select a type");
}

// Step 4 - Age
let age = prompt("Is this food for a child or an adult?\nHow old are you?");
if(age <=12) {
  confirm = prompt("One child size " + alt + " will be prepared for you. That will be €10.\nAre you sure you want to order this?\nEnter a number to confirm:\n1 - Yes\n2 - No");
} else {
  confirm = prompt("One adult size " + alt + " will be prepared for you. That will be €15.\nAre you sure you want to order this?\nEnter a number to confirm:\n1 - Yes\n2 - No");
}

// Step 5 - Order confirmation
if(confirm === "1") {
  alert("Thankt you for your order! Your food will be prepared. See you soon!");
} else if(confirm === "2") {
  alert("Your order had been not been placed. Come back anytime to make an order! Good bye!");
} else {
  alert("Invalid choice. Please select 1 for Yes or 2 for No.");
}
