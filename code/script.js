// Start here

// Step 1 - Welcome and introduction
// Welcome message display
alert(
  `Welcome to Javascript Pizzeria. 
  Ready to Start? - Click 'OK' to begin.`
);
//alert(`Does the button ok always show up in alert?`) The answer is YES.

// Prompt the client to input their name 
const userName = prompt(`Please enter your name below:`);

// Greeting message including the client's name
alert(`Hi ${userName}! Please proceed to place an order. `)


// Step 2 - Food choice
// Prompt the client to choose a menu
const menuChoice = prompt(`Please select your menu:
1- Pizza
2- Pasta
3- Salad
Please enter the number of your choice:`)

//the prompt method displays the string message exactly like written in the js code (Upper/Lowercase, à la ligne)

//Create a variable storing the selected menu
let selectedMenu;

//Determine the selected menu accordingly to client's choice (string).
if (menuChoice === "1") {
  selectedMenu = "Pizza";
} else if (menuChoice === "2") {
  selectedMenu = "Pasta";
} else if (menuChoice === "3") {
  selectedMenu = "Salad"
} else {
  alert(`Invalid choice.  
  Please select a valid number between 1-3.`);
  process.exit(1);
}

//Display the selected menu
alert(`You have chosen ${selectedMenu}.`)

// Step 3 - Subtype choice
// Your code goes here

//Prompt the client to select a subtype of the previously selected food
let pizzaChoice;
let pastaChoice;
let saladChoice;

if (selectedMenu === "Pizza") {
  pizzaChoice = prompt(`Select a pizza:
    1- Margarita
    2- Vesuvio
    3- 4-cheese
    `)
} else if (selectedMenu === "Pasta") {
  pastaChoice = prompt(`Select a pasta dish:
      1- Pasta Bolognese
      2- Freshly-made tortellini
      3- Pasta Carbonara`)
} else if (selectedMenu === "Salad") {
  saladChoice = prompt(`Select a salad:
  1- Nicoise salad
  2- Caesar salad
  3- Goatcheese salad`)
} else {
  alert(`Invalid dish type.Please start over.`);
  process.exit(1);
}

//Determine the food choice subtype
let finalChoice;

if (selectedMenu === "Pizza") {

  if (pizzaChoice === "1") {
    finalChoice = " Margarita";
  } else if (pizzaChoice === "2") {
    finalChoice = " Vesuvio";
  } else if (pizzaChoice === "3") {
    finalChoice = " 4-cheese";
  } else {
    alert(`Invalid pizza choice.  Please start over.`)
    process.exit(1);
  }
} else if (selectedMenu === "Pasta") {

  if (pastaChoice === "1") {
    finalChoice = " Pasta Bolognese";
  } else if (pastaChoice === "2") {
    finalChoice = " Freshly-made tortellini";
  } else if (pastaChoice === "3") {
    finalChoice = " Pasta Carbonara";
  } else {
    alert(`Invalid pasta choice.  Please start over.`)
    process.exit(1);
  }
} else if (selectedMenu === "Salad") {

  if (saladChoice === "1") {
    finalChoice = " Nicoise salad";
  } else if (saladChoice === "2") {
    finalChoice = " Caesar salad";
  } else if (saladChoice === "3") {
    finalChoice = " Goatcheese salad";
  } else {
    alert(`Invalid salad choice.  Please start over.`)
    process.exit(1);
  }
}
else {
  alert(`Invalid dish type.Please start over.`);
  process.exit(1);
}

// Display the selected food choice subtype
alert(`Great ${userName}!  You have chosen ${finalChoice}!`)


// Step 4 - Age
// Your code goes here

// Prompt the client to enter their age:
const userAge = prompt(`Please enter your age (years):`)

// Determine the cost of the selected dish according to the client's age
let costFood = (userAge >= 12) ? "15" : "9";

// Determine the word choice in confirmation message display
let costAge = (costFood === "15") ? "adult" : "child";

//Display the selected dish and the associated cost
alert(`One ${costAge} ${finalChoice} will be prepared for you.  That will be ${costFood} euros.`)

//Prompt the client to confirm their order
let confirmation = prompt(`Are you sure this is what you want to order?
Enter a number to confirm:
1- Yes
2- No `);

// Step 5 - Order confirmation
// Your code goes here
//Determine the client's confirmation

if (confirmation === "1") {
  alert(`Thank you ${userName} for placing your order!  Please wait while your food is being prepared (approx. 20min).  Hope to see you again!`)
} else if (confirmation === "2") {
  alert(`No worries ${userName}!  Come back anytime to try our menu!`)
} else {
  alert(`Invalid choice.  Please choose between 1 or 2.`)
}






