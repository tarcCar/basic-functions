import { inRange } from '../../src/number';

describe('Number inRange methdos', () => {
  it('Should return true if number 3 is between 2 and 6', () => {
    const s = 'goku is stronger than superman!';
    const result = inRange(3, 2, 6);
    expect(result).toBe(true);
  });

  it('Should return false if number 1 is between 2 and 6', () => {
    const result = inRange(1, 2, 6);
    expect(result).toBe(false);
  });

  it('Should return true if number -3 is between -2 and -6', () => {
    const s = 'goku is stronger than superman!';
    const result = inRange(-3, -2, -6);
    expect(result).toBe(true);
  });

  it('Should return false if number -1 is between -2 and -6', () => {
    const result = inRange(-1, -2, -6);
    expect(result).toBe(false);
  });
});
