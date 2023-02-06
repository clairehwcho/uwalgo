// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

const zeroesAndOnes = function (str) {
    let countZeroes = 0;
    let countOnes = 0;

    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];

        if (currentChar === "1") {
            countOnes++;
        }
        else if (currentChar === "0") {
            countZeroes++;
        }
    }

    if (countZeroes === countOnes) {
        return true;
    }
    return false;
};

// const zeroesAndOnes = function (str) {
//     let freqMap = { "1": 0, "0": 0 };

//     for (let i = 0; i < str.length; i++) {
//         const currentNum = str[i];

//         if (currentNum === "1") {
//             freqMap["1"]++;
//         }
//         else {
//             freqMap["0"]++;
//         }
//     };

//     if (freqMap["1"] === freqMap["0"]) {
//         return true;
//     }
//     return false;
// };

const str1 = '10101010';
const expected1 = true;

const str2 = '00010';
const expected2 = false;

console.log(zeroesAndOnes(str1));
console.log(zeroesAndOnes(str2));