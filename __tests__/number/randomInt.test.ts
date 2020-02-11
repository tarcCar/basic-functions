import { randomInt } from '../../src/number';

describe('Number randomInt methods', () => {
  it('Should return just 0 and 1', () => {
    for (let i = 0; i < 100; i++) {
      const result = randomInt();
      expect(result === 0 || result === 1).toBeTruthy();
    }
  });

  it('Should return an integer between between 0 and 5', () => {
    for (let i = 0; i < 100; i++) {
      const result = randomInt(5);
      expect(Number.isInteger(result)).toBeTruthy();
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(5);
    }
  });

  it('Should return an integer between number between 0 and 5', () => {
    for (let i = 0; i < 100; i++) {
      const result = randomInt(0, 5);
      expect(Number.isInteger(result)).toBeTruthy();
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(5);
    }
  });

  it('Should return an integer between 1 and 5 even parameter are decimals', () => {
    for (let i = 0; i < 100; i++) {
      const result = randomInt(1.2, 5.2);
      expect(Number.isInteger(result)).toBeTruthy();
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(5);
    }
  });
});
