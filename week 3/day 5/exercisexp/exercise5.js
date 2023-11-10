const family = {
    father: "John",
    mother: "Sarah",
    son: "Akash",
    wife: "Anu",
    dog: "Bosco and piku",
};

// Using a for...in loop to console.log the keys of the object
console.log("Keys of the family object:");
for (let key in family) {
    console.log(key);
}

// Using a for...in loop to console.log the values of the object
console.log("Values of the family object:");
for (let key in family) {
    console.log(family[key]);
}
