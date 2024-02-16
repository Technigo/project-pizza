// Start here

let foodCost;
let order;
let age;
let food;
let customer;

// Step 1 - Welcome and introduction
// Your code goes here

alert(
	`Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

customer = prompt('Hi! my name is Pizzabot, what is your name?', 'Type you name here!');
while (customer === "Type you name here!") {
	customer = prompt('Hi! my name is Pizzabot, what is your name?', 'Type you name here!');
};

// Step 2 - Food choice
// Your code goes here

food = prompt(`Hi ${customer}! \nWhat would you like to eat? \nType 1 for Pizza\n Type 2 for Salad \n Type 3 for Pasta`);

while ((food != 1) && (food != 2) && (food != 3)) {
	food = prompt(`Hi ${customer}! \nWhat would you like to eat? \nType 1 for Pizza\n Type 2 for Salad \n Type 3 for Pasta`);
};

function foodChoice() {

	if (food == 1) {
		food = 'pizza';
		pizzaType();
	}
	else if (food == 2) {
		food = 'salad';
		saladType();
	}
	else if (food == 3) {
		food = "pasta";
		pastaType();
	}
	//subType(food);
}


foodChoice();
// Step 3 - Subtype choice

function pizzaType() {
	order = prompt('Press 1 for Margarita,\n press 2 for Pineapple and ham \n press 3 for Diavola');

	while ((order != 1) && (order != 2) && (order != 3)) {
		order = prompt('Press 1 for Margarita,\n press 2 for Pineapple and ham \n press 3 for Diavola');
	}
	if (order == 1) {
		order = 'Margarita ' + food;
		food = order;
		foodCost = 100;
	}
	else if (order == 2) {
		order = 'Ham & Pineapple ' + food;
		food = order;
		foodCost = 150;
	}
	else if (order == 3) {
		order = 'Diavola ' + food;
		food = order;
		foodCost = 180;
	}
	//}
	finalOrder();
}


function saladType() {
	order = prompt('Press 1 for Greek salad\npress 2 for Caesar salad \npress 3 for Watermelon salad');

	while ((order != 1) && (order != 2) && (order != 3)) {
		order = prompt('Press 1 for Greek salad\npress 2 for Caesar salad \npress 3 for Watermelon salad');
	}

	if (order == 1) {
		order = 'Greek ' + food;
		food = order;
		foodCost = 75;
	}
	else if (order == 2) {
		order = 'Caesar ' + food;
		food = order;
		foodCost = 90;
	}
	else if (order == 3) {
		order = 'Watermelon ' + food;
		food = order;
		foodCost = 110;
	}
	finalOrder();
}


function pastaType() {
	order = prompt('Press 1 for Penne pasta\n press 2 for Spaghetti \n press 3 for Gnocchi');

	while ((order != 1) && (order != 2) && (order != 3)) {
		order = prompt('Press 1 for Penne pasta\n press 2 for Spaghetti \n press 3 for Gnocchi');
	}

	if (order == 1) {
		order = 'Penne ' + food;
		food = order;
		foodCost = 120;
	}
	else if (order == 2) {
		order = 'Spaghetti';
		food = order;
		foodCost = 210;
	}
	else if (order == 3) {
		order = 'Gnocchi';
		food = order;
		foodCost = 350;
	}
	finalOrder();
}


// Step 4 - Age



function finalOrder() {

	age = prompt(`Is the ${food} for a child or an adult? \nPress 1 if its for a child\nPress 2 if its for an adult`);

	while ((age != 1) && (age != 2)) {
		age = prompt(`Is the ${food} for a child or an adult? \nPress 1 if its for a child\nPress 2 if its for an adult`);
	}

	if (age == 1) {
		foodCostChild = foodCost * 0.80;
		age = 'childrens';
		foodCost = foodCostChild;
		confirmOrder();
	}
	else if (age == 2) {
		foodCost = foodCost;
		age = 'regular';
		confirmOrder();
	}


}



// Step 5 - Order confirmation
// Your code goes here

function confirmOrder() {
	let confirm = parseInt(prompt(`You have ordered a ${age} size ${food}. \ncost: ${foodCost} Bytecoin.\nPress 1 if this is correct. \nPress 2 if it's wrong.`));

	while ((confirm != 1) && (confirm != 2)) {
		confirm = parseInt(prompt(`You have ordered a ${age} size ${food}. \ncost: ${foodCost} Bytecoin.\nPress 1 if this is correct. \nPress 2 if it's wrong.`));
	}
	if (confirm == 1) {
		alert(`Here is your receipt:\n\nYou have ordered:\n A ${age} size ${food}\n Cost: ${foodCost} ByteCoin.\n The ${food} is ready in 20 minutes.\nThanks for ordering at Javascript Pizzeria. \nCome again soon!`);
	}
	else if (confirm == 2) {
		alert(`Thanks for giving Javascript Pizzeria a chance ${customer} .\n Refresh to order again.`);
	}
}
