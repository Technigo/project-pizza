# Project-pizza


Javascript basics has been used to order a menu (x<sup>2</sup> alternatives) using:
```
* prompt (here- string inputs)
* alert methods
* template strings
* logical operators
* logical NOT operator
* ternary operators
* explicit conversions
```

Used:
**Conditional statements** + nested cond. statements (_to be avoided- but used for the exercise_)
(Stretched goals) **Switch statements** and an attempt to **array method**

**Note:** to switch between:
```
* script.js
* switch.js
* switch-array.js 
```
please activate or deactivate corresponding defer links in html with <!--   -->.

//alert(`Does the button ok always show up in alert?`) The answer is YES.
//the prompt method displays the string message exactly like written in the js code (Upper/Lowercase, à la ligne).

## The problem

Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next?

Debugging:

* Using console in inspect tool of browser to check for any error message and clicking on the msg to access to line and character position.
* Easier to understand where exactly the machine stopped reading the code if each alert msg is personalised within the algorithm 
(i.e. variable pastaChoice and pertaining alert msg invalid pasta choice etc)
e.g. missed/left undefined values for selectedMenu variable in the code, making the machine read it as false and continuing executing the code, resulting in an unexpected alert message not pertaining to the right block of code (unvisible to the eye if same alert msg for each alternative). 

* Omitted by error some break; (within first degree conditional statement) resulting in above outcome -same solution.

## View it live

Have you deployed your project somewhere? Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.

https://javascript-pizzeria.netlify.app/
