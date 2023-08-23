// Start here

// Step 1 - Welcome and introduction
// Your code goes here

// Welcome message for the user.
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

// A prompt asking the user for theit name.
let userName = prompt(`What's your name?`);


// Greeting which uses the user's entered name.
alert(
  `Hi ${userName}! Welcome to the Javascript Pizzeria!`
);

// Step 2 - Food choice
// Variable with the different food choices and a prompt asking the user to make a food choice.


//User gets to choose what type of food they want to eat.
let foodCategoryChoice = prompt(`What would you like to order today? Enter a number from these 3 choices:
1 - Pizza
2 - Pinsa
3 - Dessert Pizza`);

// Initialize a variable to store the selected food choice.

let selectedFoodCategory = "";

// If-statement to connect the user's food choice with the variable for the selected food type.
if (foodCategoryChoice === "1") {
  selectedFoodCategory = "Pizza";
} else if (foodCategoryChoice === "2") {
  selectedFoodCategory = "Pinsa";
} else if (foodCategoryChoice === "3") {
  selectedFoodCategory = "Dessert Pizza";
} else {
  alert("Invalid choice. Please enter a valid number.");
  // The process.exit(1) command is used to exit a Node.js program with a non-zero exit code.
  // It immediately ends the program's execution and indicates that something went wrong or an error occurred.
  process.exit(1);
}

// Message and confirmation to the user about their selected food.

alert(`You've chosen ${selectedFoodCategory}! What a great choice!`);

// Step 3 - Subtype choice

// One variable that stores which food the user chooses and one variable that stores which subtype of food the user chooses
 let foodSubType= "";
 let foodOption = "";


 // Switch statement with food (subtype) options related to the different categories of food. 
switch (selectedFoodCategory) {
  case "Pizza":
    foodSubType = prompt(`Select the pizza that you wanna order:
    1 - Pizza Margherita
    2 - Pizza Funghi 
    3 - Pizza Quattro formaggi
    Please enter a number from these 3 choices.`);
   foodOption = ["Pizza Margherita", "Pizza Funghi", "Pizza Quattro formaggi"];
    break;

  case "Pinsa":
    foodSubType = prompt(`Select the pinsa that you wanna order:
    1 - Romana Ricetta Originale
    2 - Pinsa with Zucchini, Ricotta, and Lemon
    3 - Classic Pinsa Romana
    Please enter a number from these 3 choices.`);
    foodOption = ["Romana Ricetta Originale", "Pinsa with Zucchini, Ricotta, and Lemon", "Classic Pinsa Romana"];
    break;
    
  case "Dessert Pizza":
    foodSubType = prompt(`Select the dessert pizza that you wanna order:
    1 - Cinnamon roll pizza
    2 - Berry Marscapone Pizza
    3 - Nutella and Strawberry pizza
    Please enter a number from these 3 choices.`);
    foodOption = ["Cinnamon roll pizza", "Berry Marscapone Pizza", "Nutella and Strawberry pizza"];
  break;
  default:
    // If an invalid option is chosen, show an error message and exit the program.
    alert("Invalid choice. Please enter a valid number.");
    process.exit(1);
}

//Gives a confirmation message to the suer based on the choice of food.

if (foodSubType === "1") {
  alert(`Awesome! You have chosen the ${foodOption[0]}.`);
} 
else if (foodSubType === "2") {
  alert(`Awesome! You have chosen the ${foodOption[1]}.`);
} 
else if (foodSubType === "3") {
  alert(`Awesome! You have chosen the ${foodOption[2]}.`);
}

// Step 4 - Age

// Input where the user adds their age
let userAgeInput = prompt(`Is this food for a child or an adult? Type your age:`);

// If- statement that connects they users age to the size and proce of chosen item. 
let priceFood  ="";
let userAgeCategory ="";
if (userAgeInput >= 15) {
  priceFood = "55 sek";
  userAgeCategory = "adult";
} else {
  priceFood = "35 sek";
  userAgeCategory = "child";
} 

// Prompt that will ask the user to confirm their choices.

 if (foodSubType === "1") {
 prompt (`You have chosen one ${userAgeCategory} size ${foodOption[0]}! That will be ${priceFood}. Are you sure you want to order this?
 1 - Yes
  2 - No
 `)
 }

else if (foodSubType === "2") {
prompt (`You have chosen one ${userAgeCategory} size ${foodOption[1]}! That will be ${priceFood}. Are you sure you want to order this?
1 - Yes
2 - No
`)
}

else if (foodSubType === "3") {
prompt (`You have chosen one ${userAgeCategory} ${foodOption[2]}! That will be ${priceFood}. Are you sure you want to order this?
1 - Yes
2 - No
`)
}

// Step 5 - Order confirmation
// Your code goes here
//

