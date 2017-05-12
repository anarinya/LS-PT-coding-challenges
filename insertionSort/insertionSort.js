/**
 * Insertion sort is a basic sorting algorithm. Insertion sort
 * iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
 * https://en.wikipedia.org/wiki/Insertion_sort
 * https://www.khanacademy.org/computing/computer-science/algorithms#insertion-sort
 **/

// Example usage:
// insertionSort([2, 1, 3, 7, 4, 2, 9, 3, 8]); // yields [1, 2, 2, 3, 3, 4, 7, 8, 9]
const arr = [2, 1, 3, 7, 4, 2, 9, 3, 8];

const insertionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let currentVal = array[i];
    let prevIndex = i - 1;

    while (prevIndex >= 0 && array[prevIndex] > currentVal) {
      array[prevIndex + 1] = array[prevIndex];
      prevIndex--;
    }
    array[prevIndex + 1] = currentVal;
  }
  return array;
};

console.log(insertionSort(arr));
