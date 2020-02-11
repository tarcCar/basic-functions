import { upperFirst } from '../../src/string';

describe('upper first', () => {
  it('Should upper first letter of string', () => {
    const s = 'goku';
    const result = upperFirst(s);
    expect(result).toBe('Goku');
  });

  it('Should upper first empty string without error', () => {
    const s = null;
    const result = upperFirst(s);
    expect(result).toBe('');
  });
});
