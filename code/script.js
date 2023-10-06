// Step 1 - Welcome and introduction
let selectedFoodName;
let selectedSubtypeName;
let selectedSubtype;
let price;

alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

const userName = prompt("Please enter your name:");
alert(`Nice to meet you, ${userName}!`);

// Step 2 - Food choice
const selectedFood = prompt(
  "What would you like to eat? \n Please enter a number: \n 1 - Pizza \n 2 - Pasta \n 3 - Salad"
);

switch (selectedFood) {
  case "1":
    selectedFoodName = "pizza";
    break;
  case "2":
    selectedFoodName = "pasta";
    break;
  case "3":
    selectedFoodName = "salad";
    break;
  default:
    alert("Invalid Choice - please choose a number between 1 and 3");
    exit(1);
}
alert(`You have chosen ${selectedFoodName}!`);

// Step 3 - Subtype choice
if (selectedFoodName === "pizza") {
  selectedSubtype = prompt(
    `Good choice with the ${selectedFoodName}! \n What would you like on your pizza? \n Please enter a number: \n 1 - Broccoli \n 2 - Pineaple \n 3 - Shrimp`
  );
  switch (selectedSubtype) {
    case "1":
      selectedSubtypeName = "broccoli";
      break;
    case "2":
      selectedSubtypeName = "pineaple";
      break;
    case "3":
      selectedSubtypeName = "shrimp";
      break;
    default:
      alert("Invalid Choice - please choose a number between 1 and 3");
      exit(1);
  }
}

if (selectedFoodName === "pasta") {
  selectedSubtype = prompt(
    `Good choice with the ${selectedFoodName}! \n What would you like on your pasta? Please enter a number: \n 1 - Meat \n 2 - Vegetables \n 3 - Cheese`
  );
  switch (selectedSubtype) {
    case "1":
      selectedSubtypeName = "meat";
      break;
    case "2":
      selectedSubtypeName = "vegetables";
      break;
    case "3":
      selectedSubtypeName = "cheese";
      break;
    default:
      alert("Invalid Choice - please choose a number between 1 and 3");
      exit(1);
  }
}
if (selectedFoodName === "salad") {
  selectedSubtype = prompt(
    `Good choice with the ${selectedFoodName}! \n What would you like on your salad? Please enter a number: \n 1 - Chicken \n 2 - Feta Cheese \n 3 - Bacon`
  );

  switch (selectedSubtype) {
    case "1":
      selectedSubtypeName = "chicken";
      break;
    case "2":
      selectedSubtypeName = "Feta cheese";
      break;
    case "3":
      selectedSubtypeName = "bacon";
      break;
    default:
      alert("Invalid Choice - please choose a number between 1 and 3");
      exit(1);
  }
}

if (selectedFood !== "1" && selectedFood !== "2" && selectedFood !== "3") {
  alert("Something went wrong with the order, please reaload to try again");
  exit(1);
}
alert(`You have chosen ${selectedFoodName} with ${selectedSubtypeName}!`);

// Step 4 - Age
const age = prompt("Please write the age of the person the order is for: ");

//if no age -> error
if (!age) {
  alert("Invalid - please enter age");
  exit(1);
} else if (age >= 13) {
  ageCategory = "adult";
  price = 200;
} else {
  ageCategory = "kids";
  price = 100;
}

// Step 5 - Order confirmation
const confirmation = prompt(
  `You've ordered the ${ageCategory} order of ${selectedFoodName} with ${selectedSubtypeName}. \nThat will be ${price} SEK. \n Please confirm: \n 1 - OK \n 2 - Not what I wanted `
);
if (confirmation === "1") {
  alert(`Thank you for your order, ${userName}!`);
} else if (confirmation === "2") {
  alert("I see, please reload the page to make a new order");
} else {
  alert("You'll have to start again (please follow the prompts!)");
}

//prompt: alert and save user input in a variable
//exit() : exit with an error code (pass in "1")
