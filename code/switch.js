// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

let name = prompt(`What is your name?`, "");

switch (name) {
  case "":
    alert(
      "That's alright, not everyone wants to give out their name. Welcome to JavaScript Pizzeria!"
    );
    break;
  default:
    alert(`Hi ${name}. Welcome to JavaScript Pizzeria!`);
    break;
}
// Step 2 - Food choice
// Your code goes here

let order = prompt(
  `What would you like to order? 
  Choose a number from the following:
  1. Pizza
  2. Pasta
  3. Salad`,
  ""
);

let foodtype = "";

switch (order) {
  case "1":
    alert("Alright, you want Pizza. Excellent choice!");
    foodtype = "Pizza";
    break;
  case "2":
    alert("Alright, you want Pasta. Excellent choice!");
    foodtype = "Pasta";
    break;
  case "3":
    alert("Alright, you want Salad. Excellent choice!");
    foodtype = "Salad";
    break;
  default:
    alert(`Sorry, you either didn't choose a number or that is not something that we have. 
  Please contact us again if you want to order one of our dishes.`);
    break;
}

// Step 3 - Subtype choice
// Your code goes here

let subChoice = "";

switch (foodtype) {
  case "Pizza":
    let subPizza = prompt(`What pizza do you want?
        We have the following options:
        1. Capricciosa
        2. Vesuvio
        3. Margherita`);

    switch (subPizza) {
      case "1":
        alert("One Capricciosa, got it.");
        subChoice = "Capricciosa";
        break;
      case "2":
        alert("One Vesuvio, got it.");
        subChoice = "Vesuvio";
        break;
      case "3":
        alert("One Margherita, got it.");
        subChoice = "Margherita";
        break;
    }
    break;
  case "Pasta":
    let subPasta = prompt(`What pasta do you want?
    We have the following options:
    1. Pasta Carbonara
    2. Lasagna
    3. Pasta Bolognese`);

    switch (subPasta) {
      case "1":
        alert("One Pasta Carbonara, got it.");
        subChoice = "Pasta Carbonara";
        break;
      case "2":
        alert("One Lasagna, got it.");
        subChoice = "Lasagna";
        break;
      case "1":
        alert("One Pasta Bolognese, got it.");
        subChoice = "Pasta Bolognese";
        break;
    }
    break;

  case "Salad":
    let subSalad = prompt(`What salad do you want?
    We have the following options:
    1. Caesar Salad
    2. Caprese Salad
    3. Greek Salad`);

    switch (subSalad) {
      case "1":
        alert("One Caesar Salad, got it.");
        subChoice = "Caesar Salad";
        break;
      case "2":
        alert("One Caprese Salad, got it.");
        subChoice = "Caprese Salad";
        break;
      case "3":
        alert("One Greek Salad, got it.");
        subChoice = "Greek Salad";
        break;
    }
    break;
  default:
    alert("That is not one of our dishes. Please try again from the start.");
    break;
}

// Step 4 - Age
// Your code goes here

let age = prompt(
  `Who is this order for?
1. Adult
2. Child`
);

// Step 5 - Order confirmation
// Your code goes here

let confirmation;

switch (age) {
  case "1":
    confirmation =
      prompt(`Alright, so one adult-sized ${subChoice}. That will be $17.00. 
  Is this what you want to order?
  Enter a number to confirm:
  1. Yes
  2. No`);
    break;
  case "2":
    confirmation =
      prompt(`Alright, so one child-sized ${subChoice}. That will be $12.00. 
  Is this what you want to order?
  Enter a number to confirm:
  1. Yes
  2. No`);
    break;
  default:
    alert(
      "Sorry, there seems to have been an error somewhere. Please come back again."
    );
    break;
}

switch (confirmation) {
  case "1":
    alert(
      `Thank you for your order! Your food is being prepared and will be ready in 10-15 minutes.`
    );
    break;
  case "2":
    alert(`That's alright, please feel free to order from us in the future!`);
    break;
  default:
    alert(
      "Sorry, there seems to have been an error somewhere. Please come back again."
    );
    break;
}
