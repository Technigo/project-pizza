// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

//prompt the customer to enter their name
const customerName = prompt("Please enter your name:");

// Display a greeting for the customer
alert(`It's nice to have you here, ${customerName}! We hope you are hungry!`);

// Step 2 - Food choice
//Ask the user to choose a type of food.
const foodChoice = prompt(`Select a type of food: 
1 - Pizza
2 - Pasta
3 - Salad
Please enter the number of your choice:`);

//Initialize a variable to store the customer's selected food type.
let selectedFood = "";

//Determine the selected food type based on the customers choice.
if (foodChoice === "1") {
  selectedFood = "Pizza";
} else if (foodChoice === "2") {
  selectedFood = "Pasta";
} else if (foodChoice === "3") {
  selectedFood = "Salad";
} else {
  //If the customer enters an invalid choice then show an error message.
  alert("Invalid choice. Please select a valid number.");
  ProcessingInstruction.exit(1);
}

//Display the chosen food type.
alert(`You have chosen ${selectedFood}!`);

//


// Step 3 - Subtype choice
// Ask the user to select a subtype based on their chosen type of food.

//Initialize an array to store subtypes for the selected food type. 
let chosenSubtype = "";
let subtypes = "";

//Switch case 
switch (selectedFood) {
  case "Pizza":
    chosenSubtype = prompt(`Select a type of pizza: 
  1 - Margerita
  2 - Fungi
  3 - Capriciossa
  Please enter the number of your choice:`);
    subtypes = ["Margerita", "Fungi", "Capriciossa"];
    break;

  case "Pasta":
    chosenSubtype = prompt(`Select a type of pasta:
    1 - Bolognese
    2 - Carbonara 
    3 - Marinara
    Please enter the number of your choice:`)
    subtypes = ["Bolognese", "Carbonara", "Marinara"];
    break;

  case "Salad":
    chosenSubtype = prompt(`Select a type of salad:
      1 - Ceasar
      2 - Greek
      3 - Shrimp
      Please enter the number of your choice:`)
    subtypes = ["Ceasar", "Greek", "Shrimp"];
    break;
  default:
    //If an invalid subtype is chosen, show an error message.
    alert("Invalid choice.");
    process.exit(1);
}

//Display the chosen subtype.
alert(`You have chosen ${chosenSubtype}!`);

// Step 4 - Age
// 
const customerAge = prompt(`Select the age of the customer:
1 - Adult
2 - Child
Please enter the number of your choice:`);

alert(`Your order is a ${chosenSubtype} for a ${customerAge}
Order total = €20.00`);




// Step 5 - Order confirmation
// Your code goes here
