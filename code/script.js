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
 let subType = ""
 let subTypeFood = ""
if(nameFood === "Pizza")
{
  subType = prompt(`Select a pizza type:
  1 - Hawaian
  2 - Pepperoni
  3 - Capriccosa `);
 
  if(subType === "1")
  {
    subTypeFood = "Hawaian"
  }
  else if(subType === "2")
  {
    subTypeFood = "Pepperoni"
  } else if(subType === "3")
  {
    subTypeFood = "Capricciosa"
  }
  else
  {
    alert(`Invalid choice. Please select a number between 1 and 3.`)
    exit()
  }
//Haga esto
}else if(nameFood === "Pasta")
{
  subType = prompt(`Select a pasta type:
  1 - Lasagne
  2 - Bolonesa
  3 - Ravioli `);

  if(subType === "1")
  {
    subTypeFood = "Lasagne"
  }
  else if(subType === "2")
  {
    subTypeFood = "Bolonesa"
  } else if(subType === "3")
  {
    subTypeFood = "Ravioli"
  }
  else
  {
    alert(`Invalid choice. Please select a number between 1 and 3.`)
    exit()
  }
}
else 
{
  subType = prompt(`Select a salad type:
  1 - Ceasar
  2 - Thai
  3 - Greek `);

  if(subType === "1")
  {
    subTypeFood = "Cesar"
  }
  else if(subType === "2")
  {
    subTypeFood = "Thai"
  } else if(subType === "3")
  {
    subTypeFood = "Greek"
  }
  else
  {
    alert(`Invalid choice. Please select a number between 1 and 3.`)
    exit()
  }
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
alert(`One ${adultOrChild} sized ${subTypeFood} ${nameFood.toLowerCase()} will be prepared for you. That will be ${cost}`);

// Step 5 - Order confirmation
// Your code goes here
const confirmed = prompt(`Are you sure you want to order this?
Enter a number to confirm:
  1 - Yes
  2 - No` );

if( confirmed === "1" )
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