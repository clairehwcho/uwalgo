// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

const arraySearch2D = function (arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++){
        for (let k = 0; i < arr[i].length; k++){
            if (arr[i][k] === 'X'){
                count++;
            }
        }
    }
    return count;

    // if (arr.flat().length !== 0) {
    //     arr.map((currentInnerArr) => {
    //         currentInnerArr.map((currentElement) => {
    //             if (currentElement === "X") {
    //                 count++;
    //             }
    //         })
    //     })
    // }
    // return count;
};

const arr1 = [["O", "O", "O"], ["X", "O", "O"], ["O", "O", "X"], ["O", "O", "X"]];
const expected1 = 3;

const arr2 = [["O", "O", "O"], ["O", "O", "O"]];
const expected2 = 0;

const arr3 = [[]];
const expected3 = 0;

console.log(arraySearch2D(arr1));
console.log(arraySearch2D(arr2));
console.log(arraySearch2D(arr3));