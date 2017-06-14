/* Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */
const str1 = 'abcdefg';
const str2 = 'abcdefgg';

const isUnique = (str) => {
  let checked = [];

  for (let i = 0; i < str.length; i++) {
    if (checked.indexOf(str[i]) !== -1) return false;
    checked.push(str[i]);
  }
  return true;
};

console.log(isUnique(str1));
console.log(isUnique(str2));