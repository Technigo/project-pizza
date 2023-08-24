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
//1. Initialize a variable to store the selected food.
let selectedChoice = "";

//2. Determine the selected food based on the user's choice.
if (foodChoice === "1") {
  selectedChoice = "Pizza";
} else if (foodChoice === "2") {
  selectedChoice = "Pasta";
} else if (foodChoice === "3") {
  selectedChoice = "Salad";
} else {
  //3. Invalid choice - Errormessage:
  alert("Invalid choice. Please select a valid number.");
  process.exit(1);
}
//4. Alertmessage: Confirm the selceted food option.
alert(`You've chosen ${selectedChoice}!`);
// STEP 2 END //
