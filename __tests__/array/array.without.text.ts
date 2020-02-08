import { without } from '../../src/array';
describe('Array without methdos', () => {
  it('Should get array without value', () => {
    const array = without([1, 2, 3, 4, 6, 7, 5, 6], 6);
    expect(array).toStrictEqual([1, 2, 3, 4, 7, 5]);
  });
});
