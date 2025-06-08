// my function
function calculateChaiIngredients() {

    const recipePerCup = {
        water: 200,
        milk: 50,
        teaLeaves: 1,
        sugar: 2
    };
// prompt user to enter number of chai cups they want to make 
const cupsInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = parseFloat(cupsInput);
// number of cups as arguments
if (isNaN(numberOfCups)){
    console.log("please enter a valid number of cups!");
    return;
}
if (numberOfCups <= 0) {
    console.log("Number of cups must be greater than zero");
    return;
}
//calculate the amout of each ingredients
const ingredients = {
water: recipePerCup.water * numberOfCups,
milk: recipePerCup.milk * numberOfCups,
 teaLeaves:recipePerCup.teaLeaves * numberOfCups,
 sugar: recipePerCup.sugar * numberOfCups
  };
 // printing the result to console clear and readable format.
 console.log(`\nTo make ${numberOfCups} ${numberOfCups === 1 ? 'cup' : 'cups'} of Kenyan Chai, you will need:`);
  console.log(`- Water: ${ingredients.water} ml`);
  console.log(`- Milk: ${ingredients.milk} ml`);
  console.log(`- Tea Leaves (Majani): ${ingredients.teaLeaves} tablespoon${ingredients.teaLeaves !== 1 ? 's' : ''}`);
  console.log(`- Sugar (Sukari): ${ingredients.sugar} teaspoon${ingredients.sugar !== 1 ? 's' : ''}`);
  console.log("\nEnjoy your Chai Bora!");
}

