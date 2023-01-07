// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

const isPalindrome = function (str) {
    for (let i = 0; i < str.length / 2; i++) {
        let frontIdx = i;
        let backIdx = str.length - i - 1;

        if (str[frontIdx] === str[backIdx]) {
        }
        else {
            return false;
        }
    }
    return true;
};

// const isPalindrome = function (str) {
//     const reversedStr = str.split("").reverse().join("");
//     if (str === reversedStr) {
//         return true;
//     }
//     return false;
// };


console.log(isPalindrome("racecar"));
console.log(isPalindrome("racingcar"));
