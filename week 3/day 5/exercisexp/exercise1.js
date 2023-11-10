const people = ["Greg", "Mary", "Devon", "James"];

//1. Write code to remove “Greg” from the people array.
const updatedPeople = people.slice(1);
console.log(updatedPeople); 

//2. Write code to replace “James” to “Jason”.
const nameToReplace = people.indexOf("James");
if (nameToReplace !== -1) {
  people[nameToReplace] = "Jason"; 
}
console.log(people);

//3. Write code to put my name "Akash"
const myName = "Akash";
people.push(myName); 
console.log(people);

//4. Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
const maryIndex = people.indexOf("Mary");
console.log(maryIndex, "is Mary's indexOf");

//5. Write code to make a copy of the people array using the slice method.
const excludedNames = ["Mary", "Akash"];
const filteredPeople = people.slice().filter(name => !excludedNames.includes(name));
console.log(filteredPeople); 

//6.  Write code that gives the index of “Foo”. Why does it return -1 ?
const indexOfFoo = people.indexOf("Foo");
console.log("This will print", indexOfFoo, "indicating that 'Foo' is not found in the array.");

//7. Create a variable called last which value is the last element of the array.
const last = people[people.length - 1];
console.log(last);

//Part 2. 1. Using a loop, iterate through the people array and console.log each person.
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

//Part 2. 1. Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);

  if (people[i] === "Devon") {
    break;
  }
}






