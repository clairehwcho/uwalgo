// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

const isPerfectSquare = function (num) {
    for (let i = 0; i <= num; i++) {
        if (num === i * i) {
            return true;
        }
    }
    return false;
};

const num1 = 9;
const expected1 = true;

const num2 = 1;
const expected2 = true;

const num3 = 0;
const expected3 = true;

const num4 = 7;
const expected4 = false;

const num5 = -9;
const expected5 = false;

console.log(isPerfectSquare(num1));
console.log(isPerfectSquare(num2));
console.log(isPerfectSquare(num3));
console.log(isPerfectSquare(num4));
console.log(isPerfectSquare(num5));