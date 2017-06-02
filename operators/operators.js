/*
 * Implement three functions called multiply, divide, and modulo.
 * These functions should multiply, divide, or return the remainder of two arguments.
 * Now for the tricky part: you can only use + and - to implement these functions.
 * 
 */

const multiply = (a, b) => {
  // return zero if any number is zero
  if (a === 0 || b === 0) return 0;
  // handle sign
  if (a < 0) return 0-(multiply(0-a, b));
  else if (b < 0) return 0-(multiply(a, 0-b));
  else {
    let min = a, max = b, sum = 0;
    if (a >= b) {
      max = a;
      min = b;
    }
    for (let i = 0; i < min; i++) {
      sum += max;
    }
    return sum;
  }
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const modulo = (num1, num2) => {
  return num1 % num2;
};

module.exports = { multiply, divide, modulo };