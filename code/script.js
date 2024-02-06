// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

let customerName = prompt("What's your name?");
alert(`Hi ${customerName}!`);

// Step 2 - Food choice
// Your code goes here

let food = prompt(`What type of food would you like to order? 
  Enter a number: 
1 - Pizza 
2 - Pasta 
3 - Salad`);

if (food === "1") {
  alert(`You've chosen pizza!`);
} else if (food === "2") {
  alert(`You've chosen pasta!`);
} else if (food === "3") {
  alert(`You've chosen salad!`);
}


// Step 3 - Subtype choice
// Your code goes here


if (food === "1") {


let pizzaType = prompt(`Select a pizza type
  Enter a number:
1 - Napolitana
2 - Hawaian
3 - Pepperoni`);

switch (pizzaType) {
  case "1":
    alert(`You've chosen napolitana!`);
    break;
  case "2":
    alert(`You've chosen hawian!"`);
    break;
  case "3":
    alert(`You've chosen pepperoni!`);
    break;
}
}

if (food === "2") {

let pastaType = prompt(`Select a pasta type
  Enter a number:
1 - Spagetti carbonara
2 - Fettuccine Alfredo
3 - Cheesy tortellini`);

switch (pastaType) {
  case "1":
    alert(`You've chosen spagetti carbonara!`);
    break;
  case "2":
    alert(`You've chosen fettuccine Alfredo!`);
    break;
  case "3":
    alert(`You've chosen cheesy tortellini!`);
    break;
}

}

if (food === "3") {

  let saladType = prompt(`Select a salad type
    Enter a number:
  1 - Ceasar salad
  2 - Caprese salad
  3 - Greek salad`);
  
  switch (saladType) {
    case "1":
      alert(`You've chosen ceasar salad!`);
      break;
    case "2":
      alert(`You've chosen caprese salad!`);
      break;
    case "3":
      alert(`You've chosen greek salad!`);
      break;
  }
  
  }

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
