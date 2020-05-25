const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure to pick out a sscarf!");
}

console.log("Now you're ready to go outside!");


// lets do better than the above...

const temperature = -42;


if (temperature < -40 || temperature > 40) {
  console.log("Probably shouldn't go outside today!");
} 
else if (temperature < 0) {
  console.log("Make sure you pick out a scarf");
} 
else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
}
else {
  console.log("Short sleeves are fine.");
}
console.log("Now You're ready to go outsidse!");

const isCitizen = true;
const age = 26;

if(isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

