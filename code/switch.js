// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

//step 1-b, Ask for customers name

let customerName = prompt(`What's your name?`);

//step 1-c, Greet customer
// while (customerName.length < 1) {
//   customerName = prompt(`Please, enter your name to order`);
// }
alert(`Yey, great to see you ${customerName}!`);

// Step 2 - Food choice
// Your code goes here

//Ask customer for good choice
let foodChoice = prompt(`What would you like to eat, ${customerName}?

Choose a number:
1. Pizza
2. Pasta
3. Salad`
);

// Confirm choice and convert menu number to text

switch (foodChoice) {
  case '1':
    foodChoice = 'pizza';
    alert(`Sure thing! We'll make you a Pizza🍕`);
    break;

  case '2':
    foodChoice = 'pasta';
    alert(`Good choice! One pasta coming up🤤`);
    break;

  case '3':
    foodChoice = 'salad';
    alert(`Can't go wrong with a salad!🥗`)
    break;

  default:
    foodChoice = prompt(`Sorry, that's not on the menu. These are your choices:

      1. Pizza
      2. Pasta
      3. Salad`
    );
    switch (foodChoice) {
      case '1':
        foodChoice = 'pizza';
        break;

      case '2':
        foodChoice = 'pasta';
        break;

      case '3':
        foodChoice = 'salad';
        break;

      default:
        foodChoice = 'pizza';
        break;
    };
}

// Step 3 - Subtype choice
// Your code goes here

// Let customer choose sub type of dish
let subType;

switch (foodChoice) {
  case 'pizza':
    // Prompt customer to choose
    subType = prompt(
      `What kind of pizza would you like, ${customerName}?
      
      1. With pineapple
      2. Without pineapple`);

    // Convert menu number to text
    switch (subType) {
      case '1':
        subType = 'with pinapple';
        break;

      case '2':
        subType = 'without pinapple';
        break;

      default:
        subType = prompt(
          `You got go choose!
          What kind of pizza would you like?
          1. With pineapple
          2. Without pineapple`);
        break;
    };
    break;

  case 'pasta':
    // Prompt customer to choose
    subType = prompt(`What type of pasta?

    1. Spagetti
    2. Penne`);

    // Convert menu number to text
    switch (subType) {
      case '1':
        subType = 'spagetti';
        break;

      case '2':
        subType = 'penne';
        break;

      default:
        subType = prompt(`You got to choose!
        What type of pasta?
        1. Spagetti
        2. Penne`);
        break;
    };
    break;

  case 'salad':
    // Prompt customer to choose
    subType = prompt(`Which salad do you prefer, ${customerName}?

    1. Chicken
    2. Vegitarian`);

    // Convert menu number to text
    switch (subType) {
      case '1':
        subType = 'with chicken';
        break;

      case '2':
        subType = 'without chicken';
        break;

      default:
        subType = prompt(`You got to choose!
        Which salad do you prefer, ${customerName}?
        1. Chicken
        2. Vegitarian`);
        break;
    };
    break;
}
alert(`Awesome, ${subType} it is.`)

// Step 4 - Age
// Your code goes here

// Ask for age
const age = prompt(`Depending on your age, we'll make a child or adult size portion. (No, you can't descide on your own).

How old are you, ${customerName}?`);

// Descide child or adult size portion
const isChild = (age < 18); // Is the customer under 18 yo?
const portionSize = isChild ? 'a child' : 'an adult'; // Set portion size to dispay in order message

// Set price
let price;

switch (foodChoice) {
  case 'pizza':
    price = isChild ? 90 : 125;
    break;

  case 'pasta':
    price = isChild ? 100 : 135;
    break;

  case 'salad':
    price = isChild ? 70 : 100;
    break;
}

// Confirm price
const priceConfirmation = prompt(`That'll be ${price} SEK, please. Is that OK?`);

switch (priceConfirmation) {
  case 'OK':
    alert('Great!');
    break;

  default:
    alert(`Well... that's what it costs anyway...`);
    break;
}

// Step 5 - Order confirmation
// Your code goes here

// Ask customer to onfirm order
const orderConfirmation = prompt(`Ok, so you've ordern a ${portionSize} portion of ${foodChoice} ${subType}. Sounds good?

YES
NO`);

// Display thank you
switch (orderConfirmation) {
  case 'YES':
    alert('Awesome! See you soon.');
    break;
  case 'NO':
    alert('No worries, come back another time.');
    break;

  default:
    alert(`We'll take that as a yes, ${customerName}.`)
    break;
}