const menu = [
    {
        "type": "Pizza",
        "subtype": "Margarita",
        "cost": 150,
        "childcost": 100
    },
    {
        "type": "Pizza",
        "subtype": "Ham & Pineapple",
        "cost": 250,
        "childcost": 120
    },
    {
        "type": "Pizza",
        "subtype": "Vegan Delight",
        "cost": 300,
        "childcost": 150
    },
    {
        "type": "Pasta",
        "subtype": "Spaghetti Bolognese",
        "cost": 150,
        "childcost": 100
    },
    {
        "type": "Pasta",
        "subtype": "Gnocchi",
        "cost": 200,
        "childcost": 150
    },
    {
        "type": "Pasta",
        "subtype": "Penne and Parmesan",
        "cost": 100,
        "childcost": 50

    },
    {
        "type": "Salad",
        "subtype": "Ceasar salad",
        "cost": 150,
        "childcost": 100

    },
    {
        "type": "Salad",
        "subtype": "Greek salad",
        "cost": 150,
        "childcost": 50
    },
    {
        "type": "Salad",
        "subtype": "Watermelon salad",
        "cost": 150,
        "childcost": 120
    }
];

let orderType = [];
let order = [];
let ordertemp = [];
let orderjoin;



function ageCheck() {
    let age = parseInt(prompt("How old are you?"));

    if (age <= 0 || age > 124) {
        alert("invalid");
        ageCheck();
    }

    else if (age <= 5) {
        alert(age + " years? better get your parents to order, you are way to young to order food on you own!");
        ageCheck();
    }
    else if (age <= 15) {
        order.push(orderType[0].childcost);
        alert(age + " years? \n I guess you'll need a childrens portion. \n The total amount will be " + order[1] + " ByteCoin");
        checkOut();
    }
    else if (age >= 16) {
        order.push(orderType[0].cost);
        alert("Seems like you are old enough for a regular portion.\n The cost is " + order[1] + " ByteCoin");
        checkOut();
    }
    else {
        alert("invalid");
        ageCheck();
    }
}


function checkOut() {
    let confirm = prompt("You have ordered: " + order[0] + " \nThe cost is: " + order[1] + " ByteCoin" + " \n Do you want to proceed with the order?  \n Type 'Yes' for confirm or 'No' for cancel.");

    if (confirm == "yes") {
        alert("Thank you for ordering digital foods from us!\nYour bytesized " + order[0] + " is soon delivered through your WIFI.🛜");
    }
    else if (confirm == "no") {
        alert("😢 Sad to see you go, please come again for a byte");
    }
    else {
        alert("🤔 Hmmm I don't think that the is correct input, try again.");
        checkOut();
    }
}

var customer = prompt("welcome to Javascript pizzeria!👋🏼 \n I'm Luigi the pizzabot 👨🏻‍🍳 - what's your name? ", "What should we call you?");

while (customer === "What should we call you?") {
    customer = prompt("welcome to Javascript pizzeria!👋🏼 \n I'm Luigi the pizzabot 👨🏻‍🍳 - what's your name? ", "What should we call you?");
}


let food = parseInt(prompt("Welcome " + customer + " what would you like to eat today?\n" + " 🍕 " + menu[0].type + " Press 1\n  🍝 " + menu[3].type + " Press 2 \n  🥗 " + menu[6].type + " Press 3"));

while ((food !== 1) && (food !== 2) && (food !== 3)) {
    food = parseInt(prompt("Welcome " + customer + " what would you like to eat today?\n" + " 🍕 " + menu[0].type + " Press 1\n  🍝 " + menu[3].type + " Press 2 \n  🥗 " + menu[6].type + " Press 3"));
}

switch (food) {

    case 1:
        let pizzaOption = parseInt(prompt("Press 1 for 🍕 " + menu[0].subtype + " \n press 2 for  🍍🐷 " + menu[1].subtype + "  \n press 3 for 🥬🍕 " + menu[2].subtype));
        switch (pizzaOption) {
            case 1:
                orderType.push(menu[0]);

                ordertemp.push(menu[0].type);
                ordertemp.push(" ");
                ordertemp.push(menu[0].subtype);
                orderjoin = (ordertemp.join(""));
                order.push(orderjoin);
                console.log(orderType);
                console.log(order);
                alert("you chose " + order);
                ageCheck();
                break;

            case 2:
                orderType.push(menu[1]);

                ordertemp.push(menu[1].subtype);
                ordertemp.push(" ");
                ordertemp.push(menu[1].type);
                orderjoin = (ordertemp.join(""));
                order.push(orderjoin);
                alert("you chose " + order);
                ageCheck();
                break;

            case 3:
                orderType.push(menu[2]);
                ordertemp.push(menu[2].subtype);
                ordertemp.push(" ");
                ordertemp.push(menu[2].type);
                orderjoin = (ordertemp.join(""));
                order.push(orderjoin);
                alert("you chose " + order);
                ageCheck();
                break;

            default:
                alert("That's not on the menu");
                break;
        }
        break;
    case 2:
        let pastaOption = parseInt(prompt("Press 1 for 🍝 " + menu[3].subtype + " , \n press 2 for 🥟 " + menu[4].subtype + " \n press 3 for 🍜 " + menu[5].subtype));
        switch (pastaOption) {
            case 1:
                orderType.push(menu[3])
                order.push(menu[3].subtype)
                alert("you chose " + order);
                ageCheck();
                break;
            case 2:
                orderType.push(menu[4])
                order.push(menu[4].subtype)
                alert("you chose " + order);
                ageCheck();
                break;
            case 3:
                orderType.push(menu[5])
                order.push(menu[5].subtype)
                alert("you chose " + order);
                ageCheck();
                break;
            default:
                alert("Sorry that's not on the  menu")
                break;
        }
        break;

    case 3:
        let saladOption = parseInt(prompt("Press 1  🏛️🥬 for " + menu[6].subtype + " \n press 2 for 🇬🇷🥬 " + menu[7].subtype + " \n  press 3 for 🍉🥬  " + menu[8].subtype));
        switch (saladOption) {
            case 1:
                orderType.push(menu[6])
                order.push(menu[6].subtype)
                alert("you chose " + order);
                ageCheck();
                break;
            case 2:
                orderType.push(menu[7])
                order.push(menu[7].subtype)
                alert("you chose " + order);
                ageCheck();
                break;
            case 3:
                orderType.push(menu[8])
                order.push(menu[8].subtype)
                alert("you chose " + order);
                ageCheck();
                break;
            default:
                alert("Sorry that's not on the  menu")
                break;
        }
        break;
}



