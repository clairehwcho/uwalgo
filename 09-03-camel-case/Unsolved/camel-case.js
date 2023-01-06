// Write code to create a function that accepts a string and returns the string in camelCase

const str1 = "Hello World";
const str2 = "The rain in spain falls mainly on the plain";

const camelCase = function (str) {
    let resultStr = "";
    let arr = str.split(" ");

    for (let i = 0; i < arr.length; i++) {
        let currentWord = arr[i].toLowerCase();

        if (i === 0) {
            resultStr += currentWord;
        }
        else {
            camelCasedWord = currentWord.charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
            resultStr += camelCasedWord;
        }
    }
    return resultStr;
};

console.log(camelCase(str1));
console.log(camelCase(str2));