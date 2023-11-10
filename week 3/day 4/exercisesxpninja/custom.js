// Exercise 1 : Age Difference


function findHalfAgeYear(year1, year2) {
    // Convert birth years to integers
    const birthYear1 = parseInt(year1);
    const birthYear2 = parseInt(year2);

    // Find the age difference
    const ageDifference = Math.abs(birthYear2 - birthYear1);

    // Determine who is younger and older
    const youngerYear = birthYear1 < birthYear2 ? birthYear1 : birthYear2;
    const olderYear = birthYear1 < birthYear2 ? birthYear2 : birthYear1;

    // Find the year when the younger person is exactly half the age of the older
    const halfAgeYear = olderYear + Math.floor(ageDifference / 2);

    return halfAgeYear;
}

// Example usage
const year1 = "1990";
const year2 = "2000";
const result = findHalfAgeYear(year1, year2);
console.log("The year when the younger one is exactly half the age of the older is: " + result);


// Exercise 2 : Zip Codes
function validateZipCodeRegex(zipCode) {
    // Define a regular expression for a valid zip code
    const zipCodeRegex = /^\d{5}$/;

    // Check if the zip code matches the regular expression
    if (zipCodeRegex.test(zipCode)) {
        console.log('Success');
    } else {
        console.log('Error: Invalid zip code');
    }
}

// Example usage
const userZipCode = prompt('Enter your zip code:');
validateZipCodeRegex(userZipCode);


// Exercise 3 : Secret Word

function processWord() {
    // Prompt the user for a word
    const userWord = prompt('Enter a word:');

    // Validate if the user entered a non-empty string
    if (typeof userWord === 'string' && userWord.trim() !== '') {
        // Delete all vowels
        const wordWithoutVowels = userWord.replace(/[aeiou]/gi, '');

        // Replace vowels with specified characters
        const wordWithReplacedVowels = userWord.replace(/[aeiou]/gi, function (match) {
            switch (match.toLowerCase()) {
                case 'a':
                    return '1';
                case 'e':
                    return '2';
                case 'i':
                    return '3';
                case 'o':
                    return '4';
                case 'u':
                    return '5';
                default:
                    return match;
            }
        });

        // Console log the results
        console.log('Word without vowels:', wordWithoutVowels);
        console.log('Word with replaced vowels:', wordWithReplacedVowels);
    } else {
        console.log('Error: Please enter a valid word.');
    }
}

// Call the function
processWord();
