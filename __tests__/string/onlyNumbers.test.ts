import { onlyNumbers } from '../../src/string';

describe('String only numbers methods', () => {
  it('Should get only numbers', () => {
    const s = 'auhauhuha4auhuaheu2';
    const result = onlyNumbers(s);
    expect(result).toBe('42');
  });
  it('Should get only numbers from empty string without error', () => {
    const result = onlyNumbers(null);
    expect(result).toBe('');
  });
});
