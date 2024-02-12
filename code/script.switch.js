alert(
  `Welcome to our Javascript Pizzeria. Ready to start? - Click 'OK' to begin.`
);

const userName = prompt(`Please type your name`);

console.log("Username", userName);
alert(`Hi ${userName}, welcome to our Pizzeria! 👋`);

// Step 2 - Food choice

const foodChoice = prompt(`
What type of food would you like to order? Enter a number:
1 - Pizza 🍕
2 - Pasta 🍝
3 - Salad 🥗`);

console.log("food choice", foodChoice, typeof foodChoice);

let selectedFood = "";

switch (foodChoice) {
  case "1":
    selectedFood = "Pizza";
    break;
  case "2":
    selectedFood = "Pasta";
    break;
  case "3":
    selectedFood = "Salad";
    break;
  default:
    alert(
      "You typed an invalid choice, please start again and select an option between 1 and 3 😉"
    );
    exit(1);
}

console.log("selected food", selectedFood);
alert(`You chose ${selectedFood}. Nice choice ${userName} 😋`);

let subtypeChoice = "";

switch (selectedFood) {
  case "Pizza":
    subtypeChoice = prompt(`What type of pizza would you like to order?
        Enter a number:
        1 - Kebab Pizza
        2 - Hawaii Pizza
        3 - Vegetarian Pizza`);
    break;

  case "Pasta":
    subtypeChoice = prompt(`What type of pizza would you like to order?
        Enter a number:
        1 - Spaghetti Carbonara
        2 - Fettuccine Alfredo
        3 - Penne Arrabbiata`);
    break;

  case "Salad":
    subtypeChoice = prompt(`What type of salad would you like to order? 🥗 
        Enter a number:
      1 - Caesar Salad
      2 - Greek Salad
      3 - Caprese Salad`);
    break;

    default: 
    exit(1);
}

// Testing to print it out
console.log("Subtype Choice", subtypeChoice);

let selectedSubtype = "";

switch (selectedFood) {
    case "Pizza":
      switch (subtypeChoice) {
        case "1":
          selectedSubtype = "Kebab Pizza";
          break;
        case "2":
          selectedSubtype = "Hawaii Pizza";
          break;
        case "3":
          selectedSubtype = "Vegetarian Pizza";
          break;
        default:
          alert(`Invalid ${selectedFood} choice.`);
          exit(1);
      }
      break;
    case "Pasta":
      switch (subtypeChoice) {
        case "1":
          selectedSubtype = "Spaghetti Carbonara";
          break;
        case "2":
          selectedSubtype = "Fettuccine Alfredo";
          break;
        case "3":
          selectedSubtype = "Penne Arrabbiata";
          break;
        default:
          alert(`Invalid ${selectedFood} choice.`);
          exit(1);
      }
      break;
  
    case "Salad":
      switch (subtypeChoice) {
        case "1":
          selectedSubtype = "Caesar Salad";
          break;
        case "2":
          selectedSubtype = "Greek Salad";
          break;
        case "3":
          selectedSubtype = "Caprese Salad";
          break;
        default:
          alert(`Invalid ${selectedFood} choice.`);
          exit(1);
      }
      break;
  }

  alert(`You have chosen ${selectedSubtype} 😋`);

    // Testing to print it out
  console.log("Selected Subtype", selectedSubtype);

  // Step 4 - Age

const age = prompt(`Is this food for a child or an adult? Type your age:`);

console.log("age", age);

let orderMessage = "";

if (age < 18) {
  orderMessage = prompt(`Thank you ${userName}!
  This is your order: 
  One childsized ${selectedSubtype} will be prepared for you. That'll be 8 euros. Are you sure you want to order this?
  Enter a number to confirm: 
  1 - Yes
  2 - No `);
} else if (age >= 18) {
  orderMessage = prompt(`Thank you ${userName}! 
  This is your order: 
  1 adultsized ${selectedSubtype} will be prepared for you. That'll be 15 euros. Are you sure you want to order this?
  Enter a number to confirm: 
  1 - Yes
  2 - No `);
} else {
  alert(`Invalid age. Please type a number`);
  exit(1);
}

console.log("Order message", orderMessage);

// Step 5 - Order confirmation
/*If orderMessage is confirmed with "1", then a confirmation message, if not (with "2"), another message*/

if (orderMessage === "1") {
  alert(
    `Your order has been confirmed and we will start preparing your ${selectedSubtype} 👩‍🍳. See you soon! `
  );
} else if (orderMessage === "2") {
  alert(
    `Sorry to hear you didn't want to order from us. You are most welcome back whenever you feel like pizza, pasta or salad 🥰`
  );
} else {
  alert(
    `"You typed an invalid choice, please start again and select the option 1 or 2 😉`
  );
}

