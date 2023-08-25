// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start?? - Click 'OK' to begin.`
)

//CAN I make it so only letters will be accepted? 
//HOW can I make the first letter a capital?
let firstName = prompt("Please enter your first name", "First Name")
let lastName = prompt("Please enter your last name", "Last Name")
alert("Welcome " + firstName + " " + lastName + "!")
//I dont need to devide first and last name in two separate strings, should i make one "yourname" string instead?


// Step 2 - Food choice
// Your code goes here
const options = prompt(`Please select an option you would like to order:
1 - Pizza
2 - Pasta
3 - Salad
4 - Dessert`);
//Variable to store selected foodchoise? 
let selectedOption = "";
//Determine selected foodchoise based on the users number choise. 
if (options === "1") {
  selectedOption = "Pizza"
}
else if (options === "2") {
  selectedOption = "Pasta"
}
else if (options === "3") {
  selectedOption = "Salad"
}
else if (options === "4") {
  selectedOption = "Dessert"
}
else {
  alert("Invalid choise. Please select a valid number");//Message works. If invalid number is entered when choosing type of food the message appears.
  process.exit(1);
}

alert(`You've chosen ${selectedOption}!`);



// Step 3 - Subtype choice
// Your code goes here

let menuFoodSelected = "";
let typeOf = ""; //array to store for later choises?  for selected type of food from first menu?

switch (selectedOption) {
  case "Pizza":
    menuFoodSelected = prompt(`Select a type of Pizza:
    1 - Quattro Formaggi
    2 - Pepperoni
    3 - Margherita
    4 - Calzone
    Please enter the number of your choise:`);
    typeOf = ["Quattro Formaggi", "Pepperoni", "Margherita", "Calzone"]; //obs, don't forget square baccets 
    break;
  case "Pasta":
    menuFoodSelected = prompt(`Select type of pasta:
    1- Carbonara
    2 - Bolognaise 
    3 - WoW
    4 - Yum
    Please enter the number of your choise:`);
    typeOf = ["Carbonara", "Bolognaise", " WoW", "Yum"];
    break;
  case "Salad":
    menuFoodSelected = prompt(`Select type of salad:
    1 - Green
    2 - Rainbow 
    3 - Happy
    4 - Yey
    Please enter the number of your choise:`);
    typeOf = ["Green", "Rainbow", "Happy", "Yey"];
    break;
  case "Dessert":
    menuFoodSelected = prompt(`Select type of dessert:
    1 - Tiramisu
    2 - Gelato
    3 - Chocolate Fondant
    4 - Yummy in my tummy 
    Please enter the number of your choise:`);
    typeOf = ["Tiramisu", "Gelato", "Chocolate Fondant", "Yummy in my tummy"]; //HOW to have less than four choises and getting a default message if I enter 4?
    break;
  default: //Why is default and alert not working?
    alert(`Invalid choise, Please refresh to try again`);
    process.exit(1);
}

if (menuFoodSelected === "1") {
  alert(
    `Great Choice, You've chosen ${typeOf[0]} from the ${selectedOption} menu!`);
} else if (menuFoodSelected === "2") {
  alert(
    `Great Choice, You've chosen ${typeOf[1]} from the ${selectedOption} menu!`);
} else if (menuFoodSelected === "3") {
  alert(
    `Great Choice, You've chosen ${typeOf[2]}  from the ${selectedOption} menu!`);
}
else if (menuFoodSelected === "4") {
  alert(
    `Great Choice, You've chosen ${typeOf[3]} from the ${selectedOption} menu!`);
}



// Step 4 - Age
// Your code goes here
let answer = "";
let yourAge = prompt("Enter your age")
if (yourAge <= 18) {
  answer = prompt(`You have chosen a child sized ${typeOf}. That will be €15.
    Enter Y for Yes
    Enter N for No`);
}
else if (yourAge >= 18) {
  answer = prompt(`You have chosen an adult sized ${typeOf}. That will be €25.
  Enter Y for Yes
  Enter N for No`);
}
//SOMETHING IS WRONG INSIDE ${typeOf}., THIS IS THE MESSAGE I GET: You have chosen a child sized Quattro Formaggi,Pepperoni,Margherita,Calzone. That will be €15. Enter Y for Yes Enter N for No

// HOW CAN I make everything but numbers to give a default alert?



// Step 5 - Order confirmation
// Your code goes here
//The final iteration involves confirming the user's order based on their previous choices. The program should evaluate the user's confirmation and if the user confirms, a thank you message should be displayed using the alert() method, indicating that their meal will be prepared. If the user declines, a polite farewell message should be displayed using the alert() method, encouraging them to return for future orders.

