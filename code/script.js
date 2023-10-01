// Steg 1 - Välkomstmeddelande och namn
alert('Welcome to our Javascript Pizzeria. Ready to Start? - Click "OK" to begin.');


const userName = prompt('Please enter your name:');
alert('Hi ' + userName + ' !');


// Steg 2 - Matval
const dishes = {
'1': 'Pizza',
'2': 'Pasta',
'3': 'Salad'};


const foodChoice = prompt(`Please enter the number of the food that you would like to order:
1 - Pizza
2 - Pasta
3 - Salad`);


const dish = dishes[foodChoice];


if (!dish) {
alert('Wrong number, please start over again and select a dish with the right corresponding number of the dish of your choice');
exit(1);}


alert('You have ordered ' + dish + '!');


// Steg 3 - Underval
const subtypes = {
'1': {
name: 'Hawaii',
message: 'You have chosen Hawaii!'},
'2': {
name: 'Margherita',
message: 'You have chosen Margherita!'
},
'3': {
name: 'Pepperoni',
message: 'You have chosen Pepperoni!'
}
};


const subtypeChoice = prompt(`Here are our types of ${dish.toLowerCase()}:
1 - ${subtypes['1'].name}
2 - ${subtypes['2'].name}
3 - ${subtypes['3'].name}
Please enter the number of your choice`);


const subtype = subtypes[subtypeChoice];


if (!subtype) {
alert('Error. Please start over again.');
exit(1);
}


alert(subtype.message);


// Steg 4 - Ålder och storlek
let sizeOfFood = '';


const age = parseInt(prompt('Type your age so we can determine if the food is for an adult or a child. Age:'));


if (age >= 18) {
sizeOfFood = 'adult';
alert('You are an adult');
} else if (age > 0 && age < 18) {
sizeOfFood = 'child';
alert('You are a child');
} else {
alert('You have typed in the wrong age. Please reload the page.');
exit(1);
}


// Steg 5 - Beställningsbekräftelse
const order = prompt(`One ${sizeOfFood}-sized ${subtype.name} will be prepared now. That will be 10 dollars. Do you want to go through with your order? Type "1" to go through with your order and "2" to cancel it`);


if (order === '1') {
alert('Thank you for your order! You can pick it up soon!');
} else if (order === '2') {
alert('You have canceled your order. Hope to see you next time!');
} else {
alert('Error! Start over again');
exit(1);
}

