var baseFare = 50;
var chargePerKm = 15;
// This code calculates the fare for a boda boda ride based on the distance traveled.
function calculateBodaFare(distance) {
    console.log("Welcome to Boda Fare Calculator!");
    console.log("Enter the distance in kilometers:");

    distance = parseInt(prompt("Distance (in km): "), 10);

    // Checking if the distance is valid
    if (distance <= 0 || isNaN(distance) || distance === null) {
        return "Distance must be greater than zero.";
    } else {
        // Calculating the total fare based on the distance
        let totalFare = baseFare + (distance * 15);
        console.log("The total fare for " + distance + " km is: Ksh " + totalFare);
    }
    
}

calculateBodaFare(0);
