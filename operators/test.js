const { multiply, divide, modulo } = require('./operators');

describe('operators', () => {
  describe('multiply', () => {
    it('should multiply two positive numbers', () => {
      expect(multiply(2,2)).toBe(4);
      expect(multiply(5,2)).toBe(10);
      expect(multiply(2,10)).toBe(20);
    });

    it('should multiply one positive and one negative number', () => {
      expect(multiply(2,-5)).toBe(-10);
    });

    it('should multiply by zero and become zero', () => {
      expect(multiply(-5,0)).toBe(0);
      expect(multiply(0,0)).toBe(0);
      expect(multiply(25,0)).toBe(0);
    });

    it('should multiply by 1 and become the second number', () => {
      expect(multiply(25,1)).toBe(25);
      expect(multiply(55,-1)).toBe(-55);
    });
  });

  describe('divide', () => {
    it('should divide correctly', () => {
      expect(divide(10,5)).toBe(2);
      expect(divide(25,5)).toBe(5);
      expect(divide(5,10)).toBe(0.5);
    });

  });

  describe('modulo', () => {
    it('should determine a remainder correctly', () => {
      expect(modulo(5,5)).toBe(0);
    });
  });
});