// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

const isUnique = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        const currentNum = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            const compareNum = arr[j];
            if (currentNum === compareNum) {
                return false;
            }
        }
    }
    return true;
};

const arr1 = [2, 8, 7, 5, 4, 3];
const arr2 = [];
const arr3 = [-2, 5, -2, 53, 22, 1];
const arr4 = [4, 4, 2, 9, 2, 9, 3, 3, 7, 3];

console.log(isUnique(arr1));
console.log(isUnique(arr2));
console.log(isUnique(arr3));
console.log(isUnique(arr4));