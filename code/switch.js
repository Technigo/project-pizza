// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

const yourName = prompt("What is your name?");

alert(`Welcome, ${yourName}!`);

// Step 2 - Food choice
const menuSelect = parseInt(
  prompt(`
  What would you like to order?
    Enter the number of your choice:
    1. Pizza  
    2. Pasta 
    3. Salad
    `
  )
);

let selectedItem

switch (menuSelect) {
  case 1:
    selectedItem = "pizza";
    break
  case 2:
    selectedItem = "pasta"
    break
  case 3:
    selectedItem = "salad"
    break
  default:
    alert("Please enter a value between 1 and 3.")
    exit(1)
};

console.log("selected menu item", selectedItem)

alert(`You chose ${selectedItem}!`)

// Step 3 - Subtype choice
let subItem
let subItemNames

switch (selectedItem) {
  case "pizza":
    subItem = parseInt(
      prompt(`
      Select the type of pizza:
      Enter the number of your choice:
      1. Hawaiian
      2. Margherita
      3. Pepperoni
      `
      ) 
    );
    subItemNames = ["Hawaiian", "Margherita", "Pepperoni"]
    break
  case "pasta":
    subItem = parseInt(
      prompt(`
      Select the type of pasta:
      Enter the number of your choice:
      1. Spaghetti alla Puttanesca
      2. Carbonara
      3. Pesto alla Genovese
      `
      )
    );
    subItemNames = ["Spaghetti alla Puttanesca", "Carbonara", "Pesto alla Genovese"]

    break
  case "salad":
    subItem = parseInt(
      prompt(`
      Select the type of salad:
      Enter the number of your choice:
      1. Caprese
      2. Insalata di Riso
      3. Panzanella
      `
      )
    );
    subItemNames = ["Caprese", "Insalata di Riso", "Panzanella"]

    break
  
  default:
    alert("Please enter a value between 1 and 3.");
    exit(1)
};

console.log("entered sub type value", subItem)

let subItemChoice

switch (subItem) {
  case 1:
    alert(`You chose ${subItemNames[0]}!`)
    break
  case 2:
    alert(`You chose ${subItemNames[1]}!`)
    break
  case 3:
    alert(`You chose ${subItemNames[2]}!`)
  default: 
    alert("Choose valid")
    exit(1)

}



/* My initial switch statement below did not work with the default. Each switch statement would run only the default despite valid user input. Maybe my logic was wrong. */

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

console.log("sub type name", subTypeName)

alert(`You chose ${subTypeName}!`)

const age = parseInt(
  prompt(`
  Is your food for an adult or a child?
  Please enter you age:
  `
)
)

let confirm

if (age >= 13) {
  confirm = parseInt(
    prompt(`
    One adult size ${subTypeName} ${selectedItem} will be $20. 
     Do you confirm this order? Enter a number:
     1. Yes
     2. No
     `
    )
  )
} else {
  confirm = parseInt(
    prompt(`
    One child size ${subTypeName} ${selectedItem} will be $10.
    Do you confirm this order? Enter a number:
    1. Yes
    2. No
    `
    )
  )
}

console.log("age")

if (confirm === 1) {
  alert("Thank you for your order, enjoy!");
} else {
  alert("No worries, see you soon!");
}

