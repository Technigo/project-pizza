// Step 1 - Welcome and introduction
alert("Welcome to our JavaScript Pizzeria!");

var userName = prompt("What's your name?");
alert("Hi, " + userName + "!");

// Step 2 - Food choice
var foodChoice = prompt(
    "Please select a food type by entering the corresponding number:\n1. Pizza\n2. Pasta\n3. Salad"
);

var foodType;

switch (foodChoice) {
    case "1":
        foodType = "Pizza";
        alert("You have selected Pizza.");
        break;
    case "2":
        foodType = "Pasta";
        alert("You have selected Pasta.");
        break;
    case "3":
        foodType = "Salad";
        alert("You have selected Salad.");
        break;
    default:
        alert("Invalid choice. Please refresh and try again.");
        break;
}

// Step 3 - Subtype choice
var subtypeChoice;
var subtype;

switch (foodType) {
    case "Pizza":
        subtypeChoice = prompt(
            "Please select a type of Pizza:\n1. Margherita\n2. Pepperoni\n3. Hawaiian"
        );
        switch (subtypeChoice) {
            case "1":
                subtype = "Margherita Pizza";
                break;
            case "2":
                subtype = "Pepperoni Pizza";
                break;
            case "3":
                subtype = "Hawaiian Pizza";
                break;
            default:
                alert("Invalid choice. Please refresh and try again.");
                break;
        }
        break;

    case "Pasta":
        subtypeChoice = prompt(
            "Please select a type of Pasta:\n1. Spaghetti Bolognese\n2. Fettuccine Alfredo\n3. Penne Arrabiata"
        );
        switch (subtypeChoice) {
            case "1":
                subtype = "Spaghetti Bolognese";
                break;
            case "2":
                subtype = "Fettuccine Alfredo";
                break;
            case "3":
                subtype = "Penne Arrabiata";
                break;
            default:
                alert("Invalid choice. Please refresh and try again.");
                break;
        }
        break;

    case "Salad":
        subtypeChoice = prompt(
            "Please select a type of Salad:\n1. Caesar Salad\n2. Greek Salad\n3. Garden Salad"
        );
        switch (subtypeChoice) {
            case "1":
                subtype = "Caesar Salad";
                break;
            case "2":
                subtype = "Greek Salad";
                break;
            case "3":
                subtype = "Garden Salad";
                break;
            default:
                alert("Invalid choice. Please refresh and try again.");
                break;
        }
        break;

    default:
        alert("Invalid food type. Please refresh and try again.");
        break;
}

// Step 4 - Age
var ageGroup = prompt(
    "Is the meal intended for a child or an adult?\nPlease enter 'child' or 'adult'."
);

var cost;
switch (ageGroup.toLowerCase()) {
    case "child":
        cost = "$5.99";
        break;
    case "adult":
        cost = "$9.99";
        break;
    default:
        alert("Invalid choice. Please refresh and try again.");
        break;
}

var orderMessage =
    "You have ordered a " +
    subtype +
    " for a " +
    ageGroup +
    ". The total cost is " +
    cost +
    ".";
alert(orderMessage);

// Step 5 - Order confirmation
var confirmation = prompt(
    "Do you confirm your order? Please enter 'yes' or 'no'."
);

switch (confirmation.toLowerCase()) {
    case "yes":
        alert("Thank you, " + userName + "! Your meal will be prepared shortly.");
        break;
    case "no":
        alert(
            "We're sorry to hear that. Feel free to order anytime. Have a great day!"
        );
        break;
    default:
        alert("Invalid response. Please refresh and try again.");
        break;
}
