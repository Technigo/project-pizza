// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
let nombre = prompt("what your is name:");

alert(`Hello ${nombre}`);
// Step 2 - Food choice
// Your code goes here
let food = prompt(`what do you want?
1 - Pizza
2 - Pasta
3 - Ensalada`);
let nameFood = "";

if(food === "1") 
{
  nameFood = "Pizza"
}
else if (food === "2")
{
  nameFood = "Pasta"
}
else 
{ 
  nameFood = "Ensalada"
}


alert(`You chose ${nameFood}`)
// Step 3 - Subtype choice
// Your code goes here
 let subTypeFood=""
if(nameFood=== "Pizza"){
  subTypeFood = prompt(`what do you want?
1 - Hawaiana
2 - Pepperoni
3 - Caprichosa `);
//Haga esto
}else if(nameFood=== "Pasta"){
  subTypeFood = prompt(`what do you want?
  1 - Lasana
  2 - Bolonesa
  3 - Ravioli `);
}
else {
  subTypeFood = prompt(`what do you want?
  1 - Ceasar
  2 - Thai
  3 - Griego `);
};

// Step 4 - Age
// Your code goes here
let age = prompt("Is this food for a child or an adult? Type your age:");
let adultOrChild="";
let cost = "";
if(parseInt(age)<18){
adultOrChild = "child";
cost = "10";
}
else{
adultOrChild ="adult";
cost = "15";
}
alert(`One ${adultOrChild} ${subTypeFood} ${nameFood} `);
prompt();
// Step 5 - Order confirmation
// Your code goes here
