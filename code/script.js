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

if (foodChoice === '2') {
    alert(`You have chosen Salad`);
};

if (foodChoice === '3') {
    alert(`You have chosen Kebab`);
};

// Step 3 - Subtype choice
let chosenFoodName = '';

switch (foodCategory) {
    case "1":
        let pizzaChoice = prompt('What kind of pizza would you like?')
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
        let saladChoice = prompt('What kind if salad would you like?')
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
        let kebabChoice = prompt('What kind if kebab would you like?')
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

alert(`you hav chosen ${chosenFoodName}!`)

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
