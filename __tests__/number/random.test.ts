import { random } from '../../src/number';

describe('random', () => {
  it('Should return floating-point number between 0 and 1', () => {
    for (let i = 0; i < 100; i++) {
      const result = random();
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(1);
    }
  });

  it('Should return floating-point number between 0 and 5', () => {
    for (let i = 0; i < 100; i++) {
      const result = random(5);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(5);
    }
  });

  it('Should return floating-point number between 0 and 5', () => {
    for (let i = 0; i < 100; i++) {
      const result = random(0, 5);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(5);
    }
  });

  it('Should return floating-point number between 1.2 and 5.2', () => {
    for (let i = 0; i < 100; i++) {
      const result = random(1.2, 5.2);
      expect(result).toBeGreaterThanOrEqual(1.2);
      expect(result).toBeLessThanOrEqual(5.2);
    }
  });
});
