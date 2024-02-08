// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

//Asks for the costumers name with a prompt
let yourName = prompt(`Please enter your name!`);

//Greets the costumer by name using alert
alert(`Hi ${yourName}, nice to see you! 👋🏼`);

// Step 2 - Food choice
//Prompts the customer to enter a number for preferred food
let foodChoice = prompt(
  `What do you like to eat today?
  
    1 - Pizza 🍕
    2 - Pasta 🍝
    3 - Salad 🥗
  
    Please enter the number of your choice. 👇🏼
    `
);

// Determine the chosen food type based on user input using switch statement
let foodType;
switch (foodChoice) {
  case "1":
    foodType = "Pizza";
    break;
  case "2":
    foodType = "Pasta";
    break;
  case "3":
    foodType = "Salad";
    break;
  default:
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

switch (foodType) {
  case "Pizza":
    // Prompt the user to choose a pizza subtype
    let pizzaSubtype = prompt(
      `What type of pizza do you want? 🍕
  
        1 - Margherita
        2 - Capricciosa
        3 - Quattro Stagioni
  
        Please enter the number of your choice. 👇🏼
        `
    );
    switch (pizzaSubtype) {
      case "1":
        foodSubtype = "Margherita";
        break;
      case "2":
        foodSubtype = "Capricciosa";
        break;
      case "3":
        foodSubtype = "Quattro Stagioni";
        break;
      default:
        alert(
          `I'm afraid that's not an option. Please start again and select one of the options (1-3). ❌`
        );
        exit(1);
    }
    break;
  case "Pasta":
    // Prompt the user to choose a pasta subtype
    let pastaSubtype = prompt(
      `What type of pasta do you want? 🍝
  
        1 - Spaghetti Carbonara
        2 - Fettuccine Alfredo
        3 - Cheesy Tortellini
  
        Please enter the number of your choice. 👇🏼
        `
    );
    switch (pastaSubtype) {
      case "1":
        foodSubtype = "Spaghetti Carbonara";
        break;
      case "2":
        foodSubtype = "Fettuccine Alfredo";
        break;
      case "3":
        foodSubtype = "Cheesy Tortellini";
        break;
      default:
        alert(
          `I'm afraid that's not an option. Please start again and select one of the options (1-3). ❌`
        );
        exit(1);
    }
    break;
  case "Salad":
    // Prompt the user to choose a salad subtype
    let saladSubtype = prompt(
      `What type of salad do you want? 🥗
  
        1 - Caesar Salad
        2 - Greek Salad
        3 - Caprese Salad
  
        Please enter the number of your choice. 👇🏼
        `
    );
    switch (saladSubtype) {
      case "1":
        foodSubtype = "Caesar Salad";
        break;
      case "2":
        foodSubtype = "Greek Salad";
        break;
      case "3":
        foodSubtype = "Caprese Salad";
        break;
      default:
        alert(
          `I'm afraid that's not an option. Please start again and select one of the options (1-3). ❌`
        );
        exit(1);
    }
    break;
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

if (isNaN(age)) {
  alert(`You have to enter a valid age (a number). Please start over.`);
  exit(1);
}

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
} else if (confirmation === "2" || confirmation === null) {
  alert(
    `Maybe you decided on eating something else today. We just want to let you know that whenever you feel like eating a pizza, pasta or a really delicious salad. You are welcome back! `
  );
} else {
  alert(
    `I'm afraid that's not an option. Please start again and select one of the options (1-2). ❌`
  );
}
