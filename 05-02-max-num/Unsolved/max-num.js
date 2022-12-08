// Write code to return the largest number in the given array

var maxNum = function (arr) {
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];

        if (currentNum > max) {
            max = currentNum;
        }
    }
    return max;
};

console.log(maxNum([3, 1, 17, 5, 6]));