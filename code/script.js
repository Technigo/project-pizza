// Step 1 - Welcome and introduction
alert(`Welcome to our Javascript Pizzeria. Ready to order? - Click 'OK' to begin.`);

const name = prompt(`Please enter your name:`);
console.log(`Customer: ${name}`);

alert(`Hi ${name}, it's nice to see you here!`);

// Step 2 - Food choice

const foodOption = prompt(`What would you like to order?

Enter the number of your choice.
1 - Pizza 
2 - Hamburger
3 - Salad
`);

let foodSelected;
if (foodOption === "1") {
   foodSelected = "Pizza";
} else if (foodOption === "2") {
   foodSelected = "Hamburger";
} else if (foodOption === "3") {
   foodSelected = "Salad";
} else {
   alert(`Couldn't you decide what to choose? 
    Please, start over and choose what you want to eat.`);
   exit(1);
}

console.log(`Food type selected: ${foodSelected}`);

alert(`You chosed ${foodSelected}`);

// Step 3 - Subtype choice

let pizzaSelected;

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
   } else if (foodChoice === "3") {
      pizzaSelected = "Capricciosa";
   } else {
      alert(`Couldn't you decide what to choose? 
     Please, start over and choose what you want to eat.`);
      exit(1);
   }
   console.log(`Food subtype selected: ${pizzaSelected}`);
}

let hamburgerSelected;

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
   } else if (foodChoice === "3") {
      hamburgerSelected = "Classic burger";
   } else {
      alert(`Couldn't you decide what to choose? 
     Please, start over and choose what you want to eat.`);
      exit(1);
   }

   console.log(`Food subtype selected: ${hamburgerSelected}`);
}

let saladSelected;

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
   } else if (foodChoice === "3") {
      saladSelected = "Greek salad";
   } else {
      alert(`Couldn't you decide what to choose? 
     Please, start over and choose what you want to eat.`);
      exit(1);
   }
   console.log(`Food subtype selected: ${saladSelected}`);
}

alert(`Good choice, you chosed to order a ${pizzaSelected || hamburgerSelected || saladSelected}`);

// Step 4 - Age

const age = prompt(`Is this meal for a child or an adult? 
Type your age:`);
console.log(`${age} years`);

if (age >= 15) {
   alert(`One adult sized ${pizzaSelected || hamburgerSelected || saladSelected} will be prepared for you.
That will be €10`);
} else if (age <= 14) {
   alert(`One child sized ${
      pizzaSelected || hamburgerSelected || saladSelected
   } will be prepared for you.\nThat will be €8
`);
} else {
   alert(`Oops, we didn't get your age!
  We need to know your age to prepare an appropiate meal size. 
  Please start over and remember to fill in all of the input fields`);
   exit(1);
}

const orderConfirmation = prompt(`Do you want to place the order?
  \nEnter the number that represents your choice:
    1 - Yes
    2 - No`);

console.log(`Want to finish the order (1=Yes 2=No): ${orderConfirmation}`);

// Step 5 - Order confirmation
// Your code goes here
