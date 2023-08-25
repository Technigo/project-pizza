// Start here

// Step 1 - Welcome and introduction

// Welcome message for the user.
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

// A prompt asking the user for their name.
let userName = prompt(`What's your name?`);


// Greeting which uses the user's entered name.
alert(
  `Hi ${userName}! Welcome to the Javascript Pizzeria!`
);

// Step 2 - Food choice
// Variable with the different food choices and a prompt asking the user to make a food choice.

let foodCategory = "";  //pizza, pinsa, dessert
  foodCategory = prompt(`What would you like to order today? 
  Enter a number from these 3 categories:
1 - Pizza
2 - Pinsa
3 - Dessert Pizza`);

// Initialize a variable to store the selected food choice.

let selectedFoodCategory = "";

// If-statement to connect the user's food choice with the variable for the selected food type.
if (foodCategory === "1") {
selectedFoodCategory = "Pizza";
} else if (foodCategory === "2") {
selectedFoodCategory = "Pinsa";
} else if (foodCategory === "3") {
selectedFoodCategory = "Dessert Pizza";
} else {
alert("Invalid choice. Please enter a valid number.");
// The process.exit(1) command is used to exit a Node.js program with a non-zero exit code.
// It immediately ends the program's execution and indicates that something went wrong or an error occurred.
process.exit(1);
}


// Message and confirmation to the user about their selected food.

alert(`You've chosen ${selectedFoodCategory}! What a great choice!`);

// User chooses which dish they wanna order from the different categories.

let foodSubType ="";
let foodOption ="";

switch (selectedFoodCategory) {
  case "Pizza":
      foodSubType = prompt(`Select the pizza that you wanna order:
      1 - Pizza Margherita
      2 - Pizza Funghi 
      3 - Pizza Quattro formaggi
      Please enter a number from these 3 choices.`);
      foodOption = ["Pizza Margherita", "Pizza Funghi", "Pizza Quattro formaggi"],  // Pizza choices
      foodPrice =[
      ["70", "80", "75"],   // Price for adult size, sek
      ["40", "45", "42"],   //Price for child size, sek
      ];
      break;

   case "Pinsa":
      foodSubType = prompt(`Select the pinsa that you wanna order:
      1 - Romana Ricetta Originale
      2 - Pinsa with Zucchini, Ricotta, and Lemon
      3 - Classic Pinsa Romana
      Please enter a number from these 3 choices.`);
      foodOption = ["Romana Ricetta Originale", "Pinsa with Zucchini, Ricotta, and Lemon", "Classic Pinsa Romana"],  //Pinsa choices
      foodPrice = [
      ["60", "70", "65"],   // Price for adult size, sek
      ["35", "40", "38"],   //Price for child size, sek
      ];
      break;

  case "Dessert Pizza":
      foodSubType = prompt(`Select the dessert pizza that you wanna order:
      1 - Cinnamon roll Pizza
      2 - Berry Marscapone Pizza
      3 - Nutella and Strawberry Pizza
      Please enter a number from these 3 choices.`);
      foodOption = ["Cinnamon roll Pizza", "Berry Marscapone Pizza", "Nutella and Strawberry Pizza"], // Dessert choices
      foodPrice = [
      ["65", "70", "60"],   // Price for adult size, sek
      ["38", "40", "35"],   //Price for child size, sek
      ];
      break;
      
      default:                 // If an invalid option is chosen, show an error message and exit the program.       
      alert("Invalid choice. Please enter a valid number.");   
      process.exit(1);
}

// Step 3 - Subtype choice

// One variable that stores which food the user chooses and one variable that stores which subtype of food the user chooses
//Gives a confirmation message to the user based on the choice of food.

if (foodSubType === "1") {
  alert(`Awesome! You have chosen the ${foodOption[0]}.`);
} 
else if (foodSubType === "2") {
  alert(`Awesome! You have chosen the ${foodOption[1]}.`);
} 
else if (foodSubType === "3") {
  alert(`Awesome! You have chosen the ${foodOption[2]}.`);
}
else {
  alert("Invalid choice. Please enter a valid number.");
  process.exit(1);
}

// Step 4 - Age
// Input where the user adds their age
let userAgeInput = prompt(`Is this food for a child or an adult? Type your age:`);
// If- statement that connects they users age to the size and proce of chosen item. 
let userAgeCategory ="";
if (userAgeInput >= 15) {
  userAgeCategory = "adult";
} else if (userAgeInput < 15 && userAgeInput > 0 ) {
  userAgeCategory = "child";
} 
else {
  alert("Invalid choice. Please enter a valid number.");
  process.exit(1);
}

// Prompt that will ask the user to confirm their choices. Conncts food order with price depending on age.
let userConfirmation ="";

if (foodSubType === "1" && userAgeCategory === "adult")  {
  userConfirmation = prompt (`You have chosen one ${userAgeCategory} size ${foodOption[0]}! That will be ${foodPrice[0][0]} kr. Are you sure you want to order this?
  1 - Yes
  2 - No`)
 } else if (foodSubType === "2" && userAgeCategory === "adult") {
  userConfirmation = prompt (`You have chosen one ${userAgeCategory} size ${foodOption[1]}! That will be ${foodPrice[0][1]} kr. Are you sure you want to order this?
  1 - Yes
  2 - No`)
} else if (foodSubType === "3" && userAgeCategory === "adult") {
  userConfirmation = prompt (`You have chosen one ${userAgeCategory} size ${foodOption[2]}! That will be ${foodPrice[0][2]} kr. Are you sure you want to order this?
1 - Yes
2 - No
`)
} else if (foodSubType === "1" && userAgeCategory === "child")  {
  userConfirmation = prompt (`You have chosen one ${userAgeCategory} size ${foodOption[0]}! That will be ${foodPrice[1][0]} kr. Are you sure you want to order this?
  1 - Yes
  2 - No`)
 } else if (foodSubType === "2" && userAgeCategory === "child") {
  userConfirmation = prompt (`You have chosen one ${userAgeCategory} size ${foodOption[1]}! That will be ${foodPrice[1][1]} kr. Are you sure you want to order this?
  1 - Yes
  2 - No`)
} else {
  userConfirmation = prompt (`You have chosen one ${userAgeCategory} size ${foodOption[2]}! That will be ${foodPrice[1][2]} kr. Are you sure you want to order this?
1 - Yes
2 - No
`)
}

// Step 5 - Order confirmation

//  Confirmation messages for the user.
if (userConfirmation === "1"){
  alert (`Thank you for your order! Your delicious meal will be prepared. See you soon!`);
}
else if (userConfirmation === "2") {
  alert(`No problem! Come back soon again!.`);
} else {
  alert("Invalid choice. Please enter a valid number.");
  process.exit(1);
} 
//