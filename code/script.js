// Start here
let subChoice
// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let person = prompt("Please enter your name:", "Harry Potter");
// Step 2 - Food choice
// Your code goes here
alert(`Hello ${person}! What would you like to order?`)
// later fix invalied, for example other numbers.
let foodChoice = prompt(`Select the number of the food you would like to eat. 1.Pizza 2.Pasta 3.Salad`, "");

// Step 3 - Subtype choice
// Your code goes here
if (foodChoice === "1") { foodChoice = "Pizza"
  alert("You have chosen Pizza!")
  subChoice = prompt(`What kind of Pizza would you like to eat? 1.Margherita 2.Pepperoni 3.Hawaiian`, "")
  if (subChoice === "1") { subChoice = "Margherita"
    alert("You have chosen Margherita!")
  } else if (subChoice === "2") { subChoice = "Pepperoni"
    alert("You have chosen Pepperoni!")
  } else { subChoice = "Hawaiian"
    alert("You have chosen Hawaiian!")
  }
} else if (foodChoice === "2") { foodChoice = "Pasta"
  alert("You have chosen Pasta!")
  subChoice = prompt(`What kind of pasta would you like to eat? 1.Spaghetti Bolognaise 2.Lasagne 3.Fettuccine Alfredo`, "")
  if (subChoice === "1") { subChoice = "Spaghetti Bolognaise"
    alert("You have chosen Spaghetti Bolognaise!")
  } else if (subChoice === "2") { subChoice = "Lasagne"
    alert("You have chosen Lasagne!")
  } else { subChoice = "Fettuccine Alfredo"
    alert("You have chosen Fettuccine Alfredo!")
  }
} else { foodChoice = "Salad"
  alert("you have chosen Salad!")
  subChoice = prompt(`What kind of Sallad would you like to eat? 1.Caesar salad 2.Greek salad 3.Pasta salad`, "")
  if (subChoice === "1") { subChoice = "Caesar salad"
    alert("You have chosen Caesar salad!")
  } else if (subChoice === "2") { subChoice = "Greek salad"
    alert("You have chosen Greek salad!")
  } else { subChoice = "Pasta salad"
    alert("You have chosen Pasta salad!")
  }
};

// Step 4 - Age
// Your code goes here
let age = prompt(`Is the food for an adult or for a child? Please enter your age`, "");
if ( parseInt(age) <= 15 ) {
  alert("The food is for a child")
} else {
  alert("The food is for an adult")
};

// Step 5 - Order confirmation
// Your code goes here
let confirmation = confirm(`Please confirm that your name is ${person}, that the food you ordered is ${foodChoice} and ${subChoice} and that 
  you are ${age} years old `)
  if ( confirmation === true ) {
    alert("Thank you for your order! Your food will arrive soon.")
  } else {
    alert("Sorry, please return in the future.")
  };