// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

const arr1 = [4, 8, 15, 16, 23, 42];
const arr2 = [-10, -5, -2, -15, -1, -33, -88, -100];

// Using sort()
// const productOfLargestTwo = function (arr) {
//     const sortedArr = arr.sort((a, b) => (b - a));
//     const product = sortedArr[0] * sortedArr[1];

//     return product;
// };

// Using two for loops
const productOfLargestTwo = function (arr) {
    let largestNum = null;
    let secondLargestNum = null;

    for (let i = 0; i < arr.length; i++) {
        const currentNum = arr[i];
        if (currentNum > largestNum || largestNum === null) {
            secondLargestNum = largestNum;
            largestNum = currentNum;
        }
        else if (currentNum > secondLargestNum || secondLargestNum === null) {
            secondLargestNum = currentNum;
        }
    }
    const product = largestNum * secondLargestNum;
    return product;
};

// const productOfLargestTwo = function (arr) {
//     let largestNum = arr[0];
//     let secondLargestNum = arr[0];

//     for (let i = 0; i < arr.length; i++) {
//         const currentNum = arr[i];
//         if (currentNum > largestNum) {
//             largestNum = currentNum;
//         }
//     }

//     for (let j = 0; j < arr.length; j++) {
//         const currentNum = arr[j];
//         if (currentNum < largestNum && currentNum > secondLargestNum) {
//             secondLargestNum = currentNum;
//         }
//     }

//     const product = largestNum * secondLargestNum;

//     return product;
// };


console.log(productOfLargestTwo(arr1));
console.log(productOfLargestTwo(arr2));