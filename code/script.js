// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

const person = prompt ("Please enter your name")

alert (
  `Welcome ${person}`
)

// Step 2 - Food choice
// Your code goes here
let Food = prompt ("What's your craving today: 1 - Pizza  2 - Pasta  3- Salad Please enter the number of your choice!")

let selectedFood ="";



//If the choice is 1, it is pizza
//If the choice is 2, it is Pasta
//If the choice is 3, it is Salad
if (Food === "1") {
 selectedFood ="Pizza";
}
else if (Food === "2") {
  selectedFood ="Pasta";
}
else if (Food ==="3") {
  selectedFood ="Salad";
}
else {
  alert ("Invalid choice. Please select a valid number.");
  Process.exit(1);
}
alert (
  `You chosen ${selectedFood}`
);


// Step 3 - Subtype choice
// Your code goes here Ask the user to inser subtype based on choice of food.
let subtype  = "";
let subtypeName = []; //Store name for the subtypes pizza, pasta and salad

switch (selectedFood) {
  case "Pizza":
    subtype = prompt ('Select the type of pizza you want: 1 - Margherita 2 - Veggie 3 - Nutella Please enter the number of your choice:');
    subtypeName = ["Margherita", "Veggie", "Nutella"];
    break;
    case "Pasta":
      subtype = prompt ('Select the type of pizza you want: 1 - Shrimppasta 2 - Veggiepasta 3 - Elf style pasta Please enter the number of your choice:');
      subtypeName = ["Shrimp", "Veggie", "Elf style"];
      break;
      case "Salad":
        subtype = prompt ('Select the type of pizza you want: 1 - Shrimpsalad 2 - Greeksalad 3 - Tomatosalad Please enter the number of your choice:');
        subtypeName = ["Shrimp", "Greek", "Tomato"];
        break;
}
// To Technigo, I have tried out different codes now. The problem is that the subtypeName is tied to the variable selectedFood and I can't get it to change. I tried doing and if/if else under every variable, added
//It's probably supereasy but I think my mind is just stuck at the moment/took water over my head etc etc

if (selectedFood === "Pizza") {
  alert(`You chose ${selectedFood} and ${subtypeName[parseInt(subtype) - 1]} as your meal.`);
} else if (selectedFood === "Pasta") {
  alert(`You chose ${selectedFood} and ${subtypeName[parseInt(subtype) - 1]} as your meal.`);
} else if (selectedFood === "Salad") {
  alert(`You chose ${selectedFood} and ${subtypeName[parseInt(subtype) - 1]} as your meal.`);
}
// Step 4 - Age
// Your code goes here

let age = prompt ("Type your age in numbers")
if (age>=18) {
  alert (`The price is 150 SEK`);
}
else if (age<=18) {
  alert (`The price is 100 SEK`);
}


// Step 5 - Order confirmation
// Your code goes here

if (selectedFood === "Pizza")
{
  alert(
  `You chose ${selectedFood} and ${subtypeName[parseInt(subtype) - 1]} as your meal.`);
  

  } else if (selectedFood === "Pasta") {
  alert(
    `You chose ${selectedFood} and ${subtypeName[parseInt(subtype) - 1]} as your meal.`);
}

else if (selectedFood === "Salad") {
alert(
  `You chose ${selectedFood} and ${subtypeName[parseInt(subtype) - 1]} as your meal.`);
}

let order = prompt ("Do you want to place an order? Yes or no")
if (order==="yes") {
  alert (`Thank you for your order.`);
}
else if (order==="no") {
  alert (`Hope to see you again!`);
}
