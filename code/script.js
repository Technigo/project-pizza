// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

// Prompt to user to enter their name
const userName = prompt("Please enter your name:");


//Display a greeting message with the user's name
alert(`Hi ${userName}! We hope you're hungry!`);

//Step 2 - Food choice

//Prompt to the user to choose food
const foodChoice = prompt (`
What type of food would you like to order?
Enter a number:
1 - Pizza
2 - Pasta
3 - Salad
`);

//Variable to store the selected food
let selectedFood = ""

//Determine the selected food based on the user's choice
switch (foodChoice) {
  case "1":
    selectedFood = "Pizza";
    break;
  case "2":
    selectedFood = "Pasta";
    break;
  case "3":
    selectedFood = "Salad";
    break;
  default:
    alert(`Invalid choice. Please select a number between 1-3.`);(exit[1])
}

//Display confirmation of the user's selected food
alert (`You've chosen ${selectedFood}!`);


// Step 3 - Subtype choice

//Variable to store the subtype food
let subtypeChoice = "";

// Prompt the user to choose a subtype
switch (selectedFood) {
  case "Pizza":
    subtypeChoice = prompt(
      `Select a Pizza type:
      Enter a number:
      1 - Napolitana
      2 - Hawaiian
      3 - Pepperoni`
    );
    break;
    

  case "Pasta":
  subtypeChoice = prompt(
    `Select a Pasta type:
    Enter a number:
    1 - Spaghetti Carbonara
    2 - Fettuccine Alfredo
    3 - Cheesy Tortellini`
  );
  break;

  case "Salad":
  subtypeChoice = prompt(
    `Select a Salad type:
    Enter a number:
    1 - Caesar 
    2 - Caprese 
    3 - Greek `
  );
  break;

  default:
    alert("Invalid choice. Please select a number between 1-3.");(exit[1])
}

//Variable to store the users chosen food subtype
let selectedSubtype = "";

switch (subtypeChoice){
  case "1":
    if (selectedFood === "Pizza") {selectedSubtype = "Napolitana";
   } else if (selectedFood === "Pasta") {selectedSubtype = "Spaghetti Carbonara";
   } else if (selectedFood === "Salad") {selectedSubtype = "Caesar";
   }
  break;

  case "2":
    if (selectedFood === "Pizza") {selectedSubtype = "Hawaiian";
   } else if (selectedFood === "Pasta") {selectedSubtype = "Fettuccine Alfredo";
   } else if (selectedFood === "Salad") {selectedSubtype = "Caprese";
   }
  break;

  case "3":
    if (selectedFood === "Pizza") {selectedSubtype = "Pepperoni";
   } else if (selectedFood === "Pasta") {selectedSubtype = "Cheesy Tortellini";
   } else if (selectedFood === "Salad") {selectedSubtype = "Greek";
   }
  break;
default:
  alert ("Invalid choice. Please select a number between 1-3.");(exit[1])
}
//Display confirmation of the user's chosen subtype
if (selectedSubtype !==""){
  alert (`You've chosen ${selectedSubtype} ${selectedFood}!`);
}

// Step 4 - Age

//Promt asking for the users age
const userAge = prompt("Is this food for a child or an adult? Type your age:");

//Variable converting user age (string) to (integer)
const age = parseInt(userAge);

//Variable for storing the confirmation
let childConfirmation = "";
let adultConfirmation = "";

//Prompt asking user to confirm their order
switch (true) {
  case age >= 0 && age <= 17:
  childConfirmation = prompt (`One child sized ${selectedSubtype} ${selectedFood} will be prepared for you. That'll be €10. Are you sure you want to order this?
  Enter a number to confirm:
  1 - Yes
  2 - No`
  );
  break;
  case age >= 18: 
  adultConfirmation = prompt (`One adult sized ${selectedSubtype} ${selectedFood} will be prepared for you. That'll be 15€. Are you sure you want to order this?
  Enter a number to confirm:
  1 - Yes
  2 - No`
  );
  break;

 default: 
  alert (`Invalid age choice. Please type a number`); (exit[1])
}

// Step 5 - Order confirmation

//Display confirmation of the order
if (childConfirmation === "1") {
  alert (`Thank you for your order! Your delicious meal will be prepared. See you soon! 👋🏼`);
} else if (childConfirmation === "2") {
  alert (`No problem, come back and order anytime you want.`);
} else if (adultConfirmation === "1") {
  alert (`Thank you for your order! Your delicious meal will be prepared. See you soon! 👋🏼`);
} else if (adultConfirmation === "2") {
  alert (`No problem, come back and order anytime you want.`);
} else { alert (`Invalid choice. Please select 1 for Yes or 2 for No.`);
}