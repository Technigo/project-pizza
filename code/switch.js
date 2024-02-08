// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

//step 1-a, Ask for customers name

let customerName = prompt(`What's your name?`);

// Exit if cancel
switch (customerName) {
  case null:
    alert(`Ok, bye!`);
    exit(1);

  default:
     break;
}
console.log('Customer name: ' + customerName);

//step 1-b, Greet customer
customerName = customerName == '' ? 'friend' : customerName;
alert(`YEY, great to see you ${customerName}!`);

// Step 2 - Food choice
// Your code goes here

//Ask customer for food choice
let foodChoice = prompt(
  `What would you like to eat, ${customerName}?

  Choose a number:
  1 - Pizza
  2 - Pasta
  3 - Salad`
);
console.log('Food input: ' + foodChoice);  // Log to console

// Confirm choice and convert menu number to text

switch (foodChoice) {
  case '1':
  case 'pizza':
    foodChoice = 'pizza';
    alert(`Sure thing! We'll make you a Pizza 🍕`);
    break;

  case '2':
    foodChoice = 'pasta';
    alert(`Good choice! One pasta coming up 🤤`);
    break;

  case '3':
    foodChoice = 'salad';
    alert(`Can't go wrong with a salad! 🥗`);
    break;

  // If 'Cancel' is clicked, exit program
  case null:
    alert(`Ok, bye!`);
    exit(1);
    break;

  // If no value is entered, ask again. I still no, cancel.
  default:
    foodChoice = prompt(
      `Sorry, that's not on the menu. These are your choices:

      1 - Pizza
      2 - Pasta
      3 - Salad`
    );
    switch (foodChoice) { // Translate
      case '1':
        foodChoice = 'pizza';
        break;

      case '2':
        foodChoice = 'pasta';
        break;

      case '3':
        foodChoice = 'salad';
        break;

      default:
        alert(`OK. Nothing for you then...`);
        throw Error('Not on the menu');
    };
}
console.log('Food choice: ' + foodChoice);  // Log to console

// Step 3 - Subtype choice
// Your code goes here

// Let customer choose sub type of dish
let subType;

switch (foodChoice) {
  case 'pizza':
    // Prompt customer to choose
    subType = prompt(
      `What kind of pizza would you like, ${customerName}?
      
      1 - With pineapple
      2 - Without pineapple`);

      console.log('Subtype input: ' + subType);  // Log to console
    // Convert menu number to text
    switch (subType) {
      case '1':
        subType = 'with pinapple';
        break;

      case '2':
        subType = 'without pinapple';
        break;

      case null:
        exit(1);

      default:
        subType = 'with pinapple';
        alert(
          `That's not a choice. You'll get pinapple 😘`);
        break;
    };
    break;

  case 'pasta':
    // Prompt customer to choose
    subType = prompt(`What type of pasta?

    1 - Spagetti
    2 - Penne`);
    console.log('Subtype input: ' + subType);  // Log to console

    // Convert menu number to text
    switch (subType) {
      case '1':
        subType = 'spagetti';
        break;

      case '2':
        subType = 'penne';
        break;
      
      case null:
        exit(1);

      default:
        subType = 'spagetti';
        alert(
          `That's not a choice. You'll get spagetti 😘`);
        break;
    };
    break;

  case 'salad':
    // Prompt customer to choose
    subType = prompt(`Which salad do you prefer, ${customerName}?

    1 - Chicken
    2 - Vegetarian`);
    console.log('Subtype input: ' + subType);  // Log to console

    // Convert menu number to text
    switch (subType) {
      case '1':
        subType = 'with chicken';
        break;

      case '2':
        subType = 'without chicken';
        break;

        case null:
          exit(1);

      default:
        subType = 'without chicken';
        alert(
          `That's not a choice. You'll get a vegetarian 😘`
        );
        break;
    };
    break;
}
console.log('Sub type: ' + subType);  // Log to console
alert(`Awesome, ${subType} it is.`)

// Step 4 - Age
// Your code goes here

// 4.a Prompt for age
const age = prompt(
  `Depending on your age, we'll make you a child or adult size portion. (No, you can't descide on your own).

  How old are you, ${customerName}?`
);
console.log('Age input: ' + age);  // Log to console

// Descide child or adult size portion
const isChild = (age < 18); // Is the customer under 18 yo?
const portionSize = isChild ? "A child's" : "An adult's"; // Set portion size to dispay in order message
console.log('Portion size: ' + portionSize);  // Log to console

// Set price
let price;

switch (foodChoice) {
  case 'pizza':
    price = isChild ? 90 : 125;
    break;

  case 'pasta':
    price = isChild ? 100 : 135;
    break;

  case 'salad':
    price = isChild ? 70 : 100;
    break;
}
console.log('Price: ' + price); // Log to console

// Alert price
alert(`${portionSize} portion is ${price} SEK.`);

// Prompt price confirmation
let priceConfirmation = prompt(
  `Is that OK?

  - YES
  - NO`
);
console.log('Price confirmation: ' + priceConfirmation); // Log to console

// Act on price confirmation
switch (priceConfirmation) {
  case 'YES': //if YES, continue to order confirmation
    break;

  default: // if NO or nothing, ask if order should be canceled
    priceConfirmation = prompt(
      `Ok, do you want to cancel your order?
    
      YES - Cancel my order
      NO - Price is OK`
    );
    console.log('Cancel order? ' + priceConfirmation); // Log to console

    // if "YES" cancel order, otherwise set to confirmed
    switch (priceConfirmation) {
      case 'YES':
        priceConfirmation = 'NO';
        alert('Ok, your order is cancelled. Bye!')
        console.log('Order cancelled'); // Log to console
        exit(1);
        break;

        default:
          priceConfirmation = 'YES';
          console.log('Continue to order confirmation');
          break;
    };  
    break;
}

// Prompt customer to onfirm order
const orderConfirmation = prompt(
  `Ok, so you've ordered ${portionSize.toLowerCase()} portion of ${foodChoice} ${subType} for ${price} SEK. Sounds good?

  - YES
  - NO`
);

console.log('Order confirmation: ' + orderConfirmation); // Log to console

// Display thank you
switch (orderConfirmation) {
  case 'YES':
    alert('Awesome! See you soon.');
    const displayOrder = () => {
      const orderMessage = document.getElementById('message');
      orderMessage.innerText = `Your Order:
      ${portionSize} portion of ${foodChoice} ${subType} for ${price} SEK`;
    };
    displayOrder();
    console.log('Order confirmed'); // Log to console
    break;

  case 'NO':
    case null:
    alert('No worries, come back another time.');
    console.log('Order cancelled'); // Log to console
    break;

  default:
    alert(`We'll take that as a yes, ${customerName}. Your order is on it's way!`)
    console.log('Order confirmed by default'); // Log to console
    break;
}

