// Write code to create a function that accepts a string and returns the string in camelCase

const str1 = "Hello World";
const expected1 = "helloWorld";

const str2 = "The rain in spain falls mainly on the plain";
const expected2 = "theRainInSpainFallsMainlyOnThePlain";

const camelCase = function (str) {
    let resultStr = "";
    let wordsArr = str.toLowerCase().split(" ");

    for (let i = 0; i < wordsArr.length; i++) {
        let currentWord = wordsArr[i];

        if (i > 0) {
            currentWord = currentWord.charAt(0).toUpperCase() + currentWord.slice(1);
        }
        resultStr += currentWord;
    }
    return resultStr;
};

const test = function (expectedReturn, actualReturn) {
    if (expectedReturn === actualReturn) {
        return "Correct solution\n------------------";
    }
    return "Incorrect solution\n------------------";
};

console.log(camelCase(str1));
console.log(test(expected1, camelCase(str1)));
console.log(camelCase(str2));
console.log(test(expected2, camelCase(str2)));