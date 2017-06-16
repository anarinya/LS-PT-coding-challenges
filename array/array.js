/* Make a class called Array.
 * It should have the methods push, pop, get(index), and delete(index).
 * get and delete should accept an index and get or remove the item at that index.
 * Make sure to shift the array items after deleting an item.
 * In your implementation use a JS object to build the array.
 * Do NOT use an array as the underlying data structure, that's cheating :)
 * How do these operations compare to that of a linked list?
 * When would you want to use an array vs a linked list?
 */
class Array {
  constructor() {
    this.array = {};
  }

  get(index) {
    return `'${this.array[index]}'`;
  }

  delete(index) {

  }

  length() {
    let count = 0;
    for (let index in this.array) {
      count++;
    }
    return count;
  }

  max() {
    let max = 0;
    for (let index in this.array) {
      if (Number(index) > max) max = Number(index);
    }
    return max;
  }

  push(value) {
    const currentMax = this.max();
    const newIndex = currentMax > 0 ? currentMax + 1 : 0;
    console.log(`new index created for value ${value}: ${newIndex}`);
    console.log(`the current max value is ${currentMax}`);
    this.array[newIndex] = value;
  }

  pop() {

  }

  print() {
    let output = '[ ';
    for (let val in this.array) {
      this.max() == val ? output += `'${this.array[val]}' ]` : output += `'${this.array[val]}', `;
    }
    return output;
  }
}

const testArray = new Array();
testArray.push('what');
testArray.push('hello');
testArray.push('bye');
console.log(testArray.get(1));
console.log(testArray.length());
console.log(testArray.max());
console.log(testArray.print());