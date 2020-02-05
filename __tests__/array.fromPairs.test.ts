import { fromPairs } from '../src/array';
describe('Array from pairs methdos', () => {
  it('Should make pairs form array', () => {
    const pairs = fromPairs([
      ['a', 1],
      ['b', 2],
    ]);
    expect(pairs).toStrictEqual({ a: 1, b: 2 });
  });
});
