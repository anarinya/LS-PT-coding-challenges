/*
 * Implement the quick sort sorting algorithm. Assume the input is an array of integers.
 * https://en.wikipedia.org/wiki/Quicksort
 * https://www.khanacademy.org/computing/computer-science/algorithms#quick-sort
 */
const quickSort = (nums, left, right) => {
  const len = nums.length;
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(nums, pivot, left, right);
  }

  quickSort(nums, left, partitionIndex - 1);
  quickSort(nums, partitionIndex + 1, right);

  return nums;
};

const partition = (nums, pivot, left, right) => {
  const pivotValue = nums[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (nums[i] < pivotValue) {
      swap(nums, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(nums, right, partitionIndex);
  return partitionIndex;
};

const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};
console.log('hello');
console.log(quickSort([2, 22, 555, 7, -2, 93, 13]));