const fizzBuzz = require('./fizzBuzz');

describe('fizzBuzz', () => {
  it('should return "fizz" when a number is only divisible by 3.', () => {
    expect(fizzBuzz(3)).toBe('fizz');
    expect(fizzBuzz(6)).toBe('fizz');
  });

  it('should return "buzz" when a number is only divisible by 5.', () => {
    expect(fizzBuzz(5)).toBe('buzz');
    expect(fizzBuzz(10)).toBe('buzz');
  });

  it('should return "fizzbuzz" when a number is divisible by both 3 and 5.', () => {
    expect(fizzBuzz(15)).toBe('fizzbuzz');
    expect(fizzBuzz(30)).toBe('fizzbuzz');
  });

  it('should return the given number when it isn\'t divisible by either 3 or 5.', () => {
    expect(fizzBuzz(7)).toBe(7);
    expect(fizzBuzz(8)).toBe(8);
    expect(fizzBuzz(13)).toBe(13);
  });
});