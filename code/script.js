// Start here

// Step 1 - Welcome and introduction
// Your code goes here

alert(
  "Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin."
);

let yourName = prompt("Please enter your name:");

alert("Hello " + yourName + "!");

// Step 2 - Food choice
// Your code goes here

let yourChoice = prompt(
  "Please choose between Pizza, Pasta or Salad. <br> Enter the number 1 for Pizza, 2 for Pasta or 3 for Salad"
);

if (yourChoice == 1) {
  alert("You've chosen Pizza");
} else if (yourChoice == 2) {
  alert("You've chosen Pasta");
} else if (yourChoice == 3) {
  alert("You've chosen Salad");
} else {
  alert(
    "Please choose a number between 1 and 3: 1 for Pizza, 2 for Pasta or 3 for Salad"
  );
}
//Loop!?!?

// Step 3 - Subtype choice
// Your code goes here

if (yourChoice == 1) {
  alert(
    "You can now choose between: 1 - Pizza Margherita, 2 - Pizza ai Funghi, 3 - Pizza Vegetariana"
  );
} else if (yourChoice == 2) {
  alert(
    "You can now choose between: 1 - Arrabiata, 2 - Aglio e Olio, 3 - Carbonara"
  );
} else if (yourChoice == 3) {
  alert(
    "You can now choose between: 1 - Green Salad, 2 -  Mixed Salad, 3 - Greek Salad"
  );
}

let yourSubchoice = prompt("Make your choice now");

if (yourChoice == 1 && yourSubchoice == 1) {
  alert("Good choice! You've put a Pizza Margherita in your basket.");
} else if (yourChoice == 1 && yourSubchoice == 2) {
  alert("Good choice! You've put a Pizza ai Funghi in your basket.");
} else if (yourChoice == 1 && yourSubchoice == 3) {
  alert("Good choice! You've put a Pizza Vegetariana in your basket.");
} else if (yourChoice == 2 && yourSubchoice == 1) {
  alert("Good choice! You've put a Pasta Arrabiata in your basket.");
} else if (yourChoice == 2 && yourSubchoice == 2) {
  alert("Good choice! You've put a Pasta Aglio e Olio in your basket.");
} else if (yourChoice == 2 && yourSubchoice == 3) {
  alert("Good choice! You've put a Pasta Carbonara in your basket.");
} else if (yourChoice == 3 && yourSubchoice == 1) {
  alert("Good choice! You've put a Green Salad in your basket.");
} else if (yourChoice == 3 && yourSubchoice == 2) {
  alert("Good choice! You've put a Mixed Salad in your basket.");
} else if (yourChoice == 3 && yourSubchoice == 3) {
  alert("Good choice! You've put a Greek Salad in your basket.");
}
// Step 4 - Age
// Your code goes here

let yourAge = prompt("Please enter your age:");

if (yourAge <= 12) {
  alert("You ordered a child size meal!");
} else if (yourAge > 12) {
  alert("You ordered a regular size meal!");
}

// Step 5 - Order confirmation
// Your code goes here
