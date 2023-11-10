// Create two objects with person details and BMI calculation method
let person1 = {
  fullName: "John Doe",
  mass: 75, // in kilograms
  height: 1.75, // in meters
  calculateBMI: function () {
    return this.mass / (this.height * this.height);
  },
};

let person2 = {
  fullName: "Jane Smith",
  mass: 65, // in kilograms
  height: 1.60, // in meters
  calculateBMI: function () {
    return this.mass / (this.height * this.height);
  },
};

// Function to compare BMI and display the name of the person with the largest BMI
function compareBMI(personA, personB) {
  let bmiPersonA = personA.calculateBMI();
  let bmiPersonB = personB.calculateBMI();

  if (bmiPersonA > bmiPersonB) {
    console.log(personA.fullName + " has the largest BMI.");
  } else if (bmiPersonB > bmiPersonA) {
    console.log(personB.fullName + " has the largest BMI.");
  } else {
    console.log("Both have the same BMI.");
  }
}

// Compare the BMI of the two persons
compareBMI(person1, person2);



// Function to calculate the average of grades
function calculateAverage(gradesList) {
  let total = 0;

  // Summing up all the grades
  for (let i = 0; i < gradesList.length; i++) {
      total += gradesList[i];
  }

  // Calculating the average
  let average = total / gradesList.length;

  // Returning the calculated average
  return average;
}


// Exercise 2 : Grade Average

function findAvg(gradesList) {

  let average = calculateAverage(gradesList);


  console.log("Average:", average);


  if (average > 65) {
      console.log("Congratulations! You passed.");
  } else {
      console.log("Sorry, you failed. Please repeat the course.");
  }
}


let studentGrades = [75, 80, 60, 90];
findAvg(studentGrades);
