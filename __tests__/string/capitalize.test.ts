import { capitalize } from '../../src/string';

describe('capitalize', () => {
  it('Should capitalize string', () => {
    const s = 'goku is stronger than superman!';
    const result = capitalize(s);
    expect(result).toBe('Goku Is Stronger Than Superman!');
  });

  it('Should capitalize empty string', () => {
    const result = capitalize(null);
    expect(result).toBe('');
  });
});
