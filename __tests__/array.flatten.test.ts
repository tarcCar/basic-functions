import { flatten } from '../src/array';
describe('Array flatten methdos', () => {
  it('Should flatten one level deep', () => {
    const flat = flatten([1, [2, [3, [4]], 5]]);
    expect(flat).toStrictEqual([1, 2, [3, [4]], 5]);
  });
  it('Should flatten empty array', () => {
    const diff = flatten([]);
    expect(diff).toStrictEqual([]);
  });
  it('Should flatten null', () => {
    const diff = flatten(null);
    expect(diff).toStrictEqual([]);
  });
});
