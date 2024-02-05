window.addEventListener("load", function () {
  // Step 1 - Welcome and introduction
  alert(
    `Welcome to our Javascript Pizzeria. Ready to Start? 
    - Click 'OK' to begin.`
  );

  while (true) {
    // Store name in variable and greet new user
    const username = prompt(`Please enter your name:`);
    if (username === "") {
      alert(`Oops, no name was entered.`);
      continue;
    } else {
      alert(`Nice to meet you, ${username}!`);
      break;
    }
  }

  let foodChoice;

  while (true) {
    // Step 2 - Food choice
    foodChoice = prompt(`
    What type of food would you like to order?

    Enter a number:
    1. Pizza
    2. Pasta
    3. Salad

`);

    switch (foodChoice) {
      case "1":
        foodChoice = "Pizza";
        break;
      case "2":
        foodChoice = "Pasta";
        break;
      case "3":
        foodChoice = "Salad";
        break;
      default:
        alert(`Invalid choice. Please select a number between 1 and 3.`);
        continue;
    }
    alert(`You've chosen ${foodChoice}!`);
    break;
  }

  // Step 3 - Subtype choice
  const pizzaSubtypes = ["Napolitana", "Hawaian", "Pepperoni"];
  const pastaSubtypes = [
    "Spaghetti Carbonara",
    "Fettucine Alfredo",
    "Cheesy Tortellini",
  ];
  const saladSubtypes = ["Ceaser Salad", "Caprese Salad", "Greek Salad"];
  let foodSubtypes = [];

  switch (foodChoice) {
    case "Pizza":
      foodSubtypes = pizzaSubtypes;
      break;
    case "Pasta":
      foodSubtypes = pastaSubtypes;
      break;
    case "Salad":
      foodSubtypes = saladSubtypes;
      break;
    default:
      alert(`Invalid ${foodChoice} type choice.`);
  }

  while (true) {
    // Prompt the subtypes corresponding food choice
    let subtypeChoice = prompt(`
    Select a ${foodChoice} type

    Enter a number:
    1. ${foodSubtypes[0]}
    2. ${foodSubtypes[1]}
    3. ${foodSubtypes[2]}

    `);

    // Translate number into corresponding subtype
    switch (subtypeChoice) {
      case "1":
        subtypeChoice = `${pizzaSubtypes[subtypeChoice - 1]}`;
        break;
      case "2":
        subtypeChoice = `${pastaSubtypes[subtypeChoice - 1]}`;
        break;
      case "3":
        subtypeChoice = `${saladSubtypes[subtypeChoice - 1]}`;
        break;
      default:
        alert(`Invalid choice. Please select a number between 1 and 3.`);
        continue;
    }

    alert(`You've chosen ${subtypeChoice}!`);
    break;
  }
});

//   // Step 4 - Age
//   let userAge = prompt(`Is this food for a child or adult? Type your age:`);
//   let price;

//   // Check if user is adult or child
//   if (userAge > 5 && userAge <= "18") {
//     userAge = "child";
//     price = 10;
//   } else if (userAge > "18" && userAge < 110) {
//     userAge = "adult";
//     price = 15;
//   } else {
//     alert(`Oops, invalid choice.`);
//   }

//   // Ask user to confirm order
//   let confirmOrder = prompt(`
//   One ${userAge} sized ${foodChoice} will be prepared for you. That´ll be €${price}.
//   Are you sure you want to order this?

//   Enter a number:
//   1. Yes
//   2. No

// `);

//   // Step 5 - Order confirmation
//   switch (confirmOrder) {
//     case "1":
//       alert(`
//     Thank you for your order! Your delicous meal will be prepared.
//     See you soon! 👋
//   `);
//       break;
//     case "2":
//       alert(`No problem, come back and order anytime you want.`);
//       break;
//     default:
//       alert(`Invalid choice. Please select 1 for Yes or 2 for No.`);
//   }
// }
