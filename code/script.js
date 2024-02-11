// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

const firstName = prompt(`What's your name?`);
alert(`Hello ${firstName}! 👋
Let's get started with your order`);
console.log("Customer name", firstName);

// Step 2 - Food choice
// Your code goes here

const foodCategory = parseInt(
  prompt(
    `What are you craving today?
  1 - Pizza 🍕
  2 - Pasta 🍝
  3 - Salad 🥗
  Please enter the number of your choice`
  )
);

if (foodCategory === 1) {
  alert("You selected pizza!");
} else if (foodCategory === 2) {
  alert("You selected pasta!");
} else if (foodCategory === 3) {
  alert("You selected salad!");
} else {
  alert(
    "Mamma Mia! This number is not in our menu. Please start again and select a number between 1 and 3. Arrivederci! 👋"
  );
  exit(1);
}
console.log("Food category number", foodCategory);

// Step 3 - Subtype choice
// Your code goes here

let foodName = "";

if (foodCategory === 1) {
  const pizzaType = parseInt(
    prompt(`What kind of pizza would you like?
  1 - Margherita
  2 - Salame Piccante
  3 - Verdure
  Please enter the number of your choice`)
  );
  if (pizzaType === 1) {
    foodName = "Pizza Margherita";
  } else if (pizzaType === 2) {
    foodName = "Pizza Salame Piccante";
  } else if (pizzaType === 3) {
    foodName = "Pizza Verdure";
  } else {
    alert(
      "Mamma Mia! This number is not in our menu. Please start again and select a number between 1 and 3. Arrivederci! 👋"
    );
    exit(1);
  }
} else if (foodCategory === 2) {
  const pastaType = parseInt(
    prompt(`What kind of pasta would you like?
  1 - Spaghetti Bolognese
  2 - Fettucine Alfredo
  3 - Pasta Arrabbiata
  Please enter the number of your choice`)
  );
  if (pastaType === 1) {
    foodName = "Spaghetti Bolognese";
  } else if (pastaType === 2) {
    foodName = "Fettucine Alfredo";
  } else if (pastaType === 3) {
    foodName = "Pasta Arrabbiata";
  } else {
    alert(
      "Mamma Mia! This number is not in our menu. Please start again and select a number between 1 and 3. Arrivederci! 👋"
    );
    exit(1);
  }
} else if (foodCategory === 3) {
  const saladType = parseInt(
    prompt(`What kind of salad would you like?
  1 - Insalata Caprese
  2 - Salata Panzanella
  3 - Insalata di Polpo
  Please enter the number of your choice`)
  );
  if (saladType === 1) {
    foodName = "Insalata Caprese";
  } else if (saladType === 2) {
    foodName = "Salata Panzanella";
  } else if (saladType === 3) {
    foodName = "Insalata di Polpo";
  } else {
    alert(
      "Mamma Mia! This number is not in our menu. Please start again and select a number between 1 and 3. Arrivederci! 👋"
    );
    exit(1);
  }
}

alert(`You selected ${foodName}!`);
console.log("Selected dish", foodName);

// Step 4 - Age
// Your code goes here

// prompt: child or adult

let ageCategory;
let foodPrice;

const age = prompt(`Is the meal intended for a child or an adult?
Please enter your age`);
if (age <= 12) {
  ageCategory = "A child";
  foodPrice = "10 €";
} else {
  ageCategory = "An adult";
  foodPrice = "15 €";
}
console.log("Age:", age, "Age category:", ageCategory, "Price:", foodPrice);
alert(`${ageCategory} portion of ${foodName}, that'll be ${foodPrice}.`);
// promt: confirmation

const confirmation = parseInt(
  prompt(`A Do you want to confirm this order?
1 - Yes
2 - No 
Please enter a number between 1 and 2`)
);
if (confirmation === 1) {
  console.log("Order confirmed");
} else if (confirmation === 2) {
  console.log("Order cancelled");
} else {
  alert(
    "Invalid input. Please start again and select a number between 1 and 2. Arrivederci! 👋"
  );
}

// Step 5 - Order confirmation
// Your code goes here

// alert: confirmation message

if (confirmation === 1) {
  alert(
    `Thank you for your order. Your ${foodName} will be prepared. See you soon! ⏲`
  );
} else if (confirmation === 2) {
  alert(
    `Order cancelled. If you change your mind, you are welcome to revisit JavaScript Pizzeria. Arrivederci 👋`
  );
}
