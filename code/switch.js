// Start here

//variable that gets set to false if an incorrect answer is provided at any point which then stops the code from running any further
let codeWorking = true;

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

//A variable that gets loaded with the value of what the customer chooses as their main category
let foodtype = "";

switch (order) {
  case "1":
    foodtype = "Pizza";
    alert(`Alright, you want ${foodtype}. Excellent choice!`);
    break;
  case "2":
    foodtype = "Pasta";
    alert(`Alright, you want ${foodtype}. Excellent choice!`);
    break;
  case "3":
    foodtype = "Salad";
    alert(`Alright, you want ${foodtype}. Excellent choice!`);
    break;
  default:
    alert(`Sorry, you either didn't choose a number or that is not something that we have. 
  Please contact us again if you want to order one of our dishes.`);
    //If an incorrect option is entered, the variable is changed to false which will prevent the next section of code from running
    codeWorking = false;
}

// Step 3 - Subtype choice
// Your code goes here

//The actual dish the customer wants to order
let subChoice = "";

//A boolean switch that will only run if the variable codeWorking is true.
switch (true) {
  case codeWorking == true:
    switch (foodtype) {
      case "Pizza":
        let subPizza = prompt(`What pizza do you want?
                  We have the following options:
                  1. Capricciosa
                  2. Vesuvio
                  3. Margherita`);

        switch (subPizza) {
          case "1":
            subChoice = "Capricciosa";
            alert(`One ${subChoice}, got it.`);
            break;
          case "2":
            subChoice = "Vesuvio";
            alert(`One ${subChoice}, got it.`);
            break;
          case "3":
            subChoice = "Margherita";
            alert(`One ${subChoice}, got it.`);
            break;
          default:
            alert(
              `Sorry, you either didn't choose a number or that is not something that we have. Please contact us again if you want to order one of our dishes.`
            );
            codeWorking = false;
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
            subChoice = "Pasta Carbonara";
            alert(`One ${subChoice}, got it.`);
            break;
          case "2":
            subChoice = "Lasagna";
            alert(`One ${subChoice}, got it.`);
            break;
          case "3":
            subChoice = "Pasta Bolognese";
            alert(`One ${subChoice}, got it.`);
            break;
          default:
            alert(
              `Sorry, you either didn't choose a number or that is not something that we have. Please contact us again if you want to order one of our dishes.`
            );
            codeWorking = false;
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
            subChoice = "Caesar Salad";
            alert(`One ${subChoice}, got it.`);
            break;
          case "2":
            subChoice = "Caprese Salad";
            alert(`One ${subChoice}, got it.`);
            break;
          case "3":
            subChoice = "Greek Salad";
            alert(`One ${subChoice}, got it.`);
            break;
          default:
            alert(
              `Sorry, you either didn't choose a number or that is not something that we have. Please contact us again if you want to order one of our dishes.`
            );
            codeWorking = false;
        }
        break;
    }
    break;
}

// Step 4 - Age
// Your code goes here

//A variable that keeps track of if a customer's order is for an adult or a child
let age;
switch (true) {
  case codeWorking == true:
    age = prompt(
      `Who is this order for?
          1. Adult
          2. Child`
    );

    switch (age) {
      case "1":
        alert("One adult portion, perfect.");
        break;
      case "2":
        alert("One child sized portion, perfect.");
        break;
      default:
        alert(
          "Please choose one of the provided alternatives. Please try again from the start."
        );
        codeWorking = false;
    }
    break;
}

// Step 5 - Order confirmation
// Your code goes here

//A variable that keeps track of if the customer wants to confirm their order or cancel it
let confirmation;

switch (true) {
  case codeWorking == true:
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
    }

    switch (confirmation) {
      case "1":
        alert(
          `Thank you for your order! Your food is being prepared and will be ready in 10-15 minutes.`
        );
        break;
      case "2":
        alert(
          `That's alright, please feel free to order from us in the future!`
        );
        break;
      default:
        alert(
          "Sorry, there seems to have been an error somewhere. Please come back again."
        );
    }
    break;
}
