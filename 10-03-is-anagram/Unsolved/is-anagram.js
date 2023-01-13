// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

const isAnagram = function (strA, strB) {
    let strAArr = strA.split("").sort().join("")
    let strBArr = strB.split("").sort().join("");

    if (strAArr == strBArr) {
        return true;
    }
    return false;
};

const strA1 = "abc";
const strB1 = "cba";

const strA2 = "octagonal";
const strB2 = "tganoalc";

const strA3 = "obsidian";
const strB3 = "danisboba";

const strA4 = "targaryen";
const strB4 = "gratawyen";

console.log(isAnagram(strA1, strB1));
console.log(isAnagram(strA2, strB2));
console.log(isAnagram(strA3, strB3));
console.log(isAnagram(strA4, strB4));