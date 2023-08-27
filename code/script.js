// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

//prompt the customer to enter their name
const customerName = prompt("Please enter your name:");

// Display a greeting for the customer
alert(`It's nice to have you, ${customerName}! Hope you're hungry!`);

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
let pizzaSubtypes = "";
let pastaSubtypes = "";
let saladSubtypes = "";
let finalChoice = "";

//Switch case 
switch (selectedFood) {
  case "Pizza":
    chosenSubtype = prompt(`Choose from our pizza menu: 
    1 - Margerita
    2 - Fungi
    3 - Capriciossa
    Please enter the number of your choice:`);
    pizzaSubtypes = ["Margerita", "Fungi", "Capriciossa"];
    if (chosenSubtype === "1") {
      alert(`You have chosen ${pizzaSubtypes[0]}!`);
    } else if (chosenSubtype === "2") {
      alert(`You have chosen ${pizzaSubtypes[1]}!`);
    } else if (chosenSubtype === "3") {
      alert(`You have chosen ${pizzaSubtypes[2]}!`);
    }
    break;

  case "Pasta":
    chosenSubtype = prompt(`Choose from our pasta menu:
    1 - Bolognese
    2 - Carbonara 
    3 - Marinara
    Please enter the number of your choice:`)
    pastaSubtypes = ["Bolognese", "Carbonara", "Marinara"];
    if (chosenSubtype === "1") {
      alert(`You have chosen ${pastaSubtypes[0]}!`);
    } else if (chosenSubtype === "2") {
      alert(`You have chosen ${pastaSubtypes[1]}!`);
    } else if (chosenSubtype === "3") {
      alert(`You have chosen ${pastaSubtypes[2]}!`);
    }
    break;

  case "Salad":
    chosenSubtype = prompt(`Choose from our salad menu:
      1 - Ceasar
      2 - Greek
      3 - Shrimp
      Please enter the number of your choice:`)
    saladSubtypes = ["Ceasar", "Greek", "Shrimp"];
    if (chosenSubtype === "1") {
      alert(`You have chosen ${saladSubtypes[0]}!`);
    } else if (chosenSubtype === "2") {
      alert(`You have chosen ${saladSubtypes[1]}!`);
    } else if (chosenSubtype === "3") {
      alert(`You have chosen ${saladSubtypes[2]}!`);
    }
    break;
  default:
    //If an invalid subtype is chosen, show an error message.
    alert("Invalid choice.");
    process.exit(1);
}

// Step 4 - Age
// 

let customerAge = "";

customerAge = prompt(`Select the age of the customer:
1 - Adult
2 - Child
Please enter the number of your choice:`);

if (customerAge === "1") {
  alert(`Your order is an adult sized ${chosenSubtype} and your order total is $20.00`);
} else if (customerAge === "2") {
  alert(`Your order is a child sized ${chosenSubtype} and your order total is $20.00`);
}

// Step 5 - Order confirmation
// Your code goes here
