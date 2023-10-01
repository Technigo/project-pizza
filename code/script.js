// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. 🇮🇹 Ready to Start? - Click 'OK' to begin.`
);

const customerName = prompt(`Can I have your name please?`);

// Step 2 - Food choice
const menuArray = [
  ["Pizza 🍕", 125],
  ["Pasta 🍝", 115],
  ["Salad 🥗", 85],
];
const foodChoicePrompt =
  prompt(`Hello, ${customerName}! 😀 What do you want to order?
Here is our menu:
1. Pizza 🍕
2. Pasta 🍝
3. Salad 🥗
`);
const foodChoiceInt = Number(foodChoicePrompt);
const foodChoiceItem = menuArray[foodChoiceInt - 1][0];
const pricePerServing = menuArray[foodChoiceInt - 1][1];

// Step 3 - Subtype choice
const subMenuArray = [
  ["Margherita", "Veggie", "Seafood"],
  ["Cabonara", "Creamy Salmon", "Kantarella"],
  ["Caesar", "Chicken", "Greek"],
];

const subFoodChoicePrompt = prompt(
  `Good choice, ${customerName}! 👏🏻. You chose ${foodChoiceItem}. May we know what kind of ${foodChoiceItem}?
1 -- ${subMenuArray[foodChoiceInt - 1][0]}
2 -- ${subMenuArray[foodChoiceInt - 1][1]}
3 -- ${subMenuArray[foodChoiceInt - 1][2]}
`
);
const subFoodChoiceInt = Number(subFoodChoicePrompt);
const subFoodChoiceItem = subMenuArray[foodChoiceInt - 1][subFoodChoiceInt - 1];

const orderQuantity = Number(
  prompt(`How many of ${subFoodChoiceItem} ${foodChoiceItem} servings?`)
);

// Step 4 - Age and Alcoholic Drinks
const alcoholicDrinksArray = [
  ["Beer 🍺", 55],
  ["Whiskey 🥃", 65],
  ["Vodka 🍸", 35],
  ["Wine 🍷", 75],
];

const drinksPrompt = prompt(`Any alcoholic drink?
1 --- Yes
2 --- No`);
let orderSummary = `${orderQuantity} of ${subFoodChoiceItem} ${foodChoiceItem}
Total: ${foodChoiceItem[1]}`;

if (drinksPrompt === "1") {
  const customerAge = prompt(`How old are you?`);

  if (customerAge >= 18) {
    const drinkChoice = prompt(`You can order alcoholic drink 🍻🍷:
    Which one do you want?
    1 --- ${alcoholicDrinksArray[0][0]}
    2 --- ${alcoholicDrinksArray[1][0]}
    3 --- ${alcoholicDrinksArray[2][0]}
    4 --- ${alcoholicDrinksArray[3][0]}
    `);

    const priceOfDrink = alcoholicDrinksArray[drinkChoice - 1][1];
    const totalWithDrinks = orderQuantity * (pricePerServing + priceOfDrink);

    orderSummary = `${orderQuantity} item of ${subFoodChoiceItem} ${foodChoiceItem} with ${
      alcoholicDrinksArray[drinkChoice - 1][0]
    }
Total: ${totalWithDrinks}`;
  } else {
    const totalWithoutDrinks = orderQuantity * pricePerServing;
    orderSummary = `You are underage. ❌🍷 
  ${orderQuantity} item of ${subFoodChoiceItem} ${foodChoiceItem}
Total: ${totalWithoutDrinks}`;
  }
} else if (drinksPrompt === "2") {
  const totalWithoutDrinks = orderQuantity * pricePerServing;
  orderSummary = `${orderQuantity} item of ${subFoodChoiceItem} ${foodChoiceItem}
Total: ${totalWithoutDrinks}`;
} else {
  alert(`Please choose 1 or 2`);
}

// Display the order summary
alert(`Order Summary: ${orderSummary}`);

// Step 5 - Order confirmation
const confirmationPrompt = prompt(`Do you want to confirm your order?
1 --- Yes
2 --- No`);

if (confirmationPrompt === "1") {
  alert(
    `Thank you for your order, ${customerName}! Your order has been confirmed. 👨🏻‍🍳`
  );
} else if (confirmationPrompt === "2") {
  alert(`Your order has been canceled.`);
} else {
  alert(`Invalid choice. Please choose 1 or 2.`);
}
