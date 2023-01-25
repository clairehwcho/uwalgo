// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

const isAnagram = function (strA, strB) {
    if (strA.length !== strB.length) {
        return false;
    }

    let strAFreqMap = {};
    let strBFreqMap = {};

    for (let i = 0; i < strA.length; i++) {
        const strACurrentLetter = strA[i];
        const strBCurrentLetter = strB[i];
        if (!strAFreqMap[strACurrentLetter]) {
            strAFreqMap[strACurrentLetter] = 1;
        }
        else {
            strAFreqMap[strACurrentLetter] += 1;
        }
        if (!strBFreqMap[strBCurrentLetter]) {
            strBFreqMap[strBCurrentLetter] = 1;
        }
        else {
            strBFreqMap[strBCurrentLetter] += 1;
        }
    }

    for (const key in strAFreqMap) {
        if (strAFreqMap[key] !== strBFreqMap[key]) {
            return false;
        }
    }
    return true;
};

// const isAnagram = function (strA, strB) {
//     let strAArr = strA.split("").sort().join("")
//     let strBArr = strB.split("").sort().join("");

//     if (strAArr == strBArr) {
//         return true;
//     }
//     return false;
// };

// var isAnagram = function (strA, strB) {
//     if (strA.length !== strB.length) {
//         return false;
//     }

//     var aLetterMap = {};
//     var bLetterMap = {};
//     var strLength = strA.length;

//     for (var i = 0; i < strLength; i++) {
//         var aLetter = strA[i];
//         var bLetter = strB[i];

//         aLetterMap[aLetter] = (aLetterMap[aLetter] || 0) + 1;
//         bLetterMap[bLetter] = (bLetterMap[bLetter] || 0) + 1;
//     }

//     for (var key in aLetterMap) {
//         if (aLetterMap[key] !== bLetterMap[key]) {
//             return false;
//         }
//     }

//     return true;
// };


const strA1 = "abc";
const strB1 = "cba";
const expected1 = true;

const strA2 = "octagonal";
const strB2 = "tganoalc";
const expected2 = true;

const strA3 = "obsidian";
const strB3 = "danisboba";
const expected3 = false;

const strA4 = "targaryen";
const strB4 = "gratawyen";
const expected4 = false;

console.log(isAnagram(strA1, strB1));
console.log(isAnagram(strA2, strB2));
console.log(isAnagram(strA3, strB3));
console.log(isAnagram(strA4, strB4));