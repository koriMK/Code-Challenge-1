let numberOfCups = 0;
var water = 200;
var milk = 50;
var teaLeaves = 1;
var sugar = 2;

// This code calculates the ingredients needed to make a specified number of cups of chai.
function calculateChaiIngredients(numberOfCups) {
    console.log("Welcome to the Chai Calculator!");
    console.log("Please enter the number of numberOfCups:");
    numberOfCups = parseInt(prompt("Number of Cups: "), 10);
    // Checking if the number of cups is valid
    if (isNaN(numberOfCups) || numberOfCups <= 0 || numberOfCups === null) {
        console.log("Invalid number of Cups. Please enter a positive integer.");
        return;
    } else {
        // Calculating the total ingredients needed based on the number of cups
        let totalWater = numberOfCups * water;
        let totalMilk = numberOfCups * milk;
        let totalTeaLeaves = numberOfCups * teaLeaves;
        let totalSugar = numberOfCups * sugar;
        console.log(`To make ${numberOfCups} cups of chai one needs: `);
        console.log(`${totalWater} ml of water`);
        console.log(`${totalMilk} ml of milk`);
        console.log(`${totalTeaLeaves} tsp of tea leaves`);
        console.log(`${totalSugar} tsp of sugar`);
        console.log("Enjoy your cups of Tea!");
    }
}
calculateChaiIngredients(numberOfCups);
