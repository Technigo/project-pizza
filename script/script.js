// Start here

// Step 1 - Welcome and introduction
window.alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

//input and validation for username
let userName = "";
// name seems to be reserved word, in ${name} got crossed out, so picked different one
do {
  userName = window.prompt("Please fill in your name, minimum 3 characters: ");
} while (userName.length < 3)
window.alert(`Good to have you here ${userName} !`);
// end step1

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
  // console.log(typeof (choice)), type of input is string

  // evaluation of meal type choice
  if (choice === null) {
    throw new Error("Order process terminated.");
    // triggers an error on purpose which stops script, if user clicked on "cancel"-> cancel deliveres "null"
  } else if (choice != 1 && choice != 2 && choice != 3) {
    // not || ! test if all are wrong
    window.alert("Sorry, invalid choice, please pick 1-3.");
  } else {
    evaluation = true;
  }

  // --working as well, but longer--
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
let mealType = null;
choice = Number(choice);
// ...because is string so far. switch uses strict ===
switch (choice) {
  case 1:
    mealType = "Pizza";
    break;
  case 2:
    mealType = "Pasta";
    break;
  case 3:
    mealType = "Salad";
    break;
}
window.alert(`Got it, you picked ${mealType}.`);
// end step2

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

let subTypes = null;
// holds text options for subtypes of meals
const mealSubtype = [];
// gets filled with specific meal options
let orderSum = 0;
switch (choice) {
  case 1:
    subTypes = optionsForPizza;
    const pizzaSubtypes = ["Margharita", "Calzone", "Quattro formaggi"];
    for (let i = 0; i < pizzaSubtypes.length; i++) {
      mealSubtype.push(pizzaSubtypes[i]);
    }
    orderSum = 15;
    break;
  case 2:
    subTypes = optionsForPasta;
    const pastaSubtypes = ["Bolognese", "al olio"];
    for (let i = 0; i < pastaSubtypes.length; i++) {
      mealSubtype.push(pastaSubtypes[i]);
    }
    orderSum = 12;
    break;
  case 3:
    subTypes = optionsForSalad;
    const saladSubtypes = ["Salad greek style", "Asian rice salad", "Tuna salad", "Grandmas noodle salad"];
    for (let i = 0; i < saladSubtypes.length; i++) {
      mealSubtype.push(saladSubtypes[i]);
    }
    orderSum = 10;
}

//validation user suboptions mealchoice 
let subchoice = null;
// holds a number
evaluation = false;
// better reset value
while (evaluation == false) {
  let userSubchoice = window.prompt("Please enter the number of disired dish:" + subTypes);
  if (isNaN(userSubchoice) || userSubchoice <= 0 || userSubchoice > mealSubtype.length) {
    window.alert(`Sorry, invalid choice, please pick 1 - ${mealSubtype.length} `);
  } else {
    evaluation = true;
  }
  subchoice = userSubchoice - 1;
  //otherwise value not visible outside. return not working.
}
window.alert(`Good choice! You picked: ${mealSubtype[subchoice]} `);
// end step3

// Step 4 - Age
//validation user age
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
  } else if (ageinput > 122) {
    window.alert("Whow! You are older than the oldest person who ever lived on earth! Or maybe a typo?");
  } else
    evaluation = true;
}

//order sum up
window.alert(`OK, we are almost done.
This is your order:
${mealType}, ${mealSubtype[subchoice]}, price: ${orderSum} Euro.`);
// end step4

// Step 5 - Order confirmation
let confirmation = window.confirm("Do you want to order the selected dish now?");
confirmation === true
  ? window.alert(`Thank you ${userName}, we received your order!
Our 5 star chef is now preparing your dish right away.`)
  : window.alert(`What a pity, we hope to see you soon again!`);
// end step5