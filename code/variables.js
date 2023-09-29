const foodChoices = {
  1: "Pizza",
  2: "Pasta",
  3: "Salad"
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

// Dynamically generate the food choices we have
let pizzaSubchoiceText = "\n";
pizzaSubchoice.forEach(choice => {
  pizzaSubchoiceText += `${choice.key} - ${choice.name} \n`;
});

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

// Dynamically generate the food choices we have
let pastaSubchoiceText = "\n";
pastaSubchoice.forEach(choice => {
pastaSubchoiceText += `${choice.key} - ${choice.name} \n`;
});

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

// Dynamically generate the food choices we have
let saladSubchoiceText = "\n";
saladSubchoice.forEach(choice => {
saladSubchoiceText += `${choice.key} - ${choice.name} \n`;
});

const getChoice = (foodChoice, subtypeChoice) => {
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