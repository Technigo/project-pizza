// Step 1 - Welcome and introduction
alert(`Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`);

let userName = prompt(`What is your name?`);
alert(`Hello ${userName}!`);

// Step 2 - Food choice
let foodChoice = prompt(
  `What kind of food would you like to order?
  Enter a number:
  1 - Pizza
  2 - Pasta
  3 - Salad
  `
);

let foodName;

switch (foodChoice) {
  case `1`:
    foodName = `Pizza`;
    break;
  case `2`:
    foodName = `Pasta`;
    break;
  case `3`:
    foodName = `Salad`;
    break;
  default:
    foodName = `no food`;
}

alert(`You have chosen ${foodName}. Yum!`);

// Step 3 - Subtype choice
let subType;

switch (foodChoice) {
  case `1`:
    subType = prompt(
      `What kind of Pizza would you like to order?
     Enter a number:
     1 - Margherita
     2 - Napolitana
     3 - Bussola
     `
    );

    switch (subType) {
      case `1`:
        subType = `Margherita`;
        break;
      case `2`:
        subType = `Napolitana`;
        break;
      case `3`:
        subType = `Bussola`;
        break;
      default:
        subType = `no food`;
    }
    break;

  case `2`:
    subType = prompt(
      `What kind of Pasta would you like to order?
      Enter a number:
      1 - Arrabiata
      2 - Garlic
      3 - Meat and sauce
      `
    );

    switch (subType) {
      case `1`:
        subType = `Arrabiata`;
        break;
      case `2`:
        subType = `Garlic`;
        break;
      case `3`:
        subType = `Meat and sauce`;
        break;
      default:
        subType = `no food`;
    }
    break;

  case `3`:
    subType = prompt(
      `What kind of Salad would you like to order?
      Enter a number:
      1 - Tuna
      2 - Ham and cheese
      3 - Veggi
      `
    );

    switch (subType) {
      case `1`:
        subType = `Tuna`;
        break;
      case `2`:
        subType = `Ham and cheese`;
        break;
      case `3`:
        subType = `Veggi`;
        break;
      default:
        subType = `no food`;
    }
    break;

  default:
    subType = `no food`;
}

alert(`You have chosen ${subType}. Yum!`);

// Step 4 - Age
let userAge = prompt(`Is this food for a child or an adult? Please type your age:`);

// Step 5 - Order confirmation
let confirmation;

if (userAge <= 12) {
  confirmation = prompt(
    `You'd like to order a child portion of ${subType}.
    - price $7
    
    Are you sure you want to order this?
    Enter a number to confirm:
    1 - Yes
    2 - No
    `
  );
} else {
  confirmation = prompt(
    `You'd like to order an adult portion of ${subType}.
    - price $10
    
    Are you sure you want to order this?
    Enter a number to confirm:
    1 - Yes
    2 - No
    `
  );
}

// Switch for confirmation
switch (confirmation) {
  case `1`:
    alert(`Thank you for your order, your food is now being prepared`);
    break;
  case `2`:
    alert(`Your order has been canceled, please return for future orders`);
    break;
  default:
    alert(`Your order has been canceled due to a type error, please return for future orders`);
}