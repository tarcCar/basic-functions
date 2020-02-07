import { takeRight } from '../src/array';
describe('Array takeRight methdos', () => {
  it('Should get all element of array but first', () => {
    const array = takeRight([1, 2, 3, 4, 5], 4);
    expect(array).toStrictEqual([2, 3, 4, 5]);
  });

  it('Should get last element of array', () => {
    const array = takeRight([1, 2, 3, 4, 5], 1);
    expect(array).toStrictEqual([5]);
  });
  it('Should get two last elements of array', () => {
    const array = takeRight([1, 2, 3, 4, 5], 2);
    expect(array).toStrictEqual([4, 5]);
  });
});
