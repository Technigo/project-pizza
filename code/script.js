// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

let name = prompt(`What's your name?`);

alert(
  `Hi ${name}!`
);

// Step 2 - Food choice
// Your code goes here
let foodChoice = prompt(
  `What kind of food would you like?
  1 - Pizza
  2 - Pasta
  3 - Salad
  `
);

let selectedFood = "";

if (foodChoice === "1") {
  selectedFood = "Pizza";
} else if (foodChoice === "2") {
  selectedFood = "Pasta";
} else if (foodChoice === "3") {
  selectedFood = "Salad";
} else {
  alert("Invalid choice, restart your order.");
  exit(1);
};

alert(`You chose ${selectedFood}`);



// Step 3 - Subtype choice
// Your code goes here

let subType = "";
if (selectedFood === "Pizza") {
  subType = `
  1 - Mozarella
  2 - Salami
  3 - Vesuvio
  `;
} else if (selectedFood === "Pasta") {
  subType = `
  1 - Tomato and garlic
  2 - Red sauce
  3 - Creamy
  `;
} else if (selectedFood === "Salad") {
  subType = `
  1 - Greek
  2 - Italian
  3 - Chicken
  `;
} else {
  alert("Invalid choice, restart your order.");
  exit(1);
};

let subChoice = prompt(`Your options are:
${subType}`);

let price ="";

// Pizza Subchoice
if (selectedFood === "Pizza") {
  if (subChoice === "1") {
    SubChoice = "Mozarella"
    price = 10;
  } else if (subChoice === "2") {
    subChoice = "Salami";
    price = 12;
  } else if (subChoice === "3") {
    subChoice = "Vesuvio";
    price = 12;
  } else {
    alert("Invalid choice, restart your order.");
    exit(1);
  }
// Pasta Subchoice
} else if (selectedFood === "Pasta") {
     if (subChoice === "1") {
    SubChoice = "Tomato and garlic"
    price = 8;
  } else if (subChoice === "2") {
    subChoice = "Red sauce";
    price = 8;
  } else if (subChoice === "3") {
    subChoice = "Creamy";
    price = 10;
  } else {
    alert("Invalid choice, restart your order.");
    exit(1);
  }
// Salad Subchoice
} else if (selectedFood === "Salad") {
     if (subChoice === "1") {
    SubChoice = "Greek"
    price = 8;
  } else if (subChoice === "2") {
    subChoice = "Italian";
    price = 8;
  } else if (subChoice === "3") {
    subChoice = "Chicken";
    price = 10;
  } else {
    alert("Invalid choice, restart your order.");
    exit(1);
  }
}

alert(`You chose ${subChoice}`)


// Step 4 - Age
// Your code goes here

let age = prompt(`What's your age?`)
let totalPrice = "";


  if (age <= 12) {
    totalPrice = price * 0.75;
  } else {
    totalPrice =  price * 1;
  }

alert(`As your age is ${age} the cost will be ${totalPrice} Euro`);

let customerConfirmation = prompt(`Confirm order?
Yes
No`)



// Step 5 - Order confirmation
// Your code goes here


if (customerConfirmation === "Yes") {
  alert(`Thank you for ordering, your ${selectedFood} will be prepared shortly.`)
  exit(1);
} else { (customerConfirmation === "no")
  alert(`Sorry to see you decline, we hope you will return for another order in the future.`)
  exit(1);
}
