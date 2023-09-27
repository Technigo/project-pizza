// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);
//alert("Please enter your name here:");
let Name = prompt("Enter your name: ");
alert("hi " + Name + "!");
// Step 2 - Food choice
// Your code goes here
let choice = prompt(
  "Please choose your food:\n Enter a number (Pizza = 1, Pasta = 2, Salad = 3):"
);
let food;
switch (choice) {
  case "1":
    food = "Pizza";
    break;
  case "2":
    food = "Pasta";
    break;
  case "3":
    food = "Salad";
    break;
  default:
    food = "Invalid choice";
}
alert("You selected: " + food);

// Step 3 - Subtype choice
// Your code goes here
let subtype;
let subtypeText;
if (choice == "1") {
  subtype = prompt("Choose Pizza:\nCalzone = 1, Capriciosa = 2, Hawaii = 3");
  if (subtype == "1") {
    subtypeText = "Calzone";
  } else if (subtype == "2") {
    subtypeText = "Capriciosa";
  } else if (subtype == "3") {
    subtypeText = "Hawaii";
  } else {
    exit;
  }
} else if (choice == "2") {
  subtype = prompt("Choose Pasta:\nSpaghetti = 1, Lasagne = 2, Macaroni = 3");
  if (subtype == "2") {
    subtypeText = "Spaghetti";
  } else if (subtype == "2") {
    subtypeText = "Lasagne";
  } else if (subtype == "3") {
    subtypeText = "Macaroni";
  } else {
    exit;
  }
} else if (choice == "3") {
  subtype = prompt("Choose Sallad:\nChicken = 1, Greek = 2, Cesar = 3");
  if (subtype == "2") {
    subtypeText = "Chicken";
  } else if (subtype == "2") {
    subtypeText = "Greek";
  } else if (subtype == "3") {
    subtypeText = "Cesar";
  } else {
    exit;
  }
} else {
  alert("Invalid choice");
}

alert("You selected: " + subtypeText);

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
