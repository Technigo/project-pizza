// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

const userName = prompt ("Please enter your name")

console.log(userName)
alert (`Hello ${userName}! Let´s feed you!`)

// Step 2 - Food choice
// Your code goes here

const foodChoice = parseInt(
  prompt (`Select your favorite dish:

  1.Burger
  2.Pizza 
  3.Salad

  Please enter the number of your choice:`)
)
  console.log("food choice", foodChoice, typeof "foodChoice");

let selectedFood = "";

if(foodChoice === 1) {
  selectedFood = "Burger";
} else if (foodChoice === 2) {
  selectedFood = "Pizza";
} else if (foodChoice === 3) {
  selectedFood = "Salad";
} else {
  alert("Invalid choice, please start again.")
  exit(1)
}

console.log ("selected food", selectedFood);

alert (`You choose ${selectedFood}`);


// Step 3 - Subtype choice
// Your code goes here


let choiceSlot =""
let foodNames = []

switch (selectedFood) {
  case "Burger":
    choiceSlot = parseInt (
      prompt(`Enter your burger preference:

        1.Cheeseburger
        2.Chicken Burger
        3.Vegan Burger 

        Please choose a number:`)
    )
      foodNames = ["Cheesburger", "Chicken Burger", "Vegan Burger"]
     break

  case "Pizza":
   choiceSlot = parseInt (
    prompt(`Enter your pizza preference

      1.Peperoni Pizza
      2.Greek Pizza
      3.New Haven Pizza

      Please choose a number:`)
  )
    foodNames = ["Peperoni Pizza", "Greek Pizza", "New Haven Pizza"]
    break

    case "Salad":
    choiceSlot = parseInt (
      prompt(`Enter your salad preference

      1. Crunchy Munchy Salad
      2. Leafy Green Salad
      3. Zesty Zoodle Zinger Salad

          Please choose a number:`)
      )
      foodNames = ["Crunchy Munchy Salad", "Leafy Green Salad", "Zezty Zoodle Zinger Salad"]
      break

      default:
      alert("That item is not in our list. Please try again. :)")
      exit(1)
    }

console.log ("choiceSlot", choiceSlot)


// Step 4 - Age
// Your code goes here

//Define age
let age = parseInt(prompt("Find out your size by typing your age:"));
let size = age < 18 ? "Small" : "Large";

//Declare size variable
//let size;

//Determine size based on age

  /*if (age < 18) {
    size = "Small"
  } else {
    size = "Large";
  }*/

  //Display the chosen food item
  let foodItem ="";

  //Switch statement to determine burger name
  switch (selectedFood) {
    case "Burger":
      foodItem = foodNames[choiceSlot - 1];
      break;
    case "Pizza":
      foodItem = foodNames[choiceSlot - 1];
      break;
    case "Salad":
      foodItem = foodNames[choiceSlot - 1];
      break;

      default:
        console.log("That item is not in our list")
        exit(1)
  }

 alert (`You chose a ${size} ${foodItem}`);

/*let pizzaName;
switch (choiceSlot) {
  case 1:
    pizzaName = "Peperoni Pizza";
    break;
  case 2:
    pizzaName =  "Greek Pizza";
    break;
  case 3:
    pizzaName = "New Heaven Pizza";
    break;
}
alert (`You chose a ${size} ${pizzaName}`);*/

// Step 5 - Order confirmation
// Your code goes here*/

alert(`Thank you for your order, ${userName}! You ordered a ${size} ${foodItem}. Your food is beeing prepared by humans. Now you can relax while the food is being prepared. Enjooooy!🤗 ` )
