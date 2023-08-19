// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let name = prompt(`Please enter your name:`);

alert(`Hi ${name}!`);

// Step 2 - Food choice
// Your code goes here
let food = parseInt(prompt(`What would you like to order? 
Enter number 1-3 to choose among the followings:
1. Pizza
2. Pasta
3. Sallad`));

switch (food) {
  case 1:
    alert(
      `Thank you. Let's get you a pizza!`
    );
    break;
  case 2:
    alert(
      `Thank you. Let's get you a pasta!`
    );
    break;
  case 3:
    alert(
      `Thank you. Let's get you a sallad!`
    );
    break;
  default:
    alert(
      `Invalid choice. Please enter number 1-3 to choose among the dishes.`
    );
    break;
}

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
