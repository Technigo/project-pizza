// Start here

//Declaring variables used inside conditionals
let catName;
let subPizza;
let subMilkshake;
let subSalad;

let subName;
let portion;
let price;
let priceAge = 18;

let confirmedOrder = false;

//Step 0 - Loop to

while (confirmedOrder === false) {
  // Step 1 - Welcome and introduction
  // Your code goes here

  alert(
    `Welcome to Raglan Pizzeria. Ready to Start? - Click 'OK' to begin.`
  );
  const name = prompt("Hey! What should we call you?");
  alert("Hey " + name + "!");

  // Step 2 - Food choice
  // Your code goes here

  const category = prompt(
    "Ok, " +
      name +
      " what would you like to order:\n1. Pizza\n2. Milkshake\n3. Salad"
  );
  switch (category) {
    case "1":
      catName = "Pizza";
      break;
    case "2":
      catName = "Milkshake";
      break;
    case "3":
      catName = "Salad";
      break;
    default:
      alert(
        "We cannot process orders outside of our categories.\nPlease restart the application."
      );
      exit(1);
  }
  alert(catName + " is a great choice!");

  // Step 3 - Subtype choice
  // Your code goes here
  switch (catName) {
    case "Pizza":
      subPizza = prompt(
        "Pizza? Great choice. Which pizza would you like?\n1. Vesuvio\n2. Margherita\n3. Capricciosa"
      );
      switch (subPizza) {
        case "1":
          subName = "Vesuvio";
          break;
        case "2":
          subName = "Margherita";
          break;
        case "3":
          subName = "Capricciosa";
          break;
        default:
          alert(
            "We cannot process orders outside of our categories.\nPlease restart the application."
          );
          exit(1);
      }
      break;
    case "Milkshake":
      subMilkshake = prompt(
        "Milkshake? Great choice. Which flavour would you like?\n1. Vanilla\n2. Chocolate\n3. Strawberry"
      );
      switch (subMilkshake) {
        case "1":
          subName = "Vanilla milkshake";
          break;
        case "2":
          subName = "Chocolate milkshake";
          break;
        case "3":
          subName = "Strawberry milkshake";
          break;
        default:
          alert(
            "We cannot process orders outside of our categories.\nPlease restart the application."
          );
          exit(1);
      }
      break;
    case "Salad":
      subSalad = prompt(
        "What type of salad would you like?\n1. Ceasar salad\n2. Halloumi salad\n3. Ham and cheese salad"
      );
      switch (subSalad) {
        case "1":
          subName = "Ceasar salad";
          break;
        case "2":
          subName = "Halloumi salad";
          break;
        case "3":
          subName = "Ham and cheese salad";
          break;
        default:
          alert(
            "We cannot process orders outside of our categories.\nPlease restart the application."
          );
          exit(1);
      }
      break;
    default:
      alert(
        "We cannot process orders outside of our categories.\nPlease restart the application."
      );
      exit(1);
  }

  alert(subName + " is a great choice!");

  // Step 4 - Age
  // Your code goes here

  const age = prompt(
    name + ", we need to verify your age to determine the portion size:"
  );

  // Step 5 - Order confirmation
  // Your code goes here
  switch (age) {
    case age <= priceAge:
      portion = "child ";
      price = "€5";
      break;
    default:
      portion = "adult ";
      price = "€10";
      break;
  }

  const confirm = prompt(
    "To comfirm your order " +
      name +
      ", One " +
      portion +
      subName +
      ", is this correct?\n1. Yes\n2. No"
  );

  switch (confirm) {
    case "1":
    case "Yes":
    case "yes":
      alert(
        `That will be ${price}! The order will be delivered shortly. Thank you!`
      );
      confirmedOrder = true;
      break;
    default:
      alert("You are welcome to place a new order anytime.");
      break;
  }
}
