// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

/*Variable userName collecting & storing the answer from the prompt*/
const userName = prompt(`Please type your name`);

console.log(userName);
//An alert saying Hi and whatever the userName is
alert(`Hi, ${userName}!`);

// Step 2 - Food choice
/*Variable foodChoice collecting & storing the answer from the food menu-prompt*/
const foodChoice =
  prompt(`What type of food would you like to order? Enter a number:
 1 - Pizza
 2 - Pasta
 3 - Salad 
 `);

console.log(foodChoice);
/*The variable selectedFood will get the value based on the user's input*/
let selectedFood = "";

if (foodChoice === "1") {
  selectedFood = "Pizza";
  alert(`You chose ${selectedFood}`);
} else if (foodChoice === "2") {
  selectedFood = "Pasta";
  alert(`You chose ${selectedFood}`);
} else if (foodChoice === "3") {
  selectedFood = "Salad";
  alert(`You chose ${selectedFood}`);
} else {
  alert(
    "Invalid choice, please start again and select an option between 1 and 3."
  );
  exit(1);
}

//Testing to print it out
console.log(selectedFood);

// Step 3 - Subtype choice
/*We want to choose a subtype for the selected food type. Subtype options specific to that food type. Promt method to get user's input. Determine the chosen subtype & provide feedback with alert-method*/
let subtypeChoice = "";

if (selectedFood === "Pizza") {
  subtypeChoice =
    prompt(`What type of pizza would you like to order? Enter a number:
  1 - Kebab
  2 - Hawaii
  3 - Vegetarian
  `);
} else if (selectedFood === "Pasta") {
  subtypeChoice =
    prompt(`What type of pasta would you like to order? Enter a number:
  1 - Spaghetti Carbonara
  2 - Fettuccine Alfredo
  3 - Penne Arrabbiata`);
} else if (selectedFood === "Salad") {
  subtypeChoice =
    prompt(`What type of salad would you like to order? Enter a number:
  1 - Caesar Salad
  2 - Greek Salad
  3 - Caprese Salad`);
} else {
  alert(
    `Invalid ${selectedFood} choice selected, please start again and select an option between 1 and 3.`
  );
  exit(1);
}

console.log(subtypeChoice);

let selectedSubtype = "";

if (selectedFood === "Pizza") {
  if (subtypeChoice === "1") {
    selectedSubtype = "Kebab";
    alert(`You have chosen ${selectedSubtype}`);
  } else if (subtypeChoice === "2") {
    selectedSubtype = "Hawaii";
    alert(`You have chosen ${selectedSubtype}`);
  } else if (subtypeChoice === "3") {
    selectedSubtype = "Vegetarian";
    alert(`You have chosen ${selectedSubtype}`);
  } else {
    alert(
      "Invalid choice, please start again and select an option between 1 and 3."
    );
    exit(1);
  }
} else if (selectedFood === "Pasta") {
  if (subtypeChoice === "1") {
    selectedSubtype = "Spaghetti Carbonara";
    alert(`You have chosen ${selectedSubtype}`);
  } else if (subtypeChoice === "2") {
    selectedSubtype = "Fettuccine Alfredo";
    alert(`You have chosen ${selectedSubtype}`);
  } else if (subtypeChoice === "3") {
    selectedSubtype = "Penne Arrabbiata";
    alert(`You have chosen ${selectedSubtype}`);
  } else {
    alert(
      "Invalid choice, please start again and select an option between 1 and 3."
    );
    exit(1);
  }
} else if (selectedFood === "Salad") {
  if (subtypeChoice === "1") {
    selectedSubtype = "Caesar Salad";
    alert(`You have chosen ${selectedSubtype}`);
  } else if (subtypeChoice === "2") {
    selectedSubtype = "Greek salad";
    alert(`You have chosen ${selectedSubtype}`);
  } else if (subtypeChoice === "3") {
    selectedSubtype = "Caprese Salad";
    alert(`You have chosen ${selectedSubtype}`);
  } else {
    alert(
      "Invalid choice, please start again and select an option between 1 and 3."
    );
    exit(1);
  }
}

console.log(selectedSubtype);

// Step 4 - Age
/*In this iteration, the program should prompt the user to specify if the food is intended for a child or an adult. The prompt() method should be used to present the question and get the user's input. Based on the user's answer, an appropriate order message should be constructed. The program should use the alert() method to display the order message and the associated cost. The user's confirmation should be obtained using the prompt() method.

Child or adult, alert displaying order message and associated cost. User's confirmation should be obtained using the prompt method. Adult age is above or equal to*/

const age = prompt(`Is this food for a child or an adult? Type your age:`);

let orderMessage = "";
let cost = 0;

if (age < 18) {
  cost = 7;
  orderMessage = `One adult sized Hawaii will be prepared for you. That'll be ${cost} euros. Are you sure you want to order this?`;
}

// Step 5 - Order confirmation
// Your code goes here
