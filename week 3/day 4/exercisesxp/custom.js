// Exercise 1: Simple If/Else Statement

let x = 5;
let y = 2;

if (x > y) {
    console.log("x is the biggest number");
} else {
    console.log("y is the biggest number");
}


// Exercise 2: Chihuahua

let newDog = "Chihuahua";

console.log("Number of letters in newDog: " + newDog.length);

console.log("Uppercase: " + newDog.toUpperCase());

console.log("Lowercase: " + newDog.toLowerCase());

if (newDog === "Chihuahua") {
    console.log("I love Chihuahuas, it's my favorite dog breed");
} else {
    console.log("I don't care, I prefer cats");
}



// Exercise 2: Exercise 3: Even Or Odd
let userInput = parseInt(prompt("Enter a number:"));

if (userInput % 2 === 0) {
    console.log(userInput + " is an even number");
} else {
    console.log(userInput + " is an odd number");
}



// Exercise 4: Group Chat
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

// Check the number of users and display the appropriate message
if (users.length === 0) {
    console.log("No one is online");
} else if (users.length === 1) {
    console.log(users[0] + " is online");
} else if (users.length === 2) {
    console.log(users[0] + " and " + users[1] + " are online");
} else {
    const additionalUsers = users.length - 2;
    console.log(users[0] + ", " + users[1] + " and " + additionalUsers + " more are online");
}
