// Step 1 - Welcome and introduction

alert(`Welcome to our Virtual Pizzeria. Ready to order? - Click 'OK' to begin.`);

const name = prompt(`Please enter your name:`);

console.log(`Customer: ${name}`);
alert(`Hi ${name}, it's nice to see you here!`);

// Step 2 - Food choice

const foodType = parseInt(
   prompt(
      `What would you like to order?
 
       Enter the number of your choice.
       1 - Pizza 
       2 - Hamburger
       3 - Salad`
   )
);

//depending on which number the user choose above, the number will be checked if it matches to a case and interpret it and run the code that the case holds. In this case "change" the number into a new variable with a new value. Giving the number a name.

let foodSelected;

switch (foodType) {
   case 1:
      foodSelected = "Pizza";
      break;

   case 2:
      foodSelected = "Hamburger";
      break;

   case 3:
      foodSelected = "Salad";
      break;

   default:
      alert(
         `Couldn't you decide what to choose? 
         Please, start over and type the number representing what you want to eat.`
      );
      exit(1);
}

console.log(`Selected food type: ${foodSelected}`);
alert(`You chosed ${foodSelected}`);

// Step 3 - Subtype choice

let foodOption;
let pizzaSelected;
let hamburgerSelected;
let saladSelected;

switch (foodSelected) {
   case "Pizza":
      foodOption = parseInt(
         prompt(
            `What type of pizza would you like to order?
     
           Enter the number of your choice.
           1 - Napolitan
           2 - Margherita
           3 - Capricciosa`
         )
      );
      switch (foodOption) {
         case 1:
            pizzaSelected = "Napolitan";
            break;

         case 2:
            pizzaSelected = "Margherita";
            break;

         case 3:
            pizzaSelected = "Capricciosa";
            break;

         default:
            alert(
               `Couldn't you decide what to choose? 
                Please, start over and type the number representing your choice.`
            );
            exit(1);
      }
      console.log(`Selected pizza: ${pizzaSelected}`);
      break;

   case "Hamburger":
      foodOption = parseInt(
         prompt(
            `What type of hamburger would you like to order?

            Enter the number of your choice.
            1 - Halloumi burger
            2 - Plant-based burger
            3 - Classic burger`
         )
      );
      switch (foodOption) {
         case 1:
            hamburgerSelected = "Halloumi burger";
            break;

         case 2:
            hamburgerSelected = "Plant-based burger";
            break;

         case 3:
            hamburgerSelected = "Classic burger";
            break;

         default:
            alert(
               `Couldn't you decide what to choose? 
                Please, start over and type the number representing your choice.`
            );
            exit(1);
      }
      console.log(`Selected burger: ${hamburgerSelected}`);
      break;

   case "Salad":
      foodOption = parseInt(
         prompt(
            `What type of salad would you like to order?
   
            Enter the number of your choice.
            1 - Vegan salad
            2 - Caesar salad
            3 - Greek salad`
         )
      );
      switch (foodOption) {
         case 1:
            saladSelected = "Vegan salad";
            break;

         case 2:
            saladSelected = "Caesar salad";
            break;

         case 3:
            saladSelected = "Greek salad";
            break;

         default:
            alert(
               `Couldn't you decide what to choose? 
                Please, start over and type the number representing your choice.`
            );
            exit(1);
      }
      console.log(`Selected salad: ${saladSelected}`);
      break;
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

//The switch expression compares strictly to the expression in each case it can't be <= or >=, so to be able to decide whether it is a child or an adult sized meal I set the expression as true and then it checks if the input value matched strictly to the case of the case expression.

switch (true) {
   case age >= 15:
      alert(
         `One adult sized ${pizzaSelected || hamburgerSelected || saladSelected} will be prepared for you.
         That will be €10`
      );
      break;

   case age <= 14:
      alert(
         `One child sized ${pizzaSelected || hamburgerSelected || saladSelected} will be prepared for you.
         That will be €8`
      );
      break;

   default:
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
