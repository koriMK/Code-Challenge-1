function calculateBodaFare(){
    const baseFare = 50;
    const chargePerKm = 15;

    const distanceInKm = parseFloat(prompt("Unafika wapi Mkubwa? Kilometer ngapi?:"));
//  estimate totalfare
    const distanceCharge = distanceInKm * chargePerKm;
    const totalFare = baseFare + distanceCharge;
// results to console in a user-friendly format
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceCharge}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("\nPanda Pikipiki!");

    }
