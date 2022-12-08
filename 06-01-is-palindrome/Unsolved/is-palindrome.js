// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function (str) {
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


console.log(isPalindrome("racecar"));
console.log(isPalindrome("racingcar"));
