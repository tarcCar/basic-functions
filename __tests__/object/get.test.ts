import { get } from '../../src/object';

describe('Object get methdos', () => {
  it('Should get property value', () => {
    const object = { a: [{ b: { c: 3 } }] };
    const result = get(object, 'a[0].b.c', 1);
    expect(result).toBe(3);
  });
});
