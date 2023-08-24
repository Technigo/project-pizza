// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);
// Ask the user for their name and store the input in a variable
const userName = prompt(`Please enter your name:`);

// Display a greeting using the user's name
if (userName) {
  alert(`Hello, ${userName} ! Welcome to our Javascript Pizzeria. 🍕`);
} else {
  alert(`No name entered.☹️`);
};
// Step 2 - Food choice
const foodChoice = prompt(`What food would you like to order? 
 Enter a number:
 1 - Pizza
 2 - Pasta
 3 - Salad`);

let foodType;

if (foodChoice === "1") {
  foodType = "Pizza";
  alert(`You chose  pizza.`);
} else if (foodChoice === "2") {
  foodType = "Pasta";
  alert(`You chose  pasta.`);
} else if (foodChoice === "3") {
  foodType = "Salad";
  alert(`You chose salad.`);
} else {
  alert("Invalid choice. Please select a valid option.");
};


// Step 3 - Subtype choice
// Your code goes here

let pizzaType;
let pastaType;
let saladType;

if (foodType === "Pizza") {
  pizzaType= prompt(`Choose a type of Pizza
  1 - Margherita
  2 - Pepperoni
  3 - Veggie `);

  if (pizzaType === "1") {
        alert(`You chose Margherita pizza.`);
      } else if (pizzaType === "2") {
        alert(`You chose Pepperoni pizza.`);
      } else if (pizzaType === "3") {
        alert(`You chose Vegetarian pizza.`);
      } else {
        alert(`Invalid pizza type selection.`);
      }
} else if (foodType === "Pasta") {
  pastaType = prompt(`Choose a type of Pasta
  1 - Spaghetti
  2 - Penne
  3 - Alfredo`);
  if (pastaType === "1") {
        alert(`You chose Spaghetti.`);
      } else if (pastaType === "2") {
        alert(`You chose Fettuccine Alfredo.`);
      } else if (pastaType === "3") {
        alert(`You chose Penne Arrabbiata.`);
      } else {
        alert(`Invalid pasta type selection.`);
      }
} else if (foodType === "Salad") {
  saladType = prompt(`CHoose a type of Salad
  1 - Caesar
  2 - Greek
  3 - Garden`);
  if (saladType === "1") {
        alert(`You chose Caesar Salad.`);
      } else if (saladType === "2") {
        alert(`You chose Greek Salad.`);
      } else if (saladType === "3") {
        alert(`You chose Caprese Salad.`);
      } else {
        alert(`Invalid salad type selection.`);
      }
} else {
  alert("Something went wrong. Please try again.");
};



// if (foodChoice === "1") {
//   // Step 3 - Pizza subtype choice
//   alert(`You chose  pizza.`);
//   const pizzaType = prompt(`Choose a type of pizza:
//   1 - Margherita
//   2 - Pepperoni
//   3 - Vegetarian`);
  
//   if (pizzaType === "1") {
//     alert(`You chose Margherita pizza.`);
//   } else if (pizzaType === "2") {
//     alert(`You chose Pepperoni pizza.`);
//   } else if (pizzaType === "3") {
//     alert(`You chose Vegetarian pizza.`);
//   } else {
//     alert(`Invalid pizza type selection.`);
//   }
// } else if (foodName === "2") {
//   // Step 3 - Pasta subtype choice
//   alert(`You chose  pasta.`);
//   const pastaType = prompt(`Choose a type of pasta:
//   1 - Spaghetti
//   2 - Fettuccine Alfredo
//   3 - Penne Arrabbiata`);
  
//   if (pastaType === "1") {
//     alert(`You chose Spaghetti.`);
//   } else if (pastaType === "2") {
//     alert(`You chose Fettuccine Alfredo.`);
//   } else if (pastaType === "3") {
//     alert(`You chose Penne Arrabbiata.`);
//   } else {
//     alert(`Invalid pasta type selection.`);
//   }
// } else if (foodName === "3") {
//   // Step 3 - Salad subtype choice
//   alert(`You chose  salad.`);
//   const saladType = prompt(`Choose a type of salad:
//   1 - Caesar Salad
//   2 - Greek Salad
//   3 - Caprese Salad`);
  
//   if (saladType === "1") {
//     alert(`You chose Caesar Salad.`);
//   } else if (saladType === "2") {
//     alert(`You chose Greek Salad.`);
//   } else if (saladType === "3") {
//     alert(`You chose Caprese Salad.`);
//   } else {
//     alert(`Invalid salad type selection.`);
//   }
// } else {
//   alert(`You didn't make a valid food choice.`);
// }

// Step 4 - Age
// Your code goes here
// const ageChoice = prompt(`Who order? Write your age`)

// if (ageChoice >= 18) {
//   alert(`You  choose  paid 14 sek`)
// } else {
//   alert(`Sorry, you can't pay`)
// }

// Step 5 - Order confirmation
// Your code goes here
