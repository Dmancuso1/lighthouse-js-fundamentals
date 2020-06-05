const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
};
// Write a for loop that prints out the contents of ingredients:
for (let n = 0; n < ingredients.length; n++) {
  console.log(ingredients[n]);
};
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let n = ingredients.length -1; n >= 0; n--) {
  console.log(ingredients[n]);
};

