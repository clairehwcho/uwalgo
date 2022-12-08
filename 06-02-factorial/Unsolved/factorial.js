// Write code to create a function that returns the factorial of `num`

var factorial = function (num) {
    let result = 1;

    for (let i = 1; i <= num; i++) {
        if (num === 0) {
            return 1;
        }
        else {
            result *= i;
        }
    }
    return result;
};

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(4));
