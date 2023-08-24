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
let foodCategory = prompt(
    `What type of food would you like to order?
    Please enter a number:

    1. Pizza
    2. Salad
    3. Kebab`
);

if (foodCategory === '1') {
    alert(`You have chosen Pizza`);
}

if (foodCategory === '2') {
    alert(`You have chosen Salad`);
};

if (foodCategory === '3') {
    alert(`You have chosen Kebab`);
};

// Step 3 - Subtype choice
let chosenFoodName = '';

switch (foodCategory) {
    case "1":
        let pizzaChoice = prompt(`What kind of pizza would you like?
        Please enter a number:
        1. Kebab Pizza
        2. Hawaii Pizza
        3. Calzone`)

        switch (pizzaChoice) {
            case "1":
                chosenFoodName = "Kebab Pizza";
                break;
            case "2":
                chosenFoodName = "Hawaii Pizza";
                break;
            case "3":
                chosenFoodName = "Calzone";
                break;
            default:
                alert(`Invalid pizza choice`)
        }
        break;

    case "2":
        let saladChoice = prompt(`What kind of salad would you like
        Please enter a number:
        1. Ceasar Salad
        2. Avocado Salad
        3. Tuna Salad?`)

        switch (saladChoice) {
            case "1":
                chosenFoodName = "Ceasar Salad";
                break;
            case "2":
                chosenFoodName = "Avocado Salad";
                break;
            case "3":
                chosenFoodName = "Tuna Salad";
                break;
            default:
                alert(`Invalid salad choice`)
        }
        break;

    case "3":
        let kebabChoice = prompt(`What kind of kebab would you like?
        Please enter a number:
        1. Meat kebab
        2. Chicken kebab
        3. Vegetarian kebab`)

        switch (kebabChoice) {
            case "1":
                chosenFoodName = "Meat Kebab";
                break;
            case "2":
                chosenFoodName = "Chicken Kebab";
                break;
            case "3":
                chosenFoodName = "Vegetarian Kebab";
                break;
            default:
                alert(`Invalid kebab choice`);
        }
        break;
}

alert(`You have chosen ${chosenFoodName}!`)

// Step 4 - Age
let personAge = prompt(`Is the food intended for a child or an adult? Type your age:`)

let portionSize = 'children';
let portionPrice = 80;

if (personAge >= 18) {
    portionSize = 'adult';
    portionPrice = 110;
}

prompt(`One ${portionSize} sized ${chosenFoodName} will be prepared. That will be ${portionPrice} Sek. Are you sure you want to order this?
    Enter a number to confirm:
    1. Yes
    2. No`);


// Step 5 - Order confirmation
// Your code goes here
