// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

const characterCount = function (str) {
    const freqTableObj = {};

    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        if (freqTableObj.hasOwnProperty(currentChar)) {
            freqTableObj[currentChar]++;
        }
        else {
            freqTableObj[currentChar] = 1;
        }
    }
    return freqTableObj;
};

console.log(characterCount("Hello World!"));
