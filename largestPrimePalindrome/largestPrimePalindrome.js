/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 */

const num = 929;

const isPalindrome = (n) => {
  return n === parseInt(n.toString().split('').reverse().join(''));
};

const isPrime = (n) => {
  const sqNum = Math.round(Math.sqrt(n));
  if (n % 2 === 0) return false;
  
  for (let i = 3; i < sqNum; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const largestLimitedPrimePalindrome = (limit) => {
  while (limit) {
    if (isPalindrome(limit)) {
      if (isPrime(limit)) return limit;
    }
  }

  return largestLimitedPrimePalindrome(limit--);
};

console.log(largestLimitedPrimePalindrome(1000));