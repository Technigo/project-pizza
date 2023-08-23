// Start here

// Step 1 - Welcome and introduction
alert(
    `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

let userName = prompt(
    'Please type your name.'
);

alert(
    `Welcome ${userName}!`
);

// Step 2 - Food choice
let foodChoice = prompt(
    `What type of food would you like to order?
    Please enter a number:

    1. Pizza
    2. Salad
    3. Kebab`
);

let foodCategory = 'Pizza';

if (foodChoice === '2') {
    foodCategory = 'Salad';
};

if (foodChoice === '3') {
    foodCategory = 'Kebab';
};

alert(`You have chosen ${foodCategory}`);

// Step 3 - Subtype choice
let foodName = '';

if (foodChoice === '1') {
    let typeOfPizza = prompt(
        `What kind of pizza would you like?
        Please enter a number:
        1. Kebab Pizza
        2. Hawaii Pizza
        3. Calzone`
    );

    foodName = 'Kebab';

    if (typeOfPizza === '2') {
        foodName = 'Hawaii';
    }

    if (typeOfPizza === '3') {
        foodName = 'Calzone';
    }
} else if (foodChoice === '2') {
    let typeOfSalad = prompt(
        `What kind of salad would you like?
        Please enter a number:
        1. Ceasar Salad
        2. Avocado Salad
        3. Tuna Salad`
    );

    foodName = 'Ceasar';

    if (typeOfSalad === '2') {
        foodName = 'Avocado';
    }

    if (typeOfSalad === '3') {
        foodName = 'Tuna';
    }
} else {
    let typeOfKebab = prompt(
        `What kind of kebab would you like?
        Please enter a number:
        1. Meat Kebab
        2. Chicken Kebab
        3. Vegetarian Kebab`
    );

    foodName = 'Meat';

    if (typeOfKebab === '2') {
        foodName = 'Chicken';
    }

    if (typeOfKebab === '3') {
        foodName = 'Vegetarian';
    }
};

alert(`You have chosen ${foodName} ${foodCategory}!`)

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
