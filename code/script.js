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

//Confirm choice

if (foodChoice == '1') {
  foodChoice = 'pizza';
  alert(`Sure thing, ${customerName}! We'll make you a pizza🍕`);
} else if (foodChoice == '2') {
  foodChoice = 'pasta';
  alert(`Good choice! One pasta coming up🤤`);
} else if (foodChoice == '3') {
  foodChoice = 'salad';
  alert(`Can't go wrong with a salad!🥗`);
} else {
  foodChoice = prompt(
    `Sorry, that's not on the menu. These are your choices:

1. Pizza
2. Pasta
3. Salad`
  );
}

// Step 3 - Subtype choice
// Your code goes here

// Let customer choose sub type of dish
let subType;

if (foodChoice == 'pizza') {
  subType = prompt(`What kind of pizza would you like, ${customerName}?

  1. With pineapple
  2. Without pineapple`);

  if (subType == '1') {
    subType = 'with pinapple';
  } else {
    subType = 'without pinapple';
  };

} else if (foodChoice === 'pasta') {
  subType = prompt(`What type of pasta?

  1. Spagetti
  2. Penne`);

  if (subType == '1') {
    subType = 'spagetti';
  } else {
    subType = 'penne';
  };

} else {
  subType = prompt(`Which salad do you prefer, ${customerName}?

  1. Chicken
  2. Vegitarian`);

  if (subType == '1') {
    subType = 'with chicken';
  } else {
    subType = 'without chicken';
  };
}

alert(`Awesome, ${subType} it is.`)

// Step 4 - Age
// Your code goes here

// Ask for age
const age = prompt(`Depending on your age, we'll make a child or adult size portion. (No, you can't descide on your own).

How old are you, ${customerName}?`);

// Descide child or adult size portion
const isChild = (age < 18);
const portionSize = isChild ? 'a child' : 'an adult';

// Display price
let price;

if (foodChoice === 'pizza') {
  if (isChild) {
    price = 90;
  } else {
    price = 125;
  };
} else if (foodChoice === 'pasta') {
  if (isChild) {
    price = 100;
  } else {
    price = 135;
  };
} else {
  if (isChild) {
    price = 70;
  } else {
    price = 100;
  };
};

// Confirm price
const priceConfirmation = prompt(`That'll be ${price} SEK, please. Is that OK?`);

if (priceConfirmation === 'OK' || priceConfirmation === '') {
  alert('Great!');
} else {
  alert(`Well... that's the price anyway...`);
}

// Step 5 - Order confirmation
// Your code goes here

// Ask customer to onfirm order
const orderConfirmation = prompt(`Ok, so you've ordern a ${portionSize} portion of ${foodChoice} ${subType}. Sounds good?

YES
NO`);

// Display thank you
if (orderConfirmation === 'YES') {
  alert('Awesome! See you soon.');
} else if (orderConfirmation === 'NO') {
  alert('No worries, come back another time.');
} else {
  alert(`We'll take that as a yes, ${customerName}.`)
};