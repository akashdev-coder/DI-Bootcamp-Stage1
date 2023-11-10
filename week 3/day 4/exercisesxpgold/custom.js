// Exercise 1 : The World Translator

var userLanguage = prompt("Which language do you speak?");

var lowercaseLanguage = userLanguage.toLowerCase();

switch (lowercaseLanguage) {
    case "french":
        alert("Bonjour");
        break;
    case "english":
        alert("Hello");
        break;
    case "hebrew":
        alert("Shalom");
        break;
    default:
        alert("01110011 01101111 01110010 01110010 01111001");
}


// Exercise 2 : The Grade Assigner


var userGrade = prompt("Enter your grade:");


var numericGrade = parseFloat(userGrade);


if (numericGrade > 90) {
    console.log("A");
} else if (numericGrade >= 80 && numericGrade <= 90) {
    console.log("B");
} else if (numericGrade >= 70 && numericGrade < 80) {
    console.log("C");
} else {
    console.log("D");
}


// Exercise 3 : Verbing


var userVerb = prompt("Enter a verb:");


if (userVerb.length >= 3 && !userVerb.endsWith("ing")) {
    
    console.log(userVerb + "ing");
} else if (userVerb.length >= 3 && userVerb.endsWith("ing")) {
  
    console.log(userVerb + "ly");
} else {
    
    console.log(userVerb);
}
