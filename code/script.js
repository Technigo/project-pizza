// Start here
alert("Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.");

var name = prompt("What is your name?");
alert("Hi, " + name + "!");

let pizzacost = 20
let pastacost = 30
let saladcost = 40

// Food choice
var choice = prompt("What type of food would you like to order?\n1. Pizza\n2. Pasta\n3. Salad\nEnter the number of your choice");

if (choice === "1") {
  alert("You have chosen Pizza");
  
var pizzaChoice = prompt("What pizza would you like to order?\n1. Margherita\n2. Napolitana\n3. Hawaiian\nEnter the number of your choice");

  if (pizzaChoice === "1") {
    ordermessage = "Margherita Pizza";
    alert("You have chosen Margherita");
    cost = pizzacost;
  } else if (pizzaChoice === "2") {
    ordermessage = "Napolitana Pizza" ;
    cost = pizzacost;
    alert("You have chosen Napolitana");
  } else if (pizzaChoice === "3") {
    ordermessage = "Hawaiian Pizza";
    cost = pizzacost;
    alert("You have chosen Hawaiian");
  } else {
    alert("Invalid choice. Please refresh and select a number between 1 and 3.");
  }
} else if (choice === "2") {
  alert("You have chosen Pasta");
  
  var pastaChoice = prompt("What pasta would you like to order?\n1. Fettucini\n2. Spaghetti\n3. Ravioli\nEnter the number of your choice");

  if (pastaChoice === "1") {
    ordermessage = "Fettucini Pasta";
    cost = pastacost;
    alert("You have chosen Fettucini Pasta");
  } else if (pastaChoice === "2") {
     ordermessage = "Spaghetti Pasta";
    cost = pastacost;
    alert("You have chosen Spaghetti Pasta");
  } else if (pastaChoice === "3") {
    ordermessage = "Ravioli Pasta";
    cost = pastacost;
    alert("You have chosen Ravioli Pasta");
  } else {
    alert("Invalid choice. Please refresh and select a number between 1 and 3.");
  }
} else if (choice === "3") {
  alert("You have chosen Salad");
  
  var saladChoice = prompt("What salad would you like to order?\n1. Caesar\n2. Chevre\n3. Greek\nEnter the number of your choice");

  if (saladChoice === "1") {
    ordermessage = "Caesar Salad";
    cost = saladcost;
    alert("You have chosen Caesar Salad");
  } else if (saladChoice === "2") {
    ordermessage = "Chevre Salad";
    cost = saladcost;
    alert("You have chosen Chevre Salad");
  } else if (saladChoice === "3") {
    ordermessage = "Greek Salad"
    cost = saladcost;
    alert("You have chosen Greek Salad");
  } else {
    alert("Invalid choice. Please refresh and select a number between 1 and 3.");
  }
} else {
  alert("Invalid choice. Please refresh and select a number between 1 and 3.");
}

// Age & cost
var age = prompt("Is this food for a child or an adult? Type your age:");
if (age < 18) {
  cost *= 0.95;
  
  // Order confirmation
  
 var confirmation = prompt("One child size " + ordermessage + " will be prepared for you. That'll be €" + cost + "\nAre you sure you want to order this?\nEnter a number to confirm:\n1. Yes\n2. No");

    if (confirmation === "1") {
      alert("Thank you for your order!");
    } else {
      alert("We are sorry to see you leave. Come back anytime you want.");
    }
  } else {
    var confirmation = prompt("One adult size " + ordermessage + " will be prepared for you. That'll be €" + cost + "\nAre you sure you want to order this?\nEnter a number to confirm:\n1. Yes\n2. No");

    if (confirmation === "1") {
      alert("Thank you for your order!");
    } else {
      alert("We are sorry to see you leave. Come back anytime you want.");
    }
  }

 


