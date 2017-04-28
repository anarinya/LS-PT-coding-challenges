/*
 * Sort an array of numbers using selection sort.
 * https://en.wikipedia.org/wiki/Selection_sort
 * https://www.khanacademy.org/computing/computer-science/algorithms/sorting-algorithms/a/sorting
 *
 * [1, 6, 2, 5, 3, 4] -> [1, 2, 3, 4, 5, 6]
 */
const test = [1, 6, 2, 5, 3, 4];

const swap = (arr, index1, index2) => {
  // store the first value
  let temp = arr[index1];
  // swap the values
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

const selectionSort = (arr) => {
  let min;
  for (let i = 0, len = arr.length; i < len; i++) {
    // set the smallest value to the current value
    min = i;

    // look at the next value
    for (let j = i + 1; j < len; j++) {
      // if the next value is less than the min value, set the min value to that value
      if (arr[j] < arr[min]) min = j;
    }
    // if the current value isn't the same as the smallest value
    if (i != min) {
      // swap the current value and the minimum value
      swap(arr, i, min);
    }
  }
  return arr;
};

console.log(selectionSort(test));
