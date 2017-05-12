/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

const test = 'Hello World';

const reverseCase = (str) => {
  let newStr = '';
  for (let i = 0, len = str.length; i < len; i++) {
    if (str[i] === str[i].toUpperCase()) newStr += str[i].toLowerCase();
    else newStr += str[i].toUpperCase();
  }
  return newStr;
};

console.log(test + ' is ' + reverseCase(test) + ' in funny casing.');
