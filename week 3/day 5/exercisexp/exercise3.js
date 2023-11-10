let userInput = prompt("Please enter a number:");

while (parseInt(userInput) < 10) {
  alert("Please enter a number greater than or equal to 10.");
  userInput = prompt("Please enter a new number:");
}

alert("You entered: " + userInput + "\nData type: " + typeof userInput);
