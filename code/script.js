// Start here

// Step 1 - Welcome and introduction
alert(
	`Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

const userName = prompt("Please enter your name beloved customer");

alert(`Welcome to our mighty fine pizzeria ${userName}`);

// Step 2 - Food choice
const menu = {
	1: "pizza",
	2: "pasta",
	3: "salad",
};

const order = prompt(
	`Please provide your preferred meal ${userName}. Enter 1 for pizza, 2 for pasta or 3 for salad.`
);

const chosenMeal = menu[order];

alert(`${userName}, you have ordered ${chosenMeal ? chosenMeal : "nothing"}`);

// Step 3 - Subtype choice
let sideOrders;
switch (chosenMeal) {
	case "pizza":
		sideOrders = {
			1: "garlic sauce",
			2: "pizza salad",
		};
		break;
	case "pasta":
		sideOrders = {
			1: "parmesan cheese",
			2: "extra bacon",
		};
		break;
	case "salad":
		sideOrders = {
			1: "bread",
			2: "dressing",
		};
		break;
	default:
		sideOrders = undefined;
}

const sideOrder = prompt(
	`Please choose what do get with your ${chosenMeal} ${userName}. Input 1 for ${sideOrders[1]} or input 2 for ${sideOrders[2]}`
);
alert(
	`${userName}, you have ordered ${
		sideOrders[sideOrder] ? sideOrders[sideOrder] : "nothing extra"
	} with your ${chosenMeal}.`
);
// Step 4 - Age
const userAge = prompt(
	`${userName} please input 1 if the meal is for a child or 2 if it is for an adult.`
);

const getPortionSize = (userAge) =>
	({
		1: "child size",
		2: "adult size",
	}[userAge] || "");

const portionSize = getPortionSize(userAge);

const cost = userAge == 1 ? "50 kr" : userAge == 2 ? "100kr" : "";

alert(
	`${userName}, you have chosen ${
		portionSize ? portionSize : "no portion size"
	}. The cost for this will be ${cost ? cost : "nothing"}`
);

const confirmation = prompt("Was this order correct? Input Yes or No");

// Step 5 - Order confirmation
if (confirmation == "yes") {
	alert(
		`${userName}, you have ordered ${chosenMeal} with ${
			sideOrders[sideOrder]
		}. The chosen portion size is ${
			portionSize ? portionSize : "not provided"
		}. The total cost will be ${cost ? cost : "nothing"}`
	);
} else {
	alert(`We are sorry we couldn't take your order, please come back again!`);
}
