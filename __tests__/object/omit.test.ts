import { omit } from '../../src/object';

describe('omit', () => {
  it('Should omit properties', () => {
    const object = { a: '1', b: '2', c: '3', d: '4', z: '45' };
    const result = omit(object, 'c', 'z');
    expect(result).toStrictEqual({ a: '1', b: '2', d: '4' });
  });
});
