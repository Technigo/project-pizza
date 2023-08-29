# Project Pizza

The assignment was to create a pizzeria handling orders simply by using Javascript, to excercise the use of variables, conditionals etc. 

## The problem

- One little thing is I wanted to add a break between the choices in the prompts, and found I could do it with "\n"
- I was first a little confused regarding how the prompt would be saved. I first wrote it excactly as alert(), but then quickly realized I needed to add const or let before it in order to save the value that the customer writes into the prompt. I tested this, and basically everything using console.log()
- I wanted my choices to be presented in new lines in the prompt-window, and found through google that \n works for this.
- When doing the if/else-statement, I ran into a problem with "===" comparing excactly what was typed into the prompt-window = which was a string not a number. In some cases I changed for example 'xxx === 3' to 'xxx == 3', I also tried changing 3 for "3", and later I made a new variable using the method parseInt. In the future I will choose one way to do this and stick to it, but here I wanted to utilize different ways to do it, and also show you guys I know different ways to solve this issue.
- It was really tricky to learn how to make switch cases, and especially nested switch cases. I googled a lot, and also the class we had with Diego on the first Tuesday helped a little. I had an issue with the last switch case always going to the default value. I solved this by replacing the variable created for the prompt with true, a solution I fould googling.

## Place of improvement

- I tried a little bit to stop the code from keeping to run after a final else or default alert, but if was tricky to get going. Since I felt the need to move on to other tasks I left it for now. 
- I decided to write my code without ";" after each line in this task, and tried to follow the "be consequent" rule. However, after speaking to my personal code coach at my current work place (where I will probably start working in the future) he told med that the ALWAYS write using ";", so in the next project I plan on doing it that way. 

## View it live

https://javascript-pizzeria-lauralyckholm.netlify.app/
