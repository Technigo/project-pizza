// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

const firstName = prompt(`What's your name?`);
alert(`Hello ${firstName}! 👋
Let's get started with your order.`);
console.log(`Hello ${firstName}! 👋`);

// Step 2 - Food choice
// Your code goes here

const foodCategory = parseInt(
  prompt(
    `What are you craving today?
  1 - Pizza 🍕
  2 - Pasta 🍝
  3 - Salad 🥗
  Please enter the number of your choice`
  )
);

let categoryName;

switch (foodCategory) {
  case 1:
    categoryName = "Pizza";
    break;
  case 2:
    categoryName = "Pasta";
    break;
  case 3:
    categoryName = "Salad";
    break;
  default:
    alert(
      "Mamma Mia! This number is not in our menu. Please start again and select a valid option. Arrivederci! 👋"
    );
    exit(1);
}
alert(`You selected ${categoryName}!`);

console.log("Food Category", foodCategory, categoryName);

// Step 3 - Subtype choice
// Your code goes here

let foodName;

switch (foodCategory) {
  case 1:
    const pizzaType = parseInt(
      prompt(`What kind of pizza would you like?
    1 - Pizza Margherita
    2 - Salame Piccante
    3 - Pizza Verdure
    Please enter the number of your choice`)
    );
    switch (pizzaType) {
      case 1:
        foodName = "Pizza Margherita";
        break;
      case 2:
        foodName = "Salame Piccante";
        break;
      case 3:
        foodName = "Pizza Verdure";
        break;
      default:
        alert(
          "Mamma Mia! This number is not in our menu. Please start again and select a valid option. Arrivederci! 👋"
        );
        exit(1);
    }
  case 2:
    const pastaType = parseInt(
      prompt(`What kind of pasta would you like?
  1 - Spaghetti Bolognese
  2 - Fettucine Alfredo
  3 - Pasta Arrabbiata
  Please enter the number of your choice`)
    );
    switch (pastaType) {
      case 1:
        foodName = "Spaghetti Bolognese";
        break;
      case 2:
        foodName = "Fettucine Alfredo";
        break;
      case 3:
        foodName = "Pasta Arrabiata";
        break;
      default:
        alert(
          "Mamma Mia! This number is not in our menu. Please start again and select a valid option. Arrivederci! 👋"
        );
        exit(1);
    }
  case 3:
    const saladType = parseInt(
      prompt(`What kind of salad would you like?
    1 - Insalata Caprese
    2 - Salata Panzanella
    3 - Insalata di Polpo
    Please enter the number of your choice`)
    );
    switch (saladType) {
      case 1:
        foodName = "Insalata Caprese";
        break;
      case 2:
        foodName = "Salata Panzanella";
        break;
      case 3:
        foodName = "Insalata di Polpa";
        break;
      default:
        alert(
          "Mamma Mia! This number is not in our menu. Please start again and select a valid option. Arrivederci! 👋"
        );
        exit(1);
    }
}
alert(`You selected ${foodName}!`);

// Step 4 - Age
// Your code goes here

const age = prompt(`Is the meal intended for a child or an adult?
Please enter your age`);
if (age <= 12) {
  alert(`A child portion of ${foodName}, that'll be 10 €.`);
} else {
  alert(`An adult portion of ${foodName}, that'll be 15 €.`);
}

const confirmation = parseInt(
  prompt(`Do you want to confirm this order?
1 - Yes
2 - No 
Please enter a number`)
);
if (confirmation === 1) {
  console.log("Order confirmed");
} else if (confirmation === 2) {
  console.log("Order cancelled");
}

// Step 5 - Order confirmation
// Your code goes here

if (confirmation === 1) {
  alert(
    `Thank you for your order. Your ${foodName} will be prepared. See you soon! ⏲`
  );
} else if (confirmation === 2) {
  alert(
    `Order cancelled. If you change your mind, please revisit JavaScript Pizzeria. Bye 👋`
  );
}
