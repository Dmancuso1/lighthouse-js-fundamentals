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