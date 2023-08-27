var userName = prompt("What is your name?");
var foodGroup = prompt("What do you want today?\n1. Pizza\n2. Pasta\n3. Salad\nPlease write the number of your choice (1, 2, or 3).");
var foodSubGroup;
var foodPrice;
var childFoodPrice;

// Validate foodGroup input
if (foodGroup === "1" || foodGroup === "2" || foodGroup === "3") {
  switch (foodGroup) {
    case "1":
      foodGroup = "pizza";
      break;
    case "2":
      foodGroup = "pasta";
      break;
    case "3":
      foodGroup = "salad";
      break;
  }

  alert(`You have chosen ${foodGroup}. An excellent choice!`);

  // Prompt for food subgroup based on food group
  if (foodGroup === "pizza") {
    foodSubGroup = prompt("What kind of pizza would you like?\n1. Capricciosa\n2. Calzone\n3. Quattro Stagioni\nPlease write the number of your choice (1, 2, or 3).");
    switch (foodSubGroup) {
      case "1":
        foodSubGroup = "capricciosa";
        foodPrice = 100;
        break;
      case "2":
        foodSubGroup = "calzone";
        foodPrice = 120;
        break;
      case "3":
        foodSubGroup = "quattro stagioni";
        foodPrice = 150;
        break;
    }
  } else if (foodGroup === "pasta") {
    foodSubGroup = prompt("What kind of pasta would you like?\n1. Bolognese\n2. Vongole\n3. Ravioli\nPlease write the number of your choice (1, 2, or 3).");
    switch (foodSubGroup) {
      case "1":
        foodSubGroup = "bolognese";
        foodPrice = 80;
        break;
      case "2":
        foodSubGroup = "vongole";
        foodPrice = 90;
        break;
      case "3":
        foodSubGroup = "ravioli";
        foodPrice = 100;
        break;
    }
  } else if (foodGroup === "salad") {
    foodSubGroup = prompt("What kind of salad would you like?\n1. Caesar\n2. Cheese and Ham\n3. Garden\nPlease write the number of your choice (1, 2, or 3).");
    switch (foodSubGroup) {
      case "1":
        foodSubGroup = "caesar";
        foodPrice = 70;
        break;
      case "2":
        foodSubGroup = "cheese and ham";
        foodPrice = 80;
        break;
      case "3":
        foodSubGroup = "garden";
        foodPrice = 70;
        break;
    }
  }

  // Calculate childFoodPrice after foodPrice is assigned a value
  childFoodPrice = foodPrice / 2;

  var age = prompt("How old is the person that will be eating?");
  if (age <= 15) {
    alert(`You are about to order ${foodSubGroup} from our children's menu. The cost will be ${childFoodPrice} kronor. Hope you like it as much as we do and welcome back again!`);
  } else {
    alert(`You are about to order ${foodSubGroup}. The cost will be ${foodPrice} kronor. Hope you like it as much as we do and welcome back again!`);
  }
} else {
  alert("Invalid food group choice.");
}
