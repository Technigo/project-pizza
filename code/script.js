// Step 1 - Welcome and introduction
alert(`Welcome to our Virtual Pizzeria. Ready to order? - Click 'OK' to begin.`);

//A statement which variable value will be the name the user enters.
const name = prompt(`Please enter your name:`);

//this will return an alert message with the name that the user typed in.
alert(`Hi ${name}, it's nice to see you here!`);

// Step 2 - Food choice

//the variable value parseInt is used to parse a string and return an integer. By using parseInt in this case we override the default data type (string) of a prompt and the user can only type a number to don't get an error.

const foodType = parseInt(
  prompt(
    `What would you like to order?

      Enter the number of your choice.
      1 - Pizza 
      2 - Hamburger
      3 - Salad`
  )
);

let foodSelected;

//Depending on which number the user choose above, the if statement will check if any of the if, else if och else statements is true and "create" a new variable with a new value that represent the number. Giving the number a name.

if (foodType === 1) {
  foodSelected = "Pizza";
} else if (foodType === 2) {
  foodSelected = "Hamburger";
} else if (foodType === 3) {
  foodSelected = "Salad";
} else {
  alert(
    `Couldn't you decide what to choose? 
      Please, start over and type the number representing what you want to eat.`
  );
  exit(1); //Will exit the application with a failure code if used correctly.
}

alert(`You chosed ${foodSelected}`);

// Step 3 - Subtype choice

let pizzaSelected;

//presents a new menu depending on which food type that was selected, and a nested if-statement to declare the food options number with a name.

if (foodType === 1) {
  const foodOption = parseInt(
    prompt(
      `What type of pizza would you like to order?
   
         Enter the number of your choice.
         1 - Napolitan
         2 - Margherita
         3 - Capricciosa`
    )
  );

  if (foodOption === 1) {
    pizzaSelected = "Napolitan";
  } else if (foodOption === 2) {
    pizzaSelected = "Margherita";
  } else if (foodOption === 3) {
    pizzaSelected = "Capricciosa";
  } else {
    alert(
      `Couldn't you decide what to choose? 
         Please, start over and type the number representing your choice.`
    );
    exit(1);
  }
}

let hamburgerSelected;

if (foodType === 2) {
  const foodOption = parseInt(
    prompt(
      `What type of hamburger would you like to order?
  
         Enter the number of your choice.
         1 - Halloumi burger
         2 - Plant-based burger
         3 - Classic burger`
    )
  );

  if (foodOption === 1) {
    hamburgerSelected = "Halloumi burger";
  } else if (foodOption === 2) {
    hamburgerSelected = "Plant-based burger";
  } else if (foodOption === 3) {
    hamburgerSelected = "Classic burger";
  } else {
    alert(
      `Couldn't you decide what to choose? 
         Please, start over and type the number representing your choice.`
    );
    exit(1);
  }
}

let saladSelected;

if (foodType === 3) {
  const foodOption = parseInt(
    prompt(
      `What type of salad would you like to order?
 
         Enter the number of your choice.
         1 - Vegan salad
         2 - Caesar salad
         3 - Greek salad`
    )
  );

  if (foodOption === 1) {
    saladSelected = "Vegan salad";
  } else if (foodOption === 2) {
    saladSelected = "Caesar salad";
  } else if (foodOption === 3) {
    saladSelected = "Greek salad";
  } else {
    alert(
      `Couldn't you decide what to choose? 
         Please, start over and type the number representing your choice.`
    );
    exit(1);
  }
}

alert(`Good choice, you chosed to order a ${pizzaSelected || hamburgerSelected || saladSelected}`);

// Step 4 - Age

const age = parseInt(
  prompt(
    `Is this meal for a child or an adult? 
      Type your age:`
  )
);

if (age >= 15) {
  alert(
    `One adult sized ${pizzaSelected || hamburgerSelected || saladSelected} will be prepared for you.
      That will be €10`
  );
} else if (age <= 14) {
  alert(
    `One child sized ${pizzaSelected || hamburgerSelected || saladSelected} will be prepared for you.
      That will be €8`
  );
} else {
  alert(
    `Oops, we didn't get your age!
      We need to know your age to prepare an appropiate meal size. 
      Please start over and remember to fill in all of the input fields`
  );
  exit(1);
}

const orderConfirmation = parseInt(
  prompt(
    `Do you want to place the order?
      Enter the number that represents your choice:
      1 - Yes
      2 - No`
  )
);

// Step 5 - Order confirmation

if (orderConfirmation === 1) {
  alert(
    `Thank you for your order, your order will be ready in 20 min. 
      Bon appetit!`
  );
} else if (orderConfirmation === 2) {
  alert(
    `No problem, welcome back another time.
      Have a good day!`
  );
} else {
  alert(
    `We didn't get any confirmation if you wanted to place the order.
      Please start over if you still want to order.`
  );
  exit(1);
}
