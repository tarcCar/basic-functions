import { extend } from '../../src/object';

describe('Object extend methdos', () => {
  it('Should extend two objects', () => {
    let foo = { a: '1' };
    let bar = { b: '2' };
    const result = extend({}, foo, bar);
    expect(result).toStrictEqual({ a: '1', b: '2' });
  });
});
