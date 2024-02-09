// Start here
function startOrder() {
	// Step 1 - Welcome and introduction
	alert(`Welcome to Nathalie's JavaScript Pizzeria. 
Ready to Start? - Click 'OK' to begin.`);

	const username = prompt(`What's your name?`);

	switch (username) {
		case null:
			alert(`Have a nice day!`);
			return;

		default:
			break;
	}

	alert(`Welcome ${username}! Happy having you here.
Are you ready to order?`);

	// Step 2 - Food choice
	let foodChoice = prompt(
		`What is your order?
  Please enter a number:
  1 – Pizza
  2 – Pasta
  3 – Salad`
	);

	// using switch for simple values.
	switch (foodChoice) {
		case `1`:
			foodChoice = `pizza`;
			alert(`You have chosen pizza. Can't go wrong with pizza.`);
			break;
		case `2`:
			foodChoice = `pasta`;
			alert(`You have chosen pasta. Delicious al dente pasta for you.`);
			break;
		case `3`:
			foodChoice = `salad`;
			alert(`You have chosen salad. A light meal coming up for you.`);
			break;
		case null:
			alert(`Visit us again. Have a nice day!`);
			return;
		default:
			foodChoice = prompt(
				`Sorry, we don't serve this today. Please select one of the three numbers:
      1 – Pizza
      2 – Pasta
      3 – Salad`
			);
			switch (foodChoice) {
				case `1`:
					foodChoice = `Pizza`;
					break;
				case `2`:
					foodChoice = `Pasta`;
					break;
				case `3`:
					foodChoice = `Salad`;
					break;
				default:
					alert(`Nothing for your liking? Sorry to hear. See you around.`);
					return;
			}
	}
	// Step 3 - Subtype choice
	// continue using switch.
	let subtypeChoice;
	switch (foodChoice) {
		case `pizza`:
			subtypeChoice = prompt(
				`We have three different type of pizza to chose from. Which one would you like, ${username}?
      
      1 – Napolitana
      2 – Funghi
      3 – Pepperoni

      Please enter a number.`
			);

			switch (subtypeChoice) {
				case `1`:
					subtypeChoice = `Pizza Napolitana`;
					break;
				case `2`:
					subtypeChoice = `Pizza Funghi`;
					break;
				case `3`:
					subtypeChoice = `Pizza Pepperoni`;
					break;
				case null:
					alert(`Visit us again. Have a nice day!`);
					return;
				default:
					alert(
						`Nothing to your liking? What a bummer. Hope you visit us again.`
					);
			}
			break;

		case `pasta`:
			subtypeChoice = prompt(
				`What kind of pasta dish would you like? Here are your options, ${username}:
        
        1 – Spaghetti Carbonara
        2 – Fettuccine Alfredo
        3 – Fiocchi Di Pera
        
        Please enter a number.`
			);

			switch (subtypeChoice) {
				case `1`:
					subtypeChoice = `Spaghetti Carbonara`;
					break;
				case `2`:
					subtypeChoice = `Fettuccine Alfredo`;
					break;
				case `3`:
					subtypeChoice = `Fiocchi Di Pera`;
					break;
				case null:
					alert(`A change of heart? Visit us again. Have a nice day!`);
					return;
				default:
					alert(
						`Nothing to your liking? What a bummer. Hope you visit us again.`
					);
			}
			break;

		case `salad`:
			subtypeChoice = prompt(
				`What kind of salad would you like, ${username}? These are your options:
        
        1 – Ceaser Salad
        2 – Chef Salad
        3 – Caprese Salad
        
        Please chose one of the above by entering the number.`
			);

			switch (subtypeChoice) {
				case `1`:
					subtypeChoice = `Ceaser Salad`;
					break;
				case `2`:
					subtypeChoice = `Chef Salad`;
					break;
				case `3`:
					subtypeChoice = `Caprese Salad`;
					break;
				case null:
					alert(`A change of heart? Visit us again. Have a nice day!`);
					return;
				default:
					alert(
						`Nothing to your liking? What a bummer. Hope you visit us again.`
					);
			}
	}
	alert(`Great! One ${subtypeChoice} will be prepared shortly.`);

	// Step 4 - Age
	// using if and else if because of different pricing ranges and product.
	let price;
	const age = parseInt(
		prompt(`Before we wrap up your order, we need to know how old you are. 

Maybe you are eligable for a discount 😉`)
	);

	switch (foodChoice) {
		case "pizza":
			price = 20;
			break;
		case "pasta":
			price = 15;
			break;
		case "salad":
			price = 12;
			break;
		default:
			alert(`Invalid food choice.`);
			return;
	}

	let discount;
	if (age < 13) {
		discount = 0.5; // 50% off
	} else if (age < 26) {
		discount = 0.15; // 15% off
	} else {
		discount = 0; // No discount
	}
	// Calculation of the discount
	const discountedPrice = price - price * discount;
	alert(
		`Your total price after discount is: ${discountedPrice.toFixed(2)} EUR.`
	);

	// convert discount to percentage for later
	const discountpercentage = discount * 100;

	// Step 5 - Order confirmation
	const orderConfirmation = prompt(
		`Let's summarize your order. You ordered ${foodChoice} for ${discountedPrice.toFixed(
			2
		)} EUR. Please confirm with YES.`
	);

	switch (orderConfirmation) {
		case `YES`:
			const orderSummary = `Amazing! Please, see your order confirmation below.
    
    Order Summary #123456:\n\nName: ${username}\nFood: ${foodChoice}\nType: ${subtypeChoice}\nPrice: ${price} Euro\nDiscount: ${discountpercentage}%\nTotal: ${discountedPrice} Euro
    
    Thank you ${username} for choosing Nathalie's Pizzeria.`;
			alert(orderSummary);

			displayOrder();
			break;
		case `NO`:
			alert(`Don't feel like ${foodChoice}? No problem. Come visit us again.`);
			break;
		case null:
			alert(`Don't feel like ${foodChoice}? No problem. Come visit us again`);
			break;
		default:
			alert(orderSummary);

			displayOrder();
			break;
	}
}
document.getElementById("orderButton").addEventListener("click", startOrder);
