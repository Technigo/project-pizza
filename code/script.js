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
}

console.log ("selected food", selectedFood);

alert (`You chose ${selectedFood}`);

//exit(1)

// Step 3 - Subtype choice
// Your code goes here


let choiceSlot =""
let foodNames = []

switch (selectedFood) {
  case "Burger":
    choiceSlot = parseInt (
      prompt(`Please enter your burger preference 
        1.Cheeseburger
        2.Chicken Burger
        3.Vegan Burger 
        Please chose a number:`)
    )
      foodNames = ["Cheesburger", "Chicken Burger", "Vegan Burger"]
     break

  case "Pizza":
   choiceSlot = parseInt (
    prompt(`Please enter your pizza preference
      1.Peperoni Pizza
      2.Greek Pizza
      3.New Haven Pizza
      Please chose a number:`)
  )
    foodNames = ["Peperoni Pizza", "Greek Pizza", "New Haven Pizza"]
    break

    case "Salad":
    choiceSlot = parseInt (
      prompt(`Please enter your salad preference
      1. Crunchy Munchy Salad
      2. Leafy Green Salad
      3. Zesty Zoodle Zinger Salad
          Please chose a number:`)
      )
      foodNames = ["Crunchy Munchy Salad", "Leafy Green Salad", "Zezty Zoodle Zinger Salad"]
      break
      default:
      alert("You chose ${foodNames}")
      exit(1)
    }

console.log ("choiceSlot", choiceSlot)


// Step 4 - Age
// Your code goes here

//Define age
let age = parseInt(prompt("Find out your size by typing your age:"));

//Declare size variable
let size;

//Determine size based on age

  if (age < 18) {
    size = "Small"
  } else {
    size = "Large";
  }

  //Define burger variable
  let burgerName;

  //Switch statement to determine burger name
  switch (choiceSlot) {
    case 1:
      burgerName = "Cheesburger";
      break;
    case 2:
      burgerName =  "Chicken Burger";
      break;
    case 3:
      burgerName = "Vegan Burger";
      break;
  }

 alert (`You chose a ${size} ${burgerName}`);



// Step 5 - Order confirmation
// Your code goes here*/
