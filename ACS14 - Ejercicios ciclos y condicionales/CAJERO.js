// Initialize the balance and the response variables
var balance = 1000;
var response = "";

// Loop until the user has finished
do {
  // Ask the user what they want to do
  response = prompt("What do you want to do? (Deposit, Withdraw, Balance)");

  // Process the response
  if (response == "Deposit") {
    // Ask the user for the amount and add it to the balance
    var amount = prompt("How much would you like to deposit?");
    balance += parseInt(amount);
  } else if (response == "Withdraw") {
    // Ask the user for the amount and subtract it from the balance
    var amount = prompt("How much would you like to withdraw?");
    balance -= parseInt(amount);
  }

// Continue looping while the user has not chosen "Balance"
} while (response != "Balance");

// Show the balance when the user has chosen "Balance"
alert("Your balance is: " + balance);