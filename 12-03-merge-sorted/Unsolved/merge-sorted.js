// Write code to merge two sorted arrays into a new sorted array

const mergeSorted = function (arr1, arr2) {
    let mergedArr = [];
    for (let i = 0; i < arr1.length; i++) {
        const currentNum = arr1[i];
        mergedArr.push(currentNum);
    }

    for (let j = 0; j < arr2.length; j++) {
        const currentNum = arr2[j];
        mergedArr.push(currentNum);
    }

    mergedArr.sort((a, b) => a - b);

    return mergedArr;
};


const arr1a = [1, 3];
const arr1b = [2, 4];
const expected1 = [1, 2, 3, 4];

const arr2a = [3, 4, 8, 10, 13];
const arr2b = [];
const expected2 = [3, 4, 8, 10, 13];

const arr3a = [12, 13, 20, 51];
const arr3b = [8, 14, 40, 41, 43, 50];
const expected3 = [8, 12, 13, 14, 20, 40, 41, 43, 50, 51];

console.log(mergeSorted(arr1a, arr1b));
console.log(mergeSorted(arr2a, arr2b));
console.log(mergeSorted(arr3a, arr3b));