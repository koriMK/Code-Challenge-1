//the function of estimated transactional fee
    function estimateTransactionFee() {
  // prompt the anount of monry the wisher wish to send
  const feePercentage = 0.015; //  which is 1.5%
  const minFee = 10; 
  const maxFee= 70; 

  // Get user input
  const amountInput = prompt("Unatuma Ngapi? (KES):");
  const amountToSend = parseFloat(amountInput);

  // calculaytes the amount the user wishes to send
  if (isNaN(amountToSend) || amountToSend <= 0) {
    console.log("Tafadhali weka kiasi halali cha pesa!");
    return;
  }

  // Calculate fee
  let calculatedFee = amountToSend * feePercentage;
  
  // Apply minimum and maximum limits
  let transactionFee = Math.max(minFee, Math.min(calculatedFee, maxFee));
  
  // Round to 2 decimal places for currency
  transactionFee = Math.round(transactionFee * 100) / 100;

  // Calculate total amount
  const totalAmount = amountToSend + transactionFee;

  // results printed to console
  console.log(`\nSending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${transactionFee}`);
  console.log(`Total amount to be debited: KES ${totalAmount}`);
  console.log("\nSend Money Securely!");
}
