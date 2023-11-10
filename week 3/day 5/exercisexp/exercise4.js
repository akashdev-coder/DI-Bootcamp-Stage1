const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        Sarah: [3, 990],
        Dan: [4, 1000],
        David: [1, 500],
    },
};

// Task 1: Console.log the number of floors in the building.
console.log("Number of floors in the building: " + building.numberOfFloors);

// Task 2: Console.log how many apartments are on the floors 1 and 3.
console.log("Number of apartments on the first floor: " + building.numberOfAptByFloor.firstFloor);
console.log("Number of apartments on the third floor: " + building.numberOfAptByFloor.thirdFloor);

// Task 3: Console.log the name of the second tenant and the number of rooms he has in his apartment.
const secondTenant = building.nameOfTenants[1];
const numberOfRoomsForSecondTenant = building.numberOfRoomsAndRent[secondTenant][0];

if (numberOfRoomsForSecondTenant !== undefined) {
    console.log(`Second tenant: ${secondTenant}, Number of rooms: ${numberOfRoomsForSecondTenant}`);
} else {
    console.log(`No information available for ${secondTenant}.`);
}

// Task 4: Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent.
// If it is, then increase Dan’s rent to 1200.
const sarahRent = building.numberOfRoomsAndRent.Sarah[1];
const davidRent = building.numberOfRoomsAndRent.David[1];
const danRent = building.numberOfRoomsAndRent.Dan[1];

if (sarahRent + davidRent > danRent) {
    console.log("Sum of Sarah's and David's rent is bigger than Dan's rent.");
    console.log("Increasing Dan's rent to 1200.");
    building.numberOfRoomsAndRent.Dan[1] = 1200;
}