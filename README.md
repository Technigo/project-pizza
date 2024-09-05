Project: Pizzeria Fresco!

Pizzeria Fresco is ment to be; an interactive JavaScript-based bot that takes a user's order at a virtual pizzeria. It starts by greeting the user, asking for their name, and guiding them through choosing a dish from the menu. The bot also collects the user's age and provides an order confirmation.

The Problem

The primary challenges in this project were:

Properly handerling the Variables: Structuring the code to ensure variables were introduced at the correct time.

Initially, a lot of variables (like foodType or pizzaType) were embedded within conditional blocks (such as if statements), which led to scope issues. To fix this, I restructured the code so that these variables were declared in the right order.

Ensuring User Input Validation:
The goal was to continuously prompt the user until they provided a valid input. This was achieved using a while (true) loop, which only breaks when the user selects a valid option. If an invalid option is selected, the loop will prompt the user again.

If given more time, I would:

- Refactor the code: To clean it up further by breaking parts of the code into functions for better readability and maintainability.
- Extend Functionality: Allow more complex customizations, such as toppings for pizzas or dressings for salads.

View it Live:
Deployed Project: https://main--pizzeriafresco.netlify.app


