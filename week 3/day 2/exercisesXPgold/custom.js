let sentence = ["my", "favorite", "color", "is", "blue"];

const result = sentence.join(" ");
console.log(result); // Output: "my favorite color is blue"


let str1 = "mix";
let str2 = "pod";

let newStr1 = str2.slice(0, 2) + str1.slice(2);
let newStr2 = str1.slice(0, 2) + str2.slice(2);

let concatenatedStr = newStr1 + " " + newStr2;

console.log(concatenatedStr);


//Exercise 2


let num1 = prompt("Enter the first number:");

num1 = parseFloat(num1);

let num2 = prompt("Enter the second number:");

num2 = parseFloat(num2);

let sum = num1 + num2;
alert("Sum: " + sum);

let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
