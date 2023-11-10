// Exercise 1 : Divisible By Three


let numbers = [123, 8409, 100053, 333333333, 7];

for (let i = 0; i < numbers.length; i++) {
    let isDivisibleByThree = numbers[i] % 3 === 0;
    
    console.log(isDivisibleByThree);
}

// Exercise 2 : Attendance

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
};

let studentName = prompt("Enter your name:");

if (studentName in guestList) {
  console.log(`Hi! I'm ${studentName}, and I'm from ${guestList[studentName]}.`);
} else {
  console.log("Hi! I'm a guest.");
}



// Exercise 3 : Playing With Numbers


let age = [20, 5, 12, 43, 98, 55];

// 1. Console.log the sum of all the numbers in the age array.
let sum = 0;
for (let i = 0; i < age.length; i++) {
  sum += age[i];
}
console.log("Sum of all numbers:", sum);

// 2. Console.log the highest age in the array.
let highestAge = age[0];
for (let i = 1; i < age.length; i++) {
  if (age[i] > highestAge) {
    highestAge = age[i];
  }
}
console.log("Highest age:", highestAge);

