// Step 1 - The program starts by showing an alert() to welcome the user, and the ordering process begins after they click "OK."

alert(
  `Welcome to Jonas' pizza restaurant. When you are ready to order - Click 'OK' to start.`
)

// Step 2 - A prompt() asks for the user’s name, and the input is stored in the userName variable, followed by an alert() displaying a personalized greeting.

let userName = prompt("Hi there, what's your name?");
alert(`Hi ${userName}! You'll order your food in the next step.`)

// This makes the variables accessible throughout the entire program.
let selectedFood;
let subChoice = "";


// Step 3 - The user selects a main dish (Pizza, Pasta, or Salad) using a prompt(), and the choice is saved in the foodChoice variable. The if-else structure sets the selectedFood variable based on this input.

let foodChoice = prompt("What kind of food do you want? 1. Pizza 2. Pasta 3. Salad")

if (foodChoice === "1") {
  selectedFood = "Pizza";
}
else if (foodChoice === "2") {
  selectedFood = "Pasta";
}
else if (foodChoice === "3") {
  selectedFood = "Salad";
} else {
  selectedFood = "unknown";
  alert("Error");
}

alert(`Thanks, you chose ${selectedFood}!`)


// Step 4 - If the user selected a main dish, a prompt() asks for a specific type (e.g., Hawaii for pizza), storing the result in the subChoice variable. The if-else structure determines which subtype is selected or sets subChoice to "Unknown" for invalid inputs.

if (foodChoice === "1") {
  selectedFood = "Pizza";

  subChoice = prompt("What kind of pizza do you want? 1. Hawaii 2. Margarita 3. Calzone");

  if (subChoice === "1") {
    subChoice = "Hawaii";
  } else if (subChoice === "2") {
    subChoice = "Margarita";
  } else if (subChoice === "3") {
    subChoice = "Calzone";
  } else {
    subChoice = "Unknown pizza";
    alert("Invalid choice");
  }

} else if (foodChoice === "2") {
  selectedFood = "Pasta";

  subChoice = prompt("What kind of pasta do you want? 1. Bolognese 2. Carbonara 3. Meatballs");

  if (subChoice === "1") {
    subChoice = "Bolognese";
  } else if (subChoice === "2") {
    subChoice = "Carbonara";
  } else if (subChoice === "3") {
    subChoice = "Meatballs";
  } else {
    subChoice = "Unknown pasta";
    alert("Invalid choice");
  }

} else if (foodChoice === "3") {
  selectedFood = "Salad";

  subChoice = prompt("What kind of salad do you want? 1. Caesar salad 2. Chicken salad 3. Cheese & Ham salad");

  if (subChoice === "1") {
    subChoice = "Caesar salad";
  } else if (subChoice === "2") {
    subChoice = "Chicken salad";
  } else if (subChoice === "3") {
    subChoice = "Cheese & Ham salad";
  } else {
    subChoice = "Unknown salad";
    alert("Invalid choice");
  }
}

// Step 5 - The program asks the user with a prompt() whether the order is for an adult or child, storing the input in the age variable, and an if-else checks the response.

let age = prompt("Is this order for an 1. Adult or 2. Child?")

if (age === "1") {
  age = "Adult";
} else if (age === "2") {
  age = "Child";
}

// Step 6 - An alert() displays a confirmation message combining the userName, subChoice, and age variables to summarize the order.

alert(`Thank you, ${userName}! You have ordered a ${subChoice} for an ${age}. This will be 300 SEK, you pay at the restaurant. See you soon!`);
