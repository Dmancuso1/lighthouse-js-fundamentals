// Reversed the string argument input 
function reverseString(reverseMe) {
  let reversed = "";
  for (let i = reverseMe.length -1; i >= 0; i--) {
    reversed +=reverseMe[i];
  }
  return reversed;
}
console.log(reverseString("Dane Mancuso"));


sayHi("Julia");
function sayHi(name){
  var greeting = "Hello";
  console.log(greeting + " " + name);
  
}



/*
https://classroom.udacity.com/courses/ud803/lessons/a7c5b540-51a6-44dc-b2f2-515c9dd6ca4f/concepts/c746623a-eefd-4518-9890-2c5f320b0282
*/
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}
// your code goes here.  Make sure you call makeLine() in your own code. 
function buildTriangle(num) {
  var index = "";
  for (let i = 1; i <= num; i++){
      index += makeLine(i);
  }
  return index;
}
console.log(buildTriangle(10));

/*
https://classroom.udacity.com/courses/ud803/lessons/a7c5b540-51a6-44dc-b2f2-515c9dd6ca4f/concepts/2e042a55-4a17-4b26-ba49-d53b014b3f23
*/
// function expression catSays
let catSays = function(max) {
  var catMessage = "";
  for (var i =0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};
// function declaration helloCat accepting a callback
function helloCat(callBackFunc) {
  return "Hello " + callBackFunc(13);
}
// pass in catSays as a callback function
console.log(helloCat(catSays));


// INLINE FUCNTION EXPRESSIONS EXAMPLE:
/*
You can even pass a function into another function inline. This pattern is commonly used in JavaScript, and can be helpful streamlining your code.
*/

// function declaration that takes in two arguments: a function for displaying a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}
// call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");

// Another example:
function sports(messageFunc, nam) {
  messageFunc(nam);
}
sports(function displayFavoriteSport(sportName){
  console.log("My favorite sport is " + sportName);
}, "Golf");

// test comment for git



// Voting Station Calculation - Assignment
// good stations are either schools or community centres that have 20 or more capacity
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


const chooseStations = function(myStations) {
  const goodStations = [];
  for (const station of myStations){
    const name = station[0];
    const capacity = station[1];
    const place = station[2];
    if (((place === "school") || (place === "community centre")) && (capacity >= 20)) {
      goodStations.push(name);
    }
  }
  return goodStations;
}
// chooseStations(stations);
console.log(chooseStations(stations))





// fun with splicing...
// more info:
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
*/
var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
console.log(donuts.splice(-3, 0, "hehehe")); 
console.log(donuts);


// Array INLINE FUNCTION with FOR EACH  (can be used instead of for..loop)
let donutz = ['jelly donut', 'chocolate donut', 'glazed donut'];

donutz.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase()
  console.log(donut);
});

/* prints:
JELLY DONUT HOLE
CHOCOLATE DONUT HOLE
GLAZED DONUT HOLE
*/



//another FOR EACH EXAMPLE (INLINE)
words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});
/*
Prints:
Word 0 in cat,in,hat is cat
Word 1 in cat,in,hat is in
Word 2 in cat,in,hat is hat
*/
/*
Parameters
The function that you pass to the forEach() method can take up to three parameters. In the video, these are called element, index, and array, but you can call them whatever you like.

The forEach() method will call this function once for each element in the array (hence the name forEach.) Each time, it will call the function with different arguments. The element parameter will get the value of the array element. The index parameter will get the index of the element (starting with zero). The array parameter will get a reference to the whole array, which is handy if you want to modify the elements.
*/






/*
 * Programming Quiz: Another Type of Loop (6-8)
 * QUIZ REQUIREMENTS
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - Inside the loop, you must use an `if` statement to verify code is divisible by 3
 *  - Inside the loop, you can updade an element ONLY by using the arrayName[index]
 *  - Outside the loop, you can use `console.log` to verify the `test` variable 
 */

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Write your code here
test.forEach(function(element,index) {
  if (element % 3 === 0) {
        // The commented statements below would not be able to change the value of item
        // because the `item` is a COPY of actual element, while actual is test[index]
        // item = item + 100;
        // console.log("The updated element is "+item+" and actual is "+test[index]);
    test[index] += 100;
  }
});
console.log(test);










// MAP   =>     map()
let tims = ['jelly', 'chocolate glazed', 'plain glazed'];

// lets create a NEW array using existing array 'tims' utilizing the map() method!!!
var betterTims = tims.map(function(donut) {
  donut += ' donut';
  donut = donut.toUpperCase();
  return donut;
});
console.log(tims)
console.log(betterTims);


/*
 * Programming Quiz: I Got Bills (6-9)
 *
 * Use the .map() method to take the bills array below and create a second array
 * of numbers called totals. The totals array should contains each amount from the
 * bills array but with a 15% tip added. Log the totals array to the console.
 *
 * For example, the first two entries in the totals array would be:
 *
 * [57.76, 21.99, ... ]
 *
 * Things to note:
 *  - each entry in the totals array must be a number
 *  - each number must have an accuracy of two decimal points
 */
 
 /*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `bills` and `totals`
 * - Your `bills` array should call the `map()` method and store the return of `map()` in the `totals` array
 * - Your `totals` array should be an array of numbers
 * - Your code should print the `totals` array to the console
 * - The output must be as described above. 
 */
var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
var totals = bills.map(function(addTax) {
  addTax *=1.15;
  return Number(addTax.toFixed(2));
});
console.log(totals);






// 2 dimensional array ... example .. using two for loops...
var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche", "heheh"]
];

for (let row = 0; row < donutBox.length; row++) {
  for (let col = 0; col < donutBox[row].length; col++) {
    console.log(donutBox[row][col]);
  }
}