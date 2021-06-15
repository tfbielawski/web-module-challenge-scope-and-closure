# Scope and Closure Challenge

The module challenge is the afternoon project or assignment that students work through independently. This expands on the guided project completed earlier with the instructor.

## JavaScript Foundations

## Scope and Closures

## Objectives

- Explain function scope
- Describe what closure is, how closure is created in a program and why it is important to understand closures in JavaScript  

## Introduction

This challenge focuses on both scope and closures.

In this challenge you will be working to build a `scoreboard` (in the console) that takes randomly generated data and keeps track of a game's progress. If you're not familiar with the rules of baseball what you need to know is this: there are 9 innings and teams take turns "at-bat." Teams can only score while they are at bat. A team stops being at bat once they have gotten 3 `outs` by either striking out or through game play. You can read more about baseball rules [here](https://www.rulesofsport.com/sports/baseball.html).

A scoreboard in a major league stadium looks something like this. In fact, the scoreboard at Fenway Park in Boston is actually quite famous. 

![Fenway Scoreboard](https://storage.googleapis.com/afs-prod/media/media:e959506330fd4e5890023c93cfbaac55/800.jpeg)

There are layers upon layers of nested functions within the game of baseball. Your challenge today will be to work through tasks associated with these layers, and ultimately to produce a scoreboard that logs in the console.

## Instructions

### Task 1 - Set Up Project and Tests

1. Fork the repo
2. Clone your forked version of the repo
3. cd into your repo and create a branch with your first and last name
4. open the terminal in your vs code and type `npm install`
5. next type `npm run test:watch` in your terminal
6. Complete your work making regular commits, once you have all your tests passing and you are ready to submit your work please see canvas for instructions on how to submit

### Task 2a - MVP code

Find the file `index.js` and complete the tasks.

### Task 2b - Written questions

Edit the `ReadMe` file with your answers.

1. In your own words, define closure (1-2 sentences).
Closure occurs when a javascript function calls another function, and it happens at the the low-level function reaches outside of itself to access variables in the higher-level function. When the function completes, the variables are no longer accessible.

2. Study the following code, then answer the questions below.

```js
function personalDice(name)
{
  return function()
  {
      // generate random number between 1 and 6
    const newRoll = Math.floor(Math.random() * 6);
    console.log(`${name} rolled a ${newRoll}`)
  }
}

const dansRoll = personalDice("Dan");

const zoesRoll = personalDice("Zoe");


dansRoll();
dansRoll();
```

a. Where is closure used in this code? How can you tell?
Closure occurs in function() when consol.log reaches out to personalDice to get name


b. Compare and contrast calling `dansRoll` the first and second time. What is always the same? What could change?
Name (Dan) remains the same for each function invocation, while the number rolled changes for each function invocation. This is because dansRoll passes the argument "Dan" for each function invocation, but the random number generator is called to provide the number rolled each time.

c. What is the lexical scope of `newRoll`? 
Lexical scope means that the child has access to variables defined in the parent. newRoll has no children, but it resides within function() which resides within personalDice(). So, newRoll should have access to variables in both function() and personalDice(). 

### Task 3 - Stretch Goals

After you have completed the requirements, **create** a new file called `stretch.js` and practice more with closures. There are no tests for these problems.

See if you can complete one or more of the following challenges:

1. Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).

```js
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```

2. Research the differences between functional programming and object oriented programming. Then, describe the pros and cons of functional programming vs object-oriented programming. This is a common interview question and great practice!

Functional programming focuses on functions, methods, and variables. Functional programming is easier to work with. Objects in functional programming are not mutable once they are created. Functional programming code is easier to manage and maintain.

Object oriented programming focuses on using classes. Classes are a way to encapsulate code for reuse, for data protection, for streamlining code, 
OOP focuses on classes, objects, attributes, and methods. Class objects can hold a great deal of data, they can pass attributes to child classes, and they can manipulate or change the data in their structures (through methods). OOJ is more complicated than functional programming and more difficult to maintain, but offers a greater power to the developers.

## Resources

📚 [Scope and Closures Guide](https://css-tricks.com/javascript-scope-closures/)

🧠 ["I never Understood Closures" Blog](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)

## Submission Format

Please see Canvas for cohort specific submission instructions 
