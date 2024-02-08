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
let subTypePizza
let subTypePasta 
let subTypeSalad

switch (selectedItem) {
  case "pizza":
    subTypePizza = parseInt(
      prompt(`
      Select the type of pizza:
      Enter the number of your choice:
      1. Hawaiian
      2. Margherita
      3. Pepperoni
      `
      ) 
    )
    break;
  case "pasta":
    subTypePasta = parseInt(
      prompt(`
      Select the type of pasta:
      Enter the number of your choice:
      1. Spaghetti alla Puttanesca
      2. Carbonara
      3. Pesto alla Genovese
      `
      )
    )
    break;
  case "salad":
    subTypeSalad = parseInt(
      prompt(`
      Select the type of salad:
      Enter the number of your choice:
      1. Caprese
      2. Insalata di Riso
      3. Panzanella
      `
      )
    )
    break;
  default:
    alert("Please enter a value between 1 and 3.")
    exit(1)
};

console.log("pizza type", subTypePizza, "pasta type", subTypePasta, "salad type", subTypeSalad)

switch (subTypePizza) {
  case 1:
    subTypeName = "Hawaiian";
    break
  case 2:
    subTypeName = "Margherita";
    break
  case 3:
    subTypeName = "Pepperoni";
    break
}

switch (subTypePasta) {
  case 1:
    subTypeName = "Spaghetti alla Puttanesca";
    break
  case 2:
    subTypeName = "Carbonara";
    break
  case 3:
    subTypeName = "Pesto alla Genovese";
    break
}

switch (subTypePizza) {
  case 1:
    subTypeName = "Caprese";
    break
  case 2:
    subTypeName = "Margherita";
    break
  case 3:
    subTypeName = "Pepperoni";
    break
}