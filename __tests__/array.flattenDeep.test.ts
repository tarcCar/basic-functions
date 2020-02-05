import { flattenDeep } from '../src/array';
describe('Array flatten deep methdos', () => {
  it('Should flatten deep', () => {
    const flat = flattenDeep([1, [[2], [3, [4]], 5]]);
    expect(flat).toStrictEqual([1, 2, 3, 4, 5]);
  });
  it('Should flatten deep empty array', () => {
    const flat = flattenDeep([]);
    expect(flat).toStrictEqual([]);
  });
});
