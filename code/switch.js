// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria 🧚🏼‍♀️ 
  Ready to Start?
  Click 🆗 to begin!
  `
);

const yourName = prompt("What is your name?");

alert(`✨ Welcome ${yourName} ✨`);

// Step 2 - Food choice
const menuSelect = parseInt(
  prompt(`
  What would you like to order?
    Enter the number of your choice:
    1. Pizza 🍕
    2. Pasta 🍝
    3. Salad 🥗
    `)
);

let selectedItem;

switch (menuSelect) {
  case 1:
    selectedItem = "pizza";
    break;
  case 2:
    selectedItem = "pasta";
    break;
  case 3:
    selectedItem = "salad";
    break;
  default:
    alert("Please try again 🧚🏼‍♀️");
    exit(1);
}

alert(`✨ You chose ${selectedItem} ✨`);

// Step 3 - Subtype choice
let subItem;
let subItemNames;

switch (selectedItem) {
  case "pizza":
    subItem = parseInt(
      prompt(`
      Select your pizza type:
      Enter the number of your choice:
      1. Hawaiian
      2. Margherita
      3. Pepperoni
      `)
    );
    subItemNames = ["Hawaiian", "Margherita", "Pepperoni"];
    break;
  case "pasta":
    subItem = parseInt(
      prompt(`
      Select your pasta type:
      Enter the number of your choice:
      1. Spaghetti alla Puttanesca
      2. Carbonara
      3. Pesto alla Genovese
      `)
    );
    subItemNames = [
      "Spaghetti alla Puttanesca",
      "Carbonara",
      "Pesto alla Genovese",
    ];
    break;
  case "salad":
    subItem = parseInt(
      prompt(`
      Select your salad type:
      Enter the number of your choice:
      1. Caprese
      2. Insalata di Riso
      3. Panzanella
      `)
    );
    subItemNames = ["Caprese", "Insalata di Riso", "Panzanella"];
    break;
  default:
    alert("Please try again 🧚🏼‍♀️");
    exit(1);
}

switch (subItem) {
  case 1:
    alert(`✨ You chose ${subItemNames[0]} ✨`);
    break;
  case 2:
    alert(`✨ You chose ${subItemNames[1]} ✨`);
    break;
  case 3:
    alert(`✨ You chose ${subItemNames[2]} ✨`);
    break;
  default:
    alert("Please try again 🧚🏼‍♀️");
    exit(1);
}

/* My initial switch statement below did not work with the default case. Each switch statement would only run the default case despite valid user input. Maybe my logic was wrong. */

// let subTypeName

// switch (subTypePizza) {
//   case 1:
//     subTypeName = "Hawaiian";
//     break
//   case 2:
//     subTypeName = "Margherita";
//     break
//   case 3:
//     subTypeName = "Pepperoni";
//     break
//   default:
//     alert("Choose valid")
// }

// switch (subTypePasta) {
//   case 1:
//     subTypeName = "Spaghetti alla Puttanesca";
//     break
//   case 2:
//     subTypeName = "Carbonara";
//     break
//   case 3:
//     subTypeName = "Pesto alla Genovese";
//     break

// };

// switch (subTypeSalad) {
//   case 1:
//     subTypeName = "Caprese";
//     break
//   case 2:
//     subTypeName = "Insalata di Riso";
//     break
//   case 3:
//     subTypeName = "Panzanella";
//     break
// };

// Step 4 - Age
const age = parseInt(
  prompt(`
  Is your food for an adult or a child?
  Please enter you age:
  `)
);

let confirm;

switch (true) {
  case age >= 13:
    confirm = parseInt(
      prompt(`
      One adult size ${
        subItemNames[0] || subItemNames[1] || subItemNames[2]
      } ${selectedItem} will be $20. 
      To confirm your order, enter a number:
      1. Yes
      2. No
      `)
    );
    break;
  case age <= 12:
    confirm = parseInt(
      prompt(`
      One child size ${
        subItemNames[0] || subItemNames[1] || subItemNames[2]
      } ${selectedItem} will be $10.
      To confirm your order, enter a number:
      1. Yes
      2. No
      `)
    );
    break;
  case age == "":
    alert("Please try again 🧚🏼‍♀️");
    break;
  default:
    alert("Please try again 🧚🏼‍♀️");
}

switch (confirm) {
  case 1:
    alert("✨ Thanks for ordering with us, enjoy! ✨");
    break;
  case 2:
    alert("No worries, see you soon! 🧚🏼‍♀️");
    break;
}
