const foodChoices = {
  1: "Pizza 🍕",
  2: "Pasta 🍝",
  3: "Salad 🥗"
};

// Dynamically generate the food choices we have
let foodChoiceText = "\n";
Object.entries(foodChoices).forEach(choice => {
  foodChoiceText += `${choice[0]} - ${choice[1]} \n`;
});

const pizzaSubchoice = [{
    key: "1",
    name: "Margherita",
    adultPrice: 12,
    kidsPrice: 6
  }, {
    key: "2",
    name: "Napolitana",
    adultPrice: 14,
    kidsPrice: 7
  }, {
    key: "3",
    name: "Pepperoni",
    adultPrice: 18,
    kidsPrice: 9
  },
];

const pastaSubchoice = [{
  key: "1",
  name: "Spaghetti Carbonara",
  adultPrice: 13,
  kidsPrice: 6.50
}, {
  key: "2",
  name: "Fettucini Alfredo",
  adultPrice: 15,
  kidsPrice: 7.50
}, {
  key: "3",
  name: "Cheesy Tortellini",
  adultPrice: 16,
  kidsPrice: 8
},
];

const saladSubchoice = [{
    key: "1",
    name: "Ceasar",
    adultPrice: 10,
    kidsPrice: 5
  }, {
    key: "2",
    name: "Niçoise",
    adultPrice: 11,
    kidsPrice: 5.50,
  }, {
    key: "3",
    name: "Waldorf",
    adultPrice: 14,
    kidsPrice: 7
  }, {
    key: "4",
    name: "Caprese",
    adultPrice: 10.50,
    kidsPrice: 5.25
  },
];

// Helper function to generate the subchoice options that we have.
const getSubchoiceText = foodChoice => {
  let subchoiceText = "\n";
  let subchoice;

  // TODO: refactor
  // There's probably a better way to do this instead of hardcoding
  switch(foodChoices[foodChoice]) {
    // pizza
    case foodChoices["1"]:
      subchoice = pizzaSubchoice;
      break;
    // pasta
    case foodChoices["2"]:
      subchoice = pastaSubchoice;
      break;
    // salad
    case foodChoices["3"]:
      subchoice = saladSubchoice;
      break;
  }
  subchoice.forEach(choice => {
    subchoiceText += `${choice.key} - ${choice.name} \n`;
  });
  return subchoiceText;
}

// Helper function to that will give us the final choice of the user based on the
// food choice and subtype choice
const getFinalChoice = (foodChoice, subtypeChoice) => {

  // TODO: refactor
  // There's probably a better way to do this instead of hardcoding
  switch(foodChoices[foodChoice]) {
    // pizza
    case foodChoices["1"]:
      return pizzaSubchoice.find(choice => choice.key === subtypeChoice)
    // pasta
    case foodChoices["2"]:
      return pastaSubchoice.find(choice => choice.key === subtypeChoice)
    // salad
    case foodChoices["3"]:
      return saladSubchoice.find(choice => choice.key === subtypeChoice)
  }
}