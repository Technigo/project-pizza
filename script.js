
// Step 1 - Welcome and introduction
alert(`Welcome to Maria's Pizza. Ready to Start? - Click 'OK' to begin.`);

var userName = prompt("What's your name?");
alert("Hi, " + userName + "!");

// Step 2 - Food choice
var foodChoice = prompt(
  "Please select a food type by entering the corresponding number:\n1. Pizza\n2. Pasta\n3. Salad"
);

var foodType;

if (foodChoice == "1") {
  foodType = "Pizza";
  alert("You have selected Pizza.");
} else if (foodChoice == "2") {
  foodType = "Pasta";
  alert("You have selected Pasta.");
} else if (foodChoice == "3") {
  foodType = "Salad";
  alert("You have selected Salad.");
} else {
  alert("Invalid choice. Please refresh and try again.");
}

// Step 3 - Subtype choice
var subtypeChoice;
var subtype;

if (foodType == "Pizza") {
  subtypeChoice = prompt(
    "Please select a type of Pizza:\n1. Margherita\n2. Pepperoni\n3. Hawaiian"
  );
  if (subtypeChoice == "1") {
    subtype = "Margherita Pizza";
  } else if (subtypeChoice == "2") {
    subtype = "Pepperoni Pizza";
  } else if (subtypeChoice == "3") {
    subtype = "Hawaiian Pizza";
  } else {
    alert("Invalid choice. Please refresh and try again.");
  }
} else if (foodType == "Pasta") {
  subtypeChoice = prompt(
    "Please select a type of Pasta:\n1. Spaghetti Bolognese\n2. Fettuccine Alfredo\n3. Penne Arrabiata"
  );
  if (subtypeChoice == "1") {
    subtype = "Spaghetti Bolognese";
  } else if (subtypeChoice == "2") {
    subtype = "Fettuccine Alfredo";
  } else if (subtypeChoice == "3") {
    subtype = "Penne Arrabiata";
  } else {
    alert("Invalid choice. Please refresh and try again.");
  }
} else if (foodType == "Salad") {
  subtypeChoice = prompt(
    "Please select a type of Salad:\n1. Caesar Salad\n2. Greek Salad\n3. Garden Salad"
  );
  if (subtypeChoice == "1") {
    subtype = "Caesar Salad";
  } else if (subtypeChoice == "2") {
    subtype = "Greek Salad";
  } else if (subtypeChoice == "3") {
    subtype = "Garden Salad";
  } else {
    alert("Invalid choice. Please refresh and try again.");
  }
}

// Step 4 - Age
var ageGroup = prompt(
  "Is the meal intended for a child or an adult?\nPlease enter 'child' or 'adult'."
);

var cost;
if (ageGroup.toLowerCase() == "child") {
  cost = "$5.99";
} else if (ageGroup.toLowerCase() == "adult") {
  cost = "$9.99";
} else {
  alert("Invalid choice. Please refresh and try again.");
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

if (confirmation.toLowerCase() == "yes") {
  alert("Thank you, " + userName + "! Your meal will be prepared shortly.");
} else if (confirmation.toLowerCase() == "no") {
  alert(
    "We're sorry to hear that. Feel free to order anytime. Have a great day!"
  );
} else {
  alert("Invalid response. Please refresh and try again.");
}
