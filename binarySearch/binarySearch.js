/*
 * Given a sorted array, find the index of the specified element
 * using binary search.
 * https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
 * https://en.wikipedia.org/wiki/Binary_search_algorithm
 * */

/**
const index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
 *	* console.log(index); // 1
**/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const binarySearch = (nums, target) => {
  let hi = nums.length - 1;
  let low = 1;
  let guess;

  while (low <= hi) {
    guess = low + (hi - low) / 2;

    if (nums[guess] === target) return guess;
    else if (nums[guess] < target) low = guess + 1;
    else hi = guess - 1;
  }
  return -1;
};

console.log(binarySearch(arr, 5));