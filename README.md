# Javascript Pizza Project

The goal of this project is learning about basic JavaScript concepts like variables, conditionals, and native methods. 

## The problem

This project was done in a couple of different steps to break down the process.

### Step 1 - Welcome and introduction
This step introduces the alert () method and prompt () method to greet the user as well as asking for the user’s name. 

### Step 2 - Food choice
The goal of this iteration is to allow the user to select the type of food they want to order. 
The program uses the prompt() method to present the user with a menu of food options and prompts them to enter a number corresponding to their choice. 
Based on the user's input, the program determines the chosen food type and displays a message using the alert() method to confirm the user's selection.

### Step 3 - Subtype choice
This step enables the user to choose a subtype of the selected food type. Depending on the previously chosen food type, the program presents the user with subtype options specific to that food type. 
The prompt() method is used to get the user's input. The program then determines the chosen subtype and provide feedback using the alert() method to confirm the selection.

### Step 4 - Age
In this step the program prompts the user to specify if the food is intended for a child or an adult (this relates to the size of the food as well as the prices for the different food subtypes). 
Based on the user's answer, a message is displayed to the user summarizing the food order and the associated cost as well as asking the user to confirm their order. This is done using the prompt() method.

### Step 5 - Order confirmation
The final step evaluates the user's confirmation and based on their input, a message will be displayed to the user using the alert() method.

The Javascript code is divided into two different files depending on which conditional statement that was mainly used.
In the file script.js file, if-statements are used while in the file switch.js, switch statements are also used.

The next step in this project that I wanna do, is to store all data regarding food subtypes and prices outside of the if-/switch_statements. This would make the code easier to scale as well as maintain since you would only have to change the code at one place instead of having to go through the code at different places if let's say a food subtype would be added or changed.

## View it live

The webpage can be viewed here: [javascript-pizza-project](https://javascript-pizza-project.netlify.app/)