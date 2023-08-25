// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);
let name = prompt(`What is your name?`, "");

if (name === "") {
  alert(
    "That's alright, not everyone wants to give out their name. Welcome to JavaScript Pizzeria!"
  );
} else {
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
let orderConfirmation = "";

if (order === "1") {
  orderConfirmation = "Pizza";
} else if (order === "2") {
  orderConfirmation = "Pasta";
} else if (order === "3") {
  orderConfirmation = "Salad";
} else {
  alert(`Sorry, that is not something that we have. 
  Please contact us again if you want to order one of our dishes.`);
}
if (orderConfirmation != "") {
  alert(`Alright, you want ${orderConfirmation}. Excellent choice!`);

  // Step 3 - Subtype choice
  // Your code goes here

  //The actual dish the customer wants to order
  let subtype = "";

  if (orderConfirmation === "Pizza") {
    let subPrompt = prompt(
      `What pizza do you want?
  We have the following options:
  1. Capricciosa
  2. Vesuvio
  3. Margherita`,
      ""
    );

    if (subPrompt === "1") {
      subtype = "Capricciosa";
    } else if (subPrompt === "2") {
      subtype = "Vesuvio";
    } else if (subPrompt === "3") {
      subtype = "Margherita";
    } else {
      alert(`That is not one of our dishes. Please try again from the start.`);
    }
  } else if (orderConfirmation === "Pasta") {
    let subPrompt = prompt(
      `What pasta do you want?
  We have the following options:
  1. Pasta Carbonara
  2. Lasagna
  3. Pasta Bolognese`,
      ""
    );
    if (subPrompt === "1") {
      subtype = "Pasta Carbonara";
    } else if (subPrompt === "2") {
      subtype = "Lasagna";
    } else if (subPrompt === "3") {
      subtype = "Pasta Bolognese";
    } else {
      alert(`That is not one of our dishes. Please try again from the start.`);
    }
  } else if (orderConfirmation === "Salad") {
    let subPrompt = prompt(
      `What salad do you want?
  We have the following options:
  1. Caesar Salad
  2. Caprese Salad
  3. Greek Salad`,
      ""
    );
    if (subPrompt === "1") {
      subtype = "Caesar Salad";
    } else if (subPrompt === "2") {
      subtype = "Caprese Salad";
    } else if (subPrompt === "3") {
      subtype = "Greek Salad";
    } else {
      alert(`That is not one of our dishes. Please try again from the start.`);
    }
  }

  //A check that prevents code from running if a subtype hasn't been chosen
  if (subtype != "") {
    alert(`One ${subtype}, got it!`);

    // Step 4 - Age
    // Your code goes here

    let age = prompt(
      `Who is this order for?
1. Adult
2. Child`,
      ""
    );
    // Step 5 - Order confirmation
    // Your code goes here

    //A variable that keeps track of if the customer wants to confirm their order or cancel it
    let confirmation = "";

    if (age === "1") {
      confirmation =
        prompt(`Alright, so one adult-sized ${subtype}. That will be $17.00. 
  Is this what you want to order?
  Enter a number to confirm:
  1. Yes
  2. No`);
    } else if (age === "2") {
      confirmation =
        prompt(`Alright, so one child-sized ${subtype}. That will be $12.00. 
  Is this what you want to order?
  Enter a number to confirm:
  1. Yes
  2. No`);
    } else {
      alert(
        "Sorry, there seems to have been an error somewhere. Please come back again."
      );
    }

    if (confirmation === "1") {
      alert(
        `Thank you for your order! Your food is being prepared and will be ready in 10-15 minutes.`
      );
    } else if (confirmation === "2") {
      alert(`That's alright, please feel free to order from us in the future!`);
    } else {
      `Sorry, there seems to have been an error somewhere. Please come back again.`;
    }
  }
}
