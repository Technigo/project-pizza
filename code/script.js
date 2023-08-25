// Start here

// Step 1 - Welcome and introduction
alert(`Welcome to The Aussie Pizza House! Ready to Start? - Click 'OK' to begin.`);

// Get user's name
const userName = prompt("What is your name?: ");
alert(`Hi, ${userName}! Hungry? We are glad you are here. 
Follow the prompts to order your food.`);

// Step 2 - Food choice
let foodChoiceNum = 0;
let choiceFood = "Pizza";
do {
  //Present menu options (Pizza, Pasta, Salad)
  foodChoiceNum = prompt("What would you like to eat?\nPlease type 1,2 or 3:\n(1) Pizza\n(2) Pasta\n(3) Salad");
  // I found the \n for new line option before our Tuesday lesson
  if (foodChoiceNum == 1) {
    alert('You have choosen Pizza!');
    choiceFood = "Pizza";
  } else if (foodChoiceNum == 2) {
    alert('You have choosen Pasta!');
    choiceFood = "Pasta";
  } else if (foodChoiceNum == 3) {
    alert('You have choosen Salad!');
    choiceFood = "Salad";
  } else {
    alert('Your choice is not available, Please try again');
  }
}
while (foodChoiceNum >= 4); //do...while loop if user does not enter a valid option (1,2 or 3) they are asked again. this only checks for numbers, if they type a word it doesnt work and goes to pizza. I don't know how to fix this

// // Step 3 - Subtype choice
let subtypeChoiceNum = 1;
let subtypeChoiceFood = []; //allocate an empty array using []

// User selects their options based on Pizza, Pasta or Salad.
do {
  switch (choiceFood) {
    //Pizza choices
    case "Pizza":
      subtypeChoiceNum = prompt(`Select a Pizza type from our delicious menu below, by entering the number of your choice:
    1 - Margherita 
    2 - Supreme 
    3 - Vegorama
    4 - Ham and Pineapple`);
      subtypeChoiceFood = ["Margherita", "Supreme", "Vegorama", "Ham and Pineapple"];
      break;
    //Pasta choices
    case "Pasta":
      subtypeChoiceNum = prompt(`Select a Pasta type from our delicious menu below, by entering the number of your choice:
    1 - Spaghetti Aglio
    2 - Fettuccine Carbonara
    3 - Penne Pesto
    4 - Vegetarian lasagna`);
      subtypeChoiceFood = ["Spaghetti Aglio", "Fettuccine Carbonara", "Penne Pesto", "Vegetarian lasagna"];
      break;
    //Salad choices
    case "Salad":
      subtypeChoiceNum = prompt(`Select a Salad from our delicious menu below, by entering the number of your choice:
    1 - Garden Salad
    2 - Greek Salad 
    3 - Caprese Salad
    4 - Caesar Salad`);
      subtypeChoiceFood = ["Garden Salad", "Greek Salad", "Caprese Salad", "Caesar Salad"];
      break;
    default: //i don't think I need this? If an invalid option is chosen, show an error message and exit the program. //alert("Invalid choice."); //process.exit(1);
  }
}
while (subtypeChoiceNum >= 5); //do...while loop if user does not enter a valid option (1,2 or 3)

alert(`Great Choice, You chose Number ${subtypeChoiceNum} - ${subtypeChoiceFood[subtypeChoiceNum - 1]}`);

// Step 4 - Age
let userAgeAlert = "Adult"
const userAgeNum = prompt("So that we can prepare the correct size. Please tell us your age?")
if (userAgeNum >= 18) {
  alert("You are an adult. We will prepare you an adult size portion")
  userAgeAlert = "Adult"
} else {
  alert("You are a child. We will prepare you an child size portion")
  userAgeAlert = "Child"
}

//I want to write code for the above prompt to verify that the user enters a number.

// Step 5 - Order confirmation
let userConfirm = "no";
userConfirm = prompt(`You have ordered a ${userAgeAlert} portion of the ${choiceFood} - ${subtypeChoiceFood[subtypeChoiceNum - 1]}
Is your order correct? Please type YES to confirm your order, or NO to cancel`);
if (userConfirm === "yes") {
  alert("Thank you, your order is confirmed and will be prepared ASAP. Thank you for visiting The Aussie Pizza House!");
} else {
  alert("Your order has been cancelled. We hope to welcome you back again soon");
}

