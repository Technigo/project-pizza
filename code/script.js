// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

//Asks for the costumers name with a prompt
let yourName = prompt(`Please enter your name!`);

//Greets the costumer by name using alert
alert(`Hi ${yourName}, nice to see you! 👋🏼`);

// Step 2 - Food choice
//Promts the costumer to enter a number for prefered food
let foodChoice = prompt(
  `What do you like to eat today?

  1 - Pizza 🍕
  2 - Pasta 🍝
  3 - Salad 🥗

  Please enter the number of your choice. 👇🏼
  `
);

// Determine the chosen food type based on user input
let foodType;

if (foodChoice === "1") {
  foodType = "Pizza";
} else if (foodChoice === "2") {
  foodType = "Pasta";
} else if (foodChoice === "3") {
  foodType = "Salad";
} else {
  alert(
    `I'm afraid that's not an option. Please start again and select one of the options (1-3). ❌`
  );
  exit(1);
}

// Display a message to confirm the user's selection
if (foodType) {
  alert(`You chose ${foodType}. Great choice ${yourName}! 👍🏼`);
}

// Step 3 - Subtype choice
let foodSubtype;

if (foodType === "Pizza") {
  // Prompt the user to choose a pizza subtype
  let pizzaSubtype = prompt(
    `What type of pizza do you want? 🍕

    1 - Margherita
    2 - Capricciosa
    3 - Quattro Stagioni

    Please enter the number of your choice. 👇🏼
    `
  );

  // Determine the chosen pizza subtype based on user input
  if (pizzaSubtype === "1") {
    foodSubtype = "Margherita";
  } else if (pizzaSubtype === "2") {
    foodSubtype = "Capricciosa";
  } else if (pizzaSubtype === "3") {
    foodSubtype = "Quattro Stagioni";
  } else {
    alert(
      `I'm afraid that's not an option. Please start again and select one of the options (1-3). ❌`
    );
    exit(1);
  }
} else if (foodType === "Pasta") {
  // Prompt the user to choose a pasta subtype
  let pastaSubtype = prompt(
    `What type of pasta do you want? 🍝

    1 - Spaghetti Carbonara
    2 - Fettuccine Alfredo
    3 - Cheesy Tortellini

    Please enter the number of your choice. 👇🏼
    `
  );

  // Determine the chosen pasta subtype based on user input
  if (pastaSubtype === "1") {
    foodSubtype = "Spaghetti Carbonara";
  } else if (pastaSubtype === "2") {
    foodSubtype = "Fettuccine Alfredo";
  } else if (pastaSubtype === "3") {
    foodSubtype = "Cheesy Tortellini";
  } else {
    alert(
      `I'm afraid that's not an option. Please start again and select one of the options (1-3). ❌`
    );
    exit(1);
  }
} else if (foodType === "Salad") {
  // Prompt the user to choose a salad subtype
  let saladSubtype = prompt(
    `What type of salad do you want? 🥗

    1 - Caesar Salad
    2 - Greek Salad
    3 - Caprese Salad

    Please enter the number of your choice. 👇🏼
    `
  );

  // Determine the chosen salad subtype based on user input
  if (saladSubtype === "1") {
    foodSubtype = "Caesar Salad";
  } else if (saladSubtype === "2") {
    foodSubtype = "Greek Salad";
  } else if (saladSubtype === "3") {
    foodSubtype = "Caprese Salad";
  } else {
    alert(
      `I'm afraid that's not an option. Please start again and select one of the options (1-3). ❌`
    );
    exit(1);
  }
}

// Display a message to confirm the user's selection
if (foodSubtype) {
  alert(`You chose the delicious ${foodSubtype}! 👌🏼`);
}

// Step 4 - Age
//Prompt user to enter their age
let age = prompt(
  `Enter your age (so we know if your dish should be prepared in adult or child size):`
);

//If age is equal to or under 10 dish size and price should be for child.
let confirmation = "";
if (age <= 10) {
  confirmation = prompt(`Thank you ${yourName}!
  
  This is your order:
  1 x ${foodSubtype} (child size)
  Total price 15€

  Do you want to confirm you order? 
  1 - Yes 👍🏼
  2 - No 👎🏼
  `);

  //If age is above 10 dish size and price should be for adult.
} else if (age > 10) {
  confirmation = prompt(`Thank you ${yourName}!
  
  This is your order:
  1 x ${foodSubtype} (adult size)
  Total price 15€

  Do you want to confirm you order? 
  1 - Yes 👍🏼
  2 - No 👎🏼
  `);
} else {
  alert(
    `I'm afraid that's not an option. Please start again and select one of the options (1-2). ❌`
  );
}

// Step 5 - Order confirmation
// Determine if the order is confirmed or not based on user input
if (confirmation === "1") {
  alert(
    `Your order has been confirmed and we will start preparing your ${foodType} ✌🏼. Bon appétit!`
  );
} else if (confirmation === "2") {
  alert(
    `Maybe you decided on eating something else today. We just want to let you know that whenever you feel like eating a pizza, pasta or a really delicious sallad. You are welcome back! `
  );
} else {
  alert(
    `I'm afraid that's not an option. Please start again and select one of the options (1-2). ❌`
  );
}
