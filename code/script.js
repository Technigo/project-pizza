// Start here

const pizzeriaName = "Naima's Pizzeria";
let subtype;

// Step 1 - Welcome and introduction
// Your code goes here
alert(`Welcome to ${pizzeriaName}. Ready to Start? - Click 'OK' to begin.`);
const customerName = prompt("Please enter your name.");
alert(`Nice to meet you, ${customerName}!`);

// Step 2 - Food choice
// Your code goes here
const foodChoice = prompt(
  `What would like to order from the menu below? Please enter only a number. 
  1 - Pizza 
  2 - Pasta 
  3 - Salad`
);

if (foodChoice === "1") {
  alert(`Great! You have chosen pizza.`);
} else if (foodChoice === "2") {
  alert(`Great! You have chosen pasta`);
} else if (foodChoice === "3") {
  alert(`Great you have chosen salad`);
} else {
  alert("Invalid number! Please select between the numbers 1 and 3.");
}

// Step 3 - Subtype choice
// Your code goes here

if (foodChoice === "1") {
  subtype =
    prompt(`Please select which pizza you would like to order. Enter only the number:
  1 - Margarita
  2 - Spicy Chicken
  3 - Vegetarian`);

  if (subtype === "1") {
    alert("You chose Margarita Pizza!");
  } else if (subtype === "2") {
    alert("You chose Spicy Chicken Pizza");
  } else if (subtype === "3") {
    alert("You chose Vegetarian Pizza");
  }
} else if (foodChoice === "2") {
  subtype =
    prompt(`Please select which pasta you would like to order. Enter only the number:
1 - Creamy Mushroom Pasta
2 - Bolenaise Spaghetti
3 - Pomodoro Fettucini`);

  if (subtype === "1") {
    alert("You chose Creamy Mushroom Pasta");
  } else if (subtype === "2") {
    alert("You chose Bolenaise Spaghetti");
  } else if (subtype === "3") {
    alert("You chose Pomodoro Fettucini");
  }
} else if (foodChoice === "3") {
  subtype =
    prompt(`Please select which salad you would like to order. Enter only the number:
1 - Avocado and salmon salad
2 - Chévre and walnut salad
3 - Caesar salad`);

  if (subtype === "1") {
    alert("You chose Avocado and salmon salad");
  } else if (subtype === "2") {
    alert("You chose Chévre and walnut salad");
  } else if (subtype === "3") {
    alert("You chose Caesar salad");
  }
} else {
  alert("Invalid number! Please select between the numbers 1 and 3.");
}
// Step 4 - Age
// Your code goes here
const age = prompt("Is this a child or an adult order? Please type your age:");
age;

if (age >= 18) {
  prompt(
    `Ok, one adult sized order. That will be 150 euros. Would you like to proceed with the order?
    Enter a number to confirm the order.
    1 - Yes
    2 - No`
  );
} else if (age > 18) {
  alert(`Ok, one child sized order. That will be 150 euros. Would you like to proceed with the order?
  Enter a number to confirm the order.
  1 - Yes
  2 - No`);
} else {
  alert("Invalid number!");
}

// Step 5 - Order confirmation
// Your code goes here
