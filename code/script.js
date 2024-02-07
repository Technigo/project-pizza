// Step 1 - Welcome and introduction
alert(`Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`);

const name = prompt(`Please enter your name:`);
console.log(name);

alert(`Hi ${name}, it's nice to see you here!`);

// Step 2 - Food choice

const foodOption = prompt(`What would you like to order?

Enter the number of your choice.
1 - Pizza 
2 - Hamburger
3 - Salad
`);

console.log(foodOption);

let foodSelected = "";
if (foodOption === "1") {
   foodSelected = "Pizza";
} else if (foodOption === "2") {
   foodSelected = "Hamburger";
} else if (foodOption === "3") {
   foodSelected = "Salad";
} else {
   alert(`Couldn't you decide what to choose? 
    Please, start over and choose what you want to eat.`);
}

alert(`You chosed ${foodSelected}`);

// Step 3 - Subtype choice

let pizzaSelected = "";

if (foodOption === "1") {
   const foodChoice = prompt(`What type of pizza would you like to order?
   
   Enter the number of your choice.
1 - Napolitan
2 - Margherita
3 - Capricciosa
`);
   if (foodChoice === "1") {
      pizzaSelected = "Napolitan";
   } else if (foodChoice === "2") {
      pizzaSelected = "Margherita";
   } else {
      pizzaSelected = "Capricciosa";
   }
}

let hamburgerSelected = "";

if (foodOption === "2") {
   const foodChoice = prompt(`What type of hamburger would you like to order?
  
  Enter the number of your choice.
1 - Halloumi burger
2 - Plant-based burger
3 - Classic burger
`);
   if (foodChoice === "1") {
      hamburgerSelected = "Halloumi burger";
   } else if (foodChoice === "2") {
      hamburgerSelected = "Plant-based burger";
   } else {
      hamburgerSelected = "Classic burger";
   }
}

let saladSelected = "";

if (foodOption === "3") {
   const foodChoice = prompt(`What type of salad would you like to order?
 
 Enter the number of your choice.
1 - Vegan salad
2 - Caesar salad
3 - Greek salad
`);
   if (foodChoice === "1") {
      saladSelected = "Vegan salad";
   } else if (foodChoice === "2") {
      saladSelected = "Caesar salad";
   } else {
      saladSelected = "Greek salad";
   }
}

alert(`Good choice, you chosed to order a ${pizzaSelected || hamburgerSelected || saladSelected}`);

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
