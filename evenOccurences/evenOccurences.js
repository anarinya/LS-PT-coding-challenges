/*
 *  * Find the first item that occurs an even number of times in an array.
 *   * Remember to handle multiple even-occurance items and return the first one. 
 *    * Return null if there are no even-occurance items.
 *    */

/*
 *  * example usage:
 *   * const onlyEven = evenOccurence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 *    * console.log(onlyEven); //  4
 *    */

const test = [1, 7, 2, 4, 5, 6, 8, 9, 6, 4];
const test2 = [1];

const evenOccurence = (arr) => {
  let firstEvenNum = null;

  for (let i = 0, len = arr.length; i < len; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i]) count++;
    }

    if (count % 2 === 0) {
      firstEvenNum = arr[i];
      break;
    }
  }
  return firstEvenNum;
};

console.log(evenOccurence(test));