// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

/*Variable userName collecting & storing the answer from the prompt*/
const userName = prompt(`Please type your name`);

console.log("Username", userName);
//An alert saying Hi and whatever the userName is
alert(`Hi, ${userName}! 👋`);

// Step 2 - Food choice
/*Variable foodChoice collecting & storing the answer from the food menu-prompt*/
const foodChoice =
  prompt(`What type of food would you like to order? Enter a number:
 1 - Pizza 🍕
 2 - Pasta 🍝
 3 - Salad 🥗
 `);

//Testing to print it out
console.log("Food choice", foodChoice);

/*The variable selectedFood will get the value based on the user's input*/
let selectedFood = "";

if (foodChoice === "1") {
  selectedFood = "Pizza";
} else if (foodChoice === "2") {
  selectedFood = "Pasta";
} else if (foodChoice === "3") {
  selectedFood = "Salad";
} else {
  alert(
    "You typed an invalid choice, please start again and select an option between 1 and 3 😉"
  );
  exit(1);
}

alert(`You chose ${selectedFood}. Nice choice ${userName} 😋`);

//Testing to print it out
console.log("Selected Food", selectedFood);

// Step 3 - Subtype choice
/*We want to choose a subtype for the selected food type. Subtype options specific to that food type. Promt method to get user's input. Determine the chosen subtype & provide feedback with alert-method*/
let subtypeChoice = "";

if (selectedFood === "Pizza") {
  subtypeChoice = prompt(`What type of pizza would you like to order? 🍕 
    Enter a number:
  1 - Kebab Pizza
  2 - Hawaii Pizza
  3 - Vegetarian Pizza
  `);
} else if (selectedFood === "Pasta") {
  subtypeChoice = prompt(`What type of pasta would you like to order? 🍝 
    Enter a number:
  1 - Spaghetti Carbonara
  2 - Fettuccine Alfredo
  3 - Penne Arrabbiata`);
} else if (selectedFood === "Salad") {
  subtypeChoice = prompt(`What type of salad would you like to order? 🥗 
    Enter a number:
  1 - Caesar Salad
  2 - Greek Salad
  3 - Caprese Salad`);
}

//Testing to print it out
console.log("Subtype Choice", subtypeChoice);

let selectedSubtype = "";

if (selectedFood === "Pizza") {
  if (subtypeChoice === "1") {
    selectedSubtype = "Kebab Pizza";
  } else if (subtypeChoice === "2") {
    selectedSubtype = "Hawaii Pizza";
  } else if (subtypeChoice === "3") {
    selectedSubtype = "Vegetarian Pizza";
  } else {
    alert(`Invalid ${selectedFood} choice.`);
    exit(1);
  }
} else if (selectedFood === "Pasta") {
  if (subtypeChoice === "1") {
    selectedSubtype = "Spaghetti Carbonara";
  } else if (subtypeChoice === "2") {
    selectedSubtype = "Fettuccine Alfredo";
  } else if (subtypeChoice === "3") {
    selectedSubtype = "Penne Arrabbiata";
  } else {
    alert(`Invalid ${selectedFood} choice.`);
    exit(1);
  }
} else if (selectedFood === "Salad") {
  if (subtypeChoice === "1") {
    selectedSubtype = "Caesar Salad";
  } else if (subtypeChoice === "2") {
    selectedSubtype = "Greek salad";
  } else if (subtypeChoice === "3") {
    selectedSubtype = "Caprese Salad";
  } else {
    alert(`Invalid ${selectedFood} choice.`);
    exit(1);
  }
}

alert(`You have chosen ${selectedSubtype} 😋`);

//Testing to print it out
console.log("Selected Subtype", selectedSubtype);

// Step 4 - Age
/*Child or adult, alert displaying order message and associated cost. User's confirmation should be obtained using the prompt method. Adult age is above or equal to 18*/

const age = prompt(`Is this food for a child or an adult? Type your age:`);

console.log("age", age);

let orderMessage = "";

if (age < 18) {
  orderMessage = prompt(`Thank you ${userName}!
  This is your order: 
  One childsized ${selectedSubtype} will be prepared for you. That'll be 8 euros. Are you sure you want to order this?
  Enter a number to confirm: 
  1 - Yes
  2 - No `);
} else if (age >= 18) {
  orderMessage = prompt(`Thank you ${userName}! 
  This is your order: 
  1 adultsized ${selectedSubtype} will be prepared for you. That'll be 15 euros. Are you sure you want to order this?
  Enter a number to confirm: 
  1 - Yes
  2 - No `);
} else {
  alert(`Invalid age. Please type a number`);
  exit(1);
}

console.log("Order message", orderMessage);

// Step 5 - Order confirmation
/*If orderMessage is confirmed with "1", then a confirmation message, if not (with "2"), another message*/

if (orderMessage === "1") {
  alert(
    `Your order has been confirmed and we will start preparing your ${selectedSubtype} 👩‍🍳. See you soon! `
  );
} else if (orderMessage === "2") {
  alert(
    `Sorry to hear you didn't want to order from us. You are most welcome back whenever you feel like pizza, pasta or salad 🥰`
  );
} else {
  alert(
    `"You typed an invalid choice, please start again and select the option 1 or 2 😉`
  );
}
