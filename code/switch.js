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

//depending on which number the user choose above, the number will be checked if it matches to a case and interpret it and run the code that the case holds. In this case "change" the number into a new variable with a new value and data type.

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
