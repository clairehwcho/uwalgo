// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

const linearSearch = function (arr, target) {
    for (let i = 0; i < arr.length; i++) {
        const currentNum = arr[i];
        if (currentNum === target) {
            return i
        }
    }
    return -1;
};

const arr1 = [8, 22, 3, 0, -2];
const target1 = 3;

const arr2 = [13, 5, 6];
const target2 = 11;

const arr3 = [];
const target3 = 0;

console.log(linearSearch(arr1, target1))
console.log(linearSearch(arr2, target2))
console.log(linearSearch(arr3, target3))