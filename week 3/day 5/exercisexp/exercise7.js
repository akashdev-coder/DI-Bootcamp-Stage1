const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// Extract the first letter of each name and sort them
const secretGroupName = names.map(name => name[0]).sort().join('');

console.log("Secret Society Name:", secretGroupName);
