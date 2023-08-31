// Start here

// Step 1 - Welcome and introduction
// Your code goes here



alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
const userName = prompt("please enter your name:");


alert(`Nice to meet you ${userName}`);

// Step 2 - Food choice
// Your code goes here
const typeOfFood = prompt("What type of foo would you like to order?  please enter a number  1- Pizza 2- Pasta 3- Salad ")
 
let foodSelected = "";

if(typeOfFood === "1"){
 foodSelected = "Pizza";
 alert(`you have choosen ${foodSelected}`);
}else if(typeOfFood === "2"){
  foodSelected = "Pasta";
  alert(`you have choosen ${foodSelected}`);
}else if(typeOfFood === "3"){
  foodSelected = "Salad";
  alert(`you have choosen ${foodSelected}`);
}else{
  alert("oops, you can just choose a number between 1-3");
  process.exit(1)
}
// Step 3 - Subtype choice
// Your code goes here
let subtypeOfFood = "";
let subFoodName = "";


switch (foodSelected) {
  case "Pizza":
    subtypeOfFood = prompt("Select a pizza type: please enter a numbe   1-Napolitana 2- Hawaian 3- Pepperoni");
    subFoodName = ["Napolitana" , "Hawaian" , "Pepperoni"];
    alert(`you have choosen ${subFoodName[subtypeOfFood - 1]}`);
    break;

    case "Pasta":
    subtypeOfFood = prompt("select a pasta type: please enter a number  1- Spaghetti Carbonara 2- Fettuccine Alfredo 3- Cheesy Tortellini ");
    subFoodName = ["Spaghetti Carbonara" , "Fettuccine Alfredo" , "Cheesy Tortellini"];
    alert(`you have choosen ${subFoodName[subtypeOfFood - 1]}`);
    break;
    case "Salad":
      subtypeOfFood = prompt("select a Salad type: please enter a number 1- ceasar Salad 2- caprese Salad 3- Greek Salad");
      subFoodName = ["Ceasar Salad" , "Caprese Salad" , "Greek Salad"];
      alert(`you have choosen ${subFoodName[subtypeOfFood - 1]}`);
     break;
  default:
    alert("Inavalid type of choice");
    process.exit(1);
   break;
   
    
}

// Step 4 - Age
// Your code goes here
const foodPriceAdult = 15;
const foodPricechild = 10;
const age = prompt(`Is this food for a child or for an adault? please enter your age: `);

let confirm = "";
if(age >= 18){
 confirm =  prompt(`one adault sized ${subFoodName[subtypeOfFood - 1]} ${foodSelected} will be prepared for you , that will be $ ${foodPriceAdult} please enter a number to confirm 1- yes 2- No`);
}else if(age < 18){
  confirm = prompt(`one child sized ${subFoodName[subtypeOfFood - 1]} ${foodSelected} will be prepared for you , that will be $ ${foodPricechild} please enter a number to confirm 1- yes 2- No`);
}else{
  alert("Invalid number");
  process.exit(1);
}

// Step 5 - Order confirmation
// Your code goes here
if(confirm == "1"){
  alert("Thank you for your order! , your meal will be prepared soon, see you soon 👋🏼");
}else{
  alert("Maybe next time! Have a nice day")
}
