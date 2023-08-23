// Start here

// Step 1 - Welcome and introduction
// Your code goes here
window.alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

const name = window.prompt("Please fill in your first name: ");
// console.log(name);

alert(`Good to have you here ${name} !`);

// Step 2 - Food choice
let evaluation = false;
let choice;
// declare here. if in while-loop not visible later in meal-switch
while (evaluation == false) {
  // not only one =
  choice = window.prompt(`Please choose your preferred type of meal:
1) Pizza
2) Pasta
3) Salad
`);
  // console.log(typeof (choice));
  // type of input is string
  // choice = Number(choice);
  // console.log(choice);

  if (choice != 1 && choice != 2 && choice != 3) {
    // not || ! test if all are wrong
    window.alert("Sorry, invalid choice, please pick 1-3.");
  } else {
    evaluation = true;
  }

  // --working as well but not cool--
  // switch (choice) {
  //   case 1:
  //   case 2:
  //   case 3:
  //     evaluation = true;
  //     break;
  //   default:
  //     evaluation = false;
  //     window.alert("Sorry, invalid choice, please pick 1-3.");
  // };   ---------

  // console.log(evaluation);
};

let meal;
choice = Number(choice);
// ...because is string so far. switch uses strict =
switch (choice) {
  case 1:
    meal = "Pizza";
    break;
  case 2:
    meal = "Pasta";
    break;
  case 3:
    meal = "Salad";
    break;
}
window.alert(`Got it, you picked ${meal}.`);
// Your code goes here

// Step 3 - Subtype choice
let subtypes;
const subtypePizza = `
1) Margherita
2) Calzone
3) Quattro formaggi`;
const subtypePasta = `
1) Bolognese
2) al olio`;
const subtypeSalad = `
1) Salad greek style
2) Asian rice salad
3) Tuna salad
4) Grandmas noodle salad`;

const mealSubtype = [];
let dishes;
switch (choice) {
  case 1:
    subtypes = subtypePizza;
    dishes = 3;
    // !!! wird zu mealsubtype.length
    const pizzaSubtypes = ["Margharita", "Calzone", "Quattro formaggi"];
    for (let i = 0; i < pizzaSubtypes.length; i++) {
      mealSubtype.push(pizzaSubtypes[i]);
    }
    break;
  case 2:
    subtypes = subtypePasta;
    dishes = 2;
    const pastaSubtypes = ["Bolognese", "al olio"];
    for (let i = 0; i < pastaSubtypes.length; i++) {
      mealSubtype.push(pastaSubtypes[i]);
    }
    break;
  case 3:
    subtypes = subtypeSalad;
    dishes = 4;
    const saladSubtypes = ["Salad greek style", "Asian rice salad", "Tuna salad", "Grandmas noodle salad"];
    for (let i = 0; i < saladSubtypes.length; i++) {
      mealSubtype.push(saladSubtypes[i]);
    }
}
console.log(mealSubtype);

let subchoice;
evaluation = false;
// better reset value
while (evaluation == false) {
  let subchoice = window.prompt("Please enter the number of disired dish:" + subtypes);
  if (isNaN(subchoice) || subchoice <= 0 || subchoice > dishes) {
    window.alert(`Sorry, invalid choice, please pick 1-${dishes}`);
  } else {
    evaluation = true;
  }
}

// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
