// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

const mostSongsInPlaylist = function (arr) {
  arr = arr.sort((a, b) => a - b);
  console.log(arr);

  let sum = 0;
  let numOfSongs = 0;
  let i = 0;

  while (sum <= 60) {
    const currentSong = arr[i];
    sum += currentSong;
    if (sum <= 60) {
      i++;
      numOfSongs++;
    }
  }
  return numOfSongs;
};

const arr1 = [3, 5, 7, 2, 1, 4, 8, 5, 3, 2, 2, 1, 5, 7, 4, 2, 3, 1, 3, 4, 7, 8, 8, 2]
const expected1 = 19;

const arr2 = [3, 4, 2, 1, 7, 5, 3];
const expected2 = 7;

const arr3 = [];
const expected3 = 0;

console.log(mostSongsInPlaylist(arr1));
console.log(mostSongsInPlaylist(arr2));
console.log(mostSongsInPlaylist(arr3));