// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function (str) {
    let resultStr = "";
    let strToArr = str.split(" ");

    for (let i = 0; i < strToArr.length; i++) {
        strToArr[i] = strToArr[i].charAt(0).toUpperCase() + strToArr[i].slice(1);
    }

    resultStr = strToArr.join(" ");
    return resultStr;
};

console.log(titleCase("open a new browser tab"));