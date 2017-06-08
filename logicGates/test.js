const { NAND, NOT, AND, OR, XOR } = require('./logicGates');

describe('Logic Gates', () => {
  describe('NAND', () => {
    it('should return 1 when two values are "false"', () => {
      expect(NAND(false, false)).toBe(1);
    });
    it('should return 0 when one value is "true" and one value is "false"', () => {
      expect(NAND(true, false)).toBe(0);
      expect(NAND(false, true)).toBe(0);
    });
    it('should return 0 when both values are "true"', () => {
      expect(NAND(true, true)).toBe(0);
    });
  });

  describe('NOT', () => {
    it('should return 1 when the given value is "false"', () => {
      expect(NOT(false)).toBe(1);
    });
    it('should return 0 when the given value is "true"', () => {
      expect(NOT(true)).toBe(0);
    });
  });

  describe('AND', () => {
    it('should return 1 when both values are "true"', () => {
      expect(AND(true, true)).toBe(1);
    });
    it('should return 0 when one value is "false"', () => {
      expect(AND(true, false)).toBe(0);
      expect(AND(false, true)).toBe(0);
    });
    it('should return 0 when both values are "false"', () => {
      expect(AND(false, false)).toBe(0);
    });
  });

  describe('OR', () => {
    it('should return 0 when both values are "false"', () => {
      expect(OR(false, false)).toBe(0);
    });
    it('should return 1 when either value is "true', () => {
      expect(OR(false, true)).toBe(1);
      expect(OR(true, false)).toBe(1);
    });
    it('should return 1 when both values are "true"', () => {
      expect(OR(true, true)).toBe(1);
    });
  });

  describe('XOR', () => {
    
  });
});