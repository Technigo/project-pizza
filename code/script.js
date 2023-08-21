// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);
let message_name = prompt(`Please enter your name:`);
alert(`Nice to meet you ${message_name}`);
// Step 2 - Food choice
// Your code goes here
let orderName = Number(
  prompt(
    `What type of food would you like to order? \nPlease enter a number: \n 1- Pizza \n 2- Pasta \n 3- Salad`
  )
);
let typeFood;
switch (orderName) {
  case 1:
    typeFood = "Pizza";
    break;
  case 2:
    typeFood = "Pasta";
    break;
  case 3:
    typeFood = "Salad";
    break;
  default:
    typeFood = "Invalid type";
    break;
}
alert(`You've chosen ${typeFood} !`);
let firstOption = typeFood;
// // Step 3 - Subtype choice
// // Your code goes here
switch (firstOption) {
  case "Pizza":
    let pizza_type = Number(
      prompt(
        `Select a Pizza type: \n Enter a number:\n 1- Napolitana \n2- Hawaian \n3- Pepperoni`
      )
    );
    let option_pizza;
    switch (pizza_type) {
      case 1:
        option_pizza = "Napolitana";
        break;
      case 2:
        option_pizza = "Hawaian";
        break;
      case 3:
        option_pizza = "Pepperoni";
        break;
      default:
        option_pizza = "Invalid pizza type";
        break;
    }
    alert(`You've chosen ${option_pizza}`);
    break;

  case "Pasta":
    let pasta_type = Number(
      prompt(
        `Select a pasta type : \n Enter a number \n 1- Spaghetti Carbonara \n2- Fettuccine Alfredo \n3- Cheesy Tortellini`
      )
    );
    let option_pasta;
    switch (pasta_type) {
      case 1:
        option_pasta = "Spaghetti Carbonara";
        break;
      case 2:
        option_pasta = "Fettuccine Alfredo";
        break;
      case 3:
        option_pasta = "Cheesy Tortellini";
        break;

      default:
        option_pasta = `Invalid pasta type`;
        break;
    }
    alert(`You've chosen ${option_pasta}`);
    break;

  case "Salad":
    let salad_type = Number(
      prompt(
        `Select a salad type  \n Enter a number \n 1- Caesar Salad \n2- Caprese Salad \n3- Greek Salad`
      )
    );
    let option_salad;
    switch (salad_type) {
      case 1:
        option_salad = "Caesar Salad";
        break;
      case 2:
        option_salad = "Caprese Salad";
        break;
      case 3:
        option_salad = "Greek Salad";
        break;

      default:
        option_salad = `Invalid salad type`;
        break;
    }
    alert(`You've chosen ${option_salad}`);
    break;
}

// Step 4 - Age
// Your code goes here
let age = Number(
  prompt(`Is this food for a child or an adult? Type your age:`)
);
let child;
let adult;
if (age <= 18) {
  child = Number(
    prompt(
      `One child sized will be prepared for you. That'll be €10. Are you sure you want to order this? \n Enter a number to confirm: \n1- Yes\n2- No`
    )
  );
} else {
  adult = Number(
    prompt(
      `One adult sized will be prepared for you. That'll be €15. Are you sure you want to order this? \n Enter a number to confirm: \n1- Yes\n2- No `
    )
  );
}
// Step 5 - Order confirmation
// Your code goes here
if (child == 1 || adult == 1) {
  alert(
    `Thank you for your order! Your delicious meal will be prepared. See you soon!👋`
  );
} else if (child == 2 || adult == 2) {
  alert(`No problem, come back and order anytime you want.`);
} else {
  alert(`Invalid choice. Please select 1 Yes or 2 for No.`);
}
