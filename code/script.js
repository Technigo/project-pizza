// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);
//alert("Please enter your name here:");
let Name = prompt("Enter your name: ");
alert("Hi and welcome " + Name + "!");
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
    alert("Invalid choice, please reload the page to start again.");
    exit;
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
    alert("Invalid choice, please reload the page to start again.");
    exit;
  }
} else if (choice == "2") {
  subtype = prompt("Choose Pasta:\nSpaghetti = 1, Lasagne = 2, Macaroni = 3");
  if (subtype == "1") {
    subtypeText = "Spaghetti";
  } else if (subtype == "2") {
    subtypeText = "Lasagne";
  } else if (subtype == "3") {
    subtypeText = "Macaroni";
  } else {
    alert("Invalid choice, please reload the page to start again.");
    exit;
  }
} else if (choice == "3") {
  subtype = prompt("Choose Sallad:\nChicken = 1, Greek = 2, Cesar = 3");
  if (subtype == "1") {
    subtypeText = "Chicken";
  } else if (subtype == "2") {
    subtypeText = "Greek";
  } else if (subtype == "3") {
    subtypeText = "Cesar";
  } else {
    alert("Invalid choice, please reload the page to start again.");
    exit;
  }
} else {
  alert("Invalid choice, please reload the page to start again.");
}

//Also add cost to make it more realistic
let cost;
switch (choice) {
  case "1":
    switch (subtype) {
      case "1":
        cost = 15;
        break;
      case "2":
        cost = 18;
        break;
      case "3":
        cost = 20;
        break;
    }
    break;
  case "2":
    switch (subtype) {
      case "1":
        cost = 14;
        break;
      case "2":
        cost = 18;
        break;
      case "3":
        cost = 22;
        break;
    }
  case "3":
    switch (subtype) {
      case "1":
        cost = 13;
        break;
      case "2":
        cost = 14;
        break;
      case "3":
        cost = 12;
        break;
    }
}

alert("You selected: " + subtypeText);

// Step 4 - Age
// Your code goes here

let age = prompt(
  "Are you a child (0-14y) or adult (+15 years)?:\n Enter a number (Child = 1, Adult = 2):"
);

let ageChoice;
switch (age) {
  case "1":
    ageChoice = "child";
    break;
  case "2":
    ageChoice = "adult";
    break;
  default:
    ageChoice = "adult"; //if they mistype, normal prices will apply.
}

//If it´s a child, let´s take 5$ off the price
if (ageChoice == "child") {
  cost = cost - 5;
}

let confirmOrder = prompt(
  "One " +
    ageChoice +
    " sized " +
    subtypeText +
    " " +
    food +
    " will be made for you. That will be " +
    `${cost}` +
    "$.\nPlease confirm your order:\n1 - Yes\n2 - No"
);

// Step 5 - Order confirmation
// Your code goes here
switch (confirmOrder) {
  case "1":
    alert("Thank you for the order! Your meal is now being prepared for you.");
    break;
  case "2":
    alert(
      "You did not confirm your order.\nPlease reload the page to make a new order.\nWelcome back anytime!"
    );
    break;

  default:
    alert("Something went wrong! Please reload the page to start over.");
}
