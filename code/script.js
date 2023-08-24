// STEP 1 - Welcome and introduction
//Alertmessage: Welcome
//Promptmessage: Please enter name
//Alertmessage: Thank you + name
alert(
  `Welcome to our Mirelas Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let text;
let NAME = prompt("Please enter your full name");

alert(
  `Thank you ` + NAME + `! Now continue to your order.`
)
//STEP 1 END

// STEP 2 - Food choice
// Promptmessage: Asking the user to choose a meal out of a list of options:
const foodChoice = prompt(`Select your favourite meal!:
  1 - Pizza
  2 - Pasta
  3 - Salad
  Please enter the number of your choice:`);

// Connect the customer choice to the list and response messages (4 steps:)
//a. Initialize a variable to store the selected food.
let selectedChoice = "";

//b. Determine the selected food based on the user's choice.
if (foodChoice === "1") {
  selectedChoice = "Pizza";
} else if (foodChoice === "2") {
  selectedChoice = "Pasta";
} else if (foodChoice === "3") {
  selectedChoice = "Salad";
} else {
  //c. Invalid choice - Errormessage:
  alert("Invalid choice. Please select a valid number.");
  process.exit(1);
}
//d. Alertmessage: Confirm the selceted food option.
alert(`You've chosen ${selectedChoice}!`);
// STEP 2 END //



// STEP 3 - Subtype choice
// Depending on the previously chosen food type (Pizza, Pasta, Salad), the program will present the user with subtype options specific to that food type. 

let typeOfName = "";
let subType = "";

// Switch - Determine the selected subtype of food based on the user's choice.
//NOT SURE WHY IF ELSE IS USED ABOVE AND SWITCH HERE, BUT IT WORKS. tror switch gir vslg under valg
switch (selectedChoice) {
  case "Pizza":
    subType = prompt(`Select a Pizzatype:
    1 - Margharita
    2 - Pepperoni 
    3 - Hawaii
    Please enter the number of your choice:`);
    typeOfName = ["Margharita", "Pepperoni", "Hawaii"];
    break;
  case "Pasta":
    subType = prompt(`Select a Pasta type:
    1 - Carbonara
    2 - Mediterranian
    3 - Bolognese
    Please enter the number of your choice:`);
    typeOfName = ["Carbonara", "Mediterranian", "Bolognese"];
    break;
  case "Salad":
    subType = prompt(`Select a Salad:
    1 - Cesar
    2 - Greek 
    3 - Fruit
    Please enter the number of your choice:`);
    typeOfName = ["Cesar", "Greek", "Fruit"];
    break;
  default:
    // Invalid choice - Errormessage:
    // ERROR MESSAGE NOT SHOWING
    alert("Invalid choice.");
    process.exit(1);
}

// Alertmessage: Confirm the selceted subType option.
if (subType === "1") {
  alert(
    `Great Choice, You've chosen to order ${typeOfName[0]}!`
  );
} else if (subType === "2") {
  alert(
    `Great Choice, You've chosen to order ${typeOfName[1]}!`
  );
} else if (subType === "3") {
  alert(
    `Great Choice, You've chosen to order ${typeOfName[2]}!`
  );
}
//STEP 3 END



// STEP 4 - Age
// Promptmessage: Asking the user to type their age:

let Age = prompt("Please enter your age");