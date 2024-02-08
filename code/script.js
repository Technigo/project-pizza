// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

// Step 2 - Food choice
// Your code goes here

const foodChoice = prompt (`Select your favorite dish:
  1.Burger
  2.Pizza 
  3.Salad

  Please enter the number of your choice:`);
  
  console.log(foodChoice);


// Step 3 - Subtype choice
// Your code goes here
let size;

function burgerType() {
  const burgers = prompt (`Please enter your preference
  1.Cheeseburger
  2.Chicken Burger
  3.Vegan Burger

  Enter a number for your choice:`);

  return burgers;
}

function pizzaType() {
  const pizza = prompt (`Please enter your preference
  1.Peperoni
  2.Greek Pizza
  3.New haven Pizza

  Enter a number for your choice:`);

  return pizza;
}

function saladType() {
  const salad = prompt (`Please enter your preference
  1.Crunchy Munchy Salad
  2.Leafy Green Giggle Salad
  3.Zesty Zoodle Zinger Salad

  Enter a number for your choice:`);

  return salad;
}


let selectedFood = "";
if (foodChoice === "1") {
 const burgerTyper = burgerType();
 console.log(burgerTyper);

} else if (foodChoice === "2") {
const pizzaTyper = pizzaType();
console.log(pizzaTyper);

} else if (foodChoice === "3") {
 const saladTyper = saladType();
 console.log(saladTyper);

} else {
 alert ("Invalid choice, please start again.");
 exit(1);
 alert (`You chose ${selectedFood}`)
}


// Step 4 - Age
// Your code goes here

const age = prompt("Find out your size by typing your age:");

  if (age < 18) {
    size = "Small"
  } else {
    size = "Large";
  }

  let burgerName;
  switch (burgers) {
    case "1":
      burgerName = "Cheesburger";
      break;
    case "2":
      burgerName =  "Chicken Burger";
      break;
    case "3":
      burgerName = "Vegan Burger";
      break;
    default:
      burgerName = "Unknown Burger";
      break;
  }

  return { burger: burgerName, size: size };

const { burger, size } = burgerType();;
console.log(`You chose a ${size} ${burger}`)




 /*return { burger: "Cheeseburger", size: size };
} else {
  return { burger: "Other", size: null };
}

console.log(`You chose a ${size} ${burger}`);

// Step 5 - Order confirmation
// Your code goes here
