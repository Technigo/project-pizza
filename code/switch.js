// Start here

// Defining some useful variables
let foodtype = "";
let orderedFood = "";
let portionSize = "";
let price = "";

// Step 1 - Welcome and introduction

alert(
  "Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin."
);

const customer = prompt("Please enter your name:");

if (customer) {
  alert(`Happy to meet you, ${customer}!`);
} else {
  alert("That's not a name. Please refresh site and try again.");
  exit(1);
}

// Step 2 - Food choice

const foodChoice = parseInt(
  prompt(
    `What type of food would you like to order? 
    Please enter a number: 
    1 - Pizza 
    2 - Pasta 
    3 - Salad`
  )
);

switch (foodChoice) {
  case 1:
    foodType = "Pizza";
    break;
  case 2:
    foodType = "Pasta";
    break;
  case 3:
    foodType = "Salad";
    break;
  default:
    alert("Invalid food type. Please refresh site and try again.");
    exit(1);
}

alert(`You've chosen ${foodType}!`);

// Step 3 - Subtype choice

// Pizza

if (foodChoice === 1) {
  const pizzaType = parseInt(
    prompt(
      `Please select a type of Pizza.
        Enter a number: 
        1 - Vesuvius 
        2 - Hawaii 
        3 - Capricciosa`
    )
  );
  switch (pizzaType) {
    case 1:
      orderedFood = "Vesuvius";
      break;
    case 2:
      orderedFood = "Hawaii";
      break;
    case 3:
      orderedFood = "Capricciosa";
      break;
    default:
      alert("Invalid pizza type. Please refresh site and try again");
      exit(1);
  }

  // Pasta
} else if (foodChoice === 2) {
  const pastaType = parseInt(
    prompt(
      `Please select a Pasta dish. 
    Enter a number: 
    1 - Spaghetti Bolognese 
    2 - Penne all’Arrabbiata 
    3 - Frutti de Mare`
    )
  );
  switch (pastaType) {
    case 1:
      orderedFood = "Spaghetti Bolognese";
      break;
    case 2:
      orderedFood = "Penne all’Arrabbiata";
      break;
    case 3:
      orderedFood = "Frutti de Mare";
      break;
    default:
      alert("Invalid pasta type. Please refresh site and try again");
      exit(1);
  }

  // Salad
} else if (foodChoice === 3) {
  const saladType = parseInt(
    prompt(
      `Please select a Salad. 
    Enter a number:
    1 - Caesar Salad 
    2 - Salade Niçoise 
    3 - Waldorf Salad`
    )
  );
  switch (saladType) {
    case 1:
      orderedFood = "Caesar Salad";
      break;
    case 2:
      orderedFood = "Salade Niçoise";
      break;
    case 3:
      orderedFood = "Waldorf Salad";
      break;
    default:
      alert("Invalid salad type. Please refresh site and try again");
      exit(1);
  }
}

alert(
  `You've chosen ${orderedFood}, a delicious dish in the ${foodType} category!`
);

// Step 4 - Age

const age = parseInt(
  prompt("Is this food for a child or an adult? Type your age:")
);

if (age) {
  portionSize = age <= 17 ? "child-sized" : "adult-sized";
  price = age <= 17 ? "€10" : "€15";
} else {
  alert("Invalid age entry. Please refresh site and try again.");
  exit(1);
}

// Step 5 - Order confirmation

const confirmOrder = parseInt(
  prompt(
    `One ${portionSize} ${orderedFood} will be prepared for you. That'll be ${price}. Are you sure you want to order this?  
    Enter a number to confirm: 
    1 - Yes 
    2 - No`
  )
);

switch (confirmOrder) {
  case 1:
    alert("Thank you for your order! Your meal will be prepared.");
    break;
  case 2:
    alert("No worries, we'll be here if you change your mind.");
    break;
  default:
    alert(
      "Apologies, but that was neither a 'yes' nor a 'no'. Please try again."
    );
    break;
}
