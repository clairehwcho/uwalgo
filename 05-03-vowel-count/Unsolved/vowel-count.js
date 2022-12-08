// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let currentLetter = str[i].toLowerCase();

        if (vowels.includes(currentLetter)) {
            count++;
        }
        // Alternative:
        // if (vowels.indexOf(currentLetter) !== -1){
        //     count++;
        // }
    }
    return count;
};

console.log(vowelCount("programmer"));
console.log(vowelCount("I think, therefore I am."));
console.log(vowelCount(""));
