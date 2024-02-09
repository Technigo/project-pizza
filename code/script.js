// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria.🍕 Ready to Start? - Click 'OK' to begin.`
);

let userName = prompt("Write your name in the box below 👇");
alert("👋 Hello, " + userName + "! Click 'OK' to unlock the menu!");
console.log("Hello, " + userName + "!");

// Step 2 - Food choice
// Your code goes here
const foodType = prompt(
  `Choose your desired dish from the options below. Write the number of your choice and click 'OK'
  1 - Pizza 🍕
  2 - Pasta 🍝
  3 - Salad 🥗
  `
);

let selectedDish = "";

if (foodType === "1") {
  selectedDish = "Pizza 🍕";
} else if (foodType === "2") {
  selectedDish = "Pasta 🍝";
} else if (foodType === "3") {
  selectedDish = "Salad 🥗";
} else {
  alert(
    "🫢 Oops! It seems like you didn't select a dish. Please try again and write the corresponding number in the box."
  );
}

if (selectedDish !== "") {
  alert(
    `You've selected ${selectedDish}. Click 'OK' to explore available options.`
  );
}

console.log("type of food", selectedDish);

// Step 3 - Subtype choice
// Your code goes here
let selectedSubtype = "";

if (foodType === "1") {
  // Pizza
  selectedSubtype = prompt(
    `🍕 Choose your desired type of pizza. Write the number of your choice and click 'OK'.
     1 - Margherita 
     2 - Pepperoni 
     3 - Hawaiian 
    `
  );
  if (selectedSubtype === "1") {
    alert(
      "You've selected Margherita pizza. Excellent choice! ✨ Click 'OK' to continue."
    );
  } else if (selectedSubtype === "2") {
    alert(
      "You've selected Pepperoni pizza. Excellent choice! ✨ Click 'OK' to continue."
    );
  } else if (selectedSubtype === "3") {
    alert(
      "You've selected Hawaiian pizza. Excellent choice! ✨ Click 'OK' to continue."
    );
  } else {
    alert(
      "🫢 Oops! Invalid selection for pizza subtype. Please try again and write the corresponding number in the box."
    );
  }
} else if (foodType === "2") {
  // Pasta
  selectedSubtype = prompt(
    `🍝 Choose your desired type of pasta. Write the number of your choice and click 'OK'.
     1 - Fettucine
     2 - Pesto
     3 - Carbonara
    `
  );
  if (selectedSubtype === "1") {
    alert(
      "You've selected Fettucine. Excellent choice! ✨ Click 'OK' to continue."
    );
  } else if (selectedSubtype === "2") {
    alert(
      "You've selected Pesto. Excellent choice! ✨ Click 'OK' to continue."
    );
  } else if (selectedSubtype === "3") {
    alert(
      "You've selected Carbonara. Excellent choice! ✨ Click 'OK' to continue."
    );
  } else {
    alert(
      "🫢 Oops! Invalid selection for pasta subtype. Please try again and write the corresponding number in the box."
    );
  }
} else if (foodType === "3") {
  // Salad
  selectedSubtype = prompt(
    `🥗 Choose your desired type of salad. Write the number of your choice and click 'OK'.
     1 - Caesar 
     2 - Greek 
     3 - Caprese 
    `
  );
  if (selectedSubtype === "1") {
    alert(
      "You've selected Caesar salad. Excellent choice! ✨ Click 'OK' to continue."
    );
  } else if (selectedSubtype === "2") {
    alert(
      "You've selected Greek salad. Excellent choice! ✨ Click 'OK' to continue."
    );
  } else if (selectedSubtype === "3") {
    alert(
      "You've selected Caprese salad. Excellent choice! ✨ Click 'OK' to continue."
    );
  } else {
    alert(
      "🫢 Oops! Invalid selection for salad subtype. Please try again and write the corresponding number in the box."
    );
  }
}

// Step 4 - Age
// Your code goes here
const portionType = prompt(
  `👨‍👩‍👦 Please let us know which portion size you'd like with your order. Write the number of your choice and click 'OK'.
  1 - Small Portion: Ideal for children or those with smaller appetites.
  2 - Regular Portion: Perfect for adults or those with average appetites.
  `
);

let selectedCustomer = "";

if (portionType === "1") {
  const confirmation = prompt(
    `✨ Your order includes a Small Portion of ${selectedSubtype}. That'll be €8. Enter a number to confirm the order and then click 'OK'
    1 - Yes 🙌
    2 - No 👎`
  );
} else if (portionType === "2") {
  const confirmation = prompt(
    `✨ Your order includes a Regular Portion ${selectedSubtype}. That'll be €14. Enter a number to confirm the order and then click 'OK'
    1 - Yes 🙌
    2 - No 👎`
  );
} else {
  alert(
    "🫢 Oops! Invalid number. Please try again and write the corresponding number in the box."
  );
}

console.log("type of portion", portionType);

// Step 5 - Order confirmation
// Your code goes here
