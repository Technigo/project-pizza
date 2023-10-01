// Step 1 - Welcome and introduction
let selectedFoodName;
let selectedSubtypeName;
let selectedSubtype;

alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

// Step 2 - Food choice
const selectedFood = prompt(
  "What would you like to eat? 1 - Pizza, 2 - Pasta, 3 - Salad"
);

// Step 3 - Subtype choice
if (selectedFood === "1") {
  selectedFoodName = "pizza";
  selectedSubtype = prompt(
    `Good choice with the ${selectedFoodName}! What would you like on your pizza? 1 - Broccoli, 2 - Pineaple, 3 - Shrimp`
  );
  switch (selectedSubtype) {
    case "1":
      selectedSubtypeName = "Broccoli";
      break;
    case "2":
      selectedSubtypeName = "Pineaple";
      break;
    case "3":
      selectedSubtypeName = "Shrimp";
      break;
    default:
      alert("wrong!");
      exit(1);
  }
}

if (selectedFood === "2") {
  selectedFoodName = "Pasta";
  selectedSubtype = prompt(
    `Good choice with the ${selectedFoodName}! What would you like on your pasta? 1 - Meat, 2 - Vegetables, 3 - Cheese`
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
      alert("wrong!");
      exit(1);
  }
}
if (selectedFood === "3") {
  selectedFoodName = "Salad";
  selectedSubtype = prompt(
    `Good choice with the ${selectedFoodName}! What would you like on your salad? 1 - Chicken, 2 - Feta Cheese, 3 - Bacon`
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
      alert("wrong!");
      exit(1);
  }
}

if (selectedFood !== "1" && selectedFood !== "2" && selectedFood !== "3") {
  alert("Try again!");
  exit(1);
}

// Step 4 - Age
const age = prompt("Please write the age of the person the order is for: ");

age >= 13 ? (ageCategory = "adult") : (ageCategory = "kids");

// Step 5 - Order confirmation
const confirmation = prompt(
  `You've ordered the ${ageCategory} order of ${selectedFoodName} with ${selectedSubtypeName}, please confirm: 1 - OK, 2 - No... `
);
if (confirmation === "1") {
  alert(`Thank you for your order!`);
} else if (confirmation === "2") {
  alert("I see, please reload the page to make a new order");
} else {
  alert("You'll have to start again (please follow the prompts!)");
}

//prompt: alert and save user input in a variable
//exit() : exit with an error code (pass in "1")
