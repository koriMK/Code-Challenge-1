var commission = (1.5/100);
var transactionFee = 10;


function estimateTransactionFee(amountToSend) {
    console.log("Welcome to the Mobile Money Transaction Fee Estimator!");
    console.log("Please enter the amount you want to send:");

    amountToSend = parseFloat(prompt("Amount to send (in Ksh): "));
    totalFee = amountToSend * commission;

    // Checking if the amount is valid
    if (isNaN(amountToSend) || amountToSend <= 0 || amountToSend === null) {
        console.log("Invalid amount. Please enter a positive number.");
        return;
    } else if (totalFee < 10) {
        // If the calculated fee is less than 10, it is set to 10
        totalFee = 10;
        let totalAmount = totalFee + amountToSend;
        console.log(`The estimated transaction fee for sending Ksh ${amountToSend} is: Ksh ${totalFee.toFixed(2)}`);
        console.log(`The total amount to be debited from your account is: Ksh ${(amountToSend + totalAmount).toFixed(2)}`);
    }   else if (totalFee >= 100) {
        // If the calculated fee is greater than or equal to 100, it is set to 100
        totalFee = 100;
        let totalAmount = totalFee + amountToSend;
        console.log(`The estimated transaction fee for sending Ksh ${amountToSend} is: Ksh ${totalFee.toFixed(2)}`);
        console.log(`The total amount to be debited from your account is: Ksh ${(totalAmount).toFixed(2)}`);
    } else {
        // If the calculated fee is between 10 and 100, it is used as is
        let totalAmount = totalFee + amountToSend;
        console.log(`The estimated transaction fee for sending Ksh ${amountToSend} is: Ksh ${totalFee.toFixed(2)}`);
        console.log(`The total amount to be debited from your account is: Ksh ${(totalAmount).toFixed(2)}`);
    }
}
estimateTransactionFee(0);
