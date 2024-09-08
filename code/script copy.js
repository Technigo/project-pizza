// Step 1 - Welcome and introduction

const person = prompt("Please enter your name", "Harry Potter");

alert(`Hi ${person}`);

// Step 2 - Food choice

const food = prompt(
  "What type of food do you want? Enter a number: 1 - Pizza 2 - Pasta 3 - Salad",
  ""
);

const foodNumber = Number(food);

if (foodNumber >= 1 && foodNumber <= 3) {
  alert(`Great choice!`);
} else {
  alert(`Invalid input, please choose a number between 1-3`);
}

// Step 3 - Subtype choice

let selectedFoodType = "";

switch (food) {
  case "1":
    {
      const pizza = prompt(
        `What type of pizza do you want? 1 - Margerita 2 - Capricciosa 3 - Hawaii`,
        ""
      );
      if (pizza === "1") {
        selectedFoodType = "Margerita";
        alert(`${selectedFoodType} is a great choice!`);
      } else if (pizza === "2") {
        selectedFoodType = "Capricciosa";
        alert(`${selectedFoodType} is a great choice!`);
      } else if (pizza === "3") {
        selectedFoodType = "Hawaii";
        alert(`${selectedFoodType} is a great choice!`);
      } else {
        alert(`Invalid input, please choose a number between 1-3`);
      }
    }
    break;
  case "2":
    {
      const pasta = prompt(
        `What type of pasta do you want? 1 - Pomodoro 2 - Carbonara 3 - Arrabiata`,
        ""
      );
      if (pasta === "1") {
        selectedFoodType = "Pomodoro";
        alert(`${selectedFoodType} is a great choice!`);
      } else if (pasta === "2") {
        selectedFoodType = "Carbonara";
        alert(`${selectedFoodType} is a great choice!`);
      } else if (pasta === "3") {
        selectedFoodType = "Arrabiata";
        alert(`${selectedFoodType} is a great choice!`);
      } else {
        alert(`Invalid input, please choose a number between 1-3`);
      }
    }
    break;
  case "3": {
    const salad = prompt(
      `What type of salad do you want? 1 - Cucumner 2 - Tomato 3 - Carrot`,
      ""
    );
    if (salad === "1") {
      selectedFoodType = "Cucumber";
      alert(`${selectedFoodType} is a great choice!`);
    } else if (salad === "2") {
      selectedFoodType = "Tomoato";
      alert(`${selectedFoodType} is a great choice!`);
    } else if (salad === "3") {
      selectedFoodType = "Carrot";
      alert(`${selectedFoodType} is a great choice!`);
    } else {
      alert(`Invalid input, please choose a number between 1-3`);
    }
    break;
  }
  default:
    alert("Invalid food selection");
}

// Step 4 - Age
const age = prompt(`Is this food for a child or an adult? Type your age:`, "");

const ageString = () => {
  const ageNumber = Number(age);
  if (ageNumber <= 18) {
    return "child";
  } else if (ageNumber >= 18) {
    return "adult";
  } else {
    return alert(`Invalid Input, age is just a number!`);
  }
};

const ageResult = ageString();

// Step 5 - Order confirmation

const confirmation =
  prompt(`One ${ageResult} ${selectedFoodType} ordered! That'll be 150SEK. Do you want to proceed with the order? 
1 - Yes 
2 - No `);

if (confirmation === "1") {
  alert(`Thanks for your order!`);
} else {
  alert(`See you next time!`);
}
