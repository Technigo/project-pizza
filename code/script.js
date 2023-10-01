// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
const nameClient = prompt("What your is name:");

alert(`Hello ${nameClient}`);
// Step 2 - Food choice
// Your code goes here
const food = prompt(`What do you want?
  1 - Pizza
  2 - Pasta
  3 - Salad`);

let nameFood = "";

if(food === "1") 
{
  nameFood = "Pizza"
}
else if (food === "2")
{
  nameFood = "Pasta"
}
else if(food === "3") 
{ 
  nameFood = "Salad"
}
else
{
  alert(`Invalid choice. Please select a number between 1 and 3.`)
  exit()
}

alert(`You chose ${nameFood}`)
// Step 3 - Subtype choice
// Your code goes here
 let subTypeFood=""
if(nameFood=== "Pizza")
{
  subTypeFood = prompt(`What do you want?
  1 - Hawaiana
  2 - Pepperoni
  3 - Capriccosa `);
//Haga esto
}else if(nameFood=== "Pasta")
{
  subTypeFood = prompt(`What do you want?
  1 - Lasagne
  2 - Bolonesa
  3 - Ravioli `);
}
else 
{
  subTypeFood = prompt(`What do you want?
  1 - Ceasar
  2 - Thai
  3 - Greek `);
};

// Step 4 - Age
// Your code goes here
const age = prompt("Is this food for a child or an adult? Type your age:");
let adultOrChild="";
let cost = "";
if(parseInt(age)<18)
{
  adultOrChild = "child";
  cost = "€10";
}
else
{
  adultOrChild ="adult";
  cost = "€15";
}
alert(`One ${adultOrChild} sized ${subTypeFood} ${nameFood} will be prepared for you. That will be ${cost}`);

// Step 5 - Order confirmation
// Your code goes here
const confirmed = prompt(`Are you sure you want to order this?
Enter a number to confirm:
  1 - Yes
  2 - No` );

if(confirmed === "1" )
{
  alert(`Thank you for your order! Your delicious meal will be prepared. See you soon! `)
}
else if( confirmed === "2" )
{
  alert(`No problem, come back and order anytime you want.`)
}
else
{
  alert(`Invalid choice. Please select a number between 1 and 3.`)
  exit()
}