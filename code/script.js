// Step 1 - Welcome and introduction
alert(`Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`);

const name = prompt(`Please enter your name:`);
console.log(name);

alert(`Hi ${name}, it's nice to see you here!`);

// Step 2 - Food choice

const foodOption = prompt(`What would you like to order?

Enter the number of your choice.
1 - Pizza Margherita
2 - Pizza Kebab
3 - Caesar Salad
`);

console.log(foodOption);

let foodSelected = "";
if (foodOption === "1") {
   foodSelected = "Pizza Margherita";
} else if (foodOption === "2") {
   foodSelected = "Pizza Kebab";
} else if (foodOption === "3") {
   foodSelected = "Caesar Salad";
} else {
   alert(`Couldn't you decide what to choose? 
    Please, start over and choose what you want to eat.`);
}

alert(`Good choice, you chosed to order ${foodSelected}`);

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
