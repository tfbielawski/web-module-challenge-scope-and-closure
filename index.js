/* Thomas Bielawski
** Lambda School Cohort: WEB45
** index.js
** Unit 1 Module 3 Week 1: scope & closure
** 6/14/2021
*/

// ⭐️ Example Challenge START ⭐️

/**Example Task : processFirstItem()
 * This example shows how you might go about solving the rest of the tasks
 * 
 * Use the higher order function processFirstItem below to do the following:
 *  1. Receive an array of strings in a parameter
 *  2. Receive a callback function that takes a string as its argument in a parameter
 *  3. Return the result of invoking the callback function and passing in the FIRST 
 *     element in the array as the argument
 * 
 * The following code is demonstrating a way of completing this task
 * It returns the string `foofoo`
*/

//Define the function, accept parameters stringList and callback()
function processFirstItem(stringList, callback) 
{
  //Return callback stringList array at index 0
  return callback(stringList[0])
}

/*Call and print the function. Pass in foo and bar as arguments; 
pass in a callback function "str" which returns str+str
JS sees that two items are being passed into one variable and makes stringList
into an array. 

Passing function(str) as an argument places it in the callback parameter,
making it accessible in the return statement. 

processFirstItem() triggers callback() which returns foo. Callback taks foo (str)
and concatenates it without spaces so we get "foofoo" */
console.log(processFirstItem(['foo','bar'],function(str){return str+str}));

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/*Task 1: counterMaker()
  
  Study the code for counter1 and counter2, then answer the questions below.
  
  1. What is the difference between counter1 and counter2?
  counter1 is a variable that holds the counterMaker() function. counterMaker() function
  calls a nested function called counter() which increments the variable count. It is a 
  higher-order function that receives another function.

  counter2() declares count as a global variable and attempts to increment count.
  It is a lower order function.

  2. Which of the two uses a closure? How can you tell?
  counter1 uses closure when counter() reaches out to counterMaker() to access
  the variable count.

  3. In what scenario would the counter1 code be preferable? In what scenario would 
  counter2 be better?  
  counter1 is preferable because it declares and initializes count within the
  function rather than doing so globally. 
  counter2 might be better in cases where the devs make a deliberate choice to
  declare and initialize counter globally so it can be accessed outside the 
  function(not best practice.).


*/

// counter1 defined, no parameters
function counterMaker() 
{
  //Declare and initialize count
  let count = 0;

  //return counter()
  return function counter() 
  {
    //Counter() increments and returns count
    return count++;
  }
}

//Declare counter1 and initialize it with the counterMaker() function
const counter1 = counterMaker();

// counter2
//Declare and initialize count
let count = 0;

//Define the function counter2()
function counter2() 
{
  //counter2() increments and returns count
  return count++;
}


/* ⚾️⚾️⚾️ Task 2: inning() ⚾️⚾️⚾️
Use the inning function below to do the following:
  1. Return a random whole number of points between 0 and 2 scored by one team in 
  an inning
  
  For example: invoking inning() should return a numerical score 
  value of 0, 1, or 2
  
NOTE: This will be a callback function for the tasks below
*/

//Define the function
function inning()
{
  //Declare numPoints to hold the random number
  //Math.random creates the random number between 1 & 3
  //Math.floor ensures the answer is rounded to a whole number
  //Random() * 3 makes range: 0,1,2. Adding +1 makes range 0,1,2,3
  const numPoints = Math.floor(Math.random() * 3);

  //Return the random number
  return numPoints;
}

//Call and print the function results
console.log(inning());


/* ⚾️⚾️⚾️ Task 3: finalScore() ⚾️⚾️⚾️
Use the finalScore function below to do the following:
  1. Receive the callback function `inning` that was created in Task 2 
  2. Receive a number of innings to be played
  3. After each inning, update the score of the home and away teams
  4. After the last inning, return an object containing the final (total) score of the innings played
  
  For example: invoking finalScore(inning, 9) might return this object:
{
  "Home": 11,
  "Away": 5
}
*/ 

//Define the function
function finalScore(innings, numInnings)
{
  //Declare and initialize variables to hold scores
  let homeTeam = 0;
  let awayTeam = 0;

  //For loop to iterate and assign values
  for (let i = 0; i <= numInnings; i++)
  {
    homeTeam += innings(); 
    awayTeam += innings();
  }
    
  //Return the
  return { Home: homeTeam, Away: awayTeam };
}


/* ⚾️⚾️⚾️ Task 4: getInningScore() ⚾️⚾️⚾️
Use the getInningScore() function below to do the following:
  1. Receive a callback function - you will pass in the inning function from task 2 as your argument 
  2. Return an object with a score for home and a score for away that populates from invoking the inning callback function */

  //Define the function, pass in inning()
  function getInningScore(inning) 
  {
    //Return the object
    return { Home : inning(), Away : inning(), }  
  }


/* ⚾️⚾️⚾️ Task 5: scoreboard() ⚾️⚾️⚾️
Use the scoreboard function below to do the following:
  1. Receive the callback function `getInningScore` from Task 4
  2. Receive the callback function `inning` from Task 2
  3. Receive a number of innings to be played
  4. Return an array where each of it's index values equals a string stating the
  Home and Away team's scores for each inning.  Not the cummulative score.
  5. If there's a tie at the end of the innings, add this message containing the score to the end of the array:  "This game will require extra innings: Away 12 - Home 12"  (see tie example below)
     If there isn't a tie, add this message to the end of the array: "Final Score: Away 13 - Home 11"  (see no tie example below)
  
  NO TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 2", 
  "Inning 2: Away 2 - Home 1",
  "Inning 3: Away 0 - Home 2", 
  "Inning 4: Away 2 - Home 2", 
  "Inning 5: Away 2 - Home 0", 
  "Inning 6: Away 1 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 2",
  "Inning 9: Away 1 - Home 0", 
  "Final Score: Away 11 - Home 12"  
]

  TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 1", 
  "Inning 2: Away 2 - Home 2",
  "Inning 3: Away 1 - Home 0", 
  "Inning 4: Away 1 - Home 2", 
  "Inning 5: Away 0 - Home 0", 
  "Inning 6: Away 2 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 1",
  "Inning 9: Away 1 - Home 1", 
  "This game will require extra innings: Away 10 - Home 10"
]  
  */

//Define the function
function scoreboard(finalScore, inning, numInnings)
{
  //Declare the team variables and initialize
  let homesTeam = 0;
  let awaysTeam = 0;

  //Declare an array to hold the inning stats
  let theBigGame = [];

  //For loop to iterate
  for (let i = 1; i <= numInnings; i++)
  {
    //Set the inning and score
    homesTeam = finalScore(inning, i).Home;
    awaysTeam = finalScore(inning, i).Away;

    //Display each inning and the score
    console.log("Inning ${i}: Away ${away} - Home ${home}");

    //Push the inning stats into the array
    theBigGame.push(`Inning ${i}: Away ${away} - Home ${home}`);
  }

  //If there is a tie
  if (away == home)
  { 
    //Print this
    return "This game will require extra innings: ${away} - ${home}"
  }

  //Return the array containing the inning stats
  return theBigGame;
}



/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
  //console.log('its working');
  return 'bar';
}
export default{
  foo,
  processFirstItem,
  counter1,
  counter2,
  inning,
  finalScore,
  getInningScore,
  scoreboard,
}
