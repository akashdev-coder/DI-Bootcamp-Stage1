// Example 1
var sentence1 = 'This dinner is not that bad! You cook well';
var wordNot1 = sentence1.indexOf('not');
var wordBad1 = sentence1.indexOf('bad');

if (wordNot1 !== -1 && wordBad1 !== -1 && wordNot1 < wordBad1) {
    var result1 = sentence1.slice(0, wordNot1) + 'good' + sentence1.slice(wordBad1 + 3);
    console.log("Your string is: '" + sentence1 + "', \n--> the result is: '" + result1 + "'");
} else {
    console.log("Your string is: '" + sentence1 + "', \n--> the result is: '" + sentence1 + "'");
}

// Example 2
var sentence2 = 'This movie is not so bad!';
var wordNot2 = sentence2.indexOf('not');
var wordBad2 = sentence2.indexOf('bad');

if (wordNot2 !== -1 && wordBad2 !== -1 && wordNot2 < wordBad2) {
    var result2 = sentence2.slice(0, wordNot2) + 'good' + sentence2.slice(wordBad2 + 3);
    console.log("Your string is: '" + sentence2 + "', \n--> the result is: '" + result2 + "'");
} else {
    console.log("Your string is: '" + sentence2 + "', \n--> the result is: '" + sentence2 + "'");
}

// Example 3
var sentence3 = 'This dinner is bad!';
var wordNot3 = sentence3.indexOf('not');
var wordBad3 = sentence3.indexOf('bad');

if (wordNot3 !== -1 && wordBad3 !== -1 && wordNot3 < wordBad3) {
    var result3 = sentence3.slice(0, wordNot3) + 'good' + sentence3.slice(wordBad3 + 3);
    console.log("Your string is: '" + sentence3 + "', \n--> the result is: '" + result3 + "'");
} else {
    console.log("Your string is: '" + sentence3 + "', \n--> the result is: '" + sentence3 + "'");
}
