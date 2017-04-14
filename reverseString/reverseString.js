/*
  Write a function that accepts a string and returns a reversed copy of it.
  'Hello World' -> 'dlroW olleH'
*/

const reverseString = (str) => {
  return str.split('').reverse().join('');
};

/*
const reverseString = (str) => {
  let newStr = '';
  for (let i = str.length-1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};
*/