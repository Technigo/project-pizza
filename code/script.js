// Step 1 - Welcome and introduction
alert(`Welcome to our Virtual Pizzeria. Ready to order? - Click 'OK' to begin.`);

const name = prompt(`Please enter your name:`);
console.log(`Customer: ${name}`);

//this will return a message with the name that the user typed and make it dynamic.
alert(`Hi ${name}, it's nice to see you here!`);

// Step 2 - Food choice

//by assigning foodOption with parseInt it will require the input to be a number an override the default data type of a prompt.
const foodType = parseInt(
   prompt(
      `What would you like to order?

      Enter the number of your choice.
      1 - Pizza 
      2 - Hamburger
      3 - Salad`
   )
);

let foodSelected;

if (foodType === 1) {
   foodSelected = "Pizza";
} else if (foodType === 2) {
   foodSelected = "Hamburger";
} else if (foodType === 3) {
   foodSelected = "Salad";
} else {
   alert(
      `Couldn't you decide what to choose? 
      Please, start over and type the number representing what you want to eat.`
   );
   exit(1); //Will exit the application and stop it from continue if the fields are not correctly filled.
}

console.log(`Selected food type: ${foodSelected}`);

alert(`You chosed ${foodSelected}`);

// Step 3 - Subtype choice

let pizzaSelected;

if (foodType === 1) {
   const foodOption = parseInt(
      prompt(
         `What type of pizza would you like to order?
   
         Enter the number of your choice.
         1 - Napolitan
         2 - Margherita
         3 - Capricciosa`
      )
   );

   if (foodOption === 1) {
      pizzaSelected = "Napolitan";
   } else if (foodOption === 2) {
      pizzaSelected = "Margherita";
   } else if (foodOption === 3) {
      pizzaSelected = "Capricciosa";
   } else {
      alert(
         `Couldn't you decide what to choose? 
         Please, start over and type the number representing your choice.`
      );
      exit(1);
   }
   console.log(`Selected pizza: ${pizzaSelected}`);
}

let hamburgerSelected;

if (foodType === 2) {
   const foodOption = parseInt(
      prompt(
         `What type of hamburger would you like to order?
  
         Enter the number of your choice.
         1 - Halloumi burger
         2 - Plant-based burger
         3 - Classic burger`
      )
   );

   if (foodOption === 1) {
      hamburgerSelected = "Halloumi burger";
   } else if (foodOption === 2) {
      hamburgerSelected = "Plant-based burger";
   } else if (foodOption === 3) {
      hamburgerSelected = "Classic burger";
   } else {
      alert(
         `Couldn't you decide what to choose? 
         Please, start over and type the number representing your choice.`
      );
      exit(1);
   }

   console.log(`Selected burger: ${hamburgerSelected}`);
}

let saladSelected;

if (foodType === 3) {
   const foodOption = parseInt(
      prompt(
         `What type of salad would you like to order?
 
         Enter the number of your choice.
         1 - Vegan salad
         2 - Caesar salad
         3 - Greek salad`
      )
   );

   if (foodOption === 1) {
      saladSelected = "Vegan salad";
   } else if (foodOption === 2) {
      saladSelected = "Caesar salad";
   } else if (foodOption === 3) {
      saladSelected = "Greek salad";
   } else {
      alert(
         `Couldn't you decide what to choose? 
         Please, start over and type the number representing your choice.`
      );
      exit(1);
   }
   console.log(`Selected salad: ${saladSelected}`);
}

alert(`Good choice, you chosed to order a ${pizzaSelected || hamburgerSelected || saladSelected}`);

// Step 4 - Age

const age = parseInt(
   prompt(
      `Is this meal for a child or an adult? 
      Type your age:`
   )
);
console.log(`${age} years`);

if (age >= 15) {
   alert(
      `One adult sized ${pizzaSelected || hamburgerSelected || saladSelected} will be prepared for you.
      That will be €10`
   );
} else if (age <= 14) {
   alert(
      `One child sized ${pizzaSelected || hamburgerSelected || saladSelected} will be prepared for you.
      That will be €8`
   );
} else {
   alert(
      `Oops, we didn't get your age!
      We need to know your age to prepare an appropiate meal size. 
      Please start over and remember to fill in all of the input fields`
   );
   exit(1);
}

const orderConfirmation = parseInt(
   prompt(
      `Do you want to place the order?
      Enter the number that represents your choice:
      1 - Yes
      2 - No`
   )
);

console.log(`Want to finish the order (1=Yes 2=No): ${orderConfirmation}`);

// Step 5 - Order confirmation

if (orderConfirmation === 1) {
   alert(
      `Thank you for your order, your order will be ready in 20 min. 
      Bon appetit!`
   );
} else if (orderConfirmation === 2) {
   alert(
      `No problem, welcome back another time.
      Have a good day!`
   );
} else {
   alert(
      `We didn't get any confirmation if you wanted to place the order.
      Please start over if you still want to order.`
   );
   exit(1);
}
