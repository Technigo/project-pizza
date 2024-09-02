// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
// Ask the user for their name
const name = prompt("What is your name?");

// Display a greeting with their name
alert("Hello " + name + "!");


// Step 2 - Food choice

const foodChoice = prompt(
  "What would you like to order? Please choose a number:\n1. Pizza\n2. Pasta\n3. Salad"
);

// Display their food of choice

if (foodChoice === "1") {
  alert("You've ordered a pizza!");
} else if (foodChoice === "2") {
  alert("You've ordered pasta!");
} else if (foodChoice === "3") {
  alert("You've ordered a salad!");
} else {
  alert("Invalid choice. Please use a number between 1 and 3");
}

// Step 3 - Subtype choice

if (foodChoice === "1") {
// if the user chooses Pizza
  whatKind = promt(
    "What kind of Pizza would you like? Please choose a number:\n1. Margherita\n2Pepperoni\n3. Hawaii"
  );

  if (whatKind === "1") {
  alert ("You ordered Margherita pizza.");
  } else if (whatKind === "2") {
  alert ("You ordered Pepperoni pizza.");
  } else if (whatKind === "3") {
  alert ("You ordered Hawaii pizza.");
  } else {
  alert ("Unvalid choice")
  }

} else if (foodChoice === "2") {
  // if the user chooses Pasta
  whatKind = prompt(
    "What kind of pasta would you like? Please choose a number:\n1. Vodka pasta\n2Carbonara\n3. Bolognese"
  );

  if (whatKind === "1") {
    alert ("You ordered Vodka pasta.");
    } else if (whatKind === "2") {
    alert ("You ordered Carbonara.");
    } else if (whatKind === "3") {
    alert ("You ordered Bolognese.");
    } else {
    alert ("Unvalid choice")
    }  

} else if (foodChoice === "3") {
  // if the user chooses salad
  whatKind = prompt(
    "What kind of salad would you like? Please choose a number:\n1. Ceasar salad\n2Greek salad\n3. Tuna salad"
  );

  if (whatKind === "1") {
    alert ("You ordered Ceasar salad.");
    } else if (whatKind === "2") {
    alert ("You ordered Greek salad.");
    } else if (whatKind === "3") {
    alert ("You ordered Tuna salad.");
    } else {
    alert ("Unvalid choice")
    }

} else {
  alert("Invalid choice. Please use a number between 1 and 3");
}


// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
