// Start here

// Step 1 - Welcome and introduction
window.alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

//input and validation for username
let username = "";
do {
  username = window.prompt("Please fill in your name, minimum 3 characters: ");
} while (username.length < 3)
window.alert(`Good to have you here ${username} !`);
// Your code goes here

// Step 2 - Food choice
let evaluation = false;
let choice = null;
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

  // evaluation of meal type choice
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

//confirmation user meal type choice
let mealtype = null;
choice = Number(choice);
// ...because is string so far. switch uses strict =
switch (choice) {
  case 1:
    mealtype = "Pizza";
    break;
  case 2:
    mealtype = "Pasta";
    break;
  case 3:
    mealtype = "Salad";
    break;
}
window.alert(`Got it, you picked ${mealtype}.`);
// Your code goes here

// Step 3 - Subtype choice
const optionsForPizza = `
1) Margherita
2) Calzone
3) Quattro formaggi`;
const optionsForPasta = `
1) Bolognese
2) al olio`;
const optionsForSalad = `
1) Salad greek style
2) Asian rice salad
3) Tuna salad
4) Grandmas noodle salad`;

let subtypes = null;
// holds text options for subtypes of meals
const mealSubtype = [];
// gets filled with specific meal options
let ordersum = 0;
switch (choice) {
  case 1:
    subtypes = optionsForPizza;
    const pizzaSubtypes = ["Margharita", "Calzone", "Quattro formaggi"];
    for (let i = 0; i < pizzaSubtypes.length; i++) {
      mealSubtype.push(pizzaSubtypes[i]);
    }
    ordersum = 15;
    break;
  case 2:
    subtypes = optionsForPasta;
    const pastaSubtypes = ["Bolognese", "al olio"];
    for (let i = 0; i < pastaSubtypes.length; i++) {
      mealSubtype.push(pastaSubtypes[i]);
    }
    ordersum = 12;
    break;
  case 3:
    subtypes = optionsForSalad;
    const saladSubtypes = ["Salad greek style", "Asian rice salad", "Tuna salad", "Grandmas noodle salad"];
    for (let i = 0; i < saladSubtypes.length; i++) {
      mealSubtype.push(saladSubtypes[i]);
    }
    ordersum = 10;
}

//evaluation user suboptions mealchoice 
let subchoice = null;
// holds a number
evaluation = false;
// better reset value
while (evaluation == false) {
  let usersubchoice = window.prompt("Please enter the number of disired dish:" + subtypes);
  if (isNaN(usersubchoice) || usersubchoice <= 0 || usersubchoice > mealSubtype.length) {
    window.alert(`Sorry, invalid choice, please pick 1 - ${mealSubtype.length} `);
  } else {
    evaluation = true;
  }
  subchoice = usersubchoice - 1;
  //otherwise value not visible outside. return not working.
}
window.alert(`Good choice! You picked: ${mealSubtype[subchoice]} `);
// Your code goes here

// Step 4 - Age
//evaluation user age
let age = null;
evaluation = false;
while (evaluation == false) {
  let ageinput = window.prompt(`Please tell us your age, we need to make sure you have legal capacity.`);
  if (isNaN(ageinput)) {
    window.alert(`Sorry, please enter a number.`);
  } else if (ageinput <= 0) {
    window.alert("Sorry, you are not born yet, please order in 16 years.");
    throw new Error("Order process terminated.");
  } else if (ageinput > 0 && ageinput < 16) {
    window.alert("Sorry, you are too youg for business, please ask your parents to order.")
    throw new Error("Order process terminated.");
  }
  else if (ageinput > 122) {
    window.alert("Whow! You are older than the oldest person who ever lived on earth! Or maybe a typo?");
  } else
    evaluation = true;
}

//order sum up
window.alert(`OK, we are almost done.
This is your order:
${mealtype}, ${mealSubtype[subchoice]}, price: ${ordersum} Euro.`);
// Your code goes here

// Step 5 - Order confirmation
let confirmation = window.confirm("Do you want to order the selected dish now?");
confirmation === true ? window.alert(`Thank you ${username}, we received your order!
Our 5 star chef is now preparing your dish right away.`) : window.alert(`What a pity, we hope to see you soon again!`);
// Your code goes here
