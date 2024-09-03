// Step 1 - Welcome and introduction
alert("Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.");

// Ask for the user's name and store the answer in a variable
const userName = prompt("Please insert your name for the Pizzeria to remember your order :)");

// Greet the user with their name
alert("Hi, " + userName + "! Thanks for taking an order from our Javascript Pizzeria.");

// Declare variables for foodType and chosenSubtype globally


// Step 2 - activating the choosingFood function
choosingFood();

// Function to ask for food type
function QuestionFoodtype() {
  const foodChoice = prompt("Please let us know which type of dish you would like to order. Please write a number:\n1 - Pizza\n2 - Pasta \n3 - Salad");
  return parseInt(foodChoice);
}

//for the function to loop properly I have built 2 separate functions - one for the question, where the client orders the number from the menu and - second for the process of the answers, whether the client has inserted a correct menu number or not - thus looping the function
function choosingFood() {
  foodType = QuestionFoodtype();

  if (foodType === 1) {
    foodTypeName = "Pizza";
    alert("Great, thank you! You've chosen a Pizza!");
  } 
  else if (foodType === 2) {
    foodTypeName = "Pasta";
    alert("Great, thank you! You've chosen a Pasta!");
  } 
  else if (foodType === 3) {
    foodTypeName = "Salad";
    alert("Great, thank you! You've chosen a Salad!");
  } 
  else {
    alert("Unfortunately, we don't have that type of dish, please try again!");
    choosingFood();
    return;
  }

  QuestionSubFoodType(foodType);
}

//at this point of process, we know what type of menu item the client has chosen
//Step 3 - now asking the type of dish
function QuestionSubFoodType(foodType) {
  let subtype;

  if (foodType === 1) {
    subtype = prompt("What type of pizza would you like?\n1 - Margharita\n2 - Pepperoni\n3 - Hawaiian");
  } 
  else if (foodType === 2) {
    subtype = prompt("What type of pasta would you like?\n1 - Bolognese\n2 - Crema di pollo\n3 - Pesto");
  } 
  else if (foodType === 3) {
    subtype = prompt("What type of salad would you like?\n1 - Caesar\n2 - Greek\n3 - Mozzarella");
  } 

  //from this point, we now know everything the client has chosen from the menu - the food dish and the type of dish
  if (foodType === 1) {
    if (subtype === "1") {
      chosenSubtype = "Margharita";
    } 
    else if (subtype === "2") {
      chosenSubtype = "Pepperoni";
    } 
    else if (subtype === "3") {
      chosenSubtype = "Hawaiian";
    } 
    else {
      alert("Unfortunately, we do not have that item on the menu, try again.");
      QuestionSubFoodType(foodType);
      return;
    }
  } 
  else if (foodType === 2) {
    if (subtype === "1") {
      chosenSubtype = "Bolognese";
    } 
    else if (subtype === "2") {
      chosenSubtype = "Crema di pollo";
    } 
    else if (subtype === "3") {
      chosenSubtype = "Pesto";
    } 
    else {
      alert("Unfortunately, we do not have that item on the menu, try again.");
      QuestionSubFoodType(foodType);
      return;
    }
  } 
  else if (foodType === 3) {
    if (subtype === "1") {
      chosenSubtype = "Caesar";
    } 
    else if (subtype === "2") {
      chosenSubtype = "Greek";
    } 
    else if (subtype === "3") {
      chosenSubtype = "Mozzarella";
    } 
    else {
      alert("Unfortunately, we do not have that item on the menu, try again.");
      QuestionSubFoodType(foodType);
      return;
    }
  }
  
  alert("You have chosen " + chosenSubtype + ". Thank you, " + userName + "!");
}

//Now I have gotten to a point of where the client has made fully their order - final alert with the suborder and name
//Step 4 - now asking the client's age

let age = parseInt(prompt("Can you also tell us your age in numbers, so we know whether we can prepare the order for an adult or a child?"));

if (age <= 18) {
  confirmation = prompt("Thank you for the info! One child-size, " + foodTypeName + " " + chosenSubtype + " coming right up. That'll be €10. Are you sure you want to order this? \nPlease confirm: \nyes \nno");
} else {
  confirmation = prompt("Thank you for the info! One adult-size, " + foodTypeName + " " + chosenSubtype + " coming right up. That'll be €15. Are you sure you want to order this? \nPlease confirm: \nYes \nNo");
}

//Step 5 - the last stretch with the confirmation code
if (confirmation.toLowerCase() === "yes") {
  alert("Thank you for your order, my friend! That will take around 10 minutes.");
} else if (confirmation.toLowerCase() === "no") {
  alert("Alrighty! See you next time!");
}
