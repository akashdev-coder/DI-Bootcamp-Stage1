var favoriteFood = "pizza";
var favoriteMeal = "dinner";

console.log("I eat " + favoriteFood + " at every " + favoriteMeal);



// Exercise 2 : Series

// Part I
var myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
var myWatchedSeriesLength = myWatchedSeries.length;

var myWatchedSeriesSentence = myWatchedSeries.join(', ');

console.log(`I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`);

myWatchedSeries[2] = "friends";

myWatchedSeries.push("breaking bad");

myWatchedSeries.unshift("game of thrones");

myWatchedSeries.splice(0, 1);


console.log("Third letter of 'money heist': " + myWatchedSeries[1][2]);
console.log(myWatchedSeries);



// Exercise 3 : The Temperature Converter

var celsiusTemp = 33;
var fahrenheitTemp = (celsiusTemp * 9/5) + 32;

console.log(`${celsiusTemp}°C is ${fahrenheitTemp}°F`);


// Exercise 4 : Guess The Answers #1

let c;
let a = 34;
let b = 21;

console.log(a + b); // First expression
// Prediction: For the first expression console.log(a + b);, it will output 55. This is because a is assigned the value of 34, and b is assigned the value of 21. When you add them together, you get 55.
// Actual: 55

a = 2;

console.log(a + b); // Second expression
// Prediction: IFor the second expression console.log(a + b);, it will output 23. This is because a has been reassigned to the value of 2, while b still holds the value of 21. When you add them together, you get 23.

// Actual: 23
 
// What will be the outcome of a + b in the first expression ?
// For the first expression console.log(a + b);, the outcome is 55. This is because a is 34, and b is 21, so when you add them together, you get 55.

// What will be the outcome of a + b in the second expression ?
// For the second expression console.log(a + b);, the outcome is 23. This is because a has been reassigned to the value of 2, while b still holds the value of 21. When you add them together, you get 23.

// What is the value of c?
// The value of c is not assigned any value, so it is undefined by default.

// Analyse the code below, what will be the outcome?
// Analyzing the code console.log(3 + 4 + '5');, the outcome is "75." JavaScript first performs the addition of 3 and 4, resulting in 7. Then it concatenates "5" as a string to it, resulting in "75."



typeof(15)
// Prediction: 15.
// Actual: "number"

typeof(5.5)
// Prediction: 5.5.
// Actual: "number"

typeof(NaN)
// Prediction: Not-a-Number
// Actual: "number"

typeof("hello")
// Prediction: Hello
// Actual: "string"

typeof(true)
// Prediction: true
// Actual: "boolean"

typeof(1 != 2)
// Prediction:  true
// Actual: "boolean"

"hamburger" + "s"
// Prediction: "hamburgers"
// Actual: "string"

"hamburgers" - "s"
// Prediction: NaN
// Actual: NaN

"1" + "3"
// Prediction: "13"
// Actual: "string"

"1" - "3"
// Prediction: -2
// Actual: number

"johnny" + 5
// Prediction: johnny5
// Actual: string

"johnny" - 5
// Prediction: number
// Actual: NaN

99 * "hello"
// Prediction: number
// Actual: NaN

1 != 1
// Prediction: false
// Actual: false

1 == "1"
// Prediction: true
// Actual: true

1 === "1"
// Prediction: false
// Actual: false



// 5 + "34"
// Prediction: "534"
// Actual: String
// "4"
// Prediction: 1 
// Actual:Number

// 10 % 5
// Prediction: 0 
// Actual: Number

// 5 % 10
// Prediction: 5 
// Actual: Number

// "Java" + "Script"
// Prediction: "JavaScript" 
// Actual: String

// " " + " "
// Prediction: "  " 
// Actual: String

// " " + 0
// Prediction: "0" 
// Actual: String

// true + true
// Prediction: 2
// Actual: Number

// true + false
// Prediction: 1 
// Actual: Number

// 1false + true
//  Prediction: 1 
//  Actual: Number

// 1false - true
//  Prediction: -1 
//  Actual: Number

// 1!true
//  Prediction: false 
//  Actual: Boolean

// 3 - 4
//  Prediction: -1 
//  Actual: Number

// "Bob" - "bill"

// Prediction: Not-a-Number
// Actual: NaN 