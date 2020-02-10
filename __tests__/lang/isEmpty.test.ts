import { isEmpty } from '../../src/lang';

describe('Lang partial methdos', () => {
  it('Should returns true for empty object', () => {
    const result = isEmpty({});
    expect(result).toBe(true);
  });

  it('Should returns false for object with value', () => {
    const result = isEmpty({ foo: 'bar' });
    expect(result).toBe(false);
  });

  it('Should returns true for empty array', () => {
    const result = isEmpty([]);
    expect(result).toBe(true);
  });

  it('Should returns false for array with value', () => {
    const result = isEmpty(['foo']);
    expect(result).toBe(false);
  });

  it('Should returns true for null value', () => {
    const result = isEmpty(null);
    expect(result).toBe(true);
  });
});
