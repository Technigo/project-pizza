// Start here
// Step 1 - Welcome and introduction
alert(
    `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

//Prompting user to input name
const orderName = prompt("Please provide a name:");
alert(`Hello ${orderName}, may I take your order please?`);



// Step 2 - Food choice
let foodOption = "";

//Prompting user to chose food
foodOption = prompt(`
  What would you like to order?
  Please provide a number:
  1 - Pizza
  2 - Pasta
  3 - Salad
  `);

//Replacing the numbers with food choices
let foodChoice = "";
switch (foodOption) {
    case "1":
        foodChoice = "Pizza";
        console.log(foodOption);
        break

    case "2":
        foodChoice = "Pasta";
        console.log(foodOption);
        break;

    case "3":
        foodChoice = "Salad";
        console.log(foodOption);
        break;

    default:
        alert("Unfortunately that option is not available.");
        exit(1)
}

//Alert of chosen main meal
alert(`Great, you have chosen ${foodChoice}!`);



// Step 3 - Subtype choice
let mealType = "";
let mealTypeSelection = [];
let mealCombo = "";

//Prompting user to chose meal subcategory
switch (foodChoice) {
    case "Pizza":
        mealType = prompt(`
        What type of pizza would you like to order?
        Please provide a number:
        1 - Margerita
        2 - Hawaian
        3 - Pepperoni
        `);
        mealTypeSelection = ["Margerita", "Hawaian", "Pepperoni"]
        break;

    case "Pasta":
        mealType = prompt(`
        What type of pasta would you like to order?
        Please provide a number:
        1 - Carbonara
        2 - Tortellini
        3 - Fettucini
        `);
        mealTypeSelection = ["Carbonara", "Tortellini", "Fettucini"]
        break;

    case "Salad":
        mealType = prompt(`
        What type of salad would you like to order?
        Please provide a number:
        1 - Greek salad
        2 - Ceasar salad
        3 - Tuna salad
        `);
        mealTypeSelection = ["Greek salad", "Ceasar salad", "Tuna salad"]
        break;

    default:
        alert("Unfortunately that option is not available.");
        exit(1)
}

//Defining the subcategory of meal
switch (mealType) {
    case "1":
        mealTypeSelection = mealTypeSelection[0]
        break;

    case "2":
        mealTypeSelection = mealTypeSelection[1]
        break;

    case "3":
        mealTypeSelection = mealTypeSelection[2]
        break;

    default:
        alert("Unfortunately that option is not available.");
        exit(1)
}

//Combined meny choices to one variable
mealCombo = mealTypeSelection + " " + foodChoice;
//Alerting the order combo
alert(`Great choice! Our ${mealCombo} is amazing!`);



// Step 4 - Age
let ageOfPerson
let sizeOfPerson
let costOfMeal

ageOfPerson = prompt("How old are you?");
if (ageOfPerson >= 18) {
    sizeOfPerson = "adult";
    costOfMeal = "€15";

} else {
    sizeOfPerson = "child";
    costOfMeal = "€10";
}



// Step 5 - Order confirmation
const orderStatus = prompt(`
 Order summary:
 One ${sizeOfPerson} size ${mealCombo}  comes to a total cost of ${costOfMeal}.
 Do you wish to place the order?
 1 - Yes
 2 - No`);


if (orderStatus === "1") {
    alert("Thank you! We have recieved your order. Your order number is 4372");

} else {
    alert("Take your time. We look forward to hearing from you again.");
    exit(1)
}

