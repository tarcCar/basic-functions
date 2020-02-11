import { difference } from '../../src/array';
describe('Array difference methdos', () => {
  it('Should get differents elements from arrays', () => {
    const diff = difference([1, 2, 3, 4, 5], [5, 2, 10]);
    expect(diff).toStrictEqual([1, 3, 4]);
  });
  it('Should get differents elements from emptys arrays', () => {
    const diff = difference([], []);
    expect(diff).toStrictEqual([]);
  });
  it('Should get differents elements from null arrays', () => {
    const diff = difference([1], null);
    expect(diff).toStrictEqual([1]);
  });
});
