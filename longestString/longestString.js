/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

const arr = ['cat', 'dog', 'mouse', 'fish', 'octopus', 'pomeranian'];

const longestString = (arr) => {
  let max = arr[0];

  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
};

console.log(longestString(arr));

