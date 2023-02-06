const multiplyInto20 = function (arr) {
  const numMap = {};

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];

    let neededNum = 20 / currentNum;

    if (numMap[neededNum]) {
      return true;
    }
    numMap[currentNum] = true;
  }
  return false;
};

// const multiplyInto20 = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const firstNum = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       const secondNum = arr[j];
//       if (firstNum * secondNum === 20) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

const arr1 = [2, 8, 7, 5, 4, 3];
const expected1 = true;

const arr2 = [4, 8, 15, 16, 23, 42];
const expected2 = false;

console.log(multiplyInto20(arr1));
console.log(multiplyInto20(arr2));