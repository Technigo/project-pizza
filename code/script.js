// Start here

// Step 1 - Welcome and introduction
// Your code goes here
const person = prompt("Please enter your name", "Harry Potter");

alert(`Hi ${person}`);

// Step 2 - Food choice

const food = prompt(
  "What type of food do you want ${person}? Enter a number: 1 - Pizza 2 - Pasta 3 - Salad",
  ""
);

const foodNumber = Number(food);

if (foodNumber >= 1 && foodNumber <= 3) {
  alert(`Great choice!`);
} else {
  alert(`Invalid input, please choose a number between 1-3`);
}

// Step 3 - Subtype choice

if (foodNumber === 1) {
  const pizza = prompt(
    `What type of pizza do you want? 1 - Margerita 2 - Capricciosa 3 - Hawaii`,
    ""
  );

  if (pizza === "1") {
    const pizzaType = "Margerita";
    alert(`${pizzaType} is a great choice!`);
  } else if (pizza === "2") {
    const pizzaType = "Capricciosa";
    alert(`${pizzaType} is a great choice!`);
  } else if (pizza === "3") {
    const pizzaType = "Hawaii";
    alert(`${pizzaType} is a great choice!`);
  } else {
    alert(`Invalid input, please choose a number between 1-3`);
  }
} else if (foodNumber === 2) {
  const pasta = prompt(
    `What type of pasta do you want? 1 - Pomodoro 2 - Carbonare 3 - Arrabiata`,
    ""
  );

  const pastaNumber = Number(pasta);

  if (pastaNumber >= 1 && pastaNumber <= 3) {
    alert(`Great choice!`);
  } else {
    alert(`Invalid input, please choose a number between 1-3`);
  }
} else if (foodNumber === 3) {
  const salad = prompt(
    `What type of salad do you want? 1 - Cucumner 2 - Tomato 3 - Carrot`,
    ""
  );
  const saladNumber = Number(salad);

  if (saladNumber >= 1 && saladNumber <= 3) {
    alert(`Great choice!`);
  } else {
    alert(`Invalid input, please choose a number between 1-3`);
  }
}

// Step 4 - Age
const age = prompt(`Is this food for a child or an adult? Type your age:`, "");

const ageString = () => {
  const ageNumber = Number(age);
  if (ageNumber <= 18) {
    return "child";
  } else if (ageNumber >= 18) {
    return "adult";
  } else {
    return alert(`Invalid Input, age is just a number!`);
  }
};

// const foodNames = () => {
//   // Pizzatypes
//   if (foodNumber === 1 && pizzaNumber === 1) {
//     return "Pizza Margarita";
//   }
//   if (foodNumber === 1 && pizzaNumber === 1) {
//     return "Pizza Capricciosa";
//   }
//   if (foodNumber === 1 && pizzaNumber === 1) {
//     return "Pizza Hawaii";
//   }
//   // pastatypes
//   if (foodNumber === 2 && pastaNumber === 1) {
//     return "Pasta Pomodoro";
//   }
//   if (foodNumber === 2 && pastaNumber === 2) {
//     return "Pasta Carbonara";
//   }
//   if (foodNumber === 1 && pastaNumber === 3) {
//     return "Pizza Arrabiata";
//   }
//   // saladtypes
//   if (foodNumber === 3 && saladNumber === 1) {
//     return "Cucumber Salad";
//   }
//   if (foodNumber === 3 && saladNumber === 2) {
//     return "Tomato Salad";
//   }
//   if (foodNumber === 3 && saladNumber === 2) {
//     return "Carrot Salad";
//   }
// };

// const foodResult = foodNames();
const ageResult = ageString();
// Step 5 - Order confirmation

const confirmation =
  prompt(`One ${foodNumber} ${ageResult} ordered! That'll be 150SEK. Do you want to proceed with the order? 
1 - Yes 
2 - No `);

if (confirmation === "1") {
  alert(`Thanks for your order!`);
} else {
  alert(`See you next time!`);
}
