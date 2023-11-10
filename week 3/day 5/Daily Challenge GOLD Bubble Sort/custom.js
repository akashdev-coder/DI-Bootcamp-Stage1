// Given array
const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

// Convert the array to a string using toString() method
const numbersToString = numbers.toString();
console.log("Array as string using toString():", numbersToString);

// Convert the array to a string using join() method with different separators
const joinPlus = numbers.join("+");
console.log("Array as string using join(+):", joinPlus);

const joinSpace = numbers.join(" ");
console.log("Array as string using join(' '):", joinSpace);

const joinEmpty = numbers.join("");
console.log("Array as string using join(''): ", joinEmpty);

// Bonus: Sorting the array in descending order using Bubble Sort
for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
        // Swap if the current element is smaller than the next element
        if (numbers[j] < numbers[j + 1]) {
            // Use a temporary variable to swap values
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}

// Display the sorted array
console.log("Sorted array in descending order using Bubble Sort:", numbers);
