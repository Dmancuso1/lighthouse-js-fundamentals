/* QUIZ REQUIREMENTS
* - Your code should have a variable `num` with a starting value of `99`
* - Your code should include a `while` loop
* - Your `while` loop should have a stop condition
* - Your code should produce the expected output, as explained above
* - Your code should not be empty
* - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
*/


var num = 99;

while (num >= 1) {
   // check value of num
   // print lyrics using num
   if (num === 1) {
       console.log(num + " bottle of juice on the wall! "+ num + " bottle of juice! Take one down, pass it around... " + (num-1) + " bottles of juice on the wall!")
   } else if (num === 2) {
       console.log(num + " bottles of juice on the wall! "+ num + " bottles of juice! Take one down, pass it around... " + (num-1) + " bottle of juice on the wall!")
   } else {
       console.log(num + " bottles of juice on the wall! "+ num + " bottles of juice! Take one down, pass it around... " + (num-1) + " bottles of juice on the wall!")
   }
   num--;
   // don't forget to check pluralization on the last line!
   // decrement num
}



/*
Orbiter transfers from ground to internal power (T-50 seconds)
Ground launch sequencer is go for auto sequence start (T-31 seconds)
Activate launch pad sound suppression system (T-16 seconds)
Activate main engine hydrogen burnoff system (T-10 seconds)
Main engine start (T-6 seconds)
Solid rocket booster ignition and liftoff! (T-0 seconds)
*/

// your code goes here
let ticker = 60;
while (ticker >= 0) {
    if (ticker === 50) {
        console.log("Orbiter transfers from ground to internal power");
    } else if (ticker === 31) {
        console.log("Ground launch sequencer is go for auto sequence start");
    } else if (ticker === 16) {
        console.log("Activate launch pad sound suppression system");
    } else if (ticker === 10) {
        console.log("Activate main engine hydrogen burnoff system");
    } else if (ticker === 6) {
        console.log("Main engine start");
    } else if (ticker === 0) {
        console.log("Solid rocket booster ignition and liftoff!");
    } else {
        console.log("T-" + ticker + " seconds");
    }
    ticker--;
}





/* Programming Quiz: Find my Seat (4-8)
* 
* Write a nested for loop to print out all of the different seat combinations in the theater.
* The first row-seat combination should be 0-0 
* The last row-seat combination will be 25-99
* 
* Things to note: 
*  - the row and seat numbers start at 0, not 1
*  - the highest seat number is 99, not 100
*/

/*
* QUIZ REQUIREMENTS
* - Your code should use a nested `for` loop'
* - Your code should produce the expected output, as explained above
*/

// Write your code here
for (let row = 0; row < 26; row++) {
   for (let seats = 0; seats < 100; seats++) {
       console.log(row + "-" + seats);
   }
}