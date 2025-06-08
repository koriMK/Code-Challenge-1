// Define the function
function calculateBodaFare(distanceInKm) {
  // Define the base fare and charge
  const baseFare = 50;
  const chargePerKm = 15;

  // Calculate distance fare
  const distanceFare = distanceInKm * chargePerKm;

  // Add the basefare to get the total fare
  const totalFare = baseFare + distanceFare;

  // Print to the console
  console.log(`Huko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka huko: KES ${distanceFare}`);
  console.log(`Total: KES ${totalFare}`);
  console.log(`\nPanda Pikipiki! 🛵`);
}

// Ask the user for the number of kilometers
const userInput = prompt("Unafika wapi mtu wangu? Kilometer ngapi?:");

// Convert the input to a number
const distanceInKm = Number(userInput);

// Validate input and call the functionAdd commentMore actions
if (!isNaN(distanceInKm) && distanceInKm > 0) {
  calculateBodaFare(distanceInKm);
} else {
  console.log("Please input valid kilometers greater than zero.");
}