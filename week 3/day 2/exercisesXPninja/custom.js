// 5 is greater than or equal to 1
console.log(5 >= 1); // Output: true
// 0 is strictly equal to 1
console.log(0 === 1); // Output: false
// 4 is less than or equal to 1
console.log(4 <= 1); // Output: false
// 1 is not equal to 1
console.log(1 != 1); // Output: false
// "A" comes after "B" in the character set
console.log("A" > "B"); // Output: false
// "B" comes before "C" in the character set
console.log("B" < "C"); // Output: true
// "a" comes after "A" in the character set (case-sensitive)
console.log("a" > "A"); // Output: true
// "b" comes after "A" in the character set (case-sensitive)
console.log("b" < "A"); // Output: false
// true is strictly equal to false
console.log(true === false); // Output: false
// true is not equal to true
console.log(true != true); // Output: false


//exercise 2

var inputString = prompt("Enter a string of numbers separated by commas:");

var numbersArray = inputString.split(",");
var sum = 0;

for (var i = 0; i < numbersArray.length; i++) {
    sum += parseInt(numbersArray[i]);
}

console.log("Sum of the numbers:", sum);

//exercise 3

// Prompt the user for a sentence containing the word "Nemo"
const userSentence = prompt("Please enter a sentence containing the word 'Nemo':");

// Convert the user input to lowercase to make the search case-insensitive
const lowercaseSentence = userSentence.toLowerCase();

// Find the position of the exact word "nemo" as a whole word
const nemoIndex = lowercaseSentence.indexOf("nemo");

// Check if "Nemo" is found and log the result
if (nemoIndex !== -1) {
    // Calculate the position of "Nemo" in the original sentence
    const wordsBeforeNemo = userSentence.slice(0, nemoIndex).split(" ");
    const nemoPosition = wordsBeforeNemo.length - 1;

    console.log(`I found Nemo at ${nemoPosition}`);
} else {
    console.log("I can't find Nemo");
}


function boomNumber(num) {
    let result = "";

    if (num < 2) {
        result = "boom";
    } else {
        result = "B" + "o".repeat(num) + "m";
        if (num % 2 === 0) {
            result += "!";
        }
        if (num % 5 === 0) {
            result = result.toUpperCase();
        }
        if (num % 2 === 0 && num % 5 === 0) {
            result += "!";
        }
    }

    return result;
}

// Prompting the user for a number
let userNumber = parseInt(prompt("Enter a number:"));
let resultString = boomNumber(userNumber);
console.log(resultString);
