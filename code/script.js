// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

const firstName = prompt(`What's your name?`);
alert(`Hello ${firstName}! 👋`);
console.log(`Hello ${firstName}! 👋`);

// Step 2 - Food choice
// Your code goes here

const foodChoice = prompt(
  `What are you craving today?
  1 - Pizza 🍕
  2 - Pasta 🍝
  3 - Salad 🥗
  Please enter the number of your choice`
);

console.log(foodChoice);

if (foodChoice === "1") {
  alert("You chose pizza!");
} else if (foodChoice === "2") {
  alert("You chose pasta!");
} else if (foodChoice === "3") {
  alert("You chose salad!");
} else {
  alert("Invalid choice, please start again and select an option. Bye 👋");
  exit(1);
}

// Step 3 - Subtype choice
// Your code goes here

if (foodChoice === "1") {
  let pizzaType = prompt(`What kind of pizza would you like?
  1 - Margherita
  2 - Salame Piccante
  3 - Verdure
  Please enter the number of your choice`);
  if (pizzaType === "1") {
    alert("You chose Pizza Margherita!");
  } else if (pizzaType === "2") {
    alert("You chose Pizza Salame Piccante!");
  } else if (pizzaType === "3") {
    alert("You chose Pizza Verdure!");
  } else {
    alert("Invalid choice, please start again and select an option. Bye 👋");
    exit(1);
  }
} else if (foodChoice === "2") {
  let pastaType = prompt(`What kind of pasta would you like?
  1 - Spaghetti Bolognese
  2 - Fettucine Alfredo
  3 - Pasta Arrabbiata
  Please enter the number of your choice`);
  if (pastaType === "1") {
    alert("You chose Spaghetti Bolognese!");
  } else if (pastaType === "2") {
    alert("You chose Fettucine Alfredo!");
  } else if (pastaType === "3") {
    alert("You chose Pasta Arrabiata!");
  } else {
    alert("Invalid choice, please start again and select an option. Bye 👋");
    exit(1);
  }
} else if (foodChoice === "3") {
  let saladType = prompt(`What kind of salad would you like?
  1 - Insalata Caprese
  2 - Salata Panzanella
  3 - Insalata di Polpo
  Please enter the number of your choice`);
  if (saladType === "1") {
    alert("You chose Insalata Caprese!");
  } else if (saladType === "2") {
    alert("You chose Salata Panzanella!");
  } else if (saladType === "3") {
    alert("You chose Insalata di Polpo!");
  } else {
    alert("Invalid choice, please start again and select an option. Bye 👋");
  }
}

// switch (foodChoice) {
//   case "Pizza":
//   subtype = prompt(`What kind of pizza would you like?
//   1 - Margerita
//   2 - Peperoni
//   3 - Verdura
//   Please enter the number of your choice`);
//   subtypeName =
// }

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
