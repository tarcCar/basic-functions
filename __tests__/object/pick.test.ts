import { pick } from '../../src/object';

describe('Object pick methdos', () => {
  it('Should pick properties', () => {
    const object = { a: '1', b: '2', c: '3', d: '4', z: '45' };
    const result = pick(object, 'c', 'z');
    expect(result).toStrictEqual({ c: '3', z: '45' });
  });
});
